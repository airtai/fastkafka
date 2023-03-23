# AUTOGENERATED! DO NOT EDIT! File to edit: ../../nbs/017_LocalRedpandaBroker.ipynb.

# %% auto 0
__all__ = ['logger', 'LocalRedpandaBroker', 'check_docker']

# %% ../../nbs/017_LocalRedpandaBroker.ipynb 1
import asyncio
from pathlib import Path
from tempfile import TemporaryDirectory
from typing import *

import asyncer
import nest_asyncio
from fastcore.basics import patch

from .._components._subprocess import terminate_asyncio_process
from .._components.helpers import in_notebook
from .._components.logger import get_logger
from .local_broker import get_free_port, run_and_match

# %% ../../nbs/017_LocalRedpandaBroker.ipynb 3
if in_notebook():
    from tqdm.notebook import tqdm
else:
    from tqdm import tqdm

# %% ../../nbs/017_LocalRedpandaBroker.ipynb 4
logger = get_logger(__name__)

# %% ../../nbs/017_LocalRedpandaBroker.ipynb 6
class LocalRedpandaBroker:
    """LocalRedpandaBroker class, used for running unique redpanda brokers in tests to prevent topic clashing."""

    #     @delegates(get_kafka_config_string)  # type: ignore
    #     @delegates(get_zookeeper_config_string, keep=True)  # type: ignore
    def __init__(
        self,
        topics: Iterable[str] = [],
        *,
        retries: int = 3,
        apply_nest_asyncio: bool = False,
        **kwargs: Dict[str, Any],
    ):
        """Initialises the LocalRedpandaBroker object

        Args:
            listener_port: Port on which the clients (producers and consumers) can connect
            topics: List of topics to create after sucessfull redpanda broker startup
            retries: Number of retries to create redpanda service
            apply_nest_asyncio: set to True if running in notebook
            port allocation if the requested port was taken
        """
        self.redpanda_kwargs = kwargs

        if "listener_port" not in self.redpanda_kwargs:
            self.redpanda_kwargs["listener_port"] = 9092  # type: ignore

        self.retries = retries
        self.apply_nest_asyncio = apply_nest_asyncio
        self.temporary_directory: Optional[TemporaryDirectory] = None
        self.temporary_directory_path: Optional[Path] = None
        self.redpanda_task: Optional[asyncio.subprocess.Process] = None
        self._is_started = False
        self.topics: Iterable[str] = topics

    @property
    def is_started(self) -> bool:
        return self._is_started

    @classmethod
    def _check_deps(cls) -> None:
        """Prepares the environment for running redpanda brokers.
        Returns:
           None
        """
        raise NotImplementedError

    async def _start(self) -> str:
        """Starts a local redpanda broker instance asynchronously
        Returns:
           Redpanda broker bootstrap server address in string format: add:port
        """
        raise NotImplementedError

    def start(self) -> str:
        """Starts a local redpanda broker instance synchronously
        Returns:
           Redpanda broker bootstrap server address in string format: add:port
        """
        raise NotImplementedError

    def stop(self) -> None:
        """Stops a local redpanda broker instance synchronously
        Returns:
           None
        """
        raise NotImplementedError

    async def _stop(self) -> None:
        """Stops a local redpanda broker instance synchronously
        Returns:
           None
        """
        raise NotImplementedError

    def get_service_config_string(self, service: str, *, data_dir: Path) -> str:
        """Generates a configuration for a service
        Args:
            data_dir: Path to the directory where the zookeepeer instance will save data
            service: "redpanda", defines which service to get config string for
        """
        raise NotImplementedError

    async def _start_redpanda(self) -> None:
        """Start a local redpanda broker
        Returns:
           None
        """
        raise NotImplementedError

    async def _create_topics(self) -> None:
        """Create missing topics in local redpanda broker
        Returns:
           None
        """
        raise NotImplementedError

    def __enter__(self) -> str:
        return self.start()

    def __exit__(self, *args: Any, **kwargs: Any) -> None:
        self.stop()

    async def __aenter__(self) -> str:
        return await self._start()

    async def __aexit__(self, *args: Any, **kwargs: Any) -> None:
        await self._stop()


LocalRedpandaBroker.__module__ = "fastkafka.testing"

# %% ../../nbs/017_LocalRedpandaBroker.ipynb 8
async def check_docker() -> bool:
    try:
        docker_task = await run_and_match("docker", "-v", pattern="Docker version")
        return True
    except Exception as e:
        logger.debug(f"Error in check_docker() : {e}")
        return False

# %% ../../nbs/017_LocalRedpandaBroker.ipynb 10
@patch(cls_method=True)  # type: ignore
def _check_deps(cls: LocalRedpandaBroker) -> None:
    if not check_docker():
        raise RuntimeError(
            "Docker installation not found! Please install docker manually and retry."
        )

# %% ../../nbs/017_LocalRedpandaBroker.ipynb 13
@patch  # type: ignore
async def _start_redpanda(self: LocalRedpandaBroker, service: str = "redpanda") -> None:
    logger.info(f"Starting {service}...")

    if self.temporary_directory_path is None:
        raise ValueError(
            "LocalRedpandaBroker._start_redpanda(): self.temporary_directory_path is None, did you initialise it?"
        )

    configs_tried: List[Dict[str, Any]] = []

    for i in range(self.retries + 1):
        configs_tried = configs_tried + [getattr(self, f"{service}_kwargs").copy()]
        port: str = self.redpanda_kwargs["listener_port"]  # type: ignore

        docker_cli_args = [
            "docker",
            "run",
            "--rm",
            "--name",
            f"redpanda_{port}",
            "-p",
            f"{port}:{port}",
            "docker.redpanda.com/redpandadata/redpanda",
            "redpanda",
            "start",
            "--kafka-addr",
            f"internal://0.0.0.0:9090,external://0.0.0.0:{port}",
            "--advertise-kafka-addr",
            f"internal://localhost:9090,external://localhost:{port}",
        ]

        try:
            service_task = await run_and_match(
                *docker_cli_args,
                capture="stderr",
                pattern="Successfully started Redpanda",
                timeout=30,
            )
        except Exception as e:
            print(e)
            logger.info(
                f"{service} startup failed, generating a new port and retrying..."
            )
            port = get_free_port()
            self.redpanda_kwargs["listener_port"] = port  # type: ignore

            logger.info(f"port={port}")
        else:
            setattr(self, f"{service}_task", service_task)
            return

    logger.error(docker_cli_args)
    raise ValueError(f"Could not start {service} with params: {configs_tried}")


@patch  # type: ignore
async def _create_topics(self: LocalRedpandaBroker) -> None:
    listener_port = self.redpanda_kwargs.get("listener_port", 9092)

    async with asyncer.create_task_group() as tg:
        processes = [
            tg.soonify(run_and_match)(
                "docker",
                "exec",
                f"redpanda_{listener_port}",
                "rpk",
                "topic",
                "create",
                topic,
                pattern=topic,
                timeout=10,
            )
            for topic in self.topics
        ]

    try:
        return_values = [
            await asyncio.wait_for(process.value.wait(), 30) for process in processes
        ]
        if any(return_value != 0 for return_value in return_values):
            raise ValueError("Could not create missing topics!")
    except asyncio.TimeoutError as _:
        raise ValueError("Timed out while creating missing topics!")


@patch  # type: ignore
async def _start(self: LocalRedpandaBroker) -> str:
    self._check_deps()

    self.temporary_directory = TemporaryDirectory()
    self.temporary_directory_path = Path(self.temporary_directory.__enter__())

    await self._start_redpanda()

    listener_port = self.redpanda_kwargs.get("listener_port", 9092)
    bootstrap_server = f"127.0.0.1:{listener_port}"
    logger.info(f"Local Redpanda broker up and running on {bootstrap_server}")

    await self._create_topics()

    self._is_started = True

    return bootstrap_server


@patch  # type: ignore
async def _stop(self: LocalRedpandaBroker) -> None:
    await terminate_asyncio_process(self.redpanda_task)  # type: ignore
    self.temporary_directory.__exit__(None, None, None)  # type: ignore
    self._is_started = False

# %% ../../nbs/017_LocalRedpandaBroker.ipynb 15
@patch  # type: ignore
def start(self: LocalRedpandaBroker) -> str:
    """Starts a local redpanda broker instance synchronously
    Returns:
       Redpanda broker bootstrap server address in string format: add:port
    """
    logger.info(f"{self.__class__.__name__}.start(): entering...")
    try:
        # get or create loop
        try:
            loop = asyncio.get_event_loop()
        except RuntimeError as e:
            logger.warning(
                f"{self.__class__.__name__}.start(): RuntimeError raised when calling asyncio.get_event_loop(): {e}"
            )
            logger.warning(
                f"{self.__class__.__name__}.start(): asyncio.new_event_loop()"
            )
            loop = asyncio.new_event_loop()

        # start redpanda broker in the loop

        if loop.is_running():
            if self.apply_nest_asyncio:
                logger.warning(
                    f"{self.__class__.__name__}.start(): ({loop}) is already running!"
                )
                logger.warning(
                    f"{self.__class__.__name__}.start(): calling nest_asyncio.apply()"
                )
                nest_asyncio.apply(loop)
            else:
                msg = f"{self.__class__.__name__}.start(): ({loop}) is already running! Use 'apply_nest_asyncio=True' when creating 'LocalRedpandaBroker' to prevent this."
                logger.error(msg)
                raise RuntimeError(msg)

        try:
            retval = loop.run_until_complete(self._start())
            logger.info(f"{self.__class__}.start(): returning {retval}")
            return retval
        except RuntimeError as e:
            logger.warning(
                f"{self.__class__.__name__}.start(): RuntimeError raised for loop ({loop}): {e}"
            )
            logger.warning(
                f"{self.__class__.__name__}.start(): calling nest_asyncio.apply()"
            )
    finally:
        logger.info(f"{self.__class__.__name__}.start(): exited.")


@patch  # type: ignore
def stop(self: LocalRedpandaBroker) -> None:
    """Stops a local redpanda broker instance synchronously
    Returns:
       None
    """
    logger.info(f"{self.__class__.__name__}.stop(): entering...")
    try:
        if not self._is_started:
            raise RuntimeError(
                "LocalRedpandaBroker not started yet, please call LocalRedpandaBroker.start() before!"
            )

        loop = asyncio.get_event_loop()
        loop.run_until_complete(self._stop())
    finally:
        logger.info(f"{self.__class__.__name__}.stop(): exited.")