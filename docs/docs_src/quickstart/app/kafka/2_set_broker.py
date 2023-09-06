from faststream import FastStream
from faststream.kafka import KafkaBroker

app = FastStream()

@app.on_startup
def init_broker():
    broker = KafkaBroker("localhost:9092")
    app.set_broker(broker)