# AUTOGENERATED! DO NOT EDIT! File to edit: ../nbs/096_Docusaurus_Helper.ipynb.

# %% auto 0
__all__ = ['CustomNbdevLookup', 'fix_invalid_syntax_in_markdown', 'generate_markdown_docs', 'generate_sidebar',
           'delete_unused_markdown_files_from_sidebar', 'update_readme']

# %% ../nbs/096_Docusaurus_Helper.ipynb 2
import itertools
import re
import ast
import types
from inspect import (
    Signature,
    getmembers,
    isclass,
    isfunction,
    signature,
    ismethod,
    getsource,
    Parameter,
)
from pathlib import Path
from typing import *
from urllib.parse import urljoin
from functools import lru_cache

import typer
from docstring_parser import parse
from docstring_parser.common import (
    DocstringParam,
    DocstringRaises,
    DocstringReturns,
    Docstring,
)
from nbdev.config import get_config
from nbdev.quarto import nbdev_readme
from nbdev.doclinks import NbdevLookup, patch_name, L, _find_mod
from nbdev_mkdocs.mkdocs import (
    _add_all_submodules,
    _import_all_members,
    _import_functions_and_classes,
    _import_submodules,
)
from nbdev_mkdocs._helpers.doc_links_utils import (
    fix_sym_links as update_default_symbol_links,
)

# %% ../nbs/096_Docusaurus_Helper.ipynb 4
def _get_return_annotation(s: Signature) -> str:
    """Get the return annotation from the function signature.

    Args:
        s: The signature of the function from which the annotations must be extracted.

    Returns:
        The return annotation, or an empty string if not available.

    """
    if s.return_annotation == None or "inspect._empty" in str(s.return_annotation):
        return ""
    if isinstance(s.return_annotation, str):
        return s.return_annotation
    ret_val: str = (
        str(s.return_annotation).replace("typing.", "").replace("NoneType", "None")
        if "typing." in str(s.return_annotation)
        else str(s.return_annotation.__name__)
    )
    return ret_val

# %% ../nbs/096_Docusaurus_Helper.ipynb 19
def _get_param_annotation(param: Parameter) -> str:
    """Get the annotation of a function parameter.

    Args:
        param: The parameter object.

    Returns:
        The parameter annotation, or an empty string if not available.

    """

    if "typing." in str(param.annotation):
        return f'`{str(param.annotation).replace("typing.", "")}`'
    elif isinstance(param.annotation, str):
        return param.annotation
    else:
        return (
            ""
            if param.annotation.__name__ == "_empty"
            else f"`{param.annotation.__name__}`"
        )

# %% ../nbs/096_Docusaurus_Helper.ipynb 21
def _get_default_value(param: Parameter) -> str:
    """Get the default value of the function parameter.

    Args:
        param: The parameter object.

    Returns:
        The default value of the function parameter.

    """
    if param.default is param.empty:
        return "*required*"

    return (
        f"`'{param.default}'`"
        if isinstance(param.default, str)
        else f"`{param.default}`"
    )

# %% ../nbs/096_Docusaurus_Helper.ipynb 23
def _get_params_annotation(s: Signature) -> Dict[str, Dict[str, str]]:
    """Get the annotations along with its default values for the parameters of the symbol.

    Args:
        s: The signature of the function from which the annotations must be extracted.

    Returns:
        The parameter annotations along with its default value.
    """
    return {
        f"{param.name}": {
            "type": _get_param_annotation(param),
            "default": _get_default_value(param),
        }
        for param in s.parameters.values()
    }

# %% ../nbs/096_Docusaurus_Helper.ipynb 25
def _generate_parameters_table(
    symbol_annotations: Dict[str, Union[Dict[str, str], str]],
    section_items: Union[List[DocstringParam]],
    section_name: str,
) -> str:
    """Generate parameter table in markdown format

    Args:
        symbol_annotations: Symbol annotations along with its default value
        section_items: The parameter section of a parsed docstring
        section_name: The name of the section

    Returns:
        The parameters of a symbol in markdown-formatted string
    """
    nl = "\n"
    _section_template = (
        "|  Name | Type | Description | Default |\n|---|---|---|---|\n{section_body}\n"
    )
    section_body = "".join(
        [
            f'| `{section.arg_name}` | {symbol_annotations["parameters"][section.arg_name]["type"]} | {section.description.replace(nl, "")} | {symbol_annotations["parameters"][section.arg_name]["default"]} |\n'  # type: ignore
            if section.arg_name in symbol_annotations["parameters"]
            else ""
            for section in section_items
        ]
    )
    return f"**{section_name}**:\n\n" + _section_template.format(
        section_body=section_body,
    )

# %% ../nbs/096_Docusaurus_Helper.ipynb 27
def _generate_return_and_raises_table(
    symbol_annotations: Dict[str, Union[Dict[str, str], str]],
    section_items: Union[List[DocstringReturns], List[DocstringRaises]],
    section_name: str,
) -> str:
    """Generate return and raises table in markdown format

    Args:
        symbol_annotations: Symbol annotations along with its default value
        section_items: The parameter section of a parsed docstring
        section_name: The name of the section

    Returns:
        The return and raises section of a symbol in markdown-formatted string
    """
    nl = "\n"
    _section_template = "|  Type | Description |\n|---|---|\n{section_body}\n"
    section_body = "".join(
        [
            f'| `{symbol_annotations["return"] if section_name == "Returns" else section.type_name}` | {section.description.replace(nl, "")} |\n'  # type: ignore
            for section in section_items
        ]
    )
    return f"**{section_name}**:\n\n" + _section_template.format(
        section_body=section_body,
    )

# %% ../nbs/096_Docusaurus_Helper.ipynb 30
def _format_docstring_section_items(
    symbol_annotations: Dict[str, Union[Dict[str, str], str]],
    section_items: Union[
        List[DocstringParam], List[DocstringReturns], List[DocstringRaises]
    ],
    section_name: str,
) -> str:
    """Format the docstring sections in a table format

    Args:
        symbol_annotations: Symbol annotations along with its default value
        section_items: The parameter section of a parsed docstring
        section_name: The name of the section

    Returns:
        The docstring sections of the symbol in markdown-formatted string
    """
    if section_name == "Parameters":
        return _generate_parameters_table(symbol_annotations, section_items, section_name)  # type: ignore
    else:
        return _generate_return_and_raises_table(symbol_annotations, section_items, section_name)  # type: ignore

# %% ../nbs/096_Docusaurus_Helper.ipynb 35
def _get_annotation(symbol: Type) -> Dict[str, Union[Dict[str, Dict[str, str]], str]]:
    """Get annotations along with its default value for a symbol

    Args:
        symbol: The symbol for which the annotations needs to be extracted

    Returns:
        The annotations dict along with its default value
    """
    symbol = symbol.fget if isinstance(symbol, property) else symbol
    symbol_signature = signature(symbol)
    params_dict = _get_params_annotation(symbol_signature)
    return_annotation = _get_return_annotation(symbol_signature)
    return {"parameters": params_dict, "return": return_annotation}

# %% ../nbs/096_Docusaurus_Helper.ipynb 38
def _format_docstring_sections(symbol: Type, parsed_docstring: Docstring) -> str:
    """Format the parsed docstring sections into markdown-formatted table

    Args:
        symbol: The symbol for which to parse the docstring.
        parsed_docstring: A Docstring object

    Returns:
        The markdown-formatted docstring.
    """
    symbol_annotations = _get_annotation(symbol)
    formatted_docstring = ""
    sections = [
        ("Parameters", parsed_docstring.params),
        ("Returns", parsed_docstring.many_returns),
        ("Exceptions", parsed_docstring.raises),
    ]

    for section_name, section_items in sections:
        if len(section_items) > 0:  # type: ignore
            formatted_docstring += _format_docstring_section_items(
                symbol_annotations, section_items, section_name  # type: ignore
            )

    return formatted_docstring

# %% ../nbs/096_Docusaurus_Helper.ipynb 40
def _format_free_links(s: str) -> str:
    """Format free links in a given string by adding proper spacing around them.

    Args:
        s: The input string containing free links.

    Returns:
        The modified string with properly formatted free links.
    """
    pattern = r"([\"'])(https?:\/\/[^\s]+)([\"'])"
    ret_val = re.sub(
        pattern, lambda match: f"{match.group(1)} {match.group(2)} {match.group(3)}", s
    )
    return ret_val

# %% ../nbs/096_Docusaurus_Helper.ipynb 42
def _docstring_to_markdown(symbol: Type) -> str:
    """Converts a docstring to a markdown-formatted string.

    Args:
        symbol: The symbol for which the documentation needs to be generated in markdown format.

    Returns:
        The markdown-formatted docstring.
    """
    if symbol.__doc__ is None:
        return ""

    parsed_docstring = parse(symbol.__doc__)
    formatted_docstring = f"{parsed_docstring.short_description}\n\n"
    formatted_docstring += (
        f"{parsed_docstring.long_description}\n\n"
        if parsed_docstring.long_description
        else ""
    )
    formatted_docstring += _format_docstring_sections(symbol, parsed_docstring)
    ret_val = _format_free_links(formatted_docstring)

    return ret_val

# %% ../nbs/096_Docusaurus_Helper.ipynb 47
def _get_submodules(module_name: str) -> List[str]:
    """Get a list of all submodules contained within the module.

    Args:
        module_name: The name of the module to retrieve submodules from

    Returns:
        A list of submodule names within the module
    """
    members = _import_all_members(module_name)
    members_with_submodules = _add_all_submodules(members)
    members_with_submodules_str: List[str] = [
        x[:-1] if x.endswith(".") else x for x in members_with_submodules
    ]
    return members_with_submodules_str

# %% ../nbs/096_Docusaurus_Helper.ipynb 49
def _load_submodules(
    module_name: str, members_with_submodules: List[str]
) -> List[Type]:
    """Load the given submodules from the module.

    Args:
        module_name: The name of the module whose submodules to load
        members_with_submodules: A list of submodule names to load

    Returns:
        A list of imported submodule objects.
    """
    submodules = _import_submodules(module_name)
    members: List[Tuple[str, Type]] = list(
        itertools.chain(*[_import_functions_and_classes(m) for m in submodules])
    )
    names = [
        y
        for x, y in members
        if f"{y.__module__}.{y.__name__}" in members_with_submodules
    ]
    return names

# %% ../nbs/096_Docusaurus_Helper.ipynb 51
def _get_parameters(_signature: Signature) -> List[str]:
    """Convert a function's signature into a string representation of its parameter list.

    Args:
        _signature: The signature object representing the function's signature.

    Returns:
        A list of strings representing the function's parameters, including their default values if applicable.
    """
    params = [param for param in _signature.parameters.values()]
    ret_val = [
        f"{param.name}"
        if (param.default is param.empty)
        else f"{param.name}='{param.default}'"
        if isinstance(param.default, str)
        else f"{param.name}={param.default}"
        for param in params
    ]
    return ret_val

# %% ../nbs/096_Docusaurus_Helper.ipynb 55
def _format_symbol_definition(symbol: Type, params_list: List[str]) -> str:
    """Format the given symbol parameters by adding a new line and indentation.

    Args:
        symbol: The symbol for which the symbol definition needs to be formatted.
        params_list: A string representation of the parameter list.

    Returns:
        A formatted string representation of the parameters with new lines and indentation.
    """
    parameters = ", ".join(params_list)
    if parameters == "":
        return f"{symbol.__name__}()\n"
    elif len(f"{symbol.__name__}({parameters})") <= 79:
        return f"{symbol.__name__}(\n    {parameters}\n)\n"
    else:
        formatted_parameters = "".join([f"\n    {param}," for param in params_list])
        return f"{symbol.__name__}({formatted_parameters}\n)\n"

# %% ../nbs/096_Docusaurus_Helper.ipynb 62
def _get_exps(mod: str) -> Dict[str, str]:
    mf = _find_mod(mod)
    if not mf:
        return {}
    txt = mf.read_text()
    _def_types = ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef
    d = {}
    for tree in ast.parse(txt).body:
        if isinstance(tree, _def_types):
            for t in L(patch_name(tree)):
                d[t] = f"{tree.lineno}-L{tree.end_lineno}"
        if isinstance(tree, ast.ClassDef):
            d.update(
                {
                    tree.name + "." + t2.name: f"{t2.lineno}-L{t2.end_lineno}"
                    for t2 in tree.body
                    if isinstance(t2, _def_types)
                }
            )
    return d

# %% ../nbs/096_Docusaurus_Helper.ipynb 64
def _lineno(sym: str, fname: str) -> Optional[str]:
    return _get_exps(fname).get(sym, None) if fname else None


@lru_cache(None)
class CustomNbdevLookup(NbdevLookup.__wrapped__):  # type: ignore
    def __init__(
        self,
        strip_libs: Optional[str] = None,
        incl_libs: Optional[str] = None,
        skip_mods: Optional[str] = None,
    ):
        super().__init__(strip_libs, incl_libs, skip_mods)

    def code(self, sym: str) -> Optional[str]:
        "Link to source code for `sym`"
        res = self[sym]
        if not isinstance(res, tuple):
            return None
        _, py, gh = res
        line = _lineno(sym, py)
        return f"{gh}#L{line}"

# %% ../nbs/096_Docusaurus_Helper.ipynb 67
def _get_symbol_source_link(symbol: Type, lib_version: str) -> str:
    """Returns the source code link for a given symbol.

    Args:
        symbol: The symbol to get the source code link for.
        lib_version: The current version of the library.

    Returns:
        The source code link for the symbol.
    """
    symbol = symbol.fget if isinstance(symbol, property) else symbol
    source_link = CustomNbdevLookup().code(f"{symbol.__qualname__}")

    if source_link is None:
        return ""

    href = (
        source_link.replace("/blob/main/", f"/blob/{lib_version}/")
        if lib_version.replace(".", "").isdigit()
        else source_link
    )
    return f'<a href="{href}" class="link-to-source" target="_blank">View source</a>'

# %% ../nbs/096_Docusaurus_Helper.ipynb 71
def _get_method_type(symbol: Type) -> str:
    try:
        source = getsource(symbol).strip()
    except (TypeError, OSError) as e:
        return ""

    first_line = source.split("\n")[0]
    return (
        f"{first_line}\n"
        if first_line
        in ["@abstractmethod", "@staticmethod", "@classmethod", "@property"]
        else ""
    )


def _get_symbol_definition(symbol: Type, header_level: int, lib_version: str) -> str:
    """Return the definition of a given symbol.

    Args:
        symbol: A function or method object to get the definition for.
        header_level: The level of the markdown header to append.
        lib_version: The current version of the library.

    Returns:
        A string representing the function definition
    """
    if isclass(symbol):
        return f"{'#'*(header_level - 1)} {symbol.__module__}.{symbol.__name__} {{#{symbol.__module__}.{symbol.__name__}}}\n\n{_get_symbol_source_link(symbol, lib_version)}\n\n"

    if isinstance(symbol, property):
        symbol = symbol.fget

    symbol_anchor = (
        f"{'#' * header_level} {symbol.__name__}"
        + f" {{#{symbol.__module__}.{'.'.join([component.strip('_') for component in symbol.__qualname__.rsplit('.', 1)])}}}\n\n"
    )

    link_to_source = f"{_get_symbol_source_link(symbol, lib_version)}\n\n"

    _signature = signature(symbol)
    parameters = _get_parameters(_signature)
    symbol_definition = f"```py\n{_get_method_type(symbol)}{_format_symbol_definition(symbol, parameters)}```\n"
    return symbol_anchor + link_to_source + symbol_definition

# %% ../nbs/096_Docusaurus_Helper.ipynb 77
def _is_method(symbol: Type) -> bool:
    """Check if the given symbol is a method.

    Args:
        symbol: A function or method object to check.

    Returns:
        A boolean indicating whether the symbol is a method.
    """
    return ismethod(symbol) or isfunction(symbol) or isinstance(symbol, property)

# %% ../nbs/096_Docusaurus_Helper.ipynb 79
def _get_formatted_docstring_for_symbol(
    symbol: Type, lib_version: str, header_level: int = 2
) -> str:
    """Recursively parses and get formatted docstring of a symbol.

    Args:
        symbol: A Python class or function object to parse the docstring for.
        lib_version: The current version of the library.
        header_level: The level of the markdown header to append.

    Returns:
        A formatted docstring of the symbol and its members.

    """

    def traverse(
        symbol: Type, contents: str, header_level: int, lib_version: str
    ) -> str:
        """Recursively traverse the members of a symbol and append their docstrings to the provided contents string.

        Args:
            symbol: A Python class or function object to parse the docstring for.
            contents: The current formatted docstrings.
            header_level: The level of the markdown header to append.
            lib_version: The current version of the library.

        Returns:
            The updated formatted docstrings.

        """
        for x, y in getmembers(symbol):
            if not x.startswith("_") or x == "__init__":
                if _is_method(y):
                    contents += f"{_get_symbol_definition(y, header_level, lib_version)}\n{_docstring_to_markdown(y)}"
                elif isclass(y) and not x.startswith("_"):
                    contents += f"{_get_symbol_definition(y, header_level+1, lib_version)}\n{_docstring_to_markdown(y)}"
                    contents = traverse(y, contents, header_level + 1, lib_version)
        return contents

    contents = f"{_get_symbol_definition(symbol, header_level+1, lib_version)}\n{_docstring_to_markdown(symbol)}"
    if isclass(symbol):
        contents = traverse(symbol, contents, header_level + 1, lib_version)
    return contents

# %% ../nbs/096_Docusaurus_Helper.ipynb 84
def _convert_html_style_attribute_to_jsx(contents: str) -> str:
    """Converts the inline style attributes in an HTML string to JSX compatible format.

    Args:
        contents: A string containing an HTML document or fragment.

    Returns:
        A string with inline style attributes converted to JSX compatible format.
    """
    style_regex = re.compile(r'style="(.+?)"')
    style_matches = style_regex.findall(contents)

    for style_match in style_matches:
        style_dict = {}
        styles = style_match.split(";")
        for style in styles:
            key_value = style.split(":")
            if len(key_value) == 2:
                key = re.sub(
                    r"-(.)", lambda m: m.group(1).upper(), key_value[0].strip()
                )
                value = key_value[1].strip().replace("'", '"')
                style_dict[key] = value
        replacement = "style={{"
        for key, value in style_dict.items():
            replacement += f"{key}: '{value}', "
        replacement = replacement[:-2] + "}}"
        contents = contents.replace(f'style="{style_match}"', replacement)

    return contents

# %% ../nbs/096_Docusaurus_Helper.ipynb 86
def _get_all_markdown_files_path(docs_path: Path) -> List[Path]:
    """Get all Markdown files in a directory and its subdirectories.

    Args:
        directory: The path to the directory to search in.

    Returns:
        A list of paths to all Markdown files found in the directory and its subdirectories.
    """
    markdown_files = [file_path for file_path in docs_path.glob("**/*.md")]
    return markdown_files

# %% ../nbs/096_Docusaurus_Helper.ipynb 88
def _fix_special_symbols_in_html(contents: str) -> str:
    contents = contents.replace("”", '"')
    return contents

# %% ../nbs/096_Docusaurus_Helper.ipynb 90
def _add_file_extension_to_link(url: str) -> str:
    """Add file extension to the last segment of a URL

    Args:
        url: A URL string.

    Returns:
        A string of the updated URL with a file extension added to the last segment of the URL.
    """
    segments = url.split("/#")[0].split("/")[-2:]
    return url.replace(f"/{segments[1]}", f"/{segments[1]}.md").replace(".md/#", ".md#")

# %% ../nbs/096_Docusaurus_Helper.ipynb 94
def _generate_production_url(url: str) -> str:
    """Generate a Docusaurus compatible production URL for the given symbol URL.

    Args:
        url: The symbol URL to be converted.

    Returns:
        The production URL of the symbol.
    """
    url_segment, hash_segment = url.split(".md")
    url_split = url_segment.split("/")
    if url_split[-1].lower() == url_split[-2].lower():
        return "/".join(url_split[:-1]) + hash_segment
    return url.replace(".md", "")

# %% ../nbs/096_Docusaurus_Helper.ipynb 96
def _fix_symbol_links(
    contents: str,
    dir_prefix: str,
    doc_host: str,
    doc_baseurl: str,
    use_relative_doc_links: bool = True,
) -> str:
    """Fix symbol links in Markdown content.

    Args:
        contents: The Markdown content to search for symbol links.
        dir_prefix: Directory prefix to append in the relative URL.
        doc_host: The host URL for the documentation site.
        doc_baseurl: The base URL for the documentation site.
        use_relative_doc_links: If set to True, then the relative link to symbols will be added else,
            production link will be added.

    Returns:
        str: The Markdown content with updated symbol links.
    """
    prefix = re.escape(urljoin(doc_host + "/", doc_baseurl))
    pattern = re.compile(rf"\[(.*?)\]\(({prefix}[^)]+)\)")
    matches = pattern.findall(contents)
    for match in matches:
        old_url = match[1]
        new_url = _add_file_extension_to_link(old_url).replace("/api/", "/docs/api/")
        if use_relative_doc_links:
            dir_prefix = "./" if dir_prefix == "" else dir_prefix
            updated_url = dir_prefix + new_url.split("/docs/")[1]
        else:
            updated_url = _generate_production_url(
                doc_host + doc_baseurl + "/docs/" + new_url.split("/docs/")[1]
            )
        contents = contents.replace(old_url, updated_url)
    return contents

# %% ../nbs/096_Docusaurus_Helper.ipynb 104
def _get_relative_url_prefix(docs_path: Path, sub_path: Path) -> str:
    """Returns a relative url prefix from a sub path to a docs path.

    Args:
        docs_path (Path): The docs directory path.
        sub_path (Path): The sub directory path.

    Returns:
        str: A string representing the relative path from the sub path to the docs path.

    Raises:
        ValueError: If the sub path is not a descendant of the docs path.
    """
    try:
        relative_path = sub_path.relative_to(docs_path)
    except ValueError:
        raise ValueError(f"{sub_path} is not a descendant of {docs_path}")

    return (
        "../" * (len(relative_path.parts) - 1) if len(relative_path.parts) > 1 else ""
    )

# %% ../nbs/096_Docusaurus_Helper.ipynb 106
def fix_invalid_syntax_in_markdown(docs_path: str) -> None:
    """Fix invalid HTML syntax in markdown files and converts inline style attributes to JSX-compatible format.

    Args:
        docs_path: The path to the root directory to search for markdown files.
    """
    cfg = get_config()
    doc_host = cfg["doc_host"]
    doc_baseurl = cfg["doc_baseurl"]

    markdown_files = _get_all_markdown_files_path(Path(docs_path))
    for file in markdown_files:
        relative_url_prefix = _get_relative_url_prefix(Path(docs_path), file)
        contents = Path(file).read_text()

        contents = _convert_html_style_attribute_to_jsx(contents)
        contents = _fix_special_symbols_in_html(contents)
        contents = _fix_symbol_links(
            contents, relative_url_prefix, doc_host, doc_baseurl
        )
        file.write_text(contents)

# %% ../nbs/096_Docusaurus_Helper.ipynb 108
def generate_markdown_docs(module_name: str, docs_path: str) -> None:
    """Generates Markdown documentation files for the symbols in the given module and save them to the given directory.

    Args:
        module_name: The name of the module to generate documentation for.
        docs_path: The path to the directory where the documentation files will be saved.
    """
    members_with_submodules = _get_submodules(module_name)
    symbols = _load_submodules(module_name, members_with_submodules)
    lib_version = get_config()["version"]

    for symbol in symbols:
        content = _get_formatted_docstring_for_symbol(symbol, lib_version)
        target_file_path = (
            "/".join(f"{symbol.__module__}.{symbol.__name__}".split(".")) + ".md"
        )
        with open((Path(docs_path) / "api" / target_file_path), "w") as f:
            f.write(content)

# %% ../nbs/096_Docusaurus_Helper.ipynb 111
def _parse_lines(lines: List[str]) -> Tuple[List[str], int]:
    """Parse a list of lines and return a tuple containing a list of filenames and an index indicating how many lines to skip.

    Args:
        lines: A list of strings representing lines of input text.

    Returns:
        A tuple containing a list of strings representing the filenames extracted
        from links in the lines and an integer representing the number of lines to skip.
    """
    index = next(
        (i for i, line in enumerate(lines) if not line.strip().startswith("- [")),
        len(lines),
    )
    return [line.split("(")[1][:-4] for line in lines[:index]], index

# %% ../nbs/096_Docusaurus_Helper.ipynb 114
def _parse_section(text: str, ignore_first_line: bool = False) -> List[Any]:
    """Parse the given section contents and return a list of file names in the expected format.

    Args:
        text: A string representing the contents of a file.
        ignore_first_line: Flag indicating whether to ignore the first line extracting the section contents.

    Returns:
        A list of filenames in the expected format
    """
    pattern = r"\[.*?\]\((.*?)\)|\[(.*?)\]\[(.*?)\]"
    lines = text.split("\n")[1:] if ignore_first_line else text.split("\n")
    ret_val = []
    index = 0
    while index < len(lines):
        line = lines[index]
        match = re.search(pattern, line.strip())
        if match is not None:
            ret_val.append(match.group(1).split(".md")[0])
            index += 1
        elif line.strip() != "":
            value, skip_lines = _parse_lines(lines[index + 1 :])
            ret_val.append({line.replace("-", "").strip(): value})
            index += skip_lines + 1
        else:
            index += 1
    return ret_val

# %% ../nbs/096_Docusaurus_Helper.ipynb 117
def _get_section_from_markdown(
    markdown_text: str, section_header: str
) -> Optional[str]:
    """Get the contents of the section header from the given markdown text

    Args:
        markdown_text: A string containing the markdown text to extract the section from.
        section_header: A string representing the header of the section to extract.

    Returns:
        A string representing the contents of the section header if the section header
        is present in the markdown text, else None
    """
    pattern = re.compile(rf"^- {section_header}\n((?:\s+- .*\n)+)", re.M)
    match = pattern.search(markdown_text)
    return match.group(1) if match else None

# %% ../nbs/096_Docusaurus_Helper.ipynb 122
def generate_sidebar(
    summary_file: str = "./docusaurus/docs/SUMMARY.md",
    summary: str = "",
    target: str = "./docusaurus/sidebars.js",
) -> None:
    """
    Generate a sidebar js file for a Docusaurus documentation site based on a SUMMARY.md file.

    Args:
        summary_file: The path to the SUMMARY.md file containing the documentation structure.
            Default is "./docusaurus/docs/SUMMARY.md".
        summary: An optional summary string.
            Default is an empty string.
        target: The path to the target sidebar js file to be generated.
            Default is "./docusaurus/sidebars.js".

    Returns:
        None: The function does not return any value directly, but it generates a sidebar file.

    Raises:
        FileNotFoundError: If the specified `summary_file` does not exist.
    """
    with open(summary_file, "r") as stream, open(target, "w") as target_stream:
        summary_contents = stream.read()

        guides_summary = _get_section_from_markdown(summary_contents, "Guides")
        parsed_guides = _parse_section(guides_summary)  # type: ignore

        api_summary = _get_section_from_markdown(summary_contents, "API")
        parsed_api = _parse_section(api_summary, True)  # type: ignore

        cli_summary = _get_section_from_markdown(summary_contents, "CLI")
        parsed_cli = _parse_section(cli_summary)  # type: ignore

        target_stream.write(
            """module.exports = {
tutorialSidebar: [
    'index', {'Guides': 
    """
            + str(parsed_guides)
            + "},"
            + "{'API': ["
            + str(parsed_api)[1:-1]
            + "]},"
            + "{'CLI': "
            + str(parsed_cli)
            + "},"
            + """
    "LICENSE",
    "CONTRIBUTING",
    "CHANGELOG",
],
};"""
        )

# %% ../nbs/096_Docusaurus_Helper.ipynb 124
def _get_markdown_filenames_from_sidebar(sidebar_file_path: str) -> List[str]:
    """Get a list of Markdown filenames included in the sidebar.

    Args:
        sidebar_file_path: The path to the sidebar file.

    Returns:
        A list of Markdown filenames included in the sidebar.
    """
    with open(sidebar_file_path, "r") as file:
        file_content = file.read()

        pattern = r"tutorialSidebar:\s*(\[.*\])\s*,\s*\n?\s*};"
        match = re.search(pattern, file_content, re.DOTALL)
        all_sidebar_files = ast.literal_eval(match.group(1)) if match else []
        markdown_filenames = [
            f"{v}.md" for v in all_sidebar_files if isinstance(v, str)
        ]
        return markdown_filenames

# %% ../nbs/096_Docusaurus_Helper.ipynb 126
def _delete_files(files: List[Path]) -> None:
    """Deletes a list of files.

    Args:
        files: A list of Path objects representing the files to be deleted.

    Raises:
        OSError: If an error occurs while deleting a file.

    """
    for file in files:
        try:
            file.unlink()
        except OSError as e:
            typer.echo(
                f"Error deleting files from docusaurus/docs directory. Could not delete file: {file} - {e}"
            )

# %% ../nbs/096_Docusaurus_Helper.ipynb 129
def delete_unused_markdown_files_from_sidebar(
    docs_path: str, sidebar_file_path: str
) -> None:
    """Delete the markdown files from the docs directory that are not present in the sidebar.

    Args:
        docs_path: Path to the directory containing the markdown files.
        sidebar_file_path: Path to the sidebar file.
    """
    md_filenames_in_sidebar = _get_markdown_filenames_from_sidebar(
        str(sidebar_file_path)
    )
    if len(md_filenames_in_sidebar) > 0:
        all_md_files_in_docs_dir = [
            file_path for file_path in Path(docs_path).glob("*.md")
        ]
        md_files_in_sidebar = [Path(docs_path) / f for f in md_filenames_in_sidebar]
        md_files_to_delete = list(
            set(all_md_files_in_docs_dir) - set(md_files_in_sidebar)
        )
        _delete_files(md_files_to_delete)

# %% ../nbs/096_Docusaurus_Helper.ipynb 131
def update_readme() -> None:
    """Update the readme file and fix the symbol links"""
    cfg = get_config()
    readme_path = cfg.config_path / "README.md"
    nbdev_readme.__wrapped__()

    with open(readme_path, "r", encoding="utf-8") as f:
        contents = f.read()

    contents = update_default_symbol_links(
        contents, NbdevLookup(incl_libs=cfg.lib_path.name), "", "", False
    )
    contents = _fix_symbol_links(contents, "./", cfg.doc_host, cfg.doc_baseurl, False)

    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(contents)
