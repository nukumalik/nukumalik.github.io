(this.webpackJsonpnukudita=this.webpackJsonpnukudita||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={wrapper:"counter_wrapper__2mVjw",image:"counter_image__O3wvT",counter:"counter_counter__1zQ0l",counter_header:"counter_counter_header__1Qvao",counter_content:"counter_counter_content__3d6oq",counter_item:"counter_counter_item__2UuhL"}},function(e,a,t){e.exports={nd_navbar:"navbar_nd_navbar__3dF5E",nd_navbar_list:"navbar_nd_navbar_list__2gD2i",nd_navbar_item:"navbar_nd_navbar_item__3dX4W",active:"navbar_active__2Wy9j"}},,function(e,a,t){e.exports={wrapper:"chat_wrapper__10kB8",form:"chat_form__1sdGA",list:"chat_list__3oMvK",chat:"chat_chat__2CuRp",chat_header:"chat_chat_header__31iHY",chat_body:"chat_chat_body__24RT_"}},,,function(e,a,t){e.exports={wrapper:"gallery_wrapper__2ZHtN",image:"gallery_image__1Va4D",images:"gallery_images__1ZFlH",active:"gallery_active__2JU8e"}},function(e,a,t){e.exports={wrapper:"schedule_wrapper__3DVso",header:"schedule_header__3OkdK",sections:"schedule_sections__3KqYE",maps:"schedule_maps__3Um-y"}},,,function(e,a,t){e.exports={wrapper:"home_wrapper__2U3DQ",home_content:"home_home_content__1IrUd",overlay:"home_overlay__3W4Gh"}},function(e,a,t){e.exports={wrapper:"splash_wrapper__3ZbR8",overlay:"splash_overlay__3jyzY",content:"splash_content__1cCib"}},,,,,,,,function(e,a,t){e.exports={header:"profile_header__2SPfD",wrapper:"profile_wrapper__jdMtf"}},function(e,a,t){e.exports={wrapper:"person_wrapper__3GxH_",name:"person_name__RqfZF"}},,,function(e,a,t){e.exports={frame:"frame_frame__1rdZd"}},,function(e,a,t){e.exports={wrapper:"play_wrapper__1XRvX"}},,function(e,a,t){e.exports={nukudita:"nukudita_nukudita__1EYRB"}},function(e,a,t){e.exports={wrapper:"section_wrapper__17d4c"}},,,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(30),i=t.n(s),r=(t(42),t(4)),l=t(22),j=t(31),d=t.n(j),m=t(0),o=function(){return Object(m.jsx)("div",{className:d.a.frame})},u=t(2),b=t(9),h=t.n(b),p=function(){var e=Object(c.useState)(""),a=Object(r.a)(e,2),t=a[0],n=a[1],s=Object(u.d)().hash;Object(c.useEffect)((function(){s&&n(s.replace("#",""))}),[s]);var i=function(e){return t===e?h.a.active:""};return Object(m.jsx)("nav",{className:h.a.nd_navbar,children:Object(m.jsxs)("ul",{className:h.a.nd_navbar_list,children:[Object(m.jsx)("li",{className:h.a.nd_navbar_item,children:Object(m.jsx)("a",{href:"#Home",className:i("Home"),children:Object(m.jsx)("i",{className:"material-icons",children:"cabin"})})}),Object(m.jsx)("li",{className:h.a.nd_navbar_item,children:Object(m.jsx)("a",{href:"#Profile",className:i("Profile"),children:Object(m.jsx)("i",{className:"material-icons",children:"favorite_border"})})}),Object(m.jsx)("li",{className:h.a.nd_navbar_item,children:Object(m.jsx)("a",{href:"#Schedule",className:i("Schedule"),children:Object(m.jsx)("i",{className:"material-icons",children:"event"})})}),Object(m.jsx)("li",{className:h.a.nd_navbar_item,children:Object(m.jsx)("a",{href:"#Gallery",className:i("Gallery"),children:Object(m.jsx)("i",{className:"material-icons",children:"auto_awesome_mosaic"})})}),Object(m.jsx)("li",{className:h.a.nd_navbar_item,children:Object(m.jsx)("a",{href:"#Chat",className:i("Chat"),children:Object(m.jsx)("i",{className:"material-icons",children:"chat"})})})]})})},_=t(33),O=t.n(_),x=function(){var e=Object(c.useState)(!0),a=Object(r.a)(e,2),t=a[0],n=a[1];Object(c.useEffect)((function(){var e=document.querySelector("#Music");t?e.play():e.pause()}),[t]);return Object(m.jsx)("div",{className:O.a.wrapper,children:Object(m.jsx)("button",{type:"button",onClick:function(){return n(!t)},children:t?Object(m.jsx)("i",{className:"material-icons",children:"pause"}):Object(m.jsx)("i",{className:"material-icons",children:"play_arrow"})})})},v=t(25),f=t.n(v),g=t(37),N=t(34),k=t(17),w=t(26),y=t(11),S=t.n(y),I=function(){var e=Object(c.useState)({name:"",message:""}),a=Object(r.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)([{name:"Nada Ayu Wardani",message:"Selamat kaka",date:"2021-08-19T09:26:07.173Z",id:1},{name:"Aura",message:"Selamat kaka",date:"2021-08-19T09:27:00.933Z",id:2},{name:"Jajang",message:"Congrats boy",date:"2021-08-19T09:36:49.311Z",id:3}]),i=Object(r.a)(s,2),l=i[0],j=i[1],d=function(e){var a=e.target,t=a.value,c=a.name;n((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(k.a)({},c,t))}))},o=function(){var e=Object(N.a)(f.a.mark((function e(){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.name,c=t.message,j((function(e){return[{id:l.length+1,name:a,message:c,date:new Date}].concat(Object(g.a)(e))})),n({name:"",message:""});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){var a=new Date(e),t=a.getDate(),c=a.getMonth()+1,n=a.getHours(),s=a.getMinutes();return"".concat(t,"/").concat(c," ").concat(n,":").concat(s)};return Object(m.jsxs)("div",{id:"Chat",className:S.a.wrapper,children:[Object(m.jsxs)("div",{className:S.a.form,children:[Object(m.jsx)("h1",{children:"Tulis ucapan"}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"text",name:"name",onChange:d,placeholder:"Nama",value:null===t||void 0===t?void 0:t.name})}),Object(m.jsx)("div",{children:Object(m.jsx)("textarea",{onChange:d,name:"message",placeholder:"Tulis pesan Anda di sini",rows:5,value:null===t||void 0===t?void 0:t.message})}),Object(m.jsx)("button",{type:"button",disabled:!(null===t||void 0===t?void 0:t.name)||!(null===t||void 0===t?void 0:t.message),onClick:o,children:"Submit"}),Object(m.jsx)("h1",{children:"Terimakasih"})]}),Object(m.jsx)("div",{className:S.a.list,children:Object(m.jsx)("ul",{children:l.map((function(e,a){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:S.a.chat,children:[Object(m.jsxs)("div",{className:S.a.chat_header,children:[Object(m.jsx)("strong",{children:null===e||void 0===e?void 0:e.name}),Object(m.jsx)("span",{children:u(null===e||void 0===e?void 0:e.date)})]}),Object(m.jsx)("div",{className:S.a.chat_body,children:null===e||void 0===e?void 0:e.message})]})},a.toString())}))})})]})},D=t(14),C=t.n(D),P=t.p+"static/media/1.ff15c205.jpg",T=t.p+"static/media/2.f0b5e58f.jpg",M=t.p+"static/media/3.3f311d44.jpg",E=t.p+"static/media/4.ef46ef33.jpg",R=t.p+"static/media/5.52a83664.jpg",K=t.p+"static/media/6.fd1c68c7.jpg",A=t.p+"static/media/7.947b8c12.jpg",H=t.p+"static/media/8.809b2820.jpg",B=t.p+"static/media/9.76b02a51.jpg",F=t.p+"static/media/10.2e54a8c4.jpg",Z=t.p+"static/media/11.98ec3038.jpg",W=t.p+"static/media/12.e6f097a3.jpg",G=t.p+"static/media/13.abb97458.jpg",J=t.p+"static/media/14.aab0f3a9.jpg",U=t.p+"static/media/15.be013418.jpg",q=t.p+"static/media/16.b8115169.jpg",Y=t.p+"static/media/17.117d05d7.jpg",L=function(){var e=Object(c.useState)({name:"Image1",file:P}),a=Object(r.a)(e,2),t=a[0],n=a[1],s=[{name:"Image1",file:P},{name:"Image2",file:T},{name:"Image3",file:M},{name:"Image4",file:E},{name:"Image5",file:R},{name:"Image6",file:K},{name:"Image7",file:A},{name:"Image8",file:H},{name:"Image9",file:B},{name:"Image10",file:F},{name:"Image11",file:Z},{name:"Image12",file:W},{name:"Image13",file:G},{name:"Image14",file:J},{name:"Image15",file:U},{name:"Image16",file:q},{name:"Image17",file:Y}];return Object(m.jsxs)("div",{id:"Gallery",className:C.a.wrapper,children:[Object(m.jsx)("h1",{children:"Our Moments"}),Object(m.jsx)("div",{className:C.a.image,children:Object(m.jsx)("img",{alt:null===t||void 0===t?void 0:t.name,src:null===t||void 0===t?void 0:t.file})}),Object(m.jsx)("div",{className:C.a.images,children:s.map((function(e,a){return Object(m.jsx)("img",{alt:"Image ".concat(a),src:null===e||void 0===e?void 0:e.file,className:(null===t||void 0===t?void 0:t.name)===(null===e||void 0===e?void 0:e.name)?C.a.active:"",onClick:function(){return n(e)}})}))})]})},V=t(18),Q=t.n(V),X=t(35),z=t.n(X),$=function(e){var a=e.styles;return Object(m.jsxs)("h1",{className:z.a.nukudita,style:a,children:["Nuku ",Object(m.jsx)("span",{children:"&"})," Dita"]})},ee=function(){return Object(m.jsxs)("div",{id:"Home",className:Q.a.wrapper,children:[Object(m.jsx)("div",{className:Q.a.overlay}),Object(m.jsxs)("div",{className:Q.a.home_content,children:[Object(m.jsx)("i",{children:"Undangan Pernikahan"}),Object(m.jsx)($,{}),Object(m.jsx)("p",{children:"Kamis, 14 Oktober 2021"})]})]})},ae=t(27),te=t.n(ae),ce=t(28),ne=t.n(ce),se=function(e){var a=e.avatar,t=e.name,c=e.status,n=e.father,s=e.mother,i=e.styles;return Object(m.jsxs)("div",{className:ne.a.wrapper,style:i,children:[Object(m.jsx)("img",{alt:t,src:a}),Object(m.jsx)("div",{className:ne.a.name,children:Object(m.jsx)("span",{children:t})}),Object(m.jsx)("strong",{children:c}),Object(m.jsxs)("p",{children:[n," & ",s]})]})},ie=t.p+"static/media/bismillah.4da1efd7.svg",re=t.p+"static/media/avatar_dita.d4dbfa9f.svg",le=t.p+"static/media/avatar_nuku.cb728878.svg",je=function(){return Object(m.jsxs)("div",{id:"Profile",className:te.a.wrapper,children:[Object(m.jsxs)("div",{className:te.a.header,children:[Object(m.jsx)("img",{alt:"bismillah",src:ie}),Object(m.jsxs)("p",{children:["Dengan memohon Rahmat dan Ridho ",Object(m.jsx)("span",{children:"Allah SWT"}),". Kami akan melangsungkan pernikahan."]})]}),Object(m.jsx)(se,{avatar:re,name:"Dita Amditawati, S.Pd",status:"Putri Pertama",father:"Bpk. Susilo, S.Pd",mother:"Ibu Eni Erni, S.Pd",styles:{marginBottom:50}}),Object(m.jsx)(se,{avatar:le,name:"Nuku Malik Sanjaya K., S.E",status:"Putra Pertama",father:"Bpk. Dedi Suhanto",mother:"Ibu Nur Is Sedyaningsih"})]})},de=t(8),me=t.n(de),oe=function(){var e=Object(c.useState)(new Date("2021/10/14").getTime()),a=Object(r.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),l=i[0],j=i[1],d=Object(c.useState)(0),o=Object(r.a)(d,2),u=o[0],b=o[1],h=Object(c.useState)(0),p=Object(r.a)(h,2),_=p[0],O=p[1],x=Object(c.useState)(0),v=Object(r.a)(x,2),f=v[0],g=v[1];return Object(c.useEffect)((function(){t||n(new Date("2021/10/14").getTime())}),[t]),Object(c.useEffect)((function(){setInterval((function(){var e=(new Date).getTime(),a=t-e;j(Math.floor(a/864e5)),b(Math.floor(a%864e5/36e5)),O(Math.floor(a%36e5/6e4)),g(Math.floor(a%6e4/1e3))}),1e3)}),[t]),Object(m.jsx)("div",{className:me.a.wrapper,children:Object(m.jsx)("div",{className:me.a.image,children:Object(m.jsxs)("div",{className:me.a.counter,children:[Object(m.jsx)("div",{className:me.a.counter_header,children:Object(m.jsx)("h1",{children:"Hitung Mundur"})}),Object(m.jsxs)("div",{className:me.a.counter_content,children:[Object(m.jsxs)("div",{className:me.a.counter_item,children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:l})}),Object(m.jsx)("p",{children:"Hari"})]}),Object(m.jsxs)("div",{className:me.a.counter_item,children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:u})}),Object(m.jsx)("p",{children:"Jam"})]}),Object(m.jsxs)("div",{className:me.a.counter_item,children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:_})}),Object(m.jsx)("p",{children:"Menit"})]}),Object(m.jsxs)("div",{className:me.a.counter_item,children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:f})}),Object(m.jsx)("p",{children:"Detik"})]})]})]})})})},ue=t(36),be=t.n(ue),he=function(e){var a=e.title,t=e.contents,c=e.styles;return Object(m.jsxs)("div",{className:be.a.wrapper,style:c,children:[Object(m.jsx)("h1",{children:a}),t.map((function(e){return Object(m.jsx)("p",{children:e},e)}))]})},pe=t(15),_e=t.n(pe),Oe=t.p+"static/media/maps.e72de9b3.svg",xe=function(){return Object(m.jsxs)("div",{id:"Schedule",className:_e.a.wrapper,children:[Object(m.jsx)("div",{className:_e.a.header,children:"Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri Resepsi Pernikahan kami. Yg Insya Allah akan dilaksanakan pada:"}),Object(m.jsx)(he,{title:"Lokasi Acara",contents:["Blok Pahing RT/RW 01/02 Ds. Jerukleueut","Kec. Sindangwangi Kab. Majalengka"]}),Object(m.jsx)("img",{alt:"alamat",src:Oe,className:_e.a.maps}),Object(m.jsxs)("div",{className:_e.a.sections,children:[Object(m.jsx)(he,{title:"Akad Nikah",contents:["Kamis, 14 Oktober 2021","08:00 - Selesai"]}),Object(m.jsx)(he,{title:"Resepsi",contents:["Kamis, 14 Oktober 2021","10:00 - Selesai"]})]}),Object(m.jsx)(oe,{})]})},ve=t(19),fe=t.n(ve),ge=function(e){var a=e.onClick;return Object(m.jsx)("div",{className:fe.a.wrapper,children:Object(m.jsx)("div",{className:fe.a.overlay,children:Object(m.jsxs)("div",{className:fe.a.content,children:[Object(m.jsx)("h3",{children:"We're happy to invite you"}),Object(m.jsx)("h3",{children:"to our wedding"}),Object(m.jsx)($,{styles:{margin:20}}),Object(m.jsx)("button",{type:"button",onClick:function(){a(),document.querySelector("#Music").play()},children:"OPEN INVITATION"})]})})})};var Ne=function(){var e=Object(c.useState)(!0),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(m.jsx)(l.a,{children:t?Object(m.jsx)(ge,{onClick:function(){return n(!t)}}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o,{}),Object(m.jsx)(p,{}),Object(m.jsx)(x,{}),Object(m.jsx)(ee,{}),Object(m.jsx)(je,{}),Object(m.jsx)(xe,{}),Object(m.jsx)(L,{}),Object(m.jsx)(I,{})]})})},ke=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(Ne,{})}),document.getElementById("root")),ke()}],[[50,1,2]]]);
//# sourceMappingURL=main.c6bdca5a.chunk.js.map