(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59939e0c"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"132d":function(t,e,s){"use strict";s("7db0"),s("caad"),s("c975"),s("fb6a"),s("45fc"),s("a9e3"),s("2532"),s("498a"),s("c96a");var i,n=s("5530"),a=(s("4804"),s("7e2b")),r=s("a9ad"),o=s("af2b"),l=s("7560"),u=s("80d2"),c=s("2b0e"),h=s("58df");function d(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var p=Object(h["a"])(a["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(u["p"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(u["m"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(u["d"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(n["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(n["a"])(Object(n["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var s=[],i=this.getDefaultData(),n="material-icons",a=t.indexOf("-"),r=a<=-1;r?s.push(t):(n=t.slice(0,a),d(n)&&(n="")),i.class[n]=!0,i.class[t]=!r;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,s)},renderSvgIcon:function(t,e){var s=this.getSize(),i=Object(n["a"])(Object(n["a"])({},this.getDefaultData()),{},{style:s?{fontSize:s,height:s,width:s}:void 0});i.class["v-icon--svg"]=!0,this.applyColors(i);var a={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:s||"24",width:s||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",i,[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var s=this.getDefaultData();s.class["v-icon--is-component"]=!0;var i=this.getSize();i&&(s.style={fontSize:i,height:i,width:i}),this.applyColors(s);var n=t.component;return s.props=t.props,s.nativeOn=s.on,e(n,s)}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var s=e.data,i=e.children,n="";return s.domProps&&(n=s.domProps.textContent||s.domProps.innerHTML||n,delete s.domProps.textContent,delete s.domProps.innerHTML),t(p,s,n?[n]:i)}})},"15f6":function(t,e,s){"use strict";var i=s("f578"),n=s.n(i);n.a},1681:function(t,e,s){},"1b2c":function(t,e,s){},"2b19":function(t,e,s){var i=s("23e7"),n=s("129f");i({target:"Object",stat:!0},{is:n})},"339c":function(t,e,s){var i={"./add.js":["2df9","chunk-bc854e20"],"./test.js":["2bdb","chunk-a3b10b90"]};function n(t){if(!s.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],n=e[0];return s.e(e[1]).then((function(){return s(n)}))}n.keys=function(){return Object.keys(i)},n.id="339c",t.exports=n},3408:function(t,e,s){},4804:function(t,e,s){},"4ff9":function(t,e,s){},"6e9b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",[s("v-card-title",[s("span",{staticClass:"mr-4"},[t._v(t._s(t.name))]),s("v-chip",{staticClass:"mr-2",attrs:{outlined:"",label:"",small:""}},[s("v-avatar",{attrs:{left:""}},[s("v-icon",[t._v("mdi-clock-alert")])],1),t._v(" 実行時間制限: 2秒 ")],1),s("v-chip",{attrs:{outlined:"",label:"",small:""}},[s("v-avatar",{attrs:{left:""}},[s("progress-icon",{attrs:{progress:t.progress}})],1),t._v(" "+t._s(t.progress_text)+" ")],1)],1),s("v-card-text",[s(t.text,{tag:"component"})],1)],1),s("v-card",{staticClass:"mt-8"},[s("v-card-title",[t._v("提出")]),s("v-card-text",[s("code",{staticStyle:{"font-size":"16px"}},[t._v(" function ( "),s("v-text-field",{attrs:{outlined:"",dense:"","hide-details":""},model:{value:t.args,callback:function(e){t.args=e},expression:"args"}}),t._v(" ) { "),s("v-textarea",{attrs:{outlined:"",dense:"","hide-details":""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t._v(" } ")],1)]),s("v-card-actions",[s("v-btn",{staticClass:"ml-2",attrs:{outlined:"",color:"primary",disabled:t.is_running},on:{click:t.judgeCode}},[t._v("判定")]),s("v-btn",{attrs:{outlined:""},on:{click:t.resetArgsAndCode}},[t._v("リセット")])],1)],1),s("v-card",{staticClass:"mt-8"},[s("v-card-title",[t._v("結果")]),s("v-simple-table",[s("thead",[s("tr",[s("th",{staticStyle:{width:"30%"}},[t._v("ケース名")]),s("th",{staticStyle:{width:"8rem"}},[t._v("状態")]),s("th",{staticStyle:{width:"auto"}},[t._v("エラー")])])]),s("tbody",t._l(t.testcases,(function(e){return s("tr",{key:e.name},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"font-weight-bold"},[""===e.state?s("span",{staticClass:"grey--text"},[t._v("無")]):t._e(),"R"===e.state?s("span",{staticClass:"grey--text"},[t._v("実行中")]):t._e(),"SE"===e.state?s("span",{staticClass:"red--text"},[t._v("文法エラー")]):t._e(),"RE"===e.state?s("span",{staticClass:"red--text"},[t._v("実行時エラー")]):t._e(),"WA"===e.state?s("span",{staticClass:"red--text"},[t._v("誤答")]):t._e(),"AC"===e.state?s("span",{staticClass:"green--text"},[t._v("正答")]):t._e(),"TLE"===e.state?s("span",{staticClass:"red--text"},[t._v("時間切れ")]):t._e()]),s("td",[t._v(t._s(e.err))])])})),0)])],1)],1)},n=[],a=(s("7db0"),s("45fc"),s("b0c0"),s("d3b7"),s("ac1f"),s("25f0"),s("5319"),s("ddb0"),s("b85c")),r=function(){return new Worker(s.p+"js/problem-judge-worker.6fbb3aa0.worker.js")},o=(s("efe0"),s("ee94")),l=s("445b"),u=s("f3c0"),c=s("eceb"),h={name:"problem-judge",components:{ProgressIcon:c["a"]},props:{src:{type:String,required:!0}},data:function(){return{text:null,name:"",args_default:"",args:"",code_default:"",code:"",testcases:[],progress_state:u["a"].state}},computed:{is_running:function(){return this.testcases.some((function(t){return"R"===t.state}))},progress:function(){return u["a"].getProgress(this.src)},progress_text:function(){switch(this.progress){case u["a"].values.SOLVED:return"全ケース正解済み";case u["a"].values.PARTIALLY:return"一部ケース正解済み";case u["a"].values.N_A:return"正解していない";default:return"エラー"}}},watch:{src:{immediate:!0,handler:function(t){var e=this;s("339c")("./".concat(t,".js")).then((function(s){var i,n,r,u=s.default;e.name=null!==(i=o.find((function(e){return e.src===t})).name)&&void 0!==i?i:t,Object(l["a"])(e.name),e.text=u.markdown.vue.component,e.args_default=null!==(n=u["args_default"])&&void 0!==n?n:"",e.args=e.args_default,e.code_default=null!==(r=u["code_default"])&&void 0!==r?r:"",e.code=e.code_default,e.testcases=[];var c,h=Object(a["a"])(u.testcases);try{for(h.s();!(c=h.n()).done;){var d=c.value;e.testcases.push({name:d.name,judge:d.judge,state:"",err:""})}}catch(f){h.e(f)}finally{h.f()}})).catch((function(){e.$router.replace("/404")}))}}},methods:{resetArgsAndCode:function(){this.args=this.args_default,this.code=this.code_default},resetProgress:function(){u["a"].setProgress(this.src,u["a"].values.N_A)},judgeCode:function(){var t,e=this,s=0,i=0,n=0,o=Object(a["a"])(this.testcases);try{var l=function(){var a=t.value;s++,a.state="R",a.err="";var o=function(t,r){if("R"===a.state){switch(a.state=t,a.err=void 0===r?"":r,s--,t){case"AC":i++;break;case"SE":case"RE":case"WA":case"TLE":n++;break;default:console.warn("invalid result",t)}if(0===s&&i>0)if(0===n)u["a"].setProgress(e.src,u["a"].values.SOLVED);else{var o=u["a"].getProgress(e.src);o!==u["a"].values.SOLVED&&u["a"].setProgress(e.src,u["a"].values.PARTIALLY)}}},l=new r,c=Math.random(),h=setTimeout((function(){l.terminate(),o("TLE")}),2e3);l.addEventListener("message",(function(t){var e=t.data;e instanceof Object&&e["key"]===c&&(l.terminate(),clearTimeout(h),o(e["res"],e["err"]))})),l.addEventListener("error",(function(t){t.preventDefault(),l.terminate(),clearTimeout(h),o("RE",t.message)})),l.postMessage({key:c,args:e.args,code:e.code,judge_code:a.judge.toString()})};for(o.s();!(t=o.n()).done;)l()}catch(c){o.e(c)}finally{o.f()}}}},d=h,f=(s("15f6"),s("2877")),p=s("6544"),g=s.n(p),v=s("8212"),b=s("8336"),m=s("b0af"),y=s("99d9"),x=(s("4de4"),s("4160"),s("3835")),C=s("5530"),S=(s("8adc"),s("58df")),$=s("0789"),O=s("9d26"),_=s("a9ad"),w=s("4e82"),j=s("7560"),k=s("f2e7"),I=s("1c87"),V=s("af2b"),D=s("d9bd"),B=Object(S["a"])(_["a"],V["a"],I["a"],j["a"],Object(w["a"])("chipGroup"),Object(k["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(C["a"])(Object(C["a"])(Object(C["a"])(Object(C["a"])({"v-chip":!0},I["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(I["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var s=Object(x["a"])(e,2),i=s[0],n=s[1];t.$attrs.hasOwnProperty(i)&&Object(D["a"])(i,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(O["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement($["b"],t)},genClose:function(){var t=this;return this.$createElement(O["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],s=this.generateRouteLink(),i=s.tag,n=s.data;n.attrs=Object(C["a"])(Object(C["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,n),e)}}),L=s("132d"),E=(s("a9e3"),s("8b37"),s("80d2")),A=Object(S["a"])(j["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(C["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(E["d"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),M=(s("0481"),s("caad"),s("4069"),s("2b19"),s("4ff9"),s("99af"),s("d81d"),s("1276"),s("d191"),s("1b2c"),Object(S["a"])(j["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var s=e.children,i=e.listeners,n=e.props,a={staticClass:"v-label",class:Object(C["a"])({"v-label--active":n.value,"v-label--is-disabled":n.disabled},Object(j["b"])(e)),attrs:{for:n.for,"aria-hidden":!n.for},on:i,style:{left:Object(E["d"])(n.left),right:Object(E["d"])(n.right),position:n.absolute?"absolute":"relative"},ref:"label"};return t("label",_["a"].options.methods.setTextColor(n.focused&&n.color,a),s)}})),z=M,P=(s("8ff2"),Object(S["a"])(_["a"],j["a"]).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(E["j"])(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),T=P,F=s("7e2b"),W=(s("fb6a"),s("53ca")),R=s("3206"),N=Object(S["a"])(_["a"],Object(R["a"])("form"),j["a"]),H=N.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(E["f"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,s=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var i=0;i<this.rules.length;i++){var n=this.rules[i],a="function"===typeof n?n(e):n;!1===a||"string"===typeof a?s.push(a||""):"boolean"!==typeof a&&Object(D["b"])("Rules should return a string or boolean, received '".concat(Object(W["a"])(a),"' instead"),this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}}),G=s("d9f7"),q=Object(S["a"])(F["a"],H),U=q.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return Object(C["a"])({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var s=e(t.internalValue);return"string"===typeof s?s:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var s=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this["".concat(t,"Icon")],a="click:".concat(Object(E["k"])(t)),r=!(!this.listeners$[a]&&!e),o=Object(G["a"])({attrs:{"aria-label":r?Object(E["k"])(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:r?{click:function(t){t.preventDefault(),t.stopPropagation(),s.$emit(a,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},i);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(E["k"])(t)):void 0},[this.$createElement(O["a"],o,n)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(E["d"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(z,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(T,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(E["j"])(t,"message",e)}}}):null},genSlot:function(t,e,s){if(!s.length)return null;var i="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(i),ref:i},s)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),Y=U,J=(s("e9b1"),Object(S["a"])(j["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var s=e.props,i=parseInt(s.max,10),n=parseInt(s.value,10),a=i?"".concat(n," / ").concat(i):String(s.value),r=i&&n>i;return t("div",{staticClass:"v-counter",class:Object(C["a"])({"error--text":r},Object(j["b"])(e))},a)}})),K=J,Q=s("90a2"),X=s("2b0e");function Z(t){return"undefined"!==typeof window&&"IntersectionObserver"in window?X["a"].extend({name:"intersectable",mounted:function(){Q["a"].inserted(this.$el,{name:"intersect",value:this.onObserve})},destroyed:function(){Q["a"].unbind(this.$el)},methods:{onObserve:function(e,s,i){if(i)for(var n=0,a=t.onVisible.length;n<a;n++){var r=this[t.onVisible[n]];"function"!==typeof r?Object(D["c"])(t.onVisible[n]+" method is not available on the instance but referenced in intersectable mixin options"):r()}}}}):X["a"].extend({name:"intersectable"})}var tt=s("297c"),et=s("5607"),st=Object(S["a"])(Y,Z({onVisible:["setLabelWidth","setPrefixWidth","setPrependWidth","tryAutofocus"]}),tt["a"]),it=["color","file","time","date","datetime-local","week","month"],nt=st.extend().extend({name:"v-text-field",directives:{ripple:et["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return Object(C["a"])(Object(C["a"])({},Y.options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var t=H.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue:function(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):(this.internalValue||"").toString().length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return Y.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty:function(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||it.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel:function(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder)},labelValue:function(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder)}},watch:{labelValue:"setLabelWidth",outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){this.$attrs.hasOwnProperty("box")&&Object(D["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(D["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(D["c"])("shaped should be used with either filled or outlined",this)},mounted:function(){var t=this;this.autofocus&&this.tryAutofocus(),this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth(),requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{focus:function(){this.onFocus()},blur:function(t){var e=this;window.requestAnimationFrame((function(){e.$refs.input&&e.$refs.input.blur()}))},clearableCallback:function(){var t=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return t.internalValue=null}))},genAppendSlot:function(){var t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[];return this.$slots["append"]?t.push(this.$slots["append"]):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=Y.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon:function(){if(!this.clearable)return null;var t=this.isDirty?void 0:{attrs:{disabled:!0}};return this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback,t)])},genCounter:function(){if(!this.hasCounter)return null;var t=!0===this.counter?this.attrs$.maxlength:this.counter;return this.$createElement(K,{props:{dark:this.dark,light:this.light,max:t,value:this.computedCounterValue}})},genControl:function(){return Y.options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(z,t,this.$slots.label||this.label)},genLegend:function(){var t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(E["d"])(t)}},[e])},genInput:function(){var t=Object.assign({},this.listeners$);return delete t["change"],this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:Object(C["a"])(Object(C["a"])({},this.attrs$),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.placeholder,readonly:this.isReadonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input"})},genMessages:function(){if(!this.showDetails)return null;var t=Y.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__".concat(t),ref:t},this[t])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))},onInput:function(t){var e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown:function(t){t.keyCode===E["l"].enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),Y.options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),Y.options.methods.onMouseUp.call(this,t)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){return!(!this.autofocus||"undefined"===typeof document||!this.$refs.input||document.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)}}}),at=(s("1681"),Object(S["a"])(nt)),rt=at.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(C["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},nt.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=nt.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){nt.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),ot=Object(f["a"])(d,i,n,!1,null,"10b6b130",null);e["default"]=ot.exports;g()(ot,{VAvatar:v["a"],VBtn:b["a"],VCard:m["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VChip:B,VIcon:L["a"],VSimpleTable:A,VTextField:nt,VTextarea:rt})},8212:function(t,e,s){"use strict";s("a9e3");var i=s("5530"),n=(s("3408"),s("a9ad")),a=s("24b2"),r=s("a236"),o=s("80d2"),l=s("58df");e["a"]=Object(l["a"])(n["a"],a["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(i["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(i["a"])({height:Object(o["d"])(this.size),minWidth:Object(o["d"])(this.size),width:Object(o["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8adc":function(t,e,s){},"8b37":function(t,e,s){},"8ff2":function(t,e,s){},"9d26":function(t,e,s){"use strict";var i=s("132d");e["a"]=i["a"]},d191:function(t,e,s){},e9b1:function(t,e,s){},eceb:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-icon",{attrs:{color:t.color}},[t._v(t._s(t.name))])},n=[],a=(s("caad"),s("d3b7"),s("07ac"),s("2532"),s("ddb0"),s("f3c0")),r=a["a"].values,o={name:"progress-icon",props:{progress:{required:!0,validator:function(t){return Object.values(r).includes(t)}}},computed:{color:function(){switch(this.progress){case r.SOLVED:return"green";case r.PARTIALLY:return"orange";case r.N_A:return"brown";default:return""}},name:function(){switch(this.progress){case r.SOLVED:return"mdi-check-circle";case r.PARTIALLY:return"mdi-alert-circle-check";case r.N_A:return"mdi-emoticon-poop";default:return""}}}},l=o,u=s("2877"),c=s("6544"),h=s.n(c),d=s("132d"),f=Object(u["a"])(l,i,n,!1,null,null,null);e["a"]=f.exports;h()(f,{VIcon:d["a"]})},ee94:function(t){t.exports=JSON.parse('[{"name":"テスト用問題","src":"test"},{"name":"足し算","src":"add"}]')},efe0:function(t,e,s){},f3c0:function(t,e,s){"use strict";s("caad"),s("dca8"),s("07ac"),s("2532");var i=s("2b0e"),n=function(t){return"problem-".concat(t)},a={SOLVED:"s",PARTIALLY:"p",N_A:"na"};Object.freeze(a);var r=function(t){return Object.values(a).includes(t)};e["a"]={state:{},values:a,setProgress:function(t,e){var s=n(t);if(r(e)){i["a"].set(this.state,s,e);try{localStorage.setItem(s,e)}catch(a){console.error(a)}}else console.warn("invalid progress value:",e)},getProgress:function(t){var e,s=n(t);s in this.state||i["a"].set(this.state,s,null!==(e=localStorage.getItem(s))&&void 0!==e?e:a.N_A);var o=this.state[s];return r(o)||(console.warn("invalid progress value:",o),o=a.N_A,this.state[s]=o),o}}},f578:function(t,e,s){}}]);
//# sourceMappingURL=chunk-59939e0c.8bbafbe0.js.map