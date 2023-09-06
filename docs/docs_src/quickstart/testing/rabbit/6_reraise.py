import pytest
import pydantic
from faststream.rabbit.test import build_message

from main import healthcheck

async def test_publish(test_broker):
    msg = build_message({ "msg": "ping" }, "ping")
    with pytest.raises(pydantic.ValidationError):
        await healthcheck(msg, reraise_exc=True)