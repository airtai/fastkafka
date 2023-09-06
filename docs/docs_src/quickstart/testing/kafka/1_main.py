from faststream import FastStream
from faststream.kafka import KafkaBroker

broker = KafkaBroker()

@broker.handler("ping")
async def healthcheck(msg: str) -> str:
    if msg == "ping":
        return "pong"
    else:
        return "wrong"

app = FastStream(broker)