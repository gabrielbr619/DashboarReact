(this["webpackJsonpdashboard-reactapp"]=this["webpackJsonpdashboard-reactapp"]||[]).push([[0],{11:function(e,t,n){e.exports={header:"styles_header__2ZKeC",sidebarContainer:"styles_sidebarContainer__QtiAq",menu:"styles_menu__22Udf",buttonMain:"styles_buttonMain__1pmQr",buttonMainBtn:"styles_buttonMainBtn__12BHP"}},13:function(e,t,n){e.exports={geralContainer:"styles_geralContainer__13HcJ",navContainer:"styles_navContainer__1gsT5",rightContainer:"styles_rightContainer__1w7l4",userContainer:"styles_userContainer__JbaBk",iconsContainer:"styles_iconsContainer__1FWHn",icon:"styles_icon__2aE5U"}},15:function(e,t,n){e.exports={main:"styles_main__11UoE",geralContainer:"styles_geralContainer__1gxkw",timeConfigContainer:"styles_timeConfigContainer__62Wq0",messageContainer:"styles_messageContainer__1m6SW",dataContainer:"styles_dataContainer__2zMOt"}},16:function(e,t,n){e.exports={geralContainer:"styles_geralContainer__3GbeB",divForm:"styles_divForm__3iGxM",taskNumber:"styles_taskNumber__1PDR7"}},21:function(e,t,n){e.exports={loginDiv:"styles_loginDiv__3lU90",buttonContainer:"styles_buttonContainer__3kYCr",buttonRegister:"styles_buttonRegister__3oFxE"}},22:function(e,t,n){e.exports={loginDiv:"styles_loginDiv__3-Fxe",buttonContainer:"styles_buttonContainer__1lMyI",buttonRegister:"styles_buttonRegister__3k3Do"}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(30),r=n.n(s),c=n(10),i=n(3),o=n(11),u=n.n(o),b=n(2);function j(){return Object(b.jsxs)("div",{className:u.a.sidebarContainer,children:[Object(b.jsxs)("header",{className:u.a.header,children:[Object(b.jsx)("img",{src:"/logo",alt:""}),Object(b.jsx)("h1",{children:"Ol\xe1 Mundo"})]}),Object(b.jsxs)("main",{className:u.a.main,children:[Object(b.jsx)(c.b,{to:"/",children:Object(b.jsx)("div",{className:u.a.buttonMain,children:Object(b.jsx)("button",{type:"button",className:u.a.buttonMainBtn,children:"Home"})})}),Object(b.jsx)(c.b,{to:"/tasks",children:Object(b.jsx)("div",{className:u.a.buttonMain,children:Object(b.jsx)("button",{type:"button",className:u.a.buttonMainBtn,children:"Tasks"})})}),Object(b.jsx)(c.b,{to:"/login",children:Object(b.jsx)("div",{className:u.a.buttonMain,children:Object(b.jsx)("button",{type:"button",className:u.a.buttonMainBtn,children:"Logout"})})})]})]})}var l=n(17),d=n(18),h=n(13),O=n.n(h);function x(){return Object(b.jsx)("div",{className:O.a.geralContainer,children:Object(b.jsxs)("nav",{className:O.a.navContainer,children:[Object(b.jsxs)("div",{className:O.a.buttonContainer,children:[Object(b.jsx)("button",{type:"button",children:"Teste"}),Object(b.jsx)("button",{type:"button",children:"Teste2"})]}),Object(b.jsxs)("div",{className:O.a.rightContainer,children:[Object(b.jsxs)("div",{className:O.a.iconsContainer,children:[Object(b.jsx)(l.a,{icon:d.a,className:O.a.icon}),Object(b.jsx)(l.a,{icon:d.c,className:O.a.icon})]}),Object(b.jsxs)("div",{className:O.a.userContainer,children:[Object(b.jsx)("img",{src:"/pp.jpg",alt:""}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:"Gabriel Lara"})}),Object(b.jsxs)("p",{style:{fontSize:"0.8em"},children:["Admin ",Object(b.jsx)("span",{children:"\u2193"})]})]})]})]})]})})}var p=n(5),m=n(32),f=n(15),v=n.n(f);function g(){var e=Object(a.useState)(new Date),t=Object(p.a)(e,2),n=t[0],s=t[1];return Object(b.jsx)("main",{className:v.a.main,children:Object(b.jsxs)("div",{className:v.a.geralContainer,children:[Object(b.jsxs)("section",{children:[Object(b.jsxs)("div",{className:v.a.timeConfigContainer,children:[Object(b.jsx)("p",{children:"16:31PM"}),Object(b.jsx)(l.a,{icon:d.b})]}),Object(b.jsxs)("div",{className:v.a.messageContainer,children:[Object(b.jsx)("h1",{children:"Bom Dia!"}),Object(b.jsx)("p",{children:"Hoje voc\xea tem x novidades"})]})]}),Object(b.jsx)("section",{id:v.a.dataContainer,children:Object(b.jsx)(m.a,{value:n,onChange:function(e){s(e)},className:"react-calendar"})})]})})}var _=n(6),y=n.n(_),C=n(12),N=n(16),k=n.n(N);var w=Object(a.createContext)({});function D(e){var t=e.children,n=Object(a.useState)(null),s=Object(p.a)(n,2),r=s[0],c=s[1];function i(){return(i=Object(C.a)(y.a.mark((function e(t,n){var a,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(null),a=JSON.stringify({email:t,password:n}),e.next=4,fetch("https://backend-dashboard-react.herokuapp.com/login",{method:"post",body:a,headers:{"Content-Type":"application/json"}});case 4:return s=e.sent,e.t0=c,e.next=8,s.json();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)(w.Provider,{value:{signed:Boolean(r),Login:function(e,t){return i.apply(this,arguments)},user:r},children:t})}function S(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),c=Object(p.a)(r,2),i=c[0],o=c[1],u=Object(a.useState)(""),j=Object(p.a)(u,2),l=j[0],d=j[1],h=Object(a.useState)(!1),O=Object(p.a)(h,2),x=O[0],m=O[1],f=Object(a.useContext)(w);function v(){var e=Object(p.a)(i,1)[0];return 0===e.length?Object(b.jsx)("p",{className:k.a.taskNumber,children:"Voc\xea n\xe3o tem tarefas"}):1===e.length?Object(b.jsx)("p",{className:k.a.taskNumber,children:"Voc\xea tem 1 tarefa"}):Object(b.jsxs)("p",{className:k.a.taskNumber,children:["Voc\xea tem ",e.length," tarefas"]})}function g(e){var t;(t=e,fetch("https://backend-dashboard-react.herokuapp.com/task",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})})).then((function(){return s(!0)}))}return Object(a.useEffect)((function(){function e(){return(e=Object(C.a)(y.a.mark((function e(t,n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n})});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error(a.statusText);case 5:return m(!0),e.abrupt("return",a.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(t,n){return e.apply(this,arguments)})("https://backend-dashboard-react.herokuapp.com/user/task",f.user.user.email).then((function(e){return o([e])})).catch((function(e){console.error(e)}))}),[n]),Object(a.useEffect)((function(){n&&setTimeout((function(){s(!1)}),10)}),[n]),Object(b.jsx)("div",{children:function(){var e=Object(p.a)(i,1)[0];return x&&void 0!==e?Object(b.jsxs)("div",{className:k.a.geralContainer,children:[Object(b.jsx)("h1",{children:"Suas Tarefas"}),Object(b.jsxs)("div",{className:k.a.divForm,children:[Object(b.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(C.a)(y.a.mark((function e(t,n,a){var s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,message:a})});case 2:if((s=e.sent).ok){e.next=5;break}throw new Error(s.statusText);case 5:return m(!0),e.abrupt("return",s.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(e,n,a){return t.apply(this,arguments)}("https://backend-dashboard-react.herokuapp.com/task",f.user.user.email,l).then((function(){d(""),s(!0)}))}(e)},children:[Object(b.jsx)("input",{type:"text",id:"taskInput",placeholder:"Insira uma tarefa",onChange:function(e){return d(e.target.value)},value:l}),Object(b.jsx)("button",{type:"submit",id:"buttonTask",children:"Adicionar"})]}),v(),Object(b.jsx)("ul",{children:e.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("li",{children:e.task},e.id),Object(b.jsx)("span",{role:"button",onClick:function(){return g(e.id)},tabIndex:Number("0"),children:"X"})]})}))})]})]}):Object(b.jsx)("h1",{children:"Carregando..."})}()})}function T(){return Object(b.jsxs)("div",{style:{flexGrow:1},children:[Object(b.jsx)(x,{}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/DashboardReact",component:g}),Object(b.jsx)(i.b,{exact:!0,path:"/DashboardReact/tasks",component:S})]})]})}function R(){return Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)(j,{}),Object(b.jsx)(T,{})]})}var M=n(21),E=n.n(M);function B(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),c=Object(p.a)(r,2),o=c[0],u=c[1],j=Object(i.g)(),l=Object(a.useContext)(w);return Object(b.jsxs)("div",{className:E.a.loginDiv,children:[Object(b.jsx)("h1",{children:"Dashboard Login"}),Object(b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),l.Login(n,o),setTimeout((function(){return j.push("/DashboardReact")}),100)}(e)},children:[Object(b.jsx)("div",{children:Object(b.jsxs)("label",{htmlFor:"email",children:["Insira seu Email",Object(b.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return s(e.target.value)},value:n})]})}),Object(b.jsxs)("label",{htmlFor:"password",children:["Insira sua Senha",Object(b.jsx)("input",{type:"text",name:"password",value:o,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("div",{className:E.a.buttonContainer,children:[Object(b.jsx)("button",{type:"submit",children:"Logar"}),Object(b.jsx)("a",{href:"/DashboardReact/register",children:Object(b.jsx)("button",{type:"button",id:E.a.buttonRegister,children:"Cadastrar"})})]})]})]})}var F=n(22),I=n.n(F);function J(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(""),c=Object(p.a)(r,2),o=c[0],u=c[1],j=Object(i.g)();Object(a.useContext)(w);return Object(b.jsxs)("div",{className:I.a.loginDiv,children:[Object(b.jsx)("h1",{children:"Criar Conta"}),Object(b.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(C.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})});case 2:if((a=e.sent).ok){e.next=5;break}throw new Error(a.statusText);case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),e.preventDefault(),function(e){t.apply(this,arguments)}("https://backend-dashboard-react.herokuapp.com/user"),setTimeout((function(){return j.push("/DashboardReact/login")}),100)}(e)},children:[Object(b.jsx)("div",{children:Object(b.jsxs)("label",{htmlFor:"email",children:["Insira seu Email",Object(b.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return s(e.target.value)},value:n})]})}),Object(b.jsxs)("label",{htmlFor:"password",children:["Insira sua Senha",Object(b.jsx)("input",{type:"text",name:"password",value:o,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("div",{className:I.a.buttonContainer,children:[Object(b.jsx)("button",{type:"submit",children:"Registrar"}),Object(b.jsx)("a",{href:"/DashboardReact/login",children:Object(b.jsx)("button",{type:"button",id:I.a.buttonRegister,children:"Voltar ao login"})})]})]})]})}var L=n(23),P=n(33);function H(e){var t=Object(a.useContext)(w),n=e.component,s=Object(P.a)(e,["component"]);return Object(b.jsx)(i.b,Object(L.a)(Object(L.a)({},s),{},{render:function(e){return t.signed?Object(b.jsx)(n,Object(L.a)({},e)):Object(b.jsx)(i.a,{to:{pathname:"DashboardReact/login",state:{from:e.location}}})}}))}var G=function(){return Object(b.jsx)(D,{children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/DashboardReact/login",component:B}),Object(b.jsx)(i.b,{exact:!0,path:"/DashboardReact/register",component:J}),Object(b.jsx)(H,{path:"/DashboardReact",component:R})]})})};n(47);r.a.render(Object(b.jsx)(c.a,{children:Object(b.jsx)(G,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e1dec712.chunk.js.map