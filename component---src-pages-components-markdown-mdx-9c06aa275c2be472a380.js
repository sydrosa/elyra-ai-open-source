(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("NmYn"),c=a.n(s),b=a("Wbzz"),o=a("Xrax"),i=a("k4MR"),l=a("TSYQ"),m=a.n(l),d=a("QH2O"),p=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,s=void 0===r?[]:r;return Object(u.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=s.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,s=r.baseUrl,c=r.subDirectory,o=s+"/edit/"+r.branch+c+"/src/pages"+t;return s?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),k=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),s=a===r,o=new RegExp(r+"/?(#.*)?$"),i=n.replace(o,a);return Object(u.b)("li",{key:e,className:m()((t={},t[k.selectedItem]=s,t),k.listItem)},Object(u.b)(b.Link,{className:k.link,to:""+i},e))}));return Object(u.b)("div",{className:k.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:k.list},s))))))},t}(r.a.Component),y=a("MjG9"),N=a("CzIb"),x=a("Asxa"),f=a("OIbQ"),T=a.n(f),C=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(x.c,{className:T.a.row},Object(u.b)(x.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,s=t.frontmatter,l=void 0===s?{}:s,m=t.relativePagePath,d=t.titleType,p=l.tabs,g=l.title,O=l.theme,k=l.description,x=l.keywords,f=l.date,T=Object(N.a)().interiorTheme,v=Object(b.useStaticQuery)("2456312558").site.pathPrefix,B=v?n.pathname.replace(v,""):n.pathname,I=p?B.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",E=O||T;return Object(u.b)(i.a,{tabs:p,homepage:!1,theme:E,pageTitle:g,pageDescription:k,pageKeywords:x,titleType:d},Object(u.b)(h,{title:r?Object(u.b)(r,null):g,label:"label",tabs:p,theme:E}),p&&Object(u.b)(w,{title:g,slug:B,tabs:p,currentTab:I}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(A,{relativePagePath:m}),Object(u.b)(C,{date:f})),Object(u.b)(j.a,{pageContext:t,location:n,slug:B,tabs:p,currentTab:I}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},lXzJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),s=(a("q1tI"),a("7ljp")),c=a("013z"),b=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},i=o("PageDescription"),l=o("AnchorLinks"),m=o("AnchorLink"),d={_frontmatter:b},p=c.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(i,{mdxType:"PageDescription"},Object(s.b)("p",null,"These are the built in components that you’ll have access to simply by using\nmarkdown. The whitespace around these components ",Object(s.b)("strong",{parentName:"p"},"is significant"),". If you\nencounter any errors, make sure you format the markdown and surounding space\nproperly."),Object(s.b)("p",null,"For most pages, we recommend starting with a ",Object(s.b)("inlineCode",{parentName:"p"},"PageDescription")," followed by\n",Object(s.b)("inlineCode",{parentName:"p"},"AnchorLinks")," if the content is long enough.")),Object(s.b)(l,{mdxType:"AnchorLinks"},Object(s.b)(m,{mdxType:"AnchorLink"},"Text decoration"),Object(s.b)(m,{mdxType:"AnchorLink"},"Headers"),Object(s.b)(m,{mdxType:"AnchorLink"},"Lists"),Object(s.b)(m,{mdxType:"AnchorLink"},"Links"),Object(s.b)(m,{mdxType:"AnchorLink"},"Images"),Object(s.b)(m,{mdxType:"AnchorLink"},"Code blocks"),Object(s.b)(m,{mdxType:"AnchorLink"},"Tables"),Object(s.b)(m,{mdxType:"AnchorLink"},"Blockquotes and citations"),Object(s.b)(m,{mdxType:"AnchorLink"},"Comments")),Object(s.b)("h2",null,"Text decoration"),Object(s.b)("p",null,"Emphasis, aka italics, with ",Object(s.b)("em",{parentName:"p"},"asterisks")," or ",Object(s.b)("em",{parentName:"p"},"underscores"),". Strong emphasis, aka\nbold, with ",Object(s.b)("strong",{parentName:"p"},"asterisks")," or ",Object(s.b)("strong",{parentName:"p"},"underscores"),". Combined emphasis with ",Object(s.b)("strong",{parentName:"p"},"asterisks\nand ",Object(s.b)("em",{parentName:"strong"},"underscores")),". Strikethrough uses two tildes. ",Object(s.b)("del",{parentName:"p"},"Scratch this.")),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown":!0}),"Emphasis, aka italics, with _asterisks_ or _underscores_. Strong emphasis, aka\nbold, with **asterisks** or **underscores**. Combined emphasis with **asterisks\nand _underscores_**. Strikethrough uses two tildes. ~~Scratch this.~~\n")),Object(s.b)("h2",null,"Headers"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," It’s generally considered\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://webaim.org/techniques/semanticstructure/#contentstructure"}),"best practice"),"\nto include just one ",Object(s.b)("inlineCode",{parentName:"p"},"h1")," heading per page. This heading signals the title or\nprimary subject matter of the content to your audience. Because the title\ncomponent generated at the top of each page already uses an ",Object(s.b)("inlineCode",{parentName:"p"},"h1")," heading, we\nrecommend using ",Object(s.b)("inlineCode",{parentName:"p"},"h2")," tags for section headings within your content."),Object(s.b)("h2",null,"H2"),Object(s.b)("h3",null,"H3"),Object(s.b)("h4",null,"H4"),Object(s.b)("h5",null,"H5"),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"## H2\n\n### H3\n\n#### H4\n\n##### H5\n")),Object(s.b)("h2",null,"Lists"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Unordered lists")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Unordered list can use asterisks"),Object(s.b)("li",{parentName:"ul"},"Or hyphens to create list items"),Object(s.b)("li",{parentName:"ul"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\nincididunt ut labore et"),Object(s.b)("li",{parentName:"ul"},"dolore magna aliqua. Pharetra massa massa ultricies mi quis. Adipiscing enim\neu turpis egestas pretium aenean."),Object(s.b)("li",{parentName:"ul"},"Massa eget egestas purus viverra accumsan in nisl nisi."),Object(s.b)("li",{parentName:"ul"},"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi\ntristique.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Ordered lists")),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"First ordered list item"),Object(s.b)("li",{parentName:"ol"},"Item with a nested item",Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},"Nested list item"))),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(s.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Nested lists")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Unordered list can use asterisks",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Nested list item"))),Object(s.b)("li",{parentName:"ul"},"Or hyphens to create list items")),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"- Unordered list can use asterisks\n\n* Or hyphens to create list items\n\n- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n  incididunt ut labore et\n- dolore magna aliqua. Pharetra massa massa ultricies mi quis. Adipiscing enim\n  eu turpis egestas pretium aenean.\n- Massa eget egestas purus viverra accumsan in nisl nisi.\n- Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi\n  tristique.\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"1. First ordered list item\n2. Item with a nested item\n   1. Nested list item\n3. In markdown, the actual numbers don’t matter, just that it’s a number\n4. In markdown, the actual numbers don’t matter, just that it’s a number\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"1. First ordered list item\n1. Item with a nested item\n   1. Nested list item\n1. In markdown, the actual numbers don’t matter, just that it’s a number\n")),Object(s.b)("h2",null,"Links"),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/elyra-ai-site/components/demo"}),"I’m a local link")),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.carbondesignsystem.com"}),"I’m a markdown link")),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.carbondesignsystem.com",title:"Carbon’s Homepage"}),"I’m a markdown link with title")),Object(s.b)("p",null,"URLs and URLs in angle brackets will automatically get turned into links.\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com"}),"http://www.example.com")," or ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com"}),"http://www.example.com")," and sometimes example.com\n(but not on Github, for example)."),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"[I’m a markdown link](https://www.carbondesignsystem.com)\n\n[I’m a markdown link with title](https://www.carbondesignsystem.com 'Google’s Homepage')\n\n[I’m a local link](/components/demo)\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or <http://www.example.com> and sometimes example.com\n(but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n")),Object(s.b)("h2",null,"Images"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB4U1cmUYP/8QAGRAAAgMBAAAAAAAAAAAAAAAAADEBAhES/9oACAEBAAEFAoc84Vd0f//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAARICH/2gAIAQEABj8CMc//xAAbEAABBAMAAAAAAAAAAAAAAAABABAhYTFRkf/aAAgBAQABPyEQZYQ7K2KCKvG//9oADAMBAAIAAwAAABBUL//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/EKf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAgEBPxCH/8QAGxABAAMBAAMAAAAAAAAAAAAAAQARIVExQYH/2gAIAQEAAT8QEXeq8x6xHYlfCVHCyl5EGgN9CLs//9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alt text goes here",title:"Alt text goes here",src:"/elyra-ai-site/static/962da2dc621f778bde6ec0b513feb8f9/2e753/quantum.jpg",srcSet:["/elyra-ai-site/static/962da2dc621f778bde6ec0b513feb8f9/69549/quantum.jpg 288w","/elyra-ai-site/static/962da2dc621f778bde6ec0b513feb8f9/473e3/quantum.jpg 576w","/elyra-ai-site/static/962da2dc621f778bde6ec0b513feb8f9/2e753/quantum.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"![Alt text goes here](images/quantum.jpg)\n")),Object(s.b)("h2",null,"Code blocks"),Object(s.b)("p",null,"You can read in depth about syntax highlighting and advanced code snippet\nfeatures on the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/elyra-ai-site/components/code-blocks"}),"Code blocks")," page."),Object(s.b)("p",null,"Inline ",Object(s.b)("inlineCode",{parentName:"p"},"code")," has ",Object(s.b)("inlineCode",{parentName:"p"},"back-ticks around")," it."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"Title",Title:!0}),"Blocks of code have three back-ticks above and below.\n\nYou can specify a language by placing it after the backticks.\n\nYou can also supply a source code URL or title to go at the top of the code\nblock\n")),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"Inline `code` has `back-ticks around` it.\n\n```markdown Title\nBlocks have three back-ticks above and below. Pretend the backslashes aren’t\nthere.\n```\n")),Object(s.b)("p",null,"You can view a list of included languages at the\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"}),"react-prism-renderer repo"),"."),Object(s.b)("h2",null,"Tables"),Object(s.b)("p",null,"Colons can be used to align columns."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tables"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Are"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cool"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col 3 is"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"right-aligned"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col 2 is"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"centered"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"2")))),Object(s.b)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|)\nare optional, and you don’t need to make the raw Markdown line up prettily. You\ncan also use inline Markdown."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Markdown"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Less"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pretty"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("em",{parentName:"td"},"Still")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"renders")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("strong",{parentName:"td"},"nicely"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")))),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"Colons can be used to align columns.\n\n| Tables        |      Are      |   Cool |\n| ------------- | :-----------: | -----: |\n| col 3 is      | right-aligned | \\$1600 |\n| col 2 is      |   centered    |   \\$12 |\n| zebra stripes |   are neat    |    \\$1 |\n\nThere must be at least 3 dashes separating each header cell. The outer pipes (|)\nare optional, and you don’t need to make the raw Markdown line up prettily. You\ncan also use inline Markdown.\n\n| Markdown | Less      | Pretty     |\n| -------- | --------- | ---------- |\n| _Still_  | `renders` | **nicely** |\n| 1        | 2         | 3          |\n")),Object(s.b)("h2",null,"Blockquotes and citations"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Without aesthetic, design is either the humdrum repetition of familiar clichés\nor a wild scramble for novelty. Without aesthetic, the computer is but a\nmindless speed machine, producing effects without substance, form without\nrelevant content, or content without meaningful form."),Object(s.b)("cite",null,"– Paul Rand")),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"path=components/markdown src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",path:"components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"> Without aesthetic, design is either the humdrum repetition of familiar clichés\n> or a wild scramble for novelty. Without aesthetic, the computer is but a\n> mindless speed machine, producing effects without substance, form without\n> relevant content, or content without meaningful form.\n>\n> <cite>– Paul Rand</cite>\n")),Object(s.b)("h2",null,"Comments"),Object(s.b)("p",null,"Comments can be added that will not display on the page, but will be visible in\nthe markdown source."),Object(s.b)("h3",null,"Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/markdown"}),"Comments can be added that will not display on the page, but will be visible in\nthe markdown source.\n\n\x3c!-- Comments like this are visible in code, but are not visible on the page --\x3e\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-markdown-mdx-9c06aa275c2be472a380.js.map