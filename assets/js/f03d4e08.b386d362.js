"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[3804],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return v}});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var a=o.createContext({}),p=function(e){var n=o.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=p(e.components);return o.createElement(a.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=t,v=l["".concat(a,".").concat(m)]||l[m]||u[m]||i;return r?o.createElement(v,s(s({ref:n},d),{},{components:r})):o.createElement(v,s({ref:n},d))}));function v(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[l]="string"==typeof e?e:t,s[1]=c;for(var p=2;p<i;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2058:function(e,n,r){r.r(n),r.d(n,{assets:function(){return a},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=r(7462),t=(r(7294),r(3905));const i={title:"\u8282\u70b9\u53d8\u91cf",description:"TrMenu \u8fd8\u652f\u6301\u4ee5\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8282\u70b9\u4f5c\u4e3a\u53d8\u91cf\u83b7\u53d6, \u907f\u514d\u91cd\u590d\u5199\u540c\u4e00\u5185\u5bb9."},s=void 0,c={unversionedId:"TrMenu/usage/node-getter",id:"TrMenu/usage/node-getter",title:"\u8282\u70b9\u53d8\u91cf",description:"TrMenu \u8fd8\u652f\u6301\u4ee5\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8282\u70b9\u4f5c\u4e3a\u53d8\u91cf\u83b7\u53d6, \u907f\u514d\u91cd\u590d\u5199\u540c\u4e00\u5185\u5bb9.",source:"@site/docs/TrMenu/usage/node-getter.md",sourceDirName:"TrMenu/usage",slug:"/TrMenu/usage/node-getter",permalink:"/Docs-GHPages/TrMenu/usage/node-getter",draft:!1,editUrl:"https://github.com/Happy-clo/Docs/tree/main/docs/TrMenu/usage/node-getter.md",tags:[],version:"current",frontMatter:{title:"\u8282\u70b9\u53d8\u91cf",description:"TrMenu \u8fd8\u652f\u6301\u4ee5\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8282\u70b9\u4f5c\u4e3a\u53d8\u91cf\u83b7\u53d6, \u907f\u514d\u91cd\u590d\u5199\u540c\u4e00\u5185\u5bb9."},sidebar:"tutorialSidebar",previous:{title:"\u7269\u54c1\u7279\u5f81",permalink:"/Docs-GHPages/TrMenu/usage/item-matchers"},next:{title:"\u547d\u4ee4\u6ce8\u518c",permalink:"/Docs-GHPages/TrMenu/usage/register-commands"}},a={},p=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],d={toc:p},l="wrapper";function u(e){let{components:n,...r}=e;return(0,t.kt)(l,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"{node: <key>}\n\nE.g:\n{node: Title}\n -> \u83b7\u53d6\u83dc\u5355\u7684 Title\n \n{node: Icons.A.display.name}\n -> \u83b7\u53d6\u56fe\u6807 A \u7684\u5c55\u793a\u540d\u79f0\n \n{node: Icons.@iconid@.display.name}\n -> \u5982\u679c\u8be5\u53d8\u91cf\u5b58\u5728 B \u7684\u4efb\u610f\u652f\u6301\u51fd\u6570\u53d8\u91cf\u7684\u533a\u57df\u4e2d, \u5c06\u83b7\u53d6\u56fe\u6807 B \u7684\u5c55\u793a\u540d\u79f0\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"\u6ce8\u610f"),": \u83b7\u53d6\u8282\u70b9\u65f6\u5c3d\u53ef\u80fd\u6ce8\u610f\u5927\u5c0f\u5199\u662f\u5426\u5339\u914d"),(0,t.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u51fd\u6570\u53d8\u91cf\u80fd\u591f\u5728\u4efb\u610f\u652f\u6301\u53d8\u91cf\u7684\u533a\u57df\u4f7f\u7528"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"@iconid@")," \u4e3a\u9759\u6001\u53d8\u91cf, \u5728\u56fe\u6807\u4e0b\u4f1a\u88ab\u89e3\u6790\u4e3a\u8be5\u56fe\u6807\u7684 id")),(0,t.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"Title: '\u5b50\u670d\u5217\u8868'\n\nLayout:\n  - '012345678'\n\nIcons:\n  0:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u6709\u8bb8\u591a\u53cb\u7231\u7684\u73a9\u5bb6\u4eec'\n  1:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u98ce\u548c\u65e5\u4e3d'\n  2:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u5371\u673a\u91cd\u91cd'\n  3:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u9002\u5408\u517b\u8001'\n  4:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u602a\u7269\u5f88\u591a'\n  5:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u9002\u5408\u751f\u7535'\n  6:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u7ecf\u5e38\u5d29\u670d'\n  7:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u6709\u5267\u60c5'\n  8:\n    display:\n      material: 'wool'\n      name: '&3\u524d\u5f80 => &b{node: Icons.@iconid@.properties.name}'\n      lore:\n        - '&7\u6709\u5173\u4fe1\u606f: {node: Icons.@iconid@.properties.desc}'\n        - ''\n    actions:\n      all:\n        - 'server: {node: Icons.@iconid@.properties.server}'\n    properties:\n      name: '\u5b50\u670d-@iconId@'\n      server: 'server-@iconId@'\n      desc: '\u8fd9\u91cc\u53ef\u4ee5\u4e0a\u5929'\n")))}u.isMDXComponent=!0}}]);