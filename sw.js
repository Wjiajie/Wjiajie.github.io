/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","95137befe63b67a87c8fc0a22e43714b"],["/SFM-intro.html","5d5b118de059d975f708bd696d4c0a00"],["/about/index.html","1e269cd1f6542b701771ad678ddccf64"],["/archives/2019/05/03/index.html","e4dd67f1a5c1502650590ade8eb0076d"],["/archives/2019/05/05/index.html","977fe3943847bf783e975282a14dd95c"],["/archives/2019/05/06/index.html","614ae83544e1fc2f4ef2db2549fcb215"],["/archives/2019/05/07/index.html","b54b119300f6c7c052f28a8a423962d2"],["/archives/2019/05/08/index.html","d5b383209f28ca7309e3298c6d232245"],["/archives/2019/05/index.html","1ec5b56ac1ab61ae088824e75520405b"],["/archives/2019/05/page/2/index.html","fb3ecc91d32a81a9131a638bc8d12764"],["/archives/2019/06/01/index.html","6bd140749623ad2dee52be32fbd12f0e"],["/archives/2019/06/23/index.html","235d621ba38171c259b2e8255eaadbe3"],["/archives/2019/06/index.html","5294212592b3694301b2f6fc055718d2"],["/archives/2019/07/01/index.html","358afad841929707548cc00b1f4a7c27"],["/archives/2019/07/02/index.html","dffbfcda28af9109d9c7cf87423c03e3"],["/archives/2019/07/03/index.html","a1cecbeebf75dcfc9a161e32c32691b3"],["/archives/2019/07/07/index.html","c45b56c98fe97fd605101eb11b02cfb0"],["/archives/2019/07/index.html","7e13f87c380c2bad566828274daf25da"],["/archives/2019/index.html","f815adc92e5ecf9268e7f6f023e2fc79"],["/archives/2019/page/2/index.html","0fc6e20ae73226004e4cf03657d8e620"],["/archives/2019/page/3/index.html","0e41de76aad2dd06551cef19681e436c"],["/archives/index.html","54e71ea51ac8e5dc2286e31b0da4623e"],["/archives/page/2/index.html","f2844e5e9ed60b671924bc52e15e1118"],["/archives/page/3/index.html","6b92425d90abb1be980c4ef4bb1ab2c0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","c7c0e0a587e790ea97ce3ee14ffa1745"],["/categories/c/index.html","f9b23a753262be357cb81458b9bf5994"],["/categories/cuda/index.html","25cfbc947bea0bf1ef0fa406a9625c40"],["/categories/dl/index.html","9966b27070e5b70ad7856600684d8384"],["/categories/index.html","3fbb44ef4de7f7d8e47ec31213f9203f"],["/categories/三维重建/index.html","50ceee4312bccc2c40962270e85181d7"],["/categories/博客优化/index.html","4d249cf82acb65fa4815c1d15f97ed60"],["/categories/多视图几何/index.html","640076bd96697bada378074ef1cbc58c"],["/categories/学习笔记/index.html","ba089dbc58228c487a8001b6de3b60d3"],["/categories/数据结构与算法/index.html","1d50ba106ecb00c9ea917211f9791f94"],["/categories/点云处理/index.html","553f27842818acc235d8d26b3005f600"],["/categories/环境配置/index.html","3ba496346a0dba7de81062357a900a61"],["/categories/碎碎念/index.html","9b38065fa4be1b82ad465ce0923204a2"],["/cnn-layer.html","97434b4f68e401fb48f63bfb622181c7"],["/cnn-model.html","010338eab8fab23ccb91db6375c6c529"],["/cpp-string.html","0b1af50cb9b0e082a962f4998e1fbbc3"],["/cpp-vector.html","9cfa6bc03a8fa93feaab4953ec13e48f"],["/css/main.css","19e6ec4e15f6125c24e473b75a65116c"],["/cuda-practice1.html","5c294fdf18ba82bb30bc04c5d542c390"],["/cuda-practice2.html","aa7bea7cae7536dc32f7764d12539722"],["/cuda-practice3.html","b6ff2d0be19eed5d8d5d8aa3bd1f14e8"],["/cuda-practice4.html","8d7a737a1f898639d1731a8a6e966649"],["/cuda-practice5.html","1cfa9d558df776edcdf003bd8c06c7d8"],["/exception.html","e4d6718ae892e66c4df81068ba471241"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","3ad0214a452512197f757d2237f8dfe9"],["/hello-world.html","85cb93853435f55cd442dc3174831f1a"],["/home-design/index.html","2352eef5dbea0a97e03ca0e9e08bd580"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","0f2918d17bca8c0aecedb2726777661b"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","acd8c7a9c38dfbfefb7f48d2371c9a9e"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","e0dae8bb0b7c9885cfbd81feab051b73"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","aac6af7f623338c1724614735051186f"],["/link/index.html","c9bf1293a099537dc42ab3557153dbb8"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","8d3b94044b091cd1cf8259015aaca381"],["/page/2/index.html","c77e77363741dc550b98fd19edad5cea"],["/page/3/index.html","0167f121a8016f8b2b73ad9e36ef759b"],["/photos/index.html","812515751fddf827156bd31fb99f2351"],["/resnet-densenet.html","00014713ed023c843c08e6be9d1eb19b"],["/show-issue.html","3f39c7939d85eef8911c0dc550f8d587"],["/signal-detect-and-estimate.html","71de4c29defc6a6e640141437cd12c5f"],["/softmax.html","4ab69f6aa878c9817fecd43f2c26e1f0"],["/suanfa1.html","ec6d6a103ef154935f1856a3a0c41fe6"],["/sw-register.js","1ca644caf26638a045ae9b2ab98a0faf"],["/tags/c/index.html","f026b21d4da9992b347c85da772919ab"],["/tags/cuda/index.html","47b375cf067d1df1993d412944f24d4f"],["/tags/cv/index.html","4bf74bb158d716cc45bb2e8d6a73bb96"],["/tags/dl/index.html","4641a6719d995063b883dcefa7d8c220"],["/tags/index.html","db33d0af38930460ff816db72a68d164"],["/tags/python/index.html","5dd1a4085c2d91c27d108f65b27a836c"],["/tags/string/index.html","0ce67160e89d3d159d5d828d08818252"],["/tags/vector/index.html","37e29688cdd1c7552930783a9c9c7e37"],["/tags/三维重建/index.html","3d12f0f0a19032dc7e85a99c010cd177"],["/tags/博客优化/index.html","56b70ca2a049fde32ca006d0f18d575b"],["/tags/卷积神经网络/index.html","38ffbc17330ef341f59f79a65018df14"],["/tags/复杂度分析/index.html","c4db07c6263180bd3a5a52b4c0346684"],["/tags/多视图几何/index.html","a28530b300c63d328685c54fbbff3ec2"],["/tags/学习笔记/index.html","68827f1f19b2dff06fbed74c2c73884c"],["/tags/异常处理/index.html","4a108625d25a300de2894a234876d087"],["/tags/数据结构与算法/index.html","a05c217f2e234004cc20403e024f0183"],["/tags/点云配准/index.html","7f58d067d13a0a1e1abf1ba339f23ea7"],["/tags/环境配置/index.html","3f468c01eae89e87f142429fb7dfeb0d"],["/tags/碎碎念/index.html","dd9216412c8200226257896bb996e99e"],["/tags/计算机视觉/index.html","bb8eb502d4765c8c2228173a7761043c"],["/tags/论文解读/index.html","79743bb8baa655daa59e54147f5e3d07"],["/tags/高性能编程/index.html","1bb4138681b29a415d66fb473f38ca5d"],["/talk/index.html","7c9926b52ef56854355fdc5d2d6f7546"],["/tips-for-overfit.html","22dfe1aa582c05aa5dde5a2f23326a51"],["/tips.html","2f0fe9da85264544a25801bf5615f792"],["/trimmed-icp.html","46a44948d6e2ce3eb2a6790414ba7cc7"],["/ubuntu-and-windows.html","207b57d91569464603afbded04b92db2"],["/underfitandoverfit.html","c55682623b27ab3c3a09f3452b2cef59"]];
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
