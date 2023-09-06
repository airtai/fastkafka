import json
from faststream.broker.message import StreamMessage

async def decode_message(message: StreamMessage):
    body = message.body
    if message.content_type is not None:
        return json.loads(body.decode())
    else:
        return body