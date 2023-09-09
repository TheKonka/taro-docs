"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[63638],{79874:function(t,e,l){l.d(e,{Zo:function(){return c},kt:function(){return p}});var n=l(93106);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},c=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(l),p=r,m=s["".concat(i,".").concat(p)]||s[p]||k[p]||a;return l?n.createElement(m,u(u({ref:e},c),{},{components:l})):n.createElement(m,u({ref:e},c))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,u=new Array(a);u[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,u[1]=o;for(var d=2;d<a;d++)u[d]=l[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},13524:function(t,e,l){l.r(e),l.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}const u={title:"Taro.chooseMedia(option)",sidebar_label:"chooseMedia"},o=void 0,i={unversionedId:"apis/media/image/chooseMedia",id:"version-2.x/apis/media/image/chooseMedia",title:"Taro.chooseMedia(option)",description:"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002",source:"@site/versioned_docs/version-2.x/apis/media/image/chooseMedia.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/chooseMedia",permalink:"/taro-docs/en/docs/2.x/apis/media/image/chooseMedia",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/media/image/chooseMedia.md",tags:[],version:"2.x",frontMatter:{title:"Taro.chooseMedia(option)",sidebar_label:"chooseMedia"}},d={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"ChooseMedia",id:"choosemedia",level:3},{value:"mediaType",id:"mediatype",level:3},{value:"sourceType",id:"sourcetype",level:3},{value:"camera",id:"camera",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],k={toc:c};function s(t){var{components:e}=t,l=a(t,["components"]);return(0,n.kt)("wrapper",r({},k,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"count"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u7684\u6587\u4ef6\u4e2a\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"mediaType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("video" | "image")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u6587\u4ef6\u7c7b\u578b")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"sourceType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("album" | "camera")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u56fe\u7247\u548c\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"maxDuration"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002\u65f6\u95f4\u8303\u56f4\u4e3a 3s \u81f3 30s \u4e4b\u95f4")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"sizeType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("original" | "compressed")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u4ec5\u5bf9 mediaType \u4e3a image \u65f6\u6709\u6548\uff0c\u662f\u5426\u538b\u7f29\u6240\u9009\u6587\u4ef6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"camera"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u4ec5\u5728 sourceType \u4e3a camera \u65f6\u751f\u6548\uff0c\u4f7f\u7528\u524d\u7f6e\u6216\u540e\u7f6e\u6444\u50cf\u5934")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFiles"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ChooseMedia[]")),(0,n.kt)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"type"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u6709\u6548\u503c\u6709 image \u3001video")))),(0,n.kt)("h3",r({},{id:"choosemedia"}),"ChooseMedia"),(0,n.kt)("p",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5217\u8868"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFilePath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u8def\u5f84 (\u672c\u5730\u8def\u5f84)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"size"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u672c\u5730\u4e34\u65f6\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d B")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"duration"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"height"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u89c6\u9891\u7684\u9ad8\u5ea6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"width"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"\u89c6\u9891\u7684\u5bbd\u5ea6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"thumbTempFilePath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u89c6\u9891\u7f29\u7565\u56fe\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")))),(0,n.kt)("h3",r({},{id:"mediatype"}),"mediaType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"video"),(0,n.kt)("td",null,"\u53ea\u80fd\u62cd\u6444\u89c6\u9891\u6216\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"image"),(0,n.kt)("td",null,"\u53ea\u80fd\u62cd\u6444\u56fe\u7247\u6216\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247")))),(0,n.kt)("h3",r({},{id:"sourcetype"}),"sourceType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"album"),(0,n.kt)("td",null,"\u4ece\u76f8\u518c\u9009\u62e9")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"camera"),(0,n.kt)("td",null,"\u4f7f\u7528\u76f8\u673a\u62cd\u6444")))),(0,n.kt)("h3",r({},{id:"camera"}),"camera"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"back"),(0,n.kt)("td",null,"\u4f7f\u7528\u540e\u7f6e\u6444\u50cf\u5934")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"front"),(0,n.kt)("td",null,"\u4f7f\u7528\u524d\u7f6e\u6444\u50cf\u5934")))),(0,n.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseMedia({\n  count: 9,\n  mediaType: ['image','video'],\n  sourceType: ['album', 'camera'],\n  maxDuration: 30,\n  camera: 'back',\n  success: (res) => {\n    console.log(res.tempFiles)\n    console.log(res.type)\n  }\n})\n")),(0,n.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.chooseMedia"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);