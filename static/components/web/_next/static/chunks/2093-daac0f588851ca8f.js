(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2093],{92093:function(e,t,a){"use strict";a.r(t),a.d(t,{ChatContainer:function(){return eD}});var s,r,n,o,l,i=a(85893),c=a(26246),d=a(67294),h=a(37068),u=a(28997),m=a(45761),g=a.n(m),_=a(94184),p=a.n(_),x=a(94199),C=a(4480),j=a(5152),f=a.n(j),v=a(63108),b=a(41366),N=a(4693);class E extends N.M{match(e){let{highlightString:t}=this.options;if(!t)return null;let a=e.match(t);return a?{index:a.index,length:a[0].length,match:a[0],valid:!0}:null}replaceWith(e,t){let{key:a}=t;return d.createElement("mark",{key:a},e)}asTag(){return"mark"}}var M=a(75774),y=a.n(M),w=a(63516);function T(e){let t=new Date(e);if(Number.isNaN(t))return"";let a=(0,w.Xb)(e);if(a>=1){let e=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"".concat(e," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var S=a(44974),k=a(73295),G=a.n(k);let A=e=>{let{badge:t,userColor:a,title:s}=e;return(0,i.jsx)("span",{style:{color:"var(--theme-color-users-".concat(a,")")},className:G().badge,title:s,children:t})},B=f()(()=>Promise.all([a.e(2074),a.e(7719)]).then(a.t.bind(a,27719,23)),{loadableGenerated:{webpack:()=>[27719]},ssr:!1}),O=e=>{let{userColor:t}=e;return(0,i.jsx)(A,{badge:(0,i.jsx)(B,{}),userColor:t,title:"Authenticated"})},D=f()(()=>Promise.all([a.e(2074),a.e(710)]).then(a.t.bind(a,20710,23)),{loadableGenerated:{webpack:()=>[20710]},ssr:!1}),F=e=>{let{userColor:t}=e;return(0,i.jsx)(A,{badge:(0,i.jsx)(D,{}),userColor:t,title:"Moderator"})},P=f()(()=>Promise.all([a.e(2074),a.e(6133)]).then(a.t.bind(a,56133,23)),{loadableGenerated:{webpack:()=>[56133]},ssr:!1}),L=e=>{let{userColor:t}=e;return(0,i.jsx)(A,{badge:(0,i.jsx)(P,{}),userColor:t,title:"Bot"})},U=f()(()=>Promise.all([a.e(173),a.e(5874),a.e(4931),a.e(5402),a.e(8014),a.e(4041),a.e(3698),a.e(3013),a.e(4398),a.e(7940),a.e(2659),a.e(9991)]).then(a.bind(a,39991)).then(e=>e.ChatModerationActionMenu),{loadableGenerated:{webpack:()=>[39991]},ssr:!1}),I=e=>{let{children:t,user:a}=e,{displayName:s,createdAt:r}=a,n="".concat(s," first joined ").concat(T(r));return(0,i.jsx)(x.Z,{title:n,placement:"topLeft",mouseEnterDelay:1,children:t})},W=e=>{let{message:t,highlightString:a,showModeratorMenu:s,sentBySelf:r,sameUserAsLast:n,isAuthorModerator:o,isAuthorAuthenticated:l,isAuthorBot:c}=e,{id:d,body:h,user:u,timestamp:m}=t,{id:g,displayName:_,displayColor:j}=u,f=(0,C.sJ)(S.FI),N="var(--theme-color-users-".concat(j,")"),M="Sent ".concat(T(m)),w=[];return o&&w.push((0,i.jsx)(F,{userColor:j},"mod")),l&&w.push((0,i.jsx)(O,{userColor:j},"auth")),c&&w.push((0,i.jsx)(L,{userColor:j},"bot")),(0,i.jsx)("div",{className:p()(y().messagePadding,n&&y().messagePaddingCollapsed,"chat-message_user"),children:(0,i.jsxs)("div",{className:p()(y().root,{[y().ownMessage]:r}),style:{borderColor:N},children:[(0,i.jsx)("div",{className:y().background,style:{color:N}}),!n&&(0,i.jsx)(I,{user:u,children:(0,i.jsxs)("div",{className:y().user,style:{color:N},children:[(0,i.jsx)("span",{className:y().userName,children:_}),(0,i.jsx)("span",{className:y().userBadges,children:w})]})}),(0,i.jsx)(x.Z,{title:M,mouseEnterDelay:1,children:(0,i.jsx)(v.wZ,{className:y().message,content:h,matchers:[new b.xc("url",{validateTLD:!1}),new E("highlight",{highlightString:a})]})}),s&&(0,i.jsx)("div",{className:y().modMenuWrapper,children:(0,i.jsx)(U,{messageID:d,accessToken:f,userID:g,userDisplayName:_})})]})})};var R=a(55241),V=a(77493),H=a(96391),J=a(14866),Z=a.n(J);let z=f()(()=>Promise.all([a.e(7741),a.e(344)]).then(a.bind(a,20344)).then(e=>e.EmojiPicker),{loadableGenerated:{webpack:()=>[20344]},ssr:!1}),Y=f()(()=>Promise.all([a.e(2074),a.e(3366)]).then(a.t.bind(a,73366,23)),{loadableGenerated:{webpack:()=>[73366]},ssr:!1}),q=f()(()=>Promise.all([a.e(2074),a.e(2348)]).then(a.t.bind(a,92348,23)),{loadableGenerated:{webpack:()=>[92348]},ssr:!1}),X=e=>{let{attributes:t,element:a,children:s}=e,r=(0,H.vt)(),n=(0,H.UE)();return(0,i.jsxs)("span",{...t,contentEditable:!1,children:[(0,i.jsx)("img",{alt:a.alt,src:a.src,title:a.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(r&&n?"0 0 0 3px #B4D5FF":"none")}}),s]})},K=e=>{let{isVoid:t}=e;return e.isVoid=e=>"image"===e.type||t(e),e.isInline=e=>"image"===e.type,e},Q=e=>{let t;if(V.xv.isText(e)){let t=e.text;return t}if(0===e.children.length)t=[{text:""}];else{var a;t=null===(a=e.children)||void 0===a?void 0:a.map(e=>Q(e)).join("")}switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},$=e=>{if(V.xv.isText(e))return e.text.length;if("image"===e.type)return 5;let t=0;return e.children.forEach(e=>{t+=$(e)}),t},ee=e=>{let{defaultText:t,enabled:a,focusInput:s}=e,[r,n]=(0,d.useState)(!1),[o,l]=(0,d.useState)(null==t?void 0:t.length),c=(0,C.sJ)(S.Gt),h=(0,d.useMemo)(()=>(0,H.BU)(K((0,V.Jh)())),[]),m=[{type:"paragraph",children:[{text:t||""}]}],g=()=>{if(!c){console.log("websocketService is not defined");return}let e=Q(h);e=e.replace(/^<p>|<\/p>$/g,""),c.send({type:u.C.CHAT,body:e}),V.YR.delete(h,{at:{anchor:V.ML.start(h,[]),focus:V.ML.end(h,[])}}),l(0)},_=(e,t,a)=>({type:"image",alt:e,src:t,name:a,children:[{text:""}]}),x=(e,t)=>{if(!e)return;let a=_(t,e,t);V.YR.insertNodes(h,a),V.ML.normalize(h,{force:!0})};return(0,i.jsx)("div",{id:"chat-input",className:Z().root,children:(0,i.jsxs)("div",{className:p()(Z().inputWrap,o>=300&&Z().maxCharacters),children:[(0,i.jsxs)(H.mH,{editor:h,value:m,children:[(0,i.jsx)(H.CX,{className:"chat-text-input",onKeyDown:e=>{let t=$(h)+1;if("Enter"===e.key){e.preventDefault(),g();return}if("Backspace"===e.key){l(t-1);return}t+1>300&&e.preventDefault(),l(t+1)},onPaste:e=>{let t=e.clipboardData.getData("text/plain"),{length:a}=t;o+a>300&&e.preventDefault()},disabled:!a,readOnly:!a,renderElement:e=>"image"===e.element.type?(0,i.jsx)(X,{...e}):(0,i.jsx)("p",{...e}),renderPlaceholder:e=>{let{children:t,attributes:a}=e;return(0,i.jsx)(H.qW,{attributes:{...a,style:{...a.style,top:"15%"}},children:t})},placeholder:a?"Send a message to chat":"Chat is currently unavailable.",style:{width:"100%"},role:"textbox","aria-label":"Chat text input",autoFocus:s}),(0,i.jsx)(R.Z,{content:(0,i.jsx)(z,{onEmojiSelect:e=>{H.F3.focus(h),V.YR.insertText(h,e)},onCustomEmojiSelect:(e,t)=>{H.F3.focus(h),x(t,e)}}),trigger:"click",placement:"topRight",onOpenChange:e=>n(e),open:r})]}),a&&(0,i.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,i.jsx)("button",{type:"button",className:Z().emojiButton,title:"Emoji picker button",onClick:()=>n(!r),children:(0,i.jsx)(q,{})}),(0,i.jsx)("button",{type:"button",className:Z().sendButton,title:"Send message Button",onClick:g,children:(0,i.jsx)(Y,{})})]})]})})};var et=a(71368),ea=a.n(et);function es(){return(es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var er=function(e){return d.createElement("svg",es({xmlns:"http://www.w3.org/2000/svg",width:500,height:500,viewBox:"0 0 132.292 132.292"},e),s||(s=d.createElement("linearGradient",{id:"moderator_svg__a",x1:432.851,x2:464.644,y1:49.977,y2:49.977,gradientUnits:"userSpaceOnUse"},d.createElement("stop",{offset:0,stopColor:"#2087e2"}),d.createElement("stop",{offset:1,stopColor:"#b63fff"}))),r||(r=d.createElement("path",{fill:"url(#moderator_svg__a)",d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),n||(n=d.createElement("path",{fill:"#1d1535",fillOpacity:.335,d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z"})),o||(o=d.createElement("path",{fill:"#e2e8f0",fillOpacity:.306,d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z"})),l||(l=d.createElement("path",{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))};let en=()=>(0,i.jsxs)("div",{className:ea().chatModerationNotification,children:[(0,i.jsx)(er,{className:ea().icon}),"You are now a moderator."]});var eo=a(61120),el=a.n(eo);let ei=e=>{let{message:{body:t,user:{displayName:a}},highlightString:s}=e;return(0,i.jsxs)("div",{className:p()([el().chatSystemMessage,"chat-message_system"]),children:[(0,i.jsx)("div",{className:el().user,children:(0,i.jsx)("span",{className:el().userName,children:a})}),(0,i.jsx)(v.wZ,{className:el().message,content:t,matchers:[new b.xc("url",{customTLDs:["online"]}),new E("highlight",{highlightString:s})]})]})};var ec=a(56654),ed=a.n(ec);let eh=f()(()=>Promise.all([a.e(2074),a.e(8725)]).then(a.t.bind(a,8725,23)),{loadableGenerated:{webpack:()=>[8725]},ssr:!1}),eu=e=>{let{isAuthorModerator:t,userColor:a,displayName:s}=e;return(0,i.jsxs)("div",{className:ed().root,children:[(0,i.jsxs)("span",{style:{color:"var(--theme-color-users-".concat(a,")")},children:[(0,i.jsx)("span",{className:ed().icon,children:(0,i.jsx)(eh,{})}),(0,i.jsx)("span",{className:ed().user,children:s}),t&&(0,i.jsx)("span",{className:ed().moderatorBadge,children:(0,i.jsx)(F,{userColor:a})})]}),"joined the chat."]})};var em=a(71577);let eg=f()(()=>Promise.all([a.e(2074),a.e(437)]).then(a.t.bind(a,20437,23)),{loadableGenerated:{webpack:()=>[20437]},ssr:!1}),e_=e=>{let{onClick:t}=e;return(0,i.jsx)("div",{className:g().toBottomWrap,id:"scroll-to-chat-bottom",children:(0,i.jsx)(em.Z,{type:"default",style:{color:"currentColor"},icon:(0,i.jsx)(eg,{}),onClick:t,children:"Go to last message"})})};var ep=a(88881),ex=a.n(ep);let eC=e=>{let{body:t}=e;return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:ex().chatAction})};var ej=a(71230),ef=a(15746),ev=a(24093),eb=a(31654),eN=a.n(eb);let eE=f()(()=>a.e(9069).then(a.bind(a,49069)),{loadableGenerated:{webpack:()=>[49069]},ssr:!1}),eM=f()(()=>a.e(5584).then(a.bind(a,15584)),{loadableGenerated:{webpack:()=>[15584]},ssr:!1}),ey=f()(()=>a.e(7268).then(a.bind(a,97268)),{loadableGenerated:{webpack:()=>[97268]},ssr:!1}),ew=e=>{let t,{message:a}=e,{body:s,title:r,image:n,link:o,type:l}=a;switch(l.toString()){case"FEDIVERSE_ENGAGEMENT_FOLLOW":t=eE;break;case"FEDIVERSE_ENGAGEMENT_LIKE":t=eM;break;case"FEDIVERSE_ENGAGEMENT_REPOST":t=ey}return(0,i.jsx)("div",{className:p()([eN().follower,"chat-message_social"]),children:(0,i.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(ej.Z,{wrap:!1,children:[(0,i.jsxs)(ef.Z,{span:6,className:eN().avatarColumn,children:[(0,i.jsx)(ev.C,{src:n,alt:"Avatar",className:eN().avatar,size:"large",children:r.charAt(0).toUpperCase()}),(0,i.jsx)(t,{className:eN().icon})]}),(0,i.jsxs)(ef.Z,{children:[(0,i.jsx)(ej.Z,{className:eN().account,children:r}),(0,i.jsx)(ej.Z,{className:eN().body,dangerouslySetInnerHTML:{__html:s}})]})]})})})};var eT=a(44964),eS=a.n(eT);let ek=f()(()=>Promise.all([a.e(2074),a.e(1668)]).then(a.t.bind(a,51668,23)),{loadableGenerated:{webpack:()=>[51668]},ssr:!1}),eG=e=>{let{message:t}=e,{oldName:a,user:s}=t,{displayName:r,displayColor:n}=s,o="var(--theme-color-users-".concat(n,")");return(0,i.jsxs)("div",{className:eS().nameChangeView,children:[(0,i.jsx)("div",{className:eS().icon,children:(0,i.jsx)(ek,{})}),(0,i.jsxs)("div",{className:eS().nameChangeText,children:[(0,i.jsx)("span",{style:{color:o},children:a}),(0,i.jsx)("span",{className:eS().plain,children:" is now known as "}),(0,i.jsx)("span",{style:{color:o},children:r})]})]})};var eA=a(25449),eB=a(69183);function eO(e){let{user:t}=e,a=new eA.n(t);return a.isModerator}let eD=e=>{let{messages:t,usernameToHighlight:a,chatUserId:s,isModerator:r,showInput:n,height:o,chatAvailable:l,focusInput:m=!0}=e,[_,p]=(0,d.useState)(!1),[x,C]=(0,d.useState)(!1),j=(0,d.useRef)(null),f=(0,d.useRef)(null),v=new Set;(0,d.useEffect)(()=>()=>{clearTimeout(f.current)},[]);let b=e=>(0,i.jsx)(ew,{message:e}),N=e=>{let{user:{displayName:t,displayColor:a}}=e,s=eO(e);return(0,i.jsx)(eu,{displayName:t,userColor:a,isAuthorModerator:s})},E=e=>{let{body:t}=e;return(0,i.jsx)(eC,{body:t})},M=e=>{let t=eO(e);return t?(0,i.jsx)(en,{}):(0,i.jsx)("div",{style:{width:"1px",height:"1px"}})},y=(e,n)=>{var o,l,c,d;let h=function(e,t,a){if(e.length<2)return!1;let s=e[t];if(!s||!s.user)return!1;let{user:{id:r}}=s,n=e[t-1];if((null==n?void 0:n.type)!==u.C.CHAT||!(null==n?void 0:n.timestamp)||!s.timestamp)return!1;let o=new Date(null==n?void 0:n.timestamp).getTime(),l=new Date(s.timestamp).getTime();return!(l-o>6e4)&&r===(null==n?void 0:n.user.id)&&!(a.size>=5)}(t,e,v);return h?v.add(n.id):v.clear(),(0,i.jsx)(W,{message:n,showModeratorMenu:r,highlightString:a,sentBySelf:(null===(o=n.user)||void 0===o?void 0:o.id)===s,sameUserAsLast:h,isAuthorModerator:null===(l=n.user)||void 0===l?void 0:l.isModerator,isAuthorBot:null===(c=n.user)||void 0===c?void 0:c.isBot,isAuthorAuthenticated:null===(d=n.user)||void 0===d?void 0:d.authenticated},n.id)},w=(e,t)=>{switch(t.type){case u.C.CHAT:return y(e,t);case u.C.NAME_CHANGE:return(0,i.jsx)(eG,{message:t});case u.C.CONNECTED_USER_INFO:return M(t);case u.C.USER_JOINED:return N(t);case u.C.CHAT_ACTION:return E(t);case u.C.SYSTEM:return(0,i.jsx)(ei,{message:t,highlightString:a},t.id);case u.C.FEDIVERSE_ENGAGEMENT_FOLLOW:case u.C.FEDIVERSE_ENGAGEMENT_LIKE:case u.C.FEDIVERSE_ENGAGEMENT_REPOST:return b(t);default:return null}},T=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth";clearTimeout(f.current),f.current=setTimeout(()=>{var s;null===(s=e.current)||void 0===s||s.scrollToIndex({index:t.length-1,behavior:a}),C(!0),p(!1)},150)};(0,d.useEffect)(()=>{setTimeout(()=>{T(j,"auto")},500)},[]);let S=(0,d.useMemo)(()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.OO,{id:"virtuoso",style:{height:o},className:g().virtuoso,ref:j,data:t,itemContent:(e,t)=>w(e,t),initialTopMostItemIndex:t.length-1,followOutput:()=>!!x&&(p(!1),T(j,"auto"),"smooth"),alignToBottom:!0,atBottomThreshold:70,atBottomStateChange:e=>{C(e),e?p(!1):p(!0)}}),_&&(0,i.jsx)(e_,{onClick:()=>{T(j,"auto")}})]}),[t,a,s,r,_,x]);return(0,i.jsx)(h.SV,{fallbackRender:e=>{let{error:t,resetErrorBoundary:a}=e;return(0,i.jsx)(eB.A,{componentName:"ChatContainer",message:t.message,retryFunction:a})},children:(0,i.jsxs)("div",{id:"chat-container",className:g().chatContainer,children:[S,n&&(0,i.jsx)("div",{className:g().chatTextField,children:(0,i.jsx)(ee,{enabled:l,focusInput:m})})]})})};eD.defaultProps={showInput:!0,height:"auto"}},88881:function(e){e.exports={chatAction:"ChatActionMessage_chatAction__x9Xsg"}},45761:function(e){e.exports={toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",show:"ChatContainer_show__OBPqg",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz",chatTextField:"ChatContainer_chatTextField__OqCGL"}},56654:function(e){e.exports={root:"ChatJoinMessage_root__vuVXa",moderatorBadge:"ChatJoinMessage_moderatorBadge__HF66k",user:"ChatJoinMessage_user__kYpU9",icon:"ChatJoinMessage_icon__TzTHn"}},71368:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},44964:function(e){e.exports={nameChangeView:"ChatNameChangeMessage_nameChangeView__z4WoO",nameChangeText:"ChatNameChangeMessage_nameChangeText__PTEQP",plain:"ChatNameChangeMessage_plain__heTPn",icon:"ChatNameChangeMessage_icon__TWCil"}},31654:function(e){e.exports={follower:"ChatSocialMessage_follower__TyNGH",avatar:"ChatSocialMessage_avatar__QbcNk",avatarColumn:"ChatSocialMessage_avatarColumn__inCWq",body:"ChatSocialMessage_body__aY2Oa",account:"ChatSocialMessage_account__uGSKr",icon:"ChatSocialMessage_icon__fiCk6"}},61120:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},14866:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrap:"ChatTextField_inputWrap__1mAjD",maxCharacters:"ChatTextField_maxCharacters__yGT4s",emojiButton:"ChatTextField_emojiButton__ON_Cu",sendButton:"ChatTextField_sendButton__MOmD4"}},73295:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},75774:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",userBadges:"ChatUserMessage_userBadges__L6wat",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}}}]);