from faststream.utils import Context, apply_types
from faststream.utils import ContextRepo

@broker.hanlde("test")
async def handler(
    body: dict,
    context: ContextRepo
):
    token = context.set_local("local", 1):
    nested_function()
    context.reset_local("local", token)

@apply_types
def nested_function(local = Context()):
    assert local == 1