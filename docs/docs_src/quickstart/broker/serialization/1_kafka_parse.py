from aiokafka.structs import ConsumerRecord
from faststream.broker.message import StreamMessage
from faststream.kafka.message import KafkaMessage

async def parse_message(
    message: ConsumerRecord
) -> StreamMessage[ConsumerRecord]:
    headers = {i: j.decode() for i, j in message.headers}
    return KafkaMessage(
        body=message.value,
        raw_message=message,
        message_id=f"{message.offset}-{message.timestamp}",
        reply_to=headers.get("reply_to", ""),
        content_type=headers.get("content-type"),
        headers=headers,
    )
