(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{140:function(e,t,n){},141:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(11),r=n.n(c),s=(n(60),n(15)),i=n(54),d=n(147),j=n(148),o=n(51),u=n.n(o),l=function(){return u.a.get("/api/persons").then((function(e){return e.data}))},b=(n(79),n(52)),f=n.n(b),h=n(53),O=n.n(h),x=n(26),m=n.n(x),p=(n(140),n(141),n(7)),g=function(){return Object(p.jsx)("div",{className:"loading"})},v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){l().then((function(e){c(e)}))}),[]);var r=[{dataField:"id",text:"ID"},{dataField:"firstName",text:"First Name"},{dataField:"lastName",text:"Last Name"},{dataField:"age",text:"Age"}],o=x.Search.SearchBar,u={backgroundColor:"#f5f5f5"};return 0===n.length?Object(p.jsx)(g,{}):Object(p.jsx)(d.a,{children:Object(p.jsx)(m.a,{keyField:"id",data:n,columns:r,search:!0,children:function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{inline:!0,className:"search",children:Object(p.jsxs)(j.a.Group,{children:[Object(p.jsx)("h4",{children:"Search:"}),Object(p.jsx)(o,Object(s.a)(Object(s.a)({},e.searchProps),{},{className:"mx-sm-3"}))]})}),Object(p.jsx)(f.a,Object(s.a)(Object(s.a)({keyField:"id",data:n,columns:r,pagination:O()()},e.baseProps),{},{rowStyle:u}))]})}})})};var F=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(v,{})})};r.a.render(Object(p.jsx)(F,{}),document.getElementById("root"))},60:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.0ded3441.chunk.js.map