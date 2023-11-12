"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[5994],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(t),k=a,c=d["".concat(o,".").concat(k)]||d[k]||m[k]||i;return t?l.createElement(c,r(r({ref:n},s),{},{components:t})):l.createElement(c,r({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:a,r[1]=p;for(var u=2;u<i;u++)r[u]=t[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3767:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var l=t(7462),a=(t(7294),t(3905));const i={title:"Paper Plugin YML"},r=void 0,p={unversionedId:"Paper/dev/getting-start/plugin-yml",id:"Paper/dev/getting-start/plugin-yml",title:"Paper Plugin YML",description:"plugin.yml \u6587\u4ef6\u662f\u4f60\u7684\u63d2\u4ef6\u6700\u4e3b\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002",source:"@site/docs/Paper/dev/getting-start/plugin-yml.md",sourceDirName:"Paper/dev/getting-start",slug:"/Paper/dev/getting-start/plugin-yml",permalink:"/Paper/dev/getting-start/plugin-yml",draft:!1,editUrl:"https://github.com/Happy-clo/Docs/tree/main/docs/Paper/dev/getting-start/plugin-yml.md",tags:[],version:"current",frontMatter:{title:"Paper Plugin YML"},sidebar:"tutorialSidebar",previous:{title:"HandlerList",permalink:"/Paper/dev/api/event-api/handler-lists"},next:{title:"Paper \u9879\u76ee\u7684\u642d\u5efa",permalink:"/Paper/dev/getting-start/project-setup"}},o={},u=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u5b57\u6bb5",id:"\u5b57\u6bb5",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3},{value:"name*",id:"name",level:3},{value:"version*",id:"version",level:3},{value:"main*",id:"main",level:3},{value:"description",id:"description",level:3},{value:"author / authors",id:"author--authors",level:3},{value:"website",id:"website",level:3},{value:"api-version",id:"api-version",level:3},{value:"load",id:"load",level:3},{value:"prefix",id:"prefix",level:3},{value:"libraries",id:"libraries",level:3},{value:"permissions",id:"permissions",level:3},{value:"Commands",id:"commands",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"\u4f9d\u8d56\u6b7b\u5faa\u73af",id:"\u4f9d\u8d56\u6b7b\u5faa\u73af",level:3},{value:"depend",id:"depend",level:3},{value:"softdepend",id:"softdepend",level:3},{value:"loadbefore",id:"loadbefore",level:3}],s={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"plugin.yml \u6587\u4ef6\u662f\u4f60\u7684\u63d2\u4ef6\u6700\u4e3b\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\n\u5b83\u5305\u542b\u63d2\u4ef6\u6700\u57fa\u672c\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u63d2\u4ef6\u540d\u3001\u7248\u672c\u548c\u7b80\u8981\u63cf\u8ff0\u3002\u5b83\u540c\u65f6\u5305\u62ec\u63d2\u4ef6\u7684\u4f9d\u8d56\u3001\u6743\u9650\u548c\u547d\u4ee4\u7b49\u3002"),(0,a.kt)("p",null,"plugin.yml \u6587\u4ef6\u5b58\u653e\u5728\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," \u6587\u4ef6\u5939\u4e2d\uff0c\u9879\u76ee\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"example-plugin\n\u251c\u2500\u2500 build.gradle.kts\n\u251c\u2500\u2500 settings.gradle.kts\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u251c\u2500\u2500 java\n        \u2514\u2500\u2500 resources\n            \u2514\u2500\u2500 plugin.yml\n")),(0,a.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a plugin.yml \u6a21\u677f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: ExamplePlugin\nversion: 1.0.0\nmain: io.papermc.testplugin.ExamplePlugin\ndescription: An example plugin\nauthor: PaperMC\nwebsite: https://papermc.io\napi-version: 1.19\n")),(0,a.kt)("h2",{id:"\u5b57\u6bb5"},"\u5b57\u6bb5"),(0,a.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("p",null,"\u672c\u6587\u6240\u5217\u51fa\u7684\u5b57\u6bb5\u5e76\u672a\u6309\u4efb\u4f55\u7279\u5b9a\u987a\u5e8f\u6392\u5217\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u5b57\u6bb5\u65c1\u6709\u661f\u53f7 (","*",") \uff0c\u5219\u4ee3\u8868\u8be5\u5b57\u6bb5\u4e3a\u5fc5\u586b\u9879\u3002"),(0,a.kt)("h3",{id:"name"},"name","*"),(0,a.kt)("p",null,"\u4f60\u7684\u63d2\u4ef6\u540d\u3002\u5c06\u4f1a\u5728\u63d2\u4ef6\u5217\u8868\u4e2d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"/plugins")," \u6307\u4ee4\uff09\u5217\u51fa\uff0c\u5e76\u5728\u65e5\u5fd7\u6587\u672c\u4e2d\u4f5c\u4e3a\u8f93\u51fa\u7684\u9ed8\u8ba4\u524d\u7f00\u663e\u793a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4e3a\u65e5\u5fd7\u8f93\u51fa\u8bbe\u5b9a\u4e86\u524d\u7f00\uff0c\u5219\u5c06\u88ab\u524d\u7f00\u8986\u76d6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name: ExamplePlugin"))),(0,a.kt)("h3",{id:"version"},"version","*"),(0,a.kt)("p",null,"\u63d2\u4ef6\u5f53\u524d\u7684\u7248\u672c\u3002\u4f1a\u5728\u63d2\u4ef6\u4fe1\u606f\u6587\u672c\u548c\u670d\u52a1\u5668\u65e5\u5fd7\u6587\u672c\u4e2d\u663e\u793a\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version: 1.0.0"))),(0,a.kt)("h3",{id:"main"},"main","*"),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684\u4e3b\u7c7b\u3002\u4e3b\u7c7b\u662f\u4e00\u4e2a\u63d2\u4ef6\u4e2d\u552f\u4e00\u7ee7\u627f ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaPlugin")," \u7684\u7c7b\uff0c\u5e76\u4e14\u662f\u63d2\u4ef6\u6267\u884c\u7684\u5165\u53e3\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"main: io.papermc.testplugin.ExamplePlugin"))),(0,a.kt)("p",null,"\u9700\u8981\u5305\u542b\u5305\u7684\u8def\u5f84\u548c\u4e3b\u7c7b\u7684\u540d\u5b57\uff08\u4e0d\u7528\u5e26 .java \u6216\u8005 .kt \uff09"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u7b80\u5355\u63cf\u8ff0\u63d2\u4ef6\u7684\u4f5c\u7528\u3002\u5c06\u4f1a\u5728\u63d2\u4ef6\u4fe1\u606f\u547d\u4ee4\u4e2d\u663e\u793a\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description: An example plugin"))),(0,a.kt)("h3",{id:"author--authors"},"author / authors"),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684\u4f5c\u8005\uff08\u4eec\uff09\u3002\u53ef\u4ee5\u586b\u5199\u5355\u4e2a\u4f5c\u8005\u6216\u4f5c\u8005\u5217\u8868\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"author: PaperMC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authors: [PaperMC, SpigotMC, Bukkit]"),"\n\u5c06\u4f1a\u5728\u63d2\u4ef6\u4fe1\u606f\u547d\u4ee4\u4e2d\u663e\u793a\u3002")),(0,a.kt)("h3",{id:"website"},"website"),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684\u7f51\u7ad9\u3002\u8fde\u63a5\u5230 GitHub \u5b58\u50a8\u5e93\u6216\u662f\u63d2\u4ef6\u53d1\u5e03\u9875\u5f88\u6709\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"website: https://papermc.io"),"\n\u5c06\u4f1a\u5728\u63d2\u4ef6\u4fe1\u606f\u547d\u4ee4\u4e2d\u663e\u793a\u3002")),(0,a.kt)("h3",{id:"api-version"},"api-version"),(0,a.kt)("p",null,"\u63d2\u4ef6\u6b63\u5728\u4f7f\u7528\u7684 Paper API \u7248\u672c\u3002\u4e0d\u5305\u542b\u6b21\u8981\u7248\u672c\uff08\u6bd4\u5982\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"1.13.2-R0.1-SNAPSHOT")," \u7248\u672c\u7684 Paper API \u65f6\uff0c\u53ea\u9700\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"1.13")," \uff0c\u540e\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},".2")," \u53cd\u800c\u65e0\u6548\uff09",(0,a.kt)("br",{parentName:"p"}),"\n","\u670d\u52a1\u5668\u7248\u672c\u4f4e\u4e8e\u6b64\u5904\u586b\u5199\u7684 API \u7248\u672c\u5c06\u76f4\u63a5\u62d2\u7edd\u52a0\u8f7d\u63d2\u4ef6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6709\u6548\u7684\u7248\u672c\u662f 1.13-1.19"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api-version: 1.19"))),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u6b64\u9879\uff0c\u52a0\u8f7d\u63d2\u4ef6\u65f6\u4f1a\u5c06\u5176\u8ba4\u5b9a\u4e3a\u8fc7\u65f6\u63d2\u4ef6\u5e76\u4f5c\u7279\u6b8a\u5904\u7406\uff0c\u540c\u65f6\u5728\u670d\u52a1\u5668\u540e\u53f0\u8f93\u51fa\u4e00\u6bb5\u8b66\u544a\u3002"),(0,a.kt)("h3",{id:"load"},"load"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u5e94\u5f53\u5728\u4f55\u65f6\u52a0\u8f7d\u63d2\u4ef6\u3002\u5e94\u8be5\u586b\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"STARTUP")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"POSTWORLD"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"load: STARTUP"))),(0,a.kt)("h3",{id:"prefix"},"prefix"),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684\u524d\u7f00\u3002\u5728\u65e5\u5fd7\u4e2d\u8be5\u524d\u7f00\u5c06\u53d6\u4ee3\u63d2\u4ef6\u540d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prefix: EpicPaperMCHypePlugin"))),(0,a.kt)("h3",{id:"libraries"},"libraries"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u76ee\u524d\u8fdd\u53cd Maven \u4e2d\u592e\u4ed3\u5e93 ( Maven Central ) \u7684\u670d\u52a1\u6761\u6b3e ( ToS ) \u3002\u4e0d\u8fc7\u5f88\u6709\u53ef\u80fd\u4fdd\u7559\u6b64\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5217\u51fa\u63d2\u4ef6\u7684\u90e8\u5206\u4f9d\u8d56\u9879\u3002\u670d\u52a1\u7aef\u5c06\u4f1a\u4ece Maven \u4e2d\u592e\u4ed3\u5e93\u4e0b\u8f7d\u6240\u5217\u4f9d\u8d56\u9879\uff0c\u5e76\u5355\u72ec\u52a0\u5165\u5404\u4e2a\u63d2\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"classpath")," \u4e2d\u3002\u8fd9\u6837\u5c31\u65e0\u9700\u518d\u5c06\u4f9d\u8d56\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"shade")," \u7684\u65b9\u5f0f\u6253\u5305\u8fdb\u63d2\u4ef6\uff0c\u4e5f\u65e0\u9700\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"relocation")," \u6765\u907f\u514d\u591a\u4e2a\u63d2\u4ef6\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"shade")," \u6253\u5305\u540c\u4e00\u7c7b\u5e93\u65f6\u7531\u4e8e\u4f9d\u8d56\u9879\u7248\u672c\u4e0d\u540c\u800c\u53ef\u80fd\u53d1\u751f\u7684\u51b2\u7a81\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"libraries:\n  - com.google.guava:guava:30.1.1-jre\n  - com.google.code.gson:gson:2.8.6\n")),(0,a.kt)("h3",{id:"permissions"},"permissions"),(0,a.kt)("p",null,"\u5217\u51fa\u4f60\u7684\u63d2\u4ef6\u6240\u4f7f\u7528\u7684\u6743\u9650\u3002\u53ef\u4ee5\u7528\u4e8e\u9650\u5236\u73a9\u5bb6\u8bbf\u95ee\u63d2\u4ef6\u529f\u80fd\uff08\u5982\u6307\u4ee4\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'permissions:\n  - permission.node:\n      description: "This is a permission node"\n      default: op\n      children:\n        - permission.node.child: true\n  - another.permission.node:\n      description: "This is another permission node"\n      default: not op\n')),(0,a.kt)("p",null,"description \u662f\u6743\u9650\u8282\u70b9\u7684\u63cf\u8ff0\u3002\u5c06\u4f1a\u5728\u6743\u9650\u5217\u8868\u4e2d\u663e\u793a\u3002default \u662f\u6743\u9650\u8282\u70b9\u7684\u9ed8\u8ba4\u503c\uff0c\u53ef\u4ee5\u8bbe\u4e3a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"op")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"not op"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"true")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u6b64\u503c\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"op"),"\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6bcf\u4e2a\u6743\u9650\u8282\u70b9\u90fd\u53ef\u4ee5\u6709\u5b50\u6743\u9650\u3002\u5f53\u8bbe\u5b9a\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\u5b83\u5c06\u7ee7\u627f\u7236\u6743\u9650\u3002"),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"\u5217\u51fa\u63d2\u4ef6\u4f7f\u7528\u7684\u547d\u4ee4\u3002\u5728\u9700\u8981\u4f7f\u7528\u547d\u4ee4\u6765\u63d0\u4f9b\u67d0\u4e9b\u529f\u80fd\u65f6\u5f88\u6709\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'commands:\n  - command:\n      description: "This is a command"\n      usage: "/command <arg>"\n      aliases: [cmd, command]\n      permission: permission.node\n      permission-message: "You do not have permission to use this command"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description"),"\u662f\u547d\u4ee4\u7684\u63cf\u8ff0\u3002\u7b80\u8981\u7684\u63cf\u8ff0\u547d\u4ee4\u7684\u4f5c\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"usage"),"\u662f\u547d\u4ee4\u7684\u7528\u6cd5\u3002\u5c06\u4f1a\u5728\u73a9\u5bb6\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"/help <command>")," \u547d\u4ee4\u65f6\u663e\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"aliases")," \u662f\u547d\u4ee4\u4f7f\u7528\u7684\u4e00\u7cfb\u5217\u522b\u540d\u3002\u5bf9\u4e8e\u7f29\u77ed\u547d\u4ee4\u5f88\u6709\u5e2e\u52a9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"permission"),"\u662f\u73a9\u5bb6\u8981\u4f7f\u7528\u6b64\u547d\u4ee4\u6240\u9700\u7684\u6743\u9650\u8282\u70b9\u3002\u6ce8\u610f\uff1a\u53ea\u6709\u5728\u73a9\u5bb6\u6709\u6743\u4f7f\u7528\u8be5\u547d\u4ee4\u65f6\u5b83\u624d\u4f1a\u5728\u5ba2\u6237\u7aef\u7684\u8865\u5168\u5019\u9009\u9879\u91cc\u663e\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"permission-message"),"\u5728\u73a9\u5bb6\u6ca1\u6709\u6743\u9650\u4f7f\u7528\u547d\u4ee4\u65f6\u663e\u793a\u7684\u5185\u5bb9\u3002")),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"\u4f9d\u8d56\u6b7b\u5faa\u73af"},"\u4f9d\u8d56\u6b7b\u5faa\u73af"),(0,a.kt)("p",null,"\u5f53\u63d2\u4ef6\u6307\u5b9a\u4e86\u4e00\u4e2a\u4f9d\u8d56\u63d2\u4ef6\u65f6\uff0c\u88ab\u4f9d\u8d56\u7684\u63d2\u4ef6\u4f1a\u5728\u8be5\u63d2\u4ef6\u52a0\u8f7d\u4e4b\u524d\u5148\u52a0\u8f7d\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f9d\u8d56\u51fa\u73b0\u5faa\u73af\uff0c\u90a3\u4e48\u5c06\u7ed9\u63d2\u4ef6\u52a0\u8f7d\u8fc7\u7a0b\u5e26\u6765\u4e25\u91cd\u95ee\u9898\u3002\u4f9d\u8d56\u7684\u6b7b\u5faa\u73af\u53ef\u901a\u8fc7\u5982\u4e0b\u6d41\u7a0b\u56fe\u8868\u793a\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n","\u63d2\u4ef6 A -> \u63d2\u4ef6 B -> \u63d2\u4ef6 A -> \u63d2\u4ef6 B..."),(0,a.kt)("p",null,"\u5728\u4e0a\u56fe\u4e2d\uff0c\u63d2\u4ef6 A \u5c06\u63d2\u4ef6 B \u4f5c\u4e3a\u4f9d\u8d56\uff0c\u800c\u63d2\u4ef6 B \u53c8\u5c06\u63d2\u4ef6 A \u4f5c\u4e3a\u4f9d\u8d56\u3002"),(0,a.kt)("h3",{id:"depend"},"depend"),(0,a.kt)("p",null,"\u5217\u51fa\u63d2\u4ef6\u8981",(0,a.kt)("strong",{parentName:"p"},"\u52a0\u8f7d"),"\u6240\u4f9d\u8d56\u7684\u524d\u7f6e\u63d2\u4ef6\u3002\u901a\u8fc7\u524d\u7f6e\u63d2\u4ef6\u7684\u540d\u79f0\u6765\u6307\u5b9a\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u7684\u4f9d\u8d56\u627e\u4e0d\u5230\uff0c\u4f60\u7684\u63d2\u4ef6\u4e5f\u4e0d\u4f1a\u52a0\u8f7d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"depend: [Vault, WorldEdit]"))),(0,a.kt)("h3",{id:"softdepend"},"softdepend"),(0,a.kt)("p",null,"\u63d2\u4ef6\u7684\u8f6f\u4f9d\u8d56\u5217\u8868\uff08\u5982\u65e0\u6240\u5217\u4f9d\u8d56\uff0c\u63d2\u4ef6\u4e5f\u80fd\u6b63\u5e38\u52a0\u8f7d\uff0c\u4f46\u4e0d\u80fd\u63d0\u4f9b\u5168\u90e8\u529f\u80fd\uff09\u3002\u901a\u8fc7\u8f6f\u4f9d\u8d56\u63d2\u4ef6\u7684\u540d\u79f0\u6765\u6307\u5b9a\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"softdepend: [Vault, WorldEdit]"))),(0,a.kt)("h3",{id:"loadbefore"},"loadbefore"),(0,a.kt)("p",null,"\u5217\u51fa\u8be5\u63d2\u4ef6\u5e94\u4f18\u5148\u4e8e\u54ea\u4e9b\u63d2\u4ef6\u4e4b\u524d\u52a0\u8f7d\u3002\u901a\u8fc7\u63d2\u4ef6\u7684\u540d\u79f0\u6765\u6307\u5b9a\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5f53\u67d0\u4e9b\u63d2\u4ef6\u9700\u8981\u4f7f\u7528\u4f60\u7684\u63d2\u4ef6\u6240\u63d0\u4f9b\u7684 API \u65f6\uff0c\u6b64\u529f\u80fd\u5f88\u6709\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadbefore: [Vault, FactionsUUID]"))))}m.isMDXComponent=!0}}]);