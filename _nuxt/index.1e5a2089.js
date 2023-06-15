import{a as N,o as u,b as d,F as b,r as w,e as t,t as v,f as $,u as _,p as V,h as q,i as j,j as B,k as P,l as f,m as L,q as z,w as E,v as U,s as R,x as G,c as H}from"./entry.75c040a0.js";function I(){function e(n){var o;return n&&`${(n==null?void 0:n.root)||""}${((o=n==null?void 0:n.suffixes)==null?void 0:o[0])||""}`||"N/A"}function c(n){var o;for(const s in n)return(o=n[s])==null?void 0:o.official;return"N/A"}function r(n){return Object.keys(n).map(o=>({key:o,value:Array.isArray(n[o])?n[o].join(", "):n[o]}))}return{getCallingCode:e,getTheNativeName:c,getItemObject:r}}const J=e=>(V("data-v-984022e2"),e=e(),q(),e),K=J(()=>t("br",null,null,-1)),Q={class:"title"},W={key:0},X={key:1},Y=["src"],Z={key:1},ee={__name:"ListObjectText",props:{item:{type:Object,required:!0}},setup(e){const{getItemObject:c}=I();return(r,n)=>{const o=T;return u(),d(b,null,[K,(u(!0),d(b,null,w(_(c)(e.item),s=>(u(),d("div",{key:s.key,class:"flex ml-4"},[t("span",Q,v(s.key)+" :",1),typeof s.value=="object"?(u(),d("div",W,[$(o,{item:s.value},null,8,["item"])])):(u(),d("div",X,[s.key==="png"||s.key==="svg"?(u(),d("img",{key:0,src:s.value,class:"w-10"},null,8,Y)):(u(),d("div",Z,v(s.value),1))]))]))),128))],64)}}},T=N(ee,[["__scopeId","data-v-984022e2"]]);const te=e=>(V("data-v-990b6dd2"),e=e(),q(),e),se={class:"flex"},ne={class:"title"},oe={key:0},ae={key:1},le=te(()=>t("div",{class:"border-b border-slate-400 w-full"},null,-1)),ce={__name:"Modal",props:{country:{type:Object,required:!0}},setup(e){const{getItemObject:c}=I();return(r,n)=>{const o=T;return u(!0),d(b,null,w(_(c)(e.country),s=>(u(),d("div",{key:s.key},[t("div",se,[t("span",ne,v(s.key)+" :",1),typeof s.value=="object"?(u(),d("div",oe,[$(o,{item:s.value},null,8,["item"])])):(u(),d("div",ae,v(s.value),1))]),le]))),128)}}},ie=N(ce,[["__scopeId","data-v-990b6dd2"]]),ue=["src"],re={class:"grid grid-cols-6 pl-4 gap-5 w-full"},de=t("span",{class:"text-slate-500"},"Code 2:",-1),ve=t("span",{class:"text-slate-500"},"Code 3:",-1),_e={class:"col-span-2"},ge={__name:"CountryItem",props:{country:{type:Object,required:!0}},emits:["open-modal"],setup(e,{emit:c}){const{getCallingCode:r,getTheNativeName:n}=I();return(o,s)=>{var i,g,p;return u(),d("div",null,[t("img",{src:e.country.flags.png,class:"min-w-[7rem] min-h-[4rem] max-w-[7rem] max-h-[4rem] object-cover rounded-md"},null,8,ue),t("div",re,[t("h1",{class:"text-md font-semibold cursor-pointer",onClick:s[0]||(s[0]=S=>c("open-modal",e.country))},v(e.country.name.official),1),t("div",null,[t("p",null,[de,j(" "+v(e.country.cca2),1)]),t("p",null,[ve,j(" "+v(e.country.cca3),1)])]),t("p",null,v(_(r)(e.country.idd)),1),t("div",null,v(_(n)((i=e.country.name)==null?void 0:i.nativeName)||"N/A"),1),t("p",_e,v((p=(g=e.country)==null?void 0:g.altSpellings)==null?void 0:p.join(", ")),1)])])}}};const fe={class:"flex justify-center items-center gap-1 fixed bottom-0 bg-slate-200 w-full p-4"},pe=["disabled"],me=["disabled"],ye=["onClick"],be=["disabled"],he=["disabled"],xe={__name:"Pagination",props:{page:{type:Number,required:!0},lastPage:{type:Number,required:!0},gotoPage:{type:Function,required:!0}},emits:["update:page"],setup(e,{emit:c}){const r=e,n=B(()=>{let o=r.page-2>0?r.page-2:1,s=r.page+2<=r.lastPage?r.page+2:r.lastPage;const i=[];s-o<4&&(o===1?s=Math.min(5,r.lastPage):o=Math.max(1,r.lastPage-4));for(let g=o;g<=s;g++)i.push(g);return i});return(o,s)=>(u(),d("div",fe,[t("button",{class:"page-button",onClick:s[0]||(s[0]=i=>e.gotoPage(1)),disabled:e.page===1},v("<<"),8,pe),t("button",{class:"page-button",onClick:s[1]||(s[1]=i=>e.gotoPage(e.page-1)),disabled:e.page===1},v("<"),8,me),(u(!0),d(b,null,w(_(n),i=>(u(),d("button",{key:i,class:P(e.page===i?"active-page-button":"page-button"),onClick:g=>e.gotoPage(i)},v(i),11,ye))),128)),t("button",{class:"page-button",onClick:s[2]||(s[2]=i=>e.gotoPage(e.page+1)),disabled:e.page===e.lastPage},v(">"),8,be),t("button",{class:"page-button",onClick:s[3]||(s[3]=i=>e.gotoPage(e.lastPage)),disabled:e.page===e.lastPage},v(">>"),8,he)]))}},$e=N(xe,[["__scopeId","data-v-ddc00165"]]),we={key:0},Ce=t("div",{class:"fixed top-0 left-0 z-10 bg-gray-500 opacity-70 w-full h-screen"},null,-1),ke={class:"fixed top-0 left-0 z-20 m-20 bg-slate-50 rounded-md p-10 w-[80%] h-[80%] flex flex-col items-end"},je={class:"max-h-[90%] w-full overflow-y-auto"},Pe={class:"fixed top-0 left-0 right-0 bg-slate-200 h-20"},Ne={class:"flex justify-between items-center h-full p-5"},Ie={class:"flex justify-center"},Se={class:"text-4xl"},Oe=t("span",{class:"text-slate-400"}," Total: ",-1),Me={class:"font-bold"},Ae={class:"flex justify-end"},Ve=["disabled"],qe={class:"mt-36 mb-16 p-4"},Be=G('<div class="flex justify-center items-center px-5 fixed left-0 top-20 w-full bg-slate-500 text-white"><div class="w-[7rem] h-[4rem]"></div><div class="grid grid-cols-6 pl-6 gap-5 w-full"><div class="flex"><h1 class="text-md font-semibold">Country</h1></div><div>Code</div><div>Calling code</div><div>Native Name</div><p class="col-span-2">Alternative</p></div></div>',1),Te={class:"space-y-2"},De="https://restcountries.com/v3.1",Le={__name:"index",setup(e){const c=f([]),r=f([]),n=f(1),o=f(1),s=f(25),i=f(""),g=f(""),p=f(null),S=B(()=>{var a;return(a=c.value)==null?void 0:a.length});async function C(a){try{return await fetch(`${De}${a}`).then(l=>l.json())}catch(l){console.error(l)}}L(async()=>{c.value=await C("/all"),M()});function D(a){p.value=a}function O(a){if(a<1||a>o.value)return;n.value=a;const l=(n.value-1)*s.value,y=l+s.value;r.value=c.value.slice(l,y)}function k(a){var l,y;a&&(a==="asc"?(l=c.value)==null||l.sort((h,x)=>h.name.official.localeCompare(x.name.official)):(y=c.value)==null||y.sort((h,x)=>x.name.official.localeCompare(h.name.official)),i.value=a,O(1))}async function F(){const a=g.value.toLowerCase().trim();a?c.value=await C(`/name/${a}`):c.value=await C("/all"),M(),k(i.value)}function M(){var a,l;console.log(c.value),n.value=1,r.value=(a=c.value)==null?void 0:a.slice(0,s.value),o.value=Math.ceil(((l=c.value)==null?void 0:l.length)/s.value)}return(a,l)=>{var A;const y=ie,h=ge,x=$e;return u(),d(b,null,[_(p)?(u(),d("div",we,[Ce,t("div",ke,[t("div",je,[$(y,{country:_(p)},null,8,["country"])]),t("button",{class:"bottom-0 right-0 p-2 rounded-md bg-slate-500 text-white",onClick:l[0]||(l[0]=m=>p.value=null)}," Close ")])])):z("",!0),t("div",Pe,[t("div",Ne,[t("div",Ie,[E(t("input",{"onUpdate:modelValue":l[1]||(l[1]=m=>R(g)?g.value=m:null),type:"text",class:"border-2 border-gray-300 p-2 rounded-md w-72",placeholder:"Search",onInput:F},null,544),[[U,_(g)]])]),t("div",Se,[Oe,t("span",Me,v(_(S)),1)]),t("div",null,[j(" Sort country name by: "),t("div",Ae,[t("div",{class:"flex justify-center items-center",disabled:!((A=_(c).value)!=null&&A.length)},[t("button",{class:P(["border-2 border-gray-300 p-1 rounded-md w-20",{"bg-blue-500 text-white":_(i)==="asc"}]),onClick:l[2]||(l[2]=m=>k("asc"))}," ASC ",2),t("button",{class:P(["border-2 border-gray-300 p-1 rounded-md w-20",{"bg-blue-500 text-white":_(i)==="desc"}]),onClick:l[3]||(l[3]=m=>k("desc"))}," DESC ",2)],8,Ve)])])])]),t("div",qe,[Be,t("div",Te,[(u(!0),d(b,null,w(_(r),m=>(u(),H(h,{key:m.name.official,country:m,class:"flex items-start p-2 bg-white border-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out",onOpenModal:D},null,8,["country"]))),128))])]),$(x,{page:_(n),"last-page":_(o),"goto-page":O},null,8,["page","last-page"])],64)}}};export{Le as default};
