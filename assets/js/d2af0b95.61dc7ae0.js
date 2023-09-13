"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[1267],{3905:(e,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>m});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},k=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,m=c["".concat(i,".").concat(f)]||c[f]||u[f]||r;return n?t.createElement(m,s(s({ref:a},k),{},{components:n})):t.createElement(m,s({ref:a},k))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=f;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1036:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=n(7462),o=(n(7294),n(3905));const r={},s="First Steps",l={unversionedId:"guides/Guide_02_First_Steps",id:"version-0.7.0/guides/Guide_02_First_Steps",title:"First Steps",description:"Creating a simple Kafka consumer app",source:"@site/versioned_docs/version-0.7.0/guides/Guide_02_First_Steps.md",sourceDirName:"guides",slug:"/guides/Guide_02_First_Steps",permalink:"/docs/0.7.0/guides/Guide_02_First_Steps",draft:!1,tags:[],version:"0.7.0",frontMatter:{}},i={},p=[{value:"Creating a simple Kafka consumer app",id:"creating-a-simple-kafka-consumer-app",level:2},{value:"Sending first message to your consumer",id:"sending-first-message-to-your-consumer",level:2},{value:"Creating a hello Kafka producer",id:"creating-a-hello-kafka-producer",level:2},{value:"Recap",id:"recap",level:2}],k={toc:p},c="wrapper";function u(e){let{components:a,...n}=e;return(0,o.kt)(c,(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"first-steps"},"First Steps"),(0,o.kt)("h2",{id:"creating-a-simple-kafka-consumer-app"},"Creating a simple Kafka consumer app"),(0,o.kt)("p",null,"For our first demo we will create the simplest possible Kafka consumer\nand run it using \u2018fastkafka run\u2019 command."),(0,o.kt)("p",null,"The consumer will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect to the Kafka Broker we setup in the Intro guide")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Listen to the hello topic")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Write any message received from the hello topic to stdout"))),(0,o.kt)("p",null,"To create the consumer, first, create a file named"),(0,o.kt)("b",null,"hello_kafka_consumer.py")," and copy the following code to it:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom os import environ\n\nfrom fastkafka import FastKafka\nfrom pydantic import BaseModel, Field\n\nkafka_server_url = environ["KAFKA_HOSTNAME"]\nkafka_server_port = environ["KAFKA_PORT"]\n\nkafka_brokers = {\n    "localhost": {\n        "description": "local development kafka",\n        "url": kafka_server_url,\n        "port": kafka_server_port\n    }\n}\n\nclass HelloKafkaMsg(BaseModel):\n    msg: str = Field(\n        ...,\n        example="Hello",\n        description="Demo hello world message",\n    )\n\nkafka_app = FastKafka(\n    kafka_brokers=kafka_brokers\n)\n    \n@kafka_app.consumes()\nasync def on_hello(msg: HelloKafkaMsg):\n    print(f"Got data, msg={msg.msg}", flush=True)\n')),(0,o.kt)("p",null,'!!! info "Kafka configuration"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"This consumer script uses KAFKA_HOSTNAME and KAFKA_PORT environment vars, so make sure that you have exported them into your environment before running the following comand (e.g. in shell, for KAFKA_HOSTNAME, run: 'export KAFKA_HOSTNAME=kafka').\n")),(0,o.kt)("p",null,'!!! warning "Remember to flush"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Notice the **flush=True** option when using print in our consumer. This is because standard python print function doesn't flush by default. To be able to log the worker outputs in real time when using fastkafka run command, the outputs need to be flushed, they will be logged when stopping the worker otherwise.\n")),(0,o.kt)("p",null,"To run this consumer, in your terminal, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fastkafka run --num-workers=1 --kafka-broker localhost hello_kafka_consumer:kafka_app\n")),(0,o.kt)("p",null,"After running the command, you should see something similar to the ouput\nbelow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._components.test_dependencies: Java is already installed.\n[INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...\n[INFO] fastkafka._components.test_dependencies: Kafka is installed.\n[INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...\n[INFO] fastkafka._testing.apache_kafka_broker: Starting zookeeper...\n[INFO] fastkafka._testing.apache_kafka_broker: Starting kafka...\n[INFO] fastkafka._testing.apache_kafka_broker: Local Kafka broker up and running on 127.0.0.1:9092\n[878412]: [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to '127.0.0.1:9092'\n[878412]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[878412]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': '127.0.0.1:9092', 'auto_offset_reset': 'earliest', 'max_poll_records': 100}\n[878412]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[878412]: [INFO] aiokafka.consumer.subscription_state: Updating subscribed topics to: frozenset({'hello'})\n[878412]: [INFO] aiokafka.consumer.consumer: Subscribed to topic(s): {'hello'}\n[878412]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[878412]: [WARNING] aiokafka.cluster: Topic hello is not available during auto-create initialization\n[878412]: [INFO] aiokafka.consumer.group_coordinator: Metadata for topic has changed from {} to {'hello': 0}. \nStarting process cleanup, this may take a few seconds...\n[INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 878412...\n[878412]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[878412]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n[INFO] fastkafka._server: terminate_asyncio_process(): Process 878412 terminated.\n\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Terminating the process 877951...\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Process 877951 terminated.\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Terminating the process 877579...\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Process 877579 terminated.\n")),(0,o.kt)("p",null,"Now you can interact with your consumer, by sending the messages to the\nsubscribed \u2018hello\u2019 topic, don\u2019t worry, we will cover this in the next\nstep of this guide."),(0,o.kt)("h2",{id:"sending-first-message-to-your-consumer"},"Sending first message to your consumer"),(0,o.kt)("p",null,"After we have created and run our first consumer, we should send a\nmessage to it, to make sure it is working properly."),(0,o.kt)("p",null,"If you are using the Kafka setup as described in the Intro guide, you\ncan follow the steps listed here to send a message to the hello topic."),(0,o.kt)("p",null,"First, connect to your running kafka broker by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it kafka /bin/bash\n")),(0,o.kt)("p",null,"Then, when connected to the container, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kafka-console-producer.sh --bootstrap-server=localhost:9092 --topic=hello\n")),(0,o.kt)("p",null,"This will open an interactive connection to the hello topic, now you can\nwrite your mesages to the topic and they will be consumed by our\nconsumer."),(0,o.kt)("p",null,"In the shell, type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'{"msg":"hello"}\n')),(0,o.kt)("p",null,"and press enter. This will send a hello message to the topic which will\nbe read by our running consumer and outputed to stdout."),(0,o.kt)("p",null,"Check the output of your consumer (terminal where you ran the \u2018fastkafka\nrun\u2019 command) and confirm that your consumer has read the Kafka message.\nYou shoud see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Got data, msg=hello\n")),(0,o.kt)("h2",{id:"creating-a-hello-kafka-producer"},"Creating a hello Kafka producer"),(0,o.kt)("p",null,"Consuming messages is only a part of this Library functionality, the\nother big part is producing the messages. So, let\u2019s create our first\nkafka producer which will send it\u2019s greetings to our consumer\nperiodically."),(0,o.kt)("p",null,"The producer will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect to the Kafka Broker we setup in the Intro guide"),(0,o.kt)("li",{parentName:"ol"},"Connect to the hello topic"),(0,o.kt)("li",{parentName:"ol"},"Periodically send a message to the hello world topic")),(0,o.kt)("p",null,"To create the producer, first, create a file named"),(0,o.kt)("b",null,"hello_kafka_producer.py")," and copy the following code to it:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom os import environ\n\nimport asyncio\nfrom pydantic import BaseModel, Field\n\nfrom fastkafka import FastKafka\nfrom fastkafka._components.logger import get_logger\n\nkafka_server_url = environ["KAFKA_HOSTNAME"]\nkafka_server_port = environ["KAFKA_PORT"]\n\nkafka_brokers = {\n    "localhost": {\n        "description": "local development kafka",\n        "url": kafka_server_url,\n        "port": kafka_server_port\n    }\n}\n\nclass HelloKafkaMsg(BaseModel):\n    msg: str = Field(\n        ...,\n        example="Hello",\n        description="Demo hello world message",\n    )\n\nkafka_app = FastKafka(\n    kafka_brokers=kafka_brokers\n)\n\nlogger = get_logger(__name__)\n\n@kafka_app.produces()\nasync def to_hello(msg: HelloKafkaMsg) -> HelloKafkaMsg:\n    logger.info(f"Producing: {msg}")\n    return msg\n\n@kafka_app.run_in_background()\nasync def hello_every_second():\n    while(True):\n        await to_hello(HelloKafkaMsg(msg="hello"))\n        await asyncio.sleep(1)\n')),(0,o.kt)("p",null,'!!! info "Kafka configuration"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"This producer script uses KAFKA_HOSTNAME and KAFKA_PORT environment vars, so make sure that you have exported them into your environment before running the following comand (e.g. in shell, for KAFKA_HOSTNAME, run: 'export KAFKA_HOSTNAME=kafka').\n")),(0,o.kt)("p",null,"To run this producer, in your terminal, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fastkafka run --num-workers=1 --kafka-broker localhost hello_kafka_producer:kafka_app\n")),(0,o.kt)("p",null,"After running the command, you should see something similar to the ouput\nbelow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._components.test_dependencies: Java is already installed.\n[INFO] fastkafka._components.test_dependencies: Kafka is installed.\n[INFO] fastkafka._testing.apache_kafka_broker: Starting zookeeper...\n[INFO] fastkafka._testing.apache_kafka_broker: Starting kafka...\n[INFO] fastkafka._testing.apache_kafka_broker: Local Kafka broker up and running on 127.0.0.1:9092\n[879272]: [INFO] fastkafka._application.app: run_in_background() : Adding function 'hello_every_second' as background task\n[879272]: [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to '127.0.0.1:9092'\n[879272]: [INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': '127.0.0.1:9092'}'\n[879272]: [INFO] fastkafka._application.app: _populate_bg_tasks() : Starting background task 'hello_every_second'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [WARNING] aiokafka.cluster: Topic hello is not available during auto-create initialization\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\nStarting process cleanup, this may take a few seconds...\n[INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 879272...\n[879272]: [INFO] hello_kafka_producer: Producing: msg='hello'\n[879272]: [INFO] fastkafka._application.app: _shutdown_bg_tasks() : Cancelling background task 'hello_every_second'\n[879272]: [INFO] fastkafka._application.app: _shutdown_bg_tasks() : Waiting for background task 'hello_every_second' to finish\n[879272]: [INFO] fastkafka._application.app: _shutdown_bg_tasks() : Execution finished for background task 'hello_every_second'\n[INFO] fastkafka._server: terminate_asyncio_process(): Process 879272 terminated.\n\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Terminating the process 878808...\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Process 878808 terminated.\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Terminating the process 878435...\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Process 878435 terminated.\n")),(0,o.kt)("p",null,"Now, while the producer is running, it will send a HelloKafkaMsg every\nsecond to the hello kafka topic. If your consumer is still running, you\nshould see the messages appear in its log."),(0,o.kt)("h2",{id:"recap"},"Recap"),(0,o.kt)("p",null,"In this guide we have:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Created a simple Kafka consumer using FastKafka"),(0,o.kt)("li",{parentName:"ol"},"Sent a message to our consumer trough Kafka"),(0,o.kt)("li",{parentName:"ol"},"Created a simple Kafka producer using FastKafka")))}u.isMDXComponent=!0}}]);