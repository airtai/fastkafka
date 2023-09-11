from pydantic import BaseModel, Field, NonNegativeInt

from faststream import FastStream
from faststream.rabbit import RabbitBroker

broker = RabbitBroker("amqp://guest:guest@localhost:5672/")
app = FastStream(broker)


class UserInfo(BaseModel):
    name: str = Field(..., examples=["john"], description="Registered user name")
    user_id: NonNegativeInt = Field(..., examples=[1], description="Registered user id")


@broker.subscriber("test-queue")
async def handle(user: UserInfo):
    assert user.name == "john"
    assert user.user_id == 1


@app.after_startup
async def test():
    await broker.publish({"name": "john", "user_id": 1}, queue="test-queue")
