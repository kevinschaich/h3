(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,n,a){"use strict";a.d(n,"a",(function(){return g})),a.d(n,"b",(function(){return p}));var t=a(0),i=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),b=function(e){var n=i.a.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},g=function(e){var n=b(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),g=b(a),s=t,p=g["".concat(l,".").concat(s)]||g[s]||u[s]||r;return a?i.a.createElement(p,o(o({ref:n},d),{},{components:a})):i.a.createElement(p,o({ref:n},d))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},116:function(e,n,a){"use strict";function t(e){var n,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(a=t(e[n]))&&(i&&(i+=" "),i+=a);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(n=t(e))&&(i&&(i+=" "),i+=n);return i}},118:function(e,n,a){"use strict";var t=a(0),i=a(119);n.a=function(){var e=Object(t.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,n,a){"use strict";var t=a(0),i=Object(t.createContext)(void 0);n.a=i},120:function(e,n,a){"use strict";var t=a(0),i=a.n(t),r=a(118),l=a(116),o=a(54),c=a.n(o);var d=37,b=39;n.a=function(e){var n=e.lazy,a=e.block,o=e.defaultValue,g=e.values,u=e.groupId,s=e.className,p=Object(r.a)(),m=p.tabGroupChoices,v=p.setTabGroupChoices,j=Object(t.useState)(o),f=j[0],h=j[1],O=t.Children.toArray(e.children),x=[];if(null!=u){var y=m[u];null!=y&&y!==f&&g.some((function(e){return e.value===y}))&&h(y)}var I=function(e){var n=e.target,a=x.indexOf(n),t=O[a].props.value;h(t),null!=u&&(v(u,t),setTimeout((function(){var e,a,t,i,r,l,o,d;(e=n.getBoundingClientRect(),a=e.top,t=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,d=l.innerWidth,a>=0&&r<=d&&i<=o&&t>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c.a.tabItemActive),setTimeout((function(){return n.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var n,a;switch(e.keyCode){case b:var t=x.indexOf(e.target)+1;a=x[t]||x[0];break;case d:var i=x.indexOf(e.target)-1;a=x[i]||x[x.length-1]}null===(n=a)||void 0===n||n.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},s)},g.map((function(e){var n=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:I,onClick:I},a)}))),n?Object(t.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(t.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},121:function(e,n,a){"use strict";var t=a(0),i=a.n(t);n.a=function(e){var n=e.children,a=e.hidden,t=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:t},n)}},78:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return d})),a.d(n,"default",(function(){return g}));var t=a(3),i=(a(0),a(115)),r=a(120),l=a(121);const o={id:"uniedge",title:"Unidirectional edge functions",sidebar_label:"Unidirectional edges",slug:"/api/uniedge"},c={unversionedId:"api/uniedge",id:"api/uniedge",isDocsHomePage:!1,title:"Unidirectional edge functions",description:"Unidirectional edges allow encoding the directed edge from one cell to a neighboring cell.",source:"@site/docs/api/uniedge.mdx",slug:"/api/uniedge",permalink:"/docs/api/uniedge",editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/uniedge.mdx",version:"current",sidebar_label:"Unidirectional edges",sidebar:"someSidebar",previous:{title:"Region functions",permalink:"/docs/api/regions"},next:{title:"Miscellaneous H3 functions",permalink:"/docs/api/misc"}},d=[{value:"h3IndexesAreNeighbors",id:"h3indexesareneighbors",children:[]},{value:"getH3UnidirectionalEdge",id:"geth3unidirectionaledge",children:[]},{value:"h3UnidirectionalEdgeIsValid",id:"h3unidirectionaledgeisvalid",children:[]},{value:"getOriginH3IndexFromUnidirectionalEdge",id:"getoriginh3indexfromunidirectionaledge",children:[]},{value:"getDestinationH3IndexFromUnidirectionalEdge",id:"getdestinationh3indexfromunidirectionaledge",children:[]},{value:"getH3IndexesFromUnidirectionalEdge",id:"geth3indexesfromunidirectionaledge",children:[]},{value:"getH3UnidirectionalEdgesFromHexagon",id:"geth3unidirectionaledgesfromhexagon",children:[]},{value:"getH3UnidirectionalEdgeBoundary",id:"geth3unidirectionaledgeboundary",children:[]}],b={toc:d};function g({components:e,...n}){return Object(i.b)("wrapper",Object(t.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Unidirectional edges allow encoding the directed edge from one cell to a neighboring cell."),Object(i.b)("h2",{id:"h3indexesareneighbors"},"h3IndexesAreNeighbors"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int h3IndexesAreNeighbors(H3Index origin, H3Index destination);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_indexes_are_neighbors(origin, destination)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"boolean h3IndexesAreNeighbors(long origin, long destination);\nboolean h3IndexesAreNeighbors(String origin, String destination);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.h3IndexesAreNeighbors(origin, destination)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const origin = '85283473fffffff';\n  const destination = '85283477fffffff';\n  return String(h3.h3IndexesAreNeighbors(origin, destination));\n}\n")))),Object(i.b)("p",null,"Returns whether or not the provided H3Indexes are neighbors."),Object(i.b)("p",null,"Returns 1 if the indexes are neighbors, 0 otherwise."),Object(i.b)("h2",{id:"geth3unidirectionaledge"},"getH3UnidirectionalEdge"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"H3Index getH3UnidirectionalEdge(H3Index origin, H3Index destination);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.get_h3_unidirectional_edge(origin, destination)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"long getH3UnidirectionalEdge(long origin, long destination);\nString getH3UnidirectionalEdge(String origin, String destination);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.getH3UnidirectionalEdge(h3Index)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const origin = '85283473fffffff';\n  const destination = '85283477fffffff';\n  return h3.getH3UnidirectionalEdge(origin, destination);\n}\n")))),Object(i.b)("p",null,"Returns a unidirectional edge H3 index based on the provided origin and\ndestination."),Object(i.b)("p",null,"Returns 0 on error."),Object(i.b)("h2",{id:"h3unidirectionaledgeisvalid"},"h3UnidirectionalEdgeIsValid"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"int h3UnidirectionalEdgeIsValid(H3Index edge);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.h3_unidirectional_edge_is_valid(edge)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"boolean h3UnidirectionalEdgeIsValid(long edge);\nboolean h3UnidirectionalEdgeIsValid(String edgeAddress);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.h3UnidirectionalEdgeIsValid(edge)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return String(h3.h3UnidirectionalEdgeIsValid(edge));\n}\n")))),Object(i.b)("p",null,"Determines if the provided H3Index is a valid unidirectional edge index."),Object(i.b)("p",null,"Returns 1 if it is a unidirectional edge H3Index, otherwise 0."),Object(i.b)("h2",{id:"getoriginh3indexfromunidirectionaledge"},"getOriginH3IndexFromUnidirectionalEdge"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"H3Index getOriginH3IndexFromUnidirectionalEdge(H3Index edge);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.get_origin_h3_index_from_unidirectional_edge(edge)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"long getOriginH3IndexFromUnidirectionalEdge(long edge);\nString getOriginH3IndexFromUnidirectionalEdge(String edgeAddress);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.getOriginH3IndexFromUnidirectionalEdge(h3Index)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.getOriginH3IndexFromUnidirectionalEdge(edge);\n}\n")))),Object(i.b)("p",null,"Returns the origin hexagon from the unidirectional edge H3Index."),Object(i.b)("h2",{id:"getdestinationh3indexfromunidirectionaledge"},"getDestinationH3IndexFromUnidirectionalEdge"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"H3Index getDestinationH3IndexFromUnidirectionalEdge(H3Index edge);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.get_destination_h3_index_from_unidirectional_edge(edge)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"long getDestinationH3IndexFromUnidirectionalEdge(long edge);\nString getDestinationH3IndexFromUnidirectionalEdge(String edgeAddress);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.getDestinationH3IndexFromUnidirectionalEdge(edge)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.getDestinationH3IndexFromUnidirectionalEdge(edge);\n}\n")))),Object(i.b)("p",null,"Returns the destination hexagon from the unidirectional edge H3Index."),Object(i.b)("h2",{id:"geth3indexesfromunidirectionaledge"},"getH3IndexesFromUnidirectionalEdge"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"void getH3IndexesFromUnidirectionalEdge(H3Index edge, H3Index* originDestination);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.get_h3_indexes_from_unidirectional_edge(edge)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<Long> getH3IndexesFromUnidirectionalEdge(long edge);\nList<String> getH3IndexesFromUnidirectionalEdge(String edgeAddress);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.getH3IndexesFromUnidirectionalEdge(edge)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.getH3IndexesFromUnidirectionalEdge(edge);\n}\n")))),Object(i.b)("p",null,"Returns the origin, destination pair of hexagon IDs for the given edge ID, which are placed at ",Object(i.b)("inlineCode",{parentName:"p"},"originDestination[0]")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"originDestination[1]")," respectively."),Object(i.b)("h2",{id:"geth3unidirectionaledgesfromhexagon"},"getH3UnidirectionalEdgesFromHexagon"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"void getH3UnidirectionalEdgesFromHexagon(H3Index origin, H3Index* edges);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.get_h3_unidirectional_edges_from_hexagon(h)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<Long> getH3UnidirectionalEdgesFromHexagon(long h3);\nList<String> getH3UnidirectionalEdgesFromHexagon(String h3);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.getH3UnidirectionalEdgesFromHexagon(h3Index)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  return h3.getH3UnidirectionalEdgesFromHexagon(h);\n}\n")))),Object(i.b)("p",null,"Provides all of the unidirectional edges from the current H3Index. ",Object(i.b)("inlineCode",{parentName:"p"},"edges")," must be of length 6,\nand the number of undirectional edges placed in the array may be less than 6."),Object(i.b)("h2",{id:"geth3unidirectionaledgeboundary"},"getH3UnidirectionalEdgeBoundary"),Object(i.b)(r.a,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"c",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},"void getH3UnidirectionalEdgeBoundary(H3Index edge, GeoBoundary* gb);\n"))),Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-py"},"h3.get_h3_unidirectional_edge_boundary(edge, geo_json=False)\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"List<GeoCoord> getH3UnidirectionalEdgeBoundary(long edge);\nList<GeoCoord> getH3UnidirectionalEdgeBoundary(String edgeAddress);\n"))),Object(i.b)(l.a,{value:"javascript",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"h3.getH3UnidirectionalEdgeBoundary(edge, [formatAsGeoJson])\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const edge = '115283473fffffff';\n  return h3.getH3UnidirectionalEdgeBoundary(edge);\n}\n")))),Object(i.b)("p",null,"Provides the coordinates defining the unidirectional edge."))}g.isMDXComponent=!0}}]);