(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){},27:function(e,a,t){},31:function(e,a,t){e.exports=t(64)},39:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},62:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(28),o=t.n(l),r=t(11),s=t(0),i=(t(39),t(6)),m=t(4);t(26),t(43);function u(e){return c.a.createElement("div",{className:"scoreboard"},c.a.createElement("h4",null,"Score: ",e.score),c.a.createElement("h4",null,"Personal Best: ",e.personalBest),c.a.createElement("h4",null,"Max: 12"))}t(45);function d(e){return c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,"Memory Game"),c.a.createElement(r.b,{to:"/sort"},c.a.createElement("li",null,"Memory Sort")),c.a.createElement(u,{score:e.score,personalBest:e.personalBest}))}function f(e){return c.a.createElement("div",{className:"gameboard"},c.a.createElement(d,{score:e.score,personalBest:e.personalBest}))}t(47);function p(e){return c.a.createElement("div",{className:"character-wrapper"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{className:"char-image",src:e.image,alt:e.alternative})),c.a.createElement("div",null,c.a.createElement("h3",{className:"char-header"},e.charHead)))}var g=t(67);function E(e){var a=[{capital:"",name:"",key:"1",flag:"",punc:""},{capital:"",name:"",key:"2",flag:"",punc:""},{capital:"",name:"",key:"3",flag:"",punc:""},{capital:"",name:"",key:"4",flag:"",punc:""},{capital:"",name:"",key:"5",flag:"",punc:""},{capital:"",name:"",key:"6",flag:"",punc:""},{capital:"",name:"",key:"7",flag:"",punc:""},{capital:"",name:"",key:"8",flag:"",punc:""},{capital:"",name:"",key:"9",flag:"",punc:""},{capital:"",name:"",key:"10",flag:"",punc:""},{capital:"",name:"",key:"11",flag:"",punc:""},{capital:"",name:"",key:"12",flag:"",punc:""}],t=e.score,l=e.best,o=e.itemClicked,r=Object(n.useState)(a),s=Object(m.a)(r,2),u=s[0],d=s[1],f=[];Object(n.useEffect)(function(){if(console.log("useEffect"),void 0!==f){for(var e,a=Object(i.a)(u),t=a.length;0!==t;){e=Math.floor(Math.random()*t),t--;var n=[a[e],a[t]];a[t]=n[0],a[e]=n[1]}d(a)}console.log("------------------------------")},[t,l]),Object(n.useEffect)(function(){console.log("Mount"),v(),console.log("------------------------------")},[]);var E=[],h=[];function b(e){g.a.post("https://countriesnow.space/api/v0.1/countries/capital",{country:h[e].name}).then(function(a){a.data.data.capital?h[e].capital=a.data.data.capital:h[e].capital="No defined capital",h[e].punc=",",e===E.length-1&&setTimeout(function(){console.log(h),f=h,d(h)},100)}).catch(function(e){console.log(e)})}var v=function(){d(a),g.a.get("https://countriesnow.space/api/v0.1/countries/flag/images").then(function(e){if(200===e.status){E=[];for(var a=0;a<12;a++){var t=Math.floor(Math.random()*e.data.data.length);E.includes(t)||E.push(t)}console.log(E),h=[];for(var n=0;n<E.length;n++)h.push(e.data.data[E[n]]),h[n].key=n,b(n)}}),console.log("------------------------------")};return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:v,className:"cust-btn"},"Generate countries"),c.a.createElement("section",{className:"cards-wrapper"},u.map(function(e){return c.a.createElement("div",{className:"memory-card",key:e.key,onClick:function(){o(e.key)}},c.a.createElement(p,{key:e.key,image:e.flag,alternative:"".concat(e.capital).concat(e.punc," ").concat(e.name),charHead:"".concat(e.capital).concat(e.punc," ").concat(e.name)}))})))}function h(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],o=t[1],r=Object(n.useState)(0),s=Object(m.a)(r,2),u=s[0],d=s[1],p=Object(n.useState)(0),g=Object(m.a)(p,2),h=g[0],b=g[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{score:u,personalBest:h}),c.a.createElement("div",null,c.a.createElement(E,{score:u,best:h,itemClicked:function(e){if(l.includes(e))o([]),u>h&&b(u),d(0);else{var a=Object(i.a)(l);a.push(e),o(a),d(u+1)}}})))}var b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};t(53),t(55);function v(e){return c.a.createElement("div",{className:"sort-character-wrapper"},c.a.createElement("div",{className:"sort-image-wrapper"},c.a.createElement("img",{className:"sort-char-image",src:e.image,alt:e.alternative})),c.a.createElement("div",null,c.a.createElement("h3",{className:"sort-char-header"},e.charHead)))}var y=t(23);t(24),t(27);function k(e){return c.a.createElement("div",{className:"win-modal ".concat(e.status),role:"dialog"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},c.a.createElement("div",{className:"modal-content cust-modal"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{id:"exampleModalLongTitle"},"You Won!"),c.a.createElement("button",{type:"button",className:"modal-btn",onClick:e.closeModal,"aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"x"))),c.a.createElement("div",{className:"modal-body"},"You sorted the countries in the right order!"),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"modal-btn",onClick:function(){e.closeModal(),e.restart()}},"Restart")))))}function N(e){return c.a.createElement("div",{className:"lost-modal ".concat(e.status),role:"dialog"},c.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},c.a.createElement("div",{className:"modal-content cust-modal"},c.a.createElement("div",{className:"modal-header text-center"},c.a.createElement("h5",{id:"exampleModalLongTitle"},"You Lost!"),c.a.createElement("button",{type:"button",className:"modal-btn",onClick:e.closeModal,"aria-label":"Close"},c.a.createElement("span",null,"x"))),c.a.createElement("div",{className:"modal-body"},"You did not order the countries correctly!"),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"modal-btn",onClick:function(){e.closeModal(),e.restart()}},"Restart")))))}function O(e){var a=e.newCards,t=e.ogOrder,l=e.shuffle,o=Object(n.useState)("off"),s=Object(m.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)("off"),f=Object(m.a)(d,2),p=f[0],g=f[1];function E(){u("off"),g("off")}return c.a.createElement("div",{className:"sort-header d-flex flex-column align-items-center mb-3"},c.a.createElement("h2",{className:"memory-sort-header mb-2"},"Memory Sort"),c.a.createElement(r.b,{to:"/"},c.a.createElement("li",{className:"mb-2"},"Memory Shuffle")),c.a.createElement("div",{className:"sort-btn-container text-center"},c.a.createElement("button",{className:"shuffle-cards cust-btn",onClick:function(e){return l(e)}},"Start"),c.a.createElement("button",{className:"submit-cards off cust-btn","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:function(){u("win"),console.log({newCards:a}),console.log({ogOrder:t}),a.forEach(function(e,a){e.key!==t[a].key&&(u("off"),g("lost"))}),console.log(i)}},"Finished!")),c.a.createElement(k,{restart:e.restart,closeModal:E,status:i}),c.a.createElement(N,{restart:e.restart,closeModal:E,status:p}))}function j(e){var a=Object(n.useState)([{}]),t=Object(m.a)(a,2),l=t[0],o=t[1],r=Object(n.useState)([]),s=Object(m.a)(r,2),u=s[0],d=s[1],f=Object(n.useState)([{}]),p=Object(m.a)(f,2),E=p[0],h=p[1],b=[{capital:"",name:"",key:"1",flag:"",punc:""},{capital:"",name:"",key:"2",flag:"",punc:""},{capital:"",name:"",key:"3",flag:"",punc:""},{capital:"",name:"",key:"4",flag:"",punc:""},{capital:"",name:"",key:"5",flag:"",punc:""},{capital:"",name:"",key:"6",flag:"",punc:""},{capital:"",name:"",key:"7",flag:"",punc:""},{capital:"",name:"",key:"8",flag:"",punc:""}],k=[],N=[];function j(e){g.a.post("https://countriesnow.space/api/v0.1/countries/capital",{country:N[e].name}).then(function(a){a.data.data.capital?N[e].capital=a.data.data.capital:N[e].capital="None",N[e].punc=",",e===k.length-1&&setTimeout(function(){console.log(N),o(N)},100)}).catch(function(e){console.log(e)})}Object(n.useEffect)(function(){console.log("Mount"),M(),console.log("------------------------------")},[]);var M=function(){o(b),g.a.get("https://countriesnow.space/api/v0.1/countries/flag/images").then(function(e){if(200===e.status){k=[];for(var a=0;a<8;a++){var t=Math.floor(Math.random()*e.data.data.length);k.includes(t)||k.push(t)}console.log(k),N=[];for(var n=0;n<k.length;n++)N.push(e.data.data[k[n]]),N[n].key=n,j(n)}}),console.log("------------------------------")};return c.a.createElement("div",{className:"memory-sort-container"},c.a.createElement("div",{className:"memory-sort-header"},c.a.createElement(O,{restart:M,shuffle:function(e){if(e.target.nextSibling.classList.remove("off"),e.target.classList.add("off"),d(l),void 0!==l){for(var a,t=Object(i.a)(l),n=t.length;0!==n;){a=Math.floor(Math.random()*n),n--;var c=[t[a],t[n]];t[n]=c[0],t[a]=c[1]}o(t)}},newCards:E,ogOrder:u})),c.a.createElement(y.a,{onDragEnd:function(e){if(console.log(e),e.destination){var a=Array.from(l),t=a.splice(e.source.index,1),n=Object(m.a)(t,1)[0];a.splice(e.destination.index,0,n),o(a),h(a)}}},c.a.createElement(y.c,{droppableId:"grid-cell-sort"},function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"grid-sort"}),l.map(function(e,a){return c.a.createElement(y.b,{key:e.key,draggableId:"".concat(e.key),index:a},function(a){return c.a.createElement("div",Object.assign({className:"grid-cell-sort",key:e.key},a.draggableProps,a.dragHandleProps,{ref:a.innerRef}),c.a.createElement(v,{key:e.key,image:e.flag,alternative:"".concat(e.capital).concat(e.punc," ").concat(e.name),charHead:"".concat(e.capital).concat(e.punc," ").concat(e.name)}))})}),e.placeholder)})))}var M=function(){return c.a.createElement(r.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",element:c.a.createElement(b,null)}),c.a.createElement(s.a,{path:"/sort",element:c.a.createElement(j,null)})))},w=(t(62),function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,66)).then(function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,l=a.getLCP,o=a.getTTFB;t(e),n(e),c(e),l(e),o(e)})});o.a.createRoot(document.getElementById("root")).render(c.a.createElement(M,null)),w()}},[[31,3,2]]]);
//# sourceMappingURL=main.6c6fd96b.chunk.js.map