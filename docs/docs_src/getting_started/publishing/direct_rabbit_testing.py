import pytest

from faststream.rabbit import TestRabbitBroker

from .direct_rabbit import broker, publisher


@pytest.mark.asyncio
async def test_handle():
    async with TestRabbitBroker(broker) as br:
        await br.publish("", queue="test-queue")

        publisher.mock.assert_called_once_with("Hi!")
