"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[5430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||f[u]||o;return a?n.createElement(k,c(c({ref:t},l),{},{components:a})):n.createElement(k,c({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},c=void 0,i={unversionedId:"api/fastkafka/encoder/avsc_to_pydantic",id:"version-0.6.0/api/fastkafka/encoder/avsc_to_pydantic",title:"avsc_to_pydantic",description:"fastkafka.encoder.avsctopydantic {fastkafka.encoder.avsctopydantic}",source:"@site/versioned_docs/version-0.6.0/api/fastkafka/encoder/avsc_to_pydantic.md",sourceDirName:"api/fastkafka/encoder",slug:"/api/fastkafka/encoder/avsc_to_pydantic",permalink:"/docs/0.6.0/api/fastkafka/encoder/avsc_to_pydantic",draft:!1,tags:[],version:"0.6.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"avro_encoder",permalink:"/docs/0.6.0/api/fastkafka/encoder/avro_encoder"},next:{title:"json_decoder",permalink:"/docs/0.6.0/api/fastkafka/encoder/json_decoder"}},p={},s=[{value:"<code>fastkafka.encoder.avsc_to_pydantic</code>",id:"fastkafka.encoder.avsc_to_pydantic",level:2},{value:"<code>avsc_to_pydantic</code>",id:"avsc_to_pydantic",level:3}],l={toc:s},d="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fastkafka.encoder.avsc_to_pydantic"},(0,r.kt)("inlineCode",{parentName:"h2"},"fastkafka.encoder.avsc_to_pydantic")),(0,r.kt)("h3",{id:"avsc_to_pydantic"},(0,r.kt)("inlineCode",{parentName:"h3"},"avsc_to_pydantic")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def avsc_to_pydantic(schema: Dict[str, Any]) -> ModelMetaclass")),(0,r.kt)("p",null,"Generate pydantic model from given Avro Schema"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema"),": Avro schema in dictionary format")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pydantic model class built from given avro schema")))}f.isMDXComponent=!0}}]);