"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59360],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return n?a.createElement(m,l(l({ref:e},p),{},{components:n})):a.createElement(m,l({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78177:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const l={title:"Taro.onLocationChange(callback)",sidebar_label:"onLocationChange"},c=void 0,i={unversionedId:"apis/location/onLocationChange",id:"apis/location/onLocationChange",title:"Taro.onLocationChange(callback)",description:"Listens for real-time geolocation change events, to be used in conjunction with Taro.startLocationUpdateBackground\u3001Taro.startLocationUpdate.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/location/onLocationChange.md",sourceDirName:"apis/location",slug:"/apis/location/onLocationChange",permalink:"/taro-docs/en/docs/next/apis/location/onLocationChange",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/location/onLocationChange.md",tags:[],version:"current",frontMatter:{title:"Taro.onLocationChange(callback)",sidebar_label:"onLocationChange"},sidebar:"API",previous:{title:"onLocationChangeError",permalink:"/taro-docs/en/docs/next/apis/location/onLocationChangeError"},next:{title:"offLocationChangeError",permalink:"/taro-docs/en/docs/next/apis/location/offLocationChangeError"}},u={},p=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Callback",id:"callback",level:3},{value:"CallbackResult",id:"callbackresult",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],d={toc:p};function s(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Listens for real-time geolocation change events, to be used in conjunction with ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.startLocationUpdateBackground"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.startLocationUpdate"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html"}),"Reference"))),(0,a.kt)("h2",r({},{id:"type"}),"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),(0,a.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,a.kt)("h3",r({},{id:"callback"}),"Callback"),(0,a.kt)("p",null,"Callback function for real-time geolocation change events."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"CallbackResult"))))),(0,a.kt)("h3",r({},{id:"callbackresult"}),"CallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"accuracy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Location accuracy")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"altitude"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Altitude (in m)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"horizontalAccuracy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Horizontal accuracy (in m)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"latitude"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Latitude. The value ranges from -90 to +90, and the negative number means south latitude.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"longitude"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Longitude. The value ranges from -180 to +180, and the negative number means west longitude.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"speed"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Speed (in m/s)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"verticalAccuracy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Vertical accuracy (in m) (Not available for Android, and 0 will be returned)")))),(0,a.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"const _locationChangeFn = function (res) {\n console.log('location change', res)\n}\nTaro.onLocationChange(_locationChangeFn)\nTaro.offLocationChange(_locationChangeFn)\n")),(0,a.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.onLocationChange"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);