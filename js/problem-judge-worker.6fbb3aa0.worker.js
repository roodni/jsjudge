(function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="30df")})({"00ee":function(t,n,e){var r=e("b622"),o=r("toStringTag"),c={};c[o]="z",t.exports="[object z]"===String(c)},"0cfb":function(t,n,e){var r=e("83ab"),o=e("d039"),c=e("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},"25f0":function(t,n,e){"use strict";var r=e("6eeb"),o=e("825a"),c=e("d039"),i=e("ad6d"),u="toString",f=RegExp.prototype,a=f[u],s=c((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),l=a.name!=u;(s||l)&&r(RegExp.prototype,u,(function(){var t=o(this),n=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in f)?i.call(t):e);return"/"+n+"/"+r}),{unsafe:!0})},"30df":function(t,n,e){e("d3b7"),e("25f0");var r=self.postMessage,o=self.close;delete self.console,delete self.postMessage,addEventListener("message",(function(t){var n,e=t.data,c=e.key,i=e.args,u=e.code,f=e.judge_code;try{n=new Function(i,u)}catch(t){return r({key:c,res:"SE",err:t.toString()}),void o()}var a=function(){r({key:c,res:"AC"}),o()},s=function(){r({key:c,res:"WA"}),o()},l=new Function("...args","(".concat(f,")(...args);"));l(n,a,s)}))},4930:function(t,n,e){var r=e("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},5135:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},5692:function(t,n,e){var r=e("c430"),o=e("c6cd");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"69f3":function(t,n,e){var r,o,c,i=e("7f9a"),u=e("da84"),f=e("861d"),a=e("9112"),s=e("5135"),l=e("f772"),p=e("d012"),d=u.WeakMap,b=function(t){return c(t)?o(t):r(t,{})},v=function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}};if(i){var y=new d,g=y.get,x=y.has,S=y.set;r=function(t,n){return S.call(y,t,n),n},o=function(t){return g.call(y,t)||{}},c=function(t){return x.call(y,t)}}else{var h=l("state");p[h]=!0,r=function(t,n){return a(t,h,n),n},o=function(t){return s(t,h)?t[h]:{}},c=function(t){return s(t,h)}}t.exports={set:r,get:o,has:c,enforce:b,getterFor:v}},"6eeb":function(t,n,e){var r=e("da84"),o=e("9112"),c=e("5135"),i=e("ce4e"),u=e("8925"),f=e("69f3"),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var f=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:i(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},"7f9a":function(t,n,e){var r=e("da84"),o=e("8925"),c=r.WeakMap;t.exports="function"===typeof c&&/native code/.test(o(c))},"825a":function(t,n,e){var r=e("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,n,e){var r=e("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,n,e){var r=e("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"90e3":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},9112:function(t,n,e){var r=e("83ab"),o=e("9bf2"),c=e("5c6c");t.exports=r?function(t,n,e){return o.f(t,n,c(1,e))}:function(t,n,e){return t[n]=e,t}},"9bf2":function(t,n,e){var r=e("83ab"),o=e("0cfb"),c=e("825a"),i=e("c04e"),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(c(t),n=i(n,!0),c(e),o)try{return u(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},b041:function(t,n,e){"use strict";var r=e("00ee"),o=e("f5df");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b622:function(t,n,e){var r=e("da84"),o=e("5692"),c=e("5135"),i=e("90e3"),u=e("4930"),f=e("fdbf"),a=o("wks"),s=r.Symbol,l=f?s:s&&s.withoutSetter||i;t.exports=function(t){return c(a,t)||(u&&c(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},c04e:function(t,n,e){var r=e("861d");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,n){t.exports=!1},c6b6:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},c6cd:function(t,n,e){var r=e("da84"),o=e("ce4e"),c="__core-js_shared__",i=r[c]||o(c,{});t.exports=i},c8ba:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},cc12:function(t,n,e){var r=e("da84"),o=e("861d"),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},ce4e:function(t,n,e){var r=e("da84"),o=e("9112");t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},d3b7:function(t,n,e){var r=e("00ee"),o=e("6eeb"),c=e("b041");r||o(Object.prototype,"toString",c,{unsafe:!0})},da84:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("c8ba"))},f5df:function(t,n,e){var r=e("00ee"),o=e("c6b6"),c=e("b622"),i=c("toStringTag"),u="Arguments"==o(function(){return arguments}()),f=function(t,n){try{return t[n]}catch(e){}};t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=f(n=Object(t),i))?e:u?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},f772:function(t,n,e){var r=e("5692"),o=e("90e3"),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},fdbf:function(t,n,e){var r=e("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}});
//# sourceMappingURL=problem-judge-worker.6fbb3aa0.worker.js.map