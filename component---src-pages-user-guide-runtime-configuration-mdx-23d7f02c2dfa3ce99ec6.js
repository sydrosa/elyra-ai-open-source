(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"013z":function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("NmYn"),r=n.n(o),l=n("Wbzz"),c=n("Xrax"),s=n("k4MR"),b=n("TSYQ"),u=n.n(b),p=n("QH2O"),m=n.n(p),d=n("qKvR"),g=function(e){var t,n=e.title,i=e.theme,a=e.tabs,o=void 0===a?[]:a;return Object(d.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===i,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},n)))))},h=n("BAC9"),f=function(e){var t=e.relativePagePath,n=e.repository,i=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,a=n||i,o=a.baseUrl,r=a.subDirectory,c=o+"/edit/"+a.branch+r+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},O=n("FCXl"),j=n("dI71"),A=n("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,i=e.slug,a=i.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),o=n===a,c=new RegExp(a+"/?(#.*)?$"),s=i.replace(c,n);return Object(d.b)("li",{key:e,className:u()((t={},t[A.selectedItem]=o,t),A.listItem)},Object(d.b)(l.Link,{className:A.link,to:""+s},e))}));return Object(d.b)("div",{className:A.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:A.list},o))))))},t}(a.a.Component),w=n("MjG9"),N=n("CzIb"),x=n("Asxa"),C=n("OIbQ"),T=n.n(C),k=function(e){var t=e.date,n=new Date(t);return t?Object(d.b)(x.c,{className:T.a.row},Object(d.b)(x.a,null,Object(d.b)("div",{className:T.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,i=e.location,a=e.Title,o=t.frontmatter,b=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,m=b.tabs,h=b.title,j=b.theme,A=b.description,x=b.keywords,C=b.date,T=Object(N.a)().interiorTheme,v=Object(l.useStaticQuery)("2456312558").site.pathPrefix,E=v?i.pathname.replace(v,""):i.pathname,S=m?E.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",P=j||T;return Object(d.b)(s.a,{tabs:m,homepage:!1,theme:P,pageTitle:h,pageDescription:A,pageKeywords:x,titleType:p},Object(d.b)(g,{title:a?Object(d.b)(a,null):h,label:"label",tabs:m,theme:P}),m&&Object(d.b)(y,{title:h,slug:E,tabs:m,currentTab:S}),Object(d.b)(w.a,{padded:!0},n,Object(d.b)(f,{relativePagePath:u}),Object(d.b)(k,{date:C})),Object(d.b)(O.a,{pageContext:t,location:i,slug:E,tabs:m,currentTab:S}),Object(d.b)(c.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"p3/I":function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return l})),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return g}));var i=n("wx14"),a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("013z"),l=(n("qKvR"),function(){return Object(o.b)("span",null,"Runtime configuration")}),c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=s("PageDescription"),u=s("AnchorLinks"),p=s("AnchorLink"),m={Title:l,_frontmatter:c},d=r.a;function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(d,Object(i.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"A runtime configuration provides Elyra access to external resources, such as Kubeflow Pipelines or Apache Airflow for scalable pipeline execution.")),Object(o.b)(u,{mdxType:"AnchorLinks"},Object(o.b)(p,{mdxType:"AnchorLink"},"Prerequisites"),Object(o.b)(p,{mdxType:"AnchorLink"},"Managing runtime configurations using the JupyterLab UI"),Object(o.b)(p,{mdxType:"AnchorLink"},"Managing runtime configurations using the Elyra CLI"),Object(o.b)(p,{mdxType:"AnchorLink"},"Configuration settings"),Object(o.b)(p,{mdxType:"AnchorLink"},"Verifying runtime configurations"),Object(o.b)(p,{mdxType:"AnchorLink"},"Troubleshooting")),Object(o.b)("p",null,"You can manage runtime configurations using the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#managing-runtime-configurations-using-the-jupyterlab-ui"}),"JupyterLab UI")," or the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#managing-runtime-configurations-using-the-elyra-cli"}),"Elyra CLI"),"."),Object(o.b)("h2",null,"Prerequisites"),Object(o.b)("p",null,"A runtime configuration requires connectivity details for "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A Kubeflow Pipelines deployment or an Apache Airflow deployment"),Object(o.b)("li",{parentName:"ul"},"S3-based Object Storage (e.g. Minio or IBM Cloud Object Storage)")),Object(o.b)("p",null,"Note: Elyra is only tested with Kubeflow v1.2.x and v1.3.x and Apache Airflow v1.10.x."),Object(o.b)("h2",null,"Managing runtime configurations using the JupyterLab UI"),Object(o.b)("p",null,"To create, edit, or delete runtime configurations using the UI select the ",Object(o.b)("inlineCode",{parentName:"p"},"Runtimes")," tab from the JupyterLab sidebar, or click the ",Object(o.b)("inlineCode",{parentName:"p"},"Runtimes")," button in the Pipeline Editor."),Object(o.b)("p",null,"  ",Object(o.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"335px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaUlEQVQ4y6WT6a6CQAyF5/3fxgfwn0+gMcGoCCiLK0vcBXvz1UwyIeFuNDlhKJ3T9rSYMAxlt9tJlmXieZ5EUSRxHAv+JEmkqirB3u93J7Db7Sav10vMYDCQ0WgkeZ7LeDyW5XIp0+lUMZlMlPQ3hNfr9UNYlqUURSH3+10dTdOIa1zA/xPO57M8Hg8xaZpqy5fLRU6nk4Ikz+dTQXBd152wRez3e+XQlofDoVbDB4vvSFwQS3dURzdmvV7rENqt/sXoyvd9PRv0A4hKFrIxMc48ee+CjaNS5FENZ7OZshNAJqa8WCx0jVarlb7TwWaz0ZVi6pzxcY9iWC18x+PxM5TtdqtZ3DWwElifK4kbZ7/ZAWnLTJWxM6kgCDQb2lLBfD7XyninchaeMyDucDjofSpnlw0BAHZ0QBernXsG6NzWlTs2lqchC+x9puyasextzf4Lg25oYMn6khp+O9bFJezVshXebbmPfQF0lNngO+W89AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Access runtime configurations",title:"Access runtime configurations",src:"/static/8b7855575e712d53333cfd09ff07ee82/8d8c1/access-runtime-configurations.png",srcSet:["/static/8b7855575e712d53333cfd09ff07ee82/7fc1e/access-runtime-configurations.png 288w","/static/8b7855575e712d53333cfd09ff07ee82/8d8c1/access-runtime-configurations.png 335w"],sizes:"(max-width: 335px) 100vw, 335px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("h3",null,"Creating a runtime configuration"),Object(o.b)("p",null,"To create a runtime configuration:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"Runtimes")," tab from the JupyterLab sidebar."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("inlineCode",{parentName:"li"},"+")," to add a new runtime configuration and choose the desired runtime configuration type, e.g. Kubeflow Pipelines or Apache Airflow.\n",Object(o.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmElEQVQoz4WR2xLEEBBE8/8/SxG3GSbbGR5E7O4pD4pqp3E45621xlhjnTtjCDGl3JroaCJyfecIsZRSmYVIiKVPSmk6uNYqO0b4VCbDL9VqJuKoMKRPiCgo6DavN+UO55xTSqws4TqxD8PpvcfZd+MnbWIp3K95QAj5UqyDraQspVAEKyOMbeTfDwth7/zWDjOcCP/90i0fMhkU1H/dm2MAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Create runtime configuration",title:"Create runtime configuration",src:"/static/b3c1ebc9959670dcabc09c6d1735af26/3cbba/runtime-create-config.png",srcSet:["/static/b3c1ebc9959670dcabc09c6d1735af26/7fc1e/runtime-create-config.png 288w","/static/b3c1ebc9959670dcabc09c6d1735af26/a5df1/runtime-create-config.png 576w","/static/b3c1ebc9959670dcabc09c6d1735af26/3cbba/runtime-create-config.png 1152w","/static/b3c1ebc9959670dcabc09c6d1735af26/0b124/runtime-create-config.png 1728w","/static/b3c1ebc9959670dcabc09c6d1735af26/fc41e/runtime-create-config.png 2103w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("li",{parentName:"ol"},"Provide a runtime configuration display name, an optional description, and tag the configuration to make it more easily discoverable. "),Object(o.b)("li",{parentName:"ol"},"Enter the Kubeflow Pipelines or Apache Airflow deployment information. Refer to section ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#kubeflow-pipelines-configuration-settings"}),"Kubeflow Pipelines configuration settings")," or ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#apache-airflow-configuration-settings"}),"Apache Airflow configuration settings")," for details."),Object(o.b)("li",{parentName:"ol"},"Enter the Cloud Storage connectivity information. Refer to section ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#cloud-storage-settings"}),"Cloud Storage settings")," for details."),Object(o.b)("li",{parentName:"ol"},"Save the runtime configuration. The new entry is displayed in the list."),Object(o.b)("li",{parentName:"ol"},"Expand the entry and verify that you can access the Kubeflow Pipelines or Apache Airflow GUI and the Cloud Storage GUI using the displayed links.\n",Object(o.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"342px"}}),"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.22222222222223%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAACaUlEQVQ4y61UaXPaMBD1//9TybQNl6ElwQkxtzlsjA+wjQ02x6uejDIu0w9Jp5p5o92V9mm12pW2XC5Rq9XQ6/XQbDah6zoajQZc1wXH9XrFZ0aSJMjzHNrpdMLhcMDlcpEgAWfavwKScdZIFoYhgiCQp6gN5/P502AQ6/Va+ms0FEXxx2lfISOqPhr+w4iiCKPRSMoao7uP8F7/G5Sf2ns8HsscUthsNphMJhiPx7BtG7PZDJZlgRWwWCzgOA5Wq9UHaGfu1djv99KP7/Bx5dOJObhIMMlKJvK8kAQSIgCiqOSNL8zAZNnY9gq95y7eXg303wwMB6bUjd4LxsMBBuY7tmGAUyGcDhny46GEkI8SqTgoQ5qmklSz7A0edQP6i4l610TLGONb20BL6E9CbzybeJ04GNtbzJwQw1UAc+HDXAYYCgwEHD8ShHtkWQYtTlJsdimCOMM6jOVMhDFtokaTA1xhd4NIzBHWQYmVt5NEtIe7pCQUKdHm8zmefnxHp91GW2/h8eEB3e4vKTfqdeitJopc5C1LZfKTpAR1hSwt15hjbR3E6Awd9K0NXiYuOqbI6dRFf+6h9b7Ez8ESr5YPY+ZhJK77ZnlizZekJKlCXpmsqRAYbnZ7RSa3fNXyReW6AG1HQjwKH0Ehu63HcVx+DlRY7dFuJzdQZl+WV0wkspuz0lkiLC+CxU0yGSGj2W63YC5ZxPy2WKQsYBY0m54z7WqNhU3C6tfF5tiJgD4+h2qRUlffkdLvW1SlhVFVW1Gjg+d58lTVWmzD6XQqo2ELEoyea7SpGyjQn7fwfb+MkB+qmv8FVY7f2I6uRcT8tOMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Access runtime configuration",title:"Access runtime configuration",src:"/static/6c176779dea5138956018f7f2f0fee8c/f98f8/runtime-access-config.png",srcSet:["/static/6c176779dea5138956018f7f2f0fee8c/7fc1e/runtime-access-config.png 288w","/static/6c176779dea5138956018f7f2f0fee8c/f98f8/runtime-access-config.png 342w"],sizes:"(max-width: 342px) 100vw, 342px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," ")),Object(o.b)("h3",null,"Modifying a runtime configuration"),Object(o.b)("p",null,"To edit a runtime configuration:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"Runtimes")," tab from the JupyterLab sidebar."),Object(o.b)("li",{parentName:"ol"},"Click the pencil next to the runtime configuration.")),Object(o.b)("h3",null,"Deleting a runtime configuration"),Object(o.b)("p",null,"To delete a runtime configuration:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"Runtimes")," tab from the JupyterLab sidebar."),Object(o.b)("li",{parentName:"ol"},"Click the trash can next to the runtime configuration.")),Object(o.b)("h2",null,"Managing runtime configurations using the Elyra CLI"),Object(o.b)("p",null,"You can list, create, edit, or delete runtime configurations using the ",Object(o.b)("inlineCode",{parentName:"p"},"elyra-metadata")," CLI."),Object(o.b)("h3",null,"Listing runtime configurations"),Object(o.b)("p",null,"To list runtime configurations run"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"elyra-metadata list runtimes\n")),Object(o.b)("p",null,"The output lists for each runtime the name and the name of the associated JSON formatted metadata file, which is stored in the JupyterLab data directory in the ",Object(o.b)("inlineCode",{parentName:"p"},"metadata/runtimes")," subdirectory."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"Available metadata instances for runtimes (includes invalid):\n\nSchema   Instance  Resource  \n------   --------  -------- \nkfp      my_kfp    /Users/jdoe/Library/Jupyter/metadata/runtimes/my_kfp.json\n")),Object(o.b)("p",null,"To format the output as JSON run ",Object(o.b)("inlineCode",{parentName:"p"},"elyra-metadata list runtimes --json"),". Note that the JSON export includes the content of the metadata files, not just their names."),Object(o.b)("h3",null,"Creating a runtime configuration"),Object(o.b)("p",null,"To create a runtime configuration for a Kubeflow Pipelines deployment:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"elyra-metadata install runtimes \\\n       --display_name=\"My Kubeflow Pipelines Runtime\" \\\n       --api_endpoint=https://kubernetes-service.ibm.com/pipeline \\\n       --api_username=username@email.com \\\n       --api_password=mypassword \\\n       --engine=Argo \\\n       --cos_endpoint=http://minio-service.kubeflow:9000 \\\n       --cos_username=minio \\\n       --cos_password=minio123 \\\n       --cos_bucket=test-bucket \\\n       --tags=\"['kfp', 'v1.0']\" \\\n       --schema_name=kfp\n")),Object(o.b)("p",null,"Refer to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#kubeflow-pipelines-configuration-settings"}),"Kubeflow Pipelines Configuration settings")," section for an explanation of the parameters."),Object(o.b)("h3",null,"Modifying a runtime configuration"),Object(o.b)("p",null,"To edit a runtime configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'elyra-metadata install runtimes \\\n       --replace \\\n       --name="my_kubeflow_pipelines_runtime" \\\n       --display_name="My Kubeflow Pipelines Runtime" \\\n       --api_endpoint=https://kubernetes-service.ibm.com/pipeline \\\n       --api_username=username@email.com \\\n       --api_password=mynewpassword \\\n       --engine=Argo \\\n       --cos_endpoint=http://minio-service.kubeflow:9000 \\\n       --cos_username=minio \\\n       --cos_password=minio123 \\\n       --cos_bucket=test-bucket \\\n       --tags="[\'kfp\', \'v1.1\']" \\\n       --schema_name=kfp\n')),Object(o.b)("p",null,"Refer to the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#kubeflow-pipelines-configuration-settings"}),"Kubeflow Pipelines Configuration settings")," section for an explanation of the parameters. Note that you must specify the ",Object(o.b)("inlineCode",{parentName:"p"},"--name")," parameter. "),Object(o.b)("h3",null,"Deleting a runtime configuration"),Object(o.b)("p",null,"To delete a runtime configuration run the following command, replacing the configuration name as appropriate."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"elyra-metadata remove runtimes --name=my_kubeflow_pipelines_runtime\n")),Object(o.b)("h2",null,"Configuration settings"),Object(o.b)("h3",null,"Common configuration settings"),Object(o.b)("p",null,"Configurations include the following   common settings for all supported runtime types. The string in the headings below, which is enclosed in parentheses, denotes the CLI option name."),Object(o.b)("h4",null,"Name (display_name)"),Object(o.b)("p",null,"A user-friendly name for runtime configuration. This property is required."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"Kubeflow Pipelines dev environment")),Object(o.b)("h4",null,"N/A (name)"),Object(o.b)("p",null,"A unique identifier for this configuration. A value is automatically generated from ",Object(o.b)("inlineCode",{parentName:"p"},"display_name"),"."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"kubeflow_pipelines_dev_environment")),Object(o.b)("h4",null,"Description (description)"),Object(o.b)("p",null,"Description for this runtime image configuration. This property is optional."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"Kubeflow Pipelines deployment in QA")),Object(o.b)("h4",null,"Tags (tags)"),Object(o.b)("p",null,"Zero or more tags for this runtime configuration."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"['test-env','airflow']")),Object(o.b)("h3",null,"Kubeflow Pipelines configuration settings"),Object(o.b)("p",null,"This section defines the settings for the Kubeflow Pipelines deployment that you want to associate with this runtime configuration."),Object(o.b)("h4",null,"Kubeflow Pipelines API endpoint (api_endpoint)"),Object(o.b)("p",null,"The KubeFlow Pipelines API endpoint you want to utilize. This setting is required."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"https://kubernetes-service.ibm.com/pipeline")),Object(o.b)("h4",null,"Kubeflow Pipelines user namespace (user_namespace)"),Object(o.b)("p",null,"The namespace used to run your pipeline in Kubeflow Pipelines. This setting is required if namespaces are defined in Kubeflow Pipelines. SEE NOTE."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"anonymous")),Object(o.b)("h4",null,"Kubeflow Pipelines API endpoint username (api_username)"),Object(o.b)("p",null,"Username used to access your KubeFlow Pipelines API endpoint. This setting is required if the Kubeflow Pipelines deployment is multi-user, auth enabled."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"username@email.com")),Object(o.b)("h4",null,"Kubeflow Pipelines API endpoint (api_password)"),Object(o.b)("p",null,"Password used to access your KubeFlow Pipelines API endpoint. This setting is required if the Kubeflow Pipelines deployment is multi-user, auth enabled."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"mypassword")),Object(o.b)("h4",null,"Kubeflow Pipelines engine (engine)"),Object(o.b)("p",null,"The engine being used by Kubeflow Pipelines to run pipelines: ",Object(o.b)("inlineCode",{parentName:"p"},"Argo")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Tekton"),". If you have access to the Kubernetes cluster where Kubeflow Pipelines is deployed, run these commands in a terminal window to determine the engine type."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"# If this command completes successfully, the engine type is Argo.\nkubectl describe configmap -n kubeflow workflow-controller-configmap\n\n# If this command completes successfully, the engine type is Tekton.\nkubectl describe configmap -n kubeflow kfp-tekton-config\n")),Object(o.b)("p",null,"The default is ",Object(o.b)("inlineCode",{parentName:"p"},"Argo"),"."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"Argo")),Object(o.b)("h3",null,"Apache Airflow configuration settings"),Object(o.b)("p",null,"This section defines the settings for the Apache Airflow deployment that you want to associate with this runtime configuration."),Object(o.b)("h4",null,"Apache Airflow UI endpoint (api_endpoint)"),Object(o.b)("p",null,"The Apache Airflow API endpoint you want to utilize. This setting is required."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"https://your-airflow-webserver:port")),Object(o.b)("h4",null,"Apache Airflow user namespace (user_namespace)"),Object(o.b)("p",null,"The namespace used to run your DAG in Apache Airflow. The Kubernetes namespace must be configured with the correct permissions prior to use in Apache Airflow. This setting is Optional. "),Object(o.b)("p",null,"The default namespace is ",Object(o.b)("inlineCode",{parentName:"p"},"default"),"."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"anonymous")),Object(o.b)("h4",null,"GitHub API Endpoint (github_api_endpoint)"),Object(o.b)("p",null,"The GitHub (or GitHub Enterprise) API endpoint where the git client will attempt to connect. This setting is required. Keep the default  ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.github.com")," for github.com"),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.private.githubenterprise.com")),Object(o.b)("h4",null,"GitHub DAG Repository (github_repo)"),Object(o.b)("p",null,"The GitHub repository that Apache Airflow utilizes to store DAGs. This setting is required and the repository must exist."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"user-or-org/dag-repo-name")),Object(o.b)("h4",null,"GitHub DAG Repository Branch (github_branch)"),Object(o.b)("p",null,"The name of the branch in ",Object(o.b)("inlineCode",{parentName:"p"},"github_repo")," where DAGs are stored.\nThis setting is required and the branch must exist."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"dag-branch")),Object(o.b)("h4",null,"GitHub Personal Access Token (github_repo_token)"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token"}),"GitHub personal access token")," with write access to the GitHub DAG Repository. This setting is required. "),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"766f7c267519fee7c71d7f96bdf42e646dc65433")),Object(o.b)("h3",null,"Cloud Storage settings"),Object(o.b)("p",null,"This section defines the settings for the cloud storage that you want to associate with this runtime configuration."),Object(o.b)("h4",null,"Cloud Object Storage endpoint (cos_endpoint)"),Object(o.b)("p",null,"This should be the URL address of your S3-compatible Object Storage. If running an Object Storage Service within a Kubernetes cluster (Minio), you can use the Kubernetes local DNS address. This setting is required."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"https://minio-service.kubeflow:9000")),Object(o.b)("h4",null,"Cloud Object Storage Credentials Secret (cos_secret)"),Object(o.b)("p",null,"(Optional) Kubernetes secret that’s defined in the specified user namespace, containing the Cloud Object Storage username and password.\nIf specified, this secret must exist on the Kubernetes cluster hosting your pipeline runtime in order to successfully\nexecute pipelines. This setting is optional but is recommended for use in shared environments to avoid exposing a user’s\nCloud Object Storage credentials. "),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"my-cos-secret")),Object(o.b)("p",null,"The following is an example of how your secret on the Kubernetes cluster hosting your runtime should be defined. The variable\nnames defined under ",Object(o.b)("inlineCode",{parentName:"p"},"data"),", must be ",Object(o.b)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," followed by each respective value\nencoded in base64. Learn how to create, deploy, or configure ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/"}),"Kubernetes Secrets"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Secret\nmetadata:\n  name: <cos_secret>\ntype: Opaque\ndata:\n  AWS_ACCESS_KEY_ID: <BASE64_ENCODED_YOUR_AWS_ACCESS_KEY_ID>\n  AWS_SECRET_ACCESS_KEY: <BASE64_ENCODED_YOUR_AWS_SECRET_ACCESS_KEY>\n")),Object(o.b)("h4",null,"Cloud Object Storage username (cos_username)"),Object(o.b)("p",null,"Username used to access the Object Storage. This setting is required."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"minio")),Object(o.b)("h4",null,"Cloud Object Storage password (cos_password)"),Object(o.b)("p",null,"Password for cos_username. This setting is required."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"minio123")),Object(o.b)("h4",null,"Cloud Object Storage bucket name (cos_bucket)"),Object(o.b)("p",null,"Name of the bucket you want Elyra to store pipeline artifacts in. This setting is required. If the bucket doesn’t exist, it will be created. The specified bucket name must meet the naming conventions imposed by the Object Storage service."),Object(o.b)("p",null,"Example: ",Object(o.b)("inlineCode",{parentName:"p"},"test-bucket")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If using IBM Cloud Object Storage, you must generate a set of ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/cloud-object-storage/hmac?topic=cloud-object-storage-uhc-hmac-credentials-main"}),"HMAC Credentials"),"\nand grant that key at least ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/cloud-object-storage/iam?topic=cloud-object-storage-iam-bucket-permissions"}),"Writer")," level privileges.\nSpecify ",Object(o.b)("inlineCode",{parentName:"p"},"access_key_id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"secret_access_key")," as ",Object(o.b)("inlineCode",{parentName:"p"},"cos_username")," and ",Object(o.b)("inlineCode",{parentName:"p"},"cos_password"),", respectively.")),Object(o.b)("h2",null,"Verifying runtime configurations"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/examples/pipelines/setup_validation"}),"Elyra examples repository contains a basic pipeline")," that you can use to verify your runtime configurations:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Launch JupyterLab."),Object(o.b)("li",{parentName:"ol"},"Clone ",Object(o.b)("inlineCode",{parentName:"li"},"https://github.com/elyra-ai/examples.git")," (",Object(o.b)("inlineCode",{parentName:"li"},"Git")," > ",Object(o.b)("inlineCode",{parentName:"li"},"Clone A Repository"),") into the current working directory."),Object(o.b)("li",{parentName:"ol"},"In the File Browser navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"examples/pipelines/setup_validation/")," and follow the instructions in ",Object(o.b)("inlineCode",{parentName:"li"},"README.md"),". If your runtime configuration is correct and the target runtime environment configured correctly, the validation pipeline should run as is without any modifications.")),Object(o.b)("h2",null,"Troubleshooting"),Object(o.b)("p",null,"I am seeing this error when using Elyra with Kubeflow Pipelines that is Dex enabled: "),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'HTTP response body: {"error":"Validate experiment request failed.: Invalid input error: Invalid resource references for experiment. Expect one namespace type with owner relationship.\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ensure that you have logged into the Kubeflow Dex landing page (",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://kubeflow.cluster:31380...."}),"https://kubeflow.cluster:31380…"),") at least once with\nyour credentials via the GUI. You should have been greeted with a dialog box and request to create a new namespace.\nWithout this step complete, Elyra will not be able to create pipelines on the Kubeflow cluster. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ensure you’ve configured Kubeflow Pipelines credentials and that they are correct. When using Dex, the ",Object(o.b)("inlineCode",{parentName:"p"},"api_username")," is typically\nyour email address and ",Object(o.b)("inlineCode",{parentName:"p"},"user_namespace")," is your email shortname (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"elyra")," for ",Object(o.b)("inlineCode",{parentName:"p"},"elyra@email.org"),")."))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-user-guide-runtime-configuration-mdx-23d7f02c2dfa3ce99ec6.js.map