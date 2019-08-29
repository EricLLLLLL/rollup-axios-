"use strict";function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}Object.defineProperty(exports,"__esModule",{value:!0});var runtime_1=createCommonjsModule(function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=function(e,t,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=c(e,t,r);if("normal"===u.type){if(n=r.done?h:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",l="suspendedYield",p="executing",h="completed",d={};function m(){}function g(){}function y(){}var v={};v[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(_([])));x&&x!==r&&n.call(x,i)&&(v=x);var b=y.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function C(e){var t;this._invoke=function(r,o){function i(){return new Promise(function(t,i){!function t(r,o,i,a){var s=c(e[r],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(f).then(function(e){u.value=e,i(u)},function(e){return t("throw",e,i,a)})}a(s.arg)}(r,o,t,i)})}return t=t?t.then(i,i):i()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=c(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function _(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:t,done:!0}}return g.prototype=b.constructor=y,y.constructor=g,y[s]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(C.prototype),C.prototype[a]=function(){return this},e.AsyncIterator=C,e.async=function(t,r,n,o){var i=new C(u(t,r,n,o));return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}),regenerator=runtime_1,bind=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},isBuffer=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},toString=Object.prototype.toString;function isArray(e){return"[object Array]"===toString.call(e)}function isArrayBuffer(e){return"[object ArrayBuffer]"===toString.call(e)}function isFormData(e){return"undefined"!=typeof FormData&&e instanceof FormData}function isArrayBufferView(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function isString(e){return"string"==typeof e}function isNumber(e){return"number"==typeof e}function isUndefined(e){return void 0===e}function isObject(e){return null!==e&&"object"==typeof e}function isDate(e){return"[object Date]"===toString.call(e)}function isFile(e){return"[object File]"===toString.call(e)}function isBlob(e){return"[object Blob]"===toString.call(e)}function isFunction(e){return"[object Function]"===toString.call(e)}function isStream(e){return isObject(e)&&isFunction(e.pipe)}function isURLSearchParams(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function trim(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function isStandardBrowserEnv(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function forEach(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),isArray(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function merge(){var e={};function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=merge(e[r],t):e[r]=t}for(var r=0,n=arguments.length;r<n;r++)forEach(arguments[r],t);return e}function deepMerge(){var e={};function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=deepMerge(e[r],t):e[r]="object"==typeof t?deepMerge({},t):t}for(var r=0,n=arguments.length;r<n;r++)forEach(arguments[r],t);return e}function extend(e,t,r){return forEach(t,function(t,n){e[n]=r&&"function"==typeof t?bind(t,r):t}),e}var utils={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,deepMerge:deepMerge,extend:extend,trim:trim};function encode(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(utils.isURLSearchParams(t))n=t.toString();else{var o=[];utils.forEach(t,function(e,t){null!=e&&(utils.isArray(e)?t+="[]":e=[e],utils.forEach(e,function(e){utils.isDate(e)?e=e.toISOString():utils.isObject(e)&&(e=JSON.stringify(e)),o.push(encode(t)+"="+encode(e))}))}),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function InterceptorManager(){this.handlers=[]}InterceptorManager.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},InterceptorManager.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},InterceptorManager.prototype.forEach=function(e){utils.forEach(this.handlers,function(t){null!==t&&e(t)})};var InterceptorManager_1=InterceptorManager,transformData=function(e,t,r){return utils.forEach(r,function(r){e=r(e,t)}),e},isCancel=function(e){return!(!e||!e.__CANCEL__)},normalizeHeaderName=function(e,t){utils.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})},enhanceError=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},createError=function(e,t,r,n,o){var i=new Error(e);return enhanceError(i,t,r,n,o)},settle=function(e,t,r){var n=r.config.validateStatus;!n||n(r.status)?e(r):t(createError("Request failed with status code "+r.status,r.config,null,r.request,r))},ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders=function(e){var t,r,n,o={};return e?(utils.forEach(e.split("\n"),function(e){if(n=e.indexOf(":"),t=utils.trim(e.substr(0,n)).toLowerCase(),r=utils.trim(e.substr(n+1)),t){if(o[t]&&ignoreDuplicateOf.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}}),o):o},isURLSameOrigin=utils.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=utils.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},cookies=utils.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),utils.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),utils.isString(n)&&a.push("path="+n),utils.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},xhr=function(e){return new Promise(function(t,r){var n=e.data,o=e.headers;utils.isFormData(n)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password||"";o.Authorization="Basic "+btoa(a+":"+s)}if(i.open(e.method.toUpperCase(),buildURL(e.url,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in i?parseHeaders(i.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:n,config:e,request:i};settle(t,r,o),i=null}},i.onabort=function(){i&&(r(createError("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){r(createError("Network Error",e,null,i)),i=null},i.ontimeout=function(){r(createError("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",i)),i=null},utils.isStandardBrowserEnv()){var u=cookies,c=(e.withCredentials||isURLSameOrigin(e.url))&&e.xsrfCookieName?u.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in i&&utils.forEach(o,function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)}),e.withCredentials&&(i.withCredentials=!0),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){i&&(i.abort(),r(e),i=null)}),void 0===n&&(n=null),i.send(n)})},DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(e,t){!utils.isUndefined(e)&&utils.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function getDefaultAdapter(){var e;return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?e=xhr:"undefined"!=typeof XMLHttpRequest&&(e=xhr),e}var defaults={adapter:getDefaultAdapter(),transformRequest:[function(e,t){return normalizeHeaderName(t,"Accept"),normalizeHeaderName(t,"Content-Type"),utils.isFormData(e)||utils.isArrayBuffer(e)||utils.isBuffer(e)||utils.isStream(e)||utils.isFile(e)||utils.isBlob(e)?e:utils.isArrayBufferView(e)?e.buffer:utils.isURLSearchParams(e)?(setContentTypeIfUnset(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):utils.isObject(e)?(setContentTypeIfUnset(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};utils.forEach(["delete","get","head"],function(e){defaults.headers[e]={}}),utils.forEach(["post","put","patch"],function(e){defaults.headers[e]=utils.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults,isAbsoluteURL=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},combineURLs=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e};function throwIfCancellationRequested(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var dispatchRequest=function(e){return throwIfCancellationRequested(e),e.baseURL&&!isAbsoluteURL(e.url)&&(e.url=combineURLs(e.baseURL,e.url)),e.headers=e.headers||{},e.data=transformData(e.data,e.headers,e.transformRequest),e.headers=utils.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),utils.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||defaults_1.adapter)(e).then(function(t){return throwIfCancellationRequested(e),t.data=transformData(t.data,t.headers,e.transformResponse),t},function(t){return isCancel(t)||(throwIfCancellationRequested(e),t&&t.response&&(t.response.data=transformData(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},mergeConfig=function(e,t){t=t||{};var r={};return utils.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(r[e]=t[e])}),utils.forEach(["headers","auth","proxy"],function(n){utils.isObject(t[n])?r[n]=utils.deepMerge(e[n],t[n]):void 0!==t[n]?r[n]=t[n]:utils.isObject(e[n])?r[n]=utils.deepMerge(e[n]):void 0!==e[n]&&(r[n]=e[n])}),utils.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r};function Axios(e){this.defaults=e,this.interceptors={request:new InterceptorManager_1,response:new InterceptorManager_1}}Axios.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=mergeConfig(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[dispatchRequest,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},Axios.prototype.getUri=function(e){return e=mergeConfig(this.defaults,e),buildURL(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},utils.forEach(["delete","get","head","options"],function(e){Axios.prototype[e]=function(t,r){return this.request(utils.merge(r||{},{method:e,url:t}))}}),utils.forEach(["post","put","patch"],function(e){Axios.prototype[e]=function(t,r,n){return this.request(utils.merge(n||{},{method:e,url:t,data:r}))}});var Axios_1=Axios;function Cancel(e){this.message=e}Cancel.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Cancel.prototype.__CANCEL__=!0;var Cancel_1=Cancel;function CancelToken(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new Cancel_1(e),t(r.reason))})}CancelToken.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},CancelToken.source=function(){var e;return{token:new CancelToken(function(t){e=t}),cancel:e}};var CancelToken_1=CancelToken,spread=function(e){return function(t){return e.apply(null,t)}};function createInstance(e){var t=new Axios_1(e),r=bind(Axios_1.prototype.request,t);return utils.extend(r,Axios_1.prototype,t),utils.extend(r,t),r}var axios=createInstance(defaults_1);axios.Axios=Axios_1,axios.create=function(e){return createInstance(mergeConfig(axios.defaults,e))},axios.Cancel=Cancel_1,axios.CancelToken=CancelToken_1,axios.isCancel=isCancel,axios.all=function(e){return Promise.all(e)},axios.spread=spread;var axios_1=axios,default_1=axios;axios_1.default=default_1;var axios$1=axios_1,__awaiter=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,s)}u((n=n.apply(e,t||[])).next())})};function testRollup(){return __awaiter(this,void 0,void 0,regenerator.mark(function e(){return regenerator.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("test"),e.next=3,axios$1.get("");case 3:case"end":return e.stop()}},e)}))}exports.default=testRollup;
