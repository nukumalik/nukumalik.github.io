(this["webpackJsonpboilerplate-react-app"]=this["webpackJsonpboilerplate-react-app"]||[]).push([[3],{37:function(e,t,a){e.exports=a.p+"static/media/background-dark.f8b3b99e.svg"},38:function(e,t,a){e.exports=a.p+"static/media/background-primary.c148ed78.svg"},39:function(e,t,a){e.exports=a.p+"static/media/photo.dd518563.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/title.88facb6e.svg"},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),l=a.n(o),i=a(12),c=a(37),s=a.n(c),m=a(38),d=a.n(m),g=a(39),u=a.n(g),p={BACKGROUND_DARK:s.a,BACKGROUND_PRIMARY:d.a,PHOTO:u.a},f=a(40),b={TITLE:a.n(f).a},v=p,h=b,x=function(e){var t=e.classes,a=e.fixed,o=e.logo,c=e.title,s=e.titlePosition,m=[{link:"/",label:"Home"},{link:"/about",label:"About"},{link:"/portfolio",label:"Portfolio"},{link:"/blog",label:"Blog"},{link:"/contact",label:"Contact"}],d=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(i.b,{to:"/",className:"navbar-brand"},o&&r.a.createElement("img",{alt:o,src:o}),c),r.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#NavbarMenu"},r.a.createElement("span",{className:"navbar-toggler-icon"})))},g=function(){var e="navbar-nav";return"left"===s&&(e+=" ml-auto"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"NavbarMenu"},r.a.createElement("ul",{className:e},m.map((function(e,t){return r.a.createElement("li",{className:"nav-item",key:t.toString()},r.a.createElement(i.b,{to:e.link,className:"nav-link"},e.label))}))))},u=l()(t.root,a?"top"===a?"fixed-top":"fixed-bottom":"");return r.a.createElement("div",{className:u},r.a.createElement("nav",{className:"navbar navbar-expand-lg border-0"},"left"===s?r.a.createElement(n.Fragment,null,d(),g()):r.a.createElement(n.Fragment,null,g(),d())))};x.defaultProps={fixed:"",logo:h.TITLE,title:"",titlePosition:"right"};var y=x,E=function(){return{root:{margin:"0 50px",paddingTop:"50px","& > nav.navbar":{"& > .navbar-brand":{fontFamily:"Righteous",fontSize:"36px"},"& > div > ul > li":{margin:"0 20px","&:first-child":{marginLeft:0},"&:last-child":{marginRight:0},"& > a":{color:"#fff",fontFamily:"Righteous",fontSize:"24px","&:hover":{color:"#239580",textDecoration:"none"}}}}}}},k=a(49),N=Object(k.a)(E)(y),R=function(e){var t,a=e.children,n=e.classes,o=e.onClick,l=e.styles,i=e.type;return t="light"===i?n.light:"secondary"===i?n.secondary:n.primary,r.a.createElement("div",{className:t,style:l,onClick:o},a)};R.defaultProps={onClick:function(){},styles:{},type:"primary"};var S=R,w=function(e,t,a){return{color:e,backgroundColor:t,border:a,borderRadius:"10px",cursor:"pointer",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"bold",padding:"18px 34px",width:"fit-content"}},O=function(){return{light:w("#fff","transparent","2px solid #fff"),primary:w("#fff","#239580","none"),secondary:w("#239580","#fff","none")}},I=Object(k.a)(O)(S),z=a(41),D=function(e){var t,a,n,o=e.classes,i=e.children,c=e.color,s=e.family,m=e.letterSpacing,d=e.size,g=e.styles,u=e.weight;t="light"===c?o.colorLight:"active"===c?o.colorActive:o.colorDark,a="primary"===s?o.montserrat:o.righteous,n="light"===u||"400"===u?o.light:"medium"===u||"500"===u?o.medium:"bold"===u||"700"===u?o.bold:"extra-bold"===u||"800"===u?o.extraBold:o.normal;var p=l()(t,a,n);return r.a.createElement("p",{className:p,style:Object(z.a)({fontSize:"".concat(d,"px"),letterSpacing:"".concat(m,"px")},g)},i)};D.defaultProps={color:"dark",family:"primary",letterSpacing:"1",size:"18",styles:{},weight:"normal"};var P=D,A=function(){return{bold:{fontWeight:700},colorActive:{color:"#239580"},colorDark:{color:"#000"},colorLight:{color:"#fff"},extraBold:{fontWeight:800},light:{fontWeight:400},medium:{fontWeight:600},montserrat:{fontFamily:"montserrat"},normal:{fontWeight:500},righteous:{fontFamily:"righteous"}}},B=Object(k.a)(A)(P),C=function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(N,{logo:h.TITLE}),r.a.createElement("div",{className:t.content,style:{marginTop:"120px"}},r.a.createElement("div",{className:t.title},["Do you looking for","Full Stack Developer?"].map((function(e){return r.a.createElement(B,{color:"light",key:e,size:"80",weight:"800"},e)}))),r.a.createElement(B,{color:"active",letterSpacing:"7",size:"28",styles:{marginBottom:"80px"}},"Web Design / Front End / Back End"),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(I,{type:"primary",styles:{marginRight:"40px"}},"More Info"),r.a.createElement(I,{type:"light"},"Hire Me"))))},j=function(){return{root:{backgroundImage:"url(".concat(v.BACKGROUND_DARK,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"101% auto",minHeight:"100vh"},content:{margin:"0 auto",textAlign:"center",width:"fit-content"}}},W=Object(k.a)(j)(C),F=function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.content},r.a.createElement("div",{className:t.image}),r.a.createElement("div",null,r.a.createElement("div",{className:"w-100",style:{paddingLeft:"25px"}},r.a.createElement(B,{color:"light",family:"righteous",size:"72",weight:"600"},"Hi, there")),r.a.createElement("div",{className:t.textBox},r.a.createElement("div",{className:"ml-auto"},r.a.createElement(B,{styles:{width:"400px"},weight:"light"},"\u201cI\u2019m an full stack developer, and i\u2019m passionated person, self learner and love challenge. Share your vision and I\u2019ll help your vision come true.\u201c"),r.a.createElement(B,{weight:"bold"},"Nuku Malik Sanjaya Kusuma"),r.a.createElement(B,{weight:"light",styles:{marginBottom:0}},"JavaScript Developer at SoftwareSeni"))))))},T=function(){return{content:{alignItems:"flex-end",display:"flex"},image:{backgroundImage:"url('".concat(v.PHOTO,"')"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"50%",maxHeight:"371px",maxWidth:"371px",minHeight:"371px",minWidth:"371px",zIndex:100},textBox:{"& > div":{width:"fit-content"},backgroundColor:"#fff",borderRadius:"10px",marginLeft:"-200px",maxWidth:"670px",minWidth:"670px",padding:"24px 34px"},root:{alignItems:"center",backgroundImage:"url('".concat(v.BACKGROUND_PRIMARY,"')"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",minHeight:"100vh"}}},H=Object(k.a)(T)(F),L=function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(W,null),r.a.createElement(H,null))},M=function(){return{root:{backgroundColor:"#eee",overflow:"hidden"}}};t.default=Object(k.a)(M)(L)}}]);
//# sourceMappingURL=3.05050a84.chunk.js.map