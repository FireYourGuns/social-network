(this["webpackJsonpit-kamasutra"]=this["webpackJsonpit-kamasutra"]||[]).push([[3],{92:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__cnCY8",errorMessage:"Dialogs_errorMessage__30XrS",messages:"Dialogs_messages__s9gqT",redBorder:"Dialogs_redBorder__CGrTC"}},93:function(e,s,a){e.exports={logo:"DialogItem_logo__2NKcN",dialog:"DialogItem_dialog__1FO-Y"}},96:function(e,s,a){"use strict";a.r(s);var t=a(49),r=a(1),n=a(3),i=a(0),c=a.n(i),o=a(92),d=a.n(o),j=a(93),u=a.n(j),l=a(13),g=function(e){var s="/Dialogs/"+e.id;return Object(r.jsx)("div",{className:u.a.dialog,children:Object(r.jsxs)(l.b,{to:s,children:[Object(r.jsx)("img",{className:u.a.logo,src:e.ava,alt:"user"}),e.name]})})},b=function(e){return Object(r.jsx)("div",{className:d.a.dialog,children:e.message})},m=a(34),O=a(39),x=function(e){return Object(r.jsx)(m.b,{onSubmit:function(s){e.onSendMessage(s.myMessage),s.myMessage=""},render:function(e){var s=e.handleSubmit,a=e.values;return Object(r.jsxs)("form",{onSubmit:s,children:[Object(r.jsx)(m.a,{name:"myMessage",validate:O.b.maxLength(50),children:function(e){var s=e.input,a=e.meta;return Object(r.jsx)("div",{children:a.error?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",Object(n.a)(Object(n.a)({},s),{},{type:"text",placeholder:"Type your message",rows:"5",cols:"25",className:d.a.redBorder})),Object(r.jsx)("span",{className:d.a.errorMessage,children:a.error})]}):Object(r.jsx)("textarea",Object(n.a)(Object(n.a)({},s),{},{type:"text",placeholder:"Type your message",rows:"5",cols:"25"}))})}}),Object(r.jsx)("button",{type:"submit",disabled:!a.myMessage,children:"Submit"})]})}})},h=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(r.jsx)(g,{ava:e.ava,name:e.name,id:e.id},e.id)})),a=e.dialogsPage.messages.map((function(e){return Object(r.jsx)(b,{message:e.message},e.id)}));return Object(r.jsxs)("div",{className:d.a.dialogs,children:[Object(r.jsx)("div",{children:s}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:d.a.messages,children:a}),Object(r.jsx)(x,{onSendMessage:function(s){e.sendMessage(s)}})]})]})},p=a(9),f=a(18),v=a(19),_=a(21),y=a(20),M=a(5),N=function(e){return{isAuth:e.auth.isAuth}},D=function(e){var s=function(s){Object(_.a)(t,s);var a=Object(y.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(n.a)({},this.props)):Object(r.jsx)(M.a,{to:"/Login"})}}]),t}(c.a.Component);return Object(p.b)(N)(s)},S=a(15);s.default=Object(S.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){var a=Object(t.b)(s);e(a)}}})),D)(h)}}]);
//# sourceMappingURL=3.afe31da0.chunk.js.map