## `fastkafka.FastKafka` {#fastkafka.FastKafka}

### `__init__` {#init}

`def __init__(self, title: Optional[str] = None, description: Optional[str] = None, version: Optional[str] = None, contact: Optional[Dict[str, str]] = None, kafka_brokers: Optional[Dict[str, Any]] = None, root_path: Optional[pathlib.Path, str] = None, lifespan: Optional[Callable[[ForwardRef('FastKafka')], AsyncContextManager[NoneType]]] = None, loop=None, bootstrap_servers='localhost', client_id=None, metadata_max_age_ms=300000, request_timeout_ms=40000, api_version='auto', acks=<object object at 0x7fcedfc68f60>, key_serializer=None, value_serializer=None, compression_type=None, max_batch_size=16384, partitioner=<kafka.partitioner.default.DefaultPartitioner object at 0x7fcedec6c850>, max_request_size=1048576, linger_ms=0, send_backoff_ms=100, retry_backoff_ms=100, security_protocol='PLAINTEXT', ssl_context=None, connections_max_idle_ms=540000, enable_idempotence=False, transactional_id=None, transaction_timeout_ms=60000, sasl_mechanism='PLAIN', sasl_plain_password=None, sasl_plain_username=None, sasl_kerberos_service_name='kafka', sasl_kerberos_domain_name=None, sasl_oauth_token_provider=None, group_id=None, key_deserializer=None, value_deserializer=None, fetch_max_wait_ms=500, fetch_max_bytes=52428800, fetch_min_bytes=1, max_partition_fetch_bytes=1048576, auto_offset_reset='latest', enable_auto_commit=True, auto_commit_interval_ms=5000, check_crcs=True, partition_assignment_strategy=(<class 'kafka.coordinator.assignors.roundrobin.RoundRobinPartitionAssignor'>,), max_poll_interval_ms=300000, rebalance_timeout_ms=None, session_timeout_ms=10000, heartbeat_interval_ms=3000, consumer_timeout_ms=200, max_poll_records=None, exclude_internal_topics=True, isolation_level='read_uncommitted') -> None`

Creates FastKafka application

**Parameters**:
- `title`: optional title for the documentation. If None,
the title will be set to empty string
- `description`: optional description for the documentation. If
None, the description will be set to empty string
- `version`: optional version for the documentation. If None,
the version will be set to empty string
- `contact`: optional contact for the documentation. If None, the
contact will be set to placeholder values:
name='Author' url=HttpUrl(' https://www.google.com ', ) email='noreply@gmail.com'
- `kafka_brokers`: dictionary describing kafka brokers used for setting
the bootstrap server when running the applicationa and for
generating documentation. Defaults to
    {
        "localhost": {
            "url": "localhost",
            "description": "local kafka broker",
            "port": "9092",
        }
    }
- `root_path`: path to where documentation will be created
- `lifespan`: asynccontextmanager that is used for setting lifespan hooks.
__aenter__ is called before app start and __aexit__ after app stop.
The lifespan is called whe application is started as async context
manager, e.g.:`async with kafka_app...`
- `bootstrap_servers`: a ``host[:port]`` string or list of
``host[:port]`` strings that the producer should contact to
bootstrap initial cluster metadata. This does not have to be the
full node list.  It just needs to have at least one broker that will
respond to a Metadata API Request. Default port is 9092. If no
servers are specified, will default to ``localhost:9092``.
- `client_id`: a name for this client. This string is passed in
each request to servers and can be used to identify specific
server-side log entries that correspond to this client.
Default: ``aiokafka-producer-#`` (appended with a unique number
per instance)
- `key_serializer`: used to convert user-supplied keys to bytes
If not :data:`None`, called as ``f(key),`` should return
:class:`bytes`.
Default: :data:`None`.
- `value_serializer`: used to convert user-supplied message
values to :class:`bytes`. If not :data:`None`, called as
``f(value)``, should return :class:`bytes`.
Default: :data:`None`.
- `acks`: one of ``0``, ``1``, ``all``. The number of acknowledgments
the producer requires the leader to have received before considering a
request complete. This controls the durability of records that are
sent. The following settings are common:

* ``0``: Producer will not wait for any acknowledgment from the server
  at all. The message will immediately be added to the socket
  buffer and considered sent. No guarantee can be made that the
  server has received the record in this case, and the retries
  configuration will not take effect (as the client won't
  generally know of any failures). The offset given back for each
  record will always be set to -1.
* ``1``: The broker leader will write the record to its local log but
  will respond without awaiting full acknowledgement from all
  followers. In this case should the leader fail immediately
  after acknowledging the record but before the followers have
  replicated it then the record will be lost.
* ``all``: The broker leader will wait for the full set of in-sync
  replicas to acknowledge the record. This guarantees that the
  record will not be lost as long as at least one in-sync replica
  remains alive. This is the strongest available guarantee.

If unset, defaults to ``acks=1``. If `enable_idempotence` is
:data:`True` defaults to ``acks=all``
- `compression_type`: The compression type for all data generated by
the producer. Valid values are ``gzip``, ``snappy``, ``lz4``, ``zstd``
or :data:`None`.
Compression is of full batches of data, so the efficacy of batching
will also impact the compression ratio (more batching means better
compression). Default: :data:`None`.
- `max_batch_size`: Maximum size of buffered data per partition.
After this amount :meth:`send` coroutine will block until batch is
drained.
Default: 16384
- `linger_ms`: The producer groups together any records that arrive
in between request transmissions into a single batched request.
Normally this occurs only under load when records arrive faster
than they can be sent out. However in some circumstances the client
may want to reduce the number of requests even under moderate load.
This setting accomplishes this by adding a small amount of
artificial delay; that is, if first request is processed faster,
than `linger_ms`, producer will wait ``linger_ms - process_time``.
Default: 0 (i.e. no delay).
- `partitioner`: Callable used to determine which partition
each message is assigned to. Called (after key serialization):
``partitioner(key_bytes, all_partitions, available_partitions)``.
The default partitioner implementation hashes each non-None key
using the same murmur2 algorithm as the Java client so that
messages with the same key are assigned to the same partition.
When a key is :data:`None`, the message is delivered to a random partition
(filtered to partitions with available leaders only, if possible).
- `max_request_size`: The maximum size of a request. This is also
effectively a cap on the maximum record size. Note that the server
has its own cap on record size which may be different from this.
This setting will limit the number of record batches the producer
will send in a single request to avoid sending huge requests.
Default: 1048576.
- `metadata_max_age_ms`: The period of time in milliseconds after
which we force a refresh of metadata even if we haven't seen any
partition leadership changes to proactively discover any new
brokers or partitions. Default: 300000
- `request_timeout_ms`: Produce request timeout in milliseconds.
As it's sent as part of
:class:`~kafka.protocol.produce.ProduceRequest` (it's a blocking
call), maximum waiting time can be up to ``2 *
request_timeout_ms``.
Default: 40000.
- `retry_backoff_ms`: Milliseconds to backoff when retrying on
errors. Default: 100.
- `api_version`: specify which kafka API version to use.
If set to ``auto``, will attempt to infer the broker version by
probing various APIs. Default: ``auto``
- `security_protocol`: Protocol used to communicate with brokers.
Valid values are: ``PLAINTEXT``, ``SSL``, ``SASL_PLAINTEXT``,
``SASL_SSL``. Default: ``PLAINTEXT``.
- `ssl_context`: pre-configured :class:`~ssl.SSLContext`
for wrapping socket connections. Directly passed into asyncio's
:meth:`~asyncio.loop.create_connection`. For more
information see :ref:`ssl_auth`.
Default: :data:`None`
- `connections_max_idle_ms`: Close idle connections after the number
of milliseconds specified by this config. Specifying :data:`None` will
disable idle checks. Default: 540000 (9 minutes).
- `enable_idempotence`: When set to :data:`True`, the producer will
ensure that exactly one copy of each message is written in the
stream. If :data:`False`, producer retries due to broker failures,
etc., may write duplicates of the retried message in the stream.
Note that enabling idempotence acks to set to ``all``. If it is not
explicitly set by the user it will be chosen. If incompatible
values are set, a :exc:`ValueError` will be thrown.
New in version 0.5.0.
- `sasl_mechanism`: Authentication mechanism when security_protocol
is configured for ``SASL_PLAINTEXT`` or ``SASL_SSL``. Valid values
are: ``PLAIN``, ``GSSAPI``, ``SCRAM-SHA-256``, ``SCRAM-SHA-512``,
``OAUTHBEARER``.
Default: ``PLAIN``
- `sasl_plain_username`: username for SASL ``PLAIN`` authentication.
Default: :data:`None`
- `sasl_plain_password`: password for SASL ``PLAIN`` authentication.
Default: :data:`None`
- `sasl_oauth_token_provider (`: class:`~aiokafka.abc.AbstractTokenProvider`):
OAuthBearer token provider instance. (See
:mod:`kafka.oauth.abstract`).
Default: :data:`None`
- `*topics`: optional list of topics to subscribe to. If not set,
call :meth:`.subscribe` or :meth:`.assign` before consuming records.
Passing topics directly is same as calling :meth:`.subscribe` API.
- `group_id`: name of the consumer group to join for dynamic
partition assignment (if enabled), and to use for fetching and
committing offsets. If None, auto-partition assignment (via
group coordinator) and offset commits are disabled.
Default: None
- `key_deserializer`: Any callable that takes a
raw message key and returns a deserialized key.
- `value_deserializer`: Any callable that takes a
raw message value and returns a deserialized value.
- `fetch_min_bytes`: Minimum amount of data the server should
return for a fetch request, otherwise wait up to
`fetch_max_wait_ms` for more data to accumulate. Default: 1.
- `fetch_max_bytes`: The maximum amount of data the server should
return for a fetch request. This is not an absolute maximum, if
the first message in the first non-empty partition of the fetch
is larger than this value, the message will still be returned
to ensure that the consumer can make progress. NOTE: consumer
performs fetches to multiple brokers in parallel so memory
usage will depend on the number of brokers containing
partitions for the topic.
Supported Kafka version >= 0.10.1.0. Default: 52428800 (50 Mb).
- `fetch_max_wait_ms`: The maximum amount of time in milliseconds
the server will block before answering the fetch request if
there isn't sufficient data to immediately satisfy the
requirement given by fetch_min_bytes. Default: 500.
- `max_partition_fetch_bytes`: The maximum amount of data
per-partition the server will return. The maximum total memory
used for a request ``= #partitions * max_partition_fetch_bytes``.
This size must be at least as large as the maximum message size
the server allows or else it is possible for the producer to
send messages larger than the consumer can fetch. If that
happens, the consumer can get stuck trying to fetch a large
message on a certain partition. Default: 1048576.
- `max_poll_records`: The maximum number of records returned in a
single call to :meth:`.getmany`. Defaults ``None``, no limit.
- `auto_offset_reset`: A policy for resetting offsets on
:exc:`.OffsetOutOfRangeError` errors: ``earliest`` will move to the oldest
available message, ``latest`` will move to the most recent, and
``none`` will raise an exception so you can handle this case.
Default: ``latest``.
- `enable_auto_commit`: If true the consumer's offset will be
periodically committed in the background. Default: True.
- `auto_commit_interval_ms`: milliseconds between automatic
offset commits, if enable_auto_commit is True. Default: 5000.
- `check_crcs`: Automatically check the CRC32 of the records
consumed. This ensures no on-the-wire or on-disk corruption to
the messages occurred. This check adds some overhead, so it may
be disabled in cases seeking extreme performance. Default: True
- `partition_assignment_strategy`: List of objects to use to
distribute partition ownership amongst consumer instances when
group management is used. This preference is implicit in the order
of the strategies in the list. When assignment strategy changes:
to support a change to the assignment strategy, new versions must
enable support both for the old assignment strategy and the new
one. The coordinator will choose the old assignment strategy until
all members have been updated. Then it will choose the new
strategy. Default: [:class:`.RoundRobinPartitionAssignor`]
- `max_poll_interval_ms`: Maximum allowed time between calls to
consume messages (e.g., :meth:`.getmany`). If this interval
is exceeded the consumer is considered failed and the group will
rebalance in order to reassign the partitions to another consumer
group member. If API methods block waiting for messages, that time
does not count against this timeout. See `KIP-62`_ for more
information. Default 300000
- `rebalance_timeout_ms`: The maximum time server will wait for this
consumer to rejoin the group in a case of rebalance. In Java client
this behaviour is bound to `max.poll.interval.ms` configuration,
but as ``aiokafka`` will rejoin the group in the background, we
decouple this setting to allow finer tuning by users that use
:class:`.ConsumerRebalanceListener` to delay rebalacing. Defaults
to ``session_timeout_ms``
- `session_timeout_ms`: Client group session and failure detection
timeout. The consumer sends periodic heartbeats
(`heartbeat.interval.ms`) to indicate its liveness to the broker.
If no hearts are received by the broker for a group member within
the session timeout, the broker will remove the consumer from the
group and trigger a rebalance. The allowed range is configured with
the **broker** configuration properties
`group.min.session.timeout.ms` and `group.max.session.timeout.ms`.
Default: 10000
- `heartbeat_interval_ms`: The expected time in milliseconds
between heartbeats to the consumer coordinator when using
Kafka's group management feature. Heartbeats are used to ensure
that the consumer's session stays active and to facilitate
rebalancing when new consumers join or leave the group. The
value must be set lower than `session_timeout_ms`, but typically
should be set no higher than 1/3 of that value. It can be
adjusted even lower to control the expected time for normal
rebalances. Default: 3000
- `consumer_timeout_ms`: maximum wait timeout for background fetching
routine. Mostly defines how fast the system will see rebalance and
request new data for new partitions. Default: 200
- `exclude_internal_topics`: Whether records from internal topics
(such as offsets) should be exposed to the consumer. If set to True
the only way to receive records from an internal topic is
subscribing to it. Requires 0.10+ Default: True
- `isolation_level`: Controls how to read messages written
transactionally.

If set to ``read_committed``, :meth:`.getmany` will only return
transactional messages which have been committed.
If set to ``read_uncommitted`` (the default), :meth:`.getmany` will
return all messages, even transactional messages which have been
aborted.

Non-transactional messages will be returned unconditionally in
either mode.

Messages will always be returned in offset order. Hence, in
`read_committed` mode, :meth:`.getmany` will only return
messages up to the last stable offset (LSO), which is the one less
than the offset of the first open transaction. In particular any
messages appearing after messages belonging to ongoing transactions
will be withheld until the relevant transaction has been completed.
As a result, `read_committed` consumers will not be able to read up
to the high watermark when there are in flight transactions.
Further, when in `read_committed` the seek_to_end method will
return the LSO. See method docs below. Default: ``read_uncommitted``
- `sasl_oauth_token_provider`: OAuthBearer token provider instance. (See :mod:`kafka.oauth.abstract`).
Default: None

### `benchmark` {#benchmark}

`def benchmark(self: fastkafka.FastKafka, interval: Union[int, datetime.timedelta] = 1, sliding_window_size: Optional[int] = None) -> typing.Callable[[typing.Callable[[~I], typing.Optional[~O]]], typing.Callable[[~I], typing.Optional[~O]]]`

Decorator to benchmark produces/consumes functions

**Parameters**:
- `interval`: Period to use to calculate throughput. If value is of type int,
then it will be used as seconds. If value is of type timedelta,
then it will be used as it is. default: 1 - one second
- `sliding_window_size`: The size of the sliding window to use to calculate
average throughput. default: None - By default average throughput is
not calculated

### `consumes` {#consumes}

`def consumes(self: fastkafka.FastKafka, topic: Optional[str] = None, decoder: Union[str, Callable[[bytes, pydantic.main.ModelMetaclass], Any]] = 'json', executor: Optional[str, fastkafka._components.task_streaming.StreamExecutor] = None, brokers: Optional[Dict[str, Any], fastkafka._components.asyncapi.KafkaBrokers] = None, prefix: str = 'on_', description: Optional[str] = None, loop=None, bootstrap_servers='localhost', client_id='aiokafka-0.8.1', group_id=None, key_deserializer=None, value_deserializer=None, fetch_max_wait_ms=500, fetch_max_bytes=52428800, fetch_min_bytes=1, max_partition_fetch_bytes=1048576, request_timeout_ms=40000, retry_backoff_ms=100, auto_offset_reset='latest', enable_auto_commit=True, auto_commit_interval_ms=5000, check_crcs=True, metadata_max_age_ms=300000, partition_assignment_strategy=(<class 'kafka.coordinator.assignors.roundrobin.RoundRobinPartitionAssignor'>,), max_poll_interval_ms=300000, rebalance_timeout_ms=None, session_timeout_ms=10000, heartbeat_interval_ms=3000, consumer_timeout_ms=200, max_poll_records=None, ssl_context=None, security_protocol='PLAINTEXT', api_version='auto', exclude_internal_topics=True, connections_max_idle_ms=540000, isolation_level='read_uncommitted', sasl_mechanism='PLAIN', sasl_plain_password=None, sasl_plain_username=None, sasl_kerberos_service_name='kafka', sasl_kerberos_domain_name=None, sasl_oauth_token_provider=None) -> typing.Callable[[typing.Union[typing.Callable[[typing.Union[typing.List[pydantic.main.BaseModel], pydantic.main.BaseModel]], typing.Awaitable[NoneType]], typing.Callable[[typing.Union[typing.List[pydantic.main.BaseModel], pydantic.main.BaseModel], typing.Union[typing.List[fastkafka.EventMetadata], fastkafka.EventMetadata]], typing.Awaitable[NoneType]], typing.Callable[[typing.Union[typing.List[pydantic.main.BaseModel], pydantic.main.BaseModel]], NoneType], typing.Callable[[typing.Union[typing.List[pydantic.main.BaseModel], pydantic.main.BaseModel], typing.Union[typing.List[fastkafka.EventMetadata], fastkafka.EventMetadata]], NoneType]]], typing.Union[typing.Callable[[typing.Union[typing.List[pydantic.main.BaseModel], pydantic.main.BaseModel]], typing.Awaitable[NoneType]], typing.Callable[[typing.Union[typing.List[pydantic.main.BaseModel], pydantic.main.BaseModel], typing.Union[typing.List[fastkafka.EventMetadata], fastkafka.EventMetadata]], typing.Awaitable[NoneType]], typing.Callable[[typing.Union[typing.List[pydantic.main.BaseModel], pydantic.main.BaseModel]], NoneType], typing.Callable[[typing.Union[typing.List[pydantic.main.BaseModel], pydantic.main.BaseModel], typing.Union[typing.List[fastkafka.EventMetadata], fastkafka.EventMetadata]], NoneType]]]`

Decorator registering the callback called when a message is received in a topic.

This function decorator is also responsible for registering topics for AsyncAPI specificiation and documentation.

**Parameters**:
- `topic`: Kafka topic that the consumer will subscribe to and execute the
decorated function when it receives a message from the topic,
default: None. If the topic is not specified, topic name will be
inferred from the decorated function name by stripping the defined prefix
- `decoder`: Decoder to use to decode messages consumed from the topic,
default: json - By default, it uses json decoder to decode
bytes to json string and then it creates instance of pydantic
BaseModel. It also accepts custom decoder function.
- `executor`: Type of executor to choose for consuming tasks. Avaliable options
are "SequentialExecutor" and "DynamicTaskExecutor". The default option is
"SequentialExecutor" which will execute the consuming tasks sequentially.
If the consuming tasks have high latency it is recommended to use
"DynamicTaskExecutor" which will wrap the consuming functions into tasks
and run them in on asyncio loop in background. This comes with a cost of
increased overhead so use it only in cases when your consume functions have
high latency such as database queries or some other type of networking.
- `prefix`: Prefix stripped from the decorated function to define a topic name
if the topic argument is not passed, default: "on_". If the decorated
function name is not prefixed with the defined prefix and topic argument
is not passed, then this method will throw ValueError
- `brokers`: Optional argument specifying multiple broker clusters for consuming
messages from different Kafka clusters in FastKafka.
- `description`: Optional description of the consuming function async docs.
If not provided, consuming function __doc__ attr will be used.
- `*topics`: optional list of topics to subscribe to. If not set,
call :meth:`.subscribe` or :meth:`.assign` before consuming records.
Passing topics directly is same as calling :meth:`.subscribe` API.
- `bootstrap_servers`: a ``host[:port]`` string (or list of
``host[:port]`` strings) that the consumer should contact to bootstrap
initial cluster metadata.

This does not have to be the full node list.
It just needs to have at least one broker that will respond to a
Metadata API Request. Default port is 9092. If no servers are
specified, will default to ``localhost:9092``.
- `client_id`: a name for this client. This string is passed in
each request to servers and can be used to identify specific
server-side log entries that correspond to this client. Also
submitted to :class:`~.consumer.group_coordinator.GroupCoordinator`
for logging with respect to consumer group administration. Default:
``aiokafka-{version}``
- `group_id`: name of the consumer group to join for dynamic
partition assignment (if enabled), and to use for fetching and
committing offsets. If None, auto-partition assignment (via
group coordinator) and offset commits are disabled.
Default: None
- `key_deserializer`: Any callable that takes a
raw message key and returns a deserialized key.
- `value_deserializer`: Any callable that takes a
raw message value and returns a deserialized value.
- `fetch_min_bytes`: Minimum amount of data the server should
return for a fetch request, otherwise wait up to
`fetch_max_wait_ms` for more data to accumulate. Default: 1.
- `fetch_max_bytes`: The maximum amount of data the server should
return for a fetch request. This is not an absolute maximum, if
the first message in the first non-empty partition of the fetch
is larger than this value, the message will still be returned
to ensure that the consumer can make progress. NOTE: consumer
performs fetches to multiple brokers in parallel so memory
usage will depend on the number of brokers containing
partitions for the topic.
Supported Kafka version >= 0.10.1.0. Default: 52428800 (50 Mb).
- `fetch_max_wait_ms`: The maximum amount of time in milliseconds
the server will block before answering the fetch request if
there isn't sufficient data to immediately satisfy the
requirement given by fetch_min_bytes. Default: 500.
- `max_partition_fetch_bytes`: The maximum amount of data
per-partition the server will return. The maximum total memory
used for a request ``= #partitions * max_partition_fetch_bytes``.
This size must be at least as large as the maximum message size
the server allows or else it is possible for the producer to
send messages larger than the consumer can fetch. If that
happens, the consumer can get stuck trying to fetch a large
message on a certain partition. Default: 1048576.
- `max_poll_records`: The maximum number of records returned in a
single call to :meth:`.getmany`. Defaults ``None``, no limit.
- `request_timeout_ms`: Client request timeout in milliseconds.
Default: 40000.
- `retry_backoff_ms`: Milliseconds to backoff when retrying on
errors. Default: 100.
- `auto_offset_reset`: A policy for resetting offsets on
:exc:`.OffsetOutOfRangeError` errors: ``earliest`` will move to the oldest
available message, ``latest`` will move to the most recent, and
``none`` will raise an exception so you can handle this case.
Default: ``latest``.
- `enable_auto_commit`: If true the consumer's offset will be
periodically committed in the background. Default: True.
- `auto_commit_interval_ms`: milliseconds between automatic
offset commits, if enable_auto_commit is True. Default: 5000.
- `check_crcs`: Automatically check the CRC32 of the records
consumed. This ensures no on-the-wire or on-disk corruption to
the messages occurred. This check adds some overhead, so it may
be disabled in cases seeking extreme performance. Default: True
- `metadata_max_age_ms`: The period of time in milliseconds after
which we force a refresh of metadata even if we haven't seen any
partition leadership changes to proactively discover any new
brokers or partitions. Default: 300000
- `partition_assignment_strategy`: List of objects to use to
distribute partition ownership amongst consumer instances when
group management is used. This preference is implicit in the order
of the strategies in the list. When assignment strategy changes:
to support a change to the assignment strategy, new versions must
enable support both for the old assignment strategy and the new
one. The coordinator will choose the old assignment strategy until
all members have been updated. Then it will choose the new
strategy. Default: [:class:`.RoundRobinPartitionAssignor`]
- `max_poll_interval_ms`: Maximum allowed time between calls to
consume messages (e.g., :meth:`.getmany`). If this interval
is exceeded the consumer is considered failed and the group will
rebalance in order to reassign the partitions to another consumer
group member. If API methods block waiting for messages, that time
does not count against this timeout. See `KIP-62`_ for more
information. Default 300000
- `rebalance_timeout_ms`: The maximum time server will wait for this
consumer to rejoin the group in a case of rebalance. In Java client
this behaviour is bound to `max.poll.interval.ms` configuration,
but as ``aiokafka`` will rejoin the group in the background, we
decouple this setting to allow finer tuning by users that use
:class:`.ConsumerRebalanceListener` to delay rebalacing. Defaults
to ``session_timeout_ms``
- `session_timeout_ms`: Client group session and failure detection
timeout. The consumer sends periodic heartbeats
(`heartbeat.interval.ms`) to indicate its liveness to the broker.
If no hearts are received by the broker for a group member within
the session timeout, the broker will remove the consumer from the
group and trigger a rebalance. The allowed range is configured with
the **broker** configuration properties
`group.min.session.timeout.ms` and `group.max.session.timeout.ms`.
Default: 10000
- `heartbeat_interval_ms`: The expected time in milliseconds
between heartbeats to the consumer coordinator when using
Kafka's group management feature. Heartbeats are used to ensure
that the consumer's session stays active and to facilitate
rebalancing when new consumers join or leave the group. The
value must be set lower than `session_timeout_ms`, but typically
should be set no higher than 1/3 of that value. It can be
adjusted even lower to control the expected time for normal
rebalances. Default: 3000
- `consumer_timeout_ms`: maximum wait timeout for background fetching
routine. Mostly defines how fast the system will see rebalance and
request new data for new partitions. Default: 200
- `api_version`: specify which kafka API version to use.
:class:`AIOKafkaConsumer` supports Kafka API versions >=0.9 only.
If set to ``auto``, will attempt to infer the broker version by
probing various APIs. Default: ``auto``
- `security_protocol`: Protocol used to communicate with brokers.
Valid values are: ``PLAINTEXT``, ``SSL``, ``SASL_PLAINTEXT``,
``SASL_SSL``. Default: ``PLAINTEXT``.
- `ssl_context`: pre-configured :class:`~ssl.SSLContext`
for wrapping socket connections. Directly passed into asyncio's
:meth:`~asyncio.loop.create_connection`. For more information see
:ref:`ssl_auth`. Default: None.
- `exclude_internal_topics`: Whether records from internal topics
(such as offsets) should be exposed to the consumer. If set to True
the only way to receive records from an internal topic is
subscribing to it. Requires 0.10+ Default: True
- `connections_max_idle_ms`: Close idle connections after the number
of milliseconds specified by this config. Specifying `None` will
disable idle checks. Default: 540000 (9 minutes).
- `isolation_level`: Controls how to read messages written
transactionally.

If set to ``read_committed``, :meth:`.getmany` will only return
transactional messages which have been committed.
If set to ``read_uncommitted`` (the default), :meth:`.getmany` will
return all messages, even transactional messages which have been
aborted.

Non-transactional messages will be returned unconditionally in
either mode.

Messages will always be returned in offset order. Hence, in
`read_committed` mode, :meth:`.getmany` will only return
messages up to the last stable offset (LSO), which is the one less
than the offset of the first open transaction. In particular any
messages appearing after messages belonging to ongoing transactions
will be withheld until the relevant transaction has been completed.
As a result, `read_committed` consumers will not be able to read up
to the high watermark when there are in flight transactions.
Further, when in `read_committed` the seek_to_end method will
return the LSO. See method docs below. Default: ``read_uncommitted``
- `sasl_mechanism`: Authentication mechanism when security_protocol
is configured for ``SASL_PLAINTEXT`` or ``SASL_SSL``. Valid values are:
``PLAIN``, ``GSSAPI``, ``SCRAM-SHA-256``, ``SCRAM-SHA-512``,
``OAUTHBEARER``.
Default: ``PLAIN``
- `sasl_plain_username`: username for SASL ``PLAIN`` authentication.
Default: None
- `sasl_plain_password`: password for SASL ``PLAIN`` authentication.
Default: None
- `sasl_oauth_token_provider`: OAuthBearer token provider instance. (See :mod:`kafka.oauth.abstract`).
Default: None

**Returns**:
- : A function returning the same function

### `create_docs` {#create_docs}

`def create_docs(self: fastkafka.FastKafka) -> None`

Create the asyncapi documentation based on the configured consumers and producers.

This function exports the asyncapi specification based on the configured consumers
and producers in the FastKafka instance. It generates the asyncapi documentation by
extracting the topics and callbacks from the consumers and producers.

Note:
    The asyncapi documentation is saved to the location specified by the `_asyncapi_path`
    attribute of the FastKafka instance.

**Returns**:
- None

### `create_mocks` {#create_mocks}

`def create_mocks(self: fastkafka.FastKafka) -> None`

Creates self.mocks as a named tuple mapping a new function obtained by calling the original functions and a mock

### `fastapi_lifespan` {#fastapi_lifespan}

`def fastapi_lifespan(self: fastkafka.FastKafka, kafka_broker_name: str) -> typing.Callable[[ForwardRef('FastAPI')], typing.AsyncIterator[NoneType]]`

Method for managing the lifespan of a FastAPI application with a specific Kafka broker.

**Parameters**:
- `kafka_broker_name`: The name of the Kafka broker to start FastKafka

**Returns**:
- Lifespan function to use for initializing FastAPI

### `get_topics` {#get_topics}

`def get_topics(self: fastkafka.FastKafka) -> typing.Iterable[str]`

Get all topics for both producing and consuming.

**Returns**:
- A set of topics for both producing and consuming.

### `produces` {#produces}

`def produces(self: fastkafka.FastKafka, topic: Optional[str] = None, encoder: Union[str, Callable[[pydantic.main.BaseModel], bytes]] = 'json', prefix: str = 'to_', brokers: Optional[Dict[str, Any], fastkafka._components.asyncapi.KafkaBrokers] = None, description: Optional[str] = None, loop=None, bootstrap_servers='localhost', client_id=None, metadata_max_age_ms=300000, request_timeout_ms=40000, api_version='auto', acks=<object object at 0x7fcedfc68f60>, key_serializer=None, value_serializer=None, compression_type=None, max_batch_size=16384, partitioner=<kafka.partitioner.default.DefaultPartitioner object at 0x7fcedec6c850>, max_request_size=1048576, linger_ms=0, send_backoff_ms=100, retry_backoff_ms=100, security_protocol='PLAINTEXT', ssl_context=None, connections_max_idle_ms=540000, enable_idempotence=False, transactional_id=None, transaction_timeout_ms=60000, sasl_mechanism='PLAIN', sasl_plain_password=None, sasl_plain_username=None, sasl_kerberos_service_name='kafka', sasl_kerberos_domain_name=None, sasl_oauth_token_provider=None) -> typing.Callable[[typing.Union[typing.Callable[..., typing.Union[pydantic.main.BaseModel, fastkafka.KafkaEvent[pydantic.main.BaseModel], typing.List[pydantic.main.BaseModel], fastkafka.KafkaEvent[typing.List[pydantic.main.BaseModel]]]], typing.Callable[..., typing.Awaitable[typing.Union[pydantic.main.BaseModel, fastkafka.KafkaEvent[pydantic.main.BaseModel], typing.List[pydantic.main.BaseModel], fastkafka.KafkaEvent[typing.List[pydantic.main.BaseModel]]]]]]], typing.Union[typing.Callable[..., typing.Union[pydantic.main.BaseModel, fastkafka.KafkaEvent[pydantic.main.BaseModel], typing.List[pydantic.main.BaseModel], fastkafka.KafkaEvent[typing.List[pydantic.main.BaseModel]]]], typing.Callable[..., typing.Awaitable[typing.Union[pydantic.main.BaseModel, fastkafka.KafkaEvent[pydantic.main.BaseModel], typing.List[pydantic.main.BaseModel], fastkafka.KafkaEvent[typing.List[pydantic.main.BaseModel]]]]]]]`

Decorator registering the callback called when delivery report for a produced message is received

This function decorator is also responsible for registering topics for AsyncAPI specificiation and documentation.

**Parameters**:
- `topic`: Kafka topic that the producer will send returned values from
the decorated function to, default: None- If the topic is not
specified, topic name will be inferred from the decorated function
name by stripping the defined prefix.
- `encoder`: Encoder to use to encode messages before sending it to topic,
default: json - By default, it uses json encoder to convert
pydantic basemodel to json string and then encodes the string to bytes
using 'utf-8' encoding. It also accepts custom encoder function.
- `prefix`: Prefix stripped from the decorated function to define a topic
name if the topic argument is not passed, default: "to_". If the
decorated function name is not prefixed with the defined prefix
and topic argument is not passed, then this method will throw ValueError
- `brokers`: Optional argument specifying multiple broker clusters for consuming
messages from different Kafka clusters in FastKafka.
- `description`: Optional description of the producing function async docs.
If not provided, producing function __doc__ attr will be used.
- `bootstrap_servers`: a ``host[:port]`` string or list of
``host[:port]`` strings that the producer should contact to
bootstrap initial cluster metadata. This does not have to be the
full node list.  It just needs to have at least one broker that will
respond to a Metadata API Request. Default port is 9092. If no
servers are specified, will default to ``localhost:9092``.
- `client_id`: a name for this client. This string is passed in
each request to servers and can be used to identify specific
server-side log entries that correspond to this client.
Default: ``aiokafka-producer-#`` (appended with a unique number
per instance)
- `key_serializer`: used to convert user-supplied keys to bytes
If not :data:`None`, called as ``f(key),`` should return
:class:`bytes`.
Default: :data:`None`.
- `value_serializer`: used to convert user-supplied message
values to :class:`bytes`. If not :data:`None`, called as
``f(value)``, should return :class:`bytes`.
Default: :data:`None`.
- `acks`: one of ``0``, ``1``, ``all``. The number of acknowledgments
the producer requires the leader to have received before considering a
request complete. This controls the durability of records that are
sent. The following settings are common:

* ``0``: Producer will not wait for any acknowledgment from the server
  at all. The message will immediately be added to the socket
  buffer and considered sent. No guarantee can be made that the
  server has received the record in this case, and the retries
  configuration will not take effect (as the client won't
  generally know of any failures). The offset given back for each
  record will always be set to -1.
* ``1``: The broker leader will write the record to its local log but
  will respond without awaiting full acknowledgement from all
  followers. In this case should the leader fail immediately
  after acknowledging the record but before the followers have
  replicated it then the record will be lost.
* ``all``: The broker leader will wait for the full set of in-sync
  replicas to acknowledge the record. This guarantees that the
  record will not be lost as long as at least one in-sync replica
  remains alive. This is the strongest available guarantee.

If unset, defaults to ``acks=1``. If `enable_idempotence` is
:data:`True` defaults to ``acks=all``
- `compression_type`: The compression type for all data generated by
the producer. Valid values are ``gzip``, ``snappy``, ``lz4``, ``zstd``
or :data:`None`.
Compression is of full batches of data, so the efficacy of batching
will also impact the compression ratio (more batching means better
compression). Default: :data:`None`.
- `max_batch_size`: Maximum size of buffered data per partition.
After this amount :meth:`send` coroutine will block until batch is
drained.
Default: 16384
- `linger_ms`: The producer groups together any records that arrive
in between request transmissions into a single batched request.
Normally this occurs only under load when records arrive faster
than they can be sent out. However in some circumstances the client
may want to reduce the number of requests even under moderate load.
This setting accomplishes this by adding a small amount of
artificial delay; that is, if first request is processed faster,
than `linger_ms`, producer will wait ``linger_ms - process_time``.
Default: 0 (i.e. no delay).
- `partitioner`: Callable used to determine which partition
each message is assigned to. Called (after key serialization):
``partitioner(key_bytes, all_partitions, available_partitions)``.
The default partitioner implementation hashes each non-None key
using the same murmur2 algorithm as the Java client so that
messages with the same key are assigned to the same partition.
When a key is :data:`None`, the message is delivered to a random partition
(filtered to partitions with available leaders only, if possible).
- `max_request_size`: The maximum size of a request. This is also
effectively a cap on the maximum record size. Note that the server
has its own cap on record size which may be different from this.
This setting will limit the number of record batches the producer
will send in a single request to avoid sending huge requests.
Default: 1048576.
- `metadata_max_age_ms`: The period of time in milliseconds after
which we force a refresh of metadata even if we haven't seen any
partition leadership changes to proactively discover any new
brokers or partitions. Default: 300000
- `request_timeout_ms`: Produce request timeout in milliseconds.
As it's sent as part of
:class:`~kafka.protocol.produce.ProduceRequest` (it's a blocking
call), maximum waiting time can be up to ``2 *
request_timeout_ms``.
Default: 40000.
- `retry_backoff_ms`: Milliseconds to backoff when retrying on
errors. Default: 100.
- `api_version`: specify which kafka API version to use.
If set to ``auto``, will attempt to infer the broker version by
probing various APIs. Default: ``auto``
- `security_protocol`: Protocol used to communicate with brokers.
Valid values are: ``PLAINTEXT``, ``SSL``, ``SASL_PLAINTEXT``,
``SASL_SSL``. Default: ``PLAINTEXT``.
- `ssl_context`: pre-configured :class:`~ssl.SSLContext`
for wrapping socket connections. Directly passed into asyncio's
:meth:`~asyncio.loop.create_connection`. For more
information see :ref:`ssl_auth`.
Default: :data:`None`
- `connections_max_idle_ms`: Close idle connections after the number
of milliseconds specified by this config. Specifying :data:`None` will
disable idle checks. Default: 540000 (9 minutes).
- `enable_idempotence`: When set to :data:`True`, the producer will
ensure that exactly one copy of each message is written in the
stream. If :data:`False`, producer retries due to broker failures,
etc., may write duplicates of the retried message in the stream.
Note that enabling idempotence acks to set to ``all``. If it is not
explicitly set by the user it will be chosen. If incompatible
values are set, a :exc:`ValueError` will be thrown.
New in version 0.5.0.
- `sasl_mechanism`: Authentication mechanism when security_protocol
is configured for ``SASL_PLAINTEXT`` or ``SASL_SSL``. Valid values
are: ``PLAIN``, ``GSSAPI``, ``SCRAM-SHA-256``, ``SCRAM-SHA-512``,
``OAUTHBEARER``.
Default: ``PLAIN``
- `sasl_plain_username`: username for SASL ``PLAIN`` authentication.
Default: :data:`None`
- `sasl_plain_password`: password for SASL ``PLAIN`` authentication.
Default: :data:`None`
- `sasl_oauth_token_provider (`: class:`~aiokafka.abc.AbstractTokenProvider`):
OAuthBearer token provider instance. (See
:mod:`kafka.oauth.abstract`).
Default: :data:`None`

**Returns**:
- : A function returning the same function

**Exceptions**:
- `ValueError`: when needed

### `run_in_background` {#run_in_background}

`def run_in_background(self: fastkafka.FastKafka) -> typing.Callable[[typing.Callable[..., typing.Coroutine[typing.Any, typing.Any, typing.Any]]], typing.Callable[..., typing.Coroutine[typing.Any, typing.Any, typing.Any]]]`

Decorator to schedule a task to be run in the background.

This decorator is used to schedule a task to be run in the background when the app's `_on_startup` event is triggered.

**Returns**:
- A decorator function that takes a background task as an input and stores it to be run in the backround.

### `set_kafka_broker` {#set_kafka_broker}

`def set_kafka_broker(self, kafka_broker_name: str) -> None`

Sets the Kafka broker to start FastKafka with

**Parameters**:
- `kafka_broker_name`: The name of the Kafka broker to start FastKafka

**Returns**:
- None

**Exceptions**:
- `ValueError`: If the provided kafka_broker_name is not found in dictionary of kafka_brokers

