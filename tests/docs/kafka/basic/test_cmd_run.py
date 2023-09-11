import asyncio
from unittest.mock import Mock

import pytest
from typer.testing import CliRunner

from faststream.app import FastStream
from faststream.cli.main import cli


@pytest.mark.kafka
def test_run_cmd(
    runner: CliRunner,
    mock: Mock,
    event: asyncio.Event,
    monkeypatch: pytest.MonkeyPatch,
    kafka_basic_project,
):
    async def patched_run(self: FastStream, *args, **kwargs):
        self._stop_event = event
        event.set()
        await self._start()
        await self._stop()
        mock()

    with monkeypatch.context() as m:
        m.setattr(FastStream, "run", patched_run)
        r = runner.invoke(
            cli,
            [
                "run",
                kafka_basic_project,
            ],
        )

    assert r.exit_code == 0
    mock.assert_called_once()
