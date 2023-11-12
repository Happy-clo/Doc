"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[8533],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(t),c=i,k=s["".concat(o,".").concat(c)]||s[c]||m[c]||a;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5403:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=t(7462),i=(t(7294),t(3905));const a={},l="\u6dfb\u52a0\u63d2\u4ef6",p={unversionedId:"Paper/admin/getting-start/adding-plugins",id:"Paper/admin/getting-start/adding-plugins",title:"\u6dfb\u52a0\u63d2\u4ef6",description:"\u63d2\u4ef6\u662f\u4ece Paper \u5185\u7f6e\u7684\u914d\u7f6e\u6587\u4ef6\u5ef6\u7533\u5230\u670d\u52a1\u5668\u6e38\u620f\u5185\u5bb9\u4e2d\u6700\u5f3a\u5927\u7684\u65b9\u5f0f\u3002\u63d2\u4ef6\u63d0\u4f9b\u7684\u65b0\u529f\u80fd\u4ece\u53ef\u4ee5\u8ba9\u559d\u725b\u5976\u540c\u65f6\u6062\u590d\u9965\u997f\u503c\u3001\u4f7f\u67af\u6728\u751f\u957f\u4e3a\u53c2\u5929\u5927\u6811\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u670d\u52a1\u5668\u6dfb\u52a0\u4e00\u4e2a\u72ec\u521b\u7684\u6e38\u620f\u73a9\u6cd5\u3002",source:"@site/docs/Paper/admin/getting-start/adding-plugins.md",sourceDirName:"Paper/admin/getting-start",slug:"/Paper/admin/getting-start/adding-plugins",permalink:"/Doc/Paper/admin/getting-start/adding-plugins",draft:!1,editUrl:"https://github.com/Happy-clo/Doc/tree/main/docs/Paper/admin/getting-start/adding-plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8ba9\u6211\u4eec\u5f00\u59cb\u5427",permalink:"/Doc/Paper/admin/getting-start/"},next:{title:"\u8fc1\u79fb\u6570\u636e",permalink:"/Doc/Paper/admin/getting-start/migration"}},o={},u=[{value:"\u5bfb\u627e\u63d2\u4ef6",id:"\u5bfb\u627e\u63d2\u4ef6",level:2},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:2},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",level:2},{value:"\u7f3a\u5c11\u4f9d\u8d56",id:"\u7f3a\u5c11\u4f9d\u8d56",level:3},{value:"\u672a\u77e5\u7684 plugin.yml",id:"\u672a\u77e5\u7684-pluginyml",level:3},{value:"\u672a\u77e5\u7684\u63d2\u4ef6\u540d\u79f0",id:"\u672a\u77e5\u7684\u63d2\u4ef6\u540d\u79f0",level:3},{value:"\u5176\u5b83\u60c5\u51b5",id:"\u5176\u5b83\u60c5\u51b5",level:3},{value:"\u672a\u8bb0\u5f55\u4efb\u4f55\u65e5\u5fd7",id:"\u672a\u8bb0\u5f55\u4efb\u4f55\u65e5\u5fd7",level:2}],d={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6dfb\u52a0\u63d2\u4ef6"},"\u6dfb\u52a0\u63d2\u4ef6"),(0,i.kt)("p",null,"\u63d2\u4ef6\u662f\u4ece Paper \u5185\u7f6e\u7684\u914d\u7f6e\u6587\u4ef6\u5ef6\u7533\u5230\u670d\u52a1\u5668\u6e38\u620f\u5185\u5bb9\u4e2d\u6700\u5f3a\u5927\u7684\u65b9\u5f0f\u3002\u63d2\u4ef6\u63d0\u4f9b\u7684\u65b0\u529f\u80fd\u4ece\u53ef\u4ee5\u8ba9\u559d\u725b\u5976\u540c\u65f6\u6062\u590d\u9965\u997f\u503c\u3001\u4f7f\u67af\u6728\u751f\u957f\u4e3a\u53c2\u5929\u5927\u6811\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u670d\u52a1\u5668\u6dfb\u52a0\u4e00\u4e2a\u72ec\u521b\u7684\u6e38\u620f\u73a9\u6cd5\u3002  "),(0,i.kt)("admonition",{title:"\u6076\u610f\u4ee3\u7801  ",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u786e\u4fdd\u4f60\u4e0b\u8f7d\u7684\u6e20\u9053\u548c\u4e0b\u8f7d\u7684\u63d2\u4ef6\u662f\u5b89\u5168\u7684\uff01\u63d2\u4ef6\u4e0d\u4f46\u53ef\u4ee5\u65e0\u6761\u4ef6\u7684\u4fee\u6539\u6e38\u620f\u670d\u52a1\u5668\uff0c\u540c\u65f6\u4e5f\u8fd8\u53ef\u4ee5\u4fee\u6539\u7cfb\u7edf\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\u8bf7\u5f53\u5fc3\uff01\u786e\u4fdd\u4f60\u4e0b\u8f7d\u7684\u63d2\u4ef6\u6240\u8fd0\u884c\u7684\u4ee3\u7801\u662f\u5b89\u5168\u7684\u3002")),(0,i.kt)("h2",{id:"\u5bfb\u627e\u63d2\u4ef6"},"\u5bfb\u627e\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5728\u5b89\u88c5\u63d2\u4ef6\u4e4b\u524d\uff0c\u4f60\u5e94\u8be5\u5148\u51c6\u5907\u597d\u4f60\u60f3\u8981\u5b89\u88c5\u7684\u63d2\u4ef6\u3002\u4f60\u53ef\u4ee5\u5728 SpigotMC, BukkitDev, \u6216\u8005\u5728 PaperMC \u8bba\u575b\u4e2d\u627e\u5230\u4f60\u60f3\u8981\u5b89\u88c5\u7684\u63d2\u4ef6\uff0c\u4e5f\u4f1a\u6709\u4e00\u90e8\u5206\u63d2\u4ef6\u5728 GitHub \u4e0a\u53d1\u5e03\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u6709\u6548\u5bfb\u627e\u63d2\u4ef6\u7684\u65b9\u5f0f\u4e0d\u662f\u4f7f\u7528\u5185\u7f6e\u7684\u641c\u7d22\u529f\u80fd\uff0c\u800c\u662f\u5584\u7528\u6d4f\u89c8\u5668\u3002\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"Minecraft plugins"),"\u540e\u9762\u8ddf\u4e0a\u4f60\u60f3\u8981\u4f7f\u7528\u7684\u63d2\u4ef6\u7684\u4e3b\u8981\u529f\u80fd\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u80fd\u627e\u5230\u60f3\u8981\u7684\u63d2\u4ef6\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8bd1\u8005\u6ce8\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n","\u522b\u7528\u767e\u5ea6\uff0c\u7528\u5fc5\u5e94\u3002\u5fc5\u5e94\u641c\u7d22",(0,i.kt)("inlineCode",{parentName:"p"},"Minecraft plugin <\u52a0\u4e0a\u4f60\u8981\u627e\u7684\u63d2\u4ef6\u82f1\u6587\u5173\u952e\u5b57>"))),(0,i.kt)("admonition",{title:"Paper \u4e0e Spigot \u548c Bukkit \u7684\u517c\u5bb9\u6027  ",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Paper \u517c\u5bb9 Bukkit \u548c Spigot \u7684\u63d2\u4ef6\u3002\u9664\u975e\u63d2\u4ef6\u5f3a\u8c03\u4e0d\u652f\u6301 Paper \u670d\u52a1\u7aef\uff0c\u5219\u9ed8\u8ba4\u4ee3\u8868\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5728 Paper \u670d\u52a1\u5668\u4e0a\u4f7f\u7528\u3002  ")),(0,i.kt)("h2",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u4f60\u60f3\u8981\u4f7f\u7528\u7684\u63d2\u4ef6\u3002\u786e\u4fdd\u4e0b\u8f7d\u7684\u63d2\u4ef6\u7684\u662f\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),"\u7ed3\u5c3e\u3002\u6709\u4e9b\u63d2\u4ef6\u4f5c\u8005\u559c\u6b22\u901a\u8fc7\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},".zip"),"\u538b\u7f29\u5305\u7684\u5f62\u5f0f\u5206\u53d1\u63d2\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u89e3\u538b\u7f29\u6b64\u538b\u7f29\u6587\u4ef6\u6765\u83b7\u5f97\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),"\u540e\u7f00\u7ed3\u5c3e\u7684\u63d2\u4ef6\uff1a\u540c\u65f6\u4e5f\u4f1a\u8bf4\u660e\u63d2\u4ef6\u9002\u7528\u4e8e\u54ea\u4e9b\u670d\u52a1\u5668\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5f53\u5728\u672c\u5730\u6709\u4e00\u4efd\u53ef\u7528\u7684\u63d2\u4ef6\u65f6\uff0c\u627e\u5230\u4f60\u7684 Paper \u670d\u52a1\u5668\u6839\u76ee\u5f55\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"plugins"),"\u6587\u4ef6\u5939\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5c06",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),"\u6587\u4ef6\u62d6\u62fd\u5230 plugins \u6587\u4ef6\u5939\u4e2d\u3002\u82e5\u4f60\u4f7f\u7528\u9700\u8981\u8fdc\u7a0b\u8fde\u63a5\u7684\u670d\u52a1\u5668\uff0c\u5219\u9700\u8981\u4f7f\u7528\u9762\u677f\u6216\u8005 SFTP \u4e0a\u4f20\u63d2\u4ef6\u3002\u4e0d\u8fc7\u65e0\u8bba\u4f7f\u7528\u54ea\u79cd\u65b9\u5f0f\u4e0a\u4f20\uff0c\u6700\u7ec8\u5f97\u5230\u7684\u63d2\u4ef6\u4e0e\u8fd0\u884c\u7684\u6548\u679c\u662f\u4e00\u6837\u7684\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u91cd\u542f\u670d\u52a1\u5668\u3002\u4e0d\u51fa\u610f\u5916\u7684\u8bdd\u63d2\u4ef6\u5e94\u8be5\u6b63\u5e38\u52a0\u8f7d\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u63d2\u4ef6\u662f\u5426\u6210\u529f\u52a0\u8f7d\u3002\u5f53\u670d\u52a1\u5668\u542f\u52a8\u5b8c\u6bd5\u540e\uff0c\u5728\u6e38\u620f\u5185\u8f93\u5165",(0,i.kt)("inlineCode",{parentName:"li"},"/plugins"),"\u6216\u8005\u5728\u7ec8\u7aef\u8f93\u5165",(0,i.kt)("inlineCode",{parentName:"li"},"plugins"),"\u518d\u6b21\u68c0\u67e5\u3002\u5bf9\u4e8e\u6210\u529f\u52a0\u8f7d\u7684\u63d2\u4ef6\uff0c\u5728\u63d2\u4ef6\u5217\u8868\u4e2d\u5e94\u5f53\u4ee5\u7eff\u8272\u7684\u63d2\u4ef6\u540d\u663e\u793a\u3002\u5982\u679c\u6ca1\u6709\u5217\u8868\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u63d2\u4ef6\u3001\u6216\u8005\u63d2\u4ef6\u540d\u79f0\u663e\u793a\u4e3a\u7ea2\u8272\u5219\u4ee3\u8868\u6ca1\u6709\u6b63\u5e38\u52a0\u8f7d\uff0c\u9700\u8981\u8fdb\u884c\u6545\u969c\u6392\u67e5\u3002")),(0,i.kt)("h2",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,i.kt)("p",null,"\u6545\u969c\u6392\u67e5\u7684\u7b2c\u4e00\u6b65\u662f\u68c0\u67e5\u670d\u52a1\u5668\u542f\u52a8\u65e5\u5fd7\u3002\u670d\u52a1\u5668\u6700\u65b0\u65e5\u5fd7\u4f1a\u653e\u5728\u670d\u52a1\u5668\u6839\u76ee\u5f55\u4e0b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"logs/latest.log"),"\u6587\u4ef6\u91cc\u3002\u4f60\u9700\u8981\u4ece\u5934\u5f00\u59cb\u9605\u8bfb\u6574\u4e2a\u65e5\u5fd7\u4ee5\u68c0\u67e5\u63d2\u4ef6\u5e94\u8be5\u5728\u4f55\u65f6\u88ab\u52a0\u8f7d\u5e76\u83b7\u5f97\u4e00\u4efd\u8be6\u7ec6\u7684\u62a5\u9519\u3002"),(0,i.kt)("h3",{id:"\u7f3a\u5c11\u4f9d\u8d56"},"\u7f3a\u5c11\u4f9d\u8d56"),(0,i.kt)("p",null,"\u5f53\u4f60\u770b\u5230\u4e86\u8fd9\u6837\u4e00\u6bb5\u6587\u5b57\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'\norg.bukkit.plugin.UnknownDependencyException:  Unknown/missing dependency plugins:  [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.\n")),(0,i.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u4f60\u5c1d\u8bd5\u5b89\u88c5\u7684\u63d2\u4ef6\u7f3a\u5c11\u4f9d\u8d56\uff08\u524d\u7f6e\uff09\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f9d\u8d56\u662f\u53e6\u4e00\u4e2a Bukkit \u63d2\u4ef6\uff0c\u8981\u60f3\u6b63\u5e38\u52a0\u8f7d\u4f60\u6240\u4f7f\u7528\u7684\u63d2\u4ef6\uff0c\u5fc5\u987b\u5148\u5728\u670d\u52a1\u5668\u4e2d\u5148\u5b89\u88c5\u6b64\u4f9d\u8d56\u63d2\u4ef6\u624d\u884c\u3002\u867d\u7136\u4f60\u4f1a\u770b\u5230\u7684\u62a5\u9519\u53ef\u80fd\u957f\u7684\u79bb\u8c31\uff0c\u4f46\u662f\u6700\u91cd\u8981\u7684\u4e00\u884c\u6587\u672c\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Unknown/missing dependency plugins: [Vault]. Please download and install these plugins to run 'MyAwesomePlugin'.\n")),(0,i.kt)("p",null,"\u8fd9\u53e5\u8bdd\u7684\u610f\u601d\u662f\uff0c\u8981\u60f3\u52a0\u8f7d",(0,i.kt)("inlineCode",{parentName:"p"},"MyAwesomePlugin"),"\u63d2\u4ef6\uff0c\u5219\u5fc5\u987b\u5148\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5",(0,i.kt)("inlineCode",{parentName:"p"},"Vault"),"\u63d2\u4ef6\u3002"),(0,i.kt)("h3",{id:"\u672a\u77e5\u7684-pluginyml"},"\u672a\u77e5\u7684 plugin.yml"),(0,i.kt)("p",null,"\u5f53\u4f60\u770b\u5230\u4e86\u7c7b\u4f3c\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u7684\u6587\u672c\u65f6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Could not load 'plugins/MyAwesomePlugin-1.0.0.jar' in folder 'plugins'\norg.bukkit.plugin.InvalidDescriptionException: Invalid plugin.yml\n")),(0,i.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u4f60\u4e0b\u8f7d\u7684\u63d2\u4ef6\u4e0d\u662f\u6709\u6548\u7684 Paper \u63d2\u4ef6\u3002\u901a\u5e38\u53d1\u751f\u5728\u4ee5\u4e0b\u60c5\u51b5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8be5 Jar \u6587\u4ef6\u4e0d\u9002\u7528\u4e8e Paper\u3002\u5b83\u4e5f\u8bb8\u9002\u7528\u4e8e Forge\u3001Fabric \u7b49 Mod \u670d\u52a1\u7aef/\u5ba2\u6237\u7aef\uff0c\u4e0d\u8fc7 Paper \u65e0\u6cd5\u52a0\u8f7d\u5b83\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u63d2\u4ef6\u672a\u80fd\u5b8c\u5168\u4e0b\u8f7d\u3002\u5f53\u4f60\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"curl"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"li"},"wget"),"\u7b49\u5de5\u5177\u4e0b\u8f7d\u65f6\u65f6\uff0c\u4f60\u53ef\u80fd\u4e0b\u8f7d\u7684\u662f\u67d0\u7f51\u7ad9\u7684\u6e90\u7801\uff0c\u800c\u4f60\u4e0d\u662f\u60f3\u8981\u4e0b\u8f7d\u7684\u63d2\u4ef6\u3002\u5927\u591a\u6570\u51fa\u73b0\u6b64\u60c5\u51b5\u662f\u56e0\u4e3a\u7f51\u7edc\u539f\u56e0\uff0c\u8bf7\u5c1d\u8bd5\u518d\u6b21\u4e0b\u8f7d\u63d2\u4ef6\u3002\u5982\u679c\u4f60\u901a\u8fc7\u9762\u677f\u6216\u8005 SFTP \u4e0a\u4f20\u63d2\u4ef6\uff0c\u786e\u4fdd\u4f60\u7684 SFTP \u5ba2\u6237\u7aef\u662f\u4e8c\u8fdb\u5236\u4f20\u8f93\u6a21\u5f0f\uff0c\u800c\u4e0d\u662f ASCII \u6a21\u5f0f\u3002\u67e5\u770b\u4f60\u4f7f\u7528\u7684 SFTP \u8f6f\u4ef6\u6587\u6863\u6765\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u8bd1\u8005\u8bf4\u660e:"),(0,i.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f60\u4f7f\u7528\u7684\u63d2\u4ef6\u4ee5 Jar \u540e\u7f00\u7ed3\u5c3e\uff0c\u5148\u8bd5\u8bd5\u7528\u538b\u7f29\u8f6f\u4ef6\u6253\u5f00\u5b83\uff01",(0,i.kt)("br",{parentName:"p"}),"\n","\u770b\u770b\u538b\u7f29\u5305\uff08Jar \u901a\u4fd7\u70b9\u8bb2\u662f\u4e00\u4e2a\u538b\u7f29\u5305\uff09\u91cc\u9762\u80fd\u4e0d\u80fd\u627e\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.yml"),"\u3002\u5982\u679c\u627e\u4e0d\u5230\uff0c\u90a3\u4e48\u8fd9\u5c31\u4e0d\u662f\u4e00\u4e2a\u53ef\u4ee5\u4f7f\u7528\u7684\u670d\u52a1\u5668\u63d2\u4ef6\uff01")),(0,i.kt)("h3",{id:"\u672a\u77e5\u7684\u63d2\u4ef6\u540d\u79f0"},"\u672a\u77e5\u7684\u63d2\u4ef6\u540d\u79f0"),(0,i.kt)("p",null,"\u5f53\u4f60\u770b\u5230\u7c7b\u4f3c\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u7684\u6587\u672c\u65f6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Ambiguous plugin name `Essentials' for files `plugins/EssentialsX-2.19.4.jar' and `plugins/Essentialsx-2.20.0-dev.jar' in `plugins'\n")),(0,i.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u4f60\u6709\u4e24\u4e2a\u5b89\u88c5\u7684\u63d2\u4ef6\u662f\u540c\u540d\u7684\uff0cPaper \u4e0d\u652f\u6301\u540c\u540d\u63d2\u4ef6\u540c\u65f6\u52a0\u8f7d\u3002\u6b64\u60c5\u51b5\u53d1\u751f\u5728\u540c\u65f6\u5b89\u88c5\u4e86\u4e24\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"EssentialsX"),"\u63d2\u4ef6\uff1a\u4e00\u4e2a\u662f\u6b63\u5f0f\u7248 2.19.4\uff0c\u4e00\u4e2a\u662f\u5f00\u53d1\u7248\u672c 2.20.0\u3002\u786e\u4fdd\u5b89\u88c5\u7684\u63d2\u4ef6\u6ca1\u6709\u91cd\u590d\u7684\uff0c\u5982\u679c\u6709\uff0c\u5220\u9664\u4e00\u4e2a\u65e7\u7248\u672c\u6216\u4e00\u4e2a\u4f60\u4e0d\u9700\u8981\u7684\u7248\u672c\uff0c\u7136\u540e\u91cd\u542f\u670d\u52a1\u5668\u3002"),(0,i.kt)("h3",{id:"\u5176\u5b83\u60c5\u51b5"},"\u5176\u5b83\u60c5\u51b5"),(0,i.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u4efb\u4f55\u672a\u5728\u4e0a\u8ff0\u5217\u8868\u4e2d\u5217\u51fa\u7684\u60c5\u51b5\uff0c\u8bf7\u5148\u5c1d\u8bd5\u81ea\u5df1\u9605\u8bfb\u5e76\u6392\u67e5\u62a5\u9519\u3002\u5373\u4f7f\u62a5\u9519\u901a\u5e38\u5f88\u957f\uff0c\u4f46\u662f\u5f88\u591a\u60c5\u51b5\u4e0b\u53ea\u9700\u8981\u9605\u8bfb\u524d\u4e24\u884c\u5c31\u80fd\u660e\u767d\u51fa\u73b0\u4e86\u4ec0\u4e48\u9519\u8bef\u3002\u5982\u679c\u8fd8\u662f\u641e\u4e0d\u6e05\u695a\uff0c\u8bf7\u5728 Paper \u7684 Discord \u670d\u52a1\u5668\u4e2d\u627e\u5230 #paper-help \u9891\u9053\u4ee5\u5bfb\u6c42\u5e2e\u52a9\u3002"),(0,i.kt)("h2",{id:"\u672a\u8bb0\u5f55\u4efb\u4f55\u65e5\u5fd7"},"\u672a\u8bb0\u5f55\u4efb\u4f55\u65e5\u5fd7"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u5728\u65e5\u5fd7\u4e2d\u627e\u5230\u5173\u4e8e\u52a0\u8f7d\u63d2\u4ef6\u7684\u6587\u672c\uff0c\u90a3\u4e48\u4f60\u7684\u670d\u52a1\u5668\u5f88\u6709\u53ef\u80fd\u6839\u672c\u6ca1\u6709\u627e\u5230\u8fd9\u4e2a\u63d2\u4ef6\u3002\u670d\u52a1\u5668\u52a0\u8f7d\u63d2\u4ef6\u9700\u8981\u540c\u65f6\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f4d\u4e8e\u670d\u52a1\u5668\u6839\u76ee\u5f55\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"plugins"),"\u6587\u4ef6\u5939\u4e2d\u3002Paper \u4e0d\u4f1a\u5c1d\u8bd5\u5bfb\u627e\u5b50\u76ee\u5f55\u4e2d\u7684\u63d2\u4ef6\uff0c\u66f4\u4e0d\u4f1a\u52a0\u8f7d\u3002\u6240\u6709\u63d2\u4ef6\u5fc5\u987b\u4f4d\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"plugins"),"\u6839\u76ee\u5f55\u4e0b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),"\u540e\u7f00\u7ed3\u5c3e\u3002\u5982\u679c\u5b83\u4e0d\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},".jar"),"\u7ed3\u5c3e\uff0c\u90a3\u4e48\u4f60\u4e0b\u8f7d\u7684\u53ef\u80fd\u4e0d\u662f\u63d2\u4ef6\u672c\u4f53\uff0cPaper \u4e5f\u65e0\u6cd5\u8bfb\u53d6\u3002\u6709\u4e9b\u4f5c\u8005\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},".zip"),"\u538b\u7f29\u5305\u6765\u5206\u53d1\u591a\u4e2a\u63d2\u4ef6\u6587\u4ef6\uff0c\u6240\u4ee5\u5728\u5b89\u88c5\u4e4b\u524d\uff0c\u8bf7\u5148\u89e3\u538b\u7f29\u5b83\u4eec\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u540c\u65f6\u6ee1\u8db3\u4ee5\u4e0a\u4e24\u4e2a\u6761\u4ef6\uff0c\u4f46\u662f\u8fd8\u662f\u770b\u4e0d\u5230\u4efb\u4f55\u5173\u4e8e\u63d2\u4ef6\u52a0\u8f7d\u7684\u65e5\u5fd7\uff0c\u8bf7\u5728 Discord \u670d\u52a1\u5668\u4e2d\u627e\u5230 #paper-help \u9891\u9053\u5bfb\u6c42\u5e2e\u52a9\u3002"))}m.isMDXComponent=!0}}]);