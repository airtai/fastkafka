import pytest
from pydantic import ValidationError

from faststream.kafka import TestKafkaBroker

from .annotation_kafka import broker, handle


@pytest.mark.asyncio
async def test_handle():
    async with TestKafkaBroker(broker) as br:
        await br.publish({"name": "john", "user_id": 1}, topic="test-topic")

        handle.mock.assert_called_once_with({"name": "john", "user_id": 1})


@pytest.mark.asyncio
async def test_validation_error():
    async with TestKafkaBroker(broker) as br:
        with pytest.raises(ValidationError):
            await br.publish("wrong message", topic="test-topic")

        handle.mock.assert_called_once_with("wrong message")
