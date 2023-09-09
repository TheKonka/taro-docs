"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[72360],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});n(93106);var a=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"\u4f7f\u7528 OSSA(React) UI\u7ec4\u4ef6\u5e93"},s=void 0,i={unversionedId:"ossa",id:"ossa",title:"\u4f7f\u7528 OSSA(React) UI\u7ec4\u4ef6\u5e93",description:"\u6ce8\u610f\uff1aOSSA \u76ee\u524d\u5fc5\u987b\u4f7f\u7528 taro 3.x \u7248\u672c + React \u6280\u672f\u6808 \u8fdb\u884c\u5f00\u53d1\u3002",source:"@site/docs/ossa.md",sourceDirName:".",slug:"/ossa",permalink:"/taro-docs/en/docs/next/ossa",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/ossa.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 OSSA(React) UI\u7ec4\u4ef6\u5e93"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Tailwind CSS",permalink:"/taro-docs/en/docs/next/tailwindcss"},next:{title:"Using NutUI Jingdong Style Component Library",permalink:"/taro-docs/en/docs/next/nutui"}},p={},c=[{value:"\u9884\u89c8\u4f53\u9a8c",id:"\u9884\u89c8\u4f53\u9a8c",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5b89\u88c5 Taro \u811a\u624b\u67b6",id:"\u5b89\u88c5-taro-\u811a\u624b\u67b6",level:4},{value:"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f",id:"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f",level:4},{value:"\u9879\u76ee\u521d\u59cb\u5316",id:"\u9879\u76ee\u521d\u59cb\u5316",level:4},{value:"\u5b89\u88c5 OSSA",id:"\u5b89\u88c5-ossa",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u5168\u91cf\u5f15\u5165",id:"\u5168\u91cf\u5f15\u5165",level:4},{value:"\u6309\u9700\u5f15\u5165",id:"\u6309\u9700\u5f15\u5165",level:4},{value:"\u5173\u95ed\u7ec4\u4ef6\u5e93\u7684 prebundle",id:"\u5173\u95ed\u7ec4\u4ef6\u5e93\u7684-prebundle",level:4},{value:"\u8f93\u51fa H5 \u65f6\u7f16\u8bd1\u7ec4\u4ef6",id:"\u8f93\u51fa-h5-\u65f6\u7f16\u8bd1\u7ec4\u4ef6",level:4},{value:"\u5b9a\u5236\u5316\u4e3b\u9898",id:"\u5b9a\u5236\u5316\u4e3b\u9898",level:4},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:3}],u={toc:c};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aOSSA \u76ee\u524d\u5fc5\u987b\u4f7f\u7528 taro 3.x \u7248\u672c + ",(0,a.kt)("strong",{parentName:"p"},"React \u6280\u672f\u6808")," \u8fdb\u884c\u5f00\u53d1\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://ossa.miaode.com/"}),"OSSA")," \u63d0\u4f9b\u4e86 30+ \u7ec4\u4ef6\u6db5\u76d6\u4e86\u65e5\u5e38\u4e1a\u52a1\u5f00\u53d1\u4f7f\u7528\u7684\u5927\u90e8\u5206\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",r({},{id:"\u9884\u89c8\u4f53\u9a8c"}),"\u9884\u89c8\u4f53\u9a8c"),(0,a.kt)("img",{src:"https://yanxuan.nosdn.127.net/static-union/1656314230833368.png",width:"200",height:"200",alt:"OSSA DEMO"}),(0,a.kt)("img",{src:"https://yanxuan.nosdn.127.net/static-union/16594970359a4f1b.png",width:"200",height:"200",alt:"OSSA DEMO"}),(0,a.kt)("h2",r({},{id:"\u5982\u4f55\u4f7f\u7528"}),"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("h3",r({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Npm \u6216 Yarn \u5b89\u88c5")),(0,a.kt)("h4",r({},{id:"\u5b89\u88c5-taro-\u811a\u624b\u67b6"}),"\u5b89\u88c5 Taro \u811a\u624b\u67b6"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528 npm \u5b89\u88c5 CLI\nnpm install -g @tarojs/cli\n\n# OR \u4f7f\u7528 yarn \u5b89\u88c5 CLI\nyarn global add @tarojs/cli\n\n# OR \u5b89\u88c5\u4e86 cnpm\uff0c\u4f7f\u7528 cnpm \u5b89\u88c5 CLI\ncnpm install -g @tarojs/cli\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5982\u679c\u5b89\u88c5\u8fc7\u7a0b\u51fa\u73b0 sass \u76f8\u5173\u7684\u5b89\u88c5\u9519\u8bef\uff0c\u8bf7\u5728\u5b89\u88c5 mirror-config-china \u540e\u91cd\u8bd5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install -g mirror-config-china\n")),(0,a.kt)("h4",r({},{id:"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f"}),"\u68c0\u67e5\u662f\u5426\u5b89\u88c5\u6210\u529f"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"taro -v\n")),(0,a.kt)("h4",r({},{id:"\u9879\u76ee\u521d\u59cb\u5316"}),"\u9879\u76ee\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u521b\u5efa\u6a21\u677f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"taro init myApp\n")),(0,a.kt)("h4",r({},{id:"\u5b89\u88c5-ossa"}),"\u5b89\u88c5 OSSA"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install ossaui\n")),(0,a.kt)("h3",r({},{id:"\u4f7f\u7528"}),"\u4f7f\u7528"),(0,a.kt)("h4",r({},{id:"\u5168\u91cf\u5f15\u5165"}),"\u5168\u91cf\u5f15\u5165"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165\u6837\u5f0f\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript"}),"// app.tsx\nimport 'ossaui/dist/style/index.scss'\n\n// \u6216\u8005\u5728app.scss\u4e2d\u5f15\u5165\n@import 'ossaui/dist/style/index.scss'\n")),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u5728\u9875\u9762\u4e2d\u5f15\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"OSSA"),"\u7ec4\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript",metastring:'title="page/index.tsx"',title:'"page/index.tsx"'}),"import { OsButton } from 'ossaui'\n\nconst demo = () => {\n  return (\n    <OsButton type=\"primary\" onClick={() => handleClick()}>\n      \u6309\u94ae\n    </OsButton>\n  )\n}\n")),(0,a.kt)("h4",r({},{id:"\u6309\u9700\u5f15\u5165"}),"\u6309\u9700\u5f15\u5165"),(0,a.kt)("p",null,"\u5168\u91cf\u5f15\u7528\u4f1a\u5bfc\u81f4\u6240\u6709\u7ec4\u4ef6\u90fd\u6253\u5305\u8fdb\u6700\u7ec8\u7684\u4ea7\u7269\u4e2d\uff0c\u6240\u4ee5\u66f4\u63a8\u8350\u6309\u9700\u5f15\u5165"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u76ee\u524d\u7ec4\u4ef6\u5e93\u7684\u6309\u9700\u5f15\u5165\u9700\u8981\u501f\u52a9\u4e00\u4e2a babel \u63d2\u4ef6",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/umijs/babel-plugin-import"}),"babel-plugin-import"),"\u6765\u5b9e\u73b0")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u63d2\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"npm i babel-plugin-import -D\n")),(0,a.kt)("ol",r({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript",metastring:'title="babel.config.js"',title:'"babel.config.js"'}),"{\n  // ...\n  plugins: [\n    [\n      'import',\n      {\n        libraryName: 'ossaui',\n        customName: (name) => `ossaui/lib/components/${name.replace(/^os-/, '')}`,\n        customStyleName: (name) => `ossaui/dist/style/components/${name.replace(/^os-/, '')}.scss`,\n      },\n      'ossaui',\n    ],\n  ]\n}\n")),(0,a.kt)("ol",r({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"\u5728\u9875\u9762\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"OSSA"),"\u7ec4\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript",metastring:'title="page/index.tsx"',title:'"page/index.tsx"'}),"import { OsButton } from 'ossaui'\n\nconst demo = () => {\n  return (\n    <OsButton type=\"primary\" onClick={() => handleClick()}>\n      \u6309\u94ae\n    </OsButton>\n  )\n}\n")),(0,a.kt)("h4",r({},{id:"\u5173\u95ed\u7ec4\u4ef6\u5e93\u7684-prebundle"}),"\u5173\u95ed\u7ec4\u4ef6\u5e93\u7684 prebundle"),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"\u5728 taro3.5 \u4e4b\u540e\u7684\u7248\u672c\u4e2d\uff0c\u5728\u5f00\u542f prebundle(\u9ed8\u8ba4\u5f00\u542f)\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u5bfc\u81f4",(0,a.kt)("inlineCode",{parentName:"p"},"ossaui"),"\u6240\u5f15\u7528\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"@taro/components"),"\u7ec4\u4ef6\u6ca1\u6709\u88ab\u6253\u8fdb\u6700\u7ec8\u7684 bundle \u4e2d\uff0c\u5bfc\u81f4\u9875\u9762\u8868\u73b0\u5f02\u5e38\u3002")),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u53ef\u4ee5\u624b\u52a8\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"ossaui"),"\u6392\u9664\u5728 prebundle \u5217\u8868\u4e4b\u5916\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript",metastring:'title="config/index.js"',title:'"config/index.js"'}),"module.exports = {\n  // ...\n  framework: 'react',\n  compiler: {\n    type: 'webpack5',\n    prebundle: {\n      exclude: ['ossaui'],\n    },\n  },\n}\n")),(0,a.kt)("h4",r({},{id:"\u8f93\u51fa-h5-\u65f6\u7f16\u8bd1\u7ec4\u4ef6"}),"\u8f93\u51fa H5 \u65f6\u7f16\u8bd1\u7ec4\u4ef6"),(0,a.kt)("admonition",r({},{type:"tip"}),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u8f93\u51fa H5 \u65f6\uff0c\u7ec4\u4ef6\u7684\u5c3a\u5bf8\u53ef\u80fd\u4f1a\u8868\u73b0\u5f02\u5e38")),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u53ef\u4ee5\u914d\u5728\u5728\u8f93\u51fa H5 \u65f6\uff0c\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"ossaui"),"\u8fdb\u884c postcss \u5904\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript",metastring:'title="config/index.js"',title:'"config/index.js"'}),"module.exports = {\n  // ...\n  h5: {\n    // ...\n    esnextModules: ['ossaui'],\n  },\n}\n")),(0,a.kt)("h4",r({},{id:"\u5b9a\u5236\u5316\u4e3b\u9898"}),"\u5b9a\u5236\u5316\u4e3b\u9898"),(0,a.kt)("p",null,"\u521b\u5efa\u5b9a\u5236\u5316\u4e3b\u9898\u6837\u5f0f\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/styles/variables.scss")," \uff0c\u6837\u5f0f\u53d8\u91cf\u8986\u76d6\u8868\u53c2\u8003 ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/NeteaseYanxuan/OSSA/blob/main/packages/ossa/src/style/_variable.scss"}),"OSSA UI variables")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-scss",metastring:'title="src/styles/variables.scss"',title:'"src/styles/variables.scss"'}),"$--text-color-base: #333;\n$--color-border-base: #d9d9d9;\n")),(0,a.kt)("p",null,"\u7136\u540e\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config/index.js")," \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"scss")," \u6587\u4ef6\u5168\u5c40\u8986\u76d6\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript"}),"const path = require('path');\nconst config = {\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2,\n    375: 2 / 1\n  },\n  sass: {\n    resource: [\n      path.resolve(__dirname, '..', 'src/styles/variables.scss')\n    ]\n  },\n  // ...\n")),(0,a.kt)("h3",r({},{id:"\u9884\u89c8"}),"\u9884\u89c8"),(0,a.kt)("p",null,"\u8be6\u7ec6\u7684 Taro \u9879\u76ee\u9884\u89c8\u53ef\u53c2\u8003",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.taro.zone/docs/GETTING-STARTED#%E7%BC%96%E8%AF%91%E8%BF%90%E8%A1%8C"}),"Taro \u6587\u6863")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"// \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u9884\u89c8\nnpm run dev:weapp\n\n// h5\u9884\u89c8\nnpm run dev:h5\n")))}m.isMDXComponent=!0}}]);