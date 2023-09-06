from faststream.utils import Context, apply_types
from faststream.utils import ContextRepo

@broker.hanlde("test")
async def handler(
    body: dict,
    context: ContextRepo
):
    with context.scope("local", 1):
        nested_function()

@apply_types
def nested_function(local = Context()):
    assert local == 1