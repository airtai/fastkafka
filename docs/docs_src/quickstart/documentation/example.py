from faststream import FastStream
from faststream.rabbit import RabbitBroker
from faststream.rabbit import RabbitExchange, RabbitQueue, ExchangeType

broker = RabbitBroker()
app = FastStream(
    broker=broker,
    title="Smartylighting Streetlights Propan API",
    version="1.0.0",
    description="""
    The Smartylighting Streetlights API.
    ### Check out its awesome features:
    * Turn a specific streetlight on/off 🌃
    * Receive real-time information about environmental 📈
    """
)

@broker.handle(
    queue=RabbitQueue("*.info", durable=True),
    exchange=RabbitExchange("logs", durable=True, type=ExchangeType.TOPIC)
)
async def handle_logs(level: int, message: str = ""):
    """Handle all environmental events"""
    ...
