from abc import abstractmethod
from typing import Dict, List, Optional

from fast_depends.core import build_call_model

from faststream.asyncapi.base import AsyncAPIOperation
from faststream.asyncapi.message import get_response_schema, parse_handler_params
from faststream.asyncapi.schema import (
    Channel,
    ChannelBinding,
    CorrelationId,
    Message,
    Operation,
    OperationBinding,
)
from faststream.asyncapi.schema.bindings import amqp
from faststream.asyncapi.utils import resolve_payloads, to_camelcase
from faststream.rabbit.handler import LogicHandler
from faststream.rabbit.publisher import LogicPublisher
from faststream.rabbit.shared.constants import ExchangeType
from faststream.rabbit.shared.schemas import BaseRMQInformation, RabbitExchange
from faststream.types import AnyDict


class RMQAsyncAPIChannel(AsyncAPIOperation, BaseRMQInformation):
    @abstractmethod
    def get_payloads(self) -> List[AnyDict]:
        raise NotImplementedError()

    def schema(self) -> Dict[str, Channel]:
        payloads = self.get_payloads()

        return {
            self.name: Channel(
                description=self.description,  # type: ignore[attr-defined]
                subscribe=Operation(
                    bindings=OperationBinding(
                        amqp=amqp.OperationBinding(
                            cc=self.queue.name,
                        ),
                    )
                    if _is_exchange(self.exchange)
                    else None,
                    message=Message(
                        title=f"{self.name}Message",
                        payload=resolve_payloads(payloads),
                        correlationId=CorrelationId(
                            location="$message.header#/correlation_id"
                        ),
                    ),
                ),
                bindings=ChannelBinding(
                    amqp=amqp.ChannelBinding(
                        **{
                            "is": "routingKey",  # type: ignore
                            "queue": amqp.Queue(
                                name=self.queue.name,
                                durable=self.queue.durable,
                                exclusive=self.queue.exclusive,
                                autoDelete=self.queue.auto_delete,
                            )
                            if _is_exchange(self.exchange)
                            else None,
                            "exchange": (
                                amqp.Exchange(type="default")
                                if self.exchange is None
                                else amqp.Exchange(
                                    type=self.exchange.type,  # type: ignore
                                    name=self.exchange.name,
                                    durable=self.exchange.durable,
                                    autoDelete=self.exchange.auto_delete,
                                )
                            ),
                        }
                    )
                ),
            )
        }


class Publisher(RMQAsyncAPIChannel, LogicPublisher):
    @property
    def name(self) -> str:
        return self.title or f"{self.queue.name.title()}Publisher"

    def get_payloads(self) -> List[AnyDict]:
        payloads = []
        for call in self.calls:
            call_model = build_call_model(call)
            body = get_response_schema(
                call_model,
                prefix=to_camelcase(call_model.call_name),
            )
            if body:
                payloads.append(body)

        return payloads


class Handler(RMQAsyncAPIChannel, LogicHandler):
    @property
    def name(self) -> str:
        original = super().name

        name: str
        queue_ = to_camelcase(self.queue.name)
        if original is True:
            if not self.call_name.lower().endswith(queue_.lower()):
                name = f"{self.call_name}{queue_}"
            else:
                name = self.call_name
        elif original is False:  # pragma: no cover
            name = f"Handler{queue_}"
        else:
            name = original

        return name

    def get_payloads(self) -> List[AnyDict]:
        payloads = []
        for _, _, _, _, _, dep in self.calls:
            body = parse_handler_params(dep, prefix=self.name)
            payloads.append(body)

        return payloads


def _is_exchange(exchange: Optional[RabbitExchange]) -> bool:
    if exchange and exchange.type in (
        ExchangeType.FANOUT.value,
        ExchangeType.HEADERS.value,
    ):
        return False
    return True