"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13344],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),v=a,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Taro.createCanvasContext(canvasId, component)",sidebar_label:"createCanvasContext"},i=void 0,s={unversionedId:"apis/canvas/createCanvasContext",id:"version-3.x/apis/canvas/createCanvasContext",title:"Taro.createCanvasContext(canvasId, component)",description:"Creates a CanvasContext object.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/canvas/createCanvasContext.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/createCanvasContext",permalink:"/taro-docs/en/docs/apis/canvas/createCanvasContext",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/canvas/createCanvasContext.md",tags:[],version:"3.x",frontMatter:{title:"Taro.createCanvasContext(canvasId, component)",sidebar_label:"createCanvasContext"},sidebar:"API",previous:{title:"createOffscreenCanvas",permalink:"/taro-docs/en/docs/apis/canvas/createOffscreenCanvas"},next:{title:"canvasToTempFilePath",permalink:"/taro-docs/en/docs/apis/canvas/canvasToTempFilePath"}},l={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"API Support",id:"api-support",level:2}],u={toc:p};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creates a ",(0,r.kt)("a",a({parentName:"p"},{href:"/taro-docs/en/docs/apis/canvas/CanvasContext"}),"CanvasContext")," object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip"),": The canvasId needs to be specified, the drawing context only works on the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"<canvas/>"),"; in addition, you need to execute it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useReady")," callback in the web side, otherwise it will get the CanvasContext before the underlying canvas is rendered, resulting in the underlying context being ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," and thus can't draw properly."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/wx.createCanvasContext.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(canvasId: string, component?: Record<string, any>) => CanvasContext\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"canvasId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The canvas-id property of the ",(0,r.kt)("code",null,"canvas")," component whose context needs to be obtained.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"component"),(0,r.kt)("td",null,(0,r.kt)("code",null,"Record<string, any>")),(0,r.kt)("td",null,'In a custom component, the "this" of the current component instance means to search for the canvas with the canvas-id in this custom component. If this parameter is not specified, no search is performed in any custom component.')))),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.createCanvasContext"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);