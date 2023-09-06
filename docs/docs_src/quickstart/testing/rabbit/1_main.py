from faststream import FastStream
from faststream.rabbit import RabbitBroker

broker = RabbitBroker()

@broker.handler("ping")
async def healthcheck(msg: str) -> str:
    if msg == "ping":
        return "pong"
    else:
        return "wrong"

app = FastStream(broker)