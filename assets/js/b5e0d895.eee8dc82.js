"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[32045],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(93106);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),l=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),v=l(r),f=n,d=v["".concat(a,".").concat(f)]||v[f]||p[f]||i;return r?o.createElement(d,c(c({ref:t},u),{},{components:r})):o.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=v;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}v.displayName="MDXCreateElement"},30341:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u}});r(93106);var o=r(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const c={title:"Taro.stopBluetoothDevicesDiscovery(OBJECT)",sidebar_label:"stopBluetoothDevicesDiscovery"},s=void 0,a={unversionedId:"apis/device/bluetooth/stopBluetoothDevicesDiscovery",id:"version-1.x/apis/device/bluetooth/stopBluetoothDevicesDiscovery",title:"Taro.stopBluetoothDevicesDiscovery(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.stopBluetoothDevicesDiscovery\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/bluetooth/stopBluetoothDevicesDiscovery.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/stopBluetoothDevicesDiscovery",permalink:"/taro-docs/docs/1.x/apis/device/bluetooth/stopBluetoothDevicesDiscovery",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/apis/device/bluetooth/stopBluetoothDevicesDiscovery.md",tags:[],version:"1.x",frontMatter:{title:"Taro.stopBluetoothDevicesDiscovery(OBJECT)",sidebar_label:"stopBluetoothDevicesDiscovery"},sidebar:"version-1.x/API",previous:{title:"startBluetoothDevicesDiscovery",permalink:"/taro-docs/docs/1.x/apis/device/bluetooth/startBluetoothDevicesDiscovery"},next:{title:"closeBLEConnection",permalink:"/taro-docs/docs/1.x/apis/device/ble/closeBLEConnection"}},l={},u=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],p={toc:u};function v(e){var{components:t}=e,r=i(e,["components"]);return(0,o.kt)("wrapper",n({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,o.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.stopBluetoothDevicesDiscovery.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"wx.stopBluetoothDevicesDiscovery")),"\uff0c\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,o.kt)("h2",n({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.stopBluetoothDevicesDiscovery(params).then(...)\n")))}v.isMDXComponent=!0}}]);