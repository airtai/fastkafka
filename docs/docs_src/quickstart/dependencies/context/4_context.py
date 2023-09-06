from faststream.utils import Context
from faststream.rabbit import RabbitBroker
from typing_extension import Annotated

Broker = Annotated[RabbitBroker, Context("broker")]

@broker.hanlde("test")
async def handler(
    body: dict,
    broker: Broker,
):
    ...