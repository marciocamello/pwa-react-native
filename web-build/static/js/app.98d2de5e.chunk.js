(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{227:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(0),r=n.n(a),c=n(396),o=n(395),i=n(199),u=n(6),l=n.n(u),s=n(4),m=n(226),f=n(28),p=n(5),d=n(119),h=p.a.create({member:{flexDirection:"row",alignItems:"center",marginBottom:20},image:{width:48,height:48,borderRadius:24,marginRight:16}}),v=function(){var e=Object(a.useState)([]),t=l()(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){e.json().then((function(e){e=e.map((function(e){return e.avatar_url="https://avatars1.githubusercontent.com/u/4071580?s=460&u=a4c7ef937ff842afd94b05821fc0cd84225c99c0&v=4",e})),c(e)}))}))}),[]),r.a.createElement(m.a,{contentContainerStyle:{padding:24},data:n,keyExtractor:function(e){return e.email},renderItem:function(e){var t=e.item;return r.a.createElement(s.a,{style:h.member},r.a.createElement(d.a,{style:h.image,source:{uri:t.avatar_url}}),r.a.createElement(f.a,null,t.email))}})},E=n(397),g=function(){return r.a.createElement(s.a,{style:{flex:1}},r.a.createElement(E.a,{style:{flex:1}}))},b=Object(o.a)();function w(){return r.a.createElement(i.a,null,r.a.createElement(b.Navigator,null,r.a.createElement(b.Screen,{options:{tabBarIcon:function(e){var t=e.color;return r.a.createElement(c.a,{name:"home",size:20,color:t})}},name:"Main",component:v}),r.a.createElement(b.Screen,{options:{tabBarIcon:function(e){var t=e.color;return r.a.createElement(c.a,{name:"camera",size:20,color:t})}},name:"Camera",component:g})))}function k(){return r.a.createElement(w,null)}},232:function(e,t,n){n(233),e.exports=n(384)},233:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[232,1,2]]]);
//# sourceMappingURL=app.98d2de5e.chunk.js.map