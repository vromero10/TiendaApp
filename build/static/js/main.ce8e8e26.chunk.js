(this.webpackJsonpstoreapp=this.webpackJsonpstoreapp||[]).push([[0],{163:function(e,t,c){},187:function(e,t,c){},188:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(17),s=c.n(r),i=(c(160),c(23)),o=c(27),l=c(7),j=c(3),b=Object(n.createContext)(),u=function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(j.jsx)(b.Provider,{value:{userId:a,setAuthUserId:function(e){r(e)}},children:e.children})},d=c(12),h=c.n(d),m=c(18);c(163);function p(e){var t=e.producto;return Object(j.jsx)("div",{className:"col-sm-12 col-lg-6 col-xl-3",children:Object(j.jsxs)("div",{className:"card mb-2",children:[Object(j.jsx)("img",{src:t.imagen,className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:t.nombre}),Object(j.jsxs)("p",{className:"font-weight-bold",children:[" S/ ",t.precio]})]}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("div",{className:"d-grid",children:Object(j.jsx)(i.b,{className:"btn btn-dark btn-sm ",to:"/detalle/".concat(t._id),style:{borderRadius:"20px"},children:"Ver detalles"})})})]})})}var x=c(55),O=c.n(x),f="https://backfloresv1.herokuapp.com/api/v1/productos",v=function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(f);case 3:return t=e.sent,c=t.data,e.abrupt("return",c.content);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(f,"/").concat(t));case 3:return c=e.sent,n=c.data,e.abrupt("return",n.content);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(h.a.mark((function e(t){var c,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={"Content-Type":"application/json"},e.next=4,O.a.post(f,t,{headers:c});case 4:return n=e.sent,a=n.data,e.abrupt("return",a.content);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(h.a.mark((function e(t,c){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={"Content-Type":"application/json"},e.next=4,O.a.put("".concat(f,"/").concat(c),t,{headers:n});case 4:return a=e.sent,r=a.data,console.log({data:r}),e.abrupt("return",r.content);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,c){return e.apply(this,arguments)}}(),y=function(e,t){return new Promise((function(c,n){var a=t.put(e);a.on("state_changed",(function(){}),(function(e){n(e)}),(function(){a.snapshot.ref.getDownloadURL().then((function(e){return c(e)}))}))}))};function k(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(8),s=Object(l.a)(r,2),i=s[0],o=s[1],b=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),Object(j.jsxs)("div",{className:"row",children:[c.slice(i,i+8).map((function(e,t){return Object(j.jsx)(p,{producto:e},t)})),Object(j.jsxs)("div",{className:"col-12 d-flex justify-content-between my-3",children:[0===i?null:Object(j.jsx)("button",{className:"btn btn-dark",onClick:function(){o(i-8)},children:"Anterior"}),Object(j.jsx)("div",{}),c.length-i<=8?null:Object(j.jsx)("button",{className:"btn btn-dark",onClick:function(){o(i+8)},children:"Siguiente"})]})]})}function w(){return Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)("h1",{class:"display-6 mb-3",children:"Cat\xe1logo"}),Object(j.jsx)(k,{})]})}var S=c(25);function P(){return Object(j.jsx)("div",{style:{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",backgroundColor:"white",zIndex:"999"},children:Object(j.jsx)("i",{className:"fas fa-spinner fa-spin fa-6x",style:{color:"#DD5E89",position:"relative",top:"calc(50% - 50px)",left:"calc(50% - 50px)"}})})}var I=c(14),D=Object(n.createContext)(),E=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(j.jsx)(D.Provider,{value:{carrito:a,anadirProducto:function(e){for(var t=0;t<a.length;t++)if(a[t]._id===e._id){var c=Object(S.a)(Object(S.a)({},a[t]),{},{cantidad:a[t].cantidad+=e.cantidad}),n=Object(I.a)(a);return n.splice(t,1),n.push(c),void r(Object(I.a)(n))}r([].concat(Object(I.a)(a),[e]))},removerProducto:function(e){var t=Object(I.a)(a);t.splice(e,1),r(t)}},children:e.children})},L=c(43),A=c.n(L);function B(e){var t=e.match.params.id,c=Object(n.useState)({}),a=Object(l.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(!0),b=Object(l.a)(i,2),u=b[0],d=b[1],p=Object(n.useState)(1),x=Object(l.a)(p,2),O=x[0],f=x[1],v=Object(n.useContext)(D),N=(v.carrito,v.anadirProducto),C=Object(o.g)(),y=function(){var e=Object(m.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:c=e.sent,s(c),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y()}),[]),Object(j.jsx)(n.Fragment,{children:u?Object(j.jsx)(P,{}):Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 titulo-detalle mb-4",children:Object(j.jsx)("h1",{children:r.nombre})}),Object(j.jsx)("div",{className:"col-md-12 col-xl-6",children:Object(j.jsx)("img",{src:r.imagen,alt:r.nombre,className:"img-fluid"})}),Object(j.jsxs)("div",{className:"col-md-12 col-xl-6 contenido-detalle",children:[Object(j.jsx)("h5",{className:"mb-2",children:"DESCRIPCI\xd3N"}),Object(j.jsx)("p",{className:"lead",children:r.descripcion}),Object(j.jsxs)("p",{children:["Precio por unidad: S/ ",r.precio]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"btn btn-outline-dark btn-sm",onClick:function(){f(O+1)},children:Object(j.jsx)("i",{className:"fas fa-plus"})}),Object(j.jsxs)("span",{className:"mx-2",children:["Cantidad: ",O]}),Object(j.jsx)("button",{className:"btn btn-outline-dark btn-sm",onClick:function(){1!==O&&f(O-1)},children:Object(j.jsx)("i",{className:"fas fa-minus"})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"detalle-carrito\xba",children:[Object(j.jsxs)("span",{children:["Total: S/ ",O*r.precio]}),Object(j.jsx)("button",{className:"btn btn-dark mt-2",onClick:function(){!function(){var e=Object(S.a)(Object(S.a)({},r),{},{cantidad:O});N(e),A.a.fire({icon:"success",title:"Producto A\xf1adido!",showConfirmButton:!0,showDenyButton:!0,confirmButtonText:"Seguir Comprando",denyButtonText:"Ir al carrito"}).then((function(e){e.isConfirmed?C.push("/"):e.isDenied&&C.push("/carrito")}))}()},children:"A\xd1ADIR AL CARRITO"})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"detalle-info",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"fas fa-shipping-fast fa-lg"}),Object(j.jsx)("span",{children:"Envio y Entrega"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"fas fa-exchange-alt fa-lg"}),Object(j.jsx)("span",{children:"Cambios y Devoluciones"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"fab fa-mailchimp fa-lg"}),Object(j.jsx)("span",{children:"Haz una pregunta"})]})]}),Object(j.jsx)("hr",{})]})]})})})}var z="https://backfloresv1.herokuapp.com/api/v1/categorias",T=function(){var e=Object(m.a)(h.a.mark((function e(t){var c,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={"Content-Type":"application/json"},e.next=4,O.a.post(z,t,{headers:c});case 4:return n=e.sent,a=n.data,e.abrupt("return",a.content);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();function F(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={nombre:c},e.next=4,T(n);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){return r(e)},children:[Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Nombre de la Categoria"}),Object(j.jsx)("input",{className:"form-control",type:"text",value:c,onChange:function(e){a(e.target.value)}}),Object(j.jsx)("small",{className:"form-text",children:"Ej.: Ofertas \xf3 Regalos"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Crear Categoria"})]})})}function R(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"display-6",children:"Crear Categoria"}),Object(j.jsx)(F,{})]})}var U,q=c(29),_=c(127).a.initializeApp({apiKey:"AIzaSyBDWc6glLdL7osILJ0nR1hzYw8S8CvmcqQ",authDomain:"codigoonline2-b650b.firebaseapp.com",projectId:"codigoonline2-b650b",storageBucket:"codigoonline2-b650b.appspot.com",messagingSenderId:"566336241471",appId:"1:566336241471:web:ee542b7c941f5151d71d8a"});function J(){var e=Object(n.useState)({nombre:"",descripcion:"",precio:0,stock:0}),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(o.g)(),s=function(e){a(Object(S.a)(Object(S.a)({},c),{},Object(q.a)({},e.target.name,e.target.value)))},i=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=_.storage().ref("productos/".concat(U.name)),e.next=4,y(U,n);case 4:return a=e.sent,e.next=7,N(Object(S.a)(Object(S.a)({},c),{},{imagen:a}));case 7:e.sent,A.a.fire({icon:"success",title:"Producto Creado!!!",showConfirmButton:!1,timer:2e3}).then((function(){r.push("/dashboard")}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){i(e)},children:[Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Nombre Producto"}),Object(j.jsx)("input",{type:"text",placeholder:"Ej. Chocolates",name:"nombre",className:"form-control",value:c.nombre,onChange:function(e){s(e)}})]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Descripci\xf3n"}),Object(j.jsx)("input",{type:"text",placeholder:"Ej. Chocolates ba\xf1ados en crema",name:"descripcion",className:"form-control",value:c.descripcion,onChange:function(e){s(e)}})]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Precio"}),Object(j.jsx)("input",{type:"number",placeholder:"20",name:"precio",className:"form-control",value:c.precio,onChange:function(e){s(e)}})]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Stock"}),Object(j.jsx)("input",{type:"number",placeholder:"15",name:"stock",className:"form-control",value:c.stock,onChange:function(e){s(e)}})]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Imagen"}),Object(j.jsx)("input",{type:"file",className:"form-control",onChange:function(e){!function(e){var t=e.target.files[0];U=t}(e)}})]}),Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Crear Producto"})]})})}function W(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"display-6",children:"Crear Producto"}),Object(j.jsx)(J,{})]})}var M=c(121);function H(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,c=t.map((function(e){return Object(S.a)(Object(S.a)({},e),{},{id:e._id})})),a(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){r()}),[]);var s=[{field:"nombre",headerName:"Nombre",width:400},{field:"descripcion",headerName:"Descripcion",width:400},{field:"precio",headerName:"Precio",width:200},{field:"_id",width:150,headerName:"Acciones",renderCell:function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.b,{className:"btn btn-info mx-2",to:"/editarproducto/".concat(e.value),children:Object(j.jsx)("i",{className:"fas fa-pencil-alt"})}),Object(j.jsx)(i.b,{className:"btn btn-danger mx-2",to:"/eliminarproducto/".concat(e.value),children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}}];return Object(j.jsxs)("div",{className:"mt-3",children:[Object(j.jsx)("h1",{className:"display-4",children:"Dashboard"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-sm-12 col-md-6 col-xl-4",children:Object(j.jsx)("div",{className:"d-grid",children:Object(j.jsx)("button",{className:"btn btn-primary btn-lg",children:"Crear Producto"})})}),Object(j.jsx)("div",{style:{width:"100%",height:"600px"},children:Object(j.jsx)(M.a,{rows:c,columns:s,pageSize:8})})]})]})}function K(e){var t=e.id,c=Object(n.useState)({nombre:"",descripcion:"",precio:0,stock:0}),a=Object(l.a)(c,2),r=a[0],s=a[1],i=Object(o.g)(),b=function(e){s(Object(S.a)(Object(S.a)({},r),{},Object(q.a)({},e.target.name,e.target.value)))},u=function(){var e=Object(m.a)(h.a.mark((function e(){var c,n,a,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:c=e.sent,n=c.nombre,a=c.descripcion,r=c.precio,i=c.stock,s({nombre:n,descripcion:a,precio:r,stock:i});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);var d=function(){var e=Object(m.a)(h.a.mark((function e(c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,C(Object(S.a)({},r),t);case 3:e.sent,A.a.fire({icon:"success",title:"Producto Editado!!!",showConfirmButton:!1,timer:2e3}).then((function(){i.push("/dashboard")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){d(e)},children:[Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Nombre Producto"}),Object(j.jsx)("input",{type:"text",placeholder:"Ej. Chocolates",name:"nombre",className:"form-control",value:r.nombre,onChange:function(e){b(e)}})]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Descripci\xf3n"}),Object(j.jsx)("input",{type:"text",placeholder:"Ej. Chocolates ba\xf1ados en crema",name:"descripcion",className:"form-control",value:r.descripcion,onChange:function(e){b(e)}})]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Precio"}),Object(j.jsx)("input",{type:"number",placeholder:"20",name:"precio",className:"form-control",value:r.precio,onChange:function(e){b(e)}})]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("label",{className:"form-label",children:"Stock"}),Object(j.jsx)("input",{type:"number",placeholder:"15",name:"stock",className:"form-control",value:r.stock,onChange:function(e){b(e)}})]}),Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Editar Producto"})]})})}function Q(){var e=Object(o.h)().id;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"display-4",children:"Editar Producto"}),Object(j.jsx)(K,{id:e})]})}function V(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),i=s[0],o=s[1],b=function(e){e.preventDefault(),function(e,t){return _.auth().createUserWithEmailAndPassword(e,t)}(c,i).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"display-4",children:"Crear Nuevo Usuario"}),Object(j.jsxs)("form",{onSubmit:function(e){b(e)},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"form-label",children:"Correo"}),Object(j.jsx)("input",{className:"form-control",type:"email",placeholder:"jperez@tecsup.edu.pe",value:c,onChange:function(e){a(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"form-label",children:"Contrase\xf1a"}),Object(j.jsx)("input",{className:"form-control",type:"password",placeholder:"Ingrese una contrase\xf1a segura",value:i,onChange:function(e){o(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Crear Nuevo Usuario"})]})]})}function Y(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1],d=Object(n.useContext)(b),h=(d.userId,d.setAuthUserId),m=Object(o.g)(),p=function(e){e.preventDefault(),function(e,t){return _.auth().signInWithEmailAndPassword(e,t)}(c,i).then((function(e){console.log(e),h(e.user.uid),A.a.fire({icon:"success",title:"Login Exitoso!!!",timer:2e3,showConfirmButton:!1}).then((function(){m.push("/dashboard")}))})).catch((function(e){return console.log(e)}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"display-4",children:"Loguearse"}),Object(j.jsxs)("form",{onSubmit:function(e){p(e)},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"form-label",children:"Correo"}),Object(j.jsx)("input",{className:"form-control",type:"email",placeholder:"jperez@tecsup.edu.pe",value:c,onChange:function(e){a(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"form-label",children:"Contrase\xf1a"}),Object(j.jsx)("input",{className:"form-control",type:"password",placeholder:"Ingrese una contrase\xf1a segura",value:i,onChange:function(e){u(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Ingresar"})]})]})}function G(){var e=Object(n.useContext)(D),t=e.carrito,c=(e.anadirProducto,e.removerProducto);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Carrito"}),0===t.length?Object(j.jsx)("p",{children:"A\xfan no ha agregado productos a su carrito"}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Nombre"}),Object(j.jsx)("th",{children:"Precio"}),Object(j.jsx)("th",{children:"Cantidad"}),Object(j.jsx)("th",{children:"Total"}),Object(j.jsx)("th",{children:"Acciones"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.nombre}),Object(j.jsx)("td",{children:e.precio}),Object(j.jsx)("td",{children:e.cantidad}),Object(j.jsx)("td",{children:e.precio*e.cantidad}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){c(t)},children:Object(j.jsx)("i",{className:"fas fa-trash"})})})]},t)}))})]}),Object(j.jsx)(i.b,{to:"/checkout",className:"btn btn-success btn-lg",children:"Finalizar Compra"})]})]})}var X=c(129),Z=c(239),$=c(242),ee=c(243),te=c(240),ce=c(241);c(49);function ne(){var e=Object(n.useState)([-16.42,-71.51]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useContext)(D).carrito,s=Object(I.a)(r),i=0;r.length>1?i=s.reduce((function(e,t){return e.precio*e.cantidad+t.precio*t.cantidad})):1===r.length&&(i=r[0].precio*r[0].cantidad);var o=Object(X.a)(),b=o.register,u=o.handleSubmit,d=o.errors;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"display-6",children:"Finalizar Compra"}),Object(j.jsxs)("div",{className:"alert alert-success",children:["Tu carrito actual tiene un valor actual de: S/ ",i]}),Object(j.jsxs)("form",{onSubmit:u((function(e){console.log(e)})),children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"form-label",children:"Nombre Completo"}),Object(j.jsx)("input",{type:"text",name:"nombre",className:"form-control",ref:b({required:!0})}),d.nombre&&"required"===d.nombre.type&&Object(j.jsx)("small",{className:"text-danger",children:"El nombre es obligatorio"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"form-label",children:"Direcci\xf3n"}),Object(j.jsx)("input",{type:"text",name:"direccion",className:"form-control",ref:b({required:!0,minLength:8,maxLength:20})}),d.direccion&&"required"===d.direccion.type&&Object(j.jsx)("small",{className:"text-danger",children:"La direcci\xf3n es obligatoria"}),d.direccion&&"minLength"===d.direccion.type&&Object(j.jsx)("small",{className:"text-danger",children:"La Longitud m\xednima es 8"}),d.direccion&&"maxLength"===d.direccion.type&&Object(j.jsx)("small",{className:"text-danger",children:"La Longitud m\xe1xima es 20"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success btn-lg mt-3",children:"Realizar Compra"})]}),Object(j.jsxs)(Z.a,{center:[-16.42,-71.51],zoom:18,style:{height:"500px"},children:[Object(j.jsx)($.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(j.jsx)(ee.a,{children:function(e){return e.on("click",(function(e){var t=e.latlng,c=t.lat,n=t.lng;a([c,n])})),null}}),Object(j.jsx)(te.a,{position:c,children:Object(j.jsx)(ce.a,{children:Object(j.jsx)("p",{children:"Caf\xe9 aqu\xed"})})})]})]})}function ae(){var e=Object(n.useContext)(b).userId;return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(o.b,{path:"/",exact:!0,component:w}),Object(j.jsx)(o.b,{path:"/detalle/:id",exact:!0,component:B}),Object(j.jsx)(o.b,{path:"/crearcategoria",exact:!0,component:R}),Object(j.jsx)(o.b,{path:"/crearproducto",exact:!0,component:W}),Object(j.jsx)(o.b,{path:"/login",exact:!0,component:Y}),Object(j.jsx)(o.b,{path:"/editarproducto/:id",exact:!0,component:Q}),Object(j.jsx)(o.b,{path:"/registrarse",exact:!0,component:V}),Object(j.jsx)(o.b,{path:"/carrito",exact:!0,component:G}),Object(j.jsx)(o.b,{path:"/checkout",exact:!0,component:ne}),Object(j.jsx)(o.b,{path:"/dashboard",exact:!0,render:function(){return null!==e?Object(j.jsx)(H,{}):Object(j.jsx)(o.a,{to:"/login"})}})]})}var re=c.p+"static/media/antara.3fad17ae.png";function se(e){var t=e.salir;return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(i.b,{className:"nav-link text-dark",to:"/dashboard",children:"Dashboard"}),Object(j.jsx)(i.b,{className:"nav-link text-dark",to:"/crearproducto",children:"Crear Producto"}),Object(j.jsx)(i.b,{className:"nav-link text-dark",to:"/crearcategoria",children:"Crear Categoria"}),Object(j.jsx)("span",{className:"nav-link text-dark",onClick:function(){t()},children:"Salir"})]})}function ie(){return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(i.b,{className:"nav-link text-dark",to:"/Login",children:"Login"}),Object(j.jsx)(i.b,{className:"nav-link text-dark",to:"/carrito",children:"Carrito"})]})}function oe(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useContext)(b),s=r.userId,u=r.setAuthUserId,d=Object(o.g)();return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(i.b,{className:"navbar-brand",to:"/",children:[Object(j.jsx)("img",{src:re,alt:"logo",height:"36"}),Object(j.jsx)("span",{className:"mx-2",children:"StoreApp"})]}),Object(j.jsx)("button",{className:"custom-toggler navbar-toggler","data-toggle":"collapse","data-target":"#topnav","aria-expanded":!c,onClick:function(){return a(!c)},children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"".concat(c?"collapse":""," navbar-collapse"),id:"topnav",children:null!==s?Object(j.jsx)(se,{salir:function(){A.a.fire({icon:"danger",title:"Desea Salir?",showConfirmButton:!0,confirmButtonText:"Si, deseo salir",showCancelButton:!0}).then((function(e){!0!==e.isDismissed&&_.auth().signOut().then((function(){u(null),A.a.fire({icon:"success",title:"Se deslogueo exitosamente",showConfirmButton:!1,timer:2e3}).then((function(){d.push("/")}))}))}))}}):Object(j.jsx)(ie,{})})]})})}c(187);function le(){return Object(j.jsx)(i.a,{children:Object(j.jsx)(u,{children:Object(j.jsx)(E,{children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(oe,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(o.d,{children:Object(j.jsx)(ae,{})})})]})})})})}var je=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,245)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(le,{})}),document.getElementById("root")),je()}},[[188,1,2]]]);
//# sourceMappingURL=main.ce8e8e26.chunk.js.map