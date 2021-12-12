var J=Object.freeze({});function g(t){return t==null}function u(t){return t!=null}function H(t){return t===!0}function mi(t){return t===!1}function ct(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function I(t){return t!==null&&typeof t=="object"}var cn=Object.prototype.toString;function fn(t){return cn.call(t).slice(8,-1)}function U(t){return cn.call(t)==="[object Object]"}function Je(t){return cn.call(t)==="[object RegExp]"}function We(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function Un(t){return u(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function Ci(t){return t==null?"":Array.isArray(t)||U(t)&&t.toString===cn?JSON.stringify(t,null,2):String(t)}function Xt(t){var e=parseFloat(t);return isNaN(e)?t:e}function Z(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(i){return n[i.toLowerCase()]}:function(i){return n[i]}}var gi=Z("slot,component",!0),Ke=Z("key,ref,slot,slot-scope,is");function rt(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var yi=Object.prototype.hasOwnProperty;function D(t,e){return yi.call(t,e)}function Ct(t){var e=Object.create(null);return function(r){var o=e[r];return o||(e[r]=t(r))}}var xi=/-(\w)/g,gt=Ct(function(t){return t.replace(xi,function(e,n){return n?n.toUpperCase():""})}),tr=Ct(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),bi=/\B([A-Z])/g,yt=Ct(function(t){return t.replace(bi,"-$1").toLowerCase()});function wi(t,e){function n(r){var o=arguments.length;return o?o>1?t.apply(e,arguments):t.call(e,r):t.call(e)}return n._length=t.length,n}function Ei(t,e){return t.bind(e)}var Si=Function.prototype.bind?Ei:wi;function Vn(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function O(t,e){for(var n in e)t[n]=e[n];return t}function nr(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function $(t,e,n){}var un=function(t,e,n){return!1},er=function(t){return t};function xt(t,e){if(t===e)return!0;var n=I(t),r=I(e);if(n&&r)try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(l,d){return xt(l,e[d])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(!o&&!i){var s=Object.keys(t),p=Object.keys(e);return s.length===p.length&&s.every(function(l){return xt(t[l],e[l])})}else return!1}catch{return!1}else return!n&&!r?String(t)===String(e):!1}function rr(t,e){for(var n=0;n<t.length;n++)if(xt(t[n],e))return n;return-1}function dn(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var or="data-server-rendered",_n=["component","directive","filter"],ir=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],k={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!0,devtools:!0,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:un,isReservedAttr:un,isUnknownElement:un,getTagNamespace:$,parsePlatformTagName:er,mustUseProp:un,async:!0,_lifecycleHooks:ir},sr=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function ar(t){var e=(t+"").charCodeAt(0);return e===36||e===95}function $t(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Ti=new RegExp("[^"+sr.source+".$_\\d]");function Bi(t){if(!Ti.test(t)){var e=t.split(".");return function(n){for(var r=0;r<e.length;r++){if(!n)return;n=n[e[r]]}return n}}}var Fi="__proto__"in{},V=typeof window!="undefined",Ln=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,pr=Ln&&WXEnvironment.platform.toLowerCase(),Q=V&&window.navigator.userAgent.toLowerCase(),It=Q&&/msie|trident/.test(Q),Qt=Q&&Q.indexOf("msie 9.0")>0,Pn=Q&&Q.indexOf("edge/")>0,I2=Q&&Q.indexOf("android")>0||pr==="android",ki=Q&&/iphone|ipad|ipod|ios/.test(Q)||pr==="ios",Q2=Q&&/chrome\/\d+/.test(Q)&&!Pn,U2=Q&&/phantomjs/.test(Q),lr=Q&&Q.match(/firefox\/(\d+)/),Rn={}.watch,cr=!1;if(V)try{Zn={},Object.defineProperty(Zn,"passive",{get:function(){cr=!0}}),window.addEventListener("test-passive",null,Zn)}catch{}var Zn,hn,vn=function(){return hn===void 0&&(!V&&!Ln&&typeof global!="undefined"?hn=global.process&&global.process.env.VUE_ENV==="server":hn=!1),hn},An=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function bt(t){return typeof t=="function"&&/native code/.test(t.toString())}var mn=typeof Symbol!="undefined"&&bt(Symbol)&&typeof Reflect!="undefined"&&bt(Reflect.ownKeys),zt;typeof Set!="undefined"&&bt(Set)?zt=Set:zt=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(n){return this.set[n]===!0},t.prototype.add=function(n){this.set[n]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var A=$,Gn=$,jn=$,wt=$;Xn=typeof console!="undefined",fr=/(?:^|[-_])(\w)/g,ur=function(t){return t.replace(fr,function(e){return e.toUpperCase()}).replace(/[-_]/g,"")},A=function(t,e){var n=e?jn(e):"";k.warnHandler?k.warnHandler.call(null,t,e,n):Xn&&!k.silent&&console.error("[Vue warn]: "+t+n)},Gn=function(t,e){Xn&&!k.silent&&console.warn("[Vue tip]: "+t+(e?jn(e):""))},wt=function(t,e){if(t.$root===t)return"<Root>";var n=typeof t=="function"&&t.cid!=null?t.options:t._isVue?t.$options||t.constructor.options:t,r=n.name||n._componentTag,o=n.__file;if(!r&&o){var i=o.match(/([^/\\]+)\.vue$/);r=i&&i[1]}return(r?"<"+ur(r)+">":"<Anonymous>")+(o&&e!==!1?" at "+o:"")},dr=function(t,e){for(var n="";e;)e%2==1&&(n+=t),e>1&&(t+=t),e>>=1;return n},jn=function(t){if(t._isVue&&t.$parent){for(var e=[],n=0;t;){if(e.length>0){var r=e[e.length-1];if(r.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[r,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map(function(o,i){return""+(i===0?"---> ":dr(" ",5+i*2))+(Array.isArray(o)?wt(o[0])+"... ("+o[1]+" recursive calls)":wt(o))}).join(`
`)}else return`

(found in `+wt(t)+")"};var Xn,fr,ur,dr,Oi=0,G=function(){this.id=Oi++,this.subs=[]};G.prototype.addSub=function(e){this.subs.push(e)};G.prototype.removeSub=function(e){rt(this.subs,e)};G.prototype.depend=function(){G.target&&G.target.addDep(this)};G.prototype.notify=function(){var e=this.subs.slice();k.async||e.sort(function(o,i){return o.id-i.id});for(var n=0,r=e.length;n<r;n++)e[n].update()};G.target=null;var Cn=[];function qt(t){Cn.push(t),G.target=t}function Yt(){Cn.pop(),G.target=Cn[Cn.length-1]}var L=function(e,n,r,o,i,s,p,l){this.tag=e,this.data=n,this.children=r,this.text=o,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=n&&n.key,this.componentOptions=p,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_r={child:{configurable:!0}};_r.child.get=function(){return this.componentInstance};Object.defineProperties(L.prototype,_r);var Et=function(t){t===void 0&&(t="");var e=new L;return e.text=t,e.isComment=!0,e};function Ut(t){return new L(void 0,void 0,void 0,String(t))}function zn(t){var e=new L(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var hr=Array.prototype,gn=Object.create(hr),Mi=["push","pop","shift","unshift","splice","sort","reverse"];Mi.forEach(function(t){var e=hr[t];$t(gn,t,function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];var i=e.apply(this,r),s=this.__ob__,p;switch(t){case"push":case"unshift":p=r;break;case"splice":p=r.slice(2);break}return p&&s.observeArray(p),s.dep.notify(),i})});var Hi=Object.getOwnPropertyNames(gn),qn=!0;function ft(t){qn=t}var yn=function(e){this.value=e,this.dep=new G,this.vmCount=0,$t(e,"__ob__",this),Array.isArray(e)?(Fi?Ni(e,gn):Di(e,gn,Hi),this.observeArray(e)):this.walk(e)};yn.prototype.walk=function(e){for(var n=Object.keys(e),r=0;r<n.length;r++)Tt(e,n[r])};yn.prototype.observeArray=function(e){for(var n=0,r=e.length;n<r;n++)St(e[n])};function Ni(t,e){t.__proto__=e}function Di(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];$t(t,i,e[i])}}function St(t,e){if(!(!I(t)||t instanceof L)){var n;return D(t,"__ob__")&&t.__ob__ instanceof yn?n=t.__ob__:qn&&!vn()&&(Array.isArray(t)||U(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new yn(t)),e&&n&&n.vmCount++,n}}function Tt(t,e,n,r,o){var i=new G,s=Object.getOwnPropertyDescriptor(t,e);if(!(s&&s.configurable===!1)){var p=s&&s.get,l=s&&s.set;(!p||l)&&arguments.length===2&&(n=t[e]);var d=!o&&St(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var v=p?p.call(t):n;return G.target&&(i.depend(),d&&(d.dep.depend(),Array.isArray(v)&&Ar(v))),v},set:function(v){var h=p?p.call(t):n;v===h||v!==v&&h!==h||(r&&r(),!(p&&!l)&&(l?l.call(t,v):n=v,d=!o&&St(v),i.notify()))}})}}function Yn(t,e,n){if((g(t)||ct(t))&&A("Cannot set reactive property on undefined, null, or primitive value: "+t),Array.isArray(t)&&We(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?(A("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),n):r?(Tt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function vr(t,e){if((g(t)||ct(t))&&A("Cannot delete reactive property on undefined, null, or primitive value: "+t),Array.isArray(t)&&We(e)){t.splice(e,1);return}var n=t.__ob__;if(t._isVue||n&&n.vmCount){A("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");return}!D(t,e)||(delete t[e],!!n&&n.dep.notify())}function Ar(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ar(e)}var X=k.optionMergeStrategies;X.el=X.propsData=function(t,e,n,r){return n||A('option "'+r+'" can only be used during instance creation with the `new` keyword.'),mr(t,e)};function Jn(t,e){if(!e)return t;for(var n,r,o,i=mn?Reflect.ownKeys(e):Object.keys(e),s=0;s<i.length;s++)n=i[s],n!=="__ob__"&&(r=t[n],o=e[n],D(t,n)?r!==o&&U(r)&&U(o)&&Jn(r,o):Yn(t,n,o));return t}function Wn(t,e,n){return n?function(){var o=typeof e=="function"?e.call(n,n):e,i=typeof t=="function"?t.call(n,n):t;return o?Jn(o,i):i}:e?t?function(){return Jn(typeof e=="function"?e.call(this,this):e,typeof t=="function"?t.call(this,this):t)}:e:t}X.data=function(t,e,n){return n?Wn(t,e,n):e&&typeof e!="function"?(A('The "data" option should be a function that returns a per-instance value in component definitions.',n),t):Wn(t,e)};function $i(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n&&Ii(n)}function Ii(t){for(var e=[],n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e}ir.forEach(function(t){X[t]=$i});function Qi(t,e,n,r){var o=Object.create(t||null);return e?(te(r,e,n),O(o,e)):o}_n.forEach(function(t){X[t+"s"]=Qi});X.watch=function(t,e,n,r){if(t===Rn&&(t=void 0),e===Rn&&(e=void 0),!e)return Object.create(t||null);if(te(r,e,n),!t)return e;var o={};O(o,t);for(var i in e){var s=o[i],p=e[i];s&&!Array.isArray(s)&&(s=[s]),o[i]=s?s.concat(p):Array.isArray(p)?p:[p]}return o};X.props=X.methods=X.inject=X.computed=function(t,e,n,r){if(e&&te(r,e,n),!t)return e;var o=Object.create(null);return O(o,t),e&&O(o,e),o};X.provide=Wn;var mr=function(t,e){return e===void 0?t:e};function Ui(t){for(var e in t.components)Kn(e)}function Kn(t){new RegExp("^[a-zA-Z][\\-\\.0-9_"+sr.source+"]*$").test(t)||A('Invalid component name: "'+t+'". Component names should conform to valid custom element name in html5 specification.'),(gi(t)||k.isReservedTag(t))&&A("Do not use built-in or reserved HTML elements as component id: "+t)}function Vi(t,e){var n=t.props;if(!!n){var r={},o,i,s;if(Array.isArray(n))for(o=n.length;o--;)i=n[o],typeof i=="string"?(s=gt(i),r[s]={type:null}):A("props must be strings when using array syntax.");else if(U(n))for(var p in n)i=n[p],s=gt(p),r[s]=U(i)?i:{type:i};else A('Invalid value for option "props": expected an Array or an Object, but got '+fn(n)+".",e);t.props=r}}function Li(t,e){var n=t.inject;if(!!n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(U(n))for(var i in n){var s=n[i];r[i]=U(s)?O({from:i},s):{from:s}}else A('Invalid value for option "inject": expected an Array or an Object, but got '+fn(n)+".",e)}}function Pi(t){var e=t.directives;if(e)for(var n in e){var r=e[n];typeof r=="function"&&(e[n]={bind:r,update:r})}}function te(t,e,n){U(e)||A('Invalid value for option "'+t+'": expected an Object, but got '+fn(e)+".",n)}function Bt(t,e,n){if(Ui(e),typeof e=="function"&&(e=e.options),Vi(e,n),Li(e,n),Pi(e),!e._base&&(e.extends&&(t=Bt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Bt(t,e.mixins[r],n);var i={},s;for(s in t)p(s);for(s in e)D(t,s)||p(s);function p(l){var d=X[l]||mr;i[l]=d(t[l],e[l],n,l)}return i}function ne(t,e,n,r){if(typeof n=="string"){var o=t[e];if(D(o,n))return o[n];var i=gt(n);if(D(o,i))return o[i];var s=tr(i);if(D(o,s))return o[s];var p=o[n]||o[i]||o[s];return r&&!p&&A("Failed to resolve "+e.slice(0,-1)+": "+n,t),p}}function ee(t,e,n,r){var o=e[t],i=!D(n,t),s=n[t],p=gr(Boolean,o.type);if(p>-1){if(i&&!D(o,"default"))s=!1;else if(s===""||s===yt(t)){var l=gr(String,o.type);(l<0||p<l)&&(s=!0)}}if(s===void 0){s=Ri(r,o,t);var d=qn;ft(!0),St(s),ft(d)}return Zi(o,t,s,r,i),s}function Ri(t,e,n){if(!!D(e,"default")){var r=e.default;return I(r)&&A('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',t),t&&t.$options.propsData&&t.$options.propsData[n]===void 0&&t._props[n]!==void 0?t._props[n]:typeof r=="function"&&xn(e.type)!=="Function"?r.call(t):r}}function Zi(t,e,n,r,o){if(t.required&&o){A('Missing required prop: "'+e+'"',r);return}if(!(n==null&&!t.required)){var i=t.type,s=!i||i===!0,p=[];if(i){Array.isArray(i)||(i=[i]);for(var l=0;l<i.length&&!s;l++){var d=ji(n,i[l],r);p.push(d.expectedType||""),s=d.valid}}var a=p.some(function(h){return h});if(!s&&a){A(zi(e,n,p),r);return}var v=t.validator;v&&(v(n)||A('Invalid prop: custom validator check failed for prop "'+e+'".',r))}}var Gi=/^(String|Number|Boolean|Function|Symbol|BigInt)$/;function ji(t,e,n){var r,o=xn(e);if(Gi.test(o)){var i=typeof t;r=i===o.toLowerCase(),!r&&i==="object"&&(r=t instanceof e)}else if(o==="Object")r=U(t);else if(o==="Array")r=Array.isArray(t);else try{r=t instanceof e}catch{A('Invalid prop type: "'+String(e)+'" is not a constructor',n),r=!1}return{valid:r,expectedType:o}}var Xi=/^\s*function (\w+)/;function xn(t){var e=t&&t.toString().match(Xi);return e?e[1]:""}function Cr(t,e){return xn(t)===xn(e)}function gr(t,e){if(!Array.isArray(e))return Cr(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Cr(e[n],t))return n;return-1}function zi(t,e,n){var r='Invalid prop: type check failed for prop "'+t+'". Expected '+n.map(tr).join(", "),o=n[0],i=fn(e);return n.length===1&&re(o)&&re(typeof e)&&!Yi(o,i)&&(r+=" with value "+yr(e,o)),r+=", got "+i+" ",re(i)&&(r+="with value "+yr(e,i)+"."),r}function yr(t,e){return e==="String"?'"'+t+'"':e==="Number"?""+Number(t):""+t}var qi=["string","number","boolean"];function re(t){return qi.some(function(e){return t.toLowerCase()===e})}function Yi(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.some(function(n){return n.toLowerCase()==="boolean"})}function ut(t,e,n){qt();try{if(e)for(var r=e;r=r.$parent;){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var s=o[i].call(r,t,e,n)===!1;if(s)return}catch(p){xr(p,r,"errorCaptured hook")}}xr(t,e,n)}finally{Yt()}}function Vt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&Un(i)&&!i._handled&&(i.catch(function(s){return ut(s,r,o+" (Promise/async)")}),i._handled=!0)}catch(s){ut(s,r,o)}return i}function xr(t,e,n){if(k.errorHandler)try{return k.errorHandler.call(null,t,e,n)}catch(r){r!==t&&br(r,null,"config.errorHandler")}br(t,e,n)}function br(t,e,n){if(A("Error in "+n+': "'+t.toString()+'"',e),(V||Ln)&&typeof console!="undefined")console.error(t);else throw t}var oe=!1,ie=[],se=!1;function bn(){se=!1;var t=ie.slice(0);ie.length=0;for(var e=0;e<t.length;e++)t[e]()}var Jt;typeof Promise!="undefined"&&bt(Promise)?(wr=Promise.resolve(),Jt=function(){wr.then(bn),ki&&setTimeout($)},oe=!0):!It&&typeof MutationObserver!="undefined"&&(bt(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")?(Wt=1,Er=new MutationObserver(bn),ae=document.createTextNode(String(Wt)),Er.observe(ae,{characterData:!0}),Jt=function(){Wt=(Wt+1)%2,ae.data=String(Wt)},oe=!0):typeof setImmediate!="undefined"&&bt(setImmediate)?Jt=function(){setImmediate(bn)}:Jt=function(){setTimeout(bn,0)};var wr,Wt,Er,ae;function pe(t,e){var n;if(ie.push(function(){if(t)try{t.call(e)}catch(r){ut(r,e,"nextTick")}else n&&n(e)}),se||(se=!0,Jt()),!t&&typeof Promise!="undefined")return new Promise(function(r){n=r})}var Sr;Tr=Z("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"),le=function(t,e){A('Property or method "'+e+'" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',t)},ce=function(t,e){A('Property "'+e+'" must be accessed with "$data.'+e+'" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data',t)},fe=typeof Proxy!="undefined"&&bt(Proxy),fe&&(Br=Z("stop,prevent,self,ctrl,shift,alt,meta,exact"),k.keyCodes=new Proxy(k.keyCodes,{set:function(e,n,r){return Br(n)?(A("Avoid overwriting built-in modifier in config.keyCodes: ."+n),!1):(e[n]=r,!0)}})),Fr={has:function(e,n){var r=n in e,o=Tr(n)||typeof n=="string"&&n.charAt(0)==="_"&&!(n in e.$data);return!r&&!o&&(n in e.$data?ce(e,n):le(e,n)),r||!o}},kr={get:function(e,n){return typeof n=="string"&&!(n in e)&&(n in e.$data?ce(e,n):le(e,n)),e[n]}},Sr=function(e){if(fe){var n=e.$options,r=n.render&&n.render._withStripped?kr:Fr;e._renderProxy=new Proxy(e,r)}else e._renderProxy=e};var Tr,le,ce,fe,Br,Fr,kr,Or=new zt;function wn(t){ue(t,Or),Or.clear()}function ue(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!I(t)||Object.isFrozen(t)||t instanceof L)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o)for(n=t.length;n--;)ue(t[n],e);else for(r=Object.keys(t),n=r.length;n--;)ue(t[r[n]],e)}}var W,En;K=V&&window.performance,K&&K.mark&&K.measure&&K.clearMarks&&K.clearMeasures&&(W=function(t){return K.mark(t)},En=function(t,e,n){K.measure(t,e,n),K.clearMarks(e),K.clearMarks(n)});var K,Mr=Ct(function(t){var e=t.charAt(0)==="&";t=e?t.slice(1):t;var n=t.charAt(0)==="~";t=n?t.slice(1):t;var r=t.charAt(0)==="!";return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var r=arguments,o=n.fns;if(Array.isArray(o))for(var i=o.slice(),s=0;s<i.length;s++)Vt(i[s],null,r,e,"v-on handler");else return Vt(o,null,arguments,e,"v-on handler")}return n.fns=t,n}function Hr(t,e,n,r,o,i){var s,p,l,d,a;for(s in t)p=l=t[s],d=e[s],a=Mr(s),g(l)?A('Invalid handler for event "'+a.name+'": got '+String(l),i):g(d)?(g(l.fns)&&(l=t[s]=de(l,i)),H(a.once)&&(l=t[s]=o(a.name,l,a.capture)),n(a.name,l,a.capture,a.passive,a.params)):l!==d&&(d.fns=l,t[s]=d);for(s in e)g(t[s])&&(a=Mr(s),r(a.name,e[s],a.capture))}function dt(t,e,n){t instanceof L&&(t=t.data.hook||(t.data.hook={}));var r,o=t[e];function i(){n.apply(this,arguments),rt(r.fns,i)}g(o)?r=de([i]):u(o.fns)&&H(o.merged)?(r=o,r.fns.push(i)):r=de([o,i]),r.merged=!0,t[e]=r}function Ji(t,e,n){var r=e.options.props;if(!g(r)){var o={},i=t.attrs,s=t.props;if(u(i)||u(s))for(var p in r){var l=yt(p),d=p.toLowerCase();p!==d&&i&&D(i,d)&&Gn('Prop "'+d+'" is passed to component '+wt(n||e)+', but the declared prop name is "'+p+'". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "'+l+'" instead of "'+p+'".'),Nr(o,s,p,l,!0)||Nr(o,i,p,l,!1)}return o}}function Nr(t,e,n,r,o){if(u(e)){if(D(e,n))return t[n]=e[n],o||delete e[n],!0;if(D(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Wi(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function _e(t){return ct(t)?[Ut(t)]:Array.isArray(t)?Dr(t):void 0}function Kt(t){return u(t)&&u(t.text)&&mi(t.isComment)}function Dr(t,e){var n=[],r,o,i,s;for(r=0;r<t.length;r++)o=t[r],!(g(o)||typeof o=="boolean")&&(i=n.length-1,s=n[i],Array.isArray(o)?o.length>0&&(o=Dr(o,(e||"")+"_"+r),Kt(o[0])&&Kt(s)&&(n[i]=Ut(s.text+o[0].text),o.shift()),n.push.apply(n,o)):ct(o)?Kt(s)?n[i]=Ut(s.text+o):o!==""&&n.push(Ut(o)):Kt(o)&&Kt(s)?n[i]=Ut(s.text+o.text):(H(t._isVList)&&u(o.tag)&&g(o.key)&&u(e)&&(o.key="__vlist"+e+"_"+r+"__"),n.push(o)));return n}function Ki(t){var e=t.$options.provide;e&&(t._provided=typeof e=="function"?e.call(t):e)}function ts(t){var e=$r(t.$options.inject,t);e&&(ft(!1),Object.keys(e).forEach(function(n){Tt(t,n,e[n],function(){A('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "'+n+'"',t)})}),ft(!0))}function $r(t,e){if(t){for(var n=Object.create(null),r=mn?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if(i!=="__ob__"){for(var s=t[i].from,p=e;p;){if(p._provided&&D(p._provided,s)){n[i]=p._provided[s];break}p=p.$parent}if(!p)if("default"in t[i]){var l=t[i].default;n[i]=typeof l=="function"?l.call(e):l}else A('Injection "'+i+'" not found',e)}}return n}}function he(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,(i.context===e||i.fnContext===e)&&s&&s.slot!=null){var p=s.slot,l=n[p]||(n[p]=[]);i.tag==="template"?l.push.apply(l,i.children||[]):l.push(i)}else(n.default||(n.default=[])).push(i)}for(var d in n)n[d].every(ns)&&delete n[d];return n}function ns(t){return t.isComment&&!t.asyncFactory||t.text===" "}function tn(t){return t.isComment&&t.asyncFactory}function Sn(t,e,n){var r,o=Object.keys(e).length>0,i=t?!!t.$stable:!o,s=t&&t.$key;if(!t)r={};else{if(t._normalized)return t._normalized;if(i&&n&&n!==J&&s===n.$key&&!o&&!n.$hasNormal)return n;r={};for(var p in t)t[p]&&p[0]!=="$"&&(r[p]=es(e,p,t[p]))}for(var l in e)l in r||(r[l]=rs(e,l));return t&&Object.isExtensible(t)&&(t._normalized=r),$t(r,"$stable",i),$t(r,"$key",s),$t(r,"$hasNormal",o),r}function es(t,e,n){var r=function(){var o=arguments.length?n.apply(null,arguments):n({});o=o&&typeof o=="object"&&!Array.isArray(o)?[o]:_e(o);var i=o&&o[0];return o&&(!i||o.length===1&&i.isComment&&!tn(i))?void 0:o};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function rs(t,e){return function(){return t[e]}}function os(t,e){var n,r,o,i,s;if(Array.isArray(t)||typeof t=="string")for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if(typeof t=="number")for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(I(t))if(mn&&t[Symbol.iterator]){n=[];for(var p=t[Symbol.iterator](),l=p.next();!l.done;)n.push(e(l.value,n.length)),l=p.next()}else for(i=Object.keys(t),n=new Array(i.length),r=0,o=i.length;r<o;r++)s=i[r],n[r]=e(t[s],s,r);return u(n)||(n=[]),n._isVList=!0,n}function is(t,e,n,r){var o=this.$scopedSlots[t],i;o?(n=n||{},r&&(I(r)||A("slot v-bind without argument expects an Object",this),n=O(O({},r),n)),i=o(n)||(typeof e=="function"?e():e)):i=this.$slots[t]||(typeof e=="function"?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function ss(t){return ne(this.$options,"filters",t,!0)||er}function Ir(t,e){return Array.isArray(t)?t.indexOf(e)===-1:t!==e}function as(t,e,n,r,o){var i=k.keyCodes[e]||n;return o&&r&&!k.keyCodes[e]?Ir(o,r):i?Ir(i,t):r?yt(r)!==e:t===void 0}function ps(t,e,n,r,o){if(n)if(!I(n))A("v-bind without argument expects an Object or Array value",this);else{Array.isArray(n)&&(n=nr(n));var i,s=function(l){if(l==="class"||l==="style"||Ke(l))i=t;else{var d=t.attrs&&t.attrs.type;i=r||k.mustUseProp(e,d,l)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var a=gt(l),v=yt(l);if(!(a in i)&&!(v in i)&&(i[l]=n[l],o)){var h=t.on||(t.on={});h["update:"+l]=function(x){n[l]=x}}};for(var p in n)s(p)}return t}function ls(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Qr(r,"__static__"+t,!1)),r}function cs(t,e,n){return Qr(t,"__once__"+e+(n?"_"+n:""),!0),t}function Qr(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&typeof t[r]!="string"&&Ur(t[r],e+"_"+r,n);else Ur(t,e,n)}function Ur(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function fs(t,e){if(e)if(!U(e))A("v-on without argument expects an Object value",this);else{var n=t.on=t.on?O({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}return t}function Vr(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Vr(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function us(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];typeof r=="string"&&r?t[e[n]]=e[n+1]:r!==""&&r!==null&&A("Invalid value for dynamic directive argument (expected string or null): "+r,this)}return t}function ds(t,e){return typeof t=="string"?e+t:t}function Lr(t){t._o=cs,t._n=Xt,t._s=Ci,t._l=os,t._t=is,t._q=xt,t._i=rr,t._m=ls,t._f=ss,t._k=as,t._b=ps,t._v=Ut,t._e=Et,t._u=Vr,t._g=fs,t._d=us,t._p=ds}function ve(t,e,n,r,o){var i=this,s=o.options,p;D(r,"_uid")?(p=Object.create(r),p._original=r):(p=r,r=r._original);var l=H(s._compiled),d=!l;this.data=t,this.props=e,this.children=n,this.parent=r,this.listeners=t.on||J,this.injections=$r(s.inject,r),this.slots=function(){return i.$slots||Sn(t.scopedSlots,i.$slots=he(n,r)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sn(t.scopedSlots,this.slots())}}),l&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=Sn(t.scopedSlots,this.$slots)),s._scopeId?this._c=function(a,v,h,x){var E=Tn(p,a,v,h,x,d);return E&&!Array.isArray(E)&&(E.fnScopeId=s._scopeId,E.fnContext=r),E}:this._c=function(a,v,h,x){return Tn(p,a,v,h,x,d)}}Lr(ve.prototype);function _s(t,e,n,r,o){var i=t.options,s={},p=i.props;if(u(p))for(var l in p)s[l]=ee(l,p,e||J);else u(n.attrs)&&Rr(s,n.attrs),u(n.props)&&Rr(s,n.props);var d=new ve(n,s,o,r,t),a=i.render.call(null,d._c,d);if(a instanceof L)return Pr(a,n,d.parent,i,d);if(Array.isArray(a)){for(var v=_e(a)||[],h=new Array(v.length),x=0;x<v.length;x++)h[x]=Pr(v[x],n,d.parent,i,d);return h}}function Pr(t,e,n,r,o){var i=zn(t);return i.fnContext=n,i.fnOptions=r,(i.devtoolsMeta=i.devtoolsMeta||{}).renderContext=o,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Rr(t,e){for(var n in e)t[gt(n)]=e[n]}var Ae={init:function(e,n){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;Ae.prepatch(r,r)}else{var o=e.componentInstance=hs(e,Ft);o.$mount(n?e.elm:void 0,n)}},prepatch:function(e,n){var r=n.componentOptions,o=n.componentInstance=e.componentInstance;Ns(o,r.propsData,r.listeners,n,r.children)},insert:function(e){var n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,q(r,"mounted")),e.data.keepAlive&&(n._isMounted?Qs(r):ge(r,!0))},destroy:function(e){var n=e.componentInstance;n._isDestroyed||(e.data.keepAlive?Wr(n,!0):n.$destroy())}},Zr=Object.keys(Ae);function Gr(t,e,n,r,o){if(!g(t)){var i=n.$options._base;if(I(t)&&(t=i.extend(t)),typeof t!="function"){A("Invalid Component definition: "+String(t),n);return}var s;if(g(t.cid)&&(s=t,t=Es(s,i),t===void 0))return ws(s,e,n,r,o);e=e||{},Te(t),u(e.model)&&ms(t.options,e);var p=Ji(e,t,o);if(H(t.options.functional))return _s(t,p,e,n,r);var l=e.on;if(e.on=e.nativeOn,H(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}vs(e);var a=t.options.name||o,v=new L("vue-component-"+t.cid+(a?"-"+a:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:o,children:r},s);return v}}function hs(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return u(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function vs(t){for(var e=t.hook||(t.hook={}),n=0;n<Zr.length;n++){var r=Zr[n],o=e[r],i=Ae[r];o!==i&&!(o&&o._merged)&&(e[r]=o?As(i,o):i)}}function As(t,e){var n=function(r,o){t(r,o),e(r,o)};return n._merged=!0,n}function ms(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),i=o[r],s=e.model.callback;u(i)?(Array.isArray(i)?i.indexOf(s)===-1:i!==s)&&(o[r]=[s].concat(i)):o[r]=s}var Cs=1,jr=2;function Tn(t,e,n,r,o,i){return(Array.isArray(n)||ct(n))&&(o=r,r=n,n=void 0),H(i)&&(o=jr),gs(t,e,n,r,o)}function gs(t,e,n,r,o){if(u(n)&&u(n.__ob__))return A("Avoid using observed data object as vnode data: "+JSON.stringify(n)+`
Always create fresh vnode data objects in each render!`,t),Et();if(u(n)&&u(n.is)&&(e=n.is),!e)return Et();u(n)&&u(n.key)&&!ct(n.key)&&A("Avoid using non-primitive value as key, use string/number value instead.",t),Array.isArray(r)&&typeof r[0]=="function"&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===jr?r=_e(r):o===Cs&&(r=Wi(r));var i,s;if(typeof e=="string"){var p;s=t.$vnode&&t.$vnode.ns||k.getTagNamespace(e),k.isReservedTag(e)?(u(n)&&u(n.nativeOn)&&n.tag!=="component"&&A("The .native modifier for v-on is only valid on components but it was used on <"+e+">.",t),i=new L(k.parsePlatformTagName(e),n,r,void 0,void 0,t)):(!n||!n.pre)&&u(p=ne(t.$options,"components",e))?i=Gr(p,n,t,r,e):i=new L(e,n,r,void 0,void 0,t)}else i=Gr(e,n,t,r);return Array.isArray(i)?i:u(i)?(u(s)&&Xr(i,s),u(n)&&ys(n),i):Et()}function Xr(t,e,n){if(t.ns=e,t.tag==="foreignObject"&&(e=void 0,n=!0),u(t.children))for(var r=0,o=t.children.length;r<o;r++){var i=t.children[r];u(i.tag)&&(g(i.ns)||H(n)&&i.tag!=="svg")&&Xr(i,e,n)}}function ys(t){I(t.style)&&wn(t.style),I(t.class)&&wn(t.class)}function xs(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=he(e._renderChildren,r),t.$scopedSlots=J,t._c=function(i,s,p,l){return Tn(t,i,s,p,l,!1)},t.$createElement=function(i,s,p,l){return Tn(t,i,s,p,l,!0)};var o=n&&n.data;Tt(t,"$attrs",o&&o.attrs||J,function(){!en&&A("$attrs is readonly.",t)},!0),Tt(t,"$listeners",e._parentListeners||J,function(){!en&&A("$listeners is readonly.",t)},!0)}var me=null;function bs(t){Lr(t.prototype),t.prototype.$nextTick=function(e){return pe(e,this)},t.prototype._render=function(){var e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=Sn(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;var i;try{me=e,i=r.call(e._renderProxy,e.$createElement)}catch(s){if(ut(s,e,"render"),e.$options.renderError)try{i=e.$options.renderError.call(e._renderProxy,e.$createElement,s)}catch(p){ut(p,e,"renderError"),i=e._vnode}else i=e._vnode}finally{me=null}return Array.isArray(i)&&i.length===1&&(i=i[0]),i instanceof L||(Array.isArray(i)&&A("Multiple root nodes returned from render function. Render function should return a single root node.",e),i=Et()),i.parent=o,i}}function Ce(t,e){return(t.__esModule||mn&&t[Symbol.toStringTag]==="Module")&&(t=t.default),I(t)?e.extend(t):t}function ws(t,e,n,r,o){var i=Et();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function Es(t,e){if(H(t.error)&&u(t.errorComp))return t.errorComp;if(u(t.resolved))return t.resolved;var n=me;if(n&&u(t.owners)&&t.owners.indexOf(n)===-1&&t.owners.push(n),H(t.loading)&&u(t.loadingComp))return t.loadingComp;if(n&&!u(t.owners)){var r=t.owners=[n],o=!0,i=null,s=null;n.$on("hook:destroyed",function(){return rt(r,n)});var p=function(v){for(var h=0,x=r.length;h<x;h++)r[h].$forceUpdate();v&&(r.length=0,i!==null&&(clearTimeout(i),i=null),s!==null&&(clearTimeout(s),s=null))},l=dn(function(v){t.resolved=Ce(v,e),o?r.length=0:p(!0)}),d=dn(function(v){A("Failed to resolve async component: "+String(t)+(v?`
Reason: `+v:"")),u(t.errorComp)&&(t.error=!0,p(!0))}),a=t(l,d);return I(a)&&(Un(a)?g(t.resolved)&&a.then(l,d):Un(a.component)&&(a.component.then(l,d),u(a.error)&&(t.errorComp=Ce(a.error,e)),u(a.loading)&&(t.loadingComp=Ce(a.loading,e),a.delay===0?t.loading=!0:i=setTimeout(function(){i=null,g(t.resolved)&&g(t.error)&&(t.loading=!0,p(!1))},a.delay||200)),u(a.timeout)&&(s=setTimeout(function(){s=null,g(t.resolved)&&d("timeout ("+a.timeout+"ms)")},a.timeout)))),o=!1,t.loading?t.loadingComp:t.resolved}}function zr(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(u(n)&&(u(n.componentOptions)||tn(n)))return n}}function Ss(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&qr(t,e)}var nn;function Ts(t,e){nn.$on(t,e)}function Bs(t,e){nn.$off(t,e)}function Fs(t,e){var n=nn;return function r(){var o=e.apply(null,arguments);o!==null&&n.$off(t,r)}}function qr(t,e,n){nn=t,Hr(e,n||{},Ts,Bs,Fs,t),nn=void 0}function ks(t){var e=/^hook:/;t.prototype.$on=function(n,r){var o=this;if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)o.$on(n[i],r);else(o._events[n]||(o._events[n]=[])).push(r),e.test(n)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(n,r){var o=this;function i(){o.$off(n,i),r.apply(o,arguments)}return i.fn=r,o.$on(n,i),o},t.prototype.$off=function(n,r){var o=this;if(!arguments.length)return o._events=Object.create(null),o;if(Array.isArray(n)){for(var i=0,s=n.length;i<s;i++)o.$off(n[i],r);return o}var p=o._events[n];if(!p)return o;if(!r)return o._events[n]=null,o;for(var l,d=p.length;d--;)if(l=p[d],l===r||l.fn===r){p.splice(d,1);break}return o},t.prototype.$emit=function(n){var r=this,o=n.toLowerCase();o!==n&&r._events[o]&&Gn('Event "'+o+'" is emitted in component '+wt(r)+' but the handler is registered for "'+n+'". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "'+yt(n)+'" instead of "'+n+'".');var i=r._events[n];if(i){i=i.length>1?Vn(i):i;for(var s=Vn(arguments,1),p='event handler for "'+n+'"',l=0,d=i.length;l<d;l++)Vt(i[l],r,s,r,p)}return r}}var Ft=null,en=!1;function Yr(t){var e=Ft;return Ft=t,function(){Ft=e}}function Os(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ms(t){t.prototype._update=function(e,n){var r=this,o=r.$el,i=r._vnode,s=Yr(r);r._vnode=e,i?r.$el=r.__patch__(i,e):r.$el=r.__patch__(r.$el,e,n,!1),s(),o&&(o.__vue__=null),r.$el&&(r.$el.__vue__=r),r.$vnode&&r.$parent&&r.$vnode===r.$parent._vnode&&(r.$parent.$el=r.$el)},t.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},t.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){q(e,"beforeDestroy"),e._isBeingDestroyed=!0;var n=e.$parent;n&&!n._isBeingDestroyed&&!e.$options.abstract&&rt(n.$children,e),e._watcher&&e._watcher.teardown();for(var r=e._watchers.length;r--;)e._watchers[r].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),q(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Hs(t,e,n){t.$el=e,t.$options.render||(t.$options.render=Et,t.$options.template&&t.$options.template.charAt(0)!=="#"||t.$options.el||e?A("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",t):A("Failed to mount component: template or render function not defined.",t)),q(t,"beforeMount");var r;return k.performance&&W?r=function(){var o=t._name,i=t._uid,s="vue-perf-start:"+i,p="vue-perf-end:"+i;W(s);var l=t._render();W(p),En("vue "+o+" render",s,p),W(s),t._update(l,n),W(p),En("vue "+o+" patch",s,p)}:r=function(){t._update(t._render(),n)},new Y(t,r,$,{before:function(){t._isMounted&&!t._isDestroyed&&q(t,"beforeUpdate")}},!0),n=!1,t.$vnode==null&&(t._isMounted=!0,q(t,"mounted")),t}function Ns(t,e,n,r,o){en=!0;var i=r.data.scopedSlots,s=t.$scopedSlots,p=!!(i&&!i.$stable||s!==J&&!s.$stable||i&&t.$scopedSlots.$key!==i.$key||!i&&t.$scopedSlots.$key),l=!!(o||t.$options._renderChildren||p);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||J,t.$listeners=n||J,e&&t.$options.props){ft(!1);for(var d=t._props,a=t.$options._propKeys||[],v=0;v<a.length;v++){var h=a[v],x=t.$options.props;d[h]=ee(h,x,e,t)}ft(!0),t.$options.propsData=e}n=n||J;var E=t.$options._parentListeners;t.$options._parentListeners=n,qr(t,n,E),l&&(t.$slots=he(o,r.context),t.$forceUpdate()),en=!1}function Jr(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function ge(t,e){if(e){if(t._directInactive=!1,Jr(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var n=0;n<t.$children.length;n++)ge(t.$children[n]);q(t,"activated")}}function Wr(t,e){if(!(e&&(t._directInactive=!0,Jr(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Wr(t.$children[n]);q(t,"deactivated")}}function q(t,e){qt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Vt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),Yt()}var Ds=100,ot=[],ye=[],rn={},Bn={},xe=!1,be=!1,Lt=0;function $s(){Lt=ot.length=ye.length=0,rn={},Bn={},xe=be=!1}var Kr=0,we=Date.now;V&&!It&&(Fn=window.performance,Fn&&typeof Fn.now=="function"&&we()>document.createEvent("Event").timeStamp&&(we=function(){return Fn.now()}));var Fn;function to(){Kr=we(),be=!0;var t,e;for(ot.sort(function(o,i){return o.id-i.id}),Lt=0;Lt<ot.length;Lt++)if(t=ot[Lt],t.before&&t.before(),e=t.id,rn[e]=null,t.run(),rn[e]!=null&&(Bn[e]=(Bn[e]||0)+1,Bn[e]>Ds)){A("You may have an infinite update loop "+(t.user?'in watcher with expression "'+t.expression+'"':"in a component render function."),t.vm);break}var n=ye.slice(),r=ot.slice();$s(),Us(n),Is(r),An&&k.devtools&&An.emit("flush")}function Is(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&q(r,"updated")}}function Qs(t){t._inactive=!1,ye.push(t)}function Us(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,ge(t[e],!0)}function Vs(t){var e=t.id;if(rn[e]==null){if(rn[e]=!0,!be)ot.push(t);else{for(var n=ot.length-1;n>Lt&&ot[n].id>t.id;)n--;ot.splice(n+1,0,t)}if(!xe){if(xe=!0,!k.async){to();return}pe(to)}}}var Ls=0,Y=function(e,n,r,o,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=r,this.id=++Ls,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new zt,this.newDepIds=new zt,this.expression=n.toString(),typeof n=="function"?this.getter=n:(this.getter=Bi(n),this.getter||(this.getter=$,A('Failed watching path: "'+n+'" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',e))),this.value=this.lazy?void 0:this.get()};Y.prototype.get=function(){qt(this);var e,n=this.vm;try{e=this.getter.call(n,n)}catch(r){if(this.user)ut(r,n,'getter for watcher "'+this.expression+'"');else throw r}finally{this.deep&&wn(e),Yt(),this.cleanupDeps()}return e};Y.prototype.addDep=function(e){var n=e.id;this.newDepIds.has(n)||(this.newDepIds.add(n),this.newDeps.push(e),this.depIds.has(n)||e.addSub(this))};Y.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var n=this.deps[e];this.newDepIds.has(n.id)||n.removeSub(this)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0};Y.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vs(this)};Y.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||I(e)||this.deep){var n=this.value;if(this.value=e,this.user){var r='callback for watcher "'+this.expression+'"';Vt(this.cb,this.vm,[e,n],this.vm,r)}else this.cb.call(this.vm,e,n)}}};Y.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};Y.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()};Y.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||rt(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var tt={enumerable:!0,configurable:!0,get:$,set:$};function Ee(t,e,n){tt.get=function(){return this[e][n]},tt.set=function(o){this[e][n]=o},Object.defineProperty(t,n,tt)}function Ps(t){t._watchers=[];var e=t.$options;e.props&&Rs(t,e.props),e.methods&&zs(t,e.methods),e.data?Zs(t):St(t._data={},!0),e.computed&&Xs(t,e.computed),e.watch&&e.watch!==Rn&&qs(t,e.watch)}function Rs(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||ft(!1);var s=function(l){o.push(l);var d=ee(l,e,n,t),a=yt(l);(Ke(a)||k.isReservedAttr(a))&&A('"'+a+'" is a reserved attribute and cannot be used as component prop.',t),Tt(r,l,d,function(){!i&&!en&&A(`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "`+l+'"',t)}),l in t||Ee(t,"_props",l)};for(var p in e)s(p);ft(!0)}function Zs(t){var e=t.$options.data;e=t._data=typeof e=="function"?Gs(e,t):e||{},U(e)||(e={},A(`data functions should return an object:
https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function`,t));for(var n=Object.keys(e),r=t.$options.props,o=t.$options.methods,i=n.length;i--;){var s=n[i];o&&D(o,s)&&A('Method "'+s+'" has already been defined as a data property.',t),r&&D(r,s)?A('The data property "'+s+'" is already declared as a prop. Use prop default value instead.',t):ar(s)||Ee(t,"_data",s)}St(e,!0)}function Gs(t,e){qt();try{return t.call(e,e)}catch(n){return ut(n,e,"data()"),{}}finally{Yt()}}var js={lazy:!0};function Xs(t,e){var n=t._computedWatchers=Object.create(null),r=vn();for(var o in e){var i=e[o],s=typeof i=="function"?i:i.get;s==null&&A('Getter is missing for computed property "'+o+'".',t),r||(n[o]=new Y(t,s||$,$,js)),o in t?o in t.$data?A('The computed property "'+o+'" is already defined in data.',t):t.$options.props&&o in t.$options.props?A('The computed property "'+o+'" is already defined as a prop.',t):t.$options.methods&&o in t.$options.methods&&A('The computed property "'+o+'" is already defined as a method.',t):no(t,o,i)}}function no(t,e,n){var r=!vn();typeof n=="function"?(tt.get=r?eo(e):ro(n),tt.set=$):(tt.get=n.get?r&&n.cache!==!1?eo(e):ro(n.get):$,tt.set=n.set||$),tt.set===$&&(tt.set=function(){A('Computed property "'+e+'" was assigned to but it has no setter.',this)}),Object.defineProperty(t,e,tt)}function eo(t){return function(){var n=this._computedWatchers&&this._computedWatchers[t];if(n)return n.dirty&&n.evaluate(),G.target&&n.depend(),n.value}}function ro(t){return function(){return t.call(this,this)}}function zs(t,e){var n=t.$options.props;for(var r in e)typeof e[r]!="function"&&A('Method "'+r+'" has type "'+typeof e[r]+'" in the component definition. Did you reference the function correctly?',t),n&&D(n,r)&&A('Method "'+r+'" has already been defined as a prop.',t),r in t&&ar(r)&&A('Method "'+r+'" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'),t[r]=typeof e[r]!="function"?$:Si(e[r],t)}function qs(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Se(t,n,r[o]);else Se(t,n,r)}}function Se(t,e,n,r){return U(n)&&(r=n,n=n.handler),typeof n=="string"&&(n=t[n]),t.$watch(e,n,r)}function Ys(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},e.set=function(){A("Avoid replacing instance root $data. Use nested data properties instead.",this)},n.set=function(){A("$props is readonly.",this)},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Yn,t.prototype.$delete=vr,t.prototype.$watch=function(r,o,i){var s=this;if(U(o))return Se(s,r,o,i);i=i||{},i.user=!0;var p=new Y(s,r,o,i);if(i.immediate){var l='callback for immediate watcher "'+p.expression+'"';qt(),Vt(o,s,[p.value],s,l),Yt()}return function(){p.teardown()}}}var Js=0;function Ws(t){t.prototype._init=function(e){var n=this;n._uid=Js++;var r,o;k.performance&&W&&(r="vue-perf-start:"+n._uid,o="vue-perf-end:"+n._uid,W(r)),n._isVue=!0,e&&e._isComponent?Ks(n,e):n.$options=Bt(Te(n.constructor),e||{},n),Sr(n),n._self=n,Os(n),Ss(n),xs(n),q(n,"beforeCreate"),ts(n),Ps(n),Ki(n),q(n,"created"),k.performance&&W&&(n._name=wt(n,!1),W(o),En("vue "+n._name+" init",r,o)),n.$options.el&&n.$mount(n.$options.el)}}function Ks(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Te(t){var e=t.options;if(t.super){var n=Te(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=ta(t);o&&O(t.extendOptions,o),e=t.options=Bt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function ta(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function M(t){this instanceof M||A("Vue is a constructor and should be called with the `new` keyword"),this._init(t)}Ws(M);Ys(M);ks(M);Ms(M);bs(M);function na(t){t.use=function(e){var n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(e)>-1)return this;var r=Vn(arguments,1);return r.unshift(this),typeof e.install=="function"?e.install.apply(e,r):typeof e=="function"&&e.apply(null,r),n.push(e),this}}function ea(t){t.mixin=function(e){return this.options=Bt(this.options,e),this}}function ra(t){t.cid=0;var e=1;t.extend=function(n){n=n||{};var r=this,o=r.cid,i=n._Ctor||(n._Ctor={});if(i[o])return i[o];var s=n.name||r.options.name;s&&Kn(s);var p=function(d){this._init(d)};return p.prototype=Object.create(r.prototype),p.prototype.constructor=p,p.cid=e++,p.options=Bt(r.options,n),p.super=r,p.options.props&&oa(p),p.options.computed&&ia(p),p.extend=r.extend,p.mixin=r.mixin,p.use=r.use,_n.forEach(function(l){p[l]=r[l]}),s&&(p.options.components[s]=p),p.superOptions=r.options,p.extendOptions=n,p.sealedOptions=O({},p.options),i[o]=p,p}}function oa(t){var e=t.options.props;for(var n in e)Ee(t.prototype,"_props",n)}function ia(t){var e=t.options.computed;for(var n in e)no(t.prototype,n,e[n])}function sa(t){_n.forEach(function(e){t[e]=function(n,r){return r?(e==="component"&&Kn(n),e==="component"&&U(r)&&(r.name=r.name||n,r=this.options._base.extend(r)),e==="directive"&&typeof r=="function"&&(r={bind:r,update:r}),this.options[e+"s"][n]=r,r):this.options[e+"s"][n]}})}function oo(t){return t&&(t.Ctor.options.name||t.tag)}function kn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:typeof t=="string"?t.split(",").indexOf(e)>-1:Je(t)?t.test(e):!1}function io(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var s=n[i];if(s){var p=s.name;p&&!e(p)&&Be(n,i,r,o)}}}function Be(t,e,n,r){var o=t[e];o&&(!r||o.tag!==r.tag)&&o.componentInstance.$destroy(),t[e]=null,rt(n,e)}var so=[String,RegExp,Array],aa={name:"keep-alive",abstract:!0,props:{include:so,exclude:so,max:[String,Number]},methods:{cacheVNode:function(){var e=this,n=e.cache,r=e.keys,o=e.vnodeToCache,i=e.keyToCache;if(o){var s=o.tag,p=o.componentInstance,l=o.componentOptions;n[i]={name:oo(l),tag:s,componentInstance:p},r.push(i),this.max&&r.length>parseInt(this.max)&&Be(n,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Be(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(n){io(e,function(r){return kn(n,r)})}),this.$watch("exclude",function(n){io(e,function(r){return!kn(n,r)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,n=zr(e),r=n&&n.componentOptions;if(r){var o=oo(r),i=this,s=i.include,p=i.exclude;if(s&&(!o||!kn(s,o))||p&&o&&kn(p,o))return n;var l=this,d=l.cache,a=l.keys,v=n.key==null?r.Ctor.cid+(r.tag?"::"+r.tag:""):n.key;d[v]?(n.componentInstance=d[v].componentInstance,rt(a,v),a.push(v)):(this.vnodeToCache=n,this.keyToCache=v),n.data.keepAlive=!0}return n||e&&e[0]}},pa={KeepAlive:aa};function la(t){var e={};e.get=function(){return k},e.set=function(){A("Do not replace the Vue.config object, set individual fields instead.")},Object.defineProperty(t,"config",e),t.util={warn:A,extend:O,mergeOptions:Bt,defineReactive:Tt},t.set=Yn,t.delete=vr,t.nextTick=pe,t.observable=function(n){return St(n),n},t.options=Object.create(null),_n.forEach(function(n){t.options[n+"s"]=Object.create(null)}),t.options._base=t,O(t.options.components,pa),na(t),ea(t),ra(t),sa(t)}la(M);Object.defineProperty(M.prototype,"$isServer",{get:vn});Object.defineProperty(M.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(M,"FunctionalRenderContext",{value:ve});M.version="2.6.14";var ca=Z("style,class"),fa=Z("input,textarea,option,select,progress"),ua=function(t,e,n){return n==="value"&&fa(t)&&e!=="button"||n==="selected"&&t==="option"||n==="checked"&&t==="input"||n==="muted"&&t==="video"},ao=Z("contenteditable,draggable,spellcheck"),da=Z("events,caret,typing,plaintext-only"),_a=function(t,e){return On(e)||e==="false"?"false":t==="contenteditable"&&da(e)?e:"true"},ha=Z("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Fe="http://www.w3.org/1999/xlink",ke=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},po=function(t){return ke(t)?t.slice(6,t.length):""},On=function(t){return t==null||t===!1};function va(t){for(var e=t.data,n=t,r=t;u(r.componentInstance);)r=r.componentInstance._vnode,r&&r.data&&(e=lo(r.data,e));for(;u(n=n.parent);)n&&n.data&&(e=lo(e,n.data));return Aa(e.staticClass,e.class)}function lo(t,e){return{staticClass:Oe(t.staticClass,e.staticClass),class:u(t.class)?[t.class,e.class]:e.class}}function Aa(t,e){return u(t)||u(e)?Oe(t,Me(e)):""}function Oe(t,e){return t?e?t+" "+e:t:e||""}function Me(t){return Array.isArray(t)?ma(t):I(t)?Ca(t):typeof t=="string"?t:""}function ma(t){for(var e="",n,r=0,o=t.length;r<o;r++)u(n=Me(t[r]))&&n!==""&&(e&&(e+=" "),e+=n);return e}function Ca(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ga={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ya=Z("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),He=Z("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),co=function(t){return ya(t)||He(t)};function xa(t){if(He(t))return"svg";if(t==="math")return"math"}var Mn=Object.create(null);function ba(t){if(!V)return!0;if(co(t))return!1;if(t=t.toLowerCase(),Mn[t]!=null)return Mn[t];var e=document.createElement(t);return t.indexOf("-")>-1?Mn[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Mn[t]=/HTMLUnknownElement/.test(e.toString())}var Ne=Z("text,number,password,search,email,tel,url");function wa(t){if(typeof t=="string"){var e=document.querySelector(t);return e||(A("Cannot find element: "+t),document.createElement("div"))}else return t}function Ea(t,e){var n=document.createElement(t);return t!=="select"||e.data&&e.data.attrs&&e.data.attrs.multiple!==void 0&&n.setAttribute("multiple","multiple"),n}function Sa(t,e){return document.createElementNS(ga[t],e)}function Ta(t){return document.createTextNode(t)}function Ba(t){return document.createComment(t)}function Fa(t,e,n){t.insertBefore(e,n)}function ka(t,e){t.removeChild(e)}function Oa(t,e){t.appendChild(e)}function Ma(t){return t.parentNode}function Ha(t){return t.nextSibling}function Na(t){return t.tagName}function Da(t,e){t.textContent=e}function $a(t,e){t.setAttribute(e,"")}var Ia=Object.freeze({createElement:Ea,createElementNS:Sa,createTextNode:Ta,createComment:Ba,insertBefore:Fa,removeChild:ka,appendChild:Oa,parentNode:Ma,nextSibling:Ha,tagName:Na,setTextContent:Da,setStyleScope:$a}),Qa={create:function(e,n){Pt(n)},update:function(e,n){e.data.ref!==n.data.ref&&(Pt(e,!0),Pt(n))},destroy:function(e){Pt(e,!0)}};function Pt(t,e){var n=t.data.ref;if(!!u(n)){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?rt(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var kt=new L("",{},[]),on=["create","activate","update","remove","destroy"];function Ot(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&u(t.data)===u(e.data)&&Ua(t,e)||H(t.isAsyncPlaceholder)&&g(e.asyncFactory.error))}function Ua(t,e){if(t.tag!=="input")return!0;var n,r=u(n=t.data)&&u(n=n.attrs)&&n.type,o=u(n=e.data)&&u(n=n.attrs)&&n.type;return r===o||Ne(r)&&Ne(o)}function Va(t,e,n){var r,o,i={};for(r=e;r<=n;++r)o=t[r].key,u(o)&&(i[o]=r);return i}function La(t){var e,n,r={},o=t.modules,i=t.nodeOps;for(e=0;e<on.length;++e)for(r[on[e]]=[],n=0;n<o.length;++n)u(o[n][on[e]])&&r[on[e]].push(o[n][on[e]]);function s(f){return new L(i.tagName(f).toLowerCase(),{},[],void 0,f)}function p(f,c){function _(){--_.listeners==0&&l(f)}return _.listeners=c,_}function l(f){var c=i.parentNode(f);u(c)&&i.removeChild(c,f)}function d(f,c){return!c&&!f.ns&&!(k.ignoredElements.length&&k.ignoredElements.some(function(_){return Je(_)?_.test(f.tag):_===f.tag}))&&k.isUnknownElement(f.tag)}var a=0;function v(f,c,_,m,C,S,b){if(u(f.elm)&&u(S)&&(f=S[b]=zn(f)),f.isRootInsert=!C,!h(f,c,_,m)){var y=f.data,F=f.children,T=f.tag;u(T)?(y&&y.pre&&a++,d(f,a)&&A("Unknown custom element: <"+T+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',f.context),f.elm=f.ns?i.createElementNS(f.ns,T):i.createElement(T,f),ht(f),_t(f,F,c),u(y)&&R(f,c),w(_,f.elm,m),y&&y.pre&&a--):H(f.isComment)?(f.elm=i.createComment(f.text),w(_,f.elm,m)):(f.elm=i.createTextNode(f.text),w(_,f.elm,m))}}function h(f,c,_,m){var C=f.data;if(u(C)){var S=u(f.componentInstance)&&C.keepAlive;if(u(C=C.hook)&&u(C=C.init)&&C(f,!1),u(f.componentInstance))return x(f,c),w(_,f.elm,m),H(S)&&E(f,c,_,m),!0}}function x(f,c){u(f.data.pendingInsert)&&(c.push.apply(c,f.data.pendingInsert),f.data.pendingInsert=null),f.elm=f.componentInstance.$el,P(f)?(R(f,c),ht(f)):(Pt(f),c.push(f))}function E(f,c,_,m){for(var C,S=f;S.componentInstance;)if(S=S.componentInstance._vnode,u(C=S.data)&&u(C=C.transition)){for(C=0;C<r.activate.length;++C)r.activate[C](kt,S);c.push(S);break}w(_,f.elm,m)}function w(f,c,_){u(f)&&(u(_)?i.parentNode(_)===f&&i.insertBefore(f,c,_):i.appendChild(f,c))}function _t(f,c,_){if(Array.isArray(c)){Nt(c);for(var m=0;m<c.length;++m)v(c[m],_,f.elm,null,!0,c,m)}else ct(f.text)&&i.appendChild(f.elm,i.createTextNode(String(f.text)))}function P(f){for(;f.componentInstance;)f=f.componentInstance._vnode;return u(f.tag)}function R(f,c){for(var _=0;_<r.create.length;++_)r.create[_](kt,f);e=f.data.hook,u(e)&&(u(e.create)&&e.create(kt,f),u(e.insert)&&c.push(f))}function ht(f){var c;if(u(c=f.fnScopeId))i.setStyleScope(f.elm,c);else for(var _=f;_;)u(c=_.context)&&u(c=c.$options._scopeId)&&i.setStyleScope(f.elm,c),_=_.parent;u(c=Ft)&&c!==f.context&&c!==f.fnContext&&u(c=c.$options._scopeId)&&i.setStyleScope(f.elm,c)}function Ht(f,c,_,m,C,S){for(;m<=C;++m)v(_[m],S,f,c,!1,_,m)}function vt(f){var c,_,m=f.data;if(u(m))for(u(c=m.hook)&&u(c=c.destroy)&&c(f),c=0;c<r.destroy.length;++c)r.destroy[c](f);if(u(c=f.children))for(_=0;_<f.children.length;++_)vt(f.children[_])}function nt(f,c,_){for(;c<=_;++c){var m=f[c];u(m)&&(u(m.tag)?(z(m),vt(m)):l(m.elm))}}function z(f,c){if(u(c)||u(f.data)){var _,m=r.remove.length+1;for(u(c)?c.listeners+=m:c=p(f.elm,m),u(_=f.componentInstance)&&u(_=_._vnode)&&u(_.data)&&z(_,c),_=0;_<r.remove.length;++_)r.remove[_](f,c);u(_=f.data.hook)&&u(_=_.remove)?_(f,c):c()}else l(f.elm)}function jt(f,c,_,m,C){var S=0,b=0,y=c.length-1,F=c[0],T=c[y],B=_.length-1,N=_[0],j=_[B],mt,pt,lt,Ye,Qn=!C;for(Nt(_);S<=y&&b<=B;)g(F)?F=c[++S]:g(T)?T=c[--y]:Ot(F,N)?(et(F,N,m,_,b),F=c[++S],N=_[++b]):Ot(T,j)?(et(T,j,m,_,B),T=c[--y],j=_[--B]):Ot(F,j)?(et(F,j,m,_,B),Qn&&i.insertBefore(f,F.elm,i.nextSibling(T.elm)),F=c[++S],j=_[--B]):Ot(T,N)?(et(T,N,m,_,b),Qn&&i.insertBefore(f,T.elm,F.elm),T=c[--y],N=_[++b]):(g(mt)&&(mt=Va(c,S,y)),pt=u(N.key)?mt[N.key]:pn(N,c,S,y),g(pt)?v(N,m,f,F.elm,!1,_,b):(lt=c[pt],Ot(lt,N)?(et(lt,N,m,_,b),c[pt]=void 0,Qn&&i.insertBefore(f,lt.elm,F.elm)):v(N,m,f,F.elm,!1,_,b)),N=_[++b]);S>y?(Ye=g(_[B+1])?null:_[B+1].elm,Ht(f,Ye,_,b,B,m)):b>B&&nt(c,S,y)}function Nt(f){for(var c={},_=0;_<f.length;_++){var m=f[_],C=m.key;u(C)&&(c[C]?A("Duplicate keys detected: '"+C+"'. This may cause an update error.",m.context):c[C]=!0)}}function pn(f,c,_,m){for(var C=_;C<m;C++){var S=c[C];if(u(S)&&Ot(f,S))return C}}function et(f,c,_,m,C,S){if(f!==c){u(c.elm)&&u(m)&&(c=m[C]=zn(c));var b=c.elm=f.elm;if(H(f.isAsyncPlaceholder)){u(c.asyncFactory.resolved)?at(f.elm,c,_):c.isAsyncPlaceholder=!0;return}if(H(c.isStatic)&&H(f.isStatic)&&c.key===f.key&&(H(c.isCloned)||H(c.isOnce))){c.componentInstance=f.componentInstance;return}var y,F=c.data;u(F)&&u(y=F.hook)&&u(y=y.prepatch)&&y(f,c);var T=f.children,B=c.children;if(u(F)&&P(c)){for(y=0;y<r.update.length;++y)r.update[y](f,c);u(y=F.hook)&&u(y=y.update)&&y(f,c)}g(c.text)?u(T)&&u(B)?T!==B&&jt(b,T,B,_,S):u(B)?(Nt(B),u(f.text)&&i.setTextContent(b,""),Ht(b,null,B,0,B.length-1,_)):u(T)?nt(T,0,T.length-1):u(f.text)&&i.setTextContent(b,""):f.text!==c.text&&i.setTextContent(b,c.text),u(F)&&u(y=F.hook)&&u(y=y.postpatch)&&y(f,c)}}function st(f,c,_){if(H(_)&&u(f.parent))f.parent.data.pendingInsert=c;else for(var m=0;m<c.length;++m)c[m].data.hook.insert(c[m])}var At=!1,ln=Z("attrs,class,staticClass,staticStyle,key");function at(f,c,_,m){var C,S=c.tag,b=c.data,y=c.children;if(m=m||b&&b.pre,c.elm=f,H(c.isComment)&&u(c.asyncFactory))return c.isAsyncPlaceholder=!0,!0;if(!Dt(f,c,m))return!1;if(u(b)&&(u(C=b.hook)&&u(C=C.init)&&C(c,!0),u(C=c.componentInstance)))return x(c,_),!0;if(u(S)){if(u(y))if(!f.hasChildNodes())_t(c,y,_);else if(u(C=b)&&u(C=C.domProps)&&u(C=C.innerHTML)){if(C!==f.innerHTML)return typeof console!="undefined"&&!At&&(At=!0,console.warn("Parent: ",f),console.warn("server innerHTML: ",C),console.warn("client innerHTML: ",f.innerHTML)),!1}else{for(var F=!0,T=f.firstChild,B=0;B<y.length;B++){if(!T||!at(T,y[B],_,m)){F=!1;break}T=T.nextSibling}if(!F||T)return typeof console!="undefined"&&!At&&(At=!0,console.warn("Parent: ",f),console.warn("Mismatching childNodes vs. VNodes: ",f.childNodes,y)),!1}if(u(b)){var N=!1;for(var j in b)if(!ln(j)){N=!0,R(c,_);break}!N&&b.class&&wn(b.class)}}else f.data!==c.text&&(f.data=c.text);return!0}function Dt(f,c,_){return u(c.tag)?c.tag.indexOf("vue-component")===0||!d(c,_)&&c.tag.toLowerCase()===(f.tagName&&f.tagName.toLowerCase()):f.nodeType===(c.isComment?8:3)}return function(c,_,m,C){if(g(_)){u(c)&&vt(c);return}var S=!1,b=[];if(g(c))S=!0,v(_,b);else{var y=u(c.nodeType);if(!y&&Ot(c,_))et(c,_,b,null,null,C);else{if(y){if(c.nodeType===1&&c.hasAttribute(or)&&(c.removeAttribute(or),m=!0),H(m)){if(at(c,_,b))return st(_,b,!0),c;A("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")}c=s(c)}var F=c.elm,T=i.parentNode(F);if(v(_,b,F._leaveCb?null:T,i.nextSibling(F)),u(_.parent))for(var B=_.parent,N=P(_);B;){for(var j=0;j<r.destroy.length;++j)r.destroy[j](B);if(B.elm=_.elm,N){for(var mt=0;mt<r.create.length;++mt)r.create[mt](kt,B);var pt=B.data.hook.insert;if(pt.merged)for(var lt=1;lt<pt.fns.length;lt++)pt.fns[lt]()}else Pt(B);B=B.parent}u(T)?nt([c],0,0):u(c.tag)&&vt(c)}}return st(_,b,S),_.elm}}var Pa={create:De,update:De,destroy:function(e){De(e,kt)}};function De(t,e){(t.data.directives||e.data.directives)&&Ra(t,e)}function Ra(t,e){var n=t===kt,r=e===kt,o=fo(t.data.directives,t.context),i=fo(e.data.directives,e.context),s=[],p=[],l,d,a;for(l in i)d=o[l],a=i[l],d?(a.oldValue=d.value,a.oldArg=d.arg,sn(a,"update",e,t),a.def&&a.def.componentUpdated&&p.push(a)):(sn(a,"bind",e,t),a.def&&a.def.inserted&&s.push(a));if(s.length){var v=function(){for(var h=0;h<s.length;h++)sn(s[h],"inserted",e,t)};n?dt(e,"insert",v):v()}if(p.length&&dt(e,"postpatch",function(){for(var h=0;h<p.length;h++)sn(p[h],"componentUpdated",e,t)}),!n)for(l in o)i[l]||sn(o[l],"unbind",t,t,r)}var Za=Object.create(null);function fo(t,e){var n=Object.create(null);if(!t)return n;var r,o;for(r=0;r<t.length;r++)o=t[r],o.modifiers||(o.modifiers=Za),n[Ga(o)]=o,o.def=ne(e.$options,"directives",o.name,!0);return n}function Ga(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function sn(t,e,n,r,o){var i=t.def&&t.def[e];if(i)try{i(n.elm,t,n,r,o)}catch(s){ut(s,n.context,"directive "+t.name+" "+e+" hook")}}var ja=[Qa,Pa];function uo(t,e){var n=e.componentOptions;if(!(u(n)&&n.Ctor.options.inheritAttrs===!1)&&!(g(t.data.attrs)&&g(e.data.attrs))){var r,o,i,s=e.elm,p=t.data.attrs||{},l=e.data.attrs||{};u(l.__ob__)&&(l=e.data.attrs=O({},l));for(r in l)o=l[r],i=p[r],i!==o&&_o(s,r,o,e.data.pre);(It||Pn)&&l.value!==p.value&&_o(s,"value",l.value);for(r in p)g(l[r])&&(ke(r)?s.removeAttributeNS(Fe,po(r)):ao(r)||s.removeAttribute(r))}}function _o(t,e,n,r){r||t.tagName.indexOf("-")>-1?ho(t,e,n):ha(e)?On(n)?t.removeAttribute(e):(n=e==="allowfullscreen"&&t.tagName==="EMBED"?"true":e,t.setAttribute(e,n)):ao(e)?t.setAttribute(e,_a(e,n)):ke(e)?On(n)?t.removeAttributeNS(Fe,po(e)):t.setAttributeNS(Fe,e,n):ho(t,e,n)}function ho(t,e,n){if(On(n))t.removeAttribute(e);else{if(It&&!Qt&&t.tagName==="TEXTAREA"&&e==="placeholder"&&n!==""&&!t.__ieph){var r=function(o){o.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var Xa={create:uo,update:uo};function vo(t,e){var n=e.elm,r=e.data,o=t.data;if(!(g(r.staticClass)&&g(r.class)&&(g(o)||g(o.staticClass)&&g(o.class)))){var i=va(e),s=n._transitionClasses;u(s)&&(i=Oe(i,Me(s))),i!==n._prevClass&&(n.setAttribute("class",i),n._prevClass=i)}}var za={create:vo,update:vo},$e="__r",Ie="__c";function qa(t){if(u(t[$e])){var e=It?"change":"input";t[e]=[].concat(t[$e],t[e]||[]),delete t[$e]}u(t[Ie])&&(t.change=[].concat(t[Ie],t.change||[]),delete t[Ie])}var an;function Ya(t,e,n){var r=an;return function o(){var i=e.apply(null,arguments);i!==null&&Ao(t,o,n,r)}}var Ja=oe&&!(lr&&Number(lr[1])<=53);function Wa(t,e,n,r){if(Ja){var o=Kr,i=e;e=i._wrapper=function(s){if(s.target===s.currentTarget||s.timeStamp>=o||s.timeStamp<=0||s.target.ownerDocument!==document)return i.apply(this,arguments)}}an.addEventListener(t,e,cr?{capture:n,passive:r}:n)}function Ao(t,e,n,r){(r||an).removeEventListener(t,e._wrapper||e,n)}function mo(t,e){if(!(g(t.data.on)&&g(e.data.on))){var n=e.data.on||{},r=t.data.on||{};an=e.elm,qa(n),Hr(n,r,Wa,Ao,Ya,e.context),an=void 0}}var Ka={create:mo,update:mo},Hn;function Co(t,e){if(!(g(t.data.domProps)&&g(e.data.domProps))){var n,r,o=e.elm,i=t.data.domProps||{},s=e.data.domProps||{};u(s.__ob__)&&(s=e.data.domProps=O({},s));for(n in i)n in s||(o[n]="");for(n in s){if(r=s[n],n==="textContent"||n==="innerHTML"){if(e.children&&(e.children.length=0),r===i[n])continue;o.childNodes.length===1&&o.removeChild(o.childNodes[0])}if(n==="value"&&o.tagName!=="PROGRESS"){o._value=r;var p=g(r)?"":String(r);t1(o,p)&&(o.value=p)}else if(n==="innerHTML"&&He(o.tagName)&&g(o.innerHTML)){Hn=Hn||document.createElement("div"),Hn.innerHTML="<svg>"+r+"</svg>";for(var l=Hn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;l.firstChild;)o.appendChild(l.firstChild)}else if(r!==i[n])try{o[n]=r}catch{}}}}function t1(t,e){return!t.composing&&(t.tagName==="OPTION"||n1(t,e)||e1(t,e))}function n1(t,e){var n=!0;try{n=document.activeElement!==t}catch{}return n&&t.value!==e}function e1(t,e){var n=t.value,r=t._vModifiers;if(u(r)){if(r.number)return Xt(n)!==Xt(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var r1={create:Co,update:Co},o1=Ct(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(o){if(o){var i=o.split(r);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e});function Qe(t){var e=go(t.style);return t.staticStyle?O(t.staticStyle,e):e}function go(t){return Array.isArray(t)?nr(t):typeof t=="string"?o1(t):t}function i1(t,e){var n={},r;if(e)for(var o=t;o.componentInstance;)o=o.componentInstance._vnode,o&&o.data&&(r=Qe(o.data))&&O(n,r);(r=Qe(t.data))&&O(n,r);for(var i=t;i=i.parent;)i.data&&(r=Qe(i.data))&&O(n,r);return n}var s1=/^--/,yo=/\s*!important$/,xo=function(t,e,n){if(s1.test(e))t.style.setProperty(e,n);else if(yo.test(n))t.style.setProperty(yt(e),n.replace(yo,""),"important");else{var r=a1(e);if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)t.style[r]=n[o];else t.style[r]=n}},bo=["Webkit","Moz","ms"],Nn,a1=Ct(function(t){if(Nn=Nn||document.createElement("div").style,t=gt(t),t!=="filter"&&t in Nn)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<bo.length;n++){var r=bo[n]+e;if(r in Nn)return r}});function wo(t,e){var n=e.data,r=t.data;if(!(g(n.staticStyle)&&g(n.style)&&g(r.staticStyle)&&g(r.style))){var o,i,s=e.elm,p=r.staticStyle,l=r.normalizedStyle||r.style||{},d=p||l,a=go(e.data.style)||{};e.data.normalizedStyle=u(a.__ob__)?O({},a):a;var v=i1(e,!0);for(i in d)g(v[i])&&xo(s,i,"");for(i in v)o=v[i],o!==d[i]&&xo(s,i,o??"")}}var p1={create:wo,update:wo},Eo=/\s+/;function So(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(Eo).forEach(function(r){return t.classList.add(r)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function To(t,e){if(!(!e||!(e=e.trim())))if(t.classList)e.indexOf(" ")>-1?e.split(Eo).forEach(function(o){return t.classList.remove(o)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Bo(t){if(!!t){if(typeof t=="object"){var e={};return t.css!==!1&&O(e,Fo(t.name||"v")),O(e,t),e}else if(typeof t=="string")return Fo(t)}}var Fo=Ct(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),ko=V&&!Qt,Rt="transition",Ue="animation",Dn="transition",$n="transitionend",Ve="animation",Oo="animationend";ko&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Dn="WebkitTransition",$n="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(Ve="WebkitAnimation",Oo="webkitAnimationEnd"));var Mo=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ho(t){Mo(function(){Mo(t)})}function Mt(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),So(t,e))}function it(t,e){t._transitionClasses&&rt(t._transitionClasses,e),To(t,e)}function No(t,e,n){var r=Do(t,e),o=r.type,i=r.timeout,s=r.propCount;if(!o)return n();var p=o===Rt?$n:Oo,l=0,d=function(){t.removeEventListener(p,a),n()},a=function(v){v.target===t&&++l>=s&&d()};setTimeout(function(){l<s&&d()},i+1),t.addEventListener(p,a)}var l1=/\b(transform|all)(,|$)/;function Do(t,e){var n=window.getComputedStyle(t),r=(n[Dn+"Delay"]||"").split(", "),o=(n[Dn+"Duration"]||"").split(", "),i=$o(r,o),s=(n[Ve+"Delay"]||"").split(", "),p=(n[Ve+"Duration"]||"").split(", "),l=$o(s,p),d,a=0,v=0;e===Rt?i>0&&(d=Rt,a=i,v=o.length):e===Ue?l>0&&(d=Ue,a=l,v=p.length):(a=Math.max(i,l),d=a>0?i>l?Rt:Ue:null,v=d?d===Rt?o.length:p.length:0);var h=d===Rt&&l1.test(n[Dn+"Property"]);return{type:d,timeout:a,propCount:v,hasTransform:h}}function $o(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(n,r){return Io(n)+Io(t[r])}))}function Io(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Le(t,e){var n=t.elm;u(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Bo(t.data.transition);if(!g(r)&&!(u(n._enterCb)||n.nodeType!==1)){for(var o=r.css,i=r.type,s=r.enterClass,p=r.enterToClass,l=r.enterActiveClass,d=r.appearClass,a=r.appearToClass,v=r.appearActiveClass,h=r.beforeEnter,x=r.enter,E=r.afterEnter,w=r.enterCancelled,_t=r.beforeAppear,P=r.appear,R=r.afterAppear,ht=r.appearCancelled,Ht=r.duration,vt=Ft,nt=Ft.$vnode;nt&&nt.parent;)vt=nt.context,nt=nt.parent;var z=!vt._isMounted||!t.isRootInsert;if(!(z&&!P&&P!=="")){var jt=z&&d?d:s,Nt=z&&v?v:l,pn=z&&a?a:p,et=z&&_t||h,st=z&&typeof P=="function"?P:x,At=z&&R||E,ln=z&&ht||w,at=Xt(I(Ht)?Ht.enter:Ht);at!=null&&Uo(at,"enter",t);var Dt=o!==!1&&!Qt,f=Pe(st),c=n._enterCb=dn(function(){Dt&&(it(n,pn),it(n,Nt)),c.cancelled?(Dt&&it(n,jt),ln&&ln(n)):At&&At(n),n._enterCb=null});t.data.show||dt(t,"insert",function(){var _=n.parentNode,m=_&&_._pending&&_._pending[t.key];m&&m.tag===t.tag&&m.elm._leaveCb&&m.elm._leaveCb(),st&&st(n,c)}),et&&et(n),Dt&&(Mt(n,jt),Mt(n,Nt),Ho(function(){it(n,jt),c.cancelled||(Mt(n,pn),f||(Vo(at)?setTimeout(c,at):No(n,i,c)))})),t.data.show&&(e&&e(),st&&st(n,c)),!Dt&&!f&&c()}}}function Qo(t,e){var n=t.elm;u(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Bo(t.data.transition);if(g(r)||n.nodeType!==1)return e();if(u(n._leaveCb))return;var o=r.css,i=r.type,s=r.leaveClass,p=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,a=r.leave,v=r.afterLeave,h=r.leaveCancelled,x=r.delayLeave,E=r.duration,w=o!==!1&&!Qt,_t=Pe(a),P=Xt(I(E)?E.leave:E);u(P)&&Uo(P,"leave",t);var R=n._leaveCb=dn(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(it(n,p),it(n,l)),R.cancelled?(w&&it(n,s),h&&h(n)):(e(),v&&v(n)),n._leaveCb=null});x?x(ht):ht();function ht(){R.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),w&&(Mt(n,s),Mt(n,l),Ho(function(){it(n,s),R.cancelled||(Mt(n,p),_t||(Vo(P)?setTimeout(R,P):No(n,i,R)))})),a&&a(n,R),!w&&!_t&&R())}}function Uo(t,e,n){typeof t!="number"?A("<transition> explicit "+e+" duration is not a valid number - got "+JSON.stringify(t)+".",n.context):isNaN(t)&&A("<transition> explicit "+e+" duration is NaN - the duration expression might be incorrect.",n.context)}function Vo(t){return typeof t=="number"&&!isNaN(t)}function Pe(t){if(g(t))return!1;var e=t.fns;return u(e)?Pe(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Lo(t,e){e.data.show!==!0&&Le(e)}var c1=V?{create:Lo,activate:Lo,remove:function(e,n){e.data.show!==!0?Qo(e,n):n()}}:{},f1=[Xa,za,Ka,r1,p1,c1],u1=f1.concat(ja),d1=La({nodeOps:Ia,modules:u1});Qt&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Re(t,"input")});var Po={inserted:function(e,n,r,o){r.tag==="select"?(o.elm&&!o.elm._vOptions?dt(r,"postpatch",function(){Po.componentUpdated(e,n,r)}):Ro(e,n,r.context),e._vOptions=[].map.call(e.options,In)):(r.tag==="textarea"||Ne(e.type))&&(e._vModifiers=n.modifiers,n.modifiers.lazy||(e.addEventListener("compositionstart",_1),e.addEventListener("compositionend",jo),e.addEventListener("change",jo),Qt&&(e.vmodel=!0)))},componentUpdated:function(e,n,r){if(r.tag==="select"){Ro(e,n,r.context);var o=e._vOptions,i=e._vOptions=[].map.call(e.options,In);if(i.some(function(p,l){return!xt(p,o[l])})){var s=e.multiple?n.value.some(function(p){return Go(p,i)}):n.value!==n.oldValue&&Go(n.value,i);s&&Re(e,"change")}}}};function Ro(t,e,n){Zo(t,e,n),(It||Pn)&&setTimeout(function(){Zo(t,e,n)},0)}function Zo(t,e,n){var r=e.value,o=t.multiple;if(o&&!Array.isArray(r)){A('<select multiple v-model="'+e.expression+'"> expects an Array value for its binding, but got '+Object.prototype.toString.call(r).slice(8,-1),n);return}for(var i,s,p=0,l=t.options.length;p<l;p++)if(s=t.options[p],o)i=rr(r,In(s))>-1,s.selected!==i&&(s.selected=i);else if(xt(In(s),r)){t.selectedIndex!==p&&(t.selectedIndex=p);return}o||(t.selectedIndex=-1)}function Go(t,e){return e.every(function(n){return!xt(n,t)})}function In(t){return"_value"in t?t._value:t.value}function _1(t){t.target.composing=!0}function jo(t){!t.target.composing||(t.target.composing=!1,Re(t.target,"input"))}function Re(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Ze(t){return t.componentInstance&&(!t.data||!t.data.transition)?Ze(t.componentInstance._vnode):t}var h1={bind:function(e,n,r){var o=n.value;r=Ze(r);var i=r.data&&r.data.transition,s=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;o&&i?(r.data.show=!0,Le(r,function(){e.style.display=s})):e.style.display=o?s:"none"},update:function(e,n,r){var o=n.value,i=n.oldValue;if(!o!=!i){r=Ze(r);var s=r.data&&r.data.transition;s?(r.data.show=!0,o?Le(r,function(){e.style.display=e.__vOriginalDisplay}):Qo(r,function(){e.style.display="none"})):e.style.display=o?e.__vOriginalDisplay:"none"}},unbind:function(e,n,r,o,i){i||(e.style.display=e.__vOriginalDisplay)}},v1={model:Po,show:h1},Xo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ge(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Ge(zr(e.children)):t}function zo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var o=n._parentListeners;for(var i in o)e[gt(i)]=o[i];return e}function qo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function A1(t){for(;t=t.parent;)if(t.data.transition)return!0}function m1(t,e){return e.key===t.key&&e.tag===t.tag}var C1=function(t){return t.tag||tn(t)},g1=function(t){return t.name==="show"},y1={name:"transition",props:Xo,abstract:!0,render:function(e){var n=this,r=this.$slots.default;if(!!r&&(r=r.filter(C1),!!r.length)){r.length>1&&A("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);var o=this.mode;o&&o!=="in-out"&&o!=="out-in"&&A("invalid <transition> mode: "+o,this.$parent);var i=r[0];if(A1(this.$vnode))return i;var s=Ge(i);if(!s)return i;if(this._leaving)return qo(e,i);var p="__transition-"+this._uid+"-";s.key=s.key==null?s.isComment?p+"comment":p+s.tag:ct(s.key)?String(s.key).indexOf(p)===0?s.key:p+s.key:s.key;var l=(s.data||(s.data={})).transition=zo(this),d=this._vnode,a=Ge(d);if(s.data.directives&&s.data.directives.some(g1)&&(s.data.show=!0),a&&a.data&&!m1(s,a)&&!tn(a)&&!(a.componentInstance&&a.componentInstance._vnode.isComment)){var v=a.data.transition=O({},l);if(o==="out-in")return this._leaving=!0,dt(v,"afterLeave",function(){n._leaving=!1,n.$forceUpdate()}),qo(e,i);if(o==="in-out"){if(tn(s))return d;var h,x=function(){h()};dt(l,"afterEnter",x),dt(l,"enterCancelled",x),dt(v,"delayLeave",function(E){h=E})}}return i}}},Yo=O({tag:String,moveClass:String},Xo);delete Yo.mode;var x1={props:Yo,beforeMount:function(){var e=this,n=this._update;this._update=function(r,o){var i=Yr(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),n.call(e,r,o)}},render:function(e){for(var n=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),o=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],p=zo(this),l=0;l<i.length;l++){var d=i[l];if(d.tag)if(d.key!=null&&String(d.key).indexOf("__vlist")!==0)s.push(d),r[d.key]=d,(d.data||(d.data={})).transition=p;else{var a=d.componentOptions,v=a?a.Ctor.options.name||a.tag||"":d.tag;A("<transition-group> children must be keyed: <"+v+">")}}if(o){for(var h=[],x=[],E=0;E<o.length;E++){var w=o[E];w.data.transition=p,w.data.pos=w.elm.getBoundingClientRect(),r[w.key]?h.push(w):x.push(w)}this.kept=e(n,null,h),this.removed=x}return e(n,null,s)},updated:function(){var e=this.prevChildren,n=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,n)||(e.forEach(b1),e.forEach(w1),e.forEach(E1),this._reflow=document.body.offsetHeight,e.forEach(function(r){if(r.data.moved){var o=r.elm,i=o.style;Mt(o,n),i.transform=i.WebkitTransform=i.transitionDuration="",o.addEventListener($n,o._moveCb=function s(p){p&&p.target!==o||(!p||/transform$/.test(p.propertyName))&&(o.removeEventListener($n,s),o._moveCb=null,it(o,n))})}}))},methods:{hasMove:function(e,n){if(!ko)return!1;if(this._hasMove)return this._hasMove;var r=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(i){To(r,i)}),So(r,n),r.style.display="none",this.$el.appendChild(r);var o=Do(r);return this.$el.removeChild(r),this._hasMove=o.hasTransform}}};function b1(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function w1(t){t.data.newPos=t.elm.getBoundingClientRect()}function E1(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,o=e.top-n.top;if(r||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+r+"px,"+o+"px)",i.transitionDuration="0s"}}var S1={Transition:y1,TransitionGroup:x1};M.config.mustUseProp=ua;M.config.isReservedTag=co;M.config.isReservedAttr=ca;M.config.getTagNamespace=xa;M.config.isUnknownElement=ba;O(M.options.directives,v1);O(M.options.components,S1);M.prototype.__patch__=V?d1:$;M.prototype.$mount=function(t,e){return t=t&&V?wa(t):void 0,Hs(this,t,e)};V&&setTimeout(function(){k.devtools&&(An?An.emit("init",M):console[console.info?"info":"log"](`Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools`)),k.productionTip!==!1&&typeof console!="undefined"&&console[console.info?"info":"log"](`You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html`)},0);var je=M;var T1={name:"Loader"},Jo=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._m(0)},B1=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"loader"}),t._v(" "),n("span",[t._v("loading..")])])}];Jo._withStripped=!0;var F1=function(t){!t||t("data-v-2afd6a14_0",{source:`
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
`]},media:void 0})},k1="data-v-2afd6a14",O1=void 0,M1=!1;function H1(t,e,n,r,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};a.__file=`<template>
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
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=r;{let v;if(e&&(v=s?function(h){e.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){e.call(this,p(h))}),v!==void 0)if(a.functional){let h=a.render;a.render=function(E,w){return v.call(w),h(E,w)}}else{let h=a.beforeCreate;a.beforeCreate=h?[].concat(h,v):[v]}}return a}function Xe(){let t=Xe.styles||(Xe.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=e?o.media||"default":r,s=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!s.ids.includes(r)){let p=o.source,l=s.ids.length;if(s.ids.push(r),e&&(s.element=s.element||document.querySelector("style[data-group="+i+"]")),!s.element){let d=document.head||document.getElementsByTagName("head")[0],a=s.element=document.createElement("style");a.type="text/css",o.media&&a.setAttribute("media",o.media),e&&(a.setAttribute("data-group",i),a.setAttribute("data-next-index","0")),d.appendChild(a)}if(e&&(l=parseInt(s.element.getAttribute("data-next-index")),s.element.setAttribute("data-next-index",l+1)),s.element.styleSheet)s.parts.push(p),s.element.styleSheet.cssText=s.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(p),a=s.element.childNodes;a[l]&&s.element.removeChild(a[l]),a.length?s.element.insertBefore(d,a[l]):s.element.appendChild(d)}}}}var N1=H1({render:Jo,staticRenderFns:B1},F1,T1,k1,M1,O1,!1,Xe,void 0,void 0),Wo=N1;var D1={name:"Equation"},Ko=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"100",viewBox:"0 -1458 11066 2416","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("path",{attrs:{id:"MJX-87-TEX-I-78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-SO-221A",d:"M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),t._v(" "),n("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[n("g",{attrs:{"data-mml-node":"math"}},[n("g",{attrs:{"data-mml-node":"mtable"}},[n("g",{attrs:{"data-mml-node":"mtr",transform:"translate(0, -262)"}},[n("g",{attrs:{"data-mml-node":"mtd"}},[n("g",{attrs:{"data-mml-node":"msub"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-31"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(975.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2C"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"msub",transform:"translate(1420.2, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(2673.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-3D"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3729.3, 0)"}},[n("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 787.5)"}},[n("g",{attrs:{"data-mml-node":"mo"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(778, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1429.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-B1"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"msqrt",transform:"translate(2429.4, 0)"}},[n("g",{attrs:{transform:"translate(1000, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(429, 0)"}},[n("g",{attrs:{"data-mml-node":"mo"}},[n("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v(`
                            \xB2
                          `)])])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1005, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(2005.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-34"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(2505.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(3034.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-63"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(0, 22.5)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-SO-221A"}})]),t._v(" "),n("rect",{attrs:{width:"3467.2",height:"60",x:"1000",y:"812.5"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mrow",transform:"translate(3153.8, -686)"}},[n("g",{attrs:{"data-mml-node":"mn"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(500, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})])]),t._v(" "),n("rect",{attrs:{width:"7096.7",height:"60",x:"120",y:"220"}})])])])])])])])])},$1=[];Ko._withStripped=!0;var I1=void 0,Q1=void 0,U1=void 0,V1=!1;function L1(t,e,n,r,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>
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
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=r,a}var P1=L1({render:Ko,staticRenderFns:$1},I1,D1,Q1,V1,U1,!1,void 0,void 0,void 0),ti=P1;var R1={},ni=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://github.com/ProxyLabs",target:"_blank"}},[n("svg",{staticClass:"logo",attrs:{viewBox:"0 0 648 121",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z",fill:"url(#paint0_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z",fill:"url(#paint1_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z",fill:"url(#paint2_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z",fill:"url(#paint3_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z",fill:"url(#paint4_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z",fill:"url(#paint5_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z",fill:"url(#paint6_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z",fill:"url(#paint7_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z",fill:"url(#paint8_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z",fill:"url(#paint9_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z",fill:"url(#paint10_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M84.6285 34.026H92.6247V26.027H84.6285V34.026Z",fill:"url(#paint11_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z",fill:"url(#paint12_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M108.791 14.4016H123.17V0H108.791V14.4016Z",fill:"url(#paint13_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z",fill:"url(#paint14_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M97.811 33.2278H104.194V26.8426H97.811V33.2278Z",fill:"url(#paint15_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M110.803 27.953H120.395V18.3578H110.803V27.953Z",fill:"url(#paint16_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M106.623 38.0341H110.942V33.7137H106.623V38.0341Z",fill:"url(#paint17_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M114.792 42.4067H121.175V36.0388H114.792V42.4067Z",fill:"url(#paint18_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z",fill:"url(#paint19_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z",fill:"url(#paint20_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z",fill:"url(#paint21_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z",fill:"url(#paint22_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z",fill:"url(#paint23_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z",fill:"url(#paint24_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z",fill:"url(#paint25_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z",fill:"url(#paint26_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z",fill:"url(#paint27_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z",fill:"url(#paint28_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z",fill:"url(#paint29_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z",fill:"url(#paint30_linear_3_40)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_3_40",x1:"16.2335",y1:"78.5655",x2:"90.5021",y2:"14.0713",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_3_40",x1:"33.4419",y1:"98.3816",x2:"107.71",y2:"33.8874",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_3_40",x1:"51.0435",y1:"118.651",x2:"125.312",y2:"54.1567",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_3_40",x1:"62.0301",y1:"131.303",x2:"136.299",y2:"66.8084",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint4_linear_3_40",x1:"46.0063",y1:"112.85",x2:"120.275",y2:"48.3561",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint5_linear_3_40",x1:"22.5737",y1:"85.8663",x2:"96.8421",y2:"21.3722",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint6_linear_3_40",x1:"5.30527",y1:"65.9808",x2:"79.5737",y2:"1.48666",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint7_linear_3_40",x1:"39.9594",y1:"105.887",x2:"114.228",y2:"41.3928",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint8_linear_3_40",x1:"14.3736",y1:"76.4235",x2:"88.642",y2:"11.9294",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint9_linear_3_40",x1:"30.2892",y1:"94.7512",x2:"104.558",y2:"30.2571",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint10_linear_3_40",x1:"21.9139",y1:"85.1065",x2:"96.1823",y2:"20.6124",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint11_linear_3_40",x1:"23.3495",y1:"86.7596",x2:"97.618",y2:"22.2656",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint12_linear_3_40",x1:"11.5745",y1:"73.2003",x2:"85.8427",y2:"8.70587",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint13_linear_3_40",x1:"23.8107",y1:"87.2911",x2:"98.0794",y2:"22.7968",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint14_linear_3_40",x1:"23.6893",y1:"87.1514",x2:"97.958",y2:"22.657",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint15_linear_3_40",x1:"28.6723",y1:"92.8895",x2:"102.941",y2:"28.3951",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint16_linear_3_40",x1:"31.5413",y1:"96.193",x2:"105.81",y2:"31.6988",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint17_linear_3_40",x1:"34.9074",y1:"100.07",x2:"109.176",y2:"35.5752",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint18_linear_3_40",x1:"40.5234",y1:"106.536",x2:"114.792",y2:"42.0425",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint19_linear_3_40",x1:"17.9841",y1:"80.5813",x2:"92.2529",y2:"16.0874",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint20_linear_3_40",x1:"31.505",y1:"96.1513",x2:"105.774",y2:"31.6572",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint21_linear_3_40",x1:"39.6018",y1:"105.475",x2:"113.87",y2:"40.9808",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint22_linear_3_40",x1:"156.752",y1:"71.2438",x2:"644.928",y2:"71.2438",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint23_linear_3_40",x1:"156.752",y1:"80.3112",x2:"644.928",y2:"80.3112",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint24_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint25_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint26_linear_3_40",x1:"156.752",y1:"89.2923",x2:"644.928",y2:"89.2923",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint27_linear_3_40",x1:"156.752",y1:"71.3085",x2:"644.928",y2:"71.3085",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint28_linear_3_40",x1:"156.752",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint29_linear_3_40",x1:"156.752",y1:"71.287",x2:"644.928",y2:"71.287",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint30_linear_3_40",x1:"156.753",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])])},Z1=[];ni._withStripped=!0;var G1=void 0,j1=void 0,X1=void 0,z1=!1;function q1(t,e,n,r,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>
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
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=r,a}var Y1=q1({render:ni,staticRenderFns:Z1},G1,R1,j1,z1,X1,!1,void 0,void 0,void 0),ei=Y1;var J1={},ri=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://github.com/ProxyLabs/mina-secret-exchange",target:"_blank"}},[n("svg",{staticClass:"github",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])])},W1=[];ri._withStripped=!0;var K1=void 0,t2=void 0,n2=void 0,e2=!1;function r2(t,e,n,r,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>
  <a href="https://github.com/ProxyLabs/mina-secret-exchange" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" class="github" viewBox="0 0 24 24">
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  </a>
</template>
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=r,a}var o2=r2({render:ri,staticRenderFns:W1},K1,J1,t2,e2,n2,!1,void 0,void 0,void 0),oi=o2;var i2={name:"Snackbar",props:["snack"],mounted(){var t=document.getElementById("snackbar");t.className="",t.classList.add("show"),console.log(this.$props.snack.type),this.$props.snack.type=="failure"?t.classList.add("type-failure"):this.$props.snack.type=="success"?t.classList.add("type-success"):t.classList.add("type-info"),setTimeout(function(){t.className=t.className.replace("show","")},3e3)}},ii=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"snackbar"}},[t._v(`
  `+t._s(t.$props.snack.message)+`
`)])},s2=[];ii._withStripped=!0;var a2=function(t){!t||t("data-v-2afebe38_0",{source:`
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
`]},media:void 0})},p2="data-v-2afebe38",l2=void 0,c2=!1;function f2(t,e,n,r,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};a.__file=`<template>
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
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=r;{let v;if(e&&(v=s?function(h){e.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){e.call(this,p(h))}),v!==void 0)if(a.functional){let h=a.render;a.render=function(E,w){return v.call(w),h(E,w)}}else{let h=a.beforeCreate;a.beforeCreate=h?[].concat(h,v):[v]}}return a}function ze(){let t=ze.styles||(ze.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=e?o.media||"default":r,s=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!s.ids.includes(r)){let p=o.source,l=s.ids.length;if(s.ids.push(r),e&&(s.element=s.element||document.querySelector("style[data-group="+i+"]")),!s.element){let d=document.head||document.getElementsByTagName("head")[0],a=s.element=document.createElement("style");a.type="text/css",o.media&&a.setAttribute("media",o.media),e&&(a.setAttribute("data-group",i),a.setAttribute("data-next-index","0")),d.appendChild(a)}if(e&&(l=parseInt(s.element.getAttribute("data-next-index")),s.element.setAttribute("data-next-index",l+1)),s.element.styleSheet)s.parts.push(p),s.element.styleSheet.cssText=s.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(p),a=s.element.childNodes;a[l]&&s.element.removeChild(a[l]),a.length?s.element.insertBefore(d,a[l]):s.element.appendChild(d)}}}}var u2=f2({render:ii,staticRenderFns:s2},a2,i2,p2,c2,l2,!1,ze,void 0,void 0),si=u2;var d2={name:"Mina"},ai=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 979 979",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"489.5",cy:"489.5",r:"489.5",fill:"#4F4F4F"}}),t._v(" "),n("path",{attrs:{d:"M488.752 794.84C498.483 795.398 508.037 792.07 515.316 785.587C522.594 779.104 527 769.997 527.566 760.267L533.652 713.97C504.11 720.817 473.394 720.817 443.852 713.97L449.739 760.366C450.469 770.063 454.954 779.091 462.241 785.53C469.528 791.969 479.04 795.309 488.752 794.84V794.84ZM751.966 784.862H824.505V370.784C824.505 314.26 798.363 276.294 751.966 261.976V784.862ZM153 784.862H225.538V261.727C179.441 276.045 153 314.01 153 370.535V784.862ZM533.652 713.97C580.897 702.146 612.127 668.421 619.711 609.203L665.259 257.436C612.776 269.959 584.09 309.87 575.659 374.725L533.652 713.97ZM443.852 713.97L401.896 374.725C393.415 309.87 364.728 269.959 312.445 257.436L357.993 609.203C365.577 668.271 395.959 701.996 444.052 713.97H443.852ZM751.966 261.827V228.9C751.966 200.214 735.104 184 712.304 184C689.505 184 673.491 197.52 669.3 227.004L665.06 257.387C693.942 251.708 723.774 253.164 751.966 261.627V261.827ZM225.538 261.627C241.894 256.362 258.995 253.784 276.176 253.994C288.355 253.741 300.524 254.879 312.445 257.387L308.254 227.004C304.014 197.52 287.999 184 265.2 184C242.401 184 225.538 200.014 225.538 228.9V261.627Z",fill:"#FF603B"}})])},_2=[];ai._withStripped=!0;var h2=void 0,v2=void 0,A2=void 0,m2=!1;function C2(t,e,n,r,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>
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
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=r,a}var g2=C2({render:ai,staticRenderFns:_2},h2,d2,v2,m2,A2,!1,void 0,void 0,void 0),pi=g2;var y2={name:"Proxy"},li=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 979 979",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"489.5",cy:"489.5",r:"489.5",fill:"#4F4F4F"}}),t._v(" "),n("path",{attrs:{d:"M528.517 372.193C528.419 381.305 531.167 385.616 540.099 388.164C572.883 397.375 605.47 407.272 638.156 416.874C640.807 417.657 643.554 418.05 647.58 418.833C647.971 414.914 648.462 411.876 648.462 408.839C648.462 399.825 648.462 390.908 648.462 381.893H609.985V314.774H648.462C648.462 300.958 648.462 287.241 648.561 273.425C648.561 266.664 646.892 261.961 640.218 258.923C639.236 258.531 638.353 258.041 637.371 257.649V267.546H582.601V232.859C567.485 226.001 552.466 219.142 537.351 212.381C535.29 211.401 532.737 211.205 529.401 210.421C529.106 214.83 528.811 218.26 528.713 221.689C528.713 271.857 528.91 322.024 528.517 372.193Z",fill:"url(#paint0_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M621.077 442.056C594.673 434.021 568.073 426.868 541.473 419.421C537.842 418.343 534.111 417.853 528.713 416.874V428.828C528.615 479.975 528.713 531.221 528.321 582.368C528.222 590.991 533.13 592.265 539.707 593.245C564.835 596.772 589.962 600.495 615.09 604.023C622.844 605.101 630.696 605.591 638.353 607.452C647.285 609.608 648.757 605.689 648.757 598.046C648.462 558.264 648.954 518.581 648.561 478.799C648.07 443.722 654.744 452.246 621.077 442.056Z",fill:"url(#paint1_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M528.615 785.686C528.419 794.308 530.48 798.129 539.412 798.227C539.805 798.227 540.198 798.227 540.59 798.227C552.467 798.031 564.245 797.934 576.123 797.836C583.483 797.836 590.845 797.836 598.207 797.836C604.587 797.836 610.967 797.934 617.347 797.934C623.727 798.031 630.107 798.031 636.488 798.129H637.469C645.812 798.227 648.757 795.876 648.757 787.156C648.561 741.299 648.855 695.442 649.248 649.586C649.248 643.412 647.089 640.179 641.003 639.395C618.722 636.554 596.441 633.516 574.16 630.675C562.773 629.205 551.387 628.127 540.099 626.265C538.235 625.972 536.565 625.874 535.093 625.972C530.48 626.364 528.517 629.107 528.713 636.162C529.302 661.246 528.91 686.231 528.91 711.315H528.811C528.713 736.204 529.106 760.896 528.615 785.686Z",fill:"url(#paint2_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M671.431 648.703C670.94 672.318 671.137 695.932 671.137 719.645H671.333C671.333 742.279 671.529 764.815 671.235 787.351C671.137 795.091 673.492 798.326 681.639 798.129C709.614 797.737 737.686 797.836 765.66 798.129C772.727 798.227 775.181 795.484 775.181 788.625C775.083 746.295 775.083 703.966 775.181 661.736C775.181 655.367 773.021 651.741 766.052 651.056C736.508 648.116 707.062 644.687 677.517 642.041C675.75 641.943 671.529 646.352 671.431 648.703Z",fill:"url(#paint3_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M670.547 597.752C670.449 606.669 673.198 609.805 682.719 610.98C710.005 614.214 736.998 618.917 764.089 623.326C771.156 624.502 775.966 624.208 775.868 614.997C775.475 573.55 774.984 532.103 775.377 490.655C775.475 484.286 774.298 480.074 771.058 477.232L720.901 495.064L708.239 459.594C700.092 457.439 691.946 455.283 683.798 453.225C672.216 450.286 671.333 450.874 671.235 462.534C671.136 485.071 671.235 507.607 671.235 530.143H670.547C670.645 552.777 670.94 575.216 670.547 597.752Z",fill:"url(#paint4_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M494.948 428.828V416.874C489.647 417.952 485.819 418.441 482.188 419.421C455.686 426.868 428.988 434.021 402.583 442.056C368.917 452.246 375.592 443.722 375.199 478.897C374.806 518.581 375.199 558.363 375.002 598.144C375.002 605.787 376.474 609.707 385.406 607.551C392.965 605.689 400.915 605.297 408.67 604.121C433.798 600.495 458.925 596.772 484.053 593.245C490.629 592.363 495.439 590.992 495.439 582.368C494.948 531.221 495.046 479.975 494.948 428.828ZM466.385 565.418C450.189 567.671 434.091 570.022 417.896 572.374C412.89 573.06 407.786 573.355 402.976 574.53C397.284 575.901 396.302 573.452 396.302 568.454C396.498 542.881 396.203 517.307 396.4 491.733C396.694 469.099 392.376 474.586 414.068 468.021C431.049 462.927 448.226 458.223 465.305 453.422C467.661 452.735 470.114 452.442 473.55 451.756C473.55 454.99 473.55 457.243 473.55 459.497C473.55 492.42 473.55 525.342 473.747 558.265C473.747 563.948 470.605 564.83 466.385 565.418Z",fill:"url(#paint5_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M494.849 221.689C494.849 218.26 494.457 214.83 494.26 210.421C490.825 211.303 488.371 211.499 486.212 212.381C451.955 227.862 417.7 243.54 383.345 258.923C376.67 261.961 375.002 266.566 375.002 273.425C375.198 318.595 375.1 363.766 375.1 408.937C375.1 411.974 375.591 415.012 375.983 418.931C380.008 418.05 382.756 417.657 385.406 416.873C418.093 407.272 450.68 397.277 483.463 388.164C492.494 385.616 495.144 381.305 495.046 372.193C494.653 322.024 494.849 271.857 494.849 221.689ZM466.188 362.198C444.986 368.077 423.981 374.544 402.878 380.717C401.209 381.207 399.344 381.501 396.792 381.991C396.596 379.444 396.203 377.484 396.203 375.524C396.203 346.325 396.203 317.224 396.105 288.025C396.105 283.615 397.185 280.578 401.504 278.716C423.687 268.82 445.772 258.629 467.955 248.635C469.33 248.047 470.9 247.851 473.157 247.361C473.354 250.203 473.55 252.456 473.55 254.612C473.55 287.045 473.452 319.379 473.747 351.812C473.747 357.691 472.077 360.532 466.188 362.198Z",fill:"url(#paint6_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M495.046 785.686C494.555 760.994 494.85 736.204 494.85 711.512H494.751C494.751 686.428 494.359 661.442 494.948 636.358C495.144 629.303 493.181 626.462 488.568 626.167C487.194 626.069 485.525 626.167 483.562 626.462C472.274 628.225 460.888 629.303 449.501 630.871C427.22 633.81 404.939 636.75 382.659 639.591C376.474 640.375 374.315 643.609 374.413 649.781C374.806 695.638 375.1 741.494 374.904 787.351C374.904 795.974 377.849 798.326 386.192 798.326H387.173C393.554 798.227 399.934 798.227 406.314 798.129C412.694 798.129 419.074 798.032 425.454 798.032C432.816 798.032 440.177 798.032 447.538 798.032C459.416 798.032 471.194 798.227 483.071 798.424C483.463 798.424 483.856 798.424 484.249 798.424C493.181 798.129 495.242 794.308 495.046 785.686ZM401.111 772.164C395.32 772.262 393.259 770.596 393.259 764.52C393.357 732.578 393.161 700.537 392.866 668.594C392.866 664.283 394.338 662.029 398.559 661.539C414.067 659.581 429.674 657.425 445.183 655.465C453.134 654.387 461.084 653.701 468.937 652.427C474.728 651.546 476.985 652.917 476.887 659.384C476.494 676.826 476.789 694.365 476.789 711.805H476.887C476.887 729.05 476.691 746.295 476.985 763.542C477.083 769.812 475.513 772.457 468.642 772.36C446.165 771.772 423.589 771.87 401.111 772.164Z",fill:"url(#paint7_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M353.015 530.241H352.426C352.426 507.705 352.426 485.168 352.426 462.632C352.426 450.972 351.542 450.286 339.961 453.324C313.949 459.987 288.135 467.238 261.928 473.117C251.425 475.468 248.284 480.172 248.382 490.655C248.774 532.103 248.382 573.55 247.891 614.899C247.793 624.208 252.602 624.404 259.67 623.326C286.761 618.917 313.851 614.214 341.04 610.98C350.561 609.902 353.31 606.669 353.212 597.752C352.721 575.313 353.015 552.777 353.015 530.241ZM329.066 589.424C309.827 591.677 290.785 595.009 271.742 598.144C266.736 598.928 263.4 598.732 263.4 592.265C263.694 563.066 263.989 533.867 263.694 504.668C263.596 497.221 265.853 493.988 273.215 492.321C291.668 488.206 309.925 483.013 328.182 478.407C336.329 476.251 336.918 476.741 337.016 484.973C337.016 500.846 337.016 516.719 337.016 532.593H337.409C337.409 548.466 337.212 564.34 337.507 580.212C337.703 586.386 335.739 588.639 329.066 589.424Z",fill:"url(#paint8_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M352.525 719.645C352.525 696.031 352.721 672.318 352.23 648.703C352.23 646.352 348.01 641.943 346.047 642.139C316.502 644.785 287.055 648.213 257.511 651.154C250.639 651.839 248.382 655.367 248.48 661.834C248.578 704.163 248.578 746.394 248.48 788.723C248.48 795.582 250.934 798.227 258.002 798.227C285.975 797.934 314.047 797.836 342.022 798.227C350.267 798.326 352.623 795.092 352.427 787.449C352.132 764.815 352.328 742.279 352.328 719.645H352.525ZM337.114 719.84H337.016C337.016 735.714 336.82 751.686 337.114 767.558C337.213 772.947 335.544 775.3 329.752 775.202C310.023 774.907 290.294 775.005 270.565 775.202C265.559 775.202 263.891 773.34 263.891 768.538C263.989 738.751 263.989 708.866 263.891 679.079C263.891 674.572 265.461 672.024 270.271 671.534C291.08 669.476 311.79 667.027 332.697 665.165C334.071 665.067 337.016 668.203 337.016 669.771C337.213 686.428 337.114 703.085 337.114 719.84Z",fill:"url(#paint9_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M141 787.548C141 792.545 141.491 797.248 148.165 797.149H148.656L219.328 796.561C221.782 796.561 223.843 794.505 223.843 792.055V785.098C224.039 746.1 223.745 707.102 224.137 668.104C224.236 657.816 221.291 655.563 207.549 658.796C189.292 663.01 170.643 664.675 151.895 665.067C143.552 665.263 141 668.105 141 674.865C141.098 712.393 141 749.921 141 787.548ZM153.76 691.033C153.76 686.329 155.527 684.37 161.22 684.272C174.176 683.978 187.035 682.9 199.697 679.961C209.218 677.707 211.181 679.274 211.181 686.428C210.985 713.373 211.083 740.319 210.985 767.265V772.066C210.985 773.83 209.61 775.202 207.844 775.202L159.06 775.593H158.668C154.055 775.593 153.76 772.457 153.76 768.931C153.858 742.964 153.858 716.999 153.76 691.033Z",fill:"url(#paint10_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M619.899 371.605H665.149V326.435H619.899V371.605Z",fill:"url(#paint11_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M594.477 258.629H627.948V225.119H594.477V258.629Z",fill:"url(#paint12_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M756.63 260.785H838V179.458H756.63V260.785Z",fill:"url(#paint13_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M690.276 313.892H726.398V277.932H690.276V313.892Z",fill:"url(#paint14_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M694.497 367.098H730.618V331.039H694.497V367.098Z",fill:"url(#paint15_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M768.015 337.311H822.295V283.125H768.015V337.311Z",fill:"url(#paint16_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M744.36 394.239H768.801V369.842H744.36V394.239Z",fill:"url(#paint17_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M790.591 418.932H826.712V382.971H790.591V418.932Z",fill:"url(#paint18_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M676.536 260.785H712.558V224.727H676.536V260.785Z",fill:"url(#paint19_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M665.149 424.81H701.27V388.85H665.149V424.81Z",fill:"url(#paint20_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M731.306 480.662L776.947 459.104L755.353 413.542L709.712 435.099L731.306 480.662Z",fill:"url(#paint21_linear_2_5)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_2_5",x1:"232.863",y1:"623.122",x2:"652.384",y2:"258.054",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_2_5",x1:"330.242",y1:"735.025",x2:"749.763",y2:"369.957",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_2_5",x1:"429.847",y1:"849.487",x2:"849.367",y2:"484.417",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_2_5",x1:"492.018",y1:"920.932",x2:"911.54",y2:"555.862",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint4_linear_2_5",x1:"401.341",y1:"816.73",x2:"820.861",y2:"451.661",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint5_linear_2_5",x1:"268.741",y1:"664.35",x2:"688.261",y2:"299.281",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint6_linear_2_5",x1:"171.021",y1:"552.055",x2:"590.542",y2:"186.987",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint7_linear_2_5",x1:"367.124",y1:"777.408",x2:"786.645",y2:"412.34",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint8_linear_2_5",x1:"222.338",y1:"611.026",x2:"641.858",y2:"245.958",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint9_linear_2_5",x1:"312.402",y1:"714.524",x2:"731.922",y2:"349.455",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint10_linear_2_5",x1:"265.007",y1:"660.059",x2:"684.527",y2:"294.992",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint11_linear_2_5",x1:"273.131",y1:"669.395",x2:"692.652",y2:"304.328",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint12_linear_2_5",x1:"206.499",y1:"592.824",x2:"626.018",y2:"227.755",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint13_linear_2_5",x1:"275.742",y1:"672.396",x2:"695.263",y2:"307.327",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint14_linear_2_5",x1:"275.056",y1:"671.605",x2:"694.574",y2:"306.537",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint15_linear_2_5",x1:"303.253",y1:"704.01",x2:"722.773",y2:"338.941",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint16_linear_2_5",x1:"319.486",y1:"722.667",x2:"739.008",y2:"357.598",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint17_linear_2_5",x1:"338.536",y1:"744.558",x2:"758.059",y2:"379.489",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint18_linear_2_5",x1:"370.314",y1:"781.075",x2:"789.835",y2:"416.007",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint19_linear_2_5",x1:"242.768",y1:"634.504",x2:"662.29",y2:"269.436",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint20_linear_2_5",x1:"319.283",y1:"722.429",x2:"738.803",y2:"357.362",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint21_linear_2_5",x1:"365.1",y1:"775.081",x2:"784.619",y2:"410.013",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])},x2=[];li._withStripped=!0;var b2=void 0,w2=void 0,E2=void 0,S2=!1;function T2(t,e,n,r,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>
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
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=r,a}var B2=T2({render:li,staticRenderFns:x2},b2,y2,w2,S2,E2,!1,void 0,void 0,void 0),ci=B2;function fi(t){let e=0,n=0,r=0;do e=Math.floor(Math.random()*t+1),n=Math.floor(Math.random()*t),r=Math.floor(Math.random()*t),e==0&&(e=1);while(Zt(e,n,r)[0]%1!=0||Zt(e,n,r)[1]%1!=0||Zt(e,n,r)[0]<0||Zt(e,n,r)[1]<0);return[e,n,r]}function Zt(t,e,n){e>0&&(e=e*-1);let r,o,i=e*e-4*t*n;return i>0?(r=(-e+Math.sqrt(i))/(2*t),o=(-e-Math.sqrt(i))/(2*t)):i==0&&(r=o=-e/(2*t)),[r,o]}var Gt;async function ui(t){let[e,n,r]=fi(t);Gt=await import("./contract-util-HBXBBPEX.js"),await Gt.deployContract(e,n,r);let[o,i]=Zt(e,n,r);return console.log(`deployed snapp with equation of form ${e}x\xB2 - ${n}x + ${r}; possible solutions would be x1 = ${o}, x2 = ${i}`),[e,n,r]}async function di(t){return await Gt.submitSolution(t)}async function _i(){return await Gt.fetchAccountStates()}async function hi(t,e,n,r){let o=!1;return t=="PROXY/MINA"?o=await Gt.swapForMina(e,r,n):o=await Gt.swapForToken(e,r,n),o}var F2={name:"App",components:{Loader:Wo,Equation:ti,GithubLogo:oi,ProxyLabsLogo:ei,Snackbar:si,Mina:pi,Proxy:ci},data(){return{swap:"MINA/PROXY",swapInAmount:0,switchAccount:"",params:[0,0,0],difficulty:40,isDeployed:!1,deploying:!1,showHint:!1,beingSubmited:!1,proposedSolution:0,atPage:0,showSnackbar:!1,snappState:{},snack:{type:"failure",message:"Request failed"}}},methods:{changeSwap(){this.swap=="MINA/PROXY"?this.swap="PROXY/MINA":this.swap="MINA/PROXY"},async executeSwap(){let t=this.switchAccount==this.snappState.account1.address?0:1,e=await hi(this.swap,this.swapInAmount*1e6,t,this.proposedSolution);await this.updateSnappState(),console.log(e)},async updateSnappState(){let t=await _i();console.log(t),this.snappState={account1:t.account1,account2:t.account2,snapp:t.snapp},console.log(this.snappState)},setSnackbar(t,e){this.showSnackbar=!1,this.snack.type=t,this.snack.message=e,this.showSnackbar=!0,setTimeout(()=>{this.showSnackbar=!1},3500)},async submitSolution(){this.beingSubmited=!0;let t=await di(this.proposedSolution);t?this.setSnackbar("success","Congratz! You found one valid solution to the equation. Please proceed"):this.setSnackbar("failure","Failure. Looks like the provided solution doesn't work!"),this.beingSubmited=!1,t&&(this.next(),await this.updateSnappState(),this.switchAccount=this.snappState.account1.address)},getEquation(){let t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`;return this.params[1]!=0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]!=0&&(t=`${this.params[0]}x\xB2 + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 = 0`),this.params[1]!=0&&this.params[2]==0&&(t=`${this.params[0]}x\xB2 - ${this.params[1]}x = 0`),t},next(){this.atPage++},async deploy(){this.deploying=!0,this.params=await ui(this.difficulty),this.setSnackbar("info","Contract deployed!"),this.beingSubmited=!1,this.isDeployed=!0,this.deploying=!1}},computed:{expectedReturn(){return this.swapInAmount},selectedAccount(){return this.switchAccount==this.snappState.account1.address?0:1}}},vi=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"header"},[n("ProxyLabsLogo"),t._v(" "),n("GithubLogo")],1),t._v(" "),n("h1",{staticClass:"title"},[t._v("Mina Secret Exchange")]),t._v(" "),n("h3",{staticClass:"sub"},[t._v(`
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
          22 `+t._s(t.switchAccount)+`
          `),n("select",{directives:[{name:"model",rawName:"v-model",value:t.switchAccount,expression:"switchAccount"}],on:{change:function(r){var o=Array.prototype.filter.call(r.target.options,function(i){return i.selected}).map(function(i){var s="_value"in i?i._value:i.value;return s});t.switchAccount=r.target.multiple?o:o[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v(`
              Please the account you want to trade with
            `)]),t._v(" "),n("option",{domProps:{value:t.snappState.account1.address}},[t._v(`
              `+t._s(t.snappState.account1.address)+`
            `)]),t._v(" "),n("option",{domProps:{value:t.snappState.account2.address}},[t._v(`
              `+t._s(t.snappState.account2.address)+`
            `)])]),t._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("h4",[t._v("Equation: "+t._s(t.getEquation()))]),t._v(" "),n("h4",[t._v("The solution to the equation: x = "+t._s(t.proposedSolution))]),t._v(" "),n("h4",[t._v(`
              Balance $MINA:
              `+t._s(t.selectedAccount==0?t.snappState.account1.balance/1e6:t.snappState.account2.balance/1e6)+`
            `)]),t._v(" "),n("h4",[t._v(`
              Balance $TOKEN:
              `+t._s(t.selectedAccount==0?t.snappState.account1.balanceToken/1e6:t.snappState.account2.balanceToken/1e6)+`
            `)]),t._v(`
            `+t._s(t.snappState.snapp)+`
          `)])]),t._v(" "),n("div",{staticClass:"right",staticStyle:{width:"50%"}},[n("div",{staticClass:"swapper"},[n("h2",[t._v("Swap")]),t._v(" "),n("h3",[t._v(t._s(t.swap)+" - 1 ~ 1")]),t._v(" "),n("div",{staticClass:"swapBoxes"},[n("div",{staticClass:"give"},[n("div",{staticClass:"logo"},[t.swap=="MINA/PROXY"?n("Mina"):n("Proxy")],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swapInAmount,expression:"swapInAmount"}],staticClass:"swap-input",attrs:{type:"text"},domProps:{value:t.swapInAmount},on:{input:function(r){r.target.composing||(t.swapInAmount=r.target.value)}}})]),t._v(" "),n("div",{staticClass:"arrow",on:{click:function(r){return t.changeSwap()}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M16.728 20.644l1.24 1.588c-1.721 1.114-3.766 1.768-5.969 1.768-4.077 0-7.626-2.225-9.524-5.52l-1.693.982 1.09-4.1 4.101 1.089-1.747 1.014c1.553 2.699 4.442 4.535 7.773 4.535 1.736 0 3.353-.502 4.729-1.356zm-13.722-7.52l-.007-.124c0-4.625 3.51-8.433 8.003-8.932l-.002 1.932 3.004-2.996-2.994-3.004-.004 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.986-.278zm18.577 5.243c.896-1.588 1.416-3.414 1.416-5.367 0-4.577-2.797-8.499-6.773-10.156l-.623 1.914c3.173 1.393 5.396 4.561 5.396 8.242 0 1.603-.441 3.097-1.18 4.402l-1.762-.964 1.193 4.072 4.071-1.192-1.738-.951z"}})])]),t._v(" "),n("div",{staticClass:"for"},[n("div",{staticClass:"logo"},[t.swap=="MINA/PROXY"?n("Proxy"):n("Mina")],1),t._v(" "),n("span",{staticStyle:{"font-size":"3rem"}},[t._v("~"+t._s(t.expectedReturn))])])]),t._v(" "),n("button",{staticClass:"swap-btn",staticStyle:{"margin-top":"10px"},on:{click:function(r){return t.executeSwap()}}},[n("span",[t._v("Swap")])])])]),t._v(" "),n("br")])]):t._e()]),t._v(" "),t.showSnackbar?n("Snackbar",{attrs:{snack:t.snack}}):t._e()],1)},k2=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticStyle:{border:"2px red dotted","margin-left":"30%","margin-right":"30%"}},[n("h5",{staticStyle:{margin:"5px"}},[t._v(`
          Congratz, you have gained access to the exchange!
        `)])])}];vi._withStripped=!0;var O2=function(t){!t||t("data-v-1911abf4_0",{source:`
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
`,map:{version:3,sources:["src/App.vue"],names:[],mappings:";AAyXA,qHAAA;AAEA;EACA,sCAAA;AACA;AAEA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,iBAAA;AACA;AAEA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCAAA;AACA;AACA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AACA;AAEA;;EAEA,kBAAA;EACA,WAAA;EACA,QAAA;AACA;AAEA;;EAEA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,6BAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,OAAA;EACA,gBAAA;EACA,mBAAA;EACA,oCAAA;AACA;AAEA;EACA,WAAA;EACA,eAAA;AACA;AACA;EACA,YAAA;EACA,SAAA;EACA,UAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;;EAEA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AACA;;;;;EAKA,uBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;;EAEA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA;;yCAEA;AACA;AAEA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AACA;AAEA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,sCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AACA;AAEA;EACA,wBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,wBAAA;EACA,wBAAA;AACA;AAEA;EACA,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AACA",file:"App.vue",sourcesContent:[`<template>
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
            22 {{ switchAccount }}
            <select v-model="switchAccount">
              <option disabled value="">
                Please the account you want to trade with
              </option>
              <option :value="snappState.account1.address">
                {{ snappState.account1.address }}
              </option>
              <option :value="snappState.account2.address">
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
                    ? snappState.account1.balance / 1000000
                    : snappState.account2.balance / 1000000
                }}
              </h4>
              <h4>
                Balance $TOKEN:
                {{
                  selectedAccount == 0
                    ? snappState.account1.balanceToken / 1000000
                    : snappState.account2.balanceToken / 1000000
                }}
              </h4>
              {{ snappState.snapp }}
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
      let acc = this.switchAccount == this.snappState.account1.address ? 0 : 1;
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
`]},media:void 0})},M2=void 0,H2=void 0,N2=!1;function D2(t,e,n,r,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};a.__file=`<template>
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
            22 {{ switchAccount }}
            <select v-model="switchAccount">
              <option disabled value="">
                Please the account you want to trade with
              </option>
              <option :value="snappState.account1.address">
                {{ snappState.account1.address }}
              </option>
              <option :value="snappState.account2.address">
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
                    ? snappState.account1.balance / 1000000
                    : snappState.account2.balance / 1000000
                }}
              </h4>
              <h4>
                Balance $TOKEN:
                {{
                  selectedAccount == 0
                    ? snappState.account1.balanceToken / 1000000
                    : snappState.account2.balanceToken / 1000000
                }}
              </h4>
              {{ snappState.snapp }}
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
      let acc = this.switchAccount == this.snappState.account1.address ? 0 : 1;
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
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=r;{let v;if(e&&(v=s?function(h){e.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){e.call(this,p(h))}),v!==void 0)if(a.functional){let h=a.render;a.render=function(E,w){return v.call(w),h(E,w)}}else{let h=a.beforeCreate;a.beforeCreate=h?[].concat(h,v):[v]}}return a}function qe(){let t=qe.styles||(qe.styles={}),e=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let i=e?o.media||"default":r,s=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!s.ids.includes(r)){let p=o.source,l=s.ids.length;if(s.ids.push(r),e&&(s.element=s.element||document.querySelector("style[data-group="+i+"]")),!s.element){let d=document.head||document.getElementsByTagName("head")[0],a=s.element=document.createElement("style");a.type="text/css",o.media&&a.setAttribute("media",o.media),e&&(a.setAttribute("data-group",i),a.setAttribute("data-next-index","0")),d.appendChild(a)}if(e&&(l=parseInt(s.element.getAttribute("data-next-index")),s.element.setAttribute("data-next-index",l+1)),s.element.styleSheet)s.parts.push(p),s.element.styleSheet.cssText=s.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(p),a=s.element.childNodes;a[l]&&s.element.removeChild(a[l]),a.length?s.element.insertBefore(d,a[l]):s.element.appendChild(d)}}}}var $2=D2({render:vi,staticRenderFns:k2},O2,F2,M2,N2,H2,!1,qe,void 0,void 0),Ai=$2;je.config.productionTip=!1;new je({render:t=>t(Ai)}).$mount("#app");
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
