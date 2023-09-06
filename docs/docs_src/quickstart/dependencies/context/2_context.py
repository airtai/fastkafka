from faststream.utils import Context

@broker.hanlde("test")
async def handler(
    body: dict,
    app = Context(),
    broker = Context(),
    context = Context(),
    logger = Context(),
    message = Context(),
):
    ...