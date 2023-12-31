# Using FastAPI to Run FastKafka Application

<!-- WARNING: THIS FILE WAS AUTOGENERATED! DO NOT EDIT! -->

When deploying a FastKafka application, the default approach is to
utilize the [`fastkafka run`](/docs/cli/fastkafka#fastkafka-run) CLI
command. This command allows you to launch your FastKafka application as
a standalone service. However, if you already have a FastAPI application
in place and wish to run FastKafka application alongside it, you have an
alternative option.

FastKafka provides a method called
[`FastKafka.fastapi_lifespan`](../api/fastkafka/FastKafka.md#fastkafka._application.app.FastKafka.fastapi_lifespan)
that leverages [FastAPI’s
lifespan](https://fastapi.tiangolo.com/advanced/events/#lifespan-events)
feature. This method allows you to run your FastKafka application
together with your existing FastAPI app, seamlessly integrating their
functionalities. By using the
[`FastKafka.fastapi_lifespan`](../api/fastkafka/FastKafka.md#fastkafka._application.app.FastKafka.fastapi_lifespan)
method, you can start the FastKafka application within the same process
as the FastAPI app.

The
[`FastKafka.fastapi_lifespan`](../api/fastkafka/FastKafka.md#fastkafka._application.app.FastKafka.fastapi_lifespan)
method ensures that both FastAPI and FastKafka are initialized and start
working simultaneously. This approach enables the execution of
Kafka-related tasks, such as producing and consuming messages, while
also handling HTTP requests through FastAPI’s routes.

By combining FastAPI and FastKafka in this manner, you can build a
comprehensive application that harnesses the power of both frameworks.
Whether you require real-time messaging capabilities or traditional HTTP
endpoints, this approach allows you to leverage the strengths of FastAPI
and FastKafka within a single deployment setup.

## Prerequisites

1.  A basic knowledge of
    [`FastKafka`](../api/fastkafka/FastKafka.md#fastkafka.FastKafka)
    is needed to proceed with this guide. If you are not familiar with
    [`FastKafka`](../api/fastkafka/FastKafka.md#fastkafka.FastKafka),
    please go through the [tutorial](/docs#tutorial) first.
2.  [`FastKafka`](../api/fastkafka/FastKafka.md#fastkafka.FastKafka)
    and `FastAPI` libraries needs to be installed.

This guide will provide a step-by-step explanation, taking you through
each stage individually, before combining all the components in the
final section for a comprehensive understanding of the process.

## 1. Basic FastKafka app

In this step, we will begin by creating a simple FastKafka application.

``` python
from pydantic import BaseModel, Field, NonNegativeFloat
from typing import *

from fastkafka import FastKafka

kafka_brokers = {
    "localhost": {
        "url": "localhost",
        "description": "local development kafka broker",
        "port": 9092,
    },
    "production": {
        "url": "kafka.airt.ai",
        "description": "production kafka broker",
        "port": 9092,
        "protocol": "kafka-secure",
        "security": {"type": "plain"},
    },
}

kafka_app = FastKafka(
    title="Greetings",
    kafka_brokers=kafka_brokers,
)


class TestMsg(BaseModel):
    msg: str = Field(...)


@kafka_app.consumes()
async def on_names(msg: TestMsg):
    await to_greetings(TestMsg(msg=f"Hello {msg.msg}"))


@kafka_app.produces()
async def to_greetings(greeting: TestMsg) -> TestMsg:
    return greeting
```

In the above example, we consume messages from a topic called `names`,
we prepend “Hello" to the message, and send it back to another topic
called `greetings`.

We now have a simple
[`FastKafka`](../api/fastkafka/FastKafka.md#fastkafka.FastKafka)
app to produce and consume from two topics.

## 2. Using fastapi_lifespan method

In this step of the guide, we will explore the integration of a
FastKafka application with a FastAPI application using the
[`FastKafka.fastapi_lifespan`](../api/fastkafka/FastKafka.md#fastkafka._application.app.FastKafka.fastapi_lifespan)
method. The
[`FastKafka.fastapi_lifespan`](../api/fastkafka/FastKafka.md#fastkafka._application.app.FastKafka.fastapi_lifespan)
method is a feature provided by FastKafka, which allows you to
seamlessly integrate a FastKafka application with a FastAPI application
by leveraging FastAPI’s lifespan feature.

``` python
from fastapi import FastAPI

fastapi_app = FastAPI(lifespan=kafka_app.fastapi_lifespan(kafka_broker_name="localhost"))


@fastapi_app.get("/hello")
async def hello():
    return {"msg": "hello there"}
```

In the above example, a new instance of the `FastAPI` app is created,
and when the app is started using uvicorn, it also runs the
[`FastKafka`](../api/fastkafka/FastKafka.md#fastkafka.FastKafka)
application concurrently.

## Putting it all together

Let’s put the above code together and write it in a file called
`fast_apps.py`.

``` python
# content of the "fast_apps.py" file

from pydantic import BaseModel, Field, NonNegativeFloat
from typing import *

from fastkafka import FastKafka

kafka_brokers = {
    "localhost": {
        "url": "localhost",
        "description": "local development kafka broker",
        "port": 9092,
    },
    "production": {
        "url": "kafka.airt.ai",
        "description": "production kafka broker",
        "port": 9092,
        "protocol": "kafka-secure",
        "security": {"type": "plain"},
    },
}

kafka_app = FastKafka(
    title="Greetings",
    kafka_brokers=kafka_brokers,
)


class TestMsg(BaseModel):
    msg: str = Field(...)


@kafka_app.consumes()
async def on_names(msg: TestMsg):
    await to_greetings(TestMsg(msg=f"Hello {msg.msg}"))


@kafka_app.produces()
async def to_greetings(greeting: TestMsg) -> TestMsg:
    return greeting


from fastapi import FastAPI

fastapi_app = FastAPI(lifespan=kafka_app.fastapi_lifespan("localhost"))

@fastapi_app.get("/hello")
async def hello():
    return {"msg": "hello there"}
```

Finally, you can run the FastAPI application using a web server of your
choice, such as Uvicorn or Hypercorn by running the below command:

``` cmd
uvicorn fast_apps:fastapi_app --host=0.0.0.0 --port=8080
```
