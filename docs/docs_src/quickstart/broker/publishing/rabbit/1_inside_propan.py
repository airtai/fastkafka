from faststream import FastStream
from faststream.rabbit import RabbitBroker

broker = RabbitBroker("amqp://guest:guest@localhost:5672/")
app = FastStream(broker)

@broker.handle("test")
async def handle(m: str):
    await broker.publish(m, "another-queue")