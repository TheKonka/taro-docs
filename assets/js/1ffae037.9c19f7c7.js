"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48112],{79874:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(93106);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,g=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},64931:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});t(93106);var n=t(79874);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={slug:"2019-03-12-mini-program-framework-full-review",title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",authors:"yuche",tags:["v1"]},c=void 0,l={permalink:"/taro-docs/blog/2019-03-12-mini-program-framework-full-review",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2019-03-12-mini-program-framework-full-review.md",source:"@site/blog/2019-03-12-mini-program-framework-full-review.md",title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",description:"image",date:"2019-03-12T00:00:00.000Z",formattedDate:"2019\u5e743\u670812\u65e5",tags:[{label:"v1",permalink:"/taro-docs/blog/tags/v-1"}],readingTime:17.285,hasTruncateMarker:!0,authors:[{name:"yuche",title:"Taro \u8363\u8a89\u6280\u672f\u59d4\u5458\u4f1a\u4e3b\u5e2d",url:"https://github.com/yuche",imageURL:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800",key:"yuche"}],frontMatter:{slug:"2019-03-12-mini-program-framework-full-review",title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",authors:"yuche",tags:["v1"]},prevItem:{title:"Taro 1.3 \u9707\u64bc\u5347\u7ea7\uff1a\u5168\u9762\u652f\u6301 JSX \u8bed\u6cd5\u548c HOOKS",permalink:"/taro-docs/blog/2019-06-13-taro-1-3"},nextItem:{title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",permalink:"/taro-docs/blog/2019-02-28-taro-h5-optimize"}},u={authorsImageUrls:[void 0]},p=[],f={toc:p};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},f,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",o({parentName:"p"},{src:"https://storage.jd.com/taro-resource/review.jpg",alt:"image"}))),(0,n.kt)("p",null,"\u6700\u8fd1\u524d\u7aef\u5c4a\u591a\u7aef\u6846\u67b6\u9891\u51fa\uff0c\u76f8\u4fe1\u5f88\u591a\u6709\u4ee3\u7801\u591a\u7aef\u8fd0\u884c\u9700\u6c42\u7684\u5f00\u53d1\u8005\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e9b\u7591\u60d1\uff1a\u8fd9\u4e9b\u6846\u67b6\u90fd\u6709\u4ec0\u4e48\u4f18\u7f3a\u70b9\uff1f\u5230\u5e95\u5e94\u8be5\u7528\u54ea\u4e2a\uff1f"),(0,n.kt)("p",null,"\u4f5c\u4e3a Taro \u5f00\u53d1\u56e2\u961f\u4e00\u5458\uff0c\u7b14\u8005\u60f3\u5728\u672c\u6587\u5c3d\u91cf\u7ad9\u5728\u4e00\u4e2a\u5ba2\u89c2\u516c\u6b63\u7684\u89d2\u5ea6\u53bb\u8bc4\u4ef7\u5404\u4e2a\u6846\u67b6\u7684\u9009\u578b\u548c\u4f18\u52a3\u3002\u4f46\u5ba5\u4e8e\u5229\u76ca\u76f8\u5173\uff0c\u672c\u6587\u7684\u89c2\u70b9\u5f88\u53ef\u80fd\u662f\u5e26\u6709\u504f\u5411\u6027\u7684\uff0c\u5927\u5bb6\u53ef\u4ee5\u5e26\u7740\u6279\u5224\u7684\u773c\u5149\u53bb\u770b\u5f85\uff0c\u6743\u5f53\u629b\u7816\u5f15\u7389\u3002"),(0,n.kt)("p",null,"\u90a3\u4e48\uff0c\u5f53\u6211\u4eec\u5728\u8ba8\u8bba\u591a\u7aef\u6846\u67b6\u65f6\uff0c\u6211\u4eec\u5728\u8c08\u8bba\u4ec0\u4e48\uff1a"))}s.isMDXComponent=!0}}]);