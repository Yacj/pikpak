var pe=Object.defineProperty;var W=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var U=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Y=(e,t)=>{for(var o in t||(t={}))me.call(t,o)&&U(e,o,t[o]);if(W)for(var o of W(t))ge.call(t,o)&&U(e,o,t[o]);return e};import{d as I,u as he,r as f,o as J,a as K,b as v,c as Z,w as r,e as n,f as a,N as _e,g as fe,h as ve,z as ke,i as ye,j as Ae,k as Q,l as we,m as Ee,n as Fe,p as be,q as xe,s as A,t as Ce,v as De,x as Ie,y as k,A as N,B,C as Ne,D as C,E as p,F as q,G as Be,H as Le,I as Se,J as L,L as Te,K as X,M as Pe,O as Oe,P as $e,Q as Ve,R as Re,S as He,T as Me,U as je,V as ee,W as ze,X as Ge,Y as We,Z as Ue,_ as Ye,$ as Je,a0 as Ke,a1 as Ze,a2 as Qe,a3 as qe,a4 as Xe}from"./vendor.6d03c7d3.js";const et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}};et();const tt=I({setup(e){return window.$message=he(),(t,o)=>null}}),ot=["https://pikpak.a1356888297.workers.dev"],st=I({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return J(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(ot))}),(o,i)=>{const s=K("router-view");return v(),Z(a(Ae),{locale:a(ke),"date-locale":a(ye),"theme-overrides":t.value},{default:r(()=>[n(a(ve),null,{default:r(()=>[n(a(_e),null,{default:r(()=>[n(a(fe),null,{default:r(()=>[n(tt),n(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),at="modulepreload",te={},it="/pikpak/",m=function(t,o){return!o||o.length===0?t():Promise.all(o.map(i=>{if(i=`${it}${i}`,i in te)return;te[i]=!0;const s=i.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":at,s||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),s)return new Promise((b,h)=>{u.addEventListener("load",b),u.addEventListener("error",h)})})).then(()=>t())};var oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQAAAABRBrPYAAABo0lEQVR42u2aO27DMAyGqcnH8FHjo/oIHTWZlcSH6CABOoRqC/waFIf6OBH4+ZCIf7K+6C9jlXTt7esh1mHbmA89KsCysSJHxy6/V2ObbfxVWwW2AGsx6fbucBIJxsLWEUVgC7FGnNvlGwP7HazJVSeIgC3HTLiGZnU7D7a80TdgCdhM4qpeYXuZ64F9Hgtlq8rVyCHD63XdC+zzmBev097Th0gYT+EClopp2TSaiYdLmK0S9Q1YFjZThQTrihImHd7GwLIx1ywqplkhYh4sYKmY6RNZGasdnvl3L2DZGEtbIT01bRYiaSv0FNgSLGZyP5wbsGTMh0yn1U4mYT6C6ukDWC6m4w3bWCsrcVUxA5aMSR/B96pWp+DWYADLxkSprIwlmlPwWVQBy8Y8iZ/kbZ54+QgKWD6mE+84+6Y576NQ9wLLw3xVuoXIdOx59AosAashJhIimTnFazoGlo3dL4P09icEC9gaTAPDHK6AbPhRQq4HtgDzr9Fg3F5uAFuH3fpszyrHDmwFZv/mAw0bdJA+nQGWjcWHlPEeCNhC7P8/eP4GziOTOKDtgpAAAAAASUVORK5CYII=",nt="/pikpak/assets/logo1.08eb9157.png";const g=Q.create({});g.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const i=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(i.length>0){const s=Math.floor(Math.random()*i.length);e.url=i[s]+"/"+e.url}}return e});let E=!1;g.interceptors.response.use(e=>e,e=>{var i;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),l=s?JSON.parse(s):{};return l.username&&l.password&&!E?(console.log("wait",o.url),E=!0,g.post("https://user.mypikpak.com/v1/auth/signin",Y({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},l)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),E=!1,g(o))).catch(()=>(D.push("/login"),!1))):l.username&&l.password&&E?new Promise((u,b)=>{const h=setInterval(()=>{E||(clearInterval(h),u(g(o)))},100)}):(D.push("/login"),Promise.reject(e));default:window.$message.error(((i=t==null?void 0:t.data)==null?void 0:i.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const rt=Q.create({});rt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const se=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let i=Math.floor(o/10);return e=e/Math.pow(2,10*i),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[i]};const lt=p("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[p("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),p("div",{class:"logo-box__text"},"PikPak")],-1),ut={key:0,class:"content-bottom"},ct=k("\u4F1A\u5458\u7801"),dt={style:{"margin-bottom":"0"}},pt=p("a",{style:{color:"#306eff"},target:"_blank",href:"https://s.click.taobao.com/Gsv0iUu"},"\u8D2D\u4E70\u5F00\u901A\u4F1A\u5458\u7545\u4EAB10TB\u4E91\u76D8\u7A7A\u95F4\uFF0C\u65E0\u9650\u4E91\u4F20\u8F93\u6B21\u6570\uFF0C\u9AD8\u6E05\u65E0\u635F\u753B\u8D28",-1),mt=k(" \u4F53\u9A8C\u4F1A\u5458\u5355\u8D26\u6237\u53EA\u9650\u4F7F\u7528\u4E00\u6B21 "),gt=p("img",{src:oe,style:{width:"180px",height:"180px"},alt:""},null,-1),ht=p("div",{style:{"text-align":"center"}},[p("b",null,"\u626B\u7801\u8D2D\u4E70")],-1),_t={class:"bottom-user-info"},ft={key:0,src:nt,class:"user-info-avatar"},vt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},kt={class:"user-info-name"},yt={key:0},At={class:"action"},wt=k(" \u9000\u51FA\u767B\u5F55 "),Et=p("a",{style:{color:"#306eff"},target:"_blank",href:"https://s.click.taobao.com/Gsv0iUu"},"\u8D2D\u4E70\u5F00\u901A\u4F1A\u5458\u7545\u4EAB10TB\u4E91\u76D8\u7A7A\u95F4\uFF0C\u65E0\u9650\u4E91\u4F20\u8F93\u6B21\u6570\uFF0C\u9AD8\u6E05\u65E0\u635F\u753B\u8D28",-1),Ft=k("\xA0\xA0 "),bt=k("\u626B\u7801\u8D2D\u4E70"),xt=p("img",{src:oe,style:{width:"180px",height:"180px"},alt:""},null,-1),Ct=k("\u6DFB\u52A0"),Dt=I({setup(e){const t=f(!1),o=c=>()=>ee(L,null,{default:()=>ee(c)}),i=we(),s=Ee(),l=f([{label:"\u6587\u4EF6",key:"list",icon:o(Je)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Ge)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(We)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ye)}]),u=f(),b=()=>{g.get("https://user.mypikpak.com/v1/user/me").then(c=>{window.localStorage.setItem("pikpakUser",JSON.stringify(c.data)),u.value=c.data}).catch(c=>{console.log(c)})},h=f(),S=()=>{g.get("https://api-drive.mypikpak.com/drive/v1/about").then(c=>{h.value=c.data}).catch(c=>{console.log(c)})},y=f(),ae=()=>{g.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(c=>{var d;y.value=(d=c.data)==null?void 0:d.data})},ie=(c,d)=>{console.log(d),i.push("/"+d.key)};J(()=>{b(),S(),ae()});const x=f(),w=f(!1),ne=()=>{g.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:x.value,data:{}}).then(c=>{window.$message.success("\u5151\u6362\u6210\u529F"),S()}).catch(c=>{console.log(c)}).finally(()=>{w.value=!1})},T=f(!1),re=c=>{T.value=c<800,t.value||(t.value=c<800)};Fe(s,()=>{T.value&&(t.value=!0)});const le=be(),ue=()=>{le.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{g.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(c=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),i.push("/login")}).catch(c=>{console.log(c)})}})};return(c,d)=>{const ce=K("router-view"),de=xe("resize");return v(),A(je,null,[Ce(n(a(X),{"has-sider":"",onResize:re},{default:r(()=>[n(a(De),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=_=>t.value=!0),onExpand:d[2]||(d[2]=_=>t.value=!1),bordered:""},{default:r(()=>{var _,P,O,$,V,R,H,M,j,z,G;return[lt,n(a(Ie),{options:l.value,value:String(a(s).name),"onUpdate:value":ie},null,8,["options","value"]),t.value?C("",!0):(v(),A("div",ut,[k(N(a(se)((_=h.value)==null?void 0:_.quota.usage))+" / "+N(a(se)((P=h.value)==null?void 0:P.quota.limit))+" ",1),n(a(B),{type:"primary",style:{cursor:"pointer"},onClick:d[0]||(d[0]=Bt=>w.value=!0)},{default:r(()=>[ct]),_:1}),((O=h.value)==null?void 0:O.quota)?(v(),Z(a(Ne),{key:0,type:"line",percentage:Number(((($=h.value)==null?void 0:$.quota.usage)/((V=h.value)==null?void 0:V.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=y.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):C("",!0),p("p",dt,[n(a(q),{width:210,placement:"right"},{trigger:r(()=>[pt]),header:r(()=>[n(a(B),{strong:"",depth:"1"},{default:r(()=>[mt]),_:1})]),default:r(()=>[gt,ht]),_:1})])])),t.value?C("",!0):(v(),A("div",{key:1,class:Be(["sider-bottom",{vip:((H=y.value)==null?void 0:H.status)==="ok"}])},[p("div",_t,[((M=y.value)==null?void 0:M.status)==="ok"?(v(),A("img",ft)):(v(),A("img",vt)),p("div",kt,[k(N((j=u.value)==null?void 0:j.name)+" ",1),((z=y.value)==null?void 0:z.status)==="ok"&&((G=y.value)==null?void 0:G.expire)?(v(),A("div",yt,[n(a(Le),{time:new Date(y.value.expire),type:"datetime"},null,8,["time"])])):C("",!0)]),p("div",At,[n(a(Se),null,{trigger:r(()=>[n(a(L),{onClick:ue},{default:r(()=>[n(a(Te))]),_:1})]),default:r(()=>[wt]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(a(X),null,{default:r(()=>[n(a(Pe),{style:{height:"100vh"}},{default:r(()=>[n(a(Oe),{style:{"max-height":"100vh"}},{default:r(()=>[n(ce)]),_:1})]),_:1})]),_:1})]),_:1},512),[[de]]),n(a(Me),{show:w.value,"onUpdate:show":d[5]||(d[5]=_=>w.value=_)},{default:r(()=>[n(a($e),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":r(()=>[n(a(L),{onClick:d[3]||(d[3]=_=>w.value=!1)},{default:r(()=>[n(a(Ve))]),_:1})]),action:r(()=>[n(a(Re),{block:!0,type:"primary",disabled:!x.value,onClick:ne},{default:r(()=>[Ct]),_:1},8,["disabled"])]),default:r(()=>[n(a(He),{placeholder:"\u4F1A\u5458\u7801",value:x.value,"onUpdate:value":d[4]||(d[4]=_=>x.value=_)},null,8,["value"]),p("p",null,[Et,Ft,n(a(q),{width:180,placement:"bottom"},{trigger:r(()=>[n(a(B),{strong:"",type:"info",style:{cursor:"pointer"}},{default:r(()=>[bt]),_:1})]),default:r(()=>[xt]),_:1})])]),_:1})]),_:1},8,["show"])],64)}}}),It=[{path:"/",name:"home",component:Dt,redirect:"/list",beforeEnter:(e,t,o)=>{const i=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!i||!i.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>m(()=>import("./list.258e19b0.js"),["assets/list.258e19b0.js","assets/list.764e0448.css","assets/vendor.6d03c7d3.js","assets/clipboard.fde9133c.js"])},{path:"video",name:"video",component:()=>m(()=>import("./list.258e19b0.js"),["assets/list.258e19b0.js","assets/list.764e0448.css","assets/vendor.6d03c7d3.js","assets/clipboard.fde9133c.js"])},{path:"image",name:"image",component:()=>m(()=>import("./list.258e19b0.js"),["assets/list.258e19b0.js","assets/list.764e0448.css","assets/vendor.6d03c7d3.js","assets/clipboard.fde9133c.js"])},{path:"trash",name:"trash",component:()=>m(()=>import("./trash.b7b63c1c.js"),["assets/trash.b7b63c1c.js","assets/trash.99a3677d.css","assets/vendor.6d03c7d3.js"])},{path:"setting",name:"setting",component:()=>m(()=>import("./setting.957004a2.js"),["assets/setting.957004a2.js","assets/setting.f947579c.css","assets/vendor.6d03c7d3.js"])},{path:"invited",name:"invited",component:()=>m(()=>import("./invited.570be71b.js"),["assets/invited.570be71b.js","assets/invited.74b24e1e.css","assets/clipboard.fde9133c.js","assets/vendor.6d03c7d3.js"])}]},{path:"/t/:id?",name:"test",component:()=>m(()=>import("./test.7335ad02.js"),["assets/test.7335ad02.js","assets/vendor.6d03c7d3.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>m(()=>import("./shareInfo.d4a2fb66.js"),["assets/shareInfo.d4a2fb66.js","assets/shareInfo.678356c6.css","assets/vendor.6d03c7d3.js"])},{path:"/login",name:"login",component:()=>m(()=>import("./login.453925c4.js"),["assets/login.453925c4.js","assets/login.a8b45006.css","assets/vendor.6d03c7d3.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>m(()=>import("./sms.8bfc3f44.js"),["assets/sms.8bfc3f44.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.6d03c7d3.js"])},{path:"/register",name:"register",component:()=>m(()=>import("./register.e3525fcb.js"),["assets/register.e3525fcb.js","assets/register.5588ce76.css","assets/vendor.6d03c7d3.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>m(()=>import("./testtest.27ded027.js"),["assets/testtest.27ded027.js","assets/vendor.6d03c7d3.js"])}],Nt=Ke({history:Ze(),routes:It});var D=Nt;const F=Qe(st);F.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,i=>{let s=i.offsetWidth,l=i.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,l)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});F.config.globalProperties.$http=g;F.use(D);F.use(Xe,{router:D,siteIdList:[1280510106]});F.mount("#app");export{se as b,g as i,ot as p};
