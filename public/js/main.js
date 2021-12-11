var z=Object.freeze({});function y(t){return t==null}function u(t){return t!=null}function N(t){return t===!0}function wi(t){return t===!1}function Lt(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function D(t){return t!==null&&typeof t=="object"}var Ee=Object.prototype.toString;function X(t){return Ee.call(t)==="[object Object]"}function Hn(t){return Ee.call(t)==="[object RegExp]"}function On(t){var n=parseFloat(String(t));return n>=0&&Math.floor(n)===n&&isFinite(t)}function we(t){return u(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function Mi(t){return t==null?"":Array.isArray(t)||X(t)&&t.toString===Ee?JSON.stringify(t,null,2):String(t)}function $t(t){var n=parseFloat(t);return isNaN(n)?t:n}function j(t,n){for(var e=Object.create(null),r=t.split(","),i=0;i<r.length;i++)e[r[i]]=!0;return n?function(o){return e[o.toLowerCase()]}:function(o){return e[o]}}var T1=j("slot,component",!0),Si=j("key,ref,slot,slot-scope,is");function K(t,n){if(t.length){var e=t.indexOf(n);if(e>-1)return t.splice(e,1)}}var Ni=Object.prototype.hasOwnProperty;function B(t,n){return Ni.call(t,n)}function ut(t){var n=Object.create(null);return function(r){var i=n[r];return i||(n[r]=t(r))}}var ki=/-(\w)/g,dt=ut(function(t){return t.replace(ki,function(n,e){return e?e.toUpperCase():""})}),Hi=ut(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Oi=/\B([A-Z])/g,It=ut(function(t){return t.replace(Oi,"-$1").toLowerCase()});function Di(t,n){function e(r){var i=arguments.length;return i?i>1?t.apply(n,arguments):t.call(n,r):t.call(n)}return e._length=t.length,e}function Bi(t,n){return t.bind(n)}var Fi=Function.prototype.bind?Bi:Di;function Me(t,n){n=n||0;for(var e=t.length-n,r=new Array(e);e--;)r[e]=t[e+n];return r}function S(t,n){for(var e in n)t[e]=n[e];return t}function Dn(t){for(var n={},e=0;e<t.length;e++)t[e]&&S(n,t[e]);return n}function L(t,n,e){}var Kt=function(t,n,e){return!1},Bn=function(t){return t};function mt(t,n){if(t===n)return!0;var e=D(t),r=D(n);if(e&&r)try{var i=Array.isArray(t),o=Array.isArray(n);if(i&&o)return t.length===n.length&&t.every(function(l,d){return mt(l,n[d])});if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(!i&&!o){var a=Object.keys(t),s=Object.keys(n);return a.length===s.length&&a.every(function(l){return mt(t[l],n[l])})}else return!1}catch{return!1}else return!e&&!r?String(t)===String(n):!1}function Fn(t,n){for(var e=0;e<t.length;e++)if(mt(t[e],n))return e;return-1}function te(t){var n=!1;return function(){n||(n=!0,t.apply(this,arguments))}}var Ln="data-server-rendered",ee=["component","directive","filter"],$n=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Kt,isReservedAttr:Kt,isUnknownElement:Kt,getTagNamespace:L,parsePlatformTagName:Bn,mustUseProp:Kt,async:!0,_lifecycleHooks:$n},Li=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function $i(t){var n=(t+"").charCodeAt(0);return n===36||n===95}function Et(t,n,e,r){Object.defineProperty(t,n,{value:e,enumerable:!!r,writable:!0,configurable:!0})}var Ii=new RegExp("[^"+Li.source+".$_\\d]");function Xi(t){if(!Ii.test(t)){var n=t.split(".");return function(e){for(var r=0;r<n.length;r++){if(!e)return;e=e[n[r]]}return e}}}var Vi="__proto__"in{},V=typeof window!="undefined",Se=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,In=Se&&WXEnvironment.platform.toLowerCase(),O=V&&window.navigator.userAgent.toLowerCase(),wt=O&&/msie|trident/.test(O),Mt=O&&O.indexOf("msie 9.0")>0,Ne=O&&O.indexOf("edge/")>0,x1=O&&O.indexOf("android")>0||In==="android",Ui=O&&/iphone|ipad|ipod|ios/.test(O)||In==="ios",b1=O&&/chrome\/\d+/.test(O)&&!Ne,Q1=O&&/phantomjs/.test(O),Xn=O&&O.match(/firefox\/(\d+)/),ke={}.watch,Vn=!1;if(V)try{He={},Object.defineProperty(He,"passive",{get:function(){Vn=!0}}),window.addEventListener("test-passive",null,He)}catch{}var He,ne,re=function(){return ne===void 0&&(!V&&!Se&&typeof global!="undefined"?ne=global.process&&global.process.env.VUE_ENV==="server":ne=!1),ne},ie=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function St(t){return typeof t=="function"&&/native code/.test(t.toString())}var oe=typeof Symbol!="undefined"&&St(Symbol)&&typeof Reflect!="undefined"&&St(Reflect.ownKeys),Xt;typeof Set!="undefined"&&St(Set)?Xt=Set:Xt=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(e){return this.set[e]===!0},t.prototype.add=function(e){this.set[e]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var Un=L;var Pi=0,U=function(){this.id=Pi++,this.subs=[]};U.prototype.addSub=function(n){this.subs.push(n)};U.prototype.removeSub=function(n){K(this.subs,n)};U.prototype.depend=function(){U.target&&U.target.addDep(this)};U.prototype.notify=function(){for(var n=this.subs.slice(),e=0,r=n.length;e<r;e++)n[e].update()};U.target=null;var ae=[];function Vt(t){ae.push(t),U.target=t}function Ut(){ae.pop(),U.target=ae[ae.length-1]}var $=function(n,e,r,i,o,a,s,l){this.tag=n,this.data=e,this.children=r,this.text=i,this.elm=o,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Pn={child:{configurable:!0}};Pn.child.get=function(){return this.componentInstance};Object.defineProperties($.prototype,Pn);var vt=function(t){t===void 0&&(t="");var n=new $;return n.text=t,n.isComment=!0,n};function Nt(t){return new $(void 0,void 0,void 0,String(t))}function Oe(t){var n=new $(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return n.ns=t.ns,n.isStatic=t.isStatic,n.key=t.key,n.isComment=t.isComment,n.fnContext=t.fnContext,n.fnOptions=t.fnOptions,n.fnScopeId=t.fnScopeId,n.asyncMeta=t.asyncMeta,n.isCloned=!0,n}var Rn=Array.prototype,se=Object.create(Rn),Ri=["push","pop","shift","unshift","splice","sort","reverse"];Ri.forEach(function(t){var n=Rn[t];Et(se,t,function(){for(var r=[],i=arguments.length;i--;)r[i]=arguments[i];var o=n.apply(this,r),a=this.__ob__,s;switch(t){case"push":case"unshift":s=r;break;case"splice":s=r.slice(2);break}return s&&a.observeArray(s),a.dep.notify(),o})});var Zi=Object.getOwnPropertyNames(se),De=!0;function ot(t){De=t}var le=function(n){this.value=n,this.dep=new U,this.vmCount=0,Et(n,"__ob__",this),Array.isArray(n)?(Vi?ji(n,se):Ji(n,se,Zi),this.observeArray(n)):this.walk(n)};le.prototype.walk=function(n){for(var e=Object.keys(n),r=0;r<e.length;r++)_t(n,e[r])};le.prototype.observeArray=function(n){for(var e=0,r=n.length;e<r;e++)ht(n[e])};function ji(t,n){t.__proto__=n}function Ji(t,n,e){for(var r=0,i=e.length;r<i;r++){var o=e[r];Et(t,o,n[o])}}function ht(t,n){if(!(!D(t)||t instanceof $)){var e;return B(t,"__ob__")&&t.__ob__ instanceof le?e=t.__ob__:De&&!re()&&(Array.isArray(t)||X(t))&&Object.isExtensible(t)&&!t._isVue&&(e=new le(t)),n&&e&&e.vmCount++,e}}function _t(t,n,e,r,i){var o=new U,a=Object.getOwnPropertyDescriptor(t,n);if(!(a&&a.configurable===!1)){var s=a&&a.get,l=a&&a.set;(!s||l)&&arguments.length===2&&(e=t[n]);var d=!i&&ht(e);Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var v=s?s.call(t):e;return U.target&&(o.depend(),d&&(d.dep.depend(),Array.isArray(v)&&jn(v))),v},set:function(v){var h=s?s.call(t):e;v===h||v!==v&&h!==h||s&&!l||(l?l.call(t,v):e=v,d=!i&&ht(v),o.notify())}})}}function Be(t,n,e){if(Array.isArray(t)&&On(n))return t.length=Math.max(t.length,n),t.splice(n,1,e),e;if(n in t&&!(n in Object.prototype))return t[n]=e,e;var r=t.__ob__;return t._isVue||r&&r.vmCount?e:r?(_t(r.value,n,e),r.dep.notify(),e):(t[n]=e,e)}function Zn(t,n){if(Array.isArray(t)&&On(n)){t.splice(n,1);return}var e=t.__ob__;t._isVue||e&&e.vmCount||!B(t,n)||(delete t[n],!!e&&e.dep.notify())}function jn(t){for(var n=void 0,e=0,r=t.length;e<r;e++)n=t[e],n&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&jn(n)}var q=F.optionMergeStrategies;function Fe(t,n){if(!n)return t;for(var e,r,i,o=oe?Reflect.ownKeys(n):Object.keys(n),a=0;a<o.length;a++)e=o[a],e!=="__ob__"&&(r=t[e],i=n[e],B(t,e)?r!==i&&X(r)&&X(i)&&Fe(r,i):Be(t,e,i));return t}function Le(t,n,e){return e?function(){var i=typeof n=="function"?n.call(e,e):n,o=typeof t=="function"?t.call(e,e):t;return i?Fe(i,o):o}:n?t?function(){return Fe(typeof n=="function"?n.call(this,this):n,typeof t=="function"?t.call(this,this):t)}:n:t}q.data=function(t,n,e){return e?Le(t,n,e):n&&typeof n!="function"?t:Le(t,n)};function Gi(t,n){var e=n?t?t.concat(n):Array.isArray(n)?n:[n]:t;return e&&zi(e)}function zi(t){for(var n=[],e=0;e<t.length;e++)n.indexOf(t[e])===-1&&n.push(t[e]);return n}$n.forEach(function(t){q[t]=Gi});function qi(t,n,e,r){var i=Object.create(t||null);return n?S(i,n):i}ee.forEach(function(t){q[t+"s"]=qi});q.watch=function(t,n,e,r){if(t===ke&&(t=void 0),n===ke&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;var i={};S(i,t);for(var o in n){var a=i[o],s=n[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i};q.props=q.methods=q.inject=q.computed=function(t,n,e,r){if(!t)return n;var i=Object.create(null);return S(i,t),n&&S(i,n),i};q.provide=Le;var Wi=function(t,n){return n===void 0?t:n};function Yi(t,n){var e=t.props;if(!!e){var r={},i,o,a;if(Array.isArray(e))for(i=e.length;i--;)o=e[i],typeof o=="string"&&(a=dt(o),r[a]={type:null});else if(X(e))for(var s in e)o=e[s],a=dt(s),r[a]=X(o)?o:{type:o};t.props=r}}function Ki(t,n){var e=t.inject;if(!!e){var r=t.inject={};if(Array.isArray(e))for(var i=0;i<e.length;i++)r[e[i]]={from:e[i]};else if(X(e))for(var o in e){var a=e[o];r[o]=X(a)?S({from:o},a):{from:a}}}}function to(t){var n=t.directives;if(n)for(var e in n){var r=n[e];typeof r=="function"&&(n[e]={bind:r,update:r})}}function gt(t,n,e){if(typeof n=="function"&&(n=n.options),Yi(n,e),Ki(n,e),to(n),!n._base&&(n.extends&&(t=gt(t,n.extends,e)),n.mixins))for(var r=0,i=n.mixins.length;r<i;r++)t=gt(t,n.mixins[r],e);var o={},a;for(a in t)s(a);for(a in n)B(t,a)||s(a);function s(l){var d=q[l]||Wi;o[l]=d(t[l],n[l],e,l)}return o}function $e(t,n,e,r){if(typeof e=="string"){var i=t[n];if(B(i,e))return i[e];var o=dt(e);if(B(i,o))return i[o];var a=Hi(o);if(B(i,a))return i[a];var s=i[e]||i[o]||i[a];return s}}function Ie(t,n,e,r){var i=n[t],o=!B(e,t),a=e[t],s=Gn(Boolean,i.type);if(s>-1){if(o&&!B(i,"default"))a=!1;else if(a===""||a===It(t)){var l=Gn(String,i.type);(l<0||s<l)&&(a=!0)}}if(a===void 0){a=eo(r,i,t);var d=De;ot(!0),ht(a),ot(d)}return a}function eo(t,n,e){if(!!B(n,"default")){var r=n.default;return t&&t.$options.propsData&&t.$options.propsData[e]===void 0&&t._props[e]!==void 0?t._props[e]:typeof r=="function"&&Xe(n.type)!=="Function"?r.call(t):r}}var no=/^\s*function (\w+)/;function Xe(t){var n=t&&t.toString().match(no);return n?n[1]:""}function Jn(t,n){return Xe(t)===Xe(n)}function Gn(t,n){if(!Array.isArray(n))return Jn(n,t)?0:-1;for(var e=0,r=n.length;e<r;e++)if(Jn(n[e],t))return e;return-1}function yt(t,n,e){Vt();try{if(n)for(var r=n;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=i[o].call(r,t,n,e)===!1;if(a)return}catch(s){zn(s,r,"errorCaptured hook")}}zn(t,n,e)}finally{Ut()}}function kt(t,n,e,r,i){var o;try{o=e?t.apply(n,e):t.call(n),o&&!o._isVue&&we(o)&&!o._handled&&(o.catch(function(a){return yt(a,r,i+" (Promise/async)")}),o._handled=!0)}catch(a){yt(a,r,i)}return o}function zn(t,n,e){if(F.errorHandler)try{return F.errorHandler.call(null,t,n,e)}catch(r){r!==t&&qn(r,null,"config.errorHandler")}qn(t,n,e)}function qn(t,n,e){if((V||Se)&&typeof console!="undefined")console.error(t);else throw t}var Ve=!1,Ue=[],Pe=!1;function pe(){Pe=!1;var t=Ue.slice(0);Ue.length=0;for(var n=0;n<t.length;n++)t[n]()}var Pt;typeof Promise!="undefined"&&St(Promise)?(Wn=Promise.resolve(),Pt=function(){Wn.then(pe),Ui&&setTimeout(L)},Ve=!0):!wt&&typeof MutationObserver!="undefined"&&(St(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")?(Rt=1,Yn=new MutationObserver(pe),Re=document.createTextNode(String(Rt)),Yn.observe(Re,{characterData:!0}),Pt=function(){Rt=(Rt+1)%2,Re.data=String(Rt)},Ve=!0):typeof setImmediate!="undefined"&&St(setImmediate)?Pt=function(){setImmediate(pe)}:Pt=function(){setTimeout(pe,0)};var Wn,Rt,Yn,Re;function Ze(t,n){var e;if(Ue.push(function(){if(t)try{t.call(n)}catch(r){yt(r,n,"nextTick")}else e&&e(n)}),Pe||(Pe=!0,Pt()),!t&&typeof Promise!="undefined")return new Promise(function(r){e=r})}var Kn=new Xt;function fe(t){je(t,Kn),Kn.clear()}function je(t,n){var e,r,i=Array.isArray(t);if(!(!i&&!D(t)||Object.isFrozen(t)||t instanceof $)){if(t.__ob__){var o=t.__ob__.dep.id;if(n.has(o))return;n.add(o)}if(i)for(e=t.length;e--;)je(t[e],n);else for(r=Object.keys(t),e=r.length;e--;)je(t[r[e]],n)}}var tr=ut(function(t){var n=t.charAt(0)==="&";t=n?t.slice(1):t;var e=t.charAt(0)==="~";t=e?t.slice(1):t;var r=t.charAt(0)==="!";return t=r?t.slice(1):t,{name:t,once:e,capture:r,passive:n}});function Je(t,n){function e(){var r=arguments,i=e.fns;if(Array.isArray(i))for(var o=i.slice(),a=0;a<o.length;a++)kt(o[a],null,r,n,"v-on handler");else return kt(i,null,arguments,n,"v-on handler")}return e.fns=t,e}function er(t,n,e,r,i,o){var a,s,l,d,p;for(a in t)s=l=t[a],d=n[a],p=tr(a),y(l)||(y(d)?(y(l.fns)&&(l=t[a]=Je(l,o)),N(p.once)&&(l=t[a]=i(p.name,l,p.capture)),e(p.name,l,p.capture,p.passive,p.params)):l!==d&&(d.fns=l,t[a]=d));for(a in n)y(t[a])&&(p=tr(a),r(p.name,n[a],p.capture))}function at(t,n,e){t instanceof $&&(t=t.data.hook||(t.data.hook={}));var r,i=t[n];function o(){e.apply(this,arguments),K(r.fns,o)}y(i)?r=Je([o]):u(i.fns)&&N(i.merged)?(r=i,r.fns.push(o)):r=Je([i,o]),r.merged=!0,t[n]=r}function ro(t,n,e){var r=n.options.props;if(!y(r)){var i={},o=t.attrs,a=t.props;if(u(o)||u(a))for(var s in r){var l=It(s);if(!1)var d;nr(i,a,s,l,!0)||nr(i,o,s,l,!1)}return i}}function nr(t,n,e,r,i){if(u(n)){if(B(n,e))return t[e]=n[e],i||delete n[e],!0;if(B(n,r))return t[e]=n[r],i||delete n[r],!0}return!1}function io(t){for(var n=0;n<t.length;n++)if(Array.isArray(t[n]))return Array.prototype.concat.apply([],t);return t}function Ge(t){return Lt(t)?[Nt(t)]:Array.isArray(t)?rr(t):void 0}function Zt(t){return u(t)&&u(t.text)&&wi(t.isComment)}function rr(t,n){var e=[],r,i,o,a;for(r=0;r<t.length;r++)i=t[r],!(y(i)||typeof i=="boolean")&&(o=e.length-1,a=e[o],Array.isArray(i)?i.length>0&&(i=rr(i,(n||"")+"_"+r),Zt(i[0])&&Zt(a)&&(e[o]=Nt(a.text+i[0].text),i.shift()),e.push.apply(e,i)):Lt(i)?Zt(a)?e[o]=Nt(a.text+i):i!==""&&e.push(Nt(i)):Zt(i)&&Zt(a)?e[o]=Nt(a.text+i.text):(N(t._isVList)&&u(i.tag)&&y(i.key)&&u(n)&&(i.key="__vlist"+n+"_"+r+"__"),e.push(i)));return e}function oo(t){var n=t.$options.provide;n&&(t._provided=typeof n=="function"?n.call(t):n)}function ao(t){var n=ir(t.$options.inject,t);n&&(ot(!1),Object.keys(n).forEach(function(e){_t(t,e,n[e])}),ot(!0))}function ir(t,n){if(t){for(var e=Object.create(null),r=oe?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if(o!=="__ob__"){for(var a=t[o].from,s=n;s;){if(s._provided&&B(s._provided,a)){e[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[o]){var l=t[o].default;e[o]=typeof l=="function"?l.call(n):l}}}return e}}function ze(t,n){if(!t||!t.length)return{};for(var e={},r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,(o.context===n||o.fnContext===n)&&a&&a.slot!=null){var s=a.slot,l=e[s]||(e[s]=[]);o.tag==="template"?l.push.apply(l,o.children||[]):l.push(o)}else(e.default||(e.default=[])).push(o)}for(var d in e)e[d].every(so)&&delete e[d];return e}function so(t){return t.isComment&&!t.asyncFactory||t.text===" "}function jt(t){return t.isComment&&t.asyncFactory}function ce(t,n,e){var r,i=Object.keys(n).length>0,o=t?!!t.$stable:!i,a=t&&t.$key;if(!t)r={};else{if(t._normalized)return t._normalized;if(o&&e&&e!==z&&a===e.$key&&!i&&!e.$hasNormal)return e;r={};for(var s in t)t[s]&&s[0]!=="$"&&(r[s]=lo(n,s,t[s]))}for(var l in n)l in r||(r[l]=po(n,l));return t&&Object.isExtensible(t)&&(t._normalized=r),Et(r,"$stable",o),Et(r,"$key",a),Et(r,"$hasNormal",i),r}function lo(t,n,e){var r=function(){var i=arguments.length?e.apply(null,arguments):e({});i=i&&typeof i=="object"&&!Array.isArray(i)?[i]:Ge(i);var o=i&&i[0];return i&&(!o||i.length===1&&o.isComment&&!jt(o))?void 0:i};return e.proxy&&Object.defineProperty(t,n,{get:r,enumerable:!0,configurable:!0}),r}function po(t,n){return function(){return t[n]}}function fo(t,n){var e,r,i,o,a;if(Array.isArray(t)||typeof t=="string")for(e=new Array(t.length),r=0,i=t.length;r<i;r++)e[r]=n(t[r],r);else if(typeof t=="number")for(e=new Array(t),r=0;r<t;r++)e[r]=n(r+1,r);else if(D(t))if(oe&&t[Symbol.iterator]){e=[];for(var s=t[Symbol.iterator](),l=s.next();!l.done;)e.push(n(l.value,e.length)),l=s.next()}else for(o=Object.keys(t),e=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],e[r]=n(t[a],a,r);return u(e)||(e=[]),e._isVList=!0,e}function co(t,n,e,r){var i=this.$scopedSlots[t],o;i?(e=e||{},r&&(e=S(S({},r),e)),o=i(e)||(typeof n=="function"?n():n)):o=this.$slots[t]||(typeof n=="function"?n():n);var a=e&&e.slot;return a?this.$createElement("template",{slot:a},o):o}function uo(t){return $e(this.$options,"filters",t,!0)||Bn}function or(t,n){return Array.isArray(t)?t.indexOf(n)===-1:t!==n}function mo(t,n,e,r,i){var o=F.keyCodes[n]||e;return i&&r&&!F.keyCodes[n]?or(i,r):o?or(o,t):r?It(r)!==n:t===void 0}function vo(t,n,e,r,i){if(e&&D(e)){Array.isArray(e)&&(e=Dn(e));var o,a=function(l){if(l==="class"||l==="style"||Si(l))o=t;else{var d=t.attrs&&t.attrs.type;o=r||F.mustUseProp(n,d,l)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var p=dt(l),v=It(l);if(!(p in o)&&!(v in o)&&(o[l]=e[l],i)){var h=t.on||(t.on={});h["update:"+l]=function(T){e[l]=T}}};for(var s in e)a(s)}return t}function ho(t,n){var e=this._staticTrees||(this._staticTrees=[]),r=e[t];return r&&!n||(r=e[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),ar(r,"__static__"+t,!1)),r}function _o(t,n,e){return ar(t,"__once__"+n+(e?"_"+e:""),!0),t}function ar(t,n,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&typeof t[r]!="string"&&sr(t[r],n+"_"+r,e);else sr(t,n,e)}function sr(t,n,e){t.isStatic=!0,t.key=n,t.isOnce=e}function go(t,n){if(n&&X(n)){var e=t.on=t.on?S({},t.on):{};for(var r in n){var i=e[r],o=n[r];e[r]=i?[].concat(i,o):o}}return t}function lr(t,n,e,r){n=n||{$stable:!e};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?lr(o,n,e):o&&(o.proxy&&(o.fn.proxy=!0),n[o.key]=o.fn)}return r&&(n.$key=r),n}function yo(t,n){for(var e=0;e<n.length;e+=2){var r=n[e];typeof r=="string"&&r&&(t[n[e]]=n[e+1])}return t}function Co(t,n){return typeof t=="string"?n+t:t}function pr(t){t._o=_o,t._n=$t,t._s=Mi,t._l=fo,t._t=co,t._q=mt,t._i=Fn,t._m=ho,t._f=uo,t._k=mo,t._b=vo,t._v=Nt,t._e=vt,t._u=lr,t._g=go,t._d=yo,t._p=Co}function qe(t,n,e,r,i){var o=this,a=i.options,s;B(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var l=N(a._compiled),d=!l;this.data=t,this.props=n,this.children=e,this.parent=r,this.listeners=t.on||z,this.injections=ir(a.inject,r),this.slots=function(){return o.$slots||ce(t.scopedSlots,o.$slots=ze(e,r)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ce(t.scopedSlots,this.slots())}}),l&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=ce(t.scopedSlots,this.$slots)),a._scopeId?this._c=function(p,v,h,T){var E=ue(s,p,v,h,T,d);return E&&!Array.isArray(E)&&(E.fnScopeId=a._scopeId,E.fnContext=r),E}:this._c=function(p,v,h,T){return ue(s,p,v,h,T,d)}}pr(qe.prototype);function Ao(t,n,e,r,i){var o=t.options,a={},s=o.props;if(u(s))for(var l in s)a[l]=Ie(l,s,n||z);else u(e.attrs)&&cr(a,e.attrs),u(e.props)&&cr(a,e.props);var d=new qe(e,a,i,r,t),p=o.render.call(null,d._c,d);if(p instanceof $)return fr(p,e,d.parent,o,d);if(Array.isArray(p)){for(var v=Ge(p)||[],h=new Array(v.length),T=0;T<v.length;T++)h[T]=fr(v[T],e,d.parent,o,d);return h}}function fr(t,n,e,r,i){var o=Oe(t);return o.fnContext=e,o.fnOptions=r,n.slot&&((o.data||(o.data={})).slot=n.slot),o}function cr(t,n){for(var e in n)t[dt(e)]=n[e]}var We={init:function(n,e){if(n.componentInstance&&!n.componentInstance._isDestroyed&&n.data.keepAlive){var r=n;We.prepatch(r,r)}else{var i=n.componentInstance=To(n,Ct);i.$mount(e?n.elm:void 0,e)}},prepatch:function(n,e){var r=e.componentOptions,i=e.componentInstance=n.componentInstance;Vo(i,r.propsData,r.listeners,e,r.children)},insert:function(n){var e=n.context,r=n.componentInstance;r._isMounted||(r._isMounted=!0,J(r,"mounted")),n.data.keepAlive&&(e._isMounted?Zo(r):tn(r,!0))},destroy:function(n){var e=n.componentInstance;e._isDestroyed||(n.data.keepAlive?Cr(e,!0):e.$destroy())}},ur=Object.keys(We);function dr(t,n,e,r,i){if(!y(t)){var o=e.$options._base;if(D(t)&&(t=o.extend(t)),typeof t=="function"){var a;if(y(t.cid)&&(a=t,t=Ho(a,o),t===void 0))return ko(a,n,e,r,i);n=n||{},ln(t),u(n.model)&&Qo(t.options,n);var s=ro(n,t,i);if(N(t.options.functional))return Ao(t,s,n,e,r);var l=n.on;if(n.on=n.nativeOn,N(t.options.abstract)){var d=n.slot;n={},d&&(n.slot=d)}xo(n);var p=t.options.name||i,v=new $("vue-component-"+t.cid+(p?"-"+p:""),n,void 0,void 0,void 0,e,{Ctor:t,propsData:s,listeners:l,tag:i,children:r},a);return v}}}function To(t,n){var e={_isComponent:!0,_parentVnode:t,parent:n},r=t.data.inlineTemplate;return u(r)&&(e.render=r.render,e.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(e)}function xo(t){for(var n=t.hook||(t.hook={}),e=0;e<ur.length;e++){var r=ur[e],i=n[r],o=We[r];i!==o&&!(i&&i._merged)&&(n[r]=i?bo(o,i):o)}}function bo(t,n){var e=function(r,i){t(r,i),n(r,i)};return e._merged=!0,e}function Qo(t,n){var e=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[e]=n.model.value;var i=n.on||(n.on={}),o=i[r],a=n.model.callback;u(o)?(Array.isArray(o)?o.indexOf(a)===-1:o!==a)&&(i[r]=[a].concat(o)):i[r]=a}var Eo=1,mr=2;function ue(t,n,e,r,i,o){return(Array.isArray(e)||Lt(e))&&(i=r,r=e,e=void 0),N(o)&&(i=mr),wo(t,n,e,r,i)}function wo(t,n,e,r,i){if(u(e)&&u(e.__ob__)||(u(e)&&u(e.is)&&(n=e.is),!n))return vt();Array.isArray(r)&&typeof r[0]=="function"&&(e=e||{},e.scopedSlots={default:r[0]},r.length=0),i===mr?r=Ge(r):i===Eo&&(r=io(r));var o,a;if(typeof n=="string"){var s;a=t.$vnode&&t.$vnode.ns||F.getTagNamespace(n),F.isReservedTag(n)?o=new $(F.parsePlatformTagName(n),e,r,void 0,void 0,t):(!e||!e.pre)&&u(s=$e(t.$options,"components",n))?o=dr(s,e,t,r,n):o=new $(n,e,r,void 0,void 0,t)}else o=dr(n,e,t,r);return Array.isArray(o)?o:u(o)?(u(a)&&vr(o,a),u(e)&&Mo(e),o):vt()}function vr(t,n,e){if(t.ns=n,t.tag==="foreignObject"&&(n=void 0,e=!0),u(t.children))for(var r=0,i=t.children.length;r<i;r++){var o=t.children[r];u(o.tag)&&(y(o.ns)||N(e)&&o.tag!=="svg")&&vr(o,n,e)}}function Mo(t){D(t.style)&&fe(t.style),D(t.class)&&fe(t.class)}function So(t){t._vnode=null,t._staticTrees=null;var n=t.$options,e=t.$vnode=n._parentVnode,r=e&&e.context;t.$slots=ze(n._renderChildren,r),t.$scopedSlots=z,t._c=function(o,a,s,l){return ue(t,o,a,s,l,!1)},t.$createElement=function(o,a,s,l){return ue(t,o,a,s,l,!0)};var i=e&&e.data;_t(t,"$attrs",i&&i.attrs||z,null,!0),_t(t,"$listeners",n._parentListeners||z,null,!0)}var Ye=null;function No(t){pr(t.prototype),t.prototype.$nextTick=function(n){return Ze(n,this)},t.prototype._render=function(){var n=this,e=n.$options,r=e.render,i=e._parentVnode;i&&(n.$scopedSlots=ce(i.data.scopedSlots,n.$slots,n.$scopedSlots)),n.$vnode=i;var o;try{Ye=n,o=r.call(n._renderProxy,n.$createElement)}catch(a){if(yt(a,n,"render"),!1)try{}catch(s){}else o=n._vnode}finally{Ye=null}return Array.isArray(o)&&o.length===1&&(o=o[0]),o instanceof $||(o=vt()),o.parent=i,o}}function Ke(t,n){return(t.__esModule||oe&&t[Symbol.toStringTag]==="Module")&&(t=t.default),D(t)?n.extend(t):t}function ko(t,n,e,r,i){var o=vt();return o.asyncFactory=t,o.asyncMeta={data:n,context:e,children:r,tag:i},o}function Ho(t,n){if(N(t.error)&&u(t.errorComp))return t.errorComp;if(u(t.resolved))return t.resolved;var e=Ye;if(e&&u(t.owners)&&t.owners.indexOf(e)===-1&&t.owners.push(e),N(t.loading)&&u(t.loadingComp))return t.loadingComp;if(e&&!u(t.owners)){var r=t.owners=[e],i=!0,o=null,a=null;e.$on("hook:destroyed",function(){return K(r,e)});var s=function(v){for(var h=0,T=r.length;h<T;h++)r[h].$forceUpdate();v&&(r.length=0,o!==null&&(clearTimeout(o),o=null),a!==null&&(clearTimeout(a),a=null))},l=te(function(v){t.resolved=Ke(v,n),i?r.length=0:s(!0)}),d=te(function(v){u(t.errorComp)&&(t.error=!0,s(!0))}),p=t(l,d);return D(p)&&(we(p)?y(t.resolved)&&p.then(l,d):we(p.component)&&(p.component.then(l,d),u(p.error)&&(t.errorComp=Ke(p.error,n)),u(p.loading)&&(t.loadingComp=Ke(p.loading,n),p.delay===0?t.loading=!0:o=setTimeout(function(){o=null,y(t.resolved)&&y(t.error)&&(t.loading=!0,s(!1))},p.delay||200)),u(p.timeout)&&(a=setTimeout(function(){a=null,y(t.resolved)&&d(null)},p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function hr(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var e=t[n];if(u(e)&&(u(e.componentOptions)||jt(e)))return e}}function Oo(t){t._events=Object.create(null),t._hasHookEvent=!1;var n=t.$options._parentListeners;n&&_r(t,n)}var Jt;function Do(t,n){Jt.$on(t,n)}function Bo(t,n){Jt.$off(t,n)}function Fo(t,n){var e=Jt;return function r(){var i=n.apply(null,arguments);i!==null&&e.$off(t,r)}}function _r(t,n,e){Jt=t,er(n,e||{},Do,Bo,Fo,t),Jt=void 0}function Lo(t){var n=/^hook:/;t.prototype.$on=function(e,r){var i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)i.$on(e[o],r);else(i._events[e]||(i._events[e]=[])).push(r),n.test(e)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(e,r){var i=this;function o(){i.$off(e,o),r.apply(i,arguments)}return o.fn=r,i.$on(e,o),i},t.prototype.$off=function(e,r){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(e)){for(var o=0,a=e.length;o<a;o++)i.$off(e[o],r);return i}var s=i._events[e];if(!s)return i;if(!r)return i._events[e]=null,i;for(var l,d=s.length;d--;)if(l=s[d],l===r||l.fn===r){s.splice(d,1);break}return i},t.prototype.$emit=function(e){var r=this;if(!1)var i;var o=r._events[e];if(o){o=o.length>1?Me(o):o;for(var a=Me(arguments,1),s='event handler for "'+e+'"',l=0,d=o.length;l<d;l++)kt(o[l],r,a,r,s)}return r}}var Ct=null;function gr(t){var n=Ct;return Ct=t,function(){Ct=n}}function $o(t){var n=t.$options,e=n.parent;if(e&&!n.abstract){for(;e.$options.abstract&&e.$parent;)e=e.$parent;e.$children.push(t)}t.$parent=e,t.$root=e?e.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Io(t){t.prototype._update=function(n,e){var r=this,i=r.$el,o=r._vnode,a=gr(r);r._vnode=n,o?r.$el=r.__patch__(o,n):r.$el=r.__patch__(r.$el,n,e,!1),a(),i&&(i.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},t.prototype.$forceUpdate=function(){var n=this;n._watcher&&n._watcher.update()},t.prototype.$destroy=function(){var n=this;if(!n._isBeingDestroyed){J(n,"beforeDestroy"),n._isBeingDestroyed=!0;var e=n.$parent;e&&!e._isBeingDestroyed&&!n.$options.abstract&&K(e.$children,n),n._watcher&&n._watcher.teardown();for(var r=n._watchers.length;r--;)n._watchers[r].teardown();n._data.__ob__&&n._data.__ob__.vmCount--,n._isDestroyed=!0,n.__patch__(n._vnode,null),J(n,"destroyed"),n.$off(),n.$el&&(n.$el.__vue__=null),n.$vnode&&(n.$vnode.parent=null)}}}function Xo(t,n,e){t.$el=n,t.$options.render||(t.$options.render=vt),J(t,"beforeMount");var r;return r=function(){t._update(t._render(),e)},new G(t,r,L,{before:function(){t._isMounted&&!t._isDestroyed&&J(t,"beforeUpdate")}},!0),e=!1,t.$vnode==null&&(t._isMounted=!0,J(t,"mounted")),t}function Vo(t,n,e,r,i){var o=r.data.scopedSlots,a=t.$scopedSlots,s=!!(o&&!o.$stable||a!==z&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),l=!!(i||t.$options._renderChildren||s);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data.attrs||z,t.$listeners=e||z,n&&t.$options.props){ot(!1);for(var d=t._props,p=t.$options._propKeys||[],v=0;v<p.length;v++){var h=p[v],T=t.$options.props;d[h]=Ie(h,T,n,t)}ot(!0),t.$options.propsData=n}e=e||z;var E=t.$options._parentListeners;t.$options._parentListeners=e,_r(t,e,E),l&&(t.$slots=ze(i,r.context),t.$forceUpdate())}function yr(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function tn(t,n){if(n){if(t._directInactive=!1,yr(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var e=0;e<t.$children.length;e++)tn(t.$children[e]);J(t,"activated")}}function Cr(t,n){if(!(n&&(t._directInactive=!0,yr(t)))&&!t._inactive){t._inactive=!0;for(var e=0;e<t.$children.length;e++)Cr(t.$children[e]);J(t,"deactivated")}}function J(t,n){Vt();var e=t.$options[n],r=n+" hook";if(e)for(var i=0,o=e.length;i<o;i++)kt(e[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+n),Ut()}var tt=[],en=[],de={};var nn=!1,rn=!1,Ht=0;function Uo(){Ht=tt.length=en.length=0,de={},nn=rn=!1}var Ar=0,on=Date.now;V&&!wt&&(me=window.performance,me&&typeof me.now=="function"&&on()>document.createEvent("Event").timeStamp&&(on=function(){return me.now()}));var me;function Po(){Ar=on(),rn=!0;var t,n;for(tt.sort(function(i,o){return i.id-o.id}),Ht=0;Ht<tt.length;Ht++)t=tt[Ht],t.before&&t.before(),n=t.id,de[n]=null,t.run();var e=en.slice(),r=tt.slice();Uo(),jo(e),Ro(r),ie&&F.devtools&&ie.emit("flush")}function Ro(t){for(var n=t.length;n--;){var e=t[n],r=e.vm;r._watcher===e&&r._isMounted&&!r._isDestroyed&&J(r,"updated")}}function Zo(t){t._inactive=!1,en.push(t)}function jo(t){for(var n=0;n<t.length;n++)t[n]._inactive=!0,tn(t[n],!0)}function Jo(t){var n=t.id;if(de[n]==null){if(de[n]=!0,!rn)tt.push(t);else{for(var e=tt.length-1;e>Ht&&tt[e].id>t.id;)e--;tt.splice(e+1,0,t)}nn||(nn=!0,Ze(Po))}}var Go=0,G=function(n,e,r,i,o){this.vm=n,o&&(n._watcher=this),n._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++Go,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Xt,this.newDepIds=new Xt,this.expression="",typeof e=="function"?this.getter=e:(this.getter=Xi(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};G.prototype.get=function(){Vt(this);var n,e=this.vm;try{n=this.getter.call(e,e)}catch(r){if(this.user)yt(r,e,'getter for watcher "'+this.expression+'"');else throw r}finally{this.deep&&fe(n),Ut(),this.cleanupDeps()}return n};G.prototype.addDep=function(n){var e=n.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(n),this.depIds.has(e)||n.addSub(this))};G.prototype.cleanupDeps=function(){for(var n=this.deps.length;n--;){var e=this.deps[n];this.newDepIds.has(e.id)||e.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0};G.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Jo(this)};G.prototype.run=function(){if(this.active){var n=this.get();if(n!==this.value||D(n)||this.deep){var e=this.value;if(this.value=n,this.user){var r='callback for watcher "'+this.expression+'"';kt(this.cb,this.vm,[n,e],this.vm,r)}else this.cb.call(this.vm,n,e)}}};G.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};G.prototype.depend=function(){for(var n=this.deps.length;n--;)this.deps[n].depend()};G.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||K(this.vm._watchers,this);for(var n=this.deps.length;n--;)this.deps[n].removeSub(this);this.active=!1}};var st={enumerable:!0,configurable:!0,get:L,set:L};function an(t,n,e){st.get=function(){return this[n][e]},st.set=function(i){this[n][e]=i},Object.defineProperty(t,e,st)}function zo(t){t._watchers=[];var n=t.$options;n.props&&qo(t,n.props),n.methods&&ea(t,n.methods),n.data?Wo(t):ht(t._data={},!0),n.computed&&ta(t,n.computed),n.watch&&n.watch!==ke&&na(t,n.watch)}function qo(t,n){var e=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||ot(!1);var a=function(l){i.push(l);var d=Ie(l,n,e,t);if(!1)var p;else _t(r,l,d);l in t||an(t,"_props",l)};for(var s in n)a(s);ot(!0)}function Wo(t){var n=t.$options.data;n=t._data=typeof n=="function"?Yo(n,t):n||{},X(n)||(n={});for(var e=Object.keys(n),r=t.$options.props,i=t.$options.methods,o=e.length;o--;){var a=e[o];r&&B(r,a)||$i(a)||an(t,"_data",a)}ht(n,!0)}function Yo(t,n){Vt();try{return t.call(n,n)}catch(e){return yt(e,n,"data()"),{}}finally{Ut()}}var Ko={lazy:!0};function ta(t,n){var e=t._computedWatchers=Object.create(null),r=re();for(var i in n){var o=n[i],a=typeof o=="function"?o:o.get;r||(e[i]=new G(t,a||L,L,Ko)),i in t||Tr(t,i,o)}}function Tr(t,n,e){var r=!re();typeof e=="function"?(st.get=r?xr(n):br(e),st.set=L):(st.get=e.get?r&&e.cache!==!1?xr(n):br(e.get):L,st.set=e.set||L),Object.defineProperty(t,n,st)}function xr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),U.target&&e.depend(),e.value}}function br(t){return function(){return t.call(this,this)}}function ea(t,n){var e=t.$options.props;for(var r in n)t[r]=typeof n[r]!="function"?L:Fi(n[r],t)}function na(t,n){for(var e in n){var r=n[e];if(Array.isArray(r))for(var i=0;i<r.length;i++)sn(t,e,r[i]);else sn(t,e,r)}}function sn(t,n,e,r){return X(e)&&(r=e,e=e.handler),typeof e=="string"&&(e=t[e]),t.$watch(n,e,r)}function ra(t){var n={};n.get=function(){return this._data};var e={};e.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",n),Object.defineProperty(t.prototype,"$props",e),t.prototype.$set=Be,t.prototype.$delete=Zn,t.prototype.$watch=function(r,i,o){var a=this;if(X(i))return sn(a,r,i,o);o=o||{},o.user=!0;var s=new G(a,r,i,o);if(o.immediate){var l='callback for immediate watcher "'+s.expression+'"';Vt(),kt(i,a,[s.value],a,l),Ut()}return function(){s.teardown()}}}var ia=0;function oa(t){t.prototype._init=function(n){var e=this;e._uid=ia++;var r,i;e._isVue=!0,n&&n._isComponent?aa(e,n):e.$options=gt(ln(e.constructor),n||{},e),e._renderProxy=e,e._self=e,$o(e),Oo(e),So(e),J(e,"beforeCreate"),ao(e),zo(e),oo(e),J(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function aa(t,n){var e=t.$options=Object.create(t.constructor.options),r=n._parentVnode;e.parent=n.parent,e._parentVnode=r;var i=r.componentOptions;e.propsData=i.propsData,e._parentListeners=i.listeners,e._renderChildren=i.children,e._componentTag=i.tag,n.render&&(e.render=n.render,e.staticRenderFns=n.staticRenderFns)}function ln(t){var n=t.options;if(t.super){var e=ln(t.super),r=t.superOptions;if(e!==r){t.superOptions=e;var i=sa(t);i&&S(t.extendOptions,i),n=t.options=gt(e,t.extendOptions),n.name&&(n.components[n.name]=t)}}return n}function sa(t){var n,e=t.options,r=t.sealedOptions;for(var i in e)e[i]!==r[i]&&(n||(n={}),n[i]=e[i]);return n}function k(t){this._init(t)}oa(k);ra(k);Lo(k);Io(k);No(k);function la(t){t.use=function(n){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(n)>-1)return this;var r=Me(arguments,1);return r.unshift(this),typeof n.install=="function"?n.install.apply(n,r):typeof n=="function"&&n.apply(null,r),e.push(n),this}}function pa(t){t.mixin=function(n){return this.options=gt(this.options,n),this}}function fa(t){t.cid=0;var n=1;t.extend=function(e){e=e||{};var r=this,i=r.cid,o=e._Ctor||(e._Ctor={});if(o[i])return o[i];var a=e.name||r.options.name,s=function(d){this._init(d)};return s.prototype=Object.create(r.prototype),s.prototype.constructor=s,s.cid=n++,s.options=gt(r.options,e),s.super=r,s.options.props&&ca(s),s.options.computed&&ua(s),s.extend=r.extend,s.mixin=r.mixin,s.use=r.use,ee.forEach(function(l){s[l]=r[l]}),a&&(s.options.components[a]=s),s.superOptions=r.options,s.extendOptions=e,s.sealedOptions=S({},s.options),o[i]=s,s}}function ca(t){var n=t.options.props;for(var e in n)an(t.prototype,"_props",e)}function ua(t){var n=t.options.computed;for(var e in n)Tr(t.prototype,e,n[e])}function da(t){ee.forEach(function(n){t[n]=function(e,r){return r?(n==="component"&&X(r)&&(r.name=r.name||e,r=this.options._base.extend(r)),n==="directive"&&typeof r=="function"&&(r={bind:r,update:r}),this.options[n+"s"][e]=r,r):this.options[n+"s"][e]}})}function Qr(t){return t&&(t.Ctor.options.name||t.tag)}function ve(t,n){return Array.isArray(t)?t.indexOf(n)>-1:typeof t=="string"?t.split(",").indexOf(n)>-1:Hn(t)?t.test(n):!1}function Er(t,n){var e=t.cache,r=t.keys,i=t._vnode;for(var o in e){var a=e[o];if(a){var s=a.name;s&&!n(s)&&pn(e,o,r,i)}}}function pn(t,n,e,r){var i=t[n];i&&(!r||i.tag!==r.tag)&&i.componentInstance.$destroy(),t[n]=null,K(e,n)}var wr=[String,RegExp,Array],ma={name:"keep-alive",abstract:!0,props:{include:wr,exclude:wr,max:[String,Number]},methods:{cacheVNode:function(){var n=this,e=n.cache,r=n.keys,i=n.vnodeToCache,o=n.keyToCache;if(i){var a=i.tag,s=i.componentInstance,l=i.componentOptions;e[o]={name:Qr(l),tag:a,componentInstance:s},r.push(o),this.max&&r.length>parseInt(this.max)&&pn(e,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var n in this.cache)pn(this.cache,n,this.keys)},mounted:function(){var n=this;this.cacheVNode(),this.$watch("include",function(e){Er(n,function(r){return ve(e,r)})}),this.$watch("exclude",function(e){Er(n,function(r){return!ve(e,r)})})},updated:function(){this.cacheVNode()},render:function(){var n=this.$slots.default,e=hr(n),r=e&&e.componentOptions;if(r){var i=Qr(r),o=this,a=o.include,s=o.exclude;if(a&&(!i||!ve(a,i))||s&&i&&ve(s,i))return e;var l=this,d=l.cache,p=l.keys,v=e.key==null?r.Ctor.cid+(r.tag?"::"+r.tag:""):e.key;d[v]?(e.componentInstance=d[v].componentInstance,K(p,v),p.push(v)):(this.vnodeToCache=e,this.keyToCache=v),e.data.keepAlive=!0}return e||n&&n[0]}},va={KeepAlive:ma};function ha(t){var n={};n.get=function(){return F},Object.defineProperty(t,"config",n),t.util={warn:Un,extend:S,mergeOptions:gt,defineReactive:_t},t.set=Be,t.delete=Zn,t.nextTick=Ze,t.observable=function(e){return ht(e),e},t.options=Object.create(null),ee.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,S(t.options.components,va),la(t),pa(t),fa(t),da(t)}ha(k);Object.defineProperty(k.prototype,"$isServer",{get:re});Object.defineProperty(k.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(k,"FunctionalRenderContext",{value:qe});k.version="2.6.14";var _a=j("style,class"),ga=j("input,textarea,option,select,progress"),ya=function(t,n,e){return e==="value"&&ga(t)&&n!=="button"||e==="selected"&&t==="option"||e==="checked"&&t==="input"||e==="muted"&&t==="video"},Mr=j("contenteditable,draggable,spellcheck"),Ca=j("events,caret,typing,plaintext-only"),Aa=function(t,n){return he(n)||n==="false"?"false":t==="contenteditable"&&Ca(n)?n:"true"},Ta=j("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),fn="http://www.w3.org/1999/xlink",cn=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},Sr=function(t){return cn(t)?t.slice(6,t.length):""},he=function(t){return t==null||t===!1};function xa(t){for(var n=t.data,e=t,r=t;u(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(n=Nr(r.data,n));for(;u(e=e.parent);)e&&e.data&&(n=Nr(n,e.data));return ba(n.staticClass,n.class)}function Nr(t,n){return{staticClass:un(t.staticClass,n.staticClass),class:u(t.class)?[t.class,n.class]:n.class}}function ba(t,n){return u(t)||u(n)?un(t,dn(n)):""}function un(t,n){return t?n?t+" "+n:t:n||""}function dn(t){return Array.isArray(t)?Qa(t):D(t)?Ea(t):typeof t=="string"?t:""}function Qa(t){for(var n="",e,r=0,i=t.length;r<i;r++)u(e=dn(t[r]))&&e!==""&&(n&&(n+=" "),n+=e);return n}function Ea(t){var n="";for(var e in t)t[e]&&(n&&(n+=" "),n+=e);return n}var wa={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ma=j("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),mn=j("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),kr=function(t){return Ma(t)||mn(t)};function Sa(t){if(mn(t))return"svg";if(t==="math")return"math"}var _e=Object.create(null);function Na(t){if(!V)return!0;if(kr(t))return!1;if(t=t.toLowerCase(),_e[t]!=null)return _e[t];var n=document.createElement(t);return t.indexOf("-")>-1?_e[t]=n.constructor===window.HTMLUnknownElement||n.constructor===window.HTMLElement:_e[t]=/HTMLUnknownElement/.test(n.toString())}var vn=j("text,number,password,search,email,tel,url");function ka(t){if(typeof t=="string"){var n=document.querySelector(t);return n||document.createElement("div")}else return t}function Ha(t,n){var e=document.createElement(t);return t!=="select"||n.data&&n.data.attrs&&n.data.attrs.multiple!==void 0&&e.setAttribute("multiple","multiple"),e}function Oa(t,n){return document.createElementNS(wa[t],n)}function Da(t){return document.createTextNode(t)}function Ba(t){return document.createComment(t)}function Fa(t,n,e){t.insertBefore(n,e)}function La(t,n){t.removeChild(n)}function $a(t,n){t.appendChild(n)}function Ia(t){return t.parentNode}function Xa(t){return t.nextSibling}function Va(t){return t.tagName}function Ua(t,n){t.textContent=n}function Pa(t,n){t.setAttribute(n,"")}var Ra=Object.freeze({createElement:Ha,createElementNS:Oa,createTextNode:Da,createComment:Ba,insertBefore:Fa,removeChild:La,appendChild:$a,parentNode:Ia,nextSibling:Xa,tagName:Va,setTextContent:Ua,setStyleScope:Pa}),Za={create:function(n,e){Ot(e)},update:function(n,e){n.data.ref!==e.data.ref&&(Ot(n,!0),Ot(e))},destroy:function(n){Ot(n,!0)}};function Ot(t,n){var e=t.data.ref;if(!!u(e)){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;n?Array.isArray(o[e])?K(o[e],i):o[e]===i&&(o[e]=void 0):t.data.refInFor?Array.isArray(o[e])?o[e].indexOf(i)<0&&o[e].push(i):o[e]=[i]:o[e]=i}}var At=new $("",{},[]),Gt=["create","activate","update","remove","destroy"];function Tt(t,n){return t.key===n.key&&t.asyncFactory===n.asyncFactory&&(t.tag===n.tag&&t.isComment===n.isComment&&u(t.data)===u(n.data)&&ja(t,n)||N(t.isAsyncPlaceholder)&&y(n.asyncFactory.error))}function ja(t,n){if(t.tag!=="input")return!0;var e,r=u(e=t.data)&&u(e=e.attrs)&&e.type,i=u(e=n.data)&&u(e=e.attrs)&&e.type;return r===i||vn(r)&&vn(i)}function Ja(t,n,e){var r,i,o={};for(r=n;r<=e;++r)i=t[r].key,u(i)&&(o[i]=r);return o}function Ga(t){var n,e,r={},i=t.modules,o=t.nodeOps;for(n=0;n<Gt.length;++n)for(r[Gt[n]]=[],e=0;e<i.length;++e)u(i[e][Gt[n]])&&r[Gt[n]].push(i[e][Gt[n]]);function a(c){return new $(o.tagName(c).toLowerCase(),{},[],void 0,c)}function s(c,f){function m(){--m.listeners==0&&l(c)}return m.listeners=f,m}function l(c){var f=o.parentNode(c);u(f)&&o.removeChild(f,c)}function d(c,f){return!f&&!c.ns&&!(F.ignoredElements.length&&F.ignoredElements.some(function(m){return Hn(m)?m.test(c.tag):m===c.tag}))&&F.isUnknownElement(c.tag)}var p=0;function v(c,f,m,_,g,x,C){if(u(c.elm)&&u(x)&&(c=x[C]=Oe(c)),c.isRootInsert=!g,!h(c,f,m,_)){var A=c.data,M=c.children,b=c.tag;u(b)?(c.elm=c.ns?o.createElementNS(c.ns,b):o.createElement(b,c),pt(c),lt(c,M,f),u(A)&&I(c,f),w(m,c.elm,_)):N(c.isComment)?(c.elm=o.createComment(c.text),w(m,c.elm,_)):(c.elm=o.createTextNode(c.text),w(m,c.elm,_))}}function h(c,f,m,_){var g=c.data;if(u(g)){var x=u(c.componentInstance)&&g.keepAlive;if(u(g=g.hook)&&u(g=g.init)&&g(c,!1),u(c.componentInstance))return T(c,f),w(m,c.elm,_),N(x)&&E(c,f,m,_),!0}}function T(c,f){u(c.data.pendingInsert)&&(f.push.apply(f,c.data.pendingInsert),c.data.pendingInsert=null),c.elm=c.componentInstance.$el,R(c)?(I(c,f),pt(c)):(Ot(c),f.push(c))}function E(c,f,m,_){for(var g,x=c;x.componentInstance;)if(x=x.componentInstance._vnode,u(g=x.data)&&u(g=g.transition)){for(g=0;g<r.activate.length;++g)r.activate[g](At,x);f.push(x);break}w(m,c.elm,_)}function w(c,f,m){u(c)&&(u(m)?o.parentNode(m)===c&&o.insertBefore(c,f,m):o.appendChild(c,f))}function lt(c,f,m){if(Array.isArray(f))for(var _=0;_<f.length;++_)v(f[_],m,c.elm,null,!0,f,_);else Lt(c.text)&&o.appendChild(c.elm,o.createTextNode(String(c.text)))}function R(c){for(;c.componentInstance;)c=c.componentInstance._vnode;return u(c.tag)}function I(c,f){for(var m=0;m<r.create.length;++m)r.create[m](At,c);n=c.data.hook,u(n)&&(u(n.create)&&n.create(At,c),u(n.insert)&&f.push(c))}function pt(c){var f;if(u(f=c.fnScopeId))o.setStyleScope(c.elm,f);else for(var m=c;m;)u(f=m.context)&&u(f=f.$options._scopeId)&&o.setStyleScope(c.elm,f),m=m.parent;u(f=Ct)&&f!==c.context&&f!==c.fnContext&&u(f=f.$options._scopeId)&&o.setStyleScope(c.elm,f)}function bt(c,f,m,_,g,x){for(;_<=g;++_)v(m[_],x,c,f,!1,m,_)}function ft(c){var f,m,_=c.data;if(u(_))for(u(f=_.hook)&&u(f=f.destroy)&&f(c),f=0;f<r.destroy.length;++f)r.destroy[f](c);if(u(f=c.children))for(m=0;m<c.children.length;++m)ft(c.children[m])}function W(c,f,m){for(;f<=m;++f){var _=c[f];u(_)&&(u(_.tag)?(Z(_),ft(_)):l(_.elm))}}function Z(c,f){if(u(f)||u(c.data)){var m,_=r.remove.length+1;for(u(f)?f.listeners+=_:f=s(c.elm,_),u(m=c.componentInstance)&&u(m=m._vnode)&&u(m.data)&&Z(m,f),m=0;m<r.remove.length;++m)r.remove[m](c,f);u(m=c.data.hook)&&u(m=m.remove)?m(c,f):f()}else l(c.elm)}function Bt(c,f,m,_,g){for(var x=0,C=0,A=f.length-1,M=f[0],b=f[A],Q=m.length-1,H=m[0],P=m[Q],ct,rt,it,kn,Qe=!g;x<=A&&C<=Q;)y(M)?M=f[++x]:y(b)?b=f[--A]:Tt(M,H)?(Y(M,H,_,m,C),M=f[++x],H=m[++C]):Tt(b,P)?(Y(b,P,_,m,Q),b=f[--A],P=m[--Q]):Tt(M,P)?(Y(M,P,_,m,Q),Qe&&o.insertBefore(c,M.elm,o.nextSibling(b.elm)),M=f[++x],P=m[--Q]):Tt(b,H)?(Y(b,H,_,m,C),Qe&&o.insertBefore(c,b.elm,M.elm),b=f[--A],H=m[++C]):(y(ct)&&(ct=Ja(f,x,A)),rt=u(H.key)?ct[H.key]:Wt(H,f,x,A),y(rt)?v(H,_,c,M.elm,!1,m,C):(it=f[rt],Tt(it,H)?(Y(it,H,_,m,C),f[rt]=void 0,Qe&&o.insertBefore(c,it.elm,M.elm)):v(H,_,c,M.elm,!1,m,C)),H=m[++C]);x>A?(kn=y(m[Q+1])?null:m[Q+1].elm,bt(c,kn,m,C,Q,_)):C>Q&&W(f,x,A)}function xe(c){for(var f={},m=0;m<c.length;m++){var _=c[m],g=_.key;u(g)&&(f[g]?Un("Duplicate keys detected: '"+g+"'. This may cause an update error.",_.context):f[g]=!0)}}function Wt(c,f,m,_){for(var g=m;g<_;g++){var x=f[g];if(u(x)&&Tt(c,x))return g}}function Y(c,f,m,_,g,x){if(c!==f){u(f.elm)&&u(_)&&(f=_[g]=Oe(f));var C=f.elm=c.elm;if(N(c.isAsyncPlaceholder)){u(f.asyncFactory.resolved)?Qt(c.elm,f,m):f.isAsyncPlaceholder=!0;return}if(N(f.isStatic)&&N(c.isStatic)&&f.key===c.key&&(N(f.isCloned)||N(f.isOnce))){f.componentInstance=c.componentInstance;return}var A,M=f.data;u(M)&&u(A=M.hook)&&u(A=A.prepatch)&&A(c,f);var b=c.children,Q=f.children;if(u(M)&&R(f)){for(A=0;A<r.update.length;++A)r.update[A](c,f);u(A=M.hook)&&u(A=A.update)&&A(c,f)}y(f.text)?u(b)&&u(Q)?b!==Q&&Bt(C,b,Q,m,x):u(Q)?(u(c.text)&&o.setTextContent(C,""),bt(C,null,Q,0,Q.length-1,m)):u(b)?W(b,0,b.length-1):u(c.text)&&o.setTextContent(C,""):c.text!==f.text&&o.setTextContent(C,f.text),u(M)&&u(A=M.hook)&&u(A=A.postpatch)&&A(c,f)}}function nt(c,f,m){if(N(m)&&u(c.parent))c.parent.data.pendingInsert=f;else for(var _=0;_<f.length;++_)f[_].data.hook.insert(f[_])}var be=!1,Yt=j("attrs,class,staticClass,staticStyle,key");function Qt(c,f,m,_){var g,x=f.tag,C=f.data,A=f.children;if(_=_||C&&C.pre,f.elm=c,N(f.isComment)&&u(f.asyncFactory))return f.isAsyncPlaceholder=!0,!0;if(u(C)&&(u(g=C.hook)&&u(g=g.init)&&g(f,!0),u(g=f.componentInstance)))return T(f,m),!0;if(u(x)){if(u(A))if(!c.hasChildNodes())lt(f,A,m);else if(u(g=C)&&u(g=g.domProps)&&u(g=g.innerHTML)){if(g!==c.innerHTML)return!1}else{for(var M=!0,b=c.firstChild,Q=0;Q<A.length;Q++){if(!b||!Qt(b,A[Q],m,_)){M=!1;break}b=b.nextSibling}if(!M||b)return!1}if(u(C)){var H=!1;for(var P in C)if(!Yt(P)){H=!0,I(f,m);break}!H&&C.class&&fe(C.class)}}else c.data!==f.text&&(c.data=f.text);return!0}function Ft(c,f,m){return u(f.tag)?f.tag.indexOf("vue-component")===0||!d(f,m)&&f.tag.toLowerCase()===(c.tagName&&c.tagName.toLowerCase()):c.nodeType===(f.isComment?8:3)}return function(f,m,_,g){if(y(m)){u(f)&&ft(f);return}var x=!1,C=[];if(y(f))x=!0,v(m,C);else{var A=u(f.nodeType);if(!A&&Tt(f,m))Y(f,m,C,null,null,g);else{if(A){if(f.nodeType===1&&f.hasAttribute(Ln)&&(f.removeAttribute(Ln),_=!0),N(_)&&Qt(f,m,C))return nt(m,C,!0),f;f=a(f)}var M=f.elm,b=o.parentNode(M);if(v(m,C,M._leaveCb?null:b,o.nextSibling(M)),u(m.parent))for(var Q=m.parent,H=R(m);Q;){for(var P=0;P<r.destroy.length;++P)r.destroy[P](Q);if(Q.elm=m.elm,H){for(var ct=0;ct<r.create.length;++ct)r.create[ct](At,Q);var rt=Q.data.hook.insert;if(rt.merged)for(var it=1;it<rt.fns.length;it++)rt.fns[it]()}else Ot(Q);Q=Q.parent}u(b)?W([f],0,0):u(f.tag)&&ft(f)}}return nt(m,C,x),m.elm}}var za={create:hn,update:hn,destroy:function(n){hn(n,At)}};function hn(t,n){(t.data.directives||n.data.directives)&&qa(t,n)}function qa(t,n){var e=t===At,r=n===At,i=Hr(t.data.directives,t.context),o=Hr(n.data.directives,n.context),a=[],s=[],l,d,p;for(l in o)d=i[l],p=o[l],d?(p.oldValue=d.value,p.oldArg=d.arg,zt(p,"update",n,t),p.def&&p.def.componentUpdated&&s.push(p)):(zt(p,"bind",n,t),p.def&&p.def.inserted&&a.push(p));if(a.length){var v=function(){for(var h=0;h<a.length;h++)zt(a[h],"inserted",n,t)};e?at(n,"insert",v):v()}if(s.length&&at(n,"postpatch",function(){for(var h=0;h<s.length;h++)zt(s[h],"componentUpdated",n,t)}),!e)for(l in i)o[l]||zt(i[l],"unbind",t,t,r)}var Wa=Object.create(null);function Hr(t,n){var e=Object.create(null);if(!t)return e;var r,i;for(r=0;r<t.length;r++)i=t[r],i.modifiers||(i.modifiers=Wa),e[Ya(i)]=i,i.def=$e(n.$options,"directives",i.name,!0);return e}function Ya(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function zt(t,n,e,r,i){var o=t.def&&t.def[n];if(o)try{o(e.elm,t,e,r,i)}catch(a){yt(a,e.context,"directive "+t.name+" "+n+" hook")}}var Ka=[Za,za];function Or(t,n){var e=n.componentOptions;if(!(u(e)&&e.Ctor.options.inheritAttrs===!1)&&!(y(t.data.attrs)&&y(n.data.attrs))){var r,i,o,a=n.elm,s=t.data.attrs||{},l=n.data.attrs||{};u(l.__ob__)&&(l=n.data.attrs=S({},l));for(r in l)i=l[r],o=s[r],o!==i&&Dr(a,r,i,n.data.pre);(wt||Ne)&&l.value!==s.value&&Dr(a,"value",l.value);for(r in s)y(l[r])&&(cn(r)?a.removeAttributeNS(fn,Sr(r)):Mr(r)||a.removeAttribute(r))}}function Dr(t,n,e,r){r||t.tagName.indexOf("-")>-1?Br(t,n,e):Ta(n)?he(e)?t.removeAttribute(n):(e=n==="allowfullscreen"&&t.tagName==="EMBED"?"true":n,t.setAttribute(n,e)):Mr(n)?t.setAttribute(n,Aa(n,e)):cn(n)?he(e)?t.removeAttributeNS(fn,Sr(n)):t.setAttributeNS(fn,n,e):Br(t,n,e)}function Br(t,n,e){if(he(e))t.removeAttribute(n);else{if(wt&&!Mt&&t.tagName==="TEXTAREA"&&n==="placeholder"&&e!==""&&!t.__ieph){var r=function(i){i.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(n,e)}}var ts={create:Or,update:Or};function Fr(t,n){var e=n.elm,r=n.data,i=t.data;if(!(y(r.staticClass)&&y(r.class)&&(y(i)||y(i.staticClass)&&y(i.class)))){var o=xa(n),a=e._transitionClasses;u(a)&&(o=un(o,dn(a))),o!==e._prevClass&&(e.setAttribute("class",o),e._prevClass=o)}}var es={create:Fr,update:Fr},_n="__r",gn="__c";function ns(t){if(u(t[_n])){var n=wt?"change":"input";t[n]=[].concat(t[_n],t[n]||[]),delete t[_n]}u(t[gn])&&(t.change=[].concat(t[gn],t.change||[]),delete t[gn])}var qt;function rs(t,n,e){var r=qt;return function i(){var o=n.apply(null,arguments);o!==null&&Lr(t,i,e,r)}}var is=Ve&&!(Xn&&Number(Xn[1])<=53);function os(t,n,e,r){if(is){var i=Ar,o=n;n=o._wrapper=function(a){if(a.target===a.currentTarget||a.timeStamp>=i||a.timeStamp<=0||a.target.ownerDocument!==document)return o.apply(this,arguments)}}qt.addEventListener(t,n,Vn?{capture:e,passive:r}:e)}function Lr(t,n,e,r){(r||qt).removeEventListener(t,n._wrapper||n,e)}function $r(t,n){if(!(y(t.data.on)&&y(n.data.on))){var e=n.data.on||{},r=t.data.on||{};qt=n.elm,ns(e),er(e,r,os,Lr,rs,n.context),qt=void 0}}var as={create:$r,update:$r},ge;function Ir(t,n){if(!(y(t.data.domProps)&&y(n.data.domProps))){var e,r,i=n.elm,o=t.data.domProps||{},a=n.data.domProps||{};u(a.__ob__)&&(a=n.data.domProps=S({},a));for(e in o)e in a||(i[e]="");for(e in a){if(r=a[e],e==="textContent"||e==="innerHTML"){if(n.children&&(n.children.length=0),r===o[e])continue;i.childNodes.length===1&&i.removeChild(i.childNodes[0])}if(e==="value"&&i.tagName!=="PROGRESS"){i._value=r;var s=y(r)?"":String(r);ss(i,s)&&(i.value=s)}else if(e==="innerHTML"&&mn(i.tagName)&&y(i.innerHTML)){ge=ge||document.createElement("div"),ge.innerHTML="<svg>"+r+"</svg>";for(var l=ge.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;l.firstChild;)i.appendChild(l.firstChild)}else if(r!==o[e])try{i[e]=r}catch{}}}}function ss(t,n){return!t.composing&&(t.tagName==="OPTION"||ls(t,n)||ps(t,n))}function ls(t,n){var e=!0;try{e=document.activeElement!==t}catch{}return e&&t.value!==n}function ps(t,n){var e=t.value,r=t._vModifiers;if(u(r)){if(r.number)return $t(e)!==$t(n);if(r.trim)return e.trim()!==n.trim()}return e!==n}var fs={create:Ir,update:Ir},cs=ut(function(t){var n={},e=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(e).forEach(function(i){if(i){var o=i.split(r);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n});function yn(t){var n=Xr(t.style);return t.staticStyle?S(t.staticStyle,n):n}function Xr(t){return Array.isArray(t)?Dn(t):typeof t=="string"?cs(t):t}function us(t,n){var e={},r;if(n)for(var i=t;i.componentInstance;)i=i.componentInstance._vnode,i&&i.data&&(r=yn(i.data))&&S(e,r);(r=yn(t.data))&&S(e,r);for(var o=t;o=o.parent;)o.data&&(r=yn(o.data))&&S(e,r);return e}var ds=/^--/,Vr=/\s*!important$/,Ur=function(t,n,e){if(ds.test(n))t.style.setProperty(n,e);else if(Vr.test(e))t.style.setProperty(It(n),e.replace(Vr,""),"important");else{var r=ms(n);if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)t.style[r]=e[i];else t.style[r]=e}},Pr=["Webkit","Moz","ms"],ye,ms=ut(function(t){if(ye=ye||document.createElement("div").style,t=dt(t),t!=="filter"&&t in ye)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),e=0;e<Pr.length;e++){var r=Pr[e]+n;if(r in ye)return r}});function Rr(t,n){var e=n.data,r=t.data;if(!(y(e.staticStyle)&&y(e.style)&&y(r.staticStyle)&&y(r.style))){var i,o,a=n.elm,s=r.staticStyle,l=r.normalizedStyle||r.style||{},d=s||l,p=Xr(n.data.style)||{};n.data.normalizedStyle=u(p.__ob__)?S({},p):p;var v=us(n,!0);for(o in d)y(v[o])&&Ur(a,o,"");for(o in v)i=v[o],i!==d[o]&&Ur(a,o,i??"")}}var vs={create:Rr,update:Rr},Zr=/\s+/;function jr(t,n){if(!(!n||!(n=n.trim())))if(t.classList)n.indexOf(" ")>-1?n.split(Zr).forEach(function(r){return t.classList.add(r)}):t.classList.add(n);else{var e=" "+(t.getAttribute("class")||"")+" ";e.indexOf(" "+n+" ")<0&&t.setAttribute("class",(e+n).trim())}}function Jr(t,n){if(!(!n||!(n=n.trim())))if(t.classList)n.indexOf(" ")>-1?n.split(Zr).forEach(function(i){return t.classList.remove(i)}):t.classList.remove(n),t.classList.length||t.removeAttribute("class");else{for(var e=" "+(t.getAttribute("class")||"")+" ",r=" "+n+" ";e.indexOf(r)>=0;)e=e.replace(r," ");e=e.trim(),e?t.setAttribute("class",e):t.removeAttribute("class")}}function Gr(t){if(!!t){if(typeof t=="object"){var n={};return t.css!==!1&&S(n,zr(t.name||"v")),S(n,t),n}else if(typeof t=="string")return zr(t)}}var zr=ut(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),qr=V&&!Mt,Dt="transition",Cn="animation",Ce="transition",Ae="transitionend",An="animation",Wr="animationend";qr&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Ce="WebkitTransition",Ae="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(An="WebkitAnimation",Wr="webkitAnimationEnd"));var Yr=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Kr(t){Yr(function(){Yr(t)})}function xt(t,n){var e=t._transitionClasses||(t._transitionClasses=[]);e.indexOf(n)<0&&(e.push(n),jr(t,n))}function et(t,n){t._transitionClasses&&K(t._transitionClasses,n),Jr(t,n)}function ti(t,n,e){var r=ei(t,n),i=r.type,o=r.timeout,a=r.propCount;if(!i)return e();var s=i===Dt?Ae:Wr,l=0,d=function(){t.removeEventListener(s,p),e()},p=function(v){v.target===t&&++l>=a&&d()};setTimeout(function(){l<a&&d()},o+1),t.addEventListener(s,p)}var hs=/\b(transform|all)(,|$)/;function ei(t,n){var e=window.getComputedStyle(t),r=(e[Ce+"Delay"]||"").split(", "),i=(e[Ce+"Duration"]||"").split(", "),o=ni(r,i),a=(e[An+"Delay"]||"").split(", "),s=(e[An+"Duration"]||"").split(", "),l=ni(a,s),d,p=0,v=0;n===Dt?o>0&&(d=Dt,p=o,v=i.length):n===Cn?l>0&&(d=Cn,p=l,v=s.length):(p=Math.max(o,l),d=p>0?o>l?Dt:Cn:null,v=d?d===Dt?i.length:s.length:0);var h=d===Dt&&hs.test(e[Ce+"Property"]);return{type:d,timeout:p,propCount:v,hasTransform:h}}function ni(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max.apply(null,n.map(function(e,r){return ri(e)+ri(t[r])}))}function ri(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Tn(t,n){var e=t.elm;u(e._leaveCb)&&(e._leaveCb.cancelled=!0,e._leaveCb());var r=Gr(t.data.transition);if(!y(r)&&!(u(e._enterCb)||e.nodeType!==1)){for(var i=r.css,o=r.type,a=r.enterClass,s=r.enterToClass,l=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,v=r.appearActiveClass,h=r.beforeEnter,T=r.enter,E=r.afterEnter,w=r.enterCancelled,lt=r.beforeAppear,R=r.appear,I=r.afterAppear,pt=r.appearCancelled,bt=r.duration,ft=Ct,W=Ct.$vnode;W&&W.parent;)ft=W.context,W=W.parent;var Z=!ft._isMounted||!t.isRootInsert;if(!(Z&&!R&&R!=="")){var Bt=Z&&d?d:a,xe=Z&&v?v:l,Wt=Z&&p?p:s,Y=Z&&lt||h,nt=Z&&typeof R=="function"?R:T,be=Z&&I||E,Yt=Z&&pt||w,Qt=$t(D(bt)?bt.enter:bt),Ft=i!==!1&&!Mt,c=xn(nt),f=e._enterCb=te(function(){Ft&&(et(e,Wt),et(e,xe)),f.cancelled?(Ft&&et(e,Bt),Yt&&Yt(e)):be&&be(e),e._enterCb=null});t.data.show||at(t,"insert",function(){var m=e.parentNode,_=m&&m._pending&&m._pending[t.key];_&&_.tag===t.tag&&_.elm._leaveCb&&_.elm._leaveCb(),nt&&nt(e,f)}),Y&&Y(e),Ft&&(xt(e,Bt),xt(e,xe),Kr(function(){et(e,Bt),f.cancelled||(xt(e,Wt),c||(oi(Qt)?setTimeout(f,Qt):ti(e,o,f)))})),t.data.show&&(n&&n(),nt&&nt(e,f)),!Ft&&!c&&f()}}}function ii(t,n){var e=t.elm;u(e._enterCb)&&(e._enterCb.cancelled=!0,e._enterCb());var r=Gr(t.data.transition);if(y(r)||e.nodeType!==1)return n();if(u(e._leaveCb))return;var i=r.css,o=r.type,a=r.leaveClass,s=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,p=r.leave,v=r.afterLeave,h=r.leaveCancelled,T=r.delayLeave,E=r.duration,w=i!==!1&&!Mt,lt=xn(p),R=$t(D(E)?E.leave:E),I=e._leaveCb=te(function(){e.parentNode&&e.parentNode._pending&&(e.parentNode._pending[t.key]=null),w&&(et(e,s),et(e,l)),I.cancelled?(w&&et(e,a),h&&h(e)):(n(),v&&v(e)),e._leaveCb=null});T?T(pt):pt();function pt(){I.cancelled||(!t.data.show&&e.parentNode&&((e.parentNode._pending||(e.parentNode._pending={}))[t.key]=t),d&&d(e),w&&(xt(e,a),xt(e,l),Kr(function(){et(e,a),I.cancelled||(xt(e,s),lt||(oi(R)?setTimeout(I,R):ti(e,o,I)))})),p&&p(e,I),!w&&!lt&&I())}}function oi(t){return typeof t=="number"&&!isNaN(t)}function xn(t){if(y(t))return!1;var n=t.fns;return u(n)?xn(Array.isArray(n)?n[0]:n):(t._length||t.length)>1}function ai(t,n){n.data.show!==!0&&Tn(n)}var _s=V?{create:ai,activate:ai,remove:function(n,e){n.data.show!==!0?ii(n,e):e()}}:{},gs=[ts,es,as,fs,vs,_s],ys=gs.concat(Ka),Cs=Ga({nodeOps:Ra,modules:ys});Mt&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&bn(t,"input")});var si={inserted:function(n,e,r,i){r.tag==="select"?(i.elm&&!i.elm._vOptions?at(r,"postpatch",function(){si.componentUpdated(n,e,r)}):li(n,e,r.context),n._vOptions=[].map.call(n.options,Te)):(r.tag==="textarea"||vn(n.type))&&(n._vModifiers=e.modifiers,e.modifiers.lazy||(n.addEventListener("compositionstart",As),n.addEventListener("compositionend",ci),n.addEventListener("change",ci),Mt&&(n.vmodel=!0)))},componentUpdated:function(n,e,r){if(r.tag==="select"){li(n,e,r.context);var i=n._vOptions,o=n._vOptions=[].map.call(n.options,Te);if(o.some(function(s,l){return!mt(s,i[l])})){var a=n.multiple?e.value.some(function(s){return fi(s,o)}):e.value!==e.oldValue&&fi(e.value,o);a&&bn(n,"change")}}}};function li(t,n,e){pi(t,n,e),(wt||Ne)&&setTimeout(function(){pi(t,n,e)},0)}function pi(t,n,e){var r=n.value,i=t.multiple;if(!(i&&!Array.isArray(r))){for(var o,a,s=0,l=t.options.length;s<l;s++)if(a=t.options[s],i)o=Fn(r,Te(a))>-1,a.selected!==o&&(a.selected=o);else if(mt(Te(a),r)){t.selectedIndex!==s&&(t.selectedIndex=s);return}i||(t.selectedIndex=-1)}}function fi(t,n){return n.every(function(e){return!mt(e,t)})}function Te(t){return"_value"in t?t._value:t.value}function As(t){t.target.composing=!0}function ci(t){!t.target.composing||(t.target.composing=!1,bn(t.target,"input"))}function bn(t,n){var e=document.createEvent("HTMLEvents");e.initEvent(n,!0,!0),t.dispatchEvent(e)}function Qn(t){return t.componentInstance&&(!t.data||!t.data.transition)?Qn(t.componentInstance._vnode):t}var Ts={bind:function(n,e,r){var i=e.value;r=Qn(r);var o=r.data&&r.data.transition,a=n.__vOriginalDisplay=n.style.display==="none"?"":n.style.display;i&&o?(r.data.show=!0,Tn(r,function(){n.style.display=a})):n.style.display=i?a:"none"},update:function(n,e,r){var i=e.value,o=e.oldValue;if(!i!=!o){r=Qn(r);var a=r.data&&r.data.transition;a?(r.data.show=!0,i?Tn(r,function(){n.style.display=n.__vOriginalDisplay}):ii(r,function(){n.style.display="none"})):n.style.display=i?n.__vOriginalDisplay:"none"}},unbind:function(n,e,r,i,o){o||(n.style.display=n.__vOriginalDisplay)}},xs={model:si,show:Ts},ui={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function En(t){var n=t&&t.componentOptions;return n&&n.Ctor.options.abstract?En(hr(n.children)):t}function di(t){var n={},e=t.$options;for(var r in e.propsData)n[r]=t[r];var i=e._parentListeners;for(var o in i)n[dt(o)]=i[o];return n}function mi(t,n){if(/\d-keep-alive$/.test(n.tag))return t("keep-alive",{props:n.componentOptions.propsData})}function bs(t){for(;t=t.parent;)if(t.data.transition)return!0}function Qs(t,n){return n.key===t.key&&n.tag===t.tag}var Es=function(t){return t.tag||jt(t)},ws=function(t){return t.name==="show"},Ms={name:"transition",props:ui,abstract:!0,render:function(n){var e=this,r=this.$slots.default;if(!!r&&(r=r.filter(Es),!!r.length)){var i=this.mode,o=r[0];if(bs(this.$vnode))return o;var a=En(o);if(!a)return o;if(this._leaving)return mi(n,o);var s="__transition-"+this._uid+"-";a.key=a.key==null?a.isComment?s+"comment":s+a.tag:Lt(a.key)?String(a.key).indexOf(s)===0?a.key:s+a.key:a.key;var l=(a.data||(a.data={})).transition=di(this),d=this._vnode,p=En(d);if(a.data.directives&&a.data.directives.some(ws)&&(a.data.show=!0),p&&p.data&&!Qs(a,p)&&!jt(p)&&!(p.componentInstance&&p.componentInstance._vnode.isComment)){var v=p.data.transition=S({},l);if(i==="out-in")return this._leaving=!0,at(v,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),mi(n,o);if(i==="in-out"){if(jt(a))return d;var h,T=function(){h()};at(l,"afterEnter",T),at(l,"enterCancelled",T),at(v,"delayLeave",function(E){h=E})}}return o}}},vi=S({tag:String,moveClass:String},ui);delete vi.mode;var Ss={props:vi,beforeMount:function(){var n=this,e=this._update;this._update=function(r,i){var o=gr(n);n.__patch__(n._vnode,n.kept,!1,!0),n._vnode=n.kept,o(),e.call(n,r,i)}},render:function(n){for(var e=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),i=this.prevChildren=this.children,o=this.$slots.default||[],a=this.children=[],s=di(this),l=0;l<o.length;l++){var d=o[l];if(d.tag){if(d.key!=null&&String(d.key).indexOf("__vlist")!==0)a.push(d),r[d.key]=d,(d.data||(d.data={})).transition=s;else if(!1)var p,v}}if(i){for(var h=[],T=[],E=0;E<i.length;E++){var w=i[E];w.data.transition=s,w.data.pos=w.elm.getBoundingClientRect(),r[w.key]?h.push(w):T.push(w)}this.kept=n(e,null,h),this.removed=T}return n(e,null,a)},updated:function(){var n=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";!n.length||!this.hasMove(n[0].elm,e)||(n.forEach(Ns),n.forEach(ks),n.forEach(Hs),this._reflow=document.body.offsetHeight,n.forEach(function(r){if(r.data.moved){var i=r.elm,o=i.style;xt(i,e),o.transform=o.WebkitTransform=o.transitionDuration="",i.addEventListener(Ae,i._moveCb=function a(s){s&&s.target!==i||(!s||/transform$/.test(s.propertyName))&&(i.removeEventListener(Ae,a),i._moveCb=null,et(i,e))})}}))},methods:{hasMove:function(n,e){if(!qr)return!1;if(this._hasMove)return this._hasMove;var r=n.cloneNode();n._transitionClasses&&n._transitionClasses.forEach(function(o){Jr(r,o)}),jr(r,e),r.style.display="none",this.$el.appendChild(r);var i=ei(r);return this.$el.removeChild(r),this._hasMove=i.hasTransform}}};function Ns(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function ks(t){t.data.newPos=t.elm.getBoundingClientRect()}function Hs(t){var n=t.data.pos,e=t.data.newPos,r=n.left-e.left,i=n.top-e.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}var Os={Transition:Ms,TransitionGroup:Ss};k.config.mustUseProp=ya;k.config.isReservedTag=kr;k.config.isReservedAttr=_a;k.config.getTagNamespace=Sa;k.config.isUnknownElement=Na;S(k.options.directives,xs);S(k.options.components,Os);k.prototype.__patch__=V?Cs:L;k.prototype.$mount=function(t,n){return t=t&&V?ka(t):void 0,Xo(this,t,n)};V&&setTimeout(function(){F.devtools&&ie&&ie.emit("init",k)},0);var wn=k;var Ds={name:"Loader"},hi=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t._m(0)},Bs=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"loader"}),t._v(" "),e("span",[t._v("loading..")])])}];hi._withStripped=!0;var Fs=function(t){!t||t("data-v-a6f90cf8_0",{source:`
.loader[data-v-a6f90cf8] {
  filter: none !important;
  z-index: 5;
  border: solid 2px red;
  position: relative;
  left: calc(50% - 40px);
  border: 16px solid #cccccc; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 0;
  margin-top: 20px;
  animation: spin-data-v-a6f90cf8 2s linear infinite;
}
@keyframes spin-data-v-a6f90cf8 {
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
}
`,map:{version:3,sources:["src/components/Loader.vue"],names:[],mappings:";AAaA;EACA,uBAAA;EACA,UAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,0BAAA,EAAA,eAAA;EACA,8BAAA,EAAA,SAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,kDAAA;AACA;AAEA;AACA;IACA,uBAAA;AACA;AACA;IACA,yBAAA;AACA;AACA",file:"Loader.vue",sourcesContent:[`<template>
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
  width: 60px;
  height: 60px;
  padding: 0;
  margin-top: 20px;
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
`]},media:void 0})},Ls="data-v-a6f90cf8",$s=void 0,Is=!1;function Xs(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};p.__file=`<template>
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
  width: 60px;
  height: 60px;
  padding: 0;
  margin-top: 20px;
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
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r;{let v;if(n&&(v=a?function(h){n.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){n.call(this,s(h))}),v!==void 0)if(p.functional){let h=p.render;p.render=function(E,w){return v.call(w),h(E,w)}}else{let h=p.beforeCreate;p.beforeCreate=h?[].concat(h,v):[v]}}return p}function Mn(){let t=Mn.styles||(Mn.styles={}),n=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=n?i.media||"default":r,a=t[o]||(t[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=i.source,l=a.ids.length;if(a.ids.push(r),n&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let d=document.head||document.getElementsByTagName("head")[0],p=a.element=document.createElement("style");p.type="text/css",i.media&&p.setAttribute("media",i.media),n&&(p.setAttribute("data-group",o),p.setAttribute("data-next-index","0")),d.appendChild(p)}if(n&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(s),p=a.element.childNodes;p[l]&&a.element.removeChild(p[l]),p.length?a.element.insertBefore(d,p[l]):a.element.appendChild(d)}}}}var Vs=Xs({render:hi,staticRenderFns:Bs},Fs,Ds,Ls,Is,$s,!1,Mn,void 0,void 0),_i=Vs;var Us={name:"Equation"},gi=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"50",viewBox:"0 -750 13892.7 1000","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("path",{attrs:{id:"MJX-52-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-N-2208",d:"M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-D-5A",d:"M39 -1Q29 9 29 12Q29 23 60 77T219 337L410 648H364Q261 648 210 628Q168 612 142 588T109 545T97 509T88 490Q85 489 80 489Q72 489 61 503L70 588Q72 607 75 628T79 662T81 675Q84 677 88 681Q90 683 341 683H592Q604 673 604 666Q604 662 412 348L221 37Q221 35 301 35Q406 35 446 48Q504 68 543 111T597 212Q602 239 617 239Q624 239 629 234T635 223Q635 215 621 113T604 8L597 1Q595 -1 317 -1H39ZM148 637L166 648H112V632Q111 629 110 622T108 612Q108 608 110 608T116 612T129 623T148 637ZM552 646Q552 648 504 648Q452 648 450 643Q448 639 266 343T77 37Q77 35 128 35H179L366 339L552 646ZM572 35Q581 89 581 97L561 77Q542 59 526 48L508 37L539 35H572Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-N-2264",d:"M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-I-6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-I-64",d:"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-52-TEX-N-3E",d:"M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z"}})]),t._v(" "),e("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[e("g",{attrs:{"data-mml-node":"math"}},[e("g",{attrs:{"data-mml-node":"mtable"}},[e("g",{attrs:{"data-mml-node":"mtr"}},[e("g",{attrs:{"data-mml-node":"mtd"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-61"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(529, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2C"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(973.7, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-62"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1402.7, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2C"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(1847.3, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-63"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(2558.1, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2208"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(3502.9, 0)"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-D-5A"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(4169.9, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2C"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mstyle",transform:"translate(4614.6, 0)"}},[e("g",{attrs:{"data-mml-node":"mspace"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(5614.6, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-63"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(6325.3, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2264"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(7381.1, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-30"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mstyle",transform:"translate(7881.1, 0)"}},[e("g",{attrs:{"data-mml-node":"mspace"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(8881.1, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-61"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(9410.1, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-6E"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(10010.1, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-64"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mstyle",transform:"translate(10530.1, 0)"}},[e("g",{attrs:{"data-mml-node":"mspace"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(11530.1, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-61"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(12336.9, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-3E"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(13392.7, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-30"}})])])])])])])]),t._v(" "),e("br"),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"50",viewBox:"0 -1458 11066 2416","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("path",{attrs:{id:"MJX-87-TEX-I-78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-SO-221A",d:"M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-N-34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),e("path",{attrs:{id:"MJX-87-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),t._v(" "),e("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[e("g",{attrs:{"data-mml-node":"math"}},[e("g",{attrs:{"data-mml-node":"mtable"}},[e("g",{attrs:{"data-mml-node":"mtr",transform:"translate(0, -262)"}},[e("g",{attrs:{"data-mml-node":"mtd"}},[e("g",{attrs:{"data-mml-node":"msub"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-31"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(975.6, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2C"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"msub",transform:"translate(1420.2, 0)"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(2673.6, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-3D"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3729.3, 0)"}},[e("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 787.5)"}},[e("g",{attrs:{"data-mml-node":"mo"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(778, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1429.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-B1"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"msqrt",transform:"translate(2429.4, 0)"}},[e("g",{attrs:{transform:"translate(1000, 0)"}},[e("g",{attrs:{"data-mml-node":"mi"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(429, 0)"}},[e("g",{attrs:{"data-mml-node":"mo"}},[e("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v(`
                            \xB2
                          `)])])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(1005, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mn",transform:"translate(2005.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-34"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(2505.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(3034.2, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-63"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mo",transform:"translate(0, 22.5)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-SO-221A"}})]),t._v(" "),e("rect",{attrs:{width:"3467.2",height:"60",x:"1000",y:"812.5"}})])]),t._v(" "),e("g",{attrs:{"data-mml-node":"mrow",transform:"translate(3153.8, -686)"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})]),t._v(" "),e("g",{attrs:{"data-mml-node":"mi",transform:"translate(500, 0)"}},[e("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})])]),t._v(" "),e("rect",{attrs:{width:"7096.7",height:"60",x:"120",y:"220"}})])])])])])])])])},Ps=[];gi._withStripped=!0;var Rs=void 0,Zs=void 0,js=void 0,Js=!1;function Gs(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="50"
      viewBox="0 -750 13892.7 1000"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          id="MJX-52-TEX-I-61"
          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"
        ></path>
        <path
          id="MJX-52-TEX-N-2C"
          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
        ></path>
        <path
          id="MJX-52-TEX-I-62"
          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"
        ></path>
        <path
          id="MJX-52-TEX-I-63"
          d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"
        ></path>
        <path
          id="MJX-52-TEX-N-2208"
          d="M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"
        ></path>
        <path
          id="MJX-52-TEX-D-5A"
          d="M39 -1Q29 9 29 12Q29 23 60 77T219 337L410 648H364Q261 648 210 628Q168 612 142 588T109 545T97 509T88 490Q85 489 80 489Q72 489 61 503L70 588Q72 607 75 628T79 662T81 675Q84 677 88 681Q90 683 341 683H592Q604 673 604 666Q604 662 412 348L221 37Q221 35 301 35Q406 35 446 48Q504 68 543 111T597 212Q602 239 617 239Q624 239 629 234T635 223Q635 215 621 113T604 8L597 1Q595 -1 317 -1H39ZM148 637L166 648H112V632Q111 629 110 622T108 612Q108 608 110 608T116 612T129 623T148 637ZM552 646Q552 648 504 648Q452 648 450 643Q448 639 266 343T77 37Q77 35 128 35H179L366 339L552 646ZM572 35Q581 89 581 97L561 77Q542 59 526 48L508 37L539 35H572Z"
        ></path>
        <path
          id="MJX-52-TEX-N-2264"
          d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"
        ></path>
        <path
          id="MJX-52-TEX-N-30"
          d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"
        ></path>
        <path
          id="MJX-52-TEX-I-6E"
          d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"
        ></path>
        <path
          id="MJX-52-TEX-I-64"
          d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"
        ></path>
        <path
          id="MJX-52-TEX-N-3E"
          d="M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z"
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
            <g data-mml-node="mtr">
              <g data-mml-node="mtd">
                <g data-mml-node="mi">
                  <use xlink:href="#MJX-52-TEX-I-61"></use>
                </g>
                <g data-mml-node="mo" transform="translate(529, 0)">
                  <use xlink:href="#MJX-52-TEX-N-2C"></use>
                </g>
                <g data-mml-node="mi" transform="translate(973.7, 0)">
                  <use xlink:href="#MJX-52-TEX-I-62"></use>
                </g>
                <g data-mml-node="mo" transform="translate(1402.7, 0)">
                  <use xlink:href="#MJX-52-TEX-N-2C"></use>
                </g>
                <g data-mml-node="mi" transform="translate(1847.3, 0)">
                  <use xlink:href="#MJX-52-TEX-I-63"></use>
                </g>
                <g data-mml-node="mo" transform="translate(2558.1, 0)">
                  <use xlink:href="#MJX-52-TEX-N-2208"></use>
                </g>
                <g data-mml-node="TeXAtom" transform="translate(3502.9, 0)">
                  <g data-mml-node="mi">
                    <use xlink:href="#MJX-52-TEX-D-5A"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(4169.9, 0)">
                  <use xlink:href="#MJX-52-TEX-N-2C"></use>
                </g>
                <g data-mml-node="mstyle" transform="translate(4614.6, 0)">
                  <g data-mml-node="mspace"></g>
                </g>
                <g data-mml-node="mi" transform="translate(5614.6, 0)">
                  <use xlink:href="#MJX-52-TEX-I-63"></use>
                </g>
                <g data-mml-node="mo" transform="translate(6325.3, 0)">
                  <use xlink:href="#MJX-52-TEX-N-2264"></use>
                </g>
                <g data-mml-node="mn" transform="translate(7381.1, 0)">
                  <use xlink:href="#MJX-52-TEX-N-30"></use>
                </g>
                <g data-mml-node="mstyle" transform="translate(7881.1, 0)">
                  <g data-mml-node="mspace"></g>
                </g>
                <g data-mml-node="mi" transform="translate(8881.1, 0)">
                  <use xlink:href="#MJX-52-TEX-I-61"></use>
                </g>
                <g data-mml-node="mi" transform="translate(9410.1, 0)">
                  <use xlink:href="#MJX-52-TEX-I-6E"></use>
                </g>
                <g data-mml-node="mi" transform="translate(10010.1, 0)">
                  <use xlink:href="#MJX-52-TEX-I-64"></use>
                </g>
                <g data-mml-node="mstyle" transform="translate(10530.1, 0)">
                  <g data-mml-node="mspace"></g>
                </g>
                <g data-mml-node="mi" transform="translate(11530.1, 0)">
                  <use xlink:href="#MJX-52-TEX-I-61"></use>
                </g>
                <g data-mml-node="mo" transform="translate(12336.9, 0)">
                  <use xlink:href="#MJX-52-TEX-N-3E"></use>
                </g>
                <g data-mml-node="mn" transform="translate(13392.7, 0)">
                  <use xlink:href="#MJX-52-TEX-N-30"></use>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <br />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="50"
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
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r,p}var zs=Gs({render:gi,staticRenderFns:Ps},Rs,Us,Zs,Js,js,!1,void 0,void 0,void 0),yi=zs;var qs={},Ci=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"logo",attrs:{viewBox:"0 0 648 121",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z",fill:"url(#paint0_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z",fill:"url(#paint1_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z",fill:"url(#paint2_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z",fill:"url(#paint3_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z",fill:"url(#paint4_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z",fill:"url(#paint5_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z",fill:"url(#paint6_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z",fill:"url(#paint7_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z",fill:"url(#paint8_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z",fill:"url(#paint9_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z",fill:"url(#paint10_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M84.6285 34.026H92.6247V26.027H84.6285V34.026Z",fill:"url(#paint11_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z",fill:"url(#paint12_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M108.791 14.4016H123.17V0H108.791V14.4016Z",fill:"url(#paint13_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z",fill:"url(#paint14_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M97.811 33.2278H104.194V26.8426H97.811V33.2278Z",fill:"url(#paint15_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M110.803 27.953H120.395V18.3578H110.803V27.953Z",fill:"url(#paint16_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M106.623 38.0341H110.942V33.7137H106.623V38.0341Z",fill:"url(#paint17_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M114.792 42.4067H121.175V36.0388H114.792V42.4067Z",fill:"url(#paint18_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z",fill:"url(#paint19_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z",fill:"url(#paint20_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z",fill:"url(#paint21_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z",fill:"url(#paint22_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z",fill:"url(#paint23_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z",fill:"url(#paint24_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z",fill:"url(#paint25_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z",fill:"url(#paint26_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z",fill:"url(#paint27_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z",fill:"url(#paint28_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z",fill:"url(#paint29_linear_3_40)"}}),t._v(" "),e("path",{attrs:{d:"M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z",fill:"url(#paint30_linear_3_40)"}}),t._v(" "),e("defs",[e("linearGradient",{attrs:{id:"paint0_linear_3_40",x1:"16.2335",y1:"78.5655",x2:"90.5021",y2:"14.0713",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint1_linear_3_40",x1:"33.4419",y1:"98.3816",x2:"107.71",y2:"33.8874",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint2_linear_3_40",x1:"51.0435",y1:"118.651",x2:"125.312",y2:"54.1567",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint3_linear_3_40",x1:"62.0301",y1:"131.303",x2:"136.299",y2:"66.8084",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint4_linear_3_40",x1:"46.0063",y1:"112.85",x2:"120.275",y2:"48.3561",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint5_linear_3_40",x1:"22.5737",y1:"85.8663",x2:"96.8421",y2:"21.3722",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint6_linear_3_40",x1:"5.30527",y1:"65.9808",x2:"79.5737",y2:"1.48666",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint7_linear_3_40",x1:"39.9594",y1:"105.887",x2:"114.228",y2:"41.3928",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint8_linear_3_40",x1:"14.3736",y1:"76.4235",x2:"88.642",y2:"11.9294",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint9_linear_3_40",x1:"30.2892",y1:"94.7512",x2:"104.558",y2:"30.2571",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint10_linear_3_40",x1:"21.9139",y1:"85.1065",x2:"96.1823",y2:"20.6124",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint11_linear_3_40",x1:"23.3495",y1:"86.7596",x2:"97.618",y2:"22.2656",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint12_linear_3_40",x1:"11.5745",y1:"73.2003",x2:"85.8427",y2:"8.70587",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint13_linear_3_40",x1:"23.8107",y1:"87.2911",x2:"98.0794",y2:"22.7968",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint14_linear_3_40",x1:"23.6893",y1:"87.1514",x2:"97.958",y2:"22.657",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint15_linear_3_40",x1:"28.6723",y1:"92.8895",x2:"102.941",y2:"28.3951",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint16_linear_3_40",x1:"31.5413",y1:"96.193",x2:"105.81",y2:"31.6988",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint17_linear_3_40",x1:"34.9074",y1:"100.07",x2:"109.176",y2:"35.5752",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint18_linear_3_40",x1:"40.5234",y1:"106.536",x2:"114.792",y2:"42.0425",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint19_linear_3_40",x1:"17.9841",y1:"80.5813",x2:"92.2529",y2:"16.0874",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint20_linear_3_40",x1:"31.505",y1:"96.1513",x2:"105.774",y2:"31.6572",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint21_linear_3_40",x1:"39.6018",y1:"105.475",x2:"113.87",y2:"40.9808",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint22_linear_3_40",x1:"156.752",y1:"71.2438",x2:"644.928",y2:"71.2438",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint23_linear_3_40",x1:"156.752",y1:"80.3112",x2:"644.928",y2:"80.3112",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint24_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint25_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint26_linear_3_40",x1:"156.752",y1:"89.2923",x2:"644.928",y2:"89.2923",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint27_linear_3_40",x1:"156.752",y1:"71.3085",x2:"644.928",y2:"71.3085",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint28_linear_3_40",x1:"156.752",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint29_linear_3_40",x1:"156.752",y1:"71.287",x2:"644.928",y2:"71.287",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"paint30_linear_3_40",x1:"156.753",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[e("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),e("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),e("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])},Ws=[];Ci._withStripped=!0;var Ys=void 0,Ks=void 0,t1=void 0,e1=!1;function n1(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
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
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r,p}var r1=n1({render:Ci,staticRenderFns:Ws},Ys,qs,Ks,e1,t1,!1,void 0,void 0,void 0),Ai=r1;var i1={},Ti=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{staticClass:"github",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])},o1=[];Ti._withStripped=!0;var a1=void 0,s1=void 0,l1=void 0,p1=!1;function f1(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};return p.__file=`<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="github" viewBox="0 0 24 24">
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  </svg>
</template>
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r,p}var c1=f1({render:Ti,staticRenderFns:o1},a1,i1,s1,p1,l1,!1,void 0,void 0,void 0),xi=c1;var u1;async function bi(){let[t,n,e]=d1();u1=await import("./contract-util-HFAA2K3S.js");let[r,i]=Sn(t,n,e);return console.log(`deployed snapp with equation of form ${t}x\xB2 + ${n}x - ${e}; possible solutions would be x1 = ${r}, x2 = ${i}`),[t,n,e]}function d1(){let t=0,n=0,e=0,r=15;do t=Math.floor(Math.random()*r+1),n=Math.floor(Math.random()*r),e=Math.floor(Math.random()*r),t==0&&(t=1);while(Sn(t,n,e)[0]%1!=0||Sn(t,n,e)[1]%1!=0);return[t,n,e]}function Sn(t,n,e){e>0&&(e=e*-1);let r,i,o=n*n-4*t*e;return o>0?(r=(-n+Math.sqrt(o))/(2*t),i=(-n-Math.sqrt(o))/(2*t)):o==0&&(r=i=-n/(2*t)),[r,i]}var m1={name:"App",components:{Loader:_i,Equation:yi,GithubLogo:xi,ProxyLabsLogo:Ai},data(){return{params:[0,0,0],isDeployed:!1,deploying:!1,showHint:!1,beingSubmited:!1,atPage:0}},methods:{getEquation(){let t=`${this.params[0]}x\xB2 + ${this.params[1]}x - ${this.params[2]} = 0`;return this.params[1]!=0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 + ${this.params[1]}x - ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 - ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 = 0`),this.params[1]!=0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 + ${this.params[1]}x = 0`),t},next(){this.atPage++},async deploy(){this.deploying=!0,this.params=await bi(),this.isDeployed=!0,this.deploying=!1}}},Qi=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("ProxyLabsLogo"),t._v(" "),e("GithubLogo")],1),t._v(" "),e("h1",{staticClass:"title"},[t._v("Mina Secret Exchange")]),t._v(" "),e("h3",{staticClass:"sub"},[t._v(`
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
      `)]),t._v(" "),t.isDeployed?t._e():e("button",{staticClass:"deploy-btn",on:{click:function(r){return t.deploy()}}},[e("span",[t._v("Deploy the contract")])]),t._v(" "),t.isDeployed?e("button",{staticClass:"continue-btn",on:{click:function(r){return t.next()}}},[e("span",[t._v("Continue")])]):t._e()],1):t._e(),t._v(" "),t.atPage==1?e("div",[e("h2",{staticStyle:{border:"2px red dotted","margin-left":"40%","margin-right":"40%","margin-top":"25px"}},[e("h5",{staticStyle:{"margin-top":"5px"}},[t._v("Here is your equation:")]),t._v(`
        `+t._s(t.getEquation())+`
      `)]),t._v(" "),e("h5",{staticStyle:{"margin-top":"10px"}},[t._v(`
        Please provide one possible solution to this equation to proceed
      `)]),t._v(" "),e("Loader",{style:t.beingSubmited?"visibility: visible;":"visibility: hidden;"}),t._v(" "),e("div",{staticClass:"content",staticStyle:{display:"flex","margin-left":"30%","margin-right":"30%"}},[e("div",{staticClass:"left",staticStyle:{width:"50%"}},[e("div",{staticClass:"hint",style:t.showHint?"visibility: visible;":"visibility: hidden;"},[e("Equation")],1),t._v(" "),t.showHint?t._e():e("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"12px"},on:{click:function(r){t.showHint=!0}}},[e("span",[t._v("Show Hint")])]),t._v(" "),t.showHint?e("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"12px"},on:{click:function(r){t.showHint=!1}}},[e("span",[t._v("Hide Hint")])]):t._e()]),t._v(" "),e("div",{staticClass:"right",staticStyle:{width:"50%"}},[e("h3",[t._v("Possible solution")]),t._v(" "),e("input",{staticClass:"submission",attrs:{type:"text"}}),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"submit-btn",staticStyle:{"margin-top":"35px"},on:{click:function(r){t.beingSubmited=!0}}},[e("span",[t._v("Submit")])])]),t._v(" "),e("br")])],1):t._e()])])},v1=[];Qi._withStripped=!0;var h1=function(t){!t||t("data-v-18fd0bee_0",{source:`
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
`,map:{version:3,sources:["src/App.vue"],names:[],mappings:";AAuKA,qHAAA;AAEA;EACA,sCAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;;EAEA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;;EAEA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA;;yCAEA;AACA;AAEA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AACA;AAEA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,sCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AACA",file:"App.vue",sourcesContent:[`<template>
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
        <h2
          style="
            border: 2px red dotted;
            margin-left: 40%;
            margin-right: 40%;
            margin-top: 25px;
          "
        >
          <h5 style="margin-top: 5px">Here is your equation:</h5>
          {{ getEquation() }}
        </h2>
        <h5 style="margin-top: 10px">
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
              style="margin-top: 12px"
              @click="showHint = false"
            >
              <span>Hide Hint</span>
            </button>
          </div>
          <div class="right" style="width: 50%">
            <h3>Possible solution</h3>
            <input type="text" class="submission" />
            <br />
            <button
              class="submit-btn"
              style="margin-top: 35px"
              @click="beingSubmited = true"
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

import { init } from "../dist/snapp/snapp.js";

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
      atPage: 0,
    };
  },
  methods: {
    getEquation() {
      let eq = \`\${this.params[0]}x\xB2 + \${this.params[1]}x - \${this.params[2]} = 0\`;
      if (this.params[1] != 0 && this.params[2] != 0) {
        eq = \`\${this.params[0]}x\xB2 + \${this.params[1]}x - \${this.params[2]} = 0\`;
      }
      if (this.params[1] == 0 && this.params[2] != 0) {
        eq = \`\${this.params[0]}x\xB2 - \${this.params[2]} = 0\`;
      }
      if (this.params[1] == 0 && this.params[2] == 0) {
        eq = \`\${this.params[0]}x\xB2 = 0\`;
      }
      if (this.params[1] != 0 && this.params[2] == 0) {
        eq = \`\${this.params[0]}x\xB2 + \${this.params[1]}x = 0\`;
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
`]},media:void 0})},_1=void 0,g1=void 0,y1=!1;function C1(t,n,e,r,i,o,a,s,l,d){let p=(typeof e=="function"?e.options:e)||{};p.__file=`<template>
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
        <h2
          style="
            border: 2px red dotted;
            margin-left: 40%;
            margin-right: 40%;
            margin-top: 25px;
          "
        >
          <h5 style="margin-top: 5px">Here is your equation:</h5>
          {{ getEquation() }}
        </h2>
        <h5 style="margin-top: 10px">
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
              style="margin-top: 12px"
              @click="showHint = false"
            >
              <span>Hide Hint</span>
            </button>
          </div>
          <div class="right" style="width: 50%">
            <h3>Possible solution</h3>
            <input type="text" class="submission" />
            <br />
            <button
              class="submit-btn"
              style="margin-top: 35px"
              @click="beingSubmited = true"
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

import { init } from "../dist/snapp/snapp.js";

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
      atPage: 0,
    };
  },
  methods: {
    getEquation() {
      let eq = \`\${this.params[0]}x\xB2 + \${this.params[1]}x - \${this.params[2]} = 0\`;
      if (this.params[1] != 0 && this.params[2] != 0) {
        eq = \`\${this.params[0]}x\xB2 + \${this.params[1]}x - \${this.params[2]} = 0\`;
      }
      if (this.params[1] == 0 && this.params[2] != 0) {
        eq = \`\${this.params[0]}x\xB2 - \${this.params[2]} = 0\`;
      }
      if (this.params[1] == 0 && this.params[2] == 0) {
        eq = \`\${this.params[0]}x\xB2 = 0\`;
      }
      if (this.params[1] != 0 && this.params[2] == 0) {
        eq = \`\${this.params[0]}x\xB2 + \${this.params[1]}x = 0\`;
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
`,p.render||(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,i&&(p.functional=!0)),p._scopeId=r;{let v;if(n&&(v=a?function(h){n.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){n.call(this,s(h))}),v!==void 0)if(p.functional){let h=p.render;p.render=function(E,w){return v.call(w),h(E,w)}}else{let h=p.beforeCreate;p.beforeCreate=h?[].concat(h,v):[v]}}return p}function Nn(){let t=Nn.styles||(Nn.styles={}),n=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,i){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let o=n?i.media||"default":r,a=t[o]||(t[o]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=i.source,l=a.ids.length;if(a.ids.push(r),n&&(a.element=a.element||document.querySelector("style[data-group="+o+"]")),!a.element){let d=document.head||document.getElementsByTagName("head")[0],p=a.element=document.createElement("style");p.type="text/css",i.media&&p.setAttribute("media",i.media),n&&(p.setAttribute("data-group",o),p.setAttribute("data-next-index","0")),d.appendChild(p)}if(n&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(s),p=a.element.childNodes;p[l]&&a.element.removeChild(p[l]),p.length?a.element.insertBefore(d,p[l]):a.element.appendChild(d)}}}}var A1=C1({render:Qi,staticRenderFns:v1},h1,m1,_1,y1,g1,!1,Nn,void 0,void 0),Ei=A1;wn.config.productionTip=!1;new wn({render:t=>t(Ei)}).$mount("#app");
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
