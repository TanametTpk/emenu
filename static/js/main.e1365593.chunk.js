(this.webpackJsonpemenu=this.webpackJsonpemenu||[]).push([[0],{105:function(e,t,n){e.exports=n(169)},110:function(e,t,n){},111:function(e,t,n){},165:function(e,t){},169:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(10),i=n.n(o),u=(n(110),n(111),n(46)),s=n(12),l=n(99),p=n(6),d=n.n(p),f=n(11),m=n(23),v=n(48),h=n.n(v),g=n(217),b=n(96),y=n.n(b),x=n(95),E=n.n(x),w=n(61),O=n.n(w),j=function(e){var t=e.name,n=e.price,r=e.photo,a=e.onRemove,o=e.onAdd,i=e.orderCount;return c.a.createElement("div",{style:{display:"grid",height:"160px",gridTemplateColumns:" 2fr 3fr"}},r&&r.length>0?c.a.createElement("div",{style:{overflow:"hidden",borderRadius:"16px"}},c.a.createElement("img",{src:r+".jpg",alt:t,style:{height:"100%",objectFit:"cover"}})):c.a.createElement("div",{style:{overflow:"hidden",borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightgray"}},c.a.createElement("img",{src:O.a,alt:t,style:{width:"50%"}})),c.a.createElement("div",{style:{padding:"8px 0 8px 18px",display:"flex",overflow:"hidden",justifyContent:"space-between",alignItems:"flex-start",flexDirection:"column"}},c.a.createElement("h3",{style:{margin:0,whiteSpace:"nowrap",textOverflow:"ellipsis"}},t),c.a.createElement("span",{style:{display:"flex"}},c.a.createElement("h2",{style:{margin:0,padding:"0"}},n),"\u0e3f"),c.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",justifyContent:"center",alignItems:"center",textAlign:"center"}},c.a.createElement(g.a,{"aria-label":"delete",variant:"outlined",onClick:a},c.a.createElement(E.a,null)),c.a.createElement("h3",{style:{margin:0}},i||0),c.a.createElement(g.a,{"aria-label":"delete",variant:"outlined",onClick:o},c.a.createElement(y.a,null)))))},k=function(e){var t=e.products,n=e.onAdd,r=e.onRemove,a=e.orders,o=function(e){var t=a.find((function(t){return t.product===e._id}));return t?t.quantity:0};return c.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr",gridGap:"12px",margin:"12px"}},t.map((function(e,t){return c.a.createElement(j,{key:t,name:e.name,price:e.price,photo:e.photo,onAdd:function(){return n(e)},onRemove:function(){return r(e)},orderCount:o(e)})})))},C=function(e){var t=e.orders,n=function(e){return"placed"===e?"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19":"process"===e?"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e17\u0e33":"done"===e?"\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27":e};return c.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr",gridGap:"12px",margin:"12px"}},t.map((function(e,t){var r=e.product,a=r.photo,o=r.name,i=r.price;return c.a.createElement("div",{key:t,style:{display:"grid",height:"120px",gridTemplateColumns:"120px 3fr"}},a&&a.length>0?c.a.createElement("div",{style:{overflow:"hidden",borderRadius:"16px",position:"relative",background:"black"}},c.a.createElement("img",{src:a+".jpg",alt:o,style:{height:"100%",objectFit:"cover",opacity:.4}}),c.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontWeight:"bold"}},n(e.status))):c.a.createElement("div",{style:{overflow:"hidden",borderRadius:"16px",position:"relative",background:"black"}},c.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontWeight:"bold"}},n(e.status))),c.a.createElement("div",{style:{padding:"8px 0 8px 18px",display:"flex",overflow:"hidden",justifyContent:"space-between",alignItems:"flex-start",flexDirection:"column"}},c.a.createElement("h2",{style:{margin:0,whiteSpace:"nowrap",textOverflow:"ellipsis"}},o),c.a.createElement("span",null,"\u0e23\u0e32\u0e04\u0e32 ",i," \u0e1a\u0e32\u0e17"),c.a.createElement("span",null,"\u0e08\u0e33\u0e19\u0e27\u0e19 ",e.quantity," \u0e17\u0e35\u0e48"),c.a.createElement("span",null,"\u0e23\u0e32\u0e04\u0e32\u0e23\u0e27\u0e21 ",i*e.quantity," \u0e1a\u0e32\u0e17")))})))},I=n(210),R=n(211),S=n(21),_=n.n(S),B={SERVER:window._env_?window._env_.SERVER:"http://testapp.statenext.com"},W="".concat(B.SERVER,"/menu"),q=function(e,t,n){return"?groupId=".concat(t,"&userId=").concat(n,"&businessId=").concat(e)},T={getProducts:function(){var e=Object(f.a)(d.a.mark((function e(t,n,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(W,"/").concat(q(t,n,r)));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),getOrders:function(){var e=Object(f.a)(d.a.mark((function e(t,n,r,a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(W,"/orders/").concat(q(t,n,r),"&status=").concat(a));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),placeOrders:function(){var e=Object(f.a)(d.a.mark((function e(t,n,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("".concat(W,"/orders/place").concat(q(t,n,r)));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),addOrder:function(){var e=Object(f.a)(d.a.mark((function e(t,n,r,a,c){var o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={product:a,quantity:c},e.next=3,_.a.post("".concat(W,"/orders/").concat(q(t,n,r)),o);case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c){return e.apply(this,arguments)}}(),removeOrCancelOrder:function(){var e=Object(f.a)(d.a.mark((function e(t,n,r,a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.delete("".concat(W,"/orders/").concat(a,"/").concat(q(t,n,r)));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),getBilling:function(){var e=Object(f.a)(d.a.mark((function e(t,n,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(W,"/bills/").concat(q(t,n,r)));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),checkBill:function(){var e=Object(f.a)(d.a.mark((function e(t,n,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("".concat(W,"/bills/").concat(q(t,n,r)));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),addUser:function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("".concat(B.SERVER,"/users"),{name:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("".concat(B.SERVER,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=n(97),M=n.n(V),N=n(218),z=n(170),A=function(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),o=n[0],i=n[1],u=Object(a.useState)([]),p=Object(m.a)(u,2),v=p[0],b=p[1],y=Object(a.useState)([]),x=Object(m.a)(y,2),E=x[0],w=x[1],O=Object(a.useState)({}),j=Object(m.a)(O,2),S=j[0],_=j[1],W=Object(a.useState)(!1),q=Object(m.a)(W,2),V=q[0],A=q[1],D=Object(s.f)(),U=h.a.parse(e.location.search.substring(1)),F=U.zone,G=U.businessId,P=Object(a.useState)(!1),J=Object(m.a)(P,2),Y=J[0],$=J[1];Object(a.useEffect)((function(){var e;return F&&o&&(e=F,(r=M()(B.SERVER))&&e&&r.emit("join-room",e)),function(e){if(!r)return!0;r.on("add-order",(function(t){return e(null,t)}))}((function(e,t){e||L()})),function(e){if(!r)return!0;r.on("remove-order",(function(){return e(null)}))}((function(e){e||L()})),function(e){if(!r)return!0;r.on("place-order",(function(t){return e(null,t)}))}((function(e){e||(L(),Q())})),function(e){if(!r)return!0;r.on("cancel-order",(function(){return e(null)}))}((function(e){e||Q()})),function(e){if(!r)return!0;r.on("update-status-order",(function(t){return e(null,t)}))}((function(e){e||Q()})),function(e){if(!r)return!0;r.on("check-bill",(function(t){return e(null,t)}))}((function(e){$(!0)})),function(){console.log("Disconnecting socket..."),r&&r.disconnect()}}),[F,o]),Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getProducts(G,F,r);case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getOrders(G,F,r,"incart");case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getBilling(G,F,r);case 2:t=e.sent,console.log(t),_(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(F||G){var r=localStorage.getItem("userId");r?(i(r),e(),t(),n()):K()}else D.push("/notfound")}),[]);var H=function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.addUser(t);case 2:n=e.sent,localStorage.setItem("userId",n._id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){H("user-".concat(Math.floor(1e4*Math.random())))},L=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getOrders(G,F,o,"incart");case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getBilling(G,F,o);case 2:t=e.sent,console.log(t),_(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.addOrder(G,F,o,t._id,1);case 2:if(n=e.sent,r=E.find((function(e){return e._id===n._id}))){e.next=7;break}return w([].concat(Object(l.a)(E),[n])),e.abrupt("return");case 7:w(E.map((function(e){return e._id===r._id?n:e})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=E.find((function(e){return e.product===t._id}))){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,T.removeOrCancelOrder(G,F,o,n._id);case 7:n.quantity-=1,w(E.map((function(e){return e.product===n.product._id?n:e})).filter((function(e){return e.quantity>0})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,T.placeOrders(G,F,o);case 3:return e.next=5,T.getOrders(G,F,o,"incart");case 5:t=e.sent,w(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.checkBill(G,F,o);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,V?c.a.createElement("div",{style:{height:"85vh",overflowY:"scroll"}},c.a.createElement("div",null,c.a.createElement(C,{orders:S.orders}))):c.a.createElement("div",{style:{height:"94vh",overflowY:"scroll"}},c.a.createElement(k,{products:v,onAdd:X,onRemove:Z,orders:E})),V?c.a.createElement("div",{style:{marginBottom:"6vh",height:"9vh",backgroundColor:"white",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 12px",zIndex:5}},c.a.createElement("span",null,"\u0e23\u0e32\u0e04\u0e32\u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 ",S.totalPrice),c.a.createElement(g.a,{variant:"contained",color:"primary",onClick:te},"\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e01\u0e47\u0e1a\u0e40\u0e07\u0e34\u0e19")):null,c.a.createElement(I.a,{position:"fixed",style:{bottom:0,top:"auto",backgroundColor:"white"}},c.a.createElement(R.a,{container:!0,style:{height:"6vh"}},c.a.createElement(R.a,{item:!0,xs:6},c.a.createElement(g.a,{color:"primary",style:{height:"100%",width:"100%",backgroundColor:V?"lightGray":""},onClick:function(){return A(!V)}},"\u0e14\u0e39\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e31\u0e48\u0e07")),c.a.createElement(R.a,{item:!0,xs:6},c.a.createElement(g.a,{color:"primary",style:{height:"100%",width:"100%"},onClick:ee},"\u0e2a\u0e31\u0e48\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23")))),c.a.createElement(N.a,{open:Y,onClick:function(){$(!1)},style:{zIndex:"10000"}},c.a.createElement(z.a,null,c.a.createElement("h1",null,"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e01\u0e47\u0e1a\u0e40\u0e07\u0e34\u0e19"),c.a.createElement("span",null,"\u0e42\u0e1b\u0e23\u0e14\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48"))))},D=n(220),U=n(214),F=n(216),G=n(98),P=n.n(G),J=n(215),Y=n(212),$=n(213),H=Object(Y.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),K=function(e){var t=H(),n=Object(s.f)(),r=Object(a.useState)(""),o=Object(m.a)(r,2),i=o[0],u=o[1],l=h.a.parse(e.location.search.substring(1)),p=l.zone,v=l.businessId;Object(a.useEffect)((function(){p&&v||n.push("/notfound"),localStorage.getItem("userId")&&y()}));var b=function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.addUser(t);case 2:n=e.sent,localStorage.setItem("userId",n._id),y(),u("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){n.push("/emenu/?businessId=".concat(v,"&zone=").concat(p))};return c.a.createElement($.a,{component:"main",maxWidth:"xs",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},c.a.createElement(U.a,null),c.a.createElement("div",{className:t.paper},c.a.createElement(D.a,{className:t.avatar},c.a.createElement(P.a,null)),c.a.createElement(J.a,{component:"h1",variant:"h5"},"\u0e1a\u0e2d\u0e01\u0e0a\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e40\u0e23\u0e32\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e17\u0e48\u0e32\u0e19\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19\u0e2b\u0e19\u0e48\u0e2d\u0e22"),c.a.createElement("form",{className:t.form,noValidate:!0},c.a.createElement(F.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"My Name is",name:"email",autoComplete:"email",autoFocus:!0,value:i,onChange:function(e){var t=e.target.value;return u(t)}}),c.a.createElement(R.a,{container:!0,direction:"column",style:{marginTop:"12px"},spacing:2},c.a.createElement(R.a,{item:!0},c.a.createElement(g.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){i.replace(new RegExp(" ","g"),"").length<1&&alert("\u0e0a\u0e37\u0e48\u0e2d\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"),b(i)}},"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a")),c.a.createElement(R.a,{item:!0},c.a.createElement(g.a,{fullWidth:!0,color:"secondary",className:t.submit,onClick:function(){b("user-".concat(Math.floor(1e4*Math.random())))}},"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e41\u0e1a\u0e1a\u0e44\u0e21\u0e48\u0e1a\u0e2d\u0e01\u0e0a\u0e37\u0e48\u0e2d"))))))};var L=function(){return c.a.createElement(u.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{component:A}),c.a.createElement(s.a,{path:"/login",exect:!0,component:K})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,n){e.exports=n.p+"static/media/photoEmpty.03ad602c.svg"}},[[105,1,2]]]);
//# sourceMappingURL=main.e1365593.chunk.js.map