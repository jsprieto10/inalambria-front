(function(t){function e(e){for(var r,c,u=e[0],i=e[1],s=e[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aeaf8":"e41393d0","chunk-2d0c8e41":"cf8efa01","chunk-2d0cfea6":"0b7c8c28","chunk-d2dfc1c8":"2edfdee2"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(t);var s=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0071":function(t,e,n){},"20c8":function(t,e,n){"use strict";var r=n("0071"),o=n.n(r);o.a},"4ad8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("div",{staticClass:"spinner-border",staticStyle:{width:"3rem",height:"3rem"},attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])]):n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),null===t.getUser?n("router-link",{attrs:{to:"/login"}},[t._v("Login")]):n("span",[n("router-link",{attrs:{to:"/music"}},[t._v("Music")]),t._v(" | "),n("router-link",{attrs:{to:"/add"}},[t._v("Add")]),t._v(" | "),n("router-link",{attrs:{to:"/playlist"}},[t._v("Playlist")]),t._v(" | "),n("a",[t._v("Welcome, "+t._s(t.getUser))])],1)],1),n("router-view",{on:{eventname:t.updateparent}}),n("br"),n("Player",{attrs:{track:t.actual}})],1)])},a=[],c=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fluid-container"},[n("audio",{attrs:{controls:"",autoplay:"",src:t.getUrl,type:"audio/mpeg",crossorigin:"use-credentials"}}),n("span",[t._v(" now playing, "),n("a",[t._v(t._s(t.track.name))]),t._v(" from: "),n("a",[t._v(t._s(t.track.artist))])])])}),u=[],i={props:{track:Object},computed:{getUrl:function(){var t=this.$props.track?this.$props.track._id:"";return"https://inalambria.herokuapp.com/tracks/"+t}}},s=i,l=(n("7456"),n("2877")),p=Object(l["a"])(s,c,u,!1,null,"a6a2606a",null),d=p.exports,f={data:function(){return{isLoading:!0,actual:{}}},methods:{updateparent:function(t){this.actual=t}},created:function(){var t=this;fetch("https://inalambria.herokuapp.com/current",{credentials:"include",mode:"cors"}).then((function(t){return t.json()})).then((function(e){console.log(e),e.user?(localStorage.setItem("isAuth",e.user.username),console.log(localStorage)):localStorage.clear(),t.isLoading=!1}))},computed:{getUser:function(){return localStorage.getItem("isAuth")}},components:{Player:d}},m=f,h=(n("5c0b"),Object(l["a"])(m,o,a,!1,null,null,null)),v=h.exports,g=(n("b0c0"),n("8c4f")),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Headphones",height:"250px",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to YourMusic streaming app"}})],1)},_=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("h3",[t._v("Our team")]),t._m(0)])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/jsprieto10",target:"_blank",rel:"noopener"}},[t._v("jsprieto10")])])])}],j={name:"HelloWorld",props:{msg:String}},w=j,O=(n("20c8"),Object(l["a"])(w,y,k,!1,null,"4e17ee3b",null)),S=O.exports,P={name:"Home",components:{HelloWorld:S}},x=P,L=Object(l["a"])(x,b,_,!1,null,null,null),E=L.exports;r["default"].use(g["a"]);var A=[{path:"/",name:"Home",component:E},{path:"/music",name:"Music",component:function(){return n.e("chunk-d2dfc1c8").then(n.bind(null,"cc0f"))}},{path:"/playlist",name:"Playlist",component:function(){return n.e("chunk-2d0cfea6").then(n.bind(null,"666f"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d0c8e41").then(n.bind(null,"578a"))}},{path:"/add",name:"Add",component:function(){return n.e("chunk-2d0aeaf8").then(n.bind(null,"0ab3"))}}],H=new g["a"]({mode:"history",routes:A});H.beforeEach((function(t,e,n){console.log(t.name,localStorage.getItem("isAuth")),"Login"===t.name&&localStorage.getItem("isAuth")?n({name:"Home"}):"Login"===t.name||localStorage.getItem("isAuth")?n():n({name:"Login"})}));var $=H,C=n("2f62");r["default"].use(C["a"]);var M=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=n("5f5b"),T=n("b1e0");n("ab8b"),n("2dd8");r["default"].use(I["a"]),r["default"].use(T["a"]),r["default"].config.productionTip=!1,new r["default"]({router:$,store:M,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},7456:function(t,e,n){"use strict";var r=n("4ad8"),o=n.n(r);o.a},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.e32126c1.png"}});
//# sourceMappingURL=app.7d28d484.js.map