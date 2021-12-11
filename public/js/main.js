var q=Object.freeze({});function y(t){return t==null}function u(t){return t!=null}function k(t){return t===!0}function ki(t){return t===!1}function It(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function Q(t){return t!==null&&typeof t=="object"}var Se=Object.prototype.toString;function V(t){return Se.call(t)==="[object Object]"}function Dn(t){return Se.call(t)==="[object RegExp]"}function Qn(t){var n=parseFloat(String(t));return n>=0&&Math.floor(n)===n&&isFinite(t)}function Oe(t){return u(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function Hi(t){return t==null?"":Array.isArray(t)||V(t)&&t.toString===Se?JSON.stringify(t,null,2):String(t)}function Lt(t){var n=parseFloat(t);return isNaN(n)?t:n}function G(t,n){for(var e=Object.create(null),r=t.split(","),i=0;i<r.length;i++)e[r[i]]=!0;return n?function(o){return e[o.toLowerCase()]}:function(o){return e[o]}}var b1=G("slot,component",!0),Mi=G("key,ref,slot,slot-scope,is");function K(t,n){if(t.length){var e=t.indexOf(n);if(e>-1)return t.splice(e,1)}}var Di=Object.prototype.hasOwnProperty;function B(t,n){return Di.call(t,n)}function ut(t){var n=Object.create(null);return function(r){var i=n[r];return i||(n[r]=t(r))}}var Qi=/-(\w)/g,dt=ut(function(t){return t.replace(Qi,function(n,e){return e?e.toUpperCase():""})}),Bi=ut(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Fi=/\B([A-Z])/g,Vt=ut(function(t){return t.replace(Fi,"-$1").toLowerCase()});function $i(t,n){function e(r){var i=arguments.length;return i?i>1?t.apply(n,arguments):t.call(n,r):t.call(n)}return e._length=t.length,e}function Ii(t,n){return t.bind(n)}var Li=Function.prototype.bind?Ii:$i;function Ne(t,n){n=n||0;for(var e=t.length-n,r=new Array(e);e--;)r[e]=t[e+n];return r}function N(t,n){for(var e in n)t[e]=n[e];return t}function Bn(t){for(var n={},e=0;e<t.length;e++)t[e]&&N(n,t[e]);return n}function $(t,n,e){}var te=function(t,n,e){return!1},Fn=function(t){return t};function vt(t,n){if(t===n)return!0;var e=Q(t),r=Q(n);if(e&&r)try{var i=Array.isArray(t),o=Array.isArray(n);if(i&&o)return t.length===n.length&&t.every(function(l,d){return vt(l,n[d])});if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(!i&&!o){var a=Object.keys(t),s=Object.keys(n);return a.length===s.length&&a.every(function(l){return vt(t[l],n[l])})}else return!1}catch{return!1}else return!e&&!r?String(t)===String(n):!1}function $n(t,n){for(var e=0;e<t.length;e++)if(vt(t[e],n))return e;return-1}function ee(t){var n=!1;return function(){n||(n=!0,t.apply(this,arguments))}}var In="data-server-rendered",ne=["component","directive","filter"],Ln=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:te,isReservedAttr:te,isUnknownElement:te,getTagNamespace:$,parsePlatformTagName:Fn,mustUseProp:te,async:!0,_lifecycleHooks:Ln},Vi=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Ui(t){var n=(t+"").charCodeAt(0);return n===36||n===95}function Tt(t,n,e,r){Object.defineProperty(t,n,{value:e,enumerable:!!r,writable:!0,configurable:!0})}var Pi=new RegExp("[^"+Vi.source+".$_\\d]");function ji(t){if(!Pi.test(t)){var n=t.split(".");return function(e){for(var r=0;r<n.length;r++){if(!e)return;e=e[n[r]]}return e}}}var Ri="__proto__"in{},U=typeof window!="undefined",ke=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,Vn=ke&&WXEnvironment.platform.toLowerCase(),D=U&&window.navigator.userAgent.toLowerCase(),St=D&&/msie|trident/.test(D),Ot=D&&D.indexOf("msie 9.0")>0,He=D&&D.indexOf("edge/")>0,E1=D&&D.indexOf("android")>0||Vn==="android",Xi=D&&/iphone|ipad|ipod|ios/.test(D)||Vn==="ios",w1=D&&/chrome\/\d+/.test(D)&&!He,T1=D&&/phantomjs/.test(D),Un=D&&D.match(/firefox\/(\d+)/),Me={}.watch,Pn=!1;if(U)try{De={},Object.defineProperty(De,"passive",{get:function(){Pn=!0}}),window.addEventListener("test-passive",null,De)}catch{}var De,re,ie=function(){return re===void 0&&(!U&&!ke&&typeof global!="undefined"?re=global.process&&global.process.env.VUE_ENV==="server":re=!1),re},oe=U&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Nt(t){return typeof t=="function"&&/native code/.test(t.toString())}var ae=typeof Symbol!="undefined"&&Nt(Symbol)&&typeof Reflect!="undefined"&&Nt(Reflect.ownKeys),Ut;typeof Set!="undefined"&&Nt(Set)?Ut=Set:Ut=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(e){return this.set[e]===!0},t.prototype.add=function(e){this.set[e]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var jn=$;var Gi=0,P=function(){this.id=Gi++,this.subs=[]};P.prototype.addSub=function(n){this.subs.push(n)};P.prototype.removeSub=function(n){K(this.subs,n)};P.prototype.depend=function(){P.target&&P.target.addDep(this)};P.prototype.notify=function(){for(var n=this.subs.slice(),e=0,r=n.length;e<r;e++)n[e].update()};P.target=null;var se=[];function Pt(t){se.push(t),P.target=t}function jt(){se.pop(),P.target=se[se.length-1]}var I=function(n,e,r,i,o,a,s,l){this.tag=n,this.data=e,this.children=r,this.text=i,this.elm=o,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Rn={child:{configurable:!0}};Rn.child.get=function(){return this.componentInstance};Object.defineProperties(I.prototype,Rn);var mt=function(t){t===void 0&&(t="");var n=new I;return n.text=t,n.isComment=!0,n};function kt(t){return new I(void 0,void 0,void 0,String(t))}function Qe(t){var n=new I(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return n.ns=t.ns,n.isStatic=t.isStatic,n.key=t.key,n.isComment=t.isComment,n.fnContext=t.fnContext,n.fnOptions=t.fnOptions,n.fnScopeId=t.fnScopeId,n.asyncMeta=t.asyncMeta,n.isCloned=!0,n}var Xn=Array.prototype,le=Object.create(Xn),Zi=["push","pop","shift","unshift","splice","sort","reverse"];Zi.forEach(function(t){var n=Xn[t];Tt(le,t,function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];var o=n.apply(this,r),a=this.__ob__,s;switch(t){case"push":case"unshift":s=r;break;case"splice":s=r.slice(2);break}return s&&a.observeArray(s),a.dep.notify(),o})});var zi=Object.getOwnPropertyNames(le),Be=!0;function ot(t){Be=t}var pe=function(n){this.value=n,this.dep=new P,this.vmCount=0,Tt(n,"__ob__",this),Array.isArray(n)?(Ri?qi(n,le):Ji(n,le,zi),this.observeArray(n)):this.walk(n)};pe.prototype.walk=function(n){for(var e=Object.keys(n),r=0;r<e.length;r++)_t(n,e[r])};pe.prototype.observeArray=function(n){for(var e=0,r=n.length;e<r;e++)ht(n[e])};function qi(t,n){t.__proto__=n}function Ji(t,n,e){for(var r=0,i=e.length;r<i;r++){var o=e[r];Tt(t,o,n[o])}}function ht(t,n){if(!(!Q(t)||t instanceof I)){var e;return B(t,"__ob__")&&t.__ob__ instanceof pe?e=t.__ob__:Be&&!ie()&&(Array.isArray(t)||V(t))&&Object.isExtensible(t)&&!t._isVue&&(e=new pe(t)),n&&e&&e.vmCount++,e}}function _t(t,n,e,r,i){var o=new P,a=Object.getOwnPropertyDescriptor(t,n);if(!(a&&a.configurable===!1)){var s=a&&a.get,l=a&&a.set;(!s||l)&&arguments.length===2&&(e=t[n]);var d=!i&&ht(e);Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var m=s?s.call(t):e;return P.target&&(o.depend(),d&&(d.dep.depend(),Array.isArray(m)&&Zn(m))),m},set:function(m){var h=s?s.call(t):e;m===h||m!==m&&h!==h||s&&!l||(l?l.call(t,m):e=m,d=!i&&ht(m),o.notify())}})}}function Fe(t,n,e){if(Array.isArray(t)&&Qn(n))return t.length=Math.max(t.length,n),t.splice(n,1,e),e;if(n in t&&!(n in Object.prototype))return t[n]=e,e;var r=t.__ob__;return t._isVue||r&&r.vmCount?e:r?(_t(r.value,n,e),r.dep.notify(),e):(t[n]=e,e)}function Gn(t,n){if(Array.isArray(t)&&Qn(n)){t.splice(n,1);return}var e=t.__ob__;t._isVue||e&&e.vmCount||!B(t,n)||(delete t[n],!!e&&e.dep.notify())}function Zn(t){for(var n=void 0,e=0,r=t.length;e<r;e++)n=t[e],n&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&Zn(n)}var J=F.optionMergeStrategies;function $e(t,n){if(!n)return t;for(var e,r,i,o=ae?Reflect.ownKeys(n):Object.keys(n),a=0;a<o.length;a++)e=o[a],e!=="__ob__"&&(r=t[e],i=n[e],B(t,e)?r!==i&&V(r)&&V(i)&&$e(r,i):Fe(t,e,i));return t}function Ie(t,n,e){return e?function(){var i=typeof n=="function"?n.call(e,e):n,o=typeof t=="function"?t.call(e,e):t;return i?$e(i,o):o}:n?t?function(){return $e(typeof n=="function"?n.call(this,this):n,typeof t=="function"?t.call(this,this):t)}:n:t}J.data=function(t,n,e){return e?Ie(t,n,e):n&&typeof n!="function"?t:Ie(t,n)};function Wi(t,n){var e=n?t?t.concat(n):Array.isArray(n)?n:[n]:t;return e&&Yi(e)}function Yi(t){for(var n=[],e=0;e<t.length;e++)n.indexOf(t[e])===-1&&n.push(t[e]);return n}Ln.forEach(function(t){J[t]=Wi});function Ki(t,n,e,r){var i=Object.create(t||null);return n?N(i,n):i}ne.forEach(function(t){J[t+"s"]=Ki});J.watch=function(t,n,e,r){if(t===Me&&(t=void 0),n===Me&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;var i={};N(i,t);for(var o in n){var a=i[o],s=n[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i};J.props=J.methods=J.inject=J.computed=function(t,n,e,r){if(!t)return n;var i=Object.create(null);return N(i,t),n&&N(i,n),i};J.provide=Ie;var to=function(t,n){return n===void 0?t:n};function eo(t,n){var e=t.props;if(!!e){var r={},i,o,a;if(Array.isArray(e))for(i=e.length;i--;)o=e[i],typeof o=="string"&&(a=dt(o),r[a]={type:null});else if(V(e))for(var s in e)o=e[s],a=dt(s),r[a]=V(o)?o:{type:o};t.props=r}}function no(t,n){var e=t.inject;if(!!e){var r=t.inject={};if(Array.isArray(e))for(var i=0;i<e.length;i++)r[e[i]]={from:e[i]};else if(V(e))for(var o in e){var a=e[o];r[o]=V(a)?N({from:o},a):{from:a}}}}function ro(t){var n=t.directives;if(n)for(var e in n){var r=n[e];typeof r=="function"&&(n[e]={bind:r,update:r})}}function gt(t,n,e){if(typeof n=="function"&&(n=n.options),eo(n,e),no(n,e),ro(n),!n._base&&(n.extends&&(t=gt(t,n.extends,e)),n.mixins))for(var r=0,i=n.mixins.length;r<i;r++)t=gt(t,n.mixins[r],e);var o={},a;for(a in t)s(a);for(a in n)B(t,a)||s(a);function s(l){var d=J[l]||to;o[l]=d(t[l],n[l],e,l)}return o}function Le(t,n,e,r){if(typeof e=="string"){var i=t[n];if(B(i,e))return i[e];var o=dt(e);if(B(i,o))return i[o];var a=Bi(o);if(B(i,a))return i[a];var s=i[e]||i[o]||i[a];return s}}function Ve(t,n,e,r){var i=n[t],o=!B(e,t),a=e[t],s=qn(Boolean,i.type);if(s>-1){if(o&&!B(i,"default"))a=!1;else if(a===""||a===Vt(t)){var l=qn(String,i.type);(l<0||s<l)&&(a=!0)}}if(a===void 0){a=io(r,i,t);var d=Be;ot(!0),ht(a),ot(d)}return a}function io(t,n,e){if(!!B(n,"default")){var r=n.default;return t&&t.$options.propsData&&t.$options.propsData[e]===void 0&&t._props[e]!==void 0?t._props[e]:typeof r=="function"&&Ue(n.type)!=="Function"?r.call(t):r}}var oo=/^\s*function (\w+)/;function Ue(t){var n=t&&t.toString().match(oo);return n?n[1]:""}function zn(t,n){return Ue(t)===Ue(n)}function qn(t,n){if(!Array.isArray(n))return zn(n,t)?0:-1;for(var e=0,r=n.length;e<r;e++)if(zn(n[e],t))return e;return-1}function yt(t,n,e){Pt();try{if(n)for(var r=n;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=i[o].call(r,t,n,e)===!1;if(a)return}catch(s){Jn(s,r,"errorCaptured hook")}}Jn(t,n,e)}finally{jt()}}function Ht(t,n,e,r,i){var o;try{o=e?t.apply(n,e):t.call(n),o&&!o._isVue&&Oe(o)&&!o._handled&&(o.catch(function(a){return yt(a,r,i+" (Promise/async)")}),o._handled=!0)}catch(a){yt(a,r,i)}return o}function Jn(t,n,e){if(F.errorHandler)try{return F.errorHandler.call(null,t,n,e)}catch(r){r!==t&&Wn(r,null,"config.errorHandler")}Wn(t,n,e)}function Wn(t,n,e){if((U||ke)&&typeof console!="undefined")console.error(t);else throw t}var Pe=!1,je=[],Re=!1;function ce(){Re=!1;var t=je.slice(0);je.length=0;for(var n=0;n<t.length;n++)t[n]()}var Rt;typeof Promise!="undefined"&&Nt(Promise)?(Yn=Promise.resolve(),Rt=function(){Yn.then(ce),Xi&&setTimeout($)},Pe=!0):!St&&typeof MutationObserver!="undefined"&&(Nt(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")?(Xt=1,Kn=new MutationObserver(ce),Xe=document.createTextNode(String(Xt)),Kn.observe(Xe,{characterData:!0}),Rt=function(){Xt=(Xt+1)%2,Xe.data=String(Xt)},Pe=!0):typeof setImmediate!="undefined"&&Nt(setImmediate)?Rt=function(){setImmediate(ce)}:Rt=function(){setTimeout(ce,0)};var Yn,Xt,Kn,Xe;function Ge(t,n){var e;if(je.push(function(){if(t)try{t.call(n)}catch(r){yt(r,n,"nextTick")}else e&&e(n)}),Re||(Re=!0,Rt()),!t&&typeof Promise!="undefined")return new Promise(function(r){e=r})}var tr=new Ut;function fe(t){Ze(t,tr),tr.clear()}function Ze(t,n){var e,r,i=Array.isArray(t);if(!(!i&&!Q(t)||Object.isFrozen(t)||t instanceof I)){if(t.__ob__){var o=t.__ob__.dep.id;if(n.has(o))return;n.add(o)}if(i)for(e=t.length;e--;)Ze(t[e],n);else for(r=Object.keys(t),e=r.length;e--;)Ze(t[r[e]],n)}}var er=ut(function(t){var n=t.charAt(0)==="&";t=n?t.slice(1):t;var e=t.charAt(0)==="~";t=e?t.slice(1):t;var r=t.charAt(0)==="!";return t=r?t.slice(1):t,{name:t,once:e,capture:r,passive:n}});function ze(t,n){function e(){var r=arguments,i=e.fns;if(Array.isArray(i))for(var o=i.slice(),a=0;a<o.length;a++)Ht(o[a],null,r,n,"v-on handler");else return Ht(i,null,arguments,n,"v-on handler")}return e.fns=t,e}function nr(t,n,e,r,i,o){var a,s,l,d,p;for(a in t)s=l=t[a],d=n[a],p=er(a),y(l)||(y(d)?(y(l.fns)&&(l=t[a]=ze(l,o)),k(p.once)&&(l=t[a]=i(p.name,l,p.capture)),e(p.name,l,p.capture,p.passive,p.params)):l!==d&&(d.fns=l,t[a]=d));for(a in n)y(t[a])&&(p=er(a),r(p.name,n[a],p.capture))}function at(t,n,e){t instanceof I&&(t=t.data.hook||(t.data.hook={}));var r,i=t[n];function o(){e.apply(this,arguments),K(r.fns,o)}y(i)?r=ze([o]):u(i.fns)&&k(i.merged)?(r=i,r.fns.push(o)):r=ze([i,o]),r.merged=!0,t[n]=r}function ao(t,n,e){var r=n.options.props;if(!y(r)){var i={},o=t.attrs,a=t.props;if(u(o)||u(a))for(var s in r){var l=Vt(s);if(!1)var d;rr(i,a,s,l,!0)||rr(i,o,s,l,!1)}return i}}function rr(t,n,e,r,i){if(u(n)){if(B(n,e))return t[e]=n[e],i||delete n[e],!0;if(B(n,r))return t[e]=n[r],i||delete n[r],!0}return!1}function so(t){for(var n=0;n<t.length;n++)if(Array.isArray(t[n]))return Array.prototype.concat.apply([],t);return t}function qe(t){return It(t)?[kt(t)]:Array.isArray(t)?ir(t):void 0}function Gt(t){return u(t)&&u(t.text)&&ki(t.isComment)}function ir(t,n){var e=[],r,i,o,a;for(r=0;r<t.length;r++)i=t[r],!(y(i)||typeof i=="boolean")&&(o=e.length-1,a=e[o],Array.isArray(i)?i.length>0&&(i=ir(i,(n||"")+"_"+r),Gt(i[0])&&Gt(a)&&(e[o]=kt(a.text+i[0].text),i.shift()),e.push.apply(e,i)):It(i)?Gt(a)?e[o]=kt(a.text+i):i!==""&&e.push(kt(i)):Gt(i)&&Gt(a)?e[o]=kt(a.text+i.text):(k(t._isVList)&&u(i.tag)&&y(i.key)&&u(n)&&(i.key="__vlist"+n+"_"+r+"__"),e.push(i)));return e}function lo(t){var n=t.$options.provide;n&&(t._provided=typeof n=="function"?n.call(t):n)}function po(t){var n=or(t.$options.inject,t);n&&(ot(!1),Object.keys(n).forEach(function(e){_t(t,e,n[e])}),ot(!0))}function or(t,n){if(t){for(var e=Object.create(null),r=ae?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if(o!=="__ob__"){for(var a=t[o].from,s=n;s;){if(s._provided&&B(s._provided,a)){e[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[o]){var l=t[o].default;e[o]=typeof l=="function"?l.call(n):l}}}return e}}function Je(t,n){if(!t||!t.length)return{};for(var e={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,(o.context===n||o.fnContext===n)&&a&&a.slot!=null){var s=a.slot,l=e[s]||(e[s]=[]);o.tag==="template"?l.push.apply(l,o.children||[]):l.push(o)}else(e.default||(e.default=[])).push(o)}for(var d in e)e[d].every(co)&&delete e[d];return e}function co(t){return t.isComment&&!t.asyncFactory||t.text===" "}function Zt(t){return t.isComment&&t.asyncFactory}function ue(t,n,e){var r,i=Object.keys(n).length>0,o=t?!!t.$stable:!i,a=t&&t.$key;if(!t)r={};else{if(t._normalized)return t._normalized;if(o&&e&&e!==q&&a===e.$key&&!i&&!e.$hasNormal)return e;r={};for(var s in t)t[s]&&s[0]!=="$"&&(r[s]=fo(n,s,t[s]))}for(var l in n)l in r||(r[l]=uo(n,l));return t&&Object.isExtensible(t)&&(t._normalized=r),Tt(r,"$stable",o),Tt(r,"$key",a),Tt(r,"$hasNormal",i),r}function fo(t,n,e){var r=function(){var i=arguments.length?e.apply(null,arguments):e({});i=i&&typeof i=="object"&&!Array.isArray(i)?[i]:qe(i);var o=i&&i[0];return i&&(!o||i.length===1&&o.isComment&&!Zt(o))?void 0:i};return e.proxy&&Object.defineProperty(t,n,{get:r,enumerable:!0,configurable:!0}),r}function uo(t,n){return function(){return t[n]}}function vo(t,n){var e,r,i,o,a;if(Array.isArray(t)||typeof t=="string")for(e=new Array(t.length),r=0,i=t.length;r<i;r++)e[r]=n(t[r],r);else if(typeof t=="number")for(e=new Array(t),r=0;r<t;r++)e[r]=n(r+1,r);else if(Q(t))if(ae&&t[Symbol.iterator]){e=[];for(var s=t[Symbol.iterator](),l=s.next();!l.done;)e.push(n(l.value,e.length)),l=s.next()}else for(o=Object.keys(t),e=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],e[r]=n(t[a],a,r);return u(e)||(e=[]),e._isVList=!0,e}function mo(t,n,e,r){var i=this.$scopedSlots[t],o;i?(e=e||{},r&&(e=N(N({},r),e)),o=i(e)||(typeof n=="function"?n():n)):o=this.$slots[t]||(typeof n=="function"?n():n);var a=e&&e.slot;return a?this.$createElement("template",{slot:a},o):o}function ho(t){return Le(this.$options,"filters",t,!0)||Fn}function ar(t,n){return Array.isArray(t)?t.indexOf(n)===-1:t!==n}function _o(t,n,e,r,i){var o=F.keyCodes[n]||e;return i&&r&&!F.keyCodes[n]?ar(i,r):o?ar(o,t):r?Vt(r)!==n:t===void 0}function go(t,n,e,r,i){if(e&&Q(e)){Array.isArray(e)&&(e=Bn(e));var o,a=function(l){if(l==="class"||l==="style"||Mi(l))o=t;else{var d=t.attrs&&t.attrs.type;o=r||F.mustUseProp(n,d,l)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var p=dt(l),m=Vt(l);if(!(p in o)&&!(m in o)&&(o[l]=e[l],i)){var h=t.on||(t.on={});h["update:"+l]=function(x){e[l]=x}}};for(var s in e)a(s)}return t}function yo(t,n){var e=this._staticTrees||(this._staticTrees=[]),r=e[t];return r&&!n||(r=e[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),sr(r,"__static__"+t,!1)),r}function Co(t,n,e){return sr(t,"__once__"+n+(e?"_"+e:""),!0),t}function sr(t,n,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&typeof t[r]!="string"&&lr(t[r],n+"_"+r,e);else lr(t,n,e)}function lr(t,n,e){t.isStatic=!0,t.key=n,t.isOnce=e}function Ao(t,n){if(n&&V(n)){var e=t.on=t.on?N({},t.on):{};for(var r in n){var i=e[r],o=n[r];e[r]=i?[].concat(i,o):o}}return t}function pr(t,n,e,r){n=n||{$stable:!e};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?pr(o,n,e):o&&(o.proxy&&(o.fn.proxy=!0),n[o.key]=o.fn)}return r&&(n.$key=r),n}function xo(t,n){for(var e=0;e<n.length;e+=2){var r=n[e];typeof r=="string"&&r&&(t[n[e]]=n[e+1])}return t}function bo(t,n){return typeof t=="string"?n+t:t}function cr(t){t._o=Co,t._n=Lt,t._s=Hi,t._l=vo,t._t=mo,t._q=vt,t._i=$n,t._m=yo,t._f=ho,t._k=_o,t._b=go,t._v=kt,t._e=mt,t._u=pr,t._g=Ao,t._d=xo,t._p=bo}function We(t,n,e,r,i){var o=this,a=i.options,s;B(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var l=k(a._compiled),d=!l;this.data=t,this.props=n,this.children=e,this.parent=r,this.listeners=t.on||q,this.injections=or(a.inject,r),this.slots=function(){return o.$slots||ue(t.scopedSlots,o.$slots=Je(e,r)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ue(t.scopedSlots,this.slots())}}),l&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=ue(t.scopedSlots,this.$slots)),a._scopeId?this._c=function(p,m,h,x){var T=de(s,p,m,h,x,d);return T&&!Array.isArray(T)&&(T.fnScopeId=a._scopeId,T.fnContext=r),T}:this._c=function(p,m,h,x){return de(s,p,m,h,x,d)}}cr(We.prototype);function Eo(t,n,e,r,i){var o=t.options,a={},s=o.props;if(u(s))for(var l in s)a[l]=Ve(l,s,n||q);else u(e.attrs)&&ur(a,e.attrs),u(e.props)&&ur(a,e.props);var d=new We(e,a,i,r,t),p=o.render.call(null,d._c,d);if(p instanceof I)return fr(p,e,d.parent,o,d);if(Array.isArray(p)){for(var m=qe(p)||[],h=new Array(m.length),x=0;x<m.length;x++)h[x]=fr(m[x],e,d.parent,o,d);return h}}function fr(t,n,e,r,i){var o=Qe(t);return o.fnContext=e,o.fnOptions=r,n.slot&&((o.data||(o.data={})).slot=n.slot),o}function ur(t,n){for(var e in n)t[dt(e)]=n[e]}var Ye={init:function(n,e){if(n.componentInstance&&!n.componentInstance._isDestroyed&&n.data.keepAlive){var r=n;Ye.prepatch(r,r)}else{var i=n.componentInstance=wo(n,Ct);i.$mount(e?n.elm:void 0,e)}},prepatch:function(n,e){var r=e.componentOptions,i=e.componentInstance=n.componentInstance;Ro(i,r.propsData,r.listeners,e,r.children)},insert:function(n){var e=n.context,r=n.componentInstance;r._isMounted||(r._isMounted=!0,Z(r,"mounted")),n.data.keepAlive&&(e._isMounted?zo(r):en(r,!0))},destroy:function(n){var e=n.componentInstance;e._isDestroyed||(n.data.keepAlive?Ar(e,!0):e.$destroy())}},dr=Object.keys(Ye);function vr(t,n,e,r,i){if(!y(t)){var o=e.$options._base;if(Q(t)&&(t=o.extend(t)),typeof t=="function"){var a;if(y(t.cid)&&(a=t,t=Bo(a,o),t===void 0))return Qo(a,n,e,r,i);n=n||{},pn(t),u(n.model)&&Oo(t.options,n);var s=ao(n,t,i);if(k(t.options.functional))return Eo(t,s,n,e,r);var l=n.on;if(n.on=n.nativeOn,k(t.options.abstract)){var d=n.slot;n={},d&&(n.slot=d)}To(n);var p=t.options.name||i,m=new I("vue-component-"+t.cid+(p?"-"+p:""),n,void 0,void 0,void 0,e,{Ctor:t,propsData:s,listeners:l,tag:i,children:r},a);return m}}}function wo(t,n){var e={_isComponent:!0,_parentVnode:t,parent:n},r=t.data.inlineTemplate;return u(r)&&(e.render=r.render,e.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(e)}function To(t){for(var n=t.hook||(t.hook={}),e=0;e<dr.length;e++){var r=dr[e],i=n[r],o=Ye[r];i!==o&&!(i&&i._merged)&&(n[r]=i?So(o,i):o)}}function So(t,n){var e=function(r,i){t(r,i),n(r,i)};return e._merged=!0,e}function Oo(t,n){var e=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[e]=n.model.value;var i=n.on||(n.on={}),o=i[r],a=n.model.callback;u(o)?(Array.isArray(o)?o.indexOf(a)===-1:o!==a)&&(i[r]=[a].concat(o)):i[r]=a}var No=1,mr=2;function de(t,n,e,r,i,o){return(Array.isArray(e)||It(e))&&(i=r,r=e,e=void 0),k(o)&&(i=mr),ko(t,n,e,r,i)}function ko(t,n,e,r,i){if(u(e)&&u(e.__ob__)||(u(e)&&u(e.is)&&(n=e.is),!n))return mt();Array.isArray(r)&&typeof r[0]=="function"&&(e=e||{},e.scopedSlots={default:r[0]},r.length=0),i===mr?r=qe(r):i===No&&(r=so(r));var o,a;if(typeof n=="string"){var s;a=t.$vnode&&t.$vnode.ns||F.getTagNamespace(n),F.isReservedTag(n)?o=new I(F.parsePlatformTagName(n),e,r,void 0,void 0,t):(!e||!e.pre)&&u(s=Le(t.$options,"components",n))?o=vr(s,e,t,r,n):o=new I(n,e,r,void 0,void 0,t)}else o=vr(n,e,t,r);return Array.isArray(o)?o:u(o)?(u(a)&&hr(o,a),u(e)&&Ho(e),o):mt()}function hr(t,n,e){if(t.ns=n,t.tag==="foreignObject"&&(n=void 0,e=!0),u(t.children))for(var r=0,i=t.children.length;r<i;r++){var o=t.children[r];u(o.tag)&&(y(o.ns)||k(e)&&o.tag!=="svg")&&hr(o,n,e)}}function Ho(t){Q(t.style)&&fe(t.style),Q(t.class)&&fe(t.class)}function Mo(t){t._vnode=null,t._staticTrees=null;var n=t.$options,e=t.$vnode=n._parentVnode,r=e&&e.context;t.$slots=Je(n._renderChildren,r),t.$scopedSlots=q,t._c=function(o,a,s,l){return de(t,o,a,s,l,!1)},t.$createElement=function(o,a,s,l){return de(t,o,a,s,l,!0)};var i=e&&e.data;_t(t,"$attrs",i&&i.attrs||q,null,!0),_t(t,"$listeners",n._parentListeners||q,null,!0)}var Ke=null;function Do(t){cr(t.prototype),t.prototype.$nextTick=function(n){return Ge(n,this)},t.prototype._render=function(){var n=this,e=n.$options,r=e.render,i=e._parentVnode;i&&(n.$scopedSlots=ue(i.data.scopedSlots,n.$slots,n.$scopedSlots)),n.$vnode=i;var o;try{Ke=n,o=r.call(n._renderProxy,n.$createElement)}catch(a){if(yt(a,n,"render"),!1)try{}catch(s){}else o=n._vnode}finally{Ke=null}return Array.isArray(o)&&o.length===1&&(o=o[0]),o instanceof I||(o=mt()),o.parent=i,o}}function tn(t,n){return(t.__esModule||ae&&t[Symbol.toStringTag]==="Module")&&(t=t.default),Q(t)?n.extend(t):t}function Qo(t,n,e,r,i){var o=mt();return o.asyncFactory=t,o.asyncMeta={data:n,context:e,children:r,tag:i},o}function Bo(t,n){if(k(t.error)&&u(t.errorComp))return t.errorComp;if(u(t.resolved))return t.resolved;var e=Ke;if(e&&u(t.owners)&&t.owners.indexOf(e)===-1&&t.owners.push(e),k(t.loading)&&u(t.loadingComp))return t.loadingComp;if(e&&!u(t.owners)){var r=t.owners=[e],i=!0,o=null,a=null;e.$on("hook:destroyed",function(){return K(r,e)});var s=function(m){for(var h=0,x=r.length;h<x;h++)r[h].$forceUpdate();m&&(r.length=0,o!==null&&(clearTimeout(o),o=null),a!==null&&(clearTimeout(a),a=null))},l=ee(function(m){t.resolved=tn(m,n),i?r.length=0:s(!0)}),d=ee(function(m){u(t.errorComp)&&(t.error=!0,s(!0))}),p=t(l,d);return Q(p)&&(Oe(p)?y(t.resolved)&&p.then(l,d):Oe(p.component)&&(p.component.then(l,d),u(p.error)&&(t.errorComp=tn(p.error,n)),u(p.loading)&&(t.loadingComp=tn(p.loading,n),p.delay===0?t.loading=!0:o=setTimeout(function(){o=null,y(t.resolved)&&y(t.error)&&(t.loading=!0,s(!1))},p.delay||200)),u(p.timeout)&&(a=setTimeout(function(){a=null,y(t.resolved)&&d(null)},p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function _r(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var e=t[n];if(u(e)&&(u(e.componentOptions)||Zt(e)))return e}}function Fo(t){t._events=Object.create(null),t._hasHookEvent=!1;var n=t.$options._parentListeners;n&&gr(t,n)}var zt;function $o(t,n){zt.$on(t,n)}function Io(t,n){zt.$off(t,n)}function Lo(t,n){var e=zt;return function r(){var i=n.apply(null,arguments);i!==null&&e.$off(t,r)}}function gr(t,n,e){zt=t,nr(n,e||{},$o,Io,Lo,t),zt=void 0}function Vo(t){var n=/^hook:/;t.prototype.$on=function(e,r){var i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)i.$on(e[o],r);else(i._events[e]||(i._events[e]=[])).push(r),n.test(e)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(e,r){var i=this;function o(){i.$off(e,o),r.apply(i,arguments)}return o.fn=r,i.$on(e,o),i},t.prototype.$off=function(e,r){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(e)){for(var o=0,a=e.length;o<a;o++)i.$off(e[o],r);return i}var s=i._events[e];if(!s)return i;if(!r)return i._events[e]=null,i;for(var l,d=s.length;d--;)if(l=s[d],l===r||l.fn===r){s.splice(d,1);break}return i},t.prototype.$emit=function(e){var r=this;if(!1)var i;var o=r._events[e];if(o){o=o.length>1?Ne(o):o;for(var a=Ne(arguments,1),s='event handler for "'+e+'"',l=0,d=o.length;l<d;l++)Ht(o[l],r,a,r,s)}return r}}var Ct=null;function yr(t){var n=Ct;return Ct=t,function(){Ct=n}}function Uo(t){var n=t.$options,e=n.parent;if(e&&!n.abstract){for(;e.$options.abstract&&e.$parent;)e=e.$parent;e.$children.push(t)}t.$parent=e,t.$root=e?e.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Po(t){t.prototype._update=function(n,e){var r=this,i=r.$el,o=r._vnode,a=yr(r);r._vnode=n,o?r.$el=r.__patch__(o,n):r.$el=r.__patch__(r.$el,n,e,!1),a(),i&&(i.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},t.prototype.$forceUpdate=function(){var n=this;n._watcher&&n._watcher.update()},t.prototype.$destroy=function(){var n=this;if(!n._isBeingDestroyed){Z(n,"beforeDestroy"),n._isBeingDestroyed=!0;var e=n.$parent;e&&!e._isBeingDestroyed&&!n.$options.abstract&&K(e.$children,n),n._watcher&&n._watcher.teardown();for(var r=n._watchers.length;r--;)n._watchers[r].teardown();n._data.__ob__&&n._data.__ob__.vmCount--,n._isDestroyed=!0,n.__patch__(n._vnode,null),Z(n,"destroyed"),n.$off(),n.$el&&(n.$el.__vue__=null),n.$vnode&&(n.$vnode.parent=null)}}}function jo(t,n,e){t.$el=n,t.$options.render||(t.$options.render=mt),Z(t,"beforeMount");var r;return r=function(){t._update(t._render(),e)},new z(t,r,$,{before:function(){t._isMounted&&!t._isDestroyed&&Z(t,"beforeUpdate")}},!0),e=!1,t.$vnode==null&&(t._isMounted=!0,Z(t,"mounted")),t}function Ro(t,n,e,r,i){var o=r.data.scopedSlots,a=t.$scopedSlots,s=!!(o&&!o.$stable||a!==q&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),l=!!(i||t.$options._renderChildren||s);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data.attrs||q,t.$listeners=e||q,n&&t.$options.props){ot(!1);for(var d=t._props,p=t.$options._propKeys||[],m=0;m<p.length;m++){var h=p[m],x=t.$options.props;d[h]=Ve(h,x,n,t)}ot(!0),t.$options.propsData=n}e=e||q;var T=t.$options._parentListeners;t.$options._parentListeners=e,gr(t,e,T),l&&(t.$slots=Je(i,r.context),t.$forceUpdate())}function Cr(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function en(t,n){if(n){if(t._directInactive=!1,Cr(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var e=0;e<t.$children.length;e++)en(t.$children[e]);Z(t,"activated")}}function Ar(t,n){if(!(n&&(t._directInactive=!0,Cr(t)))&&!t._inactive){t._inactive=!0;for(var e=0;e<t.$children.length;e++)Ar(t.$children[e]);Z(t,"deactivated")}}function Z(t,n){Pt();var e=t.$options[n],r=n+" hook";if(e)for(var i=0,o=e.length;i<o;i++)Ht(e[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+n),jt()}var tt=[],nn=[],ve={};var rn=!1,on=!1,Mt=0;function Xo(){Mt=tt.length=nn.length=0,ve={},rn=on=!1}var xr=0,an=Date.now;U&&!St&&(me=window.performance,me&&typeof me.now=="function"&&an()>document.createEvent("Event").timeStamp&&(an=function(){return me.now()}));var me;function Go(){xr=an(),on=!0;var t,n;for(tt.sort(function(i,o){return i.id-o.id}),Mt=0;Mt<tt.length;Mt++)t=tt[Mt],t.before&&t.before(),n=t.id,ve[n]=null,t.run();var e=nn.slice(),r=tt.slice();Xo(),qo(e),Zo(r),oe&&F.devtools&&oe.emit("flush")}function Zo(t){for(var n=t.length;n--;){var e=t[n],r=e.vm;r._watcher===e&&r._isMounted&&!r._isDestroyed&&Z(r,"updated")}}function zo(t){t._inactive=!1,nn.push(t)}function qo(t){for(var n=0;n<t.length;n++)t[n]._inactive=!0,en(t[n],!0)}function Jo(t){var n=t.id;if(ve[n]==null){if(ve[n]=!0,!on)tt.push(t);else{for(var e=tt.length-1;e>Mt&&tt[e].id>t.id;)e--;tt.splice(e+1,0,t)}rn||(rn=!0,Ge(Go))}}var Wo=0,z=function(n,e,r,i,o){this.vm=n,o&&(n._watcher=this),n._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++Wo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Ut,this.newDepIds=new Ut,this.expression="",typeof e=="function"?this.getter=e:(this.getter=ji(e),this.getter||(this.getter=$)),this.value=this.lazy?void 0:this.get()};z.prototype.get=function(){Pt(this);var n,e=this.vm;try{n=this.getter.call(e,e)}catch(r){if(this.user)yt(r,e,'getter for watcher "'+this.expression+'"');else throw r}finally{this.deep&&fe(n),jt(),this.cleanupDeps()}return n};z.prototype.addDep=function(n){var e=n.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(n),this.depIds.has(e)||n.addSub(this))};z.prototype.cleanupDeps=function(){for(var n=this.deps.length;n--;){var e=this.deps[n];this.newDepIds.has(e.id)||e.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0};z.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Jo(this)};z.prototype.run=function(){if(this.active){var n=this.get();if(n!==this.value||Q(n)||this.deep){var e=this.value;if(this.value=n,this.user){var r='callback for watcher "'+this.expression+'"';Ht(this.cb,this.vm,[n,e],this.vm,r)}else this.cb.call(this.vm,n,e)}}};z.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};z.prototype.depend=function(){for(var n=this.deps.length;n--;)this.deps[n].depend()};z.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||K(this.vm._watchers,this);for(var n=this.deps.length;n--;)this.deps[n].removeSub(this);this.active=!1}};var st={enumerable:!0,configurable:!0,get:$,set:$};function sn(t,n,e){st.get=function(){return this[n][e]},st.set=function(i){this[n][e]=i},Object.defineProperty(t,e,st)}function Yo(t){t._watchers=[];var n=t.$options;n.props&&Ko(t,n.props),n.methods&&ia(t,n.methods),n.data?ta(t):ht(t._data={},!0),n.computed&&ra(t,n.computed),n.watch&&n.watch!==Me&&oa(t,n.watch)}function Ko(t,n){var e=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||ot(!1);var a=function(l){i.push(l);var d=Ve(l,n,e,t);if(!1)var p;else _t(r,l,d);l in t||sn(t,"_props",l)};for(var s in n)a(s);ot(!0)}function ta(t){var n=t.$options.data;n=t._data=typeof n=="function"?ea(n,t):n||{},V(n)||(n={});for(var e=Object.keys(n),r=t.$options.props,i=t.$options.methods,o=e.length;o--;){var a=e[o];r&&B(r,a)||Ui(a)||sn(t,"_data",a)}ht(n,!0)}function ea(t,n){Pt();try{return t.call(n,n)}catch(e){return yt(e,n,"data()"),{}}finally{jt()}}var na={lazy:!0};function ra(t,n){var e=t._computedWatchers=Object.create(null),r=ie();for(var i in n){var o=n[i],a=typeof o=="function"?o:o.get;r||(e[i]=new z(t,a||$,$,na)),i in t||br(t,i,o)}}function br(t,n,e){var r=!ie();typeof e=="function"?(st.get=r?Er(n):wr(e),st.set=$):(st.get=e.get?r&&e.cache!==!1?Er(n):wr(e.get):$,st.set=e.set||$),Object.defineProperty(t,n,st)}function Er(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),P.target&&e.depend(),e.value}}function wr(t){return function(){return t.call(this,this)}}function ia(t,n){var e=t.$options.props;for(var r in n)t[r]=typeof n[r]!="function"?$:Li(n[r],t)}function oa(t,n){for(var e in n){var r=n[e];if(Array.isArray(r))for(var i=0;i<r.length;i++)ln(t,e,r[i]);else ln(t,e,r)}}function ln(t,n,e,r){return V(e)&&(r=e,e=e.handler),typeof e=="string"&&(e=t[e]),t.$watch(n,e,r)}function aa(t){var n={};n.get=function(){return this._data};var e={};e.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",n),Object.defineProperty(t.prototype,"$props",e),t.prototype.$set=Fe,t.prototype.$delete=Gn,t.prototype.$watch=function(r,i,o){var a=this;if(V(i))return ln(a,r,i,o);o=o||{},o.user=!0;var s=new z(a,r,i,o);if(o.immediate){var l='callback for immediate watcher "'+s.expression+'"';Pt(),Ht(i,a,[s.value],a,l),jt()}return function(){s.teardown()}}}var sa=0;function la(t){t.prototype._init=function(n){var e=this;e._uid=sa++;var r,i;e._isVue=!0,n&&n._isComponent?pa(e,n):e.$options=gt(pn(e.constructor),n||{},e),e._renderProxy=e,e._self=e,Uo(e),Fo(e),Mo(e),Z(e,"beforeCreate"),po(e),Yo(e),lo(e),Z(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pa(t,n){var e=t.$options=Object.create(t.constructor.options),r=n._parentVnode;e.parent=n.parent,e._parentVnode=r;var i=r.componentOptions;e.propsData=i.propsData,e._parentListeners=i.listeners,e._renderChildren=i.children,e._componentTag=i.tag,n.render&&(e.render=n.render,e.staticRenderFns=n.staticRenderFns)}function pn(t){var n=t.options;if(t.super){var e=pn(t.super),r=t.superOptions;if(e!==r){t.superOptions=e;var i=ca(t);i&&N(t.extendOptions,i),n=t.options=gt(e,t.extendOptions),n.name&&(n.components[n.name]=t)}}return n}function ca(t){var n,e=t.options,r=t.sealedOptions;for(var i in e)e[i]!==r[i]&&(n||(n={}),n[i]=e[i]);return n}function H(t){this._init(t)}la(H);aa(H);Vo(H);Po(H);Do(H);function fa(t){t.use=function(n){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(n)>-1)return this;var r=Ne(arguments,1);return r.unshift(this),typeof n.install=="function"?n.install.apply(n,r):typeof n=="function"&&n.apply(null,r),e.push(n),this}}function ua(t){t.mixin=function(n){return this.options=gt(this.options,n),this}}function da(t){t.cid=0;var n=1;t.extend=function(e){e=e||{};var r=this,i=r.cid,o=e._Ctor||(e._Ctor={});if(o[i])return o[i];var a=e.name||r.options.name,s=function(d){this._init(d)};return s.prototype=Object.create(r.prototype),s.prototype.constructor=s,s.cid=n++,s.options=gt(r.options,e),s.super=r,s.options.props&&va(s),s.options.computed&&ma(s),s.extend=r.extend,s.mixin=r.mixin,s.use=r.use,ne.forEach(function(l){s[l]=r[l]}),a&&(s.options.components[a]=s),s.superOptions=r.options,s.extendOptions=e,s.sealedOptions=N({},s.options),o[i]=s,s}}function va(t){var n=t.options.props;for(var e in n)sn(t.prototype,"_props",e)}function ma(t){var n=t.options.computed;for(var e in n)br(t.prototype,e,n[e])}function ha(t){ne.forEach(function(n){t[n]=function(e,r){return r?(n==="component"&&V(r)&&(r.name=r.name||e,r=this.options._base.extend(r)),n==="directive"&&typeof r=="function"&&(r={bind:r,update:r}),this.options[n+"s"][e]=r,r):this.options[n+"s"][e]}})}function Tr(t){return t&&(t.Ctor.options.name||t.tag)}function he(t,n){return Array.isArray(t)?t.indexOf(n)>-1:typeof t=="string"?t.split(",").indexOf(n)>-1:Dn(t)?t.test(n):!1}function Sr(t,n){var e=t.cache,r=t.keys,i=t._vnode;for(var o in e){var a=e[o];if(a){var s=a.name;s&&!n(s)&&cn(e,o,r,i)}}}function cn(t,n,e,r){var i=t[n];i&&(!r||i.tag!==r.tag)&&i.componentInstance.$destroy(),t[n]=null,K(e,n)}var Or=[String,RegExp,Array],_a={name:"keep-alive",abstract:!0,props:{include:Or,exclude:Or,max:[String,Number]},methods:{cacheVNode:function(){var n=this,e=n.cache,r=n.keys,i=n.vnodeToCache,o=n.keyToCache;if(i){var a=i.tag,s=i.componentInstance,l=i.componentOptions;e[o]={name:Tr(l),tag:a,componentInstance:s},r.push(o),this.max&&r.length>parseInt(this.max)&&cn(e,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var n in this.cache)cn(this.cache,n,this.keys)},mounted:function(){var n=this;this.cacheVNode(),this.$watch("include",function(e){Sr(n,function(r){return he(e,r)})}),this.$watch("exclude",function(e){Sr(n,function(r){return!he(e,r)})})},updated:function(){this.cacheVNode()},render:function(){var n=this.$slots.default,e=_r(n),r=e&&e.componentOptions;if(r){var i=Tr(r),o=this,a=o.include,s=o.exclude;if(a&&(!i||!he(a,i))||s&&i&&he(s,i))return e;var l=this,d=l.cache,p=l.keys,m=e.key==null?r.Ctor.cid+(r.tag?"::"+r.tag:""):e.key;d[m]?(e.componentInstance=d[m].componentInstance,K(p,m),p.push(m)):(this.vnodeToCache=e,this.keyToCache=m),e.data.keepAlive=!0}return e||n&&n[0]}},ga={KeepAlive:_a};function ya(t){var n={};n.get=function(){return F},Object.defineProperty(t,"config",n),t.util={warn:jn,extend:N,mergeOptions:gt,defineReactive:_t},t.set=Fe,t.delete=Gn,t.nextTick=Ge,t.observable=function(e){return ht(e),e},t.options=Object.create(null),ne.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,N(t.options.components,ga),fa(t),ua(t),da(t),ha(t)}ya(H);Object.defineProperty(H.prototype,"$isServer",{get:ie});Object.defineProperty(H.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(H,"FunctionalRenderContext",{value:We});H.version="2.6.14";var Ca=G("style,class"),Aa=G("input,textarea,option,select,progress"),xa=function(t,n,e){return e==="value"&&Aa(t)&&n!=="button"||e==="selected"&&t==="option"||e==="checked"&&t==="input"||e==="muted"&&t==="video"},Nr=G("contenteditable,draggable,spellcheck"),ba=G("events,caret,typing,plaintext-only"),Ea=function(t,n){return _e(n)||n==="false"?"false":t==="contenteditable"&&ba(n)?n:"true"},wa=G("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),fn="http://www.w3.org/1999/xlink",un=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},kr=function(t){return un(t)?t.slice(6,t.length):""},_e=function(t){return t==null||t===!1};function Ta(t){for(var n=t.data,e=t,r=t;u(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(n=Hr(r.data,n));for(;u(e=e.parent);)e&&e.data&&(n=Hr(n,e.data));return Sa(n.staticClass,n.class)}function Hr(t,n){return{staticClass:dn(t.staticClass,n.staticClass),class:u(t.class)?[t.class,n.class]:n.class}}function Sa(t,n){return u(t)||u(n)?dn(t,vn(n)):""}function dn(t,n){return t?n?t+" "+n:t:n||""}function vn(t){return Array.isArray(t)?Oa(t):Q(t)?Na(t):typeof t=="string"?t:""}function Oa(t){for(var n="",e,r=0,i=t.length;r<i;r++)u(e=vn(t[r]))&&e!==""&&(n&&(n+=" "),n+=e);return n}function Na(t){var n="";for(var e in t)t[e]&&(n&&(n+=" "),n+=e);return n}var ka={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ha=G("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),mn=G("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Mr=function(t){return Ha(t)||mn(t)};function Ma(t){if(mn(t))return"svg";if(t==="math")return"math"}var ge=Object.create(null);function Da(t){if(!U)return!0;if(Mr(t))return!1;if(t=t.toLowerCase(),ge[t]!=null)return ge[t];var n=document.createElement(t);return t.indexOf("-")>-1?ge[t]=n.constructor===window.HTMLUnknownElement||n.constructor===window.HTMLElement:ge[t]=/HTMLUnknownElement/.test(n.toString())}var hn=G("text,number,password,search,email,tel,url");function Qa(t){if(typeof t=="string"){var n=document.querySelector(t);return n||document.createElement("div")}else return t}function Ba(t,n){var e=document.createElement(t);return t!=="select"||n.data&&n.data.attrs&&n.data.attrs.multiple!==void 0&&e.setAttribute("multiple","multiple"),e}function Fa(t,n){return document.createElementNS(ka[t],n)}function $a(t){return document.createTextNode(t)}function Ia(t){return document.createComment(t)}function La(t,n,e){t.insertBefore(n,e)}function Va(t,n){t.removeChild(n)}function Ua(t,n){t.appendChild(n)}function Pa(t){return t.parentNode}function ja(t){return t.nextSibling}function Ra(t){return t.tagName}function Xa(t,n){t.textContent=n}function Ga(t,n){t.setAttribute(n,"")}var Za=Object.freeze({createElement:Ba,createElementNS:Fa,createTextNode:$a,createComment:Ia,insertBefore:La,removeChild:Va,appendChild:Ua,parentNode:Pa,nextSibling:ja,tagName:Ra,setTextContent:Xa,setStyleScope:Ga}),za={create:function(n,e){Dt(e)},update:function(n,e){n.data.ref!==e.data.ref&&(Dt(n,!0),Dt(e))},destroy:function(n){Dt(n,!0)}};function Dt(t,n){var e=t.data.ref;if(!!u(e)){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;n?Array.isArray(o[e])?K(o[e],i):o[e]===i&&(o[e]=void 0):t.data.refInFor?Array.isArray(o[e])?o[e].indexOf(i)<0&&o[e].push(i):o[e]=[i]:o[e]=i}}var At=new I("",{},[]),qt=["create","activate","update","remove","destroy"];function xt(t,n){return t.key===n.key&&t.asyncFactory===n.asyncFactory&&(t.tag===n.tag&&t.isComment===n.isComment&&u(t.data)===u(n.data)&&qa(t,n)||k(t.isAsyncPlaceholder)&&y(n.asyncFactory.error))}function qa(t,n){if(t.tag!=="input")return!0;var e,r=u(e=t.data)&&u(e=e.attrs)&&e.type,i=u(e=n.data)&&u(e=e.attrs)&&e.type;return r===i||hn(r)&&hn(i)}function Ja(t,n,e){var r,i,o={};for(r=n;r<=e;++r)i=t[r].key,u(i)&&(o[i]=r);return o}function Wa(t){var n,e,r={},i=t.modules,o=t.nodeOps;for(n=0;n<qt.length;++n)for(r[qt[n]]=[],e=0;e<i.length;++e)u(i[e][qt[n]])&&r[qt[n]].push(i[e][qt[n]]);function a(f){return new I(o.tagName(f).toLowerCase(),{},[],void 0,f)}function s(f,c){function v(){--v.listeners==0&&l(f)}return v.listeners=c,v}function l(f){var c=o.parentNode(f);u(c)&&o.removeChild(c,f)}function d(f,c){return!c&&!f.ns&&!(F.ignoredElements.length&&F.ignoredElements.some(function(v){return Dn(v)?v.test(f.tag):v===f.tag}))&&F.isUnknownElement(f.tag)}var p=0;function m(f,c,v,_,g,b,C){if(u(f.elm)&&u(b)&&(f=b[C]=Qe(f)),f.isRootInsert=!g,!h(f,c,v,_)){var A=f.data,O=f.children,E=f.tag;u(E)?(f.elm=f.ns?o.createElementNS(f.ns,E):o.createElement(E,f),pt(f),lt(f,O,c),u(A)&&L(f,c),S(v,f.elm,_)):k(f.isComment)?(f.elm=o.createComment(f.text),S(v,f.elm,_)):(f.elm=o.createTextNode(f.text),S(v,f.elm,_))}}function h(f,c,v,_){var g=f.data;if(u(g)){var b=u(f.componentInstance)&&g.keepAlive;if(u(g=g.hook)&&u(g=g.init)&&g(f,!1),u(f.componentInstance))return x(f,c),S(v,f.elm,_),k(b)&&T(f,c,v,_),!0}}function x(f,c){u(f.data.pendingInsert)&&(c.push.apply(c,f.data.pendingInsert),f.data.pendingInsert=null),f.elm=f.componentInstance.$el,R(f)?(L(f,c),pt(f)):(Dt(f),c.push(f))}function T(f,c,v,_){for(var g,b=f;b.componentInstance;)if(b=b.componentInstance._vnode,u(g=b.data)&&u(g=g.transition)){for(g=0;g<r.activate.length;++g)r.activate[g](At,b);c.push(b);break}S(v,f.elm,_)}function S(f,c,v){u(f)&&(u(v)?o.parentNode(v)===f&&o.insertBefore(f,c,v):o.appendChild(f,c))}function lt(f,c,v){if(Array.isArray(c))for(var _=0;_<c.length;++_)m(c[_],v,f.elm,null,!0,c,_);else It(f.text)&&o.appendChild(f.elm,o.createTextNode(String(f.text)))}function R(f){for(;f.componentInstance;)f=f.componentInstance._vnode;return u(f.tag)}function L(f,c){for(var v=0;v<r.create.length;++v)r.create[v](At,f);n=f.data.hook,u(n)&&(u(n.create)&&n.create(At,f),u(n.insert)&&c.push(f))}function pt(f){var c;if(u(c=f.fnScopeId))o.setStyleScope(f.elm,c);else for(var v=f;v;)u(c=v.context)&&u(c=c.$options._scopeId)&&o.setStyleScope(f.elm,c),v=v.parent;u(c=Ct)&&c!==f.context&&c!==f.fnContext&&u(c=c.$options._scopeId)&&o.setStyleScope(f.elm,c)}function Et(f,c,v,_,g,b){for(;_<=g;++_)m(v[_],b,f,c,!1,v,_)}function ct(f){var c,v,_=f.data;if(u(_))for(u(c=_.hook)&&u(c=c.destroy)&&c(f),c=0;c<r.destroy.length;++c)r.destroy[c](f);if(u(c=f.children))for(v=0;v<f.children.length;++v)ct(f.children[v])}function W(f,c,v){for(;c<=v;++c){var _=f[c];u(_)&&(u(_.tag)?(X(_),ct(_)):l(_.elm))}}function X(f,c){if(u(c)||u(f.data)){var v,_=r.remove.length+1;for(u(c)?c.listeners+=_:c=s(f.elm,_),u(v=f.componentInstance)&&u(v=v._vnode)&&u(v.data)&&X(v,c),v=0;v<r.remove.length;++v)r.remove[v](f,c);u(v=f.data.hook)&&u(v=v.remove)?v(f,c):c()}else l(f.elm)}function Ft(f,c,v,_,g){for(var b=0,C=0,A=c.length-1,O=c[0],E=c[A],w=v.length-1,M=v[0],j=v[w],ft,rt,it,Mn,Te=!g;b<=A&&C<=w;)y(O)?O=c[++b]:y(E)?E=c[--A]:xt(O,M)?(Y(O,M,_,v,C),O=c[++b],M=v[++C]):xt(E,j)?(Y(E,j,_,v,w),E=c[--A],j=v[--w]):xt(O,j)?(Y(O,j,_,v,w),Te&&o.insertBefore(f,O.elm,o.nextSibling(E.elm)),O=c[++b],j=v[--w]):xt(E,M)?(Y(E,M,_,v,C),Te&&o.insertBefore(f,E.elm,O.elm),E=c[--A],M=v[++C]):(y(ft)&&(ft=Ja(c,b,A)),rt=u(M.key)?ft[M.key]:Yt(M,c,b,A),y(rt)?m(M,_,f,O.elm,!1,v,C):(it=c[rt],xt(it,M)?(Y(it,M,_,v,C),c[rt]=void 0,Te&&o.insertBefore(f,it.elm,O.elm)):m(M,_,f,O.elm,!1,v,C)),M=v[++C]);b>A?(Mn=y(v[w+1])?null:v[w+1].elm,Et(f,Mn,v,C,w,_)):C>w&&W(c,b,A)}function Ee(f){for(var c={},v=0;v<f.length;v++){var _=f[v],g=_.key;u(g)&&(c[g]?jn("Duplicate keys detected: '"+g+"'. This may cause an update error.",_.context):c[g]=!0)}}function Yt(f,c,v,_){for(var g=v;g<_;g++){var b=c[g];if(u(b)&&xt(f,b))return g}}function Y(f,c,v,_,g,b){if(f!==c){u(c.elm)&&u(_)&&(c=_[g]=Qe(c));var C=c.elm=f.elm;if(k(f.isAsyncPlaceholder)){u(c.asyncFactory.resolved)?wt(f.elm,c,v):c.isAsyncPlaceholder=!0;return}if(k(c.isStatic)&&k(f.isStatic)&&c.key===f.key&&(k(c.isCloned)||k(c.isOnce))){c.componentInstance=f.componentInstance;return}var A,O=c.data;u(O)&&u(A=O.hook)&&u(A=A.prepatch)&&A(f,c);var E=f.children,w=c.children;if(u(O)&&R(c)){for(A=0;A<r.update.length;++A)r.update[A](f,c);u(A=O.hook)&&u(A=A.update)&&A(f,c)}y(c.text)?u(E)&&u(w)?E!==w&&Ft(C,E,w,v,b):u(w)?(u(f.text)&&o.setTextContent(C,""),Et(C,null,w,0,w.length-1,v)):u(E)?W(E,0,E.length-1):u(f.text)&&o.setTextContent(C,""):f.text!==c.text&&o.setTextContent(C,c.text),u(O)&&u(A=O.hook)&&u(A=A.postpatch)&&A(f,c)}}function nt(f,c,v){if(k(v)&&u(f.parent))f.parent.data.pendingInsert=c;else for(var _=0;_<c.length;++_)c[_].data.hook.insert(c[_])}var we=!1,Kt=G("attrs,class,staticClass,staticStyle,key");function wt(f,c,v,_){var g,b=c.tag,C=c.data,A=c.children;if(_=_||C&&C.pre,c.elm=f,k(c.isComment)&&u(c.asyncFactory))return c.isAsyncPlaceholder=!0,!0;if(u(C)&&(u(g=C.hook)&&u(g=g.init)&&g(c,!0),u(g=c.componentInstance)))return x(c,v),!0;if(u(b)){if(u(A))if(!f.hasChildNodes())lt(c,A,v);else if(u(g=C)&&u(g=g.domProps)&&u(g=g.innerHTML)){if(g!==f.innerHTML)return!1}else{for(var O=!0,E=f.firstChild,w=0;w<A.length;w++){if(!E||!wt(E,A[w],v,_)){O=!1;break}E=E.nextSibling}if(!O||E)return!1}if(u(C)){var M=!1;for(var j in C)if(!Kt(j)){M=!0,L(c,v);break}!M&&C.class&&fe(C.class)}}else f.data!==c.text&&(f.data=c.text);return!0}function $t(f,c,v){return u(c.tag)?c.tag.indexOf("vue-component")===0||!d(c,v)&&c.tag.toLowerCase()===(f.tagName&&f.tagName.toLowerCase()):f.nodeType===(c.isComment?8:3)}return function(c,v,_,g){if(y(v)){u(c)&&ct(c);return}var b=!1,C=[];if(y(c))b=!0,m(v,C);else{var A=u(c.nodeType);if(!A&&xt(c,v))Y(c,v,C,null,null,g);else{if(A){if(c.nodeType===1&&c.hasAttribute(In)&&(c.removeAttribute(In),_=!0),k(_)&&wt(c,v,C))return nt(v,C,!0),c;c=a(c)}var O=c.elm,E=o.parentNode(O);if(m(v,C,O._leaveCb?null:E,o.nextSibling(O)),u(v.parent))for(var w=v.parent,M=R(v);w;){for(var j=0;j<r.destroy.length;++j)r.destroy[j](w);if(w.elm=v.elm,M){for(var ft=0;ft<r.create.length;++ft)r.create[ft](At,w);var rt=w.data.hook.insert;if(rt.merged)for(var it=1;it<rt.fns.length;it++)rt.fns[it]()}else Dt(w);w=w.parent}u(E)?W([c],0,0):u(c.tag)&&ct(c)}}return nt(v,C,b),v.elm}}var Ya={create:_n,update:_n,destroy:function(n){_n(n,At)}};function _n(t,n){(t.data.directives||n.data.directives)&&Ka(t,n)}function Ka(t,n){var e=t===At,r=n===At,i=Dr(t.data.directives,t.context),o=Dr(n.data.directives,n.context),a=[],s=[],l,d,p;for(l in o)d=i[l],p=o[l],d?(p.oldValue=d.value,p.oldArg=d.arg,Jt(p,"update",n,t),p.def&&p.def.componentUpdated&&s.push(p)):(Jt(p,"bind",n,t),p.def&&p.def.inserted&&a.push(p));if(a.length){var m=function(){for(var h=0;h<a.length;h++)Jt(a[h],"inserted",n,t)};e?at(n,"insert",m):m()}if(s.length&&at(n,"postpatch",function(){for(var h=0;h<s.length;h++)Jt(s[h],"componentUpdated",n,t)}),!e)for(l in i)o[l]||Jt(i[l],"unbind",t,t,r)}var ts=Object.create(null);function Dr(t,n){var e=Object.create(null);if(!t)return e;var r,i;for(r=0;r<t.length;r++)i=t[r],i.modifiers||(i.modifiers=ts),e[es(i)]=i,i.def=Le(n.$options,"directives",i.name,!0);return e}function es(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Jt(t,n,e,r,i){var o=t.def&&t.def[n];if(o)try{o(e.elm,t,e,r,i)}catch(a){yt(a,e.context,"directive "+t.name+" "+n+" hook")}}var ns=[za,Ya];function Qr(t,n){var e=n.componentOptions;if(!(u(e)&&e.Ctor.options.inheritAttrs===!1)&&!(y(t.data.attrs)&&y(n.data.attrs))){var r,i,o,a=n.elm,s=t.data.attrs||{},l=n.data.attrs||{};u(l.__ob__)&&(l=n.data.attrs=N({},l));for(r in l)i=l[r],o=s[r],o!==i&&Br(a,r,i,n.data.pre);(St||He)&&l.value!==s.value&&Br(a,"value",l.value);for(r in s)y(l[r])&&(un(r)?a.removeAttributeNS(fn,kr(r)):Nr(r)||a.removeAttribute(r))}}function Br(t,n,e,r){r||t.tagName.indexOf("-")>-1?Fr(t,n,e):wa(n)?_e(e)?t.removeAttribute(n):(e=n==="allowfullscreen"&&t.tagName==="EMBED"?"true":n,t.setAttribute(n,e)):Nr(n)?t.setAttribute(n,Ea(n,e)):un(n)?_e(e)?t.removeAttributeNS(fn,kr(n)):t.setAttributeNS(fn,n,e):Fr(t,n,e)}function Fr(t,n,e){if(_e(e))t.removeAttribute(n);else{if(St&&!Ot&&t.tagName==="TEXTAREA"&&n==="placeholder"&&e!==""&&!t.__ieph){var r=function(i){i.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(n,e)}}var rs={create:Qr,update:Qr};function $r(t,n){var e=n.elm,r=n.data,i=t.data;if(!(y(r.staticClass)&&y(r.class)&&(y(i)||y(i.staticClass)&&y(i.class)))){var o=Ta(n),a=e._transitionClasses;u(a)&&(o=dn(o,vn(a))),o!==e._prevClass&&(e.setAttribute("class",o),e._prevClass=o)}}var is={create:$r,update:$r},gn="__r",yn="__c";function os(t){if(u(t[gn])){var n=St?"change":"input";t[n]=[].concat(t[gn],t[n]||[]),delete t[gn]}u(t[yn])&&(t.change=[].concat(t[yn],t.change||[]),delete t[yn])}var Wt;function as(t,n,e){var r=Wt;return function i(){var o=n.apply(null,arguments);o!==null&&Ir(t,i,e,r)}}var ss=Pe&&!(Un&&Number(Un[1])<=53);function ls(t,n,e,r){if(ss){var i=xr,o=n;n=o._wrapper=function(a){if(a.target===a.currentTarget||a.timeStamp>=i||a.timeStamp<=0||a.target.ownerDocument!==document)return o.apply(this,arguments)}}Wt.addEventListener(t,n,Pn?{capture:e,passive:r}:e)}function Ir(t,n,e,r){(r||Wt).removeEventListener(t,n._wrapper||n,e)}function Lr(t,n){if(!(y(t.data.on)&&y(n.data.on))){var e=n.data.on||{},r=t.data.on||{};Wt=n.elm,os(e),nr(e,r,ls,Ir,as,n.context),Wt=void 0}}var ps={create:Lr,update:Lr},ye;function Vr(t,n){if(!(y(t.data.domProps)&&y(n.data.domProps))){var e,r,i=n.elm,o=t.data.domProps||{},a=n.data.domProps||{};u(a.__ob__)&&(a=n.data.domProps=N({},a));for(e in o)e in a||(i[e]="");for(e in a){if(r=a[e],e==="textContent"||e==="innerHTML"){if(n.children&&(n.children.length=0),r===o[e])continue;i.childNodes.length===1&&i.removeChild(i.childNodes[0])}if(e==="value"&&i.tagName!=="PROGRESS"){i._value=r;var s=y(r)?"":String(r);cs(i,s)&&(i.value=s)}else if(e==="innerHTML"&&mn(i.tagName)&&y(i.innerHTML)){ye=ye||document.createElement("div"),ye.innerHTML="<svg>"+r+"</svg>";for(var l=ye.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;l.firstChild;)i.appendChild(l.firstChild)}else if(r!==o[e])try{i[e]=r}catch{}}}}function cs(t,n){return!t.composing&&(t.tagName==="OPTION"||fs(t,n)||us(t,n))}function fs(t,n){var e=!0;try{e=document.activeElement!==t}catch{}return e&&t.value!==n}function us(t,n){var e=t.value,r=t._vModifiers;if(u(r)){if(r.number)return Lt(e)!==Lt(n);if(r.trim)return e.trim()!==n.trim()}return e!==n}var ds={create:Vr,update:Vr},vs=ut(function(t){var n={},e=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(e).forEach(function(i){if(i){var o=i.split(r);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n});function Cn(t){var n=Ur(t.style);return t.staticStyle?N(t.staticStyle,n):n}function Ur(t){return Array.isArray(t)?Bn(t):typeof t=="string"?vs(t):t}function ms(t,n){var e={},r;if(n)for(var i=t;i.componentInstance;)i=i.componentInstance._vnode,i&&i.data&&(r=Cn(i.data))&&N(e,r);(r=Cn(t.data))&&N(e,r);for(var o=t;o=o.parent;)o.data&&(r=Cn(o.data))&&N(e,r);return e}var hs=/^--/,Pr=/\s*!important$/,jr=function(t,n,e){if(hs.test(n))t.style.setProperty(n,e);else if(Pr.test(e))t.style.setProperty(Vt(n),e.replace(Pr,""),"important");else{var r=_s(n);if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)t.style[r]=e[i];else t.style[r]=e}},Rr=["Webkit","Moz","ms"],Ce,_s=ut(function(t){if(Ce=Ce||document.createElement("div").style,t=dt(t),t!=="filter"&&t in Ce)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),e=0;e<Rr.length;e++){var r=Rr[e]+n;if(r in Ce)return r}});function Xr(t,n){var e=n.data,r=t.data;if(!(y(e.staticStyle)&&y(e.style)&&y(r.staticStyle)&&y(r.style))){var i,o,a=n.elm,s=r.staticStyle,l=r.normalizedStyle||r.style||{},d=s||l,p=Ur(n.data.style)||{};n.data.normalizedStyle=u(p.__ob__)?N({},p):p;var m=ms(n,!0);for(o in d)y(m[o])&&jr(a,o,"");for(o in m)i=m[o],i!==d[o]&&jr(a,o,i??"")}}var gs={create:Xr,update:Xr},Gr=/\s+/;function Zr(t,n){if(!(!n||!(n=n.trim())))if(t.classList)n.indexOf(" ")>-1?n.split(Gr).forEach(function(r){return t.classList.add(r)}):t.classList.add(n);else{var e=" "+(t.getAttribute("class")||"")+" ";e.indexOf(" "+n+" ")<0&&t.setAttribute("class",(e+n).trim())}}function zr(t,n){if(!(!n||!(n=n.trim())))if(t.classList)n.indexOf(" ")>-1?n.split(Gr).forEach(function(i){return t.classList.remove(i)}):t.classList.remove(n),t.classList.length||t.removeAttribute("class");else{for(var e=" "+(t.getAttribute("class")||"")+" ",r=" "+n+" ";e.indexOf(r)>=0;)e=e.replace(r," ");e=e.trim(),e?t.setAttribute("class",e):t.removeAttribute("class")}}function qr(t){if(!!t){if(typeof t=="object"){var n={};return t.css!==!1&&N(n,Jr(t.name||"v")),N(n,t),n}else if(typeof t=="string")return Jr(t)}}var Jr=ut(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Wr=U&&!Ot,Qt="transition",An="animation",Ae="transition",xe="transitionend",xn="animation",Yr="animationend";Wr&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Ae="WebkitTransition",xe="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(xn="WebkitAnimation",Yr="webkitAnimationEnd"));var Kr=U?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ti(t){Kr(function(){Kr(t)})}function bt(t,n){var e=t._transitionClasses||(t._transitionClasses=[]);e.indexOf(n)<0&&(e.push(n),Zr(t,n))}function et(t,n){t._transitionClasses&&K(t._transitionClasses,n),zr(t,n)}function ei(t,n,e){var r=ni(t,n),i=r.type,o=r.timeout,a=r.propCount;if(!i)return e();var s=i===Qt?xe:Yr,l=0,d=function(){t.removeEventListener(s,p),e()},p=function(m){m.target===t&&++l>=a&&d()};setTimeout(function(){l<a&&d()},o+1),t.addEventListener(s,p)}var ys=/\b(transform|all)(,|$)/;function ni(t,n){var e=window.getComputedStyle(t),r=(e[Ae+"Delay"]||"").split(", "),i=(e[Ae+"Duration"]||"").split(", "),o=ri(r,i),a=(e[xn+"Delay"]||"").split(", "),s=(e[xn+"Duration"]||"").split(", "),l=ri(a,s),d,p=0,m=0;n===Qt?o>0&&(d=Qt,p=o,m=i.length):n===An?l>0&&(d=An,p=l,m=s.length):(p=Math.max(o,l),d=p>0?o>l?Qt:An:null,m=d?d===Qt?i.length:s.length:0);var h=d===Qt&&ys.test(e[Ae+"Property"]);return{type:d,timeout:p,propCount:m,hasTransform:h}}function ri(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max.apply(null,n.map(function(e,r){return ii(e)+ii(t[r])}))}function ii(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function bn(t,n){var e=t.elm;u(e._leaveCb)&&(e._leaveCb.cancelled=!0,e._leaveCb());var r=qr(t.data.transition);if(!y(r)&&!(u(e._enterCb)||e.nodeType!==1)){for(var i=r.css,o=r.type,a=r.enterClass,s=r.enterToClass,l=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,h=r.beforeEnter,x=r.enter,T=r.afterEnter,S=r.enterCancelled,lt=r.beforeAppear,R=r.appear,L=r.afterAppear,pt=r.appearCancelled,Et=r.duration,ct=Ct,W=Ct.$vnode;W&&W.parent;)ct=W.context,W=W.parent;var X=!ct._isMounted||!t.isRootInsert;if(!(X&&!R&&R!=="")){var Ft=X&&d?d:a,Ee=X&&m?m:l,Yt=X&&p?p:s,Y=X&&lt||h,nt=X&&typeof R=="function"?R:x,we=X&&L||T,Kt=X&&pt||S,wt=Lt(Q(Et)?Et.enter:Et),$t=i!==!1&&!Ot,f=En(nt),c=e._enterCb=ee(function(){$t&&(et(e,Yt),et(e,Ee)),c.cancelled?($t&&et(e,Ft),Kt&&Kt(e)):we&&we(e),e._enterCb=null});t.data.show||at(t,"insert",function(){var v=e.parentNode,_=v&&v._pending&&v._pending[t.key];_&&_.tag===t.tag&&_.elm._leaveCb&&_.elm._leaveCb(),nt&&nt(e,c)}),Y&&Y(e),$t&&(bt(e,Ft),bt(e,Ee),ti(function(){et(e,Ft),c.cancelled||(bt(e,Yt),f||(ai(wt)?setTimeout(c,wt):ei(e,o,c)))})),t.data.show&&(n&&n(),nt&&nt(e,c)),!$t&&!f&&c()}}}function oi(t,n){var e=t.elm;u(e._enterCb)&&(e._enterCb.cancelled=!0,e._enterCb());var r=qr(t.data.transition);if(y(r)||e.nodeType!==1)return n();if(u(e._leaveCb))return;var i=r.css,o=r.type,a=r.leaveClass,s=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,p=r.leave,m=r.afterLeave,h=r.leaveCancelled,x=r.delayLeave,T=r.duration,S=i!==!1&&!Ot,lt=En(p),R=Lt(Q(T)?T.leave:T),L=e._leaveCb=ee(function(){e.parentNode&&e.parentNode._pending&&(e.parentNode._pending[t.key]=null),S&&(et(e,s),et(e,l)),L.cancelled?(S&&et(e,a),h&&h(e)):(n(),m&&m(e)),e._leaveCb=null});x?x(pt):pt();function pt(){L.cancelled||(!t.data.show&&e.parentNode&&((e.parentNode._pending||(e.parentNode._pending={}))[t.key]=t),d&&d(e),S&&(bt(e,a),bt(e,l),ti(function(){et(e,a),L.cancelled||(bt(e,s),lt||(ai(R)?setTimeout(L,R):ei(e,o,L)))})),p&&p(e,L),!S&&!lt&&L())}}function ai(t){return typeof t=="number"&&!isNaN(t)}function En(t){if(y(t))return!1;var n=t.fns;return u(n)?En(Array.isArray(n)?n[0]:n):(t._length||t.length)>1}function si(t,n){n.data.show!==!0&&bn(n)}var Cs=U?{create:si,activate:si,remove:function(n,e){n.data.show!==!0?oi(n,e):e()}}:{},As=[rs,is,ps,ds,gs,Cs],xs=As.concat(ns),bs=Wa({nodeOps:Za,modules:xs});Ot&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&wn(t,"input")});var li={inserted:function(n,e,r,i){r.tag==="select"?(i.elm&&!i.elm._vOptions?at(r,"postpatch",function(){li.componentUpdated(n,e,r)}):pi(n,e,r.context),n._vOptions=[].map.call(n.options,be)):(r.tag==="textarea"||hn(n.type))&&(n._vModifiers=e.modifiers,e.modifiers.lazy||(n.addEventListener("compositionstart",Es),n.addEventListener("compositionend",ui),n.addEventListener("change",ui),Ot&&(n.vmodel=!0)))},componentUpdated:function(n,e,r){if(r.tag==="select"){pi(n,e,r.context);var i=n._vOptions,o=n._vOptions=[].map.call(n.options,be);if(o.some(function(s,l){return!vt(s,i[l])})){var a=n.multiple?e.value.some(function(s){return fi(s,o)}):e.value!==e.oldValue&&fi(e.value,o);a&&wn(n,"change")}}}};function pi(t,n,e){ci(t,n,e),(St||He)&&setTimeout(function(){ci(t,n,e)},0)}function ci(t,n,e){var r=n.value,i=t.multiple;if(!(i&&!Array.isArray(r))){for(var o,a,s=0,l=t.options.length;s<l;s++)if(a=t.options[s],i)o=$n(r,be(a))>-1,a.selected!==o&&(a.selected=o);else if(vt(be(a),r)){t.selectedIndex!==s&&(t.selectedIndex=s);return}i||(t.selectedIndex=-1)}}function fi(t,n){return n.every(function(e){return!vt(e,t)})}function be(t){return"_value"in t?t._value:t.value}function Es(t){t.target.composing=!0}function ui(t){!t.target.composing||(t.target.composing=!1,wn(t.target,"input"))}function wn(t,n){var e=document.createEvent("HTMLEvents");e.initEvent(n,!0,!0),t.dispatchEvent(e)}function Tn(t){return t.componentInstance&&(!t.data||!t.data.transition)?Tn(t.componentInstance._vnode):t}var ws={bind:function(n,e,r){var i=e.value;r=Tn(r);var o=r.data&&r.data.transition,a=n.__vOriginalDisplay=n.style.display==="none"?"":n.style.display;i&&o?(r.data.show=!0,bn(r,function(){n.style.display=a})):n.style.display=i?a:"none"},update:function(n,e,r){var i=e.value,o=e.oldValue;if(!i!=!o){r=Tn(r);var a=r.data&&r.data.transition;a?(r.data.show=!0,i?bn(r,function(){n.style.display=n.__vOriginalDisplay}):oi(r,function(){n.style.display="none"})):n.style.display=i?n.__vOriginalDisplay:"none"}},unbind:function(n,e,r,i,o){o||(n.style.display=n.__vOriginalDisplay)}},Ts={model:li,show:ws},di={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Sn(t){var n=t&&t.componentOptions;return n&&n.Ctor.options.abstract?Sn(_r(n.children)):t}function vi(t){var n={},e=t.$options;for(var r in e.propsData)n[r]=t[r];var i=e._parentListeners;for(var o in i)n[dt(o)]=i[o];return n}function mi(t,n){if(/\d-keep-alive$/.test(n.tag))return t("keep-alive",{props:n.componentOptions.propsData})}function Ss(t){for(;t=t.parent;)if(t.data.transition)return!0}function Os(t,n){return n.key===t.key&&n.tag===t.tag}var Ns=function(t){return t.tag||Zt(t)},ks=function(t){return t.name==="show"},Hs={name:"transition",props:di,abstract:!0,render:function(n){var e=this,r=this.$slots.default;if(!!r&&(r=r.filter(Ns),!!r.length)){var i=this.mode,o=r[0];if(Ss(this.$vnode))return o;var a=Sn(o);if(!a)return o;if(this._leaving)return mi(n,o);var s="__transition-"+this._uid+"-";a.key=a.key==null?a.isComment?s+"comment":s+a.tag:It(a.key)?String(a.key).indexOf(s)===0?a.key:s+a.key:a.key;var l=(a.data||(a.data={})).transition=vi(this),d=this._vnode,p=Sn(d);if(a.data.directives&&a.data.directives.some(ks)&&(a.data.show=!0),p&&p.data&&!Os(a,p)&&!Zt(p)&&!(p.componentInstance&&p.componentInstance._vnode.isComment)){var m=p.data.transition=N({},l);if(i==="out-in")return this._leaving=!0,at(m,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),mi(n,o);if(i==="in-out"){if(Zt(a))return d;var h,x=function(){h()};at(l,"afterEnter",x),at(l,"enterCancelled",x),at(m,"delayLeave",function(T){h=T})}}return o}}},hi=N({tag:String,moveClass:String},di);delete hi.mode;var Ms={props:hi,beforeMount:function(){var n=this,e=this._update;this._update=function(r,i){var o=yr(n);n.__patch__(n._vnode,n.kept,!1,!0),n._vnode=n.kept,o(),e.call(n,r,i)}},render:function(n){for(var e=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),i=this.prevChildren=this.children,o=this.$slots.default||[],a=this.children=[],s=vi(this),l=0;l<o.length;l++){var d=o[l];if(d.tag){if(d.key!=null&&String(d.key).indexOf("__vlist")!==0)a.push(d),r[d.key]=d,(d.data||(d.data={})).transition=s;else if(!1)var p,m}}if(i){for(var h=[],x=[],T=0;T<i.length;T++){var S=i[T];S.data.transition=s,S.data.pos=S.elm.getBoundingClientRect(),r[S.key]?h.push(S):x.push(S)}this.kept=n(e,null,h),this.removed=x}return n(e,null,a)},updated:function(){var n=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";!n.length||!this.hasMove(n[0].elm,e)||(n.forEach(Ds),n.forEach(Qs),n.forEach(Bs),this._reflow=document.body.offsetHeight,n.forEach(function(r){if(r.data.moved){var i=r.elm,o=i.style;bt(i,e),o.transform=o.WebkitTransform=o.transitionDuration="",i.addEventListener(xe,i._moveCb=function a(s){s&&s.target!==i||(!s||/transform$/.test(s.propertyName))&&(i.removeEventListener(xe,a),i._moveCb=null,et(i,e))})}}))},methods:{hasMove:function(n,e){if(!Wr)return!1;if(this._hasMove)return this._hasMove;var r=n.cloneNode();n._transitionClasses&&n._transitionClasses.forEach(function(o){zr(r,o)}),Zr(r,e),r.style.display="none",this.$el.appendChild(r);var i=ni(r);return this.$el.removeChild(r),this._hasMove=i.hasTransform}}};function Ds(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Qs(t){t.data.newPos=t.elm.getBoundingClientRect()}function Bs(t){var n=t.data.pos,e=t.data.newPos,r=n.left-e.left,i=n.top-e.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Fs={Transition:Hs,TransitionGroup:Ms};H.config.mustUseProp=xa;H.config.isReservedTag=Mr;H.config.isReservedAttr=Ca;H.config.getTagNamespace=Ma;H.config.isUnknownElement=Da;N(H.options.directives,Ts);N(H.options.components,Fs);H.prototype.__patch__=U?bs:$;H.prototype.$mount=function(t,n){return t=t&&U?Qa(t):void 0,jo(this,t,n)};U&&setTimeout(function(){F.devtools&&oe&&oe.emit("init",H)},0);var On=H;var $s={name:"Loader"},_i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t._m(0)},Is=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"loader"}),t._v(" "),e("span",[t._v("loading..")])])}];_i._withStripped=!0;var Ls=function(t){!t||t("data-v-2afd6a14_0",{source:`
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
`]},media:void 0})},Vs="data-v-2afd6a14",Us=void 0,Ps=!1;function js(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};p.__file=`<template>
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
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r;{let m;if(n&&(m=a?function(h){n.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){n.call(this,s(h))}),m!==void 0)if(p.functional){let h=p.render;p.render=function(T,S){return m.call(S),h(T,S)}}else{let h=p.beforeCreate;p.beforeCreate=h?[].concat(h,m):[m]}}return p}function Nn(){let t=Nn.styles||(Nn.styles={}),n=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=n?i.media||"default":r,a=t[o]||(t[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=i.source,l=a.ids.length;if(a.ids.push(r),n&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let d=document.head||document.getElementsByTagName("head")[0],p=a.element=document.createElement("style");p.type="text/css",i.media&&p.setAttribute("media",i.media),n&&(p.setAttribute("data-group",o),p.setAttribute("data-next-index","0")),d.appendChild(p)}if(n&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(s),p=a.element.childNodes;p[l]&&a.element.removeChild(p[l]),p.length?a.element.insertBefore(d,p[l]):a.element.appendChild(d)}}}}var Rs=js({render:_i,staticRenderFns:Is},Ls,$s,Vs,Ps,Us,!1,Nn,void 0,void 0),gi=Rs;var Xs={name:"Equation"},yi=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"100",viewBox:"0 -1458 11066 2416","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("path",{attrs:{id:"MJX-87-TEX-I-78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-SO-221A",d:"M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),t._v(" "),e("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[e("g",{attrs:{"data-mml-node":"math"}},[e("g",{attrs:{"data-mml-node":"mtable"}},[e("g",{attrs:{"data-mml-node":"mtr",transform:"translate(0, -262)"}},[e("g",{attrs:{"data-mml-node":"mtd"}},[e("g",{attrs:{"data-mml-node":"msub"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-31"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(975.6, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2C"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"msub",transform:"translate(1420.2, 0)"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(2673.6, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-3D"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3729.3, 0)"}},[e("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 787.5)"}},[e("g",{attrs:{"data-mml-node":"mo"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(778, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1429.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-B1"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"msqrt",transform:"translate(2429.4, 0)"}},[e("g",{attrs:{transform:"translate(1000, 0)"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(429, 0)"}},[e("g",{attrs:{"data-mml-node":"mo"}},[e("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v(`
                            \xB2
                          `)])])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1005, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(2005.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-34"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(2505.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(3034.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-63"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(0, 22.5)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-SO-221A"}})]),t._v(" "),e("rect",{attrs:{width:"3467.2",height:"60",x:"1000",y:"812.5"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mrow",transform:"translate(3153.8, -686)"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(500, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})])]),t._v(" "),e("rect",{attrs:{width:"7096.7",height:"60",x:"120",y:"220"}})])])])])])])])])},Gs=[];yi._withStripped=!0;var Zs=void 0,zs=void 0,qs=void 0,Js=!1;function Ws(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
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
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r,p}var Ys=Ws({render:yi,staticRenderFns:Gs},Zs,Xs,zs,Js,qs,!1,void 0,void 0,void 0),Ci=Ys;var Ks={},Ai=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"logo",attrs:{viewBox:"0 0 648 121",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z",fill:"url(#paint0_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z",fill:"url(#paint1_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z",fill:"url(#paint2_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z",fill:"url(#paint3_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z",fill:"url(#paint4_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z",fill:"url(#paint5_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z",fill:"url(#paint6_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z",fill:"url(#paint7_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z",fill:"url(#paint8_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z",fill:"url(#paint9_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z",fill:"url(#paint10_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M84.6285 34.026H92.6247V26.027H84.6285V34.026Z",fill:"url(#paint11_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z",fill:"url(#paint12_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M108.791 14.4016H123.17V0H108.791V14.4016Z",fill:"url(#paint13_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z",fill:"url(#paint14_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M97.811 33.2278H104.194V26.8426H97.811V33.2278Z",fill:"url(#paint15_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M110.803 27.953H120.395V18.3578H110.803V27.953Z",fill:"url(#paint16_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M106.623 38.0341H110.942V33.7137H106.623V38.0341Z",fill:"url(#paint17_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M114.792 42.4067H121.175V36.0388H114.792V42.4067Z",fill:"url(#paint18_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z",fill:"url(#paint19_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z",fill:"url(#paint20_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z",fill:"url(#paint21_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z",fill:"url(#paint22_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z",fill:"url(#paint23_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z",fill:"url(#paint24_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z",fill:"url(#paint25_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z",fill:"url(#paint26_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z",fill:"url(#paint27_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z",fill:"url(#paint28_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z",fill:"url(#paint29_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z",fill:"url(#paint30_linear_3_40)"}}),t._v(" "),e("defs",[e("linearGradient",{attrs:{id:"paint0_linear_3_40",x1:"16.2335",y1:"78.5655",x2:"90.5021",y2:"14.0713",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint1_linear_3_40",x1:"33.4419",y1:"98.3816",x2:"107.71",y2:"33.8874",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint2_linear_3_40",x1:"51.0435",y1:"118.651",x2:"125.312",y2:"54.1567",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint3_linear_3_40",x1:"62.0301",y1:"131.303",x2:"136.299",y2:"66.8084",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint4_linear_3_40",x1:"46.0063",y1:"112.85",x2:"120.275",y2:"48.3561",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint5_linear_3_40",x1:"22.5737",y1:"85.8663",x2:"96.8421",y2:"21.3722",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint6_linear_3_40",x1:"5.30527",y1:"65.9808",x2:"79.5737",y2:"1.48666",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint7_linear_3_40",x1:"39.9594",y1:"105.887",x2:"114.228",y2:"41.3928",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint8_linear_3_40",x1:"14.3736",y1:"76.4235",x2:"88.642",y2:"11.9294",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint9_linear_3_40",x1:"30.2892",y1:"94.7512",x2:"104.558",y2:"30.2571",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint10_linear_3_40",x1:"21.9139",y1:"85.1065",x2:"96.1823",y2:"20.6124",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint11_linear_3_40",x1:"23.3495",y1:"86.7596",x2:"97.618",y2:"22.2656",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint12_linear_3_40",x1:"11.5745",y1:"73.2003",x2:"85.8427",y2:"8.70587",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint13_linear_3_40",x1:"23.8107",y1:"87.2911",x2:"98.0794",y2:"22.7968",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint14_linear_3_40",x1:"23.6893",y1:"87.1514",x2:"97.958",y2:"22.657",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint15_linear_3_40",x1:"28.6723",y1:"92.8895",x2:"102.941",y2:"28.3951",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint16_linear_3_40",x1:"31.5413",y1:"96.193",x2:"105.81",y2:"31.6988",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint17_linear_3_40",x1:"34.9074",y1:"100.07",x2:"109.176",y2:"35.5752",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint18_linear_3_40",x1:"40.5234",y1:"106.536",x2:"114.792",y2:"42.0425",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint19_linear_3_40",x1:"17.9841",y1:"80.5813",x2:"92.2529",y2:"16.0874",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint20_linear_3_40",x1:"31.505",y1:"96.1513",x2:"105.774",y2:"31.6572",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint21_linear_3_40",x1:"39.6018",y1:"105.475",x2:"113.87",y2:"40.9808",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint22_linear_3_40",x1:"156.752",y1:"71.2438",x2:"644.928",y2:"71.2438",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint23_linear_3_40",x1:"156.752",y1:"80.3112",x2:"644.928",y2:"80.3112",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint24_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint25_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint26_linear_3_40",x1:"156.752",y1:"89.2923",x2:"644.928",y2:"89.2923",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint27_linear_3_40",x1:"156.752",y1:"71.3085",x2:"644.928",y2:"71.3085",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint28_linear_3_40",x1:"156.752",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint29_linear_3_40",x1:"156.752",y1:"71.287",x2:"644.928",y2:"71.287",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint30_linear_3_40",x1:"156.753",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])},t1=[];Ai._withStripped=!0;var e1=void 0,n1=void 0,r1=void 0,i1=!1;function o1(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
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
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r,p}var a1=o1({render:Ai,staticRenderFns:t1},e1,Ks,n1,i1,r1,!1,void 0,void 0,void 0),xi=a1;var s1={},bi=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"github",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])},l1=[];bi._withStripped=!0;var p1=void 0,c1=void 0,f1=void 0,u1=!1;function d1(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="github" viewBox="0 0 24 24">
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  </svg>
</template>
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r,p}var v1=d1({render:bi,staticRenderFns:l1},p1,s1,c1,u1,f1,!1,void 0,void 0,void 0),Ei=v1;function wi(){let t=0,n=0,e=0,r=50;do t=Math.floor(Math.random()*r+1),n=Math.floor(Math.random()*r),e=Math.floor(Math.random()*r),t==0&&(t=1);while(Bt(t,n,e)[0]%1!=0||Bt(t,n,e)[1]%1!=0||Bt(t,n,e)[0]<0||Bt(t,n,e)[1]<0);return[t,n,e]}function Bt(t,n,e){n>0&&(n=n*-1);let r,i,o=n*n-4*t*e;return o>0?(r=(-n+Math.sqrt(o))/(2*t),i=(-n-Math.sqrt(o))/(2*t)):o==0&&(r=i=-n/(2*t)),[r,i]}var kn;async function Ti(){let[t,n,e]=wi();kn=await import("./contract-util-KEHMUQU5.js"),await kn.deployContract(t,n,e);let[r,i]=Bt(t,n,e);return console.log(`deployed snapp with equation of form ${t}x\xB2 - ${n}x + ${e}; possible solutions would be x1 = ${r}, x2 = ${i}`),[t,n,e]}async function Si(t){return await kn.submitSolution(t)}var m1={name:"App",components:{Loader:gi,Equation:Ci,GithubLogo:Ei,ProxyLabsLogo:xi},data(){return{params:[0,0,0],isDeployed:!1,deploying:!1,showHint:!1,beingSubmited:!1,proposedSolution:0,atPage:0}},methods:{async submitSolution(){this.beingSubmited=!0;let t=await Si(this.proposedSolution);console.log(t),this.beingSubmited=!1},getEquation(){let t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`;return this.params[1]!=0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 = 0`),this.params[1]!=0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 - ${this.params[1]}x = 0`),t},next(){this.atPage++},async deploy(){this.deploying=!0,this.params=await Ti(),this.isDeployed=!0,this.deploying=!1}}},Oi=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("ProxyLabsLogo"),t._v(" "),e("GithubLogo")],1),t._v(" "),e("h1",{staticClass:"title"},[t._v("Mina Secret Exchange")]),t._v(" "),e("h3",{staticClass:"sub"},[t._v(`
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
      `)]),t._v(" "),e("Loader",{style:t.beingSubmited?"visibility: visible;":"visibility: hidden;"}),t._v(" "),e("div",{staticClass:"content",staticStyle:{display:"flex","margin-left":"30%","margin-right":"30%"}},[e("div",{staticClass:"left",staticStyle:{width:"50%"}},[e("div",{staticClass:"hint",style:t.showHint?"visibility: visible;":"visibility: hidden;"},[e("Equation")],1),t._v(" "),t.showHint?t._e():e("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"12px"},on:{click:function(r){t.showHint=!0}}},[e("span",[t._v("Show Hint")])]),t._v(" "),t.showHint?e("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"15px"},on:{click:function(r){t.showHint=!1}}},[e("span",[t._v("Hide Hint")])]):t._e()]),t._v(" "),e("div",{staticClass:"right",staticStyle:{width:"50%"}},[e("h3",[t._v("Possible solution")]),t._v(" "),e("span",{staticStyle:{"font-size":"3rem"}},[t._v("x = ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.proposedSolution,expression:"proposedSolution"}],staticClass:"submission",attrs:{type:"text"},domProps:{value:t.proposedSolution},on:{input:function(r){r.target.composing||(t.proposedSolution=r.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"submit-btn",staticStyle:{"margin-top":"20px"},on:{click:function(r){return t.submitSolution()}}},[e("span",[t._v("Submit")])])]),t._v(" "),e("br")])],1):t._e()])])},h1=[];Oi._withStripped=!0;var _1=function(t){!t||t("data-v-9ecb3edc_0",{source:`
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
`,map:{version:3,sources:["src/App.vue"],names:[],mappings:";AAwKA,qHAAA;AAEA;EACA,sCAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;;EAEA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;;;;EAIA,uBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;;EAEA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA;;yCAEA;AACA;AAEA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AACA;AAEA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,sCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AACA",file:"App.vue",sourcesContent:[`<template>
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
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Equation from "./components/Equation.vue";

import ProxyLabsLogo from "./components/ProxyLabsLogo.vue";
import GithubLogo from "./components/GithubLogo.vue";

import { init, submitSolution } from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    Loader,
    Equation,
    GithubLogo,
    ProxyLabsLogo,
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
    };
  },
  methods: {
    async submitSolution() {
      this.beingSubmited = true;
      let res = await submitSolution(this.proposedSolution);
      console.log(res);
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
`]},media:void 0})},g1=void 0,y1=void 0,C1=!1;function A1(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};p.__file=`<template>
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
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Equation from "./components/Equation.vue";

import ProxyLabsLogo from "./components/ProxyLabsLogo.vue";
import GithubLogo from "./components/GithubLogo.vue";

import { init, submitSolution } from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    Loader,
    Equation,
    GithubLogo,
    ProxyLabsLogo,
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
    };
  },
  methods: {
    async submitSolution() {
      this.beingSubmited = true;
      let res = await submitSolution(this.proposedSolution);
      console.log(res);
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
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r;{let m;if(n&&(m=a?function(h){n.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){n.call(this,s(h))}),m!==void 0)if(p.functional){let h=p.render;p.render=function(T,S){return m.call(S),h(T,S)}}else{let h=p.beforeCreate;p.beforeCreate=h?[].concat(h,m):[m]}}return p}function Hn(){let t=Hn.styles||(Hn.styles={}),n=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=n?i.media||"default":r,a=t[o]||(t[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=i.source,l=a.ids.length;if(a.ids.push(r),n&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let d=document.head||document.getElementsByTagName("head")[0],p=a.element=document.createElement("style");p.type="text/css",i.media&&p.setAttribute("media",i.media),n&&(p.setAttribute("data-group",o),p.setAttribute("data-next-index","0")),d.appendChild(p)}if(n&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(s),p=a.element.childNodes;p[l]&&a.element.removeChild(p[l]),p.length?a.element.insertBefore(d,p[l]):a.element.appendChild(d)}}}}var x1=A1({render:Oi,staticRenderFns:h1},_1,m1,g1,C1,y1,!1,Hn,void 0,void 0),Ni=x1;On.config.productionTip=!1;new On({render:t=>t(Ni)}).$mount("#app");
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
