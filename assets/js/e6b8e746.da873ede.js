(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[28],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return g}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=l,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(7294),l=t(944),r=t(6010),o="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,u=39;var s=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,d=e.values,p=e.groupId,g=e.className,m=(0,l.Z)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,b=(0,a.useState)(s),y=b[0],h=b[1],k=a.Children.toArray(e.children),x=[];if(null!=p){var T=f[p];null!=T&&T!==y&&d.some((function(e){return e.value===T}))&&h(T)}var N=function(e){var n=e.currentTarget,t=x.indexOf(n),a=d[t].value;h(a),null!=p&&(v(p,a),setTimeout((function(){var e,t,a,l,r,o,c,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,l=e.bottom,r=e.right,o=window,c=o.innerHeight,u=o.innerWidth,t>=0&&r<=u&&l<=c&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i),setTimeout((function(){return n.classList.remove(i)}),2e3))}),150))},L=function(e){var n,t;switch(e.keyCode){case u:var a=x.indexOf(e.target)+1;t=x[a]||x[0];break;case c:var l=x.indexOf(e.target)-1;t=x[l]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},g)},d.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":y===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:L,onFocus:N,onClick:N},t)}))),n?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},9443:function(e,n,t){"use strict";var a=(0,t(7294).createContext)(void 0);n.Z=a},944:function(e,n,t){"use strict";var a=t(7294),l=t(9443);n.Z=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3121:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return g}});var a=t(2122),l=t(9756),r=(t(7294),t(3905)),o=t(1395),i=t(8215),c=["components"],u={id:"indexing",title:"Indexing functions",sidebar_label:"Indexing",slug:"/api/indexing"},s={unversionedId:"api/indexing",id:"api/indexing",isDocsHomePage:!1,title:"Indexing functions",description:"These function are used for finding the H3 cell index containing coordinates, and for finding the center and boundary of H3 indexes.",source:"@site/docs/api/indexing.mdx",sourceDirName:"api",slug:"/api/indexing",permalink:"/docs/next/api/indexing",editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/indexing.mdx",version:"current",sidebar_label:"Indexing",frontMatter:{id:"indexing",title:"Indexing functions",sidebar_label:"Indexing",slug:"/api/indexing"},sidebar:"someSidebar",previous:{title:"Table of Cell Areas for H3 Resolutions",permalink:"/docs/next/core-library/restable"},next:{title:"Index inspection functions",permalink:"/docs/next/api/inspection"}},d=[{value:"latLngToCell",id:"latlngtocell",children:[]},{value:"cellToLatLng",id:"celltolatlng",children:[]},{value:"cellToBoundary",id:"celltoboundary",children:[]}],p={toc:d};function g(e){var n=e.components,t=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These function are used for finding the H3 cell index containing coordinates, and for finding the center and boundary of H3 indexes."),(0,r.kt)("h2",{id:"latlngtocell"},"latLngToCell"),(0,r.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"H3Error latLngToCell(const LatLng *g, int res, H3Index *out);\n"))),(0,r.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.latlng_to_cell(lat, lng, resolution)\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"long latLngToCell(double lat, double lng, int res);\nString latLngToCellAddress(double lat, double lng, int res);\n"))),(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.latLngToCell(lat, lng, res)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const lat = 45;\n  const lng = 40;\n  const res = 2;\n  return h3.latLngToCell(lat, lng, res);\n}\n")))),(0,r.kt)("p",null,"Indexes the location at the specified resolution, returning the index of the cell containing the location."),(0,r.kt)("p",null,"Returns 0 (",(0,r.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,r.kt)("h2",{id:"celltolatlng"},"cellToLatLng"),(0,r.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"H3Error cellToLatLng(H3Index cell, LatLng *g);\n"))),(0,r.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_latlng(cell)\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"LatLng cellToLatLng(long cell);\nLatLng cellToLatLng(String cellAddress);\n"))),(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.cellToLatLng(cell)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToLatLng(cell);\n}\n")))),(0,r.kt)("p",null,"Finds the centroid of the cell."),(0,r.kt)("p",null,"Returns 0 (",(0,r.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,r.kt)("h2",{id:"celltoboundary"},"cellToBoundary"),(0,r.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"H3Error cellToBoundary(H3Index cell, CellBoundary *bndry);\n"))),(0,r.kt)(i.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_boundary(cell, geo_json=False)\n"))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<LatLng> cellToBoundary(long cell);\nList<LatLng> cellToBoundary(String cellAddress);\n"))),(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.cellToBoundary(cell, [formatAsGeoJson])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToBoundary(cell);\n}\n")))),(0,r.kt)("p",null,"Finds the boundary of the cell."),(0,r.kt)("p",null,"Returns 0 (",(0,r.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."))}g.isMDXComponent=!0},6010:function(e,n,t){"use strict";function a(e){var n,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(l&&(l+=" "),l+=t);else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}function l(){for(var e,n,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(l&&(l+=" "),l+=n);return l}t.d(n,{Z:function(){return l}})}}]);