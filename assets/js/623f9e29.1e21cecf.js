"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[5962],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7518:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=t(7462),o=(t(7294),t(3905));const a={title:"\u9009\u9879",description:"\u914d\u7f6e\u83dc\u5355\u7684\u4e00\u4e9b\u9009\u9879\u5c5e\u6027"},i=void 0,u={unversionedId:"TrMenu/menu/configuration/option",id:"TrMenu/menu/configuration/option",title:"\u9009\u9879",description:"\u914d\u7f6e\u83dc\u5355\u7684\u4e00\u4e9b\u9009\u9879\u5c5e\u6027",source:"@site/docs/TrMenu/menu/configuration/option.md",sourceDirName:"TrMenu/menu/configuration",slug:"/TrMenu/menu/configuration/option",permalink:"/Docs-GHPages/TrMenu/menu/configuration/option",draft:!1,editUrl:"https://github.com/Happy-clo/Docs/tree/main/docs/TrMenu/menu/configuration/option.md",tags:[],version:"current",frontMatter:{title:"\u9009\u9879",description:"\u914d\u7f6e\u83dc\u5355\u7684\u4e00\u4e9b\u9009\u9879\u5c5e\u6027"},sidebar:"tutorialSidebar",previous:{title:"\u5e03\u5c40",permalink:"/Docs-GHPages/TrMenu/menu/configuration/layout"},next:{title:"\u5468\u671f\u4efb\u52a1",permalink:"/Docs-GHPages/TrMenu/menu/configuration/tasks"}},l={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],p={toc:c},s="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# \u83dc\u5355\u7684\u9009\u9879\u8bbe\u7f6e\n#\nOptions:\n  # \u662f\u5426\u542f\u7528\u83dc\u5355\u4f20\u53c2\u529f\u80fd \uff08\u9ed8\u8ba4\u5f00\u542f\uff09\n  Arguments: true\n  # \u9ed8\u8ba4\u586b\u5145\u53c2\u6570\n  Default-Arguments: []\n  # \u9ed8\u8ba4\u5e03\u5c40\u9875\u7801\n  Default-Layout: 0\n  # \u81ea\u7531\u69fd\u4f4d\n  Free-Slots:\n    - '71-73'\n  # \u662f\u5426\u9690\u85cf\u73a9\u5bb6\u5bb9\u5668\n  Hide-Player-Inventory: true\n  # \u9632\u9891\u7e41\u70b9\u51fb\u7684\u95f4\u9694\n  Min-Click-Delay: 200\n  # \u5f3a\u5236\u9700\u8981\u4f9d\u8d56\u7684 PlaceholderAPI \u62d3\u5c55\u53d8\u91cf\n  Depend-Expansions: ['server', 'player', 'progress']\n")),(0,o.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u82e5\u8bbe\u7f6e ",(0,o.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u586b\u5145\u53c2\u6570")," \uff0c\u5219\u5c06\u81ea\u52a8\u8865\u5168\u73a9\u5bb6\u672a\u63d0\u4f9b\u7684\u53c2\u6570\uff0c\u4f8b\u5982",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Default-Arguments: ","[",'"TabooLib", "Virus"',"]"),(0,o.kt)("li",{parentName:"ul"},"\u73a9\u5bb6\u63d0\u4f9b\u7684\u53c2\u6570\u4e3a ","[",'"TabooLib"',"]",", \u5219\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c06\u81ea\u52a8\u8865\u5168\u4e3a Virus"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u83dc\u5355\u5e03\u5c40\u9875\u7801")," \u5373\u5728\u672a\u6307\u5b9a\u9875\u7801\u7684\u60c5\u51b5\u4e0b\u9ed8\u8ba4\u6253\u5f00\u83dc\u5355\u540e\u521d\u6b21\u663e\u793a\u7684\u9875\u7801"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f9d\u8d56PAPI\u62d3\u5c55")," \u83dc\u5355\u5f00\u542f\u65f6\u5c06\u68c0\u6d4b\u662f\u5426\u5b89\u88c5\u5b8c\u6574\uff0c\u5426\u5219\u62d2\u7edd\u5f00\u542f\u5e76\u81ea\u52a8\u8bf7\u6c42\u4e0b\u8f7d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u542f\u7528\u7eaf\u53d1\u5305\u6a21\u5f0f")," \u8fdb\u4e00\u6b65\u63d0\u9ad8\u6027\u80fd, \u4f46\u662f\u4f1a\u727a\u7272\u4e00\u4e9b\u9644\u9b54\u63d2\u4ef6\u4ee5\u53ca\u95f4\u6b47\u6cc9\u7ffb\u8bd1\u4f5c\u4e3a\u4ee3\u4ef7.")))}f.isMDXComponent=!0}}]);