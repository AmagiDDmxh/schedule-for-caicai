(this["webpackJsonpcaicai-schedule"]=this["webpackJsonpcaicai-schedule"]||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a,c=n(7),r=n(0),i=n.n(r),u=n(23),l=n.n(u),o=n(46),s=n(51),d=n(37),j=n(366),b="__STUDENT_LIST__",O=JSON.parse(null!==(a=window.localStorage.getItem(b))&&void 0!==a?a:"[]"),f=Object(r.createContext)({}),g=function(e){var t=e.children,n=Object(r.useState)(!1),a=Object(d.a)(n,2),i=a[0],u=(a[1],Object(r.useState)(O)),l=Object(d.a)(u,2),b=l[0],g=l[1],h=Object(r.useState)(),x=Object(d.a)(h,2),p=x[0];x[1];return Object(c.jsx)(f.Provider,{value:{students:O,addStudent:function(e){g([].concat(Object(s.a)(b),[Object(o.a)({id:Object(j.a)()},e)]))},editStudent:function(){},removeStudent:function(){},editing:i,selectedStudent:p},children:t})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,379)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},x=n(77),p=n.n(x),m=n(98),v=n(148),y=n(361),S=n(371),w=n(363),k=n(69),C=n(368),I=n(106),N=n(364),F=n(370),_=n(360),E=n(373),T=n(374),B=n(375),D=(n(210),n(149)),A=n.n(D),L=n(174),P=n.n(L);A.a.extend(P.a);var M=function(){return Array(function(){var e=A()(),t=e.month()+1,n=e.isLeapYear();return 2===t?n?29:28:([1,3,5,7,8,10,12].includes(t),31)}()).fill(0).map((function(e,t){return t+1}))},R=n(78),J=n(202),z=n(92),U=n(58),H=n(367),V=n(369),W=n(80);n(211);function q(){var e=Object(R.a)(["\n              margin-bottom: 5px;\n            "]);return q=function(){return e},e}function G(){var e=Object(R.a)(["text-align: center;"]);return G=function(){return e},e}function Y(){var e=Object(R.a)(["\n                  color: gray;\n                "]);return Y=function(){return e},e}function K(){var e=Object(R.a)(["\n                border: 1px solid #ccc;\n                display: flex;\n                align-items: center;\n                flex-flow: column nowrap;\n                padding: 5px;\n                margin: 0 2px 1px;\n              "]);return K=function(){return e},e}function Q(){var e=Object(R.a)(["\n        flex-wrap: nowrap;\n      "]);return Q=function(){return e},e}I.a.Option;var X=["monday","tuesday","wendsday","thursday","friday","saturday","sunday"].map((function(e){return e[0].toUpperCase()+e.slice(1)})).map((function(e){return e.slice(0,3)+"."})),Z=function(e){var t=e.selectedBuilding,n=e.buildings,a=e.onChange;return Object(c.jsxs)("select",{className:"date-select",value:null!==t&&void 0!==t?t:"",onChange:function(e){var t=e.target.value;a(t)},children:[Object(c.jsx)("option",{value:"",children:"-"}),n.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]})},$=function(e){e.onSelectRow;var t=e.row,n=e.buildings,a=(e.last,e.onChange),i=e.displaySelect,u=Object(J.a)(e,["onSelectRow","row","buildings","last","onChange","displaySelect"]),l=Object(r.useState)(t),j=Object(d.a)(l,2),b=j[0],O=j[1],f=function(e,t){var r=e.day,u=e.building;return i?Object(c.jsx)(Z,{selectedBuilding:u,buildings:n,onChange:function(e){var n=[].concat(Object(s.a)(b.slice(0,t)),[{day:r,building:e}],Object(s.a)(b.slice(t+1)));O(n),a(n)}}):Object(c.jsx)("span",{children:u?"No. ".concat(u):"-"})};return Object(c.jsx)(z.a,Object(o.a)(Object(o.a)({},u),{},{className:Object(W.a)(Q()),children:t.map((function(e,t){var n=e.day,a=e.building;return Object(c.jsx)(U.a,{style:{width:"14.25%"},children:Object(c.jsxs)("div",{className:Object(W.a)(K()),children:[Object(c.jsx)("span",{className:Object(W.a)(Y()),children:n}),f({day:n,building:a},t)]})},n)}))}))},ee=function(e){var t=e.onChange,n=e.workdays,a=e.buildings,r=e.displaySelect,i=Object(H.a)(7,n),u=null===r||void 0===r||r,l=function(e,n){console.log("row change",e);var a=[].concat(Object(s.a)(i.slice(0,n)),[e],Object(s.a)(i.slice(n+1)));null===t||void 0===t||t(Object(V.a)(a))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z.a,{children:X.map((function(e,t){return Object(c.jsx)(U.a,{flex:3,className:Object(W.a)(G()),children:e},e)}))}),Object(c.jsx)("div",{className:"",children:i.map((function(e,t){return Object(c.jsx)($,{className:Object(W.a)(q()),row:e,onChange:function(e){return l(e,t)},buildings:a,displaySelect:u,last:t===i.length-1},"week".concat(t))}))})]})},te=I.a.Option,ne=(["monday","tuesday","wendsday","thursday","friday","saturday","sunday"].map((function(e){return e[0].toUpperCase()+e.slice(1)})).map((function(e){return e.slice(0,3)+"."})),function(e){var t=e.onAddStudent,n=e.onSaveStudent,a=e.student,i=e.isEdit,u=e.buildings,l=Object(r.useMemo)((function(){return M()}),[]),s=N.a.useForm(),b=Object(d.a)(s,1)[0],O=Object(r.useState)(l.map((function(e){return{day:e}}))),f=Object(d.a)(O,2),g=f[0],h=f[1];Object(r.useEffect)((function(){if(a&&i){var e=Object.entries(a).map((function(e){var t=Object(d.a)(e,2);return{name:t[0],value:t[1]}}));b.setFields(e),h(a.workdays)}}),[a,i,b]);var x=function(){var e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.validateFields();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:n=Object(o.a)(Object(o.a)({},b.getFieldsValue()),{},{workdays:g}),i&&n.id===a.id&&(n.id=Object(j.a)()),t(n),y();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.validateFields();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:t=Object(o.a)(Object(o.a)({},b.getFieldsValue()),{},{workdays:g}),n(t),y();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){b.resetFields(),h(l.map((function(e){return{day:e}})))};return Object(c.jsxs)(N.a,{form:b,name:"student",layout:"vertical",initialValues:{isManager:!1},children:[Object(c.jsx)(N.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Missing name"}],children:Object(c.jsx)(C.a,{placeholder:"Name of the student"})}),Object(c.jsx)(N.a.Item,{name:"isManager",valuePropName:"checked",label:"Is She or He a Manager?",children:Object(c.jsx)(F.a,{})}),Object(c.jsx)(N.a.Item,{label:"Living Building",name:"building",rules:[{required:!0,message:"Missing building"}],children:Object(c.jsx)(I.a,{children:u.map((function(e){return Object(c.jsx)(te,{value:e,children:e},e)}))})}),Object(c.jsx)(N.a.Item,{label:"Student ID",name:"id",children:Object(c.jsx)(C.a,{placeholder:"Student ID"})}),Object(c.jsx)(N.a.Item,{name:"workdays",label:"Workdays",children:Object(c.jsx)(ee,{buildings:u,workdays:g,onChange:function(e){h(e)}})}),Object(c.jsx)(_.a,{}),i&&Object(c.jsx)(N.a.Item,{children:Object(c.jsx)(k.a,{type:"primary",block:!0,icon:Object(c.jsx)(E.a,{}),onClick:v,children:"Save Changes"})}),Object(c.jsx)(N.a.Item,{children:Object(c.jsx)(k.a,{type:"primary",block:!0,icon:Object(c.jsx)(T.a,{}),onClick:x,children:i?"Duplicate Student":"Add Student"})}),Object(c.jsx)(N.a.Item,{children:Object(c.jsx)(k.a,{type:"default",block:!0,htmlType:"button",icon:Object(c.jsx)(B.a,{}),onClick:y,children:"Reset Form"})})]})}),ae=n(362),ce=n(365),re=n(376),ie=n(377),ue=function(e){var t=e.students,n=e.onSelectStudent,a=e.onRemoveStudent,r=e.buildings,i=e.loading,u=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"ID",dataIndex:"id",key:"id"},{title:"Workdays",dataIndex:"workdays",key:"workdays",width:800,render:function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(ee,{workdays:e,displaySelect:!1,buildings:r})})}},{title:"Total Workday",dataIndex:"total",key:"total"},{title:"Action",key:"action",render:function(e,t){return Object(c.jsxs)(S.b,{children:[Object(c.jsx)(k.a,{type:"ghost",icon:Object(c.jsx)(re.a,{}),onClick:function(){return n(t)},children:"Edit"}),Object(c.jsx)(k.a,{type:"ghost",icon:Object(c.jsx)(ie.a,{}),onClick:function(){return a(t.id)},danger:!0,children:"Remove"})]})}}];return Object(c.jsx)(ae.a,{title:function(){return Object(c.jsx)(ce.a.Title,{children:"Student List"})},columns:u,dataSource:t,size:"small",loading:i,pagination:{hideOnSinglePage:!0}})},le=function(e){return[{title:"Date",dataIndex:"date",fixed:"left",width:40}].concat(Object(s.a)(e.map((function(e){return{title:"Building ".concat(e),dataIndex:"building_".concat(e),width:80,render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ce.a.Paragraph,{children:n}),Object(c.jsx)(ce.a.Paragraph,{children:a})]})}}}))))},oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(e-t))+t},se=function(e){var t=e.buildings,n=e.data,a=e.loading;return Object(c.jsx)(ae.a,{title:function(){return Object(c.jsx)(ce.a.Title,{children:"Student Schedules"})},loading:a,pagination:{pageSize:32,hideOnSinglePage:!0},columns:le(t),dataSource:n,scroll:{x:1280,y:800},size:"small"})},de=n(372),je=n(66),be=n(378);n(353);function Oe(){var e=Object(R.a)(["\n  width: 78px !important;\n  margin-right: 8px !important;\n  vertical-align: top !important;\n"]);return Oe=function(){return e},e}var fe=Object(W.a)(Oe()),ge=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],he=function(e){var t=e.buildings,n=e.onChange,a=Object(r.useState)(!1),i=Object(d.a)(a,2),u=i[0],l=i[1],o=Object(r.useState)(""),j=Object(d.a)(o,2),b=j[0],O=j[1],f=Object(r.useState)(-1),g=Object(d.a)(f,2),h=g[0],x=g[1],p=Object(r.useState)(""),m=Object(d.a)(p,2),v=m[0],y=m[1],S=Object(r.useRef)(null),w=Object(r.useRef)(null);Object(r.useEffect)((function(){}),[t]);var k=function(e){var t=e.target.value;y(t)},I=function(){v&&(n(t.map((function(e,t){return t===h?v:e}))),y(""),x(-1))},N=function(){b&&-1===t.indexOf(b)&&(n([].concat(Object(s.a)(t),[b])),l(!1),O(""))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{style:{marginBottom:10},children:t.map((function(e,a){if(h===a)return Object(c.jsx)(C.a,{ref:w,size:"small",className:fe,value:v,onChange:k,onBlur:I,onPressEnter:I},e);var r=e.length>20,i=Object(c.jsx)(de.a,{className:"edit-tag",closable:!0,color:ge[oe(ge.length)],onClose:function(){return function(e){n(t.filter((function(t){return t!==e})))}(e)},onDoubleClick:function(t){t.preventDefault(),x(a),y(e),console.log(w.current),setTimeout((function(){var e;return null===(e=w.current)||void 0===e?void 0:e.focus()}),0)},children:Object(c.jsx)("span",{children:r?"".concat(e.slice(0,20),"..."):e})},e);return r?Object(c.jsx)(je.a,{title:e,children:i},e):i}))}),u&&Object(c.jsx)(C.a,{ref:S,type:"text",size:"small",className:fe,value:b,onChange:function(e){var t=e.target.value;O(t)},onBlur:N,onPressEnter:N}),!u&&Object(c.jsxs)(de.a,{className:"site-tag-plus",onClick:function(){l(!0),setTimeout((function(){var e;return null===(e=S.current)||void 0===e?void 0:e.focus()}),0)},children:[Object(c.jsx)(T.a,{})," New Building"]}),Object(c.jsxs)(de.a,{className:"site-tag-plus",onClick:function(){return n([])},children:[Object(c.jsx)(be.a,{})," Clean All"]})]})},xe=(n(354),M()),pe=y.a.Content,me=y.a.Sider,ve=y.a.Header;function ye(e,t){var n=Object(r.useState)((function(){try{var n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return t}})),a=Object(d.a)(n,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[c]),[c,i]}var Se=function(){var e=ye(b,[]),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),u=Object(d.a)(i,2),l=u[0],O=u[1],f=Object(r.useState)(!1),g=Object(d.a)(f,2),h=g[0],x=g[1],I=Object(r.useState)(),N=Object(d.a)(I,2),F=N[0],_=N[1],E=ye("__BUILDING_LIST__",[]),T=Object(d.a)(E,2),B=T[0],D=T[1],A=ye("__SCHEDULES__",[]),L=Object(d.a)(A,2),P=L[0],M=L[1];Object(r.useEffect)((function(){var e,t=xe.map((function(e){return{date:e}})),a=Object(v.a)(n);try{for(a.s();!(e=a.n()).done;){var c,r=e.value,i=Object(v.a)(r.workdays);try{for(i.s();!(c=i.n()).done;){var u=c.value,l=u.day,o=u.building;if(o){var s=t[l-1]["building_".concat(o)];s&&!s.includes(r.name)?s.push(r.name):t[l-1]["building_".concat(o)]=[r.name]}}}catch(d){i.e(d)}finally{i.f()}}}catch(d){a.e(d)}finally{a.f()}M(t)}),[n]);var R=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(!0),console.log("import",t),(n=new FileReader).onload=function(e){console.log("reading file:",e);var t=JSON.parse(e.target.result);console.log(t);var n=t.map((function(e){var t,n,a=null!==(t=e.workdays)&&void 0!==t?t:xe.map((function(e){return{day:e}})),c=null!==(n=e.id)&&void 0!==n?n:Object(j.a)();return Object(o.a)(Object(o.a)({},e),{},{total:0,id:c,workdays:a})}));console.log(n),a(n),x(!1)},n.readAsText(t.target.files[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(y.a,{className:"App",children:[Object(c.jsx)(me,{width:"440",children:Object(c.jsxs)(S.b,{direction:"vertical",children:[Object(c.jsx)(w.a,{style:{width:440},children:Object(c.jsx)(he,{buildings:B,onChange:function(e){return D(e)}})}),Object(c.jsx)(w.a,{style:{width:440},children:Object(c.jsx)(ne,{onAddStudent:function(e){var t,c=Object(o.a)(Object(o.a)({},e),{},{id:null!==(t=e.id)&&void 0!==t?t:Object(j.a)(),total:e.workdays.reduce((function(e,t){t.day;return e+(t.building?1:0)}),0)});a([].concat(Object(s.a)(n),[c])),O(!1)},onSaveStudent:function(e){a(n.map((function(t){return t.id===e.id?e:t}))),O(!1),_(void 0)},buildings:B,isEdit:l,student:F})})]})}),Object(c.jsxs)(pe,{children:[Object(c.jsx)(ve,{className:"caiying-header",children:Object(c.jsxs)(S.b,{children:[Object(c.jsx)(k.a,{type:"primary",children:"Auto Fill Blank"}),Object(c.jsx)(C.a,{type:"file",onChange:R,multiple:!1,accept:".json",placeholder:"Import Data"}),Object(c.jsx)(k.a,{type:"default",children:"Export To Excel"}),Object(c.jsx)(k.a,{type:"text",children:"Give It a Like"}),Object(c.jsx)(k.a,{type:"link",children:"Say hello to Amagi"})]})}),Object(c.jsx)(ue,{loading:h,students:n,buildings:B,onSelectStudent:function(e){_(Object(o.a)({},e)),O(!0)},onRemoveStudent:function(e){a(n.filter((function(t){return t.id!==e})))}}),Object(c.jsx)(se,{loading:h,data:P,buildings:B})]})]})};n(357);l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{children:Object(c.jsx)(Se,{})})}),document.getElementById("root")),h()}},[[358,1,2]]]);
//# sourceMappingURL=main.bbd22b08.chunk.js.map