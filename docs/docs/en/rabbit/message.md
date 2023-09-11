# Access to Message information

As you know, **FastStream** serializes a message body and provides you access to it by function arguments. But sometimes you want to access to message_id, headers or other meta information.

## Message access

You can get it in a simple way too: just acces to the message object in the [Context](../getting-started/context/existed.md){.internal-link}!

It is an unified **FastStream** wrapper around native broker library message (`aio_pika.IncomingMessage` in the *RabbitMQ* case). It contains most part of required information like:

* `body: bytes`
* `decoded_body: Any`
* `content_type: str`
* `reply_to: str`
* `headers: dict[str, Any]`
* `message_id: str`
* `correlation_id: str`

```python hl_lines="1 6"
from faststream.rabbit import RabbitMessage

@broker.subscriber("test")
async def base_handler(
    body: str,
    msg: RabbitMessage,
):
    print(msg.correlation_id)
```

Also, if you doesn't find information you reqiure, you can get access right to the wrapped `aio_pika.IncomingMessage`, contains total message information.

```python hl_lines="6"
from aio_pika import IncomingMessage
from faststream.rabbit import RabbitMessage

@broker.subscriber("test")
async def base_handler(body: str, msg: RabbitMessage):
    raw: IncomingMessage = msg.raw_message
    print(raw)
```

## Message Fields access

But in the most cases you don't need all message fields, you need to know just one of them. You can use [Context Fields access](../getting-started/context/fields.md){.internal-link} feature for this reason.

Like an example, you can get access to the `correlation_id` like this:

```python hl_lines="6"
from faststream import Context

@broker.subscriber("test")
async def base_handler(
    body: str,
    cor_id: str = Context("message.correlation_id"),
):
    print(cor_id)
```

Or even directly from the raw message:

```python hl_lines="6"
from faststream import Context

@broker.subscriber("test")
async def base_handler(
    body: str,
    cor_id: str = Context("message.raw_message.correlation_id"),
):
    print(cor_id)
```

But this code is a too long to reuse it everywhere. Thus, you can use python `Annotated` feature:


=== "python 3.9+"
    ```python hl_lines="4 9"
    from types import Annotated
    from faststream import Context

    CorrelationId = Annotated[str, Context("message.correlation_id")]

    @broker.subscriber("test")
    async def base_handler(
        body: str,
        cor_id: CorrelationId,
    ):
        print(cor_id)
    ```

=== "python 3.6+"
    ```python hl_lines="4 9"
    from typing_extensions import Annotated
    from faststream import Context

    CorrelationId = Annotated[str, Context("message.correlation_id")]

    @broker.subscriber("test")
    async def base_handler(
        body: str,
        cor_id: CorrelationId,
    ):
        print(cor_id)
    ```
