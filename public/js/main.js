var q=Object.freeze({});function A(t){return t==null}function u(t){return t!=null}function O(t){return t===!0}function Do(t){return t===!1}function It(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function D(t){return t!==null&&typeof t=="object"}var Se=Object.prototype.toString;function V(t){return Se.call(t)==="[object Object]"}function Dn(t){return Se.call(t)==="[object RegExp]"}function $n(t){var n=parseFloat(String(t));return n>=0&&Math.floor(n)===n&&isFinite(t)}function ke(t){return u(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function $o(t){return t==null?"":Array.isArray(t)||V(t)&&t.toString===Se?JSON.stringify(t,null,2):String(t)}function Lt(t){var n=parseFloat(t);return isNaN(n)?t:n}function G(t,n){for(var e=Object.create(null),r=t.split(","),o=0;o<r.length;o++)e[r[o]]=!0;return n?function(i){return e[i.toLowerCase()]}:function(i){return e[i]}}var D1=G("slot,component",!0),Fo=G("key,ref,slot,slot-scope,is");function K(t,n){if(t.length){var e=t.indexOf(n);if(e>-1)return t.splice(e,1)}}var Qo=Object.prototype.hasOwnProperty;function $(t,n){return Qo.call(t,n)}function ut(t){var n=Object.create(null);return function(r){var o=n[r];return o||(n[r]=t(r))}}var Io=/-(\w)/g,dt=ut(function(t){return t.replace(Io,function(n,e){return e?e.toUpperCase():""})}),Lo=ut(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Vo=/\B([A-Z])/g,Vt=ut(function(t){return t.replace(Vo,"-$1").toLowerCase()});function Uo(t,n){function e(r){var o=arguments.length;return o?o>1?t.apply(n,arguments):t.call(n,r):t.call(n)}return e._length=t.length,e}function Po(t,n){return t.bind(n)}var Ro=Function.prototype.bind?Po:Uo;function Ne(t,n){n=n||0;for(var e=t.length-n,r=new Array(e);e--;)r[e]=t[e+n];return r}function N(t,n){for(var e in n)t[e]=n[e];return t}function Fn(t){for(var n={},e=0;e<t.length;e++)t[e]&&N(n,t[e]);return n}function Q(t,n,e){}var te=function(t,n,e){return!1},Qn=function(t){return t};function mt(t,n){if(t===n)return!0;var e=D(t),r=D(n);if(e&&r)try{var o=Array.isArray(t),i=Array.isArray(n);if(o&&i)return t.length===n.length&&t.every(function(l,d){return mt(l,n[d])});if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(!o&&!i){var a=Object.keys(t),s=Object.keys(n);return a.length===s.length&&a.every(function(l){return mt(t[l],n[l])})}else return!1}catch{return!1}else return!e&&!r?String(t)===String(n):!1}function In(t,n){for(var e=0;e<t.length;e++)if(mt(t[e],n))return e;return-1}function ee(t){var n=!1;return function(){n||(n=!0,t.apply(this,arguments))}}var Ln="data-server-rendered",ne=["component","directive","filter"],Vn=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:te,isReservedAttr:te,isUnknownElement:te,getTagNamespace:Q,parsePlatformTagName:Qn,mustUseProp:te,async:!0,_lifecycleHooks:Vn},jo=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Xo(t){var n=(t+"").charCodeAt(0);return n===36||n===95}function Tt(t,n,e,r){Object.defineProperty(t,n,{value:e,enumerable:!!r,writable:!0,configurable:!0})}var Go=new RegExp("[^"+jo.source+".$_\\d]");function Zo(t){if(!Go.test(t)){var n=t.split(".");return function(e){for(var r=0;r<n.length;r++){if(!e)return;e=e[n[r]]}return e}}}var zo="__proto__"in{},U=typeof window!="undefined",Oe=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,Un=Oe&&WXEnvironment.platform.toLowerCase(),B=U&&window.navigator.userAgent.toLowerCase(),St=B&&/msie|trident/.test(B),kt=B&&B.indexOf("msie 9.0")>0,He=B&&B.indexOf("edge/")>0,$1=B&&B.indexOf("android")>0||Un==="android",qo=B&&/iphone|ipad|ipod|ios/.test(B)||Un==="ios",F1=B&&/chrome\/\d+/.test(B)&&!He,Q1=B&&/phantomjs/.test(B),Pn=B&&B.match(/firefox\/(\d+)/),Me={}.watch,Rn=!1;if(U)try{Be={},Object.defineProperty(Be,"passive",{get:function(){Rn=!0}}),window.addEventListener("test-passive",null,Be)}catch{}var Be,re,oe=function(){return re===void 0&&(!U&&!Oe&&typeof global!="undefined"?re=global.process&&global.process.env.VUE_ENV==="server":re=!1),re},ie=U&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Nt(t){return typeof t=="function"&&/native code/.test(t.toString())}var ae=typeof Symbol!="undefined"&&Nt(Symbol)&&typeof Reflect!="undefined"&&Nt(Reflect.ownKeys),Ut;typeof Set!="undefined"&&Nt(Set)?Ut=Set:Ut=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(e){return this.set[e]===!0},t.prototype.add=function(e){this.set[e]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var jn=Q;var Jo=0,P=function(){this.id=Jo++,this.subs=[]};P.prototype.addSub=function(n){this.subs.push(n)};P.prototype.removeSub=function(n){K(this.subs,n)};P.prototype.depend=function(){P.target&&P.target.addDep(this)};P.prototype.notify=function(){for(var n=this.subs.slice(),e=0,r=n.length;e<r;e++)n[e].update()};P.target=null;var se=[];function Pt(t){se.push(t),P.target=t}function Rt(){se.pop(),P.target=se[se.length-1]}var I=function(n,e,r,o,i,a,s,l){this.tag=n,this.data=e,this.children=r,this.text=o,this.elm=i,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Xn={child:{configurable:!0}};Xn.child.get=function(){return this.componentInstance};Object.defineProperties(I.prototype,Xn);var vt=function(t){t===void 0&&(t="");var n=new I;return n.text=t,n.isComment=!0,n};function Ot(t){return new I(void 0,void 0,void 0,String(t))}function De(t){var n=new I(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return n.ns=t.ns,n.isStatic=t.isStatic,n.key=t.key,n.isComment=t.isComment,n.fnContext=t.fnContext,n.fnOptions=t.fnOptions,n.fnScopeId=t.fnScopeId,n.asyncMeta=t.asyncMeta,n.isCloned=!0,n}var Gn=Array.prototype,pe=Object.create(Gn),Wo=["push","pop","shift","unshift","splice","sort","reverse"];Wo.forEach(function(t){var n=Gn[t];Tt(pe,t,function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];var i=n.apply(this,r),a=this.__ob__,s;switch(t){case"push":case"unshift":s=r;break;case"splice":s=r.slice(2);break}return s&&a.observeArray(s),a.dep.notify(),i})});var Yo=Object.getOwnPropertyNames(pe),$e=!0;function it(t){$e=t}var le=function(n){this.value=n,this.dep=new P,this.vmCount=0,Tt(n,"__ob__",this),Array.isArray(n)?(zo?Ko(n,pe):ti(n,pe,Yo),this.observeArray(n)):this.walk(n)};le.prototype.walk=function(n){for(var e=Object.keys(n),r=0;r<e.length;r++)_t(n,e[r])};le.prototype.observeArray=function(n){for(var e=0,r=n.length;e<r;e++)ht(n[e])};function Ko(t,n){t.__proto__=n}function ti(t,n,e){for(var r=0,o=e.length;r<o;r++){var i=e[r];Tt(t,i,n[i])}}function ht(t,n){if(!(!D(t)||t instanceof I)){var e;return $(t,"__ob__")&&t.__ob__ instanceof le?e=t.__ob__:$e&&!oe()&&(Array.isArray(t)||V(t))&&Object.isExtensible(t)&&!t._isVue&&(e=new le(t)),n&&e&&e.vmCount++,e}}function _t(t,n,e,r,o){var i=new P,a=Object.getOwnPropertyDescriptor(t,n);if(!(a&&a.configurable===!1)){var s=a&&a.get,l=a&&a.set;(!s||l)&&arguments.length===2&&(e=t[n]);var d=!o&&ht(e);Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var v=s?s.call(t):e;return P.target&&(i.depend(),d&&(d.dep.depend(),Array.isArray(v)&&zn(v))),v},set:function(v){var h=s?s.call(t):e;v===h||v!==v&&h!==h||s&&!l||(l?l.call(t,v):e=v,d=!o&&ht(v),i.notify())}})}}function Fe(t,n,e){if(Array.isArray(t)&&$n(n))return t.length=Math.max(t.length,n),t.splice(n,1,e),e;if(n in t&&!(n in Object.prototype))return t[n]=e,e;var r=t.__ob__;return t._isVue||r&&r.vmCount?e:r?(_t(r.value,n,e),r.dep.notify(),e):(t[n]=e,e)}function Zn(t,n){if(Array.isArray(t)&&$n(n)){t.splice(n,1);return}var e=t.__ob__;t._isVue||e&&e.vmCount||!$(t,n)||(delete t[n],!!e&&e.dep.notify())}function zn(t){for(var n=void 0,e=0,r=t.length;e<r;e++)n=t[e],n&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&zn(n)}var J=F.optionMergeStrategies;function Qe(t,n){if(!n)return t;for(var e,r,o,i=ae?Reflect.ownKeys(n):Object.keys(n),a=0;a<i.length;a++)e=i[a],e!=="__ob__"&&(r=t[e],o=n[e],$(t,e)?r!==o&&V(r)&&V(o)&&Qe(r,o):Fe(t,e,o));return t}function Ie(t,n,e){return e?function(){var o=typeof n=="function"?n.call(e,e):n,i=typeof t=="function"?t.call(e,e):t;return o?Qe(o,i):i}:n?t?function(){return Qe(typeof n=="function"?n.call(this,this):n,typeof t=="function"?t.call(this,this):t)}:n:t}J.data=function(t,n,e){return e?Ie(t,n,e):n&&typeof n!="function"?t:Ie(t,n)};function ei(t,n){var e=n?t?t.concat(n):Array.isArray(n)?n:[n]:t;return e&&ni(e)}function ni(t){for(var n=[],e=0;e<t.length;e++)n.indexOf(t[e])===-1&&n.push(t[e]);return n}Vn.forEach(function(t){J[t]=ei});function ri(t,n,e,r){var o=Object.create(t||null);return n?N(o,n):o}ne.forEach(function(t){J[t+"s"]=ri});J.watch=function(t,n,e,r){if(t===Me&&(t=void 0),n===Me&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;var o={};N(o,t);for(var i in n){var a=o[i],s=n[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o};J.props=J.methods=J.inject=J.computed=function(t,n,e,r){if(!t)return n;var o=Object.create(null);return N(o,t),n&&N(o,n),o};J.provide=Ie;var oi=function(t,n){return n===void 0?t:n};function ii(t,n){var e=t.props;if(!!e){var r={},o,i,a;if(Array.isArray(e))for(o=e.length;o--;)i=e[o],typeof i=="string"&&(a=dt(i),r[a]={type:null});else if(V(e))for(var s in e)i=e[s],a=dt(s),r[a]=V(i)?i:{type:i};t.props=r}}function ai(t,n){var e=t.inject;if(!!e){var r=t.inject={};if(Array.isArray(e))for(var o=0;o<e.length;o++)r[e[o]]={from:e[o]};else if(V(e))for(var i in e){var a=e[i];r[i]=V(a)?N({from:i},a):{from:a}}}}function si(t){var n=t.directives;if(n)for(var e in n){var r=n[e];typeof r=="function"&&(n[e]={bind:r,update:r})}}function gt(t,n,e){if(typeof n=="function"&&(n=n.options),ii(n,e),ai(n,e),si(n),!n._base&&(n.extends&&(t=gt(t,n.extends,e)),n.mixins))for(var r=0,o=n.mixins.length;r<o;r++)t=gt(t,n.mixins[r],e);var i={},a;for(a in t)s(a);for(a in n)$(t,a)||s(a);function s(l){var d=J[l]||oi;i[l]=d(t[l],n[l],e,l)}return i}function Le(t,n,e,r){if(typeof e=="string"){var o=t[n];if($(o,e))return o[e];var i=dt(e);if($(o,i))return o[i];var a=Lo(i);if($(o,a))return o[a];var s=o[e]||o[i]||o[a];return s}}function Ve(t,n,e,r){var o=n[t],i=!$(e,t),a=e[t],s=Jn(Boolean,o.type);if(s>-1){if(i&&!$(o,"default"))a=!1;else if(a===""||a===Vt(t)){var l=Jn(String,o.type);(l<0||s<l)&&(a=!0)}}if(a===void 0){a=pi(r,o,t);var d=$e;it(!0),ht(a),it(d)}return a}function pi(t,n,e){if(!!$(n,"default")){var r=n.default;return t&&t.$options.propsData&&t.$options.propsData[e]===void 0&&t._props[e]!==void 0?t._props[e]:typeof r=="function"&&Ue(n.type)!=="Function"?r.call(t):r}}var li=/^\s*function (\w+)/;function Ue(t){var n=t&&t.toString().match(li);return n?n[1]:""}function qn(t,n){return Ue(t)===Ue(n)}function Jn(t,n){if(!Array.isArray(n))return qn(n,t)?0:-1;for(var e=0,r=n.length;e<r;e++)if(qn(n[e],t))return e;return-1}function At(t,n,e){Pt();try{if(n)for(var r=n;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=o[i].call(r,t,n,e)===!1;if(a)return}catch(s){Wn(s,r,"errorCaptured hook")}}Wn(t,n,e)}finally{Rt()}}function Ht(t,n,e,r,o){var i;try{i=e?t.apply(n,e):t.call(n),i&&!i._isVue&&ke(i)&&!i._handled&&(i.catch(function(a){return At(a,r,o+" (Promise/async)")}),i._handled=!0)}catch(a){At(a,r,o)}return i}function Wn(t,n,e){if(F.errorHandler)try{return F.errorHandler.call(null,t,n,e)}catch(r){r!==t&&Yn(r,null,"config.errorHandler")}Yn(t,n,e)}function Yn(t,n,e){if((U||Oe)&&typeof console!="undefined")console.error(t);else throw t}var Pe=!1,Re=[],je=!1;function ce(){je=!1;var t=Re.slice(0);Re.length=0;for(var n=0;n<t.length;n++)t[n]()}var jt;typeof Promise!="undefined"&&Nt(Promise)?(Kn=Promise.resolve(),jt=function(){Kn.then(ce),qo&&setTimeout(Q)},Pe=!0):!St&&typeof MutationObserver!="undefined"&&(Nt(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")?(Xt=1,tr=new MutationObserver(ce),Xe=document.createTextNode(String(Xt)),tr.observe(Xe,{characterData:!0}),jt=function(){Xt=(Xt+1)%2,Xe.data=String(Xt)},Pe=!0):typeof setImmediate!="undefined"&&Nt(setImmediate)?jt=function(){setImmediate(ce)}:jt=function(){setTimeout(ce,0)};var Kn,Xt,tr,Xe;function Ge(t,n){var e;if(Re.push(function(){if(t)try{t.call(n)}catch(r){At(r,n,"nextTick")}else e&&e(n)}),je||(je=!0,jt()),!t&&typeof Promise!="undefined")return new Promise(function(r){e=r})}var er=new Ut;function fe(t){Ze(t,er),er.clear()}function Ze(t,n){var e,r,o=Array.isArray(t);if(!(!o&&!D(t)||Object.isFrozen(t)||t instanceof I)){if(t.__ob__){var i=t.__ob__.dep.id;if(n.has(i))return;n.add(i)}if(o)for(e=t.length;e--;)Ze(t[e],n);else for(r=Object.keys(t),e=r.length;e--;)Ze(t[r[e]],n)}}var nr=ut(function(t){var n=t.charAt(0)==="&";t=n?t.slice(1):t;var e=t.charAt(0)==="~";t=e?t.slice(1):t;var r=t.charAt(0)==="!";return t=r?t.slice(1):t,{name:t,once:e,capture:r,passive:n}});function ze(t,n){function e(){var r=arguments,o=e.fns;if(Array.isArray(o))for(var i=o.slice(),a=0;a<i.length;a++)Ht(i[a],null,r,n,"v-on handler");else return Ht(o,null,arguments,n,"v-on handler")}return e.fns=t,e}function rr(t,n,e,r,o,i){var a,s,l,d,p;for(a in t)s=l=t[a],d=n[a],p=nr(a),A(l)||(A(d)?(A(l.fns)&&(l=t[a]=ze(l,i)),O(p.once)&&(l=t[a]=o(p.name,l,p.capture)),e(p.name,l,p.capture,p.passive,p.params)):l!==d&&(d.fns=l,t[a]=d));for(a in n)A(t[a])&&(p=nr(a),r(p.name,n[a],p.capture))}function at(t,n,e){t instanceof I&&(t=t.data.hook||(t.data.hook={}));var r,o=t[n];function i(){e.apply(this,arguments),K(r.fns,i)}A(o)?r=ze([i]):u(o.fns)&&O(o.merged)?(r=o,r.fns.push(i)):r=ze([o,i]),r.merged=!0,t[n]=r}function ci(t,n,e){var r=n.options.props;if(!A(r)){var o={},i=t.attrs,a=t.props;if(u(i)||u(a))for(var s in r){var l=Vt(s);if(!1)var d;or(o,a,s,l,!0)||or(o,i,s,l,!1)}return o}}function or(t,n,e,r,o){if(u(n)){if($(n,e))return t[e]=n[e],o||delete n[e],!0;if($(n,r))return t[e]=n[r],o||delete n[r],!0}return!1}function fi(t){for(var n=0;n<t.length;n++)if(Array.isArray(t[n]))return Array.prototype.concat.apply([],t);return t}function qe(t){return It(t)?[Ot(t)]:Array.isArray(t)?ir(t):void 0}function Gt(t){return u(t)&&u(t.text)&&Do(t.isComment)}function ir(t,n){var e=[],r,o,i,a;for(r=0;r<t.length;r++)o=t[r],!(A(o)||typeof o=="boolean")&&(i=e.length-1,a=e[i],Array.isArray(o)?o.length>0&&(o=ir(o,(n||"")+"_"+r),Gt(o[0])&&Gt(a)&&(e[i]=Ot(a.text+o[0].text),o.shift()),e.push.apply(e,o)):It(o)?Gt(a)?e[i]=Ot(a.text+o):o!==""&&e.push(Ot(o)):Gt(o)&&Gt(a)?e[i]=Ot(a.text+o.text):(O(t._isVList)&&u(o.tag)&&A(o.key)&&u(n)&&(o.key="__vlist"+n+"_"+r+"__"),e.push(o)));return e}function ui(t){var n=t.$options.provide;n&&(t._provided=typeof n=="function"?n.call(t):n)}function di(t){var n=ar(t.$options.inject,t);n&&(it(!1),Object.keys(n).forEach(function(e){_t(t,e,n[e])}),it(!0))}function ar(t,n){if(t){for(var e=Object.create(null),r=ae?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if(i!=="__ob__"){for(var a=t[i].from,s=n;s;){if(s._provided&&$(s._provided,a)){e[i]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[i]){var l=t[i].default;e[i]=typeof l=="function"?l.call(n):l}}}return e}}function Je(t,n){if(!t||!t.length)return{};for(var e={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,(i.context===n||i.fnContext===n)&&a&&a.slot!=null){var s=a.slot,l=e[s]||(e[s]=[]);i.tag==="template"?l.push.apply(l,i.children||[]):l.push(i)}else(e.default||(e.default=[])).push(i)}for(var d in e)e[d].every(mi)&&delete e[d];return e}function mi(t){return t.isComment&&!t.asyncFactory||t.text===" "}function Zt(t){return t.isComment&&t.asyncFactory}function ue(t,n,e){var r,o=Object.keys(n).length>0,i=t?!!t.$stable:!o,a=t&&t.$key;if(!t)r={};else{if(t._normalized)return t._normalized;if(i&&e&&e!==q&&a===e.$key&&!o&&!e.$hasNormal)return e;r={};for(var s in t)t[s]&&s[0]!=="$"&&(r[s]=vi(n,s,t[s]))}for(var l in n)l in r||(r[l]=hi(n,l));return t&&Object.isExtensible(t)&&(t._normalized=r),Tt(r,"$stable",i),Tt(r,"$key",a),Tt(r,"$hasNormal",o),r}function vi(t,n,e){var r=function(){var o=arguments.length?e.apply(null,arguments):e({});o=o&&typeof o=="object"&&!Array.isArray(o)?[o]:qe(o);var i=o&&o[0];return o&&(!i||o.length===1&&i.isComment&&!Zt(i))?void 0:o};return e.proxy&&Object.defineProperty(t,n,{get:r,enumerable:!0,configurable:!0}),r}function hi(t,n){return function(){return t[n]}}function _i(t,n){var e,r,o,i,a;if(Array.isArray(t)||typeof t=="string")for(e=new Array(t.length),r=0,o=t.length;r<o;r++)e[r]=n(t[r],r);else if(typeof t=="number")for(e=new Array(t),r=0;r<t;r++)e[r]=n(r+1,r);else if(D(t))if(ae&&t[Symbol.iterator]){e=[];for(var s=t[Symbol.iterator](),l=s.next();!l.done;)e.push(n(l.value,e.length)),l=s.next()}else for(i=Object.keys(t),e=new Array(i.length),r=0,o=i.length;r<o;r++)a=i[r],e[r]=n(t[a],a,r);return u(e)||(e=[]),e._isVList=!0,e}function gi(t,n,e,r){var o=this.$scopedSlots[t],i;o?(e=e||{},r&&(e=N(N({},r),e)),i=o(e)||(typeof n=="function"?n():n)):i=this.$slots[t]||(typeof n=="function"?n():n);var a=e&&e.slot;return a?this.$createElement("template",{slot:a},i):i}function Ai(t){return Le(this.$options,"filters",t,!0)||Qn}function sr(t,n){return Array.isArray(t)?t.indexOf(n)===-1:t!==n}function yi(t,n,e,r,o){var i=F.keyCodes[n]||e;return o&&r&&!F.keyCodes[n]?sr(o,r):i?sr(i,t):r?Vt(r)!==n:t===void 0}function Ci(t,n,e,r,o){if(e&&D(e)){Array.isArray(e)&&(e=Fn(e));var i,a=function(l){if(l==="class"||l==="style"||Fo(l))i=t;else{var d=t.attrs&&t.attrs.type;i=r||F.mustUseProp(n,d,l)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var p=dt(l),v=Vt(l);if(!(p in i)&&!(v in i)&&(i[l]=e[l],o)){var h=t.on||(t.on={});h["update:"+l]=function(b){e[l]=b}}};for(var s in e)a(s)}return t}function bi(t,n){var e=this._staticTrees||(this._staticTrees=[]),r=e[t];return r&&!n||(r=e[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),pr(r,"__static__"+t,!1)),r}function xi(t,n,e){return pr(t,"__once__"+n+(e?"_"+e:""),!0),t}function pr(t,n,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&typeof t[r]!="string"&&lr(t[r],n+"_"+r,e);else lr(t,n,e)}function lr(t,n,e){t.isStatic=!0,t.key=n,t.isOnce=e}function Ei(t,n){if(n&&V(n)){var e=t.on=t.on?N({},t.on):{};for(var r in n){var o=e[r],i=n[r];e[r]=o?[].concat(o,i):i}}return t}function cr(t,n,e,r){n=n||{$stable:!e};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?cr(i,n,e):i&&(i.proxy&&(i.fn.proxy=!0),n[i.key]=i.fn)}return r&&(n.$key=r),n}function wi(t,n){for(var e=0;e<n.length;e+=2){var r=n[e];typeof r=="string"&&r&&(t[n[e]]=n[e+1])}return t}function Ti(t,n){return typeof t=="string"?n+t:t}function fr(t){t._o=xi,t._n=Lt,t._s=$o,t._l=_i,t._t=gi,t._q=mt,t._i=In,t._m=bi,t._f=Ai,t._k=yi,t._b=Ci,t._v=Ot,t._e=vt,t._u=cr,t._g=Ei,t._d=wi,t._p=Ti}function We(t,n,e,r,o){var i=this,a=o.options,s;$(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var l=O(a._compiled),d=!l;this.data=t,this.props=n,this.children=e,this.parent=r,this.listeners=t.on||q,this.injections=ar(a.inject,r),this.slots=function(){return i.$slots||ue(t.scopedSlots,i.$slots=Je(e,r)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ue(t.scopedSlots,this.slots())}}),l&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=ue(t.scopedSlots,this.$slots)),a._scopeId?this._c=function(p,v,h,b){var w=de(s,p,v,h,b,d);return w&&!Array.isArray(w)&&(w.fnScopeId=a._scopeId,w.fnContext=r),w}:this._c=function(p,v,h,b){return de(s,p,v,h,b,d)}}fr(We.prototype);function Si(t,n,e,r,o){var i=t.options,a={},s=i.props;if(u(s))for(var l in s)a[l]=Ve(l,s,n||q);else u(e.attrs)&&dr(a,e.attrs),u(e.props)&&dr(a,e.props);var d=new We(e,a,o,r,t),p=i.render.call(null,d._c,d);if(p instanceof I)return ur(p,e,d.parent,i,d);if(Array.isArray(p)){for(var v=qe(p)||[],h=new Array(v.length),b=0;b<v.length;b++)h[b]=ur(v[b],e,d.parent,i,d);return h}}function ur(t,n,e,r,o){var i=De(t);return i.fnContext=e,i.fnOptions=r,n.slot&&((i.data||(i.data={})).slot=n.slot),i}function dr(t,n){for(var e in n)t[dt(e)]=n[e]}var Ye={init:function(n,e){if(n.componentInstance&&!n.componentInstance._isDestroyed&&n.data.keepAlive){var r=n;Ye.prepatch(r,r)}else{var o=n.componentInstance=ki(n,yt);o.$mount(e?n.elm:void 0,e)}},prepatch:function(n,e){var r=e.componentOptions,o=e.componentInstance=n.componentInstance;Zi(o,r.propsData,r.listeners,e,r.children)},insert:function(n){var e=n.context,r=n.componentInstance;r._isMounted||(r._isMounted=!0,Z(r,"mounted")),n.data.keepAlive&&(e._isMounted?Wi(r):en(r,!0))},destroy:function(n){var e=n.componentInstance;e._isDestroyed||(n.data.keepAlive?br(e,!0):e.$destroy())}},mr=Object.keys(Ye);function vr(t,n,e,r,o){if(!A(t)){var i=e.$options._base;if(D(t)&&(t=i.extend(t)),typeof t=="function"){var a;if(A(t.cid)&&(a=t,t=Ii(a,i),t===void 0))return Qi(a,n,e,r,o);n=n||{},ln(t),u(n.model)&&Hi(t.options,n);var s=ci(n,t,o);if(O(t.options.functional))return Si(t,s,n,e,r);var l=n.on;if(n.on=n.nativeOn,O(t.options.abstract)){var d=n.slot;n={},d&&(n.slot=d)}Ni(n);var p=t.options.name||o,v=new I("vue-component-"+t.cid+(p?"-"+p:""),n,void 0,void 0,void 0,e,{Ctor:t,propsData:s,listeners:l,tag:o,children:r},a);return v}}}function ki(t,n){var e={_isComponent:!0,_parentVnode:t,parent:n},r=t.data.inlineTemplate;return u(r)&&(e.render=r.render,e.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(e)}function Ni(t){for(var n=t.hook||(t.hook={}),e=0;e<mr.length;e++){var r=mr[e],o=n[r],i=Ye[r];o!==i&&!(o&&o._merged)&&(n[r]=o?Oi(i,o):i)}}function Oi(t,n){var e=function(r,o){t(r,o),n(r,o)};return e._merged=!0,e}function Hi(t,n){var e=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[e]=n.model.value;var o=n.on||(n.on={}),i=o[r],a=n.model.callback;u(i)?(Array.isArray(i)?i.indexOf(a)===-1:i!==a)&&(o[r]=[a].concat(i)):o[r]=a}var Mi=1,hr=2;function de(t,n,e,r,o,i){return(Array.isArray(e)||It(e))&&(o=r,r=e,e=void 0),O(i)&&(o=hr),Bi(t,n,e,r,o)}function Bi(t,n,e,r,o){if(u(e)&&u(e.__ob__)||(u(e)&&u(e.is)&&(n=e.is),!n))return vt();Array.isArray(r)&&typeof r[0]=="function"&&(e=e||{},e.scopedSlots={default:r[0]},r.length=0),o===hr?r=qe(r):o===Mi&&(r=fi(r));var i,a;if(typeof n=="string"){var s;a=t.$vnode&&t.$vnode.ns||F.getTagNamespace(n),F.isReservedTag(n)?i=new I(F.parsePlatformTagName(n),e,r,void 0,void 0,t):(!e||!e.pre)&&u(s=Le(t.$options,"components",n))?i=vr(s,e,t,r,n):i=new I(n,e,r,void 0,void 0,t)}else i=vr(n,e,t,r);return Array.isArray(i)?i:u(i)?(u(a)&&_r(i,a),u(e)&&Di(e),i):vt()}function _r(t,n,e){if(t.ns=n,t.tag==="foreignObject"&&(n=void 0,e=!0),u(t.children))for(var r=0,o=t.children.length;r<o;r++){var i=t.children[r];u(i.tag)&&(A(i.ns)||O(e)&&i.tag!=="svg")&&_r(i,n,e)}}function Di(t){D(t.style)&&fe(t.style),D(t.class)&&fe(t.class)}function $i(t){t._vnode=null,t._staticTrees=null;var n=t.$options,e=t.$vnode=n._parentVnode,r=e&&e.context;t.$slots=Je(n._renderChildren,r),t.$scopedSlots=q,t._c=function(i,a,s,l){return de(t,i,a,s,l,!1)},t.$createElement=function(i,a,s,l){return de(t,i,a,s,l,!0)};var o=e&&e.data;_t(t,"$attrs",o&&o.attrs||q,null,!0),_t(t,"$listeners",n._parentListeners||q,null,!0)}var Ke=null;function Fi(t){fr(t.prototype),t.prototype.$nextTick=function(n){return Ge(n,this)},t.prototype._render=function(){var n=this,e=n.$options,r=e.render,o=e._parentVnode;o&&(n.$scopedSlots=ue(o.data.scopedSlots,n.$slots,n.$scopedSlots)),n.$vnode=o;var i;try{Ke=n,i=r.call(n._renderProxy,n.$createElement)}catch(a){if(At(a,n,"render"),!1)try{}catch(s){}else i=n._vnode}finally{Ke=null}return Array.isArray(i)&&i.length===1&&(i=i[0]),i instanceof I||(i=vt()),i.parent=o,i}}function tn(t,n){return(t.__esModule||ae&&t[Symbol.toStringTag]==="Module")&&(t=t.default),D(t)?n.extend(t):t}function Qi(t,n,e,r,o){var i=vt();return i.asyncFactory=t,i.asyncMeta={data:n,context:e,children:r,tag:o},i}function Ii(t,n){if(O(t.error)&&u(t.errorComp))return t.errorComp;if(u(t.resolved))return t.resolved;var e=Ke;if(e&&u(t.owners)&&t.owners.indexOf(e)===-1&&t.owners.push(e),O(t.loading)&&u(t.loadingComp))return t.loadingComp;if(e&&!u(t.owners)){var r=t.owners=[e],o=!0,i=null,a=null;e.$on("hook:destroyed",function(){return K(r,e)});var s=function(v){for(var h=0,b=r.length;h<b;h++)r[h].$forceUpdate();v&&(r.length=0,i!==null&&(clearTimeout(i),i=null),a!==null&&(clearTimeout(a),a=null))},l=ee(function(v){t.resolved=tn(v,n),o?r.length=0:s(!0)}),d=ee(function(v){u(t.errorComp)&&(t.error=!0,s(!0))}),p=t(l,d);return D(p)&&(ke(p)?A(t.resolved)&&p.then(l,d):ke(p.component)&&(p.component.then(l,d),u(p.error)&&(t.errorComp=tn(p.error,n)),u(p.loading)&&(t.loadingComp=tn(p.loading,n),p.delay===0?t.loading=!0:i=setTimeout(function(){i=null,A(t.resolved)&&A(t.error)&&(t.loading=!0,s(!1))},p.delay||200)),u(p.timeout)&&(a=setTimeout(function(){a=null,A(t.resolved)&&d(null)},p.timeout)))),o=!1,t.loading?t.loadingComp:t.resolved}}function gr(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var e=t[n];if(u(e)&&(u(e.componentOptions)||Zt(e)))return e}}function Li(t){t._events=Object.create(null),t._hasHookEvent=!1;var n=t.$options._parentListeners;n&&Ar(t,n)}var zt;function Vi(t,n){zt.$on(t,n)}function Ui(t,n){zt.$off(t,n)}function Pi(t,n){var e=zt;return function r(){var o=n.apply(null,arguments);o!==null&&e.$off(t,r)}}function Ar(t,n,e){zt=t,rr(n,e||{},Vi,Ui,Pi,t),zt=void 0}function Ri(t){var n=/^hook:/;t.prototype.$on=function(e,r){var o=this;if(Array.isArray(e))for(var i=0,a=e.length;i<a;i++)o.$on(e[i],r);else(o._events[e]||(o._events[e]=[])).push(r),n.test(e)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(e,r){var o=this;function i(){o.$off(e,i),r.apply(o,arguments)}return i.fn=r,o.$on(e,i),o},t.prototype.$off=function(e,r){var o=this;if(!arguments.length)return o._events=Object.create(null),o;if(Array.isArray(e)){for(var i=0,a=e.length;i<a;i++)o.$off(e[i],r);return o}var s=o._events[e];if(!s)return o;if(!r)return o._events[e]=null,o;for(var l,d=s.length;d--;)if(l=s[d],l===r||l.fn===r){s.splice(d,1);break}return o},t.prototype.$emit=function(e){var r=this;if(!1)var o;var i=r._events[e];if(i){i=i.length>1?Ne(i):i;for(var a=Ne(arguments,1),s='event handler for "'+e+'"',l=0,d=i.length;l<d;l++)Ht(i[l],r,a,r,s)}return r}}var yt=null;function yr(t){var n=yt;return yt=t,function(){yt=n}}function ji(t){var n=t.$options,e=n.parent;if(e&&!n.abstract){for(;e.$options.abstract&&e.$parent;)e=e.$parent;e.$children.push(t)}t.$parent=e,t.$root=e?e.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Xi(t){t.prototype._update=function(n,e){var r=this,o=r.$el,i=r._vnode,a=yr(r);r._vnode=n,i?r.$el=r.__patch__(i,n):r.$el=r.__patch__(r.$el,n,e,!1),a(),o&&(o.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},t.prototype.$forceUpdate=function(){var n=this;n._watcher&&n._watcher.update()},t.prototype.$destroy=function(){var n=this;if(!n._isBeingDestroyed){Z(n,"beforeDestroy"),n._isBeingDestroyed=!0;var e=n.$parent;e&&!e._isBeingDestroyed&&!n.$options.abstract&&K(e.$children,n),n._watcher&&n._watcher.teardown();for(var r=n._watchers.length;r--;)n._watchers[r].teardown();n._data.__ob__&&n._data.__ob__.vmCount--,n._isDestroyed=!0,n.__patch__(n._vnode,null),Z(n,"destroyed"),n.$off(),n.$el&&(n.$el.__vue__=null),n.$vnode&&(n.$vnode.parent=null)}}}function Gi(t,n,e){t.$el=n,t.$options.render||(t.$options.render=vt),Z(t,"beforeMount");var r;return r=function(){t._update(t._render(),e)},new z(t,r,Q,{before:function(){t._isMounted&&!t._isDestroyed&&Z(t,"beforeUpdate")}},!0),e=!1,t.$vnode==null&&(t._isMounted=!0,Z(t,"mounted")),t}function Zi(t,n,e,r,o){var i=r.data.scopedSlots,a=t.$scopedSlots,s=!!(i&&!i.$stable||a!==q&&!a.$stable||i&&t.$scopedSlots.$key!==i.$key||!i&&t.$scopedSlots.$key),l=!!(o||t.$options._renderChildren||s);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||q,t.$listeners=e||q,n&&t.$options.props){it(!1);for(var d=t._props,p=t.$options._propKeys||[],v=0;v<p.length;v++){var h=p[v],b=t.$options.props;d[h]=Ve(h,b,n,t)}it(!0),t.$options.propsData=n}e=e||q;var w=t.$options._parentListeners;t.$options._parentListeners=e,Ar(t,e,w),l&&(t.$slots=Je(o,r.context),t.$forceUpdate())}function Cr(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function en(t,n){if(n){if(t._directInactive=!1,Cr(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var e=0;e<t.$children.length;e++)en(t.$children[e]);Z(t,"activated")}}function br(t,n){if(!(n&&(t._directInactive=!0,Cr(t)))&&!t._inactive){t._inactive=!0;for(var e=0;e<t.$children.length;e++)br(t.$children[e]);Z(t,"deactivated")}}function Z(t,n){Pt();var e=t.$options[n],r=n+" hook";if(e)for(var o=0,i=e.length;o<i;o++)Ht(e[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+n),Rt()}var tt=[],nn=[],me={};var rn=!1,on=!1,Mt=0;function zi(){Mt=tt.length=nn.length=0,me={},rn=on=!1}var xr=0,an=Date.now;U&&!St&&(ve=window.performance,ve&&typeof ve.now=="function"&&an()>document.createEvent("Event").timeStamp&&(an=function(){return ve.now()}));var ve;function qi(){xr=an(),on=!0;var t,n;for(tt.sort(function(o,i){return o.id-i.id}),Mt=0;Mt<tt.length;Mt++)t=tt[Mt],t.before&&t.before(),n=t.id,me[n]=null,t.run();var e=nn.slice(),r=tt.slice();zi(),Yi(e),Ji(r),ie&&F.devtools&&ie.emit("flush")}function Ji(t){for(var n=t.length;n--;){var e=t[n],r=e.vm;r._watcher===e&&r._isMounted&&!r._isDestroyed&&Z(r,"updated")}}function Wi(t){t._inactive=!1,nn.push(t)}function Yi(t){for(var n=0;n<t.length;n++)t[n]._inactive=!0,en(t[n],!0)}function Ki(t){var n=t.id;if(me[n]==null){if(me[n]=!0,!on)tt.push(t);else{for(var e=tt.length-1;e>Mt&&tt[e].id>t.id;)e--;tt.splice(e+1,0,t)}rn||(rn=!0,Ge(qi))}}var ta=0,z=function(n,e,r,o,i){this.vm=n,i&&(n._watcher=this),n._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++ta,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Ut,this.newDepIds=new Ut,this.expression="",typeof e=="function"?this.getter=e:(this.getter=Zo(e),this.getter||(this.getter=Q)),this.value=this.lazy?void 0:this.get()};z.prototype.get=function(){Pt(this);var n,e=this.vm;try{n=this.getter.call(e,e)}catch(r){if(this.user)At(r,e,'getter for watcher "'+this.expression+'"');else throw r}finally{this.deep&&fe(n),Rt(),this.cleanupDeps()}return n};z.prototype.addDep=function(n){var e=n.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(n),this.depIds.has(e)||n.addSub(this))};z.prototype.cleanupDeps=function(){for(var n=this.deps.length;n--;){var e=this.deps[n];this.newDepIds.has(e.id)||e.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0};z.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ki(this)};z.prototype.run=function(){if(this.active){var n=this.get();if(n!==this.value||D(n)||this.deep){var e=this.value;if(this.value=n,this.user){var r='callback for watcher "'+this.expression+'"';Ht(this.cb,this.vm,[n,e],this.vm,r)}else this.cb.call(this.vm,n,e)}}};z.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};z.prototype.depend=function(){for(var n=this.deps.length;n--;)this.deps[n].depend()};z.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||K(this.vm._watchers,this);for(var n=this.deps.length;n--;)this.deps[n].removeSub(this);this.active=!1}};var st={enumerable:!0,configurable:!0,get:Q,set:Q};function sn(t,n,e){st.get=function(){return this[n][e]},st.set=function(o){this[n][e]=o},Object.defineProperty(t,e,st)}function ea(t){t._watchers=[];var n=t.$options;n.props&&na(t,n.props),n.methods&&sa(t,n.methods),n.data?ra(t):ht(t._data={},!0),n.computed&&aa(t,n.computed),n.watch&&n.watch!==Me&&pa(t,n.watch)}function na(t,n){var e=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||it(!1);var a=function(l){o.push(l);var d=Ve(l,n,e,t);if(!1)var p;else _t(r,l,d);l in t||sn(t,"_props",l)};for(var s in n)a(s);it(!0)}function ra(t){var n=t.$options.data;n=t._data=typeof n=="function"?oa(n,t):n||{},V(n)||(n={});for(var e=Object.keys(n),r=t.$options.props,o=t.$options.methods,i=e.length;i--;){var a=e[i];r&&$(r,a)||Xo(a)||sn(t,"_data",a)}ht(n,!0)}function oa(t,n){Pt();try{return t.call(n,n)}catch(e){return At(e,n,"data()"),{}}finally{Rt()}}var ia={lazy:!0};function aa(t,n){var e=t._computedWatchers=Object.create(null),r=oe();for(var o in n){var i=n[o],a=typeof i=="function"?i:i.get;r||(e[o]=new z(t,a||Q,Q,ia)),o in t||Er(t,o,i)}}function Er(t,n,e){var r=!oe();typeof e=="function"?(st.get=r?wr(n):Tr(e),st.set=Q):(st.get=e.get?r&&e.cache!==!1?wr(n):Tr(e.get):Q,st.set=e.set||Q),Object.defineProperty(t,n,st)}function wr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),P.target&&e.depend(),e.value}}function Tr(t){return function(){return t.call(this,this)}}function sa(t,n){var e=t.$options.props;for(var r in n)t[r]=typeof n[r]!="function"?Q:Ro(n[r],t)}function pa(t,n){for(var e in n){var r=n[e];if(Array.isArray(r))for(var o=0;o<r.length;o++)pn(t,e,r[o]);else pn(t,e,r)}}function pn(t,n,e,r){return V(e)&&(r=e,e=e.handler),typeof e=="string"&&(e=t[e]),t.$watch(n,e,r)}function la(t){var n={};n.get=function(){return this._data};var e={};e.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",n),Object.defineProperty(t.prototype,"$props",e),t.prototype.$set=Fe,t.prototype.$delete=Zn,t.prototype.$watch=function(r,o,i){var a=this;if(V(o))return pn(a,r,o,i);i=i||{},i.user=!0;var s=new z(a,r,o,i);if(i.immediate){var l='callback for immediate watcher "'+s.expression+'"';Pt(),Ht(o,a,[s.value],a,l),Rt()}return function(){s.teardown()}}}var ca=0;function fa(t){t.prototype._init=function(n){var e=this;e._uid=ca++;var r,o;e._isVue=!0,n&&n._isComponent?ua(e,n):e.$options=gt(ln(e.constructor),n||{},e),e._renderProxy=e,e._self=e,ji(e),Li(e),$i(e),Z(e,"beforeCreate"),di(e),ea(e),ui(e),Z(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function ua(t,n){var e=t.$options=Object.create(t.constructor.options),r=n._parentVnode;e.parent=n.parent,e._parentVnode=r;var o=r.componentOptions;e.propsData=o.propsData,e._parentListeners=o.listeners,e._renderChildren=o.children,e._componentTag=o.tag,n.render&&(e.render=n.render,e.staticRenderFns=n.staticRenderFns)}function ln(t){var n=t.options;if(t.super){var e=ln(t.super),r=t.superOptions;if(e!==r){t.superOptions=e;var o=da(t);o&&N(t.extendOptions,o),n=t.options=gt(e,t.extendOptions),n.name&&(n.components[n.name]=t)}}return n}function da(t){var n,e=t.options,r=t.sealedOptions;for(var o in e)e[o]!==r[o]&&(n||(n={}),n[o]=e[o]);return n}function H(t){this._init(t)}fa(H);la(H);Ri(H);Xi(H);Fi(H);function ma(t){t.use=function(n){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(n)>-1)return this;var r=Ne(arguments,1);return r.unshift(this),typeof n.install=="function"?n.install.apply(n,r):typeof n=="function"&&n.apply(null,r),e.push(n),this}}function va(t){t.mixin=function(n){return this.options=gt(this.options,n),this}}function ha(t){t.cid=0;var n=1;t.extend=function(e){e=e||{};var r=this,o=r.cid,i=e._Ctor||(e._Ctor={});if(i[o])return i[o];var a=e.name||r.options.name,s=function(d){this._init(d)};return s.prototype=Object.create(r.prototype),s.prototype.constructor=s,s.cid=n++,s.options=gt(r.options,e),s.super=r,s.options.props&&_a(s),s.options.computed&&ga(s),s.extend=r.extend,s.mixin=r.mixin,s.use=r.use,ne.forEach(function(l){s[l]=r[l]}),a&&(s.options.components[a]=s),s.superOptions=r.options,s.extendOptions=e,s.sealedOptions=N({},s.options),i[o]=s,s}}function _a(t){var n=t.options.props;for(var e in n)sn(t.prototype,"_props",e)}function ga(t){var n=t.options.computed;for(var e in n)Er(t.prototype,e,n[e])}function Aa(t){ne.forEach(function(n){t[n]=function(e,r){return r?(n==="component"&&V(r)&&(r.name=r.name||e,r=this.options._base.extend(r)),n==="directive"&&typeof r=="function"&&(r={bind:r,update:r}),this.options[n+"s"][e]=r,r):this.options[n+"s"][e]}})}function Sr(t){return t&&(t.Ctor.options.name||t.tag)}function he(t,n){return Array.isArray(t)?t.indexOf(n)>-1:typeof t=="string"?t.split(",").indexOf(n)>-1:Dn(t)?t.test(n):!1}function kr(t,n){var e=t.cache,r=t.keys,o=t._vnode;for(var i in e){var a=e[i];if(a){var s=a.name;s&&!n(s)&&cn(e,i,r,o)}}}function cn(t,n,e,r){var o=t[n];o&&(!r||o.tag!==r.tag)&&o.componentInstance.$destroy(),t[n]=null,K(e,n)}var Nr=[String,RegExp,Array],ya={name:"keep-alive",abstract:!0,props:{include:Nr,exclude:Nr,max:[String,Number]},methods:{cacheVNode:function(){var n=this,e=n.cache,r=n.keys,o=n.vnodeToCache,i=n.keyToCache;if(o){var a=o.tag,s=o.componentInstance,l=o.componentOptions;e[i]={name:Sr(l),tag:a,componentInstance:s},r.push(i),this.max&&r.length>parseInt(this.max)&&cn(e,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var n in this.cache)cn(this.cache,n,this.keys)},mounted:function(){var n=this;this.cacheVNode(),this.$watch("include",function(e){kr(n,function(r){return he(e,r)})}),this.$watch("exclude",function(e){kr(n,function(r){return!he(e,r)})})},updated:function(){this.cacheVNode()},render:function(){var n=this.$slots.default,e=gr(n),r=e&&e.componentOptions;if(r){var o=Sr(r),i=this,a=i.include,s=i.exclude;if(a&&(!o||!he(a,o))||s&&o&&he(s,o))return e;var l=this,d=l.cache,p=l.keys,v=e.key==null?r.Ctor.cid+(r.tag?"::"+r.tag:""):e.key;d[v]?(e.componentInstance=d[v].componentInstance,K(p,v),p.push(v)):(this.vnodeToCache=e,this.keyToCache=v),e.data.keepAlive=!0}return e||n&&n[0]}},Ca={KeepAlive:ya};function ba(t){var n={};n.get=function(){return F},Object.defineProperty(t,"config",n),t.util={warn:jn,extend:N,mergeOptions:gt,defineReactive:_t},t.set=Fe,t.delete=Zn,t.nextTick=Ge,t.observable=function(e){return ht(e),e},t.options=Object.create(null),ne.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,N(t.options.components,Ca),ma(t),va(t),ha(t),Aa(t)}ba(H);Object.defineProperty(H.prototype,"$isServer",{get:oe});Object.defineProperty(H.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(H,"FunctionalRenderContext",{value:We});H.version="2.6.14";var xa=G("style,class"),Ea=G("input,textarea,option,select,progress"),wa=function(t,n,e){return e==="value"&&Ea(t)&&n!=="button"||e==="selected"&&t==="option"||e==="checked"&&t==="input"||e==="muted"&&t==="video"},Or=G("contenteditable,draggable,spellcheck"),Ta=G("events,caret,typing,plaintext-only"),Sa=function(t,n){return _e(n)||n==="false"?"false":t==="contenteditable"&&Ta(n)?n:"true"},ka=G("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),fn="http://www.w3.org/1999/xlink",un=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},Hr=function(t){return un(t)?t.slice(6,t.length):""},_e=function(t){return t==null||t===!1};function Na(t){for(var n=t.data,e=t,r=t;u(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(n=Mr(r.data,n));for(;u(e=e.parent);)e&&e.data&&(n=Mr(n,e.data));return Oa(n.staticClass,n.class)}function Mr(t,n){return{staticClass:dn(t.staticClass,n.staticClass),class:u(t.class)?[t.class,n.class]:n.class}}function Oa(t,n){return u(t)||u(n)?dn(t,mn(n)):""}function dn(t,n){return t?n?t+" "+n:t:n||""}function mn(t){return Array.isArray(t)?Ha(t):D(t)?Ma(t):typeof t=="string"?t:""}function Ha(t){for(var n="",e,r=0,o=t.length;r<o;r++)u(e=mn(t[r]))&&e!==""&&(n&&(n+=" "),n+=e);return n}function Ma(t){var n="";for(var e in t)t[e]&&(n&&(n+=" "),n+=e);return n}var Ba={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Da=G("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),vn=G("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Br=function(t){return Da(t)||vn(t)};function $a(t){if(vn(t))return"svg";if(t==="math")return"math"}var ge=Object.create(null);function Fa(t){if(!U)return!0;if(Br(t))return!1;if(t=t.toLowerCase(),ge[t]!=null)return ge[t];var n=document.createElement(t);return t.indexOf("-")>-1?ge[t]=n.constructor===window.HTMLUnknownElement||n.constructor===window.HTMLElement:ge[t]=/HTMLUnknownElement/.test(n.toString())}var hn=G("text,number,password,search,email,tel,url");function Qa(t){if(typeof t=="string"){var n=document.querySelector(t);return n||document.createElement("div")}else return t}function Ia(t,n){var e=document.createElement(t);return t!=="select"||n.data&&n.data.attrs&&n.data.attrs.multiple!==void 0&&e.setAttribute("multiple","multiple"),e}function La(t,n){return document.createElementNS(Ba[t],n)}function Va(t){return document.createTextNode(t)}function Ua(t){return document.createComment(t)}function Pa(t,n,e){t.insertBefore(n,e)}function Ra(t,n){t.removeChild(n)}function ja(t,n){t.appendChild(n)}function Xa(t){return t.parentNode}function Ga(t){return t.nextSibling}function Za(t){return t.tagName}function za(t,n){t.textContent=n}function qa(t,n){t.setAttribute(n,"")}var Ja=Object.freeze({createElement:Ia,createElementNS:La,createTextNode:Va,createComment:Ua,insertBefore:Pa,removeChild:Ra,appendChild:ja,parentNode:Xa,nextSibling:Ga,tagName:Za,setTextContent:za,setStyleScope:qa}),Wa={create:function(n,e){Bt(e)},update:function(n,e){n.data.ref!==e.data.ref&&(Bt(n,!0),Bt(e))},destroy:function(n){Bt(n,!0)}};function Bt(t,n){var e=t.data.ref;if(!!u(e)){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;n?Array.isArray(i[e])?K(i[e],o):i[e]===o&&(i[e]=void 0):t.data.refInFor?Array.isArray(i[e])?i[e].indexOf(o)<0&&i[e].push(o):i[e]=[o]:i[e]=o}}var Ct=new I("",{},[]),qt=["create","activate","update","remove","destroy"];function bt(t,n){return t.key===n.key&&t.asyncFactory===n.asyncFactory&&(t.tag===n.tag&&t.isComment===n.isComment&&u(t.data)===u(n.data)&&Ya(t,n)||O(t.isAsyncPlaceholder)&&A(n.asyncFactory.error))}function Ya(t,n){if(t.tag!=="input")return!0;var e,r=u(e=t.data)&&u(e=e.attrs)&&e.type,o=u(e=n.data)&&u(e=e.attrs)&&e.type;return r===o||hn(r)&&hn(o)}function Ka(t,n,e){var r,o,i={};for(r=n;r<=e;++r)o=t[r].key,u(o)&&(i[o]=r);return i}function ts(t){var n,e,r={},o=t.modules,i=t.nodeOps;for(n=0;n<qt.length;++n)for(r[qt[n]]=[],e=0;e<o.length;++e)u(o[e][qt[n]])&&r[qt[n]].push(o[e][qt[n]]);function a(f){return new I(i.tagName(f).toLowerCase(),{},[],void 0,f)}function s(f,c){function m(){--m.listeners==0&&l(f)}return m.listeners=c,m}function l(f){var c=i.parentNode(f);u(c)&&i.removeChild(c,f)}function d(f,c){return!c&&!f.ns&&!(F.ignoredElements.length&&F.ignoredElements.some(function(m){return Dn(m)?m.test(f.tag):m===f.tag}))&&F.isUnknownElement(f.tag)}var p=0;function v(f,c,m,_,g,E,y){if(u(f.elm)&&u(E)&&(f=E[y]=De(f)),f.isRootInsert=!g,!h(f,c,m,_)){var C=f.data,k=f.children,T=f.tag;u(T)?(f.elm=f.ns?i.createElementNS(f.ns,T):i.createElement(T,f),lt(f),pt(f,k,c),u(C)&&L(f,c),x(m,f.elm,_)):O(f.isComment)?(f.elm=i.createComment(f.text),x(m,f.elm,_)):(f.elm=i.createTextNode(f.text),x(m,f.elm,_))}}function h(f,c,m,_){var g=f.data;if(u(g)){var E=u(f.componentInstance)&&g.keepAlive;if(u(g=g.hook)&&u(g=g.init)&&g(f,!1),u(f.componentInstance))return b(f,c),x(m,f.elm,_),O(E)&&w(f,c,m,_),!0}}function b(f,c){u(f.data.pendingInsert)&&(c.push.apply(c,f.data.pendingInsert),f.data.pendingInsert=null),f.elm=f.componentInstance.$el,j(f)?(L(f,c),lt(f)):(Bt(f),c.push(f))}function w(f,c,m,_){for(var g,E=f;E.componentInstance;)if(E=E.componentInstance._vnode,u(g=E.data)&&u(g=g.transition)){for(g=0;g<r.activate.length;++g)r.activate[g](Ct,E);c.push(E);break}x(m,f.elm,_)}function x(f,c,m){u(f)&&(u(m)?i.parentNode(m)===f&&i.insertBefore(f,c,m):i.appendChild(f,c))}function pt(f,c,m){if(Array.isArray(c))for(var _=0;_<c.length;++_)v(c[_],m,f.elm,null,!0,c,_);else It(f.text)&&i.appendChild(f.elm,i.createTextNode(String(f.text)))}function j(f){for(;f.componentInstance;)f=f.componentInstance._vnode;return u(f.tag)}function L(f,c){for(var m=0;m<r.create.length;++m)r.create[m](Ct,f);n=f.data.hook,u(n)&&(u(n.create)&&n.create(Ct,f),u(n.insert)&&c.push(f))}function lt(f){var c;if(u(c=f.fnScopeId))i.setStyleScope(f.elm,c);else for(var m=f;m;)u(c=m.context)&&u(c=c.$options._scopeId)&&i.setStyleScope(f.elm,c),m=m.parent;u(c=yt)&&c!==f.context&&c!==f.fnContext&&u(c=c.$options._scopeId)&&i.setStyleScope(f.elm,c)}function Et(f,c,m,_,g,E){for(;_<=g;++_)v(m[_],E,f,c,!1,m,_)}function ct(f){var c,m,_=f.data;if(u(_))for(u(c=_.hook)&&u(c=c.destroy)&&c(f),c=0;c<r.destroy.length;++c)r.destroy[c](f);if(u(c=f.children))for(m=0;m<f.children.length;++m)ct(f.children[m])}function W(f,c,m){for(;c<=m;++c){var _=f[c];u(_)&&(u(_.tag)?(X(_),ct(_)):l(_.elm))}}function X(f,c){if(u(c)||u(f.data)){var m,_=r.remove.length+1;for(u(c)?c.listeners+=_:c=s(f.elm,_),u(m=f.componentInstance)&&u(m=m._vnode)&&u(m.data)&&X(m,c),m=0;m<r.remove.length;++m)r.remove[m](f,c);u(m=f.data.hook)&&u(m=m.remove)?m(f,c):c()}else l(f.elm)}function Ft(f,c,m,_,g){for(var E=0,y=0,C=c.length-1,k=c[0],T=c[C],S=m.length-1,M=m[0],R=m[S],ft,rt,ot,Bn,Te=!g;E<=C&&y<=S;)A(k)?k=c[++E]:A(T)?T=c[--C]:bt(k,M)?(Y(k,M,_,m,y),k=c[++E],M=m[++y]):bt(T,R)?(Y(T,R,_,m,S),T=c[--C],R=m[--S]):bt(k,R)?(Y(k,R,_,m,S),Te&&i.insertBefore(f,k.elm,i.nextSibling(T.elm)),k=c[++E],R=m[--S]):bt(T,M)?(Y(T,M,_,m,y),Te&&i.insertBefore(f,T.elm,k.elm),T=c[--C],M=m[++y]):(A(ft)&&(ft=Ka(c,E,C)),rt=u(M.key)?ft[M.key]:Yt(M,c,E,C),A(rt)?v(M,_,f,k.elm,!1,m,y):(ot=c[rt],bt(ot,M)?(Y(ot,M,_,m,y),c[rt]=void 0,Te&&i.insertBefore(f,ot.elm,k.elm)):v(M,_,f,k.elm,!1,m,y)),M=m[++y]);E>C?(Bn=A(m[S+1])?null:m[S+1].elm,Et(f,Bn,m,y,S,_)):y>S&&W(c,E,C)}function Ee(f){for(var c={},m=0;m<f.length;m++){var _=f[m],g=_.key;u(g)&&(c[g]?jn("Duplicate keys detected: '"+g+"'. This may cause an update error.",_.context):c[g]=!0)}}function Yt(f,c,m,_){for(var g=m;g<_;g++){var E=c[g];if(u(E)&&bt(f,E))return g}}function Y(f,c,m,_,g,E){if(f!==c){u(c.elm)&&u(_)&&(c=_[g]=De(c));var y=c.elm=f.elm;if(O(f.isAsyncPlaceholder)){u(c.asyncFactory.resolved)?wt(f.elm,c,m):c.isAsyncPlaceholder=!0;return}if(O(c.isStatic)&&O(f.isStatic)&&c.key===f.key&&(O(c.isCloned)||O(c.isOnce))){c.componentInstance=f.componentInstance;return}var C,k=c.data;u(k)&&u(C=k.hook)&&u(C=C.prepatch)&&C(f,c);var T=f.children,S=c.children;if(u(k)&&j(c)){for(C=0;C<r.update.length;++C)r.update[C](f,c);u(C=k.hook)&&u(C=C.update)&&C(f,c)}A(c.text)?u(T)&&u(S)?T!==S&&Ft(y,T,S,m,E):u(S)?(u(f.text)&&i.setTextContent(y,""),Et(y,null,S,0,S.length-1,m)):u(T)?W(T,0,T.length-1):u(f.text)&&i.setTextContent(y,""):f.text!==c.text&&i.setTextContent(y,c.text),u(k)&&u(C=k.hook)&&u(C=C.postpatch)&&C(f,c)}}function nt(f,c,m){if(O(m)&&u(f.parent))f.parent.data.pendingInsert=c;else for(var _=0;_<c.length;++_)c[_].data.hook.insert(c[_])}var we=!1,Kt=G("attrs,class,staticClass,staticStyle,key");function wt(f,c,m,_){var g,E=c.tag,y=c.data,C=c.children;if(_=_||y&&y.pre,c.elm=f,O(c.isComment)&&u(c.asyncFactory))return c.isAsyncPlaceholder=!0,!0;if(u(y)&&(u(g=y.hook)&&u(g=g.init)&&g(c,!0),u(g=c.componentInstance)))return b(c,m),!0;if(u(E)){if(u(C))if(!f.hasChildNodes())pt(c,C,m);else if(u(g=y)&&u(g=g.domProps)&&u(g=g.innerHTML)){if(g!==f.innerHTML)return!1}else{for(var k=!0,T=f.firstChild,S=0;S<C.length;S++){if(!T||!wt(T,C[S],m,_)){k=!1;break}T=T.nextSibling}if(!k||T)return!1}if(u(y)){var M=!1;for(var R in y)if(!Kt(R)){M=!0,L(c,m);break}!M&&y.class&&fe(y.class)}}else f.data!==c.text&&(f.data=c.text);return!0}function Qt(f,c,m){return u(c.tag)?c.tag.indexOf("vue-component")===0||!d(c,m)&&c.tag.toLowerCase()===(f.tagName&&f.tagName.toLowerCase()):f.nodeType===(c.isComment?8:3)}return function(c,m,_,g){if(A(m)){u(c)&&ct(c);return}var E=!1,y=[];if(A(c))E=!0,v(m,y);else{var C=u(c.nodeType);if(!C&&bt(c,m))Y(c,m,y,null,null,g);else{if(C){if(c.nodeType===1&&c.hasAttribute(Ln)&&(c.removeAttribute(Ln),_=!0),O(_)&&wt(c,m,y))return nt(m,y,!0),c;c=a(c)}var k=c.elm,T=i.parentNode(k);if(v(m,y,k._leaveCb?null:T,i.nextSibling(k)),u(m.parent))for(var S=m.parent,M=j(m);S;){for(var R=0;R<r.destroy.length;++R)r.destroy[R](S);if(S.elm=m.elm,M){for(var ft=0;ft<r.create.length;++ft)r.create[ft](Ct,S);var rt=S.data.hook.insert;if(rt.merged)for(var ot=1;ot<rt.fns.length;ot++)rt.fns[ot]()}else Bt(S);S=S.parent}u(T)?W([c],0,0):u(c.tag)&&ct(c)}}return nt(m,y,E),m.elm}}var es={create:_n,update:_n,destroy:function(n){_n(n,Ct)}};function _n(t,n){(t.data.directives||n.data.directives)&&ns(t,n)}function ns(t,n){var e=t===Ct,r=n===Ct,o=Dr(t.data.directives,t.context),i=Dr(n.data.directives,n.context),a=[],s=[],l,d,p;for(l in i)d=o[l],p=i[l],d?(p.oldValue=d.value,p.oldArg=d.arg,Jt(p,"update",n,t),p.def&&p.def.componentUpdated&&s.push(p)):(Jt(p,"bind",n,t),p.def&&p.def.inserted&&a.push(p));if(a.length){var v=function(){for(var h=0;h<a.length;h++)Jt(a[h],"inserted",n,t)};e?at(n,"insert",v):v()}if(s.length&&at(n,"postpatch",function(){for(var h=0;h<s.length;h++)Jt(s[h],"componentUpdated",n,t)}),!e)for(l in o)i[l]||Jt(o[l],"unbind",t,t,r)}var rs=Object.create(null);function Dr(t,n){var e=Object.create(null);if(!t)return e;var r,o;for(r=0;r<t.length;r++)o=t[r],o.modifiers||(o.modifiers=rs),e[os(o)]=o,o.def=Le(n.$options,"directives",o.name,!0);return e}function os(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Jt(t,n,e,r,o){var i=t.def&&t.def[n];if(i)try{i(e.elm,t,e,r,o)}catch(a){At(a,e.context,"directive "+t.name+" "+n+" hook")}}var is=[Wa,es];function $r(t,n){var e=n.componentOptions;if(!(u(e)&&e.Ctor.options.inheritAttrs===!1)&&!(A(t.data.attrs)&&A(n.data.attrs))){var r,o,i,a=n.elm,s=t.data.attrs||{},l=n.data.attrs||{};u(l.__ob__)&&(l=n.data.attrs=N({},l));for(r in l)o=l[r],i=s[r],i!==o&&Fr(a,r,o,n.data.pre);(St||He)&&l.value!==s.value&&Fr(a,"value",l.value);for(r in s)A(l[r])&&(un(r)?a.removeAttributeNS(fn,Hr(r)):Or(r)||a.removeAttribute(r))}}function Fr(t,n,e,r){r||t.tagName.indexOf("-")>-1?Qr(t,n,e):ka(n)?_e(e)?t.removeAttribute(n):(e=n==="allowfullscreen"&&t.tagName==="EMBED"?"true":n,t.setAttribute(n,e)):Or(n)?t.setAttribute(n,Sa(n,e)):un(n)?_e(e)?t.removeAttributeNS(fn,Hr(n)):t.setAttributeNS(fn,n,e):Qr(t,n,e)}function Qr(t,n,e){if(_e(e))t.removeAttribute(n);else{if(St&&!kt&&t.tagName==="TEXTAREA"&&n==="placeholder"&&e!==""&&!t.__ieph){var r=function(o){o.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(n,e)}}var as={create:$r,update:$r};function Ir(t,n){var e=n.elm,r=n.data,o=t.data;if(!(A(r.staticClass)&&A(r.class)&&(A(o)||A(o.staticClass)&&A(o.class)))){var i=Na(n),a=e._transitionClasses;u(a)&&(i=dn(i,mn(a))),i!==e._prevClass&&(e.setAttribute("class",i),e._prevClass=i)}}var ss={create:Ir,update:Ir},gn="__r",An="__c";function ps(t){if(u(t[gn])){var n=St?"change":"input";t[n]=[].concat(t[gn],t[n]||[]),delete t[gn]}u(t[An])&&(t.change=[].concat(t[An],t.change||[]),delete t[An])}var Wt;function ls(t,n,e){var r=Wt;return function o(){var i=n.apply(null,arguments);i!==null&&Lr(t,o,e,r)}}var cs=Pe&&!(Pn&&Number(Pn[1])<=53);function fs(t,n,e,r){if(cs){var o=xr,i=n;n=i._wrapper=function(a){if(a.target===a.currentTarget||a.timeStamp>=o||a.timeStamp<=0||a.target.ownerDocument!==document)return i.apply(this,arguments)}}Wt.addEventListener(t,n,Rn?{capture:e,passive:r}:e)}function Lr(t,n,e,r){(r||Wt).removeEventListener(t,n._wrapper||n,e)}function Vr(t,n){if(!(A(t.data.on)&&A(n.data.on))){var e=n.data.on||{},r=t.data.on||{};Wt=n.elm,ps(e),rr(e,r,fs,Lr,ls,n.context),Wt=void 0}}var us={create:Vr,update:Vr},Ae;function Ur(t,n){if(!(A(t.data.domProps)&&A(n.data.domProps))){var e,r,o=n.elm,i=t.data.domProps||{},a=n.data.domProps||{};u(a.__ob__)&&(a=n.data.domProps=N({},a));for(e in i)e in a||(o[e]="");for(e in a){if(r=a[e],e==="textContent"||e==="innerHTML"){if(n.children&&(n.children.length=0),r===i[e])continue;o.childNodes.length===1&&o.removeChild(o.childNodes[0])}if(e==="value"&&o.tagName!=="PROGRESS"){o._value=r;var s=A(r)?"":String(r);ds(o,s)&&(o.value=s)}else if(e==="innerHTML"&&vn(o.tagName)&&A(o.innerHTML)){Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r+"</svg>";for(var l=Ae.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;l.firstChild;)o.appendChild(l.firstChild)}else if(r!==i[e])try{o[e]=r}catch{}}}}function ds(t,n){return!t.composing&&(t.tagName==="OPTION"||ms(t,n)||vs(t,n))}function ms(t,n){var e=!0;try{e=document.activeElement!==t}catch{}return e&&t.value!==n}function vs(t,n){var e=t.value,r=t._vModifiers;if(u(r)){if(r.number)return Lt(e)!==Lt(n);if(r.trim)return e.trim()!==n.trim()}return e!==n}var hs={create:Ur,update:Ur},_s=ut(function(t){var n={},e=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(e).forEach(function(o){if(o){var i=o.split(r);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n});function yn(t){var n=Pr(t.style);return t.staticStyle?N(t.staticStyle,n):n}function Pr(t){return Array.isArray(t)?Fn(t):typeof t=="string"?_s(t):t}function gs(t,n){var e={},r;if(n)for(var o=t;o.componentInstance;)o=o.componentInstance._vnode,o&&o.data&&(r=yn(o.data))&&N(e,r);(r=yn(t.data))&&N(e,r);for(var i=t;i=i.parent;)i.data&&(r=yn(i.data))&&N(e,r);return e}var As=/^--/,Rr=/\s*!important$/,jr=function(t,n,e){if(As.test(n))t.style.setProperty(n,e);else if(Rr.test(e))t.style.setProperty(Vt(n),e.replace(Rr,""),"important");else{var r=ys(n);if(Array.isArray(e))for(var o=0,i=e.length;o<i;o++)t.style[r]=e[o];else t.style[r]=e}},Xr=["Webkit","Moz","ms"],ye,ys=ut(function(t){if(ye=ye||document.createElement("div").style,t=dt(t),t!=="filter"&&t in ye)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),e=0;e<Xr.length;e++){var r=Xr[e]+n;if(r in ye)return r}});function Gr(t,n){var e=n.data,r=t.data;if(!(A(e.staticStyle)&&A(e.style)&&A(r.staticStyle)&&A(r.style))){var o,i,a=n.elm,s=r.staticStyle,l=r.normalizedStyle||r.style||{},d=s||l,p=Pr(n.data.style)||{};n.data.normalizedStyle=u(p.__ob__)?N({},p):p;var v=gs(n,!0);for(i in d)A(v[i])&&jr(a,i,"");for(i in v)o=v[i],o!==d[i]&&jr(a,i,o??"")}}var Cs={create:Gr,update:Gr},Zr=/\s+/;function zr(t,n){if(!(!n||!(n=n.trim())))if(t.classList)n.indexOf(" ")>-1?n.split(Zr).forEach(function(r){return t.classList.add(r)}):t.classList.add(n);else{var e=" "+(t.getAttribute("class")||"")+" ";e.indexOf(" "+n+" ")<0&&t.setAttribute("class",(e+n).trim())}}function qr(t,n){if(!(!n||!(n=n.trim())))if(t.classList)n.indexOf(" ")>-1?n.split(Zr).forEach(function(o){return t.classList.remove(o)}):t.classList.remove(n),t.classList.length||t.removeAttribute("class");else{for(var e=" "+(t.getAttribute("class")||"")+" ",r=" "+n+" ";e.indexOf(r)>=0;)e=e.replace(r," ");e=e.trim(),e?t.setAttribute("class",e):t.removeAttribute("class")}}function Jr(t){if(!!t){if(typeof t=="object"){var n={};return t.css!==!1&&N(n,Wr(t.name||"v")),N(n,t),n}else if(typeof t=="string")return Wr(t)}}var Wr=ut(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Yr=U&&!kt,Dt="transition",Cn="animation",Ce="transition",be="transitionend",bn="animation",Kr="animationend";Yr&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Ce="WebkitTransition",be="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(bn="WebkitAnimation",Kr="webkitAnimationEnd"));var to=U?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function eo(t){to(function(){to(t)})}function xt(t,n){var e=t._transitionClasses||(t._transitionClasses=[]);e.indexOf(n)<0&&(e.push(n),zr(t,n))}function et(t,n){t._transitionClasses&&K(t._transitionClasses,n),qr(t,n)}function no(t,n,e){var r=ro(t,n),o=r.type,i=r.timeout,a=r.propCount;if(!o)return e();var s=o===Dt?be:Kr,l=0,d=function(){t.removeEventListener(s,p),e()},p=function(v){v.target===t&&++l>=a&&d()};setTimeout(function(){l<a&&d()},i+1),t.addEventListener(s,p)}var bs=/\b(transform|all)(,|$)/;function ro(t,n){var e=window.getComputedStyle(t),r=(e[Ce+"Delay"]||"").split(", "),o=(e[Ce+"Duration"]||"").split(", "),i=oo(r,o),a=(e[bn+"Delay"]||"").split(", "),s=(e[bn+"Duration"]||"").split(", "),l=oo(a,s),d,p=0,v=0;n===Dt?i>0&&(d=Dt,p=i,v=o.length):n===Cn?l>0&&(d=Cn,p=l,v=s.length):(p=Math.max(i,l),d=p>0?i>l?Dt:Cn:null,v=d?d===Dt?o.length:s.length:0);var h=d===Dt&&bs.test(e[Ce+"Property"]);return{type:d,timeout:p,propCount:v,hasTransform:h}}function oo(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max.apply(null,n.map(function(e,r){return io(e)+io(t[r])}))}function io(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function xn(t,n){var e=t.elm;u(e._leaveCb)&&(e._leaveCb.cancelled=!0,e._leaveCb());var r=Jr(t.data.transition);if(!A(r)&&!(u(e._enterCb)||e.nodeType!==1)){for(var o=r.css,i=r.type,a=r.enterClass,s=r.enterToClass,l=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,v=r.appearActiveClass,h=r.beforeEnter,b=r.enter,w=r.afterEnter,x=r.enterCancelled,pt=r.beforeAppear,j=r.appear,L=r.afterAppear,lt=r.appearCancelled,Et=r.duration,ct=yt,W=yt.$vnode;W&&W.parent;)ct=W.context,W=W.parent;var X=!ct._isMounted||!t.isRootInsert;if(!(X&&!j&&j!=="")){var Ft=X&&d?d:a,Ee=X&&v?v:l,Yt=X&&p?p:s,Y=X&&pt||h,nt=X&&typeof j=="function"?j:b,we=X&&L||w,Kt=X&&lt||x,wt=Lt(D(Et)?Et.enter:Et),Qt=o!==!1&&!kt,f=En(nt),c=e._enterCb=ee(function(){Qt&&(et(e,Yt),et(e,Ee)),c.cancelled?(Qt&&et(e,Ft),Kt&&Kt(e)):we&&we(e),e._enterCb=null});t.data.show||at(t,"insert",function(){var m=e.parentNode,_=m&&m._pending&&m._pending[t.key];_&&_.tag===t.tag&&_.elm._leaveCb&&_.elm._leaveCb(),nt&&nt(e,c)}),Y&&Y(e),Qt&&(xt(e,Ft),xt(e,Ee),eo(function(){et(e,Ft),c.cancelled||(xt(e,Yt),f||(so(wt)?setTimeout(c,wt):no(e,i,c)))})),t.data.show&&(n&&n(),nt&&nt(e,c)),!Qt&&!f&&c()}}}function ao(t,n){var e=t.elm;u(e._enterCb)&&(e._enterCb.cancelled=!0,e._enterCb());var r=Jr(t.data.transition);if(A(r)||e.nodeType!==1)return n();if(u(e._leaveCb))return;var o=r.css,i=r.type,a=r.leaveClass,s=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,p=r.leave,v=r.afterLeave,h=r.leaveCancelled,b=r.delayLeave,w=r.duration,x=o!==!1&&!kt,pt=En(p),j=Lt(D(w)?w.leave:w),L=e._leaveCb=ee(function(){e.parentNode&&e.parentNode._pending&&(e.parentNode._pending[t.key]=null),x&&(et(e,s),et(e,l)),L.cancelled?(x&&et(e,a),h&&h(e)):(n(),v&&v(e)),e._leaveCb=null});b?b(lt):lt();function lt(){L.cancelled||(!t.data.show&&e.parentNode&&((e.parentNode._pending||(e.parentNode._pending={}))[t.key]=t),d&&d(e),x&&(xt(e,a),xt(e,l),eo(function(){et(e,a),L.cancelled||(xt(e,s),pt||(so(j)?setTimeout(L,j):no(e,i,L)))})),p&&p(e,L),!x&&!pt&&L())}}function so(t){return typeof t=="number"&&!isNaN(t)}function En(t){if(A(t))return!1;var n=t.fns;return u(n)?En(Array.isArray(n)?n[0]:n):(t._length||t.length)>1}function po(t,n){n.data.show!==!0&&xn(n)}var xs=U?{create:po,activate:po,remove:function(n,e){n.data.show!==!0?ao(n,e):e()}}:{},Es=[as,ss,us,hs,Cs,xs],ws=Es.concat(is),Ts=ts({nodeOps:Ja,modules:ws});kt&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&wn(t,"input")});var lo={inserted:function(n,e,r,o){r.tag==="select"?(o.elm&&!o.elm._vOptions?at(r,"postpatch",function(){lo.componentUpdated(n,e,r)}):co(n,e,r.context),n._vOptions=[].map.call(n.options,xe)):(r.tag==="textarea"||hn(n.type))&&(n._vModifiers=e.modifiers,e.modifiers.lazy||(n.addEventListener("compositionstart",Ss),n.addEventListener("compositionend",mo),n.addEventListener("change",mo),kt&&(n.vmodel=!0)))},componentUpdated:function(n,e,r){if(r.tag==="select"){co(n,e,r.context);var o=n._vOptions,i=n._vOptions=[].map.call(n.options,xe);if(i.some(function(s,l){return!mt(s,o[l])})){var a=n.multiple?e.value.some(function(s){return uo(s,i)}):e.value!==e.oldValue&&uo(e.value,i);a&&wn(n,"change")}}}};function co(t,n,e){fo(t,n,e),(St||He)&&setTimeout(function(){fo(t,n,e)},0)}function fo(t,n,e){var r=n.value,o=t.multiple;if(!(o&&!Array.isArray(r))){for(var i,a,s=0,l=t.options.length;s<l;s++)if(a=t.options[s],o)i=In(r,xe(a))>-1,a.selected!==i&&(a.selected=i);else if(mt(xe(a),r)){t.selectedIndex!==s&&(t.selectedIndex=s);return}o||(t.selectedIndex=-1)}}function uo(t,n){return n.every(function(e){return!mt(e,t)})}function xe(t){return"_value"in t?t._value:t.value}function Ss(t){t.target.composing=!0}function mo(t){!t.target.composing||(t.target.composing=!1,wn(t.target,"input"))}function wn(t,n){var e=document.createEvent("HTMLEvents");e.initEvent(n,!0,!0),t.dispatchEvent(e)}function Tn(t){return t.componentInstance&&(!t.data||!t.data.transition)?Tn(t.componentInstance._vnode):t}var ks={bind:function(n,e,r){var o=e.value;r=Tn(r);var i=r.data&&r.data.transition,a=n.__vOriginalDisplay=n.style.display==="none"?"":n.style.display;o&&i?(r.data.show=!0,xn(r,function(){n.style.display=a})):n.style.display=o?a:"none"},update:function(n,e,r){var o=e.value,i=e.oldValue;if(!o!=!i){r=Tn(r);var a=r.data&&r.data.transition;a?(r.data.show=!0,o?xn(r,function(){n.style.display=n.__vOriginalDisplay}):ao(r,function(){n.style.display="none"})):n.style.display=o?n.__vOriginalDisplay:"none"}},unbind:function(n,e,r,o,i){i||(n.style.display=n.__vOriginalDisplay)}},Ns={model:lo,show:ks},vo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Sn(t){var n=t&&t.componentOptions;return n&&n.Ctor.options.abstract?Sn(gr(n.children)):t}function ho(t){var n={},e=t.$options;for(var r in e.propsData)n[r]=t[r];var o=e._parentListeners;for(var i in o)n[dt(i)]=o[i];return n}function _o(t,n){if(/\d-keep-alive$/.test(n.tag))return t("keep-alive",{props:n.componentOptions.propsData})}function Os(t){for(;t=t.parent;)if(t.data.transition)return!0}function Hs(t,n){return n.key===t.key&&n.tag===t.tag}var Ms=function(t){return t.tag||Zt(t)},Bs=function(t){return t.name==="show"},Ds={name:"transition",props:vo,abstract:!0,render:function(n){var e=this,r=this.$slots.default;if(!!r&&(r=r.filter(Ms),!!r.length)){var o=this.mode,i=r[0];if(Os(this.$vnode))return i;var a=Sn(i);if(!a)return i;if(this._leaving)return _o(n,i);var s="__transition-"+this._uid+"-";a.key=a.key==null?a.isComment?s+"comment":s+a.tag:It(a.key)?String(a.key).indexOf(s)===0?a.key:s+a.key:a.key;var l=(a.data||(a.data={})).transition=ho(this),d=this._vnode,p=Sn(d);if(a.data.directives&&a.data.directives.some(Bs)&&(a.data.show=!0),p&&p.data&&!Hs(a,p)&&!Zt(p)&&!(p.componentInstance&&p.componentInstance._vnode.isComment)){var v=p.data.transition=N({},l);if(o==="out-in")return this._leaving=!0,at(v,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),_o(n,i);if(o==="in-out"){if(Zt(a))return d;var h,b=function(){h()};at(l,"afterEnter",b),at(l,"enterCancelled",b),at(v,"delayLeave",function(w){h=w})}}return i}}},go=N({tag:String,moveClass:String},vo);delete go.mode;var $s={props:go,beforeMount:function(){var n=this,e=this._update;this._update=function(r,o){var i=yr(n);n.__patch__(n._vnode,n.kept,!1,!0),n._vnode=n.kept,i(),e.call(n,r,o)}},render:function(n){for(var e=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),o=this.prevChildren=this.children,i=this.$slots.default||[],a=this.children=[],s=ho(this),l=0;l<i.length;l++){var d=i[l];if(d.tag){if(d.key!=null&&String(d.key).indexOf("__vlist")!==0)a.push(d),r[d.key]=d,(d.data||(d.data={})).transition=s;else if(!1)var p,v}}if(o){for(var h=[],b=[],w=0;w<o.length;w++){var x=o[w];x.data.transition=s,x.data.pos=x.elm.getBoundingClientRect(),r[x.key]?h.push(x):b.push(x)}this.kept=n(e,null,h),this.removed=b}return n(e,null,a)},updated:function(){var n=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";!n.length||!this.hasMove(n[0].elm,e)||(n.forEach(Fs),n.forEach(Qs),n.forEach(Is),this._reflow=document.body.offsetHeight,n.forEach(function(r){if(r.data.moved){var o=r.elm,i=o.style;xt(o,e),i.transform=i.WebkitTransform=i.transitionDuration="",o.addEventListener(be,o._moveCb=function a(s){s&&s.target!==o||(!s||/transform$/.test(s.propertyName))&&(o.removeEventListener(be,a),o._moveCb=null,et(o,e))})}}))},methods:{hasMove:function(n,e){if(!Yr)return!1;if(this._hasMove)return this._hasMove;var r=n.cloneNode();n._transitionClasses&&n._transitionClasses.forEach(function(i){qr(r,i)}),zr(r,e),r.style.display="none",this.$el.appendChild(r);var o=ro(r);return this.$el.removeChild(r),this._hasMove=o.hasTransform}}};function Fs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Qs(t){t.data.newPos=t.elm.getBoundingClientRect()}function Is(t){var n=t.data.pos,e=t.data.newPos,r=n.left-e.left,o=n.top-e.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+o+"px)",i.transitionDuration="0s"}}var Ls={Transition:Ds,TransitionGroup:$s};H.config.mustUseProp=wa;H.config.isReservedTag=Br;H.config.isReservedAttr=xa;H.config.getTagNamespace=$a;H.config.isUnknownElement=Fa;N(H.options.directives,Ns);N(H.options.components,Ls);H.prototype.__patch__=U?Ts:Q;H.prototype.$mount=function(t,n){return t=t&&U?Qa(t):void 0,Gi(this,t,n)};U&&setTimeout(function(){F.devtools&&ie&&ie.emit("init",H)},0);var kn=H;var Vs={name:"Loader"},Ao=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t._m(0)},Us=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"loader"}),t._v(" "),e("span",[t._v("loading..")])])}];Ao._withStripped=!0;var Ps=function(t){!t||t("data-v-2afd6a14_0",{source:`
.loader[data-v-2afd6a14] {
  filter: none !important;
  z-index: 5;
  border: solid 2px red;
  position: relative;
  left: calc(50% - 40px);
  border: 16px solid #cccccc; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  animation: spin-data-v-2afd6a14 2s linear infinite;
}
@keyframes spin-data-v-2afd6a14 {
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
}
`,map:{version:3,sources:["src/components/Loader.vue"],names:[],mappings:";AAaA;EACA,uBAAA;EACA,UAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,0BAAA,EAAA,eAAA;EACA,8BAAA,EAAA,SAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,kDAAA;AACA;AAEA;AACA;IACA,uBAAA;AACA;AACA;IACA,yBAAA;AACA;AACA",file:"Loader.vue",sourcesContent:[`<template>
  <div>
    <div class="loader"></div>
    <span>loading..</span>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
<\/script>
<style scoped>
.loader {
  filter: none !important;
  z-index: 5;
  border: solid 2px red;
  position: relative;
  left: calc(50% - 40px);
  border: 16px solid #cccccc; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
`]},media:void 0})},Rs="data-v-2afd6a14",js=void 0,Xs=!1;function Gs(t,n,e,r,o,i,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};p.__file=`<template>
  <div>
    <div class="loader"></div>
    <span>loading..</span>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
<\/script>
<style scoped>
.loader {
  filter: none !important;
  z-index: 5;
  border: solid 2px red;
  position: relative;
  left: calc(50% - 40px);
  border: 16px solid #cccccc; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),p._scopeId=r;{let v;if(n&&(v=a?function(h){n.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){n.call(this,s(h))}),v!==void 0)if(p.functional){let h=p.render;p.render=function(w,x){return v.call(x),h(w,x)}}else{let h=p.beforeCreate;p.beforeCreate=h?[].concat(h,v):[v]}}return p}function Nn(){let t=Nn.styles||(Nn.styles={}),n=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=n?o.media||"default":r,a=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=o.source,l=a.ids.length;if(a.ids.push(r),n&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){let d=document.head||document.getElementsByTagName("head")[0],p=a.element=document.createElement("style");p.type="text/css",o.media&&p.setAttribute("media",o.media),n&&(p.setAttribute("data-group",i),p.setAttribute("data-next-index","0")),d.appendChild(p)}if(n&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(s),p=a.element.childNodes;p[l]&&a.element.removeChild(p[l]),p.length?a.element.insertBefore(d,p[l]):a.element.appendChild(d)}}}}var Zs=Gs({render:Ao,staticRenderFns:Us},Ps,Vs,Rs,Xs,js,!1,Nn,void 0,void 0),yo=Zs;var zs={name:"Equation"},Co=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"100",viewBox:"0 -1458 11066 2416","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("path",{attrs:{id:"MJX-87-TEX-I-78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-SO-221A",d:"M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),t._v(" "),e("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[e("g",{attrs:{"data-mml-node":"math"}},[e("g",{attrs:{"data-mml-node":"mtable"}},[e("g",{attrs:{"data-mml-node":"mtr",transform:"translate(0, -262)"}},[e("g",{attrs:{"data-mml-node":"mtd"}},[e("g",{attrs:{"data-mml-node":"msub"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-31"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(975.6, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2C"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"msub",transform:"translate(1420.2, 0)"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(2673.6, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-3D"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3729.3, 0)"}},[e("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 787.5)"}},[e("g",{attrs:{"data-mml-node":"mo"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(778, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1429.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-B1"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"msqrt",transform:"translate(2429.4, 0)"}},[e("g",{attrs:{transform:"translate(1000, 0)"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(429, 0)"}},[e("g",{attrs:{"data-mml-node":"mo"}},[e("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v(`
                            \xB2
                          `)])])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1005, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(2005.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-34"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(2505.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(3034.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-63"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(0, 22.5)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-SO-221A"}})]),t._v(" "),e("rect",{attrs:{width:"3467.2",height:"60",x:"1000",y:"812.5"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mrow",transform:"translate(3153.8, -686)"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(500, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})])]),t._v(" "),e("rect",{attrs:{width:"7096.7",height:"60",x:"120",y:"220"}})])])])])])])])])},qs=[];Co._withStripped=!0;var Js=void 0,Ws=void 0,Ys=void 0,Ks=!1;function t1(t,n,e,r,o,i,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="100"
      viewBox="0 -1458 11066 2416"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          id="MJX-87-TEX-I-78"
          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"
        ></path>
        <path
          id="MJX-87-TEX-N-31"
          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
        ></path>
        <path
          id="MJX-87-TEX-N-2C"
          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
        ></path>
        <path
          id="MJX-87-TEX-N-32"
          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
        ></path>
        <path
          id="MJX-87-TEX-N-3D"
          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
        ></path>
        <path
          id="MJX-87-TEX-N-2212"
          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"
        ></path>
        <path
          id="MJX-87-TEX-I-62"
          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"
        ></path>
        <path
          id="MJX-87-TEX-N-B1"
          d="M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"
        ></path>
        <path
          id="MJX-87-TEX-SO-221A"
          d="M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"
        ></path>
        <path
          id="MJX-87-TEX-N-34"
          d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"
        ></path>
        <path
          id="MJX-87-TEX-I-61"
          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
        ></path>
        <path
          id="MJX-87-TEX-I-63"
          d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"
        ></path>
      </defs>
      <g
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        transform="matrix(1 0 0 -1 0 0)"
      >
        <g data-mml-node="math">
          <g data-mml-node="mtable">
            <g data-mml-node="mtr" transform="translate(0, -262)">
              <g data-mml-node="mtd">
                <g data-mml-node="msub">
                  <g data-mml-node="mi">
                    <use xlink:href="#MJX-87-TEX-I-78"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(572, -150) scale(0.707)"
                  >
                    <use xlink:href="#MJX-87-TEX-N-31"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(975.6, 0)">
                  <use xlink:href="#MJX-87-TEX-N-2C"></use>
                </g>
                <g data-mml-node="msub" transform="translate(1420.2, 0)">
                  <g data-mml-node="mi">
                    <use xlink:href="#MJX-87-TEX-I-78"></use>
                  </g>
                  <g
                    data-mml-node="mn"
                    transform="translate(572, -150) scale(0.707)"
                  >
                    <use xlink:href="#MJX-87-TEX-N-32"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2673.6, 0)">
                  <use xlink:href="#MJX-87-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mfrac" transform="translate(3729.3, 0)">
                  <g data-mml-node="mrow" transform="translate(220, 787.5)">
                    <g data-mml-node="mo">
                      <use xlink:href="#MJX-87-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(778, 0)">
                      <use xlink:href="#MJX-87-TEX-I-62"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1429.2, 0)">
                      <use xlink:href="#MJX-87-TEX-N-B1"></use>
                    </g>
                    <g data-mml-node="msqrt" transform="translate(2429.4, 0)">
                      <g transform="translate(1000, 0)">
                        <g data-mml-node="mi">
                          <use xlink:href="#MJX-87-TEX-I-62"></use>
                        </g>
                        <g
                          data-mml-node="TeXAtom"
                          transform="translate(429, 0)"
                        >
                          <g data-mml-node="mo">
                            <text
                              data-variant="normal"
                              transform="matrix(1 0 0 -1 0 0)"
                              font-size="884px"
                              font-family="serif"
                            >
                              \xB2
                            </text>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1005, 0)">
                          <use xlink:href="#MJX-87-TEX-N-2212"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(2005.2, 0)">
                          <use xlink:href="#MJX-87-TEX-N-34"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(2505.2, 0)">
                          <use xlink:href="#MJX-87-TEX-I-61"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(3034.2, 0)">
                          <use xlink:href="#MJX-87-TEX-I-63"></use>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(0, 22.5)">
                        <use xlink:href="#MJX-87-TEX-SO-221A"></use>
                      </g>
                      <rect
                        width="3467.2"
                        height="60"
                        x="1000"
                        y="812.5"
                      ></rect>
                    </g>
                  </g>
                  <g data-mml-node="mrow" transform="translate(3153.8, -686)">
                    <g data-mml-node="mn">
                      <use xlink:href="#MJX-87-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(500, 0)">
                      <use xlink:href="#MJX-87-TEX-I-61"></use>
                    </g>
                  </g>
                  <rect width="7096.7" height="60" x="120" y="220"></rect>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  name: "Equation",
};
<\/script>
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),p._scopeId=r,p}var e1=t1({render:Co,staticRenderFns:qs},Js,zs,Ws,Ks,Ys,!1,void 0,void 0,void 0),bo=e1;var n1={},xo=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"logo",attrs:{viewBox:"0 0 648 121",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z",fill:"url(#paint0_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z",fill:"url(#paint1_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z",fill:"url(#paint2_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z",fill:"url(#paint3_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z",fill:"url(#paint4_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z",fill:"url(#paint5_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z",fill:"url(#paint6_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z",fill:"url(#paint7_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z",fill:"url(#paint8_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z",fill:"url(#paint9_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z",fill:"url(#paint10_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M84.6285 34.026H92.6247V26.027H84.6285V34.026Z",fill:"url(#paint11_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z",fill:"url(#paint12_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M108.791 14.4016H123.17V0H108.791V14.4016Z",fill:"url(#paint13_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z",fill:"url(#paint14_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M97.811 33.2278H104.194V26.8426H97.811V33.2278Z",fill:"url(#paint15_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M110.803 27.953H120.395V18.3578H110.803V27.953Z",fill:"url(#paint16_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M106.623 38.0341H110.942V33.7137H106.623V38.0341Z",fill:"url(#paint17_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M114.792 42.4067H121.175V36.0388H114.792V42.4067Z",fill:"url(#paint18_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z",fill:"url(#paint19_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z",fill:"url(#paint20_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z",fill:"url(#paint21_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z",fill:"url(#paint22_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z",fill:"url(#paint23_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z",fill:"url(#paint24_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z",fill:"url(#paint25_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z",fill:"url(#paint26_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z",fill:"url(#paint27_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z",fill:"url(#paint28_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z",fill:"url(#paint29_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z",fill:"url(#paint30_linear_3_40)"}}),t._v(" "),e("defs",[e("linearGradient",{attrs:{id:"paint0_linear_3_40",x1:"16.2335",y1:"78.5655",x2:"90.5021",y2:"14.0713",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint1_linear_3_40",x1:"33.4419",y1:"98.3816",x2:"107.71",y2:"33.8874",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint2_linear_3_40",x1:"51.0435",y1:"118.651",x2:"125.312",y2:"54.1567",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint3_linear_3_40",x1:"62.0301",y1:"131.303",x2:"136.299",y2:"66.8084",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint4_linear_3_40",x1:"46.0063",y1:"112.85",x2:"120.275",y2:"48.3561",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint5_linear_3_40",x1:"22.5737",y1:"85.8663",x2:"96.8421",y2:"21.3722",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint6_linear_3_40",x1:"5.30527",y1:"65.9808",x2:"79.5737",y2:"1.48666",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint7_linear_3_40",x1:"39.9594",y1:"105.887",x2:"114.228",y2:"41.3928",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint8_linear_3_40",x1:"14.3736",y1:"76.4235",x2:"88.642",y2:"11.9294",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint9_linear_3_40",x1:"30.2892",y1:"94.7512",x2:"104.558",y2:"30.2571",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint10_linear_3_40",x1:"21.9139",y1:"85.1065",x2:"96.1823",y2:"20.6124",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint11_linear_3_40",x1:"23.3495",y1:"86.7596",x2:"97.618",y2:"22.2656",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint12_linear_3_40",x1:"11.5745",y1:"73.2003",x2:"85.8427",y2:"8.70587",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint13_linear_3_40",x1:"23.8107",y1:"87.2911",x2:"98.0794",y2:"22.7968",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint14_linear_3_40",x1:"23.6893",y1:"87.1514",x2:"97.958",y2:"22.657",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint15_linear_3_40",x1:"28.6723",y1:"92.8895",x2:"102.941",y2:"28.3951",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint16_linear_3_40",x1:"31.5413",y1:"96.193",x2:"105.81",y2:"31.6988",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint17_linear_3_40",x1:"34.9074",y1:"100.07",x2:"109.176",y2:"35.5752",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint18_linear_3_40",x1:"40.5234",y1:"106.536",x2:"114.792",y2:"42.0425",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint19_linear_3_40",x1:"17.9841",y1:"80.5813",x2:"92.2529",y2:"16.0874",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint20_linear_3_40",x1:"31.505",y1:"96.1513",x2:"105.774",y2:"31.6572",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint21_linear_3_40",x1:"39.6018",y1:"105.475",x2:"113.87",y2:"40.9808",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint22_linear_3_40",x1:"156.752",y1:"71.2438",x2:"644.928",y2:"71.2438",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint23_linear_3_40",x1:"156.752",y1:"80.3112",x2:"644.928",y2:"80.3112",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint24_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint25_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint26_linear_3_40",x1:"156.752",y1:"89.2923",x2:"644.928",y2:"89.2923",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint27_linear_3_40",x1:"156.752",y1:"71.3085",x2:"644.928",y2:"71.3085",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint28_linear_3_40",x1:"156.752",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint29_linear_3_40",x1:"156.752",y1:"71.287",x2:"644.928",y2:"71.287",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint30_linear_3_40",x1:"156.753",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])},r1=[];xo._withStripped=!0;var o1=void 0,i1=void 0,a1=void 0,s1=!1;function p1(t,n,e,r,o,i,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
  <svg
    class="logo"
    viewBox="0 0 648 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z"
      fill="url(#paint0_linear_3_40)"
    />
    <path
      d="M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z"
      fill="url(#paint1_linear_3_40)"
    />
    <path
      d="M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z"
      fill="url(#paint2_linear_3_40)"
    />
    <path
      d="M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z"
      fill="url(#paint3_linear_3_40)"
    />
    <path
      d="M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z"
      fill="url(#paint4_linear_3_40)"
    />
    <path
      d="M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z"
      fill="url(#paint5_linear_3_40)"
    />
    <path
      d="M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z"
      fill="url(#paint6_linear_3_40)"
    />
    <path
      d="M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z"
      fill="url(#paint7_linear_3_40)"
    />
    <path
      d="M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z"
      fill="url(#paint8_linear_3_40)"
    />
    <path
      d="M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z"
      fill="url(#paint9_linear_3_40)"
    />
    <path
      d="M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z"
      fill="url(#paint10_linear_3_40)"
    />
    <path
      d="M84.6285 34.026H92.6247V26.027H84.6285V34.026Z"
      fill="url(#paint11_linear_3_40)"
    />
    <path
      d="M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z"
      fill="url(#paint12_linear_3_40)"
    />
    <path
      d="M108.791 14.4016H123.17V0H108.791V14.4016Z"
      fill="url(#paint13_linear_3_40)"
    />
    <path
      d="M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z"
      fill="url(#paint14_linear_3_40)"
    />
    <path
      d="M97.811 33.2278H104.194V26.8426H97.811V33.2278Z"
      fill="url(#paint15_linear_3_40)"
    />
    <path
      d="M110.803 27.953H120.395V18.3578H110.803V27.953Z"
      fill="url(#paint16_linear_3_40)"
    />
    <path
      d="M106.623 38.0341H110.942V33.7137H106.623V38.0341Z"
      fill="url(#paint17_linear_3_40)"
    />
    <path
      d="M114.792 42.4067H121.175V36.0388H114.792V42.4067Z"
      fill="url(#paint18_linear_3_40)"
    />
    <path
      d="M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z"
      fill="url(#paint19_linear_3_40)"
    />
    <path
      d="M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z"
      fill="url(#paint20_linear_3_40)"
    />
    <path
      d="M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z"
      fill="url(#paint21_linear_3_40)"
    />
    <path
      d="M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z"
      fill="url(#paint22_linear_3_40)"
    />
    <path
      d="M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z"
      fill="url(#paint23_linear_3_40)"
    />
    <path
      d="M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z"
      fill="url(#paint24_linear_3_40)"
    />
    <path
      d="M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z"
      fill="url(#paint25_linear_3_40)"
    />
    <path
      d="M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z"
      fill="url(#paint26_linear_3_40)"
    />
    <path
      d="M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z"
      fill="url(#paint27_linear_3_40)"
    />
    <path
      d="M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z"
      fill="url(#paint28_linear_3_40)"
    />
    <path
      d="M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z"
      fill="url(#paint29_linear_3_40)"
    />
    <path
      d="M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z"
      fill="url(#paint30_linear_3_40)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_3_40"
        x1="16.2335"
        y1="78.5655"
        x2="90.5021"
        y2="14.0713"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3_40"
        x1="33.4419"
        y1="98.3816"
        x2="107.71"
        y2="33.8874"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_3_40"
        x1="51.0435"
        y1="118.651"
        x2="125.312"
        y2="54.1567"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_3_40"
        x1="62.0301"
        y1="131.303"
        x2="136.299"
        y2="66.8084"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_3_40"
        x1="46.0063"
        y1="112.85"
        x2="120.275"
        y2="48.3561"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_3_40"
        x1="22.5737"
        y1="85.8663"
        x2="96.8421"
        y2="21.3722"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_3_40"
        x1="5.30527"
        y1="65.9808"
        x2="79.5737"
        y2="1.48666"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_3_40"
        x1="39.9594"
        y1="105.887"
        x2="114.228"
        y2="41.3928"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_3_40"
        x1="14.3736"
        y1="76.4235"
        x2="88.642"
        y2="11.9294"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_3_40"
        x1="30.2892"
        y1="94.7512"
        x2="104.558"
        y2="30.2571"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_3_40"
        x1="21.9139"
        y1="85.1065"
        x2="96.1823"
        y2="20.6124"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_3_40"
        x1="23.3495"
        y1="86.7596"
        x2="97.618"
        y2="22.2656"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_3_40"
        x1="11.5745"
        y1="73.2003"
        x2="85.8427"
        y2="8.70587"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_3_40"
        x1="23.8107"
        y1="87.2911"
        x2="98.0794"
        y2="22.7968"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_3_40"
        x1="23.6893"
        y1="87.1514"
        x2="97.958"
        y2="22.657"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_3_40"
        x1="28.6723"
        y1="92.8895"
        x2="102.941"
        y2="28.3951"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_3_40"
        x1="31.5413"
        y1="96.193"
        x2="105.81"
        y2="31.6988"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint17_linear_3_40"
        x1="34.9074"
        y1="100.07"
        x2="109.176"
        y2="35.5752"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint18_linear_3_40"
        x1="40.5234"
        y1="106.536"
        x2="114.792"
        y2="42.0425"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint19_linear_3_40"
        x1="17.9841"
        y1="80.5813"
        x2="92.2529"
        y2="16.0874"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint20_linear_3_40"
        x1="31.505"
        y1="96.1513"
        x2="105.774"
        y2="31.6572"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint21_linear_3_40"
        x1="39.6018"
        y1="105.475"
        x2="113.87"
        y2="40.9808"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint22_linear_3_40"
        x1="156.752"
        y1="71.2438"
        x2="644.928"
        y2="71.2438"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint23_linear_3_40"
        x1="156.752"
        y1="80.3112"
        x2="644.928"
        y2="80.3112"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint24_linear_3_40"
        x1="156.752"
        y1="80.3113"
        x2="644.928"
        y2="80.3113"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint25_linear_3_40"
        x1="156.752"
        y1="80.3113"
        x2="644.928"
        y2="80.3113"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint26_linear_3_40"
        x1="156.752"
        y1="89.2923"
        x2="644.928"
        y2="89.2923"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint27_linear_3_40"
        x1="156.752"
        y1="71.3085"
        x2="644.928"
        y2="71.3085"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint28_linear_3_40"
        x1="156.752"
        y1="80.2897"
        x2="644.928"
        y2="80.2897"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint29_linear_3_40"
        x1="156.752"
        y1="71.287"
        x2="644.928"
        y2="71.287"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint30_linear_3_40"
        x1="156.753"
        y1="80.2897"
        x2="644.928"
        y2="80.2897"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
    </defs>
  </svg>
</template>
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),p._scopeId=r,p}var l1=p1({render:xo,staticRenderFns:r1},o1,n1,i1,s1,a1,!1,void 0,void 0,void 0),Eo=l1;var c1={},wo=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"github",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])},f1=[];wo._withStripped=!0;var u1=void 0,d1=void 0,m1=void 0,v1=!1;function h1(t,n,e,r,o,i,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="github" viewBox="0 0 24 24">
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  </svg>
</template>
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),p._scopeId=r,p}var _1=h1({render:wo,staticRenderFns:f1},u1,c1,d1,v1,m1,!1,void 0,void 0,void 0),To=_1;var g1={name:"Snackbar",props:["snack"],mounted(){var t=document.getElementById("snackbar");t.className="",t.classList.add("show"),console.log(this.$props.snack.type),this.$props.snack.type=="failure"?t.classList.add("type-failure"):this.$props.snack.type=="success"?t.classList.add("type-success"):t.classList.add("type-info"),setTimeout(function(){t.className=t.className.replace("show","")},3e3)}},So=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"snackbar"}},[t._v(`
  `+t._s(t.$props.snack.message)+`
`)])},A1=[];So._withStripped=!0;var y1=function(t){!t||t("data-v-2afebe38_0",{source:`
.type-failure[data-v-2afebe38] {
  background-color: red !important;
}
.type-success[data-v-2afebe38] {
  background-color: rgb(39, 138, 0) !important;
}
.type-info[data-v-2afebe38] {
  background-color: rgb(0, 138, 138) !important;
}
#snackbar[data-v-2afebe38] {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 80%;
  margin-right: 50px;
  bottom: 30px;
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 4px 4px rgb(121, 121, 121);
}
#snackbar.show[data-v-2afebe38] {
  visibility: visible;
  -webkit-animation: fadein-data-v-2afebe38 0.5s,fadeout-data-v-2afebe38 0.5s 2.5s;
  animation: fadein-data-v-2afebe38 0.5s,fadeout-data-v-2afebe38 0.5s 2.5s;
}
@-webkit-keyframes fadein-data-v-2afebe38 {
from {
    bottom: 0;
    opacity: 0;
}
to {
    bottom: 30px;
    opacity: 1;
}
}
@keyframes fadein-data-v-2afebe38 {
from {
    bottom: 0;
    opacity: 0;
}
to {
    bottom: 30px;
    opacity: 1;
}
}
@-webkit-keyframes fadeout-data-v-2afebe38 {
from {
    bottom: 30px;
    opacity: 1;
}
to {
    bottom: 0;
    opacity: 0;
}
}
@keyframes fadeout-data-v-2afebe38 {
from {
    bottom: 30px;
    opacity: 1;
}
to {
    bottom: 0;
    opacity: 0;
}
}
`,map:{version:3,sources:["src/components/Snackbar.vue"],names:[],mappings:";AA+BA;EACA,gCAAA;AACA;AAEA;EACA,4CAAA;AACA;AAEA;EACA,6CAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,UAAA;EACA,SAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,sCAAA;AACA;AAEA;EACA,mBAAA;EACA,gFAAA;EACA,wEAAA;AACA;AAEA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA;IACA,YAAA;IACA,UAAA;AACA;AACA;AAEA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA;IACA,YAAA;IACA,UAAA;AACA;AACA;AAEA;AACA;IACA,YAAA;IACA,UAAA;AACA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA;AAEA;AACA;IACA,YAAA;IACA,UAAA;AACA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA",file:"Snackbar.vue",sourcesContent:[`<template>
  <div id="snackbar">
    {{ $props.snack.message }}
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: ["snack"],
  mounted() {
    var x = document.getElementById("snackbar");

    x.className = "";
    x.classList.add("show");
    console.log(this.$props.snack.type);
    if (this.$props.snack.type == "failure") {
      x.classList.add("type-failure");
    } else if (this.$props.snack.type == "success") {
      x.classList.add("type-success");
    } else {
      x.classList.add("type-info");
    }
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  },
};
<\/script>

<style scoped>
.type-failure {
  background-color: red !important;
}

.type-success {
  background-color: rgb(39, 138, 0) !important;
}

.type-info {
  background-color: rgb(0, 138, 138) !important;
}

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 80%;
  margin-right: 50px;
  bottom: 30px;
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 4px 4px rgb(121, 121, 121);
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
`]},media:void 0})},C1="data-v-2afebe38",b1=void 0,x1=!1;function E1(t,n,e,r,o,i,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};p.__file=`<template>
  <div id="snackbar">
    {{ $props.snack.message }}
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: ["snack"],
  mounted() {
    var x = document.getElementById("snackbar");

    x.className = "";
    x.classList.add("show");
    console.log(this.$props.snack.type);
    if (this.$props.snack.type == "failure") {
      x.classList.add("type-failure");
    } else if (this.$props.snack.type == "success") {
      x.classList.add("type-success");
    } else {
      x.classList.add("type-info");
    }
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  },
};
<\/script>

<style scoped>
.type-failure {
  background-color: red !important;
}

.type-success {
  background-color: rgb(39, 138, 0) !important;
}

.type-info {
  background-color: rgb(0, 138, 138) !important;
}

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 80%;
  margin-right: 50px;
  bottom: 30px;
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 4px 4px rgb(121, 121, 121);
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),p._scopeId=r;{let v;if(n&&(v=a?function(h){n.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){n.call(this,s(h))}),v!==void 0)if(p.functional){let h=p.render;p.render=function(w,x){return v.call(x),h(w,x)}}else{let h=p.beforeCreate;p.beforeCreate=h?[].concat(h,v):[v]}}return p}function On(){let t=On.styles||(On.styles={}),n=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=n?o.media||"default":r,a=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=o.source,l=a.ids.length;if(a.ids.push(r),n&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){let d=document.head||document.getElementsByTagName("head")[0],p=a.element=document.createElement("style");p.type="text/css",o.media&&p.setAttribute("media",o.media),n&&(p.setAttribute("data-group",i),p.setAttribute("data-next-index","0")),d.appendChild(p)}if(n&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(s),p=a.element.childNodes;p[l]&&a.element.removeChild(p[l]),p.length?a.element.insertBefore(d,p[l]):a.element.appendChild(d)}}}}var w1=E1({render:So,staticRenderFns:A1},y1,g1,C1,x1,b1,!1,On,void 0,void 0),ko=w1;function No(){let t=0,n=0,e=0,r=50;do t=Math.floor(Math.random()*r+1),n=Math.floor(Math.random()*r),e=Math.floor(Math.random()*r),t==0&&(t=1);while($t(t,n,e)[0]%1!=0||$t(t,n,e)[1]%1!=0||$t(t,n,e)[0]<0||$t(t,n,e)[1]<0);return[t,n,e]}function $t(t,n,e){n>0&&(n=n*-1);let r,o,i=n*n-4*t*e;return i>0?(r=(-n+Math.sqrt(i))/(2*t),o=(-n-Math.sqrt(i))/(2*t)):i==0&&(r=o=-n/(2*t)),[r,o]}var Hn;async function Oo(){let[t,n,e]=No();Hn=await import("./contract-util-KEHMUQU5.js"),await Hn.deployContract(t,n,e);let[r,o]=$t(t,n,e);return console.log(`deployed snapp with equation of form ${t}x\xB2 - ${n}x + ${e}; possible solutions would be x1 = ${r}, x2 = ${o}`),[t,n,e]}async function Ho(t){return await Hn.submitSolution(t)}var T1={name:"App",components:{Loader:yo,Equation:bo,GithubLogo:To,ProxyLabsLogo:Eo,Snackbar:ko},data(){return{params:[0,0,0],isDeployed:!1,deploying:!1,showHint:!1,beingSubmited:!1,proposedSolution:0,atPage:0,showSnackbar:!1,snack:{type:"failure",message:"Request failed"}}},methods:{setSnackbar(t,n){this.showSnackbar=!1,this.snack.type=t,this.snack.message=n,this.showSnackbar=!0,setTimeout(()=>{this.showSnackbar=!1},3500)},async submitSolution(){this.beingSubmited=!0,await Ho(this.proposedSolution)?this.setSnackbar("success","Congratz! You found one valid solution to the equation. Please proceed"):this.setSnackbar("failure","Failure. Looks like the provided solution doesn't work!"),this.beingSubmited=!1},getEquation(){let t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`;return this.params[1]!=0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 = 0`),this.params[1]!=0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 - ${this.params[1]}x = 0`),t},next(){this.atPage++},async deploy(){this.deploying=!0,this.params=await Oo(),this.setSnackbar("info","Contract deployed!"),this.beingSubmited=!1,this.isDeployed=!0,this.deploying=!1}}},Mo=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("ProxyLabsLogo"),t._v(" "),e("GithubLogo")],1),t._v(" "),e("h1",{staticClass:"title"},[t._v("Mina Secret Exchange")]),t._v(" "),e("h3",{staticClass:"sub"},[t._v(`
    Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) for the Mina
    Snapp Bootcamp 2021.
  `)]),t._v(" "),e("p",{staticClass:"sub-desc"},[t._v(`
    The secret exchange allows users to buy imaginary tokens (tokens aren't
    implemented, only simulated) after successfully providing the solution to
    a series of math problems while keeping the solution itself secure and
    private, not exposing it to the network. An exchange to which only
    math-nerds have access!
  `)]),t._v(" "),e("div",{staticClass:"content-wrapper"},[t.atPage==0?e("div",[e("Loader",{style:t.deploying?"visibility: visible;":"visibility: hidden;"}),t._v(" "),e("h2",{staticStyle:{border:"2px red dotted","margin-left":"40%","margin-right":"40%"},style:t.isDeployed?"visibility: visible;":"visibility: hidden;"},[e("h5",{staticStyle:{margin:"5px"}},[t._v("There you go - here is your equation:")]),t._v(`
        `+t._s(t.getEquation())+`
      `)]),t._v(" "),t.isDeployed?t._e():e("button",{staticClass:"deploy-btn",on:{click:function(r){return t.deploy()}}},[e("span",[t._v("Deploy the contract")])]),t._v(" "),t.isDeployed?e("button",{staticClass:"continue-btn",on:{click:function(r){return t.next()}}},[e("span",[t._v("Continue")])]):t._e()],1):t._e(),t._v(" "),t.atPage==1?e("div",[e("h2",{staticStyle:{border:"2px red dotted","margin-left":"40%","margin-right":"40%"}},[e("h5",{staticStyle:{margin:"5px"}},[t._v("Here is your equation:")]),t._v(`
        `+t._s(t.getEquation())+`
      `)]),t._v(" "),e("h5",{staticStyle:{"margin-top":"0px"}},[t._v(`
        Please provide one possible solution to this equation to proceed
      `)]),t._v(" "),e("Loader",{style:t.beingSubmited?"visibility: visible;":"visibility: hidden;"}),t._v(" "),e("div",{staticClass:"content",staticStyle:{display:"flex","margin-left":"30%","margin-right":"30%"}},[e("div",{staticClass:"left",staticStyle:{width:"50%"}},[e("div",{staticClass:"hint",style:t.showHint?"visibility: visible;":"visibility: hidden;"},[e("Equation")],1),t._v(" "),t.showHint?t._e():e("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"12px"},on:{click:function(r){t.showHint=!0}}},[e("span",[t._v("Show Hint")])]),t._v(" "),t.showHint?e("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"15px"},on:{click:function(r){t.showHint=!1}}},[e("span",[t._v("Hide Hint")])]):t._e()]),t._v(" "),e("div",{staticClass:"right",staticStyle:{width:"50%"}},[e("h3",[t._v("Possible solution")]),t._v(" "),e("span",{staticStyle:{"font-size":"3rem"}},[t._v("x = ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.proposedSolution,expression:"proposedSolution"}],staticClass:"submission",attrs:{type:"text"},domProps:{value:t.proposedSolution},on:{input:function(r){r.target.composing||(t.proposedSolution=r.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"submit-btn",staticStyle:{"margin-top":"20px"},on:{click:function(r){return t.submitSolution()}}},[e("span",[t._v("Submit")])])]),t._v(" "),e("br")])],1):t._e()]),t._v(" "),t.showSnackbar?e("Snackbar",{attrs:{snack:t.snack}}):t._e()],1)},S1=[];Mo._withStripped=!0;var k1=function(t){!t||t("data-v-24b204ee_0",{source:`
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Inconsolata", sans-serif;
}
.header {
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  justify-content: space-between;
}
.logo,
.github {
  height: 60px;
  line-height: 60px;
  padding: 4px;
  margin-left: 5px;
}
.github {
  margin-top: 10px;
  height: 30px;
}
.deploy-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 255, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}
.continue-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(254, 255, 176);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}
.hint-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(255, 208, 176);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}
.submit-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 239, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}
.deploy-btn:hover,
.submit-btn:hover,
.hint-btn:hover,
.continue-btn:hover {
  border: solid black 1px;
}
.submit-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.hint-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.deploy-btn span,
.continue-btn span {
  font-weight: 500;
  font-size: 1.8rem;
  text-transform: uppercase;
}
.title {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
}
.sub {
  margin-top: 20px;
  font-size: 1.2rem;
  /*   border-radius: 5px;
  padding: 5px;
  background-color: rgb(214, 214, 214); */
}
.sub-desc {
  margin-top: 25px;
  margin-left: 20%;
  margin-right: 20%;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(214, 214, 214);
}
.submission {
  font-size: 2rem;
  width: 50px;
  margin-top: 6px;
  text-align: center;
}
.wrapper {
  font-family: "Inconsolata", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
`,map:{version:3,sources:["src/App.vue"],names:[],mappings:";AAwMA,qHAAA;AAEA;EACA,sCAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;;EAEA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;;;;EAIA,uBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;;EAEA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA;;yCAEA;AACA;AAEA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AACA;AAEA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,sCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AACA",file:"App.vue",sourcesContent:[`<template>
  <div class="wrapper">
    <div class="header">
      <ProxyLabsLogo />
      <GithubLogo />
    </div>
    <h1 class="title">Mina Secret Exchange</h1>
    <h3 class="sub">
      Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) for the Mina
      Snapp Bootcamp 2021.
    </h3>
    <p class="sub-desc">
      The secret exchange allows users to buy imaginary tokens (tokens aren't
      implemented, only simulated) after successfully providing the solution to
      a series of math problems while keeping the solution itself secure and
      private, not exposing it to the network. An exchange to which only
      math-nerds have access!
    </p>
    <div class="content-wrapper">
      <div v-if="atPage == 0">
        <!--         <span
          >Contract deployed under
          B62qk8bcoWGkmLvgSekJf...7bhUAq9Vci4nvgb4z</span
        >
        <span>Your public key: B62qm4QbSnmQWM3x7SUi...xtDvsne7YP4nC8Nh7f</span> -->
        <Loader
          :style="deploying ? 'visibility: visible;' : 'visibility: hidden;'"
        />
        <h2
          style="border: 2px red dotted; margin-left: 40%; margin-right: 40%"
          :style="isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"
        >
          <h5 style="margin: 5px">There you go - here is your equation:</h5>
          {{ getEquation() }}
        </h2>
        <button v-if="!isDeployed" class="deploy-btn" @click="deploy()">
          <span>Deploy the contract</span>
        </button>
        <button v-if="isDeployed" class="continue-btn" @click="next()">
          <span>Continue</span>
        </button>
      </div>
      <div v-if="atPage == 1">
        <h2 style="border: 2px red dotted; margin-left: 40%; margin-right: 40%">
          <h5 style="margin: 5px">Here is your equation:</h5>
          {{ getEquation() }}
        </h2>
        <h5 style="margin-top: 0px">
          Please provide one possible solution to this equation to proceed
        </h5>
        <Loader
          :style="
            beingSubmited ? 'visibility: visible;' : 'visibility: hidden;'
          "
        />
        <div
          class="content"
          style="display: flex; margin-left: 30%; margin-right: 30%"
        >
          <div class="left" style="width: 50%">
            <div
              class="hint"
              :style="showHint ? 'visibility: visible;' : 'visibility: hidden;'"
            >
              <Equation />
            </div>
            <button
              v-if="!showHint"
              class="hint-btn"
              style="margin-top: 12px"
              @click="showHint = true"
            >
              <span>Show Hint</span>
            </button>
            <button
              v-if="showHint"
              class="hint-btn"
              style="margin-top: 15px"
              @click="showHint = false"
            >
              <span>Hide Hint</span>
            </button>
          </div>
          <div class="right" style="width: 50%">
            <h3>Possible solution</h3>
            <span style="font-size: 3rem">x = </span
            ><input type="text" v-model="proposedSolution" class="submission" />
            <br />
            <button
              class="submit-btn"
              style="margin-top: 20px"
              @click="submitSolution()"
            >
              <span>Submit</span>
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
    <Snackbar v-if="showSnackbar" :snack="snack" />
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Equation from "./components/Equation.vue";

import ProxyLabsLogo from "./components/ProxyLabsLogo.vue";
import GithubLogo from "./components/GithubLogo.vue";
import Snackbar from "./components/Snackbar.vue";

import { init, submitSolution } from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    Loader,
    Equation,
    GithubLogo,
    ProxyLabsLogo,
    Snackbar,
  },
  data() {
    return {
      params: [0, 0, 0],
      isDeployed: false,
      deploying: false,
      showHint: false,
      beingSubmited: false,
      proposedSolution: 0,
      atPage: 0,
      showSnackbar: false,
      snack: {
        type: "failure",
        message: "Request failed",
      },
    };
  },
  methods: {
    setSnackbar(type, msg) {
      this.showSnackbar = false;
      this.snack.type = type;
      this.snack.message = msg;
      this.showSnackbar = true;
      setTimeout(() => {
        this.showSnackbar = false;
      }, 3500);
    },
    async submitSolution() {
      this.beingSubmited = true;
      let res = await submitSolution(this.proposedSolution);

      if (res) {
        this.setSnackbar(
          "success",
          "Congratz! You found one valid solution to the equation. Please proceed"
        );
      } else {
        this.setSnackbar(
          "failure",
          "Failure. Looks like the provided solution doesn't work!"
        );
      }
      this.beingSubmited = false;
    },
    getEquation() {
      let eq = \`\${this.params[0]}x\xB2 - \${this.params[1]}x + \${this.params[2]} = 0\`;
      if (this.params[1] != 0 && this.params[2] != 0) {
        eq = \`\${this.params[0]}x\xB2 - \${this.params[1]}x + \${this.params[2]} = 0\`;
      }
      if (this.params[1] == 0 && this.params[2] != 0) {
        eq = \`\${this.params[0]}x\xB2 + \${this.params[2]} = 0\`;
      }
      if (this.params[1] == 0 && this.params[2] == 0) {
        eq = \`\${this.params[0]}x\xB2 = 0\`;
      }
      if (this.params[1] != 0 && this.params[2] == 0) {
        eq = \`\${this.params[0]}x\xB2 - \${this.params[1]}x = 0\`;
      }
      return eq;
    },
    next() {
      this.atPage++;
    },
    async deploy() {
      this.deploying = true;
      this.params = await init();

      this.setSnackbar("info", "Contract deployed!");

      this.beingSubmited = false;
      this.isDeployed = true;
      this.deploying = false;
    },
  },
};
<\/script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Inconsolata", sans-serif;
}

.header {
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  justify-content: space-between;
}

.logo,
.github {
  height: 60px;
  line-height: 60px;
  padding: 4px;
  margin-left: 5px;
}

.github {
  margin-top: 10px;
  height: 30px;
}

.deploy-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 255, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.continue-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(254, 255, 176);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.hint-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(255, 208, 176);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.submit-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 239, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.deploy-btn:hover,
.submit-btn:hover,
.hint-btn:hover,
.continue-btn:hover {
  border: solid black 1px;
}

.submit-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.hint-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.deploy-btn span,
.continue-btn span {
  font-weight: 500;
  font-size: 1.8rem;
  text-transform: uppercase;
}

.title {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
}

.sub {
  margin-top: 20px;
  font-size: 1.2rem;
  /*   border-radius: 5px;
  padding: 5px;
  background-color: rgb(214, 214, 214); */
}

.sub-desc {
  margin-top: 25px;
  margin-left: 20%;
  margin-right: 20%;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(214, 214, 214);
}

.submission {
  font-size: 2rem;
  width: 50px;
  margin-top: 6px;
  text-align: center;
}

.wrapper {
  font-family: "Inconsolata", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
`]},media:void 0})},N1=void 0,O1=void 0,H1=!1;function M1(t,n,e,r,o,i,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};p.__file=`<template>
  <div class="wrapper">
    <div class="header">
      <ProxyLabsLogo />
      <GithubLogo />
    </div>
    <h1 class="title">Mina Secret Exchange</h1>
    <h3 class="sub">
      Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) for the Mina
      Snapp Bootcamp 2021.
    </h3>
    <p class="sub-desc">
      The secret exchange allows users to buy imaginary tokens (tokens aren't
      implemented, only simulated) after successfully providing the solution to
      a series of math problems while keeping the solution itself secure and
      private, not exposing it to the network. An exchange to which only
      math-nerds have access!
    </p>
    <div class="content-wrapper">
      <div v-if="atPage == 0">
        <!--         <span
          >Contract deployed under
          B62qk8bcoWGkmLvgSekJf...7bhUAq9Vci4nvgb4z</span
        >
        <span>Your public key: B62qm4QbSnmQWM3x7SUi...xtDvsne7YP4nC8Nh7f</span> -->
        <Loader
          :style="deploying ? 'visibility: visible;' : 'visibility: hidden;'"
        />
        <h2
          style="border: 2px red dotted; margin-left: 40%; margin-right: 40%"
          :style="isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"
        >
          <h5 style="margin: 5px">There you go - here is your equation:</h5>
          {{ getEquation() }}
        </h2>
        <button v-if="!isDeployed" class="deploy-btn" @click="deploy()">
          <span>Deploy the contract</span>
        </button>
        <button v-if="isDeployed" class="continue-btn" @click="next()">
          <span>Continue</span>
        </button>
      </div>
      <div v-if="atPage == 1">
        <h2 style="border: 2px red dotted; margin-left: 40%; margin-right: 40%">
          <h5 style="margin: 5px">Here is your equation:</h5>
          {{ getEquation() }}
        </h2>
        <h5 style="margin-top: 0px">
          Please provide one possible solution to this equation to proceed
        </h5>
        <Loader
          :style="
            beingSubmited ? 'visibility: visible;' : 'visibility: hidden;'
          "
        />
        <div
          class="content"
          style="display: flex; margin-left: 30%; margin-right: 30%"
        >
          <div class="left" style="width: 50%">
            <div
              class="hint"
              :style="showHint ? 'visibility: visible;' : 'visibility: hidden;'"
            >
              <Equation />
            </div>
            <button
              v-if="!showHint"
              class="hint-btn"
              style="margin-top: 12px"
              @click="showHint = true"
            >
              <span>Show Hint</span>
            </button>
            <button
              v-if="showHint"
              class="hint-btn"
              style="margin-top: 15px"
              @click="showHint = false"
            >
              <span>Hide Hint</span>
            </button>
          </div>
          <div class="right" style="width: 50%">
            <h3>Possible solution</h3>
            <span style="font-size: 3rem">x = </span
            ><input type="text" v-model="proposedSolution" class="submission" />
            <br />
            <button
              class="submit-btn"
              style="margin-top: 20px"
              @click="submitSolution()"
            >
              <span>Submit</span>
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
    <Snackbar v-if="showSnackbar" :snack="snack" />
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Equation from "./components/Equation.vue";

import ProxyLabsLogo from "./components/ProxyLabsLogo.vue";
import GithubLogo from "./components/GithubLogo.vue";
import Snackbar from "./components/Snackbar.vue";

import { init, submitSolution } from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    Loader,
    Equation,
    GithubLogo,
    ProxyLabsLogo,
    Snackbar,
  },
  data() {
    return {
      params: [0, 0, 0],
      isDeployed: false,
      deploying: false,
      showHint: false,
      beingSubmited: false,
      proposedSolution: 0,
      atPage: 0,
      showSnackbar: false,
      snack: {
        type: "failure",
        message: "Request failed",
      },
    };
  },
  methods: {
    setSnackbar(type, msg) {
      this.showSnackbar = false;
      this.snack.type = type;
      this.snack.message = msg;
      this.showSnackbar = true;
      setTimeout(() => {
        this.showSnackbar = false;
      }, 3500);
    },
    async submitSolution() {
      this.beingSubmited = true;
      let res = await submitSolution(this.proposedSolution);

      if (res) {
        this.setSnackbar(
          "success",
          "Congratz! You found one valid solution to the equation. Please proceed"
        );
      } else {
        this.setSnackbar(
          "failure",
          "Failure. Looks like the provided solution doesn't work!"
        );
      }
      this.beingSubmited = false;
    },
    getEquation() {
      let eq = \`\${this.params[0]}x\xB2 - \${this.params[1]}x + \${this.params[2]} = 0\`;
      if (this.params[1] != 0 && this.params[2] != 0) {
        eq = \`\${this.params[0]}x\xB2 - \${this.params[1]}x + \${this.params[2]} = 0\`;
      }
      if (this.params[1] == 0 && this.params[2] != 0) {
        eq = \`\${this.params[0]}x\xB2 + \${this.params[2]} = 0\`;
      }
      if (this.params[1] == 0 && this.params[2] == 0) {
        eq = \`\${this.params[0]}x\xB2 = 0\`;
      }
      if (this.params[1] != 0 && this.params[2] == 0) {
        eq = \`\${this.params[0]}x\xB2 - \${this.params[1]}x = 0\`;
      }
      return eq;
    },
    next() {
      this.atPage++;
    },
    async deploy() {
      this.deploying = true;
      this.params = await init();

      this.setSnackbar("info", "Contract deployed!");

      this.beingSubmited = false;
      this.isDeployed = true;
      this.deploying = false;
    },
  },
};
<\/script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Inconsolata", sans-serif;
}

.header {
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  justify-content: space-between;
}

.logo,
.github {
  height: 60px;
  line-height: 60px;
  padding: 4px;
  margin-left: 5px;
}

.github {
  margin-top: 10px;
  height: 30px;
}

.deploy-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 255, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.continue-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(254, 255, 176);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.hint-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(255, 208, 176);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.submit-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 239, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
}

.deploy-btn:hover,
.submit-btn:hover,
.hint-btn:hover,
.continue-btn:hover {
  border: solid black 1px;
}

.submit-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.hint-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.deploy-btn span,
.continue-btn span {
  font-weight: 500;
  font-size: 1.8rem;
  text-transform: uppercase;
}

.title {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
}

.sub {
  margin-top: 20px;
  font-size: 1.2rem;
  /*   border-radius: 5px;
  padding: 5px;
  background-color: rgb(214, 214, 214); */
}

.sub-desc {
  margin-top: 25px;
  margin-left: 20%;
  margin-right: 20%;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(214, 214, 214);
}

.submission {
  font-size: 2rem;
  width: 50px;
  margin-top: 6px;
  text-align: center;
}

.wrapper {
  font-family: "Inconsolata", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),p._scopeId=r;{let v;if(n&&(v=a?function(h){n.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){n.call(this,s(h))}),v!==void 0)if(p.functional){let h=p.render;p.render=function(w,x){return v.call(x),h(w,x)}}else{let h=p.beforeCreate;p.beforeCreate=h?[].concat(h,v):[v]}}return p}function Mn(){let t=Mn.styles||(Mn.styles={}),n=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=n?o.media||"default":r,a=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=o.source,l=a.ids.length;if(a.ids.push(r),n&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){let d=document.head||document.getElementsByTagName("head")[0],p=a.element=document.createElement("style");p.type="text/css",o.media&&p.setAttribute("media",o.media),n&&(p.setAttribute("data-group",i),p.setAttribute("data-next-index","0")),d.appendChild(p)}if(n&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(s),p=a.element.childNodes;p[l]&&a.element.removeChild(p[l]),p.length?a.element.insertBefore(d,p[l]):a.element.appendChild(d)}}}}var B1=M1({render:Mo,staticRenderFns:S1},k1,T1,N1,H1,O1,!1,Mn,void 0,void 0),Bo=B1;kn.config.productionTip=!1;new kn({render:t=>t(Bo)}).$mount("#app");
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
