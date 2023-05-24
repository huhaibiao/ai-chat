import{o as p,c as S,a as l,d as z,r as M,b as w,e as ge,f as c,w as u,E as ye,g as b,p as Y,h as G,i as be,j as le,k as we,l as U,m as A,n as Z,t as L,F,q as Se,s as Le,u as Ie,v as xe,x as ke,y as ae,z as J,A as I,B as X,C as ie,D as ce,G as re,H as de,I as ue,J as $e,K as Ee,L as Te}from"./vendor-29e421d5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const Ce={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},qe=l("path",{fill:"currentColor",d:"M529.408 149.376a29.12 29.12 0 0 1 41.728 0a30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264a29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0a30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264a29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"},null,-1),Ve=[qe];function Ne(e,o){return p(),S("svg",Ce,Ve)}const Oe={name:"ep-d-arrow-left",render:Ne},se=e=>{const o=navigator.userAgent,s=/Chrome/.test(o)&&/Google Inc/.test(navigator.vendor),i=/Firefox/.test(o),t=/Trident/.test(o),n=/Edge/.test(o),a=/Safari/.test(o)&&/Apple Computer/.test(navigator.vendor),v=s*5+i*10+t*10+n*10+a*5||5;let h=1024*1024*v*.9;return new Blob([e]).size>h},De=(e,o,s)=>{localStorage.setItem("token",e),localStorage.setItem("saveTokenTime",JSON.stringify(o)),localStorage.setItem("expiresIn",JSON.stringify(s))};let K;const ee=()=>{const e="chatsList";return K=localStorage.getItem(e),K===null?[]:JSON.parse(K)},Ae=()=>{if(!localStorage.getItem("token"))return!0;const e=JSON.parse(localStorage.getItem("saveTokenTime")),o=JSON.parse(localStorage.getItem("expiresIn"));return new Date().getTime()/1e3-e>o},ze=(e,o)=>{let s,i;e.addEventListener("touchstart",function(t){s=t.touches[0].clientX,i=t.touches[0].clientY}),e.addEventListener("touchmove",function(t){const n=t.touches[0].clientX-s,a=t.touches[0].clientY-i;Math.abs(n)>Math.abs(a)?n<-80?(console.log("向左滑动"),o()):console.log("向右滑动"):a<0?console.log("向上滑动"):console.log("向下滑动")}),e.addEventListener("touchend",function(t){s=null,i=null})};function _e(){const e=navigator.userAgent.toLowerCase(),o=["android","iphone","ipod","ipad","windows phone","blackberry","mobile"];for(let s=0;s<o.length;s++)if(e.indexOf(o[s])!==-1)return!0;return!1}const He=(e,o)=>{e.addEventListener("contextmenu",function(s){console.log("🚀 ~ file: utils.js:165 ~ event:",s.target),console.log(window.getSelection().toString()),o()})},pe=e=>(Y("data-v-b9bf5d1c"),e=e(),G(),e),Me={class:"login-box"},Je=pe(()=>l("div",{class:"login-title"},"ai chat登录",-1)),Pe=pe(()=>l("div",{class:"login-footer"},null,-1)),Ue=z({__name:"Login",emits:["loginSuccess"],setup(e,{emit:o}){const s=M({username:"",password:""}),i=w(),t=M({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),n=async h=>{h&&await h.validate((m,r)=>{if(m)return s.username==="huhaibiao"&&s.password==="1"?v({success:!0,data:{token:1,expiresIn:2e5}}):v({success:!1,msg:"登陆失败",data:{token:1,expiresIn:2e5}})})},a=h=>{h.keyCode===13&&n(i.value)};document.addEventListener("keydown",a),ge(()=>{document.removeEventListener("keydown",a)});const v=h=>{let m="登录成功",r,$;h.success?(m="登录成功",r="success",$=1e3,De(h.data.token,new Date().getTime()/1e3,h.data.expiresIn),o("loginSuccess")):(m=h.msg,r="error",$=3e3),be({message:m,type:r,duration:$})};return(h,m)=>{const r=le,$=we,x=U,C=ye;return p(),S("div",Me,[Je,c(C,{ref_key:"ruleFormRef",ref:i,model:s,rules:t,style:{width:"100%"}},{default:u(()=>[c($,{prop:"username"},{default:u(()=>[c(r,{modelValue:s.username,"onUpdate:modelValue":m[0]||(m[0]=q=>s.username=q),placeholder:"用户名",class:"div-box"},null,8,["modelValue"])]),_:1}),c($,{prop:"password"},{default:u(()=>[c(r,{modelValue:s.password,"onUpdate:modelValue":m[1]||(m[1]=q=>s.password=q),type:"password",placeholder:"密码","show-password":"",class:"div-box"},null,8,["modelValue"])]),_:1}),c(x,{type:"primary",class:"div-box",onClick:m[2]||(m[2]=q=>n(i.value))},{default:u(()=>[b("登录")]),_:1})]),_:1},8,["model","rules"]),Pe])}}});const H=(e,o)=>{const s=e.__vccOpts||e;for(const[i,t]of o)s[i]=t;return s},Re=H(Ue,[["__scopeId","data-v-b9bf5d1c"]]),Be=z({__name:"DownLoadChatsList",setup(e){function o(i,t){const n=document.createElement("a"),a=new Blob([t]),v=URL.createObjectURL(a);n.href=v,n.download=i+".json",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(v)}const s=i=>{const t=ee();o("ai-chat-history",JSON.stringify(t))};return(i,t)=>{const n=U;return p(),A(n,{type:"primary",plain:"",onClick:s},{default:u(()=>[b("导出所有对话")]),_:1})}}}),We={key:1},je=z({__name:"QuestList",emits:["change"],setup(e,{emit:o}){const s=w(ee()),i=w(),t=v=>{o("change",v,s.value[v])},n=_e(),a=w(n);return(v,h)=>{const m=Se,r=Le,$=Ie;return p(),A($,{modelValue:i.value,"onUpdate:modelValue":h[0]||(h[0]=x=>i.value=x),placeholder:"打开问题列表",filterable:"",onChange:t,style:{height:"800px"}},{default:u(()=>[(p(!0),S(F,null,Z(s.value,(x,C)=>(p(),A(r,{class:"option",key:C,label:x.question,value:C},{default:u(()=>[a.value?(p(),S("div",We,L(x.question),1)):(p(),A(m,{key:0,class:"box-item",effect:"dark",content:x.question,"hide-after":0,placement:"top"},{default:u(()=>[b(L(x.question),1)]),_:2},1032,["content"]))]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])}}});const Fe=H(je,[["__scopeId","data-v-3cffe27a"]]),Xe={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},Qe=l("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),Ye=[Qe];function Ge(e,o){return p(),S("svg",Xe,Ye)}const Ke={name:"ep-loading",render:Ge};const Ze={},te=e=>(Y("data-v-943f389e"),e=e(),G(),e),et={class:"loading"},tt=te(()=>l("div",{class:"point an-point"},null,-1)),ot=te(()=>l("div",{class:"point an-point"},null,-1)),st=te(()=>l("div",{class:"point an-point"},null,-1)),nt=[tt,ot,st];function lt(e,o){return p(),S("div",et,nt)}const at=H(Ze,[["render",lt],["__scopeId","data-v-943f389e"]]);let Q="ws://18.216.251.165:8088";Q="ws://192.168.124.7:8088/";location!=null&&location.protocol.includes("https")&&(Q="wss"+Q.slice(2));const P={appId:"G8CPjjcTqnNU4NjC",sessionId:"qbd4r6rahnxuazy5qoqd"},V={mesHandle(e){},closeHandle(e){},openHandle(e){console.log("time:"+new Date().toLocaleTimeString()+"🚀 ~ file: websocketChat.js:20 ~ openHandle ~ event:",e)},errorHandle(e){}};let k={};const me=()=>{let e=`${Q}?appId=${P.appId}&sessionId=${P.sessionId}`;const o=localStorage.getItem("token");o&&(e=e+`&token=${o}`),k=new WebSocket(e),k.onclose=V.closeHandle,k.onerror=V.errorHandle,k.onmessage=V.mesHandle,k.onopen=V.openHandle};function it(){}setInterval(it,1e4);const ne=(e="")=>{const o=setInterval(()=>{k.readyState===WebSocket.OPEN&&(clearInterval(o),k.send(e))},200)},ct=(e="")=>{if(k.readyState===WebSocket.OPEN)return k.send(e);if(k.readyState!==WebSocket.OPEN){if(k.readyState===WebSocket.CONNECTING)return ne(e),console.warn("正在连接中");me()}ne(e)};const N=M({isMobile:_e(),online:0,questions:0}),j=w(!1),fe=M([]),rt=e=>(Y("data-v-fdc7905a"),e=e(),G(),e),dt={class:"chat-list"},ut={class:"chat-item chat-item-user",style:{position:"relative"}},_t={class:"chat-item-rep mr-10 user"},pt=rt(()=>l("div",{class:"square me"},"我",-1)),mt={class:"time",style:{position:"absolute",bottom:"-25px",right:"50px"}},ft={class:"chat-item",style:{position:"relative"}},vt={class:"chat-item-rep ml-10"},ht={class:"time",style:{position:"absolute",bottom:"-25px",left:"50px"}},gt={class:"submit-bottom"},yt={style:{"word-wrap":"break-word"}},bt={class:"dialog-footer"},wt=z({__name:"WsChat",emits:["JLogin"],setup(e,{emit:o}){o("JLogin");let s=-1;const i=localStorage.getItem("sessionId");i?P.sessionId=i:(P.sessionId=xe(),localStorage.setItem("sessionId",P.sessionId));const t=w("");let n=w(0),a=M([]);a.push(...ee()),s=a.length-1;const v=w(null),h=w(null);let m=!0;const r=(f,y)=>{let _=t.value;y?_=y:s=a.length;const E=M({question:"",questionTime:"",rep:"",repTime:""});if(t.value="",E.question=_,E.questionTime=new Date().toLocaleString(),t.value="",!_.trim())return;a.splice(s,0,E),m=!0;const D=JSON.stringify({req:_,index:s});ct(D),s===a.length-1&&setTimeout(()=>{document.querySelector(".chat-item-scrollTo").scrollIntoView({behavior:"auto",block:"end",inline:"nearest"})})};ke(()=>{k.close()}),ae(()=>{var B,W;v.value.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"});var f=document.querySelectorAll(".submit-bottom");let y=0;document.querySelector(".chat-list").addEventListener("scroll",function(g){g.target.scrollTop<y&&(m=!1),y=g.target.scrollTop,_(g.target)&&g.preventDefault()});function _(g){for(var d=0;d<f.length;d++)if(f[d].contains(g))return!0;return!1}document.addEventListener("touchmove",function(g){if(!_(g.target)){var d=document.activeElement;(d.tagName==="INPUT"||d.tagName==="TEXTAREA")&&d.blur()}});let E=!1;const D=document.querySelector(".chat-input");D.addEventListener("compositionstart",()=>{E=!0}),D.addEventListener("compositionend",g=>{E=!1}),D.addEventListener("keydown",g=>{g.key==="Enter"&&!E&&(g.preventDefault(),r())}),(B=document.querySelector(".chat-list"))==null||B.addEventListener("mousedown",g=>{var d;s=+((d=g.target)==null?void 0:d.getAttribute("class"))}),He(document.querySelector(".chat-list"),T),(W=document.querySelector(".chat-list"))==null||W.addEventListener("contextmenu",function(g){var d;s=+((d=g.target)==null?void 0:d.getAttribute("class")),g.preventDefault(),T()})});const $=()=>{k.close(),n.value=0},x=(f=[])=>{const y=JSON.stringify(f);if(se(y))f.shift(),f.shift(),se(JSON.stringify(f))&&x(f);else return},C=(f=[])=>{x(f);const y="chatsList";try{localStorage.setItem(y,JSON.stringify(f))}catch(_){console.error("本地存储数据时出错：",_)}},q=(f={content:"",id:0})=>{n.value=2,a[f.id].rep+=f.content,m&&setTimeout(()=>{v.value.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"})})};V.mesHandle=f=>{let y=f.data,_=JSON.parse(y);_.msg==="DONE"&&(n.value=0,a[_.id].repTime=new Date().toLocaleString(),C(a)),_.time||q(_),_.code===1&&(N.online=_.data),_.code===2&&(N.questions=_.data),_.code===3&&fe.unshift(_.data)},V.closeHandle=f=>{console.log("WebSocket closed with code "+f.code+" and reason "+f.reason+"time:"+new Date().toLocaleTimeString()),n.value=0,window.__APP_ENV__!=="development"&&alert("ws链接关闭")},V.errorHandle=()=>{n.value=0},V.openHandle=()=>{n.value=0};const O=w(!1),T=()=>{R.value=window.getSelection().toString(),R.value&&(O.value=!0)},R=w(""),he=()=>{r(null,R.value),O.value=!1};return me(),(f,y)=>{const _=re,E=U,D=le,B=Ke,W=de,g=ue;return p(),S(F,null,[l("div",dt,[(p(!0),S(F,null,Z(I(a),(d,oe)=>(p(),S("div",{key:oe},[l("div",ut,[l("div",_t,L(d.question),1),pt,l("div",mt,[c(_,{type:"info",size:"small"},{default:u(()=>[b(L("时间:"+d.questionTime),1)]),_:2},1024)])]),l("div",ft,[l("div",{class:J(["square",{isMobile:I(N).isMobile}])},"ai",2),l("div",vt,[d.rep?X("",!0):(p(),A(at,{key:0})),l("span",{class:J(oe+1+"")},[b(L(d.rep),1),l("span",{class:J({"rep-light-cursor":d.rep&&!d.repTime})},null,2)],2)]),l("div",ht,[c(_,{type:"info",size:"small"},{default:u(()=>[b(L("时间:"+d.repTime),1)]),_:2},1024)])])]))),128)),l("div",{class:"chat-item-scrollTo",ref_key:"scrollToDom",ref:v},null,512)]),l("div",gt,[ie(c(E,{type:"danger",round:"",class:"doneRep",onClick:$},{default:u(()=>[b("终止回答")]),_:1},512),[[ce,I(n)!==0]]),c(D,{ref_key:"qInoutEl",ref:h,class:"do-scrollbar-b chat-input",modelValue:t.value,"onUpdate:modelValue":y[0]||(y[0]=d=>t.value=d),autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"欢迎提问～"},null,8,["modelValue"]),c(E,{type:"primary",class:"ml-10 submit-btn",onClick:r,disabled:I(n)!==0},{default:u(()=>[b(L(I(n)!==0?"回复中":"提交"),1),I(n)!==0?(p(),A(W,{key:0,class:"is-loading"},{default:u(()=>[c(B)]),_:1})):X("",!0)]),_:1},8,["disabled"])]),c(g,{modelValue:O.value,"onUpdate:modelValue":y[2]||(y[2]=d=>O.value=d),width:"70%",center:""},{footer:u(()=>[l("span",bt,[c(E,{onClick:y[1]||(y[1]=d=>O.value=!1)},{default:u(()=>[b("取消")]),_:1}),c(E,{type:"primary",onClick:he},{default:u(()=>[b(" 提交 ")]),_:1})])]),default:u(()=>[l("div",yt,L(R.value),1)]),_:1},8,["modelValue"])],64)}}});const St=H(wt,[["__scopeId","data-v-fdc7905a"]]),Lt={class:"head-tip"},It={class:"font-14"},xt={class:"font-14-danger"},kt={key:0},$t=z({__name:"HeadTip",setup(e){return(o,s)=>(p(),S("div",Lt,[l("span",null,[b("当前用户："),l("span",It,L(I(N).online),1)]),l("span",{style:{"border-radius":"3px",padding:"0 4px"},onClick:s[0]||(s[0]=i=>j.value=!0)},[b("正在回复："),l("span",xt,L(I(N).questions)+" ",1)]),I(N).isMobile?(p(),S("span",kt,"左滑更多功能")):X("",!0)]))}});const Et=H($t,[["__scopeId","data-v-9b979808"]]),ve=e=>(Y("data-v-2821bc75"),e=e(),G(),e),Tt={class:"chat-list modal"},Ct={class:"content"},qt={class:"chat-item-user",style:{position:"relative"}},Vt=ve(()=>l("div",{class:"square"},"X",-1)),Nt={class:"ml-10 chat-item-content"},Ot={class:"time",style:{position:"absolute",bottom:"-25px",left:"50px"}},Dt={class:"",style:{position:"relative"}},At={class:"ml-10 chat-item-content"},zt={class:"time",style:{position:"absolute",bottom:"-25px",left:"50px"}},Ht=ve(()=>l("div",{class:"chat-item-scrollTo"},null,-1)),Mt=z({__name:"WsChatOther",emits:["close"],setup(e,{emit:o}){return(s,i)=>{const t=re,n=U;return p(),S("div",Tt,[l("div",Ct,[(p(!0),S(F,null,Z(I(fe),(a,v)=>(p(),S("div",{class:"chat-item",key:a.repTime},[l("div",qt,[Vt,l("div",Nt,L(a.question),1),l("div",Ot,[c(t,{type:"info",size:"small"},{default:u(()=>[b(L("时间:"+a.questionTime),1)]),_:2},1024)])]),l("div",Dt,[l("div",{class:J(["square",{isMobile:I(N).isMobile}])},"ai",2),l("div",At,[l("span",{class:J(v+1+"")},L(a.rep),3)]),l("div",zt,[c(t,{type:"info",size:"small"},{default:u(()=>[b(L("时间:"+a.repTime),1)]),_:2},1024)])])]))),128)),Ht]),c(n,{class:"exit-btn",onClick:i[0]||(i[0]=a=>o("close"))},{default:u(()=>[b("退出")]),_:1})])}}});const Jt=H(Mt,[["__scopeId","data-v-2821bc75"]]),Pt={key:0,class:"login"},Ut={key:1},Rt={class:"top"},Bt={class:"right exp-chat-list"},Wt={style:{display:"flex","flex-direction":"column","align-items":"start"}},jt={style:{"white-space":"pre-wrap"}},Ft={class:"other"},Xt=z({__name:"App",setup(e){let o=w(!0);const s=()=>{o.value=Ae()};s();const i=w({question:"",rep:""}),t=w(!1),n=(m,r)=>{i.value=r,t.value=!0},a=w(!1);ae(()=>{ze(v.value,()=>a.value=!0)});const v=w(null),h=()=>{a.value=!1,j.value=!0};return(m,r)=>{const $=Oe,x=de,C=U,q=ue,O=Ee;return I(o)?(p(),S("div",Pt,[c(Re,{onLoginSuccess:r[0]||(r[0]=T=>$e(o)?o.value=!1:o=!1)})])):(p(),S("div",Ut,[l("div",{class:"chat-component",ref_key:"chatDom",ref:v,style:{width:"100%",height:"100%"}},[c(St,{onJLogin:s})],512),l("div",Rt,[c(Et)]),l("div",Bt,[ie(c(x,{size:30,style:{"margin-top":"30px",cursor:"pointer"},onClick:r[1]||(r[1]=T=>a.value=!a.value)},{default:u(()=>[c($)]),_:1},512),[[ce,!I(N).isMobile&&!a.value]]),c(O,{modelValue:a.value,"onUpdate:modelValue":r[3]||(r[3]=T=>a.value=T),title:"I am the title","with-header":!1,size:"220"},{default:u(()=>[l("div",Wt,[c(Be),c(C,{type:"success",class:"other-chats",style:{margin:"0","margin-top":"10px"},onClick:h},{default:u(()=>[b("查看其他用户的交流")]),_:1}),c(Fe,{style:{"margin-top":"10px"},onChange:n})]),c(q,{modelValue:t.value,"onUpdate:modelValue":r[2]||(r[2]=T=>t.value=T),title:i.value.question,width:"80%"},{default:u(()=>[l("div",jt,L(i.value.rep),1)]),_:1},8,["modelValue","title"])]),_:1},8,["modelValue"])]),l("div",Ft,[I(j)?(p(),A(Jt,{key:0,onClose:r[4]||(r[4]=T=>j.value=!1)})):X("",!0)])]))}}});const Qt=H(Xt,[["__scopeId","data-v-229e42ae"]]);const Yt=Te(Qt);Yt.mount("#app");window.hhh_API_key="hhsk-sXorgfTEXsSjL3dYRyz5T3BlbkFJLPSgoEzrTM9QxZZOvhMAhh";window.__APP_ENV__="production";console.log(window.__APP_ENV__,!1);
