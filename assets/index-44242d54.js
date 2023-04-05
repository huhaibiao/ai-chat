import{o as p,c as y,p as N,a as V,b as r,r as v,d as ee,e as J,v as te,f as A,g as oe,h as se,i as ne,F as $,j as H,w as le,k as ae,u as C,l as _,m as g,n as x,t as L,E as G,q as U,s as K,x as E,y as k,z as ie,A as ce,B as re,C as ue,D as de,G as pe,H as _e,I as me,J as fe,K as he,L as ve}from"./vendor-a536c9ce.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();const T=(e,t)=>{const l=e.__vccOpts||e;for(const[s,o]of t)l[s]=o;return l},ge={},z=e=>(N("data-v-943f389e"),e=e(),V(),e),ye={class:"loading"},we=z(()=>r("div",{class:"point an-point"},null,-1)),be=z(()=>r("div",{class:"point an-point"},null,-1)),Se=z(()=>r("div",{class:"point an-point"},null,-1)),Le=[we,be,Se];function Ie(e,t){return p(),y("div",ye,Le)}const xe=T(ge,[["render",Ie],["__scopeId","data-v-943f389e"]]);let R="";R="ws://localhost:8088/";location!=null&&location.protocol.includes("https")&&(R="wss"+R.slice(2));const B={appId:"G8CPjjcTqnNU4NjC",sessionId:"qbd4r6rahnxuazy5qoqd"};function Ce(){}setInterval(Ce,1e4);const M=e=>{const t=navigator.userAgent,l=/Chrome/.test(t)&&/Google Inc/.test(navigator.vendor),s=/Firefox/.test(t),o=/Trident/.test(t),n=/Edge/.test(t),i=/Safari/.test(t)&&/Apple Computer/.test(navigator.vendor),c=l*5+s*10+o*10+n*10+i*5||5;let a=1024*1024*c*.9;return new Blob([e]).size>a},ke=(e,t,l)=>{localStorage.setItem("token",e),localStorage.setItem("saveTokenTime",JSON.stringify(t)),localStorage.setItem("expiresIn",JSON.stringify(l))};let F;const D=()=>{const e="chatsList";return F=localStorage.getItem(e),F===null?[]:JSON.parse(F)},Q=(e=[],t="chat-list")=>{W(e);try{localStorage.setItem(t,JSON.stringify(e))}catch(l){console.error("本地存储数据时出错：",l)}},W=(e=[])=>{const t=JSON.stringify(e);if(M(t))e.shift(),e.shift(),M(JSON.stringify(e))&&W(e);else return},Ee=()=>{if(!localStorage.getItem("token"))return!0;const e=JSON.parse(localStorage.getItem("saveTokenTime")),t=JSON.parse(localStorage.getItem("expiresIn"));return new Date().getTime()/1e3-e>t},O=v(0),Te=e=>(O.value++,e.then(t=>(O.value--,t))),q=D(),j=q.findIndex(e=>e==null);console.log("🚀 ~ file: websocketChat.js:20 ~ x ~ x:",j,q.length);j>0&&(q.splice(j-1,2),Q(q));let P=[{role:"system",content:"You are a professional front end assistant."}];q.forEach((e,t)=>{P=[...P,{role:"user",content:e.question},{role:"assistant",content:e.rep}]});const Y=[],qe=e=>{console.log("🚀 ~ file: index.js:26 ~ postOpenAi ~ request:",e,"time:"+new Date().toLocaleTimeString());let t=JSON.parse(JSON.stringify(P));Y.forEach((s,o)=>{t=[...t,{role:"user",content:s.question},{role:"assistant",content:s.rep}]}),t.push({role:"user",content:e});const l=t.length;return l>=7&&t.splice(1,l-5),ee.post("https://api.openai.com/v1/chat/completions",{model:"gpt-3.5-turbo-0301",messages:t,temperature:0,n:1,user:"user"},{headers:{Authorization:`Bearer ${window.hhh_API_key.slice(0,-2)}`,"Content-Type":"application/json"},withCredentials:!1}).then(s=>{var i,c;let o=s.data;typeof o=="string"&&(o=JSON.parse(s.data)),console.log("🚀 ~ file: websocketChat.js:38 ~ postOpenAi ~ response:",typeof o,o);const n=(c=(i=o.choices[0])==null?void 0:i.message)==null?void 0:c.content;return t.push({role:"assistant",content:n}),n}).catch(s=>{const o=s==null?void 0:s.message;throw console.log("🚀 ~ file: index.js:75 ~ postOpenAi ~ er:",s),console.log("post api请求出错"),new Error(o)})},X=e=>(N("data-v-83bc369f"),e=e(),V(),e),Ae={class:"chat-list"},$e={class:"chat-item chat-item-user",style:{position:"relative"}},Oe={class:"chat-item-rep mr-10 user"},Ne=X(()=>r("div",{class:"me square"},"我",-1)),Ve={class:"time",style:{position:"absolute",bottom:"-25px",right:"50px"}},Je={class:"chat-item",style:{position:"relative"}},De=X(()=>r("div",{class:"square"},"ai",-1)),Be={class:"chat-item-rep ml-10"},Fe={class:"time",style:{position:"absolute",bottom:"-25px",left:"50px"}},Re={class:"submit-bottom"},je=J({__name:"ChatComponent",emits:["JLogin"],setup(e,{emit:t}){t("JLogin");const l=localStorage.getItem("sessionId");l?B.sessionId=l:(B.sessionId=te(),localStorage.setItem("sessionId",B.sessionId));const s=v("");let o=v(0),n=v([]);const i=A([]),c=v(null),a=v(null),f=()=>{let h="",w=s.value;const d=A({question:"",questionTime:"",rep:"",repTime:""});if(d.question=s.value,d.questionTime=new Date().toLocaleString(),s.value="",!w.trim())return;o.value=1,n.value=[...n.value,w,h],i.push(d);const I=qe(d.question);Te(I).then(S=>{console.log("🚀 ~ file: ChatComponent.vue:42 ~ postOpenAi ~ res:",S),n.value[n.value.length-1]=S,d.rep=S,d.repTime=new Date().toLocaleString(),Y.push(d),console.log("🚀 ~ file: ChatComponent.vue:59 ~ useActionRequest ~ chatItem:",JSON.stringify(d)),o.value=0,G({message:"",type:"success"}),Q(i,"chatsList")}),setTimeout(()=>{document.querySelector(".chat-item-scrollTo").scrollIntoView({behavior:"auto",block:"end",inline:"nearest"})})};oe(()=>{i.push(...D()),console.log("🚀 ~ file: ChatComponent.vue:76 ~ onBeforeMount ~ chatsList:",i)}),se(()=>{}),ne(()=>{c.value.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"});var h=document.querySelectorAll(".submit-bottom");let w=0;document.querySelector(".chat-list").addEventListener("scroll",function(u){u.target.scrollTop<w,w=u.target.scrollTop,d(u.target)&&u.preventDefault()});function d(u){for(var b=0;b<h.length;b++)if(h[b].contains(u))return!0;return!1}document.addEventListener("touchmove",function(u){if(!d(u.target)){var b=document.activeElement;(b.tagName==="INPUT"||b.tagName==="TEXTAREA")&&b.blur()}});let I=!1;const S=document.querySelector(".chat-input");S.addEventListener("compositionstart",()=>{I=!0}),S.addEventListener("compositionend",u=>{I=!1}),S.addEventListener("keydown",u=>{u.key==="Enter"&&!I&&(u.preventDefault(),f())})});const m=()=>{o.value=0};return(h,w)=>{const d=ce,I=U,S=K;return p(),y($,null,[r("div",Ae,[(p(!0),y($,null,H(i,(u,b)=>(p(),y("div",{key:b},[r("div",$e,[r("div",Oe,L(u.question),1),Ne,r("div",Ve,[_(d,{type:"info",size:"small"},{default:g(()=>[x(L("时间:"+u.questionTime),1)]),_:2},1024)])]),r("div",Je,[De,r("div",Be,[u.rep?k("",!0):(p(),E(xe,{key:0})),r("span",null,[x(L(u.rep),1),r("span",{class:ie({"rep-light-cursor":b===C(n).length-1&&C(o)===2})},null,2)])]),r("div",Fe,[_(d,{type:"info",size:"small"},{default:g(()=>[x(L("时间:"+u.repTime),1)]),_:2},1024)])])]))),128)),r("div",{class:"chat-item-scrollTo",ref_key:"scrollToDom",ref:c},null,512)]),r("div",Re,[le(_(I,{type:"danger",round:"",class:"doneRep",onClick:m},{default:g(()=>[x("终止回答")]),_:1},512),[[ae,C(O)!==0]]),_(S,{ref_key:"qInoutEl",ref:a,class:"do-scrollbar-b chat-input",modelValue:s.value,"onUpdate:modelValue":w[0]||(w[0]=u=>s.value=u),autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"欢迎提问～"},null,8,["modelValue"]),_(I,{type:"primary",class:"ml-10 submit-btn",onClick:f},{default:g(()=>[x(L("提交")+" ")]),_:1})])],64)}}});const Pe=T(je,[["__scopeId","data-v-83bc369f"]]),Z=e=>(N("data-v-5ee62532"),e=e(),V(),e),Ue={class:"login-box"},ze=Z(()=>r("div",{class:"login-title"}," ai chat登录 ",-1)),Me=Z(()=>r("div",{class:"login-footer"},null,-1)),He=J({__name:"Login",emits:["loginSuccess"],setup(e,{emit:t}){const l=A({username:"",password:""}),s=v(),o=A({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),n=async c=>{c&&await c.validate((a,f)=>{if(a&&l.username==="huhaibiao")return i({success:!0,data:{token:1,expiresIn:2e5}})})},i=c=>{let a="登录成功",f,m;c.success?(a="登录成功",f="success",m=1e3,ke(c.data.token,new Date().getTime()/1e3,c.data.expiresIn),t("loginSuccess")):(a=c.msg,f="error",m=3e3),G({message:a,type:f,duration:m})};return(c,a)=>{const f=K,m=re,h=U,w=ue;return p(),y("div",Ue,[ze,_(w,{ref_key:"ruleFormRef",ref:s,model:l,rules:o,style:{width:"100%"}},{default:g(()=>[_(m,{prop:"username"},{default:g(()=>[_(f,{modelValue:l.username,"onUpdate:modelValue":a[0]||(a[0]=d=>l.username=d),placeholder:"用户名",class:"div-box"},null,8,["modelValue"])]),_:1}),_(m,{prop:"password"},{default:g(()=>[_(f,{modelValue:l.password,"onUpdate:modelValue":a[1]||(a[1]=d=>l.password=d),type:"password",placeholder:"密码","show-password":"",class:"div-box"},null,8,["modelValue"])]),_:1}),_(h,{type:"primary",class:"div-box",onClick:a[2]||(a[2]=d=>n(s.value))},{default:g(()=>[x("登录")]),_:1})]),_:1},8,["model","rules"]),Me])}}});const Ge=T(He,[["__scopeId","data-v-5ee62532"]]);const Ke=e=>(N("data-v-cc953e34"),e=e(),V(),e),Qe={key:0,class:"development"},We=Ke(()=>r("div",null,"开发环境",-1)),Ye={__name:"Developer",setup(e){const t=v("production");return(l,s)=>t.value==="development"?(p(),y("div",Qe,[We,r("div",null,"ws连接状态："+L(),1),r("div",null,"正在请求中数："+L(C(O)),1)])):k("",!0)}},Xe=T(Ye,[["__scopeId","data-v-cc953e34"]]),Ze=J({__name:"DownLoadChatsList",setup(e){function t(s,o){const n=document.createElement("a"),i=new Blob([o]),c=URL.createObjectURL(i);n.href=c,n.download=s+".json",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(c)}const l=s=>{const o=D();t("ai-chat-history",JSON.stringify(o))};return(s,o)=>{const n=U;return p(),E(n,{type:"primary",plain:"",onClick:l},{default:g(()=>[x("导出所有对话")]),_:1})}}}),et=J({__name:"QuestList",emits:["change"],setup(e,{emit:t}){const l=v(D()),s=v(),o=n=>{t("change",n,l.value[n])};return(n,i)=>{const c=de,a=pe,f=_e;return p(),E(f,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=m=>s.value=m),placeholder:"打开问题列表",onChange:o},{default:g(()=>[(p(!0),y($,null,H(l.value,(m,h)=>(p(),E(a,{class:"option",key:h,label:m.question,value:h},{default:g(()=>[_(c,{class:"box-item",effect:"dark",content:m.question,"hide-after":0,placement:"top"},{default:g(()=>[x(L(m.question),1)]),_:2},1032,["content"])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])}}});const tt=T(et,[["__scopeId","data-v-afb3f41a"]]),ot={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},st=r("path",{fill:"currentColor",d:"M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"},null,-1),nt=[st];function lt(e,t){return p(),y("svg",ot,nt)}const at={name:"ep-HelpFilled",render:lt};const it={key:0,class:"exp-chat-list"},ct={style:{"white-space":"pre-wrap"}},rt={key:1,style:{width:"100%",height:"100%"},class:"chat-component"},ut={key:2,class:"login"},dt={__name:"App",setup(e){let t=v(!0);const l=()=>{t.value=Ee()};l();const s=v({}),o=v(!1),n=(c,a)=>{s.value=a,o.value=!0},i=v(!1);return(c,a)=>{const f=fe,m=he;return p(),y($,null,[C(t)?k("",!0):(p(),y("div",it,[_(f,{size:30,style:{"margin-top":"10px"},color:"#409EFC",onClick:a[0]||(a[0]=h=>i.value=!i.value)},{default:g(()=>[_(C(at))]),_:1}),i.value?(p(),E(Ze,{key:0})):k("",!0),i.value?(p(),E(tt,{key:1,style:{"margin-top":"10px"},onChange:n})):k("",!0)])),_(m,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=h=>o.value=h),title:s.value.question,width:"80%"},{default:g(()=>[r("div",ct,L(s.value.rep),1)]),_:1},8,["modelValue","title"]),_(Xe),C(t)?k("",!0):(p(),y("div",rt,[_(Pe,{onJLogin:l})])),C(t)?(p(),y("div",ut,[_(Ge,{onLoginSuccess:a[2]||(a[2]=h=>me(t)?t.value=!1:t=!1)})])):k("",!0)],64)}}},pt=T(dt,[["__scopeId","data-v-9bd28996"]]),_t=ve(pt);_t.mount("#app");window.hhh_API_key="sk-FgnukWr2hBBYdU6cQ9EKT3BlbkFJgKprcmS7ESlZ6JqP3GGshh";window.__APP_ENV__="production";console.log(window.__APP_ENV__,!1);
