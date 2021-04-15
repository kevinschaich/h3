(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(r),m=n,u=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?a.a.createElement(u,c(c({ref:t},l),{},{components:r})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=(r(0),r(115));const i={id:"coordsystems",title:"Coordinate systems",sidebar_label:"Coordinate systems",slug:"/core-library/coordsystems"},o={unversionedId:"core-library/coordsystems",id:"core-library/coordsystems",isDocsHomePage:!1,title:"Coordinate systems",description:"The H3 Core Library uses the following coordinate systems internally.",source:"@site/docs/core-library/coordsystems.md",slug:"/core-library/coordsystems",permalink:"/docs/core-library/coordsystems",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/coordsystems.md",version:"current",sidebar_label:"Coordinate systems",sidebar:"someSidebar",previous:{title:"H3 Index Representations",permalink:"/docs/core-library/h3Indexing"},next:{title:"Creating bindings for H3",permalink:"/docs/core-library/creating-bindings"}},c=[{value:"IJK Coordinates",id:"ijk-coordinates",children:[]},{value:"FaceIJK Coordinates",id:"faceijk-coordinates",children:[]},{value:"Hex2d Coordinates",id:"hex2d-coordinates",children:[]},{value:"Local IJ Coordinates",id:"local-ij-coordinates",children:[]}],s={toc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The H3 Core Library uses the following coordinate systems internally."),Object(a.b)("h2",{id:"ijk-coordinates"},"IJK Coordinates"),Object(a.b)("p",null,"Discrete hexagon planar grid systems naturally have 3 coordinate axes spaced 120","\xb0"," apart. We refer to such a system as an ",Object(a.b)("em",{parentName:"p"},"ijk coordinate system"),", for the three coordinate axes ",Object(a.b)("em",{parentName:"p"},"i"),", ",Object(a.b)("em",{parentName:"p"},"j"),", and ",Object(a.b)("em",{parentName:"p"},"k"),". A single ",Object(a.b)("em",{parentName:"p"},"ijk")," coordinate triplet is represented in the H3 Core Library using the structure type ",Object(a.b)("inlineCode",{parentName:"p"},"CoordIJK"),"."),Object(a.b)("p",null,"Using an ",Object(a.b)("em",{parentName:"p"},"ijk")," coordinate system to address hexagon grid cells provides multiple valid addresses for each cell. ",Object(a.b)("em",{parentName:"p"},"Normalizing")," an ",Object(a.b)("em",{parentName:"p"},"ijk")," address (function ",Object(a.b)("inlineCode",{parentName:"p"},"_ijkNormalize"),") creates a unique address consisting of the minimal positive ",Object(a.b)("em",{parentName:"p"},"ijk")," components; this always results in at most two non-zero components."),Object(a.b)("div",{align:"center"},Object(a.b)("img",{height:"300",src:"/images/ijkp.png"})),Object(a.b)("h2",{id:"faceijk-coordinates"},"FaceIJK Coordinates"),Object(a.b)("p",null,"The H3 Core Library centers an ",Object(a.b)("em",{parentName:"p"},"ijk")," coordinate system on each face of the icosahedron; the combination of a face number and ",Object(a.b)("em",{parentName:"p"},"ijk")," coordinates on that face's coordinate system is represented using the structure type ",Object(a.b)("inlineCode",{parentName:"p"},"FaceIJK"),"."),Object(a.b)("p",null,"Each grid resolution is rotated ~19.1","\xb0"," relative to the next coarser resolution. The rotation alternates between counterclockwise and clockwise at each successive resolution, so that each resolution will have one of two possible orientations: ",Object(a.b)("em",{parentName:"p"},"Class II")," or ",Object(a.b)("em",{parentName:"p"},"Class III")," (using a terminology coined by R. Buckminster Fuller). The base cells, which make up resolution 0, are ",Object(a.b)("em",{parentName:"p"},"Class II"),"."),Object(a.b)("div",{align:"center"},Object(a.b)("img",{height:"300",src:"/images/classII.III.png"})),Object(a.b)("h2",{id:"hex2d-coordinates"},"Hex2d Coordinates"),Object(a.b)("p",null,"A ",Object(a.b)("em",{parentName:"p"},"Hex2d")," coordinate system is a cartesian coordinate system associated with a specific ",Object(a.b)("em",{parentName:"p"},"ijk")," coordinate system, where:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the origin of the ",Object(a.b)("em",{parentName:"li"},"Hex2d")," system is centered on the origin cell of the ",Object(a.b)("em",{parentName:"li"},"ijk")," system, "),Object(a.b)("li",{parentName:"ul"},"the positive ",Object(a.b)("em",{parentName:"li"},"x"),"-axis of the ",Object(a.b)("em",{parentName:"li"},"Hex2d")," system is aligned with the ",Object(a.b)("em",{parentName:"li"},"i"),"-axis of the ",Object(a.b)("em",{parentName:"li"},"ijk")," system, and"),Object(a.b)("li",{parentName:"ul"},"1.0 unit distance in the ",Object(a.b)("em",{parentName:"li"},"Hex2d")," system is the distance between adjacent cell centers in the ",Object(a.b)("em",{parentName:"li"},"ijk")," coordinate system.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Hex2d")," coordinates are represented using the structure type ",Object(a.b)("inlineCode",{parentName:"p"},"Vec2d"),"."),Object(a.b)("h2",{id:"local-ij-coordinates"},"Local IJ Coordinates"),Object(a.b)("p",null,"Algorithms working with hexagons may want to refer to grid coordinates that are not interrupted by base cells or faces. These coordinates have 2 coordinate axes spaced 120","\xb0"," apart, with the coordinates anchored by an ",Object(a.b)("em",{parentName:"p"},"origin")," H3 index."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"local coordinates are only comparable when they have the same ",Object(a.b)("em",{parentName:"li"},"origin")," index."),Object(a.b)("li",{parentName:"ul"},"local coordinates are only valid near the ",Object(a.b)("em",{parentName:"li"},"origin"),". Pratically, this is within the same base cell or a neighboring base cell, except for pentagons."),Object(a.b)("li",{parentName:"ul"},"the coordinate space may have deleted or warped regions due to pentagon distortion."),Object(a.b)("li",{parentName:"ul"},"there may be multiple coordinates for the same index, with the same ",Object(a.b)("em",{parentName:"li"},"origin"),"."),Object(a.b)("li",{parentName:"ul"},"the ",Object(a.b)("em",{parentName:"li"},"origin")," may not be at ",Object(a.b)("inlineCode",{parentName:"li"},"(0, 0)")," in the local coordinate space.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Local IJ")," coordinates are represented using the structure type ",Object(a.b)("inlineCode",{parentName:"p"},"CoordIJ")," and an associated ",Object(a.b)("em",{parentName:"p"},"origin")," ",Object(a.b)("inlineCode",{parentName:"p"},"H3Index"),"."))}l.isMDXComponent=!0}}]);