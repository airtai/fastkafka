import pytest

from examples.kafka.batch_publish_2 import app, handle
from faststream import TestApp as T


@pytest.mark.asyncio
@pytest.mark.kafka
async def test_example():
    async with T(app):
        await handle.wait_call(3)
    assert set(handle.mock.call_args[0][0]) == {"hi", "FastStream"}