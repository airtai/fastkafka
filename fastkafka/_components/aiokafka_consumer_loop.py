# AUTOGENERATED! DO NOT EDIT! File to edit: ../../nbs/011_ConsumerLoop.ipynb.

# %% auto 0
__all__ = ['logger', 'AsyncConsume', 'AsyncConsumeMeta', 'SyncConsume', 'SyncConsumeMeta', 'ConsumeCallable', 'EventMetadata',
           'sanitize_kafka_config', 'aiokafka_consumer_loop']

# %% ../../nbs/011_ConsumerLoop.ipynb 1
from asyncio import iscoroutinefunction, Task  # do not use the version from inspect
from typing import *
from dataclasses import dataclass

import asyncer
from aiokafka.structs import ConsumerRecord
from pydantic import BaseModel

import fastkafka._aiokafka_imports
from .logger import get_logger
from .meta import delegates, export
from .task_streaming import get_executor, StreamExecutor

# %% ../../nbs/011_ConsumerLoop.ipynb 5
logger = get_logger(__name__)

# %% ../../nbs/011_ConsumerLoop.ipynb 8
@dataclass
@export("fastkafka")
class EventMetadata:
    """A class for encapsulating Kafka record metadata.

    Args:
        topic: The topic this record is received from
        partition: The partition from which this record is received
        offset: The position of this record in the corresponding Kafka partition
        timestamp: The timestamp of this record
        timestamp_type: The timestamp type of this record
        key: The key (or `None` if no key is specified)
        value: The value
        serialized_key_size: The size of the serialized, uncompressed key in bytes
        serialized_value_size: The size of the serialized, uncompressed value in bytes
        headers: The headers
    """

    topic: str
    partition: int
    offset: int
    timestamp: int
    timestamp_type: int
    key: Optional[bytes]
    value: Optional[bytes]
    checksum: int
    serialized_key_size: int
    serialized_value_size: int
    headers: Sequence[Tuple[str, bytes]]

    @staticmethod
    def create_event_metadata(record: ConsumerRecord) -> "EventMetadata":  # type: ignore
        """Creates an instance of EventMetadata from a ConsumerRecord.

        Args:
            record: The Kafka ConsumerRecord.

        Returns:
            The created EventMetadata instance.
        """
        return EventMetadata(
            topic=record.topic,
            partition=record.partition,
            offset=record.offset,
            timestamp=record.timestamp,
            timestamp_type=record.timestamp_type,
            value=record.value,
            checksum=record.checksum,
            key=record.key,
            serialized_key_size=record.serialized_key_size,
            serialized_value_size=record.serialized_value_size,
            headers=record.headers,
        )

# %% ../../nbs/011_ConsumerLoop.ipynb 11
AsyncConsume = Callable[[Union[List[BaseModel], BaseModel]], Awaitable[None]]
AsyncConsumeMeta = Callable[
    [Union[List[BaseModel], BaseModel], Union[List[EventMetadata], EventMetadata]],
    Awaitable[None],
]
SyncConsume = Callable[[Union[List[BaseModel], BaseModel]], None]
SyncConsumeMeta = Callable[
    [Union[List[BaseModel], BaseModel], Union[List[EventMetadata], EventMetadata]], None
]

ConsumeCallable = Union[AsyncConsume, AsyncConsumeMeta, SyncConsume, SyncConsumeMeta]

# %% ../../nbs/011_ConsumerLoop.ipynb 12
def _callback_parameters_wrapper(
    callback: Union[AsyncConsume, AsyncConsumeMeta]
) -> AsyncConsumeMeta:
    """Wraps an async callback and filters the arguments to pass based on if the function accepts EventMetadata as argument

    Args:
        callback: async callable that will be wrapped

    Returns:
        Wrapped callback with filtered params
    """

    async def _params_wrap(
        msg: Union[BaseModel, List[BaseModel]],
        meta: Union[EventMetadata, List[EventMetadata]],
        callback: Union[AsyncConsume, AsyncConsumeMeta] = callback,
    ) -> None:
        types = list(get_type_hints(callback).values())
        args: List[
            Union[BaseModel, List[BaseModel], EventMetadata, List[EventMetadata]]
        ] = [msg]
        if EventMetadata in types:
            args.insert(types.index(EventMetadata), meta)
        if List[EventMetadata] in types:
            args.insert(types.index(List[EventMetadata]), meta)
        await callback(*args)  # type: ignore

    return _params_wrap

# %% ../../nbs/011_ConsumerLoop.ipynb 17
def _prepare_callback(callback: ConsumeCallable) -> AsyncConsumeMeta:
    """
    Prepares a callback to be used in the consumer loop.
        1. If callback is sync, asyncify it
        2. Wrap the callback into a safe callback for exception handling

    Args:
        callback: async callable that will be prepared for use in consumer

    Returns:
        Prepared callback
    """
    async_callback: Union[AsyncConsume, AsyncConsumeMeta] = (
        callback if iscoroutinefunction(callback) else asyncer.asyncify(callback)  # type: ignore
    )
    return _callback_parameters_wrapper(async_callback)

# %% ../../nbs/011_ConsumerLoop.ipynb 24
def _get_single_msg_handlers(  # type: ignore
    *,
    consumer: fastkafka._aiokafka_imports.AIOKafkaConsumer,
    callback: AsyncConsumeMeta,
    decoder_fn: Callable[[bytes, Type[BaseModel]], Any],
    msg_type: Type[BaseModel],
    **kwargs: Any,
) -> Tuple[
    Callable[
        [
            ConsumerRecord,
            AsyncConsumeMeta,
            Callable[[bytes, Type[BaseModel]], Any],
            Type[BaseModel],
        ],
        Awaitable[None],
    ],
    Callable[
        [fastkafka._aiokafka_imports.AIOKafkaConsumer, Any],
        Awaitable[List[ConsumerRecord]],
    ],
]:
    """
    Retrieves the message handlers for consuming single messages from a Kafka topic.

    Args:
        consumer: The Kafka consumer instance.
        callback: The callback function to handle the consumed message.
        decoder_fn: The function to decode the consumed message.
        msg_type: The type of the consumed message.
        **kwargs: Additional keyword arguments for the consumer.

    Returns:
        The handle_msg function and poll_consumer function.
    """

    async def handle_msg(  # type: ignore
        record: ConsumerRecord,
        callback: AsyncConsumeMeta = callback,
        decoder_fn: Callable[[bytes, Type[BaseModel]], Any] = decoder_fn,
        msg_type: Type[BaseModel] = msg_type,
    ) -> None:
        await callback(
            decoder_fn(record.value, msg_type),
            EventMetadata.create_event_metadata(record),
        )

    async def poll_consumer(  # type: ignore
        consumer: fastkafka._aiokafka_imports.AIOKafkaConsumer = consumer,
        kwargs: Any = kwargs,
    ) -> List[ConsumerRecord]:
        msgs = await consumer.getmany(**kwargs)
        return [msg for msg_group in msgs.values() for msg in msg_group]

    return handle_msg, poll_consumer

# %% ../../nbs/011_ConsumerLoop.ipynb 26
def _get_batch_msg_handlers(  # type: ignore
    *,
    consumer: fastkafka._aiokafka_imports.AIOKafkaConsumer,
    callback: AsyncConsumeMeta,
    decoder_fn: Callable[[bytes, Type[BaseModel]], Any],
    msg_type: Type[BaseModel],
    **kwargs: Any,
) -> Tuple[
    Callable[
        [
            List[ConsumerRecord],
            AsyncConsumeMeta,
            Callable[[bytes, Type[BaseModel]], Any],
            Type[BaseModel],
        ],
        Awaitable[None],
    ],
    Callable[
        [fastkafka._aiokafka_imports.AIOKafkaConsumer, Any],
        Awaitable[List[List[ConsumerRecord]]],
    ],
]:
    """
    Retrieves the message handlers for consuming messages in batches from a Kafka topic.

    Args:
        consumer: The Kafka consumer instance.
        callback: The callback function to handle the consumed messages.
        decoder_fn: The function to decode the consumed messages.
        msg_type: The type of the consumed messages.
        **kwargs: Additional keyword arguments for the consumer.

    Returns:
        The handle_msg function and poll_consumer function.
    """

    async def handle_msg(  # type: ignore
        records: List[ConsumerRecord],
        callback: AsyncConsumeMeta = callback,
        decoder_fn: Callable[[bytes, Type[BaseModel]], Any] = decoder_fn,
        msg_type: Type[BaseModel] = msg_type,
    ) -> None:
        await callback(
            [decoder_fn(record.value, msg_type) for record in records],
            [EventMetadata.create_event_metadata(record) for record in records],
        )

    async def poll_consumer(  # type: ignore
        consumer: fastkafka._aiokafka_imports.AIOKafkaConsumer = consumer,
        kwargs: Any = kwargs,
    ) -> List[List[ConsumerRecord]]:
        msgs = await consumer.getmany(**kwargs)
        return [value for value in msgs.values() if len(value) > 0]

    return handle_msg, poll_consumer

# %% ../../nbs/011_ConsumerLoop.ipynb 28
@delegates(fastkafka._aiokafka_imports.AIOKafkaConsumer.getmany)
async def _aiokafka_consumer_loop(  # type: ignore
    consumer: fastkafka._aiokafka_imports.AIOKafkaConsumer,
    *,
    topic: str,
    decoder_fn: Callable[[bytes, Type[BaseModel]], Any],
    callback: ConsumeCallable,
    max_buffer_size: int = 100_000,
    msg_type: Union[Type[List[BaseModel]], Type[BaseModel]],
    is_shutting_down_f: Callable[[], bool],
    executor: Union[str, StreamExecutor, None] = None,
    **kwargs: Any,
) -> None:
    """
    Consumer loop for infinite pooling of the AIOKafka consumer for new messages. Calls consumer.getmany()
    and after the consumer return messages or times out, messages are decoded and streamed to defined callback.

    Args:
        topic: Topic to subscribe
        decoder_fn: Function to decode the messages consumed from the topic
        callbacks: Dict of callbacks mapped to their respective topics
        timeout_ms: Time to timeut the getmany request by the consumer
        max_buffer_size: Maximum number of unconsumed messages in the callback buffer
        msg_types: Dict of message types mapped to their respective topics
        is_shutting_down_f: Function for controlling the shutdown of consumer loop
    """

    prepared_callback = _prepare_callback(callback)

    if hasattr(msg_type, "__origin__") and msg_type.__origin__ == list:
        handle_msg, poll_consumer = _get_batch_msg_handlers(
            consumer=consumer,
            callback=prepared_callback,
            decoder_fn=decoder_fn,
            msg_type=msg_type.__args__[0],  # type: ignore
            **kwargs,
        )
    else:
        handle_msg, poll_consumer = _get_single_msg_handlers(
            consumer=consumer,
            callback=prepared_callback,
            decoder_fn=decoder_fn,
            msg_type=msg_type,  # type: ignore
            **kwargs,
        )

    await get_executor(executor).run(
        is_shutting_down_f=is_shutting_down_f,
        generator=poll_consumer,  # type: ignore
        processor=handle_msg,  # type: ignore
    )

# %% ../../nbs/011_ConsumerLoop.ipynb 35
def sanitize_kafka_config(**kwargs: Any) -> Dict[str, Any]:
    """Sanitize Kafka config"""
    return {k: "*" * len(v) if "pass" in k.lower() else v for k, v in kwargs.items()}

# %% ../../nbs/011_ConsumerLoop.ipynb 37
@delegates(fastkafka._aiokafka_imports.AIOKafkaConsumer)
@delegates(_aiokafka_consumer_loop, keep=True)
async def aiokafka_consumer_loop(
    topic: str,
    decoder_fn: Callable[[bytes, Type[BaseModel]], Any],
    *,
    timeout_ms: int = 100,
    max_buffer_size: int = 100_000,
    callback: ConsumeCallable,
    msg_type: Union[Type[List[BaseModel]], Type[BaseModel]],
    is_shutting_down_f: Callable[[], bool],
    executor: Union[str, StreamExecutor, None] = None,
    **kwargs: Any,
) -> None:
    """Consumer loop for infinite pooling of the AIOKafka consumer for new messages. Creates and starts AIOKafkaConsumer
    and runs _aio_kafka_consumer loop fo infinite poling of the consumer for new messages.

    Args:
        topic: name of the topic to subscribe to
        decoder_fn: Function to decode the messages consumed from the topic
        callback: callback function to be called after decoding and parsing a consumed message
        timeout_ms: Time to timeut the getmany request by the consumer
        max_buffer_size: Maximum number of unconsumed messages in the callback buffer
        msg_type: Type with `parse_json` method used for parsing a decoded message
        is_shutting_down_f: Function for controlling the shutdown of consumer loop
    """
    logger.info(f"aiokafka_consumer_loop() starting...")
    try:
        consumer = fastkafka._aiokafka_imports.AIOKafkaConsumer(
            **kwargs,
        )
        logger.info(
            f"aiokafka_consumer_loop(): Consumer created using the following parameters: {sanitize_kafka_config(**kwargs)}"
        )

        await consumer.start()
        logger.info("aiokafka_consumer_loop(): Consumer started.")
        consumer.subscribe([topic])
        logger.info("aiokafka_consumer_loop(): Consumer subscribed.")

        try:
            await _aiokafka_consumer_loop(
                consumer=consumer,
                topic=topic,
                decoder_fn=decoder_fn,
                max_buffer_size=max_buffer_size,
                timeout_ms=timeout_ms,
                callback=callback,
                msg_type=msg_type,
                is_shutting_down_f=is_shutting_down_f,
                executor=executor,
            )
        finally:
            await consumer.stop()
            logger.info(f"aiokafka_consumer_loop(): Consumer stopped.")
            logger.info(f"aiokafka_consumer_loop() finished.")
    except Exception as e:
        logger.error(
            f"aiokafka_consumer_loop(): unexpected exception raised: '{e.__repr__()}'"
        )
        raise e
