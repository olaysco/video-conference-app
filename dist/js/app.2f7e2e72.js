(function(t){function e(e){for(var o,a,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},s={app:0},i=[];function a(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cf8773c5"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=s[t]=[e,o]}));e.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=a(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}s[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0895":function(t,e,n){t.exports=n.p+"img/google.03cd2e33.svg"},1:function(t,e){},"1a34":function(t,e,n){t.exports=n.p+"img/calendar.f1fb7415.svg"},"3ef8":function(t,e,n){t.exports=n.p+"img/user-con-blue.d520fdad.svg"},"4c12":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=n("1dce"),i=n.n(s),a=n("28dd"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t.pageBusy?n("div",{staticClass:"d-flex justify-content-center align-items-center loader"},[t._m(0)]):t._e()],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],l={computed:{pageBusy:function(){return this.$store.state.pageBusy}}},u=l,d=(n("5c0b"),n("2877")),m=Object(d["a"])(u,r,c,!1,null,null,null),f=m.exports,v=n("8c4f"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:{type:String,default:""}}},C=b,x=(n("cf02"),Object(d["a"])(C,g,_,!1,null,"2ed8797b",null)),y=x.exports,w={name:"Home",components:{HelloWorld:y}},k=w,E=Object(d["a"])(k,p,h,!1,null,null,null),T=(E.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid d-flex flex-row page-container"},[n("div",{staticClass:"leftCon col-md-8 col-sm-12"},[t._m(0),t._m(1),n("div",{staticClass:"signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"},[n("div",{staticClass:"signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"},[t.loginError?n("span",{staticClass:"text-danger mb-1"},[t._v("\n            Invalid Username or password, Please try again.\n          ")]):t._e(),n("form",{staticClass:"mySlides",attrs:{id:"login-form"}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.email.$model,expression:"$v.form.email.$model",modifiers:{trim:!0}}],staticClass:"form-control bs-input",class:{"is-invalid":t.$v.form.email.$error},staticStyle:{width:"300px","border-radius":"20px",padding:"20px"},attrs:{id:"username",type:"email",name:"email",placeholder:"Email",autocomplete:"off"},domProps:{value:t.$v.form.email.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.email,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"invalid-feedback"},[t._v("\n                Please provide a valid email\n              ")])]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.password.$model,expression:"$v.form.password.$model",modifiers:{trim:!0}}],staticClass:"form-control bs-input",class:{"is-invalid":t.$v.form.password.$error},staticStyle:{width:"300px","border-radius":"20px",padding:"20px"},attrs:{id:"password",type:"password",name:"password",autocomplete:"false",placeholder:"Password"},domProps:{value:t.$v.form.password.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.password,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"invalid-feedback"},[t._v("\n                Please provide a password\n              ")])])])]),n("button",{staticClass:"btn btn-primary btn-block col-md-12 col-sm-12 submit bs-input",staticStyle:{color:"#FFF","border-radius":"20px",width:"300px"},attrs:{name:"signup"},on:{click:t.login}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.form.busy,expression:"!form.busy"}]},[t._v("Login")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.form.busy,expression:"form.busy"}],staticClass:"spinner-border spinner-border-sm mr-1",attrs:{role:"status","aria-hidden":"true"}}),n("span",{directives:[{name:"show",rawName:"v-show",value:t.form.busy,expression:"form.busy"}]},[t._v("authenticating...")])])]),n("router-link",{staticClass:"login-here-link",attrs:{to:"/register"}},[t._v("\n        or create account\n      ")]),t._m(2)],1),t._m(3)])}),S=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo col-md-12 col-sm-12 d-flex flex-row justify-content-center"},[o("div",{staticClass:"circle d-flex flex-column justify-content-center align-items-center mt-4"},[o("img",{staticClass:"w-100",attrs:{src:n("cf05"),alt:"logo-img"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headText col-sm-12 col-sm-12 pt-4"},[n("h4",{staticStyle:{"text-align":"center","font-weight":"500",color:"rgb(255, 255, 255)"}},[t._v("\n          Your video conferencing Meetings reimagined!\n        ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"headText col-sm-12 col-sm-12"},[o("p",{staticStyle:{"text-align":"center",color:"#fff","font-size":"1rem"}},[t._v("\n          or Signin using\n        ")]),o("div",{staticClass:"logo col-md-12 col-sm-12 d-flex flex-row justify-content-center"},[o("div",{staticClass:"signin-icon d-flex flex-column justify-content-center align-items-center mt-4"},[o("img",{staticClass:"signin-icon",attrs:{src:n("0895"),alt:"google-sign-in"}})]),t._v("\n           \n          "),o("div",{staticClass:"signin-icon d-flex flex-column justify-content-center align-items-center mt-4"},[o("img",{staticClass:"signin-icon",attrs:{src:n("a39e"),alt:"google-sign-in"}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rightCon col-md-4 d-none d-md-flex align-items-center "},[o("div",[o("img",{staticClass:"w-100",attrs:{src:n("61c5"),alt:"group image"}})])])}],J=(n("96cf"),n("3b8d")),O=n("b5ae"),j={data:function(){return{form:{email:"",password:"",busy:!1},loginError:!1}},validations:{form:{email:{required:O["required"],email:O["email"]},password:{required:O["required"]}}},methods:{login:function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loginError=!1,this.$v.form.$touch(),!this.$v.form.$error){t.next=4;break}return t.abrupt("return");case 4:return this.form.busy=!0,this.$store.dispatch("togglePageBusy"),this.$http.post("https://vidconf-api.herokuapp.com/user/login",this.form).then((function(t){"Error"!=t.data.status?console.log(t.data):e.loginError=!0})).catch((function(t){console.log(t)})).finally((function(t){e.form.busy=!1,e.$store.dispatch("togglePageBusy")})),t.next=9,setTimeout((function(){e.form.busy=!1}),3e3);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},M=j,N=Object(d["a"])(M,T,S,!1,null,"d52188d8",null),L=N.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid d-flex flex-row page-container "},[n("div",{staticClass:"leftCon col-md-8 col-sm-12"},[t._m(0),t._m(1),n("div",{staticClass:"signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"},[t.$v.$error?n("span",[t._v("\n          Ensure all fields are filled correctly\n        ")]):t._e(),t.showSecondForm?t._e():n("div",{staticClass:"signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"},[n("form",{staticClass:"mySlides",attrs:{id:"book-form"}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.organisation.$model,expression:"$v.form.organisation.$model",modifiers:{trim:!0}}],staticClass:"form-control bs-input",class:{"is-invalid":t.$v.form.organisation.$error},staticStyle:{width:"300px","border-radius":"20px",padding:"20px"},attrs:{id:"title",type:"text",name:"organisationName",placeholder:"Organization name"},domProps:{value:t.$v.form.organisation.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.organisation,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"invalid-feedback"},[t._v("\n                Field must contain at least 2 characters\n              ")])]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.email.$model,expression:"$v.form.email.$model",modifiers:{trim:!0}}],staticClass:"form-control bs-input",class:{"is-invalid":t.$v.form.email.$error},staticStyle:{width:"300px","border-radius":"20px",padding:"20px"},attrs:{id:"author",type:"text",name:"workEmail",placeholder:"Work email"},domProps:{value:t.$v.form.email.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.email,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"invalid-feedback"},[t._v("\n                Please provide a valid email\n              ")])])])]),t.showSecondForm?n("div",{staticClass:"signUpForm2 w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"},[n("form",{staticClass:"mySlides",attrs:{id:"book-form"}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.form.username.$model,expression:"$v.form.username.$model"}],staticClass:"form-control bs-input",class:{"is-invalid":t.$v.form.username.$error},staticStyle:{width:"300px","border-radius":"20px",padding:"20px"},attrs:{id:"title",type:"text",name:"username",placeholder:"Username"},domProps:{value:t.$v.form.username.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.username,"$model",e.target.value)}}}),n("div",{staticClass:"invalid-feedback"},[t._v("\n                Username must contain at least 2 characters\n              ")])]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.form.password.$model,expression:"$v.form.password.$model"}],staticClass:"form-control bs-input",class:{"is-invalid":t.$v.form.password.$error},staticStyle:{width:"300px","border-radius":"20px",padding:"20px"},attrs:{id:"author",type:"password",name:"password",placeholder:"Password"},domProps:{value:t.$v.form.password.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.password,"$model",e.target.value)}}}),n("div",{staticClass:"invalid-feedback"},[t._v("\n                Password must be alphanumeric and min length is 7\n              ")]),n("span",{staticClass:"d-flex flex-row mt-2 ml-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.agree,expression:"form.agree"}],staticStyle:{"margin-top":"6px"},attrs:{type:"checkbox",name:"agree"},domProps:{checked:Array.isArray(t.form.agree)?t._i(t.form.agree,null)>-1:t.form.agree},on:{change:function(e){var n=t.form.agree,o=e.target,s=!!o.checked;if(Array.isArray(n)){var i=null,a=t._i(n,i);o.checked?a<0&&t.$set(t.form,"agree",n.concat([i])):a>-1&&t.$set(t.form,"agree",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.form,"agree",s)}}}),t._m(2)])])]),n("button",{staticClass:"btn btn-default",attrs:{name:"previous"},on:{click:function(e){t.showSecondForm=!1}}},[t._v("\n            previous\n          ")])]):t._e(),n("button",{staticClass:"btn btn-primary btn-block col-md-12 col-sm-12 submit bs-input",staticStyle:{color:"#FFF","border-radius":"20px",width:"300px"},attrs:{name:"signup"},on:{click:t.progressForm}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.form.busy,expression:"!form.busy"}]},[t._v(t._s(t.showSecondForm?"submit":"next"))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.form.busy,expression:"form.busy"}],staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),n("span",{directives:[{name:"show",rawName:"v-show",value:t.form.busy,expression:"form.busy"}]},[t._v("Creating account...")])]),n("router-link",{staticClass:"login-here-link",attrs:{to:"/login"}},[t._v("\n          or Login here\n        ")])],1),t._m(3)]),t._m(4)])},D=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo col-md-12 col-sm-12 d-flex flex-row justify-content-center"},[o("div",{staticClass:"circle d-flex flex-column justify-content-center align-items-center mt-4"},[o("img",{staticClass:"w-100",attrs:{src:n("cf05"),alt:"logo-img"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headText col-sm-12 col-sm-12 pt-4"},[n("h4",{staticStyle:{"text-align":"center","font-weight":"500",color:"rgb(255, 255, 255)"}},[t._v("\n          Your video conferencing Meetings reimagined!\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"}},[n("p",{staticStyle:{color:"#797979","margin-left":"12px"}},[t._v("\n                    I agree to privacy policies\n                  ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"headText col-sm-12 col-sm-12"},[o("p",{staticStyle:{"text-align":"center",color:"#fff","font-size":"1rem"}},[t._v("\n          or Signin using\n        ")]),o("div",{staticClass:"logo col-md-12 col-sm-12 d-flex flex-row justify-content-center"},[o("div",{staticClass:"signin-icon d-flex flex-column justify-content-center align-items-center mt-4"},[o("img",{staticClass:"signin-icon",attrs:{src:n("0895"),alt:"google-sign-in"}})]),t._v("\n           \n          "),o("div",{staticClass:"signin-icon d-flex flex-column justify-content-center align-items-center mt-4"},[o("img",{staticClass:"signin-icon",attrs:{src:n("a39e"),alt:"google-sign-in"}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rightCon col-md-4 d-none d-md-flex align-items-center "},[o("div",[o("img",{staticClass:"w-100",attrs:{src:n("61c5"),alt:"group image"}})])])}],P={data:function(){return{form:{organisation:"",email:"",password:"",username:"",agree:"",busy:!1},showSecondForm:!1}},validations:{form:{organisation:{required:O["required"],minLength:Object(O["minLength"])(4)},email:{required:O["required"],email:O["email"]},username:{required:O["required"],between:Object(O["minLength"])(2)},password:{required:O["required"],alphaNum:O["alphaNum"],minLength:Object(O["minLength"])(7)}}},methods:{register:function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){t.next=3;break}return t.abrupt("return");case 3:this.form.busy=!0,console.log(this.form.busy),this.$store.dispatch("togglePageBusy"),this.$http.post("https://vidconf-api.herokuapp.com/user",this.form).then((function(t){t.ok&&(alert("registeration successful"),e.$store.dispatch("setUser",t.data.data.user),e.$router.push({path:"host",query:{newuser:!0}}))})).catch((function(t){console.log(t)})).finally((function(t){e.form.busy=!1,e.$store.dispatch("togglePageBusy")}));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),progressForm:function(){this.showSecondForm?this.register():this.showSecondForm=!0}}},U=P,I=Object(d["a"])(U,A,D,!1,null,"ac66c0a0",null),V=I.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("tooltip"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 h-100v p-0"},[n("div",{staticClass:"top-element"},[n("div",{staticClass:"top-bar"},[n("div",{staticClass:"controls"},[n("ul",{staticClass:"control-list"},[n("li",{directives:[{name:"popover",rawName:"v-popover:tooltip",value:"Settings",expression:"'Settings'",arg:"tooltip"}]},[n("i",{staticClass:"fa fa-cog faa-spin animated-hover"})]),n("li",{directives:[{name:"popover",rawName:"v-popover:tooltip",value:"start call",expression:"'start call'",arg:"tooltip"}],attrs:{id:"setup-new-room"}},[n("button",{staticClass:"btn",attrs:{disabled:t.isConfStarted},on:{click:t.initVideo}},[n("i",{staticClass:"fas fa-video"})])]),n("li",{directives:[{name:"popover",rawName:"v-popover:tooltip",value:"End call",expression:"'End call'",arg:"tooltip"}],attrs:{id:"end-call",tabindex:"0"}},[n("button",{staticClass:"btn",staticStyle:{"pointer-events":"none"},attrs:{disabled:!t.isConfStarted},on:{click:t.disconnect}},[n("i",{staticClass:"fas fa-phone"})])]),n("li",{directives:[{name:"popover",rawName:"v-popover:tooltip",value:"apply filter",expression:"'apply filter'",arg:"tooltip"}]},[n("i",{staticClass:"fas fa-magic"})]),n("li",{directives:[{name:"popover",rawName:"v-popover:tooltip",value:"Mute or Unmute mic",expression:"'Mute or Unmute mic'",arg:"tooltip"}]},[n("button",{staticClass:"btn",on:{click:t.muteLocalTrack}},[n("i",{class:{"fas fa-microphone-alt-slash":t.isMuted,"fas fa-microphone-alt":!t.isMuted}})])])])])]),n("div",{staticClass:"bottom-bar"},[n("div",{staticClass:"track-list",on:{click:t.setMainTrack}})])]),n("div",{staticClass:"grid-container",attrs:{id:"videos-container"}},[n("videoChat")],1)])])],1)},R=[],H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"video-list",attrs:{id:"meet"}})])}],K={name:"VideoChat",data:function(){return{}},watch:{},mounted:function(){},created:function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),methods:{}},q=K,G=(n("ce97"),Object(d["a"])(q,H,B,!1,null,"f775ed10",null)),z=G.exports,W={data:function(){return{options:{hosts:{domain:"vdconf.xyz",muc:"conference.vdconf.xyz"},bosh:"//vdconf.xyz/http-bind",clientNode:"http://vdconf.xyz"},confOptions:{openBridgeChannel:!0},connection:null,isJoined:!1,room:null,trackList:[],isVideo:!1,isConfStarted:!1,localTracks:[],isMuted:!1,remoteTracks:{},initOptions:{disableAudioLevels:!0,desktopSharingChromeExtId:"mbocklcggfhnbahlnepmldehdhpjfcjp",desktopSharingChromeDisabled:!1,desktopSharingChromeSources:["screen","window"],desktopSharingChromeMinExtVersion:"0.1",desktopSharingFirefoxDisabled:!0}}},methods:{onLocalTracks:function(t){this.localTracks=t,this.trackList.push({id:"local",name:"me"});for(var e=0;e<this.localTracks.length;e++)this.localTracks[e].addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,(function(t){return console.log("Audio Level local: ".concat(t))})),this.localTracks[e].addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,(function(){return console.log("local track muted")})),this.localTracks[e].addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,(function(){return console.log("local track stoped")})),this.localTracks[e].addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,(function(t){return console.log("track audio output device was changed to ".concat(t))})),"video"===this.localTracks[e].getType()?($("#meet").append("<video autoplay='1' id='localVideo".concat(e,"' />")),$(".track-list ").html(' <div class="track" id="local"> <video autoplay=\'1\' data-owner="local" id=\'smallLocalVideo'.concat(e,"' /> </div>")),this.localTracks[e].attach($("#smallLocalVideo".concat(e))[0]),this.localTracks[e].attach($("#localVideo".concat(e))[0])):($("body").append("<audio autoplay='1' muted='true' id='localAudio".concat(e,"' />")),this.localTracks[e].attach($("#localAudio".concat(e))[0])),this.isJoined&&this.room.addTrack(this.localTracks[e])},onRemoteTrack:function(t){if(!t.isLocal()){var e=t.getParticipantId();this.remoteTracks[e]||(this.remoteTracks[e]=[]);var n=this.remoteTracks[e].push(t);t.addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,(function(t){return console.log("Audio Level remote: ".concat(t))})),t.addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,(function(){return console.log("remote track muted")})),t.addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,(function(){return console.log("remote track stoped")})),t.addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,(function(t){return console.log("track audio output device was changed to ".concat(t))}));var o=e+t.getType()+n;"video"===t.getType()?($(".track-list").append('<div class="track" id="'.concat(e,"\"> <video autoplay='1' data-owner=\"").concat(e,"\" id='smallRemoteVideo").concat(n,"' /> </div>")),t.attach($("#smallRemoteVideo".concat(n))[0])):($("body").append("<audio autoplay='1' id='".concat(e,"audio").concat(n,"'/>")),t.attach($("#".concat(o))[0]))}},onConferenceJoined:function(){console.log("conference joined!"),this.isJoined=!0;for(var t=0;t<this.localTracks.length;t++)this.room.addTrack(this.localTracks[t])},onUserLeft:function(t){if(console.log("user left"),this.remoteTracks[t])for(var e=this.remoteTracks[t],n=0;n<e.length;n++)e[n].detach($("#".concat(t).concat(e[n].getType())))},onConnectionSuccess:function(){var t=this;console.log("connected successsfully"),this.isConfStarted=!0,console.log(this.isConfStarted),this.room=this.connection.initJitsiConference("conference",this.confOptions),this.room.on(JitsiMeetJS.events.conference.TRACK_ADDED,this.onRemoteTrack),this.room.on(JitsiMeetJS.events.conference.TRACK_REMOVED,(function(t){console.log("track removed!!!".concat(t))})),this.room.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED,this.onConferenceJoined),this.room.on(JitsiMeetJS.events.conference.USER_JOINED,(function(e){console.log("user join"),t.remoteTracks[e]=[]})),this.room.on(JitsiMeetJS.events.conference.USER_LEFT,this.onUserLeft),this.room.on(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED,(function(t){console.log("".concat(t.getType()," - ").concat(t.isMuted()))})),this.room.on(JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED,(function(t,e){return console.log("".concat(t," - ").concat(e))})),this.room.on(JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED,(function(t,e){return console.log("".concat(t," - ").concat(e))})),this.room.on(JitsiMeetJS.events.conference.PHONE_NUMBER_CHANGED,(function(){return console.log("".concat(t.room.getPhoneNumber()," - ").concat(t.room.getPhonePin()))})),this.room.join(),this.room.setReceiverVideoConstraint(360)},onConnectionFailed:function(){console.error("Connection Failed!")},onDeviceListChanged:function(t){console.info("current devices",t)},switchVideo:function(){var t=this;this.isVideo=!this.isVideo,this.localTracks[1]&&(this.localTracks[1].dispose(),this.localTracks.pop()),JitsiMeetJS.createLocalTracks({devices:[this.isVideo?"video":"desktop"]}).then((function(e){t.localTracks.push(e[0]),t.localTracks[1].addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,(function(){return console.log("local track muted")})),t.localTracks[1].addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,(function(){return console.log("local track stoped")})),t.localTracks[1].attach($("#localVideo1")[0]),t.room.addTrack(t.localTracks[1])})).catch((function(t){return console.log(t)}))},changeAudioOutput:function(t){JitsiMeetJS.mediaDevices.setAudioOutputDevice(t.value)},disconnect:function(){console.log("disconnect!"),this.isConfStarted=!1,this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,this.onConnectionSuccess),this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED,this.onConnectionFailed),this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,this.disconnect)},unload:function(){for(var t=0;t<this.localTracks.length;t++)this.localTracks[t].dispose();this.room.leave(),this.connection.disconnect()},initVideo:function(){JitsiMeetJS.init(this.initOptions),console.log("init success"),this.connection=new JitsiMeetJS.JitsiConnection(null,null,this.options),this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,this.onConnectionSuccess),this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED,this.onConnectionFailed),this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,this.disconnect),this.connection.connect(),JitsiMeetJS.mediaDevices.addEventListener(JitsiMeetJS.events.mediaDevices.DEVICE_LIST_CHANGED,this.onDeviceListChanged),JitsiMeetJS.createLocalTracks({devices:["audio","video"]}).then(this.onLocalTracks).catch((function(t){throw t})),JitsiMeetJS.mediaDevices.isDeviceChangeAvailable("output")&&JitsiMeetJS.mediaDevices.enumerateDevices((function(t){var e=t.filter((function(t){return"audiooutput"===t.kind}));e.length>1&&($("#audioOutputSelect").html(e.map((function(t){return'<option value="'.concat(t.deviceId,'">').concat(t.label,"</option>")})).join("\n")),$("#audioOutputSelectWrapper").show())}))},muteLocalTrack:function(){if(this.isMuted)for(var t=0;t<this.localTracks.length;t++)"audio"===this.localTracks[t].getType()&&this.localTracks[t].unmute();else for(var e=0;e<this.localTracks.length;e++)"audio"===this.localTracks[e].getType()&&this.localTracks[e].mute();this.isMuted=!this.isMuted},setMainTrack:function(t){if("VIDEO"==t.target.nodeName){var e=t.target.dataset.owner;if("local"==e)for(var n=0;n<this.localTracks.length;n++)"video"===this.localTracks[n].getType()?this.localTracks[n].attach($("#localVideo".concat(n))[0]):this.localTracks[n].attach($("#localAudio".concat(n))[0]);else for(var o=0;o<this.remoteTracks[e].length;o++)"video"===this.remoteTracks[e][o].getType()?this.remoteTracks[e][o].attach($("#localVideo".concat(o))[0]):this.remoteTracks[e][o].attach($("#localAudio".concat(o))[0])}}},created:function(){this.isVideo=!0,$(window).bind("beforeunload",this.unload),$(window).bind("unload",this.unload)}},Y={mixins:[W],components:{videoChat:z},data:function(){return{chatShow:!1,roomId:"public-room"}},created:function(){},methods:{}},Q=Y,X=Object(d["a"])(Q,F,R,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid d-flex flex-row pl-0 page-container"},[n("div",{staticClass:"leftCon col-md-8 col-sm-12 d-flex"},[n("div",{staticClass:"d-flex flex-column m-auto left-container"},[t._m(0),n("div",{staticClass:"signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"},[t.host?t._e():n("div",{staticClass:"signUpForm w3-content col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center mb-3"},[t._m(1),n("span",{staticClass:"or-host"},[t._v("- or -")])]),n("button",{staticClass:"btn btn-primary-inverse btn-block col-md-12 col-sm-12 submit bs-input",staticStyle:{"border-radius":"20px",width:"300px"},attrs:{id:"enter"},on:{click:t.hostMeeting}},[t._v("\n            Host a meeting\n          ")]),t._m(2),t.host?n("p",[t._v("\n            Meeting Url: "),n("a",{attrs:{href:t.hostUrl}},[t._v(t._s(t.hostUrl))])]):t._e()])])]),t._m(3)])},et=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo col-md-12 col-sm-12 d-flex flex-row justify-content-center"},[o("div",{staticClass:"circle d-flex flex-column justify-content-center align-items-center mt-4"},[o("img",{staticClass:"w-100",attrs:{src:n("cf05"),alt:"logo-img"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"mySlides",attrs:{id:"book-form"}},[n("div",{staticClass:"form-group w-100"},[n("div",{staticClass:"input-group mb-3 join-input-group rounded-pill bs-input"},[n("input",{staticClass:"form-control border-0 rounded-pill",attrs:{type:"text",placeholder:"Enter meeting ID","aria-label":"Enter meeting ID","aria-describedby":"basic-addon2"}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-primary rounded-pill px-4",attrs:{type:"button"}},[t._v("\n                      Join\n                    ")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rightCon col-md-4 col-sm-12 d-flex align-items-center"},[o("div",[o("h4",{staticClass:"text-light text-center mb-4"},[t._v("\n          Your video conferencing Meetings reimagined!\n        ")]),o("img",{staticClass:"w-100",attrs:{src:n("61c5"),alt:"group image"}})])])}],nt={data:function(){return{host:!1,hostUrl:""}},computed:{user:function(){return this.$store.state.user}},methods:{randomString:function(t){for(var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="",o=t;o>0;--o)n+=e[Math.round(Math.random()*(e.length-1))];return n},hostMeeting:function(){this.host=!0,this.hostUrl="".concat(this.$store.state.url,"/").concat(this.randomString(5))}}},ot=nt,st=(n("d691"),Object(d["a"])(ot,tt,et,!1,null,"2c0efd50",null)),it=st.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"modal fade ",attrs:{id:"customModal",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[n("div",{staticClass:"modal-content border-0 bs-light"},[t._m(1)])])])])},rt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid d-flex flex-column"},[o("div",{staticClass:"row nav-section p-2"},[o("div",{staticClass:"col-md-12 d-flex h-100 align-items-center"},[o("div",{staticClass:"user-avatar mr-2"},[o("img",{staticClass:"user-avatar-img",attrs:{src:n("7c6d"),alt:"user-avatar"}})]),o("span",[t._v("Hi, Mr. Uyi")])])]),o("div",{staticClass:"row body "},[o("div",{staticClass:"actions d-flex"},[o("div",{staticClass:"d-flex flex-column align-items-center"},[o("div",{staticClass:"join d-flex justify-content-center align-items-center"},[o("img",{attrs:{src:n("c435"),alt:"users"}})]),o("a",{attrs:{href:"#","data-toggle":"modal","data-target":"#customModal"}},[t._v("Join a meeting")])]),o("div",{staticClass:"d-flex flex-column align-items-center"},[o("div",{staticClass:"start d-flex justify-content-center align-items-center"},[o("img",{attrs:{src:n("f46a"),alt:"start"}})]),o("a",{attrs:{href:"#"}},[t._v("Host Meeting")])]),o("div",{staticClass:"d-flex flex-column align-items-center"},[o("div",{staticClass:"schedule d-flex justify-content-center align-items-center"},[o("img",{attrs:{src:n("1a34"),alt:"calendar"}})]),o("a",{attrs:{href:"#"}},[t._v("My Schedule")])])])]),o("div",{staticClass:"row footer"},[t._v("VideoConf | Version 1.0")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-body"},[o("h6",[o("img",{staticClass:"h-24p",attrs:{src:n("3ef8"),alt:"users"}}),t._v("\n            Enter Meeting ID\n          ")]),o("div",{staticClass:"form-group"},[o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Meeting ID"}})]),o("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[t._v("\n            Join Meeting\n          ")])])}],ct={data:function(){return{}},computed:{user:function(){return this.$store.state.user}}},lt=ct,ut=(n("7887"),Object(d["a"])(lt,at,rt,!1,null,"a5e14e06",null)),dt=ut.exports;o["default"].use(v["a"]);var mt=new v["a"]({mode:"history",routes:[{path:"/",name:"login",component:L},{path:"/login",component:L},{path:"/register",component:V},{path:"/host",component:it},{path:"/screen",component:Z},{path:"/profile",component:dt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),ft=n("2f62"),vt=(n("3e8f"),"".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SOCKET_HOST||"localhost",":").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SOCKET_PORT||"3000"));o["default"].use(ft["a"]);var pt=new ft["a"].Store({state:{pageBusy:!1,user:null,url:vt},getters:{},mutations:{togglePageBusy:function(t){t.pageBusy=!t.pageBusy},setUser:function(t,e){t.user=e}},actions:{togglePageBusy:function(t){t.commit("togglePageBusy")},setUser:function(t,e){t.commit("setUser",e)}}}),ht=n("67b0"),gt=n("cace"),_t=n.n(gt);o["default"].use(_t.a,{tooltip:!0}),window.Vue=o["default"],o["default"].use(ht["a"]),o["default"].config.productionTip=!1,o["default"].use(a["a"]),o["default"].use(i.a),new o["default"]({router:mt,store:pt,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("e332"),s=n.n(o);s.a},"61c5":function(t,e,n){t.exports=n.p+"img/group-bg.e75d2423.svg"},7887:function(t,e,n){"use strict";var o=n("d7e6"),s=n.n(o);s.a},"7c6d":function(t,e,n){t.exports=n.p+"img/female.ccbca067.jpg"},9345:function(t,e,n){},a39e:function(t,e,n){t.exports=n.p+"img/fb.3111d7ee.svg"},bf5d:function(t,e,n){},c435:function(t,e,n){t.exports=n.p+"img/user-con.6a38c19c.svg"},ce97:function(t,e,n){"use strict";var o=n("9345"),s=n.n(o);s.a},cf02:function(t,e,n){"use strict";var o=n("4c12"),s=n.n(o);s.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.a1dfc867.png"},d691:function(t,e,n){"use strict";var o=n("bf5d"),s=n.n(o);s.a},d7e6:function(t,e,n){},e332:function(t,e,n){},f46a:function(t,e,n){t.exports=n.p+"img/vid.3ebaceca.svg"}});
//# sourceMappingURL=app.2f7e2e72.js.map