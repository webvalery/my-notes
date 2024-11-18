(function(){var t={9853:function(t,e,s){"use strict";var n=s(2856),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root"},[e("router-view"),e("div",{attrs:{id:"modals"}})],1)},i=[],o=s(1656),l={},r=(0,o.A)(l,a,i,!1,null,null,null),d=r.exports,c=s(1594),u=s(1910);const h="https://dist.nd.ru";async function p(t,e){const s="signup"===t?`${h}/api/reg`:`${h}/api/auth`;try{const t=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e})}),n=await t.json();return{data:n,status:t.ok}}catch(n){return{data:null,status:!1}}}async function f(t){try{const e=await fetch(`${h}/api/auth`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}});return{status:e.ok}}catch(e){return{status:!1}}}async function w(t){try{const e=await fetch(`${h}/api/auth`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}),s=await e.json();return{data:s,status:e.ok}}catch(e){return{data:null,status:!1}}}const m={userInfo:{token:null},error:null},g={error(t){return t.error},token(t){return t.userInfo.token}},v={SET_USER_INFO(t,e){t.userInfo.token=e},SET_ERROR_MESSAGE(t,e){t.error=e},SET_CLEAR_DATA(t){t.userInfo.token=null,t.error=null,localStorage.removeItem("userToken")}},C={async authUser({commit:t},{type:e,authData:s}){t("SET_ERROR_MESSAGE",null);const{data:n,status:a}=await p(e,s);return a?(n.accessToken&&(localStorage.setItem("userToken",JSON.stringify({token:n.accessToken})),t("SET_USER_INFO",n.accessToken)),{data:n,status:a}):(t("SET_ERROR_MESSAGE",n.message),a)},async logout({getters:t,commit:e}){const{status:s}=await f(t.token);return s?(e("SET_CLEAR_DATA"),{status:s}):s}};var k={namespaced:!0,state:m,getters:g,mutations:v,actions:C};n.Ay.use(u.Ay);var y=new u.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{auth:k}}),_=function(){var t=this,e=t._self._c;return e("root-layout",[e("template",{slot:"header"},[e("app-menu",{on:{login:t.handleLogin}})],1),e("section",{staticClass:"home-content"},[e("div",{staticClass:"home-info"},[e("h1",{staticClass:"home-title"},[t._v("Мои заметки")]),e("h3",{staticClass:"home-description"},[t._v(" Не забывай о важном, храни его в облаке. ")])]),e("div",{staticClass:"home-demo"})]),e("auth-modal",{model:{value:t.isAuthModalShown,callback:function(e){t.isAuthModalShown=e},expression:"isAuthModalShown"}})],2)},S=[],x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root-layout"},[e("header",{staticClass:"root-header"},[e("div",{staticClass:"container"},[t._t("header")],2)]),e("main",{staticClass:"root-main"},[e("div",{staticClass:"container"},[t._t("default")],2)])])},b=[],A={},M=(0,o.A)(A,x,b,!1,null,"2cd6dcde",null),L=M.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-menu"},[t._t("logo",(function(){return[e("div",{staticClass:"logo",on:{click:t.handleClickLogo}},[e("img",{staticClass:"logo-image",attrs:{src:s(3914),alt:"logo"}})])]}),{handleClickLogo:t.handleClickLogo}),e("div",{staticClass:"actions"},[t._t("actions"),t.token?e("div",{staticClass:"app-menu-profile"},[e("span",{staticClass:"user-info text-small"},[t._v(t._s(t.email))]),e("div",{ref:"userProfile",staticClass:"user-profile",class:t.classesUserProfile,on:{click:t.handleToggleProfile}},[e("app-icon",{attrs:{name:"user",width:t.widthIconUser,height:t.heightIconUser}}),e("div",{staticClass:"user-profile-dropdown"},[e("div",{staticClass:"user-profile-exit"},[e("app-link",{on:{click:t.handleClickExit}},[t._v("Выйти")])],1)])],1)]):e("app-button",{on:{click:t.handleClickLogin}},[e("div",{staticClass:"login-icon"},[e("app-icon",{attrs:{name:"login",size:"32"}})],1),e("span",{staticClass:"login-text"},[t._v("Вход")])])],2)],2)},I=[];s(4114);const T={dark:"#0A1F38","dark-middle":"#1B2F46","dark-light":"#2F4056",green:"#A5BB0C","green-middle":"#97AB0D","green-light":"#B1C909","green-dark":"#819400",white:"#FFFFFF",gray:"#9DA5AF"},P=n.Ay.observable({width:window.innerWidth,height:window.innerHeight});function $(){P.width=window.innerWidth,P.height=window.innerHeight}window.addEventListener("resize",$);var B=P,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"svg-icon",style:t.stylesBuild,domProps:{innerHTML:t._s(t.getSvgIcon(t.name))},on:{click:t.handleClick,keydown:t.handleKeydown}})},N=[];s(8992),s(3949);const z=new Map;function W(){const t=s(4078);t.keys().forEach((e=>{const s=e.replace(/^.*[\\/]/,"").replace(".svg","");z.set(s,t(e))}))}function j(t){return z.get(t).default||null}W();var D={props:{name:{type:String,default:""},size:{type:String,default:null},width:{type:String,default:"24"},height:{type:String,default:"auto"}},data(){return{getSvgIcon:j}},computed:{stylesBuild(){return{width:this.size?`${this.size}px`:`${this.width}px`,height:this.size?`${this.size}px`:`${this.height}px`}}},methods:{handleClick(t){this.$emit("click",t)},handleKeydown(t){"Enter"!==t.key&&"Space"!==t.code||(t.preventDefault(),this.handleClick(t))}}},R=D,H=(0,o.A)(R,O,N,!1,null,"2ce5f0c2",null),F=H.exports,Z=function(){var t=this,e=t._self._c;return e("button",{staticClass:"app-button",class:t.classes,style:t.styles,attrs:{disabled:t.disabled},on:{click:t.handleClick,keydown:t.handleKeydown}},[t._t("default")],2)},U=[],V={props:{disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},block:{type:Boolean,default:!1},color:{type:String,default:null}},computed:{classes(){return{disabled:this.disabled,rounded:this.rounded,fixed:this.fixed,block:this.block}},styles(){return{"background-color":this.color}}},methods:{handleClick(t){this.disabled||this.$emit("click",t)},handleKeydown(t){this.disabled||"Enter"!==t.key&&"Space"!==t.code||(t.preventDefault(),this.handleClick(t))}}},K=V,G=(0,o.A)(K,Z,U,!1,null,"02b0a514",null),J=G.exports,q=function(){var t=this,e=t._self._c;return e("a",{staticClass:"app-link text-small-bold",attrs:{href:t.url,target:t.newWindow?"_blank":"_self"},on:{click:t.handleClickLink,keydown:t.handleKeydown}},[t._t("default")],2)},Q=[],X={props:{route:{type:String,default:null},newWindow:{type:Boolean,default(){return!1}}},computed:{url(){return`${window.location.origin}${this.route}`}},methods:{handleClickLink(t){t.preventDefault(),this.newWindow?window.open(this.url):(null!==this.route&&this.$router.push(this.route),this.$emit("click",t))},handleKeydown(t){this.disabled||"Enter"!==t.key&&"Space"!==t.code||(t.preventDefault(),this.handleClickLink(t))}}},Y=X,tt=(0,o.A)(Y,q,Q,!1,null,"b3d86b80",null),et=tt.exports,st={components:{AppIcon:F,AppButton:J,AppLink:et},async created(){this.token&&await this.getUserInfo()},data(){return{email:null,isShownProfileMenu:!1,windowSize:B,COLORS:T}},computed:{classesUserProfile(){return{shown:this.isShownProfileMenu}},widthIconUser(){return this.isWidthWindowSmall?"13":"20"},heightIconUser(){return this.isWidthWindowSmall?"18":"28"},token(){return this.$store.getters["auth/token"]},isWidthWindowSmall(){return this.windowSize.width<=360}},methods:{async getUserInfo(){const{data:t,status:e}=await w(this.token);e&&(this.email=t.email)},handleClickLogo(t){this.$router.push({path:"/"})},handleClickLogin(t){this.$emit("login",t)},handleClickProfile(t){this.isShownProfileMenu=!this.isShownProfileMenu},handleToggleProfile(t){this.isShownProfileMenu=!this.isShownProfileMenu,this.isShownProfileMenu?document.addEventListener("click",this.handleClickOutside):document.removeEventListener("click",this.handleClickOutside)},handleClickOutside(t){const e=this.$refs.userProfile;e&&!e.contains(t.target)&&(this.isShownProfileMenu=!1,document.removeEventListener("click",this.handleClickOutside))},async handleClickExit(t){await this.$store.dispatch("auth/logout"),this.$router.push({path:"/"})}}},nt=st,at=(0,o.A)(nt,E,I,!1,null,"0fc3c42d",null),it=at.exports,ot=function(){var t=this,e=t._self._c;return e("app-modal",{model:{value:t.shown,callback:function(e){t.shown=e},expression:"shown"}},[e("div",{staticClass:"auth",class:{"sign-in":t.isSignIn}},[e("h2",{staticClass:"auth-title"},[t._v(t._s(t.title))]),e("div",{staticClass:"auth-inputs"},[e("div",{staticClass:"auth-input"},[e("app-input",{attrs:{label:"Email",placeholder:"Введите Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e("div",{staticClass:"auth-input"},[e("app-input",{attrs:{label:"Пароль",placeholder:"Введите пароль",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t.isSignIn?t._e():e("div",{staticClass:"auth-input"},[e("app-input",{attrs:{label:"Пароль ещё раз",placeholder:"Введите пароль",type:"password"},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)]),e("div",{staticClass:"auth-offer"},[t.isSignIn?e("span",{staticClass:"auth-offer-signup text text-small"},[t._v(" У вас нет аккаунта? "),e("app-link",{attrs:{tabindex:"0",role:"button"},on:{click:t.handleClickLink}},[t._v(" Зарегистрируйтесь ")])],1):e("span",{staticClass:"auth-offer-signin text text-small"},[t._v(" У вас есть аккаунт? "),e("app-link",{attrs:{tabindex:"0",role:"button"},on:{click:t.handleClickLink}},[t._v(" Войдите ")])],1),e("div",{staticClass:"auth-button-container"},[e("app-button",{attrs:{block:t.isWidthWindowSmall,role:"button"},on:{click:t.handleClickAuth}},[t._v(" "+t._s(t.isSignIn?"Войти":"Зарегистрироваться")+" ")])],1)]),t.isError?e("p",{staticClass:"auth-offer-error text-small",domProps:{innerHTML:t._s(t.message)}}):t._e()])])},lt=[],rt=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],ref:"modal",staticClass:"app-modal-overlay"},[e("div",{staticClass:"app-modal"},[e("div",{staticClass:"app-modal-content"},[t._t("default")],2),e("div",{staticClass:"app-modal-close"},[e("app-button",{attrs:{rounded:"","aria-label":"Закрыть модальное окно",role:"button"},on:{click:t.closeModal}},[e("app-icon",{attrs:{name:"close",size:"16"}})],1)],1)])])},dt=[],ct={components:{AppButton:J,AppIcon:F},props:{value:{type:Boolean,default:!1}},data(){return{shown:!1}},watch:{value:{immediate:!0,handler(t){this.shown=t,t?(document.body.style.overflow="hidden",this.renderModal()):(document.body.style.overflow="",this.removeModal())}}},methods:{closeModal(){this.$emit("input",!1)},renderModal(){const t=document.getElementById("modals");t&&this.$refs.modal&&t.appendChild(this.$refs.modal)},removeModal(){this.$refs.modal&&this.$refs.modal.parentNode&&this.$refs.modal.parentNode.removeChild(this.$refs.modal)}},mounted(){this.shown&&this.renderModal()},beforeDestroy(){this.removeModal()}},ut=ct,ht=(0,o.A)(ut,rt,dt,!1,null,"374cddb0",null),pt=ht.exports,ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-input"},[e("label",{staticClass:"app-input-label",on:{click:t.handleFocusInput}},[t._v(" "+t._s(t.label)+" ")]),e("div",{staticClass:"app-input-container"},[e("input",{ref:"input",staticClass:"app-input-root",class:t.classes,attrs:{type:t.inputType,placeholder:t.placeholder,maxlength:t.maxLength},domProps:{value:t.value},on:{input:t.handleInputChange}}),t.isInputTypePassword?e("div",{staticClass:"app-input-icon"},[e("app-icon",{attrs:{width:"18",height:"14",name:t.iconInputPassword,tabindex:"0","aria-label":t.isHiddenPassword?"Показать пароль":"Скрыть пароль"},on:{click:t.handleTogglePassword,keydown:t.handleKeydownTogglePassword}})],1):t._e()]),t.hasInputInfo?e("div",{staticClass:"app-input-info"},[t.error?e("span",{staticClass:"app-input-message"},[t._v(t._s(t.message))]):t._e(),t.hasMaxLength?e("span",{staticClass:"app-input-char-counter text-small"},[t._v(" "+t._s(t.currentLength)+" / "+t._s(t.maxLength)+" ")]):t._e()]):t._e()])},wt=[],mt={props:{value:{type:String,default:null},label:{type:String,default:"Введите значение"},placeholder:{type:String,default:"Введите значение"},maxLength:{type:Number,default:null},message:{type:String,default:null},error:{type:Boolean,default:!1}},computed:{currentLength(){return this.value?this.value.length:0},hasMaxLength(){return null!==this.maxLength},hasInputInfo(){return this.error||this.hasMaxLength}},methods:{handleInputChange(t){this.$emit("input",t.target.value)},handleFocusInput(t){this.$refs.input.focus()}}},gt={mixins:[mt],components:{AppIcon:F},props:{type:{type:String,default:"text"}},data(){return{isHiddenPassword:!0}},computed:{inputType(){return this.isInputTypePassword&&this.isHiddenPassword?"password":"text"},classes(){return{"visible-icon":this.isInputTypePassword}},iconInputPassword(){return this.isHiddenPassword?"off-password":"on-password"},isInputTypePassword(){return"password"===this.type}},methods:{handleTogglePassword(t){this.isHiddenPassword=!this.isHiddenPassword},handleKeydownTogglePassword(t){"Enter"!==t.key&&"Space"!==t.code||(t.preventDefault(),this.handleTogglePassword(t))}}},vt=gt,Ct=(0,o.A)(vt,ft,wt,!1,null,"51a94cc0",null),kt=Ct.exports,yt={components:{AppModal:pt,AppInput:kt,AppLink:et,AppButton:J},props:{value:{type:Boolean,default:!1}},data(){return{shown:!1,isSignIn:!0,email:null,password:null,confirmPassword:null,windowSize:B}},computed:{title(){return this.isSignIn?"Вход в ваш аккаунт":"Регистрация"},message(){const t=this.$store.getters["auth/error"];return Array.isArray(t)?t.join("<br>"):t},isError(){return null!==this.message&&""!==this.message.trim()},isWidthWindowSmall(){return this.windowSize.width<=530}},watch:{value:{immediate:!0,handler(t){this.shown=t}},shown(t){this.isSignIn=!0,this.$emit("input",t)}},methods:{handleClickLink(t){this.$store.commit("auth/SET_ERROR_MESSAGE",null),this.isSignIn=!this.isSignIn},async handleClickAuth(t){const e=this.isSignIn?"signin":"signup",{status:s}=await this.$store.dispatch("auth/authUser",{type:e,authData:{email:this.email,password:this.password,confirm_password:this.confirmPassword}});s&&(this.shown=!1,this.$router.push({path:"/user"})),this.email=null,this.password=null,this.confirmPassword=null}}},_t=yt,St=(0,o.A)(_t,ot,lt,!1,null,"41390efa",null),xt=St.exports,bt={components:{RootLayout:L,AppMenu:it,AuthModal:xt},data(){return{isAuthModalShown:!1}},methods:{handleLogin(t){this.isAuthModalShown=!0}}},At=bt,Mt=(0,o.A)(At,_,S,!1,null,"57077b86",null),Lt=Mt.exports,Et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-profile-page"},[e("root-layout",[e("template",{slot:"header"},[e("app-menu",{scopedSlots:t._u([{key:"logo",fn:function({handleClickLogo:n}){return[t.isWidthWindowSmall?e("div",{staticClass:"logo-custom"},[e("img",{staticClass:"logo-image",attrs:{src:s(5184),alt:"logo"},on:{click:n}})]):t._e()]}}])})],1),e("section",{staticClass:"profile-content"},[e("div",{staticClass:"notes-container"},t._l(t.notes,(function(s){return e("note-card",{key:s.id,attrs:{id:s.id,title:s.title,content:s.content},on:{"delete-note":t.handleDeleteNote}})})),1),e("app-button",{attrs:{rounded:"",fixed:"","aria-label":"Добавить новую заметку"},on:{click:t.handleClickNoteAdd}},[e("app-icon",{attrs:{name:"add",size:"16"}})],1)],1),e("add-note-modal",{attrs:{message:t.messageError},on:{"send-note":t.handlerSendNote},model:{value:t.isAddModalShown,callback:function(e){t.isAddModalShown=e},expression:"isAddModalShown"}})],2)],1)},It=[];s(4520);const Tt="https://dist.nd.ru";async function Pt(t){try{const e=await fetch(`${Tt}/api/notes`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}),s=await e.json();return{data:s,status:e.ok}}catch(e){return{data:null,status:!1}}}async function $t(t,e){try{const s=await fetch(`${Tt}/api/notes`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({...e})}),n=await s.json();return{data:n,status:s.ok}}catch(s){return{data:null,status:!1}}}async function Bt(t,e){try{const s=await fetch(`${Tt}/api/notes/${e}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}});return{status:s.ok}}catch(s){return{status:!1}}}var Ot=function(){var t=this,e=t._self._c;return e("app-modal",{model:{value:t.shown,callback:function(e){t.shown=e},expression:"shown"}},[e("div",{staticClass:"add-note"},[e("h2",{staticClass:"note-title"},[t._v("Добавление заметки")]),e("div",{staticClass:"note-name"},[e("app-input",{attrs:{label:"Название заметки",placeholder:"Введите название","max-length":100},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),e("div",{staticClass:"note-content"},[e("app-textarea",{attrs:{label:"Текст заметки",placeholder:"Введите текст","max-length":500},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),e("div",{staticClass:"note-add"},[e("app-button",{attrs:{block:t.isWidthWindowSmall},on:{click:t.handleClickAdd}},[t._v(" Добавить ")])],1),t.message?e("p",{staticClass:"add-note-error",domProps:{innerHTML:t._s(t.message)}}):t._e()])])},Nt=[],zt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-input"},[e("label",{staticClass:"app-input-label",on:{click:t.handleFocusInput}},[t._v(" "+t._s(t.label)+" ")]),e("div",{staticClass:"app-input-container"},[e("textarea",{ref:"input",staticClass:"app-input-root app-textarea-root",attrs:{placeholder:t.placeholder,maxlength:t.maxLength},domProps:{value:t.value},on:{input:t.handleInputChange}})]),t.hasInputInfo?e("div",{staticClass:"app-input-info"},[t.error?e("span",{staticClass:"app-input-message"},[t._v(t._s(t.message))]):t._e(),t.hasMaxLength?e("span",{staticClass:"app-input-char-counter text-small"},[t._v(" "+t._s(t.currentLength)+" / "+t._s(t.maxLength)+" ")]):t._e()]):t._e()])},Wt=[],jt={mixins:[mt]},Dt=jt,Rt=(0,o.A)(Dt,zt,Wt,!1,null,"af8f2a9e",null),Ht=Rt.exports,Ft={components:{AppModal:pt,AppInput:kt,AppTextarea:Ht,AppButton:J},props:{value:{type:Boolean,default:!1},message:{type:String,default:null}},watch:{value:{immediate:!0,handler(t){this.shown=t,t||(this.title=null,this.content=null)}},shown(t){this.isSignIn=!0,this.$emit("input",t)}},data(){return{shown:!1,title:null,content:null,windowSize:B}},computed:{isWidthWindowSmall(){return this.windowSize.width<=530}},methods:{async handleClickAdd(t){this.$emit("send-note",{title:this.title,content:this.content})}}},Zt=Ft,Ut=(0,o.A)(Zt,Ot,Nt,!1,null,"6ba770ed",null),Vt=Ut.exports,Kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-card"},[e("div",{staticClass:"note-header"},[e("div",{staticClass:"note-header-container"},[e("h4",{staticClass:"note-title"},[t._v(t._s(t.title))])]),t._m(0)]),e("div",{staticClass:"note-content"},[e("p",{staticClass:"note-content-text"},[t._v(" "+t._s(t.content)+" ")])]),e("div",{staticClass:"note-footer"},[e("app-button",{attrs:{color:"transparent"},on:{click:t.handlerClickDelete}},[e("app-icon",{attrs:{name:"close",size:"16"}}),e("div",{staticClass:"note-delete-button"},[e("span",{staticClass:"note-delete-text"},[t._v("Удалить")])])],1)],1)])},Gt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"note-corner-cut"},[e("div",{staticClass:"corner-cut-top"}),e("div",{staticClass:"corner-cut-bottom"})])}],Jt={components:{AppButton:J,AppIcon:F},props:{id:{type:Number,default:null},title:{type:String,default:null},content:{type:String,default:null}},methods:{handlerClickDelete(t){this.$emit("delete-note",this.id)}}},qt=Jt,Qt=(0,o.A)(qt,Kt,Gt,!1,null,"773fc18c",null),Xt=Qt.exports,Yt={components:{RootLayout:L,AppMenu:it,AppButton:J,AppIcon:F,AddNoteModal:Vt,NoteCard:Xt},async created(){await this.loadNotes()},data(){return{notes:null,isAddModalShown:!1,messageError:null,windowSize:B}},computed:{isWidthWindowSmall(){return this.windowSize.width<=360},token(){return this.$store.getters["auth/token"]}},methods:{async loadNotes(){const{data:t,status:e}=await Pt(this.token);e&&(this.notes=t)},async handlerSendNote(t){const{data:e,status:s}=await $t(this.token,t);s&&(this.notes=[...this.notes,e],this.isAddModalShown=!1),Array.isArray(e.message)&&(this.messageError=e.message.join("<br>"))},async handleDeleteNote(t){const{status:e}=await Bt(this.token,t);e&&(this.notes=this.notes.filter((e=>e.id!==t)))},handleClickNoteAdd(t){this.isAddModalShown=!0}}},te=Yt,ee=(0,o.A)(te,Et,It,!1,null,"cd843d70",null),se=ee.exports;n.Ay.use(c.Ay);const ne=[{path:"/",name:"home",component:Lt,meta:{auth:!1}},{path:"/user",name:"user",component:se,meta:{auth:!0}}],ae=new c.Ay({routes:ne}),ie=c.Ay.prototype.push;if(c.Ay.prototype.push=function(t){return ie.call(this,t).catch((t=>t))},localStorage.getItem("userToken")){const t=JSON.parse(localStorage.getItem("userToken"));t&&t.token&&y.commit("auth/SET_USER_INFO",t.token)}ae.beforeEach(((t,e,s)=>{const n=y.getters["auth/token"];t.meta.auth&&!n?s("/"):!t.meta.auth&&n?s("/user"):s()}));var oe=ae;n.Ay.config.productionTip=!1,new n.Ay({router:oe,store:y,render:t=>t(d)}).$mount("#app")},147:function(t,e,s){"use strict";s.r(e),e["default"]='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 9H17M9 1L9 17" stroke="white" stroke-width="2" stroke-linecap="round"/>\n</svg>\n'},4714:function(t,e,s){"use strict";s.r(e),e["default"]='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 1L17 17M17 1L1 17" stroke="white" stroke-width="2" stroke-linecap="round"/>\n</svg>\n'},2778:function(t,e,s){"use strict";s.r(e),e["default"]='<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="1" y="1" width="16" height="14" rx="3" stroke="#B1C909" stroke-width="2"/>\n<path d="M4 5L7.75061 8.00049C8.48105 8.58484 9.51895 8.58484 10.2494 8.00049L14 5" stroke="#B1C909" stroke-width="2"/>\n</svg>\n'},4309:function(t,e,s){"use strict";s.r(e),e["default"]='<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.3079 4.54487C5.90926 4.92711 5.89596 5.56013 6.2782 5.95877C6.66044 6.35741 7.29347 6.3707 7.6921 5.98846L6.3079 4.54487ZM7.6921 28.0115C7.29347 27.6293 6.66044 27.6426 6.2782 28.0412C5.89596 28.4399 5.90926 29.0729 6.3079 29.4551L7.6921 28.0115ZM1 16C0.447715 16 0 16.4477 0 17C0 17.5523 0.447715 18 1 18V16ZM23 17L23.7071 17.7071C24.0976 17.3166 24.0976 16.6834 23.7071 16.2929L23 17ZM16.2929 22.2929C15.9024 22.6834 15.9024 23.3166 16.2929 23.7071C16.6834 24.0976 17.3166 24.0976 17.7071 23.7071L16.2929 22.2929ZM17.7071 10.2929C17.3166 9.90237 16.6834 9.90237 16.2929 10.2929C15.9024 10.6834 15.9024 11.3166 16.2929 11.7071L17.7071 10.2929ZM32 17C32 25.3158 25.4872 32 17.5227 32V34C26.6539 34 34 26.3573 34 17H32ZM17.5227 2C25.4872 2 32 8.68416 32 17H34C34 7.64273 26.6539 0 17.5227 0V2ZM7.6921 5.98846C10.2781 3.50887 13.7316 2 17.5227 2V0C13.1867 0 9.2448 1.72879 6.3079 4.54487L7.6921 5.98846ZM17.5227 32C13.7316 32 10.2781 30.4911 7.6921 28.0115L6.3079 29.4551C9.2448 32.2712 13.1867 34 17.5227 34V32ZM1 18H23V16H1V18ZM22.2929 16.2929L16.2929 22.2929L17.7071 23.7071L23.7071 17.7071L22.2929 16.2929ZM23.7071 16.2929L17.7071 10.2929L16.2929 11.7071L22.2929 17.7071L23.7071 16.2929Z" fill="white"/>\n</svg>\n'},4521:function(t,e,s){"use strict";s.r(e),e["default"]='<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M17 8C17 9.15478 16.2206 10.6493 14.7228 11.9006C13.2537 13.128 11.2258 14 9 14C6.77424 14 4.7463 13.128 3.27718 11.9006C1.77936 10.6493 1 9.15478 1 8C1 6.84522 1.77936 5.35074 3.27718 4.09941C4.7463 2.87204 6.77424 2 9 2C11.2258 2 13.2537 2.87204 14.7228 4.09941C16.2206 5.35074 17 6.84522 17 8Z" stroke="#B1C909" stroke-width="2"/>\n<circle cx="9" cy="8" r="3" stroke="#B1C909" stroke-width="2"/>\n<path d="M2 1L16 15" stroke="#B1C909" stroke-width="2"/>\n</svg>\n'},3021:function(t,e,s){"use strict";s.r(e),e["default"]='<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M17 7C17 8.15478 16.2206 9.64926 14.7228 10.9006C13.2537 12.128 11.2258 13 9 13C6.77424 13 4.7463 12.128 3.27718 10.9006C1.77936 9.64926 1 8.15478 1 7C1 5.84522 1.77936 4.35074 3.27718 3.09941C4.7463 1.87204 6.77424 1 9 1C11.2258 1 13.2537 1.87204 14.7228 3.09941C16.2206 4.35074 17 5.84522 17 7Z" stroke="#B1C909" stroke-width="2"/>\n<circle cx="9" cy="7" r="3" stroke="#B1C909" stroke-width="2"/>\n</svg>\n'},8429:function(t,e,s){"use strict";s.r(e),e["default"]='<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="1" y="8.5" width="16" height="10" rx="2" stroke="#B1C909" stroke-width="2"/>\n<circle cx="9" cy="13.5" r="2" stroke="#B1C909" stroke-width="2"/>\n<path d="M4 4.5C4 2.84315 5.34315 1.5 7 1.5H11C12.6569 1.5 14 2.84315 14 4.5V8.5H4V4.5Z" stroke="#B1C909" stroke-width="2"/>\n</svg>\n'},9615:function(t,e,s){"use strict";s.r(e),e["default"]='<svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="11" cy="6" r="5" stroke="white" stroke-width="2"/>\n<path d="M21 28V20C21 17.7909 19.2091 16 17 16H5C2.79086 16 1 17.7909 1 20V28" stroke="white" stroke-width="2"/>\n</svg>\n'},4078:function(t,e,s){var n={"./add.svg":147,"./close.svg":4714,"./email.svg":2778,"./login.svg":4309,"./off-password.svg":4521,"./on-password.svg":3021,"./password.svg":8429,"./user.svg":9615};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=4078},5184:function(t,e,s){"use strict";t.exports=s.p+"img/logo-small.41a52ced.svg"},3914:function(t,e,s){"use strict";t.exports=s.p+"img/logo.c30495fa.svg"}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],i=t[c][2];for(var l=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[r])}))?n.splice(r--,1):(l=!1,i<o&&(o=i));if(l){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/my-notes/"}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,o=n[0],l=n[1],r=n[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(r)var c=r(s)}for(e&&e(n);d<o.length;d++)i=o[d],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(c)},n=self["webpackChunknew_disk"]=self["webpackChunknew_disk"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(9853)}));n=s.O(n)})();
//# sourceMappingURL=app.5e663771.js.map