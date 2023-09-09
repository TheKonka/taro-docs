"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[57470],{79874:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,d=m["".concat(p,".").concat(u)]||m[u]||f[u]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88379:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.getPerformance()",sidebar_label:"getPerformance"},c=void 0,p={unversionedId:"apis/base/performance/getPerformance",id:"apis/base/performance/getPerformance",title:"Taro.getPerformance()",description:"\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u4e0a\u62a5\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u3002 \u8be6\u60c5\u53c2\u89c1\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u6307\u5357\u3002",source:"@site/docs/apis/base/performance/getPerformance.md",sourceDirName:"apis/base/performance",slug:"/apis/base/performance/getPerformance",permalink:"/taro-docs/docs/next/apis/base/performance/getPerformance",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/performance/getPerformance.md",tags:[],version:"current",frontMatter:{title:"Taro.getPerformance()",sidebar_label:"getPerformance"},sidebar:"API",previous:{title:"preloadAssets",permalink:"/taro-docs/docs/next/apis/base/performance/preloadAssets"},next:{title:"EntryList",permalink:"/taro-docs/docs/next/apis/base/performance/EntryList"}},s={},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],f={toc:l};function m(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u6d4b\u901f\u4e0a\u62a5\u3002\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u914d\u7f6e\u3002 \u8be6\u60c5\u53c2\u89c1",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/index.html"}),"\u5c0f\u7a0b\u5e8f\u6d4b\u901f"),"\u6307\u5357\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\uff0c\u5f53\u5f00\u542f\u4ee3\u7801 ",(0,n.kt)("a",a({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html"}),"\u6309\u9700\u6ce8\u5165")," ",(0,n.kt)("inlineCode",{parentName:"li"},"\u65f6\uff0cevaluateScript")," \u5c06\u4ec5\u5305\u542b\u516c\u6709\u90e8\u5206\u4ee3\u7801\uff0c\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u4ee3\u7801\u6ce8\u5165\u7684\u65f6\u95f4\u4f1a\u5305\u542b\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"firstRender")," \u4e2d\uff08\u56e0\u4e3a\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u4ee3\u7801\u6ce8\u5165\u8fc7\u7a0b\u6210\u4e3a\u4e86\u9996\u6b21\u6e32\u67d3\u8fc7\u7a0b\u7684\u4e00\u90e8\u5206\uff09\u3002\u56e0\u6b64\u5f00\u542f\u6309\u9700\u6ce8\u5165\u540e\uff0c\u811a\u672c\u8017\u65f6\u964d\u4f4e\uff0c\u6e32\u67d3\u65f6\u95f4\u63d0\u9ad8\u5c5e\u4e8e\u6b63\u5e38\u73b0\u8c61\uff0c\u4f18\u5316\u6548\u679c\u53ef\u4ee5\u5173\u6ce8\u6574\u4f53\u542f\u52a8\u8017\u65f6\uff08",(0,n.kt)("inlineCode",{parentName:"li"},"appLaunch"),"\uff09\u6765\u8bc4\u4f30\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"firstPaint")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"firstContentfulPaint")," \u6307\u6807\u5728\u5f00\u542f ",(0,n.kt)("inlineCode",{parentName:"li"},"vconsole")," \u7684\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u7ed8\u5236 ",(0,n.kt)("inlineCode",{parentName:"li"},"vconsoel")," \u7684\u9762\u677f\uff0c\u4f1a\u5bfc\u81f4\u6570\u636e\u63d0\u524d\u3002")),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(72369).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u6296\u97f3\u5c0f\u7a0b\u5e8f",src:r(58939).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(83190).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(519).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(75e3).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.getPerformance.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => Performance\n")),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const performance = Taro.getPerformance()\nconst observer = performance.createObserver((entryList) => {\n  console.log(entryList.getEntries())\n})\nobserver.observe({ entryTypes: ['render', 'script', 'navigation'] })\n")))}m.isMDXComponent=!0},83190:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},75e3:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},519:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},58939:function(e,t,r){t.Z=r.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},72369:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);