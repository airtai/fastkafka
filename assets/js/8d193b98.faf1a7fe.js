"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[7505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(a),c=o,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={},r="Contributing to FastKafka",l={unversionedId:"CONTRIBUTING",id:"CONTRIBUTING",title:"Contributing to FastKafka",description:"First off, thanks for taking the time to contribute! \u2764\ufe0f",source:"@site/docs/CONTRIBUTING.md",sourceDirName:".",slug:"/CONTRIBUTING",permalink:"/docs/next/CONTRIBUTING",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LICENSE",permalink:"/docs/next/LICENSE"},next:{title:"Release notes",permalink:"/docs/next/CHANGELOG"}},s={},u=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"I Have a Question",id:"i-have-a-question",level:2},{value:"I Want To Contribute",id:"i-want-to-contribute",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:3},{value:"Before Submitting a Bug Report",id:"before-submitting-a-bug-report",level:4},{value:"How Do I Submit a Good Bug Report?",id:"how-do-i-submit-a-good-bug-report",level:4},{value:"Suggesting Enhancements",id:"suggesting-enhancements",level:3},{value:"Before Submitting an Enhancement",id:"before-submitting-an-enhancement",level:4},{value:"How Do I Submit a Good Enhancement Suggestion?",id:"how-do-i-submit-a-good-enhancement-suggestion",level:4},{value:"Your First Code Contribution",id:"your-first-code-contribution",level:3},{value:"Development",id:"development",level:2},{value:"Prepare the dev environment",id:"prepare-the-dev-environment",level:3},{value:"Clone the FastKafka repository",id:"clone-the-fastkafka-repository",level:4},{value:"Optional: create a virtual python environment",id:"optional-create-a-virtual-python-environment",level:4},{value:"Install FastKafka",id:"install-fastkafka",level:4},{value:"Install JRE and Kafka toolkit",id:"install-jre-and-kafka-toolkit",level:4},{value:"Install npm",id:"install-npm",level:4},{value:"Install docusaurus",id:"install-docusaurus",level:4},{value:"Check if everything works",id:"check-if-everything-works",level:4},{value:"Way of working",id:"way-of-working",level:3},{value:"Before a PR",id:"before-a-pr",level:3},{value:"Attribution",id:"attribution",level:2}],p={toc:u},h="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-fastkafka"},"Contributing to FastKafka"),(0,o.kt)("p",null,"First off, thanks for taking the time to contribute! \u2764\ufe0f"),(0,o.kt)("p",null,"All types of contributions are encouraged and valued. See the ",(0,o.kt)("a",{parentName:"p",href:"#table-of-contents"},"Table of Contents")," for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. \ud83c\udf89"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Star the project"),(0,o.kt)("li",{parentName:"ul"},"Tweet about it"),(0,o.kt)("li",{parentName:"ul"},"Refer this project in your project's readme"),(0,o.kt)("li",{parentName:"ul"},"Mention the project at local meetups and tell your friends/colleagues"))),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#i-have-a-question"},"I Have a Question")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#i-want-to-contribute"},"I Want To Contribute"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reporting-bugs"},"Reporting Bugs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#suggesting-enhancements"},"Suggesting Enhancements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#your-first-code-contribution"},"Your First Code Contribution")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#development"},"Development"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#prepare-the-dev-environment"},"Prepare the dev environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#way-of-working"},"Way of working")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#before-a-pr"},"Before a PR"))))),(0,o.kt)("h2",{id:"i-have-a-question"},"I Have a Question"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to ask a question, we assume that you have read the available ",(0,o.kt)("a",{parentName:"p",href:"https://fastkafka.airt.ai/docs"},"Documentation"),".")),(0,o.kt)("p",null,"Before you ask a question, it is best to search for existing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airtai/fastkafka/issues"},"Issues")," that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue."),(0,o.kt)("p",null,"If you then still feel the need to ask a question and need clarification, we recommend the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contact us on ",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/invite/CJWmYpyFbc"},"Discord")),(0,o.kt)("li",{parentName:"ul"},"Open an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airtai/fastkafka/issues/new"},"Issue"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Provide as much context as you can about what you're running into")))),(0,o.kt)("p",null,"We will then take care of the issue as soon as possible."),(0,o.kt)("h2",{id:"i-want-to-contribute"},"I Want To Contribute"),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"legal-notice"},"Legal Notice"),(0,o.kt)("p",{parentName:"blockquote"},"When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.")),(0,o.kt)("h3",{id:"reporting-bugs"},"Reporting Bugs"),(0,o.kt)("h4",{id:"before-submitting-a-bug-report"},"Before Submitting a Bug Report"),(0,o.kt)("p",null,"A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure that you are using the latest version."),(0,o.kt)("li",{parentName:"ul"},"Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the ",(0,o.kt)("a",{parentName:"li",href:"https://fastkafka.airt.ai/docs"},"documentation"),". If you are looking for support, you might want to check ",(0,o.kt)("a",{parentName:"li",href:"#i-have-a-question"},"this section"),")."),(0,o.kt)("li",{parentName:"ul"},"To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airtai/fastkafka/issues?q=label%3Abug"},"bug tracker"),"."),(0,o.kt)("li",{parentName:"ul"},"Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue."),(0,o.kt)("li",{parentName:"ul"},"Collect information about the bug:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Stack trace (Traceback)"),(0,o.kt)("li",{parentName:"ul"},"OS, Platform and Version (Windows, Linux, macOS, x86, ARM)"),(0,o.kt)("li",{parentName:"ul"},"Python version"),(0,o.kt)("li",{parentName:"ul"},"Possibly your input and the output"),(0,o.kt)("li",{parentName:"ul"},"Can you reliably reproduce the issue? And can you also reproduce it with older versions?")))),(0,o.kt)("h4",{id:"how-do-i-submit-a-good-bug-report"},"How Do I Submit a Good Bug Report?"),(0,o.kt)("p",null,"We use GitHub issues to track bugs and errors. If you run into an issue with the project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airtai/fastkafka/issues/new"},"Issue"),". (Since we can't be sure at this point whether it is a bug or not, we ask you not to talk about a bug yet and not to label the issue.)"),(0,o.kt)("li",{parentName:"ul"},"Explain the behavior you would expect and the actual behavior."),(0,o.kt)("li",{parentName:"ul"},"Please provide as much context as possible and describe the ",(0,o.kt)("em",{parentName:"li"},"reproduction steps")," that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case."),(0,o.kt)("li",{parentName:"ul"},"Provide the information you collected in the previous section.")),(0,o.kt)("p",null,"Once it's filed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The project team will label the issue accordingly."),(0,o.kt)("li",{parentName:"ul"},"A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as ",(0,o.kt)("inlineCode",{parentName:"li"},"needs-repro"),". Bugs with the ",(0,o.kt)("inlineCode",{parentName:"li"},"needs-repro")," tag will not be addressed until they are reproduced."),(0,o.kt)("li",{parentName:"ul"},"If the team is able to reproduce the issue, it will be marked ",(0,o.kt)("inlineCode",{parentName:"li"},"needs-fix"),", as well as possibly other tags (such as ",(0,o.kt)("inlineCode",{parentName:"li"},"critical"),"), and the issue will be left to be implemented.")),(0,o.kt)("h3",{id:"suggesting-enhancements"},"Suggesting Enhancements"),(0,o.kt)("p",null,"This section guides you through submitting an enhancement suggestion for FastKafka, ",(0,o.kt)("strong",{parentName:"p"},"including completely new features and minor improvements to existing functionality"),". Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions."),(0,o.kt)("h4",{id:"before-submitting-an-enhancement"},"Before Submitting an Enhancement"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure that you are using the latest version."),(0,o.kt)("li",{parentName:"ul"},"Read the ",(0,o.kt)("a",{parentName:"li",href:"https://fastkafka.airt.ai/docs"},"documentation")," carefully and find out if the functionality is already covered, maybe by an individual configuration."),(0,o.kt)("li",{parentName:"ul"},"Perform a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airtai/fastkafka/issues"},"search")," to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one."),(0,o.kt)("li",{parentName:"ul"},"Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library."),(0,o.kt)("li",{parentName:"ul"},"If you are not sure or would like to discuiss the enhancement with us directly, you can always contact us on ",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/invite/CJWmYpyFbc"},"Discord"))),(0,o.kt)("h4",{id:"how-do-i-submit-a-good-enhancement-suggestion"},"How Do I Submit a Good Enhancement Suggestion?"),(0,o.kt)("p",null,"Enhancement suggestions are tracked as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airtai/fastkafka/issues"},"GitHub issues"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use a ",(0,o.kt)("strong",{parentName:"li"},"clear and descriptive title")," for the issue to identify the suggestion."),(0,o.kt)("li",{parentName:"ul"},"Provide a ",(0,o.kt)("strong",{parentName:"li"},"step-by-step description of the suggested enhancement")," in as many details as possible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Describe the current behavior")," and ",(0,o.kt)("strong",{parentName:"li"},"explain which behavior you expected to see instead")," and why. At this point you can also tell which alternatives do not work for you."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Explain why this enhancement would be useful")," to most FastKafka users. You may also want to point out the other projects that solved it better and which could serve as inspiration.")),(0,o.kt)("h3",{id:"your-first-code-contribution"},"Your First Code Contribution"),(0,o.kt)("p",null,'A great way to start contributing to FastKafka would be by solving an issue tagged with "good first issue". To find a list of issues that are tagged as "good first issue" and are suitable for newcomers, please visit the following link: ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/airtai/fastkafka/labels/good%20first%20issue"},"Good first issues")),(0,o.kt)("p",null,"These issues are beginner-friendly and provide a great opportunity to get started with contributing to FastKafka. Choose an issue that interests you, follow the contribution process mentioned in ",(0,o.kt)("a",{parentName:"p",href:"#way-of-working"},"Way of working")," and ",(0,o.kt)("a",{parentName:"p",href:"#before-a-pr"},"Before a PR"),", and help us make FastKafka even better!"),(0,o.kt)("p",null,"If you have any questions or need further assistance, feel free to reach out to us. Happy coding!"),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("h3",{id:"prepare-the-dev-environment"},"Prepare the dev environment"),(0,o.kt)("p",null,"To start contributing to FastKafka, you first have to prepare the development environment."),(0,o.kt)("h4",{id:"clone-the-fastkafka-repository"},"Clone the FastKafka repository"),(0,o.kt)("p",null,"To clone the repository, run the following command in the CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/airtai/fastkafka.git\n")),(0,o.kt)("h4",{id:"optional-create-a-virtual-python-environment"},"Optional: create a virtual python environment"),(0,o.kt)("p",null,"To prevent library version clashes with you other projects, it is reccomended that you create a virtual python environment for your FastKafka project by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"python3 -m venv fastkafka-env\n")),(0,o.kt)("p",null,"And to activate your virtual environment run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"source fastkafka-env/bin/activate\n")),(0,o.kt)("p",null,"To learn more about virtual environments, please have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html#:~:text=A%20virtual%20environment%20is%20created,the%20virtual%20environment%20are%20available."},"official python documentation")),(0,o.kt)("h4",{id:"install-fastkafka"},"Install FastKafka"),(0,o.kt)("p",null,"To install FastKafka, navigate to the root directory of the cloned FastKafka project and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'pip install fastkafka -e [."dev"]\n')),(0,o.kt)("h4",{id:"install-jre-and-kafka-toolkit"},"Install JRE and Kafka toolkit"),(0,o.kt)("p",null,"To be able to run tests and use all the functionalities of FastKafka, you have to have JRE and Kafka toolkit installed on your machine. To do this, you have two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use our ",(0,o.kt)("inlineCode",{parentName:"li"},"fastkafka testing install-deps")," CLI command which will install JRE and Kafka toolkit for you in your .local folder\nOR"),(0,o.kt)("li",{parentName:"ol"},"Install JRE and Kafka manually.\nTo do this, please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/9/install/toc.htm"},"JDK and JRE installation guide")," and ",(0,o.kt)("a",{parentName:"li",href:"https://kafka.apache.org/quickstart"},"Apache Kafka quickstart"))),(0,o.kt)("h4",{id:"install-npm"},"Install npm"),(0,o.kt)("p",null,"To be able to run tests you must have npm installed, because of documentation generation. To do this, you have two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use our ",(0,o.kt)("inlineCode",{parentName:"li"},"fastkafka docs install_deps")," CLI command which will install npm for you in your .local folder\nOR"),(0,o.kt)("li",{parentName:"ol"},"Install npm manually.\nTo do this, please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"NPM installation guide"))),(0,o.kt)("h4",{id:"install-docusaurus"},"Install docusaurus"),(0,o.kt)("p",null,"To generate the documentation, you need docusaurus. To install it run 'docusaurus/scripts/install_docusaurus_deps.sh' in the root of FastKafka project."),(0,o.kt)("h4",{id:"check-if-everything-works"},"Check if everything works"),(0,o.kt)("p",null,"After installing FastKafka and all the necessary dependencies, run ",(0,o.kt)("inlineCode",{parentName:"p"},"nbdev_test"),' in the root of FastKafka project. This will take a couple of minutes as it will run all the tests on FastKafka project. If everythng is setup correctly, you will get a "Success." message in your terminal, otherwise please refer to previous steps.'),(0,o.kt)("h3",{id:"way-of-working"},"Way of working"),(0,o.kt)("p",null,"The development of FastKafka is done in Jupyter notebooks. Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"nbs")," directory you will find all the source code of FastKafka, this is where you will implement your changes."),(0,o.kt)("p",null,"The testing, cleanup and exporting of the code is being handled by ",(0,o.kt)("inlineCode",{parentName:"p"},"nbdev"),", please, before starting the work on FastKafka, get familiar with it by reading ",(0,o.kt)("a",{parentName:"p",href:"https://nbdev.fast.ai/getting_started.html"},"nbdev documentation"),"."),(0,o.kt)("p",null,"The general philosopy you should follow when writing code for FastKafka is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Function should be an atomic functionality, short and concise",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Good rule of thumb: your function should be 5-10 lines long usually"))),(0,o.kt)("li",{parentName:"ul"},"If there are more than 2 params, enforce keywording using *",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"E.g.: ",(0,o.kt)("inlineCode",{parentName:"li"},"def function(param1, *, param2, param3): ...")))),(0,o.kt)("li",{parentName:"ul"},"Define typing of arguments and return value",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If not, mypy tests will fail and a lot of easily avoidable bugs will go undetected"))),(0,o.kt)("li",{parentName:"ul"},"After the function cell, write test cells using the assert keyword",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Whenever you implement something you should test that functionality immediately in the cells below "))),(0,o.kt)("li",{parentName:"ul"},"Add Google style python docstrings when function is implemented and tested")),(0,o.kt)("h3",{id:"before-a-pr"},"Before a PR"),(0,o.kt)("p",null,"After you have implemented your changes you will want to open a pull request to merge those changes into our main branch. To make this as smooth for you and us, please do the following before opening the request (all the commands are to be run in the root of FastKafka project):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Format your notebooks: ",(0,o.kt)("inlineCode",{parentName:"li"},"nbqa black nbs")),(0,o.kt)("li",{parentName:"ol"},"Close, shutdown, and clean the metadata from your notebooks: ",(0,o.kt)("inlineCode",{parentName:"li"},"nbdev_clean")),(0,o.kt)("li",{parentName:"ol"},"Export your code: ",(0,o.kt)("inlineCode",{parentName:"li"},"nbdev_export")),(0,o.kt)("li",{parentName:"ol"},"Run the tests: ",(0,o.kt)("inlineCode",{parentName:"li"},"nbdev_test")),(0,o.kt)("li",{parentName:"ol"},"Test code typing: ",(0,o.kt)("inlineCode",{parentName:"li"},"mypy fastkafka")),(0,o.kt)("li",{parentName:"ol"},"Test code safety with bandit: ",(0,o.kt)("inlineCode",{parentName:"li"},"bandit -r fastkafka")),(0,o.kt)("li",{parentName:"ol"},"Test code safety with semgrep: ",(0,o.kt)("inlineCode",{parentName:"li"},"semgrep --config auto -r fastkafka"))),(0,o.kt)("p",null,"When you have done this, and all the tests are passing, your code should be ready for a merge. Please commit and push your code and open a pull request and assign it to one of the core developers. We will then review your changes and if everythng is in order, we will approve your merge."),(0,o.kt)("h2",{id:"attribution"},"Attribution"),(0,o.kt)("p",null,"This guide is based on the ",(0,o.kt)("strong",{parentName:"p"},"contributing-gen"),". ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bttger/contributing-gen"},"Make your own"),"!"))}d.isMDXComponent=!0}}]);