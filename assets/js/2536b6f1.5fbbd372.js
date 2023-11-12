"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[7628],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6079:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=(t(7294),t(3905));const l={title:"\u521b\u5efa"},i=void 0,u={unversionedId:"TrMenu/menu/create",id:"TrMenu/menu/create",title:"\u521b\u5efa",description:"\u57fa\u7840",source:"@site/docs/TrMenu/menu/create.md",sourceDirName:"TrMenu/menu",slug:"/TrMenu/menu/create",permalink:"/Doc/TrMenu/menu/create",draft:!1,editUrl:"https://github.com/Happy-clo/Doc/tree/main/docs/TrMenu/menu/create.md",tags:[],version:"current",frontMatter:{title:"\u521b\u5efa"},sidebar:"tutorialSidebar",previous:{title:"\u6761\u4ef6",permalink:"/Doc/TrMenu/menu/condition"},next:{title:"LOCAL",permalink:"/Doc/TrMenu/database/local"}},o={},p=[{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"\u8def\u5f84",id:"\u8def\u5f84",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:3}],c={toc:p},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,a.kt)("p",null,"TrMenu \u7684\u83dc\u5355\u662f\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"YAML")," ","(",".yml",")"," \u6587\u4ef6\u683c\u5f0f\u914d\u7f6e\u3001\u8bfb\u53d6\u52a0\u8f7d\u7684"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u83dc\u5355\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u65b0\u5efa\u4e00\u4e2a YAML \u6587\u4ef6\u5f00\u59cb"),(0,a.kt)("h2",{id:"\u8def\u5f84"},"\u8def\u5f84"),(0,a.kt)("p",null,"\u83dc\u5355\u6587\u4ef6\u53ef\u4ee5\u653e\u5728\u9ed8\u8ba4\u83dc\u5355\u76ee\u5f55 \uff08menus\uff09\u4e2d\u6216\u81ea\u5b9a\u4e49\u8def\u5f84\uff08\u9700\u8981\u81ea\u884c\u914d\u7f6e\uff09"),(0,a.kt)("p",null,"\u83dc\u5355\u6587\u4ef6\u540d\uff08\u4e0d\u5305\u62ec\u62d3\u5c55\u540d\u540e\u7f00\uff09\u5373\u662f\u83dc\u5355\u7684\u552f\u4e00 ID\uff0c"),(0,a.kt)("p",null,"\u91cd\u590d ID \u7684\u83dc\u5355\u4ecd\u7136\u4f1a\u88ab\u52a0\u8f7d\uff0c\u4f46\u4f1a\u5f71\u54cd\u5f00\u542f\u547d\u4ee4\u7684\u6b63\u5e38\u5de5\u4f5c"),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u83dc\u5355\u7684\u914d\u7f6e\u9879\u5c06\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u8be6\u7ec6\u89e3\u6790"),(0,a.kt)("p",null,"\u8bf7\u5148\u6d4f\u89c8\u4e0b\u65b9\u6240\u63d0\u4f9b\u7684\u793a\u4f8b\u6a21\u5f0f\uff0c\u5feb\u901f\u4e86\u89e3\u83dc\u5355\u57fa\u672c\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u5bb9\u5668\u663e\u793a\u7684\u6807\u9898\nTitle: 'TrMenu'\n\n# \u5bb9\u5668\u6807\u9898\u5237\u65b0\u7684\u65f6\u95f4\nTitle-Update: 40\n\n# \u83dc\u5355\u5e03\u5c40\nLayout: []\n\n# \u83dc\u5355\u5e03\u5c40 - \u73a9\u5bb6\u5bb9\u5668\nPlayerInventory: []\n\n# \u83dc\u5355\u9009\u9879\nOptions:\n  # \u662f\u5426\u542f\u7528\u53c2\u6570\n  Arguments: false\n  # \u9ed8\u8ba4\u53c2\u6570\u586b\u5145\n  Default-Arguments: [ ]\n  # \u975e\u4e0a\u9501\u69fd\u4f4d\n  Free-Slots:\n    - 71\n    - 72\n  # \u9ed8\u8ba4\u9875\u7801\n  Default-Layout: 0\n  # \u662f\u5426\u9690\u85cf\u73a9\u5bb6\u5bb9\u5668\u7269\u54c1\n  Hide-Player-Inventory: false\n  # \u6700\u5c0f\u70b9\u51fb\u5ef6\u65f6\n  Min-Click-Delay: 200\n  # \u5f3a\u5236\u4f9d\u8d56\u7684 PlaceholderAPI \u62d3\u5c55\n  Depend-Expansions: [ 'server', 'player', 'progress', 'animations' ]\n\n# \u83dc\u5355\u7ed1\u5b9a\nBindings:\n  # \u547d\u4ee4\n  Commands:\n    - '(?i)example(-)?(gui)?(s)?'\n  # \u7269\u54c1\u7279\u5f81\n  Items:\n    - 'material:compass'\n    - 'material:clock,lore:OPEN_MENU'\n    - 'texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDRmNDUyZDk5OGVhYmFjNDY0MmM2YjBmZTVhOGY0ZTJlNjczZWRjYWUyYTZkZmQ5ZTZhMmU4NmU3ODZlZGFjMCJ9fX0='\n\n# \u83dc\u5355\u4e8b\u4ef6\u53cd\u5e94\nEvents:\n  # \u5f00\u542f\u4e8b\u4ef6\n  Open:\n    - condition: 'perm *trmenu.use'\n      actions:\n        - 'sound: BLOCK_CHEST_OPEN-1-0'\n      deny:\n        - 'sound: ENTITY_ITEM_BREAK-1-0'\n        - 'title: `&c&lPermission Required` `&7&lYou need permission &6&ltrmenu.use &7&lto open this menu` 15 20 15'\n        - 'return'\n  # \u5173\u95ed\u4e8b\u4ef6\n  Close:\n    - 'sound: BLOCK_CHEST_CLOSE-1-0'\n\n# \u83dc\u5355\u7684\u56fe\u6807\u4e3b\u4f53\nIcons:\n  # \u56fe\u6807 Id\n  'Close':\n    # \u663e\u793a\u5c5e\u6027\u66f4\u65b0\u9891\u7387\n    update: []\n    # \u5b50\u56fe\u6807\u91cd\u65b0\u8ba1\u7b97\u9891\u7387\n    refresh: -1\n    # \u663e\u793a\u90e8\u5206\n    display: []\n    # \u52a8\u4f5c\u90e8\u5206\n    actions: []\n\n# \u5b9a\u65f6\u4efb\u52a1\nTasks:\n  # \u4efb\u52a1 ID\n  tikTok:\n    # \u4efb\u52a1\u5468\u671f (in ticks)\n    period: 80\n    # \u4efb\u52a1\u53cd\u5e94 (reactions)\n    task:\n      - condition: '$ sender.isOp()'\n        actions:\n          - 'sound: BLOCK_NOTE_BLOCK_BIT-1-2'\n\n# \u5185\u7f6e\u81ea\u5b9a\u4e49 JavaScript \u51fd\u6570\nFunctions:\n  id: 'content'\n\n")),(0,a.kt)("h3",{id:"\u7ed3\u6784"},"\u7ed3\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6807\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u6216\u591a\u4e2a\u6807\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u6807\u9898\u66f4\u65b0\u5468\u671f"))),(0,a.kt)("li",{parentName:"ul"},"\u5e03\u5c40",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u83dc\u5355\u5e03\u5c40"),(0,a.kt)("li",{parentName:"ul"},"\u73a9\u5bb6\u5bb9\u5668\u5e03\u5c40"))),(0,a.kt)("li",{parentName:"ul"},"\u9009\u9879",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u8865\u5168\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5e03\u5c40\u9875\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u9690\u85cf\u73a9\u5bb6\u5bb9\u5668\u7269\u54c1"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u7531\u69fd\u4f4d"),(0,a.kt)("li",{parentName:"ul"},"\u9632\u9891\u7e41\u70b9\u51fb\u95f4\u9694"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u4f9d\u8d56\u7684 PlaceholderAPI \u62d3\u5c55"))),(0,a.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u6b63\u5219\u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},"\u7ed1\u5b9a\u7269\u54c1\u7279\u5f81"))),(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f00\u542f\u83dc\u5355\u6267\u884c\u52a8\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u95ed\u83dc\u5355\u6267\u884c\u52a8\u4f5c"))),(0,a.kt)("li",{parentName:"ul"},"\u56fe\u6807"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u811a\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u5468\u671f\u4efb\u52a1")))}s.isMDXComponent=!0}}]);