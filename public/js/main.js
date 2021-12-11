var z=Object.freeze({});function C(t){return t==null}function u(t){return t!=null}function S(t){return t===!0}function To(t){return t===!1}function Vt(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function F(t){return t!==null&&typeof t=="object"}var wn=Object.prototype.toString;function $(t){return wn.call(t)==="[object Object]"}function Be(t){return wn.call(t)==="[object RegExp]"}function Oe(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function Hn(t){return u(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function xo(t){return t==null?"":Array.isArray(t)||$(t)&&t.toString===wn?JSON.stringify(t,null,2):String(t)}function Lt(t){var e=parseFloat(t);return isNaN(e)?t:e}function j(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(i){return n[i.toLowerCase()]}:function(i){return n[i]}}var Ya=j("slot,component",!0),Qo=j("key,ref,slot,slot-scope,is");function K(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var bo=Object.prototype.hasOwnProperty;function k(t,e){return bo.call(t,e)}function ut(t){var e=Object.create(null);return function(r){var o=e[r];return o||(e[r]=t(r))}}var Eo=/-(\w)/g,dt=ut(function(t){return t.replace(Eo,function(e,n){return n?n.toUpperCase():""})}),wo=ut(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Ho=/\B([A-Z])/g,Ut=ut(function(t){return t.replace(Ho,"-$1").toLowerCase()});function Mo(t,e){function n(r){var o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,r):t.call(e)}return n._length=t.length,n}function So(t,e){return t.bind(e)}var Bo=Function.prototype.bind?So:Mo;function Mn(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function M(t,e){for(var n in e)t[n]=e[n];return t}function Ne(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function V(t,e,n){}var Kt=function(t,e,n){return!1},Fe=function(t){return t};function vt(t,e){if(t===e)return!0;var n=F(t),r=F(e);if(n&&r)try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(l,v){return vt(l,e[v])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(!o&&!i){var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(l){return vt(t[l],e[l])})}else return!1}catch{return!1}else return!n&&!r?String(t)===String(e):!1}function ke(t,e){for(var n=0;n<t.length;n++)if(vt(t[n],e))return n;return-1}function tn(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var De="data-server-rendered",nn=["component","directive","filter"],Ve=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],D={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Kt,isReservedAttr:Kt,isUnknownElement:Kt,getTagNamespace:V,parsePlatformTagName:Fe,mustUseProp:Kt,async:!0,_lifecycleHooks:Ve},Oo=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function No(t){var e=(t+"").charCodeAt(0);return e===36||e===95}function Et(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Fo=new RegExp("[^"+Oo.source+".$_\\d]");function ko(t){if(!Fo.test(t)){var e=t.split(".");return function(n){for(var r=0;r<e.length;r++){if(!n)return;n=n[e[r]]}return n}}}var Do="__proto__"in{},X=typeof window!="undefined",Sn=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,Le=Sn&&WXEnvironment.platform.toLowerCase(),N=X&&window.navigator.userAgent.toLowerCase(),wt=N&&/msie|trident/.test(N),Ht=N&&N.indexOf("msie 9.0")>0,Bn=N&&N.indexOf("edge/")>0,Ka=N&&N.indexOf("android")>0||Le==="android",Vo=N&&/iphone|ipad|ipod|ios/.test(N)||Le==="ios",ts=N&&/chrome\/\d+/.test(N)&&!Bn,ns=N&&/phantomjs/.test(N),Ue=N&&N.match(/firefox\/(\d+)/),On={}.watch,$e=!1;if(X)try{Nn={},Object.defineProperty(Nn,"passive",{get:function(){$e=!0}}),window.addEventListener("test-passive",null,Nn)}catch{}var Nn,en,rn=function(){return en===void 0&&(!X&&!Sn&&typeof global!="undefined"?en=global.process&&global.process.env.VUE_ENV==="server":en=!1),en},on=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Mt(t){return typeof t=="function"&&/native code/.test(t.toString())}var an=typeof Symbol!="undefined"&&Mt(Symbol)&&typeof Reflect!="undefined"&&Mt(Reflect.ownKeys),$t;typeof Set!="undefined"&&Mt(Set)?$t=Set:$t=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(n){return this.set[n]===!0},t.prototype.add=function(n){this.set[n]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var Xe=V;var Lo=0,I=function(){this.id=Lo++,this.subs=[]};I.prototype.addSub=function(e){this.subs.push(e)};I.prototype.removeSub=function(e){K(this.subs,e)};I.prototype.depend=function(){I.target&&I.target.addDep(this)};I.prototype.notify=function(){for(var e=this.subs.slice(),n=0,r=e.length;n<r;n++)e[n].update()};I.target=null;var sn=[];function Xt(t){sn.push(t),I.target=t}function It(){sn.pop(),I.target=sn[sn.length-1]}var L=function(e,n,r,o,i,a,s,l){this.tag=e,this.data=n,this.children=r,this.text=o,this.elm=i,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=n&&n.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ie={child:{configurable:!0}};Ie.child.get=function(){return this.componentInstance};Object.defineProperties(L.prototype,Ie);var mt=function(t){t===void 0&&(t="");var e=new L;return e.text=t,e.isComment=!0,e};function St(t){return new L(void 0,void 0,void 0,String(t))}function Fn(t){var e=new L(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Ze=Array.prototype,ln=Object.create(Ze),Uo=["push","pop","shift","unshift","splice","sort","reverse"];Uo.forEach(function(t){var e=Ze[t];Et(ln,t,function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];var i=e.apply(this,r),a=this.__ob__,s;switch(t){case"push":case"unshift":s=r;break;case"splice":s=r.slice(2);break}return s&&a.observeArray(s),a.dep.notify(),i})});var $o=Object.getOwnPropertyNames(ln),kn=!0;function it(t){kn=t}var pn=function(e){this.value=e,this.dep=new I,this.vmCount=0,Et(e,"__ob__",this),Array.isArray(e)?(Do?Xo(e,ln):Io(e,ln,$o),this.observeArray(e)):this.walk(e)};pn.prototype.walk=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)ht(e,n[r])};pn.prototype.observeArray=function(e){for(var n=0,r=e.length;n<r;n++)_t(e[n])};function Xo(t,e){t.__proto__=e}function Io(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];Et(t,i,e[i])}}function _t(t,e){if(!(!F(t)||t instanceof L)){var n;return k(t,"__ob__")&&t.__ob__ instanceof pn?n=t.__ob__:kn&&!rn()&&(Array.isArray(t)||$(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new pn(t)),e&&n&&n.vmCount++,n}}function ht(t,e,n,r,o){var i=new I,a=Object.getOwnPropertyDescriptor(t,e);if(!(a&&a.configurable===!1)){var s=a&&a.get,l=a&&a.set;(!s||l)&&arguments.length===2&&(n=t[e]);var v=!o&&_t(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var m=s?s.call(t):n;return I.target&&(i.depend(),v&&(v.dep.depend(),Array.isArray(m)&&Pe(m))),m},set:function(m){var _=s?s.call(t):n;m===_||m!==m&&_!==_||s&&!l||(l?l.call(t,m):n=m,v=!o&&_t(m),i.notify())}})}}function Dn(t,e,n){if(Array.isArray(t)&&Oe(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(ht(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ge(t,e){if(Array.isArray(t)&&Oe(e)){t.splice(e,1);return}var n=t.__ob__;t._isVue||n&&n.vmCount||!k(t,e)||(delete t[e],!!n&&n.dep.notify())}function Pe(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Pe(e)}var q=D.optionMergeStrategies;function Vn(t,e){if(!e)return t;for(var n,r,o,i=an?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],n!=="__ob__"&&(r=t[n],o=e[n],k(t,n)?r!==o&&$(r)&&$(o)&&Vn(r,o):Dn(t,n,o));return t}function Ln(t,e,n){return n?function(){var o=typeof e=="function"?e.call(n,n):e,i=typeof t=="function"?t.call(n,n):t;return o?Vn(o,i):i}:e?t?function(){return Vn(typeof e=="function"?e.call(this,this):e,typeof t=="function"?t.call(this,this):t)}:e:t}q.data=function(t,e,n){return n?Ln(t,e,n):e&&typeof e!="function"?t:Ln(t,e)};function Zo(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n&&Go(n)}function Go(t){for(var e=[],n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e}Ve.forEach(function(t){q[t]=Zo});function Po(t,e,n,r){var o=Object.create(t||null);return e?M(o,e):o}nn.forEach(function(t){q[t+"s"]=Po});q.watch=function(t,e,n,r){if(t===On&&(t=void 0),e===On&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};M(o,t);for(var i in e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o};q.props=q.methods=q.inject=q.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return M(o,t),e&&M(o,e),o};q.provide=Ln;var jo=function(t,e){return e===void 0?t:e};function Ro(t,e){var n=t.props;if(!!n){var r={},o,i,a;if(Array.isArray(n))for(o=n.length;o--;)i=n[o],typeof i=="string"&&(a=dt(i),r[a]={type:null});else if($(n))for(var s in n)i=n[s],a=dt(s),r[a]=$(i)?i:{type:i};t.props=r}}function Jo(t,e){var n=t.inject;if(!!n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if($(n))for(var i in n){var a=n[i];r[i]=$(a)?M({from:i},a):{from:a}}}}function zo(t){var e=t.directives;if(e)for(var n in e){var r=e[n];typeof r=="function"&&(e[n]={bind:r,update:r})}}function gt(t,e,n){if(typeof e=="function"&&(e=e.options),Ro(e,n),Jo(e,n),zo(e),!e._base&&(e.extends&&(t=gt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=gt(t,e.mixins[r],n);var i={},a;for(a in t)s(a);for(a in e)k(t,a)||s(a);function s(l){var v=q[l]||jo;i[l]=v(t[l],e[l],n,l)}return i}function Un(t,e,n,r){if(typeof n=="string"){var o=t[e];if(k(o,n))return o[n];var i=dt(n);if(k(o,i))return o[i];var a=wo(i);if(k(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function $n(t,e,n,r){var o=e[t],i=!k(n,t),a=n[t],s=Re(Boolean,o.type);if(s>-1){if(i&&!k(o,"default"))a=!1;else if(a===""||a===Ut(t)){var l=Re(String,o.type);(l<0||s<l)&&(a=!0)}}if(a===void 0){a=qo(r,o,t);var v=kn;it(!0),_t(a),it(v)}return a}function qo(t,e,n){if(!!k(e,"default")){var r=e.default;return t&&t.$options.propsData&&t.$options.propsData[n]===void 0&&t._props[n]!==void 0?t._props[n]:typeof r=="function"&&Xn(e.type)!=="Function"?r.call(t):r}}var Wo=/^\s*function (\w+)/;function Xn(t){var e=t&&t.toString().match(Wo);return e?e[1]:""}function je(t,e){return Xn(t)===Xn(e)}function Re(t,e){if(!Array.isArray(e))return je(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(je(e[n],t))return n;return-1}function Ct(t,e,n){Xt();try{if(e)for(var r=e;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=o[i].call(r,t,e,n)===!1;if(a)return}catch(s){Je(s,r,"errorCaptured hook")}}Je(t,e,n)}finally{It()}}function Bt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&Hn(i)&&!i._handled&&(i.catch(function(a){return Ct(a,r,o+" (Promise/async)")}),i._handled=!0)}catch(a){Ct(a,r,o)}return i}function Je(t,e,n){if(D.errorHandler)try{return D.errorHandler.call(null,t,e,n)}catch(r){r!==t&&ze(r,null,"config.errorHandler")}ze(t,e,n)}function ze(t,e,n){if((X||Sn)&&typeof console!="undefined")console.error(t);else throw t}var In=!1,Zn=[],Gn=!1;function fn(){Gn=!1;var t=Zn.slice(0);Zn.length=0;for(var e=0;e<t.length;e++)t[e]()}var Zt;typeof Promise!="undefined"&&Mt(Promise)?(qe=Promise.resolve(),Zt=function(){qe.then(fn),Vo&&setTimeout(V)},In=!0):!wt&&typeof MutationObserver!="undefined"&&(Mt(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")?(Gt=1,We=new MutationObserver(fn),Pn=document.createTextNode(String(Gt)),We.observe(Pn,{characterData:!0}),Zt=function(){Gt=(Gt+1)%2,Pn.data=String(Gt)},In=!0):typeof setImmediate!="undefined"&&Mt(setImmediate)?Zt=function(){setImmediate(fn)}:Zt=function(){setTimeout(fn,0)};var qe,Gt,We,Pn;function jn(t,e){var n;if(Zn.push(function(){if(t)try{t.call(e)}catch(r){Ct(r,e,"nextTick")}else n&&n(e)}),Gn||(Gn=!0,Zt()),!t&&typeof Promise!="undefined")return new Promise(function(r){n=r})}var Ye=new $t;function cn(t){Rn(t,Ye),Ye.clear()}function Rn(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!F(t)||Object.isFrozen(t)||t instanceof L)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o)for(n=t.length;n--;)Rn(t[n],e);else for(r=Object.keys(t),n=r.length;n--;)Rn(t[r[n]],e)}}var Ke=ut(function(t){var e=t.charAt(0)==="&";t=e?t.slice(1):t;var n=t.charAt(0)==="~";t=n?t.slice(1):t;var r=t.charAt(0)==="!";return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Jn(t,e){function n(){var r=arguments,o=n.fns;if(Array.isArray(o))for(var i=o.slice(),a=0;a<i.length;a++)Bt(i[a],null,r,e,"v-on handler");else return Bt(o,null,arguments,e,"v-on handler")}return n.fns=t,n}function tr(t,e,n,r,o,i){var a,s,l,v,c;for(a in t)s=l=t[a],v=e[a],c=Ke(a),C(l)||(C(v)?(C(l.fns)&&(l=t[a]=Jn(l,i)),S(c.once)&&(l=t[a]=o(c.name,l,c.capture)),n(c.name,l,c.capture,c.passive,c.params)):l!==v&&(v.fns=l,t[a]=v));for(a in e)C(t[a])&&(c=Ke(a),r(c.name,e[a],c.capture))}function at(t,e,n){t instanceof L&&(t=t.data.hook||(t.data.hook={}));var r,o=t[e];function i(){n.apply(this,arguments),K(r.fns,i)}C(o)?r=Jn([i]):u(o.fns)&&S(o.merged)?(r=o,r.fns.push(i)):r=Jn([o,i]),r.merged=!0,t[e]=r}function Yo(t,e,n){var r=e.options.props;if(!C(r)){var o={},i=t.attrs,a=t.props;if(u(i)||u(a))for(var s in r){var l=Ut(s);if(!1)var v;nr(o,a,s,l,!0)||nr(o,i,s,l,!1)}return o}}function nr(t,e,n,r,o){if(u(e)){if(k(e,n))return t[n]=e[n],o||delete e[n],!0;if(k(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Ko(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function zn(t){return Vt(t)?[St(t)]:Array.isArray(t)?er(t):void 0}function Pt(t){return u(t)&&u(t.text)&&To(t.isComment)}function er(t,e){var n=[],r,o,i,a;for(r=0;r<t.length;r++)o=t[r],!(C(o)||typeof o=="boolean")&&(i=n.length-1,a=n[i],Array.isArray(o)?o.length>0&&(o=er(o,(e||"")+"_"+r),Pt(o[0])&&Pt(a)&&(n[i]=St(a.text+o[0].text),o.shift()),n.push.apply(n,o)):Vt(o)?Pt(a)?n[i]=St(a.text+o):o!==""&&n.push(St(o)):Pt(o)&&Pt(a)?n[i]=St(a.text+o.text):(S(t._isVList)&&u(o.tag)&&C(o.key)&&u(e)&&(o.key="__vlist"+e+"_"+r+"__"),n.push(o)));return n}function t1(t){var e=t.$options.provide;e&&(t._provided=typeof e=="function"?e.call(t):e)}function n1(t){var e=rr(t.$options.inject,t);e&&(it(!1),Object.keys(e).forEach(function(n){ht(t,n,e[n])}),it(!0))}function rr(t,e){if(t){for(var n=Object.create(null),r=an?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if(i!=="__ob__"){for(var a=t[i].from,s=e;s;){if(s._provided&&k(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[i]){var l=t[i].default;n[i]=typeof l=="function"?l.call(e):l}}}return n}}function qn(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,(i.context===e||i.fnContext===e)&&a&&a.slot!=null){var s=a.slot,l=n[s]||(n[s]=[]);i.tag==="template"?l.push.apply(l,i.children||[]):l.push(i)}else(n.default||(n.default=[])).push(i)}for(var v in n)n[v].every(e1)&&delete n[v];return n}function e1(t){return t.isComment&&!t.asyncFactory||t.text===" "}function jt(t){return t.isComment&&t.asyncFactory}function un(t,e,n){var r,o=Object.keys(e).length>0,i=t?!!t.$stable:!o,a=t&&t.$key;if(!t)r={};else{if(t._normalized)return t._normalized;if(i&&n&&n!==z&&a===n.$key&&!o&&!n.$hasNormal)return n;r={};for(var s in t)t[s]&&s[0]!=="$"&&(r[s]=r1(e,s,t[s]))}for(var l in e)l in r||(r[l]=o1(e,l));return t&&Object.isExtensible(t)&&(t._normalized=r),Et(r,"$stable",i),Et(r,"$key",a),Et(r,"$hasNormal",o),r}function r1(t,e,n){var r=function(){var o=arguments.length?n.apply(null,arguments):n({});o=o&&typeof o=="object"&&!Array.isArray(o)?[o]:zn(o);var i=o&&o[0];return o&&(!i||o.length===1&&i.isComment&&!jt(i))?void 0:o};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function o1(t,e){return function(){return t[e]}}function i1(t,e){var n,r,o,i,a;if(Array.isArray(t)||typeof t=="string")for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if(typeof t=="number")for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(F(t))if(an&&t[Symbol.iterator]){n=[];for(var s=t[Symbol.iterator](),l=s.next();!l.done;)n.push(e(l.value,n.length)),l=s.next()}else for(i=Object.keys(t),n=new Array(i.length),r=0,o=i.length;r<o;r++)a=i[r],n[r]=e(t[a],a,r);return u(n)||(n=[]),n._isVList=!0,n}function a1(t,e,n,r){var o=this.$scopedSlots[t],i;o?(n=n||{},r&&(n=M(M({},r),n)),i=o(n)||(typeof e=="function"?e():e)):i=this.$slots[t]||(typeof e=="function"?e():e);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function s1(t){return Un(this.$options,"filters",t,!0)||Fe}function or(t,e){return Array.isArray(t)?t.indexOf(e)===-1:t!==e}function l1(t,e,n,r,o){var i=D.keyCodes[e]||n;return o&&r&&!D.keyCodes[e]?or(o,r):i?or(i,t):r?Ut(r)!==e:t===void 0}function p1(t,e,n,r,o){if(n&&F(n)){Array.isArray(n)&&(n=Ne(n));var i,a=function(l){if(l==="class"||l==="style"||Qo(l))i=t;else{var v=t.attrs&&t.attrs.type;i=r||D.mustUseProp(e,v,l)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=dt(l),m=Ut(l);if(!(c in i)&&!(m in i)&&(i[l]=n[l],o)){var _=t.on||(t.on={});_["update:"+l]=function(T){n[l]=T}}};for(var s in n)a(s)}return t}function f1(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),ir(r,"__static__"+t,!1)),r}function c1(t,e,n){return ir(t,"__once__"+e+(n?"_"+n:""),!0),t}function ir(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&typeof t[r]!="string"&&ar(t[r],e+"_"+r,n);else ar(t,e,n)}function ar(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function u1(t,e){if(e&&$(e)){var n=t.on=t.on?M({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}return t}function sr(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?sr(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function d1(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];typeof r=="string"&&r&&(t[e[n]]=e[n+1])}return t}function v1(t,e){return typeof t=="string"?e+t:t}function lr(t){t._o=c1,t._n=Lt,t._s=xo,t._l=i1,t._t=a1,t._q=vt,t._i=ke,t._m=f1,t._f=s1,t._k=l1,t._b=p1,t._v=St,t._e=mt,t._u=sr,t._g=u1,t._d=d1,t._p=v1}function Wn(t,e,n,r,o){var i=this,a=o.options,s;k(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var l=S(a._compiled),v=!l;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||z,this.injections=rr(a.inject,r),this.slots=function(){return i.$slots||un(t.scopedSlots,i.$slots=qn(n,r)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return un(t.scopedSlots,this.slots())}}),l&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=un(t.scopedSlots,this.$slots)),a._scopeId?this._c=function(c,m,_,T){var w=dn(s,c,m,_,T,v);return w&&!Array.isArray(w)&&(w.fnScopeId=a._scopeId,w.fnContext=r),w}:this._c=function(c,m,_,T){return dn(s,c,m,_,T,v)}}lr(Wn.prototype);function m1(t,e,n,r,o){var i=t.options,a={},s=i.props;if(u(s))for(var l in s)a[l]=$n(l,s,e||z);else u(n.attrs)&&fr(a,n.attrs),u(n.props)&&fr(a,n.props);var v=new Wn(n,a,o,r,t),c=i.render.call(null,v._c,v);if(c instanceof L)return pr(c,n,v.parent,i,v);if(Array.isArray(c)){for(var m=zn(c)||[],_=new Array(m.length),T=0;T<m.length;T++)_[T]=pr(m[T],n,v.parent,i,v);return _}}function pr(t,e,n,r,o){var i=Fn(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function fr(t,e){for(var n in e)t[dt(n)]=e[n]}var Yn={init:function(e,n){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Yn.prepatch(r,r)}else{var o=e.componentInstance=_1(e,yt);o.$mount(n?e.elm:void 0,n)}},prepatch:function(e,n){var r=n.componentOptions,o=n.componentInstance=e.componentInstance;k1(o,r.propsData,r.listeners,n,r.children)},insert:function(e){var n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,R(r,"mounted")),e.data.keepAlive&&(n._isMounted?U1(r):ne(r,!0))},destroy:function(e){var n=e.componentInstance;n._isDestroyed||(e.data.keepAlive?Cr(n,!0):n.$destroy())}},cr=Object.keys(Yn);function ur(t,e,n,r,o){if(!C(t)){var i=n.$options._base;if(F(t)&&(t=i.extend(t)),typeof t=="function"){var a;if(C(t.cid)&&(a=t,t=E1(a,i),t===void 0))return b1(a,e,n,r,o);e=e||{},le(t),u(e.model)&&C1(t.options,e);var s=Yo(e,t,o);if(S(t.options.functional))return m1(t,s,e,n,r);var l=e.on;if(e.on=e.nativeOn,S(t.options.abstract)){var v=e.slot;e={},v&&(e.slot=v)}h1(e);var c=t.options.name||o,m=new L("vue-component-"+t.cid+(c?"-"+c:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:s,listeners:l,tag:o,children:r},a);return m}}}function _1(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return u(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function h1(t){for(var e=t.hook||(t.hook={}),n=0;n<cr.length;n++){var r=cr[n],o=e[r],i=Yn[r];o!==i&&!(o&&o._merged)&&(e[r]=o?g1(i,o):i)}}function g1(t,e){var n=function(r,o){t(r,o),e(r,o)};return n._merged=!0,n}function C1(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),i=o[r],a=e.model.callback;u(i)?(Array.isArray(i)?i.indexOf(a)===-1:i!==a)&&(o[r]=[a].concat(i)):o[r]=a}var y1=1,dr=2;function dn(t,e,n,r,o,i){return(Array.isArray(n)||Vt(n))&&(o=r,r=n,n=void 0),S(i)&&(o=dr),A1(t,e,n,r,o)}function A1(t,e,n,r,o){if(u(n)&&u(n.__ob__)||(u(n)&&u(n.is)&&(e=n.is),!e))return mt();Array.isArray(r)&&typeof r[0]=="function"&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dr?r=zn(r):o===y1&&(r=Ko(r));var i,a;if(typeof e=="string"){var s;a=t.$vnode&&t.$vnode.ns||D.getTagNamespace(e),D.isReservedTag(e)?i=new L(D.parsePlatformTagName(e),n,r,void 0,void 0,t):(!n||!n.pre)&&u(s=Un(t.$options,"components",e))?i=ur(s,n,t,r,e):i=new L(e,n,r,void 0,void 0,t)}else i=ur(e,n,t,r);return Array.isArray(i)?i:u(i)?(u(a)&&vr(i,a),u(n)&&T1(n),i):mt()}function vr(t,e,n){if(t.ns=e,t.tag==="foreignObject"&&(e=void 0,n=!0),u(t.children))for(var r=0,o=t.children.length;r<o;r++){var i=t.children[r];u(i.tag)&&(C(i.ns)||S(n)&&i.tag!=="svg")&&vr(i,e,n)}}function T1(t){F(t.style)&&cn(t.style),F(t.class)&&cn(t.class)}function x1(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=qn(e._renderChildren,r),t.$scopedSlots=z,t._c=function(i,a,s,l){return dn(t,i,a,s,l,!1)},t.$createElement=function(i,a,s,l){return dn(t,i,a,s,l,!0)};var o=n&&n.data;ht(t,"$attrs",o&&o.attrs||z,null,!0),ht(t,"$listeners",e._parentListeners||z,null,!0)}var Kn=null;function Q1(t){lr(t.prototype),t.prototype.$nextTick=function(e){return jn(e,this)},t.prototype._render=function(){var e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=un(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;var i;try{Kn=e,i=r.call(e._renderProxy,e.$createElement)}catch(a){if(Ct(a,e,"render"),!1)try{}catch(s){}else i=e._vnode}finally{Kn=null}return Array.isArray(i)&&i.length===1&&(i=i[0]),i instanceof L||(i=mt()),i.parent=o,i}}function te(t,e){return(t.__esModule||an&&t[Symbol.toStringTag]==="Module")&&(t=t.default),F(t)?e.extend(t):t}function b1(t,e,n,r,o){var i=mt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function E1(t,e){if(S(t.error)&&u(t.errorComp))return t.errorComp;if(u(t.resolved))return t.resolved;var n=Kn;if(n&&u(t.owners)&&t.owners.indexOf(n)===-1&&t.owners.push(n),S(t.loading)&&u(t.loadingComp))return t.loadingComp;if(n&&!u(t.owners)){var r=t.owners=[n],o=!0,i=null,a=null;n.$on("hook:destroyed",function(){return K(r,n)});var s=function(m){for(var _=0,T=r.length;_<T;_++)r[_].$forceUpdate();m&&(r.length=0,i!==null&&(clearTimeout(i),i=null),a!==null&&(clearTimeout(a),a=null))},l=tn(function(m){t.resolved=te(m,e),o?r.length=0:s(!0)}),v=tn(function(m){u(t.errorComp)&&(t.error=!0,s(!0))}),c=t(l,v);return F(c)&&(Hn(c)?C(t.resolved)&&c.then(l,v):Hn(c.component)&&(c.component.then(l,v),u(c.error)&&(t.errorComp=te(c.error,e)),u(c.loading)&&(t.loadingComp=te(c.loading,e),c.delay===0?t.loading=!0:i=setTimeout(function(){i=null,C(t.resolved)&&C(t.error)&&(t.loading=!0,s(!1))},c.delay||200)),u(c.timeout)&&(a=setTimeout(function(){a=null,C(t.resolved)&&v(null)},c.timeout)))),o=!1,t.loading?t.loadingComp:t.resolved}}function mr(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(u(n)&&(u(n.componentOptions)||jt(n)))return n}}function w1(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&_r(t,e)}var Rt;function H1(t,e){Rt.$on(t,e)}function M1(t,e){Rt.$off(t,e)}function S1(t,e){var n=Rt;return function r(){var o=e.apply(null,arguments);o!==null&&n.$off(t,r)}}function _r(t,e,n){Rt=t,tr(e,n||{},H1,M1,S1,t),Rt=void 0}function B1(t){var e=/^hook:/;t.prototype.$on=function(n,r){var o=this;if(Array.isArray(n))for(var i=0,a=n.length;i<a;i++)o.$on(n[i],r);else(o._events[n]||(o._events[n]=[])).push(r),e.test(n)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(n,r){var o=this;function i(){o.$off(n,i),r.apply(o,arguments)}return i.fn=r,o.$on(n,i),o},t.prototype.$off=function(n,r){var o=this;if(!arguments.length)return o._events=Object.create(null),o;if(Array.isArray(n)){for(var i=0,a=n.length;i<a;i++)o.$off(n[i],r);return o}var s=o._events[n];if(!s)return o;if(!r)return o._events[n]=null,o;for(var l,v=s.length;v--;)if(l=s[v],l===r||l.fn===r){s.splice(v,1);break}return o},t.prototype.$emit=function(n){var r=this;if(!1)var o;var i=r._events[n];if(i){i=i.length>1?Mn(i):i;for(var a=Mn(arguments,1),s='event handler for "'+n+'"',l=0,v=i.length;l<v;l++)Bt(i[l],r,a,r,s)}return r}}var yt=null;function hr(t){var e=yt;return yt=t,function(){yt=e}}function O1(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function N1(t){t.prototype._update=function(e,n){var r=this,o=r.$el,i=r._vnode,a=hr(r);r._vnode=e,i?r.$el=r.__patch__(i,e):r.$el=r.__patch__(r.$el,e,n,!1),a(),o&&(o.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},t.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},t.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){R(e,"beforeDestroy"),e._isBeingDestroyed=!0;var n=e.$parent;n&&!n._isBeingDestroyed&&!e.$options.abstract&&K(n.$children,e),e._watcher&&e._watcher.teardown();for(var r=e._watchers.length;r--;)e._watchers[r].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),R(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function F1(t,e,n){t.$el=e,t.$options.render||(t.$options.render=mt),R(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},new J(t,r,V,{before:function(){t._isMounted&&!t._isDestroyed&&R(t,"beforeUpdate")}},!0),n=!1,t.$vnode==null&&(t._isMounted=!0,R(t,"mounted")),t}function k1(t,e,n,r,o){var i=r.data.scopedSlots,a=t.$scopedSlots,s=!!(i&&!i.$stable||a!==z&&!a.$stable||i&&t.$scopedSlots.$key!==i.$key||!i&&t.$scopedSlots.$key),l=!!(o||t.$options._renderChildren||s);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||z,t.$listeners=n||z,e&&t.$options.props){it(!1);for(var v=t._props,c=t.$options._propKeys||[],m=0;m<c.length;m++){var _=c[m],T=t.$options.props;v[_]=$n(_,T,e,t)}it(!0),t.$options.propsData=e}n=n||z;var w=t.$options._parentListeners;t.$options._parentListeners=n,_r(t,n,w),l&&(t.$slots=qn(o,r.context),t.$forceUpdate())}function gr(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function ne(t,e){if(e){if(t._directInactive=!1,gr(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var n=0;n<t.$children.length;n++)ne(t.$children[n]);R(t,"activated")}}function Cr(t,e){if(!(e&&(t._directInactive=!0,gr(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Cr(t.$children[n]);R(t,"deactivated")}}function R(t,e){Xt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Bt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),It()}var tt=[],ee=[],vn={};var re=!1,oe=!1,Ot=0;function D1(){Ot=tt.length=ee.length=0,vn={},re=oe=!1}var yr=0,ie=Date.now;X&&!wt&&(mn=window.performance,mn&&typeof mn.now=="function"&&ie()>document.createEvent("Event").timeStamp&&(ie=function(){return mn.now()}));var mn;function V1(){yr=ie(),oe=!0;var t,e;for(tt.sort(function(o,i){return o.id-i.id}),Ot=0;Ot<tt.length;Ot++)t=tt[Ot],t.before&&t.before(),e=t.id,vn[e]=null,t.run();var n=ee.slice(),r=tt.slice();D1(),$1(n),L1(r),on&&D.devtools&&on.emit("flush")}function L1(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&R(r,"updated")}}function U1(t){t._inactive=!1,ee.push(t)}function $1(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,ne(t[e],!0)}function X1(t){var e=t.id;if(vn[e]==null){if(vn[e]=!0,!oe)tt.push(t);else{for(var n=tt.length-1;n>Ot&&tt[n].id>t.id;)n--;tt.splice(n+1,0,t)}re||(re=!0,jn(V1))}}var I1=0,J=function(e,n,r,o,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++I1,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new $t,this.newDepIds=new $t,this.expression="",typeof n=="function"?this.getter=n:(this.getter=ko(n),this.getter||(this.getter=V)),this.value=this.lazy?void 0:this.get()};J.prototype.get=function(){Xt(this);var e,n=this.vm;try{e=this.getter.call(n,n)}catch(r){if(this.user)Ct(r,n,'getter for watcher "'+this.expression+'"');else throw r}finally{this.deep&&cn(e),It(),this.cleanupDeps()}return e};J.prototype.addDep=function(e){var n=e.id;this.newDepIds.has(n)||(this.newDepIds.add(n),this.newDeps.push(e),this.depIds.has(n)||e.addSub(this))};J.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var n=this.deps[e];this.newDepIds.has(n.id)||n.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0};J.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():X1(this)};J.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||F(e)||this.deep){var n=this.value;if(this.value=e,this.user){var r='callback for watcher "'+this.expression+'"';Bt(this.cb,this.vm,[e,n],this.vm,r)}else this.cb.call(this.vm,e,n)}}};J.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};J.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()};J.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||K(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var st={enumerable:!0,configurable:!0,get:V,set:V};function ae(t,e,n){st.get=function(){return this[e][n]},st.set=function(o){this[e][n]=o},Object.defineProperty(t,n,st)}function Z1(t){t._watchers=[];var e=t.$options;e.props&&G1(t,e.props),e.methods&&z1(t,e.methods),e.data?P1(t):_t(t._data={},!0),e.computed&&J1(t,e.computed),e.watch&&e.watch!==On&&q1(t,e.watch)}function G1(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||it(!1);var a=function(l){o.push(l);var v=$n(l,e,n,t);if(!1)var c;else ht(r,l,v);l in t||ae(t,"_props",l)};for(var s in e)a(s);it(!0)}function P1(t){var e=t.$options.data;e=t._data=typeof e=="function"?j1(e,t):e||{},$(e)||(e={});for(var n=Object.keys(e),r=t.$options.props,o=t.$options.methods,i=n.length;i--;){var a=n[i];r&&k(r,a)||No(a)||ae(t,"_data",a)}_t(e,!0)}function j1(t,e){Xt();try{return t.call(e,e)}catch(n){return Ct(n,e,"data()"),{}}finally{It()}}var R1={lazy:!0};function J1(t,e){var n=t._computedWatchers=Object.create(null),r=rn();for(var o in e){var i=e[o],a=typeof i=="function"?i:i.get;r||(n[o]=new J(t,a||V,V,R1)),o in t||Ar(t,o,i)}}function Ar(t,e,n){var r=!rn();typeof n=="function"?(st.get=r?Tr(e):xr(n),st.set=V):(st.get=n.get?r&&n.cache!==!1?Tr(e):xr(n.get):V,st.set=n.set||V),Object.defineProperty(t,e,st)}function Tr(t){return function(){var n=this._computedWatchers&&this._computedWatchers[t];if(n)return n.dirty&&n.evaluate(),I.target&&n.depend(),n.value}}function xr(t){return function(){return t.call(this,this)}}function z1(t,e){var n=t.$options.props;for(var r in e)t[r]=typeof e[r]!="function"?V:Bo(e[r],t)}function q1(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)se(t,n,r[o]);else se(t,n,r)}}function se(t,e,n,r){return $(n)&&(r=n,n=n.handler),typeof n=="string"&&(n=t[n]),t.$watch(e,n,r)}function W1(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dn,t.prototype.$delete=Ge,t.prototype.$watch=function(r,o,i){var a=this;if($(o))return se(a,r,o,i);i=i||{},i.user=!0;var s=new J(a,r,o,i);if(i.immediate){var l='callback for immediate watcher "'+s.expression+'"';Xt(),Bt(o,a,[s.value],a,l),It()}return function(){s.teardown()}}}var Y1=0;function K1(t){t.prototype._init=function(e){var n=this;n._uid=Y1++;var r,o;n._isVue=!0,e&&e._isComponent?ti(n,e):n.$options=gt(le(n.constructor),e||{},n),n._renderProxy=n,n._self=n,O1(n),w1(n),x1(n),R(n,"beforeCreate"),n1(n),Z1(n),t1(n),R(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}function ti(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function le(t){var e=t.options;if(t.super){var n=le(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=ni(t);o&&M(t.extendOptions,o),e=t.options=gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function ni(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function B(t){this._init(t)}K1(B);W1(B);B1(B);N1(B);Q1(B);function ei(t){t.use=function(e){var n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(e)>-1)return this;var r=Mn(arguments,1);return r.unshift(this),typeof e.install=="function"?e.install.apply(e,r):typeof e=="function"&&e.apply(null,r),n.push(e),this}}function ri(t){t.mixin=function(e){return this.options=gt(this.options,e),this}}function oi(t){t.cid=0;var e=1;t.extend=function(n){n=n||{};var r=this,o=r.cid,i=n._Ctor||(n._Ctor={});if(i[o])return i[o];var a=n.name||r.options.name,s=function(v){this._init(v)};return s.prototype=Object.create(r.prototype),s.prototype.constructor=s,s.cid=e++,s.options=gt(r.options,n),s.super=r,s.options.props&&ii(s),s.options.computed&&ai(s),s.extend=r.extend,s.mixin=r.mixin,s.use=r.use,nn.forEach(function(l){s[l]=r[l]}),a&&(s.options.components[a]=s),s.superOptions=r.options,s.extendOptions=n,s.sealedOptions=M({},s.options),i[o]=s,s}}function ii(t){var e=t.options.props;for(var n in e)ae(t.prototype,"_props",n)}function ai(t){var e=t.options.computed;for(var n in e)Ar(t.prototype,n,e[n])}function si(t){nn.forEach(function(e){t[e]=function(n,r){return r?(e==="component"&&$(r)&&(r.name=r.name||n,r=this.options._base.extend(r)),e==="directive"&&typeof r=="function"&&(r={bind:r,update:r}),this.options[e+"s"][n]=r,r):this.options[e+"s"][n]}})}function Qr(t){return t&&(t.Ctor.options.name||t.tag)}function _n(t,e){return Array.isArray(t)?t.indexOf(e)>-1:typeof t=="string"?t.split(",").indexOf(e)>-1:Be(t)?t.test(e):!1}function br(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=a.name;s&&!e(s)&&pe(n,i,r,o)}}}function pe(t,e,n,r){var o=t[e];o&&(!r||o.tag!==r.tag)&&o.componentInstance.$destroy(),t[e]=null,K(n,e)}var Er=[String,RegExp,Array],li={name:"keep-alive",abstract:!0,props:{include:Er,exclude:Er,max:[String,Number]},methods:{cacheVNode:function(){var e=this,n=e.cache,r=e.keys,o=e.vnodeToCache,i=e.keyToCache;if(o){var a=o.tag,s=o.componentInstance,l=o.componentOptions;n[i]={name:Qr(l),tag:a,componentInstance:s},r.push(i),this.max&&r.length>parseInt(this.max)&&pe(n,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)pe(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(n){br(e,function(r){return _n(n,r)})}),this.$watch("exclude",function(n){br(e,function(r){return!_n(n,r)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,n=mr(e),r=n&&n.componentOptions;if(r){var o=Qr(r),i=this,a=i.include,s=i.exclude;if(a&&(!o||!_n(a,o))||s&&o&&_n(s,o))return n;var l=this,v=l.cache,c=l.keys,m=n.key==null?r.Ctor.cid+(r.tag?"::"+r.tag:""):n.key;v[m]?(n.componentInstance=v[m].componentInstance,K(c,m),c.push(m)):(this.vnodeToCache=n,this.keyToCache=m),n.data.keepAlive=!0}return n||e&&e[0]}},pi={KeepAlive:li};function fi(t){var e={};e.get=function(){return D},Object.defineProperty(t,"config",e),t.util={warn:Xe,extend:M,mergeOptions:gt,defineReactive:ht},t.set=Dn,t.delete=Ge,t.nextTick=jn,t.observable=function(n){return _t(n),n},t.options=Object.create(null),nn.forEach(function(n){t.options[n+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,pi),ei(t),ri(t),oi(t),si(t)}fi(B);Object.defineProperty(B.prototype,"$isServer",{get:rn});Object.defineProperty(B.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(B,"FunctionalRenderContext",{value:Wn});B.version="2.6.14";var ci=j("style,class"),ui=j("input,textarea,option,select,progress"),di=function(t,e,n){return n==="value"&&ui(t)&&e!=="button"||n==="selected"&&t==="option"||n==="checked"&&t==="input"||n==="muted"&&t==="video"},wr=j("contenteditable,draggable,spellcheck"),vi=j("events,caret,typing,plaintext-only"),mi=function(t,e){return hn(e)||e==="false"?"false":t==="contenteditable"&&vi(e)?e:"true"},_i=j("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),fe="http://www.w3.org/1999/xlink",ce=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},Hr=function(t){return ce(t)?t.slice(6,t.length):""},hn=function(t){return t==null||t===!1};function hi(t){for(var e=t.data,n=t,r=t;u(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(e=Mr(r.data,e));for(;u(n=n.parent);)n&&n.data&&(e=Mr(e,n.data));return gi(e.staticClass,e.class)}function Mr(t,e){return{staticClass:ue(t.staticClass,e.staticClass),class:u(t.class)?[t.class,e.class]:e.class}}function gi(t,e){return u(t)||u(e)?ue(t,de(e)):""}function ue(t,e){return t?e?t+" "+e:t:e||""}function de(t){return Array.isArray(t)?Ci(t):F(t)?yi(t):typeof t=="string"?t:""}function Ci(t){for(var e="",n,r=0,o=t.length;r<o;r++)u(n=de(t[r]))&&n!==""&&(e&&(e+=" "),e+=n);return e}function yi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ai={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ti=j("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ve=j("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Sr=function(t){return Ti(t)||ve(t)};function xi(t){if(ve(t))return"svg";if(t==="math")return"math"}var gn=Object.create(null);function Qi(t){if(!X)return!0;if(Sr(t))return!1;if(t=t.toLowerCase(),gn[t]!=null)return gn[t];var e=document.createElement(t);return t.indexOf("-")>-1?gn[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:gn[t]=/HTMLUnknownElement/.test(e.toString())}var me=j("text,number,password,search,email,tel,url");function bi(t){if(typeof t=="string"){var e=document.querySelector(t);return e||document.createElement("div")}else return t}function Ei(t,e){var n=document.createElement(t);return t!=="select"||e.data&&e.data.attrs&&e.data.attrs.multiple!==void 0&&n.setAttribute("multiple","multiple"),n}function wi(t,e){return document.createElementNS(Ai[t],e)}function Hi(t){return document.createTextNode(t)}function Mi(t){return document.createComment(t)}function Si(t,e,n){t.insertBefore(e,n)}function Bi(t,e){t.removeChild(e)}function Oi(t,e){t.appendChild(e)}function Ni(t){return t.parentNode}function Fi(t){return t.nextSibling}function ki(t){return t.tagName}function Di(t,e){t.textContent=e}function Vi(t,e){t.setAttribute(e,"")}var Li=Object.freeze({createElement:Ei,createElementNS:wi,createTextNode:Hi,createComment:Mi,insertBefore:Si,removeChild:Bi,appendChild:Oi,parentNode:Ni,nextSibling:Fi,tagName:ki,setTextContent:Di,setStyleScope:Vi}),Ui={create:function(e,n){Nt(n)},update:function(e,n){e.data.ref!==n.data.ref&&(Nt(e,!0),Nt(n))},destroy:function(e){Nt(e,!0)}};function Nt(t,e){var n=t.data.ref;if(!!u(n)){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?K(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var At=new L("",{},[]),Jt=["create","activate","update","remove","destroy"];function Tt(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&u(t.data)===u(e.data)&&$i(t,e)||S(t.isAsyncPlaceholder)&&C(e.asyncFactory.error))}function $i(t,e){if(t.tag!=="input")return!0;var n,r=u(n=t.data)&&u(n=n.attrs)&&n.type,o=u(n=e.data)&&u(n=n.attrs)&&n.type;return r===o||me(r)&&me(o)}function Xi(t,e,n){var r,o,i={};for(r=e;r<=n;++r)o=t[r].key,u(o)&&(i[o]=r);return i}function Ii(t){var e,n,r={},o=t.modules,i=t.nodeOps;for(e=0;e<Jt.length;++e)for(r[Jt[e]]=[],n=0;n<o.length;++n)u(o[n][Jt[e]])&&r[Jt[e]].push(o[n][Jt[e]]);function a(f){return new L(i.tagName(f).toLowerCase(),{},[],void 0,f)}function s(f,p){function d(){--d.listeners==0&&l(f)}return d.listeners=p,d}function l(f){var p=i.parentNode(f);u(p)&&i.removeChild(p,f)}function v(f,p){return!p&&!f.ns&&!(D.ignoredElements.length&&D.ignoredElements.some(function(d){return Be(d)?d.test(f.tag):d===f.tag}))&&D.isUnknownElement(f.tag)}var c=0;function m(f,p,d,h,g,x,y){if(u(f.elm)&&u(x)&&(f=x[y]=Fn(f)),f.isRootInsert=!g,!_(f,p,d,h)){var A=f.data,E=f.children,Q=f.tag;u(Q)?(f.elm=f.ns?i.createElementNS(f.ns,Q):i.createElement(Q,f),pt(f),lt(f,E,p),u(A)&&U(f,p),H(d,f.elm,h)):S(f.isComment)?(f.elm=i.createComment(f.text),H(d,f.elm,h)):(f.elm=i.createTextNode(f.text),H(d,f.elm,h))}}function _(f,p,d,h){var g=f.data;if(u(g)){var x=u(f.componentInstance)&&g.keepAlive;if(u(g=g.hook)&&u(g=g.init)&&g(f,!1),u(f.componentInstance))return T(f,p),H(d,f.elm,h),S(x)&&w(f,p,d,h),!0}}function T(f,p){u(f.data.pendingInsert)&&(p.push.apply(p,f.data.pendingInsert),f.data.pendingInsert=null),f.elm=f.componentInstance.$el,G(f)?(U(f,p),pt(f)):(Nt(f),p.push(f))}function w(f,p,d,h){for(var g,x=f;x.componentInstance;)if(x=x.componentInstance._vnode,u(g=x.data)&&u(g=g.transition)){for(g=0;g<r.activate.length;++g)r.activate[g](At,x);p.push(x);break}H(d,f.elm,h)}function H(f,p,d){u(f)&&(u(d)?i.parentNode(d)===f&&i.insertBefore(f,p,d):i.appendChild(f,p))}function lt(f,p,d){if(Array.isArray(p))for(var h=0;h<p.length;++h)m(p[h],d,f.elm,null,!0,p,h);else Vt(f.text)&&i.appendChild(f.elm,i.createTextNode(String(f.text)))}function G(f){for(;f.componentInstance;)f=f.componentInstance._vnode;return u(f.tag)}function U(f,p){for(var d=0;d<r.create.length;++d)r.create[d](At,f);e=f.data.hook,u(e)&&(u(e.create)&&e.create(At,f),u(e.insert)&&p.push(f))}function pt(f){var p;if(u(p=f.fnScopeId))i.setStyleScope(f.elm,p);else for(var d=f;d;)u(p=d.context)&&u(p=p.$options._scopeId)&&i.setStyleScope(f.elm,p),d=d.parent;u(p=yt)&&p!==f.context&&p!==f.fnContext&&u(p=p.$options._scopeId)&&i.setStyleScope(f.elm,p)}function Qt(f,p,d,h,g,x){for(;h<=g;++h)m(d[h],x,f,p,!1,d,h)}function ft(f){var p,d,h=f.data;if(u(h))for(u(p=h.hook)&&u(p=p.destroy)&&p(f),p=0;p<r.destroy.length;++p)r.destroy[p](f);if(u(p=f.children))for(d=0;d<f.children.length;++d)ft(f.children[d])}function W(f,p,d){for(;p<=d;++p){var h=f[p];u(h)&&(u(h.tag)?(P(h),ft(h)):l(h.elm))}}function P(f,p){if(u(p)||u(f.data)){var d,h=r.remove.length+1;for(u(p)?p.listeners+=h:p=s(f.elm,h),u(d=f.componentInstance)&&u(d=d._vnode)&&u(d.data)&&P(d,p),d=0;d<r.remove.length;++d)r.remove[d](f,p);u(d=f.data.hook)&&u(d=d.remove)?d(f,p):p()}else l(f.elm)}function kt(f,p,d,h,g){for(var x=0,y=0,A=p.length-1,E=p[0],Q=p[A],b=d.length-1,O=d[0],Z=d[b],ct,rt,ot,Se,En=!g;x<=A&&y<=b;)C(E)?E=p[++x]:C(Q)?Q=p[--A]:Tt(E,O)?(Y(E,O,h,d,y),E=p[++x],O=d[++y]):Tt(Q,Z)?(Y(Q,Z,h,d,b),Q=p[--A],Z=d[--b]):Tt(E,Z)?(Y(E,Z,h,d,b),En&&i.insertBefore(f,E.elm,i.nextSibling(Q.elm)),E=p[++x],Z=d[--b]):Tt(Q,O)?(Y(Q,O,h,d,y),En&&i.insertBefore(f,Q.elm,E.elm),Q=p[--A],O=d[++y]):(C(ct)&&(ct=Xi(p,x,A)),rt=u(O.key)?ct[O.key]:Wt(O,p,x,A),C(rt)?m(O,h,f,E.elm,!1,d,y):(ot=p[rt],Tt(ot,O)?(Y(ot,O,h,d,y),p[rt]=void 0,En&&i.insertBefore(f,ot.elm,E.elm)):m(O,h,f,E.elm,!1,d,y)),O=d[++y]);x>A?(Se=C(d[b+1])?null:d[b+1].elm,Qt(f,Se,d,y,b,h)):y>b&&W(p,x,A)}function Qn(f){for(var p={},d=0;d<f.length;d++){var h=f[d],g=h.key;u(g)&&(p[g]?Xe("Duplicate keys detected: '"+g+"'. This may cause an update error.",h.context):p[g]=!0)}}function Wt(f,p,d,h){for(var g=d;g<h;g++){var x=p[g];if(u(x)&&Tt(f,x))return g}}function Y(f,p,d,h,g,x){if(f!==p){u(p.elm)&&u(h)&&(p=h[g]=Fn(p));var y=p.elm=f.elm;if(S(f.isAsyncPlaceholder)){u(p.asyncFactory.resolved)?bt(f.elm,p,d):p.isAsyncPlaceholder=!0;return}if(S(p.isStatic)&&S(f.isStatic)&&p.key===f.key&&(S(p.isCloned)||S(p.isOnce))){p.componentInstance=f.componentInstance;return}var A,E=p.data;u(E)&&u(A=E.hook)&&u(A=A.prepatch)&&A(f,p);var Q=f.children,b=p.children;if(u(E)&&G(p)){for(A=0;A<r.update.length;++A)r.update[A](f,p);u(A=E.hook)&&u(A=A.update)&&A(f,p)}C(p.text)?u(Q)&&u(b)?Q!==b&&kt(y,Q,b,d,x):u(b)?(u(f.text)&&i.setTextContent(y,""),Qt(y,null,b,0,b.length-1,d)):u(Q)?W(Q,0,Q.length-1):u(f.text)&&i.setTextContent(y,""):f.text!==p.text&&i.setTextContent(y,p.text),u(E)&&u(A=E.hook)&&u(A=A.postpatch)&&A(f,p)}}function et(f,p,d){if(S(d)&&u(f.parent))f.parent.data.pendingInsert=p;else for(var h=0;h<p.length;++h)p[h].data.hook.insert(p[h])}var bn=!1,Yt=j("attrs,class,staticClass,staticStyle,key");function bt(f,p,d,h){var g,x=p.tag,y=p.data,A=p.children;if(h=h||y&&y.pre,p.elm=f,S(p.isComment)&&u(p.asyncFactory))return p.isAsyncPlaceholder=!0,!0;if(u(y)&&(u(g=y.hook)&&u(g=g.init)&&g(p,!0),u(g=p.componentInstance)))return T(p,d),!0;if(u(x)){if(u(A))if(!f.hasChildNodes())lt(p,A,d);else if(u(g=y)&&u(g=g.domProps)&&u(g=g.innerHTML)){if(g!==f.innerHTML)return!1}else{for(var E=!0,Q=f.firstChild,b=0;b<A.length;b++){if(!Q||!bt(Q,A[b],d,h)){E=!1;break}Q=Q.nextSibling}if(!E||Q)return!1}if(u(y)){var O=!1;for(var Z in y)if(!Yt(Z)){O=!0,U(p,d);break}!O&&y.class&&cn(y.class)}}else f.data!==p.text&&(f.data=p.text);return!0}function Dt(f,p,d){return u(p.tag)?p.tag.indexOf("vue-component")===0||!v(p,d)&&p.tag.toLowerCase()===(f.tagName&&f.tagName.toLowerCase()):f.nodeType===(p.isComment?8:3)}return function(p,d,h,g){if(C(d)){u(p)&&ft(p);return}var x=!1,y=[];if(C(p))x=!0,m(d,y);else{var A=u(p.nodeType);if(!A&&Tt(p,d))Y(p,d,y,null,null,g);else{if(A){if(p.nodeType===1&&p.hasAttribute(De)&&(p.removeAttribute(De),h=!0),S(h)&&bt(p,d,y))return et(d,y,!0),p;p=a(p)}var E=p.elm,Q=i.parentNode(E);if(m(d,y,E._leaveCb?null:Q,i.nextSibling(E)),u(d.parent))for(var b=d.parent,O=G(d);b;){for(var Z=0;Z<r.destroy.length;++Z)r.destroy[Z](b);if(b.elm=d.elm,O){for(var ct=0;ct<r.create.length;++ct)r.create[ct](At,b);var rt=b.data.hook.insert;if(rt.merged)for(var ot=1;ot<rt.fns.length;ot++)rt.fns[ot]()}else Nt(b);b=b.parent}u(Q)?W([p],0,0):u(p.tag)&&ft(p)}}return et(d,y,x),d.elm}}var Zi={create:_e,update:_e,destroy:function(e){_e(e,At)}};function _e(t,e){(t.data.directives||e.data.directives)&&Gi(t,e)}function Gi(t,e){var n=t===At,r=e===At,o=Br(t.data.directives,t.context),i=Br(e.data.directives,e.context),a=[],s=[],l,v,c;for(l in i)v=o[l],c=i[l],v?(c.oldValue=v.value,c.oldArg=v.arg,zt(c,"update",e,t),c.def&&c.def.componentUpdated&&s.push(c)):(zt(c,"bind",e,t),c.def&&c.def.inserted&&a.push(c));if(a.length){var m=function(){for(var _=0;_<a.length;_++)zt(a[_],"inserted",e,t)};n?at(e,"insert",m):m()}if(s.length&&at(e,"postpatch",function(){for(var _=0;_<s.length;_++)zt(s[_],"componentUpdated",e,t)}),!n)for(l in o)i[l]||zt(o[l],"unbind",t,t,r)}var Pi=Object.create(null);function Br(t,e){var n=Object.create(null);if(!t)return n;var r,o;for(r=0;r<t.length;r++)o=t[r],o.modifiers||(o.modifiers=Pi),n[ji(o)]=o,o.def=Un(e.$options,"directives",o.name,!0);return n}function ji(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function zt(t,e,n,r,o){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,o)}catch(a){Ct(a,n.context,"directive "+t.name+" "+e+" hook")}}var Ri=[Ui,Zi];function Or(t,e){var n=e.componentOptions;if(!(u(n)&&n.Ctor.options.inheritAttrs===!1)&&!(C(t.data.attrs)&&C(e.data.attrs))){var r,o,i,a=e.elm,s=t.data.attrs||{},l=e.data.attrs||{};u(l.__ob__)&&(l=e.data.attrs=M({},l));for(r in l)o=l[r],i=s[r],i!==o&&Nr(a,r,o,e.data.pre);(wt||Bn)&&l.value!==s.value&&Nr(a,"value",l.value);for(r in s)C(l[r])&&(ce(r)?a.removeAttributeNS(fe,Hr(r)):wr(r)||a.removeAttribute(r))}}function Nr(t,e,n,r){r||t.tagName.indexOf("-")>-1?Fr(t,e,n):_i(e)?hn(n)?t.removeAttribute(e):(n=e==="allowfullscreen"&&t.tagName==="EMBED"?"true":e,t.setAttribute(e,n)):wr(e)?t.setAttribute(e,mi(e,n)):ce(e)?hn(n)?t.removeAttributeNS(fe,Hr(e)):t.setAttributeNS(fe,e,n):Fr(t,e,n)}function Fr(t,e,n){if(hn(n))t.removeAttribute(e);else{if(wt&&!Ht&&t.tagName==="TEXTAREA"&&e==="placeholder"&&n!==""&&!t.__ieph){var r=function(o){o.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Ji={create:Or,update:Or};function kr(t,e){var n=e.elm,r=e.data,o=t.data;if(!(C(r.staticClass)&&C(r.class)&&(C(o)||C(o.staticClass)&&C(o.class)))){var i=hi(e),a=n._transitionClasses;u(a)&&(i=ue(i,de(a))),i!==n._prevClass&&(n.setAttribute("class",i),n._prevClass=i)}}var zi={create:kr,update:kr},he="__r",ge="__c";function qi(t){if(u(t[he])){var e=wt?"change":"input";t[e]=[].concat(t[he],t[e]||[]),delete t[he]}u(t[ge])&&(t.change=[].concat(t[ge],t.change||[]),delete t[ge])}var qt;function Wi(t,e,n){var r=qt;return function o(){var i=e.apply(null,arguments);i!==null&&Dr(t,o,n,r)}}var Yi=In&&!(Ue&&Number(Ue[1])<=53);function Ki(t,e,n,r){if(Yi){var o=yr,i=e;e=i._wrapper=function(a){if(a.target===a.currentTarget||a.timeStamp>=o||a.timeStamp<=0||a.target.ownerDocument!==document)return i.apply(this,arguments)}}qt.addEventListener(t,e,$e?{capture:n,passive:r}:n)}function Dr(t,e,n,r){(r||qt).removeEventListener(t,e._wrapper||e,n)}function Vr(t,e){if(!(C(t.data.on)&&C(e.data.on))){var n=e.data.on||{},r=t.data.on||{};qt=e.elm,qi(n),tr(n,r,Ki,Dr,Wi,e.context),qt=void 0}}var ta={create:Vr,update:Vr},Cn;function Lr(t,e){if(!(C(t.data.domProps)&&C(e.data.domProps))){var n,r,o=e.elm,i=t.data.domProps||{},a=e.data.domProps||{};u(a.__ob__)&&(a=e.data.domProps=M({},a));for(n in i)n in a||(o[n]="");for(n in a){if(r=a[n],n==="textContent"||n==="innerHTML"){if(e.children&&(e.children.length=0),r===i[n])continue;o.childNodes.length===1&&o.removeChild(o.childNodes[0])}if(n==="value"&&o.tagName!=="PROGRESS"){o._value=r;var s=C(r)?"":String(r);na(o,s)&&(o.value=s)}else if(n==="innerHTML"&&ve(o.tagName)&&C(o.innerHTML)){Cn=Cn||document.createElement("div"),Cn.innerHTML="<svg>"+r+"</svg>";for(var l=Cn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;l.firstChild;)o.appendChild(l.firstChild)}else if(r!==i[n])try{o[n]=r}catch{}}}}function na(t,e){return!t.composing&&(t.tagName==="OPTION"||ea(t,e)||ra(t,e))}function ea(t,e){var n=!0;try{n=document.activeElement!==t}catch{}return n&&t.value!==e}function ra(t,e){var n=t.value,r=t._vModifiers;if(u(r)){if(r.number)return Lt(n)!==Lt(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var oa={create:Lr,update:Lr},ia=ut(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(o){if(o){var i=o.split(r);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e});function Ce(t){var e=Ur(t.style);return t.staticStyle?M(t.staticStyle,e):e}function Ur(t){return Array.isArray(t)?Ne(t):typeof t=="string"?ia(t):t}function aa(t,e){var n={},r;if(e)for(var o=t;o.componentInstance;)o=o.componentInstance._vnode,o&&o.data&&(r=Ce(o.data))&&M(n,r);(r=Ce(t.data))&&M(n,r);for(var i=t;i=i.parent;)i.data&&(r=Ce(i.data))&&M(n,r);return n}var sa=/^--/,$r=/\s*!important$/,Xr=function(t,e,n){if(sa.test(e))t.style.setProperty(e,n);else if($r.test(n))t.style.setProperty(Ut(e),n.replace($r,""),"important");else{var r=la(e);if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)t.style[r]=n[o];else t.style[r]=n}},Ir=["Webkit","Moz","ms"],yn,la=ut(function(t){if(yn=yn||document.createElement("div").style,t=dt(t),t!=="filter"&&t in yn)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ir.length;n++){var r=Ir[n]+e;if(r in yn)return r}});function Zr(t,e){var n=e.data,r=t.data;if(!(C(n.staticStyle)&&C(n.style)&&C(r.staticStyle)&&C(r.style))){var o,i,a=e.elm,s=r.staticStyle,l=r.normalizedStyle||r.style||{},v=s||l,c=Ur(e.data.style)||{};e.data.normalizedStyle=u(c.__ob__)?M({},c):c;var m=aa(e,!0);for(i in v)C(m[i])&&Xr(a,i,"");for(i in m)o=m[i],o!==v[i]&&Xr(a,i,o??"")}}var pa={create:Zr,update:Zr},Gr=/\s+/;function Pr(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(Gr).forEach(function(r){return t.classList.add(r)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function jr(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(Gr).forEach(function(o){return t.classList.remove(o)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Rr(t){if(!!t){if(typeof t=="object"){var e={};return t.css!==!1&&M(e,Jr(t.name||"v")),M(e,t),e}else if(typeof t=="string")return Jr(t)}}var Jr=ut(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),zr=X&&!Ht,Ft="transition",ye="animation",An="transition",Tn="transitionend",Ae="animation",qr="animationend";zr&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(An="WebkitTransition",Tn="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(Ae="WebkitAnimation",qr="webkitAnimationEnd"));var Wr=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Yr(t){Wr(function(){Wr(t)})}function xt(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Pr(t,e))}function nt(t,e){t._transitionClasses&&K(t._transitionClasses,e),jr(t,e)}function Kr(t,e,n){var r=to(t,e),o=r.type,i=r.timeout,a=r.propCount;if(!o)return n();var s=o===Ft?Tn:qr,l=0,v=function(){t.removeEventListener(s,c),n()},c=function(m){m.target===t&&++l>=a&&v()};setTimeout(function(){l<a&&v()},i+1),t.addEventListener(s,c)}var fa=/\b(transform|all)(,|$)/;function to(t,e){var n=window.getComputedStyle(t),r=(n[An+"Delay"]||"").split(", "),o=(n[An+"Duration"]||"").split(", "),i=no(r,o),a=(n[Ae+"Delay"]||"").split(", "),s=(n[Ae+"Duration"]||"").split(", "),l=no(a,s),v,c=0,m=0;e===Ft?i>0&&(v=Ft,c=i,m=o.length):e===ye?l>0&&(v=ye,c=l,m=s.length):(c=Math.max(i,l),v=c>0?i>l?Ft:ye:null,m=v?v===Ft?o.length:s.length:0);var _=v===Ft&&fa.test(n[An+"Property"]);return{type:v,timeout:c,propCount:m,hasTransform:_}}function no(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(n,r){return eo(n)+eo(t[r])}))}function eo(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Te(t,e){var n=t.elm;u(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Rr(t.data.transition);if(!C(r)&&!(u(n._enterCb)||n.nodeType!==1)){for(var o=r.css,i=r.type,a=r.enterClass,s=r.enterToClass,l=r.enterActiveClass,v=r.appearClass,c=r.appearToClass,m=r.appearActiveClass,_=r.beforeEnter,T=r.enter,w=r.afterEnter,H=r.enterCancelled,lt=r.beforeAppear,G=r.appear,U=r.afterAppear,pt=r.appearCancelled,Qt=r.duration,ft=yt,W=yt.$vnode;W&&W.parent;)ft=W.context,W=W.parent;var P=!ft._isMounted||!t.isRootInsert;if(!(P&&!G&&G!=="")){var kt=P&&v?v:a,Qn=P&&m?m:l,Wt=P&&c?c:s,Y=P&&lt||_,et=P&&typeof G=="function"?G:T,bn=P&&U||w,Yt=P&&pt||H,bt=Lt(F(Qt)?Qt.enter:Qt),Dt=o!==!1&&!Ht,f=xe(et),p=n._enterCb=tn(function(){Dt&&(nt(n,Wt),nt(n,Qn)),p.cancelled?(Dt&&nt(n,kt),Yt&&Yt(n)):bn&&bn(n),n._enterCb=null});t.data.show||at(t,"insert",function(){var d=n.parentNode,h=d&&d._pending&&d._pending[t.key];h&&h.tag===t.tag&&h.elm._leaveCb&&h.elm._leaveCb(),et&&et(n,p)}),Y&&Y(n),Dt&&(xt(n,kt),xt(n,Qn),Yr(function(){nt(n,kt),p.cancelled||(xt(n,Wt),f||(oo(bt)?setTimeout(p,bt):Kr(n,i,p)))})),t.data.show&&(e&&e(),et&&et(n,p)),!Dt&&!f&&p()}}}function ro(t,e){var n=t.elm;u(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Rr(t.data.transition);if(C(r)||n.nodeType!==1)return e();if(u(n._leaveCb))return;var o=r.css,i=r.type,a=r.leaveClass,s=r.leaveToClass,l=r.leaveActiveClass,v=r.beforeLeave,c=r.leave,m=r.afterLeave,_=r.leaveCancelled,T=r.delayLeave,w=r.duration,H=o!==!1&&!Ht,lt=xe(c),G=Lt(F(w)?w.leave:w),U=n._leaveCb=tn(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),H&&(nt(n,s),nt(n,l)),U.cancelled?(H&&nt(n,a),_&&_(n)):(e(),m&&m(n)),n._leaveCb=null});T?T(pt):pt();function pt(){U.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),v&&v(n),H&&(xt(n,a),xt(n,l),Yr(function(){nt(n,a),U.cancelled||(xt(n,s),lt||(oo(G)?setTimeout(U,G):Kr(n,i,U)))})),c&&c(n,U),!H&&!lt&&U())}}function oo(t){return typeof t=="number"&&!isNaN(t)}function xe(t){if(C(t))return!1;var e=t.fns;return u(e)?xe(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function io(t,e){e.data.show!==!0&&Te(e)}var ca=X?{create:io,activate:io,remove:function(e,n){e.data.show!==!0?ro(e,n):n()}}:{},ua=[Ji,zi,ta,oa,pa,ca],da=ua.concat(Ri),va=Ii({nodeOps:Li,modules:da});Ht&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Qe(t,"input")});var ao={inserted:function(e,n,r,o){r.tag==="select"?(o.elm&&!o.elm._vOptions?at(r,"postpatch",function(){ao.componentUpdated(e,n,r)}):so(e,n,r.context),e._vOptions=[].map.call(e.options,xn)):(r.tag==="textarea"||me(e.type))&&(e._vModifiers=n.modifiers,n.modifiers.lazy||(e.addEventListener("compositionstart",ma),e.addEventListener("compositionend",fo),e.addEventListener("change",fo),Ht&&(e.vmodel=!0)))},componentUpdated:function(e,n,r){if(r.tag==="select"){so(e,n,r.context);var o=e._vOptions,i=e._vOptions=[].map.call(e.options,xn);if(i.some(function(s,l){return!vt(s,o[l])})){var a=e.multiple?n.value.some(function(s){return po(s,i)}):n.value!==n.oldValue&&po(n.value,i);a&&Qe(e,"change")}}}};function so(t,e,n){lo(t,e,n),(wt||Bn)&&setTimeout(function(){lo(t,e,n)},0)}function lo(t,e,n){var r=e.value,o=t.multiple;if(!(o&&!Array.isArray(r))){for(var i,a,s=0,l=t.options.length;s<l;s++)if(a=t.options[s],o)i=ke(r,xn(a))>-1,a.selected!==i&&(a.selected=i);else if(vt(xn(a),r)){t.selectedIndex!==s&&(t.selectedIndex=s);return}o||(t.selectedIndex=-1)}}function po(t,e){return e.every(function(n){return!vt(n,t)})}function xn(t){return"_value"in t?t._value:t.value}function ma(t){t.target.composing=!0}function fo(t){!t.target.composing||(t.target.composing=!1,Qe(t.target,"input"))}function Qe(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function be(t){return t.componentInstance&&(!t.data||!t.data.transition)?be(t.componentInstance._vnode):t}var _a={bind:function(e,n,r){var o=n.value;r=be(r);var i=r.data&&r.data.transition,a=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;o&&i?(r.data.show=!0,Te(r,function(){e.style.display=a})):e.style.display=o?a:"none"},update:function(e,n,r){var o=n.value,i=n.oldValue;if(!o!=!i){r=be(r);var a=r.data&&r.data.transition;a?(r.data.show=!0,o?Te(r,function(){e.style.display=e.__vOriginalDisplay}):ro(r,function(){e.style.display="none"})):e.style.display=o?e.__vOriginalDisplay:"none"}},unbind:function(e,n,r,o,i){i||(e.style.display=e.__vOriginalDisplay)}},ha={model:ao,show:_a},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ee(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Ee(mr(e.children)):t}function uo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var o=n._parentListeners;for(var i in o)e[dt(i)]=o[i];return e}function vo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function ga(t){for(;t=t.parent;)if(t.data.transition)return!0}function Ca(t,e){return e.key===t.key&&e.tag===t.tag}var ya=function(t){return t.tag||jt(t)},Aa=function(t){return t.name==="show"},Ta={name:"transition",props:co,abstract:!0,render:function(e){var n=this,r=this.$slots.default;if(!!r&&(r=r.filter(ya),!!r.length)){var o=this.mode,i=r[0];if(ga(this.$vnode))return i;var a=Ee(i);if(!a)return i;if(this._leaving)return vo(e,i);var s="__transition-"+this._uid+"-";a.key=a.key==null?a.isComment?s+"comment":s+a.tag:Vt(a.key)?String(a.key).indexOf(s)===0?a.key:s+a.key:a.key;var l=(a.data||(a.data={})).transition=uo(this),v=this._vnode,c=Ee(v);if(a.data.directives&&a.data.directives.some(Aa)&&(a.data.show=!0),c&&c.data&&!Ca(a,c)&&!jt(c)&&!(c.componentInstance&&c.componentInstance._vnode.isComment)){var m=c.data.transition=M({},l);if(o==="out-in")return this._leaving=!0,at(m,"afterLeave",function(){n._leaving=!1,n.$forceUpdate()}),vo(e,i);if(o==="in-out"){if(jt(a))return v;var _,T=function(){_()};at(l,"afterEnter",T),at(l,"enterCancelled",T),at(m,"delayLeave",function(w){_=w})}}return i}}},mo=M({tag:String,moveClass:String},co);delete mo.mode;var xa={props:mo,beforeMount:function(){var e=this,n=this._update;this._update=function(r,o){var i=hr(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),n.call(e,r,o)}},render:function(e){for(var n=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),o=this.prevChildren=this.children,i=this.$slots.default||[],a=this.children=[],s=uo(this),l=0;l<i.length;l++){var v=i[l];if(v.tag){if(v.key!=null&&String(v.key).indexOf("__vlist")!==0)a.push(v),r[v.key]=v,(v.data||(v.data={})).transition=s;else if(!1)var c,m}}if(o){for(var _=[],T=[],w=0;w<o.length;w++){var H=o[w];H.data.transition=s,H.data.pos=H.elm.getBoundingClientRect(),r[H.key]?_.push(H):T.push(H)}this.kept=e(n,null,_),this.removed=T}return e(n,null,a)},updated:function(){var e=this.prevChildren,n=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,n)||(e.forEach(Qa),e.forEach(ba),e.forEach(Ea),this._reflow=document.body.offsetHeight,e.forEach(function(r){if(r.data.moved){var o=r.elm,i=o.style;xt(o,n),i.transform=i.WebkitTransform=i.transitionDuration="",o.addEventListener(Tn,o._moveCb=function a(s){s&&s.target!==o||(!s||/transform$/.test(s.propertyName))&&(o.removeEventListener(Tn,a),o._moveCb=null,nt(o,n))})}}))},methods:{hasMove:function(e,n){if(!zr)return!1;if(this._hasMove)return this._hasMove;var r=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(i){jr(r,i)}),Pr(r,n),r.style.display="none",this.$el.appendChild(r);var o=to(r);return this.$el.removeChild(r),this._hasMove=o.hasTransform}}};function Qa(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function ba(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ea(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,o=e.top-n.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+o+"px)",i.transitionDuration="0s"}}var wa={Transition:Ta,TransitionGroup:xa};B.config.mustUseProp=di;B.config.isReservedTag=Sr;B.config.isReservedAttr=ci;B.config.getTagNamespace=xi;B.config.isUnknownElement=Qi;M(B.options.directives,ha);M(B.options.components,wa);B.prototype.__patch__=X?va:V;B.prototype.$mount=function(t,e){return t=t&&X?bi(t):void 0,F1(this,t,e)};X&&setTimeout(function(){D.devtools&&on&&on.emit("init",B)},0);var we=B;var Ha={name:"Loader"},_o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._m(0)},Ma=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"loader"}),t._v(" "),n("span",[t._v("loading..")])])}];_o._withStripped=!0;var Sa=function(t){!t||t("data-v-2afd6a14_0",{source:`
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
`]},media:void 0})},Ba="data-v-2afd6a14",Oa=void 0,Na=!1;function Fa(t,e,n,r,o,i,a,s,l,v){let c=(typeof n=="function"?n.options:n)||{};c.__file=`<template>
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
`,c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),c._scopeId=r;{let m;if(e&&(m=a?function(_){e.call(this,v(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,s(_))}),m!==void 0)if(c.functional){let _=c.render;c.render=function(w,H){return m.call(H),_(w,H)}}else{let _=c.beforeCreate;c.beforeCreate=_?[].concat(_,m):[m]}}return c}function He(){let t=He.styles||(He.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=e?o.media||"default":r,a=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=o.source,l=a.ids.length;if(a.ids.push(r),e&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){let v=document.head||document.getElementsByTagName("head")[0],c=a.element=document.createElement("style");c.type="text/css",o.media&&c.setAttribute("media",o.media),e&&(c.setAttribute("data-group",i),c.setAttribute("data-next-index","0")),v.appendChild(c)}if(e&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(s),c=a.element.childNodes;c[l]&&a.element.removeChild(c[l]),c.length?a.element.insertBefore(v,c[l]):a.element.appendChild(v)}}}}var ka=Fa({render:_o,staticRenderFns:Ma},Sa,Ha,Ba,Na,Oa,!1,He,void 0,void 0),ho=ka;var Da={name:"Equation"},go=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"50",viewBox:"0 -750 13892.7 1000","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("path",{attrs:{id:"MJX-52-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-N-2208",d:"M84 250Q84 372 166 450T360 539Q361 539 377 539T419 540T469 540H568Q583 532 583 520Q583 511 570 501L466 500Q355 499 329 494Q280 482 242 458T183 409T147 354T129 306T124 272V270H568Q583 262 583 250T568 230H124V228Q124 207 134 177T167 112T231 48T328 7Q355 1 466 0H570Q583 -10 583 -20Q583 -32 568 -40H471Q464 -40 446 -40T417 -41Q262 -41 172 45Q84 127 84 250Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-D-5A",d:"M39 -1Q29 9 29 12Q29 23 60 77T219 337L410 648H364Q261 648 210 628Q168 612 142 588T109 545T97 509T88 490Q85 489 80 489Q72 489 61 503L70 588Q72 607 75 628T79 662T81 675Q84 677 88 681Q90 683 341 683H592Q604 673 604 666Q604 662 412 348L221 37Q221 35 301 35Q406 35 446 48Q504 68 543 111T597 212Q602 239 617 239Q624 239 629 234T635 223Q635 215 621 113T604 8L597 1Q595 -1 317 -1H39ZM148 637L166 648H112V632Q111 629 110 622T108 612Q108 608 110 608T116 612T129 623T148 637ZM552 646Q552 648 504 648Q452 648 450 643Q448 639 266 343T77 37Q77 35 128 35H179L366 339L552 646ZM572 35Q581 89 581 97L561 77Q542 59 526 48L508 37L539 35H572Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-N-2264",d:"M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-I-6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-I-64",d:"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-52-TEX-N-3E",d:"M84 520Q84 528 88 533T96 539L99 540Q106 540 253 471T544 334L687 265Q694 260 694 250T687 235Q685 233 395 96L107 -40H101Q83 -38 83 -20Q83 -19 83 -17Q82 -10 98 -1Q117 9 248 71Q326 108 378 132L626 250L378 368Q90 504 86 509Q84 513 84 520Z"}})]),t._v(" "),n("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[n("g",{attrs:{"data-mml-node":"math"}},[n("g",{attrs:{"data-mml-node":"mtable"}},[n("g",{attrs:{"data-mml-node":"mtr"}},[n("g",{attrs:{"data-mml-node":"mtd"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-61"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(529, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2C"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(973.7, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1402.7, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2C"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(1847.3, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-63"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(2558.1, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2208"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(3502.9, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-D-5A"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(4169.9, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2C"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mstyle",transform:"translate(4614.6, 0)"}},[n("g",{attrs:{"data-mml-node":"mspace"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(5614.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-63"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(6325.3, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-2264"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(7381.1, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-30"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mstyle",transform:"translate(7881.1, 0)"}},[n("g",{attrs:{"data-mml-node":"mspace"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(8881.1, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-61"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(9410.1, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-6E"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(10010.1, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-64"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mstyle",transform:"translate(10530.1, 0)"}},[n("g",{attrs:{"data-mml-node":"mspace"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(11530.1, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-I-61"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(12336.9, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-3E"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(13392.7, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-52-TEX-N-30"}})])])])])])])]),t._v(" "),n("br"),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"50",viewBox:"0 -1458 11066 2416","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("path",{attrs:{id:"MJX-87-TEX-I-78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-SO-221A",d:"M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),t._v(" "),n("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[n("g",{attrs:{"data-mml-node":"math"}},[n("g",{attrs:{"data-mml-node":"mtable"}},[n("g",{attrs:{"data-mml-node":"mtr",transform:"translate(0, -262)"}},[n("g",{attrs:{"data-mml-node":"mtd"}},[n("g",{attrs:{"data-mml-node":"msub"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-31"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(975.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2C"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"msub",transform:"translate(1420.2, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(2673.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-3D"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3729.3, 0)"}},[n("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 787.5)"}},[n("g",{attrs:{"data-mml-node":"mo"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(778, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1429.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-B1"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"msqrt",transform:"translate(2429.4, 0)"}},[n("g",{attrs:{transform:"translate(1000, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(429, 0)"}},[n("g",{attrs:{"data-mml-node":"mo"}},[n("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v(`
                            \xB2
                          `)])])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1005, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(2005.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-34"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(2505.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(3034.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-63"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(0, 22.5)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-SO-221A"}})]),t._v(" "),n("rect",{attrs:{width:"3467.2",height:"60",x:"1000",y:"812.5"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mrow",transform:"translate(3153.8, -686)"}},[n("g",{attrs:{"data-mml-node":"mn"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(500, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})])]),t._v(" "),n("rect",{attrs:{width:"7096.7",height:"60",x:"120",y:"220"}})])])])])])])])])},Va=[];go._withStripped=!0;var La=void 0,Ua=void 0,$a=void 0,Xa=!1;function Ia(t,e,n,r,o,i,a,s,l,v){let c=(typeof n=="function"?n.options:n)||{};return c.__file=`<template>
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
`,c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),c._scopeId=r,c}var Za=Ia({render:go,staticRenderFns:Va},La,Da,Ua,Xa,$a,!1,void 0,void 0,void 0),Co=Za;var Ga={name:"App",components:{Loader:ho,Equation:Co},data(){return{params:[0,0,0],isDeployed:!1,deploying:!1,showHint:!1,beingSubmited:!1,atPage:0}},methods:{next(){this.atPage++},async deploy(){this.deploying=!0,setTimeout(()=>{this.isDeployed=!0,this.deploying=!1},3e3)}}},yo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"header"},[n("svg",{staticClass:"logo",attrs:{viewBox:"0 0 648 121",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z",fill:"url(#paint0_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z",fill:"url(#paint1_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z",fill:"url(#paint2_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z",fill:"url(#paint3_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z",fill:"url(#paint4_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z",fill:"url(#paint5_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z",fill:"url(#paint6_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z",fill:"url(#paint7_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z",fill:"url(#paint8_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z",fill:"url(#paint9_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z",fill:"url(#paint10_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M84.6285 34.026H92.6247V26.027H84.6285V34.026Z",fill:"url(#paint11_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z",fill:"url(#paint12_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M108.791 14.4016H123.17V0H108.791V14.4016Z",fill:"url(#paint13_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z",fill:"url(#paint14_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M97.811 33.2278H104.194V26.8426H97.811V33.2278Z",fill:"url(#paint15_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M110.803 27.953H120.395V18.3578H110.803V27.953Z",fill:"url(#paint16_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M106.623 38.0341H110.942V33.7137H106.623V38.0341Z",fill:"url(#paint17_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M114.792 42.4067H121.175V36.0388H114.792V42.4067Z",fill:"url(#paint18_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z",fill:"url(#paint19_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z",fill:"url(#paint20_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z",fill:"url(#paint21_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z",fill:"url(#paint22_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z",fill:"url(#paint23_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z",fill:"url(#paint24_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z",fill:"url(#paint25_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z",fill:"url(#paint26_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z",fill:"url(#paint27_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z",fill:"url(#paint28_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z",fill:"url(#paint29_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z",fill:"url(#paint30_linear_3_40)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_3_40",x1:"16.2335",y1:"78.5655",x2:"90.5021",y2:"14.0713",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_3_40",x1:"33.4419",y1:"98.3816",x2:"107.71",y2:"33.8874",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_3_40",x1:"51.0435",y1:"118.651",x2:"125.312",y2:"54.1567",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_3_40",x1:"62.0301",y1:"131.303",x2:"136.299",y2:"66.8084",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint4_linear_3_40",x1:"46.0063",y1:"112.85",x2:"120.275",y2:"48.3561",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint5_linear_3_40",x1:"22.5737",y1:"85.8663",x2:"96.8421",y2:"21.3722",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint6_linear_3_40",x1:"5.30527",y1:"65.9808",x2:"79.5737",y2:"1.48666",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint7_linear_3_40",x1:"39.9594",y1:"105.887",x2:"114.228",y2:"41.3928",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint8_linear_3_40",x1:"14.3736",y1:"76.4235",x2:"88.642",y2:"11.9294",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint9_linear_3_40",x1:"30.2892",y1:"94.7512",x2:"104.558",y2:"30.2571",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint10_linear_3_40",x1:"21.9139",y1:"85.1065",x2:"96.1823",y2:"20.6124",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint11_linear_3_40",x1:"23.3495",y1:"86.7596",x2:"97.618",y2:"22.2656",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint12_linear_3_40",x1:"11.5745",y1:"73.2003",x2:"85.8427",y2:"8.70587",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint13_linear_3_40",x1:"23.8107",y1:"87.2911",x2:"98.0794",y2:"22.7968",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint14_linear_3_40",x1:"23.6893",y1:"87.1514",x2:"97.958",y2:"22.657",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint15_linear_3_40",x1:"28.6723",y1:"92.8895",x2:"102.941",y2:"28.3951",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint16_linear_3_40",x1:"31.5413",y1:"96.193",x2:"105.81",y2:"31.6988",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint17_linear_3_40",x1:"34.9074",y1:"100.07",x2:"109.176",y2:"35.5752",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint18_linear_3_40",x1:"40.5234",y1:"106.536",x2:"114.792",y2:"42.0425",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint19_linear_3_40",x1:"17.9841",y1:"80.5813",x2:"92.2529",y2:"16.0874",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint20_linear_3_40",x1:"31.505",y1:"96.1513",x2:"105.774",y2:"31.6572",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint21_linear_3_40",x1:"39.6018",y1:"105.475",x2:"113.87",y2:"40.9808",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint22_linear_3_40",x1:"156.752",y1:"71.2438",x2:"644.928",y2:"71.2438",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint23_linear_3_40",x1:"156.752",y1:"80.3112",x2:"644.928",y2:"80.3112",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint24_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint25_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint26_linear_3_40",x1:"156.752",y1:"89.2923",x2:"644.928",y2:"89.2923",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint27_linear_3_40",x1:"156.752",y1:"71.3085",x2:"644.928",y2:"71.3085",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint28_linear_3_40",x1:"156.752",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint29_linear_3_40",x1:"156.752",y1:"71.287",x2:"644.928",y2:"71.287",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint30_linear_3_40",x1:"156.753",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)]),t._v(" "),n("svg",{staticClass:"github",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])]),t._v(" "),n("h1",{staticClass:"title"},[t._v("Mina Secret Exchange")]),t._v(" "),n("h3",{staticClass:"sub"},[t._v(`
    Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) for the Mina
    Snapp Bootcamp 2021.
  `)]),t._v(" "),n("p",{staticClass:"sub-desc"},[t._v(`
    The secret exchange allows users to buy imaginary tokens (tokens aren't
    implemented, only simulated) after successfully providing the solution to
    a series of math problems while keeping the solution itself secure and
    private, not exposing it to the network. An exchange to which only
    math-nerds have access!
  `)]),t._v(" "),n("div",{staticClass:"content-wrapper"},[t.atPage==0?n("div",[n("Loader",{style:t.deploying?"visibility: visible;":"visibility: hidden;"}),t._v(" "),n("h2",{staticStyle:{border:"2px red dotted","margin-left":"40%","margin-right":"40%"},style:t.isDeployed?"visibility: visible;":"visibility: hidden;"},[n("h5",{staticStyle:{margin:"5px"}},[t._v("There you go - here is your equation:")]),t._v(`
        `+t._s(t.params[0]+"x\xB2 + "+t.params[1]+"x - "+t.params[2]+" = 0")+`
      `)]),t._v(" "),t.isDeployed?t._e():n("button",{staticClass:"deploy-btn",on:{click:function(r){return t.deploy()}}},[n("span",[t._v("Deploy the contract")])]),t._v(" "),t.isDeployed?n("button",{staticClass:"continue-btn",on:{click:function(r){return t.next()}}},[n("span",[t._v("Continue")])]):t._e()],1):t._e(),t._v(" "),t.atPage==1?n("div",[n("h2",{staticStyle:{border:"2px red dotted","margin-left":"40%","margin-right":"40%","margin-top":"25px"}},[n("h5",{staticStyle:{"margin-top":"5px"}},[t._v("Here is your equation:")]),t._v(`
        `+t._s(t.params[0]+"x\xB2 + "+t.params[1]+"x - "+t.params[2]+" = 0")+`
      `)]),t._v(" "),n("h5",{staticStyle:{"margin-top":"10px"}},[t._v(`
        Please provide one possible solution to this equation to proceed
      `)]),t._v(" "),n("Loader",{style:t.beingSubmited?"visibility: visible;":"visibility: hidden;"}),t._v(" "),n("div",{staticClass:"content",staticStyle:{display:"flex","margin-left":"30%","margin-right":"30%"}},[n("div",{staticClass:"left",staticStyle:{width:"50%"}},[n("div",{staticClass:"hint",style:t.showHint?"visibility: visible;":"visibility: hidden;"},[n("Equation")],1),t._v(" "),t.showHint?t._e():n("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"12px"},on:{click:function(r){t.showHint=!0}}},[n("span",[t._v("Show Hint")])]),t._v(" "),t.showHint?n("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"12px"},on:{click:function(r){t.showHint=!1}}},[n("span",[t._v("Hide Hint")])]):t._e()]),t._v(" "),n("div",{staticClass:"right",staticStyle:{width:"50%"}},[n("h3",[t._v("Possible solution")]),t._v(" "),n("input",{staticClass:"submission",attrs:{type:"text"}}),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"submit-btn",staticStyle:{"margin-top":"30px"},on:{click:function(r){t.beingSubmited=!0}}},[n("span",[t._v("Submit")])])]),t._v(" "),n("br")])],1):t._e()])])},Pa=[];yo._withStripped=!0;var ja=function(t){!t||t("data-v-145a90b6_0",{source:`
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
`,map:{version:3,sources:["src/App.vue"],names:[],mappings:";AAmrBA,qHAAA;AAEA;EACA,sCAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;;EAEA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;;EAEA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA;;yCAEA;AACA;AAEA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AACA;AAEA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,sCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AACA",file:"App.vue",sourcesContent:[`<template>
  <div class="wrapper">
    <div class="header">
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="github"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
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
          {{ \`\${params[0]}x\xB2 + \${params[1]}x - \${params[2]} = 0\` }}
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
          {{ \`\${params[0]}x\xB2 + \${params[1]}x - \${params[2]} = 0\` }}
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
              style="margin-top: 30px"
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
/* import Plot from "./components/Plot.vue";
 */ import Equation from "./components/Equation.vue";

export default {
  name: "App",
  components: {
    Loader,
    /*     Plot,
     */ Equation,
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
    next() {
      this.atPage++;
    },
    async deploy() {
      this.deploying = true;
      setTimeout(() => {
        this.isDeployed = true;
        this.deploying = false;
      }, 3000);
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
`]},media:void 0})},Ra=void 0,Ja=void 0,za=!1;function qa(t,e,n,r,o,i,a,s,l,v){let c=(typeof n=="function"?n.options:n)||{};c.__file=`<template>
  <div class="wrapper">
    <div class="header">
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="github"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
      </svg>
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
          {{ \`\${params[0]}x\xB2 + \${params[1]}x - \${params[2]} = 0\` }}
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
          {{ \`\${params[0]}x\xB2 + \${params[1]}x - \${params[2]} = 0\` }}
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
              style="margin-top: 30px"
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
/* import Plot from "./components/Plot.vue";
 */ import Equation from "./components/Equation.vue";

export default {
  name: "App",
  components: {
    Loader,
    /*     Plot,
     */ Equation,
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
    next() {
      this.atPage++;
    },
    async deploy() {
      this.deploying = true;
      setTimeout(() => {
        this.isDeployed = true;
        this.deploying = false;
      }, 3000);
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
`,c.render||(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),c._scopeId=r;{let m;if(e&&(m=a?function(_){e.call(this,v(_,this.$root.$options.shadowRoot))}:function(_){e.call(this,s(_))}),m!==void 0)if(c.functional){let _=c.render;c.render=function(w,H){return m.call(H),_(w,H)}}else{let _=c.beforeCreate;c.beforeCreate=_?[].concat(_,m):[m]}}return c}function Me(){let t=Me.styles||(Me.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=e?o.media||"default":r,a=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){let s=o.source,l=a.ids.length;if(a.ids.push(r),e&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){let v=document.head||document.getElementsByTagName("head")[0],c=a.element=document.createElement("style");c.type="text/css",o.media&&c.setAttribute("media",o.media),e&&(c.setAttribute("data-group",i),c.setAttribute("data-next-index","0")),v.appendChild(c)}if(e&&(l=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",l+1)),a.element.styleSheet)a.parts.push(s),a.element.styleSheet.cssText=a.parts.filter(Boolean).join(`
`);else{let v=document.createTextNode(s),c=a.element.childNodes;c[l]&&a.element.removeChild(c[l]),c.length?a.element.insertBefore(v,c[l]):a.element.appendChild(v)}}}}var Wa=qa({render:yo,staticRenderFns:Pa},ja,Ga,Ra,za,Ja,!1,Me,void 0,void 0),Ao=Wa;we.config.productionTip=!1;new we({render:t=>t(Ao)}).$mount("#app");
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
