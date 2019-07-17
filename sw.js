/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","40f2b1a0ac4ffc897a891fdcbb6ea3eb"],["/about/index.html","8ff97c64d294596dc097cc6fc6abdfd8"],["/archives/2019/05/03/index.html","3296f1c80095b12ea3313706747826a5"],["/archives/2019/05/05/index.html","d6725d2d94074e893580e51ab8d37c54"],["/archives/2019/05/06/index.html","2e605dc6af3cdc96bc4df7fee6009eaf"],["/archives/2019/05/07/index.html","57af9d17c945461d6be05e3640218d3a"],["/archives/2019/05/08/index.html","9a3ec3cfdab48a58d39e232edf993da7"],["/archives/2019/05/index.html","97bbcd358c6ac0808e3cf103f6342223"],["/archives/2019/05/page/2/index.html","e5280f4443412539ad6f1586bfa333fa"],["/archives/2019/06/01/index.html","8cc3f27b876a2c49d5509a183fd938fa"],["/archives/2019/06/23/index.html","b628d417eedbcd4abc2156b1148d0adb"],["/archives/2019/06/index.html","340670233396e8d079c45a4ff6a7e1bb"],["/archives/2019/07/01/index.html","c166c974b48b48e3f0122fb6137317a6"],["/archives/2019/07/02/index.html","602b83d681dc867bac97525fd14e4d1c"],["/archives/2019/07/03/index.html","2995594f561f2bcec29199d28999bd0e"],["/archives/2019/07/07/index.html","54d47dc1abb85d83ae2d465cf58a7c2c"],["/archives/2019/07/index.html","94ceac8f2945f89b79c48886affe987c"],["/archives/2019/index.html","3c0f920c656a198880c6ec08e1149cbd"],["/archives/2019/page/2/index.html","a1d8268e21d31124befe4df4603529d3"],["/archives/2019/page/3/index.html","bf2d37887db35d0e936c48365aa61004"],["/archives/index.html","ccccbf934578bf02a4a8f38b10301f0a"],["/archives/page/2/index.html","41ceb7d24eb5ce945aae0f3ec2ddf758"],["/archives/page/3/index.html","217e5054d2bc494f63756f6d30c9c45b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","e9b743d3935d4f4ccc3348444c8de0a3"],["/categories/c/index.html","49e9fca947235aaa40dfe1fadbfdac53"],["/categories/cuda/index.html","d5598af5f1163e447ff07663881ac75b"],["/categories/dl/index.html","1db639841eeb965b4776f16bb6da29b3"],["/categories/index.html","25e117b718c38b1d5836078f7c85e4ce"],["/categories/三维重建/index.html","8d3c31008017afa25c2e42a115a940ad"],["/categories/博客优化/index.html","56d6bf33ecae992a027876cd8ee5b1ad"],["/categories/多视图几何/index.html","6d5e40b4bb5f43fffb8819a1d97097e9"],["/categories/学习笔记/index.html","9cdf805115405e043d1815590aefec06"],["/categories/数据结构与算法/index.html","f28fd9658a541c1f3e0cd56f2d9e7985"],["/categories/点云处理/index.html","f082e076f47620ba2d95ee9d89702ac3"],["/categories/环境配置/index.html","d12c59aab412287fd34a74b42c787180"],["/categories/碎碎念/index.html","2e640d43dbc8d7d2b94c5d40907920bb"],["/cnn-layer.html","fad05e4b7ab4fd87c5f9c6f1dfbf3b96"],["/cnn-model.html","90ef259b164cb1d261e78ac358187de9"],["/cpp-string.html","602af2fdef972bbe291abac1b1dbb65a"],["/cpp-vector.html","1e1ab0c19ca87fd332ae6bb3af614e86"],["/css/main.css","5bcf72b0771aca48e64f0fd5e29ca2de"],["/cuda-practice1.html","b330dc39da4e1077794e711fd1192558"],["/cuda-practice2.html","f7642c58be76cd481b6c7002bbd8b34e"],["/cuda-practice3.html","374761d337194148b7265fda75dd9e70"],["/cuda-practice4.html","86cb01b8e5981ff248fb48437a287bce"],["/cuda-practice5.html","1c7f57569ede95641788386b36851f39"],["/exception.html","94626ca2f2abf7657efb33f3d29209c5"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","3d08ea8a5df34f2cd86fe45a0349fc27"],["/hello-world.html","166637717464ba053fade16eee7b7977"],["/home-design/index.html","db455c2e4e9681b7b02ee3df53d842c2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","d951566b8673f1a341ff31ea06504cd7"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","108b5595356acf33a286ea32b5fdce01"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","79d3ac11cffbb7526fbf5820b8b736d5"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","5d9a9cd6701554de49da273b4e4c1598"],["/link/index.html","03c3ccd5518148a272a47f481c2eecaa"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","0ff1447df88f52438b145127bfa8b125"],["/page/2/index.html","3f29ba3755d0453f1e6f3f2ab9cf7cdb"],["/page/3/index.html","03753e049f95c6e8a6bf2898c547f78e"],["/photos/index.html","842593e73298eaa486774aa9a6dfa52b"],["/resnet-densenet.html","8c3a181e9c11a2a69a2224e7432040f5"],["/show-issue.html","85d67f530c4af6db659db750ee5ca4d2"],["/signal-detect-and-estimate.html","acc538e1376c20c8b5b266514dc556a2"],["/softmax.html","20d5f40016b394911063b726beaaf2f2"],["/suanfa1.html","81cb891ab292f773673efe735ae60fa3"],["/sw-register.js","3a86ba312bfc785337ec816d79880a1c"],["/tags/c/index.html","a1569d5540912a460146013ed336fdbd"],["/tags/cuda/index.html","872c74b345c4232d73971c22526134b1"],["/tags/cv/index.html","b73c662f812790794bd788e527819062"],["/tags/dl/index.html","36d1b9261afc62f9c13081e69e22dbac"],["/tags/index.html","290ae9aae57dfbfb64b9b00a4104d118"],["/tags/python/index.html","469bcf481e514bca7c345394974cf9cd"],["/tags/string/index.html","b13b5496ab71e3cb4865a79214894aa3"],["/tags/vector/index.html","e1140e702c2f6907fe2e467064453e20"],["/tags/三维重建/index.html","1cdc33946ece9831805fbde767febefa"],["/tags/博客优化/index.html","b8c94d8f077ec0bb0fd3827980e95020"],["/tags/卷积神经网络/index.html","5ee318a63bc336e467e69b184da608d6"],["/tags/复杂度分析/index.html","14faad5447be360acb6829672419111b"],["/tags/多视图几何/index.html","c777c58a2da61c2e6e4ef9367cc2689c"],["/tags/学习笔记/index.html","c90d966cecf7701feb2abe170ee38593"],["/tags/异常处理/index.html","b5c9d7282289bc770c4a40dd2503764e"],["/tags/数据结构与算法/index.html","786ded4f387a0e4fb69b29f73f9b62d9"],["/tags/点云配准/index.html","a35e9b3c62e132c04186583a747a3dc5"],["/tags/环境配置/index.html","7cc6d99f83fe71d303084dc94a3ad9ba"],["/tags/碎碎念/index.html","3e02ede9737468053e62c111d160b786"],["/tags/计算机视觉/index.html","ca1de9c54aa91e61dfcbb6c00b1712dc"],["/tags/论文解读/index.html","ba0096f50def53e75a5232c9c9791cc8"],["/tags/高性能编程/index.html","81b522feb01378b4e287f3670e683be7"],["/talk/index.html","82926ae8999142194c34ef1425023f95"],["/tips-for-overfit.html","72f4c933d9c7c1cef3ce512e8d9a97d5"],["/tips.html","4695003ac329bad4484b99cf538943ce"],["/trimmed-icp.html","658cef4870cb480afef724f25c42d188"],["/ubuntu-and-windows.html","cb805c3346a50a19b0c41b8965d0bc7e"],["/underfitandoverfit.html","b7bd6f0318557cf44a218db83aaaf797"]];
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
