from faststream.rabbit import  RabbitRouter

router = RabbitRouter(
    schema_url="/asyncapi",
    include_in_schema=True,
)