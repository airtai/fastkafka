from faststream import FastStream
from faststream.rabbit import RabbitBroker

app = FastStream()

@app.on_startup
def init_broker():
    broker = RabbitBroker("amqp://guest:guest@localhost:5672/")
    app.set_broker(broker)