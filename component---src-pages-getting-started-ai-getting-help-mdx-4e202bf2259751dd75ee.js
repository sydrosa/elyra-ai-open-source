(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),c=a.n(i),n=a("NmYn"),s=a.n(n),r=a("Wbzz"),b=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),p=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,c=e.tabs,n=void 0===c?[]:c;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=n.length,t[p.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},A=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,c=a||i,n=c.baseUrl,s=c.subDirectory,b=n+"/edit/"+c.branch+s+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),y=a("dI71"),h=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,c=i.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),n=a===c,b=new RegExp(c+"/?(#.*)?$"),o=i.replace(b,a);return Object(u.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=n,t),h.listItem)},Object(u.b)(r.Link,{className:h.link,to:""+o},e))}));return Object(u.b)("div",{className:h.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:h.list},n))))))},t}(c.a.Component),O=a("MjG9"),w=a("CzIb"),v=a("Asxa"),T=a("OIbQ"),k=a.n(T),N=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:k.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,n=t.frontmatter,l=void 0===n?{}:n,d=t.relativePagePath,m=t.titleType,p=l.tabs,A=l.title,y=l.theme,h=l.description,v=l.keywords,T=l.date,k=Object(w.a)().interiorTheme,I=Object(r.useStaticQuery)("2456312558").site.pathPrefix,C=I?i.pathname.replace(I,""):i.pathname,z=p?C.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",E=y||k;return Object(u.b)(o.a,{tabs:p,homepage:!1,theme:E,pageTitle:A,pageDescription:h,pageKeywords:v,titleType:m},Object(u.b)(g,{title:c?Object(u.b)(c,null):A,label:"label",tabs:p,theme:E}),p&&Object(u.b)(j,{title:A,slug:C,tabs:p,currentTab:z}),Object(u.b)(O.a,{padded:!0},a,Object(u.b)(x,{relativePagePath:d}),Object(u.b)(N,{date:T})),Object(u.b)(f.a,{pageContext:t,location:i,slug:C,tabs:p,currentTab:z}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},P0Qe:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return r})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return x}));var i=a("wx14"),c=a("zLVn"),n=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),function(){return Object(n.b)("span",null,"Getting help")}),b={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=o("PageDescription"),d=o("AnchorLinks"),m=o("AnchorLink"),p=o("Row"),u=o("Column"),g={Title:r,_frontmatter:b},A=s.a;function x(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(n.b)(A,Object(i.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Thank you for your interest in Elyra!")),Object(n.b)(d,{mdxType:"AnchorLinks"},Object(n.b)(m,{mdxType:"AnchorLink"},"General questions"),Object(n.b)(m,{mdxType:"AnchorLink"},"Create an issue or feature request"),Object(n.b)(m,{mdxType:"AnchorLink"},"Join the weekly community meeting"),Object(n.b)(m,{mdxType:"AnchorLink"},"Elyra chat room")),Object(n.b)("h2",null,"General questions"),Object(n.b)("p",null,"Share your questions and ideas with the community in the ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra/discussions"}),"GitHub discussion forum"),"."),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(u,{colMd:7,colLg:7,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACKklEQVQoz3WTu2sUYRTFtxKyszvv9+w8srOPJBuzSEQxxo2IeQgxQUQWjCSEQAxYWVqkSSUIooIgpFJBsUprJVhYCJYidoL+Bf4D/rwzEI2oxeF7zL3nnvudO5W0NYmfdNDtEDtIaYyOEWVdWbvYforpxYLkF6wjKL57jRw3HC3XWHIrmhNjhTmGE6E7oSDAFNQMR4r4aJaHLlBlXzM9qpqNogs0C1ViLK/Ii8p8zQqo1A1JMAOO6Sar+Tz7g3vszt1n58ITri4+5fzyAaeGL9ib2eXB2bvcnnvI+sV9FheeMxi+pjN7ixGlRt2QgrpLpaZ7aHKo1FR2+kM+b7zlYO0djzc/cmf7C8Ob3+mtf+PVlZd8uP6GZzfes7f2ia2Nr8xv/yCZe4SijFA3QwpxpcICVd0h91sMmjNMp2foZefotBZojq+S9K8xN7XIUn+Z2f4KJyZWaLYvMXF5E396gFIzS4VHCH0U1cRqzWCd3qI6tUa1syT3BmGS0Ejl8dMmNUcKmxZ1y6aqqjiJdOc6FF3WDfdPhYpq48VdotZJ6t4YqtvGjTKyziRJ3iPLJ2h2jgt5FyfIxIAQ026IMUH5doc8vwk1cSxICEWJJS6XDspYpO1JsnaPKG2LozGGKySmtCcklkxFsf8nYXFpuBFOmJZJdQm0/YSsNS4Kx4mbY/hxjibzekhgSfx/CRXNLQPCJC8DChSKAjl7UZMgLgY4K3+AophqFvP6t8KffQkg9K0WOKgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"elyra discussion forum",title:"elyra discussion forum",src:"/static/2ad8547cc003731ab67c55910ac99002/3cbba/elyra-discussion-forum.png",srcSet:["/static/2ad8547cc003731ab67c55910ac99002/7fc1e/elyra-discussion-forum.png 288w","/static/2ad8547cc003731ab67c55910ac99002/a5df1/elyra-discussion-forum.png 576w","/static/2ad8547cc003731ab67c55910ac99002/3cbba/elyra-discussion-forum.png 1152w","/static/2ad8547cc003731ab67c55910ac99002/0b124/elyra-discussion-forum.png 1728w","/static/2ad8547cc003731ab67c55910ac99002/4ea69/elyra-discussion-forum.png 2304w","/static/2ad8547cc003731ab67c55910ac99002/f64be/elyra-discussion-forum.png 3836w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Create an issue or feature request"),Object(n.b)("p",null,"If you encounter a problem or have suggestions for improvements please ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/elyra-ai/elyra/issues"}),"open an issue")," on GitHub."),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(u,{colMd:7,colLg:7,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABn0lEQVQoz21SXXPjIBDLe1MbbAwYY/xF7aRxZ9rO3f//aTpBk1466YNmWFi00u4eQtyh+xeUtUPTjujGldjghhW1CahMT4RH6B6K+dYv0G6C7SPC8opD2XheRtTaQ/Jc1m1GUVkI5fAsLWEYGzwLjaeyyfGR56K2/NPlvIT075AeBR9KEhTfaHNCUhymiJ6Vu+WNqjdIKjuKK6FgsVLnc47JdbgFqfKt2n2sbI/aBggzESNUt+S4ohtznlGNLFDoqwv7pTBbIIFqB/hpyz1JSoTqUCY7/JzOMqm2I0w3Z7TbCypPwqRS6kfCynhs+yfWyyeWbce87hjWD7TxDxwt12FE4S0/GxL30HZgX00my5Z/EPJCNI6TOmGIFwzjBONGVO1KsHe0KzV7pkwmTP0q66+ef/cwE4r/hJKTXs4fmE/vmM/v6GnfD5HDOMGNJ1hr8VQ0ObdULXvsHgmT3JvlRBj3v4gXYqdVEqlAcMdUR6VugfJTzpdcEUnS453DXxR26OctK3MhQnsu97BAhDQU7qkZIDmUtJvFdaq5ZXdr8w/6Rv5GJyQfvgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"create a new issue",title:"create a new issue",src:"/static/9d01c248c67baa707df8a994a73951c3/3cbba/submit-issue.png",srcSet:["/static/9d01c248c67baa707df8a994a73951c3/7fc1e/submit-issue.png 288w","/static/9d01c248c67baa707df8a994a73951c3/a5df1/submit-issue.png 576w","/static/9d01c248c67baa707df8a994a73951c3/3cbba/submit-issue.png 1152w","/static/9d01c248c67baa707df8a994a73951c3/0b124/submit-issue.png 1728w","/static/9d01c248c67baa707df8a994a73951c3/4ea69/submit-issue.png 2304w","/static/9d01c248c67baa707df8a994a73951c3/b4775/submit-issue.png 3838w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Join the weekly community meeting"),Object(n.b)("p",null,"The Elyra community meeting is held ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://ibm.webex.com/meet/akchin"}),"online")," every Thursday at ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.thetimezoneconverter.com/?t=9%3A00%20am&tz=San%20Francisco&"}),"9AM Pacific")," (excluding holidays)."),Object(n.b)("h2",null,"Elyra chat room"),Object(n.b)("p",null,"You can reach many Elyra contributors in the ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://gitter.im/elyra-ai/community"}),"Elyra community")," on gitter."),Object(n.b)(p,{mdxType:"Row"},Object(n.b)(u,{colMd:7,colLg:7,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACD0lEQVQoz22R3WvTYBSH8xe5IYiiuxEZ4o1e+wd413ayuYj4xb5cZajTFXX2RqcV3FztLpxDRChzWpCtu5gXguDUNe2SpnVpkyZpm8c3aS2rGPJwDi+cJ783R7p0fAq5L0rk4Bjx80+ZH19gbijBi4vPWZQTLMnPeC3P8Wb4MSuRR7wTpAdmWYs8IBO5z+fwDNnQNFuhe3wdjCFdP3WXq/23GRDCzFKWSm0PVVMxqgamZWLWrC7sukMTj4agGQDptQzLyy/Z2swgjZ2OMX4mxtDhG4Hwt1FGURRKpRLVSrVFtYUpqFQqGIYR4J81Gg2y2XVW0yvkvn9DmjobZ+bcE6703+FTaiMQFrViS2CaXfVvb5lWUG2nTrMpcnp+ztYjXT5xi2snpxk8NEEmlRVX3aOk60Eay7KoiWvWRHUcuz3iidfrVF/opwyo15EuHJlk+GiU0IERVhcyaGWV7e2f/Mrl2Mkp5JQ8+cIuSr5AYVdlV6QvFEuCMppexrbtjtCXS75M7rtJpHc0EBZ0lR87YljT24Ot4U6vlcgLsf8RVdNwXbeTslvYM0p6XiQsKuiqii02bIvruiJBXQy5AQ6u47R7Nzjfn86vHWG4Z4QPyXWKNZt8uYZhN7EbHqbbEItqL0Zg/sN/Ek4iH4sS7p3gY+Itzpck1sYim+9TzD6Mk0q+EkN18f+99ka9LvbLfPkfWcy2hM/Zvk4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AI Pipeline in editor",title:"AI Pipeline in editor",src:"/static/a9df13a6177287d50475258cbba53264/3cbba/gitter.png",srcSet:["/static/a9df13a6177287d50475258cbba53264/7fc1e/gitter.png 288w","/static/a9df13a6177287d50475258cbba53264/a5df1/gitter.png 576w","/static/a9df13a6177287d50475258cbba53264/3cbba/gitter.png 1152w","/static/a9df13a6177287d50475258cbba53264/0b124/gitter.png 1728w","/static/a9df13a6177287d50475258cbba53264/4ea69/gitter.png 2304w","/static/a9df13a6177287d50475258cbba53264/5aa31/gitter.png 3840w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))}x.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-getting-started-ai-getting-help-mdx-4e202bf2259751dd75ee.js.map