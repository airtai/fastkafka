from message_pb2 import Person

from faststream import FastStream
from faststream.rabbit import RabbitBroker
from propan.annotations import Logger, NoCast
from propan.brokers.rabbit import RabbitMessage

broker = RabbitBroker()
app = FastStream(broker)

async def decode_message(msg: RabbitMessage, original) -> Person:
    decoded = Person()
    decoded.ParseFromString(msg.body)
    return decoded

@broker.handle("test", decode_message=decode_message)
async def consume(body: NoCast[Person], logger: Logger):
    logger.info(body)

@app.after_startup
async def publish():
    body = Person(name="john", age=25).SerializeToString()
    await broker.publish(body, "test")
