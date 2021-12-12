var q=Object.freeze({});function g(t){return t==null}function d(t){return t!=null}function F(t){return t===!0}function Qo(t){return t===!1}function Vt(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function H(t){return t!==null&&typeof t=="object"}var Bn=Object.prototype.toString;function Q(t){return Bn.call(t)==="[object Object]"}function He(t){return Bn.call(t)==="[object RegExp]"}function De(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function Fn(t){return d(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function Lo(t){return t==null?"":Array.isArray(t)||Q(t)&&t.toString===Bn?JSON.stringify(t,null,2):String(t)}function Qt(t){var e=parseFloat(t);return isNaN(e)?t:e}function j(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(i){return n[i.toLowerCase()]}:function(i){return n[i]}}var e2=j("slot,component",!0),Po=j("key,ref,slot,slot-scope,is");function K(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var Ro=Object.prototype.hasOwnProperty;function D(t,e){return Ro.call(t,e)}function dt(t){var e=Object.create(null);return function(r){var o=e[r];return o||(e[r]=t(r))}}var Go=/-(\w)/g,ut=dt(function(t){return t.replace(Go,function(e,n){return n?n.toUpperCase():""})}),Zo=dt(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),jo=/\B([A-Z])/g,Lt=dt(function(t){return t.replace(jo,"-$1").toLowerCase()});function Xo(t,e){function n(r){var o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,r):t.call(e)}return n._length=t.length,n}function zo(t,e){return t.bind(e)}var qo=Function.prototype.bind?zo:Xo;function On(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function B(t,e){for(var n in e)t[n]=e[n];return t}function $e(t){for(var e={},n=0;n<t.length;n++)t[n]&&B(e,t[n]);return e}function I(t,e,n){}var nn=function(t,e,n){return!1},Ie=function(t){return t};function vt(t,e){if(t===e)return!0;var n=H(t),r=H(e);if(n&&r)try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(l,u){return vt(l,e[u])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(!o&&!i){var a=Object.keys(t),p=Object.keys(e);return a.length===p.length&&a.every(function(l){return vt(t[l],e[l])})}else return!1}catch{return!1}else return!n&&!r?String(t)===String(e):!1}function Ue(t,e){for(var n=0;n<t.length;n++)if(vt(t[n],e))return n;return-1}function en(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var Ve="data-server-rendered",rn=["component","directive","filter"],Qe=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],$={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:nn,isReservedAttr:nn,isUnknownElement:nn,getTagNamespace:I,parsePlatformTagName:Ie,mustUseProp:nn,async:!0,_lifecycleHooks:Qe},Yo=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Jo(t){var e=(t+"").charCodeAt(0);return e===36||e===95}function St(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Wo=new RegExp("[^"+Yo.source+".$_\\d]");function Ko(t){if(!Wo.test(t)){var e=t.split(".");return function(n){for(var r=0;r<e.length;r++){if(!n)return;n=n[e[r]]}return n}}}var ti="__proto__"in{},L=typeof window!="undefined",Mn=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,Le=Mn&&WXEnvironment.platform.toLowerCase(),N=L&&window.navigator.userAgent.toLowerCase(),Tt=N&&/msie|trident/.test(N),kt=N&&N.indexOf("msie 9.0")>0,Nn=N&&N.indexOf("edge/")>0,r2=N&&N.indexOf("android")>0||Le==="android",ni=N&&/iphone|ipad|ipod|ios/.test(N)||Le==="ios",o2=N&&/chrome\/\d+/.test(N)&&!Nn,i2=N&&/phantomjs/.test(N),Pe=N&&N.match(/firefox\/(\d+)/),Hn={}.watch,Re=!1;if(L)try{Dn={},Object.defineProperty(Dn,"passive",{get:function(){Re=!0}}),window.addEventListener("test-passive",null,Dn)}catch{}var Dn,on,an=function(){return on===void 0&&(!L&&!Mn&&typeof global!="undefined"?on=global.process&&global.process.env.VUE_ENV==="server":on=!1),on},sn=L&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Bt(t){return typeof t=="function"&&/native code/.test(t.toString())}var pn=typeof Symbol!="undefined"&&Bt(Symbol)&&typeof Reflect!="undefined"&&Bt(Reflect.ownKeys),Pt;typeof Set!="undefined"&&Bt(Set)?Pt=Set:Pt=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(n){return this.set[n]===!0},t.prototype.add=function(n){this.set[n]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var Ge=I;var ei=0,P=function(){this.id=ei++,this.subs=[]};P.prototype.addSub=function(e){this.subs.push(e)};P.prototype.removeSub=function(e){K(this.subs,e)};P.prototype.depend=function(){P.target&&P.target.addDep(this)};P.prototype.notify=function(){for(var e=this.subs.slice(),n=0,r=e.length;n<r;n++)e[n].update()};P.target=null;var ln=[];function Rt(t){ln.push(t),P.target=t}function Gt(){ln.pop(),P.target=ln[ln.length-1]}var U=function(e,n,r,o,i,a,p,l){this.tag=e,this.data=n,this.children=r,this.text=o,this.elm=i,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=n&&n.key,this.componentOptions=p,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ze={child:{configurable:!0}};Ze.child.get=function(){return this.componentInstance};Object.defineProperties(U.prototype,Ze);var _t=function(t){t===void 0&&(t="");var e=new U;return e.text=t,e.isComment=!0,e};function Ft(t){return new U(void 0,void 0,void 0,String(t))}function $n(t){var e=new U(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var je=Array.prototype,cn=Object.create(je),ri=["push","pop","shift","unshift","splice","sort","reverse"];ri.forEach(function(t){var e=je[t];St(cn,t,function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];var i=e.apply(this,r),a=this.__ob__,p;switch(t){case"push":case"unshift":p=r;break;case"splice":p=r.slice(2);break}return p&&a.observeArray(p),a.dep.notify(),i})});var oi=Object.getOwnPropertyNames(cn),In=!0;function it(t){In=t}var fn=function(e){this.value=e,this.dep=new P,this.vmCount=0,St(e,"__ob__",this),Array.isArray(e)?(ti?ii(e,cn):ai(e,cn,oi),this.observeArray(e)):this.walk(e)};fn.prototype.walk=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)mt(e,n[r])};fn.prototype.observeArray=function(e){for(var n=0,r=e.length;n<r;n++)ht(e[n])};function ii(t,e){t.__proto__=e}function ai(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];St(t,i,e[i])}}function ht(t,e){if(!(!H(t)||t instanceof U)){var n;return D(t,"__ob__")&&t.__ob__ instanceof fn?n=t.__ob__:In&&!an()&&(Array.isArray(t)||Q(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new fn(t)),e&&n&&n.vmCount++,n}}function mt(t,e,n,r,o){var i=new P,a=Object.getOwnPropertyDescriptor(t,e);if(!(a&&a.configurable===!1)){var p=a&&a.get,l=a&&a.set;(!p||l)&&arguments.length===2&&(n=t[e]);var u=!o&&ht(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var h=p?p.call(t):n;return P.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(h)&&ze(h))),h},set:function(h){var _=p?p.call(t):n;h===_||h!==h&&_!==_||p&&!l||(l?l.call(t,h):n=h,u=!o&&ht(h),i.notify())}})}}function Un(t,e,n){if(Array.isArray(t)&&De(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(mt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Xe(t,e){if(Array.isArray(t)&&De(e)){t.splice(e,1);return}var n=t.__ob__;t._isVue||n&&n.vmCount||!D(t,e)||(delete t[e],!!n&&n.dep.notify())}function ze(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&ze(e)}var Y=$.optionMergeStrategies;function Vn(t,e){if(!e)return t;for(var n,r,o,i=pn?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],n!=="__ob__"&&(r=t[n],o=e[n],D(t,n)?r!==o&&Q(r)&&Q(o)&&Vn(r,o):Un(t,n,o));return t}function Qn(t,e,n){return n?function(){var o=typeof e=="function"?e.call(n,n):e,i=typeof t=="function"?t.call(n,n):t;return o?Vn(o,i):i}:e?t?function(){return Vn(typeof e=="function"?e.call(this,this):e,typeof t=="function"?t.call(this,this):t)}:e:t}Y.data=function(t,e,n){return n?Qn(t,e,n):e&&typeof e!="function"?t:Qn(t,e)};function si(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n&&pi(n)}function pi(t){for(var e=[],n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e}Qe.forEach(function(t){Y[t]=si});function li(t,e,n,r){var o=Object.create(t||null);return e?B(o,e):o}rn.forEach(function(t){Y[t+"s"]=li});Y.watch=function(t,e,n,r){if(t===Hn&&(t=void 0),e===Hn&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};B(o,t);for(var i in e){var a=o[i],p=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(p):Array.isArray(p)?p:[p]}return o};Y.props=Y.methods=Y.inject=Y.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return B(o,t),e&&B(o,e),o};Y.provide=Qn;var ci=function(t,e){return e===void 0?t:e};function fi(t,e){var n=t.props;if(!!n){var r={},o,i,a;if(Array.isArray(n))for(o=n.length;o--;)i=n[o],typeof i=="string"&&(a=ut(i),r[a]={type:null});else if(Q(n))for(var p in n)i=n[p],a=ut(p),r[a]=Q(i)?i:{type:i};t.props=r}}function di(t,e){var n=t.inject;if(!!n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(Q(n))for(var i in n){var a=n[i];r[i]=Q(a)?B({from:i},a):{from:a}}}}function ui(t){var e=t.directives;if(e)for(var n in e){var r=e[n];typeof r=="function"&&(e[n]={bind:r,update:r})}}function At(t,e,n){if(typeof e=="function"&&(e=e.options),fi(e,n),di(e,n),ui(e),!e._base&&(e.extends&&(t=At(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=At(t,e.mixins[r],n);var i={},a;for(a in t)p(a);for(a in e)D(t,a)||p(a);function p(l){var u=Y[l]||ci;i[l]=u(t[l],e[l],n,l)}return i}function Ln(t,e,n,r){if(typeof n=="string"){var o=t[e];if(D(o,n))return o[n];var i=ut(n);if(D(o,i))return o[i];var a=Zo(i);if(D(o,a))return o[a];var p=o[n]||o[i]||o[a];return p}}function Pn(t,e,n,r){var o=e[t],i=!D(n,t),a=n[t],p=Ye(Boolean,o.type);if(p>-1){if(i&&!D(o,"default"))a=!1;else if(a===""||a===Lt(t)){var l=Ye(String,o.type);(l<0||p<l)&&(a=!0)}}if(a===void 0){a=vi(r,o,t);var u=In;it(!0),ht(a),it(u)}return a}function vi(t,e,n){if(!!D(e,"default")){var r=e.default;return t&&t.$options.propsData&&t.$options.propsData[n]===void 0&&t._props[n]!==void 0?t._props[n]:typeof r=="function"&&Rn(e.type)!=="Function"?r.call(t):r}}var _i=/^\s*function (\w+)/;function Rn(t){var e=t&&t.toString().match(_i);return e?e[1]:""}function qe(t,e){return Rn(t)===Rn(e)}function Ye(t,e){if(!Array.isArray(e))return qe(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(qe(e[n],t))return n;return-1}function gt(t,e,n){Rt();try{if(e)for(var r=e;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=o[i].call(r,t,e,n)===!1;if(a)return}catch(p){Je(p,r,"errorCaptured hook")}}Je(t,e,n)}finally{Gt()}}function Ot(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&Fn(i)&&!i._handled&&(i.catch(function(a){return gt(a,r,o+" (Promise/async)")}),i._handled=!0)}catch(a){gt(a,r,o)}return i}function Je(t,e,n){if($.errorHandler)try{return $.errorHandler.call(null,t,e,n)}catch(r){r!==t&&We(r,null,"config.errorHandler")}We(t,e,n)}function We(t,e,n){if((L||Mn)&&typeof console!="undefined")console.error(t);else throw t}var Gn=!1,Zn=[],jn=!1;function dn(){jn=!1;var t=Zn.slice(0);Zn.length=0;for(var e=0;e<t.length;e++)t[e]()}var Zt;typeof Promise!="undefined"&&Bt(Promise)?(Ke=Promise.resolve(),Zt=function(){Ke.then(dn),ni&&setTimeout(I)},Gn=!0):!Tt&&typeof MutationObserver!="undefined"&&(Bt(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")?(jt=1,tr=new MutationObserver(dn),Xn=document.createTextNode(String(jt)),tr.observe(Xn,{characterData:!0}),Zt=function(){jt=(jt+1)%2,Xn.data=String(jt)},Gn=!0):typeof setImmediate!="undefined"&&Bt(setImmediate)?Zt=function(){setImmediate(dn)}:Zt=function(){setTimeout(dn,0)};var Ke,jt,tr,Xn;function zn(t,e){var n;if(Zn.push(function(){if(t)try{t.call(e)}catch(r){gt(r,e,"nextTick")}else n&&n(e)}),jn||(jn=!0,Zt()),!t&&typeof Promise!="undefined")return new Promise(function(r){n=r})}var nr=new Pt;function un(t){qn(t,nr),nr.clear()}function qn(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!H(t)||Object.isFrozen(t)||t instanceof U)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o)for(n=t.length;n--;)qn(t[n],e);else for(r=Object.keys(t),n=r.length;n--;)qn(t[r[n]],e)}}var er=dt(function(t){var e=t.charAt(0)==="&";t=e?t.slice(1):t;var n=t.charAt(0)==="~";t=n?t.slice(1):t;var r=t.charAt(0)==="!";return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Yn(t,e){function n(){var r=arguments,o=n.fns;if(Array.isArray(o))for(var i=o.slice(),a=0;a<i.length;a++)Ot(i[a],null,r,e,"v-on handler");else return Ot(o,null,arguments,e,"v-on handler")}return n.fns=t,n}function rr(t,e,n,r,o,i){var a,p,l,u,s;for(a in t)p=l=t[a],u=e[a],s=er(a),g(l)||(g(u)?(g(l.fns)&&(l=t[a]=Yn(l,i)),F(s.once)&&(l=t[a]=o(s.name,l,s.capture)),n(s.name,l,s.capture,s.passive,s.params)):l!==u&&(u.fns=l,t[a]=u));for(a in e)g(t[a])&&(s=er(a),r(s.name,e[a],s.capture))}function at(t,e,n){t instanceof U&&(t=t.data.hook||(t.data.hook={}));var r,o=t[e];function i(){n.apply(this,arguments),K(r.fns,i)}g(o)?r=Yn([i]):d(o.fns)&&F(o.merged)?(r=o,r.fns.push(i)):r=Yn([o,i]),r.merged=!0,t[e]=r}function hi(t,e,n){var r=e.options.props;if(!g(r)){var o={},i=t.attrs,a=t.props;if(d(i)||d(a))for(var p in r){var l=Lt(p);if(!1)var u;or(o,a,p,l,!0)||or(o,i,p,l,!1)}return o}}function or(t,e,n,r,o){if(d(e)){if(D(e,n))return t[n]=e[n],o||delete e[n],!0;if(D(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function mi(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Jn(t){return Vt(t)?[Ft(t)]:Array.isArray(t)?ir(t):void 0}function Xt(t){return d(t)&&d(t.text)&&Qo(t.isComment)}function ir(t,e){var n=[],r,o,i,a;for(r=0;r<t.length;r++)o=t[r],!(g(o)||typeof o=="boolean")&&(i=n.length-1,a=n[i],Array.isArray(o)?o.length>0&&(o=ir(o,(e||"")+"_"+r),Xt(o[0])&&Xt(a)&&(n[i]=Ft(a.text+o[0].text),o.shift()),n.push.apply(n,o)):Vt(o)?Xt(a)?n[i]=Ft(a.text+o):o!==""&&n.push(Ft(o)):Xt(o)&&Xt(a)?n[i]=Ft(a.text+o.text):(F(t._isVList)&&d(o.tag)&&g(o.key)&&d(e)&&(o.key="__vlist"+e+"_"+r+"__"),n.push(o)));return n}function Ai(t){var e=t.$options.provide;e&&(t._provided=typeof e=="function"?e.call(t):e)}function gi(t){var e=ar(t.$options.inject,t);e&&(it(!1),Object.keys(e).forEach(function(n){mt(t,n,e[n])}),it(!0))}function ar(t,e){if(t){for(var n=Object.create(null),r=pn?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if(i!=="__ob__"){for(var a=t[i].from,p=e;p;){if(p._provided&&D(p._provided,a)){n[i]=p._provided[a];break}p=p.$parent}if(!p&&"default"in t[i]){var l=t[i].default;n[i]=typeof l=="function"?l.call(e):l}}}return n}}function Wn(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,(i.context===e||i.fnContext===e)&&a&&a.slot!=null){var p=a.slot,l=n[p]||(n[p]=[]);i.tag==="template"?l.push.apply(l,i.children||[]):l.push(i)}else(n.default||(n.default=[])).push(i)}for(var u in n)n[u].every(Ci)&&delete n[u];return n}function Ci(t){return t.isComment&&!t.asyncFactory||t.text===" "}function zt(t){return t.isComment&&t.asyncFactory}function vn(t,e,n){var r,o=Object.keys(e).length>0,i=t?!!t.$stable:!o,a=t&&t.$key;if(!t)r={};else{if(t._normalized)return t._normalized;if(i&&n&&n!==q&&a===n.$key&&!o&&!n.$hasNormal)return n;r={};for(var p in t)t[p]&&p[0]!=="$"&&(r[p]=yi(e,p,t[p]))}for(var l in e)l in r||(r[l]=xi(e,l));return t&&Object.isExtensible(t)&&(t._normalized=r),St(r,"$stable",i),St(r,"$key",a),St(r,"$hasNormal",o),r}function yi(t,e,n){var r=function(){var o=arguments.length?n.apply(null,arguments):n({});o=o&&typeof o=="object"&&!Array.isArray(o)?[o]:Jn(o);var i=o&&o[0];return o&&(!i||o.length===1&&i.isComment&&!zt(i))?void 0:o};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xi(t,e){return function(){return t[e]}}function bi(t,e){var n,r,o,i,a;if(Array.isArray(t)||typeof t=="string")for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if(typeof t=="number")for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(H(t))if(pn&&t[Symbol.iterator]){n=[];for(var p=t[Symbol.iterator](),l=p.next();!l.done;)n.push(e(l.value,n.length)),l=p.next()}else for(i=Object.keys(t),n=new Array(i.length),r=0,o=i.length;r<o;r++)a=i[r],n[r]=e(t[a],a,r);return d(n)||(n=[]),n._isVList=!0,n}function wi(t,e,n,r){var o=this.$scopedSlots[t],i;o?(n=n||{},r&&(n=B(B({},r),n)),i=o(n)||(typeof e=="function"?e():e)):i=this.$slots[t]||(typeof e=="function"?e():e);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function Ei(t){return Ln(this.$options,"filters",t,!0)||Ie}function sr(t,e){return Array.isArray(t)?t.indexOf(e)===-1:t!==e}function Si(t,e,n,r,o){var i=$.keyCodes[e]||n;return o&&r&&!$.keyCodes[e]?sr(o,r):i?sr(i,t):r?Lt(r)!==e:t===void 0}function Ti(t,e,n,r,o){if(n&&H(n)){Array.isArray(n)&&(n=$e(n));var i,a=function(l){if(l==="class"||l==="style"||Po(l))i=t;else{var u=t.attrs&&t.attrs.type;i=r||$.mustUseProp(e,u,l)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var s=ut(l),h=Lt(l);if(!(s in i)&&!(h in i)&&(i[l]=n[l],o)){var _=t.on||(t.on={});_["update:"+l]=function(C){n[l]=C}}};for(var p in n)a(p)}return t}function ki(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),pr(r,"__static__"+t,!1)),r}function Bi(t,e,n){return pr(t,"__once__"+e+(n?"_"+n:""),!0),t}function pr(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&typeof t[r]!="string"&&lr(t[r],e+"_"+r,n);else lr(t,e,n)}function lr(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Fi(t,e){if(e&&Q(e)){var n=t.on=t.on?B({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}return t}function cr(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?cr(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Oi(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];typeof r=="string"&&r&&(t[e[n]]=e[n+1])}return t}function Mi(t,e){return typeof t=="string"?e+t:t}function fr(t){t._o=Bi,t._n=Qt,t._s=Lo,t._l=bi,t._t=wi,t._q=vt,t._i=Ue,t._m=ki,t._f=Ei,t._k=Si,t._b=Ti,t._v=Ft,t._e=_t,t._u=cr,t._g=Fi,t._d=Oi,t._p=Mi}function Kn(t,e,n,r,o){var i=this,a=o.options,p;D(r,"_uid")?(p=Object.create(r),p._original=r):(p=r,r=r._original);var l=F(a._compiled),u=!l;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||q,this.injections=ar(a.inject,r),this.slots=function(){return i.$slots||vn(t.scopedSlots,i.$slots=Wn(n,r)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return vn(t.scopedSlots,this.slots())}}),l&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=vn(t.scopedSlots,this.$slots)),a._scopeId?this._c=function(s,h,_,C){var w=_n(p,s,h,_,C,u);return w&&!Array.isArray(w)&&(w.fnScopeId=a._scopeId,w.fnContext=r),w}:this._c=function(s,h,_,C){return _n(p,s,h,_,C,u)}}fr(Kn.prototype);function Ni(t,e,n,r,o){var i=t.options,a={},p=i.props;if(d(p))for(var l in p)a[l]=Pn(l,p,e||q);else d(n.attrs)&&ur(a,n.attrs),d(n.props)&&ur(a,n.props);var u=new Kn(n,a,o,r,t),s=i.render.call(null,u._c,u);if(s instanceof U)return dr(s,n,u.parent,i,u);if(Array.isArray(s)){for(var h=Jn(s)||[],_=new Array(h.length),C=0;C<h.length;C++)_[C]=dr(h[C],n,u.parent,i,u);return _}}function dr(t,e,n,r,o){var i=$n(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function ur(t,e){for(var n in e)t[ut(n)]=e[n]}var te={init:function(e,n){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;te.prepatch(r,r)}else{var o=e.componentInstance=Hi(e,Ct);o.$mount(n?e.elm:void 0,n)}},prepatch:function(e,n){var r=n.componentOptions,o=n.componentInstance=e.componentInstance;Ki(o,r.propsData,r.listeners,n,r.children)},insert:function(e){var n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,X(r,"mounted")),e.data.keepAlive&&(n._isMounted?ra(r):re(r,!0))},destroy:function(e){var n=e.componentInstance;n._isDestroyed||(e.data.keepAlive?xr(n,!0):n.$destroy())}},vr=Object.keys(te);function _r(t,e,n,r,o){if(!g(t)){var i=n.$options._base;if(H(t)&&(t=i.extend(t)),typeof t=="function"){var a;if(g(t.cid)&&(a=t,t=Gi(a,i),t===void 0))return Ri(a,e,n,r,o);e=e||{},ce(t),d(e.model)&&Ii(t.options,e);var p=hi(e,t,o);if(F(t.options.functional))return Ni(t,p,e,n,r);var l=e.on;if(e.on=e.nativeOn,F(t.options.abstract)){var u=e.slot;e={},u&&(e.slot=u)}Di(e);var s=t.options.name||o,h=new U("vue-component-"+t.cid+(s?"-"+s:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:o,children:r},a);return h}}}function Hi(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return d(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Di(t){for(var e=t.hook||(t.hook={}),n=0;n<vr.length;n++){var r=vr[n],o=e[r],i=te[r];o!==i&&!(o&&o._merged)&&(e[r]=o?$i(i,o):i)}}function $i(t,e){var n=function(r,o){t(r,o),e(r,o)};return n._merged=!0,n}function Ii(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),i=o[r],a=e.model.callback;d(i)?(Array.isArray(i)?i.indexOf(a)===-1:i!==a)&&(o[r]=[a].concat(i)):o[r]=a}var Ui=1,hr=2;function _n(t,e,n,r,o,i){return(Array.isArray(n)||Vt(n))&&(o=r,r=n,n=void 0),F(i)&&(o=hr),Vi(t,e,n,r,o)}function Vi(t,e,n,r,o){if(d(n)&&d(n.__ob__)||(d(n)&&d(n.is)&&(e=n.is),!e))return _t();Array.isArray(r)&&typeof r[0]=="function"&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===hr?r=Jn(r):o===Ui&&(r=mi(r));var i,a;if(typeof e=="string"){var p;a=t.$vnode&&t.$vnode.ns||$.getTagNamespace(e),$.isReservedTag(e)?i=new U($.parsePlatformTagName(e),n,r,void 0,void 0,t):(!n||!n.pre)&&d(p=Ln(t.$options,"components",e))?i=_r(p,n,t,r,e):i=new U(e,n,r,void 0,void 0,t)}else i=_r(e,n,t,r);return Array.isArray(i)?i:d(i)?(d(a)&&mr(i,a),d(n)&&Qi(n),i):_t()}function mr(t,e,n){if(t.ns=e,t.tag==="foreignObject"&&(e=void 0,n=!0),d(t.children))for(var r=0,o=t.children.length;r<o;r++){var i=t.children[r];d(i.tag)&&(g(i.ns)||F(n)&&i.tag!=="svg")&&mr(i,e,n)}}function Qi(t){H(t.style)&&un(t.style),H(t.class)&&un(t.class)}function Li(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=Wn(e._renderChildren,r),t.$scopedSlots=q,t._c=function(i,a,p,l){return _n(t,i,a,p,l,!1)},t.$createElement=function(i,a,p,l){return _n(t,i,a,p,l,!0)};var o=n&&n.data;mt(t,"$attrs",o&&o.attrs||q,null,!0),mt(t,"$listeners",e._parentListeners||q,null,!0)}var ne=null;function Pi(t){fr(t.prototype),t.prototype.$nextTick=function(e){return zn(e,this)},t.prototype._render=function(){var e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=vn(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;var i;try{ne=e,i=r.call(e._renderProxy,e.$createElement)}catch(a){if(gt(a,e,"render"),!1)try{}catch(p){}else i=e._vnode}finally{ne=null}return Array.isArray(i)&&i.length===1&&(i=i[0]),i instanceof U||(i=_t()),i.parent=o,i}}function ee(t,e){return(t.__esModule||pn&&t[Symbol.toStringTag]==="Module")&&(t=t.default),H(t)?e.extend(t):t}function Ri(t,e,n,r,o){var i=_t();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function Gi(t,e){if(F(t.error)&&d(t.errorComp))return t.errorComp;if(d(t.resolved))return t.resolved;var n=ne;if(n&&d(t.owners)&&t.owners.indexOf(n)===-1&&t.owners.push(n),F(t.loading)&&d(t.loadingComp))return t.loadingComp;if(n&&!d(t.owners)){var r=t.owners=[n],o=!0,i=null,a=null;n.$on("hook:destroyed",function(){return K(r,n)});var p=function(h){for(var _=0,C=r.length;_<C;_++)r[_].$forceUpdate();h&&(r.length=0,i!==null&&(clearTimeout(i),i=null),a!==null&&(clearTimeout(a),a=null))},l=en(function(h){t.resolved=ee(h,e),o?r.length=0:p(!0)}),u=en(function(h){d(t.errorComp)&&(t.error=!0,p(!0))}),s=t(l,u);return H(s)&&(Fn(s)?g(t.resolved)&&s.then(l,u):Fn(s.component)&&(s.component.then(l,u),d(s.error)&&(t.errorComp=ee(s.error,e)),d(s.loading)&&(t.loadingComp=ee(s.loading,e),s.delay===0?t.loading=!0:i=setTimeout(function(){i=null,g(t.resolved)&&g(t.error)&&(t.loading=!0,p(!1))},s.delay||200)),d(s.timeout)&&(a=setTimeout(function(){a=null,g(t.resolved)&&u(null)},s.timeout)))),o=!1,t.loading?t.loadingComp:t.resolved}}function Ar(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(d(n)&&(d(n.componentOptions)||zt(n)))return n}}function Zi(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&gr(t,e)}var qt;function ji(t,e){qt.$on(t,e)}function Xi(t,e){qt.$off(t,e)}function zi(t,e){var n=qt;return function r(){var o=e.apply(null,arguments);o!==null&&n.$off(t,r)}}function gr(t,e,n){qt=t,rr(e,n||{},ji,Xi,zi,t),qt=void 0}function qi(t){var e=/^hook:/;t.prototype.$on=function(n,r){var o=this;if(Array.isArray(n))for(var i=0,a=n.length;i<a;i++)o.$on(n[i],r);else(o._events[n]||(o._events[n]=[])).push(r),e.test(n)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(n,r){var o=this;function i(){o.$off(n,i),r.apply(o,arguments)}return i.fn=r,o.$on(n,i),o},t.prototype.$off=function(n,r){var o=this;if(!arguments.length)return o._events=Object.create(null),o;if(Array.isArray(n)){for(var i=0,a=n.length;i<a;i++)o.$off(n[i],r);return o}var p=o._events[n];if(!p)return o;if(!r)return o._events[n]=null,o;for(var l,u=p.length;u--;)if(l=p[u],l===r||l.fn===r){p.splice(u,1);break}return o},t.prototype.$emit=function(n){var r=this;if(!1)var o;var i=r._events[n];if(i){i=i.length>1?On(i):i;for(var a=On(arguments,1),p='event handler for "'+n+'"',l=0,u=i.length;l<u;l++)Ot(i[l],r,a,r,p)}return r}}var Ct=null;function Cr(t){var e=Ct;return Ct=t,function(){Ct=e}}function Yi(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ji(t){t.prototype._update=function(e,n){var r=this,o=r.$el,i=r._vnode,a=Cr(r);r._vnode=e,i?r.$el=r.__patch__(i,e):r.$el=r.__patch__(r.$el,e,n,!1),a(),o&&(o.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},t.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},t.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){X(e,"beforeDestroy"),e._isBeingDestroyed=!0;var n=e.$parent;n&&!n._isBeingDestroyed&&!e.$options.abstract&&K(n.$children,e),e._watcher&&e._watcher.teardown();for(var r=e._watchers.length;r--;)e._watchers[r].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),X(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Wi(t,e,n){t.$el=e,t.$options.render||(t.$options.render=_t),X(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},new z(t,r,I,{before:function(){t._isMounted&&!t._isDestroyed&&X(t,"beforeUpdate")}},!0),n=!1,t.$vnode==null&&(t._isMounted=!0,X(t,"mounted")),t}function Ki(t,e,n,r,o){var i=r.data.scopedSlots,a=t.$scopedSlots,p=!!(i&&!i.$stable||a!==q&&!a.$stable||i&&t.$scopedSlots.$key!==i.$key||!i&&t.$scopedSlots.$key),l=!!(o||t.$options._renderChildren||p);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||q,t.$listeners=n||q,e&&t.$options.props){it(!1);for(var u=t._props,s=t.$options._propKeys||[],h=0;h<s.length;h++){var _=s[h],C=t.$options.props;u[_]=Pn(_,C,e,t)}it(!0),t.$options.propsData=e}n=n||q;var w=t.$options._parentListeners;t.$options._parentListeners=n,gr(t,n,w),l&&(t.$slots=Wn(o,r.context),t.$forceUpdate())}function yr(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function re(t,e){if(e){if(t._directInactive=!1,yr(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var n=0;n<t.$children.length;n++)re(t.$children[n]);X(t,"activated")}}function xr(t,e){if(!(e&&(t._directInactive=!0,yr(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)xr(t.$children[n]);X(t,"deactivated")}}function X(t,e){Rt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Ot(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),Gt()}var tt=[],oe=[],hn={};var ie=!1,ae=!1,Mt=0;function ta(){Mt=tt.length=oe.length=0,hn={},ie=ae=!1}var br=0,se=Date.now;L&&!Tt&&(mn=window.performance,mn&&typeof mn.now=="function"&&se()>document.createEvent("Event").timeStamp&&(se=function(){return mn.now()}));var mn;function na(){br=se(),ae=!0;var t,e;for(tt.sort(function(o,i){return o.id-i.id}),Mt=0;Mt<tt.length;Mt++)t=tt[Mt],t.before&&t.before(),e=t.id,hn[e]=null,t.run();var n=oe.slice(),r=tt.slice();ta(),oa(n),ea(r),sn&&$.devtools&&sn.emit("flush")}function ea(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&X(r,"updated")}}function ra(t){t._inactive=!1,oe.push(t)}function oa(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,re(t[e],!0)}function ia(t){var e=t.id;if(hn[e]==null){if(hn[e]=!0,!ae)tt.push(t);else{for(var n=tt.length-1;n>Mt&&tt[n].id>t.id;)n--;tt.splice(n+1,0,t)}ie||(ie=!0,zn(na))}}var aa=0,z=function(e,n,r,o,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++aa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Pt,this.newDepIds=new Pt,this.expression="",typeof n=="function"?this.getter=n:(this.getter=Ko(n),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};z.prototype.get=function(){Rt(this);var e,n=this.vm;try{e=this.getter.call(n,n)}catch(r){if(this.user)gt(r,n,'getter for watcher "'+this.expression+'"');else throw r}finally{this.deep&&un(e),Gt(),this.cleanupDeps()}return e};z.prototype.addDep=function(e){var n=e.id;this.newDepIds.has(n)||(this.newDepIds.add(n),this.newDeps.push(e),this.depIds.has(n)||e.addSub(this))};z.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var n=this.deps[e];this.newDepIds.has(n.id)||n.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0};z.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ia(this)};z.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||H(e)||this.deep){var n=this.value;if(this.value=e,this.user){var r='callback for watcher "'+this.expression+'"';Ot(this.cb,this.vm,[e,n],this.vm,r)}else this.cb.call(this.vm,e,n)}}};z.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};z.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()};z.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||K(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var st={enumerable:!0,configurable:!0,get:I,set:I};function pe(t,e,n){st.get=function(){return this[e][n]},st.set=function(o){this[e][n]=o},Object.defineProperty(t,n,st)}function sa(t){t._watchers=[];var e=t.$options;e.props&&pa(t,e.props),e.methods&&ua(t,e.methods),e.data?la(t):ht(t._data={},!0),e.computed&&da(t,e.computed),e.watch&&e.watch!==Hn&&va(t,e.watch)}function pa(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||it(!1);var a=function(l){o.push(l);var u=Pn(l,e,n,t);if(!1)var s;else mt(r,l,u);l in t||pe(t,"_props",l)};for(var p in e)a(p);it(!0)}function la(t){var e=t.$options.data;e=t._data=typeof e=="function"?ca(e,t):e||{},Q(e)||(e={});for(var n=Object.keys(e),r=t.$options.props,o=t.$options.methods,i=n.length;i--;){var a=n[i];r&&D(r,a)||Jo(a)||pe(t,"_data",a)}ht(e,!0)}function ca(t,e){Rt();try{return t.call(e,e)}catch(n){return gt(n,e,"data()"),{}}finally{Gt()}}var fa={lazy:!0};function da(t,e){var n=t._computedWatchers=Object.create(null),r=an();for(var o in e){var i=e[o],a=typeof i=="function"?i:i.get;r||(n[o]=new z(t,a||I,I,fa)),o in t||wr(t,o,i)}}function wr(t,e,n){var r=!an();typeof n=="function"?(st.get=r?Er(e):Sr(n),st.set=I):(st.get=n.get?r&&n.cache!==!1?Er(e):Sr(n.get):I,st.set=n.set||I),Object.defineProperty(t,e,st)}function Er(t){return function(){var n=this._computedWatchers&&this._computedWatchers[t];if(n)return n.dirty&&n.evaluate(),P.target&&n.depend(),n.value}}function Sr(t){return function(){return t.call(this,this)}}function ua(t,e){var n=t.$options.props;for(var r in e)t[r]=typeof e[r]!="function"?I:qo(e[r],t)}function va(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)le(t,n,r[o]);else le(t,n,r)}}function le(t,e,n,r){return Q(n)&&(r=n,n=n.handler),typeof n=="string"&&(n=t[n]),t.$watch(e,n,r)}function _a(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Un,t.prototype.$delete=Xe,t.prototype.$watch=function(r,o,i){var a=this;if(Q(o))return le(a,r,o,i);i=i||{},i.user=!0;var p=new z(a,r,o,i);if(i.immediate){var l='callback for immediate watcher "'+p.expression+'"';Rt(),Ot(o,a,[p.value],a,l),Gt()}return function(){p.teardown()}}}var ha=0;function ma(t){t.prototype._init=function(e){var n=this;n._uid=ha++;var r,o;n._isVue=!0,e&&e._isComponent?Aa(n,e):n.$options=At(ce(n.constructor),e||{},n),n._renderProxy=n,n._self=n,Yi(n),Zi(n),Li(n),X(n,"beforeCreate"),gi(n),sa(n),Ai(n),X(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}function Aa(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function ce(t){var e=t.options;if(t.super){var n=ce(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=ga(t);o&&B(t.extendOptions,o),e=t.options=At(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function ga(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function O(t){this._init(t)}ma(O);_a(O);qi(O);Ji(O);Pi(O);function Ca(t){t.use=function(e){var n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(e)>-1)return this;var r=On(arguments,1);return r.unshift(this),typeof e.install=="function"?e.install.apply(e,r):typeof e=="function"&&e.apply(null,r),n.push(e),this}}function ya(t){t.mixin=function(e){return this.options=At(this.options,e),this}}function xa(t){t.cid=0;var e=1;t.extend=function(n){n=n||{};var r=this,o=r.cid,i=n._Ctor||(n._Ctor={});if(i[o])return i[o];var a=n.name||r.options.name,p=function(u){this._init(u)};return p.prototype=Object.create(r.prototype),p.prototype.constructor=p,p.cid=e++,p.options=At(r.options,n),p.super=r,p.options.props&&ba(p),p.options.computed&&wa(p),p.extend=r.extend,p.mixin=r.mixin,p.use=r.use,rn.forEach(function(l){p[l]=r[l]}),a&&(p.options.components[a]=p),p.superOptions=r.options,p.extendOptions=n,p.sealedOptions=B({},p.options),i[o]=p,p}}function ba(t){var e=t.options.props;for(var n in e)pe(t.prototype,"_props",n)}function wa(t){var e=t.options.computed;for(var n in e)wr(t.prototype,n,e[n])}function Ea(t){rn.forEach(function(e){t[e]=function(n,r){return r?(e==="component"&&Q(r)&&(r.name=r.name||n,r=this.options._base.extend(r)),e==="directive"&&typeof r=="function"&&(r={bind:r,update:r}),this.options[e+"s"][n]=r,r):this.options[e+"s"][n]}})}function Tr(t){return t&&(t.Ctor.options.name||t.tag)}function An(t,e){return Array.isArray(t)?t.indexOf(e)>-1:typeof t=="string"?t.split(",").indexOf(e)>-1:He(t)?t.test(e):!1}function kr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var p=a.name;p&&!e(p)&&fe(n,i,r,o)}}}function fe(t,e,n,r){var o=t[e];o&&(!r||o.tag!==r.tag)&&o.componentInstance.$destroy(),t[e]=null,K(n,e)}var Br=[String,RegExp,Array],Sa={name:"keep-alive",abstract:!0,props:{include:Br,exclude:Br,max:[String,Number]},methods:{cacheVNode:function(){var e=this,n=e.cache,r=e.keys,o=e.vnodeToCache,i=e.keyToCache;if(o){var a=o.tag,p=o.componentInstance,l=o.componentOptions;n[i]={name:Tr(l),tag:a,componentInstance:p},r.push(i),this.max&&r.length>parseInt(this.max)&&fe(n,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)fe(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(n){kr(e,function(r){return An(n,r)})}),this.$watch("exclude",function(n){kr(e,function(r){return!An(n,r)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,n=Ar(e),r=n&&n.componentOptions;if(r){var o=Tr(r),i=this,a=i.include,p=i.exclude;if(a&&(!o||!An(a,o))||p&&o&&An(p,o))return n;var l=this,u=l.cache,s=l.keys,h=n.key==null?r.Ctor.cid+(r.tag?"::"+r.tag:""):n.key;u[h]?(n.componentInstance=u[h].componentInstance,K(s,h),s.push(h)):(this.vnodeToCache=n,this.keyToCache=h),n.data.keepAlive=!0}return n||e&&e[0]}},Ta={KeepAlive:Sa};function ka(t){var e={};e.get=function(){return $},Object.defineProperty(t,"config",e),t.util={warn:Ge,extend:B,mergeOptions:At,defineReactive:mt},t.set=Un,t.delete=Xe,t.nextTick=zn,t.observable=function(n){return ht(n),n},t.options=Object.create(null),rn.forEach(function(n){t.options[n+"s"]=Object.create(null)}),t.options._base=t,B(t.options.components,Ta),Ca(t),ya(t),xa(t),Ea(t)}ka(O);Object.defineProperty(O.prototype,"$isServer",{get:an});Object.defineProperty(O.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(O,"FunctionalRenderContext",{value:Kn});O.version="2.6.14";var Ba=j("style,class"),Fa=j("input,textarea,option,select,progress"),Oa=function(t,e,n){return n==="value"&&Fa(t)&&e!=="button"||n==="selected"&&t==="option"||n==="checked"&&t==="input"||n==="muted"&&t==="video"},Fr=j("contenteditable,draggable,spellcheck"),Ma=j("events,caret,typing,plaintext-only"),Na=function(t,e){return gn(e)||e==="false"?"false":t==="contenteditable"&&Ma(e)?e:"true"},Ha=j("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),de="http://www.w3.org/1999/xlink",ue=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},Or=function(t){return ue(t)?t.slice(6,t.length):""},gn=function(t){return t==null||t===!1};function Da(t){for(var e=t.data,n=t,r=t;d(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(e=Mr(r.data,e));for(;d(n=n.parent);)n&&n.data&&(e=Mr(e,n.data));return $a(e.staticClass,e.class)}function Mr(t,e){return{staticClass:ve(t.staticClass,e.staticClass),class:d(t.class)?[t.class,e.class]:e.class}}function $a(t,e){return d(t)||d(e)?ve(t,_e(e)):""}function ve(t,e){return t?e?t+" "+e:t:e||""}function _e(t){return Array.isArray(t)?Ia(t):H(t)?Ua(t):typeof t=="string"?t:""}function Ia(t){for(var e="",n,r=0,o=t.length;r<o;r++)d(n=_e(t[r]))&&n!==""&&(e&&(e+=" "),e+=n);return e}function Ua(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Va={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Qa=j("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),he=j("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Nr=function(t){return Qa(t)||he(t)};function La(t){if(he(t))return"svg";if(t==="math")return"math"}var Cn=Object.create(null);function Pa(t){if(!L)return!0;if(Nr(t))return!1;if(t=t.toLowerCase(),Cn[t]!=null)return Cn[t];var e=document.createElement(t);return t.indexOf("-")>-1?Cn[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Cn[t]=/HTMLUnknownElement/.test(e.toString())}var me=j("text,number,password,search,email,tel,url");function Ra(t){if(typeof t=="string"){var e=document.querySelector(t);return e||document.createElement("div")}else return t}function Ga(t,e){var n=document.createElement(t);return t!=="select"||e.data&&e.data.attrs&&e.data.attrs.multiple!==void 0&&n.setAttribute("multiple","multiple"),n}function Za(t,e){return document.createElementNS(Va[t],e)}function ja(t){return document.createTextNode(t)}function Xa(t){return document.createComment(t)}function za(t,e,n){t.insertBefore(e,n)}function qa(t,e){t.removeChild(e)}function Ya(t,e){t.appendChild(e)}function Ja(t){return t.parentNode}function Wa(t){return t.nextSibling}function Ka(t){return t.tagName}function ts(t,e){t.textContent=e}function ns(t,e){t.setAttribute(e,"")}var es=Object.freeze({createElement:Ga,createElementNS:Za,createTextNode:ja,createComment:Xa,insertBefore:za,removeChild:qa,appendChild:Ya,parentNode:Ja,nextSibling:Wa,tagName:Ka,setTextContent:ts,setStyleScope:ns}),rs={create:function(e,n){Nt(n)},update:function(e,n){e.data.ref!==n.data.ref&&(Nt(e,!0),Nt(n))},destroy:function(e){Nt(e,!0)}};function Nt(t,e){var n=t.data.ref;if(!!d(n)){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?K(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var yt=new U("",{},[]),Yt=["create","activate","update","remove","destroy"];function xt(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&d(t.data)===d(e.data)&&os(t,e)||F(t.isAsyncPlaceholder)&&g(e.asyncFactory.error))}function os(t,e){if(t.tag!=="input")return!0;var n,r=d(n=t.data)&&d(n=n.attrs)&&n.type,o=d(n=e.data)&&d(n=n.attrs)&&n.type;return r===o||me(r)&&me(o)}function is(t,e,n){var r,o,i={};for(r=e;r<=n;++r)o=t[r].key,d(o)&&(i[o]=r);return i}function as(t){var e,n,r={},o=t.modules,i=t.nodeOps;for(e=0;e<Yt.length;++e)for(r[Yt[e]]=[],n=0;n<o.length;++n)d(o[n][Yt[e]])&&r[Yt[e]].push(o[n][Yt[e]]);function a(f){return new U(i.tagName(f).toLowerCase(),{},[],void 0,f)}function p(f,c){function v(){--v.listeners==0&&l(f)}return v.listeners=c,v}function l(f){var c=i.parentNode(f);d(c)&&i.removeChild(c,f)}function u(f,c){return!c&&!f.ns&&!($.ignoredElements.length&&$.ignoredElements.some(function(v){return He(v)?v.test(f.tag):v===f.tag}))&&$.isUnknownElement(f.tag)}var s=0;function h(f,c,v,m,A,E,y){if(d(f.elm)&&d(E)&&(f=E[y]=$n(f)),f.isRootInsert=!A,!_(f,c,v,m)){var x=f.data,k=f.children,S=f.tag;d(S)?(f.elm=f.ns?i.createElementNS(f.ns,S):i.createElement(S,f),lt(f),pt(f,k,c),d(x)&&V(f,c),b(v,f.elm,m)):F(f.isComment)?(f.elm=i.createComment(f.text),b(v,f.elm,m)):(f.elm=i.createTextNode(f.text),b(v,f.elm,m))}}function _(f,c,v,m){var A=f.data;if(d(A)){var E=d(f.componentInstance)&&A.keepAlive;if(d(A=A.hook)&&d(A=A.init)&&A(f,!1),d(f.componentInstance))return C(f,c),b(v,f.elm,m),F(E)&&w(f,c,v,m),!0}}function C(f,c){d(f.data.pendingInsert)&&(c.push.apply(c,f.data.pendingInsert),f.data.pendingInsert=null),f.elm=f.componentInstance.$el,G(f)?(V(f,c),lt(f)):(Nt(f),c.push(f))}function w(f,c,v,m){for(var A,E=f;E.componentInstance;)if(E=E.componentInstance._vnode,d(A=E.data)&&d(A=A.transition)){for(A=0;A<r.activate.length;++A)r.activate[A](yt,E);c.push(E);break}b(v,f.elm,m)}function b(f,c,v){d(f)&&(d(v)?i.parentNode(v)===f&&i.insertBefore(f,c,v):i.appendChild(f,c))}function pt(f,c,v){if(Array.isArray(c))for(var m=0;m<c.length;++m)h(c[m],v,f.elm,null,!0,c,m);else Vt(f.text)&&i.appendChild(f.elm,i.createTextNode(String(f.text)))}function G(f){for(;f.componentInstance;)f=f.componentInstance._vnode;return d(f.tag)}function V(f,c){for(var v=0;v<r.create.length;++v)r.create[v](yt,f);e=f.data.hook,d(e)&&(d(e.create)&&e.create(yt,f),d(e.insert)&&c.push(f))}function lt(f){var c;if(d(c=f.fnScopeId))i.setStyleScope(f.elm,c);else for(var v=f;v;)d(c=v.context)&&d(c=c.$options._scopeId)&&i.setStyleScope(f.elm,c),v=v.parent;d(c=Ct)&&c!==f.context&&c!==f.fnContext&&d(c=c.$options._scopeId)&&i.setStyleScope(f.elm,c)}function wt(f,c,v,m,A,E){for(;m<=A;++m)h(v[m],E,f,c,!1,v,m)}function ct(f){var c,v,m=f.data;if(d(m))for(d(c=m.hook)&&d(c=c.destroy)&&c(f),c=0;c<r.destroy.length;++c)r.destroy[c](f);if(d(c=f.children))for(v=0;v<f.children.length;++v)ct(f.children[v])}function J(f,c,v){for(;c<=v;++c){var m=f[c];d(m)&&(d(m.tag)?(Z(m),ct(m)):l(m.elm))}}function Z(f,c){if(d(c)||d(f.data)){var v,m=r.remove.length+1;for(d(c)?c.listeners+=m:c=p(f.elm,m),d(v=f.componentInstance)&&d(v=v._vnode)&&d(v.data)&&Z(v,c),v=0;v<r.remove.length;++v)r.remove[v](f,c);d(v=f.data.hook)&&d(v=v.remove)?v(f,c):c()}else l(f.elm)}function It(f,c,v,m,A){for(var E=0,y=0,x=c.length-1,k=c[0],S=c[x],T=v.length-1,M=v[0],R=v[T],ft,rt,ot,Ne,kn=!A;E<=x&&y<=T;)g(k)?k=c[++E]:g(S)?S=c[--x]:xt(k,M)?(W(k,M,m,v,y),k=c[++E],M=v[++y]):xt(S,R)?(W(S,R,m,v,T),S=c[--x],R=v[--T]):xt(k,R)?(W(k,R,m,v,T),kn&&i.insertBefore(f,k.elm,i.nextSibling(S.elm)),k=c[++E],R=v[--T]):xt(S,M)?(W(S,M,m,v,y),kn&&i.insertBefore(f,S.elm,k.elm),S=c[--x],M=v[++y]):(g(ft)&&(ft=is(c,E,x)),rt=d(M.key)?ft[M.key]:Kt(M,c,E,x),g(rt)?h(M,m,f,k.elm,!1,v,y):(ot=c[rt],xt(ot,M)?(W(ot,M,m,v,y),c[rt]=void 0,kn&&i.insertBefore(f,ot.elm,k.elm)):h(M,m,f,k.elm,!1,v,y)),M=v[++y]);E>x?(Ne=g(v[T+1])?null:v[T+1].elm,wt(f,Ne,v,y,T,m)):y>T&&J(c,E,x)}function Sn(f){for(var c={},v=0;v<f.length;v++){var m=f[v],A=m.key;d(A)&&(c[A]?Ge("Duplicate keys detected: '"+A+"'. This may cause an update error.",m.context):c[A]=!0)}}function Kt(f,c,v,m){for(var A=v;A<m;A++){var E=c[A];if(d(E)&&xt(f,E))return A}}function W(f,c,v,m,A,E){if(f!==c){d(c.elm)&&d(m)&&(c=m[A]=$n(c));var y=c.elm=f.elm;if(F(f.isAsyncPlaceholder)){d(c.asyncFactory.resolved)?Et(f.elm,c,v):c.isAsyncPlaceholder=!0;return}if(F(c.isStatic)&&F(f.isStatic)&&c.key===f.key&&(F(c.isCloned)||F(c.isOnce))){c.componentInstance=f.componentInstance;return}var x,k=c.data;d(k)&&d(x=k.hook)&&d(x=x.prepatch)&&x(f,c);var S=f.children,T=c.children;if(d(k)&&G(c)){for(x=0;x<r.update.length;++x)r.update[x](f,c);d(x=k.hook)&&d(x=x.update)&&x(f,c)}g(c.text)?d(S)&&d(T)?S!==T&&It(y,S,T,v,E):d(T)?(d(f.text)&&i.setTextContent(y,""),wt(y,null,T,0,T.length-1,v)):d(S)?J(S,0,S.length-1):d(f.text)&&i.setTextContent(y,""):f.text!==c.text&&i.setTextContent(y,c.text),d(k)&&d(x=k.hook)&&d(x=x.postpatch)&&x(f,c)}}function et(f,c,v){if(F(v)&&d(f.parent))f.parent.data.pendingInsert=c;else for(var m=0;m<c.length;++m)c[m].data.hook.insert(c[m])}var Tn=!1,tn=j("attrs,class,staticClass,staticStyle,key");function Et(f,c,v,m){var A,E=c.tag,y=c.data,x=c.children;if(m=m||y&&y.pre,c.elm=f,F(c.isComment)&&d(c.asyncFactory))return c.isAsyncPlaceholder=!0,!0;if(d(y)&&(d(A=y.hook)&&d(A=A.init)&&A(c,!0),d(A=c.componentInstance)))return C(c,v),!0;if(d(E)){if(d(x))if(!f.hasChildNodes())pt(c,x,v);else if(d(A=y)&&d(A=A.domProps)&&d(A=A.innerHTML)){if(A!==f.innerHTML)return!1}else{for(var k=!0,S=f.firstChild,T=0;T<x.length;T++){if(!S||!Et(S,x[T],v,m)){k=!1;break}S=S.nextSibling}if(!k||S)return!1}if(d(y)){var M=!1;for(var R in y)if(!tn(R)){M=!0,V(c,v);break}!M&&y.class&&un(y.class)}}else f.data!==c.text&&(f.data=c.text);return!0}function Ut(f,c,v){return d(c.tag)?c.tag.indexOf("vue-component")===0||!u(c,v)&&c.tag.toLowerCase()===(f.tagName&&f.tagName.toLowerCase()):f.nodeType===(c.isComment?8:3)}return function(c,v,m,A){if(g(v)){d(c)&&ct(c);return}var E=!1,y=[];if(g(c))E=!0,h(v,y);else{var x=d(c.nodeType);if(!x&&xt(c,v))W(c,v,y,null,null,A);else{if(x){if(c.nodeType===1&&c.hasAttribute(Ve)&&(c.removeAttribute(Ve),m=!0),F(m)&&Et(c,v,y))return et(v,y,!0),c;c=a(c)}var k=c.elm,S=i.parentNode(k);if(h(v,y,k._leaveCb?null:S,i.nextSibling(k)),d(v.parent))for(var T=v.parent,M=G(v);T;){for(var R=0;R<r.destroy.length;++R)r.destroy[R](T);if(T.elm=v.elm,M){for(var ft=0;ft<r.create.length;++ft)r.create[ft](yt,T);var rt=T.data.hook.insert;if(rt.merged)for(var ot=1;ot<rt.fns.length;ot++)rt.fns[ot]()}else Nt(T);T=T.parent}d(S)?J([c],0,0):d(c.tag)&&ct(c)}}return et(v,y,E),v.elm}}var ss={create:Ae,update:Ae,destroy:function(e){Ae(e,yt)}};function Ae(t,e){(t.data.directives||e.data.directives)&&ps(t,e)}function ps(t,e){var n=t===yt,r=e===yt,o=Hr(t.data.directives,t.context),i=Hr(e.data.directives,e.context),a=[],p=[],l,u,s;for(l in i)u=o[l],s=i[l],u?(s.oldValue=u.value,s.oldArg=u.arg,Jt(s,"update",e,t),s.def&&s.def.componentUpdated&&p.push(s)):(Jt(s,"bind",e,t),s.def&&s.def.inserted&&a.push(s));if(a.length){var h=function(){for(var _=0;_<a.length;_++)Jt(a[_],"inserted",e,t)};n?at(e,"insert",h):h()}if(p.length&&at(e,"postpatch",function(){for(var _=0;_<p.length;_++)Jt(p[_],"componentUpdated",e,t)}),!n)for(l in o)i[l]||Jt(o[l],"unbind",t,t,r)}var ls=Object.create(null);function Hr(t,e){var n=Object.create(null);if(!t)return n;var r,o;for(r=0;r<t.length;r++)o=t[r],o.modifiers||(o.modifiers=ls),n[cs(o)]=o,o.def=Ln(e.$options,"directives",o.name,!0);return n}function cs(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Jt(t,e,n,r,o){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,o)}catch(a){gt(a,n.context,"directive "+t.name+" "+e+" hook")}}var fs=[rs,ss];function Dr(t,e){var n=e.componentOptions;if(!(d(n)&&n.Ctor.options.inheritAttrs===!1)&&!(g(t.data.attrs)&&g(e.data.attrs))){var r,o,i,a=e.elm,p=t.data.attrs||{},l=e.data.attrs||{};d(l.__ob__)&&(l=e.data.attrs=B({},l));for(r in l)o=l[r],i=p[r],i!==o&&$r(a,r,o,e.data.pre);(Tt||Nn)&&l.value!==p.value&&$r(a,"value",l.value);for(r in p)g(l[r])&&(ue(r)?a.removeAttributeNS(de,Or(r)):Fr(r)||a.removeAttribute(r))}}function $r(t,e,n,r){r||t.tagName.indexOf("-")>-1?Ir(t,e,n):Ha(e)?gn(n)?t.removeAttribute(e):(n=e==="allowfullscreen"&&t.tagName==="EMBED"?"true":e,t.setAttribute(e,n)):Fr(e)?t.setAttribute(e,Na(e,n)):ue(e)?gn(n)?t.removeAttributeNS(de,Or(e)):t.setAttributeNS(de,e,n):Ir(t,e,n)}function Ir(t,e,n){if(gn(n))t.removeAttribute(e);else{if(Tt&&!kt&&t.tagName==="TEXTAREA"&&e==="placeholder"&&n!==""&&!t.__ieph){var r=function(o){o.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var ds={create:Dr,update:Dr};function Ur(t,e){var n=e.elm,r=e.data,o=t.data;if(!(g(r.staticClass)&&g(r.class)&&(g(o)||g(o.staticClass)&&g(o.class)))){var i=Da(e),a=n._transitionClasses;d(a)&&(i=ve(i,_e(a))),i!==n._prevClass&&(n.setAttribute("class",i),n._prevClass=i)}}var us={create:Ur,update:Ur},ge="__r",Ce="__c";function vs(t){if(d(t[ge])){var e=Tt?"change":"input";t[e]=[].concat(t[ge],t[e]||[]),delete t[ge]}d(t[Ce])&&(t.change=[].concat(t[Ce],t.change||[]),delete t[Ce])}var Wt;function _s(t,e,n){var r=Wt;return function o(){var i=e.apply(null,arguments);i!==null&&Vr(t,o,n,r)}}var hs=Gn&&!(Pe&&Number(Pe[1])<=53);function ms(t,e,n,r){if(hs){var o=br,i=e;e=i._wrapper=function(a){if(a.target===a.currentTarget||a.timeStamp>=o||a.timeStamp<=0||a.target.ownerDocument!==document)return i.apply(this,arguments)}}Wt.addEventListener(t,e,Re?{capture:n,passive:r}:n)}function Vr(t,e,n,r){(r||Wt).removeEventListener(t,e._wrapper||e,n)}function Qr(t,e){if(!(g(t.data.on)&&g(e.data.on))){var n=e.data.on||{},r=t.data.on||{};Wt=e.elm,vs(n),rr(n,r,ms,Vr,_s,e.context),Wt=void 0}}var As={create:Qr,update:Qr},yn;function Lr(t,e){if(!(g(t.data.domProps)&&g(e.data.domProps))){var n,r,o=e.elm,i=t.data.domProps||{},a=e.data.domProps||{};d(a.__ob__)&&(a=e.data.domProps=B({},a));for(n in i)n in a||(o[n]="");for(n in a){if(r=a[n],n==="textContent"||n==="innerHTML"){if(e.children&&(e.children.length=0),r===i[n])continue;o.childNodes.length===1&&o.removeChild(o.childNodes[0])}if(n==="value"&&o.tagName!=="PROGRESS"){o._value=r;var p=g(r)?"":String(r);gs(o,p)&&(o.value=p)}else if(n==="innerHTML"&&he(o.tagName)&&g(o.innerHTML)){yn=yn||document.createElement("div"),yn.innerHTML="<svg>"+r+"</svg>";for(var l=yn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;l.firstChild;)o.appendChild(l.firstChild)}else if(r!==i[n])try{o[n]=r}catch{}}}}function gs(t,e){return!t.composing&&(t.tagName==="OPTION"||Cs(t,e)||ys(t,e))}function Cs(t,e){var n=!0;try{n=document.activeElement!==t}catch{}return n&&t.value!==e}function ys(t,e){var n=t.value,r=t._vModifiers;if(d(r)){if(r.number)return Qt(n)!==Qt(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var xs={create:Lr,update:Lr},bs=dt(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(o){if(o){var i=o.split(r);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e});function ye(t){var e=Pr(t.style);return t.staticStyle?B(t.staticStyle,e):e}function Pr(t){return Array.isArray(t)?$e(t):typeof t=="string"?bs(t):t}function ws(t,e){var n={},r;if(e)for(var o=t;o.componentInstance;)o=o.componentInstance._vnode,o&&o.data&&(r=ye(o.data))&&B(n,r);(r=ye(t.data))&&B(n,r);for(var i=t;i=i.parent;)i.data&&(r=ye(i.data))&&B(n,r);return n}var Es=/^--/,Rr=/\s*!important$/,Gr=function(t,e,n){if(Es.test(e))t.style.setProperty(e,n);else if(Rr.test(n))t.style.setProperty(Lt(e),n.replace(Rr,""),"important");else{var r=Ss(e);if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)t.style[r]=n[o];else t.style[r]=n}},Zr=["Webkit","Moz","ms"],xn,Ss=dt(function(t){if(xn=xn||document.createElement("div").style,t=ut(t),t!=="filter"&&t in xn)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Zr.length;n++){var r=Zr[n]+e;if(r in xn)return r}});function jr(t,e){var n=e.data,r=t.data;if(!(g(n.staticStyle)&&g(n.style)&&g(r.staticStyle)&&g(r.style))){var o,i,a=e.elm,p=r.staticStyle,l=r.normalizedStyle||r.style||{},u=p||l,s=Pr(e.data.style)||{};e.data.normalizedStyle=d(s.__ob__)?B({},s):s;var h=ws(e,!0);for(i in u)g(h[i])&&Gr(a,i,"");for(i in h)o=h[i],o!==u[i]&&Gr(a,i,o??"")}}var Ts={create:jr,update:jr},Xr=/\s+/;function zr(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(Xr).forEach(function(r){return t.classList.add(r)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function qr(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(Xr).forEach(function(o){return t.classList.remove(o)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Yr(t){if(!!t){if(typeof t=="object"){var e={};return t.css!==!1&&B(e,Jr(t.name||"v")),B(e,t),e}else if(typeof t=="string")return Jr(t)}}var Jr=dt(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Wr=L&&!kt,Ht="transition",xe="animation",bn="transition",wn="transitionend",be="animation",Kr="animationend";Wr&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(bn="WebkitTransition",wn="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(be="WebkitAnimation",Kr="webkitAnimationEnd"));var to=L?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function no(t){to(function(){to(t)})}function bt(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),zr(t,e))}function nt(t,e){t._transitionClasses&&K(t._transitionClasses,e),qr(t,e)}function eo(t,e,n){var r=ro(t,e),o=r.type,i=r.timeout,a=r.propCount;if(!o)return n();var p=o===Ht?wn:Kr,l=0,u=function(){t.removeEventListener(p,s),n()},s=function(h){h.target===t&&++l>=a&&u()};setTimeout(function(){l<a&&u()},i+1),t.addEventListener(p,s)}var ks=/\b(transform|all)(,|$)/;function ro(t,e){var n=window.getComputedStyle(t),r=(n[bn+"Delay"]||"").split(", "),o=(n[bn+"Duration"]||"").split(", "),i=oo(r,o),a=(n[be+"Delay"]||"").split(", "),p=(n[be+"Duration"]||"").split(", "),l=oo(a,p),u,s=0,h=0;e===Ht?i>0&&(u=Ht,s=i,h=o.length):e===xe?l>0&&(u=xe,s=l,h=p.length):(s=Math.max(i,l),u=s>0?i>l?Ht:xe:null,h=u?u===Ht?o.length:p.length:0);var _=u===Ht&&ks.test(n[bn+"Property"]);return{type:u,timeout:s,propCount:h,hasTransform:_}}function oo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(n,r){return io(n)+io(t[r])}))}function io(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function we(t,e){var n=t.elm;d(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Yr(t.data.transition);if(!g(r)&&!(d(n._enterCb)||n.nodeType!==1)){for(var o=r.css,i=r.type,a=r.enterClass,p=r.enterToClass,l=r.enterActiveClass,u=r.appearClass,s=r.appearToClass,h=r.appearActiveClass,_=r.beforeEnter,C=r.enter,w=r.afterEnter,b=r.enterCancelled,pt=r.beforeAppear,G=r.appear,V=r.afterAppear,lt=r.appearCancelled,wt=r.duration,ct=Ct,J=Ct.$vnode;J&&J.parent;)ct=J.context,J=J.parent;var Z=!ct._isMounted||!t.isRootInsert;if(!(Z&&!G&&G!=="")){var It=Z&&u?u:a,Sn=Z&&h?h:l,Kt=Z&&s?s:p,W=Z&&pt||_,et=Z&&typeof G=="function"?G:C,Tn=Z&&V||w,tn=Z&&lt||b,Et=Qt(H(wt)?wt.enter:wt),Ut=o!==!1&&!kt,f=Ee(et),c=n._enterCb=en(function(){Ut&&(nt(n,Kt),nt(n,Sn)),c.cancelled?(Ut&&nt(n,It),tn&&tn(n)):Tn&&Tn(n),n._enterCb=null});t.data.show||at(t,"insert",function(){var v=n.parentNode,m=v&&v._pending&&v._pending[t.key];m&&m.tag===t.tag&&m.elm._leaveCb&&m.elm._leaveCb(),et&&et(n,c)}),W&&W(n),Ut&&(bt(n,It),bt(n,Sn),no(function(){nt(n,It),c.cancelled||(bt(n,Kt),f||(so(Et)?setTimeout(c,Et):eo(n,i,c)))})),t.data.show&&(e&&e(),et&&et(n,c)),!Ut&&!f&&c()}}}function ao(t,e){var n=t.elm;d(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Yr(t.data.transition);if(g(r)||n.nodeType!==1)return e();if(d(n._leaveCb))return;var o=r.css,i=r.type,a=r.leaveClass,p=r.leaveToClass,l=r.leaveActiveClass,u=r.beforeLeave,s=r.leave,h=r.afterLeave,_=r.leaveCancelled,C=r.delayLeave,w=r.duration,b=o!==!1&&!kt,pt=Ee(s),G=Qt(H(w)?w.leave:w),V=n._leaveCb=en(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(nt(n,p),nt(n,l)),V.cancelled?(b&&nt(n,a),_&&_(n)):(e(),h&&h(n)),n._leaveCb=null});C?C(lt):lt();function lt(){V.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),u&&u(n),b&&(bt(n,a),bt(n,l),no(function(){nt(n,a),V.cancelled||(bt(n,p),pt||(so(G)?setTimeout(V,G):eo(n,i,V)))})),s&&s(n,V),!b&&!pt&&V())}}function so(t){return typeof t=="number"&&!isNaN(t)}function Ee(t){if(g(t))return!1;var e=t.fns;return d(e)?Ee(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function po(t,e){e.data.show!==!0&&we(e)}var Bs=L?{create:po,activate:po,remove:function(e,n){e.data.show!==!0?ao(e,n):n()}}:{},Fs=[ds,us,As,xs,Ts,Bs],Os=Fs.concat(fs),Ms=as({nodeOps:es,modules:Os});kt&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Se(t,"input")});var lo={inserted:function(e,n,r,o){r.tag==="select"?(o.elm&&!o.elm._vOptions?at(r,"postpatch",function(){lo.componentUpdated(e,n,r)}):co(e,n,r.context),e._vOptions=[].map.call(e.options,En)):(r.tag==="textarea"||me(e.type))&&(e._vModifiers=n.modifiers,n.modifiers.lazy||(e.addEventListener("compositionstart",Ns),e.addEventListener("compositionend",vo),e.addEventListener("change",vo),kt&&(e.vmodel=!0)))},componentUpdated:function(e,n,r){if(r.tag==="select"){co(e,n,r.context);var o=e._vOptions,i=e._vOptions=[].map.call(e.options,En);if(i.some(function(p,l){return!vt(p,o[l])})){var a=e.multiple?n.value.some(function(p){return uo(p,i)}):n.value!==n.oldValue&&uo(n.value,i);a&&Se(e,"change")}}}};function co(t,e,n){fo(t,e,n),(Tt||Nn)&&setTimeout(function(){fo(t,e,n)},0)}function fo(t,e,n){var r=e.value,o=t.multiple;if(!(o&&!Array.isArray(r))){for(var i,a,p=0,l=t.options.length;p<l;p++)if(a=t.options[p],o)i=Ue(r,En(a))>-1,a.selected!==i&&(a.selected=i);else if(vt(En(a),r)){t.selectedIndex!==p&&(t.selectedIndex=p);return}o||(t.selectedIndex=-1)}}function uo(t,e){return e.every(function(n){return!vt(n,t)})}function En(t){return"_value"in t?t._value:t.value}function Ns(t){t.target.composing=!0}function vo(t){!t.target.composing||(t.target.composing=!1,Se(t.target,"input"))}function Se(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Te(t){return t.componentInstance&&(!t.data||!t.data.transition)?Te(t.componentInstance._vnode):t}var Hs={bind:function(e,n,r){var o=n.value;r=Te(r);var i=r.data&&r.data.transition,a=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;o&&i?(r.data.show=!0,we(r,function(){e.style.display=a})):e.style.display=o?a:"none"},update:function(e,n,r){var o=n.value,i=n.oldValue;if(!o!=!i){r=Te(r);var a=r.data&&r.data.transition;a?(r.data.show=!0,o?we(r,function(){e.style.display=e.__vOriginalDisplay}):ao(r,function(){e.style.display="none"})):e.style.display=o?e.__vOriginalDisplay:"none"}},unbind:function(e,n,r,o,i){i||(e.style.display=e.__vOriginalDisplay)}},Ds={model:lo,show:Hs},_o={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function ke(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?ke(Ar(e.children)):t}function ho(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var o=n._parentListeners;for(var i in o)e[ut(i)]=o[i];return e}function mo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function $s(t){for(;t=t.parent;)if(t.data.transition)return!0}function Is(t,e){return e.key===t.key&&e.tag===t.tag}var Us=function(t){return t.tag||zt(t)},Vs=function(t){return t.name==="show"},Qs={name:"transition",props:_o,abstract:!0,render:function(e){var n=this,r=this.$slots.default;if(!!r&&(r=r.filter(Us),!!r.length)){var o=this.mode,i=r[0];if($s(this.$vnode))return i;var a=ke(i);if(!a)return i;if(this._leaving)return mo(e,i);var p="__transition-"+this._uid+"-";a.key=a.key==null?a.isComment?p+"comment":p+a.tag:Vt(a.key)?String(a.key).indexOf(p)===0?a.key:p+a.key:a.key;var l=(a.data||(a.data={})).transition=ho(this),u=this._vnode,s=ke(u);if(a.data.directives&&a.data.directives.some(Vs)&&(a.data.show=!0),s&&s.data&&!Is(a,s)&&!zt(s)&&!(s.componentInstance&&s.componentInstance._vnode.isComment)){var h=s.data.transition=B({},l);if(o==="out-in")return this._leaving=!0,at(h,"afterLeave",function(){n._leaving=!1,n.$forceUpdate()}),mo(e,i);if(o==="in-out"){if(zt(a))return u;var _,C=function(){_()};at(l,"afterEnter",C),at(l,"enterCancelled",C),at(h,"delayLeave",function(w){_=w})}}return i}}},Ao=B({tag:String,moveClass:String},_o);delete Ao.mode;var Ls={props:Ao,beforeMount:function(){var e=this,n=this._update;this._update=function(r,o){var i=Cr(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),n.call(e,r,o)}},render:function(e){for(var n=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),o=this.prevChildren=this.children,i=this.$slots.default||[],a=this.children=[],p=ho(this),l=0;l<i.length;l++){var u=i[l];if(u.tag){if(u.key!=null&&String(u.key).indexOf("__vlist")!==0)a.push(u),r[u.key]=u,(u.data||(u.data={})).transition=p;else if(!1)var s,h}}if(o){for(var _=[],C=[],w=0;w<o.length;w++){var b=o[w];b.data.transition=p,b.data.pos=b.elm.getBoundingClientRect(),r[b.key]?_.push(b):C.push(b)}this.kept=e(n,null,_),this.removed=C}return e(n,null,a)},updated:function(){var e=this.prevChildren,n=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,n)||(e.forEach(Ps),e.forEach(Rs),e.forEach(Gs),this._reflow=document.body.offsetHeight,e.forEach(function(r){if(r.data.moved){var o=r.elm,i=o.style;bt(o,n),i.transform=i.WebkitTransform=i.transitionDuration="",o.addEventListener(wn,o._moveCb=function a(p){p&&p.target!==o||(!p||/transform$/.test(p.propertyName))&&(o.removeEventListener(wn,a),o._moveCb=null,nt(o,n))})}}))},methods:{hasMove:function(e,n){if(!Wr)return!1;if(this._hasMove)return this._hasMove;var r=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(i){qr(r,i)}),zr(r,n),r.style.display="none",this.$el.appendChild(r);var o=ro(r);return this.$el.removeChild(r),this._hasMove=o.hasTransform}}};function Ps(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Rs(t){t.data.newPos=t.elm.getBoundingClientRect()}function Gs(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,o=e.top-n.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+o+"px)",i.transitionDuration="0s"}}var Zs={Transition:Qs,TransitionGroup:Ls};O.config.mustUseProp=Oa;O.config.isReservedTag=Nr;O.config.isReservedAttr=Ba;O.config.getTagNamespace=La;O.config.isUnknownElement=Pa;B(O.options.directives,Ds);B(O.options.components,Zs);O.prototype.__patch__=L?Ms:I;O.prototype.$mount=function(t,e){return t=t&&L?Ra(t):void 0,Wi(this,t,e)};L&&setTimeout(function(){$.devtools&&sn&&sn.emit("init",O)},0);var Be=O;var js={name:"Loader"},go=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._m(0)},Xs=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"loader"}),t._v(" "),n("span",[t._v("loading..")])])}];go._withStripped=!0;var zs=function(t){!t||t("data-v-2afd6a14_0",{source:`
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
`]},media:void 0})},qs="data-v-2afd6a14",Ys=void 0,Js=!1;function Ws(t,e,n,r,o,i,a,p,l,u){let s=(typeof n=="function"?n.options:n)||{};s.__file=`<template>
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
`,s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r;{let h;if(e&&(h=a?function(_){e.call(this,u(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,p(_))}),h!==void 0)if(s.functional){let _=s.render;s.render=function(w,b){return h.call(b),_(w,b)}}else{let _=s.beforeCreate;s.beforeCreate=_?[].concat(_,h):[h]}}return s}function Fe(){let t=Fe.styles||(Fe.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=e?o.media||"default":r,a=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let p=o.source,l=a.ids.length;if(a.ids.push(r),e&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){let u=document.head||document.getElementsByTagName("head")[0],s=a.element=document.createElement("style");s.type="text/css",o.media&&s.setAttribute("media",o.media),e&&(s.setAttribute("data-group",i),s.setAttribute("data-next-index","0")),u.appendChild(s)}if(e&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(p),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let u=document.createTextNode(p),s=a.element.childNodes;s[l]&&a.element.removeChild(s[l]),s.length?a.element.insertBefore(u,s[l]):a.element.appendChild(u)}}}}var Ks=Ws({render:go,staticRenderFns:Xs},zs,js,qs,Js,Ys,!1,Fe,void 0,void 0),Co=Ks;var t1={name:"Equation"},yo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"100",viewBox:"0 -1458 11066 2416","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("path",{attrs:{id:"MJX-87-TEX-I-78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-SO-221A",d:"M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),t._v(" "),n("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[n("g",{attrs:{"data-mml-node":"math"}},[n("g",{attrs:{"data-mml-node":"mtable"}},[n("g",{attrs:{"data-mml-node":"mtr",transform:"translate(0, -262)"}},[n("g",{attrs:{"data-mml-node":"mtd"}},[n("g",{attrs:{"data-mml-node":"msub"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-31"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(975.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2C"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"msub",transform:"translate(1420.2, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(2673.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-3D"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3729.3, 0)"}},[n("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 787.5)"}},[n("g",{attrs:{"data-mml-node":"mo"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(778, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1429.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-B1"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"msqrt",transform:"translate(2429.4, 0)"}},[n("g",{attrs:{transform:"translate(1000, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(429, 0)"}},[n("g",{attrs:{"data-mml-node":"mo"}},[n("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v(`
                            \xB2
                          `)])])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1005, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(2005.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-34"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(2505.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(3034.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-63"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(0, 22.5)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-SO-221A"}})]),t._v(" "),n("rect",{attrs:{width:"3467.2",height:"60",x:"1000",y:"812.5"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mrow",transform:"translate(3153.8, -686)"}},[n("g",{attrs:{"data-mml-node":"mn"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(500, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})])]),t._v(" "),n("rect",{attrs:{width:"7096.7",height:"60",x:"120",y:"220"}})])])])])])])])])},n1=[];yo._withStripped=!0;var e1=void 0,r1=void 0,o1=void 0,i1=!1;function a1(t,e,n,r,o,i,a,p,l,u){let s=(typeof n=="function"?n.options:n)||{};return s.__file=`<template>
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
`,s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r,s}var s1=a1({render:yo,staticRenderFns:n1},e1,t1,r1,i1,o1,!1,void 0,void 0,void 0),xo=s1;var p1={},bo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://github.com/ProxyLabs",target:"_blank"}},[n("svg",{staticClass:"logo",attrs:{viewBox:"0 0 648 121",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z",fill:"url(#paint0_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z",fill:"url(#paint1_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z",fill:"url(#paint2_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z",fill:"url(#paint3_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z",fill:"url(#paint4_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z",fill:"url(#paint5_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z",fill:"url(#paint6_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z",fill:"url(#paint7_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z",fill:"url(#paint8_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z",fill:"url(#paint9_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z",fill:"url(#paint10_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M84.6285 34.026H92.6247V26.027H84.6285V34.026Z",fill:"url(#paint11_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z",fill:"url(#paint12_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M108.791 14.4016H123.17V0H108.791V14.4016Z",fill:"url(#paint13_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z",fill:"url(#paint14_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M97.811 33.2278H104.194V26.8426H97.811V33.2278Z",fill:"url(#paint15_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M110.803 27.953H120.395V18.3578H110.803V27.953Z",fill:"url(#paint16_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M106.623 38.0341H110.942V33.7137H106.623V38.0341Z",fill:"url(#paint17_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M114.792 42.4067H121.175V36.0388H114.792V42.4067Z",fill:"url(#paint18_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z",fill:"url(#paint19_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z",fill:"url(#paint20_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z",fill:"url(#paint21_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z",fill:"url(#paint22_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z",fill:"url(#paint23_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z",fill:"url(#paint24_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z",fill:"url(#paint25_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z",fill:"url(#paint26_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z",fill:"url(#paint27_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z",fill:"url(#paint28_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z",fill:"url(#paint29_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z",fill:"url(#paint30_linear_3_40)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_3_40",x1:"16.2335",y1:"78.5655",x2:"90.5021",y2:"14.0713",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_3_40",x1:"33.4419",y1:"98.3816",x2:"107.71",y2:"33.8874",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_3_40",x1:"51.0435",y1:"118.651",x2:"125.312",y2:"54.1567",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_3_40",x1:"62.0301",y1:"131.303",x2:"136.299",y2:"66.8084",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint4_linear_3_40",x1:"46.0063",y1:"112.85",x2:"120.275",y2:"48.3561",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint5_linear_3_40",x1:"22.5737",y1:"85.8663",x2:"96.8421",y2:"21.3722",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint6_linear_3_40",x1:"5.30527",y1:"65.9808",x2:"79.5737",y2:"1.48666",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint7_linear_3_40",x1:"39.9594",y1:"105.887",x2:"114.228",y2:"41.3928",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint8_linear_3_40",x1:"14.3736",y1:"76.4235",x2:"88.642",y2:"11.9294",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint9_linear_3_40",x1:"30.2892",y1:"94.7512",x2:"104.558",y2:"30.2571",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint10_linear_3_40",x1:"21.9139",y1:"85.1065",x2:"96.1823",y2:"20.6124",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint11_linear_3_40",x1:"23.3495",y1:"86.7596",x2:"97.618",y2:"22.2656",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint12_linear_3_40",x1:"11.5745",y1:"73.2003",x2:"85.8427",y2:"8.70587",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint13_linear_3_40",x1:"23.8107",y1:"87.2911",x2:"98.0794",y2:"22.7968",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint14_linear_3_40",x1:"23.6893",y1:"87.1514",x2:"97.958",y2:"22.657",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint15_linear_3_40",x1:"28.6723",y1:"92.8895",x2:"102.941",y2:"28.3951",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint16_linear_3_40",x1:"31.5413",y1:"96.193",x2:"105.81",y2:"31.6988",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint17_linear_3_40",x1:"34.9074",y1:"100.07",x2:"109.176",y2:"35.5752",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint18_linear_3_40",x1:"40.5234",y1:"106.536",x2:"114.792",y2:"42.0425",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint19_linear_3_40",x1:"17.9841",y1:"80.5813",x2:"92.2529",y2:"16.0874",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint20_linear_3_40",x1:"31.505",y1:"96.1513",x2:"105.774",y2:"31.6572",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint21_linear_3_40",x1:"39.6018",y1:"105.475",x2:"113.87",y2:"40.9808",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint22_linear_3_40",x1:"156.752",y1:"71.2438",x2:"644.928",y2:"71.2438",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint23_linear_3_40",x1:"156.752",y1:"80.3112",x2:"644.928",y2:"80.3112",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint24_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint25_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint26_linear_3_40",x1:"156.752",y1:"89.2923",x2:"644.928",y2:"89.2923",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint27_linear_3_40",x1:"156.752",y1:"71.3085",x2:"644.928",y2:"71.3085",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint28_linear_3_40",x1:"156.752",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint29_linear_3_40",x1:"156.752",y1:"71.287",x2:"644.928",y2:"71.287",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint30_linear_3_40",x1:"156.753",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])])},l1=[];bo._withStripped=!0;var c1=void 0,f1=void 0,d1=void 0,u1=!1;function v1(t,e,n,r,o,i,a,p,l,u){let s=(typeof n=="function"?n.options:n)||{};return s.__file=`<template>
  <a href="https://github.com/ProxyLabs" target="_blank">
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
  </a>
</template>
`,s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r,s}var _1=v1({render:bo,staticRenderFns:l1},c1,p1,f1,u1,d1,!1,void 0,void 0,void 0),wo=_1;var h1={},Eo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://github.com/ProxyLabs/mina-secret-exchange",target:"_blank"}},[n("svg",{staticClass:"github",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])])},m1=[];Eo._withStripped=!0;var A1=void 0,g1=void 0,C1=void 0,y1=!1;function x1(t,e,n,r,o,i,a,p,l,u){let s=(typeof n=="function"?n.options:n)||{};return s.__file=`<template>
  <a href="https://github.com/ProxyLabs/mina-secret-exchange" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" class="github" viewBox="0 0 24 24">
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  </a>
</template>
`,s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r,s}var b1=x1({render:Eo,staticRenderFns:m1},A1,h1,g1,y1,C1,!1,void 0,void 0,void 0),So=b1;var w1={name:"Snackbar",props:["snack"],mounted(){var t=document.getElementById("snackbar");t.className="",t.classList.add("show"),console.log(this.$props.snack.type),this.$props.snack.type=="failure"?t.classList.add("type-failure"):this.$props.snack.type=="success"?t.classList.add("type-success"):t.classList.add("type-info"),setTimeout(function(){t.className=t.className.replace("show","")},3e3)}},To=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"snackbar"}},[t._v(`
  `+t._s(t.$props.snack.message)+`
`)])},E1=[];To._withStripped=!0;var S1=function(t){!t||t("data-v-2afebe38_0",{source:`
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
`]},media:void 0})},T1="data-v-2afebe38",k1=void 0,B1=!1;function F1(t,e,n,r,o,i,a,p,l,u){let s=(typeof n=="function"?n.options:n)||{};s.__file=`<template>
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
`,s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r;{let h;if(e&&(h=a?function(_){e.call(this,u(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,p(_))}),h!==void 0)if(s.functional){let _=s.render;s.render=function(w,b){return h.call(b),_(w,b)}}else{let _=s.beforeCreate;s.beforeCreate=_?[].concat(_,h):[h]}}return s}function Oe(){let t=Oe.styles||(Oe.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=e?o.media||"default":r,a=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let p=o.source,l=a.ids.length;if(a.ids.push(r),e&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){let u=document.head||document.getElementsByTagName("head")[0],s=a.element=document.createElement("style");s.type="text/css",o.media&&s.setAttribute("media",o.media),e&&(s.setAttribute("data-group",i),s.setAttribute("data-next-index","0")),u.appendChild(s)}if(e&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(p),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let u=document.createTextNode(p),s=a.element.childNodes;s[l]&&a.element.removeChild(s[l]),s.length?a.element.insertBefore(u,s[l]):a.element.appendChild(u)}}}}var O1=F1({render:To,staticRenderFns:E1},S1,w1,T1,B1,k1,!1,Oe,void 0,void 0),ko=O1;var M1={name:"Mina"},Bo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 979 979",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"489.5",cy:"489.5",r:"489.5",fill:"#4F4F4F"}}),t._v(" "),n("path",{attrs:{d:"M488.752 794.84C498.483 795.398 508.037 792.07 515.316 785.587C522.594 779.104 527 769.997 527.566 760.267L533.652 713.97C504.11 720.817 473.394 720.817 443.852 713.97L449.739 760.366C450.469 770.063 454.954 779.091 462.241 785.53C469.528 791.969 479.04 795.309 488.752 794.84V794.84ZM751.966 784.862H824.505V370.784C824.505 314.26 798.363 276.294 751.966 261.976V784.862ZM153 784.862H225.538V261.727C179.441 276.045 153 314.01 153 370.535V784.862ZM533.652 713.97C580.897 702.146 612.127 668.421 619.711 609.203L665.259 257.436C612.776 269.959 584.09 309.87 575.659 374.725L533.652 713.97ZM443.852 713.97L401.896 374.725C393.415 309.87 364.728 269.959 312.445 257.436L357.993 609.203C365.577 668.271 395.959 701.996 444.052 713.97H443.852ZM751.966 261.827V228.9C751.966 200.214 735.104 184 712.304 184C689.505 184 673.491 197.52 669.3 227.004L665.06 257.387C693.942 251.708 723.774 253.164 751.966 261.627V261.827ZM225.538 261.627C241.894 256.362 258.995 253.784 276.176 253.994C288.355 253.741 300.524 254.879 312.445 257.387L308.254 227.004C304.014 197.52 287.999 184 265.2 184C242.401 184 225.538 200.014 225.538 228.9V261.627Z",fill:"#FF603B"}})])},N1=[];Bo._withStripped=!0;var H1=void 0,D1=void 0,$1=void 0,I1=!1;function U1(t,e,n,r,o,i,a,p,l,u){let s=(typeof n=="function"?n.options:n)||{};return s.__file=`<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 979 979"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="489.5" cy="489.5" r="489.5" fill="#4F4F4F" />
    <path
      d="M488.752 794.84C498.483 795.398 508.037 792.07 515.316 785.587C522.594 779.104 527 769.997 527.566 760.267L533.652 713.97C504.11 720.817 473.394 720.817 443.852 713.97L449.739 760.366C450.469 770.063 454.954 779.091 462.241 785.53C469.528 791.969 479.04 795.309 488.752 794.84V794.84ZM751.966 784.862H824.505V370.784C824.505 314.26 798.363 276.294 751.966 261.976V784.862ZM153 784.862H225.538V261.727C179.441 276.045 153 314.01 153 370.535V784.862ZM533.652 713.97C580.897 702.146 612.127 668.421 619.711 609.203L665.259 257.436C612.776 269.959 584.09 309.87 575.659 374.725L533.652 713.97ZM443.852 713.97L401.896 374.725C393.415 309.87 364.728 269.959 312.445 257.436L357.993 609.203C365.577 668.271 395.959 701.996 444.052 713.97H443.852ZM751.966 261.827V228.9C751.966 200.214 735.104 184 712.304 184C689.505 184 673.491 197.52 669.3 227.004L665.06 257.387C693.942 251.708 723.774 253.164 751.966 261.627V261.827ZM225.538 261.627C241.894 256.362 258.995 253.784 276.176 253.994C288.355 253.741 300.524 254.879 312.445 257.387L308.254 227.004C304.014 197.52 287.999 184 265.2 184C242.401 184 225.538 200.014 225.538 228.9V261.627Z"
      fill="#FF603B"
    />
  </svg>
</template>
<script>
export default {
  name: "Mina",
};
<\/script>
`,s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r,s}var V1=U1({render:Bo,staticRenderFns:N1},H1,M1,D1,I1,$1,!1,void 0,void 0,void 0),Fo=V1;var Q1={name:"Proxy"},Oo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 979 979",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"489.5",cy:"489.5",r:"489.5",fill:"#4F4F4F"}}),t._v(" "),n("path",{attrs:{d:"M528.517 372.193C528.419 381.305 531.167 385.616 540.099 388.164C572.883 397.375 605.47 407.272 638.156 416.874C640.807 417.657 643.554 418.05 647.58 418.833C647.971 414.914 648.462 411.876 648.462 408.839C648.462 399.825 648.462 390.908 648.462 381.893H609.985V314.774H648.462C648.462 300.958 648.462 287.241 648.561 273.425C648.561 266.664 646.892 261.961 640.218 258.923C639.236 258.531 638.353 258.041 637.371 257.649V267.546H582.601V232.859C567.485 226.001 552.466 219.142 537.351 212.381C535.29 211.401 532.737 211.205 529.401 210.421C529.106 214.83 528.811 218.26 528.713 221.689C528.713 271.857 528.91 322.024 528.517 372.193Z",fill:"url(#paint0_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M621.077 442.056C594.673 434.021 568.073 426.868 541.473 419.421C537.842 418.343 534.111 417.853 528.713 416.874V428.828C528.615 479.975 528.713 531.221 528.321 582.368C528.222 590.991 533.13 592.265 539.707 593.245C564.835 596.772 589.962 600.495 615.09 604.023C622.844 605.101 630.696 605.591 638.353 607.452C647.285 609.608 648.757 605.689 648.757 598.046C648.462 558.264 648.954 518.581 648.561 478.799C648.07 443.722 654.744 452.246 621.077 442.056Z",fill:"url(#paint1_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M528.615 785.686C528.419 794.308 530.48 798.129 539.412 798.227C539.805 798.227 540.198 798.227 540.59 798.227C552.467 798.031 564.245 797.934 576.123 797.836C583.483 797.836 590.845 797.836 598.207 797.836C604.587 797.836 610.967 797.934 617.347 797.934C623.727 798.031 630.107 798.031 636.488 798.129H637.469C645.812 798.227 648.757 795.876 648.757 787.156C648.561 741.299 648.855 695.442 649.248 649.586C649.248 643.412 647.089 640.179 641.003 639.395C618.722 636.554 596.441 633.516 574.16 630.675C562.773 629.205 551.387 628.127 540.099 626.265C538.235 625.972 536.565 625.874 535.093 625.972C530.48 626.364 528.517 629.107 528.713 636.162C529.302 661.246 528.91 686.231 528.91 711.315H528.811C528.713 736.204 529.106 760.896 528.615 785.686Z",fill:"url(#paint2_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M671.431 648.703C670.94 672.318 671.137 695.932 671.137 719.645H671.333C671.333 742.279 671.529 764.815 671.235 787.351C671.137 795.091 673.492 798.326 681.639 798.129C709.614 797.737 737.686 797.836 765.66 798.129C772.727 798.227 775.181 795.484 775.181 788.625C775.083 746.295 775.083 703.966 775.181 661.736C775.181 655.367 773.021 651.741 766.052 651.056C736.508 648.116 707.062 644.687 677.517 642.041C675.75 641.943 671.529 646.352 671.431 648.703Z",fill:"url(#paint3_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M670.547 597.752C670.449 606.669 673.198 609.805 682.719 610.98C710.005 614.214 736.998 618.917 764.089 623.326C771.156 624.502 775.966 624.208 775.868 614.997C775.475 573.55 774.984 532.103 775.377 490.655C775.475 484.286 774.298 480.074 771.058 477.232L720.901 495.064L708.239 459.594C700.092 457.439 691.946 455.283 683.798 453.225C672.216 450.286 671.333 450.874 671.235 462.534C671.136 485.071 671.235 507.607 671.235 530.143H670.547C670.645 552.777 670.94 575.216 670.547 597.752Z",fill:"url(#paint4_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M494.948 428.828V416.874C489.647 417.952 485.819 418.441 482.188 419.421C455.686 426.868 428.988 434.021 402.583 442.056C368.917 452.246 375.592 443.722 375.199 478.897C374.806 518.581 375.199 558.363 375.002 598.144C375.002 605.787 376.474 609.707 385.406 607.551C392.965 605.689 400.915 605.297 408.67 604.121C433.798 600.495 458.925 596.772 484.053 593.245C490.629 592.363 495.439 590.992 495.439 582.368C494.948 531.221 495.046 479.975 494.948 428.828ZM466.385 565.418C450.189 567.671 434.091 570.022 417.896 572.374C412.89 573.06 407.786 573.355 402.976 574.53C397.284 575.901 396.302 573.452 396.302 568.454C396.498 542.881 396.203 517.307 396.4 491.733C396.694 469.099 392.376 474.586 414.068 468.021C431.049 462.927 448.226 458.223 465.305 453.422C467.661 452.735 470.114 452.442 473.55 451.756C473.55 454.99 473.55 457.243 473.55 459.497C473.55 492.42 473.55 525.342 473.747 558.265C473.747 563.948 470.605 564.83 466.385 565.418Z",fill:"url(#paint5_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M494.849 221.689C494.849 218.26 494.457 214.83 494.26 210.421C490.825 211.303 488.371 211.499 486.212 212.381C451.955 227.862 417.7 243.54 383.345 258.923C376.67 261.961 375.002 266.566 375.002 273.425C375.198 318.595 375.1 363.766 375.1 408.937C375.1 411.974 375.591 415.012 375.983 418.931C380.008 418.05 382.756 417.657 385.406 416.873C418.093 407.272 450.68 397.277 483.463 388.164C492.494 385.616 495.144 381.305 495.046 372.193C494.653 322.024 494.849 271.857 494.849 221.689ZM466.188 362.198C444.986 368.077 423.981 374.544 402.878 380.717C401.209 381.207 399.344 381.501 396.792 381.991C396.596 379.444 396.203 377.484 396.203 375.524C396.203 346.325 396.203 317.224 396.105 288.025C396.105 283.615 397.185 280.578 401.504 278.716C423.687 268.82 445.772 258.629 467.955 248.635C469.33 248.047 470.9 247.851 473.157 247.361C473.354 250.203 473.55 252.456 473.55 254.612C473.55 287.045 473.452 319.379 473.747 351.812C473.747 357.691 472.077 360.532 466.188 362.198Z",fill:"url(#paint6_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M495.046 785.686C494.555 760.994 494.85 736.204 494.85 711.512H494.751C494.751 686.428 494.359 661.442 494.948 636.358C495.144 629.303 493.181 626.462 488.568 626.167C487.194 626.069 485.525 626.167 483.562 626.462C472.274 628.225 460.888 629.303 449.501 630.871C427.22 633.81 404.939 636.75 382.659 639.591C376.474 640.375 374.315 643.609 374.413 649.781C374.806 695.638 375.1 741.494 374.904 787.351C374.904 795.974 377.849 798.326 386.192 798.326H387.173C393.554 798.227 399.934 798.227 406.314 798.129C412.694 798.129 419.074 798.032 425.454 798.032C432.816 798.032 440.177 798.032 447.538 798.032C459.416 798.032 471.194 798.227 483.071 798.424C483.463 798.424 483.856 798.424 484.249 798.424C493.181 798.129 495.242 794.308 495.046 785.686ZM401.111 772.164C395.32 772.262 393.259 770.596 393.259 764.52C393.357 732.578 393.161 700.537 392.866 668.594C392.866 664.283 394.338 662.029 398.559 661.539C414.067 659.581 429.674 657.425 445.183 655.465C453.134 654.387 461.084 653.701 468.937 652.427C474.728 651.546 476.985 652.917 476.887 659.384C476.494 676.826 476.789 694.365 476.789 711.805H476.887C476.887 729.05 476.691 746.295 476.985 763.542C477.083 769.812 475.513 772.457 468.642 772.36C446.165 771.772 423.589 771.87 401.111 772.164Z",fill:"url(#paint7_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M353.015 530.241H352.426C352.426 507.705 352.426 485.168 352.426 462.632C352.426 450.972 351.542 450.286 339.961 453.324C313.949 459.987 288.135 467.238 261.928 473.117C251.425 475.468 248.284 480.172 248.382 490.655C248.774 532.103 248.382 573.55 247.891 614.899C247.793 624.208 252.602 624.404 259.67 623.326C286.761 618.917 313.851 614.214 341.04 610.98C350.561 609.902 353.31 606.669 353.212 597.752C352.721 575.313 353.015 552.777 353.015 530.241ZM329.066 589.424C309.827 591.677 290.785 595.009 271.742 598.144C266.736 598.928 263.4 598.732 263.4 592.265C263.694 563.066 263.989 533.867 263.694 504.668C263.596 497.221 265.853 493.988 273.215 492.321C291.668 488.206 309.925 483.013 328.182 478.407C336.329 476.251 336.918 476.741 337.016 484.973C337.016 500.846 337.016 516.719 337.016 532.593H337.409C337.409 548.466 337.212 564.34 337.507 580.212C337.703 586.386 335.739 588.639 329.066 589.424Z",fill:"url(#paint8_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M352.525 719.645C352.525 696.031 352.721 672.318 352.23 648.703C352.23 646.352 348.01 641.943 346.047 642.139C316.502 644.785 287.055 648.213 257.511 651.154C250.639 651.839 248.382 655.367 248.48 661.834C248.578 704.163 248.578 746.394 248.48 788.723C248.48 795.582 250.934 798.227 258.002 798.227C285.975 797.934 314.047 797.836 342.022 798.227C350.267 798.326 352.623 795.092 352.427 787.449C352.132 764.815 352.328 742.279 352.328 719.645H352.525ZM337.114 719.84H337.016C337.016 735.714 336.82 751.686 337.114 767.558C337.213 772.947 335.544 775.3 329.752 775.202C310.023 774.907 290.294 775.005 270.565 775.202C265.559 775.202 263.891 773.34 263.891 768.538C263.989 738.751 263.989 708.866 263.891 679.079C263.891 674.572 265.461 672.024 270.271 671.534C291.08 669.476 311.79 667.027 332.697 665.165C334.071 665.067 337.016 668.203 337.016 669.771C337.213 686.428 337.114 703.085 337.114 719.84Z",fill:"url(#paint9_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M141 787.548C141 792.545 141.491 797.248 148.165 797.149H148.656L219.328 796.561C221.782 796.561 223.843 794.505 223.843 792.055V785.098C224.039 746.1 223.745 707.102 224.137 668.104C224.236 657.816 221.291 655.563 207.549 658.796C189.292 663.01 170.643 664.675 151.895 665.067C143.552 665.263 141 668.105 141 674.865C141.098 712.393 141 749.921 141 787.548ZM153.76 691.033C153.76 686.329 155.527 684.37 161.22 684.272C174.176 683.978 187.035 682.9 199.697 679.961C209.218 677.707 211.181 679.274 211.181 686.428C210.985 713.373 211.083 740.319 210.985 767.265V772.066C210.985 773.83 209.61 775.202 207.844 775.202L159.06 775.593H158.668C154.055 775.593 153.76 772.457 153.76 768.931C153.858 742.964 153.858 716.999 153.76 691.033Z",fill:"url(#paint10_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M619.899 371.605H665.149V326.435H619.899V371.605Z",fill:"url(#paint11_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M594.477 258.629H627.948V225.119H594.477V258.629Z",fill:"url(#paint12_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M756.63 260.785H838V179.458H756.63V260.785Z",fill:"url(#paint13_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M690.276 313.892H726.398V277.932H690.276V313.892Z",fill:"url(#paint14_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M694.497 367.098H730.618V331.039H694.497V367.098Z",fill:"url(#paint15_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M768.015 337.311H822.295V283.125H768.015V337.311Z",fill:"url(#paint16_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M744.36 394.239H768.801V369.842H744.36V394.239Z",fill:"url(#paint17_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M790.591 418.932H826.712V382.971H790.591V418.932Z",fill:"url(#paint18_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M676.536 260.785H712.558V224.727H676.536V260.785Z",fill:"url(#paint19_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M665.149 424.81H701.27V388.85H665.149V424.81Z",fill:"url(#paint20_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M731.306 480.662L776.947 459.104L755.353 413.542L709.712 435.099L731.306 480.662Z",fill:"url(#paint21_linear_2_5)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_2_5",x1:"232.863",y1:"623.122",x2:"652.384",y2:"258.054",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_2_5",x1:"330.242",y1:"735.025",x2:"749.763",y2:"369.957",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_2_5",x1:"429.847",y1:"849.487",x2:"849.367",y2:"484.417",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_2_5",x1:"492.018",y1:"920.932",x2:"911.54",y2:"555.862",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint4_linear_2_5",x1:"401.341",y1:"816.73",x2:"820.861",y2:"451.661",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint5_linear_2_5",x1:"268.741",y1:"664.35",x2:"688.261",y2:"299.281",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint6_linear_2_5",x1:"171.021",y1:"552.055",x2:"590.542",y2:"186.987",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint7_linear_2_5",x1:"367.124",y1:"777.408",x2:"786.645",y2:"412.34",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint8_linear_2_5",x1:"222.338",y1:"611.026",x2:"641.858",y2:"245.958",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint9_linear_2_5",x1:"312.402",y1:"714.524",x2:"731.922",y2:"349.455",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint10_linear_2_5",x1:"265.007",y1:"660.059",x2:"684.527",y2:"294.992",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint11_linear_2_5",x1:"273.131",y1:"669.395",x2:"692.652",y2:"304.328",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint12_linear_2_5",x1:"206.499",y1:"592.824",x2:"626.018",y2:"227.755",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint13_linear_2_5",x1:"275.742",y1:"672.396",x2:"695.263",y2:"307.327",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint14_linear_2_5",x1:"275.056",y1:"671.605",x2:"694.574",y2:"306.537",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint15_linear_2_5",x1:"303.253",y1:"704.01",x2:"722.773",y2:"338.941",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint16_linear_2_5",x1:"319.486",y1:"722.667",x2:"739.008",y2:"357.598",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint17_linear_2_5",x1:"338.536",y1:"744.558",x2:"758.059",y2:"379.489",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint18_linear_2_5",x1:"370.314",y1:"781.075",x2:"789.835",y2:"416.007",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint19_linear_2_5",x1:"242.768",y1:"634.504",x2:"662.29",y2:"269.436",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint20_linear_2_5",x1:"319.283",y1:"722.429",x2:"738.803",y2:"357.362",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint21_linear_2_5",x1:"365.1",y1:"775.081",x2:"784.619",y2:"410.013",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])},L1=[];Oo._withStripped=!0;var P1=void 0,R1=void 0,G1=void 0,Z1=!1;function j1(t,e,n,r,o,i,a,p,l,u){let s=(typeof n=="function"?n.options:n)||{};return s.__file=`<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 979 979"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="489.5" cy="489.5" r="489.5" fill="#4F4F4F" />
    <path
      d="M528.517 372.193C528.419 381.305 531.167 385.616 540.099 388.164C572.883 397.375 605.47 407.272 638.156 416.874C640.807 417.657 643.554 418.05 647.58 418.833C647.971 414.914 648.462 411.876 648.462 408.839C648.462 399.825 648.462 390.908 648.462 381.893H609.985V314.774H648.462C648.462 300.958 648.462 287.241 648.561 273.425C648.561 266.664 646.892 261.961 640.218 258.923C639.236 258.531 638.353 258.041 637.371 257.649V267.546H582.601V232.859C567.485 226.001 552.466 219.142 537.351 212.381C535.29 211.401 532.737 211.205 529.401 210.421C529.106 214.83 528.811 218.26 528.713 221.689C528.713 271.857 528.91 322.024 528.517 372.193Z"
      fill="url(#paint0_linear_2_5)"
    />
    <path
      d="M621.077 442.056C594.673 434.021 568.073 426.868 541.473 419.421C537.842 418.343 534.111 417.853 528.713 416.874V428.828C528.615 479.975 528.713 531.221 528.321 582.368C528.222 590.991 533.13 592.265 539.707 593.245C564.835 596.772 589.962 600.495 615.09 604.023C622.844 605.101 630.696 605.591 638.353 607.452C647.285 609.608 648.757 605.689 648.757 598.046C648.462 558.264 648.954 518.581 648.561 478.799C648.07 443.722 654.744 452.246 621.077 442.056Z"
      fill="url(#paint1_linear_2_5)"
    />
    <path
      d="M528.615 785.686C528.419 794.308 530.48 798.129 539.412 798.227C539.805 798.227 540.198 798.227 540.59 798.227C552.467 798.031 564.245 797.934 576.123 797.836C583.483 797.836 590.845 797.836 598.207 797.836C604.587 797.836 610.967 797.934 617.347 797.934C623.727 798.031 630.107 798.031 636.488 798.129H637.469C645.812 798.227 648.757 795.876 648.757 787.156C648.561 741.299 648.855 695.442 649.248 649.586C649.248 643.412 647.089 640.179 641.003 639.395C618.722 636.554 596.441 633.516 574.16 630.675C562.773 629.205 551.387 628.127 540.099 626.265C538.235 625.972 536.565 625.874 535.093 625.972C530.48 626.364 528.517 629.107 528.713 636.162C529.302 661.246 528.91 686.231 528.91 711.315H528.811C528.713 736.204 529.106 760.896 528.615 785.686Z"
      fill="url(#paint2_linear_2_5)"
    />
    <path
      d="M671.431 648.703C670.94 672.318 671.137 695.932 671.137 719.645H671.333C671.333 742.279 671.529 764.815 671.235 787.351C671.137 795.091 673.492 798.326 681.639 798.129C709.614 797.737 737.686 797.836 765.66 798.129C772.727 798.227 775.181 795.484 775.181 788.625C775.083 746.295 775.083 703.966 775.181 661.736C775.181 655.367 773.021 651.741 766.052 651.056C736.508 648.116 707.062 644.687 677.517 642.041C675.75 641.943 671.529 646.352 671.431 648.703Z"
      fill="url(#paint3_linear_2_5)"
    />
    <path
      d="M670.547 597.752C670.449 606.669 673.198 609.805 682.719 610.98C710.005 614.214 736.998 618.917 764.089 623.326C771.156 624.502 775.966 624.208 775.868 614.997C775.475 573.55 774.984 532.103 775.377 490.655C775.475 484.286 774.298 480.074 771.058 477.232L720.901 495.064L708.239 459.594C700.092 457.439 691.946 455.283 683.798 453.225C672.216 450.286 671.333 450.874 671.235 462.534C671.136 485.071 671.235 507.607 671.235 530.143H670.547C670.645 552.777 670.94 575.216 670.547 597.752Z"
      fill="url(#paint4_linear_2_5)"
    />
    <path
      d="M494.948 428.828V416.874C489.647 417.952 485.819 418.441 482.188 419.421C455.686 426.868 428.988 434.021 402.583 442.056C368.917 452.246 375.592 443.722 375.199 478.897C374.806 518.581 375.199 558.363 375.002 598.144C375.002 605.787 376.474 609.707 385.406 607.551C392.965 605.689 400.915 605.297 408.67 604.121C433.798 600.495 458.925 596.772 484.053 593.245C490.629 592.363 495.439 590.992 495.439 582.368C494.948 531.221 495.046 479.975 494.948 428.828ZM466.385 565.418C450.189 567.671 434.091 570.022 417.896 572.374C412.89 573.06 407.786 573.355 402.976 574.53C397.284 575.901 396.302 573.452 396.302 568.454C396.498 542.881 396.203 517.307 396.4 491.733C396.694 469.099 392.376 474.586 414.068 468.021C431.049 462.927 448.226 458.223 465.305 453.422C467.661 452.735 470.114 452.442 473.55 451.756C473.55 454.99 473.55 457.243 473.55 459.497C473.55 492.42 473.55 525.342 473.747 558.265C473.747 563.948 470.605 564.83 466.385 565.418Z"
      fill="url(#paint5_linear_2_5)"
    />
    <path
      d="M494.849 221.689C494.849 218.26 494.457 214.83 494.26 210.421C490.825 211.303 488.371 211.499 486.212 212.381C451.955 227.862 417.7 243.54 383.345 258.923C376.67 261.961 375.002 266.566 375.002 273.425C375.198 318.595 375.1 363.766 375.1 408.937C375.1 411.974 375.591 415.012 375.983 418.931C380.008 418.05 382.756 417.657 385.406 416.873C418.093 407.272 450.68 397.277 483.463 388.164C492.494 385.616 495.144 381.305 495.046 372.193C494.653 322.024 494.849 271.857 494.849 221.689ZM466.188 362.198C444.986 368.077 423.981 374.544 402.878 380.717C401.209 381.207 399.344 381.501 396.792 381.991C396.596 379.444 396.203 377.484 396.203 375.524C396.203 346.325 396.203 317.224 396.105 288.025C396.105 283.615 397.185 280.578 401.504 278.716C423.687 268.82 445.772 258.629 467.955 248.635C469.33 248.047 470.9 247.851 473.157 247.361C473.354 250.203 473.55 252.456 473.55 254.612C473.55 287.045 473.452 319.379 473.747 351.812C473.747 357.691 472.077 360.532 466.188 362.198Z"
      fill="url(#paint6_linear_2_5)"
    />
    <path
      d="M495.046 785.686C494.555 760.994 494.85 736.204 494.85 711.512H494.751C494.751 686.428 494.359 661.442 494.948 636.358C495.144 629.303 493.181 626.462 488.568 626.167C487.194 626.069 485.525 626.167 483.562 626.462C472.274 628.225 460.888 629.303 449.501 630.871C427.22 633.81 404.939 636.75 382.659 639.591C376.474 640.375 374.315 643.609 374.413 649.781C374.806 695.638 375.1 741.494 374.904 787.351C374.904 795.974 377.849 798.326 386.192 798.326H387.173C393.554 798.227 399.934 798.227 406.314 798.129C412.694 798.129 419.074 798.032 425.454 798.032C432.816 798.032 440.177 798.032 447.538 798.032C459.416 798.032 471.194 798.227 483.071 798.424C483.463 798.424 483.856 798.424 484.249 798.424C493.181 798.129 495.242 794.308 495.046 785.686ZM401.111 772.164C395.32 772.262 393.259 770.596 393.259 764.52C393.357 732.578 393.161 700.537 392.866 668.594C392.866 664.283 394.338 662.029 398.559 661.539C414.067 659.581 429.674 657.425 445.183 655.465C453.134 654.387 461.084 653.701 468.937 652.427C474.728 651.546 476.985 652.917 476.887 659.384C476.494 676.826 476.789 694.365 476.789 711.805H476.887C476.887 729.05 476.691 746.295 476.985 763.542C477.083 769.812 475.513 772.457 468.642 772.36C446.165 771.772 423.589 771.87 401.111 772.164Z"
      fill="url(#paint7_linear_2_5)"
    />
    <path
      d="M353.015 530.241H352.426C352.426 507.705 352.426 485.168 352.426 462.632C352.426 450.972 351.542 450.286 339.961 453.324C313.949 459.987 288.135 467.238 261.928 473.117C251.425 475.468 248.284 480.172 248.382 490.655C248.774 532.103 248.382 573.55 247.891 614.899C247.793 624.208 252.602 624.404 259.67 623.326C286.761 618.917 313.851 614.214 341.04 610.98C350.561 609.902 353.31 606.669 353.212 597.752C352.721 575.313 353.015 552.777 353.015 530.241ZM329.066 589.424C309.827 591.677 290.785 595.009 271.742 598.144C266.736 598.928 263.4 598.732 263.4 592.265C263.694 563.066 263.989 533.867 263.694 504.668C263.596 497.221 265.853 493.988 273.215 492.321C291.668 488.206 309.925 483.013 328.182 478.407C336.329 476.251 336.918 476.741 337.016 484.973C337.016 500.846 337.016 516.719 337.016 532.593H337.409C337.409 548.466 337.212 564.34 337.507 580.212C337.703 586.386 335.739 588.639 329.066 589.424Z"
      fill="url(#paint8_linear_2_5)"
    />
    <path
      d="M352.525 719.645C352.525 696.031 352.721 672.318 352.23 648.703C352.23 646.352 348.01 641.943 346.047 642.139C316.502 644.785 287.055 648.213 257.511 651.154C250.639 651.839 248.382 655.367 248.48 661.834C248.578 704.163 248.578 746.394 248.48 788.723C248.48 795.582 250.934 798.227 258.002 798.227C285.975 797.934 314.047 797.836 342.022 798.227C350.267 798.326 352.623 795.092 352.427 787.449C352.132 764.815 352.328 742.279 352.328 719.645H352.525ZM337.114 719.84H337.016C337.016 735.714 336.82 751.686 337.114 767.558C337.213 772.947 335.544 775.3 329.752 775.202C310.023 774.907 290.294 775.005 270.565 775.202C265.559 775.202 263.891 773.34 263.891 768.538C263.989 738.751 263.989 708.866 263.891 679.079C263.891 674.572 265.461 672.024 270.271 671.534C291.08 669.476 311.79 667.027 332.697 665.165C334.071 665.067 337.016 668.203 337.016 669.771C337.213 686.428 337.114 703.085 337.114 719.84Z"
      fill="url(#paint9_linear_2_5)"
    />
    <path
      d="M141 787.548C141 792.545 141.491 797.248 148.165 797.149H148.656L219.328 796.561C221.782 796.561 223.843 794.505 223.843 792.055V785.098C224.039 746.1 223.745 707.102 224.137 668.104C224.236 657.816 221.291 655.563 207.549 658.796C189.292 663.01 170.643 664.675 151.895 665.067C143.552 665.263 141 668.105 141 674.865C141.098 712.393 141 749.921 141 787.548ZM153.76 691.033C153.76 686.329 155.527 684.37 161.22 684.272C174.176 683.978 187.035 682.9 199.697 679.961C209.218 677.707 211.181 679.274 211.181 686.428C210.985 713.373 211.083 740.319 210.985 767.265V772.066C210.985 773.83 209.61 775.202 207.844 775.202L159.06 775.593H158.668C154.055 775.593 153.76 772.457 153.76 768.931C153.858 742.964 153.858 716.999 153.76 691.033Z"
      fill="url(#paint10_linear_2_5)"
    />
    <path
      d="M619.899 371.605H665.149V326.435H619.899V371.605Z"
      fill="url(#paint11_linear_2_5)"
    />
    <path
      d="M594.477 258.629H627.948V225.119H594.477V258.629Z"
      fill="url(#paint12_linear_2_5)"
    />
    <path
      d="M756.63 260.785H838V179.458H756.63V260.785Z"
      fill="url(#paint13_linear_2_5)"
    />
    <path
      d="M690.276 313.892H726.398V277.932H690.276V313.892Z"
      fill="url(#paint14_linear_2_5)"
    />
    <path
      d="M694.497 367.098H730.618V331.039H694.497V367.098Z"
      fill="url(#paint15_linear_2_5)"
    />
    <path
      d="M768.015 337.311H822.295V283.125H768.015V337.311Z"
      fill="url(#paint16_linear_2_5)"
    />
    <path
      d="M744.36 394.239H768.801V369.842H744.36V394.239Z"
      fill="url(#paint17_linear_2_5)"
    />
    <path
      d="M790.591 418.932H826.712V382.971H790.591V418.932Z"
      fill="url(#paint18_linear_2_5)"
    />
    <path
      d="M676.536 260.785H712.558V224.727H676.536V260.785Z"
      fill="url(#paint19_linear_2_5)"
    />
    <path
      d="M665.149 424.81H701.27V388.85H665.149V424.81Z"
      fill="url(#paint20_linear_2_5)"
    />
    <path
      d="M731.306 480.662L776.947 459.104L755.353 413.542L709.712 435.099L731.306 480.662Z"
      fill="url(#paint21_linear_2_5)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2_5"
        x1="232.863"
        y1="623.122"
        x2="652.384"
        y2="258.054"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2_5"
        x1="330.242"
        y1="735.025"
        x2="749.763"
        y2="369.957"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2_5"
        x1="429.847"
        y1="849.487"
        x2="849.367"
        y2="484.417"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_2_5"
        x1="492.018"
        y1="920.932"
        x2="911.54"
        y2="555.862"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_2_5"
        x1="401.341"
        y1="816.73"
        x2="820.861"
        y2="451.661"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_2_5"
        x1="268.741"
        y1="664.35"
        x2="688.261"
        y2="299.281"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_2_5"
        x1="171.021"
        y1="552.055"
        x2="590.542"
        y2="186.987"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_2_5"
        x1="367.124"
        y1="777.408"
        x2="786.645"
        y2="412.34"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_2_5"
        x1="222.338"
        y1="611.026"
        x2="641.858"
        y2="245.958"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_2_5"
        x1="312.402"
        y1="714.524"
        x2="731.922"
        y2="349.455"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_2_5"
        x1="265.007"
        y1="660.059"
        x2="684.527"
        y2="294.992"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_2_5"
        x1="273.131"
        y1="669.395"
        x2="692.652"
        y2="304.328"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_2_5"
        x1="206.499"
        y1="592.824"
        x2="626.018"
        y2="227.755"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_2_5"
        x1="275.742"
        y1="672.396"
        x2="695.263"
        y2="307.327"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_2_5"
        x1="275.056"
        y1="671.605"
        x2="694.574"
        y2="306.537"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_2_5"
        x1="303.253"
        y1="704.01"
        x2="722.773"
        y2="338.941"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_2_5"
        x1="319.486"
        y1="722.667"
        x2="739.008"
        y2="357.598"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint17_linear_2_5"
        x1="338.536"
        y1="744.558"
        x2="758.059"
        y2="379.489"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint18_linear_2_5"
        x1="370.314"
        y1="781.075"
        x2="789.835"
        y2="416.007"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint19_linear_2_5"
        x1="242.768"
        y1="634.504"
        x2="662.29"
        y2="269.436"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint20_linear_2_5"
        x1="319.283"
        y1="722.429"
        x2="738.803"
        y2="357.362"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3ADFCB" />
        <stop offset="0.3883" stop-color="#219CFB" />
        <stop offset="0.7067" stop-color="#861AF0" />
        <stop offset="1" stop-color="#B00663" />
      </linearGradient>
      <linearGradient
        id="paint21_linear_2_5"
        x1="365.1"
        y1="775.081"
        x2="784.619"
        y2="410.013"
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
<script>
export default {
  name: "Proxy",
};
<\/script>
`,s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r,s}var X1=j1({render:Oo,staticRenderFns:L1},P1,Q1,R1,Z1,G1,!1,void 0,void 0,void 0),Mo=X1;function No(t){let e=0,n=0,r=0;do e=Math.floor(Math.random()*t+1),n=Math.floor(Math.random()*t),r=Math.floor(Math.random()*t),e==0&&(e=1);while(Dt(e,n,r)[0]%1!=0||Dt(e,n,r)[1]%1!=0||Dt(e,n,r)[0]<0||Dt(e,n,r)[1]<0);return[e,n,r]}function Dt(t,e,n){e>0&&(e=e*-1);let r,o,i=e*e-4*t*n;return i>0?(r=(-e+Math.sqrt(i))/(2*t),o=(-e-Math.sqrt(i))/(2*t)):i==0&&(r=o=-e/(2*t)),[r,o]}var $t;async function Ho(t){let[e,n,r]=No(t);$t=await import("./contract-util-55NNF7KY.js"),await $t.deployContract(e,n,r);let[o,i]=Dt(e,n,r);return console.log(`deployed snapp with equation of form ${e}x\xB2 - ${n}x + ${r}; possible solutions would be x1 = ${o}, x2 = ${i}`),[e,n,r]}async function Do(t){return await $t.submitSolution(t)}async function $o(){return await $t.fetchAccountStates()}async function Io(t,e,n,r){let o=!1;return t=="PROXY/MINA"?o=await $t.swapForMina(e,r,n):o=await $t.swapForToken(e,r,n),o}var z1={name:"App",components:{Loader:Co,Equation:xo,GithubLogo:So,ProxyLabsLogo:wo,Snackbar:ko,Mina:Fo,Proxy:Mo},data(){return{swap:"MINA/PROXY",swapInAmount:0,switchAccount:"",params:[0,0,0],difficulty:40,isDeployed:!1,deploying:!1,showHint:!1,beingSubmited:!1,proposedSolution:0,atPage:0,showSnackbar:!1,snappState:{},snack:{type:"failure",message:"Request failed"}}},methods:{changeSwap(){this.swap=="MINA/PROXY"?this.swap="PROXY/MINA":this.swap="MINA/PROXY"},async executeSwap(){let t=this.selectedAccount==this.snappState.account1.address?0:1,e=await Io(this.swap,this.swapInAmount*1e6,t,this.proposedSolution);await this.updateSnappState(),console.log(e)},async updateSnappState(){let t=await $o();console.log(t),this.snappState={account1:t.account1,account2:t.account2,snapp:t.snapp},console.log(this.snappState)},setSnackbar(t,e){this.showSnackbar=!1,this.snack.type=t,this.snack.message=e,this.showSnackbar=!0,setTimeout(()=>{this.showSnackbar=!1},3500)},async submitSolution(){this.beingSubmited=!0;let t=await Do(this.proposedSolution);t?this.setSnackbar("success","Congratz! You found one valid solution to the equation. Please proceed"):this.setSnackbar("failure","Failure. Looks like the provided solution doesn't work!"),this.beingSubmited=!1,t&&(this.next(),await this.updateSnappState(),this.switchAccount=this.snappState.account1.address)},getEquation(){let t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`;return this.params[1]!=0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 = 0`),this.params[1]!=0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 - ${this.params[1]}x = 0`),t},next(){this.atPage++},async deploy(){this.deploying=!0,this.params=await Ho(this.difficulty),this.setSnackbar("info","Contract deployed!"),this.beingSubmited=!1,this.isDeployed=!0,this.deploying=!1}},computed:{expectedReturn(){return this.swapInAmount},selectedAccount(){return this.switchAccount==this.snappState.account1.address?0:1}}},Uo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"header"},[n("ProxyLabsLogo"),t._v(" "),n("GithubLogo")],1),t._v(" "),n("h1",{staticClass:"title"},[t._v("Mina Secret Exchange")]),t._v(" "),n("h3",{staticClass:"sub"},[t._v(`
    Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) for the Mina
    Snapp Bootcamp 2021.
  `)]),t._v(" "),n("p",{staticClass:"sub-desc"},[t._v(`
    The secret exchange allows users to buy imaginary tokens (tokens aren't
    implemented, only simulated) after successfully providing the solution to
    a series of math problems while keeping the solution itself secure and
    private, not exposing it to the network. An exchange to which only
    math-nerds have access!
  `)]),t._v(" "),n("div",{staticClass:"content-wrapper"},[t.atPage==0?n("div",[n("Loader",{style:t.deploying?"visibility: visible;":"visibility: hidden;"}),t._v(" "),n("h2",{staticStyle:{border:"2px red dotted","margin-left":"40%","margin-right":"40%"},style:t.isDeployed?"visibility: visible;":"visibility: hidden;"},[n("h5",{staticStyle:{margin:"5px"}},[t._v("There you go - here is your equation:")]),t._v(`
        `+t._s(t.getEquation())+`
      `)]),t._v(" "),n("div",{style:t.isDeployed?"visibility: hidden;":"visibility: visible;"},[n("h3",[t._v("Possible difficulty of equation")]),t._v(" "),n("div",{staticClass:"slidecontainer"},[n("span",[t._v("EASY")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.difficulty,expression:"difficulty"}],staticClass:"slider",attrs:{type:"range",min:"1",max:"80",value:"40"},domProps:{value:t.difficulty},on:{__r:function(r){t.difficulty=r.target.value}}}),t._v(" "),n("span",[t._v("HARD")])])]),t._v(" "),t.isDeployed?t._e():n("button",{staticClass:"deploy-btn",on:{click:function(r){return t.deploy()}}},[n("span",[t._v("Deploy the contract")])]),t._v(" "),t.isDeployed?n("button",{staticClass:"continue-btn",on:{click:function(r){return t.next()}}},[n("span",[t._v("Continue")])]):t._e()],1):t._e(),t._v(" "),t.atPage==1?n("div",[n("h2",{staticStyle:{border:"2px red dotted","margin-left":"40%","margin-right":"40%"}},[n("h5",{staticStyle:{margin:"5px"}},[t._v("Here is your equation:")]),t._v(`
        `+t._s(t.getEquation())+`
      `)]),t._v(" "),n("h5",{staticStyle:{"margin-top":"0px"}},[t._v(`
        Please provide one possible solution to this equation to proceed
      `)]),t._v(" "),n("Loader",{style:t.beingSubmited?"visibility: visible;":"visibility: hidden;"}),t._v(" "),n("div",{staticClass:"content",staticStyle:{display:"flex","margin-left":"30%","margin-right":"30%"}},[n("div",{staticClass:"left",staticStyle:{width:"50%"}},[n("div",{staticClass:"hint",style:t.showHint?"visibility: visible;":"visibility: hidden;"},[n("Equation")],1),t._v(" "),t.showHint?t._e():n("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"12px"},on:{click:function(r){t.showHint=!0}}},[n("span",[t._v("Show Hint")])]),t._v(" "),t.showHint?n("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"20px"},on:{click:function(r){t.showHint=!1}}},[n("span",[t._v("Hide Hint")])]):t._e()]),t._v(" "),n("div",{staticClass:"right",staticStyle:{width:"50%"}},[n("h3",[t._v("Possible solution")]),t._v(" "),n("span",{staticStyle:{"font-size":"3rem"}},[t._v("x = ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.proposedSolution,expression:"proposedSolution"}],staticClass:"submission",attrs:{type:"text"},domProps:{value:t.proposedSolution},on:{input:function(r){r.target.composing||(t.proposedSolution=r.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"submit-btn",staticStyle:{"margin-top":"10px"},on:{click:function(r){return t.submitSolution()}}},[n("span",[t._v("Submit")])])]),t._v(" "),n("br")])],1):t._e(),t._v(" "),t.atPage==2?n("div",[t._m(0),t._v(" "),n("div",{staticClass:"content",staticStyle:{display:"flex","margin-left":"10%","margin-right":"10%"}},[n("div",{staticClass:"left",staticStyle:{width:"50%"}},[n("span",[t._v("You are trading as ")]),t._v(`
          `+t._s(t.switchAccount)+`
          `),n("select",{directives:[{name:"model",rawName:"v-model",value:t.switchAccount,expression:"switchAccount"}],on:{change:function(r){var o=Array.prototype.filter.call(r.target.options,function(i){return i.selected}).map(function(i){var a="_value"in i?i._value:i.value;return a});t.switchAccount=r.target.multiple?o:o[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v(`
              Please the account you want to trade with
            `)]),t._v(" "),n("option",{domProps:{selected:t.switchAccount==t.snappState.account1.address,value:t.snappState.account1.address}},[t._v(`
              `+t._s(t.snappState.account1.address)+`
            `)]),t._v(" "),n("option",{domProps:{selected:t.switchAccount==t.snappState.account2.address,value:t.snappState.account2.address}},[t._v(`
              `+t._s(t.snappState.account2.address)+`
            `)])]),t._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("h4",[t._v("Equation: "+t._s(t.getEquation()))]),t._v(" "),n("h4",[t._v("The solution to the equation: x = "+t._s(t.proposedSolution))]),t._v(" "),n("h4",[t._v(`
              Balance $MINA:
              `+t._s(t.selectedAccount==0?t.snappState.account1.balance.value/1e6:t.snappState.account2.balance.value/1e6)+`
            `)]),t._v(" "),n("h4",[t._v(`
              Balance $TOKEN:
              `+t._s(t.selectedAccount==0?t.snappState.account1.balanceToken.value/1e6:t.snappState.account2.balanceToken.value/1e6)+`
            `)])])]),t._v(" "),n("div",{staticClass:"right",staticStyle:{width:"50%"}},[n("div",{staticClass:"swapper"},[n("h2",[t._v("Swap")]),t._v(" "),n("h3",[t._v(t._s(t.swap)+" - 1 ~ 1")]),t._v(" "),n("div",{staticClass:"swapBoxes"},[n("div",{staticClass:"give"},[n("div",{staticClass:"logo"},[t.swap=="MINA/PROXY"?n("Mina"):n("Proxy")],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swapInAmount,expression:"swapInAmount"}],staticClass:"swap-input",attrs:{type:"text"},domProps:{value:t.swapInAmount},on:{input:function(r){r.target.composing||(t.swapInAmount=r.target.value)}}})]),t._v(" "),n("div",{staticClass:"arrow",on:{click:function(r){return t.changeSwap()}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M16.728 20.644l1.24 1.588c-1.721 1.114-3.766 1.768-5.969 1.768-4.077 0-7.626-2.225-9.524-5.52l-1.693.982 1.09-4.1 4.101 1.089-1.747 1.014c1.553 2.699 4.442 4.535 7.773 4.535 1.736 0 3.353-.502 4.729-1.356zm-13.722-7.52l-.007-.124c0-4.625 3.51-8.433 8.003-8.932l-.002 1.932 3.004-2.996-2.994-3.004-.004 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.986-.278zm18.577 5.243c.896-1.588 1.416-3.414 1.416-5.367 0-4.577-2.797-8.499-6.773-10.156l-.623 1.914c3.173 1.393 5.396 4.561 5.396 8.242 0 1.603-.441 3.097-1.18 4.402l-1.762-.964 1.193 4.072 4.071-1.192-1.738-.951z"}})])]),t._v(" "),n("div",{staticClass:"for"},[n("div",{staticClass:"logo"},[t.swap=="MINA/PROXY"?n("Proxy"):n("Mina")],1),t._v(" "),n("span",{staticStyle:{"font-size":"3rem"}},[t._v("~"+t._s(t.expectedReturn))])])]),t._v(" "),n("button",{staticClass:"swap-btn",staticStyle:{"margin-top":"10px"},on:{click:function(r){return t.executeSwap()}}},[n("span",[t._v("Swap")])])])]),t._v(" "),n("br")])]):t._e()]),t._v(" "),t.showSnackbar?n("Snackbar",{attrs:{snack:t.snack}}):t._e()],1)},q1=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticStyle:{border:"2px red dotted","margin-left":"30%","margin-right":"30%"}},[n("h5",{staticStyle:{margin:"5px"}},[t._v(`
          Congratz, you have gained access to the exchange!
        `)])])}];Uo._withStripped=!0;var Y1=function(t){!t||t("data-v-6eaee907_0",{source:`
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Inconsolata", sans-serif;
}
.swap-input {
  border: none;
  font-size: 3rem;
  width: 90%;
  float: right;
  text-align: right;
}
.swapper {
  height: 340px;
  width: 400px;
  margin-left: 100px;
  border-radius: 15px;
  border: solid 2px black;
  background-color: rgb(223, 223, 223);
}
.swapBoxes {
  height: 140px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
  position: relative;
}
.give .logo,
.for .logo {
  position: absolute;
  left: -30px;
  top: 2px;
}
.give,
.for {
  margin-left: 5%;
  margin-right: 5%;
  height: 60px;
  border: solid 2px black;
  border-radius: 15px;
  background-color: white;
  position: relative;
  text-align: right;
  padding-right: 15px;
}
.give {
  margin-bottom: 10px;
}
.arrow {
  border: 2px solid black;
  width: 30px;
  height: 30px;
  position: static;
  z-index: 2;
  margin-left: calc(50% - 15px);
  position: absolute;
  top: calc(70px - 17px);
  border-radius: 5px;
  left: 0;
  padding-top: 2px;
  padding-bottom: 0px;
  background-color: rgb(255, 255, 255);
}
.arrow:hover {
  scale: 1.03;
  cursor: pointer;
}
.arrow svg {
  color: white;
  margin: 0;
  padding: 0;
}
.header {
  margin-left: 10%;
  margin-right: 10%;
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
.swap-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 255, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
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
.swap-btn:hover,
.deploy-btn:hover,
.submit-btn:hover,
.hint-btn:hover,
.continue-btn:hover {
  border: solid black 1px;
}
.swap-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
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
.slider {
  -webkit-appearance: none;
  width: 300px;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #02d6cc;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #02d6cc;
  cursor: pointer;
}
`,map:{version:3,sources:["src/App.vue"],names:[],mappings:";AA+XA,qHAAA;AAEA;EACA,sCAAA;AACA;AAEA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,iBAAA;AACA;AAEA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCAAA;AACA;AACA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AACA;AAEA;;EAEA,kBAAA;EACA,WAAA;EACA,QAAA;AACA;AAEA;;EAEA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,6BAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,OAAA;EACA,gBAAA;EACA,mBAAA;EACA,oCAAA;AACA;AAEA;EACA,WAAA;EACA,eAAA;AACA;AACA;EACA,YAAA;EACA,SAAA;EACA,UAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;;EAEA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AACA;;;;;EAKA,uBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;;EAEA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA;;yCAEA;AACA;AAEA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AACA;AAEA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,sCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AACA;AAEA;EACA,wBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,wBAAA;EACA,wBAAA;AACA;AAEA;EACA,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AACA",file:"App.vue",sourcesContent:[`<template>
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
        <div
          :style="!isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"
        >
          <h3>Possible difficulty of equation</h3>
          <div class="slidecontainer">
            <span>EASY</span>
            <input
              v-model="difficulty"
              type="range"
              min="1"
              max="80"
              value="40"
              class="slider"
            />
            <span>HARD</span>
          </div>
        </div>

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
              style="margin-top: 20px"
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
              style="margin-top: 10px"
              @click="submitSolution()"
            >
              <span>Submit</span>
            </button>
          </div>
          <br />
        </div>
      </div>
      <div v-if="atPage == 2">
        <h2 style="border: 2px red dotted; margin-left: 30%; margin-right: 30%">
          <h5 style="margin: 5px">
            Congratz, you have gained access to the exchange!
          </h5>
        </h2>

        <div
          class="content"
          style="display: flex; margin-left: 10%; margin-right: 10%"
        >
          <div class="left" style="width: 50%">
            <span>You are trading as </span>
            {{ switchAccount }}
            <select v-model="switchAccount">
              <option disabled value="">
                Please the account you want to trade with
              </option>
              <option
                :selected="switchAccount == snappState.account1.address"
                :value="snappState.account1.address"
              >
                {{ snappState.account1.address }}
              </option>
              <option
                :selected="switchAccount == snappState.account2.address"
                :value="snappState.account2.address"
              >
                {{ snappState.account2.address }}
              </option>
            </select>
            <div style="text-align: left">
              <h4>Equation: {{ getEquation() }}</h4>
              <h4>The solution to the equation: x = {{ proposedSolution }}</h4>

              <h4>
                Balance $MINA:
                {{
                  selectedAccount == 0
                    ? snappState.account1.balance.value / 1000000
                    : snappState.account2.balance.value / 1000000
                }}
              </h4>
              <h4>
                Balance $TOKEN:
                {{
                  selectedAccount == 0
                    ? snappState.account1.balanceToken.value / 1000000
                    : snappState.account2.balanceToken.value / 1000000
                }}
              </h4>
            </div>
          </div>
          <div class="right" style="width: 50%">
            <!--             <h4>
              You are interacting with Contract
              <h5 style="font-size: 1rem; margin-top: 2px; font-weight: 400">
                {{ snappState.snapp.address }}
              </h5>
            </h4>  -->
            <div class="swapper">
              <h2>Swap</h2>
              <h3>{{ swap }} - 1 ~ 1</h3>
              <div class="swapBoxes">
                <div class="give">
                  <div class="logo">
                    <Mina v-if="swap == 'MINA/PROXY'" />
                    <Proxy v-else />
                  </div>
                  <input
                    class="swap-input"
                    v-model="swapInAmount"
                    type="text"
                  />
                </div>
                <div @click="changeSwap()" class="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.728 20.644l1.24 1.588c-1.721 1.114-3.766 1.768-5.969 1.768-4.077 0-7.626-2.225-9.524-5.52l-1.693.982 1.09-4.1 4.101 1.089-1.747 1.014c1.553 2.699 4.442 4.535 7.773 4.535 1.736 0 3.353-.502 4.729-1.356zm-13.722-7.52l-.007-.124c0-4.625 3.51-8.433 8.003-8.932l-.002 1.932 3.004-2.996-2.994-3.004-.004 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.986-.278zm18.577 5.243c.896-1.588 1.416-3.414 1.416-5.367 0-4.577-2.797-8.499-6.773-10.156l-.623 1.914c3.173 1.393 5.396 4.561 5.396 8.242 0 1.603-.441 3.097-1.18 4.402l-1.762-.964 1.193 4.072 4.071-1.192-1.738-.951z"
                    />
                  </svg>
                </div>
                <div class="for">
                  <div class="logo">
                    <Proxy v-if="swap == 'MINA/PROXY'" />
                    <Mina v-else />
                  </div>
                  <span style="font-size: 3rem">~{{ expectedReturn }}</span>
                </div>
              </div>
              <button
                class="swap-btn"
                style="margin-top: 10px"
                @click="executeSwap()"
              >
                <span>Swap</span>
              </button>
            </div>
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
import Mina from "./components/Mina.vue";
import Proxy from "./components/Proxy.vue";

import {
  init,
  submitSolution,
  getState,
  swapToken,
} from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    Loader,
    Equation,
    GithubLogo,
    ProxyLabsLogo,
    Snackbar,
    Mina,
    Proxy,
  },
  data() {
    return {
      swap: "MINA/PROXY",
      swapInAmount: 0,
      switchAccount: "",
      params: [0, 0, 0],
      difficulty: 40,
      isDeployed: false,
      deploying: false,
      showHint: false,
      beingSubmited: false,
      proposedSolution: 0,
      atPage: 0,
      showSnackbar: false,
      snappState: {},
      snack: {
        type: "failure",
        message: "Request failed",
      },
    };
  },
  methods: {
    changeSwap() {
      if (this.swap == "MINA/PROXY") {
        this.swap = "PROXY/MINA";
      } else {
        this.swap = "MINA/PROXY";
      }
    },
    async executeSwap() {
      let acc =
        this.selectedAccount == this.snappState.account1.address ? 0 : 1;
      let res = await swapToken(
        this.swap,
        this.swapInAmount * 1000000,
        acc,
        this.proposedSolution
      );
      await this.updateSnappState();
      console.log(res);
    },
    async updateSnappState() {
      let state = await getState();

      console.log(state);
      this.snappState = {
        account1: state.account1,
        account2: state.account2,
        snapp: state.snapp,
      };
      console.log(this.snappState);
    },
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

      if (res) {
        this.next();
        await this.updateSnappState();
        this.switchAccount = this.snappState.account1.address;
      }
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
      this.params = await init(this.difficulty);

      this.setSnackbar("info", "Contract deployed!");

      this.beingSubmited = false;
      this.isDeployed = true;
      this.deploying = false;
    },
  },
  computed: {
    expectedReturn() {
      return this.swapInAmount;
    },
    selectedAccount() {
      return this.switchAccount == this.snappState.account1.address ? 0 : 1;
    },
  },
};
<\/script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Inconsolata", sans-serif;
}

.swap-input {
  border: none;
  font-size: 3rem;
  width: 90%;
  float: right;
  text-align: right;
}

.swapper {
  height: 340px;
  width: 400px;
  margin-left: 100px;
  border-radius: 15px;
  border: solid 2px black;
  background-color: rgb(223, 223, 223);
}
.swapBoxes {
  height: 140px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
  position: relative;
}

.give .logo,
.for .logo {
  position: absolute;
  left: -30px;
  top: 2px;
}

.give,
.for {
  margin-left: 5%;
  margin-right: 5%;
  height: 60px;
  border: solid 2px black;
  border-radius: 15px;
  background-color: white;
  position: relative;
  text-align: right;
  padding-right: 15px;
}

.give {
  margin-bottom: 10px;
}

.arrow {
  border: 2px solid black;
  width: 30px;
  height: 30px;
  position: static;
  z-index: 2;
  margin-left: calc(50% - 15px);
  position: absolute;
  top: calc(70px - 17px);
  border-radius: 5px;
  left: 0;
  padding-top: 2px;
  padding-bottom: 0px;
  background-color: rgb(255, 255, 255);
}

.arrow:hover {
  scale: 1.03;
  cursor: pointer;
}
.arrow svg {
  color: white;
  margin: 0;
  padding: 0;
}

.header {
  margin-left: 10%;
  margin-right: 10%;
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

.swap-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 255, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
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
.swap-btn:hover,
.deploy-btn:hover,
.submit-btn:hover,
.hint-btn:hover,
.continue-btn:hover {
  border: solid black 1px;
}

.swap-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
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

.slider {
  -webkit-appearance: none;
  width: 300px;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #02d6cc;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #02d6cc;
  cursor: pointer;
}
</style>
`]},media:void 0})},J1=void 0,W1=void 0,K1=!1;function t2(t,e,n,r,o,i,a,p,l,u){let s=(typeof n=="function"?n.options:n)||{};s.__file=`<template>
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
        <div
          :style="!isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"
        >
          <h3>Possible difficulty of equation</h3>
          <div class="slidecontainer">
            <span>EASY</span>
            <input
              v-model="difficulty"
              type="range"
              min="1"
              max="80"
              value="40"
              class="slider"
            />
            <span>HARD</span>
          </div>
        </div>

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
              style="margin-top: 20px"
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
              style="margin-top: 10px"
              @click="submitSolution()"
            >
              <span>Submit</span>
            </button>
          </div>
          <br />
        </div>
      </div>
      <div v-if="atPage == 2">
        <h2 style="border: 2px red dotted; margin-left: 30%; margin-right: 30%">
          <h5 style="margin: 5px">
            Congratz, you have gained access to the exchange!
          </h5>
        </h2>

        <div
          class="content"
          style="display: flex; margin-left: 10%; margin-right: 10%"
        >
          <div class="left" style="width: 50%">
            <span>You are trading as </span>
            {{ switchAccount }}
            <select v-model="switchAccount">
              <option disabled value="">
                Please the account you want to trade with
              </option>
              <option
                :selected="switchAccount == snappState.account1.address"
                :value="snappState.account1.address"
              >
                {{ snappState.account1.address }}
              </option>
              <option
                :selected="switchAccount == snappState.account2.address"
                :value="snappState.account2.address"
              >
                {{ snappState.account2.address }}
              </option>
            </select>
            <div style="text-align: left">
              <h4>Equation: {{ getEquation() }}</h4>
              <h4>The solution to the equation: x = {{ proposedSolution }}</h4>

              <h4>
                Balance $MINA:
                {{
                  selectedAccount == 0
                    ? snappState.account1.balance.value / 1000000
                    : snappState.account2.balance.value / 1000000
                }}
              </h4>
              <h4>
                Balance $TOKEN:
                {{
                  selectedAccount == 0
                    ? snappState.account1.balanceToken.value / 1000000
                    : snappState.account2.balanceToken.value / 1000000
                }}
              </h4>
            </div>
          </div>
          <div class="right" style="width: 50%">
            <!--             <h4>
              You are interacting with Contract
              <h5 style="font-size: 1rem; margin-top: 2px; font-weight: 400">
                {{ snappState.snapp.address }}
              </h5>
            </h4>  -->
            <div class="swapper">
              <h2>Swap</h2>
              <h3>{{ swap }} - 1 ~ 1</h3>
              <div class="swapBoxes">
                <div class="give">
                  <div class="logo">
                    <Mina v-if="swap == 'MINA/PROXY'" />
                    <Proxy v-else />
                  </div>
                  <input
                    class="swap-input"
                    v-model="swapInAmount"
                    type="text"
                  />
                </div>
                <div @click="changeSwap()" class="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.728 20.644l1.24 1.588c-1.721 1.114-3.766 1.768-5.969 1.768-4.077 0-7.626-2.225-9.524-5.52l-1.693.982 1.09-4.1 4.101 1.089-1.747 1.014c1.553 2.699 4.442 4.535 7.773 4.535 1.736 0 3.353-.502 4.729-1.356zm-13.722-7.52l-.007-.124c0-4.625 3.51-8.433 8.003-8.932l-.002 1.932 3.004-2.996-2.994-3.004-.004 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.986-.278zm18.577 5.243c.896-1.588 1.416-3.414 1.416-5.367 0-4.577-2.797-8.499-6.773-10.156l-.623 1.914c3.173 1.393 5.396 4.561 5.396 8.242 0 1.603-.441 3.097-1.18 4.402l-1.762-.964 1.193 4.072 4.071-1.192-1.738-.951z"
                    />
                  </svg>
                </div>
                <div class="for">
                  <div class="logo">
                    <Proxy v-if="swap == 'MINA/PROXY'" />
                    <Mina v-else />
                  </div>
                  <span style="font-size: 3rem">~{{ expectedReturn }}</span>
                </div>
              </div>
              <button
                class="swap-btn"
                style="margin-top: 10px"
                @click="executeSwap()"
              >
                <span>Swap</span>
              </button>
            </div>
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
import Mina from "./components/Mina.vue";
import Proxy from "./components/Proxy.vue";

import {
  init,
  submitSolution,
  getState,
  swapToken,
} from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    Loader,
    Equation,
    GithubLogo,
    ProxyLabsLogo,
    Snackbar,
    Mina,
    Proxy,
  },
  data() {
    return {
      swap: "MINA/PROXY",
      swapInAmount: 0,
      switchAccount: "",
      params: [0, 0, 0],
      difficulty: 40,
      isDeployed: false,
      deploying: false,
      showHint: false,
      beingSubmited: false,
      proposedSolution: 0,
      atPage: 0,
      showSnackbar: false,
      snappState: {},
      snack: {
        type: "failure",
        message: "Request failed",
      },
    };
  },
  methods: {
    changeSwap() {
      if (this.swap == "MINA/PROXY") {
        this.swap = "PROXY/MINA";
      } else {
        this.swap = "MINA/PROXY";
      }
    },
    async executeSwap() {
      let acc =
        this.selectedAccount == this.snappState.account1.address ? 0 : 1;
      let res = await swapToken(
        this.swap,
        this.swapInAmount * 1000000,
        acc,
        this.proposedSolution
      );
      await this.updateSnappState();
      console.log(res);
    },
    async updateSnappState() {
      let state = await getState();

      console.log(state);
      this.snappState = {
        account1: state.account1,
        account2: state.account2,
        snapp: state.snapp,
      };
      console.log(this.snappState);
    },
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

      if (res) {
        this.next();
        await this.updateSnappState();
        this.switchAccount = this.snappState.account1.address;
      }
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
      this.params = await init(this.difficulty);

      this.setSnackbar("info", "Contract deployed!");

      this.beingSubmited = false;
      this.isDeployed = true;
      this.deploying = false;
    },
  },
  computed: {
    expectedReturn() {
      return this.swapInAmount;
    },
    selectedAccount() {
      return this.switchAccount == this.snappState.account1.address ? 0 : 1;
    },
  },
};
<\/script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Inconsolata", sans-serif;
}

.swap-input {
  border: none;
  font-size: 3rem;
  width: 90%;
  float: right;
  text-align: right;
}

.swapper {
  height: 340px;
  width: 400px;
  margin-left: 100px;
  border-radius: 15px;
  border: solid 2px black;
  background-color: rgb(223, 223, 223);
}
.swapBoxes {
  height: 140px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
  position: relative;
}

.give .logo,
.for .logo {
  position: absolute;
  left: -30px;
  top: 2px;
}

.give,
.for {
  margin-left: 5%;
  margin-right: 5%;
  height: 60px;
  border: solid 2px black;
  border-radius: 15px;
  background-color: white;
  position: relative;
  text-align: right;
  padding-right: 15px;
}

.give {
  margin-bottom: 10px;
}

.arrow {
  border: 2px solid black;
  width: 30px;
  height: 30px;
  position: static;
  z-index: 2;
  margin-left: calc(50% - 15px);
  position: absolute;
  top: calc(70px - 17px);
  border-radius: 5px;
  left: 0;
  padding-top: 2px;
  padding-bottom: 0px;
  background-color: rgb(255, 255, 255);
}

.arrow:hover {
  scale: 1.03;
  cursor: pointer;
}
.arrow svg {
  color: white;
  margin: 0;
  padding: 0;
}

.header {
  margin-left: 10%;
  margin-right: 10%;
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

.swap-btn {
  width: auto;
  height: auto;
  padding: 15px;
  cursor: pointer;
  background-color: rgb(176, 255, 255);
  border-radius: 5px;
  box-shadow: 4px 4px rgb(121, 121, 121);
  margin-top: 20px;
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
.swap-btn:hover,
.deploy-btn:hover,
.submit-btn:hover,
.hint-btn:hover,
.continue-btn:hover {
  border: solid black 1px;
}

.swap-btn span {
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
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

.slider {
  -webkit-appearance: none;
  width: 300px;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #02d6cc;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #02d6cc;
  cursor: pointer;
}
</style>
`,s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r;{let h;if(e&&(h=a?function(_){e.call(this,u(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,p(_))}),h!==void 0)if(s.functional){let _=s.render;s.render=function(w,b){return h.call(b),_(w,b)}}else{let _=s.beforeCreate;s.beforeCreate=_?[].concat(_,h):[h]}}return s}function Me(){let t=Me.styles||(Me.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=e?o.media||"default":r,a=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let p=o.source,l=a.ids.length;if(a.ids.push(r),e&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){let u=document.head||document.getElementsByTagName("head")[0],s=a.element=document.createElement("style");s.type="text/css",o.media&&s.setAttribute("media",o.media),e&&(s.setAttribute("data-group",i),s.setAttribute("data-next-index","0")),u.appendChild(s)}if(e&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(p),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let u=document.createTextNode(p),s=a.element.childNodes;s[l]&&a.element.removeChild(s[l]),s.length?a.element.insertBefore(u,s[l]):a.element.appendChild(u)}}}}var n2=t2({render:Uo,staticRenderFns:q1},Y1,z1,J1,K1,W1,!1,Me,void 0,void 0),Vo=n2;Be.config.productionTip=!1;new Be({render:t=>t(Vo)}).$mount("#app");
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
