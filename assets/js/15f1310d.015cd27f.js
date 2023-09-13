"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[5997],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var n=t(7294);function o(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){o(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,o=function(a,e){if(null==a)return{};var t,n,o={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(o[t]=a[t]);return o}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(o[t]=a[t])}return o}var p=n.createContext({}),l=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},c=function(a){var e=l(a.components);return n.createElement(p.Provider,{value:e},a.children)},k="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,o=a.mdxType,s=a.originalType,p=a.parentName,c=i(a,["components","mdxType","originalType","parentName"]),k=l(t),d=o,f=k["".concat(p,".").concat(d)]||k[d]||u[d]||s;return t?n.createElement(f,r(r({ref:e},c),{},{components:t})):n.createElement(f,r({ref:e},c))}));function f(a,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i[k]="string"==typeof a?a:o,r[1]=i;for(var l=2;l<s;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9692:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const s={},r="FastKafka",i={unversionedId:"index",id:"version-0.7.0/index",title:"FastKafka",description:"Effortless Kafka integration for your web services",source:"@site/versioned_docs/version-0.7.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/0.7.0/",draft:!1,tags:[],version:"0.7.0",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"@consumes basics",permalink:"/docs/0.7.0/guides/Guide_11_Consumes_Basics"}},p={},l=[{value:"\u2b50\u2b50\u2b50 Stay in touch \u2b50\u2b50\u2b50",id:"-stay-in-touch-",level:4},{value:"\ud83d\udc1d\ud83d\udc1d\ud83d\udc1d We were busy lately \ud83d\udc1d\ud83d\udc1d\ud83d\udc1d",id:"-we-were-busy-lately-",level:4},{value:"Install",id:"install",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Writing server code",id:"writing-server-code",level:2},{value:"Messages",id:"messages",level:3},{value:"Application",id:"application",level:3},{value:"Function decorators",id:"function-decorators",level:3},{value:"Testing the service",id:"testing-the-service",level:2},{value:"Recap",id:"recap",level:3},{value:"Running the service",id:"running-the-service",level:2},{value:"Documentation",id:"documentation",level:2},{value:"License",id:"license",level:2}],c={toc:l},k="wrapper";function u(a){let{components:e,...t}=a;return(0,o.kt)(k,(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fastkafka"},"FastKafka"),(0,o.kt)("b",null,"Effortless Kafka integration for your web services"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/v/fastkafka.png",alt:"PyPI"})," ",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/dm/fastkafka.png",alt:"PyPI -\nDownloads"})," ",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/fastkafka.png",alt:"PyPI - Python\nVersion"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/actions/workflow/status/airtai/fastkafka/test.yaml",alt:"GitHub Workflow\nStatus"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/airtai/fastkafka//actions/workflows/codeql.yml/badge.svg",alt:"CodeQL"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/airtai/fastkafka//actions/workflows/dependency-review.yml/badge.svg",alt:"Dependency\nReview"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/github/license/airtai/fastkafka.png",alt:"GitHub"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://fastkafka.airt.ai/"},"FastKafka")," is a powerful and easy-to-use\nPython library for building asynchronous services that interact with\nKafka topics. Built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/"},"Pydantic"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aio-libs/aiokafka"},"AIOKafka")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/"},"AsyncAPI"),", FastKafka simplifies the process\nof writing producers and consumers for Kafka topics, handling all the\nparsing, networking, task scheduling and data generation automatically.\nWith FastKafka, you can quickly prototype and develop high-performance\nKafka-based services with minimal code, making it an ideal choice for\ndevelopers looking to streamline their workflow and accelerate their\nprojects."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"-stay-in-touch-"},"\u2b50\u2b50\u2b50 Stay in touch \u2b50\u2b50\u2b50"),(0,o.kt)("p",null,"Please show your support and stay in touch by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"giving our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airtai/fastkafka/"},"GitHub repository")," a\nstar, and")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"joining our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/CJWmYpyFbc"},"Discord server"),"."))),(0,o.kt)("p",null,"Your support helps us to stay in touch with you and encourages us to\ncontinue developing and improving the library. Thank you for your\nsupport!"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"-we-were-busy-lately-"},"\ud83d\udc1d\ud83d\udc1d\ud83d\udc1d We were busy lately \ud83d\udc1d\ud83d\udc1d\ud83d\udc1d"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://repobeats.axiom.co/api/embed/21f36049093d5eb8e5fdad18c3c5d8df5428ca30.svg",alt:"Activity",title:"Repobeats analytics image"})),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"FastKafka works on macOS, Linux, and most Unix-style operating systems.\nYou can install base version of ",(0,o.kt)("inlineCode",{parentName:"p"},"fastkafka")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," as usual:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip install fastkafka\n")),(0,o.kt)("p",null,"To install fastkafka with testing features please use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip install fastkafka[test]\n")),(0,o.kt)("p",null,"To install fastkafka with asyncapi docs please use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip install fastkafka[docs]\n")),(0,o.kt)("p",null,"To install fastkafka with all the features please use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip install fastkafka[test,docs]\n")),(0,o.kt)("h2",{id:"tutorial"},"Tutorial"),(0,o.kt)("p",null,"You can start an interactive tutorial in Google Colab by clicking the\nbutton below:"),(0,o.kt)("a",{href:"https://colab.research.google.com/github/airtai/fastkafka/blob/main/nbs/index.ipynb",target:"_blank"},(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"})),(0,o.kt)("h2",{id:"writing-server-code"},"Writing server code"),(0,o.kt)("p",null,"To demonstrate FastKafka simplicity of using ",(0,o.kt)("inlineCode",{parentName:"p"},"@produces")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@consumes"),"\ndecorators, we will focus on a simple app."),(0,o.kt)("p",null,"The app will consume jsons containig positive floats from one topic, log\nthem and then produce incremented values to another topic."),(0,o.kt)("h3",{id:"messages"},"Messages"),(0,o.kt)("p",null,"FastKafka uses ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/"},"Pydantic")," to parse input\nJSON-encoded data into Python objects, making it easy to work with\nstructured data in your Kafka-based applications. Pydantic\u2019s\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/usage/models/"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseModel"))," class allows you\nto define messages using a declarative syntax, making it easy to specify\nthe fields and types of your messages."),(0,o.kt)("p",null,"This example defines one ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," mesage class. This Class will model the\nconsumed and produced data in our app demo, it contains one\n",(0,o.kt)("inlineCode",{parentName:"p"},"NonNegativeFloat")," field ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),' that will be logged and \u201cprocessed"\nbefore being produced to another topic.'),(0,o.kt)("p",null,"These message class will be used to parse and validate incoming data in\nKafka consumers and producers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseModel, Field, NonNegativeFloat\n\n\nclass Data(BaseModel):\n    data: NonNegativeFloat = Field(\n        ..., example=0.5, description="Float data example"\n    )\n')),(0,o.kt)("h3",{id:"application"},"Application"),(0,o.kt)("p",null,"This example shows how to initialize a FastKafka application."),(0,o.kt)("p",null,"It starts by defining a dictionary called ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka_brokers"),", which\ncontains two entries: ",(0,o.kt)("inlineCode",{parentName:"p"},'"localhost"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"production"'),", specifying local\ndevelopment and production Kafka brokers. Each entry specifies the URL,\nport, and other details of a Kafka broker. This dictionary is used for\nboth generating the documentation and later to run the actual server\nagainst one of the given kafka broker."),(0,o.kt)("p",null,"Next, an object of the ",(0,o.kt)("inlineCode",{parentName:"p"},"FastKafka")," class is initialized with the minimum\nset of arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kafka_brokers"),": a dictionary used for generation of documentation")),(0,o.kt)("p",null,"We will also import and create a logger so that we can log the incoming\ndata in our consuming function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from logging import getLogger\nfrom fastkafka import FastKafka\n\nlogger = getLogger("Demo Kafka app")\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Demo Kafka app",\n    kafka_brokers=kafka_brokers,\n)\n')),(0,o.kt)("h3",{id:"function-decorators"},"Function decorators"),(0,o.kt)("p",null,"FastKafka provides convenient function decorators ",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.produces")," to allow you to delegate the actual process of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"consuming and producing data to Kafka, and")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"decoding and encoding JSON encode messages"))),(0,o.kt)("p",null,"from user defined functions to the framework. The FastKafka framework\ndelegates these jobs to AIOKafka and Pydantic libraries."),(0,o.kt)("p",null,"These decorators make it easy to specify the processing logic for your\nKafka consumers and producers, allowing you to focus on the core\nbusiness logic of your application without worrying about the underlying\nKafka integration."),(0,o.kt)("p",null,"This following example shows how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.produces")," decorators in a FastKafka application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes")," decorator is applied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_input_data"),'\nfunction, which specifies that this function should be called whenever\na message is received on the \u201cinput_data" Kafka topic. The\n',(0,o.kt)("inlineCode",{parentName:"p"},"on_input_data")," function takes a single argument which is expected to\nbe an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," message class. Specifying the type of the\nsingle argument is instructing the Pydantic to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Data.parse_raw()"),"\non the consumed message before passing it to the user defined function\n",(0,o.kt)("inlineCode",{parentName:"p"},"on_input_data"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@produces")," decorator is applied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"to_output_data"),' function,\nwhich specifies that this function should produce a message to the\n\u201coutput_data" Kafka topic whenever it is called. The ',(0,o.kt)("inlineCode",{parentName:"p"},"to_output_data"),"\nfunction takes a single float argument ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),". It it increments the\ndata returns it wrapped in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," object. The framework will call\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},'Data.json().encode("utf-8")')," function on the returned value and\nproduce it to the specified topic."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@kafka_app.consumes(topic="input_data", auto_offset_reset="latest")\nasync def on_input_data(msg: Data):\n    logger.info(f"Got data: {msg.data}")\n    await to_output_data(msg.data)\n\n\n@kafka_app.produces(topic="output_data")\nasync def to_output_data(data: float) -> Data:\n    processed_data = Data(data=data+1.0)\n    return processed_data\n')),(0,o.kt)("h2",{id:"testing-the-service"},"Testing the service"),(0,o.kt)("p",null,"The service can be tested using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tester")," instances which internally\nstarts InMemory implementation of Kafka broker."),(0,o.kt)("p",null,"The Tester will redirect your consumes and produces decorated functions\nto the InMemory Kafka broker so that you can quickly test your app\nwithout the need for a running Kafka broker and all its dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from fastkafka.testing import Tester\n\nmsg = Data(\n    data=0.1,\n)\n\n# Start Tester app and create InMemory Kafka broker for testing\nasync with Tester(kafka_app) as tester:\n    # Send Data message to input_data topic\n    await tester.to_input_data(msg)\n\n    # Assert that the kafka_app responded with incremented data in output_data topic\n    await tester.awaited_mocks.on_output_data.assert_awaited_with(\n        Data(data=1.1), timeout=2\n    )\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker._start() called\n[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker._patch_consumers_and_producers(): Patching consumers and producers!\n[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker starting\n[INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': 'localhost:9092'}'\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaProducer patched start() called()\n[INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': 'localhost:9092'}'\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaProducer patched start() called()\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': 'localhost:9092', 'auto_offset_reset': 'latest', 'max_poll_records': 100}\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched start() called()\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched subscribe() called\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer.subscribe(), subscribing to: ['input_data']\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': 'localhost:9092', 'auto_offset_reset': 'earliest', 'max_poll_records': 100}\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched start() called()\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched subscribe() called\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer.subscribe(), subscribing to: ['output_data']\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[INFO] Demo Kafka app: Got data: 0.1\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched stop() called\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaProducer patched stop() called\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched stop() called\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaProducer patched stop() called\n[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker._stop() called\n[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker stopping\n")),(0,o.kt)("h3",{id:"recap"},"Recap"),(0,o.kt)("p",null,"We have created a simple fastkafka application. The app will consume the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"input_data")," topic, log it and produce the incremented\ndata to ",(0,o.kt)("inlineCode",{parentName:"p"},"output_data")," topic."),(0,o.kt)("p",null,"To test the app we have:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Created the app")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Started our Tester class which mirrors the developed app topics for\ntesting purposes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sent Data message to ",(0,o.kt)("inlineCode",{parentName:"p"},"input_data")," topic")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Asserted and checked that the developed service has reacted to Data\nmessage"))),(0,o.kt)("h2",{id:"running-the-service"},"Running the service"),(0,o.kt)("p",null,"The service can be started using builtin faskafka run CLI command.\nBefore we can do that, we will concatenate the code snippets from above\nand save them in a file ",(0,o.kt)("inlineCode",{parentName:"p"},'"application.py"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# content of the "application.py" file\n\nfrom pydantic import BaseModel, Field, NonNegativeFloat\n\nfrom fastkafka import FastKafka\nfrom fastkafka._components.logger import get_logger\n\nlogger = get_logger(__name__)\n\nclass Data(BaseModel):\n    data: NonNegativeFloat = Field(\n        ..., example=0.5, description="Float data example"\n    )\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Demo Kafka app",\n    kafka_brokers=kafka_brokers,\n)\n\n@kafka_app.consumes(topic="input_data", auto_offset_reset="latest")\nasync def on_input_data(msg: Data):\n    logger.info(f"Got data: {msg.data}")\n    await to_output_data(msg.data)\n\n\n@kafka_app.produces(topic="output_data")\nasync def to_output_data(data: float) -> Data:\n    processed_data = Data(data=data+1.0)\n    return processed_data\n')),(0,o.kt)("p",null,"To run the service, use the FastKafka CLI command and pass the module\n(in this case, the file where the app implementation is located) and the\napp simbol to the command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka run --num-workers=1 --kafka-broker localhost application:kafka_app\n")),(0,o.kt)("p",null,"After running the command, you should see the following output in your\ncommand line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[1504]: 23-05-31 11:36:45.874 [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to 'localhost:9092'\n[1504]: 23-05-31 11:36:45.875 [INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': 'localhost:9092'}'\n[1504]: 23-05-31 11:36:45.937 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[1504]: 23-05-31 11:36:45.937 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': 'localhost:9092', 'auto_offset_reset': 'latest', 'max_poll_records': 100}\n[1504]: 23-05-31 11:36:45.956 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[1504]: 23-05-31 11:36:45.956 [INFO] aiokafka.consumer.subscription_state: Updating subscribed topics to: frozenset({'input_data'})\n[1504]: 23-05-31 11:36:45.956 [INFO] aiokafka.consumer.consumer: Subscribed to topic(s): {'input_data'}\n[1504]: 23-05-31 11:36:45.956 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[1506]: 23-05-31 11:36:45.993 [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to 'localhost:9092'\n[1506]: 23-05-31 11:36:45.994 [INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': 'localhost:9092'}'\n[1506]: 23-05-31 11:36:46.014 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[1506]: 23-05-31 11:36:46.015 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': 'localhost:9092', 'auto_offset_reset': 'latest', 'max_poll_records': 100}\n[1506]: 23-05-31 11:36:46.040 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[1506]: 23-05-31 11:36:46.042 [INFO] aiokafka.consumer.subscription_state: Updating subscribed topics to: frozenset({'input_data'})\n[1506]: 23-05-31 11:36:46.043 [INFO] aiokafka.consumer.consumer: Subscribed to topic(s): {'input_data'}\n[1506]: 23-05-31 11:36:46.043 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[1506]: 23-05-31 11:36:46.068 [ERROR] aiokafka.cluster: Topic input_data not found in cluster metadata\n[1506]: 23-05-31 11:36:46.070 [INFO] aiokafka.consumer.group_coordinator: Metadata for topic has changed from {} to {'input_data': 0}. \n[1504]: 23-05-31 11:36:46.131 [WARNING] aiokafka.cluster: Topic input_data is not available during auto-create initialization\n[1504]: 23-05-31 11:36:46.132 [INFO] aiokafka.consumer.group_coordinator: Metadata for topic has changed from {} to {'input_data': 0}. \n[1506]: 23-05-31 11:37:00.237 [ERROR] aiokafka: Unable connect to node with id 0: [Errno 111] Connect call failed ('172.28.0.12', 9092)\n[1506]: 23-05-31 11:37:00.237 [ERROR] aiokafka: Unable to update metadata from [0]\n[1504]: 23-05-31 11:37:00.238 [ERROR] aiokafka: Unable connect to node with id 0: [Errno 111] Connect call failed ('172.28.0.12', 9092)\n[1504]: 23-05-31 11:37:00.238 [ERROR] aiokafka: Unable to update metadata from [0]\n[1506]: 23-05-31 11:37:00.294 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[1506]: 23-05-31 11:37:00.294 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\nStarting process cleanup, this may take a few seconds...\n23-05-31 11:37:00.345 [INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 1504...\n23-05-31 11:37:00.345 [INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 1506...\n[1504]: 23-05-31 11:37:00.347 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[1504]: 23-05-31 11:37:00.347 [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n23-05-31 11:37:00.607 [INFO] fastkafka._server: terminate_asyncio_process(): Process 1506 was already terminated.\n23-05-31 11:37:00.822 [INFO] fastkafka._server: terminate_asyncio_process(): Process 1504 was already terminated.\n")),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The kafka app comes with builtin documentation generation using\n",(0,o.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/tools/generator"},"AsyncApi HTML generator"),"."),(0,o.kt)("p",null,"AsyncApi requires Node.js to be installed and we provide the following\nconvenience command line for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka docs install_deps\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"23-05-31 11:38:24.128 [INFO] fastkafka._components.docs_dependencies: AsyncAPI generator installed\n")),(0,o.kt)("p",null,"To generate the documentation programatically you just need to call the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka docs generate application:kafka_app\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"23-05-31 11:38:25.113 [INFO] fastkafka._components.asyncapi: Old async specifications at '/content/asyncapi/spec/asyncapi.yml' does not exist.\n23-05-31 11:38:25.118 [INFO] fastkafka._components.asyncapi: New async specifications generated at: '/content/asyncapi/spec/asyncapi.yml'\n23-05-31 11:38:43.455 [INFO] fastkafka._components.asyncapi: Async docs generated at 'asyncapi/docs'\n23-05-31 11:38:43.455 [INFO] fastkafka._components.asyncapi: Output of '$ npx -y -p @asyncapi/generator ag asyncapi/spec/asyncapi.yml @asyncapi/html-template -o asyncapi/docs --force-write'\n\nDone! \u2728\nCheck out your shiny new generated files at /content/asyncapi/docs.\n")),(0,o.kt)("p",null,"This will generate the ",(0,o.kt)("em",{parentName:"p"},"asyncapi")," folder in relative path where all your\ndocumentation will be saved. You can check out the content of it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ls -l asyncapi\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"total 8\ndrwxr-xr-x 4 root root 4096 May 31 11:38 docs\ndrwxr-xr-x 2 root root 4096 May 31 11:38 spec\n")),(0,o.kt)("p",null,"In docs folder you will find the servable static html file of your\ndocumentation. This can also be served using our ",(0,o.kt)("inlineCode",{parentName:"p"},"fastkafka docs serve"),"\nCLI command (more on that in our guides)."),(0,o.kt)("p",null,"In spec folder you will find a asyncapi.yml file containing the async\nAPI specification of your application."),(0,o.kt)("p",null,"We can locally preview the generated documentation by running the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka docs serve application:kafka_app\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'23-05-31 11:38:45.250 [INFO] fastkafka._components.asyncapi: New async specifications generated at: \'/content/asyncapi/spec/asyncapi.yml\'\n23-05-31 11:39:04.410 [INFO] fastkafka._components.asyncapi: Async docs generated at \'asyncapi/docs\'\n23-05-31 11:39:04.411 [INFO] fastkafka._components.asyncapi: Output of \'$ npx -y -p @asyncapi/generator ag asyncapi/spec/asyncapi.yml @asyncapi/html-template -o asyncapi/docs --force-write\'\n\nDone! \u2728\nCheck out your shiny new generated files at /content/asyncapi/docs.\n\n\nServing documentation on http://127.0.0.1:8000\n127.0.0.1 - - [31/May/2023 11:39:14] "GET / HTTP/1.1" 200 -\n127.0.0.1 - - [31/May/2023 11:39:14] "GET /css/global.min.css HTTP/1.1" 200 -\n127.0.0.1 - - [31/May/2023 11:39:14] "GET /js/asyncapi-ui.min.js HTTP/1.1" 200 -\n127.0.0.1 - - [31/May/2023 11:39:14] "GET /css/asyncapi.min.css HTTP/1.1" 200 -\nInterupting serving of documentation and cleaning up...\n')),(0,o.kt)("p",null,"From the parameters passed to the application constructor, we get the\ndocumentation bellow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Demo Kafka app",\n    kafka_brokers=kafka_brokers,\n)\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-servers.png",alt:"Kafka_servers"})),(0,o.kt)("p",null,"The following documentation snippet are for the consumer as specified in\nthe code above:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-consumer.png",alt:"Kafka_consumer"})),(0,o.kt)("p",null,"The following documentation snippet are for the producer as specified in\nthe code above:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-producer.png",alt:"Kafka_producer"})),(0,o.kt)("p",null,"Finally, all messages as defined as subclasses of ",(0,o.kt)("em",{parentName:"p"},"BaseModel")," are\ndocumented as well:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-messages.png",alt:"Kafka_![Kafka_servers](https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-messages.png)"})),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"FastKafka is licensed under the Apache License 2.0"),(0,o.kt)("p",null,"A permissive license whose main conditions require preservation of\ncopyright and license notices. Contributors provide an express grant of\npatent rights. Licensed works, modifications, and larger works may be\ndistributed under different terms and without source code."),(0,o.kt)("p",null,"The full text of the license can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/airtai/fastkafka/main/LICENSE"},"here"),"."))}u.isMDXComponent=!0}}]);