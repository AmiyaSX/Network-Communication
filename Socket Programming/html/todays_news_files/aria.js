/*!
 * aria v4.5.4
 * (c) Licensed under the MIT license.  
 * Copyright 2022 All Rights Reserved
 * http://license.cnwza.cn 
 * elease time : Mon Jul 11 2022 16:17:11 GMT+0800 (中国标准时间)
 */
var mainversion=4;!function(){var i={9378:function(e,t,i){var o=i(6056),n=i(641),a=i(2807);n.keys().status;function s(e,t){if(!e||!t)return!1;if("undefined"==typeof(t=t.keyCode?t:{keyCode:t}).status&&(t.status=!0),t.status&&!o.status)return!1;var i=e.keyCode||e.which||e.charCode;if(i){var n=a.getDisableShortKeys();if(!(0<n.length&&-1<[].indexOf.call(n,i)))if("number"!=typeof t.keyCode||t.keyCode==i)if(!("object"==typeof t.keyCode&&[].indexOf.call(t.keyCode,i)<0))return n=e.ctrlKey,i=e.shfitKey,e=e.altKey,!(t.ctrlKey&&!n)&&(!(t.shfitKey&&!i)&&!(t.altKey&&!e))}}var l={wakeup:{shiftKey:!1,ctrlKey:!0,altKey:!1,status:!1,keyCode:192},wakupConfig:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:76},dialogClose:{shiftKey:!1,ctrlKey:!1,altKey:!1,keyCode:27},changeRegion:{next:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:[34,40]},pre:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:[33,38]}},opVoice:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:86},vocierate:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:75},mouseb:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:77},mouseten:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:78},reset:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:67},readsrc:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!1,keyCode:82},bigsrc:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:66},readtype:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:70},exitservice:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:69},changeTheme:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:84},fontTob:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:[187,107]},fontTos:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:[189,109]},help:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:191},showImg:{shiftKey:!1,ctrlKey:!1,altKey:!0,keyCode:[57,105]},showQrcode:{shiftKey:!1,ctrlKey:!1,altKey:!0,keyCode:[48,96]},openOldFixed:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:79}};e.exports={eventKeyCode:function(e){return e.keyCode||e.which||e.charCode},checkKeyCode:s,keyCodeSettings:l,toWakeUpRead:function(e){var t=e.altKey,i=e.ctrlKey,n=e.shfitKey,o=e.keyCode||e.which||e.charCode,r=a.getDisableShortKeys();if(!(0<r.length&&-1<[].indexOf.call(r,o)))return t&&(48<=o&&o<=57||96<=o&&o<=105)?!i&&!n||void 0:!!s(e,l.readsrc)}}},641:function(e,t,i){var r=i(2606),n={val:function(e,t){return t=t||location.search.substring(1),new RegExp("(^|/?|&)"+e+"=([^&]*)(/s|&|$)","i").test(t)?RegExp.$2:""}};function s(e,t){var i={success:!1},t=(i.road=e.substr(0,t+1),"undefined"!=typeof ariaAppid?i.appid=ariaAppid:i.appid=n.val("appid",e),n.val("callback",e)),t=(t&&0<t.length&&(i.callback=t),n.val("initcallback",e));return t&&0<t.length&&(i.initcallback=t),i.success=!0,i}function l(){if(window.ariaAppId&&window.ariaJsUrl)return(o=window.ariaJsUrl.indexOf("/aria.js"))<=0&&(o=window.ariaJsUrl.indexOf("/_aria.js")),{appid:window.ariaAppId,road:window.ariaJsUrl.substr(0,o+1),success:!0};var e=document.scripts,t="";if(window.isAriaDev)t="ariaDev.";else{var t="aria.",i=document.getElementById("ariascripts");if(null!=i)return(o=i.src.indexOf("/"+t))<=0&&(o=i.src.indexOf("/_"+t)),s(i.src,o)}for(var n=0;n<e.length;n++)try{var o,r=e[n];if((o=(o=r.src.indexOf("/"+t))<=0?r.src.indexOf("/_"+t):o)<=0&&(o=r.src.indexOf("/ariaEdit.js")),null!==r.src&&-1<o)return r.id="ariascripts",s(r.src,o)}catch(a){}return{success:!1}}var c="aria",o=(window.isAriaDev&&(c="ariaDev"),null);var a={en:"welcome {0},Blind users use operation intelligent guidance, press the shortcut key Ctrl + Alt + R; To read the detailed operation instructions, press the shortcut key Ctrl + Alt + question mark","zh-CN":"欢迎进入 {0},盲人用户使用操作智能引导，请按快捷键Ctrl+Alt+R；阅读详细操作说明请按快捷键Ctrl+Alt+问号键。",mobileen:"Link, barrier free mode, screen reading software service channel","mobilezh-CN":"链接，无障碍模式读屏软件服务通道。"};function u(){for(var e,t=document.head.querySelectorAll("meta[http-equiv]"),i=0;i<t.length;i++){var n=t[i],o=n.getAttribute("http-equiv");if(!o&&"content-language"==o.toLocaleLowerCase()){e=n.getAttribute("content");break}}return e=-1<(e=e||"zh-CN").indexOf("en")?"en":"zh-CN",e=r.isMobile()?"mobile"+e:e}e.exports={keys:function(){var e=l().appid,t=(window.ariaAppId=e,function(){return c+"/"+e}),i=function(){return t()+"/runtime/settings"},n=function(){return t()+"/data/settings"},o=function(){return t()+"/runtime"},r=function(){return t()+"/data"},a=c+"/userSettings";return{base:c,status:c+"/status",corsCss:c+"/corsCss",userSettings:{root:a,defaultTheme:a+"/defaultTheme",scale:a+"/scale",ariaPointerRead:a+"/ariaPointerRead",bigpoint:a+"/bigpoint",leftfixed:a+"/leftfixed",topfixed:a+"/fixed",readtype:a+"/readtype",readsrc:a+"/readsrc",checkHasOldFixed:a+"/checkHasOldFixed",voice:{root:a+"/voice",enable:a+"/voice/enable",rate:a+"/voice/rate"},mousemode:a+"/mousemode",mouseten:a+"/mouseten",py:a+"/py",big5:a+"/big5",bigsrc:a+"/bigsrc",canRead:a+"/canRead",brightness:a+"/brightness",contrast:a+"/contrast",grayscale:a+"/grayscale"},road:t()+"/road",root:t(),runtime:{root:o(),serviceUrl:o()+"/serviceUrl",fileUrl:o()+"/fileUrl",security:o()+"/security",appid:o()+"/appid",callback:o()+"/callback",settings:{root:i(),highlight:{root:i()+"/highlight",enable:i()+"/highlight/enable",rate:i()+"/highlight/rate",mode:i()+"/highlight/mode"},voice:{root:i()+"/voice",enable:i()+"/voice/enable",maxRate:i()+"/voice/maxRate",minRate:i()+"/voice/minRate",rate:i()+"/voice/rate"},curregion:{id:i()+"/curregion/id"},golabSkipScale:i()+"/golabSkipScale",golabSkipAll:i()+"/golabSkipAll",golabSkipTheme:i()+"/golabSkipTheme",golabFocus:i()+"/golabFocus",golabRegion1:i()+"/golabRegion1",golabRegion2:i()+"/golabRegion2",golabRegion3:i()+"/golabRegion3",golabRegion4:i()+"/golabRegion4",golabReplaceBg:i()+"/golabReplaceBg",tellerMode:i()+"/tellerMode",defaultLanguage:i()+"/defaultLanguage",shortCutIcon:i()+"/shortCutIcon",css:i()+"/css",closeShortIcon:i()+"/closeShortIcon",bodyfont:i()+"/bodyfont",reticle:i()+"/reticle",spacing:i()+"/spacing",padding:i()+"/padding",maxZoom:i()+"/maxZoom",minZoom:i()+"/minZoom",focusTheme:i()+"/focusTheme",useOldFixed:i()+"/useOldFixed",oldFixedCss:i()+"/oldFixedCss",defaultTheme:i()+"/defaultTheme",scale:i()+"/scale",golabFixedCss:i()+"/golabFixedCss",golabCss:i()+"/golabCss",iconType:i()+"/iconType",pageDesc:i()+"/pageDesc",mobileToolPosition:i()+"/mobileToolPosition",mobileToolSelectedColor:i()+"/mobileToolSelectedColor",mobileCss:i()+"/mobileCss",useOldFixedInMobile:i()+"/useOldFixedInMobile",wapOldFixedUrl:n()+"/wapOldFixedUrl",pcOldFixedUrl:n()+"/pcOldFixedUrl",skipAutoFix:n()+"/skipAutoFix",showFixBtnInToolBar:n()+"/showFixBtnInToolBar",useAutoFixBase:n()+"/useAutoFixBase",wapUseAutoFixBase:n()+"/wapUseAutoFixBase",wapUseConfigPage:n()+"/wapUseConfigPage",wapChangeViewPort:n()+"/wapChangeViewPort",elementFilter:n()+"/elementFilter"}},data:{root:r(),serviceVersion:r()+"/serviceVersion",languages:r()+"/languages",themes:r()+"/theme",golbalElems:r()+"/golbalElems",roles:r()+"/roles",conf:{root:r()+"/conf",region:r()+"/conf/region"},settings:{root:n(),enable:n()+"/enable",topfixed:n()+"/fixed",highlight:{root:n()+"/highlight",enable:n()+"/highlight/enable",rate:n()+"/highlight/rate",mode:n()+"/highlight/mode"},voice:{root:n()+"/voice",enable:n()+"/voice/enable",rate:n()+"/voice/rate"},tellerMode:n()+"/tellerMode",defaultTheme:n()+"/defaultTheme",defaultLanguage:n()+"/defaultLanguage",shortCutIcon:n()+"/shortCutIcon",scale:n()+"/scale",golabFixedCss:n()+"/golabFixedCss",golabCss:n()+"/golabCss",iconType:n()+"/iconType",spacing:n()+"/spacing"}}}},getAppid:l,queryString:n,AppIdChangeAddListen:function(e){o=setInterval(function(){appid=l().appid,window.ariaAppId!=appid&&e&&"function"==typeof e&&(window.ariaAppId=appid,e())},1500)},AppIdChangeRemoveListen:function(){clearInterval(o),o=null},addWelcomeContent:function(){var e,t=u();(t=a[t])&&(t=t.replace("{0}",document.title),(e=document.querySelector("#ariaTipText"))||((e=document.createElement("a")).id="ariaTipText",e.setAttribute("role","pagedescription"),e.setAttribute("aria-label",t),e.setAttribute("aria-atomic","true"),e.setAttribute("href","javascript:void(0)"),e.style.width="1px",e.style.height="1px",r.isMobile()&&e.setAttribute("onclick","aria.wzaStart();"),e.innerHTML="<img src style='width:1px !important;height:1px !important;position:absolute;top:0;'>",document.body.insertBefore(e,document.body.firstElementChild)))},welcomeContent:a,getLanguageName:u}},6056:function(e,t,i){var n=i(5086),o="aria",i=(window.isAriaDev&&(o="ariaDev"),{status:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"Status"))&&"undefined"!=t&&JSON.parse(t);n.setCookie(o+"Status",e)},get bigsrc(){var e=n.getCookie(o+"Bigsrc");if(void 0!==e&&"undefined"!=e)return JSON.parse(e)},set bigsrc(e){n.setCookie(o+"Bigsrc",e)},get defaultTheme(){return n.getCookie(o+"DefaultTheme")},set defaultTheme(e){n.setCookie(o+"DefaultTheme",e)},get fixed(){var e=n.getCookie(o+"Fixed");if(void 0!==e&&"undefined"!=e)return JSON.parse(e)},set fixed(e){n.setCookie(o+"Fixed",e)},get mousemode(){var e=n.getCookie(o+"Mousemode");if(void 0!==e&&"undefined"!=e)return JSON.parse(e)},set mousemode(e){n.setCookie(o+"Mousemode",e)},get mouseten(){var e=n.getCookie(o+"Mouseten");if(void 0!==e&&"undefined"!=e)return JSON.parse(e)},set mouseten(e){n.setCookie(o+"Mouseten",e)},get oldFixedStatus(){var e=n.getCookie(o+"oldFixedStatus");if(void 0!==e&&"undefined"!=e)return JSON.parse(e)},set oldFixedStatus(e){n.setCookie(o+"oldFixedStatus",e)},get scale(){var e=n.getCookie(o+"Scale");return void 0!==e&&"undefined"!=e?JSON.parse(e):1},set scale(e){n.setCookie(o+"Scale",e)},get readtype(){var e=n.getCookie(o+"Readtype");if(void 0!==e&&"undefined"!=e)return JSON.parse(e)},set readtype(e){n.setCookie(o+"Readtype",e)},theme:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"theme"))&&"undefined"!=t?JSON.parse(t):0;n.setCookie(o+"theme",e)},fontScale:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"fontScale"))&&"undefined"!=t?JSON.parse(t):1;n.setCookie(o+"fontScale",e)},wapChangeViewPort:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"wapChangeViewPort"))&&"undefined"!=t&&JSON.parse(t);n.setCookie(o+"wapChangeViewPort",e)},ariaBtnPosition:function(e){var t;if(!e)return void 0!==(t=n.getCookie(o+"ariaBtnPosition"))&&"undefined"!=t?JSON.parse(t):void 0;n.setCookie(o+"ariaBtnPosition",e)},ariaMobileUseType:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"ariaMobileUseType"))&&"undefined"!=t?JSON.parse(t):0;n.setCookie(o+"ariaMobileUseType",e)},afProp:function(e,t){var i;if(void 0===t)return void 0!==(i=n.getCookie(o+e))&&"undefined"!=i?JSON.parse(i):100;n.setCookie(o+e,t)},brightness:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"brightness"))&&"undefined"!=t?JSON.parse(t):100;n.setCookie(o+"brightness",e)},contrast:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"contrast"))&&"undefined"!=t?JSON.parse(t):100;n.setCookie(o+"contrast",e)},grayscale:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"grayscale"))&&"undefined"!=t?JSON.parse(t):0;n.setCookie(o+"grayscale",e)},sepia:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"sepia"))&&"undefined"!=t?JSON.parse(t):0;n.setCookie(o+"sepia",e)},mode:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"thememode"))&&"undefined"!=t?JSON.parse(t):1;n.setCookie(o+"thememode",e)},customMode:function(e){var t;if(void 0===e)return void 0!==(t=n.getCookie(o+"themecustomMode"))&&"undefined"!=t?t:"default";n.setCookie(o+"themecustomMode",e)},clearAll:function(){n.devareCookie(o+"Bigsrc"),n.devareCookie(o+"Readtype"),n.devareCookie(o+"Fixed"),n.devareCookie(o+"Mouseten"),n.devareCookie(o+"Scale"),n.devareCookie(o+"Mousemode"),n.devareCookie(o+"DefaultTheme"),n.devareCookie(o+"theme"),n.devareCookie(o+"ariaBtnPosition"),n.devareCookie(o+"fontScale"),n.devareCookie(o+"wapChangeViewPort"),n.devareCookie(o+"brightness"),n.devareCookie(o+"contrast"),n.devareCookie(o+"grayscale"),n.devareCookie(o+"sepia"),n.devareCookie(o+"thememode")}});e.exports=i},2807:function(e){e.exports={disableShortKeys:function(e){window.disablShortKeys=e},getDisableShortKeys:function(){return window.disablShortKeys||[]}}},8519:function(e,t,i){var n=i(6056);e.exports={checkViewport:function(){var e,t=document.head.querySelector("[name='viewport']");t?void 0!==(e=t.getAttribute("content"))&&0!=e.trim().length&&!n.wapChangeViewPort()||(t.content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"):(t=document.createElement("meta"),document.head.appendChild(t),t.id="viewport",t.setAttribute("name","viewport"),t.content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no")},checkCompatible:function(){var e=document.head.querySelector("[http-equiv='X-UA-Compatible']");e&&(e.content="IE=10,chrome=1")},setDprScale:function(e){var t=document.querySelector("html").getAttribute("data-dpr");t&&"1"!=t&&(e.style.fontSize=18*t)},getDprScale:function(){try{var e=document.querySelector("html").getAttribute("data-dpr");if(e)return parseFloat(e)}catch(t){}return 1}}},2606:function(e,t,i){var n=i(6056),o=!1,a=null;function r(e,t){s(".cnwza",e),s("#cnwza",e),s("#cniil_wza",e),s("#ariaOldFixedBtn",e),e?(s("[onclick='aria.oldFixedStart();'],[onclick='aria.oldFixedStart()']",e),s("[onclick='aria.start();'],[onclick='aria.start()']",e)):(s("[onclick='aria.oldFixedEnd();'],[onclick='aria.oldFixedEnd()']",e),s("[onclick='aria.end();'],[onclick='aria.end()']",e)),t&&s(t,e)}function s(e,t){var i="string"==typeof e?document.querySelectorAll(e):[e];if(i&&void 0!==i&&0!=i.length)for(var n=0;n<i.length;n++){var o=i[n],r=o.getAttribute("clickhide"),a=o.getAttribute("closeText"),s=(s=o.getAttribute("openText"))||o.innerText;t?"false"!=r?o.classList.add("ariaHide"):a&&(o.innerText=a):"false"!=r?o.classList.remove("ariaHide"):s&&(o.innerText=s),"string"==typeof e&&(-1<e.indexOf(".end()")&&o.setAttribute("onclick","aria.start()"),-1<e.indexOf(".start()")&&o.setAttribute("onclick","aria.end()"),-1<e.indexOf(".wzaEnd()")&&o.setAttribute("onclick","aria.wzaStart()"),-1<e.indexOf(".wzaStart()")&&o.setAttribute("onclick","aria.wzaEnd()"),-1<e.indexOf(".oldFixedEnd()")&&o.setAttribute("onclick","aria.oldFixedStart()"),-1<e.indexOf(".oldFixedStart()")&&o.setAttribute("onclick","aria.oldFixedEnd()"))}}function l(e){null!=(e.target.closestReplenish("#cniil_wza")||e.target.closestReplenish("#cnwza")||e.target.closestReplenish(".cnwza"))&&(n.status()?aria&&"function"==typeof aria.end&&(r(!1),aria.end()):aria&&"function"==typeof aria.start&&(r(!0),aria.start()))}Element.prototype.closestReplenish=function(i){var e=this,t=function(){if(i instanceof HTMLElement)return[i];try{i=document.querySelectorAll(i)}catch(t){}finally{var e=Object.prototype.toString.call(i).slice(8,-1);if(-1<["NodeList","HTMLCollection","Array"].indexOf(e))return[].slice.call(i)}}();do{if(-1<t.indexOf(e))return e}while(null!==(e=e.parentElement));return null},e.exports={setBtn:r,addListenBtn:function(){o||(window.addEventListener("click",l),o=!0)},removeListenBtn:function(){o=!1,window.removeEventListener("click",l)},mobileHide:function(){for(var e=document.querySelectorAll("[mobilehide]"),t=0;t<e.length;t++){var i=e[t];try{var n=i.getAttribute("mobilehide");"none"==n&&(i.style.display="none"),"hidden"==n&&(i.style.visibility="hidden")}catch(o){}}},isMobile:function(){if(null!=a)return a;for(var e=navigator.userAgent,t=["2.0 MMP","240320","AvantGo","BlackBerry","Blazer","Cellphone","Danger","DoCoMo","Elaine/3.0","EudoraWeb","hiptop","IEMobile","KYOCERA/WX310K","LG/U990","MIDP-2.0","MMEF20","MOT-V","NetFront","Newt","Nintendo Wii","Nitro","Nokia","Opera Mini","Opera Mobi","Miui","Palm","Playstation Portable","portalmmm","Proxinet","ProxiNet","SHARP-TQ-GX10","Small","SonyEricsson","Symbian OS","SymbianOS","TS21i-10","UP.Browser","UP.Link","Windows CE","WinWAP","Android","iPhone","Windows Phone","HTC"],i=!1,n=0;n<t.length;n++)if(0<e.indexOf(t[n])){i=!0;break}var o=window.screen.width,r=window.screen.height;return a=i=o<500&&r<800?!0:i},setFocusStyle:function(){!function s(e,t,i){var n=(e=e||document).getElementsByTagName("iframe");void 0===i&&(i=0);for(var o=0;o<n.length;o++)try{var r=n[o].contentWindow.document;if(!r.body)continue;t&&"function"==typeof t&&t(r,n[o],i+1),s(r,t,i+1)}catch(a){}}(document,function(e){})}}},6003:function(e){e.exports={getContainerDom:function(e){var t=document.querySelector("#aging-tools-pc");return null!=t?t:(void 0!==e&&e.body?e:document).body}}},5086:function(e,t,i){var n=i(546);function o(){}o.prototype.devareCookie=function(e){var t=new Date;t.setTime(t.getTime()-1e4),document.cookie=e+"=v; expires="+t.toGMTString()+";path=/;domain="+n.getDomain()},o.prototype.setCookie=function(e,t){this.devareCookie(e);var i=new Date;i.setTime(i.getTime()+31536e6),n.isValidIP(document.domain)?document.cookie=e+"="+t+"; expires="+i.toGMTString()+";path=/;":document.cookie=e+"="+t+"; expires="+i.toGMTString()+";path=/;domain="+n.getDomain()},o.prototype.getCookie=function(e){for(var t=document.cookie.split("; "),i=0;i<t.length;i++){var n=t[i].split("=");if(n[0]==e)return n[1]}},o.prototype.getCookies=function(e){for(var t=document.cookie.split("; "),i=0;i<t.length;i++)if(t[i].split("=")[0]==e)return t[i].substring(t[i].indexOf("=")+1)},o.prototype.getAllCookie=function(){var e=document.cookie.split("; ");return 0<arrcookie.length?e:""};i=new o;e.exports=i},7107:function(e){function r(e){if(null===e)return"null";if(e!=e)return"nan";if("function"==typeof Array.isArray){if(Array.isArray(e))return"array"}else if("[object Array]"===Object.prototype.toString.call(e))return"array";return(typeof e).toLowerCase()}var t=function(){this.name="Store"};var a=null,i=(t.prototype={init:function(e){return this.store=window[e],this},set:function(e,t){if(null!=(e="object"==typeof e?e.root:e)){var i=e.split("/"),n=(n=this.get(i[0]))||{};switch(r(n=1<i.length?function o(e,t,i,n){return(e=e||{})[t[n]]||(e[t[n]]={}),n>=t.length-1?void 0===i?delete e[t[n]]:e[t[n]]=i:o(e[t[n]],t,i,n+1),e}(n,i,t,1):n)){case"object":case"array":this.store.setItem(i[0],JSON.stringify(n));break;default:this.store.setItem(i[0],n)}a=n}},get:function(e){if(e){var t=e.split("/"),i=a=a||JSON.parse(this.store.getItem(t[0]));if(null==i)return null;for(var n=1;n<t.length;n++)if(null==(i=i[t[n]]))break;return i}},getAll:function(){var e,t=JSON.parse(JSON.stringify(this.store)),i={},n="";for(e in t){try{n="number"===r(+(n=t[e]))?n:JSON.parse(n)}catch(o){}i[e]=n}return i},remove:function(e){this.set(e,undefined)},clear:function(){this.store.clear()}},(new t).init("localStorage"));(new t).init("sessionStorage");e.exports=i},546:function(e,t,i){var n=["aero","arpa","asia","biz","cat","club","com","coop","date","edu","firm","gift","gov","help","info","int","jobs","link","mil","mobi","mtn","museum","name","net","news","online","org","part","photo","pics","post","pro","rec","ren","studio","tel","top","trade","travel","video","wang","win","wtf","xin","xxx","xyz","ac","ad","ae","af","ag","ai","al","am","ao","aq","ar","as","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm","bn","bo","br","bs","bt","bw","by","bz","ca","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","dm","do","dz","ec","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","iq","ir","is","it","je","jm","jo","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","nl","no","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sk","sl","sm","sn","so","sr","ss","st","su","sv","sx","sy","sz","tc","td","tf","tg","th","tj","tk","tl","tm","tn","to","tr","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","ye","yt","za","zm","zw"];function o(e){return/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(e)}i(988),e.exports={getDomain:function(e){if(e=e||document.location.href,o((e=new URL(e)).hostname))return e.hostname;if(1==(e=e.hostname.split(".")).length)return document.domain;var t=-2;return-1<[].indexOf.call(n,e[e.length-1])&&-1<[].indexOf.call(["com","gov","org","net"],e[e.length-2])&&(t=-3),"."+e.slice(t).join(".")},isValidIP:o}},988:function(e,t,i){!function(p){!function(e){"use strict";try{var t=new e.URL("http://example.com");if("href"in t&&"searchParams"in t){var i=new URL("http://example.com");if(i.search="a=1&b=2","http://example.com/?a=1&b=2"===i.href&&(i.search="","http://example.com/"===i.href))return 1}return}catch(n){return}}(this)&&!function(d){"use strict";function a(e){return e&&("Symbol"in d&&"iterator"in d.Symbol&&"function"==typeof e[Symbol.iterator]||Array.isArray(e))}function f(e){return"from"in Array?Array.from(e):Array.prototype.slice.call(e)}var e;!function(){function e(e){var i="",n=!0;return e.forEach(function(e){var t=encodeURIComponent(e.name),e=encodeURIComponent(e.value);n||(i+="&"),i+=t+"="+e,n=!1}),i.replace(/%20/g,"+")}function s(e,t){var e=e.split("&"),n=(t&&-1===e[0].indexOf("=")&&(e[0]="="+e[0]),[]),i=(e.forEach(function(e){var t,i;0!==e.length&&(t=-1!==(t=e.indexOf("="))?(i=e.substring(0,t),e.substring(t+1)):(i=e,""),i=i.replace(/\+/g," "),t=t.replace(/\+/g," "),n.push({name:i,value:t}))}),[]);return n.forEach(function(e){i.push({name:decodeURIComponent(e.name),value:decodeURIComponent(e.value)})}),i}function l(t){var i=this,n=(this._list=[],t!==p&&null!==t&&(t instanceof l?this._list=s(String(t)):"object"==typeof t&&a(t)?f(t).forEach(function(e){if(!a(e))throw TypeError();e=f(e);if(2!==e.length)throw TypeError();i._list.push({name:String(e[0]),value:String(e[1])})}):"object"==typeof t&&t?Object.keys(t).forEach(function(e){i._list.push({name:String(e),value:String(t[e])})}):("?"===(t=String(t)).substring(0,1)&&(t=t.substring(1)),this._list=s(t))),this._url_object=null,!(this._setList=function(e){n||(i._list=e)}));this._update_steps=function(){n||(n=!0,i._url_object&&("about:"===i._url_object.protocol&&-1!==i._url_object.pathname.indexOf("?")&&(i._url_object.pathname=i._url_object.pathname.split("?")[0]),i._url_object.search=e(i._list),n=!1))}}function t(t,i){var n=0;this.next=function(){if(n>=t.length)return{done:!0,value:p};var e=t[n++];return{done:!1,value:"key"===i?e.name:"value"===i?e.value:[e.name,e.value]}}}function i(o,r){function t(){var e=n.href.replace(/#$|\?$|\?(?=#)/g,"");n.href!==e&&(n.href=e)}function i(){a._setList(n.search?s(n.search.substring(1)):[]),a._update_steps()}if(!(this instanceof d.URL))throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");var n=function(e){if(c)return new u(e);var t=document.createElement("a");return t.href=e,t}((o=r?function(){if(c)return new u(o,r).href;var e,t;try{if("[object OperaMini]"===Object.prototype.toString.call(window.operamini)?((e=document.createElement("iframe")).style.display="none",document.documentElement.appendChild(e),t=e.contentWindow.document):document.implementation&&document.implementation.createHTMLDocument?t=document.implementation.createHTMLDocument(""):document.implementation&&document.implementation.createDocument?((t=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null)).documentElement.appendChild(t.createElement("head")),t.documentElement.appendChild(t.createElement("body"))):window.ActiveXObject&&((t=new window.ActiveXObject("htmlfile")).write("<head></head><body></body>"),t.close()),!t)throw Error("base not supported");var i=t.createElement("base"),n=(i.href=r,t.getElementsByTagName("head")[0].appendChild(i),t.createElement("a"));return n.href=o,n.href}finally{e&&e.parentNode.removeChild(e)}}():o)||""),e=function(){if(!("defineProperties"in Object))return!1;try{var e={};return Object.defineProperties(e,{prop:{get:function(){return!0}}}),e.prop}catch(o){return!1}}()?this:document.createElement("a"),a=new l(n.search?n.search.substring(1):null);return a._url_object=e,Object.defineProperties(e,{href:{get:function(){return n.href},set:function(e){n.href=e,t(),i()},enumerable:!0,configurable:!0},origin:{get:function(){return"origin"in n?n.origin:this.protocol+"//"+this.host},enumerable:!0,configurable:!0},protocol:{get:function(){return n.protocol},set:function(e){n.protocol=e},enumerable:!0,configurable:!0},username:{get:function(){return n.username},set:function(e){n.username=e},enumerable:!0,configurable:!0},password:{get:function(){return n.password},set:function(e){n.password=e},enumerable:!0,configurable:!0},host:{get:function(){var e={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/}[n.protocol];return e?n.host.replace(e,""):n.host},set:function(e){n.host=e},enumerable:!0,configurable:!0},hostname:{get:function(){return n.hostname},set:function(e){n.hostname=e},enumerable:!0,configurable:!0},port:{get:function(){return n.port},set:function(e){n.port=e},enumerable:!0,configurable:!0},pathname:{get:function(){return"/"!==n.pathname.charAt(0)?"/"+n.pathname:n.pathname},set:function(e){n.pathname=e},enumerable:!0,configurable:!0},search:{get:function(){return n.search},set:function(e){n.search!==e&&(n.search=e,t(),i())},enumerable:!0,configurable:!0},searchParams:{get:function(){return a},enumerable:!0,configurable:!0},hash:{get:function(){return n.hash},set:function(e){n.hash=e,t()},enumerable:!0,configurable:!0},toString:{value:function(){return n.toString()},enumerable:!1,configurable:!0},valueOf:{value:function(){return n.valueOf()},enumerable:!1,configurable:!0}}),e}var c,u=d.URL;try{if(u){if("searchParams"in(c=new d.URL("http://example.com"))){var n=new i("http://example.com");if(n.search="a=1&b=2","http://example.com/?a=1&b=2"===n.href&&(n.search="","http://example.com/"===n.href))return}"href"in c||(c=p),c=p}}catch(r){}if(Object.defineProperties(l.prototype,{append:{value:function(e,t){this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(e){for(var t=0;t<this._list.length;)this._list[t].name===e?this._list.splice(t,1):++t;this._update_steps()},writable:!0,enumerable:!0,configurable:!0},get:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return this._list[t].value;return null},writable:!0,enumerable:!0,configurable:!0},getAll:{value:function(e){for(var t=[],i=0;i<this._list.length;++i)this._list[i].name===e&&t.push(this._list[i].value);return t},writable:!0,enumerable:!0,configurable:!0},has:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return!0;return!1},writable:!0,enumerable:!0,configurable:!0},set:{value:function(e,t){for(var i=!1,n=0;n<this._list.length;)this._list[n].name===e?i?this._list.splice(n,1):(this._list[n].value=t,i=!0,++n):++n;i||this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},entries:{value:function(){return new t(this._list,"key+value")},writable:!0,enumerable:!0,configurable:!0},keys:{value:function(){return new t(this._list,"key")},writable:!0,enumerable:!0,configurable:!0},values:{value:function(){return new t(this._list,"value")},writable:!0,enumerable:!0,configurable:!0},forEach:{value:function(t){var i=1<arguments.length?arguments[1]:p;this._list.forEach(function(e){t.call(i,e.value,e.name)})},writable:!0,enumerable:!0,configurable:!0},toString:{value:function(){return e(this._list)},writable:!0,enumerable:!1,configurable:!0}}),"Symbol"in d&&"iterator"in d.Symbol&&(Object.defineProperty(l.prototype,d.Symbol.iterator,{value:l.prototype.entries,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,d.Symbol.iterator,{value:function(){return this},writable:!0,enumerable:!0,configurable:!0})),u)for(var o in u)u.hasOwnProperty(o)&&"function"==typeof u[o]&&(i[o]=u[o]);d.URL=i,d.URLSearchParams=l}(),"1"===new d.URLSearchParams([["a",1]]).get("a")&&"1"===new d.URLSearchParams({a:1}).get("a")||(e=d.URLSearchParams,d.URLSearchParams=function(t){var i;return t&&"object"==typeof t&&a(t)?(i=new e,f(t).forEach(function(e){if(!a(e))throw TypeError();e=f(e);if(2!==e.length)throw TypeError();i.append(e[0],e[1])}),i):t&&"object"==typeof t?(i=new e,Object.keys(t).forEach(function(e){i.set(e,t[e])}),i):new e(t)})}(self)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof i.g&&i.g||{})}},n={};function o(e){var t=n[e];if(t!==undefined)return t.exports;t=n[e]={exports:{}};return i[e](t,t.exports,o),t.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var a=o(7107),s=o(641),l=o(9378),c=o(6056),u=o(2606),d=o(6003),f=o(2807),p=o(8519);if("undefined"!=typeof aria)throw"已经存在此脚本，不可重复引入";function h(){var e=s.getAppid();if(e.success&&(a.set(s.keys().runtime.appid,e.appid),a.set(s.keys().road,e.road),e.initcallback))try{window[e.initcallback]&&"function"==typeof window[e.initcallback]&&window[e.initcallback]()}catch(t){}e.success}var m=s.keys();function g(){for(var e=document.scripts,t=0;t<e.length;t++){var i=e[t];if(0<i.src.indexOf("/_aria.js")||0<i.src.indexOf("/ariaDev.js"))return}var n=document.createElement("script"),o=s.getAppid(),r=a.get(m.road)+"_aria.js?v=123456&appid="+a.get(m.runtime.appid);o.callback&&(r+="&callback="+o.callback),o.initcallback&&(r+="&initcallback="+o.initcallback),n.src=r,n.setAttribute("crossorigin","anonymous"),n.setAttribute("charset","utf-8"),d.getContainerDom().appendChild(n)}function e(){p.checkCompatible();var t={},i=(window.isAriaDev?window.ariaDev=t:window.aria=t,t.status=function(){return c.status()},t.status()),e=null;function n(){e=setInterval(function(){var e=t.status();i!=e&&(i=e)&&t.start()},2e3),document.addEventListener("keydown",o),u.addListenBtn()}function o(e){l.checkKeyCode(e,l.keyCodeSettings.wakeup)?t.start():l.toWakeUpRead(e)&&(c.bigsrc=!0,a.set(m.userSettings.readsrc,!0),a.set(m.userSettings.voice.enable,!1),u.setBtn(!0),t.start())}t.start=function(){clearInterval(e),e=null,u.removeListenBtn(),document.removeEventListener("keydown",o),c.status(!0),g()},t.oldFixedStart=function(){c.oldFixedStatus=!0,t.start()},t.end=function(){c.status(!1)},t.initcallback=f,s.addWelcomeContent(),h();var r=s.queryString.val("aria");"1"==r&&c.status(!0),"0"==r&&c.status(!1),t.status()?t.start():n()}u.isMobile()?(h(),g()):(e(),u.setFocusStyle())}();