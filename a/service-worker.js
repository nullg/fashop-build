"use strict";var precacheConfig=[["/index.html","65dee1367fdc57034c2a88600ee72d13"],["/static/css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["/static/css/vendor.css","1f5ca67277a8b7a9b5212a1ce9453d35"],["/static/js/0.js","d129494d07a7d5e8681302788c3d03e7"],["/static/js/1.js","3ef25941c2fe7518aa185e6c9fe4cb26"],["/static/js/10.js","df2e1b315c0ff561c3220533ab4df514"],["/static/js/11.js","e52f8411e5ca198c33480c29f979d858"],["/static/js/12.js","9e4cbee2573400ce86537e804f005db3"],["/static/js/13.js","879a9333e26fba8ca4757b18795f5280"],["/static/js/14.js","2de623a90139822f7b261fa2325f24ea"],["/static/js/15.js","977f4565ca806b370630f0f1cb473fe7"],["/static/js/16.js","d8533c243b5279700e784386a146c1ae"],["/static/js/17.js","f7fc51ae14c5fbe44d0ce6304a1de3cb"],["/static/js/18.js","8e4b913c552dc049fb3c5df2dabd3279"],["/static/js/19.js","eab7eb1aa5977f59268363f62bf589cb"],["/static/js/2.js","0f104a973784aec49b297c0137fbf85c"],["/static/js/20.js","971d067d290f5a2862ac16d417579fa9"],["/static/js/21.js","a87d6a4eeb5c603ef04cdfc545b94514"],["/static/js/22.js","4195572bb610632a476c25bf40a4525f"],["/static/js/23.js","4022a46938a2ea84ac3c85a9d4330204"],["/static/js/24.js","c2d7749d819f11962d2ea1516c2aaa13"],["/static/js/25.js","6646fcd825c25b9d8beb0540730931e9"],["/static/js/26.js","102ba98a0d9ee46b3f30699839bb4577"],["/static/js/27.js","ecdb359ef53d453b2e5a5f496efc39f3"],["/static/js/28.js","76c30954f50761f6756f761a8f5e32c7"],["/static/js/29.js","bd7fc366cb3808363aa06bc6bfa517c3"],["/static/js/3.js","ff6cc74edd8afd15f514f63a07d39618"],["/static/js/30.js","992f788b3d0df8c2ad9d39ef424469df"],["/static/js/31.js","012cbebfcf8c9f920eefd73d7abe1864"],["/static/js/32.js","115d6e4c364fc7f9f41c1a636f126551"],["/static/js/33.js","2ecd8c494f6b0f8eb578df3f34c586cc"],["/static/js/34.js","ad3832afb97dd4a829f79af5e6ca4b11"],["/static/js/35.js","5d870289620b58b0beeb0606c88f89b8"],["/static/js/36.js","8f5d83f0b31ee6755a4c45a2679f62dc"],["/static/js/37.js","8435fcc2c75365e39ca0ae25b5231eab"],["/static/js/38.js","2df265d56bd7b467cd68c404e2d2ead8"],["/static/js/39.js","94ef86b99bae5d3f722634b95bb84af0"],["/static/js/4.js","526be6a1492b0cee92c4888058fe54f2"],["/static/js/40.js","746a07d239e5689eec6aa8549fe6d2e0"],["/static/js/41.js","ec8d1ae9cf6fa03f0edb329412488f4e"],["/static/js/42.js","02e6a95f9f04c6592d2b39748d89827d"],["/static/js/43.js","cf8569e6384136419ed036e8e8f6b464"],["/static/js/44.js","93503ccba85f1981eade175007a077fe"],["/static/js/45.js","34bcbb0fb5f781d8cde273cdb13448cc"],["/static/js/46.js","cab5e5a2878999b9d4e06ac34bfc6dc2"],["/static/js/47.js","469cede8450a75b24dbfb0dcc45e46e0"],["/static/js/48.js","894946bcbd3fbf71a7dfd9acb7cfc3e5"],["/static/js/49.js","34bb5f22ebc03da56b2bfb509334d58e"],["/static/js/5.js","18315cc057f9763dd635dc227738be35"],["/static/js/50.js","2a9bb8817c3b17aecc36c74bd0eced76"],["/static/js/51.js","a3d87768b616539d159de0db673ae3bb"],["/static/js/52.js","065d8a4cc77d8b9f524841cc20f9f8e1"],["/static/js/53.js","816cdf4bbf56a697fa015f05f7ed75aa"],["/static/js/54.js","e40f837fd7e352f2393c24d02a85b602"],["/static/js/55.js","149720e283fdb9bbe59f6fd6a8e569a2"],["/static/js/56.js","946283c913bfdf14c2df58fe5752cd2d"],["/static/js/57.js","99d23ffa1dbff892244afe093ebdf5e0"],["/static/js/58.js","9f2d88cd7951dcc76eafdafc80d03b6a"],["/static/js/59.js","0a280356bf2dfcc732caedfa42d63b23"],["/static/js/6.js","23b7ff1a3a6367ee62c4e91faaf1e599"],["/static/js/60.js","c14cdc01c281563173801e2f6f310b86"],["/static/js/61.js","73580425fa296f7f27c5284be5f0e485"],["/static/js/62.js","060174218a38d4734e55ec26786a9623"],["/static/js/63.js","d3265c1957c0dd5177180e63bddc6c73"],["/static/js/65.js","2b26bc260b09680224673f256a93c2ff"],["/static/js/66.js","20fad5d73693809a17170a1c4b9328f8"],["/static/js/67.js","c2c6e56bd310193234bdb5f753799079"],["/static/js/68.js","4b3a5b49f8344936f7470e0199ff108a"],["/static/js/69.js","34616dd616b892594c5e0ff5b2c78435"],["/static/js/7.js","d22c95cee55e0e5ed66acee54481c677"],["/static/js/70.js","ecca0e840ff4cdf81a7bede16a790728"],["/static/js/71.js","5fb01e30aec4907d4d0331046fcda354"],["/static/js/8.js","c7f1c5242d1e2cc0b7ce40592a2c72a1"],["/static/js/main.js","7a41df53522b48f2eaae22323593cffd"],["/static/js/vendor.js","b8c29e7acf21f7c53d9f2aadbcdf54cb"],["/static/media/exception-403.svg","2dda86ad45caee58c927e111fe3c8071"],["/static/media/exception-404.svg","9ed13bbe02debb8e23db19a4e6603c2e"],["/static/media/exception-500.svg","990ae4d0c56d16d2ffdab6d924b6a179"],["/static/media/fetchStatus-error.png","bcb26fc1dff3fb8fd8faa87ca2d21939"],["/static/media/fetchStatus-nullData.png","5007db43934d9289b2d85ee21971fc68"],["/static/media/images-formula.png","f11cc42b343d3dd137b23e4ef9de76d9"],["/static/media/images-icons.png","9978ec34f943aede6001a2eee52b7e46"],["/static/media/setting-logo.png","106bafd334b8442af66f533410b50575"],["/static/media/shop-dianzi.jpg","03dddae41a61344d9558b9c6c3a81eba"],["/static/media/shop-diyPhone.png","b21e610425d032bbd65b6c56f0a0a2c8"],["/static/media/shop-fen_chaoshi.jpg","f71363c14e0cf1b649bae420bee6d6da"],["/static/media/shop-fen_dianzi.jpg","1f954b7712d1b4c260409c0a28df1fbf"],["/static/media/shop-fen_meizhuang.jpg","15a348fc0f9fab17d018e0bf0d46579f"],["/static/media/shop-fuzhuang.jpg","119100e2480f72be7f9c9297a7d1ddaf"],["/static/media/shop-jiaju.jpg","e90e1efe42ee97645e7fbe706f226244"],["/static/media/shop-meizhuang.jpg","c5e778c91d055c6b6a383b7b377d5634"],["/static/media/shop-muying.jpg","4780f42709362c267d19c227a78aedd0"],["/static/media/shop-qiche.jpg","542f9974fec4b068a217b69278f2ac02"],["/static/media/shop-shengxian.jpg","509c984f5c34b483135cf5dca33e4f75"],["/static/media/wechat-diyPhone.png","b21e610425d032bbd65b6c56f0a0a2c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),t=createCacheKey(s,hashParamName,c,/\.\w{8}\./);return[s.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});