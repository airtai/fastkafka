"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[2777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||r;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={},o="Deploying FastKafka using Docker",l={unversionedId:"guides/Guide_30_Using_docker_to_deploy_fastkafka",id:"version-0.8.0/guides/Guide_30_Using_docker_to_deploy_fastkafka",title:"Deploying FastKafka using Docker",description:"Building a Docker Image",source:"@site/versioned_docs/version-0.8.0/guides/Guide_30_Using_docker_to_deploy_fastkafka.md",sourceDirName:"guides",slug:"/guides/Guide_30_Using_docker_to_deploy_fastkafka",permalink:"/docs/guides/Guide_30_Using_docker_to_deploy_fastkafka",draft:!1,tags:[],version:"0.8.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy FastKafka docs to GitHub Pages",permalink:"/docs/guides/Guide_04_Github_Actions_Workflow"},next:{title:"Using FastAPI to Run FastKafka Application",permalink:"/docs/guides/Guide_32_Using_fastapi_to_run_fastkafka_application"}},p={},s=[{value:"Building a Docker Image",id:"building-a-docker-image",level:2},{value:"Creating FastKafka Code",id:"creating-fastkafka-code",level:3},{value:"Creating requirements.txt file",id:"creating-requirementstxt-file",level:3},{value:"Creating Dockerfile",id:"creating-dockerfile",level:3},{value:"Build the Docker Image",id:"build-the-docker-image",level:3},{value:"Start the Docker Container",id:"start-the-docker-container",level:3},{value:"Additional Security",id:"additional-security",level:2},{value:"Example repo",id:"example-repo",level:2}],c={toc:s},d="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploying-fastkafka-using-docker"},"Deploying FastKafka using Docker"),(0,i.kt)("h2",{id:"building-a-docker-image"},"Building a Docker Image"),(0,i.kt)("p",null,"To build a Docker image for a FastKafka project, we need the following\nitems:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A library that is built using FastKafka."),(0,i.kt)("li",{parentName:"ol"},"A file in which the requirements are specified. This could be a\nrequirements.txt file, a setup.py file, or even a wheel file."),(0,i.kt)("li",{parentName:"ol"},"A Dockerfile to build an image that will include the two files\nmentioned above.")),(0,i.kt)("h3",{id:"creating-fastkafka-code"},"Creating FastKafka Code"),(0,i.kt)("p",null,"Let\u2019s create a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/#fastkafka.FastKafka"},(0,i.kt)("inlineCode",{parentName:"a"},"FastKafka")),"-based\napplication and write it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.py")," file based on the\n",(0,i.kt)("a",{parentName:"p",href:"/docs#tutorial"},"tutorial"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# content of the "application.py" file\n\nfrom contextlib import asynccontextmanager\n\nfrom sklearn.datasets import load_iris\nfrom sklearn.linear_model import LogisticRegression\n\nfrom fastkafka import FastKafka\n\nml_models = {}\n\n\n@asynccontextmanager\nasync def lifespan(app: FastKafka):\n    # Load the ML model\n    X, y = load_iris(return_X_y=True)\n    ml_models["iris_predictor"] = LogisticRegression(random_state=0, max_iter=500).fit(\n        X, y\n    )\n    yield\n    # Clean up the ML models and release the resources\n    ml_models.clear()\n\n\nfrom pydantic import BaseModel, NonNegativeFloat, Field\n\nclass IrisInputData(BaseModel):\n    sepal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal length in cm"\n    )\n    sepal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal width in cm"\n    )\n    petal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal length in cm"\n    )\n    petal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal width in cm"\n    )\n\n\nclass IrisPrediction(BaseModel):\n    species: str = Field(..., example="setosa", description="Predicted species")\n\nfrom fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Iris predictions",\n    kafka_brokers=kafka_brokers,\n    lifespan=lifespan,\n)\n\n@kafka_app.consumes(topic="input_data", auto_offset_reset="latest")\nasync def on_input_data(msg: IrisInputData):\n    species_class = ml_models["iris_predictor"].predict(\n        [[msg.sepal_length, msg.sepal_width, msg.petal_length, msg.petal_width]]\n    )[0]\n\n    await to_predictions(species_class)\n\n\n@kafka_app.produces(topic="predictions")\nasync def to_predictions(species_class: int) -> IrisPrediction:\n    iris_species = ["setosa", "versicolor", "virginica"]\n\n    prediction = IrisPrediction(species=iris_species[species_class])\n    return prediction\n')),(0,i.kt)("h3",{id:"creating-requirementstxt-file"},"Creating requirements.txt file"),(0,i.kt)("p",null,"The above code only requires FastKafka. So, we will add only that to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file, but you can add additional requirements to it\nas well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"fastkafka>=0.3.0\n")),(0,i.kt)("p",null,"Here we are using ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," to store the project\u2019s\ndependencies. However, other methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"setup.py"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pipenv"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"wheel")," files can also be used. ",(0,i.kt)("inlineCode",{parentName:"p"},"setup.py")," is commonly used for\npackaging and distributing Python modules, while ",(0,i.kt)("inlineCode",{parentName:"p"},"pipenv")," is a tool used\nfor managing virtual environments and package dependencies. ",(0,i.kt)("inlineCode",{parentName:"p"},"wheel"),"\nfiles are built distributions of Python packages that can be installed\nwith pip."),(0,i.kt)("h3",{id:"creating-dockerfile"},"Creating Dockerfile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# (1)\nFROM python:3.9-slim-bullseye\n# (2)\nWORKDIR /project\n# (3)\nCOPY application.py requirements.txt /project/\n# (4)\nRUN pip install --no-cache-dir --upgrade -r /project/requirements.txt\n# (5)\nCMD ["fastkafka", "run", "--num-workers", "2", "--kafka-broker", "production", "application:kafka_app"]\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start from the official Python base image.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the current working directory to ",(0,i.kt)("inlineCode",{parentName:"p"},"/project"),"."),(0,i.kt)("p",{parentName:"li"},"This is where we\u2019ll put the ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file and the\n",(0,i.kt)("inlineCode",{parentName:"p"},"application.py")," file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.py")," file and ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file inside\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"/project")," directory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the package dependencies in the requirements file."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-cache-dir")," option tells ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," to not save the downloaded\npackages locally, as that is only if ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," was going to be run again\nto install the same packages, but that\u2019s not the case when working\nwith containers."),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--upgrade")," option tells ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," to upgrade the packages if they\nare already installed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the ",(0,i.kt)("strong",{parentName:"p"},"command")," to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"fastkafka run")," command."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CMD")," takes a list of strings, each of these strings is what you\nwould type in the command line separated by spaces."),(0,i.kt)("p",{parentName:"li"},"This command will be run from the ",(0,i.kt)("strong",{parentName:"p"},"current working directory"),", the\nsame ",(0,i.kt)("inlineCode",{parentName:"p"},"/project")," directory you set above with ",(0,i.kt)("inlineCode",{parentName:"p"},"WORKDIR /project"),"."),(0,i.kt)("p",{parentName:"li"},"We supply additional parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"--num-workers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--kafka-broker"),"\nfor the run command. Finally, we specify the location of our\nFastKafka application as a command argument."),(0,i.kt)("p",{parentName:"li"},"To learn more about ",(0,i.kt)("inlineCode",{parentName:"p"},"fastkafka run")," command please check the ",(0,i.kt)("a",{parentName:"p",href:"../../cli/fastkafka/#fastkafka-run"},"CLI\ndocs"),"."))),(0,i.kt)("h3",{id:"build-the-docker-image"},"Build the Docker Image"),(0,i.kt)("p",null,"Now that all the files are in place, let\u2019s build the container image."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the project directory (where your ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is, containing\nyour ",(0,i.kt)("inlineCode",{parentName:"p"},"application.py")," file).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the following command to build the image:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"docker build -t fastkafka_project_image .\n")),(0,i.kt)("p",{parentName:"li"},"This command will create a docker image with the name\n",(0,i.kt)("inlineCode",{parentName:"p"},"fastkafka_project_image")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag."))),(0,i.kt)("p",null,"That\u2019s it! You have now built a docker image for your FastKafka project."),(0,i.kt)("h3",{id:"start-the-docker-container"},"Start the Docker Container"),(0,i.kt)("p",null,"Run a container based on the built image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"docker run -d --name fastkafka_project_container fastkafka_project_image\n")),(0,i.kt)("h2",{id:"additional-security"},"Additional Security"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Trivy")," is an open-source tool that scans Docker images for\nvulnerabilities. It can be integrated into your CI/CD pipeline to ensure\nthat your images are secure and free from known vulnerabilities. Here\u2019s\nhow you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"trivy")," to scan your ",(0,i.kt)("inlineCode",{parentName:"p"},"fastkafka_project_image"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"trivy")," on your local machine by following the instructions\nprovided in the ",(0,i.kt)("a",{parentName:"p",href:"https://aquasecurity.github.io/trivy/latest/getting-started/installation/"},"official ",(0,i.kt)("inlineCode",{parentName:"a"},"trivy"),"\ndocumentation"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the following command to scan your fastkafka_project_image:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"trivy image fastkafka_project_image\n")),(0,i.kt)("p",{parentName:"li"},"This command will scan your ",(0,i.kt)("inlineCode",{parentName:"p"},"fastkafka_project_image")," for any\nvulnerabilities and provide you with a report of its findings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fix any vulnerabilities identified by ",(0,i.kt)("inlineCode",{parentName:"p"},"trivy"),". You can do this by\nupdating the vulnerable package to a more secure version or by using\na different package altogether.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rebuild your ",(0,i.kt)("inlineCode",{parentName:"p"},"fastkafka_project_image")," and repeat steps 2 and 3\nuntil ",(0,i.kt)("inlineCode",{parentName:"p"},"trivy")," reports no vulnerabilities."))),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"trivy")," to scan your Docker images, you can ensure that your\ncontainers are secure and free from known vulnerabilities."),(0,i.kt)("h2",{id:"example-repo"},"Example repo"),(0,i.kt)("p",null,"A\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/#fastkafka.FastKafka"},(0,i.kt)("inlineCode",{parentName:"a"},"FastKafka")),"\nbased library which uses above mentioned Dockerfile to build a docker\nimage can be found\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airtai/sample_fastkafka_project/"},"here")))}k.isMDXComponent=!0}}]);