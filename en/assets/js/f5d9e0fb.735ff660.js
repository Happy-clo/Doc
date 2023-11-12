"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[6891],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9408:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=(t(7294),t(3905));const a={title:"\u52a8\u4f5c\u7ec4"},i=void 0,l={unversionedId:"TrMenu/menu/action/reactions",id:"TrMenu/menu/action/reactions",title:"\u52a8\u4f5c\u7ec4",description:"\u5e38\u89c4",source:"@site/docs/TrMenu/menu/action/reactions.md",sourceDirName:"TrMenu/menu/action",slug:"/TrMenu/menu/action/reactions",permalink:"/Doc/en/TrMenu/menu/action/reactions",draft:!1,editUrl:"https://github.com/Happy-clo/Doc/tree/main/docs/TrMenu/menu/action/reactions.md",tags:[],version:"current",frontMatter:{title:"\u52a8\u4f5c\u7ec4"},sidebar:"tutorialSidebar",previous:{title:"\u53c2\u6570",permalink:"/Doc/en/TrMenu/menu/action/option"},next:{title:"\u7c7b\u578b",permalink:"/Doc/en/TrMenu/menu/action/types"}},c={},u=[{value:"\u5e38\u89c4",id:"\u5e38\u89c4",level:2},{value:"\u4e09\u5143\u52a8\u4f5c\u7ec4",id:"\u4e09\u5143\u52a8\u4f5c\u7ec4",level:2},{value:"\u5957\u5a03\u5f0f\u52a8\u4f5c\u7ec4",id:"\u5957\u5a03\u5f0f\u52a8\u4f5c\u7ec4",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],p={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5e38\u89c4"},"\u5e38\u89c4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"actions:\n - 'tell: Hello, %player_name%'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"actions: 'tell: Hello, %player_name%'\n")),(0,o.kt)("h2",{id:"\u4e09\u5143\u52a8\u4f5c\u7ec4"},"\u4e09\u5143\u52a8\u4f5c\u7ec4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    actions:\n      all:\n        - condition: 'js: utils.chance(0.1)'\n          actions:\n            - 'tell: Prize 1'\n            - 'return'\n        - condition: 'js: utils.chance(0.5)'\n          actions:\n            - 'tell: Prize 2'\n            - 'return'\n        - condition: ''\n          actions:\n            - 'tell: Prize 3'\n")),(0,o.kt)("h2",{id:"\u5957\u5a03\u5f0f\u52a8\u4f5c\u7ec4"},"\u5957\u5a03\u5f0f\u52a8\u4f5c\u7ec4"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"by @Rubenicos"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    actions:\n      all:\n        - 'tell: &bNormal Action'\n        # [ Conditional Action ]\n        # Allow more conditional actions inside infinitely\n        - condition: 'perm *permission.123'\n          actions:\n            - 'tell: &aYES'\n            - condition: 'perm *other.permission'\n              actions:\n                - 'tell: &aYEP'\n              deny:\n                - 'tell: &cNOPE'\n          deny:\n            - 'tell: &cNO'\n"))),(0,o.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u52a8\u4f5c\u505a\u7684\u6267\u884c\u7ed3\u679c\u53d6\u51b3\u4e8e\u662f\u5426\u6709 return \u52a8\u4f5c\u8fd4\u56de\uff0c\u82e5\u6709\u8fd4\u56de\u5219\u4e3a false")))}m.isMDXComponent=!0}}]);