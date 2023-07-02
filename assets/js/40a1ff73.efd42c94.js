"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7650],{79874:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var a=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(r),g=o,f=m["".concat(p,".").concat(g)]||m[g]||s[g]||n;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<n;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54378:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});r(93106);var a=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"\u901f\u6765\u56f4\u89c2\uff0c\u4f60\u6700\u671f\u5f85\u7684 Taro \u7279\u6027\u6b63\u5728\u53d1\u5e03",authors:"TJ",tags:["v3"],description:""},u=void 0,p={permalink:"/taro-docs/blog/2022/03/24/Taro-feature",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2022-03-24-Taro-feature.md",source:"@site/blog/2022-03-24-Taro-feature.md",title:"\u901f\u6765\u56f4\u89c2\uff0c\u4f60\u6700\u671f\u5f85\u7684 Taro \u7279\u6027\u6b63\u5728\u53d1\u5e03",description:"",date:"2022-03-24T00:00:00.000Z",formattedDate:"2022\u5e743\u670824\u65e5",tags:[{label:"v3",permalink:"/taro-docs/blog/tags/v-3"}],readingTime:10.61,hasTruncateMarker:!1,authors:[{name:"TJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4",url:"https://github.com/ZakaryCode",imageURL:"https://avatars.githubusercontent.com/u/24262362?v=4",key:"TJ"}],frontMatter:{title:"\u901f\u6765\u56f4\u89c2\uff0c\u4f60\u6700\u671f\u5f85\u7684 Taro \u7279\u6027\u6b63\u5728\u53d1\u5e03",authors:"TJ",tags:["v3"],description:""},prevItem:{title:"\u6210\u4e3a Taro \u793e\u533a\u7684\u4e00\u5458 - \u8d21\u732e\u8005\u664b\u7ea7\u6307\u5357",permalink:"/taro-docs/blog/2022/03/29/Taro-community"},nextItem:{title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.4 \u7248\u672c \u2014\u2014 \u5168\u9762\u652f\u6301 Preact \u548c Vue3.2",permalink:"/taro-docs/blog/2022-01-20-Taro-3.4"}},i={authorsImageUrls:[void 0]},c=[{value:"\u6846\u67b6\u7279\u6027",id:"\u6846\u67b6\u7279\u6027",level:2},{value:"Web \u7aef",id:"web-\u7aef",level:3},{value:"App \u7aef",id:"app-\u7aef",level:3},{value:"\u5c0f\u7a0b\u5e8f",id:"\u5c0f\u7a0b\u5e8f",level:2},{value:"\u63a2\u7d22\u65b0\u7279\u6027",id:"\u63a2\u7d22\u65b0\u7279\u6027",level:3},{value:"\u6df7\u5408\u5f00\u53d1\u80fd\u529b",id:"\u6df7\u5408\u5f00\u53d1\u80fd\u529b",level:3},{value:"\u5f00\u53d1\u4e2d\u6700\u5e38\u7528\u7684 Taro \u7248\u672c\u662f\uff1f",id:"\u5f00\u53d1\u4e2d\u6700\u5e38\u7528\u7684-taro-\u7248\u672c\u662f",level:2},{value:"\u6e10\u8fdb\u5f0f\u6587\u6863\u4e0e\u6559\u7a0b",id:"\u6e10\u8fdb\u5f0f\u6587\u6863\u4e0e\u6559\u7a0b",level:2},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",level:2}],s={toc:c};function m(e){var{components:t}=e,r=n(e,["components"]);return(0,a.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5173\u6ce8 Taro \u8fd1\u671f\u52a8\u6001\u7684\u670b\u53cb\u4eec\u53ef\u80fd\u90fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u793e\u533a\u63a8\u9001\u4e86",(0,a.kt)("a",o({parentName:"p"},{href:"https://wj.qq.com/s2/9739035/9abd/"}),"\u4e00\u4efd\u95ee\u5377"),"\uff0c\u5411\u5404\u4f4d\u5f00\u53d1\u8005\u5f81\u96c6\u5bf9\u4e8e Taro \u5c1a\u5728\u8c03\u7814\u4e2d\uff0c\u6216\u672a\u53d1\u5e03\u5404\u7c7b\u65b0\u7279\u6027\u7684\u5efa\u8bae\uff0c\u77ed\u65f6\u95f4\u5185\u5c31\u6536\u83b7\u975e\u5e38\u591a\u53cd\u9988\uff0c\u8fdc\u8d85\u9884\u671f\u3002"),(0,a.kt)("h2",o({},{id:"\u6846\u67b6\u7279\u6027"}),"\u6846\u67b6\u7279\u6027"),(0,a.kt)("p",null,"\u4f9d\u6258\u4e8e\u5f00\u653e\u5f0f\u8de8\u7aef\u8de8\u6846\u67b6\u67b6\u6784\uff0cTaro \u6846\u67b6\u548c\u751f\u6001\u90fd\u805a\u96c6\u4e86\u5927\u91cf\u7279\u6027\u4f9b\u5f00\u53d1\u8005\u4f7f\u7528\uff0c\u4e0d\u8bba\u662f\u4f7f\u7528 Vue\u3001Preact \u5f00\u53d1\u591a\u7aef\u5e94\u7528\uff0c\u8fd8\u662f\u5404\u79cd\u62d3\u5c55\u63d2\u4ef6\u90fd\u662f\u57fa\u4e8e\u8fd9\u6837\u7684\u67b6\u6784\u5f00\u53d1\u7684\u7279\u6027\u3002\u76ee\u524d\u6211\u4eec\u51c6\u5907\u4e86\u5f88\u591a\u65b0\u7279\u6027\u7684\u7814\u53d1\u65b9\u5411\uff0c\u4f9d\u65e7\u6253\u7b97\u901a\u8fc7\u63d0\u4ea4 ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs"}),"RFC")," \u63d0\u6848\u6765\u8fbe\u6210\u793e\u533a\u5171\u8bc6\uff0c\u5e0c\u671b\u8fd9\u4e9b\u7279\u6027\u662f\u5f00\u53d1\u8005\u5728\u591a\u7aef\u9879\u76ee\u4e2d\u771f\u6b63\u9700\u8981\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-24-Taro-feature/taro-feature.jpeg",alt:"taro-feature.jpeg"}))),(0,a.kt)("p",null,"\u4ece\u6295\u7968\u7ed3\u679c\u6765\u770b\uff0c\u5927\u5bb6\u5bf9\u4e8e Vite \u548c Flutter \u6709\u5f88\u9ad8\u7684\u671f\u5f85\uff0c\u540c\u65f6\u5bf9\u4e8e pnpm \u7684\u652f\u6301\u4e5f\u6709\u5f88\u9ad8\u7684\u9700\u6c42\u3002\u540c\u65f6\u4e5f\u6709\u5f88\u591a\u5f00\u53d1\u8005\u63d0\u5230\u7684\u4e86\u66f4\u591a\u7684\u9700\u6c42\uff0c\u6bd4\u65b9\u8bf4\u652f\u6301 WebComponent API\u3001\u5c0f\u7a0b\u5e8f SSR \u65b9\u6848\uff0cWebpack5\u3001Windi\u3001Tailwind\uff0c\u751a\u81f3\u662f Angular \u7b49\u7b49\uff0c\u8fd9\u4e9b\u7279\u6027\u6709\u7684\u5df2\u7ecf\u5728\u6700\u540e\u7684\u9a8c\u8bc1\u9636\u6bb5\uff0c\u6709\u7684\u5219\u8fd8\u5728\u8c03\u7814\u5f53\u4e2d\uff0c\u4f1a\u5728\u5408\u9002\u7684\u65f6\u5019\u53d1\u5e03\u5230\u793e\u533a\u4e2d\uff0c\u53ef\u4ee5\u8010\u5fc3\u7b49\u5f85\u3002"),(0,a.kt)("h3",o({},{id:"web-\u7aef"}),"Web \u7aef"),(0,a.kt)("p",null,"\u4f5c\u4e3a Taro \u6700\u65e9\u652f\u6301\u7684\u975e\u5c0f\u7a0b\u5e8f\u7aef\uff0cTaro H5 \u4e00\u76f4\u5728\u7a33\u6b65\u7684\u8fed\u4ee3\u5f53\u4e2d\uff0c\u5728\u540c\u6b65\u5c0f\u7a0b\u5e8f\u80fd\u529b\u7684\u540c\u65f6\uff0c\u4e5f\u5728\u4e0d\u65ad\u8865\u5145 Web \u7aef\u751f\u6001\u7684\u80fd\u529b\uff0c\u7c7b\u4f3c\u8def\u7531\u52a8\u753b\u3001\u591a\u9875\u9762\u5e94\u7528\u7b49\u7b49\uff0c\u90fd\u5728\u4e0d\u65ad\u8fed\u4ee3\u7684\u8fc7\u7a0b\u4e2d\u4e00\u4e00\u8865\u9f50\uff0c\u5176\u4ed6\u7684\u7279\u6027\u6bd4\u5982 SSR\u3001\u4e91\u5f00\u53d1\u7b49\u65b9\u6848\uff0c\u6216\u8005\u5907\u53d7\u671f\u5f85\u7684\u81ea\u5b9a\u4e49 TabBar \u4e5f\u90fd\u4f1a\u5728\u540e\u7eed\u7684\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u8865\u5145\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-24-Taro-feature/taro-web.jpeg",alt:"taro-web.jpeg"}))),(0,a.kt)("p",null,"\u5f53\u7136\u5bf9\u4e8e\u5f88\u591a Taro H5 \u4e2d\u672a\u80fd\u540c\u6b65\u7684\u7ec4\u4ef6\u3001API \u7b49\u7b49\uff0c\u4e5f\u5c06\u9010\u4e00\u5bf9\u9f50\uff0c\u4f46\u77ed\u671f\u5185\u5b8c\u6210\u4e5f\u5e76\u4e0d\u73b0\u5b9e\uff0c\u56e0\u6b64\u6211\u4eec\u4f1a\u4f9d\u636e\u793e\u533a\u53cd\u9988\u7684\u9700\u6c42\u6309\u7167\u4f18\u5148\u7ea7\u63d0\u4f9b\u76f8\u5e94\u7684\u80fd\u529b\uff0c\u6bd4\u65b9\u8bf4 CoverView\u3001CoverImage \u7b49\u7b49\u7279\u6027\u5df2\u7ecf\u4e0a\u7ebf\uff0c\u5269\u4e0b\u7684\u8bf8\u5982 MovableArea\u3001MovableView \u3001PickerView\u3001\u652f\u4ed8\u80fd\u529b\u7b49\u7b49\u4e5f\u662f\u5728\u6392\u671f\u4e2d\uff0c\u6709\u7684\u5219\u662f\u5df2\u7ecf\u6709 PR \u7b49\u5f85\u5408\u5e76\u2026\u2026\u540c\u65f6\u4e5f\u6b22\u8fce\u5927\u5bb6\u53c2\u4e0e\u76f8\u5173\u80fd\u529b\u7684\u5171\u5efa\uff0c\u63d0\u5347 Web \u7aef\u80fd\u529b\u7684\u8fb9\u754c\u548c\u5f00\u53d1\u4f53\u9a8c\uff5e"),(0,a.kt)("h3",o({},{id:"app-\u7aef"}),"App \u7aef"),(0,a.kt)("p",null,"App \u7aef\u5f53\u524d\u4f7f\u7528\u7684\u662f RN \u65b9\u6848\uff0c\u95ee\u5377\u63d0\u51fa\u7684\u7279\u6027\u4e5f\u662f\u57fa\u4e8e\u8fd9\u4e00\u65b9\u6848\u8003\u91cf\u7684\uff0c\u76ee\u524d RN \u548c H5\u3001Open Harmony\u3001\u5feb\u5e94\u7528\u90fd\u662f\u7531 Taro \u6280\u672f\u59d4\u5458\u4f1a Hybrid \u5de5\u4f5c\u7ec4\u8d1f\u8d23\uff0cTaro RN \u4e3b\u8981\u7531\u8be5\u5de5\u4f5c\u7ec4\u7684 Owner ",(0,a.kt)("a",o({parentName:"p"},{href:"https://avatars1.githubusercontent.com/u/1876158?s=88&u=0305430cab9f7a516c720e7fc7f8680df1c835b9&v=4"}),"zhiqingchen")," \uff0c\u5176\u4e0e 58 \u540c\u57ce\u7684\u5c0f\u4f19\u4f34\u4e3b\u8981\u8d1f\u8d23\u76f8\u5173\u80fd\u529b\u7684\u67b6\u6784\u4e0e\u7814\u53d1\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-24-Taro-feature/taro-rn.jpeg",alt:"taro-rn.jpeg"}))),(0,a.kt)("p",null,"Taro RN \u76ee\u524d\u4e5f\u5728\u9ad8\u901f\u8fed\u4ee3\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6bcf\u65e5\u76f8\u5173\u7684 Issue \u548c PR \u90fd\u5341\u5206\u6d3b\u8dc3\uff0c\u793e\u533a\u63d0\u4ea4\u7684\u9700\u6c42\u5728\u8bc4\u4f30\u8fc7\u540e\uff0c\u4e5f\u80fd\u5feb\u901f\u76f8\u5e94\u3002\u76ee\u524d\u63d0\u51fa\u7684\u8fd9\u4e9b\u7279\u6027\uff0c\u5728\u5b8c\u6210\u76f8\u5173\u7684\u8bc4\u5ba1\u4e4b\u540e\uff0c\u4e5f\u4f1a\u6309\u7167\u4f18\u5148\u7ea7\u9010\u4e00\u5728\u540e\u7eed\u7248\u672c\u4e2d\u5448\u73b0\u3002"),(0,a.kt)("h2",o({},{id:"\u5c0f\u7a0b\u5e8f"}),"\u5c0f\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5c0f\u7a0b\u5e8f\u751f\u6001\u7684\u6301\u7eed\u6027\u63a2\u7d22\uff0c\u4e00\u76f4\u4ee5\u6765\u90fd\u662f\u6211\u4eec\u524d\u884c\u7684\u65b9\u5411\uff0c\u81ea Taro \u8bde\u751f\u81f3\u4eca\u4ece\u672a\u505c\u6b62\u8fc7\u76f8\u5173\u7684\u63a2\u7d22\uff0c\u5f53\u524d\u7684\u8de8\u7aef\u65b9\u6848\uff0c\u5404\u79cd\u6df7\u5408\u5f00\u53d1\u7684\u80fd\u529b\u7b49\u7b49\u90fd\u662f\u5728\u8fd9\u6761\u8def\u4e0a\u5bfb\u89c5\u6240\u5f97\u3002\u65f6\u81f3 2022 \u5e74\uff0c\u5728\u8fd9\u6761\u8def\u4e0a\u4f9d\u65e7\u672a\u80fd\u7a77\u5c3d\uff0c\u4e5f\u6709\u5f88\u591a\u5f00\u53d1\u8005\u4eec\u7fd8\u9996\u4ee5\u76fc\u7684\u65b0\u7279\u6027\u6b63\u5728\u52aa\u529b\u7814\u53d1\u7684\u8fc7\u7a0b\u4e2d\u3002"),(0,a.kt)("h3",o({},{id:"\u63a2\u7d22\u65b0\u7279\u6027"}),"\u63a2\u7d22\u65b0\u7279\u6027"),(0,a.kt)("p",null,"\u6700\u53d7\u5f00\u53d1\u8005\u4eec\u671f\u5f85\u7684\u662f\u9884\u6e32\u67d3\u9aa8\u67b6\u5c4f\u65b9\u6848\uff1b\u5176\u6b21\u5219\u662f Web Component \u548c History \u8fd9\u4e9b\u6253\u901a Web \u7aef\u80fd\u529b\u7684\u7279\u6027\uff1b\u540c\u6837\u4e5f\u6709\u4e0d\u5728\u5c11\u6570\u7684\u5f00\u53d1\u8005\u5e0c\u671b\u80fd\u591f\u652f\u6301\u5c0f\u7a0b\u5e8f\u7684 wxs \u8bed\u6cd5\u2026\u2026"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-24-Taro-feature/taro-mini.jpeg",alt:"taro-mini.jpeg"}))),(0,a.kt)("h3",o({},{id:"\u6df7\u5408\u5f00\u53d1\u80fd\u529b"}),"\u6df7\u5408\u5f00\u53d1\u80fd\u529b"),(0,a.kt)("p",null,"\u4f7f\u7528\u6df7\u5408\u5f00\u53d1\u80fd\u529b\u6765\u62d3\u5c55\u80fd\u529b\u8fb9\u754c\uff0c\u4e30\u5bcc\u5c0f\u7a0b\u5e8f\u751f\u6001\u9010\u6e10\u6210\u4e3a\u5f88\u591a\u5f00\u53d1\u8005\u7684\u9009\u62e9\u3002Taro \u4e5f\u5728\u591a\u7aef\u751f\u6001\u878d\u5408\u4e2d\uff0c\u6709\u5f88\u591a\u52aa\u529b\u4e0e\u5c1d\u8bd5\uff0c\u6bd4\u65b9\u8bf4 taro-convert \u548c taro-blended \u7b49\u7b49\u90fd\u5728\u5c1d\u8bd5\u6253\u7834\u591a\u7aef\u751f\u6001\u7684\u8fb9\u754c\uff0c\u4f46\u662f\u5728\u6df7\u5408\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u4f9d\u65e7\u6709\u4e0d\u5c11\u6709\u5f85\u5b8c\u5584\u3002"),(0,a.kt)("p",null,"\u5f88\u591a\u5f00\u53d1\u8005\u670b\u53cb\u5bf9\u4e8e Vue \u751f\u6001\u6709\u7740\u5f88\u9ad8\u7684\u9700\u6c42\uff0c\u4e0d\u8bba\u662f\u5fae\u4fe1\u3001\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\uff0c\u8fd8\u662f\u5f00\u53d1\u72ec\u7acb\u5206\u5305\uff0c\u90fd\u6709\u8d85\u8fc7\u4e94\u6210\u7684\u6295\u7968\uff0c\u5728\u4e4b\u540e\u7684\u7814\u53d1\u4e2d\uff0c\u6211\u4eec\u4e5f\u4f1a\u4e0a\u8c03\u76f8\u5173\u7279\u6027\u7684\u4f18\u5148\u7ea7\uff0c\u656c\u8bf7\u671f\u5f85\uff5e"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-24-Taro-feature/taro-mini-plugin.jpeg",alt:"taro-mini-plugin.jpeg"}))),(0,a.kt)("h2",o({},{id:"\u5f00\u53d1\u4e2d\u6700\u5e38\u7528\u7684-taro-\u7248\u672c\u662f"}),"\u5f00\u53d1\u4e2d\u6700\u5e38\u7528\u7684 Taro \u7248\u672c\u662f\uff1f"),(0,a.kt)("p",null,"\u4ece Taro \u6b63\u5f0f\u5f00\u6e90\u7b97\u8d77\uff0c\u6309\u7167\u7248\u672c\u53f7\u53ef\u4ee5\u5206\u6210\u56db\u7c7b\uff0c\u76ee\u524d\u6700\u53d7\u6b22\u8fce\u7684\u662f Taro 3.x\uff0c\u4e5f\u5c31\u662f 20 \u5e74\u56e2\u961f\u63d0\u51fa\u7684\u5f00\u653e\u5f0f\u8de8\u7aef\u8de8\u6846\u67b6\u65b9\u6848\uff0c\u6709\u8d85\u8fc7 90 % \u7684\u5f00\u53d1\u8005\u6b63\u5728\u57fa\u4e8e\u8fd9\u4e2a\u7248\u672c\u5f00\u53d1\u9879\u76ee\uff0c\u5176\u4e2d\u8d85\u8fc7\u4e94\u6210\u5f00\u53d1\u8005\u6b63\u5728\u4f7f\u7528\u6700\u65b0\u7684 3.4 \u7248\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-24-Taro-feature/taro-version.jpeg",alt:"taro-version.jpeg"}))),(0,a.kt)("p",null,"Taro 3 \u65b9\u6848\u53d7\u5230\u793e\u533a\u7684\u5e7f\u6cdb\u63a5\u53d7\u8fd9\u4ef6\u4e8b\uff0c\u8ba9\u56e2\u961f\u5185\u5907\u53d7\u9f13\u821e\uff0c\u5bf9\u4e8e\u65b9\u6848\u80fd\u529b\u4f18\u5316\u4e0e\u8fb9\u754c\u62d3\u5c55\u4e5f\u4e00\u76f4\u662f\u6211\u4eec\u4e0b\u82e6\u529f\u7684\u5730\u65b9\u3002\u5f53\u7136\u4e5f\u6709\u4e0d\u5c11\u5f00\u53d1\u8005\u5728\u95ee\u5377\u4e2d\u8868\u793a\u81ea\u5df1\u8fd8\u6709\u4e00\u4e9b\u9879\u76ee\u6b63\u5728\u4f9d\u8d56 Taro \u7684\u5386\u53f2\u7248\u672c\uff0c\u4e5f\u4e0d\u5fc5\u592a\u8fc7\u62c5\u5fc3\uff0c\u5c3d\u7ba1 Taro \u56e2\u961f\u5df2\u7ecf\u516c\u544a\u8fc7\u6682\u505c\u7ef4\u62a4\u76f8\u5173\u7248\u672c\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e00\u4e9b\u91cd\u5927\u7684\u95ee\u9898\uff0c\u4f9d\u65e7\u4f1a\u53d1\u65b0\u7248\u672c\u4fee\u590d\u3002"),(0,a.kt)("h2",o({},{id:"\u6e10\u8fdb\u5f0f\u6587\u6863\u4e0e\u6559\u7a0b"}),"\u6e10\u8fdb\u5f0f\u6587\u6863\u4e0e\u6559\u7a0b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6587\u6863 & \u89c6\u9891 & \u76f4\u64ad")),(0,a.kt)("p",null,"\u793e\u533a\u5316\u8fd0\u8425\u662f Taro \u5f88\u957f\u65f6\u95f4\u4ee5\u6765\u8ffd\u6c42\u7684\u76ee\u6807\uff0cTaro RFC\u3001Task List \u8fd8\u6709\u8d21\u732e\u8005\u7b49\u673a\u5236\u90fd\u662f\u57fa\u4e8e\u8fd9\u4e00\u8bc9\u6c42\u9010\u6b65\u8bbe\u8ba1\u5b8c\u5584\u7684\u8bbe\u8ba1\u7684\u3002\u4e3a\u4e86\u80fd\u591f\u8fbe\u6210\u8fd9\u4e00\u76ee\u7684\uff0c\u5728\u5404\u7c7b\u6280\u672f\u6587\u7ae0\u548c\u6e10\u8fdb\u5f0f\u6587\u6863\u7b49\u7b49\u4e5f\u6709\u5185\u5bb9\u6301\u7eed\u6027\u8f93\u51fa\u3002\u8fd9\u6b21\u8c03\u7814\u7684\u56db\u4e2a\u65b9\u5411\u4e5f\u662f\u6211\u4eec\u4e00\u76f4\u90fd\u6709\u6587\u7ae0\u8f93\u51fa\u7684\u9886\u57df\uff0c\u5728\u95ee\u5377\u4e2d\u4e5f\u6709\u5f88\u591a\u670b\u53cb\u63d0\u5230\u4e86\u6700\u4f73\u5b9e\u8df5\u3001\u4f53\u79ef\u4f18\u5316\u7b49\u7b49\u76f8\u5173\u7684\u5185\u5bb9\u4e5f\u4f1a\u6574\u7406\u6210\u6587\u7ae0\u6216\u6559\u7a0b\u8f93\u51fa\uff0c\u5927\u5bb6\u5982\u679c\u6709\u66f4\u591a\u60f3\u6cd5\u4e5f\u53ef\u4ee5\u63d0\u51fa\uff0c\u548c Taro \u76f8\u5173\u7684\u6587\u7ae0\u4e5f\u53ef\u4ee5\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Taro \u793e\u533a"),"\u4e2d\u6295\u7a3f\uff0c\u4e30\u5bcc\u793e\u533a\u7684\u52a8\u6001\u8d44\u8baf\u3002"),(0,a.kt)("p",null,"2022 \u5e74\uff0c\u81ea Taro \u5f00\u6e90\u4ee5\u6765\u5df2\u7ecf\u5feb\u8db3\u8db3\u56db\u5e74\uff0c\u76f4\u64ad\u8bfe\u7a0b\u4e5f\u662f\u6211\u4eec\u4e00\u76f4\u60f3\u505a\u4f46\u6ca1\u6709\u8db3\u591f\u4eba\u529b\u53bb\u5b8c\u6210\u7684\u5185\u5bb9\uff0c\u4eca\u5e74\u6211\u4eec\u4f1a\u8003\u8651\u5728\u91cd\u5927\u7248\u672c\u6216\u5176\u4ed6\u5408\u9002\u7684\u65f6\u673a\u53bb\u5b9e\u73b0\u8fd9\u4ef6\u4e8b\u60c5\uff0c\u4fa7\u91cd\u7684\u4e3b\u9898\u8fd8\u4f1a\u518d\u659f\u914c\u601d\u91cf\uff0c\u5982\u679c\u611f\u5174\u8da3\u53ef\u4ee5\u7ee7\u7eed\u5173\u6ce8\u8fd9\u65b9\u9762\u7684\u52a8\u6001\uff0c\u6216\u8005\u5728\u8bc4\u8bba\u533a\u8bf4\u8bf4\u4f60\u4eec\u7684\u770b\u6cd5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",o({parentName:"p"},{src:"https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-24-Taro-feature/taro-edu.jpeg",alt:"taro-edu.jpeg"}))),(0,a.kt)("h2",o({},{id:"\u5199\u5728\u6700\u540e"}),"\u5199\u5728\u6700\u540e"),(0,a.kt)("p",null,"\u5728\u95ee\u5377\u6709\u4e00\u9053\u5f00\u653e\u9898\u4e2d\uff0c\u6211\u4eec\u8be2\u95ee\u4e86\u5927\u5bb6\u5bf9\u4e8e Taro \u7684\u53d1\u5c55\u6709\u4ec0\u4e48\u770b\u6cd5\u548c\u610f\u89c1\uff0c\u76f8\u5f53\u591a\u670b\u53cb\u90fd\u5728\u8fd9\u4e00\u9898\u4e2d\u7559\u8a00\uff0c\u5176\u4e2d\u4e0d\u4e4f\u89c1\u89e3\u6df1\u523b\u7684\u957f\u6587\u89e3\u8bfb\u3002\u6b63\u662f\u8fd9\u4e9b\u6765\u81ea\u5404\u4f4d\u5f00\u53d1\u8005\u670b\u53cb\u4eec\u7684\u770b\u6cd5\uff0c\u8ba9\u6211\u4eec\u5bf9\u4e8e\u793e\u533a\u6709\u4e86\u66f4\u6df1\u523b\u7684\u8ba4\u77e5\uff0c\u540c\u65f6\u4e5f\u610f\u8bc6\u5230\u4e86\u5bf9\u4e8e\u76ee\u524d\u7684 Taro \u6765\u8bf4\uff0c\u5728\u5f88\u591a\u65b9\u9762\u90fd\u6709\u8db3\u591f\u7684\u63d0\u5347\u7a7a\u95f4\uff0c\u8fd9\u4e5f\u8ba9\u6211\u4eec\u786e\u4fe1\u76ee\u524d\u793e\u533a\u524d\u884c\u7684\u65b9\u5411\u662f\u5bf9\u7684\uff0c\u6b63\u6709\u8db3\u591f\u591a\u7684\u540c\u4f34\u548c\u6211\u4eec\u643a\u624b\u5171\u8fdb\u3002"),(0,a.kt)("p",null,"\u6709\u5f88\u591a\u670b\u53cb\u90fd\u63d0\u5230\u4e86 Taro \u5bf9\u4e8e Vue \u751f\u6001\u652f\u6301\u529b\u5ea6\u7684\u4e0d\u8db3\uff0c\u5e0c\u671b\u5728\u4f7f\u7528 Vue \u65f6\u80fd\u83b7\u5f97\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\uff1b\u6211\u4eec\u540c\u6837\u6ce8\u610f\u5230\uff0c\u5f88\u591a\u670b\u53cb\u5e0c\u671b\u6587\u6863\u53ef\u4ee5\u66f4\u52a0\u5b8c\u5584\uff0c\u5bf9\u4e8e\u6846\u67b6\u539f\u7406\u548c\u5404\u4e2a\u7248\u672c\u529f\u80fd\u6709\u66f4\u5168\u9762\u7684\u6307\u5f15\uff0c\u5bf9\u4e8e\u8d21\u732e\u8005\u548c\u5f00\u53d1\u8005\u90fd\u6709\u66f4\u597d\u7684\u4f53\u9a8c\uff1b\u751f\u6001\u4e0d\u591f\u5065\u58ee\uff0c\u7f3a\u5c11\u5f3a\u6709\u529b\u7684\u7814\u53d1\u5de5\u5177\u8f85\u52a9\u5f00\u53d1\uff0c\u5305\u62ec\u53ef\u9760\u7684 UI \u5e93\u7b49\u7b49\u2026\u2026\u8fd9\u4e9b\u95ee\u9898\u4e2d\uff0c\u6709\u5f88\u591a\u90fd\u662f\u6211\u4eec\u6b63\u5728\u52aa\u529b\u63a2\u7d22\u5e76\u89e3\u51b3\u7684\uff0c\u6709\u4e9b\u505a\u5f97\u4e0d\u591f\u7684\u5730\u65b9\u4e5f\u5e0c\u671b\u5927\u5bb6\u53ef\u4ee5\u53c2\u4e0e\u8fdb\u6765\uff0c\u5171\u540c\u4e3a\u793e\u533a\u751f\u6001\u5efa\u8bbe\u51fa\u4e00\u4efd\u529b\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\u4e5f\u6709\u4e9b\u8bb8\u611f\u52a8\uff0c\u5f88\u591a\u5c0f\u4f19\u4f34\u9001\u51fa\u4e86\u5927\u91cf\u7684\u795d\u798f\u548c\u9f13\u52b1\uff0c\u5f88\u611f\u8c22\u5927\u5bb6\u5bf9\u4e8e Taro \u793e\u533a\u7684\u652f\u6301\uff0c\u4e5f\u6b63\u662f\u56e0\u6b64\uff0c\u8fd8\u6709\u5927\u91cf\u8d21\u732e\u8005\u4e3a Taro \u5f00\u6e90\u505a\u51fa\u7684\u52aa\u529b\uff0c\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u8d70\u5230\u4eca\u5929\u3002"),(0,a.kt)("p",null,"\u4eca\u540e\uff0cTaro \u4e5f\u4f1a\u4ee5\u66f4\u52a0\u575a\u5b9a\u7684\u59ff\u6001\u5411\u524d\u8fc8\u8fdb\uff0c\u5927\u5bb6\u6709\u4efb\u4f55\u610f\u89c1\u6216\u95ee\u9898\u90fd\u53ef\u4ee5\u5728\u8bc4\u8bba\u533a\u7559\u4e0b\u81ea\u5df1\u7684\u770b\u6cd5\uff0c\u6bcf\u4e00\u6761\u53cd\u9988\u6211\u4eec\u90fd\u4f1a\u4ed4\u7ec6\u9605\u8bfb\uff0c\u5e0c\u671b\u53ef\u4ee5\u548c\u5927\u5bb6\u4e00\u540c\u89c1\u8bc1 Taro \u793e\u533a\u7684\u7e41\u8363\u3002"))}m.isMDXComponent=!0}}]);