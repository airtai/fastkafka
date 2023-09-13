"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[5340],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):k(k({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=p(a),d=n,u=c["".concat(o,".").concat(d)]||c[d]||f[d]||l;return a?r.createElement(u,k(k({ref:e},s),{},{components:a})):r.createElement(u,k({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,k=new Array(l);k[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:n,k[1]=i;for(var p=2;p<l;p++)k[p]=a[p];return r.createElement.apply(null,k)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7743:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>k,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},k=void 0,i={unversionedId:"api/fastkafka/testing/ApacheKafkaBroker",id:"version-0.8.0/api/fastkafka/testing/ApacheKafkaBroker",title:"ApacheKafkaBroker",description:"fastkafka.testing.ApacheKafkaBroker {fastkafka.testing.ApacheKafkaBroker}",source:"@site/versioned_docs/version-0.8.0/api/fastkafka/testing/ApacheKafkaBroker.md",sourceDirName:"api/fastkafka/testing",slug:"/api/fastkafka/testing/ApacheKafkaBroker",permalink:"/docs/api/fastkafka/testing/ApacheKafkaBroker",draft:!1,tags:[],version:"0.8.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SequentialExecutor",permalink:"/docs/api/fastkafka/executors/SequentialExecutor"},next:{title:"LocalRedpandaBroker",permalink:"/docs/api/fastkafka/testing/LocalRedpandaBroker"}},o={},p=[{value:"fastkafka.testing.ApacheKafkaBroker",id:"fastkafka.testing.ApacheKafkaBroker",level:2},{value:"<strong>init</strong>",id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.init",level:3},{value:"get_service_config_string",id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.get_service_config_string",level:3},{value:"is_started",id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.is_started",level:3},{value:"start",id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.start",level:3},{value:"stop",id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.stop",level:3}],s={toc:p},c="wrapper";function f(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"fastkafka.testing.ApacheKafkaBroker"},"fastkafka.testing.ApacheKafkaBroker"),(0,n.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_testing/apache_kafka_broker.py#L168-L305",class:"link-to-source",target:"_blank"},"View source"),(0,n.kt)("p",null,"ApacheKafkaBroker class, used for running unique kafka brokers in tests to prevent topic clashing."),(0,n.kt)("h3",{id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.init"},(0,n.kt)("strong",{parentName:"h3"},"init")),(0,n.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_testing/apache_kafka_broker.py#L173-L209",class:"link-to-source",target:"_blank"},"View source"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"__init__(\n    self,\n    topics=[],\n    retries=3,\n    apply_nest_asyncio=False,\n    zookeeper_port=2181,\n    listener_port=9092,\n)\n")),(0,n.kt)("p",null,"Initialises the ApacheKafkaBroker object"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"topics")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Iterable[str]")),(0,n.kt)("td",{parentName:"tr",align:null},"List of topics to create after sucessfull Kafka broker startup"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"[]"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"retries")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"int")),(0,n.kt)("td",{parentName:"tr",align:null},"Number of retries to create kafka and zookeeper services using random"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"apply_nest_asyncio")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"set to True if running in notebook"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"False"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"zookeeper_port")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"int")),(0,n.kt)("td",{parentName:"tr",align:null},"Port for clients (Kafka brokes) to connect"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"2181"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"listener_port")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"int")),(0,n.kt)("td",{parentName:"tr",align:null},"Port on which the clients (producers and consumers) can connect"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9092"))))),(0,n.kt)("h3",{id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.get_service_config_string"},"get_service_config_string"),(0,n.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_testing/apache_kafka_broker.py#L459-L475",class:"link-to-source",target:"_blank"},"View source"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"get_service_config_string(\n    self, service, data_dir\n)\n")),(0,n.kt)("p",null,"Gets the configuration string for a service."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"service")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:null},'Name of the service ("kafka" or "zookeeper").'),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"required"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"data_dir")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Path")),(0,n.kt)("td",{parentName:"tr",align:null},"Path to the directory where the service will save data."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"required"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:null},"The service configuration string.")))),(0,n.kt)("h3",{id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.is_started"},"is_started"),(0,n.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_testing/apache_kafka_broker.py#L212-L222",class:"link-to-source",target:"_blank"},"View source"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"@property\nis_started(\n    self\n)\n")),(0,n.kt)("p",null,"Property indicating whether the ApacheKafkaBroker object is started."),(0,n.kt)("p",null,"The is_started property indicates if the ApacheKafkaBroker object is currently\nin a started state. This implies that Zookeeper and Kafka broker processes have\nsucesfully started and are ready for handling events."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"bool")),(0,n.kt)("td",{parentName:"tr",align:null},"True if the object is started, False otherwise.")))),(0,n.kt)("h3",{id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.start"},"start"),(0,n.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_testing/apache_kafka_broker.py#L624-L664",class:"link-to-source",target:"_blank"},"View source"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"start(\n    self\n)\n")),(0,n.kt)("p",null,"Starts a local Kafka broker and ZooKeeper instance synchronously."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"str")),(0,n.kt)("td",{parentName:"tr",align:null},"The Kafka broker bootstrap server address in string format: host:port.")))),(0,n.kt)("h3",{id:"fastkafka._testing.apache_kafka_broker.ApacheKafkaBroker.stop"},"stop"),(0,n.kt)("a",{href:"https://github.com/airtai/fastkafka/blob/0.8.0/fastkafka/_testing/apache_kafka_broker.py#L668-L680",class:"link-to-source",target:"_blank"},"View source"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"stop(\n    self\n)\n")),(0,n.kt)("p",null,"Stops a local kafka broker and zookeeper instance synchronously"))}f.isMDXComponent=!0}}]);