(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("NmYn"),r=a.n(l),i=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),u=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=l.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,l=o.baseUrl,r=o.subDirectory,c=l+"/edit/"+o.branch+r+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),g=a("dI71"),v=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),l=a===o,c=new RegExp(o+"/?(#.*)?$"),b=n.replace(c,a);return Object(m.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=l,t),v.listItem)},Object(m.b)(i.Link,{className:v.link,to:""+b},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:v.list},l))))))},t}(o.a.Component),C=a("MjG9"),N=a("CzIb"),w=a("Asxa"),x=a("OIbQ"),T=a.n(x),k=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:T.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,l=t.frontmatter,s=void 0===l?{}:l,d=t.relativePagePath,p=t.titleType,u=s.tabs,j=s.title,g=s.theme,v=s.description,w=s.keywords,x=s.date,T=Object(N.a)().interiorTheme,H=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=H?n.pathname.replace(H,""):n.pathname,A=u?P.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",I=g||T;return Object(m.b)(b.a,{tabs:u,homepage:!1,theme:I,pageTitle:j,pageDescription:v,pageKeywords:w,titleType:p},Object(m.b)(h,{title:o?Object(m.b)(o,null):j,label:"label",tabs:u,theme:I}),u&&Object(m.b)(y,{title:j,slug:P,tabs:u,currentTab:A}),Object(m.b)(C.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d}),Object(m.b)(k,{date:x})),Object(m.b)(f.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:A}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VCuu:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return h}));var n=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("013z"),i=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},b=c("PageDescription"),s=c("InlineNotification"),d=c("AnchorLinks"),p=c("AnchorLink"),u={_frontmatter:i},m=r.a;function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{mdxType:"PageDescription"},Object(l.b)("p",null,"The Elyra test harness (",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://ibm.biz/elyra-canvas"}),"http://ibm.biz/elyra-canvas"),") allows consumers to explore a number of configurations of both the canvas as well as properties.")),Object(l.b)(s,{mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You must be on an IBM network to access the test harness.")),Object(l.b)("p",null,"Common canvas displays a flow of data operations as nodes and links which the user can create and edit to get the flow they want. These visual flows of data operations are translated into data processing steps performed by a back-end server. "),Object(l.b)(d,{mdxType:"AnchorLinks"},Object(l.b)(p,{mdxType:"AnchorLink"},"Architecture"),Object(l.b)(p,{mdxType:"AnchorLink"},"First steps")),Object(l.b)("p",null,"To use the Flow Validation API import the ",Object(l.b)("inlineCode",{parentName:"p"},"FlowValidation")," object from common-canvas:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create a new node by dragging a node definition from a palette onto the canvas."),Object(l.b)("li",{parentName:"ol"},"Create a new node by dragging a node from outside the canvas onto the canvas (you’ll have to do some programming to get this to work)."),Object(l.b)("li",{parentName:"ol"},"Delete a node by clicking a context menu option."),Object(l.b)("li",{parentName:"ol"},"Create a link by dragging a line from one node to another."),Object(l.b)("li",{parentName:"ol"},"Delete a link by clicking a context menu option."),Object(l.b)("li",{parentName:"ol"},"Add a comment to the canvas and draw a link from it to one or more nodes."),Object(l.b)("li",{parentName:"ol"},"Edit a comment."),Object(l.b)("li",{parentName:"ol"},"Move nodes and comments around in the canvas to get the desired arrangement.")),Object(l.b)("p",null,"You can look at the App.js file in the test harness section of this repo to see examples of code that uses the common canvas component."),Object(l.b)("h2",null,"Architecture"),Object(l.b)("p",null,"The rest of this document concentrates on use of the Internal Object Model."),Object(l.b)("p",null,"Common Canvas functionality is packaged into:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"a react component called CommonCanvas that handles:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"the visual display of the flow of operations;"),Object(l.b)("li",{parentName:"ul"},"any user gestures on the canvas;"),Object(l.b)("li",{parentName:"ul"},"display of context menus;"),Object(l.b)("li",{parentName:"ul"},"display and handling of the palette."),Object(l.b)("li",{parentName:"ul"},"provision of callbacks to tell your code what operations the user is performing on the canvas")))),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"A regular JavaScript object called ",Object(l.b)("a",{href:"canvas-controller/canvas-controller-api"},"CanvasController"),". The CanvasController routes calls from the host application and calls made due to user interactions into the system. In particular it updates the internal ObjectModel which stores:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"the data that describes the flow of nodes, links and comments (called a pipelineFlow);"),Object(l.b)("li",{parentName:"ul"},"the data that describes the definition of the palette which contains new nodes that can be added to the canvas;"),Object(l.b)("li",{parentName:"ul"},"the set of currently selected objects."),Object(l.b)("li",{parentName:"ul"},"notification messages"),Object(l.b)("li",{parentName:"ul"},"breadcrumbs that indicate which sub-flow is being viewed"),Object(l.b)("li",{parentName:"ul"},"layout information")))),Object(l.b)("br",null),Object(l.b)("p",null,"The CanvasController provides an API which allows your code to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"set a new pipelineFlow;"),Object(l.b)("li",{parentName:"ul"},"get the current pipelineFlow (after the user has edited it);"),Object(l.b)("li",{parentName:"ul"},"update and edit objects in the canvas (for example, add node, delete link etc.);"),Object(l.b)("li",{parentName:"ul"},"set the node definition data (for display of nodes in the palette)")),Object(l.b)("h2",null,"First steps"),Object(l.b)("h3",null,"Hello Canvas!"),Object(l.b)("p",null,"You can start by looking at these two ‘hello world’ examples for using common canvas:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This first one called ",Object(l.b)("a",{href:"https://github.com/elyra-ai/canvas/blob/master/canvas_modules/harness/src/client/App_tiny.js"},"App_tiny.js")," has the bare minimum necessary to get a fully functioning common-canvas to appear including all the basic functionality, a palette and a flow of nodes and links."),Object(l.b)("li",{parentName:"ul"},"The second, called ",Object(l.b)("a",{href:"https://github.com/elyra-ai/canvas/blob/master/canvas_modules/harness/src/client/App_small.js"},"App_small.js"),", shows many of the options available to a common-canvas developer such as configurations and callback handlers.")),Object(l.b)("p",null,"Now let’s walk through the different parts of these files:"),Object(l.b)("h3",null,"Step 1: Import"),Object(l.b)("p",null,"To use common canvas in your react application you need to do the following. First import the CommonCanvas react component and CanvasController class from the common-canvas library. There are two import options. If you plan to use common properties along with the canvas functionality then use this import option:"),Object(l.b)("br",null),Object(l.b)("h4",null,"All Components"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'import { CommonCanvas, CanvasController } from "@elyra/canvas";')),Object(l.b)("br",null),Object(l.b)("h4",null,"Canvas only"),Object(l.b)("p",null,"If you want to use just the canvas functionality and not common-properties you can use this import option:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'import { CommonCanvas, CanvasController } from "@elyra/canvas/dist/lib/canvas";')),Object(l.b)("p",null,"In addition you’ll need to import ",Object(l.b)("inlineCode",{parentName:"p"},"<IntlProvider>")," from the react-intl library."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'import { IntlProvider } from "react-intl";')),Object(l.b)("br",null),Object(l.b)("h3",null,"Step 2 : Create an instance of the canvas controller"),Object(l.b)("p",null,"To control the canvas you’ll need an instance of the canvas controller so create an instance of it like this (probably in the constructor of your object)."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"this.canvasController = new CanvasController();")),Object(l.b)("br",null),Object(l.b)("h3",null,"Step 3 : Set the model and palette data"),Object(l.b)("p",null,"Next you’ll need to populate the model data by calling CanvasController with:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"this.canvasController.setPipelineFlowPalette(pipelineFlowPalette);"),"\n",Object(l.b)("inlineCode",{parentName:"p"},"this.canvasController.setPipelineFlow(pipelineFlow);")),Object(l.b)("p",null,"The pipelineFlowPalette object should conform to the JSON schema found here: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/pipeline-schemas/tree/master/common-canvas/palette"}),"https://github.com/elyra-ai/pipeline-schemas/tree/master/common-canvas/palette")),Object(l.b)("p",null,"The pipelineFlow object should conform to the JSON schema found here: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/elyra-ai/pipeline-schemas/tree/master/common-pipeline/pipeline-flow"}),"https://github.com/elyra-ai/pipeline-schemas/tree/master/common-pipeline/pipeline-flow")),Object(l.b)("br",null),Object(l.b)("h3",null,"Step 4 : Pull in the CSS"),Object(l.b)("p",null,"Check ",Object(l.b)("a",{href:"/common-properties/styling"},"this section")," to find info on what CSS to include in your application’s CSS. "),Object(l.b)("br",null),Object(l.b)("h3",null,"Step 5 : Display the canvas"),Object(l.b)("p",null,"Finally you’ll need to display the canvas object inside an ",Object(l.b)("inlineCode",{parentName:"p"},"<IntlProvider>")," object. Inside your render code, add the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"    <div>\n        <IntlProvider>\n            <CommonCanvas canvasController={this.canvasController} />\n        </IntlProvider>\n    </div>\n")),Object(l.b)("p",null,"The div should have the dimensions you want for your canvas to display in your page. For the canvasController property, pass the instance of canvas controller you created earlier. This is the only mandatory property. After providing this and running your code you will have a fully functioning canvas including default toolbar, context menus direct manipulation (move and resize) etc. To customize these behaviors and presentation continue with the sections below."),Object(l.b)("h4",null,"Common Canvas customization"),Object(l.b)("p",null,"If you want to customize the behavior of common canvas you can specify any combination of the following settings:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"    <div>\n        <CommonCanvas\n            canvasController={this.canvasController}\n            config={this.commonCanvasConfig}\n            toolbarConfig={this.toolbarConfig}\n            notificationConfig={this.notificationConfig}\n            contextMenuConfig={this.contextMenuConfig}\n            keyboardConfig={this.keyboardConfig}\n            contextMenuHandler={this.contextMenuHandler}\n            beforeEditActionHandler={this.beforeEditActionHandler}\n            editActionHandler={this.editActionHandler}    \n            clickActionHandler={this.clickActionHandler}   \n            decorationActionHandler={this.decorationActionHandler}\n            layoutHandler={this.layoutHandler}  \n            tipHandler={this.tipHandler}\n            idGeneratorHandler={this.idGeneratorHandler}\n            selectionChangeHandler={this.selectionChangeHandler}\n            showRightFlyout={showRightFlyout}\n            rightFlyoutContent={rightFlyoutContent}\n        >\n        </CommonCanvas>\n    </div>\n")),Object(l.b)("br",null),Object(l.b)("h4",null,"Config objects"),Object(l.b)("p",null,"Common canvas has five optional configuration objects: config, toolbarConfig, notificationConfig, contextMenuConfig and keyboardConfig. They are documented ",Object(l.b)("a",{href:"config/canvas-config"},"here"),"."),Object(l.b)("h4",null,"Handlers"),Object(l.b)("p",null,"There are several optional handlers implemented as callback functions. They are contextMenuHandler, editActionHandler, beforeEditActionHandler, clickActionHandler, decorationActionHandler, layoutHandler, tipHandler, idGeneratorHandler and selectionChangeHandler. They are documented ",Object(l.b)("a",{href:"callbacks"},"here"),"."),Object(l.b)("h4",null,"Right-flyout panel parameters"),Object(l.b)("p",null,"There are two optional parameters to let you manage the right flyout panel which can be used to display properties for objects etc. These are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"showRightFlyout: This can be true or false to indicate whether the flyout panel is shown or not. The default is false."),Object(l.b)("li",{parentName:"ul"},"rightFlyoutContent: content to display in the right flyout which is a JSX object. Nothing is displayed by default.")),Object(l.b)("br",null),Object(l.b)("h4",null,"Localization"),Object(l.b)("p",null,"You can customize ",Object(l.b)("inlineCode",{parentName:"p"},"<CommonCanvas>")," using the ",Object(l.b)("inlineCode",{parentName:"p"},"<IntlProvider>")," object to display translated test\nCreating nodes on the canvas"),Object(l.b)("p",null,"Nodes can be created on the canvas by the user in two ways:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"By dragging a node from the palette onto the canvas background"),Object(l.b)("li",{parentName:"ul"},"By dragging a node from outside the canvas")),Object(l.b)("p",null,"The first technique is provided by Common canvas. The second requires some development work which is documented ",Object(l.b)("a",{href:"enabling-external-node-creation"},"here"),". "),Object(l.b)("br",null),Object(l.b)("h3",null,"Keyboard support"),Object(l.b)("p",null,"Common canvas supports a number of keyboard interactions as follows:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Action"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ctrl/Cmd + A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Select All objects")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete selected objects")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ctrl/Cmd + Z"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Undo last command")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ctrl/Cmd + Shift + Z"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Redo last undone command")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ctrl/Cmd + Y"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Redo last undone command")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ctrl/Cmd + X"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cut selected objects to the clipboard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ctrl/Cmd + C"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Copy selected objects to the clipboard")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ctrl/Cmd + V"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Paste objects from the clipboard")))),Object(l.b)("p",null,"Your application can disable any or all of these actions by providing the ",Object(l.b)("a",{href:"/common-canvas/config/keyboard-config"},"keyboard config object")," to the CommonCanvas react component."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-common-canvas-canvas-documentation-mdx-87571c5977aac32ea3eb.js.map