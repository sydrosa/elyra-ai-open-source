(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),l=n("NmYn"),i=n.n(l),s=n("Wbzz"),r=n("Xrax"),c=n("k4MR"),b=n("TSYQ"),d=n.n(b),h=n("QH2O"),u=n.n(h),p=n("qKvR"),m=function(e){var t,n=e.title,a=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=l.length,t[u.a.darkMode]="dark"===a,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},n)))))},f=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,l=o.baseUrl,i=o.subDirectory,r=l+"/edit/"+o.branch+i+"/src/pages"+t;return l?Object(p.b)("div",{className:"bx--row "+f.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:f.link,href:r},"Edit this page on GitHub"))):null},w=n("FCXl"),O=n("dI71"),j=n("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],l=n.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),l=n===o,r=new RegExp(o+"/?(#.*)?$"),c=a.replace(r,n);return Object(p.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=l,t),j.listItem)},Object(p.b)(s.Link,{className:j.link,to:""+c},e))}));return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:j.list},l))))))},t}(o.a.Component),v=n("MjG9"),T=n("CzIb"),k=n("Asxa"),x=n("OIbQ"),N=n.n(x),L=function(e){var t=e.date,n=new Date(t);return t?Object(p.b)(k.c,{className:N.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,l=t.frontmatter,b=void 0===l?{}:l,d=t.relativePagePath,h=t.titleType,u=b.tabs,f=b.title,O=b.theme,j=b.description,k=b.keywords,x=b.date,N=Object(T.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,A=C?a.pathname.replace(C,""):a.pathname,I=u?A.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",S=O||N;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:S,pageTitle:f,pageDescription:j,pageKeywords:k,titleType:h},Object(p.b)(m,{title:o?Object(p.b)(o,null):f,label:"label",tabs:u,theme:S}),u&&Object(p.b)(y,{title:f,slug:A,tabs:u,currentTab:I}),Object(p.b)(v.a,{padded:!0},n,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(L,{date:x})),Object(p.b)(w.a,{pageContext:t,location:a,slug:A,tabs:u,currentTab:I}),Object(p.b)(r.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},N9Ds:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n("wx14"),o=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("013z"),s=(n("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},c=r("PageDescription"),b=r("AnchorLinks"),d=r("AnchorLink"),h=r("InlineNotification"),u={_frontmatter:s},p=i.a;function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(p,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(c,{mdxType:"PageDescription"},Object(l.b)("p",null,"There are five types of config objects available for Common canvas consumers: Canvas, Toolbar, Notification, Context menu, and Keyboard."),Object(l.b)("p",null,"Below you’ll find Canvas config objects.")),Object(l.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(l.b)(d,{mdxType:"AnchorLink"},"enableInteractionType"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableConnectionType"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableNodeFormatType"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableLinkType"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableLinkDirection"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableLinkSelection"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableLinkReplaceOnNewConnection"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableInternalObjectModel"),Object(l.b)(d,{mdxType:"AnchorLink"},"enablePaletteLayout"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableToolbarLayout"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableInsertNodeDroppedOnLink"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableRightFlyoutUnderToolbar"),Object(l.b)(d,{mdxType:"AnchorLink"},"enablePositionNodeOnRightFlyoutOpen"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableHighlightNodeOnNewLinkDrag"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableHighlightUnavailableNodes"),Object(l.b)(d,{mdxType:"AnchorLink"},"eenableAutoLinkOnlyFromSelNodes"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableMoveNodesOnSupernodeResize"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableExternalPipelineFlows"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableDisplayFullLabelOnHover"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableDragWithoutSelect"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableDropZoneOnExternalDrag"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableNodeLayout"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableSaveZoom"),Object(l.b)(d,{mdxType:"AnchorLink"},"enablePanIntoViewOnOpen"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableZoomIntoSubFlows"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableSnapToGridType"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableSnapToGridX"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableAutoLayoutHorizontalSpacing"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableAssocLinkCreation"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableAssocLinkType"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableBrowserEditMenu"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableNarrowPalette"),Object(l.b)(d,{mdxType:"AnchorLink"},"enableAssocLinkCreation"),Object(l.b)(d,{mdxType:"AnchorLink"},"paletteInitialState"),Object(l.b)(d,{mdxType:"AnchorLink"},"emptyCanvasContent"),Object(l.b)(d,{mdxType:"AnchorLink"},"schemaValidation"),Object(l.b)(d,{mdxType:"AnchorLink"},"tipConfig")),Object(l.b)("h2",null,"Canvas config object"),Object(l.b)("p",null,"The canvas config object should contain one or more of the following properties:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-const",metastring:"commonCanvasConfig = {",commonCanvasConfig:!0,"":"","{":!0}),'       "enableInteractionType": "Trackpad",\n       "enableConnectionType": "Ports",  // @deprecated\n       "enableNodeFormatType": "Horizontal",\n       "enableLinkType": "Curve",\n       "enableLinkDirection": "LeftRight",\n       "enableLinkSelection": "None",\n       "enableLinkReplaceOnNewConnection": true,\n       "enableInternalObjectModel": true,\n       "enablePaletteLayout": "Flyout",\n       "enableToolbarLayout": "Top",\n       "enableInsertNodeDroppedOnLink": true,\n       "enableRightFlyoutUnderToolbar": true,\n       "enablePositionNodeOnRightFlyoutOpen": true,\n       "enableHighlightUnavailableNodes": true,\n       "enableHighlightNodeOnNewLinkDrag": false,\n       "enableAutoLinkOnlyFromSelNodes": true,\n       "enableExternalPipelineFlows": true,\n       "enableMoveNodesOnSupernodeResize": true,\n       "enableDisplayFullLabelOnHover": true,\n       "enableDragWithoutSelect": true,\n       "enableDropZoneOnExternalDrag": true,\n       "enableNodeLayout":{\n         selectionPath: "",\n         bodyPath: "",\n         ...\n       },\n       "enableSaveZoom": "LocalStorage",\n       "enablePanIntoViewOnOpen": false,\n       "enableZoomIntoSubFlows": true,\n       "enableSnapToGridType": "During",\n       "enableSnapToGridX": "20%",\n       "enableSnapToGridY": "25%",\n       "enableAutoLayoutVerticalSpacing": "80",\n       "enableAutoLayoutHorizontalSpacing": "80",\n       "enableAssocLinkCreation": false,\n       "enableAssocLinkType": "Straight",\n       "enableBrowserEditMenu": true,\n       "enableNarrowPalette": true,\n       "paletteInitialState": true,\n       "emptyCanvasContent": (<div>Your canvas is empty.</div>),\n       "dropZoneCanvasContent": (<div>Drop object here.</div>),\n       "schemaValidation": false,\n       "tipConfig": {\n           "palette": true,\n           "nodes": true,\n           "ports": true,\n           "links": true\n       }\n    };\n')),Object(l.b)("h3",null,"enableInteractionType"),Object(l.b)("p",null,"This can be “Mouse” or “Trackpad”. The default is “Mouse”."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"With this set to “Mouse” the following interaction is enabled:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Zoom canvas = Rotate mouse wheel.\n(Can be simulated with a trackpad with two finger up and down scroll)"),Object(l.b)("li",{parentName:"ul"},"Pan canvas = Left mouse key down on canvas background + drag.\n(Can be simulated with a trackpad with press down on trackpad and drag.)"),Object(l.b)("li",{parentName:"ul"},"Region select on canvas = Shift key + left mouse key down on canvas background + drag.\n(Can be simulated with a trackpad with Shift + finger down on trackpad + drag across canvas background)")))),Object(l.b)("br",null),'* With this set to "Trackpad" the following interactions are enabled:',Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Zoom canvas = Two finger pinch or two finger spread gesture.\n(Can be simulated with a mouse as follows: Ctrl + rotate mouse wheel.)"),Object(l.b)("li",{parentName:"ul"},"Pan canvas = Two finger horizontal or vertical scroll gesture.\n(Can be simulated with a mouse as follows: Vertical pan is rotate mouse wheel; Horizontal pan is Shift + rotate mouse wheel)"),Object(l.b)("li",{parentName:"ul"},"Region select on canvas = Finger down + drag.\n(Can be simulated with a mouse as follows: Left button down + drag on canvas background)")),Object(l.b)("h3",null,"enableConnectionType"),Object(l.b)(h,{kind:"warning",mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Warning:")," This feature is deprecated. It will be removed in a future release and Elyra Canvas will default to the “Ports” option.")),Object(l.b)("p",null,"This can be “Ports” or “Halo”. “Ports” is the default. “Ports” will display ports in the form of circles to the left and right of the node which are based on the inputs and outputs provided in the pipeline flow document. Nodes are connected by dragging from one output port to an input port. “Halo” will use simple arrows to connect nodes and uses the blue circle Halo to allow a connection to be created."),Object(l.b)("h3",null,"enableNodeFormatType"),Object(l.b)("p",null,"This is only applicable when “Ports” connection type is specified. This can be “Horizontal” or “Vertical”. “Horizontal” is the default. “Horizontal” will display a node with an image and the label to the right of the image. “Vertical” will display the node with the label underneath the image."),Object(l.b)("h3",null,"enableLinkType"),Object(l.b)("p",null,"This is only applicable when “Ports” connection type is specified. This can be “Curve”, “Elbow”, or “Straight”. “Curve” is the default. This will set the link style used to connect nodes."),Object(l.b)("h3",null,"enableLinkDirection"),Object(l.b)("p",null,"This is only applicable when “Ports” connection type is specified. This can be “LeftRight”, “TopBottom”, or “BottomTop”. “LeftRight” is the default. This will set the input and output port positions on nodes to facilitate links being drawn in the direction specified."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"For “LeftRight” output ports will be on the right and input ports will be on the left of the nodes"),Object(l.b)("li",{parentName:"ul"},"For “TopBottom” output ports will be on the bottom and input ports will be on the top of the nodes"),Object(l.b)("li",{parentName:"ul"},"For “BottomTop” output ports will be on the top and input ports will be on the bottom of the nodes")),Object(l.b)("h3",null,"enableLinkSelection"),Object(l.b)("p",null,"This can be: “None”, “LinkOnly”, “Handles” or “Detachable”. The default is “None”. These have the following affect on the canvas:"),Object(l.b)("h4",null,"“None”"),Object(l.b)("p",null,"No selection of links is possible however user can right click on a link to get a context menu."),Object(l.b)("h4",null,"“LinkOnly”"),Object(l.b)("p",null,"A link may be selected and added to the set of currently selected objects (nodes and/or comments)."),Object(l.b)("h4",null,"“Handles”"),Object(l.b)("p",null,"This includes the “LinkOnly” function. In addition, when a link is selected a handle (either a circle or an image) is displayed at the start and end of the link. The link handle can be dragged to a new node/port position to rewire the flow."),Object(l.b)("h4",null,"“Detachable”"),Object(l.b)("p",null,"This includes the “LinkOnly” and “Handles” function. In addition, this option enables detachable links for the canvas. This means a link can exist either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Between a source node and an arbitrary point on the canvas (semi-detached) OR"),Object(l.b)("li",{parentName:"ul"},"Between an arbitrary point on the canvas and a target node (semi-detached) OR"),Object(l.b)("li",{parentName:"ul"},"Between two arbitrary points on the canvas (detached)")),Object(l.b)("p",null,"Additionally, “Detachable” mode, allows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Semi-detached or fully-detached links to be stored in and retrieved from the pipeline flow document."),Object(l.b)("li",{parentName:"ul"},"Semi-detached or fully-detached links to be manipulated with link handles. The link handles can be used to drag the end of the link away from its connecting source or target nodes and onto the canvas. Or semi-detached or fully detached links can be reattached to nodes/ports."),Object(l.b)("li",{parentName:"ul"},"A new detached link to be created by drawing out a new link from a node and dropping it onto the canvas."),Object(l.b)("li",{parentName:"ul"},"Palette and canvas nodes, when they are dragged, to be dropped onto the ends of detached links to automatically attach them to the node being dragged.")),Object(l.b)("h3",null,"enableLinkReplaceOnNewConnection"),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true, the user can drag a new connection to a target node, and if the input port on the target node has a maximum cardinality of one AND there is currently a connection to that port, the existing connection will be removed and the new connection is created; essentially this gesture replaces the existing link with the new one. If set to false the new connection will not be completed and the existing link will remain in place."),Object(l.b)("p",null,"When set to true and a link is replaced, common-canvas will call the ",Object(l.b)("inlineCode",{parentName:"p"},"beforeEditActionHandler")," the ",Object(l.b)("inlineCode",{parentName:"p"},"editActionHandler")," callback functions, if either are provided by the host application, with a ",Object(l.b)("inlineCode",{parentName:"p"},"data")," object parameter with the ",Object(l.b)("inlineCode",{parentName:"p"},"editType")," field set to ",Object(l.b)("inlineCode",{parentName:"p"},'"linkNodesAndReplace"'),"."),Object(l.b)("h3",null,"enableInternalObjectModel"),Object(l.b)("p",null,"You should use true for this all the time. true is the default. If you set this to false your code will be responsible for handling the object model, which is NOT recommended. When false, changes are not set into the object model, and consumers are expected to listen to events and update the internal object model themselves (again, not recommended)."),Object(l.b)("h3",null,"enablePaletteLayout"),Object(l.b)("p",null,"This can be: “Modal” or “Flyout” or “None”. The default is “Flyout”. “Flyout” displays a panel on the left side of the canvas containing the palette icons and “Modal” shows the palette icons in a dialog window. “None” stops the palette from appearing."),Object(l.b)("h3",null,"enableToolbarLayout"),Object(l.b)("p",null,"This can be: “Top” or “None”. The default is “Top”. “Top” displays a toolbar at the top of the canvas area. See the ",Object(l.b)("a",{href:"toolbar-config#toolbar-config-object"},"toolbar configuration object docs")," for details on how to customize the toolbar. “None” stops the toolbar from appearing."),Object(l.b)("h3",null,"enableInsertNodeDroppedOnLink"),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true, the user can drag nodes from the palette or from the canvas and drop them onto existing links in the flow. This causes the dropped node to be inserted between the two nodes joined by the link, meaning new links are created that join the new node to the previously joined nodes and the old link is removed. When the user performs the drop common-canvas will call the editActionHandler with one of two possible commands:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"“createNodeOnLink” - when a node is being dragged from the palette leading to node creation & insertion"),Object(l.b)("li",{parentName:"ul"},"“insertNodeIntoLink” - when an existing node is dragged from the canvas leading to insertion of the existing node into the link")),Object(l.b)("h3",null,"enableRightFlyoutUnderToolbar"),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true the right flyout panel, when opened, will appear below the toolbar and will not cause the toolbar to compress. The default behavior is that the right flyout panel, when opened, will appear at the side of the toolbar and will compress the space available for the toolbar to be displayed. Warning: the notifications panel which is tied to the notifications icon in the toolbar will appear over the top of the right-side flyout with this option set to true."),Object(l.b)("h3",null,"enablePositionNodeOnRightFlyoutOpen"),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true, when the right-side flyout is open th currently selected node (assuing there is one) will be automatically positioned in the center of the viewport (canvas area). Instead of true this field can also be set to a simple JavaScript object like this ",Object(l.b)("inlineCode",{parentName:"p"},"{ x: 30, y: 40 }")," where x and y indicate the position where the node will be positioned as a percentage of the width and height of the viewport respectively."),Object(l.b)("h3",null,"enableHighlightNodeOnNewLinkDrag"),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true common-canvas will add the “data-new-link-over” attribute to the node’s group ",Object(l.b)("inlineCode",{parentName:"p"},"<g>")," element, when the end of a new link is dragged to be close to and over a target node. This allows applications to alter the appearance of the target node as a new link is dragged towards it."),Object(l.b)("h3",null,"enableHighlightUnavailableNodes"),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true, when the user begins to drag a new link line, common-canvas will add a new class called ",Object(l.b)("inlineCode",{parentName:"p"},"d3-node-unavailable")," to all nodes which cannot accept the link as input. The class will be applied to each node’s group ",Object(l.b)("inlineCode",{parentName:"p"},"<g>")," element in the DOM. This class can be used for styling the unavailable nodes as desired using CSS. The default styling will ‘gray out’ the node label, node outline rectangle (if there is one) and the node icon (provided it is an SVG image). These styles can be overridden in the applications CSS if different styling is needed. This behavior also applies if the end of a partially or fully detached link is dragged."),Object(l.b)("h3",null,"enableAutoLinkOnlyFromSelNodes"),Object(l.b)("p",null,"This can be true or false. The default is false. When set to true the auto-add function (where double clicking a node in the palette automatically adds it to the canvas) will only link up nodes when a node is already selected on the canvas and then, only if the selected node can be linked to the node that was double clicked. If false, the auto-add function will make a best guess at which node the double-clicked node should be added to."),Object(l.b)("h3",null,"enableMoveNodesOnSupernodeResize"),Object(l.b)("p",null,"This can be true or false. The default is true. If true, nodes surrounding a supernode will be moved when the supernode is resized so that the supernode does not overlay them."),Object(l.b)("h3",null,"enableExternalPipelineFlows"),Object(l.b)("p",null,"This can be true or false. The default is false. If true, the context menu will include a Create External Supernode option when a set of objects are selected from which a supernode can be created."),Object(l.b)(h,{kind:"warning",mdxType:"InlineNotification"},Object(l.b)("p",null,"Warning: The host application must implement some of the common-canvas callbacks for external pipeline flow support to work correctly. See the ",Object(l.b)("a",{href:"/common-canvas/external-subflows-support"},"Wiki section on external pipeline flow support")," for more details.\nenableDisplayFullLabelOnHover")),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true, any abbreviated node label will be displayed in full when the pointer hovers over the label. If set to false, abbreviated node labels will remain the same when the pointer hovers over them."),Object(l.b)("h3",null,"enableDisplayFullLabelOnHover"),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true, any abbreviated node label will be displayed in full when the pointer hovers over the label. If set to false, abbreviated node labels will remain the same when the pointer hovers over them."),Object(l.b)("h3",null,"enableDragWithoutSelect"),Object(l.b)("p",null,"This can be either true or false. The default is false. If set to true, the user can drag and drop a single node or a single comment without that gesture removing selection on any other nodes or comments. If the node being dragged was selected prior to the drag gesture then it and any other objects that are currently selected will be moved. With this parameter set to false (or missing) a drag and drop gesture will select the node or comment being dragged and will deselect any currently selected objects."),Object(l.b)("h3",null,"enableDropZoneOnExternalDrag"),Object(l.b)("p",null,"This can be true or false. The default is false. If set to true a graphic overlay will be displayed over the canvas when a data object icon is dragged from the desktop over the canvas. The default graphic overlay will be an image and a message saying: “Drop to add to canvas and project” unless the ",Object(l.b)("inlineCode",{parentName:"p"},"dropZoneCanvasContent")," configuration parameter is provided."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{href:"/common-canvas/enabling-external-node-creation#dragging-object-from-the-desktop-or-another-application"},"Dragging an object from the desktop")," section of the Wiki for details on how to handle the drop of an external object onto the canvas."),Object(l.b)("h3",null,"enableNodeLayout"),Object(l.b)("p",null,"This is a simple Javascript object, the properties of which override the default node layout properties. For more details see: ",Object(l.b)("a",{href:"/common-canvas/customizing-node-layout"},"Customizing Node Layout Properties")),Object(l.b)("h3",null,"enableSaveZoom"),Object(l.b)("p",null,"This can be: “None”, “LocalStorage” or “Pipelineflow”. The default is “None”."),Object(l.b)("h4",null,"“None”"),Object(l.b)("p",null,"When the canvas is zoomed, the zoom (scale and x/y pan) are not saved anywhere so if the canvas is closed and reopened it reopens with the default zoom which is a scale of 1 and x/y pan values of 0."),Object(l.b)("h4",null,"“LocalStorage”"),Object(l.b)("p",null,"The zoom for the canvas is stored in the browser’s local storage and will be reapplied to the canvas each time that canvas is shown in that browser. This applies to sub-flows, when the user displays them full-screen, as well as the primary flow. Sub-flows and the primary flow each have their own zoom amounts stored in local storage. Note: Zoom amounts stored in local storage can be cleared from storage by calling the ",Object(l.b)("inlineCode",{parentName:"p"},"canvasController.clearSavedZoomValues()")," API method."),Object(l.b)("h4",null,"“Pipelineflow”"),Object(l.b)("p",null,"The zoom is serialized into the pipeline flow document and when a pipeline flow document is provided to common canvas through the API the zoom will be applied to the canvas display. Zoom amounts can be stored for both primary and sub pipelines. (See the pipelineFlow schema specification)."),Object(l.b)("h3",null,"enablePanIntoViewOnOpen"),Object(l.b)("p",null,"This can be either true or false. The default is false. If set to true, the canvas will be panned so as much of the canvas area (the area containing the nodes and comments) is visible in the viewport as possible. This will only happen when enableSaveZoom === “None” or if there is no saved zoom available either in local storage (when enableSaveZoom === “LocalStorage”) or in the pipelineFlow (when enableSaveZoom === “Pipelineflow”)."),Object(l.b)("h3",null,"enableZoomIntoSubFlows"),Object(l.b)("p",null,"This is a boolean. The default is false. When set to true, common-canvas will override the maximum zoom extent value which, by default is used for the entire canvas, to allow the user to zoom in on in-place sub-flows further than they can do on containing flows. This means the user can zoom in on multi-nested sub-flows so they are easier to view. To see this effect, the user must position the mouse pointer over the sub-flow before performing the zoom gesture."),Object(l.b)("h3",null,"enableSnapToGridType"),Object(l.b)("p",null,"This can be: “None”, “During” or “After”. The default is “None”."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"“None” - there is no snap to grid and objects can be moved to any position on the canvas."),Object(l.b)("li",{parentName:"ul"},"“During” - when nodes or comments are moved or sized, the objects snap to an imaginary grid while the objects are being dragged or sized. This gives a somewhat jerky effect as the move or size is happening but has the advantage of telling the user exactly where the object will be when they release the mouse button to end the action."),Object(l.b)("li",{parentName:"ul"},"“After” - nodes or comments snap to a grid when the drag or size event ends. This gives a smooth dragging and sizing effect but the user does not see the final position until they release the mouse button at the end of the action. By default the canvas uses reasonable values for the grid increments.")),Object(l.b)("h3",null,"enableSnapToGridX"),Object(l.b)("p",null,"This optional value overrides the default horizontal increment of the snap-to-grid grid. It can be either a numeric value which is a number of pixels or it can be a numeric value followed by a % sign (e.g. “25%”) which indicates the grid will be a percentage of the default node width. Its default is dependent on whatever is set for enableNodeFormatType. That is for “Horizontal” it will be “20%” and for “Vertical” it will be “25%”.\nenableSnapToGridY"),Object(l.b)("p",null,"This optional value overrides the default vertical increment of the snap-to-grid grid. It can be either a numeric value which is a number of pixels or it can be a numeric value followed by a % sign (e.g. “25%”) which indicates the grid will be a percentage of the default node height. Its default is dependent on whatever is set for enableNodeFormatType. That is for “Horizontal” it will be “33.33%” and for “Vertical” it will be “20%”.\nenableAutoLayoutVerticalSpacing"),Object(l.b)("p",null,"This is the spacing in pixels which is used to separate nodes vertically when either the vertical or horizontal auto layout action is used."),Object(l.b)("h3",null,"enableAutoLayoutHorizontalSpacing"),Object(l.b)("p",null,"This is the spacing in pixels which is used to separate nodes horizontally when either the vertical or horizontal auto layout action is used. For horizontal auto layout, common-canvas may override this value if it decides that more space is needed to prevent connecting lines from doubling back on themselves."),Object(l.b)("h3",null,"enableAssocLinkCreation"),Object(l.b)("p",null,"This is a Boolean. The default is false. If set to true it changes the nature of links that are created between nodes as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The user is able to pull out a link from either port on the node and drag it to another node"),Object(l.b)("li",{parentName:"ul"},"When a link is completed an association link is created rather than the regular data flow link that is created when this field is set to true. Association links describe an association between pairs of nodes and do not indicate any kind of data flow between those nodes.")),Object(l.b)("h3",null,"enableAssocLinkType"),Object(l.b)("p",null,"This can be “Straight” or “RightSideCurve”. The default it “Straight”. This field changes the way association links are drawn on the canvas."),Object(l.b)("h3",null,"enableBrowserEditMenu"),Object(l.b)("p",null,"This can be true or false. true is the default. If true, the Cut/Copy/Paste items in the Browser’s Edit menu, including keyboard input for those actions, can be used for performing those actions on objects (e.g. Nodes) in the canvas. When false, those items in the Browser’s edit menu, including keyboard input for those actions, will be disabled for objects in the canvas. This will not prevent those actions working in the canvas when, say, invoked with the toolbar or canvas context menus, but this property can be used if the keyboard input for those actions into the canvas is disabled for common-canvas using the keyboard config object."),Object(l.b)("h3",null,"enableNarrowPalette"),Object(l.b)("p",null,"This can be true or false. true is the default. If true when the palette is closed the narrow palette will be shown. When false the palette completely closes."),Object(l.b)("h3",null,"paletteInitialState"),Object(l.b)("p",null,"This can be true or false. false is the default. It set to true the palette will be opened when common canvas first appears to its full (non-narrow) state."),Object(l.b)("h3",null,"emptyCanvasContent"),Object(l.b)("p",null,"This is a JSX or HTML snippet that contains some text or any elements (such as an image) that you want to display when the canvas is empty, that is, when it doesn’t have any nodes or comments. The default behavior if this config parameter is not provided is that common canvas will display an image and message saying: “Your flow is empty!”.\ndropZoneCanvasContent"),Object(l.b)("p",null,"This is a JSX or HTML snippet that contains some text or any elements (such as an image) that you want to display when a data object is dragged from the desktop over the canvas. The default behavior if this config parameter is not provided is that common canvas will display an image and a message saying: “Drop to add to canvas and project”. The content will not be displayed unless the enableDropZoneOnExternalDrag configuration parameter (see above) is set to true."),Object(l.b)("h3",null,"schemaValidation"),Object(l.b)("p",null,"This can be true or false. false is the default. It tells common canvas whether you want pipleineFlow and palette files to be validated against the schema files when they are submitted to the canvas controller. If a validation error is found it is thrown to the calling code. This should probably be set to true only during testing."),Object(l.b)("h3",null,"tipConfig"),Object(l.b)("p",null,"Object that configures whether tips for palette items, nodes, ports or links are enabled (value set to true) or disabled (value set to false). By default, all tips are enabled. The default content of tips can be overwritten by implementing the ",Object(l.b)("a",{href:"/common-canvas/callbacks#tiphandler"},"tipHandler callback"),"."))}m.isMDXComponent=!0},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-common-canvas-config-canvas-config-mdx-66254765c78b68642c64.js.map