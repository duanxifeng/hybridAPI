!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hybridAPI=t():e.hybridAPI=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=window.navigator.userAgent;if(/eleme/i.test(i)){var r=i.match(/Eleme\/([0-9]+)\.([0-9]+)/i);o=100*Number(r[1])+Number(r[2])}var a=o<509,c=function(e){try{return JSON.parse(e)||{}}catch(e){return!1}},u=function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},s=function(e){var t=e instanceof Object?Object.prototype.toString.call(e):"";return"[object Function]"===t||"[object GeneratorFunction]"===t},l=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var o,i=t[t.length-1];i&&i.isReject&&(o=t.pop());var r=window.WebViewJavascriptBridge,c=a?"WebViewJavascriptBridgeInjectFinishedReady":"WebViewJavascriptBridgeReady",u=function(){r=window.WebViewJavascriptBridge;try{r.init()}catch(e){}setTimeout(function(){try{window.EJsBridge&&window.EJsBridge[e]?window.EJsBridge[e].apply(window.EJsBridge,t):window.JsBridge&&window.JsBridge[e]?window.JsBridge[e].apply(window.JsBridge,t):r&&r.callHandler.apply(r,[e].concat(t))}catch(e){o&&o(e)}},0)};window.EJsBridge||window.JsBridge||r?u():document.addEventListener(c,u)},d=function(e,t){for(var n=[],o=arguments.length-2;o-- >0;)n[o]=arguments[o+2];t.isReject=!0,l.apply(void 0,[e].concat(n,[t]))},f=Object.create(null),h=function(e,t){document[e+"EventListener"](t,f[t],!1)},v=function(e){var t=[];e.forEach(function(e){var n=e.eventName,o=function(){setTimeout(e.action,0)};"function"==typeof f[n]&&h("remove",n),f[n]=o,h("add",n),t.push({title:e.text,iconHash:e.iconHash,overflow:!!e.overflow,eventName:n})}),l("showRightBarItems",t)},m=function(){l("removeRightBarItems"),Object.keys(f).forEach(function(e){h("remove",e),delete f[e]})},p=Object.create(null),g=function(e,t){document[e+"EventListener"](t,p[t],!1)},w=function(e){var t=e.eventName,n=e.action;"function"==typeof n&&("function"==typeof p[t]&&g("remove",t),p[t]=function(e){setTimeout(function(){n(e&&e.detail)},0)},g("add",t),l("hookGoback",t))},y=function(){l("hookGoback",null),Object.keys(p).forEach(function(e){g("remove",e),delete p[e]})},b=function(e){var t=e.eventName,n=e.action,o=e.merchantId,i=e.merchantOrderNo,r=e.xShard;t=t||"NATIVE_PAY_CALLBACk",document.addEventListener(t,function(e){var t=e.detail,o={};o.merchantId=t.merchant_id,o.merchantOrderNo=t.merchant_order_no,o.status=t.status,n(o)},!1);var a="eleme://pay?merchant_id="+o+"&merchant_order_no="+i+"&event_name="+t;r&&(a+="&x_shard="+r),location.href=a},_=~~document.querySelector("html").getAttribute("data-dpr")||1,B=window.devicePixelRatio||1,k=function(e){return void 0===e&&(e=0),~~(e*_/B)},E=function(e){return void 0===e&&(e={}),{status_bar:k(e.status_bar),nav_bar:k(e.nav_bar)}},x=function(e){if(!s(e))return new Promise(function(e,t){try{d("defaultHeightOfTopBar",t,function(t){e(E(t))})}catch(e){t(e)}});l("defaultHeightOfTopBar",function(t){e(E(t))})},j=function(e,t){if(!s(t))return new Promise(function(t,n){try{d("contactList",n,e,function(e){t(e)})}catch(e){n(e)}});l("contactList",e,function(e){t(e)})},P=n(1);n.n(P);if(!a){var O=["getGlobalGeohash","showShareButton","selectedHongbao","selectHongbao","selectCoupon","getLocateStatus","setTitle","closePage","getUserID","showRightBarItems","removeRightBarItems","hookGoback","setNavStyle","shouldShowNewRetailRedBadge","networkType","exitConfirm","checkPackages","openPackage","defaultHeightOfTopBar","contactList"];P.inject("EJsBridge",O)}var S={getGlobalGeohash:function(e){var t=a?[""]:[];if(!s(e))return new Promise(function(e,n){t.push(function(t){e(c(t)||t)});try{d.apply(void 0,["getGlobalGeohash",n].concat(t))}catch(e){n(e)}});t.push(function(t){e(c(t)||t)}),l.apply(void 0,["getGlobalGeohash"].concat(t))},share:function(e){if(a){var t=["0","1","2"],n=t.map(function(t){return"eleme://share?"+u({type:t,title:e.title,text:"2"===t?e.weibo||e.text:e.text,url:e.url,image_url:e.image_url})});l("showShareButton",{weixin_session:n[0],weixin_timeline:n[1],weibo:n[2]})}else document.head.insertAdjacentHTML("afterbegin",'<meta name="eleme-share">\n        <meta name="eleme-share:title" content="'+e.title+'">\n        <meta name="eleme-share:description" content="'+e.text+'">\n        <meta name="eleme-share:image" content="'+e.image_url+'">')},selectHongbao:function(e){l(a?"selectedHongbao":"selectHongbao",e,a?function(){}:null)},selectCoupon:function(e){l("selectCoupon",""+e)},getLocateStatus:function(e){if(!s(e))return new Promise(function(e,t){try{d("getLocateStatus",t,function(t){e(t)})}catch(e){t(e)}});l("getLocateStatus",e)},networkType:function(e){if(!s(e))return new Promise(function(e,t){try{d("networkType",t,function(e){resulve(e)})}catch(e){t(e)}});l("networkType",e)},setTitle:function(e){l("setTitle",e)},closePage:function(){l("closePage")},exitConfirm:function(e){l("exitConfirm",e)},getUserID:function(e){if(!s(e))return new Promise(function(e,t){try{d("getUserID",t,function(t){e(t)})}catch(e){t(e)}});l("getUserID",e)},sharePanel:function(e){var t={weixin:{key:"weixin_session",value:0},weixin_timeline:{key:"weixin_timeline",value:1},weibo:{key:"weibo",value:2},qq:{key:"qq_session",value:4},qzone:{key:"qzone_session",value:5}},n=e.url+(~e.url.indexOf("#")||~e.url.indexOf("?")?"&":"?"),o=e.targets.reduce(function(o,i){return o[t[i].key]="eleme://share?"+u({type:t[i].value,title:e.title,text:2===t[i].value?e.title+", "+e.text+"。分享链接："+n+"type="+i:e.text,url:n+"type="+i,image_url:e.image_url,image_only:e.image_only?1:0}),o},{});location.href="eleme://sns_share?source="+e.source+"&"+u(o)},checkPackages:function(e,t){if(!s(t))return new Promise(function(t,n){try{d("checkPackages",e,n,function(e){resulve(e)})}catch(e){n(e)}});l("checkPackages",e,t)},openPackage:function(e){l("openPackage",e)},setRightMenu:v,clearRightMenu:m,hookBack:w,cancelHookBack:y,setNavStyle:function(e){var t=e.navType,n=e.navColor,o=e.navTextColor;l("setNavStyle",{navType:String(t),navColor:n,navTextColor:o})},shouldShowNewRetailRedBadge:function(e){if(!s(e))return new Promise(function(e,t){try{d("shouldShowNewRetailRedBadge",t,function(t){e(t)})}catch(e){t(e)}});l("shouldShowNewRetailRedBadge",e)},pay:b,getTopBarHeight:x,contactList:j};S.default=S,t.default=S},function(e,t,n){!function(e,n){n(t)}(0,function(e){"use strict";var t=function(){var e=navigator.userAgent||navigator.vendor;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"Unknown"},n={},o="elmscheme",i="__ELM_QUEUE_MESSAGE__",r=t(),a={},c=void 0,u=1,s=[],l=function(e,t,a){if(t){var l="cb_"+u+++"_"+(new Date).getTime();n[l]=t,e.callbackId=l}s.push(e);var d=JSON.stringify(s);"iOS"===r?c.src=o+"://"+i:(c.src="elemejsbridge://return/"+a+"/"+encodeURIComponent(d),s=[])},d=function(){var e=JSON.stringify(s);return s=[],e},f=function(e,t){a[e]=t},h=function(e){return a[e]},v=function(e,t,n){l({handlerName:e,data:t},n,"_handler")},m=function(e,t,n,o){var i={obj:e,method:t};void 0!==n&&null!==n&&(i.data=n),l(i,o,"_interface")},p=function(e){var t=JSON.parse(e),o=void 0;if(t.responseId)o=n[t.responseId],"function"==typeof o&&o(t.responseData||t.data),delete n[t.responseId];else{if(t.callbackId){var i=t.callbackId;o=function(e){l({responseId:i,data:e},null,"_response")}}var r=WebViewJavascriptBridge._messageHandler;t.handlerName&&(r=h(t.handlerName));try{r(t.data,o)}catch(e){"undefined"!=typeof console&&console.log("WebViewJavascriptBridge: WARNING: javascript handler threw.",t,e)}}},g=[],w=function(e){g?g.push(e):p(e)},y=!1,b=function(e){if(y)throw new Error("WebViewJavascriptBridge.init called twice");if(window.WebViewJavascriptBridge&&(window.WebViewJavascriptBridge._messageHandler=e,y=!0,g)){for(var t=0;t<g.length;t++)p(g[t]);g=null}},_=function(e,t){var n=window[e]={},o=function(t){t=t.replace(new RegExp(":","g"),""),n[t]=function(){var n=arguments.length;if(n>2)throw new Error("arguments Error");var o=arguments[0]||null,i=arguments[1]||null;1===n&&"function"==typeof o&&(i=o,o=null),m(e,t,o,i)}};(t||[]).forEach(o)},B=function(){var e=document.createEvent("Events");e.initEvent("WebViewJavascriptBridgeInjectFinishedReady",!0,!0),document.dispatchEvent(e)},k=function(){};k.init=b,k.inject=_,k.injectEvent=B,k.registerHandler=f,k.callHandler=v;var E=t();"iOS"===E?(k._fetchQueue=d,k._handleMessageFromObjC=w):"Android"===E?k._handleMessageFromNative=w:console.warn("Error: "+E+" is not supported."),window.WebViewJavascriptBridge=k,function(){c=document.createElement("iframe"),c.style.display="none","iOS"===r&&(c.src=o+"://"+i),document.documentElement.appendChild(c)}(),function(e){var t=document.createEvent("Events");t.initEvent("WebViewJavascriptBridgeReady",!0,!0),t.bridge=e,document.dispatchEvent(t)}(k),b(),e.inject=_,e.registerHandler=f,e.callHandler=v,e.callObjectMethod=m,Object.defineProperty(e,"__esModule",{value:!0})})}]).default});