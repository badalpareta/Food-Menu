(this.webpackJsonptagdasingh=this.webpackJsonptagdasingh||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(4),s=a.n(r),n=a(28),c=a(30),i=a(8),o=a(11),d=a(12),l=a(14),h=a(13),u=a(2),p=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).Loc=s.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.Loc.current.value;e.props.history.push("/store/".concat(a))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("form",{action:"",className:"store-selector",onSubmit:this.goToStore,children:[Object(u.jsx)("h2",{children:"Enter Store Location"}),Object(u.jsx)("input",{type:"text",ref:this.Loc,placeholder:"Store Name",required:!0,defaultValue:"Jagatpura-Jaipur"}),Object(u.jsx)("button",{type:"submit",children:"Visit Store"})]})}}]),a}(s.a.Component),j=p,m=a(18),b=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(u.jsx)(r.Fragment,{children:Object(u.jsxs)("header",{className:"top",children:[Object(u.jsxs)("h1",{children:["Tagda",Object(u.jsx)("span",{className:"ofThe"}),"Singh"]}),Object(u.jsx)("h3",{className:"tagline",children:Object(u.jsx)("span",{children:this.props.tagline})})]})})}}]),a}(s.a.Component),O=b,f=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).nameRef=s.a.createRef(),e.priceRef=s.a.createRef(),e.statusRef=s.a.createRef(),e.descRef=s.a.createRef(),e.imageRef=s.a.createRef(),e.createItem=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseInt(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addItem(a),t.currentTarget.reset()},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(u.jsx)(r.Fragment,{children:Object(u.jsxs)("form",{className:"Add-Item-Edit",onSubmit:this.createItem,children:[Object(u.jsx)("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),Object(u.jsx)("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),Object(u.jsxs)("select",{name:"status",ref:this.statusRef,type:"text",placeholder:"Status",children:[Object(u.jsx)("option",{value:"available",children:"Available"}),Object(u.jsx)("option",{value:"unavailable",children:"Sold out"})]}),Object(u.jsx)("textarea",{name:"desc",ref:this.descRef,type:"text",placeholder:"Desc"}),Object(u.jsx)("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),Object(u.jsx)("button",{type:"submit",children:"+Add Item"})]})})}}]),a}(s.a.Component),v=f,x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){var a=Object(m.a)(Object(m.a)({},e.props.dish),{},{[t.currentTarget.name]:t.currentTarget.value});e.props.updateItem(e.props.idx,a)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"Add-Item-Edit",children:[Object(u.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.dish.name}),Object(u.jsx)("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.dish.price}),Object(u.jsxs)("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.dish.status,children:[Object(u.jsx)("option",{value:"available",children:"Available"}),Object(u.jsx)("option",{value:"unavailable",children:"Sold out"})]}),Object(u.jsx)("textarea",{name:"desc",onChange:this.handleChange,value:this.props.dish.desc}),Object(u.jsx)("input",{name:"image",onChange:this.handleChange,value:this.props.dish.image}),Object(u.jsx)("button",{onClick:function(){return e.props.deleteItem(e.props.idx)},children:"Remove Item"})]})}}]),a}(s.a.Component),g=x,y=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)(r.Fragment,{children:Object(u.jsxs)("div",{className:"inventory",children:[Object(u.jsx)("h2",{children:"Inventory"}),Object.keys(this.props.dish).map((function(t){return Object(u.jsx)(g,{idx:t,dish:e.props.dish[t],updateItem:e.props.updateItem,deleteItem:e.props.deleteItem},t)})),Object(u.jsx)(v,{addItem:this.props.addItem})]})})}}]),a}(s.a.Component),I=y,C=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).renderOrder=function(t){var a=e.props.dishes[t],r=e.props.order[t];return a?a&&"available"===a.status?Object(u.jsxs)("li",{children:[r,"x",a.name,r*a.price,"\u20b9",Object(u.jsx)("button",{onClick:function(){return e.props.removeFromOrder(t)},children:"\xd7"})]},t):Object(u.jsxs)("li",{children:[a?a.name:"dish"," No longer available"]},t):null},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var r=e.props.dishes[a],s=e.props.order[a];return r&&"available"===r.status?t+s*r.price:t}),0);return Object(u.jsxs)("div",{className:"order-wrap",children:[Object(u.jsx)("h2",{children:"Your Order"}),Object(u.jsx)("ul",{className:"order",children:t.map(this.renderOrder)}),Object(u.jsx)("div",{className:"total",children:Object(u.jsxs)("strong",{children:["Total:",a,"\u20b9"]})})]})}}]),a}(s.a.Component),S=C,R=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(){e.props.addToOrder(e.props.idx)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.details,t=e.name,a=e.image,r=e.price,s=e.status,n=e.desc,c="available"===s;return Object(u.jsxs)("li",{className:"menu-dish",children:[Object(u.jsx)("img",{src:a,alt:t}),Object(u.jsxs)("h3",{className:"dish-name",children:[t,Object(u.jsxs)("span",{className:"price",children:[r,"\u20b9"]})]}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("button",{disabled:!c,onClick:this.handleClick,children:c?"Add To Cart":"Sold Out!"})]})}}]),a}(s.a.Component),k=R,N=a(33),T=a(29),A=a.n(T),w=N.a.initializeApp({apiKey:"AIzaSyBEx5i35SyJ2dmtCQYmfZh1TNYwG55zUO4",authDomain:"tagda-singh.firebaseapp.com",databaseURL:"https://tagda-singh-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"tagda-singh",storageBucket:"tagda-singh.appspot.com",messagingSenderId:"258320175816",appId:"1:258320175816:web:761a448b9fdf477cfccbfd",measurementId:"G-HQFPM4QG99"}),D=A.a.createClass(w.database()),F=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).addItem=function(e){var t=Object(m.a)({},r.state.items);t["item".concat(Date.now())]=e,r.setState({items:t})},r.updateItem=function(e,t){var a=Object(m.a)({},r.state.items);a[e]=t,r.setState({items:a})},r.deleteItem=function(e){var t=Object(m.a)({},r.state.items);t[e]=null,r.setState({items:t})},r.addToOrder=function(e){var t=Object(m.a)({},r.state.order);t[e]=t[e]+1||1,r.setState({order:t})},r.removeFromOrder=function(e){var t=Object(m.a)({},r.state.order);delete t[e],r.setState({order:t})},r.state={items:{},order:{}},r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.storeId);e&&this.setState({order:JSON.parse(e)}),this.ref=D.syncState("".concat(this.props.match.params.storeId,"/items"),{context:this,state:"items"})}},{key:"componentWillUnmount",value:function(){D.removeBinding(this.ref)}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"render",value:function(){var e=this,t=this.props;t.match,t.location,t.history;return Object(u.jsxs)("div",{className:"catch-of-the-day",children:[Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)(O,{tagline:"Chatora Street"}),Object(u.jsx)("ul",{className:"dishes",children:Object.keys(this.state.items).map((function(t){return Object(u.jsx)(k,{idx:t,details:e.state.items[t],addToOrder:e.addToOrder},t)}))})]}),Object(u.jsx)(S,{dishes:this.state.items,order:this.state.order,removeFromOrder:this.removeFromOrder}),Object(u.jsx)(I,{addItem:this.addItem,updateItem:this.updateItem,deleteItem:this.deleteItem,loadDefault:this.loadDefault,dish:this.state.items})]})}}]),a}(s.a.Component);var J=function(e){return Object(u.jsx)(c.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(i.a,{path:"/store/:storeId",component:F})]})})};a(49);Object(n.render)(Object(u.jsx)(J,{}),document.querySelector("#main"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b8da94ef.chunk.js.map