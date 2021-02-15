(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(19),o=n.n(a),s=(n(27),n(22)),i=n(13),d=n(9),j=n(7),l=n(2),u=n(1),b=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(u.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};b.defaultProps={title:"steelblue"};var h=b,O=function(e){var t=e.title,n=e.onAdd,c=e.showAdd,r=Object(l.e)();return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:t}),"/"===r.pathname&&Object(u.jsx)(h,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};O.defaultProps={title:"Task tracker"};var x=O,f=function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("p",{children:"Copyright \xa9 2021"}),Object(u.jsx)(j.b,{to:"/about",children:"About"})]})},m=n(21),p=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(u.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(u.jsxs)("h3",{children:[t.text," ",Object(u.jsx)(m.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(u.jsx)("p",{children:t.day})]})},k=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)(p,{task:e,onDelete:n,onToggle:c},e.id)}))})},g=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),j=i[0],l=i[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),O=h[0],x=h[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:j,reminder:O}),o(""),l(""),x(!1)):alert("Please add a task")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Day & Time"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:j,onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control form-control-check",children:[Object(u.jsx)("label",{children:"Set Reminder"}),Object(u.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(u.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},v=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Version 1.0.0"}),Object(u.jsx)(j.b,{to:"/",children:"Go Back"})]})},T=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctor Appointment",day:"Feb 5th at 2.30pm",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th at 2.30pm",reminder:!1}]),o=Object(d.a)(a,2),b=o[0],h=o[1],O=function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);h([].concat(Object(s.a)(b),[n]))},m=function(e){h(b.filter((function(t){return t.id!==e})))},p=function(e){h(b.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))};return Object(u.jsx)(j.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(x,{onAdd:function(){return r(!n)},showAdd:n}),Object(u.jsx)(l.a,{path:"/",exact:!0,render:function(e){return Object(u.jsxs)(u.Fragment,{children:[n&&Object(u.jsx)(g,{onAdd:O}),b.length>0?Object(u.jsx)(k,{tasks:b,onDelete:m,onToggle:p}):"No Tasks To Show"]})}}),Object(u.jsx)(l.a,{path:"/about",component:v}),Object(u.jsx)(f,{})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),y()}},[[34,1,2]]]);
//# sourceMappingURL=main.dbc1829b.chunk.js.map