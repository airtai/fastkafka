from faststream import FastStream
from faststream.rabbit import RabbitBroker
from propan.asyncapi.main import AsyncAPISchema
from propan.cli.docs.gen import gen_app_schema_json, gen_app_schema_yaml, get_app_schema
from propan.cli.docs.serving import get_asyncapi_html

broker = RabbitBroker()
app = FastStream(broker)

schema: AsyncAPISchema = get_app_schema(app)
json_schema = gen_app_schema_json(app)
yaml_schema = gen_app_schema_yaml(app)
html = get_asyncapi_html(yaml_schema)