from propan import PropanApp, SQSBroker
from propan.annotations import ContextRepo
from pydantic_settings import BaseSettings

broker = SQSBroker()

app = FastStream(broker)

class Settings(BaseSettings):
    host: str = "http://localhost:9324"

@app.on_startup
async def setup(env: str, context: ContextRepo):
    settings = Settings(_env_file=env)
    await broker.connect(settings.host)
    context.set_global("settings", settings)