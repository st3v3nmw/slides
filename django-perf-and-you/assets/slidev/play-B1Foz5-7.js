const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-BeneXvhU.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-ChfNqvvQ.js","assets/modules/vue-erlImCx6.js","assets/modules/shiki-D1jugA53.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-CjohijZX.js","assets/index-LlaKh1ls.js","assets/index-wTNn249y.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-DHSnTtEc.js","assets/slidev/shortcuts-C5eCZA9F.js","assets/slidev/SlideContainer-C8i9WN9r.js","assets/SlideContainer-DLZATP2l.css","assets/slidev/context-1HTcGq0r.js","assets/modules/unplugin-icons-KYtC6kB4.js","assets/slidev/SlideWrapper-DW1TObjg.js","assets/SlideWrapper-D-6UNFOp.css","assets/shortcuts-DEVCLo9a.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{z as b,E as B,ap as H,d as h,ad as R,o as a,c as v,B as e,b as g,e as r,f as L,i as E,g as d,aq as N,k as D,ac as F,an as M,Q as w,l as _,F as T,h as O,t as U}from"../modules/vue-erlImCx6.js";import{u as W}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CjohijZX.js";import{G as A,x,a as P,w as G,H as V,I as C,d as $,J as j,k as S,K as m,L as k,M as K}from"../index-LlaKh1ls.js";import{c as q,G as J,d as Q,u as X,r as Y,a as Z,S as ee,b as te,o as oe}from"./shortcuts-C5eCZA9F.js";import{b as se}from"../modules/unplugin-icons-KYtC6kB4.js";import{S as ae}from"./SlideContainer-C8i9WN9r.js";import"../modules/shiki-D1jugA53.js";import"./context-1HTcGq0r.js";import"./IconButton.vue_vue_type_script_setup_true_lang-DHSnTtEc.js";import"./SlideWrapper-DW1TObjg.js";const ne=2e3;function le(p){const n=b(()=>p.value&&A.value);function i(){document.body.style.cursor="none"}function o(){document.body.style.cursor=""}let t=null;B(n,u=>{u||o()}),H(document.body,["pointermove","pointerdown"],()=>{o(),t&&clearTimeout(t),n.value&&(t=setTimeout(i,ne))},{passive:!0})}const re="/slides/django-perf-and-you/assets/logo-BYkHSa_O.png",ie={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ue=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:n}){const i=p,t=R(i,"modelValue",n);function u(){t.value=!1}return(f,s)=>(a(),v(N,null,[e(t)?(a(),g("div",ie,[r("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>u())}),r("div",{class:E(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[L(f.$slots,"default")],2)])):d("",!0)],1024))}}),de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ce=["innerHTML"],me=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:n}){const t=R(p,"modelValue",n),u=b(()=>typeof x.info=="string");return(f,s)=>(a(),v(ue,{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=c=>M(t)?t.value=c:null),class:"px-6 py-4"},{default:D(()=>[r("div",de,[u.value?(a(),g("div",{key:0,class:"mb-4",innerHTML:e(x).info},null,8,ce)):d("",!0),s[1]||(s[1]=r("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[r("div",{class:"flex gap-1 children:my-auto"},[r("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),r("img",{class:"w-5 h-5",src:re,alt:"Slidev logo"}),r("div",{style:{color:"#2082A6"}},[r("b",null,"Sli"),F("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),pe=h({__name:"Controls",setup(p){const{isEmbedded:n}=P(),i=!x.drawings.presenterOnly&&!n.value,o=w();i&&G(()=>import("./DrawingControls-BeneXvhU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(f=>o.value=f.default);const t=w(),u=w();return(f,s)=>(a(),g(T,null,[o.value?(a(),v(e(o),{key:0})):d("",!0),_(q),_(J),t.value?(a(),v(e(t),{key:1})):d("",!0),u.value?(a(),v(e(u),{key:2,modelValue:e(V),"onUpdate:modelValue":s[0]||(s[0]=c=>M(V)?V.value=c:null)},null,8,["modelValue"])):d("",!0),e(x).info?(a(),v(me,{key:3,modelValue:e(C),"onUpdate:modelValue":s[1]||(s[1]=c=>M(C)?C.value=c:null)},null,8,["modelValue"])):d("",!0),_(Q)],64))}}),fe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ve=h({__name:"PresenterMouse",setup(p){return(n,i)=>{const o=se;return e($).cursor?(a(),g("div",fe,[_(o,{class:"absolute stroke-white dark:stroke-black",style:O({left:`${e($).cursor.x}%`,top:`${e($).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("",!0)}}}),$e=h({__name:"play",setup(p){const{next:n,prev:i,isPrintMode:o,isPresenter:t}=P(),{isDrawing:u}=W(),f=U();function s(l){var y;S.value||l.button===0&&((y=l.target)==null?void 0:y.id)==="slide-container"&&(l.pageX/window.innerWidth>.5?n():i())}X(f),Y(),Z(),le(b(()=>!t.value&&!o.value));const c=b(()=>j.value||S.value),I=w(),z=b(()=>{let l="";return m.value.brightness!==k.brightness&&(l+=`brightness(${m.value.brightness}) `),m.value.contrast!==k.contrast&&(l+=`contrast(${m.value.contrast}) `),m.value.sepia!==k.sepia&&(l+=`sepia(${m.value.sepia}) `),m.value.hueRotate!==k.hueRotate&&(l+=`hue-rotate(${m.value.hueRotate}deg) `),m.value.invert&&(l+="invert(1) "),{filter:l}});return(l,y)=>(a(),g(T,null,[r("div",{id:"page-root",ref_key:"root",ref:f,class:E(["grid",e(K)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(ae,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"","content-style":z.value,onPointerdown:s,onContextmenu:e(oe)},{default:D(()=>[_(ee,{"render-context":"slide"}),_(ve)]),controls:D(()=>[e(o)?d("",!0):(a(),g("div",{key:0,class:E(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[c.value?"!opacity-100 right-0":"opacity-0 p-2",e(u)?"pointer-events-none":""]])},[_(te,{persist:c.value},null,8,["persist"])],2))]),_:1},8,["content-style","onContextmenu"]),I.value&&e(S)?(a(),v(e(I),{key:0,resize:!0})):d("",!0)],2),e(o)?d("",!0):(a(),v(pe,{key:0})),y[0]||(y[0]=r("div",{id:"twoslash-container"},null,-1))],64))}});export{$e as default};
