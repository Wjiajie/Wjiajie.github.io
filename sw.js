/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","7e218f3cf7c9335d36784e4b94a19cb1"],["/about/index.html","ae7b2297453e110d144dd8751bec8dbd"],["/archives/2019/05/03/index.html","e4830b2cac5aa814adb33d828bab0907"],["/archives/2019/05/05/index.html","1db39511262535df704f93785a789edb"],["/archives/2019/05/06/index.html","820df1bf34cc49b83f42f037dbffc37e"],["/archives/2019/05/07/index.html","41ce7da7126793348822ac6e500db688"],["/archives/2019/05/08/index.html","ac63779924e3e13087f9eac49d9c7e71"],["/archives/2019/05/13/index.html","87a3bc0d2ea864b17f7f9784c1651635"],["/archives/2019/05/index.html","f5bba15fad529fbe3acd67403cbcd800"],["/archives/2019/05/page/2/index.html","7ce113505e2bfe2c6058332b3008c598"],["/archives/2019/06/01/index.html","4401ed11be29802b807064a045efc62f"],["/archives/2019/06/index.html","9747048a0de75a576cb8896e3a745eb4"],["/archives/2019/index.html","f1e5504096dd74d56a9a83b82defff72"],["/archives/2019/page/2/index.html","388bf3e01b36f87e593349f9450513fc"],["/archives/index.html","5b9958bcdb62898f780ba744c444fdca"],["/archives/page/2/index.html","01459ea19ba3e6cc92a559c7d926c7a7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/categories/c/index.html","c477e6794d697c4d0157f996dbf1b4dc"],["/categories/cuda/index.html","23fdf4df6afd151aa10031b6e9c06b37"],["/categories/dl/index.html","a5de4308203ee57b943f4b8dc2ac4a2d"],["/categories/index.html","0a9fcc349ec53d9344e974f80bc058ce"],["/categories/博客优化/index.html","7c333fc6262a2a91594e5a316a85d99b"],["/categories/多视图几何/index.html","b10400c40646f7c514ccf34a6e69aa4f"],["/categories/数据结构与算法/index.html","669645ae33b58026f07de786c6b901ee"],["/categories/点云处理/index.html","24ffd7f378ddf8bd32ff9bfe5ea1cd73"],["/categories/碎碎念/index.html","6434f81979a4c3810814a0b72a663484"],["/cpp-string.html","2ccd3640e279fc902a8922c4f16417bb"],["/cpp-vector.html","6e1cbf6fddfc0ba6c0a37b2ed4b09a4f"],["/css/main.css","de35eab162363ea05d9c4c643f4a3be7"],["/cuda-practice1.html","e541b64cff3d7e07eaa23237ef9372f7"],["/cuda-practice2.html","f60ad96326936ba341172924e05c9376"],["/cuda-practice3.html","c130a33233d6bab65fde3de2b768d19a"],["/cuda-practice4.html","d2a45e3e9e43a8a348f9af927108cc22"],["/cuda-practice5.html","875723756be01c7ccd27530dc8b6efe5"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/hello-world.html","c7a216e754e27327b4743e6ca8eab5cf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","6d773a218bb75850f49c5737443f532d"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","2dee8a2ca91eda8c85f260203392fbec"],["/lib/fancybox/source/jquery.fancybox.css","3646fa741115247277e78e41f6573a2d"],["/lib/fancybox/source/jquery.fancybox.min.css","822059014af25ba79c723a94df31dc82"],["/lib/fancybox/source/jquery.fancybox.min.js","3d3772af7ef58ae6d60d5d9f7206a2b2"],["/lib/fancybox/source/jquery.fancybox.pack.js","7360c9b62c9b0496c6a2dfb08ac4ee71"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","7fb6088c6d771d1749ca550c48fa53d5"],["/lib/jquery_lazyload/jquery.lazyload.js","9fdfb72033154e1756ec7313eb1ed9de"],["/lib/jquery_lazyload/jquery.scrollstop.js","30484689f37cf32b8737aebd77e3ee9e"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","8a35c3095cd4fa7584428d075fd578a6"],["/link/index.html","0ee2d9aed85e1a1c372ab8d1d71ac265"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","581428b437070c3b2246e73518371c15"],["/photos/index.html","b758ce3145e7c1a067d8f7ae89fa7d10"],["/show-issue.html","41190aa5a778ca1704bfa46ee2a6767b"],["/softmax.html","70a28a618461885212123ade3e7778ed"],["/suanfa1.html","a0feb77c31ec652cf5cca8034aa2d061"],["/sw-register.js","e054c1d767ef3f4472e2118133e0ea00"],["/tags/c/index.html","8ec764a049c4c7c384a2e23dd3108927"],["/tags/cuda/index.html","e99ababa8f19ae224c208c905495fe6d"],["/tags/cv/index.html","b61fa4456f664d2d00c26df147886011"],["/tags/dl/index.html","f8173b4f1c328eb5c40fdd2f97559656"],["/tags/index.html","bd4eae9ec39a7f1a24fdf95991806772"],["/tags/python/index.html","b367bf7cc7cdef2b119a920ff8f1cb27"],["/tags/string/index.html","f3b2b65e51316fe5eb216ada1cb637d7"],["/tags/vector/index.html","bdb1a231121aee59f1e9ba6a689252c5"],["/tags/三维重建/index.html","d44cb5d3a1a41ef5aa4738d1bf7244e1"],["/tags/博客优化/index.html","8e8114e384bfa9ebfcf3bd40ddeaa85b"],["/tags/复杂度分析/index.html","ad8ca5936f8564a888123bf094287107"],["/tags/多视图几何/index.html","14a19720341570375023219c783f305e"],["/tags/数据结构与算法/index.html","1745fe9a4bf607fcc0b35ebbfa2395e6"],["/tags/点云配准/index.html","cb646f54527144efced58d561bcef1d4"],["/tags/碎碎念/index.html","82668eeb8263335976f365fa9ecca80e"],["/tags/论文解读/index.html","bc2dc10d67d6dd08189e8c33ab4690aa"],["/tags/高性能编程/index.html","7909ec66600aaebde234921cc9192ddf"],["/talk/index.html","ab84dd0ee135058b12bf1841db925c83"],["/tips-for-overfit.html","a0823c281b292dc3fd5987a41c6ecdeb"],["/trimmed-icp.html","507f88eb905c2634f7f3fae0fb223d08"],["/underfitandoverfit.html","e7a9f50bd80edc90e67d20d285f29458"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
