(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),l=a.n(o),r=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,l=i.subDirectory,c=o+"/edit/"+i.branch+l+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),o=a===i,c=new RegExp(i+"/?(#.*)?$"),s=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(p.b)(r.Link,{className:f.link,to:""+s},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},o))))))},t}(i.a.Component),N=a("MjG9"),v=a("CzIb"),T=a("Asxa"),k=a("OIbQ"),y=a.n(k),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:y.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=b.tabs,j=b.title,h=b.theme,f=b.description,T=b.keywords,k=b.date,y=Object(v.a)().interiorTheme,C=Object(r.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",D=h||y;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:D,pageTitle:j,pageDescription:f,pageKeywords:T,titleType:u},Object(p.b)(g,{title:i?Object(p.b)(i,null):j,label:"label",tabs:m,theme:D}),m&&Object(p.b)(w,{title:j,slug:I,tabs:m,currentTab:E}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(P,{date:k})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(p.b)(c.a,null))}},"7YrV":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n,i=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),{}),s=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),b={_frontmatter:c},d=r.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(d,Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s,{mdxType:"PageDescription"},Object(l.b)("p",null,"Notification messages are displayed in the notification panel which the user can access by clicking the Notifications icon in the toolbar. ")),Object(l.b)("p",null,"Each notification message is described by a simple JavaScript object like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{})," {\n    id: <string>,\n    type: <string>,\n    title: <string or JSX object>,\n    content: <string or JSX object>,\n    timestamp: <string>,\n    callback: <function>,\n    closeMessage: <string or JSX object>\n}\n")),Object(l.b)("p",null,"where:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"id")," (string, required): this is a unique ID assigned to the notification message. This is passed as a parameter in the callback (see below) and is used to reference messages when deleting them through the ",Object(l.b)("inlineCode",{parentName:"li"},"CanvasController")," API."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"type")," (string, required): this must be one of four values: “info”, “success”, “warning”, or “error”. If ",Object(l.b)("inlineCode",{parentName:"li"},"type")," is null, empty string, or undefined, the message type will be “unspecified”."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"title")," (string or JSX object): the title of the notification message"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"content")," (string or JSX object): the body of the notification message"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"callback")," (function): an optional callback function that will be called when the notification message is clicked. Callback function is called with one parameter, ",Object(l.b)("inlineCode",{parentName:"li"},"id")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"timestamp")," (string or JSX object): an optional timestamp that will be rendered in a separate section with different formatting, if passed in"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"closeMessage")," (string or React object): an optional message that, if passed in, will display as clickable. Clicking on this will delete this individual message. If none is passed in, no delete option will be shown.")))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-common-canvas-canvas-controller-notification-spec-mdx-7b1c1aefbfe0a1de91db.js.map