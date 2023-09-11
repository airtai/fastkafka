# Publishing

**FastStream** RabbitBroker supports all regular [publishing usecases](../getting-started/publishing/index.md){.internal-link}, you can use them without any changes.

The only one RMQ specific thing - these methods parameters, so you should know about all of them.

## Rabbit Publishing

`RabbitBroker` also uses the unified `publish` method (as a `publisher` object too) to send a message.

However, in this case, an object of the `aio_pika.Message` class (if necessary) can be used as a message (in addition to python primitives and `pydantic.BaseModel`).

You can specify queue (uses as a routing_key) and exchange (optionally) to send by their name.

``` python
import asyncio
from faststream.rabbit import RabbitBroker

async def pub():
    async with RabbitBroker() as broker:
        await broker.publish(
            "Hi!",
            queue="test",
            exchange="test"
        )

asyncio.run(pub())
```

If you don't specify any exchange, message will be send to the default one.

Also, you able to use special **RabbitQueue** and **RabbitExchange** objects as a `queue` and `exchange` arguments:


``` python
from faststream.rabbit import RabbitExchange, RabbitQueue

await broker.publish(
    "Hi!",
    queue=RabbitQueue("test"),
    exchange=RabbitExchange("test")
)
```

If you specify not-existed exchange, RabbitBroker creates a required one and then publish a message.

!!! tip
    Be accurate with it: if you have already created **Exchange** with specific parameters and try to send a message by exchange name to it,
    **FastStream** converts your string to **RabbitExchange** object with default parameters and broker will try to create it. So, **Exchange** parameters conflict will occure.

    If you are trying to send a message to specific **Exchange** - sending with a **RabbitExchange** object is a preffered way.

## Basic arguments

The `publish` method takes the following arguments:

* `message = ""` - message to send
* `exchange: str | RabbitExchange | None = None` - the exchange where the message will be sent to. If not specified - *default* is used
* `queue: str | RabbitQueue = ""` - the queue where the message will be sent (since most queues use their name as the routing key, this is a human-readable version of `routing_key`)
* `routing_key: str = ""` - also a message routing key, if not specified, the `queue` argument will be used

## Message parameters

You can read more about all the flags in the [RabbitMQ documentation](https://www.rabbitmq.com/consumers.html){.external-link target="_blank"}

* `headers: dict[str, Any] | None = None` - message headers (used by consumers)
* `content_type: str | None = None` - the content_type of the message being sent (setted automatically, used by consumers)
* `content_encoding: str | None = None` - encoding of the message (used by consumers)
* `persist: bool = False` - restore messages on *RabbitMQ* reboot
* `priority: int | None = None` - the priority of the message
* `correlation_id: str | None = None` - message id, which helps to match the original message with the reply to it (generated automatically)
* `message_id: str | None = None` - message ID (generated automatically)
* `timestamp: int | float | time delta | datetime | None = None` - message sending time (setted automatically)
* `expiration: int | float | time delta | datetime | None = None` - message lifetime (in seconds)
* `type: str | None = None` - the type of message (used by consumers)
* `user_id: str | None = None` - ID of the *RabbitMQ* user who sent the message
* `app_id: str | None = None` - ID of the application that sent the message (used by consumers)

## Send flags

Arguments for sending a message:

* `mandatory: bool = True` - the client is waiting for confirmation that the message will be placed in some queue (if there are no queues, return it to the sender)
* `immediate: bool = False` - the client expects that there is a consumer ready to take the message to work "right now" (if there is no consumer, return it to the sender)
* `timeout: int | float | None = None` - send confirmation time from *RabbitMQ*
