(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),b=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),s=a.n(d),p=a("QH2O"),m=a.n(p),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},x=a("FCXl"),g=a("dI71"),N=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(u.b)("li",{key:e,className:s()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(u.b)(b.Link,{className:N.link,to:""+l},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},o))))))},t}(r.a.Component),f=a("MjG9"),y=a("CzIb"),T=a("Asxa"),v=a("OIbQ"),k=a.n(v),P=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(T.c,{className:k.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,d=void 0===o?{}:o,s=t.relativePagePath,p=t.titleType,m=d.tabs,j=d.title,g=d.theme,N=d.description,T=d.keywords,v=d.date,k=Object(y.a)().interiorTheme,C=Object(b.useStaticQuery)("2456312558").site.pathPrefix,E=C?n.pathname.replace(C,""):n.pathname,I=m?E.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",D=g||k;return Object(u.b)(l.a,{tabs:m,homepage:!1,theme:D,pageTitle:j,pageDescription:N,pageKeywords:T,titleType:p},Object(u.b)(O,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:D}),m&&Object(u.b)(w,{title:j,slug:E,tabs:m,currentTab:I}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:s}),Object(u.b)(P,{date:v})),Object(u.b)(x.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:I}),Object(u.b)(c.a,null))}},"4dnF":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),c=(a("qKvR"),function(){return Object(i.b)("span",null,"Elyra documentation")}),l={},d=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),s={Title:c,_frontmatter:l},p=b.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(d,{mdxType:"PageDescription"},Object(i.b)("p",null,"The Elyra documentation’s source is stored in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra"}),"Elyra repository")," and hosted at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://elyra.readthedocs.io/"}),"Elyra’s Read the Docs"),". The documentation is written in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.sphinx-doc.org/en/master/usage/markdown.html"}),"Markdown")," and built using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.sphinx-doc.org/en/master/"}),"Sphinx"),".")),Object(i.b)("h2",null,"Contributing to the Elyra documentation"),Object(i.b)("p",null,"To contribute content to the Elyra documentation follow these steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fork the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra"}),"repository"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone your fork."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/git-id-or-org/elyra\n")),Object(i.b)("p",{parentName:"li"},"The documentation assets are located in the ",Object(i.b)("inlineCode",{parentName:"p"},"/docs")," directory."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"To add a new document create a new markdown file in the appropriate section subdirectory (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"/docs/source/getting_started"),") and add an entry to that section in ",Object(i.b)("inlineCode",{parentName:"li"},"/docs/source/index.rst"),"."),Object(i.b)("li",{parentName:"ul"},"To update an existing document edit the corresponding markdown file."),Object(i.b)("li",{parentName:"ul"},"Place new or updated images in the ",Object(i.b)("inlineCode",{parentName:"li"},"/docs/source/images")," directory. ",Object(i.b)("inlineCode",{parentName:"li"},"PNG")," is the recommended format."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Build the documentation assets locally."),Object(i.b)("p",{parentName:"li"},"In the repository’s ",Object(i.b)("em",{parentName:"p"},"root directory")," (not the ",Object(i.b)("inlineCode",{parentName:"p"},"/docs")," directory) run"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"make docs\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Review the build output and verify that your updates introduced no warnings or errors.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Review the updated documentation assets."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"/docs/_build/html/")," directory."),Object(i.b)("li",{parentName:"ol"},"Open ",Object(i.b)("inlineCode",{parentName:"li"},"index.html")," in a web browser."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Commit your updates to a new branch and open a pull request."))))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-dev-guide-elyra-documentation-mdx-df5f2125538dbefb6b3c.js.map