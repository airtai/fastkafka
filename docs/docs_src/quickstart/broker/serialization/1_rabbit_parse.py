from aio_pika.message import IncomingMessage
from faststream.broker.message import StreamMessage
from faststream.rabbit.message import RabbitMessage


async def parse_message(
    message: IncomingMessage
) -> StreamMessage[IncomingMessage]:
    return RabbitMessage(
        body=message.body,
        headers=message.headers,
        reply_to=message.reply_to or "",
        message_id=message.message_id,
        content_type=message.content_type or "",
        raw_message=message,
    )
