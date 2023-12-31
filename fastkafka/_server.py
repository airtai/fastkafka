# AUTOGENERATED! DO NOT EDIT! File to edit: ../nbs/021_FastKafkaServer.ipynb.

# %% auto 0
__all__ = ['logger', 'ServerProcess', 'run_fastkafka_server_process', 'run_fastkafka_server', 'run_in_process']

# %% ../nbs/021_FastKafkaServer.ipynb 1
import asyncio
import multiprocessing
import platform
import signal
import threading
from contextlib import contextmanager
from typing import *
from types import FrameType

import asyncer
import typer

from ._components.helpers import _import_from_string
from ._components.logger import get_logger
from ._components._subprocess import terminate_asyncio_process

# %% ../nbs/021_FastKafkaServer.ipynb 5
logger = get_logger(__name__, level=20)

# %% ../nbs/021_FastKafkaServer.ipynb 7
class ServerProcess:
    def __init__(self, app: str, kafka_broker_name: str):
        """
        Represents a server process for running the FastKafka application.

        Args:
            app (str): Input in the form of 'path:app', where **path** is the path to a python file and **app** is an object of type **FastKafka**.
            kafka_broker_name (str): The name of the Kafka broker, one of the keys of the kafka_brokers dictionary passed in the constructor of FastKafka class.
        """
        self.app = app
        self.should_exit = False
        self.kafka_broker_name = kafka_broker_name

    def run(self) -> None:
        """
        Runs the FastKafka application server process.
        """
        return asyncio.run(self._serve())

    async def _serve(self) -> None:
        """
        Internal method that runs the FastKafka application server.
        """
        self._install_signal_handlers()

        self.application = _import_from_string(self.app)
        self.application.set_kafka_broker(self.kafka_broker_name)

        async with self.application:
            await self._main_loop()

    def _install_signal_handlers(self) -> None:
        """
        Installs signal handlers for handling termination signals.
        """
        if threading.current_thread() is not threading.main_thread():
            raise RuntimeError()

        loop = asyncio.get_event_loop()

        HANDLED_SIGNALS = (
            signal.SIGINT,  # Unix signal 2. Sent by Ctrl+C.
            signal.SIGTERM,  # Unix signal 15. Sent by `kill <pid>`.
        )
        if platform.system() == "Windows":
            HANDLED_SIGNALS = (*HANDLED_SIGNALS, signal.SIGBREAK)  # type: ignore

        def handle_windows_exit(signum: int, frame: Optional[FrameType]) -> None:
            self.should_exit = True

        def handle_exit(sig: int) -> None:
            self.should_exit = True

        for sig in HANDLED_SIGNALS:
            if platform.system() == "Windows":
                signal.signal(sig, handle_windows_exit)
            else:
                loop.add_signal_handler(sig, handle_exit, sig)

    async def _main_loop(self) -> None:
        """
        Main loop for the FastKafka application server process.
        """
        while not self.should_exit:
            await asyncio.sleep(0.1)

# %% ../nbs/021_FastKafkaServer.ipynb 8
_app = typer.Typer()


@_app.command()
def run_fastkafka_server_process(
    app: str = typer.Argument(
        ...,
        help="Input in the form of 'path:app', where **path** is the path to a python file and **app** is an object of type **FastKafka**.",
    ),
    kafka_broker: str = typer.Option(
        ...,
        help="Kafka broker, one of the keys of the kafka_brokers dictionary passed in the constructor of FastKafka class.",
    ),
) -> None:
    ServerProcess(app, kafka_broker).run()

# %% ../nbs/021_FastKafkaServer.ipynb 11
async def run_fastkafka_server(num_workers: int, app: str, kafka_broker: str) -> None:
    """
    Runs the FastKafka server with multiple worker processes.

    Args:
        num_workers (int): Number of FastKafka instances to run.
        app (str): Input in the form of 'path:app', where **path** is the path to a python file and **app** is an object of type **FastKafka**.
        kafka_broker (str): Kafka broker, one of the keys of the kafka_brokers dictionary passed in the constructor of FastKafka class.
    """
    loop = asyncio.get_event_loop()

    HANDLED_SIGNALS = (
        signal.SIGINT,  # Unix signal 2. Sent by Ctrl+C.
        signal.SIGTERM,  # Unix signal 15. Sent by `kill <pid>`.
    )
    if platform.system() == "Windows":
        HANDLED_SIGNALS = (*HANDLED_SIGNALS, signal.SIGBREAK)  # type: ignore

    d = {"should_exit": False}

    def handle_windows_exit(
        signum: int, frame: Optional[FrameType], d: Dict[str, bool] = d
    ) -> None:
        d["should_exit"] = True

    def handle_exit(sig: int, d: Dict[str, bool] = d) -> None:
        d["should_exit"] = True

    for sig in HANDLED_SIGNALS:
        if platform.system() == "Windows":
            signal.signal(sig, handle_windows_exit)
        else:
            loop.add_signal_handler(sig, handle_exit, sig)

    async with asyncer.create_task_group() as tg:
        args = [
            "run_fastkafka_server_process",
            "--kafka-broker",
            kafka_broker,
            app,
        ]
        tasks = [
            tg.soonify(asyncio.create_subprocess_exec)(
                *args,
                limit=1024 * 1024,  # Set StreamReader buffer limit to 1MB
                stdout=asyncio.subprocess.PIPE,
                stdin=asyncio.subprocess.PIPE,
            )
            for i in range(num_workers)
        ]

    procs = [task.value for task in tasks]

    async def log_output(
        output: Optional[asyncio.StreamReader], pid: int, d: Dict[str, bool] = d
    ) -> None:
        if output is None:
            raise RuntimeError("Expected StreamReader, got None. Is stdout piped?")
        while not output.at_eof():
            try:
                outs = await output.readline()
            except ValueError:
                typer.echo(f"[{pid:03d}]: Failed to read log output", nl=False)
                continue
            if outs != b"":
                typer.echo(f"[{pid:03d}]: " + outs.decode("utf-8").strip(), nl=False)

    async with asyncer.create_task_group() as tg:
        for proc in procs:
            tg.soonify(log_output)(proc.stdout, proc.pid)

        while not d["should_exit"]:
            await asyncio.sleep(0.2)

        typer.echo("Starting process cleanup, this may take a few seconds...")
        for proc in procs:
            tg.soonify(terminate_asyncio_process)(proc)

    for proc in procs:
        output, _ = await proc.communicate()
        if output:
            typer.echo(f"[{proc.pid:03d}]: " + output.decode("utf-8").strip(), nl=False)

    returncodes = [proc.returncode for proc in procs]
    if not returncodes == [0] * len(procs):
        typer.secho(
            f"Return codes are not all zero: {returncodes}",
            err=True,
            fg=typer.colors.RED,
        )
        raise typer.Exit(1)

# %% ../nbs/021_FastKafkaServer.ipynb 12
@contextmanager
def run_in_process(
    target: Callable[..., Any]
) -> Generator[multiprocessing.Process, None, None]:
    """
    Runs the target function in a separate process.

    Args:
        target (Callable[..., Any]): The function to run in a separate process.

    Yields:
        Generator[multiprocessing.Process, None, None]: A generator that yields the process object.
    """
    p = multiprocessing.Process(target=target)
    try:
        p.start()
        yield p
    except Exception as e:
        print(f"Exception raised {e=}")
    finally:
        p.terminate()
        p.join()
