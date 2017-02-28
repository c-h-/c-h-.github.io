"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/assets/components/giphy/giphy.js","00447286f86b1ea3ac4b7e525f096e9c"],["/assets/components/jquery/jquery.min.js","2b6294333db8eeb65bc7717144357d23"],["/assets/img/icons/facebook.svg","1e50a9e292c463f4bced2445c3da512f"],["/assets/img/icons/github.svg","13298ebd3cfa0674c361fc28e7619cdf"],["/assets/img/icons/instagram.svg","e870f59a02ae15aa34dcf80d0b1b3833"],["/assets/img/icons/linkedin.svg","c5234aced9ecfc3beb65a42cfe132b1d"],["/assets/img/icons/twitter.svg","dd994628a068d2402fd3164026461a8f"],["/assets/img/instagram/austin.jpg","fd67aa741abc5823b9bb0f9327a72aaf"],["/assets/img/instagram/bird.jpg","298a75a1aa3547101148be3975cff2e4"],["/assets/img/instagram/castle.jpg","9bf1c314d8a5603507499d0fb7bf3a3e"],["/assets/img/instagram/falls.jpg","dcf270c0029d126f039c63bad9af1736"],["/assets/img/instagram/flowers.jpg","a5ea65f86ec62c03e14bcd7f4a7e117a"],["/assets/img/instagram/lions.jpg","39a1999447aed8c0b97517d1a2c35e49"],["/assets/img/instagram/patties.jpg","9e08a3f3693e049b3a6f820c0269abb8"],["/assets/img/instagram/trees.jpg","55bf625139c9343a7b6ca9ae1507c68b"],["/assets/img/logo.png","557ba5abc43c44f70859896ca93ccea3"],["/assets/img/projects/amation/amation_1.png","1dee139a66bb2faca27b99d54a22995f"],["/assets/img/projects/amation/amation_2.jpg","1fb49127a0d24403469379bff11d38c4"],["/assets/img/projects/app_designer/app_designer.jpg","a7ef4d86c8756baa22c1cd67c859e8c9"],["/assets/img/projects/app_designer/app_designer_2.png","e48afc9a38bf48d0175cd5efa3de7948"],["/assets/img/projects/est/est.png","4c3123b6cce4af439d3277d6c067ac35"],["/assets/img/projects/est/est_2.png","2344df4723a45928f01f813e65aa613f"],["/assets/img/projects/tedx/tedx_1.jpg","170eba4a8d30a1b29ec899d290b725a1"],["/assets/img/projects/tedx/tedx_2.jpg","b7d161024e25adc9f0489652b038179d"],["/assets/img/projects/tred/tred_1.jpg","2294186e81b799d1614061f8bf86a65d"],["/assets/img/projects/tred/tred_2.jpg","61fa90fdf70f58e28a16adac5f620981"],["/assets/img/projects/unb/macos.png","2bb2511ca25505d707679ccf327af746"],["/assets/img/projects/unb/platforms.png","bb4aad147040e8a74ee1e92fa49ecff2"],["/assets/img/projects/unb/web.png","86f4afd9ba90ab48c9a61861bf04f4dd"],["/assets/img/projects/unb/windows.png","deeb4f3117bd0827a8d4f38c55e73549"],["/assets/img/projects/viasat_1.png","310783900fe206faf8b38240b69d7b2f"],["/assets/js/scripts.min.js","f2bb2a8ad433674e39f7a02fb5a68737"],["/index.html","4c40228a7399785c348f903645b42cdb"]],cacheName="sw-precache-v2--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=a),s.toString()},createCacheKey=function(e,a,s,t){var n=new URL(e);return t&&n.toString().match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var s=new URL(a).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,a){var s=new URL(e);return s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],s=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,s,!1);return[t.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!a.has(s))return e.add(new Request(s,{credentials:"same-origin"}))}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!a.has(s.url))return e["delete"](s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(s);var t="index.html";!a&&t&&(s=addDirectoryIndex(s,t),a=urlsToCacheKeys.has(s));var n="";!a&&n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(s=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(s)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})})["catch"](function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});