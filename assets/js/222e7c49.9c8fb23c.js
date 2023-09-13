"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[1733],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),k=l(t),f=o,m=k["".concat(p,".").concat(f)]||k[f]||d[f]||s;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r[k]="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const s={},i="FastKafka tutorial",r={unversionedId:"guides/Guide_00_FastKafka_Demo",id:"version-0.5.0/guides/Guide_00_FastKafka_Demo",title:"FastKafka tutorial",description:"FastKafka is a powerful and easy-to-use Python",source:"@site/versioned_docs/version-0.5.0/guides/Guide_00_FastKafka_Demo.md",sourceDirName:"guides",slug:"/guides/Guide_00_FastKafka_Demo",permalink:"/docs/0.5.0/guides/Guide_00_FastKafka_Demo",draft:!1,tags:[],version:"0.5.0",frontMatter:{}},p={},l=[{value:"Install",id:"install",level:2},{value:"Running in Colab",id:"running-in-colab",level:2},{value:"Writing server code",id:"writing-server-code",level:2},{value:"Preparing the demo model",id:"preparing-the-demo-model",level:3},{value:"Messages",id:"messages",level:3},{value:"Application",id:"application",level:3},{value:"Function decorators",id:"function-decorators",level:3},{value:"Testing the service",id:"testing-the-service",level:2},{value:"Recap",id:"recap",level:3},{value:"Running the service",id:"running-the-service",level:2},{value:"Documentation",id:"documentation",level:2}],c={toc:l},k="wrapper";function d(e){let{components:a,...t}=e;return(0,o.kt)(k,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fastkafka-tutorial"},"FastKafka tutorial"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://fastkafka.airt.ai/"},"FastKafka")," is a powerful and easy-to-use Python\nlibrary for building asynchronous services that interact with Kafka\ntopics. Built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/"},"Pydantic"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aio-libs/aiokafka"},"AIOKafka")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/"},"AsyncAPI"),", FastKafka simplifies the process\nof writing producers and consumers for Kafka topics, handling all the\nparsing, networking, task scheduling and data generation automatically.\nWith FastKafka, you can quickly prototype and develop high-performance\nKafka-based services with minimal code, making it an ideal choice for\ndevelopers looking to streamline their workflow and accelerate their\nprojects."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"FastKafka works on macOS, Linux, and most Unix-style operating systems.\nYou can install it with ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," as usual:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip install fastkafka\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"try:\n    import fastkafka\nexcept:\n    ! pip install fastkafka\n")),(0,o.kt)("h2",{id:"running-in-colab"},"Running in Colab"),(0,o.kt)("p",null,"You can start this interactive tutorial in Google Colab by clicking the\nbutton below:"),(0,o.kt)("a",{href:"https://colab.research.google.com/github/airtai/fastkafka/blob/main/nbs/guides/Guide_00_FastKafka_Demo.ipynb",target:"_blank"},(0,o.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),(0,o.kt)("h2",{id:"writing-server-code"},"Writing server code"),(0,o.kt)("p",null,"Here is an example python script using FastKafka that takes data from a\nKafka topic, makes a prediction using a predictive model, and outputs\nthe prediction to another Kafka topic."),(0,o.kt)("h3",{id:"preparing-the-demo-model"},"Preparing the demo model"),(0,o.kt)("p",null,"First we will prepare our model using the Iris dataset so that we can\ndemonstrate the preditions using FastKafka. The following call downloads\nthe dataset and trains the model."),(0,o.kt)("p",null,"We will wrap the model creation into a lifespan of our app so that the\nmodel is created just before the app is started."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from contextlib import asynccontextmanager\n\nfrom sklearn.datasets import load_iris\nfrom sklearn.linear_model import LogisticRegression\n\nfrom fastkafka import FastKafka\n\nml_models = {}\n\n\n@asynccontextmanager\nasync def lifespan(app: FastKafka):\n    # Load the ML model\n    X, y = load_iris(return_X_y=True)\n    ml_models["iris_predictor"] = LogisticRegression(random_state=0, max_iter=500).fit(\n        X, y\n    )\n    yield\n    # Clean up the ML models and release the resources\n    ml_models.clear()\n')),(0,o.kt)("h3",{id:"messages"},"Messages"),(0,o.kt)("p",null,"FastKafka uses ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/"},"Pydantic")," to parse input\nJSON-encoded data into Python objects, making it easy to work with\nstructured data in your Kafka-based applications. Pydantic\u2019s\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/usage/models/"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseModel"))," class allows you\nto define messages using a declarative syntax, making it easy to specify\nthe fields and types of your messages."),(0,o.kt)("p",null,"This example defines two message classes for use in a FastKafka\napplication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IrisInputData")," class is used to represent input data for a\npredictive model. It has four fields of type\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/usage/types/#constrained-types"},(0,o.kt)("inlineCode",{parentName:"a"},"NonNegativeFloat")),",\nwhich is a subclass of float that only allows non-negative floating\npoint values.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IrisPrediction")," class is used to represent the output of the\npredictive model. It has a single field ",(0,o.kt)("inlineCode",{parentName:"p"},"species")," of type string\nrepresenting the predicted species."))),(0,o.kt)("p",null,"These message classes will be used to parse and validate incoming data\nin Kafka consumers and producers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseModel, Field, NonNegativeFloat\n\n\nclass IrisInputData(BaseModel):\n    sepal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal length in cm"\n    )\n    sepal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal width in cm"\n    )\n    petal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal length in cm"\n    )\n    petal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal width in cm"\n    )\n\n\nclass IrisPrediction(BaseModel):\n    species: str = Field(..., example="setosa", description="Predicted species")\n')),(0,o.kt)("h3",{id:"application"},"Application"),(0,o.kt)("p",null,"This example shows how to initialize a FastKafka application."),(0,o.kt)("p",null,"It starts by defining a dictionary called ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka_brokers"),", which\ncontains two entries: ",(0,o.kt)("inlineCode",{parentName:"p"},'"localhost"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"production"'),", specifying local\ndevelopment and production Kafka brokers. Each entry specifies the URL,\nport, and other details of a Kafka broker. This dictionary is used for\ngenerating the documentation only and it is not being checked by the\nactual server."),(0,o.kt)("p",null,"Next, an object of the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.5.0/api/fastkafka//#fastkafka.FastKafka"},(0,o.kt)("inlineCode",{parentName:"a"},"FastKafka")),"\nclass is initialized with the minimum set of arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kafka_brokers"),": a dictionary used for generation of documentation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Iris predictions",\n    kafka_brokers=kafka_brokers,\n    lifespan=lifespan,\n)\n')),(0,o.kt)("h3",{id:"function-decorators"},"Function decorators"),(0,o.kt)("p",null,"FastKafka provides convenient function decorators ",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.produces")," to allow you to delegate the actual process of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"consuming and producing data to Kafka, and")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"decoding and encoding JSON encode messages"))),(0,o.kt)("p",null,"from user defined functions to the framework. The FastKafka framework\ndelegates these jobs to AIOKafka and Pydantic libraries."),(0,o.kt)("p",null,"These decorators make it easy to specify the processing logic for your\nKafka consumers and producers, allowing you to focus on the core\nbusiness logic of your application without worrying about the underlying\nKafka integration."),(0,o.kt)("p",null,"This following example shows how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.produces")," decorators in a FastKafka application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes")," decorator is applied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_input_data"),'\nfunction, which specifies that this function should be called whenever\na message is received on the \u201cinput_data" Kafka topic. The\n',(0,o.kt)("inlineCode",{parentName:"p"},"on_input_data")," function takes a single argument which is expected to\nbe an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"IrisInputData")," message class. Specifying the\ntype of the single argument is instructing the Pydantic to use\n",(0,o.kt)("inlineCode",{parentName:"p"},"IrisInputData.parse_raw()")," on the consumed message before passing it\nto the user defined function ",(0,o.kt)("inlineCode",{parentName:"p"},"on_input_data"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@produces")," decorator is applied to the ",(0,o.kt)("inlineCode",{parentName:"p"},"to_predictions"),' function,\nwhich specifies that this function should produce a message to the\n\u201cpredictions" Kafka topic whenever it is called. The ',(0,o.kt)("inlineCode",{parentName:"p"},"to_predictions"),"\nfunction takes a single integer argument ",(0,o.kt)("inlineCode",{parentName:"p"},"species_class")," representing\none of three possible strign values predicted by the mdoel. It creates\na new ",(0,o.kt)("inlineCode",{parentName:"p"},"IrisPrediction")," message using this value and then returns it.\nThe framework will call the ",(0,o.kt)("inlineCode",{parentName:"p"},'IrisPrediction.json().encode("utf-8")'),"\nfunction on the returned value and produce it to the specified topic."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@kafka_app.consumes(topic="input_data", auto_offset_reset="latest")\nasync def on_input_data(msg: IrisInputData):\n    species_class = ml_models["iris_predictor"].predict(\n        [[msg.sepal_length, msg.sepal_width, msg.petal_length, msg.petal_width]]\n    )[0]\n\n    to_predictions(species_class)\n\n\n@kafka_app.produces(topic="predictions")\ndef to_predictions(species_class: int) -> IrisPrediction:\n    iris_species = ["setosa", "versicolor", "virginica"]\n\n    prediction = IrisPrediction(species=iris_species[species_class])\n    return prediction\n')),(0,o.kt)("h2",{id:"testing-the-service"},"Testing the service"),(0,o.kt)("p",null,"The service can be tested using the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.5.0/api/fastkafka/testing/Tester/#fastkafka.testing.Tester"},(0,o.kt)("inlineCode",{parentName:"a"},"Tester")),"\ninstances which internally starts Kafka broker and zookeeper."),(0,o.kt)("p",null,"Before running tests, we have to install Java runtime and Apache Kafka\nlocally. To simplify the process, we provide the following convenience\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka testing install_deps\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._components.test_dependencies: Java is already installed.\n[INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...\n[INFO] fastkafka._components.test_dependencies: Kafka is installed.\n[INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...\n\n[INFO] fastkafka._components.test_dependencies: Java is already installed.\n[INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...\n[INFO] fastkafka._components.test_dependencies: Kafka is installed.\n[INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fastkafka.testing import Tester\n\nmsg = IrisInputData(\n    sepal_length=0.1,\n    sepal_width=0.2,\n    petal_length=0.3,\n    petal_width=0.4,\n)\n\n# Start Tester app and create local Kafka broker for testing\nasync with Tester(kafka_app) as tester:\n    # Send IrisInputData message to input_data topic\n    await tester.to_input_data(msg)\n\n    # Assert that the kafka_app responded with IrisPrediction in predictions topic\n    await tester.awaited_mocks.on_predictions.assert_awaited_with(\n        IrisPrediction(species="setosa"), timeout=2\n    )\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker._start() called\n[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker._patch_consumers_and_producers(): Patching consumers and producers!\n[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker starting\n[INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': 'localhost:9092'}'\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaProducer patched start() called()\n[INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': 'localhost:9092'}'\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaProducer patched start() called()\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': 'localhost:9092', 'auto_offset_reset': 'latest', 'max_poll_records': 100}\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched start() called()\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched subscribe() called\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer.subscribe(), subscribing to: ['input_data']\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': 'localhost:9092', 'auto_offset_reset': 'earliest', 'max_poll_records': 100}\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched start() called()\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched subscribe() called\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer.subscribe(), subscribing to: ['predictions']\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[INFO] fastkafka._components.aiokafka_consumer_loop: _aiokafka_consumer_loop(): Consumer loop shutting down, waiting for send_stream to drain...\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched stop() called\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaProducer patched stop() called\n[INFO] fastkafka._components.aiokafka_consumer_loop: _aiokafka_consumer_loop(): Consumer loop shutting down, waiting for send_stream to drain...\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaConsumer patched stop() called\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n[INFO] fastkafka._testing.in_memory_broker: AIOKafkaProducer patched stop() called\n[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker._stop() called\n[INFO] fastkafka._testing.in_memory_broker: InMemoryBroker stopping\n")),(0,o.kt)("h3",{id:"recap"},"Recap"),(0,o.kt)("p",null,"We have created a Iris classification model and encapulated it into our\nfastkafka application. The app will consume the IrisInputData from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"input_data")," topic and produce the predictions to ",(0,o.kt)("inlineCode",{parentName:"p"},"predictions")," topic."),(0,o.kt)("p",null,"To test the app we have:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Created the app")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Started our Tester class which mirrors the developed app topics for\ntesting purpuoses")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sent IrisInputData message to ",(0,o.kt)("inlineCode",{parentName:"p"},"input_data")," topic")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Asserted and checked that the developed iris classification service\nhas reacted to IrisInputData message"))),(0,o.kt)("h2",{id:"running-the-service"},"Running the service"),(0,o.kt)("p",null,"The service can be started using builtin ",(0,o.kt)("inlineCode",{parentName:"p"},"faskafka run")," CLI command.\nBefore we can do that, we will concatenate the code snippets from above\nand save them in a file ",(0,o.kt)("inlineCode",{parentName:"p"},'"application.py"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# content of the "application.py" file\n\nfrom contextlib import asynccontextmanager\n\nfrom sklearn.datasets import load_iris\nfrom sklearn.linear_model import LogisticRegression\n\nfrom fastkafka import FastKafka\n\nml_models = {}\n\n\n@asynccontextmanager\nasync def lifespan(app: FastKafka):\n    # Load the ML model\n    X, y = load_iris(return_X_y=True)\n    ml_models["iris_predictor"] = LogisticRegression(random_state=0, max_iter=500).fit(\n        X, y\n    )\n    yield\n    # Clean up the ML models and release the resources\n    ml_models.clear()\n\n\nfrom pydantic import BaseModel, NonNegativeFloat, Field\n\nclass IrisInputData(BaseModel):\n    sepal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal length in cm"\n    )\n    sepal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal width in cm"\n    )\n    petal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal length in cm"\n    )\n    petal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal width in cm"\n    )\n\n\nclass IrisPrediction(BaseModel):\n    species: str = Field(..., example="setosa", description="Predicted species")\n    \nfrom fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Iris predictions",\n    kafka_brokers=kafka_brokers,\n    lifespan=lifespan,\n)\n\n@kafka_app.consumes(topic="input_data", auto_offset_reset="latest")\nasync def on_input_data(msg: IrisInputData):\n    species_class = ml_models["iris_predictor"].predict(\n        [[msg.sepal_length, msg.sepal_width, msg.petal_length, msg.petal_width]]\n    )[0]\n\n    to_predictions(species_class)\n\n\n@kafka_app.produces(topic="predictions")\ndef to_predictions(species_class: int) -> IrisPrediction:\n    iris_species = ["setosa", "versicolor", "virginica"]\n\n    prediction = IrisPrediction(species=iris_species[species_class])\n    return prediction\n')),(0,o.kt)("p",null,"To run the service, you will need a running Kafka broker on localhost as\nspecified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka_brokers")," parameter above. We can start the Kafka\nbroker locally using the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.5.0/api/fastkafka/testing/ApacheKafkaBroker/#fastkafka.testing.ApacheKafkaBroker"},(0,o.kt)("inlineCode",{parentName:"a"},"ApacheKafkaBroker")),".\nNotice that the same happens automatically in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.5.0/api/fastkafka/testing/Tester/#fastkafka.testing.Tester"},(0,o.kt)("inlineCode",{parentName:"a"},"Tester")),"\nas shown above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._testing.apache_kafka_broker: ApacheKafkaBroker.start(): entering...\n[WARNING] fastkafka._testing.apache_kafka_broker: ApacheKafkaBroker.start(): (<_UnixSelectorEventLoop running=True closed=False debug=False>) is already running!\n[WARNING] fastkafka._testing.apache_kafka_broker: ApacheKafkaBroker.start(): calling nest_asyncio.apply()\n[INFO] fastkafka._components.test_dependencies: Java is already installed.\n[INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...\n[INFO] fastkafka._components.test_dependencies: Kafka is installed.\n[INFO] fastkafka._components.test_dependencies: But not exported to PATH, exporting...\n[INFO] fastkafka._testing.apache_kafka_broker: Starting zookeeper...\n[INFO] fastkafka._testing.apache_kafka_broker: Starting kafka...\n[INFO] fastkafka._testing.apache_kafka_broker: Local Kafka broker up and running on 127.0.0.1:9092\n[INFO] fastkafka._testing.apache_kafka_broker: <class 'fastkafka.testing.ApacheKafkaBroker'>.start(): returning 127.0.0.1:9092\n[INFO] fastkafka._testing.apache_kafka_broker: ApacheKafkaBroker.start(): exited.\n\n'127.0.0.1:9092'\n")),(0,o.kt)("p",null,"Then, we start the FastKafka service by running the following command in\nthe folder where the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.py")," file is located:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka run --num-workers=2 --kafka-broker localhost application:kafka_app\n")),(0,o.kt)("p",null,"In the above command, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"--num-workers")," option to specify how many\nworkers to launch and we use ",(0,o.kt)("inlineCode",{parentName:"p"},"--kafka-broker")," option to specify which\nkafka broker configuration to use from earlier specified ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka_brokers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[1200656]: [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to 'localhost:9092'\n[1200656]: [INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': 'localhost:9092'}'\n[1200656]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[1200656]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': 'localhost:9092', 'auto_offset_reset': 'latest', 'max_poll_records': 100}\n[1200656]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[1200656]: [INFO] aiokafka.consumer.subscription_state: Updating subscribed topics to: frozenset({'input_data'})\n[1200656]: [INFO] aiokafka.consumer.consumer: Subscribed to topic(s): {'input_data'}\n[1200656]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[1200654]: [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to 'localhost:9092'\n[1200654]: [INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': 'localhost:9092'}'\n[1200656]: [WARNING] aiokafka.cluster: Topic input_data is not available during auto-create initialization\n[1200656]: [INFO] aiokafka.consumer.group_coordinator: Metadata for topic has changed from {} to {'input_data': 0}. \n[1200654]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[1200654]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': 'localhost:9092', 'auto_offset_reset': 'latest', 'max_poll_records': 100}\n[1200654]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[1200654]: [INFO] aiokafka.consumer.subscription_state: Updating subscribed topics to: frozenset({'input_data'})\n[1200654]: [INFO] aiokafka.consumer.consumer: Subscribed to topic(s): {'input_data'}\n[1200654]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[1200654]: [WARNING] aiokafka.cluster: Topic input_data is not available during auto-create initialization\n[1200654]: [INFO] aiokafka.consumer.group_coordinator: Metadata for topic has changed from {} to {'input_data': 0}. \n[1200654]: [ERROR] aiokafka: Unable connect to node with id 0: [Errno 111] Connect call failed ('192.168.112.2', 9092)\n[1200654]: [ERROR] aiokafka: Unable to update metadata from [0]\n[1200656]: [ERROR] aiokafka: Unable connect to node with id 0: [Errno 111] Connect call failed ('192.168.112.2', 9092)\n[1200656]: [ERROR] aiokafka: Unable to update metadata from [0]\n^C\n[1200656]: [INFO] fastkafka._components.aiokafka_consumer_loop: _aiokafka_consumer_loop(): Consumer loop shutting down, waiting for send_stream to drain...\n[1200656]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[1200656]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n[1200654]: [INFO] fastkafka._components.aiokafka_consumer_loop: _aiokafka_consumer_loop(): Consumer loop shutting down, waiting for send_stream to drain...\n[1200654]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[1200654]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\nStarting process cleanup, this may take a few seconds...\n[INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 1200654...\n[INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 1200656...\n")),(0,o.kt)("p",null,"You need to interupt running of the cell above by selecting\n",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime->Interupt execution")," on the toolbar above."),(0,o.kt)("p",null,"Finally, we can stop the local Kafka Broker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._testing.apache_kafka_broker: ApacheKafkaBroker.stop(): entering...\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Terminating the process 1200193...\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Process 1200193 was already terminated.\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Terminating the process 1199820...\n[INFO] fastkafka._components._subprocess: terminate_asyncio_process(): Process 1199820 was already terminated.\n[INFO] fastkafka._testing.apache_kafka_broker: ApacheKafkaBroker.stop(): exited.\n")),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The kafka app comes with builtin documentation generation using\n",(0,o.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/tools/generator"},"AsyncApi HTML generator"),"."),(0,o.kt)("p",null,"When running in Colab, we need to update Node.js first:"),(0,o.kt)("p",null,"We need to install all dependancies for the generator using the\nfollowing command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka docs install_deps\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._components.docs_dependencies: AsyncAPI generator installed\n")),(0,o.kt)("p",null,"To generate the documentation programatically you just need to call the\nfolloving command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka docs generate application:kafka_app\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._components.asyncapi: New async specifications generated at: '/work/fastkafka/nbs/guides/asyncapi/spec/asyncapi.yml'\n[INFO] fastkafka._components.asyncapi: Async docs generated at 'asyncapi/docs'\n[INFO] fastkafka._components.asyncapi: Output of '$ npx -y -p @asyncapi/generator ag asyncapi/spec/asyncapi.yml @asyncapi/html-template -o asyncapi/docs --force-write'\n\nDone! \u2728\nCheck out your shiny new generated files at /work/fastkafka/nbs/guides/asyncapi/docs.\n")),(0,o.kt)("p",null,". This will generate the ",(0,o.kt)("em",{parentName:"p"},"asyncapi")," folder in relative path where all\nyour documentation will be saved. You can check out the content of it\nwith:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ls -l asyncapi\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"total 8\ndrwxrwxr-x 4 kumaran kumaran 4096 Mar 21 10:09 docs\ndrwxrwxr-x 2 kumaran kumaran 4096 Mar 21 10:09 spec\n")),(0,o.kt)("p",null,"In docs folder you will find the servable static html file of your\ndocumentation. This can also be served using our ",(0,o.kt)("inlineCode",{parentName:"p"},"fastkafka docs serve"),"\nCLI command (more on that in our guides)."),(0,o.kt)("p",null,"In spec folder you will find a asyncapi.yml file containing the async\nAPI specification of your application."),(0,o.kt)("p",null,"We can locally preview the generated documentation by running the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fastkafka docs serve application:kafka_app\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[INFO] fastkafka._components.asyncapi: New async specifications generated at: '/work/fastkafka/nbs/guides/asyncapi/spec/asyncapi.yml'\n[INFO] fastkafka._components.asyncapi: Async docs generated at 'asyncapi/docs'\n[INFO] fastkafka._components.asyncapi: Output of '$ npx -y -p @asyncapi/generator ag asyncapi/spec/asyncapi.yml @asyncapi/html-template -o asyncapi/docs --force-write'\n\nDone! \u2728\nCheck out your shiny new generated files at /work/fastkafka/nbs/guides/asyncapi/docs.\n\n\nServing documentation on http://127.0.0.1:8000\n^C\nInterupting serving of documentation and cleaning up...\n")),(0,o.kt)("p",null,"From the parameters passed to the application constructor, we get the\ndocumentation bellow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Iris predictions",\n    kafka_brokers=kafka_brokers,\n    bootstrap_servers="localhost:9092",\n)\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-servers.png",alt:"Kafka_servers"})),(0,o.kt)("p",null,"The following documentation snippet are for the consumer as specified in\nthe code above:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-consumer.png",alt:"Kafka_consumer"})),(0,o.kt)("p",null,"The following documentation snippet are for the producer as specified in\nthe code above:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-producer.png",alt:"Kafka_producer"})),(0,o.kt)("p",null,"Finally, all messages as defined as subclasses of ",(0,o.kt)("em",{parentName:"p"},"BaseModel")," are\ndocumented as well:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-messages.png",alt:"Kafka_![Kafka_servers](https://raw.githubusercontent.com/airtai/fastkafka/main/nbs/images/screenshot-kafka-messages.png)"})))}d.isMDXComponent=!0}}]);