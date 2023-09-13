"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[5746],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),k=a,m=p["".concat(u,".").concat(k)]||p[k]||f[k]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"api/fastkafka/executors/SequentialExecutor",id:"version-0.7.0/api/fastkafka/executors/SequentialExecutor",title:"SequentialExecutor",description:"fastkafka.executors.SequentialExecutor {fastkafka.executors.SequentialExecutor}",source:"@site/versioned_docs/version-0.7.0/api/fastkafka/executors/SequentialExecutor.md",sourceDirName:"api/fastkafka/executors",slug:"/api/fastkafka/executors/SequentialExecutor",permalink:"/docs/0.7.0/api/fastkafka/executors/SequentialExecutor",draft:!1,tags:[],version:"0.7.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DynamicTaskExecutor",permalink:"/docs/0.7.0/api/fastkafka/executors/DynamicTaskExecutor"},next:{title:"ApacheKafkaBroker",permalink:"/docs/0.7.0/api/fastkafka/testing/ApacheKafkaBroker"}},u={},s=[{value:"<code>fastkafka.executors.SequentialExecutor</code>",id:"fastkafka.executors.SequentialExecutor",level:2},{value:"<code>__init__</code>",id:"init",level:3},{value:"<code>run</code>",id:"run",level:3}],c={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fastkafka.executors.SequentialExecutor"},(0,a.kt)("inlineCode",{parentName:"h2"},"fastkafka.executors.SequentialExecutor")),(0,a.kt)("p",null,"A class that implements a sequential executor for processing consumer records."),(0,a.kt)("p",null,"The SequentialExecutor class extends the StreamExecutor class and provides functionality\nfor running processing tasks in sequence by awaiting their coroutines."),(0,a.kt)("h3",{id:"init"},(0,a.kt)("inlineCode",{parentName:"h3"},"__init__")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"def __init__(self, throw_exceptions: bool = False, max_buffer_size: int = 100000) -> None")),(0,a.kt)("p",null,"Create an instance of SequentialExecutor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"throw_exceptions"),": Flag indicating whether exceptions should be thrown or logged.\nDefaults to False."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_buffer_size"),": Maximum buffer size for the memory object stream.\nDefaults to 100_000.")),(0,a.kt)("h3",{id:"run"},(0,a.kt)("inlineCode",{parentName:"h3"},"run")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"def run(self, is_shutting_down_f: Callable[[], bool], generator: Callable[[], Awaitable[aiokafka.structs.ConsumerRecord]], processor: Callable[[aiokafka.structs.ConsumerRecord], Awaitable[NoneType]]) -> None")),(0,a.kt)("p",null,"Runs the sequential executor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_shutting_down_f"),": Function to check if the executor is shutting down."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"generator"),": Generator function for retrieving consumer records."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"processor"),": Processor function for processing consumer records.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None")))}f.isMDXComponent=!0}}]);