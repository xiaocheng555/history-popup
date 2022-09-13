import{u as L,a as Q,r as p,o as T,w as M,d as w,c as A,b as g,e as O,f as o,g as k,i as U,h as v,j as D,k as I,l as P,m as t,n as d,p as G,q as r,t as z}from"./index.9d605e69.js";const x=s=>{const _=L(),n=Q(),e=p(!1),{dialogVisible:a}=s;let i=!1,c=!1;function f(){s.auto&&y()&&(a.value=!0,e.value=!0)}function F(){E()}function l(){!c&&y()&&(m()?_.go(-1):b(),console.log("\u624B\u52A8\u5173\u95ED\u5F39\u7A97")),e.value=!1,c=!1,i=!1}function m(){var h;const u=(h=window.history)==null?void 0:h.state;if(u){if(!u.back)return!1;const C=_.resolve(u.back||"");if(C.path===n.path){const q=C.query,B={...n.query};for(let V in q){if(!B[V])return!1;delete B[V]}for(let V in s.history.value){if(!B[V])return!1;delete B[V]}return Object.keys(B).length===0}return!1}else return i}function y(){if(!s.history.value)return!1;const{query:u}=n;return Object.keys(s.history.value).some(h=>!!u[h])}function E(){y()||(_.push({query:{...n.query,...s.history.value}}),i=!0,console.log("\u624B\u52A8\u6253\u5F00\u5F39\u7A97"))}function b(){if(!s.history.value)return;const u={};Object.keys(s.history.value).forEach(h=>{u[h]=void 0}),_.replace({query:{...n.query,...u}})}return T(()=>{a.value?F():f()}),M(()=>n.query,()=>{var h,C;if(!s.history.value)return;const u=y();if(!u&&a.value){a.value=!1,c=!0,(h=s==null?void 0:s.onAutoClose)==null||h.call(s),console.log("\u81EA\u52A8\u5173\u95ED\u5F39\u7A97");return}u&&!a.value&&(a.value=!0,i=!0,(C=s==null?void 0:s.onAutoOpen)==null||C.call(s),console.log("\u81EA\u52A8\u6253\u5F00\u5F39\u7A97"))}),M(()=>a.value,u=>{u?F():l()}),{firstOpen:e}},H=w({__name:"HistoryDrawer",props:{modelValue:{type:Boolean,default:!1},history:{type:Object},auto:{type:Boolean,default:!0},size:{type:String,default:"50%"}},emits:["update:modelValue","autoOpen","autoClose"],setup(s,{emit:_}){const n=s,e=A({get(){return n.modelValue},set(i){_("update:modelValue",i)}}),{firstOpen:a}=x({history:A(()=>n.history),auto:n.auto,dialogVisible:e,onAutoOpen:()=>_("autoOpen"),onAutoClose:()=>_("autoClose")});return(i,c)=>{const f=v("el-drawer");return g(),O(f,{modelValue:k(e),"onUpdate:modelValue":c[0]||(c[0]=F=>U(e)?e.value=F:null),size:s.size,"custom-class":`history-dialog ${k(a)&&"history-dialog_no-anim"}`},{default:o(()=>[D(i.$slots,"title",{slot:"title"}),D(i.$slots,"default")]),_:3},8,["modelValue","size","custom-class"])}}});const N=w({__name:"HistoryDialog",props:{modelValue:{type:Boolean,default:!1},history:{type:Object},auto:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(s,{emit:_}){const n=s,e=A({get(){return n.modelValue},set(i){_("update:modelValue",i)}}),{firstOpen:a}=x({history:A(()=>n.history),auto:n.auto,dialogVisible:e});return(i,c)=>{const f=v("el-dialog");return g(),O(f,{modelValue:k(e),"onUpdate:modelValue":c[0]||(c[0]=F=>U(e)?e.value=F:null),"custom-class":`history-dialog ${k(a)&&"history-dialog_no-anim"}`},{default:o(()=>[D(i.$slots,"title",{slot:"title"}),D(i.$slots,"default")]),_:3},8,["modelValue","custom-class"])}}});const J=w({__name:"HistoryAntDrawer",props:{modelValue:{type:Boolean,default:!1},size:{type:String,default:"50%"},history:{type:Object},auto:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(s,{emit:_}){const n=s,e=A({get(){return n.modelValue},set(a){_("update:modelValue",a)}});return x({history:A(()=>n.history),auto:n.auto,dialogVisible:e}),(a,i)=>{const c=v("a-drawer");return g(),O(c,{visible:k(e),"onUpdate:visible":i[0]||(i[0]=f=>U(e)?e.value=f:null),width:s.size},{default:o(()=>[D(a.$slots,"title",{slot:"title"}),D(a.$slots,"default")]),_:3},8,["visible","width"])}}}),K=w({__name:"HistoryAntModal",props:{modelValue:{type:Boolean,default:!1},size:{type:String,default:"50%"},history:{type:Object},auto:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(s,{emit:_}){const n=s,e=A({get(){return n.modelValue},set(a){_("update:modelValue",a)}});return x({history:A(()=>n.history),auto:n.auto,dialogVisible:e}),(a,i)=>{const c=v("a-modal");return g(),O(c,{visible:k(e),"onUpdate:visible":i[0]||(i[0]=f=>U(e)?e.value=f:null)},{default:o(()=>[D(a.$slots,"title",{slot:"title"}),D(a.$slots,"default")]),_:3},8,["visible"])}}}),W=d("h2",null,"Demo",-1),X=r("\u8BE6\u60C5"),Y=d("br",null,null,-1),Z=d("br",null,null,-1),ee=d("br",null,null,-1),ue=d("br",null,null,-1),te=d("br",null,null,-1),le=d("br",null,null,-1),oe=d("br",null,null,-1),se=d("br",null,null,-1),ne=r("\u5237\u65B0\u9875\u9762"),ae=r("\xA0\xA0 "),re=r("\u8DF3\u8F6C\u9875\u9762"),ie=w({__name:"Demo",setup(s){const _=Q(),n=p([]),e=p(),a=p(!1),i=p(!1),c=A(()=>_.query.id);function f(){i.value=!0,setTimeout(()=>{i.value=!1,n.value=[{id:1,name:"\u5F20\u4E09",desc:"\u6253\u7403\u5F88\u5389\u5BB3"},{id:2,name:"\u674E\u56DB",desc:"\u5531\u6B4C\u5F88\u5389\u5BB3"}],F()},1e3)}function F(){c.value&&(e.value=n.value.find(y=>String(y.id)===String(c.value)),a.value=!0)}function l(y){e.value=y,a.value=!0}function m(){window.location.reload()}return T(()=>{f()}),(y,E)=>{var V,S;const b=v("el-table-column"),u=v("el-link"),h=v("el-table"),C=v("el-button"),q=v("router-link"),B=G("loading");return g(),I("div",null,[W,P((g(),O(h,{data:n.value,style:{width:"100%"}},{default:o(()=>[t(b,{prop:"id",label:"id"}),t(b,{prop:"name",label:"\u59D3\u540D"}),t(b,{prop:"desc",label:"\u8BE6\u60C5"}),t(b,{label:"\u64CD\u4F5C"},{default:o(({row:$})=>[t(u,{type:"primary",onClick:j=>l($)},{default:o(()=>[X]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[B,i.value]]),t(H,{modelValue:a.value,"onUpdate:modelValue":E[0]||(E[0]=$=>a.value=$),title:(V=e.value)==null?void 0:V.name,history:{id:(S=e.value)==null?void 0:S.id},auto:!1,onAutoOpen:F},{default:o(()=>{var $,j,R;return[r(" id\uFF1A"+z(($=e.value)==null?void 0:$.id)+" ",1),Y,Z,r(" \u59D3\u540D\uFF1A"+z((j=e.value)==null?void 0:j.name)+" ",1),ee,ue,r(" \u8BE6\u60C5\uFF1A"+z((R=e.value)==null?void 0:R.desc)+" ",1),te,le,oe,se,t(C,{type:"primary",onClick:m},{default:o(()=>[ne]),_:1}),ae,t(q,{to:"/A"},{default:o(()=>[t(C,{type:"success"},{default:o(()=>[re]),_:1})]),_:1})]}),_:1},8,["modelValue","title","history"])])}}}),de=r("\u6253\u5F00\u62BD\u5C49"),_e=r("\u6253\u5F00\u5F39\u7A97"),ce=r("\u6253\u5F00Ant\u62BD\u5C49"),fe=r("\u6253\u5F00Ant\u5F39\u7A97"),me=r(" El\u62BD\u5C49 "),ve=r(" El\u5F39\u7A97 "),ye=r(" Ant\u62BD\u5C49 "),pe=r(" Ant\u5F39\u7A97 "),he=r("\u591A\u5C42\u62BD\u5C49"),Fe=r(" \xA0 \xA0 "),be=d("a",{href:"#/?nestDrawer1=true&nestDrawer2=true&nestDialog1=true",target:"_blank"},"\u6253\u5F00\u94FE\u63A5\uFF08/?nestDrawer1=true&nestDrawer2=true&nestDialog1=true\uFF09",-1),Ae=r(" \u5DF4\u5C71\u695A\u6C34\u51C4\u51C9\u5730\uFF0C\u4E8C\u5341\u4E09\u5E74\u5F03\u7F6E\u8EAB\u3002"),Ce=d("br",null,null,-1),Ve=d("br",null,null,-1),De=r(" \u6000\u65E7\u7A7A\u541F\u95FB\u7B1B\u8D4B\uFF0C\u5230\u4E61\u7FFB\u4F3C\u70C2\u67EF\u4EBA\u3002"),Be=d("br",null,null,-1),ge=d("br",null,null,-1),Ee=r(" \u6C89\u821F\u4FA7\u7554\u5343\u5E06\u8FC7\uFF0C\u75C5\u6811\u524D\u5934\u4E07\u6728\u6625\u3002"),$e=d("br",null,null,-1),ke=d("br",null,null,-1),we=r(" \u4ECA\u65E5\u542C\u541B\u6B4C\u4E00\u66F2\uFF0C\u6682\u51ED\u676F\u9152\u957F\u7CBE\u795E\u3002"),Oe=d("br",null,null,-1),He=d("br",null,null,-1),Ue=r("\u4E2A\u4EBA\u4FE1\u606F"),xe=r("\xA0\xA0 "),qe=r("\u8DF3\u8F6C\u9875\u9762"),je=r(" \u6027\u522B\uFF1A\u7537"),ze=d("br",null,null,-1),Se=d("br",null,null,-1),Re=r(" \u7231\u597D\uFF1A\u5973"),Me=d("br",null,null,-1),Ne=d("br",null,null,-1),Qe=r("\u5174\u8DA3\u7231\u597D"),Te=r("\xA0\xA0 "),Ie=r("\u8DF3\u8F6C\u9875\u9762"),Le=r(" \u5531\u3001\u8DF3\u3001rap\u3001\u7BEE\u7403"),Pe=d("br",null,null,-1),Ge=d("br",null,null,-1),Je=r("\u8DF3\u8F6C\u9875\u9762"),We=w({__name:"Home",setup(s){const _=p(!1),n=p(!1),e=p(!1),a=p(!1),i=p(!1),c=p(!1),f=p(!1);return(F,l)=>{const m=v("el-button"),y=v("el-divider"),E=v("el-link"),b=v("router-link");return g(),I("div",null,[t(m,{type:"primary",onClick:l[0]||(l[0]=u=>_.value=!_.value)},{default:o(()=>[de]),_:1}),t(m,{type:"primary",onClick:l[1]||(l[1]=u=>n.value=!n.value)},{default:o(()=>[_e]),_:1}),t(m,{type:"primary",onClick:l[2]||(l[2]=u=>e.value=!e.value)},{default:o(()=>[ce]),_:1}),t(m,{type:"primary",onClick:l[3]||(l[3]=u=>a.value=!a.value)},{default:o(()=>[fe]),_:1}),t(H,{modelValue:_.value,"onUpdate:modelValue":l[4]||(l[4]=u=>_.value=u),title:"\u62BD\u5C49",history:{drawer:!0}},{default:o(()=>[me]),_:1},8,["modelValue"]),t(N,{modelValue:n.value,"onUpdate:modelValue":l[5]||(l[5]=u=>n.value=u),title:"\u5F39\u7A97",history:{dialog:!0}},{default:o(()=>[ve]),_:1},8,["modelValue"]),t(J,{modelValue:e.value,"onUpdate:modelValue":l[6]||(l[6]=u=>e.value=u),title:"\u62BD\u5C49",history:{antDrawer:!0}},{default:o(()=>[ye]),_:1},8,["modelValue"]),t(K,{modelValue:a.value,"onUpdate:modelValue":l[7]||(l[7]=u=>a.value=u),title:"\u5F39\u7A97",history:{antModal:!0}},{default:o(()=>[pe]),_:1},8,["modelValue"]),t(y),t(m,{type:"primary",onClick:l[8]||(l[8]=u=>i.value=!i.value)},{default:o(()=>[he]),_:1}),Fe,t(E,null,{default:o(()=>[be]),_:1}),t(H,{modelValue:i.value,"onUpdate:modelValue":l[12]||(l[12]=u=>i.value=u),title:"\u5185\u5BB9\u9875",history:{nestDrawer1:!0}},{default:o(()=>[Ae,Ce,Ve,De,Be,ge,Ee,$e,ke,we,Oe,He,t(m,{onClick:l[9]||(l[9]=u=>c.value=!c.value)},{default:o(()=>[Ue]),_:1}),xe,t(b,{to:"/A"},{default:o(()=>[t(m,{type:"success"},{default:o(()=>[qe]),_:1})]),_:1}),t(H,{modelValue:c.value,"onUpdate:modelValue":l[11]||(l[11]=u=>c.value=u),title:"\u4E2A\u4EBA\u4FE1\u606F",history:{nestDrawer2:!0}},{default:o(()=>[je,ze,Se,Re,Me,Ne,t(m,{onClick:l[10]||(l[10]=u=>f.value=!f.value)},{default:o(()=>[Qe]),_:1}),Te,t(b,{to:"/A"},{default:o(()=>[t(m,{type:"success"},{default:o(()=>[Ie]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),t(N,{"append-to-body":"",modelValue:f.value,"onUpdate:modelValue":l[13]||(l[13]=u=>f.value=u),title:"\u5174\u8DA3\u7231\u597D",history:{nestDialog1:!0}},{default:o(()=>[Le,Pe,Ge,t(b,{to:"/A"},{default:o(()=>[t(m,{type:"success"},{default:o(()=>[Je]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(y),t(ie)])}}});export{We as default};
