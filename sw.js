/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","c8a149608a8bd08536e1137842b57ddf"],["/about/index.html","ee48ac76e8470e976f5f819868957159"],["/archives/2019/05/03/index.html","5179df567c51fb5a59febba0c631e1b7"],["/archives/2019/05/05/index.html","fcc002a6018bd644fbb4edc45e7a09c3"],["/archives/2019/05/06/index.html","cc75dc96fb5846e6162a57b0b071d56b"],["/archives/2019/05/07/index.html","37aa0f714477b12bb0b66851677d6049"],["/archives/2019/05/08/index.html","658e7c5f285f291343c2a16e98a078fa"],["/archives/2019/05/13/index.html","5ab3008365dd8c3d3f2d0d4936c0ba5c"],["/archives/2019/05/index.html","8530b96c44cde6670d9a51b13ca47ac3"],["/archives/2019/05/page/2/index.html","c323841ea09c7b60a7716f23b6a172fb"],["/archives/2019/index.html","3d1e3c7cf7004efeeaca0ea6173f95a8"],["/archives/2019/page/2/index.html","148aa9e171f53eb0e578dc315359cf6d"],["/archives/index.html","2a9dbc7513558feea9ee125178cd78f4"],["/archives/page/2/index.html","419615b1814d2b41c0a159cf0ad58255"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/categories/c/index.html","6a8e749af5c0d8a2f0199ab84b726c52"],["/categories/cuda/index.html","3d1961deaf0b8465cd56401c9b7280c5"],["/categories/dl/index.html","94376809f659ade9349d0f2a00d380dd"],["/categories/index.html","8d3df79364786558defefeed3885c9f3"],["/categories/博客优化/index.html","71968d830fb46ad2776c8c3b58873792"],["/categories/多视图几何/index.html","b39db5db10be74d3e6b1b0bdf6e36718"],["/categories/数据结构与算法/index.html","35fc948bf8ea2b64f6810068b800ab8b"],["/categories/点云处理/index.html","8b99232146a3580ba0d3c250f5c6939a"],["/categories/碎碎念/index.html","9f8daec77e65c77ee51e92b5bb25ae8a"],["/cpp-string.html","6a73ee6405cfae1caac3e09a2fe8344e"],["/cpp-vector.html","0a81dce929b13103a603fd9233c22f5b"],["/css/main.css","dc88920925d2f3d6993fb361875af58d"],["/cuda-practice1.html","bc614a5b7f1ae64e4ba4e4ff9d8017fb"],["/cuda-practice2.html","344b301e53f3ae16efb4b3af3bdc5678"],["/cuda-practice3.html","cac4236eb50809120ecf17979e4f7909"],["/cuda-practice4.html","84092d77059de9b8779a196b55bdca07"],["/cuda-practice5.html","6c04c4f5386ec7be0ff0d892f4ef53fa"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/hello-world.html","e3b5949b51dc2e6e7859a29f53dfe4b0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","232cf573f3836244dd915ec2f4eb401d"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","adc0b846131578df973f6b4e2b4b2d09"],["/link/index.html","517e987135aaee8981a1e8f282fa48d6"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e5c7652ad0ac9c8ec7f85bf06c5cc3e1"],["/show-issue.html","440cf4a6247bbe80aa03c672e6834265"],["/softmax.html","15bfd9a453b391a6d7e16a9f14c2ce26"],["/suanfa1.html","3cf8826bb5c14795727935f78417ce81"],["/sw-register.js","6e5978c90430f84d0439ab9b30273984"],["/tags/c/index.html","d9cfde3bcfa30e5640503e2a450ce178"],["/tags/cuda/index.html","da544e7e61e2d50dd74d41f505fe5cfd"],["/tags/cv/index.html","92450c5c7b3be4cf533edb51fee84a0a"],["/tags/dl/index.html","c8f21ebdd004c84cf93e95c211425cbe"],["/tags/index.html","d6248062e3c0b0e7be60890be01c5005"],["/tags/python/index.html","6ff7eb4b089ee7eb441d1296571bf222"],["/tags/string/index.html","fc6fd43d03d8def40626fc3eb6ff69a0"],["/tags/vector/index.html","788a4d0802646a643847660e4b713102"],["/tags/三维重建/index.html","a290e4d19e71eb1a57b251e595e19a0c"],["/tags/博客优化/index.html","22a892cc18452eb17d2c6201197e167c"],["/tags/复杂度分析/index.html","4ce5bcc1af8f029c73fd54161b36f3e4"],["/tags/多视图几何/index.html","cdbdce74a32d78243c5336497c253a43"],["/tags/数据结构与算法/index.html","76621613217baa866e65ad86207f7525"],["/tags/点云配准/index.html","512a144fec8e7691f3712a9e716732bc"],["/tags/碎碎念/index.html","aeb6736a8d35c0c03736d0f19789341d"],["/tags/论文解读/index.html","4796a01c94fbb9fbda80fb426d400d2a"],["/tags/高性能编程/index.html","9ab53c7d2d9964c3d5694855357ab9fd"],["/talk/index.html","8445ed91259989e6b1b8951fde7d5f52"],["/trimmed-icp.html","95c661fe42a43b996bb412dcf2855bdc"],["/underfitandoverfit.html","9ddd073c4fbba6b4fcb2c58bc463aae2"]];
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
