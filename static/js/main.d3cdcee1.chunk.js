(this["webpackJsonpnukumalik.github.io"]=this["webpackJsonpnukumalik.github.io"]||[]).push([[0],{38:function(e,a,t){e.exports=t(70)},43:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(16),c=t.n(s),l=(t(43),t(10)),o=t(9),i=t(12),u=t(11),m=t(35),E=t(36),d={isLoading:!1,isError:!1,users:[],user:{},repos:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_USERS_PENDING":return{isLoading:!0};case"GET_USERS_REJECTED":return{isLoading:!1,isError:!0};case"GET_USERS_FULFILLED":return{isLoading:!1,isError:!1,users:a.payload.data};case"GET_USER_PENDING":return{isLoading:!0};case"GET_USER_REJECTED":return{isLoading:!1,isError:!0};case"GET_USER_FULFILLED":return{isLoading:!1,isError:!1,user:a.payload.data};case"GET_REPOS_PENDING":return{isLoading:!0};case"GET_REPOS_REJECTED":return{isLoading:!1,isError:!0};case"GET_REPOS_FULFILLED":return{isLoading:!1,isError:!1,repos:a.payload.data};default:return e}},g=Object(u.c)({user:p}),v=Object(m.createLogger)({}),b=Object(u.d)(g,Object(u.a)(v,E.a)),h=t(13),N=t.n(h),f=t(19),L=t.n(f),_=function(e){return{type:"GET_USER",payload:L.a.get("https://api.github.com/users/".concat(e))}},w=function(e){return{type:"GET_REPOS",payload:L.a.get("https://api.github.com/users/".concat(e,"/repos"))}},y=Object(i.b)((function(e){return{user:e.user}}))((function(e){Object(r.useEffect)((function(){var a;a=e.match.params.username,N.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.awrap(e.dispatch(_(a)));case 2:case"end":return t.stop()}}))}),[]);var a=e.user;"/".concat(e.match.params.username,"/repos");return n.a.createElement(r.Fragment,null,a.isLoading&&!a.user&&n.a.createElement("div",{className:"d-flex",style:{width:"100vw",height:"100vh"}},n.a.createElement("div",{className:"align-selft-center"},n.a.createElement("p",null,"Loading"))),!a.isLoading&&a.user&&n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card mb-4"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:a.user.avatar_url,className:"card-img",alt:a.user.login})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},a.user.name),n.a.createElement("p",{className:"card-text"},"Publi Repos: ",a.user.public_repos),n.a.createElement("p",{className:"card-text"},"Followers: ",a.user.followers),n.a.createElement("p",{className:"card-text"},"Following: ",a.user.following),n.a.createElement("p",{className:"card-text"},"Description: ",a.user.bio)))))))})),G=Object(i.b)((function(e){return{user:e.user}}))((function(e){return Object(r.useEffect)((function(){var a;a=e.match.params.username,N.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.awrap(e.dispatch(w(a)));case 2:case"end":return t.stop()}}))}),[]),n.a.createElement(r.Fragment,null,e.user.isLoading&&!e.user.repos&&n.a.createElement("div",{className:"d-flex",style:{width:"100vw",height:"100vh"}},n.a.createElement("div",{className:"align-selft-center"},n.a.createElement("p",null,"Loading"))),n.a.createElement("div",{className:"container"},n.a.createElement("ul",{className:"list-group list-group-flush"},!e.user.isLoading&&e.user.repos.map((function(e,a){return n.a.createElement("li",{key:a.toString(),className:"list-group-item"},n.a.createElement("a",{href:e.html_url,target:"_blank"},e.full_name))})))))})),R=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(l.b,{to:"/",className:"navbar-brand"},"Githuber"),n.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#NavbarMenu","aria-controls":"NavbarMenu"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"NavbarMenu"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{to:"/",className:"nav-link"},"Home"))))))},S=function(){return n.a.createElement(i.a,{store:b},n.a.createElement(l.a,null,n.a.createElement(R,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/:username/repos",component:G}),n.a.createElement(o.a,{path:"/:username",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(66),t(67),t(68);c.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.d3cdcee1.chunk.js.map