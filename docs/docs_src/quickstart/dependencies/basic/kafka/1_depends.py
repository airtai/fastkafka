from faststream import FastStream
from faststream.kafka import KafkaBroker, Depends

broker = KafkaBroker("localhost:9092")
app = FastStream(broker)

def simple_dependency():
    return 1

@broker.handle("test")
async def handler(body: dict, d: int = Depends(simple_dependency)):
    assert d == 1