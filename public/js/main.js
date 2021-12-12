var J=Object.freeze({});function g(t){return t==null}function u(t){return t!=null}function k(t){return t===!0}function mi(t){return t===!1}function ct(t){return typeof t=="string"||typeof t=="number"||typeof t=="symbol"||typeof t=="boolean"}function D(t){return t!==null&&typeof t=="object"}var cn=Object.prototype.toString;function fn(t){return cn.call(t).slice(8,-1)}function Q(t){return cn.call(t)==="[object Object]"}function Jr(t){return cn.call(t)==="[object RegExp]"}function Wr(t){var r=parseFloat(String(t));return r>=0&&Math.floor(r)===r&&isFinite(t)}function Qn(t){return u(t)&&typeof t.then=="function"&&typeof t.catch=="function"}function Ci(t){return t==null?"":Array.isArray(t)||Q(t)&&t.toString===cn?JSON.stringify(t,null,2):String(t)}function jt(t){var r=parseFloat(t);return isNaN(r)?t:r}function G(t,r){for(var n=Object.create(null),e=t.split(","),o=0;o<e.length;o++)n[e[o]]=!0;return r?function(i){return n[i.toLowerCase()]}:function(i){return n[i]}}var gi=G("slot,component",!0),Kr=G("key,ref,slot,slot-scope,is");function et(t,r){if(t.length){var n=t.indexOf(r);if(n>-1)return t.splice(n,1)}}var yi=Object.prototype.hasOwnProperty;function $(t,r){return yi.call(t,r)}function Ct(t){var r=Object.create(null);return function(e){var o=r[e];return o||(r[e]=t(e))}}var xi=/-(\w)/g,gt=Ct(function(t){return t.replace(xi,function(r,n){return n?n.toUpperCase():""})}),te=Ct(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),bi=/\B([A-Z])/g,yt=Ct(function(t){return t.replace(bi,"-$1").toLowerCase()});function wi(t,r){function n(e){var o=arguments.length;return o?o>1?t.apply(r,arguments):t.call(r,e):t.call(r)}return n._length=t.length,n}function Ei(t,r){return t.bind(r)}var Si=Function.prototype.bind?Ei:wi;function Vn(t,r){r=r||0;for(var n=t.length-r,e=new Array(n);n--;)e[n]=t[n+r];return e}function F(t,r){for(var n in r)t[n]=r[n];return t}function ne(t){for(var r={},n=0;n<t.length;n++)t[n]&&F(r,t[n]);return r}function I(t,r,n){}var un=function(t,r,n){return!1},re=function(t){return t};function xt(t,r){if(t===r)return!0;var n=D(t),e=D(r);if(n&&e)try{var o=Array.isArray(t),i=Array.isArray(r);if(o&&i)return t.length===r.length&&t.every(function(l,d){return xt(l,r[d])});if(t instanceof Date&&r instanceof Date)return t.getTime()===r.getTime();if(!o&&!i){var s=Object.keys(t),p=Object.keys(r);return s.length===p.length&&s.every(function(l){return xt(t[l],r[l])})}else return!1}catch{return!1}else return!n&&!e?String(t)===String(r):!1}function ee(t,r){for(var n=0;n<t.length;n++)if(xt(t[n],r))return n;return-1}function dn(t){var r=!1;return function(){r||(r=!0,t.apply(this,arguments))}}var oe="data-server-rendered",_n=["component","directive","filter"],ie=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],M={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!0,devtools:!0,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:un,isReservedAttr:un,isUnknownElement:un,getTagNamespace:I,parsePlatformTagName:re,mustUseProp:un,async:!0,_lifecycleHooks:ie},se=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function ae(t){var r=(t+"").charCodeAt(0);return r===36||r===95}function It(t,r,n,e){Object.defineProperty(t,r,{value:n,enumerable:!!e,writable:!0,configurable:!0})}var Ti=new RegExp("[^"+se.source+".$_\\d]");function Bi(t){if(!Ti.test(t)){var r=t.split(".");return function(n){for(var e=0;e<r.length;e++){if(!n)return;n=n[r[e]]}return n}}}var Oi="__proto__"in{},V=typeof window!="undefined",Ln=typeof WXEnvironment!="undefined"&&!!WXEnvironment.platform,pe=Ln&&WXEnvironment.platform.toLowerCase(),U=V&&window.navigator.userAgent.toLowerCase(),Dt=U&&/msie|trident/.test(U),Ut=U&&U.indexOf("msie 9.0")>0,Pn=U&&U.indexOf("edge/")>0,D2=U&&U.indexOf("android")>0||pe==="android",Mi=U&&/iphone|ipad|ipod|ios/.test(U)||pe==="ios",U2=U&&/chrome\/\d+/.test(U)&&!Pn,Q2=U&&/phantomjs/.test(U),le=U&&U.match(/firefox\/(\d+)/),Rn={}.watch,ce=!1;if(V)try{Gn={},Object.defineProperty(Gn,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,Gn)}catch{}var Gn,hn,vn=function(){return hn===void 0&&(!V&&!Ln&&typeof global!="undefined"?hn=global.process&&global.process.env.VUE_ENV==="server":hn=!1),hn},An=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function bt(t){return typeof t=="function"&&/native code/.test(t.toString())}var mn=typeof Symbol!="undefined"&&bt(Symbol)&&typeof Reflect!="undefined"&&bt(Reflect.ownKeys),zt;typeof Set!="undefined"&&bt(Set)?zt=Set:zt=function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(n){return this.set[n]===!0},t.prototype.add=function(n){this.set[n]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var A=I,Xn=I,Zn=I,wt=I;jn=typeof console!="undefined",fe=/(?:^|[-_])(\w)/g,ue=function(t){return t.replace(fe,function(r){return r.toUpperCase()}).replace(/[-_]/g,"")},A=function(t,r){var n=r?Zn(r):"";M.warnHandler?M.warnHandler.call(null,t,r,n):jn&&!M.silent&&console.error("[Vue warn]: "+t+n)},Xn=function(t,r){jn&&!M.silent&&console.warn("[Vue tip]: "+t+(r?Zn(r):""))},wt=function(t,r){if(t.$root===t)return"<Root>";var n=typeof t=="function"&&t.cid!=null?t.options:t._isVue?t.$options||t.constructor.options:t,e=n.name||n._componentTag,o=n.__file;if(!e&&o){var i=o.match(/([^/\\]+)\.vue$/);e=i&&i[1]}return(e?"<"+ue(e)+">":"<Anonymous>")+(o&&r!==!1?" at "+o:"")},de=function(t,r){for(var n="";r;)r%2==1&&(n+=t),r>1&&(t+=t),r>>=1;return n},Zn=function(t){if(t._isVue&&t.$parent){for(var r=[],n=0;t;){if(r.length>0){var e=r[r.length-1];if(e.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(r[r.length-1]=[e,n],n=0)}r.push(t),t=t.$parent}return`

found in

`+r.map(function(o,i){return""+(i===0?"---> ":de(" ",5+i*2))+(Array.isArray(o)?wt(o[0])+"... ("+o[1]+" recursive calls)":wt(o))}).join(`
`)}else return`

(found in `+wt(t)+")"};var jn,fe,ue,de,Fi=0,X=function(){this.id=Fi++,this.subs=[]};X.prototype.addSub=function(r){this.subs.push(r)};X.prototype.removeSub=function(r){et(this.subs,r)};X.prototype.depend=function(){X.target&&X.target.addDep(this)};X.prototype.notify=function(){var r=this.subs.slice();M.async||r.sort(function(o,i){return o.id-i.id});for(var n=0,e=r.length;n<e;n++)r[n].update()};X.target=null;var Cn=[];function Yt(t){Cn.push(t),X.target=t}function qt(){Cn.pop(),X.target=Cn[Cn.length-1]}var L=function(r,n,e,o,i,s,p,l){this.tag=r,this.data=n,this.children=e,this.text=o,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=n&&n.key,this.componentOptions=p,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_e={child:{configurable:!0}};_e.child.get=function(){return this.componentInstance};Object.defineProperties(L.prototype,_e);var Et=function(t){t===void 0&&(t="");var r=new L;return r.text=t,r.isComment=!0,r};function Qt(t){return new L(void 0,void 0,void 0,String(t))}function zn(t){var r=new L(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return r.ns=t.ns,r.isStatic=t.isStatic,r.key=t.key,r.isComment=t.isComment,r.fnContext=t.fnContext,r.fnOptions=t.fnOptions,r.fnScopeId=t.fnScopeId,r.asyncMeta=t.asyncMeta,r.isCloned=!0,r}var he=Array.prototype,gn=Object.create(he),Ni=["push","pop","shift","unshift","splice","sort","reverse"];Ni.forEach(function(t){var r=he[t];It(gn,t,function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];var i=r.apply(this,e),s=this.__ob__,p;switch(t){case"push":case"unshift":p=e;break;case"splice":p=e.slice(2);break}return p&&s.observeArray(p),s.dep.notify(),i})});var ki=Object.getOwnPropertyNames(gn),Yn=!0;function ft(t){Yn=t}var yn=function(r){this.value=r,this.dep=new X,this.vmCount=0,It(r,"__ob__",this),Array.isArray(r)?(Oi?Hi(r,gn):$i(r,gn,ki),this.observeArray(r)):this.walk(r)};yn.prototype.walk=function(r){for(var n=Object.keys(r),e=0;e<n.length;e++)Tt(r,n[e])};yn.prototype.observeArray=function(r){for(var n=0,e=r.length;n<e;n++)St(r[n])};function Hi(t,r){t.__proto__=r}function $i(t,r,n){for(var e=0,o=n.length;e<o;e++){var i=n[e];It(t,i,r[i])}}function St(t,r){if(!(!D(t)||t instanceof L)){var n;return $(t,"__ob__")&&t.__ob__ instanceof yn?n=t.__ob__:Yn&&!vn()&&(Array.isArray(t)||Q(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new yn(t)),r&&n&&n.vmCount++,n}}function Tt(t,r,n,e,o){var i=new X,s=Object.getOwnPropertyDescriptor(t,r);if(!(s&&s.configurable===!1)){var p=s&&s.get,l=s&&s.set;(!p||l)&&arguments.length===2&&(n=t[r]);var d=!o&&St(n);Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:function(){var v=p?p.call(t):n;return X.target&&(i.depend(),d&&(d.dep.depend(),Array.isArray(v)&&Ae(v))),v},set:function(v){var h=p?p.call(t):n;v===h||v!==v&&h!==h||(e&&e(),!(p&&!l)&&(l?l.call(t,v):n=v,d=!o&&St(v),i.notify()))}})}}function qn(t,r,n){if((g(t)||ct(t))&&A("Cannot set reactive property on undefined, null, or primitive value: "+t),Array.isArray(t)&&Wr(r))return t.length=Math.max(t.length,r),t.splice(r,1,n),n;if(r in t&&!(r in Object.prototype))return t[r]=n,n;var e=t.__ob__;return t._isVue||e&&e.vmCount?(A("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),n):e?(Tt(e.value,r,n),e.dep.notify(),n):(t[r]=n,n)}function ve(t,r){if((g(t)||ct(t))&&A("Cannot delete reactive property on undefined, null, or primitive value: "+t),Array.isArray(t)&&Wr(r)){t.splice(r,1);return}var n=t.__ob__;if(t._isVue||n&&n.vmCount){A("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");return}!$(t,r)||(delete t[r],!!n&&n.dep.notify())}function Ae(t){for(var r=void 0,n=0,e=t.length;n<e;n++)r=t[n],r&&r.__ob__&&r.__ob__.dep.depend(),Array.isArray(r)&&Ae(r)}var j=M.optionMergeStrategies;j.el=j.propsData=function(t,r,n,e){return n||A('option "'+e+'" can only be used during instance creation with the `new` keyword.'),me(t,r)};function Jn(t,r){if(!r)return t;for(var n,e,o,i=mn?Reflect.ownKeys(r):Object.keys(r),s=0;s<i.length;s++)n=i[s],n!=="__ob__"&&(e=t[n],o=r[n],$(t,n)?e!==o&&Q(e)&&Q(o)&&Jn(e,o):qn(t,n,o));return t}function Wn(t,r,n){return n?function(){var o=typeof r=="function"?r.call(n,n):r,i=typeof t=="function"?t.call(n,n):t;return o?Jn(o,i):i}:r?t?function(){return Jn(typeof r=="function"?r.call(this,this):r,typeof t=="function"?t.call(this,this):t)}:r:t}j.data=function(t,r,n){return n?Wn(t,r,n):r&&typeof r!="function"?(A('The "data" option should be a function that returns a per-instance value in component definitions.',n),t):Wn(t,r)};function Ii(t,r){var n=r?t?t.concat(r):Array.isArray(r)?r:[r]:t;return n&&Di(n)}function Di(t){for(var r=[],n=0;n<t.length;n++)r.indexOf(t[n])===-1&&r.push(t[n]);return r}ie.forEach(function(t){j[t]=Ii});function Ui(t,r,n,e){var o=Object.create(t||null);return r?(tr(e,r,n),F(o,r)):o}_n.forEach(function(t){j[t+"s"]=Ui});j.watch=function(t,r,n,e){if(t===Rn&&(t=void 0),r===Rn&&(r=void 0),!r)return Object.create(t||null);if(tr(e,r,n),!t)return r;var o={};F(o,t);for(var i in r){var s=o[i],p=r[i];s&&!Array.isArray(s)&&(s=[s]),o[i]=s?s.concat(p):Array.isArray(p)?p:[p]}return o};j.props=j.methods=j.inject=j.computed=function(t,r,n,e){if(r&&tr(e,r,n),!t)return r;var o=Object.create(null);return F(o,t),r&&F(o,r),o};j.provide=Wn;var me=function(t,r){return r===void 0?t:r};function Qi(t){for(var r in t.components)Kn(r)}function Kn(t){new RegExp("^[a-zA-Z][\\-\\.0-9_"+se.source+"]*$").test(t)||A('Invalid component name: "'+t+'". Component names should conform to valid custom element name in html5 specification.'),(gi(t)||M.isReservedTag(t))&&A("Do not use built-in or reserved HTML elements as component id: "+t)}function Vi(t,r){var n=t.props;if(!!n){var e={},o,i,s;if(Array.isArray(n))for(o=n.length;o--;)i=n[o],typeof i=="string"?(s=gt(i),e[s]={type:null}):A("props must be strings when using array syntax.");else if(Q(n))for(var p in n)i=n[p],s=gt(p),e[s]=Q(i)?i:{type:i};else A('Invalid value for option "props": expected an Array or an Object, but got '+fn(n)+".",r);t.props=e}}function Li(t,r){var n=t.inject;if(!!n){var e=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)e[n[o]]={from:n[o]};else if(Q(n))for(var i in n){var s=n[i];e[i]=Q(s)?F({from:i},s):{from:s}}else A('Invalid value for option "inject": expected an Array or an Object, but got '+fn(n)+".",r)}}function Pi(t){var r=t.directives;if(r)for(var n in r){var e=r[n];typeof e=="function"&&(r[n]={bind:e,update:e})}}function tr(t,r,n){Q(r)||A('Invalid value for option "'+t+'": expected an Object, but got '+fn(r)+".",n)}function Bt(t,r,n){if(Qi(r),typeof r=="function"&&(r=r.options),Vi(r,n),Li(r,n),Pi(r),!r._base&&(r.extends&&(t=Bt(t,r.extends,n)),r.mixins))for(var e=0,o=r.mixins.length;e<o;e++)t=Bt(t,r.mixins[e],n);var i={},s;for(s in t)p(s);for(s in r)$(t,s)||p(s);function p(l){var d=j[l]||me;i[l]=d(t[l],r[l],n,l)}return i}function nr(t,r,n,e){if(typeof n=="string"){var o=t[r];if($(o,n))return o[n];var i=gt(n);if($(o,i))return o[i];var s=te(i);if($(o,s))return o[s];var p=o[n]||o[i]||o[s];return e&&!p&&A("Failed to resolve "+r.slice(0,-1)+": "+n,t),p}}function rr(t,r,n,e){var o=r[t],i=!$(n,t),s=n[t],p=ge(Boolean,o.type);if(p>-1){if(i&&!$(o,"default"))s=!1;else if(s===""||s===yt(t)){var l=ge(String,o.type);(l<0||p<l)&&(s=!0)}}if(s===void 0){s=Ri(e,o,t);var d=Yn;ft(!0),St(s),ft(d)}return Gi(o,t,s,e,i),s}function Ri(t,r,n){if(!!$(r,"default")){var e=r.default;return D(e)&&A('Invalid default value for prop "'+n+'": Props with type Object/Array must use a factory function to return the default value.',t),t&&t.$options.propsData&&t.$options.propsData[n]===void 0&&t._props[n]!==void 0?t._props[n]:typeof e=="function"&&xn(r.type)!=="Function"?e.call(t):e}}function Gi(t,r,n,e,o){if(t.required&&o){A('Missing required prop: "'+r+'"',e);return}if(!(n==null&&!t.required)){var i=t.type,s=!i||i===!0,p=[];if(i){Array.isArray(i)||(i=[i]);for(var l=0;l<i.length&&!s;l++){var d=Zi(n,i[l],e);p.push(d.expectedType||""),s=d.valid}}var a=p.some(function(h){return h});if(!s&&a){A(zi(r,n,p),e);return}var v=t.validator;v&&(v(n)||A('Invalid prop: custom validator check failed for prop "'+r+'".',e))}}var Xi=/^(String|Number|Boolean|Function|Symbol|BigInt)$/;function Zi(t,r,n){var e,o=xn(r);if(Xi.test(o)){var i=typeof t;e=i===o.toLowerCase(),!e&&i==="object"&&(e=t instanceof r)}else if(o==="Object")e=Q(t);else if(o==="Array")e=Array.isArray(t);else try{e=t instanceof r}catch{A('Invalid prop type: "'+String(r)+'" is not a constructor',n),e=!1}return{valid:e,expectedType:o}}var ji=/^\s*function (\w+)/;function xn(t){var r=t&&t.toString().match(ji);return r?r[1]:""}function Ce(t,r){return xn(t)===xn(r)}function ge(t,r){if(!Array.isArray(r))return Ce(r,t)?0:-1;for(var n=0,e=r.length;n<e;n++)if(Ce(r[n],t))return n;return-1}function zi(t,r,n){var e='Invalid prop: type check failed for prop "'+t+'". Expected '+n.map(te).join(", "),o=n[0],i=fn(r);return n.length===1&&er(o)&&er(typeof r)&&!qi(o,i)&&(e+=" with value "+ye(r,o)),e+=", got "+i+" ",er(i)&&(e+="with value "+ye(r,i)+"."),e}function ye(t,r){return r==="String"?'"'+t+'"':r==="Number"?""+Number(t):""+t}var Yi=["string","number","boolean"];function er(t){return Yi.some(function(r){return t.toLowerCase()===r})}function qi(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return t.some(function(n){return n.toLowerCase()==="boolean"})}function ut(t,r,n){Yt();try{if(r)for(var e=r;e=e.$parent;){var o=e.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var s=o[i].call(e,t,r,n)===!1;if(s)return}catch(p){xe(p,e,"errorCaptured hook")}}xe(t,r,n)}finally{qt()}}function Vt(t,r,n,e,o){var i;try{i=n?t.apply(r,n):t.call(r),i&&!i._isVue&&Qn(i)&&!i._handled&&(i.catch(function(s){return ut(s,e,o+" (Promise/async)")}),i._handled=!0)}catch(s){ut(s,e,o)}return i}function xe(t,r,n){if(M.errorHandler)try{return M.errorHandler.call(null,t,r,n)}catch(e){e!==t&&be(e,null,"config.errorHandler")}be(t,r,n)}function be(t,r,n){if(A("Error in "+n+': "'+t.toString()+'"',r),(V||Ln)&&typeof console!="undefined")console.error(t);else throw t}var or=!1,ir=[],sr=!1;function bn(){sr=!1;var t=ir.slice(0);ir.length=0;for(var r=0;r<t.length;r++)t[r]()}var Jt;typeof Promise!="undefined"&&bt(Promise)?(we=Promise.resolve(),Jt=function(){we.then(bn),Mi&&setTimeout(I)},or=!0):!Dt&&typeof MutationObserver!="undefined"&&(bt(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")?(Wt=1,Ee=new MutationObserver(bn),ar=document.createTextNode(String(Wt)),Ee.observe(ar,{characterData:!0}),Jt=function(){Wt=(Wt+1)%2,ar.data=String(Wt)},or=!0):typeof setImmediate!="undefined"&&bt(setImmediate)?Jt=function(){setImmediate(bn)}:Jt=function(){setTimeout(bn,0)};var we,Wt,Ee,ar;function pr(t,r){var n;if(ir.push(function(){if(t)try{t.call(r)}catch(e){ut(e,r,"nextTick")}else n&&n(r)}),sr||(sr=!0,Jt()),!t&&typeof Promise!="undefined")return new Promise(function(e){n=e})}var Se;Te=G("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"),lr=function(t,r){A('Property or method "'+r+'" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',t)},cr=function(t,r){A('Property "'+r+'" must be accessed with "$data.'+r+'" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data',t)},fr=typeof Proxy!="undefined"&&bt(Proxy),fr&&(Be=G("stop,prevent,self,ctrl,shift,alt,meta,exact"),M.keyCodes=new Proxy(M.keyCodes,{set:function(r,n,e){return Be(n)?(A("Avoid overwriting built-in modifier in config.keyCodes: ."+n),!1):(r[n]=e,!0)}})),Oe={has:function(r,n){var e=n in r,o=Te(n)||typeof n=="string"&&n.charAt(0)==="_"&&!(n in r.$data);return!e&&!o&&(n in r.$data?cr(r,n):lr(r,n)),e||!o}},Me={get:function(r,n){return typeof n=="string"&&!(n in r)&&(n in r.$data?cr(r,n):lr(r,n)),r[n]}},Se=function(r){if(fr){var n=r.$options,e=n.render&&n.render._withStripped?Me:Oe;r._renderProxy=new Proxy(r,e)}else r._renderProxy=r};var Te,lr,cr,fr,Be,Oe,Me,Fe=new zt;function wn(t){ur(t,Fe),Fe.clear()}function ur(t,r){var n,e,o=Array.isArray(t);if(!(!o&&!D(t)||Object.isFrozen(t)||t instanceof L)){if(t.__ob__){var i=t.__ob__.dep.id;if(r.has(i))return;r.add(i)}if(o)for(n=t.length;n--;)ur(t[n],r);else for(e=Object.keys(t),n=e.length;n--;)ur(t[e[n]],r)}}var W,En;K=V&&window.performance,K&&K.mark&&K.measure&&K.clearMarks&&K.clearMeasures&&(W=function(t){return K.mark(t)},En=function(t,r,n){K.measure(t,r,n),K.clearMarks(r),K.clearMarks(n)});var K,Ne=Ct(function(t){var r=t.charAt(0)==="&";t=r?t.slice(1):t;var n=t.charAt(0)==="~";t=n?t.slice(1):t;var e=t.charAt(0)==="!";return t=e?t.slice(1):t,{name:t,once:n,capture:e,passive:r}});function dr(t,r){function n(){var e=arguments,o=n.fns;if(Array.isArray(o))for(var i=o.slice(),s=0;s<i.length;s++)Vt(i[s],null,e,r,"v-on handler");else return Vt(o,null,arguments,r,"v-on handler")}return n.fns=t,n}function ke(t,r,n,e,o,i){var s,p,l,d,a;for(s in t)p=l=t[s],d=r[s],a=Ne(s),g(l)?A('Invalid handler for event "'+a.name+'": got '+String(l),i):g(d)?(g(l.fns)&&(l=t[s]=dr(l,i)),k(a.once)&&(l=t[s]=o(a.name,l,a.capture)),n(a.name,l,a.capture,a.passive,a.params)):l!==d&&(d.fns=l,t[s]=d);for(s in r)g(t[s])&&(a=Ne(s),e(a.name,r[s],a.capture))}function dt(t,r,n){t instanceof L&&(t=t.data.hook||(t.data.hook={}));var e,o=t[r];function i(){n.apply(this,arguments),et(e.fns,i)}g(o)?e=dr([i]):u(o.fns)&&k(o.merged)?(e=o,e.fns.push(i)):e=dr([o,i]),e.merged=!0,t[r]=e}function Ji(t,r,n){var e=r.options.props;if(!g(e)){var o={},i=t.attrs,s=t.props;if(u(i)||u(s))for(var p in e){var l=yt(p),d=p.toLowerCase();p!==d&&i&&$(i,d)&&Xn('Prop "'+d+'" is passed to component '+wt(n||r)+', but the declared prop name is "'+p+'". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "'+l+'" instead of "'+p+'".'),He(o,s,p,l,!0)||He(o,i,p,l,!1)}return o}}function He(t,r,n,e,o){if(u(r)){if($(r,n))return t[n]=r[n],o||delete r[n],!0;if($(r,e))return t[n]=r[e],o||delete r[e],!0}return!1}function Wi(t){for(var r=0;r<t.length;r++)if(Array.isArray(t[r]))return Array.prototype.concat.apply([],t);return t}function _r(t){return ct(t)?[Qt(t)]:Array.isArray(t)?$e(t):void 0}function Kt(t){return u(t)&&u(t.text)&&mi(t.isComment)}function $e(t,r){var n=[],e,o,i,s;for(e=0;e<t.length;e++)o=t[e],!(g(o)||typeof o=="boolean")&&(i=n.length-1,s=n[i],Array.isArray(o)?o.length>0&&(o=$e(o,(r||"")+"_"+e),Kt(o[0])&&Kt(s)&&(n[i]=Qt(s.text+o[0].text),o.shift()),n.push.apply(n,o)):ct(o)?Kt(s)?n[i]=Qt(s.text+o):o!==""&&n.push(Qt(o)):Kt(o)&&Kt(s)?n[i]=Qt(s.text+o.text):(k(t._isVList)&&u(o.tag)&&g(o.key)&&u(r)&&(o.key="__vlist"+r+"_"+e+"__"),n.push(o)));return n}function Ki(t){var r=t.$options.provide;r&&(t._provided=typeof r=="function"?r.call(t):r)}function ts(t){var r=Ie(t.$options.inject,t);r&&(ft(!1),Object.keys(r).forEach(function(n){Tt(t,n,r[n],function(){A('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "'+n+'"',t)})}),ft(!0))}function Ie(t,r){if(t){for(var n=Object.create(null),e=mn?Reflect.ownKeys(t):Object.keys(t),o=0;o<e.length;o++){var i=e[o];if(i!=="__ob__"){for(var s=t[i].from,p=r;p;){if(p._provided&&$(p._provided,s)){n[i]=p._provided[s];break}p=p.$parent}if(!p)if("default"in t[i]){var l=t[i].default;n[i]=typeof l=="function"?l.call(r):l}else A('Injection "'+i+'" not found',r)}}return n}}function hr(t,r){if(!t||!t.length)return{};for(var n={},e=0,o=t.length;e<o;e++){var i=t[e],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,(i.context===r||i.fnContext===r)&&s&&s.slot!=null){var p=s.slot,l=n[p]||(n[p]=[]);i.tag==="template"?l.push.apply(l,i.children||[]):l.push(i)}else(n.default||(n.default=[])).push(i)}for(var d in n)n[d].every(ns)&&delete n[d];return n}function ns(t){return t.isComment&&!t.asyncFactory||t.text===" "}function tn(t){return t.isComment&&t.asyncFactory}function Sn(t,r,n){var e,o=Object.keys(r).length>0,i=t?!!t.$stable:!o,s=t&&t.$key;if(!t)e={};else{if(t._normalized)return t._normalized;if(i&&n&&n!==J&&s===n.$key&&!o&&!n.$hasNormal)return n;e={};for(var p in t)t[p]&&p[0]!=="$"&&(e[p]=rs(r,p,t[p]))}for(var l in r)l in e||(e[l]=es(r,l));return t&&Object.isExtensible(t)&&(t._normalized=e),It(e,"$stable",i),It(e,"$key",s),It(e,"$hasNormal",o),e}function rs(t,r,n){var e=function(){var o=arguments.length?n.apply(null,arguments):n({});o=o&&typeof o=="object"&&!Array.isArray(o)?[o]:_r(o);var i=o&&o[0];return o&&(!i||o.length===1&&i.isComment&&!tn(i))?void 0:o};return n.proxy&&Object.defineProperty(t,r,{get:e,enumerable:!0,configurable:!0}),e}function es(t,r){return function(){return t[r]}}function os(t,r){var n,e,o,i,s;if(Array.isArray(t)||typeof t=="string")for(n=new Array(t.length),e=0,o=t.length;e<o;e++)n[e]=r(t[e],e);else if(typeof t=="number")for(n=new Array(t),e=0;e<t;e++)n[e]=r(e+1,e);else if(D(t))if(mn&&t[Symbol.iterator]){n=[];for(var p=t[Symbol.iterator](),l=p.next();!l.done;)n.push(r(l.value,n.length)),l=p.next()}else for(i=Object.keys(t),n=new Array(i.length),e=0,o=i.length;e<o;e++)s=i[e],n[e]=r(t[s],s,e);return u(n)||(n=[]),n._isVList=!0,n}function is(t,r,n,e){var o=this.$scopedSlots[t],i;o?(n=n||{},e&&(D(e)||A("slot v-bind without argument expects an Object",this),n=F(F({},e),n)),i=o(n)||(typeof r=="function"?r():r)):i=this.$slots[t]||(typeof r=="function"?r():r);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function ss(t){return nr(this.$options,"filters",t,!0)||re}function De(t,r){return Array.isArray(t)?t.indexOf(r)===-1:t!==r}function as(t,r,n,e,o){var i=M.keyCodes[r]||n;return o&&e&&!M.keyCodes[r]?De(o,e):i?De(i,t):e?yt(e)!==r:t===void 0}function ps(t,r,n,e,o){if(n)if(!D(n))A("v-bind without argument expects an Object or Array value",this);else{Array.isArray(n)&&(n=ne(n));var i,s=function(l){if(l==="class"||l==="style"||Kr(l))i=t;else{var d=t.attrs&&t.attrs.type;i=e||M.mustUseProp(r,d,l)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var a=gt(l),v=yt(l);if(!(a in i)&&!(v in i)&&(i[l]=n[l],o)){var h=t.on||(t.on={});h["update:"+l]=function(x){n[l]=x}}};for(var p in n)s(p)}return t}function ls(t,r){var n=this._staticTrees||(this._staticTrees=[]),e=n[t];return e&&!r||(e=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ue(e,"__static__"+t,!1)),e}function cs(t,r,n){return Ue(t,"__once__"+r+(n?"_"+n:""),!0),t}function Ue(t,r,n){if(Array.isArray(t))for(var e=0;e<t.length;e++)t[e]&&typeof t[e]!="string"&&Qe(t[e],r+"_"+e,n);else Qe(t,r,n)}function Qe(t,r,n){t.isStatic=!0,t.key=r,t.isOnce=n}function fs(t,r){if(r)if(!Q(r))A("v-on without argument expects an Object value",this);else{var n=t.on=t.on?F({},t.on):{};for(var e in r){var o=n[e],i=r[e];n[e]=o?[].concat(o,i):i}}return t}function Ve(t,r,n,e){r=r||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ve(i,r,n):i&&(i.proxy&&(i.fn.proxy=!0),r[i.key]=i.fn)}return e&&(r.$key=e),r}function us(t,r){for(var n=0;n<r.length;n+=2){var e=r[n];typeof e=="string"&&e?t[r[n]]=r[n+1]:e!==""&&e!==null&&A("Invalid value for dynamic directive argument (expected string or null): "+e,this)}return t}function ds(t,r){return typeof t=="string"?r+t:t}function Le(t){t._o=cs,t._n=jt,t._s=Ci,t._l=os,t._t=is,t._q=xt,t._i=ee,t._m=ls,t._f=ss,t._k=as,t._b=ps,t._v=Qt,t._e=Et,t._u=Ve,t._g=fs,t._d=us,t._p=ds}function vr(t,r,n,e,o){var i=this,s=o.options,p;$(e,"_uid")?(p=Object.create(e),p._original=e):(p=e,e=e._original);var l=k(s._compiled),d=!l;this.data=t,this.props=r,this.children=n,this.parent=e,this.listeners=t.on||J,this.injections=Ie(s.inject,e),this.slots=function(){return i.$slots||Sn(t.scopedSlots,i.$slots=hr(n,e)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sn(t.scopedSlots,this.slots())}}),l&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=Sn(t.scopedSlots,this.$slots)),s._scopeId?this._c=function(a,v,h,x){var E=Tn(p,a,v,h,x,d);return E&&!Array.isArray(E)&&(E.fnScopeId=s._scopeId,E.fnContext=e),E}:this._c=function(a,v,h,x){return Tn(p,a,v,h,x,d)}}Le(vr.prototype);function _s(t,r,n,e,o){var i=t.options,s={},p=i.props;if(u(p))for(var l in p)s[l]=rr(l,p,r||J);else u(n.attrs)&&Re(s,n.attrs),u(n.props)&&Re(s,n.props);var d=new vr(n,s,o,e,t),a=i.render.call(null,d._c,d);if(a instanceof L)return Pe(a,n,d.parent,i,d);if(Array.isArray(a)){for(var v=_r(a)||[],h=new Array(v.length),x=0;x<v.length;x++)h[x]=Pe(v[x],n,d.parent,i,d);return h}}function Pe(t,r,n,e,o){var i=zn(t);return i.fnContext=n,i.fnOptions=e,(i.devtoolsMeta=i.devtoolsMeta||{}).renderContext=o,r.slot&&((i.data||(i.data={})).slot=r.slot),i}function Re(t,r){for(var n in r)t[gt(n)]=r[n]}var Ar={init:function(r,n){if(r.componentInstance&&!r.componentInstance._isDestroyed&&r.data.keepAlive){var e=r;Ar.prepatch(e,e)}else{var o=r.componentInstance=hs(r,Ot);o.$mount(n?r.elm:void 0,n)}},prepatch:function(r,n){var e=n.componentOptions,o=n.componentInstance=r.componentInstance;Hs(o,e.propsData,e.listeners,n,e.children)},insert:function(r){var n=r.context,e=r.componentInstance;e._isMounted||(e._isMounted=!0,Y(e,"mounted")),r.data.keepAlive&&(n._isMounted?Us(e):gr(e,!0))},destroy:function(r){var n=r.componentInstance;n._isDestroyed||(r.data.keepAlive?We(n,!0):n.$destroy())}},Ge=Object.keys(Ar);function Xe(t,r,n,e,o){if(!g(t)){var i=n.$options._base;if(D(t)&&(t=i.extend(t)),typeof t!="function"){A("Invalid Component definition: "+String(t),n);return}var s;if(g(t.cid)&&(s=t,t=Es(s,i),t===void 0))return ws(s,r,n,e,o);r=r||{},Tr(t),u(r.model)&&ms(t.options,r);var p=Ji(r,t,o);if(k(t.options.functional))return _s(t,p,r,n,e);var l=r.on;if(r.on=r.nativeOn,k(t.options.abstract)){var d=r.slot;r={},d&&(r.slot=d)}vs(r);var a=t.options.name||o,v=new L("vue-component-"+t.cid+(a?"-"+a:""),r,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:o,children:e},s);return v}}function hs(t,r){var n={_isComponent:!0,_parentVnode:t,parent:r},e=t.data.inlineTemplate;return u(e)&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns),new t.componentOptions.Ctor(n)}function vs(t){for(var r=t.hook||(t.hook={}),n=0;n<Ge.length;n++){var e=Ge[n],o=r[e],i=Ar[e];o!==i&&!(o&&o._merged)&&(r[e]=o?As(i,o):i)}}function As(t,r){var n=function(e,o){t(e,o),r(e,o)};return n._merged=!0,n}function ms(t,r){var n=t.model&&t.model.prop||"value",e=t.model&&t.model.event||"input";(r.attrs||(r.attrs={}))[n]=r.model.value;var o=r.on||(r.on={}),i=o[e],s=r.model.callback;u(i)?(Array.isArray(i)?i.indexOf(s)===-1:i!==s)&&(o[e]=[s].concat(i)):o[e]=s}var Cs=1,Ze=2;function Tn(t,r,n,e,o,i){return(Array.isArray(n)||ct(n))&&(o=e,e=n,n=void 0),k(i)&&(o=Ze),gs(t,r,n,e,o)}function gs(t,r,n,e,o){if(u(n)&&u(n.__ob__))return A("Avoid using observed data object as vnode data: "+JSON.stringify(n)+`
Always create fresh vnode data objects in each render!`,t),Et();if(u(n)&&u(n.is)&&(r=n.is),!r)return Et();u(n)&&u(n.key)&&!ct(n.key)&&A("Avoid using non-primitive value as key, use string/number value instead.",t),Array.isArray(e)&&typeof e[0]=="function"&&(n=n||{},n.scopedSlots={default:e[0]},e.length=0),o===Ze?e=_r(e):o===Cs&&(e=Wi(e));var i,s;if(typeof r=="string"){var p;s=t.$vnode&&t.$vnode.ns||M.getTagNamespace(r),M.isReservedTag(r)?(u(n)&&u(n.nativeOn)&&n.tag!=="component"&&A("The .native modifier for v-on is only valid on components but it was used on <"+r+">.",t),i=new L(M.parsePlatformTagName(r),n,e,void 0,void 0,t)):(!n||!n.pre)&&u(p=nr(t.$options,"components",r))?i=Xe(p,n,t,e,r):i=new L(r,n,e,void 0,void 0,t)}else i=Xe(r,n,t,e);return Array.isArray(i)?i:u(i)?(u(s)&&je(i,s),u(n)&&ys(n),i):Et()}function je(t,r,n){if(t.ns=r,t.tag==="foreignObject"&&(r=void 0,n=!0),u(t.children))for(var e=0,o=t.children.length;e<o;e++){var i=t.children[e];u(i.tag)&&(g(i.ns)||k(n)&&i.tag!=="svg")&&je(i,r,n)}}function ys(t){D(t.style)&&wn(t.style),D(t.class)&&wn(t.class)}function xs(t){t._vnode=null,t._staticTrees=null;var r=t.$options,n=t.$vnode=r._parentVnode,e=n&&n.context;t.$slots=hr(r._renderChildren,e),t.$scopedSlots=J,t._c=function(i,s,p,l){return Tn(t,i,s,p,l,!1)},t.$createElement=function(i,s,p,l){return Tn(t,i,s,p,l,!0)};var o=n&&n.data;Tt(t,"$attrs",o&&o.attrs||J,function(){!rn&&A("$attrs is readonly.",t)},!0),Tt(t,"$listeners",r._parentListeners||J,function(){!rn&&A("$listeners is readonly.",t)},!0)}var mr=null;function bs(t){Le(t.prototype),t.prototype.$nextTick=function(r){return pr(r,this)},t.prototype._render=function(){var r=this,n=r.$options,e=n.render,o=n._parentVnode;o&&(r.$scopedSlots=Sn(o.data.scopedSlots,r.$slots,r.$scopedSlots)),r.$vnode=o;var i;try{mr=r,i=e.call(r._renderProxy,r.$createElement)}catch(s){if(ut(s,r,"render"),r.$options.renderError)try{i=r.$options.renderError.call(r._renderProxy,r.$createElement,s)}catch(p){ut(p,r,"renderError"),i=r._vnode}else i=r._vnode}finally{mr=null}return Array.isArray(i)&&i.length===1&&(i=i[0]),i instanceof L||(Array.isArray(i)&&A("Multiple root nodes returned from render function. Render function should return a single root node.",r),i=Et()),i.parent=o,i}}function Cr(t,r){return(t.__esModule||mn&&t[Symbol.toStringTag]==="Module")&&(t=t.default),D(t)?r.extend(t):t}function ws(t,r,n,e,o){var i=Et();return i.asyncFactory=t,i.asyncMeta={data:r,context:n,children:e,tag:o},i}function Es(t,r){if(k(t.error)&&u(t.errorComp))return t.errorComp;if(u(t.resolved))return t.resolved;var n=mr;if(n&&u(t.owners)&&t.owners.indexOf(n)===-1&&t.owners.push(n),k(t.loading)&&u(t.loadingComp))return t.loadingComp;if(n&&!u(t.owners)){var e=t.owners=[n],o=!0,i=null,s=null;n.$on("hook:destroyed",function(){return et(e,n)});var p=function(v){for(var h=0,x=e.length;h<x;h++)e[h].$forceUpdate();v&&(e.length=0,i!==null&&(clearTimeout(i),i=null),s!==null&&(clearTimeout(s),s=null))},l=dn(function(v){t.resolved=Cr(v,r),o?e.length=0:p(!0)}),d=dn(function(v){A("Failed to resolve async component: "+String(t)+(v?`
Reason: `+v:"")),u(t.errorComp)&&(t.error=!0,p(!0))}),a=t(l,d);return D(a)&&(Qn(a)?g(t.resolved)&&a.then(l,d):Qn(a.component)&&(a.component.then(l,d),u(a.error)&&(t.errorComp=Cr(a.error,r)),u(a.loading)&&(t.loadingComp=Cr(a.loading,r),a.delay===0?t.loading=!0:i=setTimeout(function(){i=null,g(t.resolved)&&g(t.error)&&(t.loading=!0,p(!1))},a.delay||200)),u(a.timeout)&&(s=setTimeout(function(){s=null,g(t.resolved)&&d("timeout ("+a.timeout+"ms)")},a.timeout)))),o=!1,t.loading?t.loadingComp:t.resolved}}function ze(t){if(Array.isArray(t))for(var r=0;r<t.length;r++){var n=t[r];if(u(n)&&(u(n.componentOptions)||tn(n)))return n}}function Ss(t){t._events=Object.create(null),t._hasHookEvent=!1;var r=t.$options._parentListeners;r&&Ye(t,r)}var nn;function Ts(t,r){nn.$on(t,r)}function Bs(t,r){nn.$off(t,r)}function Os(t,r){var n=nn;return function e(){var o=r.apply(null,arguments);o!==null&&n.$off(t,e)}}function Ye(t,r,n){nn=t,ke(r,n||{},Ts,Bs,Os,t),nn=void 0}function Ms(t){var r=/^hook:/;t.prototype.$on=function(n,e){var o=this;if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)o.$on(n[i],e);else(o._events[n]||(o._events[n]=[])).push(e),r.test(n)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(n,e){var o=this;function i(){o.$off(n,i),e.apply(o,arguments)}return i.fn=e,o.$on(n,i),o},t.prototype.$off=function(n,e){var o=this;if(!arguments.length)return o._events=Object.create(null),o;if(Array.isArray(n)){for(var i=0,s=n.length;i<s;i++)o.$off(n[i],e);return o}var p=o._events[n];if(!p)return o;if(!e)return o._events[n]=null,o;for(var l,d=p.length;d--;)if(l=p[d],l===e||l.fn===e){p.splice(d,1);break}return o},t.prototype.$emit=function(n){var e=this,o=n.toLowerCase();o!==n&&e._events[o]&&Xn('Event "'+o+'" is emitted in component '+wt(e)+' but the handler is registered for "'+n+'". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "'+yt(n)+'" instead of "'+n+'".');var i=e._events[n];if(i){i=i.length>1?Vn(i):i;for(var s=Vn(arguments,1),p='event handler for "'+n+'"',l=0,d=i.length;l<d;l++)Vt(i[l],e,s,e,p)}return e}}var Ot=null,rn=!1;function qe(t){var r=Ot;return Ot=t,function(){Ot=r}}function Fs(t){var r=t.$options,n=r.parent;if(n&&!r.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ns(t){t.prototype._update=function(r,n){var e=this,o=e.$el,i=e._vnode,s=qe(e);e._vnode=r,i?e.$el=e.__patch__(i,r):e.$el=e.__patch__(e.$el,r,n,!1),s(),o&&(o.__vue__=null),e.$el&&(e.$el.__vue__=e),e.$vnode&&e.$parent&&e.$vnode===e.$parent._vnode&&(e.$parent.$el=e.$el)},t.prototype.$forceUpdate=function(){var r=this;r._watcher&&r._watcher.update()},t.prototype.$destroy=function(){var r=this;if(!r._isBeingDestroyed){Y(r,"beforeDestroy"),r._isBeingDestroyed=!0;var n=r.$parent;n&&!n._isBeingDestroyed&&!r.$options.abstract&&et(n.$children,r),r._watcher&&r._watcher.teardown();for(var e=r._watchers.length;e--;)r._watchers[e].teardown();r._data.__ob__&&r._data.__ob__.vmCount--,r._isDestroyed=!0,r.__patch__(r._vnode,null),Y(r,"destroyed"),r.$off(),r.$el&&(r.$el.__vue__=null),r.$vnode&&(r.$vnode.parent=null)}}}function ks(t,r,n){t.$el=r,t.$options.render||(t.$options.render=Et,t.$options.template&&t.$options.template.charAt(0)!=="#"||t.$options.el||r?A("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.",t):A("Failed to mount component: template or render function not defined.",t)),Y(t,"beforeMount");var e;return M.performance&&W?e=function(){var o=t._name,i=t._uid,s="vue-perf-start:"+i,p="vue-perf-end:"+i;W(s);var l=t._render();W(p),En("vue "+o+" render",s,p),W(s),t._update(l,n),W(p),En("vue "+o+" patch",s,p)}:e=function(){t._update(t._render(),n)},new q(t,e,I,{before:function(){t._isMounted&&!t._isDestroyed&&Y(t,"beforeUpdate")}},!0),n=!1,t.$vnode==null&&(t._isMounted=!0,Y(t,"mounted")),t}function Hs(t,r,n,e,o){rn=!0;var i=e.data.scopedSlots,s=t.$scopedSlots,p=!!(i&&!i.$stable||s!==J&&!s.$stable||i&&t.$scopedSlots.$key!==i.$key||!i&&t.$scopedSlots.$key),l=!!(o||t.$options._renderChildren||p);if(t.$options._parentVnode=e,t.$vnode=e,t._vnode&&(t._vnode.parent=e),t.$options._renderChildren=o,t.$attrs=e.data.attrs||J,t.$listeners=n||J,r&&t.$options.props){ft(!1);for(var d=t._props,a=t.$options._propKeys||[],v=0;v<a.length;v++){var h=a[v],x=t.$options.props;d[h]=rr(h,x,r,t)}ft(!0),t.$options.propsData=r}n=n||J;var E=t.$options._parentListeners;t.$options._parentListeners=n,Ye(t,n,E),l&&(t.$slots=hr(o,e.context),t.$forceUpdate()),rn=!1}function Je(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function gr(t,r){if(r){if(t._directInactive=!1,Je(t))return}else if(t._directInactive)return;if(t._inactive||t._inactive===null){t._inactive=!1;for(var n=0;n<t.$children.length;n++)gr(t.$children[n]);Y(t,"activated")}}function We(t,r){if(!(r&&(t._directInactive=!0,Je(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)We(t.$children[n]);Y(t,"deactivated")}}function Y(t,r){Yt();var n=t.$options[r],e=r+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Vt(n[o],t,null,t,e);t._hasHookEvent&&t.$emit("hook:"+r),qt()}var $s=100,ot=[],yr=[],en={},Bn={},xr=!1,br=!1,Lt=0;function Is(){Lt=ot.length=yr.length=0,en={},Bn={},xr=br=!1}var Ke=0,wr=Date.now;V&&!Dt&&(On=window.performance,On&&typeof On.now=="function"&&wr()>document.createEvent("Event").timeStamp&&(wr=function(){return On.now()}));var On;function to(){Ke=wr(),br=!0;var t,r;for(ot.sort(function(o,i){return o.id-i.id}),Lt=0;Lt<ot.length;Lt++)if(t=ot[Lt],t.before&&t.before(),r=t.id,en[r]=null,t.run(),en[r]!=null&&(Bn[r]=(Bn[r]||0)+1,Bn[r]>$s)){A("You may have an infinite update loop "+(t.user?'in watcher with expression "'+t.expression+'"':"in a component render function."),t.vm);break}var n=yr.slice(),e=ot.slice();Is(),Qs(n),Ds(e),An&&M.devtools&&An.emit("flush")}function Ds(t){for(var r=t.length;r--;){var n=t[r],e=n.vm;e._watcher===n&&e._isMounted&&!e._isDestroyed&&Y(e,"updated")}}function Us(t){t._inactive=!1,yr.push(t)}function Qs(t){for(var r=0;r<t.length;r++)t[r]._inactive=!0,gr(t[r],!0)}function Vs(t){var r=t.id;if(en[r]==null){if(en[r]=!0,!br)ot.push(t);else{for(var n=ot.length-1;n>Lt&&ot[n].id>t.id;)n--;ot.splice(n+1,0,t)}if(!xr){if(xr=!0,!M.async){to();return}pr(to)}}}var Ls=0,q=function(r,n,e,o,i){this.vm=r,i&&(r._watcher=this),r._watchers.push(this),o?(this.deep=!!o.deep,this.user=!!o.user,this.lazy=!!o.lazy,this.sync=!!o.sync,this.before=o.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=e,this.id=++Ls,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new zt,this.newDepIds=new zt,this.expression=n.toString(),typeof n=="function"?this.getter=n:(this.getter=Bi(n),this.getter||(this.getter=I,A('Failed watching path: "'+n+'" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',r))),this.value=this.lazy?void 0:this.get()};q.prototype.get=function(){Yt(this);var r,n=this.vm;try{r=this.getter.call(n,n)}catch(e){if(this.user)ut(e,n,'getter for watcher "'+this.expression+'"');else throw e}finally{this.deep&&wn(r),qt(),this.cleanupDeps()}return r};q.prototype.addDep=function(r){var n=r.id;this.newDepIds.has(n)||(this.newDepIds.add(n),this.newDeps.push(r),this.depIds.has(n)||r.addSub(this))};q.prototype.cleanupDeps=function(){for(var r=this.deps.length;r--;){var n=this.deps[r];this.newDepIds.has(n.id)||n.removeSub(this)}var e=this.depIds;this.depIds=this.newDepIds,this.newDepIds=e,this.newDepIds.clear(),e=this.deps,this.deps=this.newDeps,this.newDeps=e,this.newDeps.length=0};q.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vs(this)};q.prototype.run=function(){if(this.active){var r=this.get();if(r!==this.value||D(r)||this.deep){var n=this.value;if(this.value=r,this.user){var e='callback for watcher "'+this.expression+'"';Vt(this.cb,this.vm,[r,n],this.vm,e)}else this.cb.call(this.vm,r,n)}}};q.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1};q.prototype.depend=function(){for(var r=this.deps.length;r--;)this.deps[r].depend()};q.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||et(this.vm._watchers,this);for(var r=this.deps.length;r--;)this.deps[r].removeSub(this);this.active=!1}};var tt={enumerable:!0,configurable:!0,get:I,set:I};function Er(t,r,n){tt.get=function(){return this[r][n]},tt.set=function(o){this[r][n]=o},Object.defineProperty(t,n,tt)}function Ps(t){t._watchers=[];var r=t.$options;r.props&&Rs(t,r.props),r.methods&&zs(t,r.methods),r.data?Gs(t):St(t._data={},!0),r.computed&&js(t,r.computed),r.watch&&r.watch!==Rn&&Ys(t,r.watch)}function Rs(t,r){var n=t.$options.propsData||{},e=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||ft(!1);var s=function(l){o.push(l);var d=rr(l,r,n,t),a=yt(l);(Kr(a)||M.isReservedAttr(a))&&A('"'+a+'" is a reserved attribute and cannot be used as component prop.',t),Tt(e,l,d,function(){!i&&!rn&&A(`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "`+l+'"',t)}),l in t||Er(t,"_props",l)};for(var p in r)s(p);ft(!0)}function Gs(t){var r=t.$options.data;r=t._data=typeof r=="function"?Xs(r,t):r||{},Q(r)||(r={},A(`data functions should return an object:
https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function`,t));for(var n=Object.keys(r),e=t.$options.props,o=t.$options.methods,i=n.length;i--;){var s=n[i];o&&$(o,s)&&A('Method "'+s+'" has already been defined as a data property.',t),e&&$(e,s)?A('The data property "'+s+'" is already declared as a prop. Use prop default value instead.',t):ae(s)||Er(t,"_data",s)}St(r,!0)}function Xs(t,r){Yt();try{return t.call(r,r)}catch(n){return ut(n,r,"data()"),{}}finally{qt()}}var Zs={lazy:!0};function js(t,r){var n=t._computedWatchers=Object.create(null),e=vn();for(var o in r){var i=r[o],s=typeof i=="function"?i:i.get;s==null&&A('Getter is missing for computed property "'+o+'".',t),e||(n[o]=new q(t,s||I,I,Zs)),o in t?o in t.$data?A('The computed property "'+o+'" is already defined in data.',t):t.$options.props&&o in t.$options.props?A('The computed property "'+o+'" is already defined as a prop.',t):t.$options.methods&&o in t.$options.methods&&A('The computed property "'+o+'" is already defined as a method.',t):no(t,o,i)}}function no(t,r,n){var e=!vn();typeof n=="function"?(tt.get=e?ro(r):eo(n),tt.set=I):(tt.get=n.get?e&&n.cache!==!1?ro(r):eo(n.get):I,tt.set=n.set||I),tt.set===I&&(tt.set=function(){A('Computed property "'+r+'" was assigned to but it has no setter.',this)}),Object.defineProperty(t,r,tt)}function ro(t){return function(){var n=this._computedWatchers&&this._computedWatchers[t];if(n)return n.dirty&&n.evaluate(),X.target&&n.depend(),n.value}}function eo(t){return function(){return t.call(this,this)}}function zs(t,r){var n=t.$options.props;for(var e in r)typeof r[e]!="function"&&A('Method "'+e+'" has type "'+typeof r[e]+'" in the component definition. Did you reference the function correctly?',t),n&&$(n,e)&&A('Method "'+e+'" has already been defined as a prop.',t),e in t&&ae(e)&&A('Method "'+e+'" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'),t[e]=typeof r[e]!="function"?I:Si(r[e],t)}function Ys(t,r){for(var n in r){var e=r[n];if(Array.isArray(e))for(var o=0;o<e.length;o++)Sr(t,n,e[o]);else Sr(t,n,e)}}function Sr(t,r,n,e){return Q(n)&&(e=n,n=n.handler),typeof n=="string"&&(n=t[n]),t.$watch(r,n,e)}function qs(t){var r={};r.get=function(){return this._data};var n={};n.get=function(){return this._props},r.set=function(){A("Avoid replacing instance root $data. Use nested data properties instead.",this)},n.set=function(){A("$props is readonly.",this)},Object.defineProperty(t.prototype,"$data",r),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=qn,t.prototype.$delete=ve,t.prototype.$watch=function(e,o,i){var s=this;if(Q(o))return Sr(s,e,o,i);i=i||{},i.user=!0;var p=new q(s,e,o,i);if(i.immediate){var l='callback for immediate watcher "'+p.expression+'"';Yt(),Vt(o,s,[p.value],s,l),qt()}return function(){p.teardown()}}}var Js=0;function Ws(t){t.prototype._init=function(r){var n=this;n._uid=Js++;var e,o;M.performance&&W&&(e="vue-perf-start:"+n._uid,o="vue-perf-end:"+n._uid,W(e)),n._isVue=!0,r&&r._isComponent?Ks(n,r):n.$options=Bt(Tr(n.constructor),r||{},n),Se(n),n._self=n,Fs(n),Ss(n),xs(n),Y(n,"beforeCreate"),ts(n),Ps(n),Ki(n),Y(n,"created"),M.performance&&W&&(n._name=wt(n,!1),W(o),En("vue "+n._name+" init",e,o)),n.$options.el&&n.$mount(n.$options.el)}}function Ks(t,r){var n=t.$options=Object.create(t.constructor.options),e=r._parentVnode;n.parent=r.parent,n._parentVnode=e;var o=e.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,r.render&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns)}function Tr(t){var r=t.options;if(t.super){var n=Tr(t.super),e=t.superOptions;if(n!==e){t.superOptions=n;var o=ta(t);o&&F(t.extendOptions,o),r=t.options=Bt(n,t.extendOptions),r.name&&(r.components[r.name]=t)}}return r}function ta(t){var r,n=t.options,e=t.sealedOptions;for(var o in n)n[o]!==e[o]&&(r||(r={}),r[o]=n[o]);return r}function N(t){this instanceof N||A("Vue is a constructor and should be called with the `new` keyword"),this._init(t)}Ws(N);qs(N);Ms(N);Ns(N);bs(N);function na(t){t.use=function(r){var n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(r)>-1)return this;var e=Vn(arguments,1);return e.unshift(this),typeof r.install=="function"?r.install.apply(r,e):typeof r=="function"&&r.apply(null,e),n.push(r),this}}function ra(t){t.mixin=function(r){return this.options=Bt(this.options,r),this}}function ea(t){t.cid=0;var r=1;t.extend=function(n){n=n||{};var e=this,o=e.cid,i=n._Ctor||(n._Ctor={});if(i[o])return i[o];var s=n.name||e.options.name;s&&Kn(s);var p=function(d){this._init(d)};return p.prototype=Object.create(e.prototype),p.prototype.constructor=p,p.cid=r++,p.options=Bt(e.options,n),p.super=e,p.options.props&&oa(p),p.options.computed&&ia(p),p.extend=e.extend,p.mixin=e.mixin,p.use=e.use,_n.forEach(function(l){p[l]=e[l]}),s&&(p.options.components[s]=p),p.superOptions=e.options,p.extendOptions=n,p.sealedOptions=F({},p.options),i[o]=p,p}}function oa(t){var r=t.options.props;for(var n in r)Er(t.prototype,"_props",n)}function ia(t){var r=t.options.computed;for(var n in r)no(t.prototype,n,r[n])}function sa(t){_n.forEach(function(r){t[r]=function(n,e){return e?(r==="component"&&Kn(n),r==="component"&&Q(e)&&(e.name=e.name||n,e=this.options._base.extend(e)),r==="directive"&&typeof e=="function"&&(e={bind:e,update:e}),this.options[r+"s"][n]=e,e):this.options[r+"s"][n]}})}function oo(t){return t&&(t.Ctor.options.name||t.tag)}function Mn(t,r){return Array.isArray(t)?t.indexOf(r)>-1:typeof t=="string"?t.split(",").indexOf(r)>-1:Jr(t)?t.test(r):!1}function io(t,r){var n=t.cache,e=t.keys,o=t._vnode;for(var i in n){var s=n[i];if(s){var p=s.name;p&&!r(p)&&Br(n,i,e,o)}}}function Br(t,r,n,e){var o=t[r];o&&(!e||o.tag!==e.tag)&&o.componentInstance.$destroy(),t[r]=null,et(n,r)}var so=[String,RegExp,Array],aa={name:"keep-alive",abstract:!0,props:{include:so,exclude:so,max:[String,Number]},methods:{cacheVNode:function(){var r=this,n=r.cache,e=r.keys,o=r.vnodeToCache,i=r.keyToCache;if(o){var s=o.tag,p=o.componentInstance,l=o.componentOptions;n[i]={name:oo(l),tag:s,componentInstance:p},e.push(i),this.max&&e.length>parseInt(this.max)&&Br(n,e[0],e,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var r in this.cache)Br(this.cache,r,this.keys)},mounted:function(){var r=this;this.cacheVNode(),this.$watch("include",function(n){io(r,function(e){return Mn(n,e)})}),this.$watch("exclude",function(n){io(r,function(e){return!Mn(n,e)})})},updated:function(){this.cacheVNode()},render:function(){var r=this.$slots.default,n=ze(r),e=n&&n.componentOptions;if(e){var o=oo(e),i=this,s=i.include,p=i.exclude;if(s&&(!o||!Mn(s,o))||p&&o&&Mn(p,o))return n;var l=this,d=l.cache,a=l.keys,v=n.key==null?e.Ctor.cid+(e.tag?"::"+e.tag:""):n.key;d[v]?(n.componentInstance=d[v].componentInstance,et(a,v),a.push(v)):(this.vnodeToCache=n,this.keyToCache=v),n.data.keepAlive=!0}return n||r&&r[0]}},pa={KeepAlive:aa};function la(t){var r={};r.get=function(){return M},r.set=function(){A("Do not replace the Vue.config object, set individual fields instead.")},Object.defineProperty(t,"config",r),t.util={warn:A,extend:F,mergeOptions:Bt,defineReactive:Tt},t.set=qn,t.delete=ve,t.nextTick=pr,t.observable=function(n){return St(n),n},t.options=Object.create(null),_n.forEach(function(n){t.options[n+"s"]=Object.create(null)}),t.options._base=t,F(t.options.components,pa),na(t),ra(t),ea(t),sa(t)}la(N);Object.defineProperty(N.prototype,"$isServer",{get:vn});Object.defineProperty(N.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(N,"FunctionalRenderContext",{value:vr});N.version="2.6.14";var ca=G("style,class"),fa=G("input,textarea,option,select,progress"),ua=function(t,r,n){return n==="value"&&fa(t)&&r!=="button"||n==="selected"&&t==="option"||n==="checked"&&t==="input"||n==="muted"&&t==="video"},ao=G("contenteditable,draggable,spellcheck"),da=G("events,caret,typing,plaintext-only"),_a=function(t,r){return Fn(r)||r==="false"?"false":t==="contenteditable"&&da(r)?r:"true"},ha=G("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Or="http://www.w3.org/1999/xlink",Mr=function(t){return t.charAt(5)===":"&&t.slice(0,5)==="xlink"},po=function(t){return Mr(t)?t.slice(6,t.length):""},Fn=function(t){return t==null||t===!1};function va(t){for(var r=t.data,n=t,e=t;u(e.componentInstance);)e=e.componentInstance._vnode,e&&e.data&&(r=lo(e.data,r));for(;u(n=n.parent);)n&&n.data&&(r=lo(r,n.data));return Aa(r.staticClass,r.class)}function lo(t,r){return{staticClass:Fr(t.staticClass,r.staticClass),class:u(t.class)?[t.class,r.class]:r.class}}function Aa(t,r){return u(t)||u(r)?Fr(t,Nr(r)):""}function Fr(t,r){return t?r?t+" "+r:t:r||""}function Nr(t){return Array.isArray(t)?ma(t):D(t)?Ca(t):typeof t=="string"?t:""}function ma(t){for(var r="",n,e=0,o=t.length;e<o;e++)u(n=Nr(t[e]))&&n!==""&&(r&&(r+=" "),r+=n);return r}function Ca(t){var r="";for(var n in t)t[n]&&(r&&(r+=" "),r+=n);return r}var ga={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ya=G("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),kr=G("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),co=function(t){return ya(t)||kr(t)};function xa(t){if(kr(t))return"svg";if(t==="math")return"math"}var Nn=Object.create(null);function ba(t){if(!V)return!0;if(co(t))return!1;if(t=t.toLowerCase(),Nn[t]!=null)return Nn[t];var r=document.createElement(t);return t.indexOf("-")>-1?Nn[t]=r.constructor===window.HTMLUnknownElement||r.constructor===window.HTMLElement:Nn[t]=/HTMLUnknownElement/.test(r.toString())}var Hr=G("text,number,password,search,email,tel,url");function wa(t){if(typeof t=="string"){var r=document.querySelector(t);return r||(A("Cannot find element: "+t),document.createElement("div"))}else return t}function Ea(t,r){var n=document.createElement(t);return t!=="select"||r.data&&r.data.attrs&&r.data.attrs.multiple!==void 0&&n.setAttribute("multiple","multiple"),n}function Sa(t,r){return document.createElementNS(ga[t],r)}function Ta(t){return document.createTextNode(t)}function Ba(t){return document.createComment(t)}function Oa(t,r,n){t.insertBefore(r,n)}function Ma(t,r){t.removeChild(r)}function Fa(t,r){t.appendChild(r)}function Na(t){return t.parentNode}function ka(t){return t.nextSibling}function Ha(t){return t.tagName}function $a(t,r){t.textContent=r}function Ia(t,r){t.setAttribute(r,"")}var Da=Object.freeze({createElement:Ea,createElementNS:Sa,createTextNode:Ta,createComment:Ba,insertBefore:Oa,removeChild:Ma,appendChild:Fa,parentNode:Na,nextSibling:ka,tagName:Ha,setTextContent:$a,setStyleScope:Ia}),Ua={create:function(r,n){Pt(n)},update:function(r,n){r.data.ref!==n.data.ref&&(Pt(r,!0),Pt(n))},destroy:function(r){Pt(r,!0)}};function Pt(t,r){var n=t.data.ref;if(!!u(n)){var e=t.context,o=t.componentInstance||t.elm,i=e.$refs;r?Array.isArray(i[n])?et(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var Mt=new L("",{},[]),on=["create","activate","update","remove","destroy"];function Ft(t,r){return t.key===r.key&&t.asyncFactory===r.asyncFactory&&(t.tag===r.tag&&t.isComment===r.isComment&&u(t.data)===u(r.data)&&Qa(t,r)||k(t.isAsyncPlaceholder)&&g(r.asyncFactory.error))}function Qa(t,r){if(t.tag!=="input")return!0;var n,e=u(n=t.data)&&u(n=n.attrs)&&n.type,o=u(n=r.data)&&u(n=n.attrs)&&n.type;return e===o||Hr(e)&&Hr(o)}function Va(t,r,n){var e,o,i={};for(e=r;e<=n;++e)o=t[e].key,u(o)&&(i[o]=e);return i}function La(t){var r,n,e={},o=t.modules,i=t.nodeOps;for(r=0;r<on.length;++r)for(e[on[r]]=[],n=0;n<o.length;++n)u(o[n][on[r]])&&e[on[r]].push(o[n][on[r]]);function s(f){return new L(i.tagName(f).toLowerCase(),{},[],void 0,f)}function p(f,c){function _(){--_.listeners==0&&l(f)}return _.listeners=c,_}function l(f){var c=i.parentNode(f);u(c)&&i.removeChild(c,f)}function d(f,c){return!c&&!f.ns&&!(M.ignoredElements.length&&M.ignoredElements.some(function(_){return Jr(_)?_.test(f.tag):_===f.tag}))&&M.isUnknownElement(f.tag)}var a=0;function v(f,c,_,m,C,S,b){if(u(f.elm)&&u(S)&&(f=S[b]=zn(f)),f.isRootInsert=!C,!h(f,c,_,m)){var y=f.data,O=f.children,T=f.tag;u(T)?(y&&y.pre&&a++,d(f,a)&&A("Unknown custom element: <"+T+'> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',f.context),f.elm=f.ns?i.createElementNS(f.ns,T):i.createElement(T,f),ht(f),_t(f,O,c),u(y)&&R(f,c),w(_,f.elm,m),y&&y.pre&&a--):k(f.isComment)?(f.elm=i.createComment(f.text),w(_,f.elm,m)):(f.elm=i.createTextNode(f.text),w(_,f.elm,m))}}function h(f,c,_,m){var C=f.data;if(u(C)){var S=u(f.componentInstance)&&C.keepAlive;if(u(C=C.hook)&&u(C=C.init)&&C(f,!1),u(f.componentInstance))return x(f,c),w(_,f.elm,m),k(S)&&E(f,c,_,m),!0}}function x(f,c){u(f.data.pendingInsert)&&(c.push.apply(c,f.data.pendingInsert),f.data.pendingInsert=null),f.elm=f.componentInstance.$el,P(f)?(R(f,c),ht(f)):(Pt(f),c.push(f))}function E(f,c,_,m){for(var C,S=f;S.componentInstance;)if(S=S.componentInstance._vnode,u(C=S.data)&&u(C=C.transition)){for(C=0;C<e.activate.length;++C)e.activate[C](Mt,S);c.push(S);break}w(_,f.elm,m)}function w(f,c,_){u(f)&&(u(_)?i.parentNode(_)===f&&i.insertBefore(f,c,_):i.appendChild(f,c))}function _t(f,c,_){if(Array.isArray(c)){Ht(c);for(var m=0;m<c.length;++m)v(c[m],_,f.elm,null,!0,c,m)}else ct(f.text)&&i.appendChild(f.elm,i.createTextNode(String(f.text)))}function P(f){for(;f.componentInstance;)f=f.componentInstance._vnode;return u(f.tag)}function R(f,c){for(var _=0;_<e.create.length;++_)e.create[_](Mt,f);r=f.data.hook,u(r)&&(u(r.create)&&r.create(Mt,f),u(r.insert)&&c.push(f))}function ht(f){var c;if(u(c=f.fnScopeId))i.setStyleScope(f.elm,c);else for(var _=f;_;)u(c=_.context)&&u(c=c.$options._scopeId)&&i.setStyleScope(f.elm,c),_=_.parent;u(c=Ot)&&c!==f.context&&c!==f.fnContext&&u(c=c.$options._scopeId)&&i.setStyleScope(f.elm,c)}function kt(f,c,_,m,C,S){for(;m<=C;++m)v(_[m],S,f,c,!1,_,m)}function vt(f){var c,_,m=f.data;if(u(m))for(u(c=m.hook)&&u(c=c.destroy)&&c(f),c=0;c<e.destroy.length;++c)e.destroy[c](f);if(u(c=f.children))for(_=0;_<f.children.length;++_)vt(f.children[_])}function nt(f,c,_){for(;c<=_;++c){var m=f[c];u(m)&&(u(m.tag)?(z(m),vt(m)):l(m.elm))}}function z(f,c){if(u(c)||u(f.data)){var _,m=e.remove.length+1;for(u(c)?c.listeners+=m:c=p(f.elm,m),u(_=f.componentInstance)&&u(_=_._vnode)&&u(_.data)&&z(_,c),_=0;_<e.remove.length;++_)e.remove[_](f,c);u(_=f.data.hook)&&u(_=_.remove)?_(f,c):c()}else l(f.elm)}function Zt(f,c,_,m,C){var S=0,b=0,y=c.length-1,O=c[0],T=c[y],B=_.length-1,H=_[0],Z=_[B],mt,pt,lt,qr,Un=!C;for(Ht(_);S<=y&&b<=B;)g(O)?O=c[++S]:g(T)?T=c[--y]:Ft(O,H)?(rt(O,H,m,_,b),O=c[++S],H=_[++b]):Ft(T,Z)?(rt(T,Z,m,_,B),T=c[--y],Z=_[--B]):Ft(O,Z)?(rt(O,Z,m,_,B),Un&&i.insertBefore(f,O.elm,i.nextSibling(T.elm)),O=c[++S],Z=_[--B]):Ft(T,H)?(rt(T,H,m,_,b),Un&&i.insertBefore(f,T.elm,O.elm),T=c[--y],H=_[++b]):(g(mt)&&(mt=Va(c,S,y)),pt=u(H.key)?mt[H.key]:pn(H,c,S,y),g(pt)?v(H,m,f,O.elm,!1,_,b):(lt=c[pt],Ft(lt,H)?(rt(lt,H,m,_,b),c[pt]=void 0,Un&&i.insertBefore(f,lt.elm,O.elm)):v(H,m,f,O.elm,!1,_,b)),H=_[++b]);S>y?(qr=g(_[B+1])?null:_[B+1].elm,kt(f,qr,_,b,B,m)):b>B&&nt(c,S,y)}function Ht(f){for(var c={},_=0;_<f.length;_++){var m=f[_],C=m.key;u(C)&&(c[C]?A("Duplicate keys detected: '"+C+"'. This may cause an update error.",m.context):c[C]=!0)}}function pn(f,c,_,m){for(var C=_;C<m;C++){var S=c[C];if(u(S)&&Ft(f,S))return C}}function rt(f,c,_,m,C,S){if(f!==c){u(c.elm)&&u(m)&&(c=m[C]=zn(c));var b=c.elm=f.elm;if(k(f.isAsyncPlaceholder)){u(c.asyncFactory.resolved)?at(f.elm,c,_):c.isAsyncPlaceholder=!0;return}if(k(c.isStatic)&&k(f.isStatic)&&c.key===f.key&&(k(c.isCloned)||k(c.isOnce))){c.componentInstance=f.componentInstance;return}var y,O=c.data;u(O)&&u(y=O.hook)&&u(y=y.prepatch)&&y(f,c);var T=f.children,B=c.children;if(u(O)&&P(c)){for(y=0;y<e.update.length;++y)e.update[y](f,c);u(y=O.hook)&&u(y=y.update)&&y(f,c)}g(c.text)?u(T)&&u(B)?T!==B&&Zt(b,T,B,_,S):u(B)?(Ht(B),u(f.text)&&i.setTextContent(b,""),kt(b,null,B,0,B.length-1,_)):u(T)?nt(T,0,T.length-1):u(f.text)&&i.setTextContent(b,""):f.text!==c.text&&i.setTextContent(b,c.text),u(O)&&u(y=O.hook)&&u(y=y.postpatch)&&y(f,c)}}function st(f,c,_){if(k(_)&&u(f.parent))f.parent.data.pendingInsert=c;else for(var m=0;m<c.length;++m)c[m].data.hook.insert(c[m])}var At=!1,ln=G("attrs,class,staticClass,staticStyle,key");function at(f,c,_,m){var C,S=c.tag,b=c.data,y=c.children;if(m=m||b&&b.pre,c.elm=f,k(c.isComment)&&u(c.asyncFactory))return c.isAsyncPlaceholder=!0,!0;if(!$t(f,c,m))return!1;if(u(b)&&(u(C=b.hook)&&u(C=C.init)&&C(c,!0),u(C=c.componentInstance)))return x(c,_),!0;if(u(S)){if(u(y))if(!f.hasChildNodes())_t(c,y,_);else if(u(C=b)&&u(C=C.domProps)&&u(C=C.innerHTML)){if(C!==f.innerHTML)return typeof console!="undefined"&&!At&&(At=!0,console.warn("Parent: ",f),console.warn("server innerHTML: ",C),console.warn("client innerHTML: ",f.innerHTML)),!1}else{for(var O=!0,T=f.firstChild,B=0;B<y.length;B++){if(!T||!at(T,y[B],_,m)){O=!1;break}T=T.nextSibling}if(!O||T)return typeof console!="undefined"&&!At&&(At=!0,console.warn("Parent: ",f),console.warn("Mismatching childNodes vs. VNodes: ",f.childNodes,y)),!1}if(u(b)){var H=!1;for(var Z in b)if(!ln(Z)){H=!0,R(c,_);break}!H&&b.class&&wn(b.class)}}else f.data!==c.text&&(f.data=c.text);return!0}function $t(f,c,_){return u(c.tag)?c.tag.indexOf("vue-component")===0||!d(c,_)&&c.tag.toLowerCase()===(f.tagName&&f.tagName.toLowerCase()):f.nodeType===(c.isComment?8:3)}return function(c,_,m,C){if(g(_)){u(c)&&vt(c);return}var S=!1,b=[];if(g(c))S=!0,v(_,b);else{var y=u(c.nodeType);if(!y&&Ft(c,_))rt(c,_,b,null,null,C);else{if(y){if(c.nodeType===1&&c.hasAttribute(oe)&&(c.removeAttribute(oe),m=!0),k(m)){if(at(c,_,b))return st(_,b,!0),c;A("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")}c=s(c)}var O=c.elm,T=i.parentNode(O);if(v(_,b,O._leaveCb?null:T,i.nextSibling(O)),u(_.parent))for(var B=_.parent,H=P(_);B;){for(var Z=0;Z<e.destroy.length;++Z)e.destroy[Z](B);if(B.elm=_.elm,H){for(var mt=0;mt<e.create.length;++mt)e.create[mt](Mt,B);var pt=B.data.hook.insert;if(pt.merged)for(var lt=1;lt<pt.fns.length;lt++)pt.fns[lt]()}else Pt(B);B=B.parent}u(T)?nt([c],0,0):u(c.tag)&&vt(c)}}return st(_,b,S),_.elm}}var Pa={create:$r,update:$r,destroy:function(r){$r(r,Mt)}};function $r(t,r){(t.data.directives||r.data.directives)&&Ra(t,r)}function Ra(t,r){var n=t===Mt,e=r===Mt,o=fo(t.data.directives,t.context),i=fo(r.data.directives,r.context),s=[],p=[],l,d,a;for(l in i)d=o[l],a=i[l],d?(a.oldValue=d.value,a.oldArg=d.arg,sn(a,"update",r,t),a.def&&a.def.componentUpdated&&p.push(a)):(sn(a,"bind",r,t),a.def&&a.def.inserted&&s.push(a));if(s.length){var v=function(){for(var h=0;h<s.length;h++)sn(s[h],"inserted",r,t)};n?dt(r,"insert",v):v()}if(p.length&&dt(r,"postpatch",function(){for(var h=0;h<p.length;h++)sn(p[h],"componentUpdated",r,t)}),!n)for(l in o)i[l]||sn(o[l],"unbind",t,t,e)}var Ga=Object.create(null);function fo(t,r){var n=Object.create(null);if(!t)return n;var e,o;for(e=0;e<t.length;e++)o=t[e],o.modifiers||(o.modifiers=Ga),n[Xa(o)]=o,o.def=nr(r.$options,"directives",o.name,!0);return n}function Xa(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function sn(t,r,n,e,o){var i=t.def&&t.def[r];if(i)try{i(n.elm,t,n,e,o)}catch(s){ut(s,n.context,"directive "+t.name+" "+r+" hook")}}var Za=[Ua,Pa];function uo(t,r){var n=r.componentOptions;if(!(u(n)&&n.Ctor.options.inheritAttrs===!1)&&!(g(t.data.attrs)&&g(r.data.attrs))){var e,o,i,s=r.elm,p=t.data.attrs||{},l=r.data.attrs||{};u(l.__ob__)&&(l=r.data.attrs=F({},l));for(e in l)o=l[e],i=p[e],i!==o&&_o(s,e,o,r.data.pre);(Dt||Pn)&&l.value!==p.value&&_o(s,"value",l.value);for(e in p)g(l[e])&&(Mr(e)?s.removeAttributeNS(Or,po(e)):ao(e)||s.removeAttribute(e))}}function _o(t,r,n,e){e||t.tagName.indexOf("-")>-1?ho(t,r,n):ha(r)?Fn(n)?t.removeAttribute(r):(n=r==="allowfullscreen"&&t.tagName==="EMBED"?"true":r,t.setAttribute(r,n)):ao(r)?t.setAttribute(r,_a(r,n)):Mr(r)?Fn(n)?t.removeAttributeNS(Or,po(r)):t.setAttributeNS(Or,r,n):ho(t,r,n)}function ho(t,r,n){if(Fn(n))t.removeAttribute(r);else{if(Dt&&!Ut&&t.tagName==="TEXTAREA"&&r==="placeholder"&&n!==""&&!t.__ieph){var e=function(o){o.stopImmediatePropagation(),t.removeEventListener("input",e)};t.addEventListener("input",e),t.__ieph=!0}t.setAttribute(r,n)}}var ja={create:uo,update:uo};function vo(t,r){var n=r.elm,e=r.data,o=t.data;if(!(g(e.staticClass)&&g(e.class)&&(g(o)||g(o.staticClass)&&g(o.class)))){var i=va(r),s=n._transitionClasses;u(s)&&(i=Fr(i,Nr(s))),i!==n._prevClass&&(n.setAttribute("class",i),n._prevClass=i)}}var za={create:vo,update:vo},Ir="__r",Dr="__c";function Ya(t){if(u(t[Ir])){var r=Dt?"change":"input";t[r]=[].concat(t[Ir],t[r]||[]),delete t[Ir]}u(t[Dr])&&(t.change=[].concat(t[Dr],t.change||[]),delete t[Dr])}var an;function qa(t,r,n){var e=an;return function o(){var i=r.apply(null,arguments);i!==null&&Ao(t,o,n,e)}}var Ja=or&&!(le&&Number(le[1])<=53);function Wa(t,r,n,e){if(Ja){var o=Ke,i=r;r=i._wrapper=function(s){if(s.target===s.currentTarget||s.timeStamp>=o||s.timeStamp<=0||s.target.ownerDocument!==document)return i.apply(this,arguments)}}an.addEventListener(t,r,ce?{capture:n,passive:e}:n)}function Ao(t,r,n,e){(e||an).removeEventListener(t,r._wrapper||r,n)}function mo(t,r){if(!(g(t.data.on)&&g(r.data.on))){var n=r.data.on||{},e=t.data.on||{};an=r.elm,Ya(n),ke(n,e,Wa,Ao,qa,r.context),an=void 0}}var Ka={create:mo,update:mo},kn;function Co(t,r){if(!(g(t.data.domProps)&&g(r.data.domProps))){var n,e,o=r.elm,i=t.data.domProps||{},s=r.data.domProps||{};u(s.__ob__)&&(s=r.data.domProps=F({},s));for(n in i)n in s||(o[n]="");for(n in s){if(e=s[n],n==="textContent"||n==="innerHTML"){if(r.children&&(r.children.length=0),e===i[n])continue;o.childNodes.length===1&&o.removeChild(o.childNodes[0])}if(n==="value"&&o.tagName!=="PROGRESS"){o._value=e;var p=g(e)?"":String(e);t1(o,p)&&(o.value=p)}else if(n==="innerHTML"&&kr(o.tagName)&&g(o.innerHTML)){kn=kn||document.createElement("div"),kn.innerHTML="<svg>"+e+"</svg>";for(var l=kn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;l.firstChild;)o.appendChild(l.firstChild)}else if(e!==i[n])try{o[n]=e}catch{}}}}function t1(t,r){return!t.composing&&(t.tagName==="OPTION"||n1(t,r)||r1(t,r))}function n1(t,r){var n=!0;try{n=document.activeElement!==t}catch{}return n&&t.value!==r}function r1(t,r){var n=t.value,e=t._vModifiers;if(u(e)){if(e.number)return jt(n)!==jt(r);if(e.trim)return n.trim()!==r.trim()}return n!==r}var e1={create:Co,update:Co},o1=Ct(function(t){var r={},n=/;(?![^(]*\))/g,e=/:(.+)/;return t.split(n).forEach(function(o){if(o){var i=o.split(e);i.length>1&&(r[i[0].trim()]=i[1].trim())}}),r});function Ur(t){var r=go(t.style);return t.staticStyle?F(t.staticStyle,r):r}function go(t){return Array.isArray(t)?ne(t):typeof t=="string"?o1(t):t}function i1(t,r){var n={},e;if(r)for(var o=t;o.componentInstance;)o=o.componentInstance._vnode,o&&o.data&&(e=Ur(o.data))&&F(n,e);(e=Ur(t.data))&&F(n,e);for(var i=t;i=i.parent;)i.data&&(e=Ur(i.data))&&F(n,e);return n}var s1=/^--/,yo=/\s*!important$/,xo=function(t,r,n){if(s1.test(r))t.style.setProperty(r,n);else if(yo.test(n))t.style.setProperty(yt(r),n.replace(yo,""),"important");else{var e=a1(r);if(Array.isArray(n))for(var o=0,i=n.length;o<i;o++)t.style[e]=n[o];else t.style[e]=n}},bo=["Webkit","Moz","ms"],Hn,a1=Ct(function(t){if(Hn=Hn||document.createElement("div").style,t=gt(t),t!=="filter"&&t in Hn)return t;for(var r=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<bo.length;n++){var e=bo[n]+r;if(e in Hn)return e}});function wo(t,r){var n=r.data,e=t.data;if(!(g(n.staticStyle)&&g(n.style)&&g(e.staticStyle)&&g(e.style))){var o,i,s=r.elm,p=e.staticStyle,l=e.normalizedStyle||e.style||{},d=p||l,a=go(r.data.style)||{};r.data.normalizedStyle=u(a.__ob__)?F({},a):a;var v=i1(r,!0);for(i in d)g(v[i])&&xo(s,i,"");for(i in v)o=v[i],o!==d[i]&&xo(s,i,o??"")}}var p1={create:wo,update:wo},Eo=/\s+/;function So(t,r){if(!(!r||!(r=r.trim())))if(t.classList)r.indexOf(" ")>-1?r.split(Eo).forEach(function(e){return t.classList.add(e)}):t.classList.add(r);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+r+" ")<0&&t.setAttribute("class",(n+r).trim())}}function To(t,r){if(!(!r||!(r=r.trim())))if(t.classList)r.indexOf(" ")>-1?r.split(Eo).forEach(function(o){return t.classList.remove(o)}):t.classList.remove(r),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",e=" "+r+" ";n.indexOf(e)>=0;)n=n.replace(e," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Bo(t){if(!!t){if(typeof t=="object"){var r={};return t.css!==!1&&F(r,Oo(t.name||"v")),F(r,t),r}else if(typeof t=="string")return Oo(t)}}var Oo=Ct(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Mo=V&&!Ut,Rt="transition",Qr="animation",$n="transition",In="transitionend",Vr="animation",Fo="animationend";Mo&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&($n="WebkitTransition",In="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(Vr="WebkitAnimation",Fo="webkitAnimationEnd"));var No=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function ko(t){No(function(){No(t)})}function Nt(t,r){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(r)<0&&(n.push(r),So(t,r))}function it(t,r){t._transitionClasses&&et(t._transitionClasses,r),To(t,r)}function Ho(t,r,n){var e=$o(t,r),o=e.type,i=e.timeout,s=e.propCount;if(!o)return n();var p=o===Rt?In:Fo,l=0,d=function(){t.removeEventListener(p,a),n()},a=function(v){v.target===t&&++l>=s&&d()};setTimeout(function(){l<s&&d()},i+1),t.addEventListener(p,a)}var l1=/\b(transform|all)(,|$)/;function $o(t,r){var n=window.getComputedStyle(t),e=(n[$n+"Delay"]||"").split(", "),o=(n[$n+"Duration"]||"").split(", "),i=Io(e,o),s=(n[Vr+"Delay"]||"").split(", "),p=(n[Vr+"Duration"]||"").split(", "),l=Io(s,p),d,a=0,v=0;r===Rt?i>0&&(d=Rt,a=i,v=o.length):r===Qr?l>0&&(d=Qr,a=l,v=p.length):(a=Math.max(i,l),d=a>0?i>l?Rt:Qr:null,v=d?d===Rt?o.length:p.length:0);var h=d===Rt&&l1.test(n[$n+"Property"]);return{type:d,timeout:a,propCount:v,hasTransform:h}}function Io(t,r){for(;t.length<r.length;)t=t.concat(t);return Math.max.apply(null,r.map(function(n,e){return Do(n)+Do(t[e])}))}function Do(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Lr(t,r){var n=t.elm;u(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var e=Bo(t.data.transition);if(!g(e)&&!(u(n._enterCb)||n.nodeType!==1)){for(var o=e.css,i=e.type,s=e.enterClass,p=e.enterToClass,l=e.enterActiveClass,d=e.appearClass,a=e.appearToClass,v=e.appearActiveClass,h=e.beforeEnter,x=e.enter,E=e.afterEnter,w=e.enterCancelled,_t=e.beforeAppear,P=e.appear,R=e.afterAppear,ht=e.appearCancelled,kt=e.duration,vt=Ot,nt=Ot.$vnode;nt&&nt.parent;)vt=nt.context,nt=nt.parent;var z=!vt._isMounted||!t.isRootInsert;if(!(z&&!P&&P!=="")){var Zt=z&&d?d:s,Ht=z&&v?v:l,pn=z&&a?a:p,rt=z&&_t||h,st=z&&typeof P=="function"?P:x,At=z&&R||E,ln=z&&ht||w,at=jt(D(kt)?kt.enter:kt);at!=null&&Qo(at,"enter",t);var $t=o!==!1&&!Ut,f=Pr(st),c=n._enterCb=dn(function(){$t&&(it(n,pn),it(n,Ht)),c.cancelled?($t&&it(n,Zt),ln&&ln(n)):At&&At(n),n._enterCb=null});t.data.show||dt(t,"insert",function(){var _=n.parentNode,m=_&&_._pending&&_._pending[t.key];m&&m.tag===t.tag&&m.elm._leaveCb&&m.elm._leaveCb(),st&&st(n,c)}),rt&&rt(n),$t&&(Nt(n,Zt),Nt(n,Ht),ko(function(){it(n,Zt),c.cancelled||(Nt(n,pn),f||(Vo(at)?setTimeout(c,at):Ho(n,i,c)))})),t.data.show&&(r&&r(),st&&st(n,c)),!$t&&!f&&c()}}}function Uo(t,r){var n=t.elm;u(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var e=Bo(t.data.transition);if(g(e)||n.nodeType!==1)return r();if(u(n._leaveCb))return;var o=e.css,i=e.type,s=e.leaveClass,p=e.leaveToClass,l=e.leaveActiveClass,d=e.beforeLeave,a=e.leave,v=e.afterLeave,h=e.leaveCancelled,x=e.delayLeave,E=e.duration,w=o!==!1&&!Ut,_t=Pr(a),P=jt(D(E)?E.leave:E);u(P)&&Qo(P,"leave",t);var R=n._leaveCb=dn(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),w&&(it(n,p),it(n,l)),R.cancelled?(w&&it(n,s),h&&h(n)):(r(),v&&v(n)),n._leaveCb=null});x?x(ht):ht();function ht(){R.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),w&&(Nt(n,s),Nt(n,l),ko(function(){it(n,s),R.cancelled||(Nt(n,p),_t||(Vo(P)?setTimeout(R,P):Ho(n,i,R)))})),a&&a(n,R),!w&&!_t&&R())}}function Qo(t,r,n){typeof t!="number"?A("<transition> explicit "+r+" duration is not a valid number - got "+JSON.stringify(t)+".",n.context):isNaN(t)&&A("<transition> explicit "+r+" duration is NaN - the duration expression might be incorrect.",n.context)}function Vo(t){return typeof t=="number"&&!isNaN(t)}function Pr(t){if(g(t))return!1;var r=t.fns;return u(r)?Pr(Array.isArray(r)?r[0]:r):(t._length||t.length)>1}function Lo(t,r){r.data.show!==!0&&Lr(r)}var c1=V?{create:Lo,activate:Lo,remove:function(r,n){r.data.show!==!0?Uo(r,n):n()}}:{},f1=[ja,za,Ka,e1,p1,c1],u1=f1.concat(Za),d1=La({nodeOps:Da,modules:u1});Ut&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Rr(t,"input")});var Po={inserted:function(r,n,e,o){e.tag==="select"?(o.elm&&!o.elm._vOptions?dt(e,"postpatch",function(){Po.componentUpdated(r,n,e)}):Ro(r,n,e.context),r._vOptions=[].map.call(r.options,Dn)):(e.tag==="textarea"||Hr(r.type))&&(r._vModifiers=n.modifiers,n.modifiers.lazy||(r.addEventListener("compositionstart",_1),r.addEventListener("compositionend",Zo),r.addEventListener("change",Zo),Ut&&(r.vmodel=!0)))},componentUpdated:function(r,n,e){if(e.tag==="select"){Ro(r,n,e.context);var o=r._vOptions,i=r._vOptions=[].map.call(r.options,Dn);if(i.some(function(p,l){return!xt(p,o[l])})){var s=r.multiple?n.value.some(function(p){return Xo(p,i)}):n.value!==n.oldValue&&Xo(n.value,i);s&&Rr(r,"change")}}}};function Ro(t,r,n){Go(t,r,n),(Dt||Pn)&&setTimeout(function(){Go(t,r,n)},0)}function Go(t,r,n){var e=r.value,o=t.multiple;if(o&&!Array.isArray(e)){A('<select multiple v-model="'+r.expression+'"> expects an Array value for its binding, but got '+Object.prototype.toString.call(e).slice(8,-1),n);return}for(var i,s,p=0,l=t.options.length;p<l;p++)if(s=t.options[p],o)i=ee(e,Dn(s))>-1,s.selected!==i&&(s.selected=i);else if(xt(Dn(s),e)){t.selectedIndex!==p&&(t.selectedIndex=p);return}o||(t.selectedIndex=-1)}function Xo(t,r){return r.every(function(n){return!xt(n,t)})}function Dn(t){return"_value"in t?t._value:t.value}function _1(t){t.target.composing=!0}function Zo(t){!t.target.composing||(t.target.composing=!1,Rr(t.target,"input"))}function Rr(t,r){var n=document.createEvent("HTMLEvents");n.initEvent(r,!0,!0),t.dispatchEvent(n)}function Gr(t){return t.componentInstance&&(!t.data||!t.data.transition)?Gr(t.componentInstance._vnode):t}var h1={bind:function(r,n,e){var o=n.value;e=Gr(e);var i=e.data&&e.data.transition,s=r.__vOriginalDisplay=r.style.display==="none"?"":r.style.display;o&&i?(e.data.show=!0,Lr(e,function(){r.style.display=s})):r.style.display=o?s:"none"},update:function(r,n,e){var o=n.value,i=n.oldValue;if(!o!=!i){e=Gr(e);var s=e.data&&e.data.transition;s?(e.data.show=!0,o?Lr(e,function(){r.style.display=r.__vOriginalDisplay}):Uo(e,function(){r.style.display="none"})):r.style.display=o?r.__vOriginalDisplay:"none"}},unbind:function(r,n,e,o,i){i||(r.style.display=r.__vOriginalDisplay)}},v1={model:Po,show:h1},jo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Xr(t){var r=t&&t.componentOptions;return r&&r.Ctor.options.abstract?Xr(ze(r.children)):t}function zo(t){var r={},n=t.$options;for(var e in n.propsData)r[e]=t[e];var o=n._parentListeners;for(var i in o)r[gt(i)]=o[i];return r}function Yo(t,r){if(/\d-keep-alive$/.test(r.tag))return t("keep-alive",{props:r.componentOptions.propsData})}function A1(t){for(;t=t.parent;)if(t.data.transition)return!0}function m1(t,r){return r.key===t.key&&r.tag===t.tag}var C1=function(t){return t.tag||tn(t)},g1=function(t){return t.name==="show"},y1={name:"transition",props:jo,abstract:!0,render:function(r){var n=this,e=this.$slots.default;if(!!e&&(e=e.filter(C1),!!e.length)){e.length>1&&A("<transition> can only be used on a single element. Use <transition-group> for lists.",this.$parent);var o=this.mode;o&&o!=="in-out"&&o!=="out-in"&&A("invalid <transition> mode: "+o,this.$parent);var i=e[0];if(A1(this.$vnode))return i;var s=Xr(i);if(!s)return i;if(this._leaving)return Yo(r,i);var p="__transition-"+this._uid+"-";s.key=s.key==null?s.isComment?p+"comment":p+s.tag:ct(s.key)?String(s.key).indexOf(p)===0?s.key:p+s.key:s.key;var l=(s.data||(s.data={})).transition=zo(this),d=this._vnode,a=Xr(d);if(s.data.directives&&s.data.directives.some(g1)&&(s.data.show=!0),a&&a.data&&!m1(s,a)&&!tn(a)&&!(a.componentInstance&&a.componentInstance._vnode.isComment)){var v=a.data.transition=F({},l);if(o==="out-in")return this._leaving=!0,dt(v,"afterLeave",function(){n._leaving=!1,n.$forceUpdate()}),Yo(r,i);if(o==="in-out"){if(tn(s))return d;var h,x=function(){h()};dt(l,"afterEnter",x),dt(l,"enterCancelled",x),dt(v,"delayLeave",function(E){h=E})}}return i}}},qo=F({tag:String,moveClass:String},jo);delete qo.mode;var x1={props:qo,beforeMount:function(){var r=this,n=this._update;this._update=function(e,o){var i=qe(r);r.__patch__(r._vnode,r.kept,!1,!0),r._vnode=r.kept,i(),n.call(r,e,o)}},render:function(r){for(var n=this.tag||this.$vnode.data.tag||"span",e=Object.create(null),o=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],p=zo(this),l=0;l<i.length;l++){var d=i[l];if(d.tag)if(d.key!=null&&String(d.key).indexOf("__vlist")!==0)s.push(d),e[d.key]=d,(d.data||(d.data={})).transition=p;else{var a=d.componentOptions,v=a?a.Ctor.options.name||a.tag||"":d.tag;A("<transition-group> children must be keyed: <"+v+">")}}if(o){for(var h=[],x=[],E=0;E<o.length;E++){var w=o[E];w.data.transition=p,w.data.pos=w.elm.getBoundingClientRect(),e[w.key]?h.push(w):x.push(w)}this.kept=r(n,null,h),this.removed=x}return r(n,null,s)},updated:function(){var r=this.prevChildren,n=this.moveClass||(this.name||"v")+"-move";!r.length||!this.hasMove(r[0].elm,n)||(r.forEach(b1),r.forEach(w1),r.forEach(E1),this._reflow=document.body.offsetHeight,r.forEach(function(e){if(e.data.moved){var o=e.elm,i=o.style;Nt(o,n),i.transform=i.WebkitTransform=i.transitionDuration="",o.addEventListener(In,o._moveCb=function s(p){p&&p.target!==o||(!p||/transform$/.test(p.propertyName))&&(o.removeEventListener(In,s),o._moveCb=null,it(o,n))})}}))},methods:{hasMove:function(r,n){if(!Mo)return!1;if(this._hasMove)return this._hasMove;var e=r.cloneNode();r._transitionClasses&&r._transitionClasses.forEach(function(i){To(e,i)}),So(e,n),e.style.display="none",this.$el.appendChild(e);var o=$o(e);return this.$el.removeChild(e),this._hasMove=o.hasTransform}}};function b1(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function w1(t){t.data.newPos=t.elm.getBoundingClientRect()}function E1(t){var r=t.data.pos,n=t.data.newPos,e=r.left-n.left,o=r.top-n.top;if(e||o){t.data.moved=!0;var i=t.elm.style;i.transform=i.WebkitTransform="translate("+e+"px,"+o+"px)",i.transitionDuration="0s"}}var S1={Transition:y1,TransitionGroup:x1};N.config.mustUseProp=ua;N.config.isReservedTag=co;N.config.isReservedAttr=ca;N.config.getTagNamespace=xa;N.config.isUnknownElement=ba;F(N.options.directives,v1);F(N.options.components,S1);N.prototype.__patch__=V?d1:I;N.prototype.$mount=function(t,r){return t=t&&V?wa(t):void 0,ks(this,t,r)};V&&setTimeout(function(){M.devtools&&(An?An.emit("init",N):console[console.info?"info":"log"](`Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools`)),M.productionTip!==!1&&typeof console!="undefined"&&console[console.info?"info":"log"](`You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html`)},0);var Zr=N;var T1={name:"Loader"},Jo=function(){var t=this,r=t.$createElement,n=t._self._c||r;return t._m(0)},B1=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{staticClass:"loader"}),t._v(" "),n("span",[t._v("loading..")])])}];Jo._withStripped=!0;var O1=function(t){!t||t("data-v-37cfbefe_0",{source:`
.loader[data-v-37cfbefe] {\r
  filter: none !important;\r
  z-index: 5;\r
  border: solid 2px red;\r
  position: relative;\r
  left: calc(50% - 40px);\r
  border: 16px solid #cccccc; /* Light grey */\r
  border-top: 16px solid #3498db; /* Blue */\r
  border-radius: 50%;\r
  width: 40px;\r
  height: 40px;\r
  padding: 0;\r
  margin: 0;\r
  animation: spin-data-v-37cfbefe 2s linear infinite;
}
@keyframes spin-data-v-37cfbefe {
0% {\r
    transform: rotate(0deg);
}
100% {\r
    transform: rotate(360deg);
}
}\r
`,map:{version:3,sources:["src\\components\\Loader.vue"],names:[],mappings:";AAaA;EACA,uBAAA;EACA,UAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,0BAAA,EAAA,eAAA;EACA,8BAAA,EAAA,SAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,kDAAA;AACA;AAEA;AACA;IACA,uBAAA;AACA;AACA;IACA,yBAAA;AACA;AACA",file:"Loader.vue",sourcesContent:[`<template>\r
  <div>\r
    <div class="loader"></div>\r
    <span>loading..</span>\r
  </div>\r
</template>\r
\r
<script>\r
export default {\r
  name: "Loader",\r
};\r
<\/script>\r
<style scoped>\r
.loader {\r
  filter: none !important;\r
  z-index: 5;\r
  border: solid 2px red;\r
  position: relative;\r
  left: calc(50% - 40px);\r
  border: 16px solid #cccccc; /* Light grey */\r
  border-top: 16px solid #3498db; /* Blue */\r
  border-radius: 50%;\r
  width: 40px;\r
  height: 40px;\r
  padding: 0;\r
  margin: 0;\r
  animation: spin 2s linear infinite;\r
}\r
\r
@keyframes spin {\r
  0% {\r
    transform: rotate(0deg);\r
  }\r
  100% {\r
    transform: rotate(360deg);\r
  }\r
}\r
</style>\r
`]},media:void 0})},M1="data-v-37cfbefe",F1=void 0,N1=!1;function k1(t,r,n,e,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};a.__file=`<template>\r
  <div>\r
    <div class="loader"></div>\r
    <span>loading..</span>\r
  </div>\r
</template>\r
\r
<script>\r
export default {\r
  name: "Loader",\r
};\r
<\/script>\r
<style scoped>\r
.loader {\r
  filter: none !important;\r
  z-index: 5;\r
  border: solid 2px red;\r
  position: relative;\r
  left: calc(50% - 40px);\r
  border: 16px solid #cccccc; /* Light grey */\r
  border-top: 16px solid #3498db; /* Blue */\r
  border-radius: 50%;\r
  width: 40px;\r
  height: 40px;\r
  padding: 0;\r
  margin: 0;\r
  animation: spin 2s linear infinite;\r
}\r
\r
@keyframes spin {\r
  0% {\r
    transform: rotate(0deg);\r
  }\r
  100% {\r
    transform: rotate(360deg);\r
  }\r
}\r
</style>\r
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=e;{let v;if(r&&(v=s?function(h){r.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){r.call(this,p(h))}),v!==void 0)if(a.functional){let h=a.render;a.render=function(E,w){return v.call(w),h(E,w)}}else{let h=a.beforeCreate;a.beforeCreate=h?[].concat(h,v):[v]}}return a}function jr(){let t=jr.styles||(jr.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,o){if(document.querySelector('style[data-vue-ssr-id~="'+e+'"]'))return;let i=r?o.media||"default":e,s=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!s.ids.includes(e)){let p=o.source,l=s.ids.length;if(s.ids.push(e),r&&(s.element=s.element||document.querySelector("style[data-group="+i+"]")),!s.element){let d=document.head||document.getElementsByTagName("head")[0],a=s.element=document.createElement("style");a.type="text/css",o.media&&a.setAttribute("media",o.media),r&&(a.setAttribute("data-group",i),a.setAttribute("data-next-index","0")),d.appendChild(a)}if(r&&(l=parseInt(s.element.getAttribute("data-next-index")),s.element.setAttribute("data-next-index",l+1)),s.element.styleSheet)s.parts.push(p),s.element.styleSheet.cssText=s.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(p),a=s.element.childNodes;a[l]&&s.element.removeChild(a[l]),a.length?s.element.insertBefore(d,a[l]):s.element.appendChild(d)}}}}var H1=k1({render:Jo,staticRenderFns:B1},O1,T1,M1,N1,F1,!1,jr,void 0,void 0),Wo=H1;var $1={name:"Equation"},Ko=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"250",height:"100",viewBox:"0 -1458 11066 2416","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("defs",[n("path",{attrs:{id:"MJX-87-TEX-I-78",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-62",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-B1",d:"M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-SO-221A",d:"M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-N-34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}}),t._v(" "),n("path",{attrs:{id:"MJX-87-TEX-I-63",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}})]),t._v(" "),n("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[n("g",{attrs:{"data-mml-node":"math"}},[n("g",{attrs:{"data-mml-node":"mtable"}},[n("g",{attrs:{"data-mml-node":"mtr",transform:"translate(0, -262)"}},[n("g",{attrs:{"data-mml-node":"mtd"}},[n("g",{attrs:{"data-mml-node":"msub"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-31"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(975.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2C"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"msub",transform:"translate(1420.2, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-78"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(572, -150) scale(0.707)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(2673.6, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-3D"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mfrac",transform:"translate(3729.3, 0)"}},[n("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220, 787.5)"}},[n("g",{attrs:{"data-mml-node":"mo"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(778, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1429.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-B1"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"msqrt",transform:"translate(2429.4, 0)"}},[n("g",{attrs:{transform:"translate(1000, 0)"}},[n("g",{attrs:{"data-mml-node":"mi"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-62"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(429, 0)"}},[n("g",{attrs:{"data-mml-node":"mo"}},[n("text",{attrs:{"data-variant":"normal",transform:"matrix(1 0 0 -1 0 0)","font-size":"884px","font-family":"serif"}},[t._v(`
                            \xB2
                          `)])])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(1005, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-2212"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mn",transform:"translate(2005.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-34"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(2505.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(3034.2, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-63"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mo",transform:"translate(0, 22.5)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-SO-221A"}})]),t._v(" "),n("rect",{attrs:{width:"3467.2",height:"60",x:"1000",y:"812.5"}})])]),t._v(" "),n("g",{attrs:{"data-mml-node":"mrow",transform:"translate(3153.8, -686)"}},[n("g",{attrs:{"data-mml-node":"mn"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-N-32"}})]),t._v(" "),n("g",{attrs:{"data-mml-node":"mi",transform:"translate(500, 0)"}},[n("use",{attrs:{"xlink:href":"#MJX-87-TEX-I-61"}})])]),t._v(" "),n("rect",{attrs:{width:"7096.7",height:"60",x:"120",y:"220"}})])])])])])])])])},I1=[];Ko._withStripped=!0;var D1=void 0,U1=void 0,Q1=void 0,V1=!1;function L1(t,r,n,e,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>\r
  <div>\r
    <svg\r
      xmlns="http://www.w3.org/2000/svg"\r
      width="250"\r
      height="100"\r
      viewBox="0 -1458 11066 2416"\r
      xmlns:xlink="http://www.w3.org/1999/xlink"\r
    >\r
      <defs>\r
        <path\r
          id="MJX-87-TEX-I-78"\r
          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-N-31"\r
          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-N-2C"\r
          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-N-32"\r
          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-N-3D"\r
          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-N-2212"\r
          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-I-62"\r
          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-N-B1"\r
          d="M56 320T56 333T70 353H369V502Q369 651 371 655Q376 666 388 666Q402 666 405 654T409 596V500V353H707Q722 345 722 333Q722 320 707 313H409V40H707Q722 32 722 20T707 0H70Q56 7 56 20T70 40H369V313H70Q56 320 56 333Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-SO-221A"\r
          d="M263 249Q264 249 315 130T417 -108T470 -228L725 302Q981 837 982 839Q989 850 1001 850Q1008 850 1013 844T1020 832V826L741 243Q645 43 540 -176Q479 -303 469 -324T453 -348Q449 -350 436 -350L424 -349L315 -96Q206 156 205 156L171 130Q138 104 137 104L111 130L263 249Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-N-34"\r
          d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-I-61"\r
          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"\r
        ></path>\r
        <path\r
          id="MJX-87-TEX-I-63"\r
          d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"\r
        ></path>\r
      </defs>\r
      <g\r
        stroke="currentColor"\r
        fill="currentColor"\r
        stroke-width="0"\r
        transform="matrix(1 0 0 -1 0 0)"\r
      >\r
        <g data-mml-node="math">\r
          <g data-mml-node="mtable">\r
            <g data-mml-node="mtr" transform="translate(0, -262)">\r
              <g data-mml-node="mtd">\r
                <g data-mml-node="msub">\r
                  <g data-mml-node="mi">\r
                    <use xlink:href="#MJX-87-TEX-I-78"></use>\r
                  </g>\r
                  <g\r
                    data-mml-node="mn"\r
                    transform="translate(572, -150) scale(0.707)"\r
                  >\r
                    <use xlink:href="#MJX-87-TEX-N-31"></use>\r
                  </g>\r
                </g>\r
                <g data-mml-node="mo" transform="translate(975.6, 0)">\r
                  <use xlink:href="#MJX-87-TEX-N-2C"></use>\r
                </g>\r
                <g data-mml-node="msub" transform="translate(1420.2, 0)">\r
                  <g data-mml-node="mi">\r
                    <use xlink:href="#MJX-87-TEX-I-78"></use>\r
                  </g>\r
                  <g\r
                    data-mml-node="mn"\r
                    transform="translate(572, -150) scale(0.707)"\r
                  >\r
                    <use xlink:href="#MJX-87-TEX-N-32"></use>\r
                  </g>\r
                </g>\r
                <g data-mml-node="mo" transform="translate(2673.6, 0)">\r
                  <use xlink:href="#MJX-87-TEX-N-3D"></use>\r
                </g>\r
                <g data-mml-node="mfrac" transform="translate(3729.3, 0)">\r
                  <g data-mml-node="mrow" transform="translate(220, 787.5)">\r
                    <g data-mml-node="mo">\r
                      <use xlink:href="#MJX-87-TEX-N-2212"></use>\r
                    </g>\r
                    <g data-mml-node="mi" transform="translate(778, 0)">\r
                      <use xlink:href="#MJX-87-TEX-I-62"></use>\r
                    </g>\r
                    <g data-mml-node="mo" transform="translate(1429.2, 0)">\r
                      <use xlink:href="#MJX-87-TEX-N-B1"></use>\r
                    </g>\r
                    <g data-mml-node="msqrt" transform="translate(2429.4, 0)">\r
                      <g transform="translate(1000, 0)">\r
                        <g data-mml-node="mi">\r
                          <use xlink:href="#MJX-87-TEX-I-62"></use>\r
                        </g>\r
                        <g\r
                          data-mml-node="TeXAtom"\r
                          transform="translate(429, 0)"\r
                        >\r
                          <g data-mml-node="mo">\r
                            <text\r
                              data-variant="normal"\r
                              transform="matrix(1 0 0 -1 0 0)"\r
                              font-size="884px"\r
                              font-family="serif"\r
                            >\r
                              \xB2\r
                            </text>\r
                          </g>\r
                        </g>\r
                        <g data-mml-node="mo" transform="translate(1005, 0)">\r
                          <use xlink:href="#MJX-87-TEX-N-2212"></use>\r
                        </g>\r
                        <g data-mml-node="mn" transform="translate(2005.2, 0)">\r
                          <use xlink:href="#MJX-87-TEX-N-34"></use>\r
                        </g>\r
                        <g data-mml-node="mi" transform="translate(2505.2, 0)">\r
                          <use xlink:href="#MJX-87-TEX-I-61"></use>\r
                        </g>\r
                        <g data-mml-node="mi" transform="translate(3034.2, 0)">\r
                          <use xlink:href="#MJX-87-TEX-I-63"></use>\r
                        </g>\r
                      </g>\r
                      <g data-mml-node="mo" transform="translate(0, 22.5)">\r
                        <use xlink:href="#MJX-87-TEX-SO-221A"></use>\r
                      </g>\r
                      <rect\r
                        width="3467.2"\r
                        height="60"\r
                        x="1000"\r
                        y="812.5"\r
                      ></rect>\r
                    </g>\r
                  </g>\r
                  <g data-mml-node="mrow" transform="translate(3153.8, -686)">\r
                    <g data-mml-node="mn">\r
                      <use xlink:href="#MJX-87-TEX-N-32"></use>\r
                    </g>\r
                    <g data-mml-node="mi" transform="translate(500, 0)">\r
                      <use xlink:href="#MJX-87-TEX-I-61"></use>\r
                    </g>\r
                  </g>\r
                  <rect width="7096.7" height="60" x="120" y="220"></rect>\r
                </g>\r
              </g>\r
            </g>\r
          </g>\r
        </g>\r
      </g>\r
    </svg>\r
  </div>\r
</template>\r
<script>\r
export default {\r
  name: "Equation",\r
};\r
<\/script>\r
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=e,a}var P1=L1({render:Ko,staticRenderFns:I1},D1,$1,U1,V1,Q1,!1,void 0,void 0,void 0),ti=P1;var R1={},ni=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("a",{attrs:{href:"https://github.com/ProxyLabs",target:"_blank"}},[n("svg",{staticClass:"logo",attrs:{viewBox:"0 0 648 121",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z",fill:"url(#paint0_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z",fill:"url(#paint1_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z",fill:"url(#paint2_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z",fill:"url(#paint3_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z",fill:"url(#paint4_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z",fill:"url(#paint5_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z",fill:"url(#paint6_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z",fill:"url(#paint7_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z",fill:"url(#paint8_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z",fill:"url(#paint9_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z",fill:"url(#paint10_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M84.6285 34.026H92.6247V26.027H84.6285V34.026Z",fill:"url(#paint11_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z",fill:"url(#paint12_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M108.791 14.4016H123.17V0H108.791V14.4016Z",fill:"url(#paint13_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z",fill:"url(#paint14_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M97.811 33.2278H104.194V26.8426H97.811V33.2278Z",fill:"url(#paint15_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M110.803 27.953H120.395V18.3578H110.803V27.953Z",fill:"url(#paint16_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M106.623 38.0341H110.942V33.7137H106.623V38.0341Z",fill:"url(#paint17_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M114.792 42.4067H121.175V36.0388H114.792V42.4067Z",fill:"url(#paint18_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z",fill:"url(#paint19_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z",fill:"url(#paint20_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z",fill:"url(#paint21_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z",fill:"url(#paint22_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z",fill:"url(#paint23_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z",fill:"url(#paint24_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z",fill:"url(#paint25_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z",fill:"url(#paint26_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z",fill:"url(#paint27_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z",fill:"url(#paint28_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z",fill:"url(#paint29_linear_3_40)"}}),t._v(" "),n("path",{attrs:{d:"M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z",fill:"url(#paint30_linear_3_40)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_3_40",x1:"16.2335",y1:"78.5655",x2:"90.5021",y2:"14.0713",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_3_40",x1:"33.4419",y1:"98.3816",x2:"107.71",y2:"33.8874",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_3_40",x1:"51.0435",y1:"118.651",x2:"125.312",y2:"54.1567",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_3_40",x1:"62.0301",y1:"131.303",x2:"136.299",y2:"66.8084",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint4_linear_3_40",x1:"46.0063",y1:"112.85",x2:"120.275",y2:"48.3561",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint5_linear_3_40",x1:"22.5737",y1:"85.8663",x2:"96.8421",y2:"21.3722",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint6_linear_3_40",x1:"5.30527",y1:"65.9808",x2:"79.5737",y2:"1.48666",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint7_linear_3_40",x1:"39.9594",y1:"105.887",x2:"114.228",y2:"41.3928",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint8_linear_3_40",x1:"14.3736",y1:"76.4235",x2:"88.642",y2:"11.9294",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint9_linear_3_40",x1:"30.2892",y1:"94.7512",x2:"104.558",y2:"30.2571",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint10_linear_3_40",x1:"21.9139",y1:"85.1065",x2:"96.1823",y2:"20.6124",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint11_linear_3_40",x1:"23.3495",y1:"86.7596",x2:"97.618",y2:"22.2656",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint12_linear_3_40",x1:"11.5745",y1:"73.2003",x2:"85.8427",y2:"8.70587",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint13_linear_3_40",x1:"23.8107",y1:"87.2911",x2:"98.0794",y2:"22.7968",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint14_linear_3_40",x1:"23.6893",y1:"87.1514",x2:"97.958",y2:"22.657",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint15_linear_3_40",x1:"28.6723",y1:"92.8895",x2:"102.941",y2:"28.3951",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint16_linear_3_40",x1:"31.5413",y1:"96.193",x2:"105.81",y2:"31.6988",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint17_linear_3_40",x1:"34.9074",y1:"100.07",x2:"109.176",y2:"35.5752",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint18_linear_3_40",x1:"40.5234",y1:"106.536",x2:"114.792",y2:"42.0425",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint19_linear_3_40",x1:"17.9841",y1:"80.5813",x2:"92.2529",y2:"16.0874",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint20_linear_3_40",x1:"31.505",y1:"96.1513",x2:"105.774",y2:"31.6572",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint21_linear_3_40",x1:"39.6018",y1:"105.475",x2:"113.87",y2:"40.9808",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint22_linear_3_40",x1:"156.752",y1:"71.2438",x2:"644.928",y2:"71.2438",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint23_linear_3_40",x1:"156.752",y1:"80.3112",x2:"644.928",y2:"80.3112",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint24_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint25_linear_3_40",x1:"156.752",y1:"80.3113",x2:"644.928",y2:"80.3113",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint26_linear_3_40",x1:"156.752",y1:"89.2923",x2:"644.928",y2:"89.2923",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint27_linear_3_40",x1:"156.752",y1:"71.3085",x2:"644.928",y2:"71.3085",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint28_linear_3_40",x1:"156.752",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint29_linear_3_40",x1:"156.752",y1:"71.287",x2:"644.928",y2:"71.287",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint30_linear_3_40",x1:"156.753",y1:"80.2897",x2:"644.928",y2:"80.2897",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])])},G1=[];ni._withStripped=!0;var X1=void 0,Z1=void 0,j1=void 0,z1=!1;function Y1(t,r,n,e,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>\r
  <a href="https://github.com/ProxyLabs" target="_blank">\r
    <svg\r
      class="logo"\r
      viewBox="0 0 648 121"\r
      fill="none"\r
      xmlns="http://www.w3.org/2000/svg"\r
    >\r
      <path\r
        d="M68.4798 34.1301C68.4625 35.7438 68.9482 36.5073 70.5266 36.9584C76.32 38.5894 82.0787 40.3419 87.8547 42.0423C88.323 42.1811 88.8087 42.2505 89.5199 42.3893C89.5892 41.6953 89.676 41.1574 89.676 40.6195C89.676 39.0232 89.676 37.4442 89.676 35.8479H82.8765V23.9622H89.676C89.676 21.5157 89.676 19.0865 89.6933 16.6399C89.6933 15.4427 89.3984 14.6098 88.219 14.0719C88.0455 14.0025 87.8894 13.9158 87.7159 13.8464V15.5988H78.0372V9.45648C75.366 8.24189 72.7121 7.0273 70.0409 5.83005C69.6767 5.65654 69.2257 5.62184 68.6359 5.48303C68.5839 6.26384 68.5319 6.87113 68.5145 7.47843C68.5145 16.3623 68.5492 25.2462 68.4798 34.1301Z"\r
        fill="url(#paint0_linear_3_40)"\r
      />\r
      <path\r
        d="M84.8367 46.5016C80.1707 45.0788 75.4701 43.8122 70.7695 42.4935C70.1277 42.3026 69.4686 42.2158 68.5146 42.0423V44.1592C68.4972 53.2166 68.5146 62.2913 68.4452 71.3487C68.4279 72.8756 69.2951 73.1012 70.4573 73.2747C74.8977 73.8994 79.3382 74.5587 83.7786 75.1834C85.1489 75.3743 86.5365 75.461 87.8895 75.7907C89.4679 76.1724 89.7281 75.4784 89.7281 74.125C89.676 67.0803 89.7628 60.053 89.6934 53.0084C89.6067 46.7966 90.7862 48.3062 84.8367 46.5016Z"\r
        fill="url(#paint1_linear_3_40)"\r
      />\r
      <path\r
        d="M68.4972 107.353C68.4625 108.88 68.8268 109.556 70.4052 109.574C70.4746 109.574 70.544 109.574 70.6134 109.574C72.7122 109.539 74.7936 109.522 76.8924 109.504C78.1933 109.504 79.4942 109.504 80.7951 109.504C81.9226 109.504 83.05 109.522 84.1775 109.522C85.3049 109.539 86.4324 109.539 87.5598 109.556H87.7333C89.2077 109.574 89.728 109.157 89.728 107.613C89.6933 99.4927 89.7454 91.3722 89.8148 83.2518C89.8148 82.1586 89.4332 81.586 88.3577 81.4472C84.4203 80.944 80.4829 80.4062 76.5455 79.903C74.5334 79.6427 72.5213 79.4518 70.5266 79.1221C70.1971 79.0701 69.9022 79.0527 69.642 79.0701C68.8268 79.1395 68.4799 79.6253 68.5145 80.8746C68.6186 85.3166 68.5492 89.7412 68.5492 94.1831H68.5319C68.5145 98.5904 68.5839 102.963 68.4972 107.353Z"\r
        fill="url(#paint2_linear_3_40)"\r
      />\r
      <path\r
        d="M93.7349 83.0956C93.6481 87.2773 93.6828 91.459 93.6828 95.658H93.7175C93.7175 99.6662 93.7522 103.657 93.7002 107.648C93.6828 109.019 94.0991 109.591 95.5388 109.556C100.482 109.487 105.443 109.504 110.386 109.556C111.635 109.574 112.069 109.088 112.069 107.873C112.052 100.378 112.052 92.8818 112.069 85.4034C112.069 84.2755 111.687 83.6335 110.456 83.5121C105.235 82.9915 100.031 82.3842 94.8103 81.9157C94.4981 81.8984 93.7522 82.6792 93.7349 83.0956Z"\r
        fill="url(#paint3_linear_3_40)"\r
      />\r
      <path\r
        d="M93.5787 74.0729C93.5613 75.6519 94.047 76.2071 95.7295 76.4153C100.552 76.9879 105.322 77.8208 110.109 78.6016C111.358 78.8098 112.208 78.7578 112.19 77.1268C112.121 69.7871 112.034 62.4475 112.104 55.1079C112.121 53.9801 111.913 53.234 111.34 52.7308L102.477 55.8887L100.239 49.6075C98.7997 49.2258 97.36 48.8441 95.9203 48.4797C93.8736 47.9591 93.7175 48.0632 93.7001 50.1281C93.6828 54.1189 93.7001 58.1097 93.7001 62.1005H93.5787C93.596 66.1086 93.6481 70.0821 93.5787 74.0729Z"\r
        fill="url(#paint4_linear_3_40)"\r
      />\r
      <path\r
        d="M62.5477 44.1592V42.0423C61.6111 42.2332 60.9346 42.3199 60.2928 42.4935C55.6096 43.8122 50.8916 45.0788 46.2257 46.5016C40.2762 48.3062 41.4557 46.7966 41.3863 53.0257C41.3169 60.053 41.3863 67.0977 41.3516 74.1423C41.3516 75.4957 41.6118 76.1898 43.1902 75.808C44.5258 75.4784 45.9308 75.4089 47.3011 75.2007C51.7415 74.5587 56.1819 73.8994 60.6224 73.2747C61.7845 73.1186 62.6345 72.8756 62.6345 71.3487C62.5477 62.2913 62.5651 53.2166 62.5477 44.1592ZM57.5002 68.347C54.6382 68.746 51.7935 69.1625 48.9316 69.5789C48.0469 69.7003 47.145 69.7524 46.295 69.9606C45.289 70.2035 45.1156 69.7698 45.1156 68.8848C45.1502 64.3561 45.0982 59.8274 45.1329 55.2987C45.1849 51.2906 44.4217 52.2623 48.2551 51.0997C51.2558 50.1975 54.2913 49.3646 57.3094 48.5144C57.7257 48.3929 58.1593 48.3409 58.7664 48.2194C58.7664 48.792 58.7664 49.1911 58.7664 49.5902C58.7664 55.4202 58.7664 61.2503 58.8011 67.0803C58.8011 68.0867 58.2461 68.2428 57.5002 68.347Z"\r
        fill="url(#paint5_linear_3_40)"\r
      />\r
      <path\r
        d="M62.5304 7.47843C62.5304 6.87113 62.461 6.26384 62.4263 5.48303C61.8192 5.63919 61.3856 5.67389 61.004 5.83005C54.9504 8.57157 48.8968 11.3478 42.8259 14.0719C41.6464 14.6098 41.3516 15.4253 41.3516 16.6399C41.3863 24.6389 41.3689 32.6379 41.3689 40.6369C41.3689 41.1748 41.4556 41.7127 41.525 42.4067C42.2362 42.2505 42.7219 42.1811 43.1902 42.0423C48.9662 40.3419 54.7249 38.5721 60.5183 36.9584C62.1141 36.5072 62.5824 35.7438 62.5651 34.1301C62.4957 25.2462 62.5304 16.3623 62.5304 7.47843ZM57.4655 32.3603C53.7189 33.4013 50.007 34.5465 46.2777 35.6397C45.9828 35.7264 45.6532 35.7785 45.2023 35.8652C45.1676 35.4141 45.0982 35.0671 45.0982 34.72C45.0982 29.5493 45.0982 24.396 45.0808 19.2253C45.0808 18.4445 45.2716 17.9066 46.0348 17.5769C49.9549 15.8244 53.8576 14.0199 57.7777 12.25C58.0205 12.1459 58.2981 12.1112 58.697 12.0245C58.7317 12.5277 58.7664 12.9268 58.7664 13.3085C58.7664 19.0518 58.7491 24.7777 58.8011 30.521C58.8011 31.5621 58.5062 32.0653 57.4655 32.3603Z"\r
        fill="url(#paint6_linear_3_40)"\r
      />\r
      <path\r
        d="M62.565 107.353C62.4783 102.98 62.5303 98.5904 62.5303 94.2178H62.513C62.513 89.7759 62.4436 85.3513 62.5477 80.9094C62.5824 79.6601 62.2355 79.1569 61.4202 79.1048C61.1774 79.0875 60.8825 79.1048 60.5356 79.1569C58.5409 79.4692 56.5288 79.66 54.5167 79.9377C50.5793 80.4582 46.6419 80.9787 42.7045 81.4819C41.6117 81.6207 41.2301 82.1934 41.2474 83.2865C41.3168 91.4069 41.3689 99.5273 41.3342 107.648C41.3342 109.175 41.8545 109.591 43.3289 109.591H43.5024C44.6298 109.574 45.7573 109.574 46.8847 109.556C48.0122 109.556 49.1396 109.539 50.2671 109.539C51.568 109.539 52.8689 109.539 54.1698 109.539C56.2686 109.539 58.3501 109.574 60.4489 109.608C60.5183 109.608 60.5876 109.608 60.657 109.608C62.2355 109.556 62.5997 108.88 62.565 107.353ZM45.9654 104.958C44.942 104.976 44.5778 104.681 44.5778 103.605C44.5951 97.9484 44.5604 92.2745 44.5084 86.6179C44.5084 85.8545 44.7686 85.4554 45.5144 85.3686C48.255 85.0216 51.0129 84.6399 53.7535 84.2929C55.1585 84.102 56.5635 83.9805 57.9511 83.755C58.9745 83.5988 59.3735 83.8417 59.3561 84.9869C59.2867 88.0755 59.3388 91.1814 59.3388 94.2699H59.3561C59.3561 97.3237 59.3214 100.378 59.3735 103.431C59.3908 104.542 59.1133 105.01 57.8991 104.993C53.927 104.889 49.9375 104.906 45.9654 104.958Z"\r
        fill="url(#paint7_linear_3_40)"\r
      />\r
      <path\r
        d="M37.4662 62.1179H37.3621C37.3621 58.1271 37.3621 54.1362 37.3621 50.1454C37.3621 48.0806 37.206 47.9592 35.1592 48.497C30.5627 49.6769 26.0008 50.9609 21.3696 52.002C19.5136 52.4185 18.9586 53.2513 18.9759 55.1079C19.0453 62.4475 18.9759 69.7872 18.8892 77.1094C18.8718 78.7578 19.7218 78.7925 20.9706 78.6016C25.758 77.8208 30.5453 76.988 35.35 76.4154C37.0325 76.2245 37.5182 75.6519 37.5009 74.0729C37.4141 70.0995 37.4662 66.1087 37.4662 62.1179ZM33.2339 72.5981C29.8342 72.9971 26.4691 73.5871 23.1041 74.1423C22.2195 74.2811 21.6298 74.2465 21.6298 73.1013C21.6818 67.9306 21.7338 62.7599 21.6818 57.5892C21.6644 56.2705 22.0634 55.6979 23.3643 55.4029C26.6253 54.6741 29.8515 53.7545 33.0778 52.939C34.5174 52.5573 34.6215 52.644 34.6389 54.1015C34.6389 56.9124 34.6389 59.7234 34.6389 62.5343H34.7082C34.7082 65.3452 34.6735 68.1561 34.7256 70.967C34.7603 72.0602 34.4134 72.4593 33.2339 72.5981Z"\r
        fill="url(#paint8_linear_3_40)"\r
      />\r
      <path\r
        d="M37.3795 95.658C37.3795 91.4763 37.4142 87.2773 37.3274 83.0956C37.3274 82.6792 36.5816 81.8984 36.2347 81.9331C31.0137 82.4016 25.8101 83.0089 20.5891 83.5294C19.3749 83.6509 18.9759 84.2755 18.9933 85.4207C19.0106 92.9165 19.0106 100.395 18.9933 107.891C18.9933 109.105 19.4269 109.574 20.6758 109.574C25.6192 109.522 30.58 109.504 35.5235 109.574C36.9805 109.591 37.3968 109.019 37.3621 107.665C37.3101 103.657 37.3448 99.6662 37.3448 95.658H37.3795ZM34.6562 95.6927H34.6389C34.6389 98.5036 34.6042 101.332 34.6562 104.143C34.6736 105.097 34.3787 105.514 33.3553 105.496C29.8689 105.444 26.3824 105.462 22.896 105.496C22.0114 105.496 21.7165 105.167 21.7165 104.316C21.7339 99.0415 21.7339 93.7493 21.7165 88.4745C21.7165 87.6764 21.994 87.2253 22.844 87.1385C26.5212 86.7741 30.1811 86.3403 33.8757 86.0106C34.1185 85.9933 34.6389 86.5485 34.6389 86.8262C34.6736 89.7759 34.6562 92.7256 34.6562 95.6927Z"\r
        fill="url(#paint9_linear_3_40)"\r
      />\r
      <path\r
        d="M0 107.682C0 108.567 0.0867199 109.4 1.26621 109.383H1.35294L13.8417 109.279C14.2753 109.279 14.6396 108.914 14.6396 108.481V107.249C14.6743 100.343 14.6222 93.437 14.6916 86.5312C14.7089 84.7093 14.1886 84.3102 11.7602 84.8828C8.53396 85.6289 5.23833 85.9239 1.92535 85.9933C0.450983 86.028 0 86.5312 0 87.7284C0.0173455 94.374 0 101.02 0 107.682ZM2.25491 90.5914C2.25491 89.7585 2.56712 89.4115 3.57316 89.3942C5.86276 89.3421 8.13501 89.1512 10.3726 88.6307C12.0551 88.2316 12.402 88.5092 12.402 89.7759C12.3673 94.5475 12.3847 99.3191 12.3673 104.091V104.941C12.3673 105.253 12.1245 105.496 11.8123 105.496L3.19156 105.566H3.12219C2.30695 105.566 2.25491 105.01 2.25491 104.386C2.27226 99.7876 2.27226 95.1895 2.25491 90.5914Z"\r
        fill="url(#paint10_linear_3_40)"\r
      />\r
      <path\r
        d="M84.6285 34.026H92.6247V26.027H84.6285V34.026Z"\r
        fill="url(#paint11_linear_3_40)"\r
      />\r
      <path\r
        d="M80.136 14.0199H86.0508V8.08575H80.136V14.0199Z"\r
        fill="url(#paint12_linear_3_40)"\r
      />\r
      <path\r
        d="M108.791 14.4016H123.17V0H108.791V14.4016Z"\r
        fill="url(#paint13_linear_3_40)"\r
      />\r
      <path\r
        d="M97.0652 23.8061H103.448V17.4381H97.0652V23.8061Z"\r
        fill="url(#paint14_linear_3_40)"\r
      />\r
      <path\r
        d="M97.811 33.2278H104.194V26.8426H97.811V33.2278Z"\r
        fill="url(#paint15_linear_3_40)"\r
      />\r
      <path\r
        d="M110.803 27.953H120.395V18.3578H110.803V27.953Z"\r
        fill="url(#paint16_linear_3_40)"\r
      />\r
      <path\r
        d="M106.623 38.0341H110.942V33.7137H106.623V38.0341Z"\r
        fill="url(#paint17_linear_3_40)"\r
      />\r
      <path\r
        d="M114.792 42.4067H121.175V36.0388H114.792V42.4067Z"\r
        fill="url(#paint18_linear_3_40)"\r
      />\r
      <path\r
        d="M94.6368 14.4016H101.003V8.01633H94.6368V14.4016Z"\r
        fill="url(#paint19_linear_3_40)"\r
      />\r
      <path\r
        d="M92.6248 43.4478H99.0079V37.0798H92.6248V43.4478Z"\r
        fill="url(#paint20_linear_3_40)"\r
      />\r
      <path\r
        d="M104.316 53.338L112.381 49.5208L108.565 41.4524L100.5 45.2697L104.316 53.338Z"\r
        fill="url(#paint21_linear_3_40)"\r
      />\r
      <path\r
        d="M148.928 102.703H139.978V39.7693H180.427C189.36 39.856 193.87 44.8359 193.922 54.7261V59.654C193.87 68.6593 189.36 73.1707 180.427 73.2054H153.906V64.4256H178.676C182.838 64.4256 184.937 62.6731 184.937 59.1507V54.5179C184.937 50.6833 182.96 48.7746 179.022 48.7746H148.945V102.703H148.928Z"\r
        fill="url(#paint22_linear_3_40)"\r
      />\r
      <path\r
        d="M202.924 102.789V71.1058C202.959 62.274 207.452 57.8494 216.419 57.8147H234.632V66.6812H217.842C213.956 66.7159 211.979 68.5899 211.927 72.3031V102.789H202.924V102.789Z"\r
        fill="url(#paint23_linear_3_40)"\r
      />\r
      <path\r
        d="M293.173 71.2794V91.6325C293.138 99.0068 288.594 102.737 279.505 102.824H256.956C247.988 102.737 243.478 98.8854 243.461 91.2855V71.262C243.548 62.2913 248.075 57.78 257.042 57.7626H279.539C288.542 57.78 293.086 62.2914 293.173 71.2794ZM278.343 66.7507H258.413C254.493 66.7854 252.515 68.694 252.463 72.494V89.2554C252.428 92.2919 255.03 93.8188 260.269 93.8361H278.013C282.037 93.8361 284.067 92.7083 284.101 90.4526V72.494C284.084 68.694 282.176 66.768 278.343 66.7507Z"\r
        fill="url(#paint24_linear_3_40)"\r
      />\r
      <path\r
        d="M298.966 57.8321H311.056L325.661 73.7432L340.266 57.8321H352.356L331.697 80.2847L352.356 102.789H340.266L298.966 57.8321ZM311.039 102.789H298.949L316.693 83.4079L322.816 89.9321L311.039 102.789Z"\r
        fill="url(#paint25_linear_3_40)"\r
      />\r
      <path\r
        d="M368.331 57.78V87.659C368.365 91.7539 370.464 93.8014 374.627 93.8361H394.817V102.789H372.789C363.856 102.755 359.346 98.3648 359.294 89.585V57.78H368.331ZM408.884 57.78V107.283C408.832 116.237 404.323 120.731 395.39 120.783H368.348V111.777H393.967C397.887 111.743 399.847 109.869 399.882 106.121V57.7626H408.884V57.78Z"\r
        fill="url(#paint26_linear_3_40)"\r
      />\r
      <path\r
        d="M428.294 93.8014H468.796V102.807H419.43V39.8387H428.294V93.8014V93.8014Z"\r
        fill="url(#paint27_linear_3_40)"\r
      />\r
      <path\r
        d="M482.325 66.7507V57.7974H513.772C522.74 57.7974 527.25 62.2046 527.319 71.0017V102.807H490.252C481.961 102.807 477.833 99.0589 477.833 91.5804V85.3687C477.833 77.7688 481.666 73.9515 489.315 73.9168H513.096V82.9221H493.305C488.986 82.9221 486.818 84.6746 486.783 88.1969H486.818C486.818 91.9448 488.812 93.8188 492.819 93.8188H518.317L518.282 73.8821C518.282 69.1452 516.27 66.768 512.246 66.768H482.325V66.7507Z"\r
        fill="url(#paint28_linear_3_40)"\r
      />\r
      <path\r
        d="M546.729 39.7866V93.8014H570.163C575.626 93.8014 578.332 91.5804 578.298 87.1558V72.7889C578.263 68.7287 576.043 66.6986 571.62 66.6986H551.256V57.78H573.718C582.807 57.78 587.352 62.3955 587.352 71.6264V89.29C587.317 98.1739 582.877 102.685 574.031 102.789H537.779L537.813 39.7693H546.729V39.7866Z"\r
        fill="url(#paint29_linear_3_40)"\r
      />\r
      <path\r
        d="M647.228 66.6119H611.566C608.6 66.6466 607.108 68.1214 607.108 71.0364C607.108 74.0382 608.6 75.5478 611.601 75.5825H633.924C642.927 75.5825 647.436 79.4345 647.471 87.1558V91.5804C647.332 99.0762 642.736 102.807 633.716 102.807H598.193V93.8535H632.554C636.318 93.8188 638.261 92.1704 638.382 88.8736C638.347 86.1495 636.422 84.7787 632.606 84.7093H611.601C602.598 84.7093 598.089 81.0308 598.054 73.6565V69.1104C598.089 61.5626 602.598 57.7974 611.601 57.7974H647.211V66.6119H647.228Z"\r
        fill="url(#paint30_linear_3_40)"\r
      />\r
      <defs>\r
        <linearGradient\r
          id="paint0_linear_3_40"\r
          x1="16.2335"\r
          y1="78.5655"\r
          x2="90.5021"\r
          y2="14.0713"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint1_linear_3_40"\r
          x1="33.4419"\r
          y1="98.3816"\r
          x2="107.71"\r
          y2="33.8874"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint2_linear_3_40"\r
          x1="51.0435"\r
          y1="118.651"\r
          x2="125.312"\r
          y2="54.1567"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint3_linear_3_40"\r
          x1="62.0301"\r
          y1="131.303"\r
          x2="136.299"\r
          y2="66.8084"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint4_linear_3_40"\r
          x1="46.0063"\r
          y1="112.85"\r
          x2="120.275"\r
          y2="48.3561"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint5_linear_3_40"\r
          x1="22.5737"\r
          y1="85.8663"\r
          x2="96.8421"\r
          y2="21.3722"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint6_linear_3_40"\r
          x1="5.30527"\r
          y1="65.9808"\r
          x2="79.5737"\r
          y2="1.48666"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint7_linear_3_40"\r
          x1="39.9594"\r
          y1="105.887"\r
          x2="114.228"\r
          y2="41.3928"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint8_linear_3_40"\r
          x1="14.3736"\r
          y1="76.4235"\r
          x2="88.642"\r
          y2="11.9294"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint9_linear_3_40"\r
          x1="30.2892"\r
          y1="94.7512"\r
          x2="104.558"\r
          y2="30.2571"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint10_linear_3_40"\r
          x1="21.9139"\r
          y1="85.1065"\r
          x2="96.1823"\r
          y2="20.6124"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint11_linear_3_40"\r
          x1="23.3495"\r
          y1="86.7596"\r
          x2="97.618"\r
          y2="22.2656"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint12_linear_3_40"\r
          x1="11.5745"\r
          y1="73.2003"\r
          x2="85.8427"\r
          y2="8.70587"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint13_linear_3_40"\r
          x1="23.8107"\r
          y1="87.2911"\r
          x2="98.0794"\r
          y2="22.7968"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint14_linear_3_40"\r
          x1="23.6893"\r
          y1="87.1514"\r
          x2="97.958"\r
          y2="22.657"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint15_linear_3_40"\r
          x1="28.6723"\r
          y1="92.8895"\r
          x2="102.941"\r
          y2="28.3951"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint16_linear_3_40"\r
          x1="31.5413"\r
          y1="96.193"\r
          x2="105.81"\r
          y2="31.6988"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint17_linear_3_40"\r
          x1="34.9074"\r
          y1="100.07"\r
          x2="109.176"\r
          y2="35.5752"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint18_linear_3_40"\r
          x1="40.5234"\r
          y1="106.536"\r
          x2="114.792"\r
          y2="42.0425"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint19_linear_3_40"\r
          x1="17.9841"\r
          y1="80.5813"\r
          x2="92.2529"\r
          y2="16.0874"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint20_linear_3_40"\r
          x1="31.505"\r
          y1="96.1513"\r
          x2="105.774"\r
          y2="31.6572"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint21_linear_3_40"\r
          x1="39.6018"\r
          y1="105.475"\r
          x2="113.87"\r
          y2="40.9808"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint22_linear_3_40"\r
          x1="156.752"\r
          y1="71.2438"\r
          x2="644.928"\r
          y2="71.2438"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint23_linear_3_40"\r
          x1="156.752"\r
          y1="80.3112"\r
          x2="644.928"\r
          y2="80.3112"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint24_linear_3_40"\r
          x1="156.752"\r
          y1="80.3113"\r
          x2="644.928"\r
          y2="80.3113"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint25_linear_3_40"\r
          x1="156.752"\r
          y1="80.3113"\r
          x2="644.928"\r
          y2="80.3113"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint26_linear_3_40"\r
          x1="156.752"\r
          y1="89.2923"\r
          x2="644.928"\r
          y2="89.2923"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint27_linear_3_40"\r
          x1="156.752"\r
          y1="71.3085"\r
          x2="644.928"\r
          y2="71.3085"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint28_linear_3_40"\r
          x1="156.752"\r
          y1="80.2897"\r
          x2="644.928"\r
          y2="80.2897"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint29_linear_3_40"\r
          x1="156.752"\r
          y1="71.287"\r
          x2="644.928"\r
          y2="71.287"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
        <linearGradient\r
          id="paint30_linear_3_40"\r
          x1="156.753"\r
          y1="80.2897"\r
          x2="644.928"\r
          y2="80.2897"\r
          gradientUnits="userSpaceOnUse"\r
        >\r
          <stop stop-color="#3ADFCB" />\r
          <stop offset="0.3883" stop-color="#219CFB" />\r
          <stop offset="0.7067" stop-color="#861AF0" />\r
          <stop offset="1" stop-color="#B00663" />\r
        </linearGradient>\r
      </defs>\r
    </svg>\r
  </a>\r
</template>\r
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=e,a}var q1=Y1({render:ni,staticRenderFns:G1},X1,R1,Z1,z1,j1,!1,void 0,void 0,void 0),ri=q1;var J1={},ei=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("a",{attrs:{href:"https://github.com/ProxyLabs/mina-secret-exchange",target:"_blank"}},[n("svg",{staticClass:"github",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])])},W1=[];ei._withStripped=!0;var K1=void 0,t2=void 0,n2=void 0,r2=!1;function e2(t,r,n,e,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>\r
  <a href="https://github.com/ProxyLabs/mina-secret-exchange" target="_blank">\r
    <svg xmlns="http://www.w3.org/2000/svg" class="github" viewBox="0 0 24 24">\r
      <path\r
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"\r
      />\r
    </svg>\r
  </a>\r
</template>\r
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=e,a}var o2=e2({render:ei,staticRenderFns:W1},K1,J1,t2,r2,n2,!1,void 0,void 0,void 0),oi=o2;var i2={name:"Snackbar",props:["snack"],mounted(){var t=document.getElementById("snackbar");t.className="",t.classList.add("show"),console.log(this.$props.snack.type),this.$props.snack.type=="failure"?t.classList.add("type-failure"):this.$props.snack.type=="success"?t.classList.add("type-success"):t.classList.add("type-info"),setTimeout(function(){t.className=t.className.replace("show","")},3e3)}},ii=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"snackbar"}},[t._v(`
  `+t._s(t.$props.snack.message)+`
`)])},s2=[];ii._withStripped=!0;var a2=function(t){!t||t("data-v-6a7ee7fd_0",{source:`
.type-failure[data-v-6a7ee7fd] {\r
  background-color: red !important;
}
.type-success[data-v-6a7ee7fd] {\r
  background-color: rgb(39, 138, 0) !important;
}
.type-info[data-v-6a7ee7fd] {\r
  background-color: rgb(0, 138, 138) !important;
}
#snackbar[data-v-6a7ee7fd] {\r
  visibility: hidden;\r
  min-width: 250px;\r
  margin-left: -125px;\r
  background-color: #333;\r
  color: #fff;\r
  font-weight: 600;\r
  text-align: center;\r
  border-radius: 2px;\r
  padding: 16px;\r
  position: fixed;\r
  z-index: 1;\r
  left: 80%;\r
  margin-right: 50px;\r
  bottom: 30px;\r
  border-radius: 5px;\r
  text-transform: uppercase;\r
  box-shadow: 4px 4px rgb(121, 121, 121);
}
#snackbar.show[data-v-6a7ee7fd] {\r
  visibility: visible;\r
  -webkit-animation: fadein-data-v-6a7ee7fd 0.5s,fadeout-data-v-6a7ee7fd 0.5s 2.5s;\r
  animation: fadein-data-v-6a7ee7fd 0.5s,fadeout-data-v-6a7ee7fd 0.5s 2.5s;
}
@-webkit-keyframes fadein-data-v-6a7ee7fd {
from {\r
    bottom: 0;\r
    opacity: 0;
}
to {\r
    bottom: 30px;\r
    opacity: 1;
}
}
@keyframes fadein-data-v-6a7ee7fd {
from {\r
    bottom: 0;\r
    opacity: 0;
}
to {\r
    bottom: 30px;\r
    opacity: 1;
}
}
@-webkit-keyframes fadeout-data-v-6a7ee7fd {
from {\r
    bottom: 30px;\r
    opacity: 1;
}
to {\r
    bottom: 0;\r
    opacity: 0;
}
}
@keyframes fadeout-data-v-6a7ee7fd {
from {\r
    bottom: 30px;\r
    opacity: 1;
}
to {\r
    bottom: 0;\r
    opacity: 0;
}
}\r
`,map:{version:3,sources:["src\\components\\Snackbar.vue"],names:[],mappings:";AA+BA;EACA,gCAAA;AACA;AAEA;EACA,4CAAA;AACA;AAEA;EACA,6CAAA;AACA;AAEA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,UAAA;EACA,SAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,sCAAA;AACA;AAEA;EACA,mBAAA;EACA,gFAAA;EACA,wEAAA;AACA;AAEA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA;IACA,YAAA;IACA,UAAA;AACA;AACA;AAEA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA;IACA,YAAA;IACA,UAAA;AACA;AACA;AAEA;AACA;IACA,YAAA;IACA,UAAA;AACA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA;AAEA;AACA;IACA,YAAA;IACA,UAAA;AACA;AACA;IACA,SAAA;IACA,UAAA;AACA;AACA",file:"Snackbar.vue",sourcesContent:[`<template>\r
  <div id="snackbar">\r
    {{ $props.snack.message }}\r
  </div>\r
</template>\r
\r
<script>\r
export default {\r
  name: "Snackbar",\r
  props: ["snack"],\r
  mounted() {\r
    var x = document.getElementById("snackbar");\r
\r
    x.className = "";\r
    x.classList.add("show");\r
    console.log(this.$props.snack.type);\r
    if (this.$props.snack.type == "failure") {\r
      x.classList.add("type-failure");\r
    } else if (this.$props.snack.type == "success") {\r
      x.classList.add("type-success");\r
    } else {\r
      x.classList.add("type-info");\r
    }\r
    setTimeout(function () {\r
      x.className = x.className.replace("show", "");\r
    }, 3000);\r
  },\r
};\r
<\/script>\r
\r
<style scoped>\r
.type-failure {\r
  background-color: red !important;\r
}\r
\r
.type-success {\r
  background-color: rgb(39, 138, 0) !important;\r
}\r
\r
.type-info {\r
  background-color: rgb(0, 138, 138) !important;\r
}\r
\r
#snackbar {\r
  visibility: hidden;\r
  min-width: 250px;\r
  margin-left: -125px;\r
  background-color: #333;\r
  color: #fff;\r
  font-weight: 600;\r
  text-align: center;\r
  border-radius: 2px;\r
  padding: 16px;\r
  position: fixed;\r
  z-index: 1;\r
  left: 80%;\r
  margin-right: 50px;\r
  bottom: 30px;\r
  border-radius: 5px;\r
  text-transform: uppercase;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
}\r
\r
#snackbar.show {\r
  visibility: visible;\r
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r
  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r
}\r
\r
@-webkit-keyframes fadein {\r
  from {\r
    bottom: 0;\r
    opacity: 0;\r
  }\r
  to {\r
    bottom: 30px;\r
    opacity: 1;\r
  }\r
}\r
\r
@keyframes fadein {\r
  from {\r
    bottom: 0;\r
    opacity: 0;\r
  }\r
  to {\r
    bottom: 30px;\r
    opacity: 1;\r
  }\r
}\r
\r
@-webkit-keyframes fadeout {\r
  from {\r
    bottom: 30px;\r
    opacity: 1;\r
  }\r
  to {\r
    bottom: 0;\r
    opacity: 0;\r
  }\r
}\r
\r
@keyframes fadeout {\r
  from {\r
    bottom: 30px;\r
    opacity: 1;\r
  }\r
  to {\r
    bottom: 0;\r
    opacity: 0;\r
  }\r
}\r
</style>\r
`]},media:void 0})},p2="data-v-6a7ee7fd",l2=void 0,c2=!1;function f2(t,r,n,e,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};a.__file=`<template>\r
  <div id="snackbar">\r
    {{ $props.snack.message }}\r
  </div>\r
</template>\r
\r
<script>\r
export default {\r
  name: "Snackbar",\r
  props: ["snack"],\r
  mounted() {\r
    var x = document.getElementById("snackbar");\r
\r
    x.className = "";\r
    x.classList.add("show");\r
    console.log(this.$props.snack.type);\r
    if (this.$props.snack.type == "failure") {\r
      x.classList.add("type-failure");\r
    } else if (this.$props.snack.type == "success") {\r
      x.classList.add("type-success");\r
    } else {\r
      x.classList.add("type-info");\r
    }\r
    setTimeout(function () {\r
      x.className = x.className.replace("show", "");\r
    }, 3000);\r
  },\r
};\r
<\/script>\r
\r
<style scoped>\r
.type-failure {\r
  background-color: red !important;\r
}\r
\r
.type-success {\r
  background-color: rgb(39, 138, 0) !important;\r
}\r
\r
.type-info {\r
  background-color: rgb(0, 138, 138) !important;\r
}\r
\r
#snackbar {\r
  visibility: hidden;\r
  min-width: 250px;\r
  margin-left: -125px;\r
  background-color: #333;\r
  color: #fff;\r
  font-weight: 600;\r
  text-align: center;\r
  border-radius: 2px;\r
  padding: 16px;\r
  position: fixed;\r
  z-index: 1;\r
  left: 80%;\r
  margin-right: 50px;\r
  bottom: 30px;\r
  border-radius: 5px;\r
  text-transform: uppercase;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
}\r
\r
#snackbar.show {\r
  visibility: visible;\r
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r
  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r
}\r
\r
@-webkit-keyframes fadein {\r
  from {\r
    bottom: 0;\r
    opacity: 0;\r
  }\r
  to {\r
    bottom: 30px;\r
    opacity: 1;\r
  }\r
}\r
\r
@keyframes fadein {\r
  from {\r
    bottom: 0;\r
    opacity: 0;\r
  }\r
  to {\r
    bottom: 30px;\r
    opacity: 1;\r
  }\r
}\r
\r
@-webkit-keyframes fadeout {\r
  from {\r
    bottom: 30px;\r
    opacity: 1;\r
  }\r
  to {\r
    bottom: 0;\r
    opacity: 0;\r
  }\r
}\r
\r
@keyframes fadeout {\r
  from {\r
    bottom: 30px;\r
    opacity: 1;\r
  }\r
  to {\r
    bottom: 0;\r
    opacity: 0;\r
  }\r
}\r
</style>\r
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=e;{let v;if(r&&(v=s?function(h){r.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){r.call(this,p(h))}),v!==void 0)if(a.functional){let h=a.render;a.render=function(E,w){return v.call(w),h(E,w)}}else{let h=a.beforeCreate;a.beforeCreate=h?[].concat(h,v):[v]}}return a}function zr(){let t=zr.styles||(zr.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,o){if(document.querySelector('style[data-vue-ssr-id~="'+e+'"]'))return;let i=r?o.media||"default":e,s=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!s.ids.includes(e)){let p=o.source,l=s.ids.length;if(s.ids.push(e),r&&(s.element=s.element||document.querySelector("style[data-group="+i+"]")),!s.element){let d=document.head||document.getElementsByTagName("head")[0],a=s.element=document.createElement("style");a.type="text/css",o.media&&a.setAttribute("media",o.media),r&&(a.setAttribute("data-group",i),a.setAttribute("data-next-index","0")),d.appendChild(a)}if(r&&(l=parseInt(s.element.getAttribute("data-next-index")),s.element.setAttribute("data-next-index",l+1)),s.element.styleSheet)s.parts.push(p),s.element.styleSheet.cssText=s.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(p),a=s.element.childNodes;a[l]&&s.element.removeChild(a[l]),a.length?s.element.insertBefore(d,a[l]):s.element.appendChild(d)}}}}var u2=f2({render:ii,staticRenderFns:s2},a2,i2,p2,c2,l2,!1,zr,void 0,void 0),si=u2;var d2={name:"Mina"},ai=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 979 979",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"489.5",cy:"489.5",r:"489.5",fill:"#4F4F4F"}}),t._v(" "),n("path",{attrs:{d:"M488.752 794.84C498.483 795.398 508.037 792.07 515.316 785.587C522.594 779.104 527 769.997 527.566 760.267L533.652 713.97C504.11 720.817 473.394 720.817 443.852 713.97L449.739 760.366C450.469 770.063 454.954 779.091 462.241 785.53C469.528 791.969 479.04 795.309 488.752 794.84V794.84ZM751.966 784.862H824.505V370.784C824.505 314.26 798.363 276.294 751.966 261.976V784.862ZM153 784.862H225.538V261.727C179.441 276.045 153 314.01 153 370.535V784.862ZM533.652 713.97C580.897 702.146 612.127 668.421 619.711 609.203L665.259 257.436C612.776 269.959 584.09 309.87 575.659 374.725L533.652 713.97ZM443.852 713.97L401.896 374.725C393.415 309.87 364.728 269.959 312.445 257.436L357.993 609.203C365.577 668.271 395.959 701.996 444.052 713.97H443.852ZM751.966 261.827V228.9C751.966 200.214 735.104 184 712.304 184C689.505 184 673.491 197.52 669.3 227.004L665.06 257.387C693.942 251.708 723.774 253.164 751.966 261.627V261.827ZM225.538 261.627C241.894 256.362 258.995 253.784 276.176 253.994C288.355 253.741 300.524 254.879 312.445 257.387L308.254 227.004C304.014 197.52 287.999 184 265.2 184C242.401 184 225.538 200.014 225.538 228.9V261.627Z",fill:"#FF603B"}})])},_2=[];ai._withStripped=!0;var h2=void 0,v2=void 0,A2=void 0,m2=!1;function C2(t,r,n,e,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>\r
  <svg\r
    width="40"\r
    height="40"\r
    viewBox="0 0 979 979"\r
    fill="none"\r
    xmlns="http://www.w3.org/2000/svg"\r
  >\r
    <circle cx="489.5" cy="489.5" r="489.5" fill="#4F4F4F" />\r
    <path\r
      d="M488.752 794.84C498.483 795.398 508.037 792.07 515.316 785.587C522.594 779.104 527 769.997 527.566 760.267L533.652 713.97C504.11 720.817 473.394 720.817 443.852 713.97L449.739 760.366C450.469 770.063 454.954 779.091 462.241 785.53C469.528 791.969 479.04 795.309 488.752 794.84V794.84ZM751.966 784.862H824.505V370.784C824.505 314.26 798.363 276.294 751.966 261.976V784.862ZM153 784.862H225.538V261.727C179.441 276.045 153 314.01 153 370.535V784.862ZM533.652 713.97C580.897 702.146 612.127 668.421 619.711 609.203L665.259 257.436C612.776 269.959 584.09 309.87 575.659 374.725L533.652 713.97ZM443.852 713.97L401.896 374.725C393.415 309.87 364.728 269.959 312.445 257.436L357.993 609.203C365.577 668.271 395.959 701.996 444.052 713.97H443.852ZM751.966 261.827V228.9C751.966 200.214 735.104 184 712.304 184C689.505 184 673.491 197.52 669.3 227.004L665.06 257.387C693.942 251.708 723.774 253.164 751.966 261.627V261.827ZM225.538 261.627C241.894 256.362 258.995 253.784 276.176 253.994C288.355 253.741 300.524 254.879 312.445 257.387L308.254 227.004C304.014 197.52 287.999 184 265.2 184C242.401 184 225.538 200.014 225.538 228.9V261.627Z"\r
      fill="#FF603B"\r
    />\r
  </svg>\r
</template>\r
<script>\r
export default {\r
  name: "Mina",\r
};\r
<\/script>\r
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=e,a}var g2=C2({render:ai,staticRenderFns:_2},h2,d2,v2,m2,A2,!1,void 0,void 0,void 0),pi=g2;var y2={name:"Proxy"},li=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 979 979",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"489.5",cy:"489.5",r:"489.5",fill:"#4F4F4F"}}),t._v(" "),n("path",{attrs:{d:"M528.517 372.193C528.419 381.305 531.167 385.616 540.099 388.164C572.883 397.375 605.47 407.272 638.156 416.874C640.807 417.657 643.554 418.05 647.58 418.833C647.971 414.914 648.462 411.876 648.462 408.839C648.462 399.825 648.462 390.908 648.462 381.893H609.985V314.774H648.462C648.462 300.958 648.462 287.241 648.561 273.425C648.561 266.664 646.892 261.961 640.218 258.923C639.236 258.531 638.353 258.041 637.371 257.649V267.546H582.601V232.859C567.485 226.001 552.466 219.142 537.351 212.381C535.29 211.401 532.737 211.205 529.401 210.421C529.106 214.83 528.811 218.26 528.713 221.689C528.713 271.857 528.91 322.024 528.517 372.193Z",fill:"url(#paint0_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M621.077 442.056C594.673 434.021 568.073 426.868 541.473 419.421C537.842 418.343 534.111 417.853 528.713 416.874V428.828C528.615 479.975 528.713 531.221 528.321 582.368C528.222 590.991 533.13 592.265 539.707 593.245C564.835 596.772 589.962 600.495 615.09 604.023C622.844 605.101 630.696 605.591 638.353 607.452C647.285 609.608 648.757 605.689 648.757 598.046C648.462 558.264 648.954 518.581 648.561 478.799C648.07 443.722 654.744 452.246 621.077 442.056Z",fill:"url(#paint1_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M528.615 785.686C528.419 794.308 530.48 798.129 539.412 798.227C539.805 798.227 540.198 798.227 540.59 798.227C552.467 798.031 564.245 797.934 576.123 797.836C583.483 797.836 590.845 797.836 598.207 797.836C604.587 797.836 610.967 797.934 617.347 797.934C623.727 798.031 630.107 798.031 636.488 798.129H637.469C645.812 798.227 648.757 795.876 648.757 787.156C648.561 741.299 648.855 695.442 649.248 649.586C649.248 643.412 647.089 640.179 641.003 639.395C618.722 636.554 596.441 633.516 574.16 630.675C562.773 629.205 551.387 628.127 540.099 626.265C538.235 625.972 536.565 625.874 535.093 625.972C530.48 626.364 528.517 629.107 528.713 636.162C529.302 661.246 528.91 686.231 528.91 711.315H528.811C528.713 736.204 529.106 760.896 528.615 785.686Z",fill:"url(#paint2_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M671.431 648.703C670.94 672.318 671.137 695.932 671.137 719.645H671.333C671.333 742.279 671.529 764.815 671.235 787.351C671.137 795.091 673.492 798.326 681.639 798.129C709.614 797.737 737.686 797.836 765.66 798.129C772.727 798.227 775.181 795.484 775.181 788.625C775.083 746.295 775.083 703.966 775.181 661.736C775.181 655.367 773.021 651.741 766.052 651.056C736.508 648.116 707.062 644.687 677.517 642.041C675.75 641.943 671.529 646.352 671.431 648.703Z",fill:"url(#paint3_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M670.547 597.752C670.449 606.669 673.198 609.805 682.719 610.98C710.005 614.214 736.998 618.917 764.089 623.326C771.156 624.502 775.966 624.208 775.868 614.997C775.475 573.55 774.984 532.103 775.377 490.655C775.475 484.286 774.298 480.074 771.058 477.232L720.901 495.064L708.239 459.594C700.092 457.439 691.946 455.283 683.798 453.225C672.216 450.286 671.333 450.874 671.235 462.534C671.136 485.071 671.235 507.607 671.235 530.143H670.547C670.645 552.777 670.94 575.216 670.547 597.752Z",fill:"url(#paint4_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M494.948 428.828V416.874C489.647 417.952 485.819 418.441 482.188 419.421C455.686 426.868 428.988 434.021 402.583 442.056C368.917 452.246 375.592 443.722 375.199 478.897C374.806 518.581 375.199 558.363 375.002 598.144C375.002 605.787 376.474 609.707 385.406 607.551C392.965 605.689 400.915 605.297 408.67 604.121C433.798 600.495 458.925 596.772 484.053 593.245C490.629 592.363 495.439 590.992 495.439 582.368C494.948 531.221 495.046 479.975 494.948 428.828ZM466.385 565.418C450.189 567.671 434.091 570.022 417.896 572.374C412.89 573.06 407.786 573.355 402.976 574.53C397.284 575.901 396.302 573.452 396.302 568.454C396.498 542.881 396.203 517.307 396.4 491.733C396.694 469.099 392.376 474.586 414.068 468.021C431.049 462.927 448.226 458.223 465.305 453.422C467.661 452.735 470.114 452.442 473.55 451.756C473.55 454.99 473.55 457.243 473.55 459.497C473.55 492.42 473.55 525.342 473.747 558.265C473.747 563.948 470.605 564.83 466.385 565.418Z",fill:"url(#paint5_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M494.849 221.689C494.849 218.26 494.457 214.83 494.26 210.421C490.825 211.303 488.371 211.499 486.212 212.381C451.955 227.862 417.7 243.54 383.345 258.923C376.67 261.961 375.002 266.566 375.002 273.425C375.198 318.595 375.1 363.766 375.1 408.937C375.1 411.974 375.591 415.012 375.983 418.931C380.008 418.05 382.756 417.657 385.406 416.873C418.093 407.272 450.68 397.277 483.463 388.164C492.494 385.616 495.144 381.305 495.046 372.193C494.653 322.024 494.849 271.857 494.849 221.689ZM466.188 362.198C444.986 368.077 423.981 374.544 402.878 380.717C401.209 381.207 399.344 381.501 396.792 381.991C396.596 379.444 396.203 377.484 396.203 375.524C396.203 346.325 396.203 317.224 396.105 288.025C396.105 283.615 397.185 280.578 401.504 278.716C423.687 268.82 445.772 258.629 467.955 248.635C469.33 248.047 470.9 247.851 473.157 247.361C473.354 250.203 473.55 252.456 473.55 254.612C473.55 287.045 473.452 319.379 473.747 351.812C473.747 357.691 472.077 360.532 466.188 362.198Z",fill:"url(#paint6_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M495.046 785.686C494.555 760.994 494.85 736.204 494.85 711.512H494.751C494.751 686.428 494.359 661.442 494.948 636.358C495.144 629.303 493.181 626.462 488.568 626.167C487.194 626.069 485.525 626.167 483.562 626.462C472.274 628.225 460.888 629.303 449.501 630.871C427.22 633.81 404.939 636.75 382.659 639.591C376.474 640.375 374.315 643.609 374.413 649.781C374.806 695.638 375.1 741.494 374.904 787.351C374.904 795.974 377.849 798.326 386.192 798.326H387.173C393.554 798.227 399.934 798.227 406.314 798.129C412.694 798.129 419.074 798.032 425.454 798.032C432.816 798.032 440.177 798.032 447.538 798.032C459.416 798.032 471.194 798.227 483.071 798.424C483.463 798.424 483.856 798.424 484.249 798.424C493.181 798.129 495.242 794.308 495.046 785.686ZM401.111 772.164C395.32 772.262 393.259 770.596 393.259 764.52C393.357 732.578 393.161 700.537 392.866 668.594C392.866 664.283 394.338 662.029 398.559 661.539C414.067 659.581 429.674 657.425 445.183 655.465C453.134 654.387 461.084 653.701 468.937 652.427C474.728 651.546 476.985 652.917 476.887 659.384C476.494 676.826 476.789 694.365 476.789 711.805H476.887C476.887 729.05 476.691 746.295 476.985 763.542C477.083 769.812 475.513 772.457 468.642 772.36C446.165 771.772 423.589 771.87 401.111 772.164Z",fill:"url(#paint7_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M353.015 530.241H352.426C352.426 507.705 352.426 485.168 352.426 462.632C352.426 450.972 351.542 450.286 339.961 453.324C313.949 459.987 288.135 467.238 261.928 473.117C251.425 475.468 248.284 480.172 248.382 490.655C248.774 532.103 248.382 573.55 247.891 614.899C247.793 624.208 252.602 624.404 259.67 623.326C286.761 618.917 313.851 614.214 341.04 610.98C350.561 609.902 353.31 606.669 353.212 597.752C352.721 575.313 353.015 552.777 353.015 530.241ZM329.066 589.424C309.827 591.677 290.785 595.009 271.742 598.144C266.736 598.928 263.4 598.732 263.4 592.265C263.694 563.066 263.989 533.867 263.694 504.668C263.596 497.221 265.853 493.988 273.215 492.321C291.668 488.206 309.925 483.013 328.182 478.407C336.329 476.251 336.918 476.741 337.016 484.973C337.016 500.846 337.016 516.719 337.016 532.593H337.409C337.409 548.466 337.212 564.34 337.507 580.212C337.703 586.386 335.739 588.639 329.066 589.424Z",fill:"url(#paint8_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M352.525 719.645C352.525 696.031 352.721 672.318 352.23 648.703C352.23 646.352 348.01 641.943 346.047 642.139C316.502 644.785 287.055 648.213 257.511 651.154C250.639 651.839 248.382 655.367 248.48 661.834C248.578 704.163 248.578 746.394 248.48 788.723C248.48 795.582 250.934 798.227 258.002 798.227C285.975 797.934 314.047 797.836 342.022 798.227C350.267 798.326 352.623 795.092 352.427 787.449C352.132 764.815 352.328 742.279 352.328 719.645H352.525ZM337.114 719.84H337.016C337.016 735.714 336.82 751.686 337.114 767.558C337.213 772.947 335.544 775.3 329.752 775.202C310.023 774.907 290.294 775.005 270.565 775.202C265.559 775.202 263.891 773.34 263.891 768.538C263.989 738.751 263.989 708.866 263.891 679.079C263.891 674.572 265.461 672.024 270.271 671.534C291.08 669.476 311.79 667.027 332.697 665.165C334.071 665.067 337.016 668.203 337.016 669.771C337.213 686.428 337.114 703.085 337.114 719.84Z",fill:"url(#paint9_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M141 787.548C141 792.545 141.491 797.248 148.165 797.149H148.656L219.328 796.561C221.782 796.561 223.843 794.505 223.843 792.055V785.098C224.039 746.1 223.745 707.102 224.137 668.104C224.236 657.816 221.291 655.563 207.549 658.796C189.292 663.01 170.643 664.675 151.895 665.067C143.552 665.263 141 668.105 141 674.865C141.098 712.393 141 749.921 141 787.548ZM153.76 691.033C153.76 686.329 155.527 684.37 161.22 684.272C174.176 683.978 187.035 682.9 199.697 679.961C209.218 677.707 211.181 679.274 211.181 686.428C210.985 713.373 211.083 740.319 210.985 767.265V772.066C210.985 773.83 209.61 775.202 207.844 775.202L159.06 775.593H158.668C154.055 775.593 153.76 772.457 153.76 768.931C153.858 742.964 153.858 716.999 153.76 691.033Z",fill:"url(#paint10_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M619.899 371.605H665.149V326.435H619.899V371.605Z",fill:"url(#paint11_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M594.477 258.629H627.948V225.119H594.477V258.629Z",fill:"url(#paint12_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M756.63 260.785H838V179.458H756.63V260.785Z",fill:"url(#paint13_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M690.276 313.892H726.398V277.932H690.276V313.892Z",fill:"url(#paint14_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M694.497 367.098H730.618V331.039H694.497V367.098Z",fill:"url(#paint15_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M768.015 337.311H822.295V283.125H768.015V337.311Z",fill:"url(#paint16_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M744.36 394.239H768.801V369.842H744.36V394.239Z",fill:"url(#paint17_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M790.591 418.932H826.712V382.971H790.591V418.932Z",fill:"url(#paint18_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M676.536 260.785H712.558V224.727H676.536V260.785Z",fill:"url(#paint19_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M665.149 424.81H701.27V388.85H665.149V424.81Z",fill:"url(#paint20_linear_2_5)"}}),t._v(" "),n("path",{attrs:{d:"M731.306 480.662L776.947 459.104L755.353 413.542L709.712 435.099L731.306 480.662Z",fill:"url(#paint21_linear_2_5)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_2_5",x1:"232.863",y1:"623.122",x2:"652.384",y2:"258.054",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_2_5",x1:"330.242",y1:"735.025",x2:"749.763",y2:"369.957",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_2_5",x1:"429.847",y1:"849.487",x2:"849.367",y2:"484.417",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_2_5",x1:"492.018",y1:"920.932",x2:"911.54",y2:"555.862",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint4_linear_2_5",x1:"401.341",y1:"816.73",x2:"820.861",y2:"451.661",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint5_linear_2_5",x1:"268.741",y1:"664.35",x2:"688.261",y2:"299.281",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint6_linear_2_5",x1:"171.021",y1:"552.055",x2:"590.542",y2:"186.987",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint7_linear_2_5",x1:"367.124",y1:"777.408",x2:"786.645",y2:"412.34",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint8_linear_2_5",x1:"222.338",y1:"611.026",x2:"641.858",y2:"245.958",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint9_linear_2_5",x1:"312.402",y1:"714.524",x2:"731.922",y2:"349.455",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint10_linear_2_5",x1:"265.007",y1:"660.059",x2:"684.527",y2:"294.992",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint11_linear_2_5",x1:"273.131",y1:"669.395",x2:"692.652",y2:"304.328",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint12_linear_2_5",x1:"206.499",y1:"592.824",x2:"626.018",y2:"227.755",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint13_linear_2_5",x1:"275.742",y1:"672.396",x2:"695.263",y2:"307.327",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint14_linear_2_5",x1:"275.056",y1:"671.605",x2:"694.574",y2:"306.537",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint15_linear_2_5",x1:"303.253",y1:"704.01",x2:"722.773",y2:"338.941",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint16_linear_2_5",x1:"319.486",y1:"722.667",x2:"739.008",y2:"357.598",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint17_linear_2_5",x1:"338.536",y1:"744.558",x2:"758.059",y2:"379.489",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint18_linear_2_5",x1:"370.314",y1:"781.075",x2:"789.835",y2:"416.007",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint19_linear_2_5",x1:"242.768",y1:"634.504",x2:"662.29",y2:"269.436",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint20_linear_2_5",x1:"319.283",y1:"722.429",x2:"738.803",y2:"357.362",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint21_linear_2_5",x1:"365.1",y1:"775.081",x2:"784.619",y2:"410.013",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#3ADFCB"}}),t._v(" "),n("stop",{attrs:{offset:"0.3883","stop-color":"#219CFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.7067","stop-color":"#861AF0"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#B00663"}})],1)],1)])},x2=[];li._withStripped=!0;var b2=void 0,w2=void 0,E2=void 0,S2=!1;function T2(t,r,n,e,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};return a.__file=`<template>\r
  <svg\r
    width="40"\r
    height="40"\r
    viewBox="0 0 979 979"\r
    fill="none"\r
    xmlns="http://www.w3.org/2000/svg"\r
  >\r
    <circle cx="489.5" cy="489.5" r="489.5" fill="#4F4F4F" />\r
    <path\r
      d="M528.517 372.193C528.419 381.305 531.167 385.616 540.099 388.164C572.883 397.375 605.47 407.272 638.156 416.874C640.807 417.657 643.554 418.05 647.58 418.833C647.971 414.914 648.462 411.876 648.462 408.839C648.462 399.825 648.462 390.908 648.462 381.893H609.985V314.774H648.462C648.462 300.958 648.462 287.241 648.561 273.425C648.561 266.664 646.892 261.961 640.218 258.923C639.236 258.531 638.353 258.041 637.371 257.649V267.546H582.601V232.859C567.485 226.001 552.466 219.142 537.351 212.381C535.29 211.401 532.737 211.205 529.401 210.421C529.106 214.83 528.811 218.26 528.713 221.689C528.713 271.857 528.91 322.024 528.517 372.193Z"\r
      fill="url(#paint0_linear_2_5)"\r
    />\r
    <path\r
      d="M621.077 442.056C594.673 434.021 568.073 426.868 541.473 419.421C537.842 418.343 534.111 417.853 528.713 416.874V428.828C528.615 479.975 528.713 531.221 528.321 582.368C528.222 590.991 533.13 592.265 539.707 593.245C564.835 596.772 589.962 600.495 615.09 604.023C622.844 605.101 630.696 605.591 638.353 607.452C647.285 609.608 648.757 605.689 648.757 598.046C648.462 558.264 648.954 518.581 648.561 478.799C648.07 443.722 654.744 452.246 621.077 442.056Z"\r
      fill="url(#paint1_linear_2_5)"\r
    />\r
    <path\r
      d="M528.615 785.686C528.419 794.308 530.48 798.129 539.412 798.227C539.805 798.227 540.198 798.227 540.59 798.227C552.467 798.031 564.245 797.934 576.123 797.836C583.483 797.836 590.845 797.836 598.207 797.836C604.587 797.836 610.967 797.934 617.347 797.934C623.727 798.031 630.107 798.031 636.488 798.129H637.469C645.812 798.227 648.757 795.876 648.757 787.156C648.561 741.299 648.855 695.442 649.248 649.586C649.248 643.412 647.089 640.179 641.003 639.395C618.722 636.554 596.441 633.516 574.16 630.675C562.773 629.205 551.387 628.127 540.099 626.265C538.235 625.972 536.565 625.874 535.093 625.972C530.48 626.364 528.517 629.107 528.713 636.162C529.302 661.246 528.91 686.231 528.91 711.315H528.811C528.713 736.204 529.106 760.896 528.615 785.686Z"\r
      fill="url(#paint2_linear_2_5)"\r
    />\r
    <path\r
      d="M671.431 648.703C670.94 672.318 671.137 695.932 671.137 719.645H671.333C671.333 742.279 671.529 764.815 671.235 787.351C671.137 795.091 673.492 798.326 681.639 798.129C709.614 797.737 737.686 797.836 765.66 798.129C772.727 798.227 775.181 795.484 775.181 788.625C775.083 746.295 775.083 703.966 775.181 661.736C775.181 655.367 773.021 651.741 766.052 651.056C736.508 648.116 707.062 644.687 677.517 642.041C675.75 641.943 671.529 646.352 671.431 648.703Z"\r
      fill="url(#paint3_linear_2_5)"\r
    />\r
    <path\r
      d="M670.547 597.752C670.449 606.669 673.198 609.805 682.719 610.98C710.005 614.214 736.998 618.917 764.089 623.326C771.156 624.502 775.966 624.208 775.868 614.997C775.475 573.55 774.984 532.103 775.377 490.655C775.475 484.286 774.298 480.074 771.058 477.232L720.901 495.064L708.239 459.594C700.092 457.439 691.946 455.283 683.798 453.225C672.216 450.286 671.333 450.874 671.235 462.534C671.136 485.071 671.235 507.607 671.235 530.143H670.547C670.645 552.777 670.94 575.216 670.547 597.752Z"\r
      fill="url(#paint4_linear_2_5)"\r
    />\r
    <path\r
      d="M494.948 428.828V416.874C489.647 417.952 485.819 418.441 482.188 419.421C455.686 426.868 428.988 434.021 402.583 442.056C368.917 452.246 375.592 443.722 375.199 478.897C374.806 518.581 375.199 558.363 375.002 598.144C375.002 605.787 376.474 609.707 385.406 607.551C392.965 605.689 400.915 605.297 408.67 604.121C433.798 600.495 458.925 596.772 484.053 593.245C490.629 592.363 495.439 590.992 495.439 582.368C494.948 531.221 495.046 479.975 494.948 428.828ZM466.385 565.418C450.189 567.671 434.091 570.022 417.896 572.374C412.89 573.06 407.786 573.355 402.976 574.53C397.284 575.901 396.302 573.452 396.302 568.454C396.498 542.881 396.203 517.307 396.4 491.733C396.694 469.099 392.376 474.586 414.068 468.021C431.049 462.927 448.226 458.223 465.305 453.422C467.661 452.735 470.114 452.442 473.55 451.756C473.55 454.99 473.55 457.243 473.55 459.497C473.55 492.42 473.55 525.342 473.747 558.265C473.747 563.948 470.605 564.83 466.385 565.418Z"\r
      fill="url(#paint5_linear_2_5)"\r
    />\r
    <path\r
      d="M494.849 221.689C494.849 218.26 494.457 214.83 494.26 210.421C490.825 211.303 488.371 211.499 486.212 212.381C451.955 227.862 417.7 243.54 383.345 258.923C376.67 261.961 375.002 266.566 375.002 273.425C375.198 318.595 375.1 363.766 375.1 408.937C375.1 411.974 375.591 415.012 375.983 418.931C380.008 418.05 382.756 417.657 385.406 416.873C418.093 407.272 450.68 397.277 483.463 388.164C492.494 385.616 495.144 381.305 495.046 372.193C494.653 322.024 494.849 271.857 494.849 221.689ZM466.188 362.198C444.986 368.077 423.981 374.544 402.878 380.717C401.209 381.207 399.344 381.501 396.792 381.991C396.596 379.444 396.203 377.484 396.203 375.524C396.203 346.325 396.203 317.224 396.105 288.025C396.105 283.615 397.185 280.578 401.504 278.716C423.687 268.82 445.772 258.629 467.955 248.635C469.33 248.047 470.9 247.851 473.157 247.361C473.354 250.203 473.55 252.456 473.55 254.612C473.55 287.045 473.452 319.379 473.747 351.812C473.747 357.691 472.077 360.532 466.188 362.198Z"\r
      fill="url(#paint6_linear_2_5)"\r
    />\r
    <path\r
      d="M495.046 785.686C494.555 760.994 494.85 736.204 494.85 711.512H494.751C494.751 686.428 494.359 661.442 494.948 636.358C495.144 629.303 493.181 626.462 488.568 626.167C487.194 626.069 485.525 626.167 483.562 626.462C472.274 628.225 460.888 629.303 449.501 630.871C427.22 633.81 404.939 636.75 382.659 639.591C376.474 640.375 374.315 643.609 374.413 649.781C374.806 695.638 375.1 741.494 374.904 787.351C374.904 795.974 377.849 798.326 386.192 798.326H387.173C393.554 798.227 399.934 798.227 406.314 798.129C412.694 798.129 419.074 798.032 425.454 798.032C432.816 798.032 440.177 798.032 447.538 798.032C459.416 798.032 471.194 798.227 483.071 798.424C483.463 798.424 483.856 798.424 484.249 798.424C493.181 798.129 495.242 794.308 495.046 785.686ZM401.111 772.164C395.32 772.262 393.259 770.596 393.259 764.52C393.357 732.578 393.161 700.537 392.866 668.594C392.866 664.283 394.338 662.029 398.559 661.539C414.067 659.581 429.674 657.425 445.183 655.465C453.134 654.387 461.084 653.701 468.937 652.427C474.728 651.546 476.985 652.917 476.887 659.384C476.494 676.826 476.789 694.365 476.789 711.805H476.887C476.887 729.05 476.691 746.295 476.985 763.542C477.083 769.812 475.513 772.457 468.642 772.36C446.165 771.772 423.589 771.87 401.111 772.164Z"\r
      fill="url(#paint7_linear_2_5)"\r
    />\r
    <path\r
      d="M353.015 530.241H352.426C352.426 507.705 352.426 485.168 352.426 462.632C352.426 450.972 351.542 450.286 339.961 453.324C313.949 459.987 288.135 467.238 261.928 473.117C251.425 475.468 248.284 480.172 248.382 490.655C248.774 532.103 248.382 573.55 247.891 614.899C247.793 624.208 252.602 624.404 259.67 623.326C286.761 618.917 313.851 614.214 341.04 610.98C350.561 609.902 353.31 606.669 353.212 597.752C352.721 575.313 353.015 552.777 353.015 530.241ZM329.066 589.424C309.827 591.677 290.785 595.009 271.742 598.144C266.736 598.928 263.4 598.732 263.4 592.265C263.694 563.066 263.989 533.867 263.694 504.668C263.596 497.221 265.853 493.988 273.215 492.321C291.668 488.206 309.925 483.013 328.182 478.407C336.329 476.251 336.918 476.741 337.016 484.973C337.016 500.846 337.016 516.719 337.016 532.593H337.409C337.409 548.466 337.212 564.34 337.507 580.212C337.703 586.386 335.739 588.639 329.066 589.424Z"\r
      fill="url(#paint8_linear_2_5)"\r
    />\r
    <path\r
      d="M352.525 719.645C352.525 696.031 352.721 672.318 352.23 648.703C352.23 646.352 348.01 641.943 346.047 642.139C316.502 644.785 287.055 648.213 257.511 651.154C250.639 651.839 248.382 655.367 248.48 661.834C248.578 704.163 248.578 746.394 248.48 788.723C248.48 795.582 250.934 798.227 258.002 798.227C285.975 797.934 314.047 797.836 342.022 798.227C350.267 798.326 352.623 795.092 352.427 787.449C352.132 764.815 352.328 742.279 352.328 719.645H352.525ZM337.114 719.84H337.016C337.016 735.714 336.82 751.686 337.114 767.558C337.213 772.947 335.544 775.3 329.752 775.202C310.023 774.907 290.294 775.005 270.565 775.202C265.559 775.202 263.891 773.34 263.891 768.538C263.989 738.751 263.989 708.866 263.891 679.079C263.891 674.572 265.461 672.024 270.271 671.534C291.08 669.476 311.79 667.027 332.697 665.165C334.071 665.067 337.016 668.203 337.016 669.771C337.213 686.428 337.114 703.085 337.114 719.84Z"\r
      fill="url(#paint9_linear_2_5)"\r
    />\r
    <path\r
      d="M141 787.548C141 792.545 141.491 797.248 148.165 797.149H148.656L219.328 796.561C221.782 796.561 223.843 794.505 223.843 792.055V785.098C224.039 746.1 223.745 707.102 224.137 668.104C224.236 657.816 221.291 655.563 207.549 658.796C189.292 663.01 170.643 664.675 151.895 665.067C143.552 665.263 141 668.105 141 674.865C141.098 712.393 141 749.921 141 787.548ZM153.76 691.033C153.76 686.329 155.527 684.37 161.22 684.272C174.176 683.978 187.035 682.9 199.697 679.961C209.218 677.707 211.181 679.274 211.181 686.428C210.985 713.373 211.083 740.319 210.985 767.265V772.066C210.985 773.83 209.61 775.202 207.844 775.202L159.06 775.593H158.668C154.055 775.593 153.76 772.457 153.76 768.931C153.858 742.964 153.858 716.999 153.76 691.033Z"\r
      fill="url(#paint10_linear_2_5)"\r
    />\r
    <path\r
      d="M619.899 371.605H665.149V326.435H619.899V371.605Z"\r
      fill="url(#paint11_linear_2_5)"\r
    />\r
    <path\r
      d="M594.477 258.629H627.948V225.119H594.477V258.629Z"\r
      fill="url(#paint12_linear_2_5)"\r
    />\r
    <path\r
      d="M756.63 260.785H838V179.458H756.63V260.785Z"\r
      fill="url(#paint13_linear_2_5)"\r
    />\r
    <path\r
      d="M690.276 313.892H726.398V277.932H690.276V313.892Z"\r
      fill="url(#paint14_linear_2_5)"\r
    />\r
    <path\r
      d="M694.497 367.098H730.618V331.039H694.497V367.098Z"\r
      fill="url(#paint15_linear_2_5)"\r
    />\r
    <path\r
      d="M768.015 337.311H822.295V283.125H768.015V337.311Z"\r
      fill="url(#paint16_linear_2_5)"\r
    />\r
    <path\r
      d="M744.36 394.239H768.801V369.842H744.36V394.239Z"\r
      fill="url(#paint17_linear_2_5)"\r
    />\r
    <path\r
      d="M790.591 418.932H826.712V382.971H790.591V418.932Z"\r
      fill="url(#paint18_linear_2_5)"\r
    />\r
    <path\r
      d="M676.536 260.785H712.558V224.727H676.536V260.785Z"\r
      fill="url(#paint19_linear_2_5)"\r
    />\r
    <path\r
      d="M665.149 424.81H701.27V388.85H665.149V424.81Z"\r
      fill="url(#paint20_linear_2_5)"\r
    />\r
    <path\r
      d="M731.306 480.662L776.947 459.104L755.353 413.542L709.712 435.099L731.306 480.662Z"\r
      fill="url(#paint21_linear_2_5)"\r
    />\r
    <defs>\r
      <linearGradient\r
        id="paint0_linear_2_5"\r
        x1="232.863"\r
        y1="623.122"\r
        x2="652.384"\r
        y2="258.054"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint1_linear_2_5"\r
        x1="330.242"\r
        y1="735.025"\r
        x2="749.763"\r
        y2="369.957"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint2_linear_2_5"\r
        x1="429.847"\r
        y1="849.487"\r
        x2="849.367"\r
        y2="484.417"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint3_linear_2_5"\r
        x1="492.018"\r
        y1="920.932"\r
        x2="911.54"\r
        y2="555.862"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint4_linear_2_5"\r
        x1="401.341"\r
        y1="816.73"\r
        x2="820.861"\r
        y2="451.661"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint5_linear_2_5"\r
        x1="268.741"\r
        y1="664.35"\r
        x2="688.261"\r
        y2="299.281"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint6_linear_2_5"\r
        x1="171.021"\r
        y1="552.055"\r
        x2="590.542"\r
        y2="186.987"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint7_linear_2_5"\r
        x1="367.124"\r
        y1="777.408"\r
        x2="786.645"\r
        y2="412.34"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint8_linear_2_5"\r
        x1="222.338"\r
        y1="611.026"\r
        x2="641.858"\r
        y2="245.958"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint9_linear_2_5"\r
        x1="312.402"\r
        y1="714.524"\r
        x2="731.922"\r
        y2="349.455"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint10_linear_2_5"\r
        x1="265.007"\r
        y1="660.059"\r
        x2="684.527"\r
        y2="294.992"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint11_linear_2_5"\r
        x1="273.131"\r
        y1="669.395"\r
        x2="692.652"\r
        y2="304.328"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint12_linear_2_5"\r
        x1="206.499"\r
        y1="592.824"\r
        x2="626.018"\r
        y2="227.755"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint13_linear_2_5"\r
        x1="275.742"\r
        y1="672.396"\r
        x2="695.263"\r
        y2="307.327"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint14_linear_2_5"\r
        x1="275.056"\r
        y1="671.605"\r
        x2="694.574"\r
        y2="306.537"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint15_linear_2_5"\r
        x1="303.253"\r
        y1="704.01"\r
        x2="722.773"\r
        y2="338.941"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint16_linear_2_5"\r
        x1="319.486"\r
        y1="722.667"\r
        x2="739.008"\r
        y2="357.598"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint17_linear_2_5"\r
        x1="338.536"\r
        y1="744.558"\r
        x2="758.059"\r
        y2="379.489"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint18_linear_2_5"\r
        x1="370.314"\r
        y1="781.075"\r
        x2="789.835"\r
        y2="416.007"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint19_linear_2_5"\r
        x1="242.768"\r
        y1="634.504"\r
        x2="662.29"\r
        y2="269.436"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint20_linear_2_5"\r
        x1="319.283"\r
        y1="722.429"\r
        x2="738.803"\r
        y2="357.362"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
      <linearGradient\r
        id="paint21_linear_2_5"\r
        x1="365.1"\r
        y1="775.081"\r
        x2="784.619"\r
        y2="410.013"\r
        gradientUnits="userSpaceOnUse"\r
      >\r
        <stop stop-color="#3ADFCB" />\r
        <stop offset="0.3883" stop-color="#219CFB" />\r
        <stop offset="0.7067" stop-color="#861AF0" />\r
        <stop offset="1" stop-color="#B00663" />\r
      </linearGradient>\r
    </defs>\r
  </svg>\r
</template>\r
<script>\r
export default {\r
  name: "Proxy",\r
};\r
<\/script>\r
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=e,a}var B2=T2({render:li,staticRenderFns:x2},b2,y2,w2,S2,E2,!1,void 0,void 0,void 0),ci=B2;function fi(t){let r=0,n=0,e=0;do r=Math.floor(Math.random()*t+1),n=Math.floor(Math.random()*t),e=Math.floor(Math.random()*t),r==0&&(r=1);while(Gt(r,n,e)[0]%1!=0||Gt(r,n,e)[1]%1!=0||Gt(r,n,e)[0]<=0||Gt(r,n,e)[1]<=0);return[r,n,e]}function Gt(t,r,n){r>0&&(r=r*-1);let e,o,i=r*r-4*t*n;return i>0?(e=(-r+Math.sqrt(i))/(2*t),o=(-r-Math.sqrt(i))/(2*t)):i==0&&(e=o=-r/(2*t)),[e,o]}var Xt;async function ui(t){let[r,n,e]=fi(t);Xt=await import("./contract-util-5GIJU4EH.js"),await Xt.deployContract(r,n,e);let[o,i]=Gt(r,n,e);return[r,n,e]}async function di(t){return await Xt.submitSolution(t)}async function _i(){return await Xt.fetchAccountStates()}async function hi(t,r,n,e){let o=!1;return t=="PROXY/MINA"?o=await Xt.swapForMina(r,e,n):o=await Xt.swapForToken(r,e,n),o}var O2={name:"App",components:{Loader:Wo,Equation:ti,GithubLogo:oi,ProxyLabsLogo:ri,Snackbar:si,Mina:pi,Proxy:ci},data(){return{swap:"MINA/PROXY",transactionsAccount1:[],transactionsAccount2:[],swapInAmount:0,switchAccount:"",params:[0,0,0],difficulty:41,isDeployed:!1,deploying:!1,showHint:!1,beingSubmited:!1,proposedSolution:0,atPage:0,showSnackbar:!1,snappState:{},snack:{type:"failure",message:"Request failed"}}},methods:{changeSwap(){this.swap=="MINA/PROXY"?this.swap="PROXY/MINA":this.swap="MINA/PROXY"},async executeSwap(){let t=this.switchAccount==this.snappState.account1.address?0:1;await hi(this.swap,this.swapInAmount*1e6,t,this.proposedSolution)?(this.setSnackbar("success",`You successfully swapped ${this.swapInAmount} $${this.swap=="MINA/PROXY"?"MINA":"PROXY"} for $${this.swap=="MINA/PROXY"?"PROXY":"MINA"}`),t==0?(this.transactionsAccount1.push({direction:"out",amount:`  -${this.swapInAmount} $${this.swap=="MINA/PROXY"?"MINA":"PROXY"}`,type:"swap"}),this.transactionsAccount1.push({direction:"in",amount:`  +${this.swapInAmount} $${this.swap=="MINA/PROXY"?"PROXY":"MINA"}`,type:"swap"})):(this.transactionsAccount2.push({direction:"out",amount:`  -${this.swapInAmount} $${this.swap=="MINA/PROXY"?"MINA":"PROXY"}`,type:"swap"}),this.transactionsAccount2.push({direction:"in",amount:`  +${this.swapInAmount} $${this.swap=="MINA/PROXY"?"PROXY":"MINA"}`,type:"swap"}))):this.setSnackbar("failure","Swapping failed."),await this.updateSnappState()},async updateSnappState(){let t=await _i();this.snappState={account1:t.account1,account2:t.account2,snapp:t.snapp}},setSnackbar(t,r){this.showSnackbar=!1,this.snack.type=t,this.snack.message=r,this.showSnackbar=!0,setTimeout(()=>{this.showSnackbar=!1},3500)},async submitSolution(){this.beingSubmited=!0;let t=await di(this.proposedSolution);t?this.setSnackbar("success","Congratz! You found one valid solution to the equation. Please proceed"):this.setSnackbar("failure","Failure. Looks like the provided solution doesn't work!"),this.beingSubmited=!1,t&&(this.next(),await this.updateSnappState(),this.switchAccount=this.snappState.account1.address)},getEquation(){let t=`${this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`;return this.params[1]!=0&&this.params[2]!=0&&(t=`${this.params[0]==1?"":this.params[0]}x\xB2 - ${this.params[1]}x + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]!=0&&(t=`${this.params[0]==1?"":this.params[0]}x\xB2 + ${this.params[2]} = 0`),this.params[1]==0&&this.params[2]==0&&(t=`${this.params[0]==1?"":this.params[0]}x\xB2 = 0`),this.params[1]!=0&&this.params[2]==0&&(t=`${this.params[0]==1?"":this.params[0]}x\xB2 - ${this.params[1]}x = 0`),t},next(){this.atPage++},async deploy(){this.deploying=!0,this.params=await ui(this.difficulty),this.setSnackbar("info","Contract deployed!"),this.beingSubmited=!1,this.isDeployed=!0,this.deploying=!1}},computed:{expectedReturn(){return this.swapInAmount},selectedAccount(){return this.switchAccount==this.snappState.account1.address?0:1}}},vi=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"header"},[n("ProxyLabsLogo"),t._v(" "),n("GithubLogo")],1),t._v(" "),n("h1",{staticClass:"title"},[t._v("Mina Secret Exchange")]),t._v(" "),n("h3",{staticClass:"sub"},[t._v(`
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
      `)]),t._v(" "),n("div",{style:t.isDeployed?"visibility: hidden;":"visibility: visible;"},[n("h3",[t._v("Possible difficulty of equation")]),t._v(" "),n("div",{staticClass:"slidecontainer"},[n("span",[t._v("EASY")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.difficulty,expression:"difficulty"}],staticClass:"slider",attrs:{type:"range",min:"3",max:"80",value:"41"},domProps:{value:t.difficulty},on:{__r:function(e){t.difficulty=e.target.value}}}),t._v(" "),n("span",[t._v("HARD")])])]),t._v(" "),t.isDeployed?t._e():n("button",{staticClass:"deploy-btn",on:{click:function(e){return t.deploy()}}},[n("span",[t._v("Deploy the contract")])]),t._v(" "),t.isDeployed?n("button",{staticClass:"continue-btn",on:{click:function(e){return t.next()}}},[n("span",[t._v("Continue")])]):t._e()],1):t._e(),t._v(" "),t.atPage==1?n("div",[n("h2",{staticStyle:{border:"2px red dotted","margin-left":"40%","margin-right":"40%"}},[n("h5",{staticStyle:{margin:"5px"}},[t._v("Here is your equation:")]),t._v(`
        `+t._s(t.getEquation())+`
      `)]),t._v(" "),n("h5",{staticStyle:{"margin-top":"0px"}},[t._v(`
        Please provide one possible solution to this equation to proceed
      `)]),t._v(" "),n("Loader",{style:t.beingSubmited?"visibility: visible;":"visibility: hidden;"}),t._v(" "),n("div",{staticClass:"content",staticStyle:{display:"flex","margin-left":"30%","margin-right":"30%"}},[n("div",{staticClass:"left",staticStyle:{width:"50%"}},[n("div",{staticClass:"hint",style:t.showHint?"visibility: visible;":"visibility: hidden;"},[n("Equation")],1),t._v(" "),t.showHint?t._e():n("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"12px"},on:{click:function(e){t.showHint=!0}}},[n("span",[t._v("Show Hint")])]),t._v(" "),t.showHint?n("button",{staticClass:"hint-btn",staticStyle:{"margin-top":"20px"},on:{click:function(e){t.showHint=!1}}},[n("span",[t._v("Hide Hint")])]):t._e()]),t._v(" "),n("div",{staticClass:"right",staticStyle:{width:"50%"}},[n("h3",[t._v("Possible solution")]),t._v(" "),n("span",{staticStyle:{"font-size":"3rem"}},[t._v("x = ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.proposedSolution,expression:"proposedSolution"}],staticClass:"submission",attrs:{type:"text"},domProps:{value:t.proposedSolution},on:{input:function(e){e.target.composing||(t.proposedSolution=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"submit-btn",staticStyle:{"margin-top":"10px"},on:{click:function(e){return t.submitSolution()}}},[n("span",[t._v("Submit")])])]),t._v(" "),n("br")])],1):t._e(),t._v(" "),t.atPage==2?n("div",[t._m(0),t._v(" "),n("div",{staticClass:"content",staticStyle:{display:"flex","margin-left":"10%","margin-right":"10%"}},[n("div",{staticClass:"left",staticStyle:{width:"50%"}},[n("h3",{staticStyle:{"margin-bottom":"5px"}},[t._v("You are trading as")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.switchAccount,expression:"switchAccount"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(i){return i.selected}).map(function(i){var s="_value"in i?i._value:i.value;return s});t.switchAccount=e.target.multiple?o:o[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v(`
              Please the account you want to trade with
            `)]),t._v(" "),n("option",{domProps:{value:t.snappState.account1.address}},[t._v(`
              `+t._s(t.snappState.account1.address)+`
            `)]),t._v(" "),n("option",{domProps:{value:t.snappState.account2.address}},[t._v(`
              `+t._s(t.snappState.account2.address)+`
            `)])]),t._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("div",{staticClass:"content",attrs:{sltye:"margin-left: 10%;"}},[n("h4",[t._v(`
                Equation:
                `),n("span",{staticStyle:{color:"rgb(250, 150, 230)","font-weight":"700"}},[t._v(t._s(t.getEquation()))]),t._v(`
                || Your solution:
                `),n("span",{staticStyle:{color:"rgb(250, 150, 230)","font-weight":"700"}},[t._v("x = "+t._s(t.proposedSolution))])]),t._v(" "),n("h4",[t._v(`
                Balance $MINA:
                `+t._s(t.selectedAccount==0?t.snappState.account1.balance/1e6:t.snappState.account2.balance/1e6)+`
              `)]),t._v(" "),n("h4",[t._v(`
                Balance $TOKEN:
                `+t._s(t.selectedAccount==0?t.snappState.account1.balanceToken/1e6:t.snappState.account2.balanceToken/1e6)+`
              `)]),t._v(" "),n("hr"),t._v(" "),n("h4",[t._v(`
                Contract Balance $MINA:
                `+t._s(t.snappState.snapp.balance/1e6)+`
              `)]),t._v(" "),n("h4",[t._v(`
                Contract Balance $TOKEN:
                `+t._s(t.snappState.snapp.balanceToken/1e6)+`
              `)]),t._v(" "),n("hr"),t._v(" "),n("h3",[t._v("Transactions")]),t._v(" "),n("table",[t._m(1),t._v(" "),t.selectedAccount==0?t._l(t.transactionsAccount1,function(e,o){return n("tr",{key:o},[e.direction=="out"?[n("td",{staticStyle:{color:"red"}},[t._v("OUTGOING")]),t._v(" "),n("td",{staticStyle:{color:"red","margin-bottom":"2px"}},[t._v(`
                        `+t._s(e.amount)+`
                      `)]),t._v(" "),n("td",{staticStyle:{color:"red","margin-bottom":"2px"}},[t._v(`
                        `+t._s(e.type)+`
                      `)])]:t._e(),t._v(" "),e.direction=="in"?[n("td",{staticStyle:{color:"green"}},[t._v("OUTGOING")]),t._v(" "),n("td",{staticStyle:{color:"green","margin-bottom":"2px"}},[t._v(`
                        `+t._s(e.amount)+`
                      `)]),t._v(" "),n("td",{staticStyle:{color:"green","margin-bottom":"2px"}},[t._v(`
                        `+t._s(e.type)+`
                      `)])]:t._e()],2)}):t._l(t.transactionsAccount2,function(e,o){return n("tr",{key:o},[e.direction=="out"?[t._m(2,!0),t._v(" "),n("td",{staticStyle:{color:"red"}},[n("span",{staticStyle:{"margin-bottom":"3px"}},[t._v(t._s(e.amount))])]),t._v(" "),n("td",{staticStyle:{color:"red","margin-bottom":"2px"}},[n("span",{staticStyle:{"margin-bottom":"3px"}},[t._v(t._s(e.type))])])]:t._e(),t._v(" "),e.direction=="in"?[t._m(3,!0),t._v(" "),n("td",{staticStyle:{color:"green","margin-bottom":"2px"}},[n("span",{staticStyle:{"margin-bottom":"3px"}},[t._v(t._s(e.amount))])]),t._v(" "),n("td",{staticStyle:{color:"green","margin-bottom":"2px"}},[n("span",{staticStyle:{"margin-bottom":"3px"}},[t._v(t._s(e.type))])])]:t._e()],2)})],2)])])]),t._v(" "),n("div",{staticClass:"right",staticStyle:{width:"50%"}},[n("div",{staticClass:"swapper"},[n("h2",[t._v("Swap")]),t._v(" "),n("h3",[t._v(t._s(t.swap)+" - 1 ~ 1")]),t._v(" "),n("div",{staticClass:"swapBoxes"},[n("div",{staticClass:"give"},[n("div",{staticClass:"logo"},[t.swap=="MINA/PROXY"?n("Mina"):n("Proxy")],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.swapInAmount,expression:"swapInAmount"}],staticClass:"swap-input",attrs:{type:"text"},domProps:{value:t.swapInAmount},on:{input:function(e){e.target.composing||(t.swapInAmount=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"arrow",on:{click:function(e){return t.changeSwap()}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M16.728 20.644l1.24 1.588c-1.721 1.114-3.766 1.768-5.969 1.768-4.077 0-7.626-2.225-9.524-5.52l-1.693.982 1.09-4.1 4.101 1.089-1.747 1.014c1.553 2.699 4.442 4.535 7.773 4.535 1.736 0 3.353-.502 4.729-1.356zm-13.722-7.52l-.007-.124c0-4.625 3.51-8.433 8.003-8.932l-.002 1.932 3.004-2.996-2.994-3.004-.004 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.986-.278zm18.577 5.243c.896-1.588 1.416-3.414 1.416-5.367 0-4.577-2.797-8.499-6.773-10.156l-.623 1.914c3.173 1.393 5.396 4.561 5.396 8.242 0 1.603-.441 3.097-1.18 4.402l-1.762-.964 1.193 4.072 4.071-1.192-1.738-.951z"}})])]),t._v(" "),n("div",{staticClass:"for"},[n("div",{staticClass:"logo"},[t.swap=="MINA/PROXY"?n("Proxy"):n("Mina")],1),t._v(" "),n("span",{staticStyle:{"font-size":"3rem"}},[t._v("~"+t._s(t.expectedReturn))])])]),t._v(" "),n("button",{staticClass:"swap-btn",staticStyle:{"margin-top":"10px"},on:{click:function(e){return t.executeSwap()}}},[n("span",[t._v("Swap")])])])]),t._v(" "),n("br")])]):t._e()]),t._v(" "),t.showSnackbar?n("Snackbar",{attrs:{snack:t.snack}}):t._e()],1)},M2=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("h2",{staticStyle:{border:"2px red dotted","margin-left":"30%","margin-right":"30%"}},[n("h5",{staticStyle:{margin:"5px"}},[t._v(`
          Congratz, you have gained access to the exchange!
        `)])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("tr",[n("th",[t._v("Direction")]),t._v(" "),n("th",[t._v("Amount")]),t._v(" "),n("th",[t._v("Type")])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("td",{staticStyle:{color:"red"}},[n("span",{staticStyle:{"margin-bottom":"3px"}},[t._v("OUTGOING")])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("td",{staticStyle:{color:"green"}},[n("span",{staticStyle:{"margin-bottom":"3px"}},[t._v("INCOMING")])])}];vi._withStripped=!0;var F2=function(t){!t||t("data-v-74eb15a6_0",{source:`
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");
* {\r
  font-family: "Inconsolata", sans-serif;
}
table {\r
  border-collapse: collapse;\r
  width: 100%;
}
.swap-input {\r
  border: none;\r
  font-size: 3rem;\r
  width: 90%;\r
  float: right;\r
  text-align: right;
}
.swapper {\r
  height: 340px;\r
  width: 400px;\r
  margin-left: 100px;\r
  border-radius: 15px;\r
  border: solid 2px black;\r
  background-color: rgb(231, 225, 210);
}
.swapBoxes {\r
  height: 140px;\r
  margin-left: 5%;\r
  margin-right: 5%;\r
  margin-bottom: 10px;\r
  position: relative;
}
.give .logo,\r
.for .logo {\r
  position: absolute;\r
  left: -30px;\r
  top: 2px;
}
.give,\r
.for {\r
  margin-left: 5%;\r
  margin-right: 5%;\r
  height: 60px;\r
  border: solid 2px black;\r
  border-radius: 15px;\r
  background-color: white;\r
  position: relative;\r
  text-align: right;\r
  padding-right: 15px;
}
.give {\r
  margin-bottom: 10px;
}
.arrow {\r
  border: 2px solid black;\r
  width: 30px;\r
  height: 30px;\r
  position: static;\r
  z-index: 2;\r
  margin-left: calc(50% - 15px);\r
  position: absolute;\r
  top: calc(70px - 17px);\r
  border-radius: 5px;\r
  left: 0;\r
  padding-top: 2px;\r
  padding-bottom: 0px;\r
  background-color: rgb(255, 255, 255);
}
.arrow:hover {\r
  scale: 1.03;\r
  cursor: pointer;
}
.arrow svg {\r
  color: white;\r
  margin: 0;\r
  padding: 0;
}
.header {\r
  margin-left: 10%;\r
  margin-right: 10%;\r
  display: flex;\r
  justify-content: space-between;
}
.logo,\r
.github {\r
  height: 60px;\r
  line-height: 60px;\r
  padding: 4px;\r
  margin-left: 5px;
}
.github {\r
  margin-top: 10px;\r
  height: 30px;
}
.swap-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 255, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;
}
.deploy-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 255, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;
}
.continue-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(254, 255, 176);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;
}
.hint-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(255, 208, 176);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;
}
.submit-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 239, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;
}
.swap-btn:hover,\r
.deploy-btn:hover,\r
.submit-btn:hover,\r
.hint-btn:hover,\r
.continue-btn:hover {\r
  border: solid black 1px;
}
.swap-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;
}
.submit-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;
}
.hint-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;
}
.deploy-btn span,\r
.continue-btn span {\r
  font-weight: 500;\r
  font-size: 1.8rem;\r
  text-transform: uppercase;
}
.title {\r
  font-size: 3rem;\r
  font-weight: 400;\r
  margin-bottom: 10px;\r
  margin-top: 10px;
}
.sub {\r
  margin-top: 20px;\r
  font-size: 1.2rem;\r
  /*   border-radius: 5px;\r
  padding: 5px;\r
  background-color: rgb(214, 214, 214); */
}
.sub-desc {\r
  margin-top: 25px;\r
  margin-left: 20%;\r
  margin-right: 20%;\r
  font-size: 1.2rem;\r
  border-radius: 5px;\r
  padding: 5px;\r
  background-color: rgb(214, 214, 214);
}
.submission {\r
  font-size: 2rem;\r
  width: 50px;\r
  margin-top: 6px;\r
  text-align: center;
}
.wrapper {\r
  font-family: "Inconsolata", sans-serif;\r
  -webkit-font-smoothing: antialiased;\r
  -moz-osx-font-smoothing: grayscale;\r
  text-align: center;\r
  color: #2c3e50;\r
  margin-top: 5px;
}
.slider {\r
  -webkit-appearance: none;\r
  width: 300px;\r
  height: 15px;\r
  border-radius: 5px;\r
  background: #d3d3d3;\r
  outline: none;\r
  opacity: 0.7;\r
  -webkit-transition: 0.2s;\r
  transition: opacity 0.2s;
}
.slider::-webkit-slider-thumb {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  width: 25px;\r
  height: 25px;\r
  border-radius: 50%;\r
  background: #02d6cc;\r
  cursor: pointer;
}
.slider::-moz-range-thumb {\r
  width: 25px;\r
  height: 25px;\r
  border-radius: 50%;\r
  background: #02d6cc;\r
  cursor: pointer;
}\r
`,map:{version:3,sources:["src\\App.vue"],names:[],mappings:";AAwfA,qHAAA;AAEA;EACA,sCAAA;AACA;AAEA;EACA,yBAAA;EACA,WAAA;AACA;AAEA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,iBAAA;AACA;AAEA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oCAAA;AACA;AACA;EACA,aAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AACA;AAEA;;EAEA,kBAAA;EACA,WAAA;EACA,QAAA;AACA;AAEA;;EAEA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AACA;AAEA;EACA,mBAAA;AACA;AAEA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,6BAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,OAAA;EACA,gBAAA;EACA,mBAAA;EACA,oCAAA;AACA;AAEA;EACA,WAAA;EACA,eAAA;AACA;AACA;EACA,YAAA;EACA,SAAA;EACA,UAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AACA;AAEA;;EAEA,YAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oCAAA;EACA,kBAAA;EACA,sCAAA;EACA,gBAAA;AACA;AACA;;;;;EAKA,uBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;;EAEA,gBAAA;EACA,iBAAA;EACA,yBAAA;AACA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,gBAAA;EACA,iBAAA;EACA;;yCAEA;AACA;AAEA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,oCAAA;AACA;AAEA;EACA,eAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,sCAAA;EACA,mCAAA;EACA,kCAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AACA;AAEA;EACA,wBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,wBAAA;EACA,wBAAA;AACA;AAEA;EACA,wBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AACA",file:"App.vue",sourcesContent:[`<template>\r
  <div class="wrapper">\r
    <div class="header">\r
      <ProxyLabsLogo />\r
      <GithubLogo />\r
    </div>\r
    <h1 class="title">Mina Secret Exchange</h1>\r
    <h3 class="sub">\r
      Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) for the Mina\r
      Snapp Bootcamp 2021.\r
    </h3>\r
    <p class="sub-desc">\r
      The secret exchange allows users to buy imaginary tokens (tokens aren't\r
      implemented, only simulated) after successfully providing the solution to\r
      a series of math problems while keeping the solution itself secure and\r
      private, not exposing it to the network. An exchange to which only\r
      math-nerds have access!\r
    </p>\r
    <div class="content-wrapper">\r
      <div v-if="atPage == 0">\r
        <!--         <span\r
          >Contract deployed under\r
          B62qk8bcoWGkmLvgSekJf...7bhUAq9Vci4nvgb4z</span\r
        >\r
        <span>Your public key: B62qm4QbSnmQWM3x7SUi...xtDvsne7YP4nC8Nh7f</span> -->\r
        <Loader\r
          :style="deploying ? 'visibility: visible;' : 'visibility: hidden;'"\r
        />\r
        <h2\r
          style="border: 2px red dotted; margin-left: 40%; margin-right: 40%"\r
          :style="isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"\r
        >\r
          <h5 style="margin: 5px">There you go - here is your equation:</h5>\r
          {{ getEquation() }}\r
        </h2>\r
        <div\r
          :style="!isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"\r
        >\r
          <h3>Possible difficulty of equation</h3>\r
          <div class="slidecontainer">\r
            <span>EASY</span>\r
            <input\r
              v-model="difficulty"\r
              type="range"\r
              min="3"\r
              max="80"\r
              value="41"\r
              class="slider"\r
            />\r
            <span>HARD</span>\r
          </div>\r
        </div>\r
\r
        <button v-if="!isDeployed" class="deploy-btn" @click="deploy()">\r
          <span>Deploy the contract</span>\r
        </button>\r
        <button v-if="isDeployed" class="continue-btn" @click="next()">\r
          <span>Continue</span>\r
        </button>\r
      </div>\r
      <div v-if="atPage == 1">\r
        <h2 style="border: 2px red dotted; margin-left: 40%; margin-right: 40%">\r
          <h5 style="margin: 5px">Here is your equation:</h5>\r
          {{ getEquation() }}\r
        </h2>\r
        <h5 style="margin-top: 0px">\r
          Please provide one possible solution to this equation to proceed\r
        </h5>\r
        <Loader\r
          :style="\r
            beingSubmited ? 'visibility: visible;' : 'visibility: hidden;'\r
          "\r
        />\r
        <div\r
          class="content"\r
          style="display: flex; margin-left: 30%; margin-right: 30%"\r
        >\r
          <div class="left" style="width: 50%">\r
            <div\r
              class="hint"\r
              :style="showHint ? 'visibility: visible;' : 'visibility: hidden;'"\r
            >\r
              <Equation />\r
            </div>\r
            <button\r
              v-if="!showHint"\r
              class="hint-btn"\r
              style="margin-top: 12px"\r
              @click="showHint = true"\r
            >\r
              <span>Show Hint</span>\r
            </button>\r
            <button\r
              v-if="showHint"\r
              class="hint-btn"\r
              style="margin-top: 20px"\r
              @click="showHint = false"\r
            >\r
              <span>Hide Hint</span>\r
            </button>\r
          </div>\r
          <div class="right" style="width: 50%">\r
            <h3>Possible solution</h3>\r
            <span style="font-size: 3rem">x = </span\r
            ><input type="text" v-model="proposedSolution" class="submission" />\r
            <br />\r
            <button\r
              class="submit-btn"\r
              style="margin-top: 10px"\r
              @click="submitSolution()"\r
            >\r
              <span>Submit</span>\r
            </button>\r
          </div>\r
          <br />\r
        </div>\r
      </div>\r
      <div v-if="atPage == 2">\r
        <h2 style="border: 2px red dotted; margin-left: 30%; margin-right: 30%">\r
          <h5 style="margin: 5px">\r
            Congratz, you have gained access to the exchange!\r
          </h5>\r
        </h2>\r
\r
        <div\r
          class="content"\r
          style="display: flex; margin-left: 10%; margin-right: 10%"\r
        >\r
          <div class="left" style="width: 50%">\r
            <h3 style="margin-bottom: 5px">You are trading as</h3>\r
            <select v-model="switchAccount">\r
              <option disabled value="">\r
                Please the account you want to trade with\r
              </option>\r
              <option :value="snappState.account1.address">\r
                {{ snappState.account1.address }}\r
              </option>\r
              <option :value="snappState.account2.address">\r
                {{ snappState.account2.address }}\r
              </option>\r
            </select>\r
            <div style="text-align: left">\r
              <div class="content" sltye="margin-left: 10%;">\r
                <h4>\r
                  Equation:\r
                  <span style="color: rgb(250, 150, 230); font-weight: 700">{{\r
                    getEquation()\r
                  }}</span>\r
                  || Your solution:\r
                  <span style="color: rgb(250, 150, 230); font-weight: 700"\r
                    >x = {{ proposedSolution }}</span\r
                  >\r
                </h4>\r
\r
                <h4>\r
                  Balance $MINA:\r
                  {{\r
                    selectedAccount == 0\r
                      ? snappState.account1.balance / 1000000\r
                      : snappState.account2.balance / 1000000\r
                  }}\r
                </h4>\r
\r
                <h4>\r
                  Balance $TOKEN:\r
                  {{\r
                    selectedAccount == 0\r
                      ? snappState.account1.balanceToken / 1000000\r
                      : snappState.account2.balanceToken / 1000000\r
                  }}\r
                </h4>\r
                <hr />\r
                <h4>\r
                  Contract Balance $MINA:\r
                  {{ snappState.snapp.balance / 1000000 }}\r
                </h4>\r
                <h4>\r
                  Contract Balance $TOKEN:\r
                  {{ snappState.snapp.balanceToken / 1000000 }}\r
                </h4>\r
                <hr />\r
                <h3>Transactions</h3>\r
                <table>\r
                  <tr>\r
                    <th>Direction</th>\r
                    <th>Amount</th>\r
                    <th>Type</th>\r
                  </tr>\r
                  <template v-if="selectedAccount == 0">\r
                    <tr v-for="(tx, t) in transactionsAccount1" :key="t">\r
                      <template v-if="tx.direction == 'out'">\r
                        <td style="color: red">OUTGOING</td>\r
                        <td style="color: red; margin-bottom: 2px">\r
                          {{ tx.amount }}\r
                        </td>\r
                        <td style="color: red; margin-bottom: 2px">\r
                          {{ tx.type }}\r
                        </td>\r
                      </template>\r
                      <template v-if="tx.direction == 'in'">\r
                        <td style="color: green">OUTGOING</td>\r
                        <td style="color: green; margin-bottom: 2px">\r
                          {{ tx.amount }}\r
                        </td>\r
                        <td style="color: green; margin-bottom: 2px">\r
                          {{ tx.type }}\r
                        </td>\r
                      </template>\r
                    </tr>\r
                  </template>\r
                  <template v-else>\r
                    <tr v-for="(tx, t) in transactionsAccount2" :key="t">\r
                      <template v-if="tx.direction == 'out'">\r
                        <td style="color: red">\r
                          <span style="margin-bottom: 3px">OUTGOING</span>\r
                        </td>\r
                        <td style="color: red">\r
                          <span style="margin-bottom: 3px">{{\r
                            tx.amount\r
                          }}</span>\r
                        </td>\r
                        <td style="color: red; margin-bottom: 2px">\r
                          <span style="margin-bottom: 3px">{{ tx.type }}</span>\r
                        </td>\r
                      </template>\r
                      <template v-if="tx.direction == 'in'">\r
                        <td style="color: green">\r
                          <span style="margin-bottom: 3px">INCOMING</span>\r
                        </td>\r
                        <td style="color: green; margin-bottom: 2px">\r
                          <span style="margin-bottom: 3px">{{\r
                            tx.amount\r
                          }}</span>\r
                        </td>\r
                        <td style="color: green; margin-bottom: 2px">\r
                          <span style="margin-bottom: 3px">{{ tx.type }}</span>\r
                        </td>\r
                      </template>\r
                    </tr>\r
                  </template>\r
                </table>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="right" style="width: 50%">\r
            <!--             <h4>\r
              You are interacting with Contract\r
              <h5 style="font-size: 1rem; margin-top: 2px; font-weight: 400">\r
                {{ snappState.snapp.address }}\r
              </h5>\r
            </h4>  -->\r
            <div class="swapper">\r
              <h2>Swap</h2>\r
              <h3>{{ swap }} - 1 ~ 1</h3>\r
              <div class="swapBoxes">\r
                <div class="give">\r
                  <div class="logo">\r
                    <Mina v-if="swap == 'MINA/PROXY'" />\r
                    <Proxy v-else />\r
                  </div>\r
                  <input\r
                    class="swap-input"\r
                    v-model="swapInAmount"\r
                    type="text"\r
                  />\r
                </div>\r
                <div @click="changeSwap()" class="arrow">\r
                  <svg\r
                    xmlns="http://www.w3.org/2000/svg"\r
                    width="24"\r
                    height="24"\r
                    viewBox="0 0 24 24"\r
                  >\r
                    <path\r
                      d="M16.728 20.644l1.24 1.588c-1.721 1.114-3.766 1.768-5.969 1.768-4.077 0-7.626-2.225-9.524-5.52l-1.693.982 1.09-4.1 4.101 1.089-1.747 1.014c1.553 2.699 4.442 4.535 7.773 4.535 1.736 0 3.353-.502 4.729-1.356zm-13.722-7.52l-.007-.124c0-4.625 3.51-8.433 8.003-8.932l-.002 1.932 3.004-2.996-2.994-3.004-.004 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.986-.278zm18.577 5.243c.896-1.588 1.416-3.414 1.416-5.367 0-4.577-2.797-8.499-6.773-10.156l-.623 1.914c3.173 1.393 5.396 4.561 5.396 8.242 0 1.603-.441 3.097-1.18 4.402l-1.762-.964 1.193 4.072 4.071-1.192-1.738-.951z"\r
                    />\r
                  </svg>\r
                </div>\r
                <div class="for">\r
                  <div class="logo">\r
                    <Proxy v-if="swap == 'MINA/PROXY'" />\r
                    <Mina v-else />\r
                  </div>\r
                  <span style="font-size: 3rem">~{{ expectedReturn }}</span>\r
                </div>\r
              </div>\r
              <button\r
                class="swap-btn"\r
                style="margin-top: 10px"\r
                @click="executeSwap()"\r
              >\r
                <span>Swap</span>\r
              </button>\r
            </div>\r
          </div>\r
          <br />\r
        </div>\r
      </div>\r
    </div>\r
    <Snackbar v-if="showSnackbar" :snack="snack" />\r
  </div>\r
</template>\r
\r
<script>\r
import Loader from "./components/Loader.vue";\r
import Equation from "./components/Equation.vue";\r
\r
import ProxyLabsLogo from "./components/ProxyLabsLogo.vue";\r
import GithubLogo from "./components/GithubLogo.vue";\r
import Snackbar from "./components/Snackbar.vue";\r
import Mina from "./components/Mina.vue";\r
import Proxy from "./components/Proxy.vue";\r
\r
import {\r
  init,\r
  submitSolution,\r
  getState,\r
  swapToken,\r
} from "../dist/snapp/snapp.js";\r
\r
export default {\r
  name: "App",\r
  components: {\r
    Loader,\r
    Equation,\r
    GithubLogo,\r
    ProxyLabsLogo,\r
    Snackbar,\r
    Mina,\r
    Proxy,\r
  },\r
  data() {\r
    return {\r
      swap: "MINA/PROXY",\r
      transactionsAccount1: [],\r
      transactionsAccount2: [],\r
      swapInAmount: 0,\r
      switchAccount: "",\r
      params: [0, 0, 0],\r
      difficulty: 41,\r
      isDeployed: false,\r
      deploying: false,\r
      showHint: false,\r
      beingSubmited: false,\r
      proposedSolution: 0,\r
      atPage: 0,\r
      showSnackbar: false,\r
      snappState: {},\r
      snack: {\r
        type: "failure",\r
        message: "Request failed",\r
      },\r
    };\r
  },\r
  methods: {\r
    changeSwap() {\r
      if (this.swap == "MINA/PROXY") {\r
        this.swap = "PROXY/MINA";\r
      } else {\r
        this.swap = "MINA/PROXY";\r
      }\r
    },\r
    async executeSwap() {\r
      let acc = this.switchAccount == this.snappState.account1.address ? 0 : 1;\r
      let res = await swapToken(\r
        this.swap,\r
        this.swapInAmount * 1000000,\r
        acc,\r
        this.proposedSolution\r
      );\r
      if (res) {\r
        this.setSnackbar(\r
          "success",\r
          \`You successfully swapped \${this.swapInAmount} $\${\r
            this.swap == "MINA/PROXY" ? "MINA" : "PROXY"\r
          } for $\${this.swap == "MINA/PROXY" ? "PROXY" : "MINA"}\`\r
        );\r
\r
        if (acc == 0) {\r
          this.transactionsAccount1.push({\r
            direction: "out",\r
            amount: \`  -\${this.swapInAmount} $\${\r
              this.swap == "MINA/PROXY" ? "MINA" : "PROXY"\r
            }\`,\r
            type: "swap",\r
          });\r
          this.transactionsAccount1.push({\r
            direction: "in",\r
            amount: \`  +\${this.swapInAmount} $\${\r
              this.swap == "MINA/PROXY" ? "PROXY" : "MINA"\r
            }\`,\r
            type: "swap",\r
          });\r
        } else {\r
          this.transactionsAccount2.push({\r
            direction: "out",\r
            amount: \`  -\${this.swapInAmount} $\${\r
              this.swap == "MINA/PROXY" ? "MINA" : "PROXY"\r
            }\`,\r
            type: "swap",\r
          });\r
          this.transactionsAccount2.push({\r
            direction: "in",\r
            amount: \`  +\${this.swapInAmount} $\${\r
              this.swap == "MINA/PROXY" ? "PROXY" : "MINA"\r
            }\`,\r
            type: "swap",\r
          });\r
        }\r
      } else {\r
        this.setSnackbar("failure", "Swapping failed.");\r
      }\r
\r
      await this.updateSnappState();\r
    },\r
    async updateSnappState() {\r
      let state = await getState();\r
\r
      this.snappState = {\r
        account1: state.account1,\r
        account2: state.account2,\r
        snapp: state.snapp,\r
      };\r
    },\r
    setSnackbar(type, msg) {\r
      this.showSnackbar = false;\r
      this.snack.type = type;\r
      this.snack.message = msg;\r
      this.showSnackbar = true;\r
      setTimeout(() => {\r
        this.showSnackbar = false;\r
      }, 3500);\r
    },\r
    async submitSolution() {\r
      this.beingSubmited = true;\r
      let res = await submitSolution(this.proposedSolution);\r
\r
      if (res) {\r
        this.setSnackbar(\r
          "success",\r
          "Congratz! You found one valid solution to the equation. Please proceed"\r
        );\r
      } else {\r
        this.setSnackbar(\r
          "failure",\r
          "Failure. Looks like the provided solution doesn't work!"\r
        );\r
      }\r
      this.beingSubmited = false;\r
\r
      if (res) {\r
        this.next();\r
        await this.updateSnappState();\r
        this.switchAccount = this.snappState.account1.address;\r
      }\r
    },\r
    getEquation() {\r
      let eq = \`\${this.params[0]}x\xB2 - \${this.params[1]}x + \${this.params[2]} = 0\`;\r
      if (this.params[1] != 0 && this.params[2] != 0) {\r
        eq = \`\${this.params[0] == 1 ? "" : this.params[0]}x\xB2 - \${\r
          this.params[1]\r
        }x + \${this.params[2]} = 0\`;\r
      }\r
      if (this.params[1] == 0 && this.params[2] != 0) {\r
        eq = \`\${this.params[0] == 1 ? "" : this.params[0]}x\xB2 + \${\r
          this.params[2]\r
        } = 0\`;\r
      }\r
      if (this.params[1] == 0 && this.params[2] == 0) {\r
        eq = \`\${this.params[0] == 1 ? "" : this.params[0]}x\xB2 = 0\`;\r
      }\r
      if (this.params[1] != 0 && this.params[2] == 0) {\r
        eq = \`\${this.params[0] == 1 ? "" : this.params[0]}x\xB2 - \${\r
          this.params[1]\r
        }x = 0\`;\r
      }\r
      return eq;\r
    },\r
    next() {\r
      this.atPage++;\r
    },\r
    async deploy() {\r
      this.deploying = true;\r
      this.params = await init(this.difficulty);\r
\r
      this.setSnackbar("info", "Contract deployed!");\r
\r
      this.beingSubmited = false;\r
      this.isDeployed = true;\r
      this.deploying = false;\r
    },\r
  },\r
  computed: {\r
    expectedReturn() {\r
      return this.swapInAmount;\r
    },\r
    selectedAccount() {\r
      return this.switchAccount == this.snappState.account1.address ? 0 : 1;\r
    },\r
  },\r
};\r
<\/script>\r
\r
<style>\r
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");\r
\r
* {\r
  font-family: "Inconsolata", sans-serif;\r
}\r
\r
table {\r
  border-collapse: collapse;\r
  width: 100%;\r
}\r
\r
.swap-input {\r
  border: none;\r
  font-size: 3rem;\r
  width: 90%;\r
  float: right;\r
  text-align: right;\r
}\r
\r
.swapper {\r
  height: 340px;\r
  width: 400px;\r
  margin-left: 100px;\r
  border-radius: 15px;\r
  border: solid 2px black;\r
  background-color: rgb(231, 225, 210);\r
}\r
.swapBoxes {\r
  height: 140px;\r
  margin-left: 5%;\r
  margin-right: 5%;\r
  margin-bottom: 10px;\r
  position: relative;\r
}\r
\r
.give .logo,\r
.for .logo {\r
  position: absolute;\r
  left: -30px;\r
  top: 2px;\r
}\r
\r
.give,\r
.for {\r
  margin-left: 5%;\r
  margin-right: 5%;\r
  height: 60px;\r
  border: solid 2px black;\r
  border-radius: 15px;\r
  background-color: white;\r
  position: relative;\r
  text-align: right;\r
  padding-right: 15px;\r
}\r
\r
.give {\r
  margin-bottom: 10px;\r
}\r
\r
.arrow {\r
  border: 2px solid black;\r
  width: 30px;\r
  height: 30px;\r
  position: static;\r
  z-index: 2;\r
  margin-left: calc(50% - 15px);\r
  position: absolute;\r
  top: calc(70px - 17px);\r
  border-radius: 5px;\r
  left: 0;\r
  padding-top: 2px;\r
  padding-bottom: 0px;\r
  background-color: rgb(255, 255, 255);\r
}\r
\r
.arrow:hover {\r
  scale: 1.03;\r
  cursor: pointer;\r
}\r
.arrow svg {\r
  color: white;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.header {\r
  margin-left: 10%;\r
  margin-right: 10%;\r
  display: flex;\r
  justify-content: space-between;\r
}\r
\r
.logo,\r
.github {\r
  height: 60px;\r
  line-height: 60px;\r
  padding: 4px;\r
  margin-left: 5px;\r
}\r
\r
.github {\r
  margin-top: 10px;\r
  height: 30px;\r
}\r
\r
.swap-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 255, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
\r
.deploy-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 255, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
\r
.continue-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(254, 255, 176);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
\r
.hint-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(255, 208, 176);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
\r
.submit-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 239, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
.swap-btn:hover,\r
.deploy-btn:hover,\r
.submit-btn:hover,\r
.hint-btn:hover,\r
.continue-btn:hover {\r
  border: solid black 1px;\r
}\r
\r
.swap-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;\r
}\r
\r
.submit-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;\r
}\r
\r
.hint-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;\r
}\r
\r
.deploy-btn span,\r
.continue-btn span {\r
  font-weight: 500;\r
  font-size: 1.8rem;\r
  text-transform: uppercase;\r
}\r
\r
.title {\r
  font-size: 3rem;\r
  font-weight: 400;\r
  margin-bottom: 10px;\r
  margin-top: 10px;\r
}\r
\r
.sub {\r
  margin-top: 20px;\r
  font-size: 1.2rem;\r
  /*   border-radius: 5px;\r
  padding: 5px;\r
  background-color: rgb(214, 214, 214); */\r
}\r
\r
.sub-desc {\r
  margin-top: 25px;\r
  margin-left: 20%;\r
  margin-right: 20%;\r
  font-size: 1.2rem;\r
  border-radius: 5px;\r
  padding: 5px;\r
  background-color: rgb(214, 214, 214);\r
}\r
\r
.submission {\r
  font-size: 2rem;\r
  width: 50px;\r
  margin-top: 6px;\r
  text-align: center;\r
}\r
\r
.wrapper {\r
  font-family: "Inconsolata", sans-serif;\r
  -webkit-font-smoothing: antialiased;\r
  -moz-osx-font-smoothing: grayscale;\r
  text-align: center;\r
  color: #2c3e50;\r
  margin-top: 5px;\r
}\r
\r
.slider {\r
  -webkit-appearance: none;\r
  width: 300px;\r
  height: 15px;\r
  border-radius: 5px;\r
  background: #d3d3d3;\r
  outline: none;\r
  opacity: 0.7;\r
  -webkit-transition: 0.2s;\r
  transition: opacity 0.2s;\r
}\r
\r
.slider::-webkit-slider-thumb {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  width: 25px;\r
  height: 25px;\r
  border-radius: 50%;\r
  background: #02d6cc;\r
  cursor: pointer;\r
}\r
\r
.slider::-moz-range-thumb {\r
  width: 25px;\r
  height: 25px;\r
  border-radius: 50%;\r
  background: #02d6cc;\r
  cursor: pointer;\r
}\r
</style>\r
`]},media:void 0})},N2=void 0,k2=void 0,H2=!1;function $2(t,r,n,e,o,i,s,p,l,d){let a=(typeof n=="function"?n.options:n)||{};a.__file=`<template>\r
  <div class="wrapper">\r
    <div class="header">\r
      <ProxyLabsLogo />\r
      <GithubLogo />\r
    </div>\r
    <h1 class="title">Mina Secret Exchange</h1>\r
    <h3 class="sub">\r
      Mina-Secret-Exchange is a zk-powered Smart Contract (Snapp) for the Mina\r
      Snapp Bootcamp 2021.\r
    </h3>\r
    <p class="sub-desc">\r
      The secret exchange allows users to buy imaginary tokens (tokens aren't\r
      implemented, only simulated) after successfully providing the solution to\r
      a series of math problems while keeping the solution itself secure and\r
      private, not exposing it to the network. An exchange to which only\r
      math-nerds have access!\r
    </p>\r
    <div class="content-wrapper">\r
      <div v-if="atPage == 0">\r
        <!--         <span\r
          >Contract deployed under\r
          B62qk8bcoWGkmLvgSekJf...7bhUAq9Vci4nvgb4z</span\r
        >\r
        <span>Your public key: B62qm4QbSnmQWM3x7SUi...xtDvsne7YP4nC8Nh7f</span> -->\r
        <Loader\r
          :style="deploying ? 'visibility: visible;' : 'visibility: hidden;'"\r
        />\r
        <h2\r
          style="border: 2px red dotted; margin-left: 40%; margin-right: 40%"\r
          :style="isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"\r
        >\r
          <h5 style="margin: 5px">There you go - here is your equation:</h5>\r
          {{ getEquation() }}\r
        </h2>\r
        <div\r
          :style="!isDeployed ? 'visibility: visible;' : 'visibility: hidden;'"\r
        >\r
          <h3>Possible difficulty of equation</h3>\r
          <div class="slidecontainer">\r
            <span>EASY</span>\r
            <input\r
              v-model="difficulty"\r
              type="range"\r
              min="3"\r
              max="80"\r
              value="41"\r
              class="slider"\r
            />\r
            <span>HARD</span>\r
          </div>\r
        </div>\r
\r
        <button v-if="!isDeployed" class="deploy-btn" @click="deploy()">\r
          <span>Deploy the contract</span>\r
        </button>\r
        <button v-if="isDeployed" class="continue-btn" @click="next()">\r
          <span>Continue</span>\r
        </button>\r
      </div>\r
      <div v-if="atPage == 1">\r
        <h2 style="border: 2px red dotted; margin-left: 40%; margin-right: 40%">\r
          <h5 style="margin: 5px">Here is your equation:</h5>\r
          {{ getEquation() }}\r
        </h2>\r
        <h5 style="margin-top: 0px">\r
          Please provide one possible solution to this equation to proceed\r
        </h5>\r
        <Loader\r
          :style="\r
            beingSubmited ? 'visibility: visible;' : 'visibility: hidden;'\r
          "\r
        />\r
        <div\r
          class="content"\r
          style="display: flex; margin-left: 30%; margin-right: 30%"\r
        >\r
          <div class="left" style="width: 50%">\r
            <div\r
              class="hint"\r
              :style="showHint ? 'visibility: visible;' : 'visibility: hidden;'"\r
            >\r
              <Equation />\r
            </div>\r
            <button\r
              v-if="!showHint"\r
              class="hint-btn"\r
              style="margin-top: 12px"\r
              @click="showHint = true"\r
            >\r
              <span>Show Hint</span>\r
            </button>\r
            <button\r
              v-if="showHint"\r
              class="hint-btn"\r
              style="margin-top: 20px"\r
              @click="showHint = false"\r
            >\r
              <span>Hide Hint</span>\r
            </button>\r
          </div>\r
          <div class="right" style="width: 50%">\r
            <h3>Possible solution</h3>\r
            <span style="font-size: 3rem">x = </span\r
            ><input type="text" v-model="proposedSolution" class="submission" />\r
            <br />\r
            <button\r
              class="submit-btn"\r
              style="margin-top: 10px"\r
              @click="submitSolution()"\r
            >\r
              <span>Submit</span>\r
            </button>\r
          </div>\r
          <br />\r
        </div>\r
      </div>\r
      <div v-if="atPage == 2">\r
        <h2 style="border: 2px red dotted; margin-left: 30%; margin-right: 30%">\r
          <h5 style="margin: 5px">\r
            Congratz, you have gained access to the exchange!\r
          </h5>\r
        </h2>\r
\r
        <div\r
          class="content"\r
          style="display: flex; margin-left: 10%; margin-right: 10%"\r
        >\r
          <div class="left" style="width: 50%">\r
            <h3 style="margin-bottom: 5px">You are trading as</h3>\r
            <select v-model="switchAccount">\r
              <option disabled value="">\r
                Please the account you want to trade with\r
              </option>\r
              <option :value="snappState.account1.address">\r
                {{ snappState.account1.address }}\r
              </option>\r
              <option :value="snappState.account2.address">\r
                {{ snappState.account2.address }}\r
              </option>\r
            </select>\r
            <div style="text-align: left">\r
              <div class="content" sltye="margin-left: 10%;">\r
                <h4>\r
                  Equation:\r
                  <span style="color: rgb(250, 150, 230); font-weight: 700">{{\r
                    getEquation()\r
                  }}</span>\r
                  || Your solution:\r
                  <span style="color: rgb(250, 150, 230); font-weight: 700"\r
                    >x = {{ proposedSolution }}</span\r
                  >\r
                </h4>\r
\r
                <h4>\r
                  Balance $MINA:\r
                  {{\r
                    selectedAccount == 0\r
                      ? snappState.account1.balance / 1000000\r
                      : snappState.account2.balance / 1000000\r
                  }}\r
                </h4>\r
\r
                <h4>\r
                  Balance $TOKEN:\r
                  {{\r
                    selectedAccount == 0\r
                      ? snappState.account1.balanceToken / 1000000\r
                      : snappState.account2.balanceToken / 1000000\r
                  }}\r
                </h4>\r
                <hr />\r
                <h4>\r
                  Contract Balance $MINA:\r
                  {{ snappState.snapp.balance / 1000000 }}\r
                </h4>\r
                <h4>\r
                  Contract Balance $TOKEN:\r
                  {{ snappState.snapp.balanceToken / 1000000 }}\r
                </h4>\r
                <hr />\r
                <h3>Transactions</h3>\r
                <table>\r
                  <tr>\r
                    <th>Direction</th>\r
                    <th>Amount</th>\r
                    <th>Type</th>\r
                  </tr>\r
                  <template v-if="selectedAccount == 0">\r
                    <tr v-for="(tx, t) in transactionsAccount1" :key="t">\r
                      <template v-if="tx.direction == 'out'">\r
                        <td style="color: red">OUTGOING</td>\r
                        <td style="color: red; margin-bottom: 2px">\r
                          {{ tx.amount }}\r
                        </td>\r
                        <td style="color: red; margin-bottom: 2px">\r
                          {{ tx.type }}\r
                        </td>\r
                      </template>\r
                      <template v-if="tx.direction == 'in'">\r
                        <td style="color: green">OUTGOING</td>\r
                        <td style="color: green; margin-bottom: 2px">\r
                          {{ tx.amount }}\r
                        </td>\r
                        <td style="color: green; margin-bottom: 2px">\r
                          {{ tx.type }}\r
                        </td>\r
                      </template>\r
                    </tr>\r
                  </template>\r
                  <template v-else>\r
                    <tr v-for="(tx, t) in transactionsAccount2" :key="t">\r
                      <template v-if="tx.direction == 'out'">\r
                        <td style="color: red">\r
                          <span style="margin-bottom: 3px">OUTGOING</span>\r
                        </td>\r
                        <td style="color: red">\r
                          <span style="margin-bottom: 3px">{{\r
                            tx.amount\r
                          }}</span>\r
                        </td>\r
                        <td style="color: red; margin-bottom: 2px">\r
                          <span style="margin-bottom: 3px">{{ tx.type }}</span>\r
                        </td>\r
                      </template>\r
                      <template v-if="tx.direction == 'in'">\r
                        <td style="color: green">\r
                          <span style="margin-bottom: 3px">INCOMING</span>\r
                        </td>\r
                        <td style="color: green; margin-bottom: 2px">\r
                          <span style="margin-bottom: 3px">{{\r
                            tx.amount\r
                          }}</span>\r
                        </td>\r
                        <td style="color: green; margin-bottom: 2px">\r
                          <span style="margin-bottom: 3px">{{ tx.type }}</span>\r
                        </td>\r
                      </template>\r
                    </tr>\r
                  </template>\r
                </table>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="right" style="width: 50%">\r
            <!--             <h4>\r
              You are interacting with Contract\r
              <h5 style="font-size: 1rem; margin-top: 2px; font-weight: 400">\r
                {{ snappState.snapp.address }}\r
              </h5>\r
            </h4>  -->\r
            <div class="swapper">\r
              <h2>Swap</h2>\r
              <h3>{{ swap }} - 1 ~ 1</h3>\r
              <div class="swapBoxes">\r
                <div class="give">\r
                  <div class="logo">\r
                    <Mina v-if="swap == 'MINA/PROXY'" />\r
                    <Proxy v-else />\r
                  </div>\r
                  <input\r
                    class="swap-input"\r
                    v-model="swapInAmount"\r
                    type="text"\r
                  />\r
                </div>\r
                <div @click="changeSwap()" class="arrow">\r
                  <svg\r
                    xmlns="http://www.w3.org/2000/svg"\r
                    width="24"\r
                    height="24"\r
                    viewBox="0 0 24 24"\r
                  >\r
                    <path\r
                      d="M16.728 20.644l1.24 1.588c-1.721 1.114-3.766 1.768-5.969 1.768-4.077 0-7.626-2.225-9.524-5.52l-1.693.982 1.09-4.1 4.101 1.089-1.747 1.014c1.553 2.699 4.442 4.535 7.773 4.535 1.736 0 3.353-.502 4.729-1.356zm-13.722-7.52l-.007-.124c0-4.625 3.51-8.433 8.003-8.932l-.002 1.932 3.004-2.996-2.994-3.004-.004 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.986-.278zm18.577 5.243c.896-1.588 1.416-3.414 1.416-5.367 0-4.577-2.797-8.499-6.773-10.156l-.623 1.914c3.173 1.393 5.396 4.561 5.396 8.242 0 1.603-.441 3.097-1.18 4.402l-1.762-.964 1.193 4.072 4.071-1.192-1.738-.951z"\r
                    />\r
                  </svg>\r
                </div>\r
                <div class="for">\r
                  <div class="logo">\r
                    <Proxy v-if="swap == 'MINA/PROXY'" />\r
                    <Mina v-else />\r
                  </div>\r
                  <span style="font-size: 3rem">~{{ expectedReturn }}</span>\r
                </div>\r
              </div>\r
              <button\r
                class="swap-btn"\r
                style="margin-top: 10px"\r
                @click="executeSwap()"\r
              >\r
                <span>Swap</span>\r
              </button>\r
            </div>\r
          </div>\r
          <br />\r
        </div>\r
      </div>\r
    </div>\r
    <Snackbar v-if="showSnackbar" :snack="snack" />\r
  </div>\r
</template>\r
\r
<script>\r
import Loader from "./components/Loader.vue";\r
import Equation from "./components/Equation.vue";\r
\r
import ProxyLabsLogo from "./components/ProxyLabsLogo.vue";\r
import GithubLogo from "./components/GithubLogo.vue";\r
import Snackbar from "./components/Snackbar.vue";\r
import Mina from "./components/Mina.vue";\r
import Proxy from "./components/Proxy.vue";\r
\r
import {\r
  init,\r
  submitSolution,\r
  getState,\r
  swapToken,\r
} from "../dist/snapp/snapp.js";\r
\r
export default {\r
  name: "App",\r
  components: {\r
    Loader,\r
    Equation,\r
    GithubLogo,\r
    ProxyLabsLogo,\r
    Snackbar,\r
    Mina,\r
    Proxy,\r
  },\r
  data() {\r
    return {\r
      swap: "MINA/PROXY",\r
      transactionsAccount1: [],\r
      transactionsAccount2: [],\r
      swapInAmount: 0,\r
      switchAccount: "",\r
      params: [0, 0, 0],\r
      difficulty: 41,\r
      isDeployed: false,\r
      deploying: false,\r
      showHint: false,\r
      beingSubmited: false,\r
      proposedSolution: 0,\r
      atPage: 0,\r
      showSnackbar: false,\r
      snappState: {},\r
      snack: {\r
        type: "failure",\r
        message: "Request failed",\r
      },\r
    };\r
  },\r
  methods: {\r
    changeSwap() {\r
      if (this.swap == "MINA/PROXY") {\r
        this.swap = "PROXY/MINA";\r
      } else {\r
        this.swap = "MINA/PROXY";\r
      }\r
    },\r
    async executeSwap() {\r
      let acc = this.switchAccount == this.snappState.account1.address ? 0 : 1;\r
      let res = await swapToken(\r
        this.swap,\r
        this.swapInAmount * 1000000,\r
        acc,\r
        this.proposedSolution\r
      );\r
      if (res) {\r
        this.setSnackbar(\r
          "success",\r
          \`You successfully swapped \${this.swapInAmount} $\${\r
            this.swap == "MINA/PROXY" ? "MINA" : "PROXY"\r
          } for $\${this.swap == "MINA/PROXY" ? "PROXY" : "MINA"}\`\r
        );\r
\r
        if (acc == 0) {\r
          this.transactionsAccount1.push({\r
            direction: "out",\r
            amount: \`  -\${this.swapInAmount} $\${\r
              this.swap == "MINA/PROXY" ? "MINA" : "PROXY"\r
            }\`,\r
            type: "swap",\r
          });\r
          this.transactionsAccount1.push({\r
            direction: "in",\r
            amount: \`  +\${this.swapInAmount} $\${\r
              this.swap == "MINA/PROXY" ? "PROXY" : "MINA"\r
            }\`,\r
            type: "swap",\r
          });\r
        } else {\r
          this.transactionsAccount2.push({\r
            direction: "out",\r
            amount: \`  -\${this.swapInAmount} $\${\r
              this.swap == "MINA/PROXY" ? "MINA" : "PROXY"\r
            }\`,\r
            type: "swap",\r
          });\r
          this.transactionsAccount2.push({\r
            direction: "in",\r
            amount: \`  +\${this.swapInAmount} $\${\r
              this.swap == "MINA/PROXY" ? "PROXY" : "MINA"\r
            }\`,\r
            type: "swap",\r
          });\r
        }\r
      } else {\r
        this.setSnackbar("failure", "Swapping failed.");\r
      }\r
\r
      await this.updateSnappState();\r
    },\r
    async updateSnappState() {\r
      let state = await getState();\r
\r
      this.snappState = {\r
        account1: state.account1,\r
        account2: state.account2,\r
        snapp: state.snapp,\r
      };\r
    },\r
    setSnackbar(type, msg) {\r
      this.showSnackbar = false;\r
      this.snack.type = type;\r
      this.snack.message = msg;\r
      this.showSnackbar = true;\r
      setTimeout(() => {\r
        this.showSnackbar = false;\r
      }, 3500);\r
    },\r
    async submitSolution() {\r
      this.beingSubmited = true;\r
      let res = await submitSolution(this.proposedSolution);\r
\r
      if (res) {\r
        this.setSnackbar(\r
          "success",\r
          "Congratz! You found one valid solution to the equation. Please proceed"\r
        );\r
      } else {\r
        this.setSnackbar(\r
          "failure",\r
          "Failure. Looks like the provided solution doesn't work!"\r
        );\r
      }\r
      this.beingSubmited = false;\r
\r
      if (res) {\r
        this.next();\r
        await this.updateSnappState();\r
        this.switchAccount = this.snappState.account1.address;\r
      }\r
    },\r
    getEquation() {\r
      let eq = \`\${this.params[0]}x\xB2 - \${this.params[1]}x + \${this.params[2]} = 0\`;\r
      if (this.params[1] != 0 && this.params[2] != 0) {\r
        eq = \`\${this.params[0] == 1 ? "" : this.params[0]}x\xB2 - \${\r
          this.params[1]\r
        }x + \${this.params[2]} = 0\`;\r
      }\r
      if (this.params[1] == 0 && this.params[2] != 0) {\r
        eq = \`\${this.params[0] == 1 ? "" : this.params[0]}x\xB2 + \${\r
          this.params[2]\r
        } = 0\`;\r
      }\r
      if (this.params[1] == 0 && this.params[2] == 0) {\r
        eq = \`\${this.params[0] == 1 ? "" : this.params[0]}x\xB2 = 0\`;\r
      }\r
      if (this.params[1] != 0 && this.params[2] == 0) {\r
        eq = \`\${this.params[0] == 1 ? "" : this.params[0]}x\xB2 - \${\r
          this.params[1]\r
        }x = 0\`;\r
      }\r
      return eq;\r
    },\r
    next() {\r
      this.atPage++;\r
    },\r
    async deploy() {\r
      this.deploying = true;\r
      this.params = await init(this.difficulty);\r
\r
      this.setSnackbar("info", "Contract deployed!");\r
\r
      this.beingSubmited = false;\r
      this.isDeployed = true;\r
      this.deploying = false;\r
    },\r
  },\r
  computed: {\r
    expectedReturn() {\r
      return this.swapInAmount;\r
    },\r
    selectedAccount() {\r
      return this.switchAccount == this.snappState.account1.address ? 0 : 1;\r
    },\r
  },\r
};\r
<\/script>\r
\r
<style>\r
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap");\r
\r
* {\r
  font-family: "Inconsolata", sans-serif;\r
}\r
\r
table {\r
  border-collapse: collapse;\r
  width: 100%;\r
}\r
\r
.swap-input {\r
  border: none;\r
  font-size: 3rem;\r
  width: 90%;\r
  float: right;\r
  text-align: right;\r
}\r
\r
.swapper {\r
  height: 340px;\r
  width: 400px;\r
  margin-left: 100px;\r
  border-radius: 15px;\r
  border: solid 2px black;\r
  background-color: rgb(231, 225, 210);\r
}\r
.swapBoxes {\r
  height: 140px;\r
  margin-left: 5%;\r
  margin-right: 5%;\r
  margin-bottom: 10px;\r
  position: relative;\r
}\r
\r
.give .logo,\r
.for .logo {\r
  position: absolute;\r
  left: -30px;\r
  top: 2px;\r
}\r
\r
.give,\r
.for {\r
  margin-left: 5%;\r
  margin-right: 5%;\r
  height: 60px;\r
  border: solid 2px black;\r
  border-radius: 15px;\r
  background-color: white;\r
  position: relative;\r
  text-align: right;\r
  padding-right: 15px;\r
}\r
\r
.give {\r
  margin-bottom: 10px;\r
}\r
\r
.arrow {\r
  border: 2px solid black;\r
  width: 30px;\r
  height: 30px;\r
  position: static;\r
  z-index: 2;\r
  margin-left: calc(50% - 15px);\r
  position: absolute;\r
  top: calc(70px - 17px);\r
  border-radius: 5px;\r
  left: 0;\r
  padding-top: 2px;\r
  padding-bottom: 0px;\r
  background-color: rgb(255, 255, 255);\r
}\r
\r
.arrow:hover {\r
  scale: 1.03;\r
  cursor: pointer;\r
}\r
.arrow svg {\r
  color: white;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.header {\r
  margin-left: 10%;\r
  margin-right: 10%;\r
  display: flex;\r
  justify-content: space-between;\r
}\r
\r
.logo,\r
.github {\r
  height: 60px;\r
  line-height: 60px;\r
  padding: 4px;\r
  margin-left: 5px;\r
}\r
\r
.github {\r
  margin-top: 10px;\r
  height: 30px;\r
}\r
\r
.swap-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 255, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
\r
.deploy-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 255, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
\r
.continue-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(254, 255, 176);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
\r
.hint-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(255, 208, 176);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
\r
.submit-btn {\r
  width: auto;\r
  height: auto;\r
  padding: 15px;\r
  cursor: pointer;\r
  background-color: rgb(176, 239, 255);\r
  border-radius: 5px;\r
  box-shadow: 4px 4px rgb(121, 121, 121);\r
  margin-top: 20px;\r
}\r
.swap-btn:hover,\r
.deploy-btn:hover,\r
.submit-btn:hover,\r
.hint-btn:hover,\r
.continue-btn:hover {\r
  border: solid black 1px;\r
}\r
\r
.swap-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;\r
}\r
\r
.submit-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;\r
}\r
\r
.hint-btn span {\r
  font-weight: 500;\r
  font-size: 1.2rem;\r
  text-transform: uppercase;\r
}\r
\r
.deploy-btn span,\r
.continue-btn span {\r
  font-weight: 500;\r
  font-size: 1.8rem;\r
  text-transform: uppercase;\r
}\r
\r
.title {\r
  font-size: 3rem;\r
  font-weight: 400;\r
  margin-bottom: 10px;\r
  margin-top: 10px;\r
}\r
\r
.sub {\r
  margin-top: 20px;\r
  font-size: 1.2rem;\r
  /*   border-radius: 5px;\r
  padding: 5px;\r
  background-color: rgb(214, 214, 214); */\r
}\r
\r
.sub-desc {\r
  margin-top: 25px;\r
  margin-left: 20%;\r
  margin-right: 20%;\r
  font-size: 1.2rem;\r
  border-radius: 5px;\r
  padding: 5px;\r
  background-color: rgb(214, 214, 214);\r
}\r
\r
.submission {\r
  font-size: 2rem;\r
  width: 50px;\r
  margin-top: 6px;\r
  text-align: center;\r
}\r
\r
.wrapper {\r
  font-family: "Inconsolata", sans-serif;\r
  -webkit-font-smoothing: antialiased;\r
  -moz-osx-font-smoothing: grayscale;\r
  text-align: center;\r
  color: #2c3e50;\r
  margin-top: 5px;\r
}\r
\r
.slider {\r
  -webkit-appearance: none;\r
  width: 300px;\r
  height: 15px;\r
  border-radius: 5px;\r
  background: #d3d3d3;\r
  outline: none;\r
  opacity: 0.7;\r
  -webkit-transition: 0.2s;\r
  transition: opacity 0.2s;\r
}\r
\r
.slider::-webkit-slider-thumb {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  width: 25px;\r
  height: 25px;\r
  border-radius: 50%;\r
  background: #02d6cc;\r
  cursor: pointer;\r
}\r
\r
.slider::-moz-range-thumb {\r
  width: 25px;\r
  height: 25px;\r
  border-radius: 50%;\r
  background: #02d6cc;\r
  cursor: pointer;\r
}\r
</style>\r
`,a.render||(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0,o&&(a.functional=!0)),a._scopeId=e;{let v;if(r&&(v=s?function(h){r.call(this,d(h,this.$root.$options.shadowRoot))}:function(h){r.call(this,p(h))}),v!==void 0)if(a.functional){let h=a.render;a.render=function(E,w){return v.call(w),h(E,w)}}else{let h=a.beforeCreate;a.beforeCreate=h?[].concat(h,v):[v]}}return a}function Yr(){let t=Yr.styles||(Yr.styles={}),r=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,o){if(document.querySelector('style[data-vue-ssr-id~="'+e+'"]'))return;let i=r?o.media||"default":e,s=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!s.ids.includes(e)){let p=o.source,l=s.ids.length;if(s.ids.push(e),r&&(s.element=s.element||document.querySelector("style[data-group="+i+"]")),!s.element){let d=document.head||document.getElementsByTagName("head")[0],a=s.element=document.createElement("style");a.type="text/css",o.media&&a.setAttribute("media",o.media),r&&(a.setAttribute("data-group",i),a.setAttribute("data-next-index","0")),d.appendChild(a)}if(r&&(l=parseInt(s.element.getAttribute("data-next-index")),s.element.setAttribute("data-next-index",l+1)),s.element.styleSheet)s.parts.push(p),s.element.styleSheet.cssText=s.parts.filter(Boolean).join(`
`);else{let d=document.createTextNode(p),a=s.element.childNodes;a[l]&&s.element.removeChild(a[l]),a.length?s.element.insertBefore(d,a[l]):s.element.appendChild(d)}}}}var I2=$2({render:vi,staticRenderFns:M2},F2,O2,N2,H2,k2,!1,Yr,void 0,void 0),Ai=I2;Zr.config.productionTip=!1;new Zr({render:t=>t(Ai)}).$mount("#app");
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
