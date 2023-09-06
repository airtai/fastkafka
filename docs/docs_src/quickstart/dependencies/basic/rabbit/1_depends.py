from faststream import FastStream
from faststream.rabbit import RabbitBroker, Depends

broker = RabbitBroker("amqp://guest:guest@localhost:5672/")
app = FastStream(broker)

def simple_dependency():
    return 1

@broker.handle("test")
async def handler(body: dict, d: int = Depends(simple_dependency)):
    assert d == 1