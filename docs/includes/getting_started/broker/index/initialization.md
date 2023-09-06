=== "RabbitMQ"
    1. {{ constructor }}

        ```python
        from faststream.rabbit import RabbitBroker
        broker = RabbitBroker("amqp://guest:guest@localhost:5672/")
        ```

    2. {{ connect }}

        ```python
        from faststream.rabbit import RabbitBroker
        broker = RabbitBroker()
        ...
        await broker.connect("amqp://guest:guest@localhost:5672/")
        ```

=== "Kafka"
    1. {{ constructor }}

        ```python
        from faststream.kafka import KafkaBroker

        broker = KafkaBroker("localhost:9092")
        ```

    2. {{ connect }}

        ```python
        from faststream.kafka import KafkaBroker

        broker = KafkaBroker()
        ...
        await broker.connect("localhost:9092")
        ```
