"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[3040],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(t),v=a,d=c["".concat(i,".").concat(v)]||c[v]||m[v]||o;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=v;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[c]="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6818:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=(t(7294),t(3905));const o={title:"Events",description:"TrMenu \u5185\u7f6e\u4e8b\u4ef6"},l=void 0,u={unversionedId:"TrMenu/develop/api/events",id:"TrMenu/develop/api/events",title:"Events",description:"TrMenu \u5185\u7f6e\u4e8b\u4ef6",source:"@site/docs/TrMenu/develop/api/events.md",sourceDirName:"TrMenu/develop/api",slug:"/TrMenu/develop/api/events",permalink:"/Docs-GHPages/TrMenu/develop/api/events",draft:!1,editUrl:"https://github.com/Happy-clo/Docs/tree/main/docs/TrMenu/develop/api/events.md",tags:[],version:"current",frontMatter:{title:"Events",description:"TrMenu \u5185\u7f6e\u4e8b\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/Docs-GHPages/TrMenu/develop/api/"},next:{title:"Receptacle",permalink:"/Docs-GHPages/TrMenu/develop/api/receptacle"}},i={},p=[{value:"CustomDatabaseEvent",id:"customdatabaseevent",level:2},{value:"MenuOpenEvent",id:"menuopenevent",level:2},{value:"MenuPageChangeEvent",id:"menupagechangeevent",level:2},{value:"MenuCloseEvent",id:"menucloseevent",level:2}],s={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"customdatabaseevent"},"CustomDatabaseEvent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u6570\u636e\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"package me.arasple.mc.trmenu.api.event\n\nimport me.arasple.mc.trmenu.module.internal.database.Database\nimport taboolib.platform.type.BukkitProxyEvent\n\n/**\n * @Author sky\n * @Since 2020-08-14 14:52\n */\nclass CustomDatabaseEvent(val name: String, var database: Database? = null) : BukkitProxyEvent() {\n\n    override val allowCancelled: Boolean\n        get() = false\n}\n")),(0,a.kt)("h2",{id:"menuopenevent"},"MenuOpenEvent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83dc\u5355\u6253\u5f00\u4e8b\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"package me.arasple.mc.trmenu.api.event\n\nimport me.arasple.mc.trmenu.module.display.Menu\nimport me.arasple.mc.trmenu.module.display.MenuSession\nimport taboolib.platform.type.BukkitProxyEvent\n\n/**\n * @author Arasple\n * @date 2021/1/29 17:34\n */\nclass MenuOpenEvent(val session: MenuSession, val menu: Menu, val page: Int, val reason: Reason = Reason.UNKNOWN) :\n    BukkitProxyEvent() {\n\n    enum class Reason {\n\n        RELOAD,\n\n        PLAYER_COMMAND,\n\n        CONSOLE,\n\n        BINDING_COMMANDS,\n\n        BINDING_ITEMS,\n\n        BINDING_SHORTCUT,\n\n        UNKNOWN\n\n    }\n\n}\n")),(0,a.kt)("h2",{id:"menupagechangeevent"},"MenuPageChangeEvent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83dc\u5355\u7ffb\u9875\u4e8b\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"package me.arasple.mc.trmenu.api.event\n\nimport me.arasple.mc.trmenu.module.display.MenuSession\nimport taboolib.platform.type.BukkitProxyEvent\n\n/**\n * @author Arasple\n * @date 2021/2/4 11:33\n */\nclass MenuPageChangeEvent(val session: MenuSession, val from: Int, val to: Int, val override: Boolean) : BukkitProxyEvent()\n")),(0,a.kt)("h2",{id:"menucloseevent"},"MenuCloseEvent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83dc\u5355\u5173\u95ed\u4e8b\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"package me.arasple.mc.trmenu.api.event\n\nimport me.arasple.mc.trmenu.module.display.MenuSession\nimport taboolib.platform.type.BukkitProxyEvent\n\n/**\n * @author Arasple\n * @date 2021/1/29 17:34\n */\nclass MenuCloseEvent(val session: MenuSession) : BukkitProxyEvent()\n")))}m.isMDXComponent=!0}}]);