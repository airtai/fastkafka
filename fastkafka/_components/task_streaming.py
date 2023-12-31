# AUTOGENERATED! DO NOT EDIT! File to edit: ../../nbs/006_TaskStreaming.ipynb.

# %% auto 0
__all__ = ['logger', 'TaskPool', 'ExceptionMonitor', 'StreamExecutor', 'DynamicTaskExecutor', 'SequentialExecutor',
           'get_executor']

# %% ../../nbs/006_TaskStreaming.ipynb 1
import asyncio
import sys
from abc import ABC, abstractmethod

from asyncio import Task
from typing import *

import anyio
from aiokafka import ConsumerRecord

from logging import Logger
from .logger import get_logger
from .meta import export

# %% ../../nbs/006_TaskStreaming.ipynb 3
logger = get_logger(__name__)

# %% ../../nbs/006_TaskStreaming.ipynb 10
class TaskPool:
    def __init__(
        self,
        size: int = 100_000,
        on_error: Optional[Callable[[BaseException], None]] = None,
    ):
        """
        Initializes a TaskPool instance.

        Args:
            size: The size of the task pool. Defaults to 100,000.
            on_error: Optional callback function to handle task errors. Defaults to None.

        Returns:
            None
        """
        self.size = size
        self.pool: Set[Task] = set()
        self.on_error = on_error
        self.finished = False

    async def add(self, item: Task) -> None:
        """
        Adds a task to the task pool.

        Args:
            item: The task to be added.

        Returns:
            None
        """
        while len(self.pool) >= self.size:
            await asyncio.sleep(0)
        self.pool.add(item)
        item.add_done_callback(self.discard)

    def discard(self, task: Task) -> None:
        """
        Discards a completed task from the task pool.

        Args:
            task: The completed task to be discarded.

        Returns:
            None
        """
        e = task.exception()
        if e is not None and self.on_error is not None:
            try:
                self.on_error(e)
            except Exception as ee:
                logger.warning(
                    f"Exception {ee} raised when calling on_error() callback: {e}"
                )

        self.pool.discard(task)

    def __len__(self) -> int:
        """
        Returns the number of tasks in the task pool.

        Returns:
            The number of tasks in the task pool.
        """
        return len(self.pool)

    async def __aenter__(self) -> "TaskPool":
        self.finished = False
        return self

    async def __aexit__(self, *args: Any, **kwargs: Any) -> None:
        while len(self) > 0:
            await asyncio.sleep(0)
        self.finished = True

    @staticmethod
    def log_error(logger: Logger) -> Callable[[Exception], None]:
        """
        Creates a decorator that logs errors using the specified logger.

        Args:
            logger: The logger to use for error logging.

        Returns:
            The decorator function.
        """

        def _log_error(e: Exception, logger: Logger = logger) -> None:
            logger.warning(f"{e=}")

        return _log_error

# %% ../../nbs/006_TaskStreaming.ipynb 14
class ExceptionMonitor:
    def __init__(self) -> None:
        """
        Initializes an ExceptionMonitor instance.

        Returns:
            None
        """
        self.exceptions: List[Exception] = []
        self.exception_found = False

    def on_error(self, e: Exception) -> None:
        """
        Handles an error by storing the exception.

        Args:
            e: The exception to be handled.

        Returns:
            None
        """
        self.exceptions.append(e)
        self.exception_found = True

    def _monitor_step(self) -> None:
        """
        Raises the next exception in the queue.

        Returns:
            None
        """
        if len(self.exceptions) > 0:
            e = self.exceptions.pop(0)
            raise e

    async def __aenter__(self) -> "ExceptionMonitor":
        return self

    async def __aexit__(self, *args: Any, **kwargs: Any) -> None:
        while len(self.exceptions) > 0:
            self._monitor_step()
            await asyncio.sleep(0)

# %% ../../nbs/006_TaskStreaming.ipynb 17
class StreamExecutor(ABC):
    @abstractmethod
    async def run(  # type: ignore
        self,
        *,
        is_shutting_down_f: Callable[[], bool],
        generator: Callable[[], Awaitable[ConsumerRecord]],
        processor: Callable[[ConsumerRecord], Awaitable[None]],
    ) -> None:
        """
        Abstract method for running the stream executor.

        Args:
            is_shutting_down_f: Function to check if the executor is shutting down.
            generator: Generator function for retrieving consumer records.
            processor: Processor function for processing consumer records.
        """
        pass

# %% ../../nbs/006_TaskStreaming.ipynb 20
def _process_items_task(  # type: ignore
    processor: Callable[[ConsumerRecord], Awaitable[None]], task_pool: TaskPool
) -> Callable[
    [
        anyio.streams.memory.MemoryObjectReceiveStream,
        Callable[[ConsumerRecord], Awaitable[None]],
        bool,
    ],
    Coroutine[Any, Any, Awaitable[None]],
]:
    async def _process_items_wrapper(  # type: ignore
        receive_stream: anyio.streams.memory.MemoryObjectReceiveStream,
        processor: Callable[[ConsumerRecord], Awaitable[None]] = processor,
        task_pool=task_pool,
    ):
        async with receive_stream:
            async for msg in receive_stream:
                task: asyncio.Task = asyncio.create_task(processor(msg))  # type: ignore
                await task_pool.add(task)

    return _process_items_wrapper

# %% ../../nbs/006_TaskStreaming.ipynb 21
@export("fastkafka.executors")
class DynamicTaskExecutor(StreamExecutor):
    """A class that implements a dynamic task executor for processing consumer records.

    The DynamicTaskExecutor class extends the StreamExecutor class and provides functionality
    for running a tasks in parallel using asyncio.Task.
    """

    def __init__(
        self,
        throw_exceptions: bool = False,
        max_buffer_size: int = 100_000,
        size: int = 100_000,
    ):
        """Create an instance of DynamicTaskExecutor

        Args:
            throw_exceptions: Flag indicating whether exceptions should be thrown ot logged.
                Defaults to False.
            max_buffer_size: Maximum buffer size for the memory object stream.
                Defaults to 100_000.
            size: Size of the task pool. Defaults to 100_000.
        """
        self.throw_exceptions = throw_exceptions
        self.max_buffer_size = max_buffer_size
        self.exception_monitor = ExceptionMonitor()
        self.task_pool = TaskPool(
            on_error=self.exception_monitor.on_error  # type: ignore
            if throw_exceptions
            else TaskPool.log_error(logger),
            size=size,
        )

    async def run(  # type: ignore
        self,
        *,
        is_shutting_down_f: Callable[[], bool],
        generator: Callable[[], Awaitable[ConsumerRecord]],
        processor: Callable[[ConsumerRecord], Awaitable[None]],
    ) -> None:
        """
        Runs the dynamic task executor.

        Args:
            is_shutting_down_f: Function to check if the executor is shutting down.
            generator: Generator function for retrieving consumer records.
            processor: Processor function for processing consumer records.
        """
        send_stream, receive_stream = anyio.create_memory_object_stream(
            max_buffer_size=self.max_buffer_size
        )

        async with self.exception_monitor, self.task_pool:
            async with anyio.create_task_group() as tg:
                tg.start_soon(
                    _process_items_task(processor, self.task_pool), receive_stream
                )
                async with send_stream:
                    while not is_shutting_down_f():
                        if (
                            self.exception_monitor.exception_found
                            and self.throw_exceptions
                        ):
                            break
                        msgs = await generator()
                        for msg in msgs:
                            await send_stream.send(msg)

# %% ../../nbs/006_TaskStreaming.ipynb 30
def _process_items_coro(  # type: ignore
    processor: Callable[[ConsumerRecord], Awaitable[None]],
    throw_exceptions: bool,
) -> Callable[
    [
        anyio.streams.memory.MemoryObjectReceiveStream,
        Callable[[ConsumerRecord], Awaitable[None]],
        bool,
    ],
    Coroutine[Any, Any, Awaitable[None]],
]:
    async def _process_items_wrapper(  # type: ignore
        receive_stream: anyio.streams.memory.MemoryObjectReceiveStream,
        processor: Callable[[ConsumerRecord], Awaitable[None]] = processor,
        throw_exceptions: bool = throw_exceptions,
    ) -> Awaitable[None]:
        async with receive_stream:
            async for msg in receive_stream:
                try:
                    await processor(msg)
                except Exception as e:
                    if throw_exceptions:
                        raise e
                    else:
                        logger.warning(f"{e=}")

    return _process_items_wrapper

# %% ../../nbs/006_TaskStreaming.ipynb 31
@export("fastkafka.executors")
class SequentialExecutor(StreamExecutor):
    """A class that implements a sequential executor for processing consumer records.

    The SequentialExecutor class extends the StreamExecutor class and provides functionality
    for running processing tasks in sequence by awaiting their coroutines.
    """

    def __init__(
        self,
        throw_exceptions: bool = False,
        max_buffer_size: int = 100_000,
    ):
        """Create an instance of SequentialExecutor

        Args:
            throw_exceptions: Flag indicating whether exceptions should be thrown or logged.
                Defaults to False.
            max_buffer_size: Maximum buffer size for the memory object stream.
                Defaults to 100_000.
        """
        self.throw_exceptions = throw_exceptions
        self.max_buffer_size = max_buffer_size

    async def run(  # type: ignore
        self,
        *,
        is_shutting_down_f: Callable[[], bool],
        generator: Callable[[], Awaitable[ConsumerRecord]],
        processor: Callable[[ConsumerRecord], Awaitable[None]],
    ) -> None:
        """
        Runs the sequential executor.

        Args:
            is_shutting_down_f: Function to check if the executor is shutting down.
            generator: Generator function for retrieving consumer records.
            processor: Processor function for processing consumer records.
        """

        send_stream, receive_stream = anyio.create_memory_object_stream(
            max_buffer_size=self.max_buffer_size
        )

        async with anyio.create_task_group() as tg:
            tg.start_soon(
                _process_items_coro(processor, self.throw_exceptions), receive_stream
            )
            async with send_stream:
                while not is_shutting_down_f():
                    msgs = await generator()
                    for msg in msgs:
                        await send_stream.send(msg)

# %% ../../nbs/006_TaskStreaming.ipynb 34
def get_executor(executor: Union[str, StreamExecutor, None] = None) -> StreamExecutor:
    """
    Returns an instance of the specified executor.

    Args:
        executor: Executor instance or name of the executor.

    Returns:
        Instance of the specified executor.

    Raises:
        AttributeError: If the executor is not found.
    """
    if isinstance(executor, StreamExecutor):
        return executor
    elif executor is None:
        executor = "SequentialExecutor"
    return getattr(sys.modules["fastkafka._components.task_streaming"], executor)()  # type: ignore
