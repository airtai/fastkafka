import pytest

from faststream.utils.functions import call_or_await


def sync_func(a):
    return a


async def async_func(a):
    return a


@pytest.mark.asyncio
async def test_call():
    assert (await call_or_await(sync_func, a=3)) == 3


@pytest.mark.asyncio
async def test_await():
    assert (await call_or_await(async_func, a=3)) == 3
