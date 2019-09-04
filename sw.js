/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","a17741d7b1c0b9bbaad30498b1f5561d"],["/Nonlinear-optimization.html","70699835dc9a5486d54f09284356fbf0"],["/SFM-intro.html","3860bcb5b10ac0651491f07e6e18a58c"],["/about/index.html","76f79d50a1a80953f2a0823b7cfcda52"],["/archives/2019/05/03/index.html","0467267f13b5c0b1424fbdfb8e254fa2"],["/archives/2019/05/05/index.html","61935da6b6b4d815dee7f6a77069b061"],["/archives/2019/05/06/index.html","6c807db2a5f5c5f7bafc47c1c2cbd968"],["/archives/2019/05/07/index.html","7037b389ea4b753cfc7ce0c83874a31d"],["/archives/2019/05/08/index.html","cb2fe56ab3ec4ebcaa1d16b504778a11"],["/archives/2019/05/index.html","dcdff979fceaaca68693973f986a6268"],["/archives/2019/05/page/2/index.html","8265337e7be5292d189f6bf7c03efc7e"],["/archives/2019/06/01/index.html","16acceccb6480ef5b7645a6aa82c6f33"],["/archives/2019/06/23/index.html","3f88c7b17ac42c82e0a9c09705719280"],["/archives/2019/06/index.html","80a21c4c2f05253950284b8194fd2555"],["/archives/2019/07/01/index.html","16316bfac513ca1da1b8fec952334d82"],["/archives/2019/07/02/index.html","85697959fc4164dbc6a4dc0cbfe72825"],["/archives/2019/07/03/index.html","bb5e63c527b302e3b5411b29a021d9b7"],["/archives/2019/07/07/index.html","c6e8fbf55e0269ffe708ff44548dd0d7"],["/archives/2019/07/12/index.html","55fe83c17aa4622cf410770001cca439"],["/archives/2019/07/index.html","b9d90eb2c723b71d4473afed59ea3abd"],["/archives/2019/07/page/2/index.html","8267af14f3affe2b5622ebbcd3dad819"],["/archives/2019/08/15/index.html","038165ab262c0b8e7e1553d0f3b9a4ea"],["/archives/2019/08/index.html","b990c8ac76ba939bf7ec4240072278b7"],["/archives/2019/index.html","665a71f2534abdcd4c7d4da083178508"],["/archives/2019/page/2/index.html","5aaf2a1b8809b246114ae90aefb17720"],["/archives/2019/page/3/index.html","dde8340dc7547d3964f32abbb3fbce81"],["/archives/2019/page/4/index.html","63c82db4492b805a6b5759c7fb33a5d6"],["/archives/index.html","b15a6dfde66ce70102b76c5ea9edae32"],["/archives/page/2/index.html","623118ae15c5b975006db0633022930b"],["/archives/page/3/index.html","9c03d5b1ecd871b8f6e0d6c0a33e4ae5"],["/archives/page/4/index.html","fa650465da2609230d8eba8b0475b3bf"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","cf5dc393c7ee7b83d5e8b83257c65619"],["/categories/SLAM/index.html","ca1a3d30f19c85b4cad329b15f9b369d"],["/categories/c/index.html","f57717c12df08c60e0f59be81d777a98"],["/categories/cuda/index.html","0322d5e4e46d4e973b1870ce339c27d1"],["/categories/dl/index.html","cddb37e43774f4830b9d3110efea960d"],["/categories/index.html","cc8c1658da9467d5665880a196cace7d"],["/categories/python/index.html","aa8f4308ce2c8cbd9b9ab2841d612223"],["/categories/三维重建/index.html","a67542a137e7126f97f00cf554ac143d"],["/categories/博客优化/index.html","df1b686604f8781573f6b588ce0c41cd"],["/categories/多视图几何/index.html","e794d4d3d578d280573b7e87ad1a4454"],["/categories/学习笔记/index.html","fdd56d5a82d7d5fa1ad92530f3846bde"],["/categories/数据结构与算法/index.html","d97f1c7cf5cc2f7df375b32da8b5fac1"],["/categories/点云处理/index.html","71e3bf1fcd7f9ce30487b57ef3fa58d3"],["/categories/环境配置/index.html","672fbf1eab215ff45b46090eaf78f727"],["/categories/碎碎念/index.html","cc0ebc552b20712b35963c7918db5619"],["/cnn-layer.html","885f88cd110864c9e28393913ffd8c7d"],["/cnn-model.html","a0d026f7980fa1deb3cd7202c818173b"],["/construct-function.html","c7e98224febef0a7437f03116cce58a5"],["/cpp-string.html","b26fd5e27469d2e5b5720e55fe9ea532"],["/cpp-vector.html","66bb0d2819a5158f07cb273b7c215d8d"],["/css/main.css","2bee099b07c923dde2ebb506b3ec3a4b"],["/cuda-practice1.html","1b0e34b8e7c8c2046f7f7e815d32ba2d"],["/cuda-practice2.html","304991fe72a235563362cd59a4dc8f62"],["/cuda-practice3.html","c7dc6f0b43417fe8882716e534c4efb6"],["/cuda-practice4.html","f567b6b9bfcc040ec832d776832b15b2"],["/cuda-practice5.html","2e511adf1797d1a42eb856036fc3f45f"],["/exception.html","2258aac903b2cdd6eda2c1139b9a55d5"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","625e4e7faeb36cc985acbb49983086f8"],["/hello-world.html","8abc908ad4fa791cd38370842944e0c9"],["/home-design/index.html","89a93d827a0a72310177e403e1042d45"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","6eecf10483d162b6f8d34ace17b2ed10"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/avatar1.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","0896530c9ebdb20ab1e5dcb9c2fc0beb"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","45d94b76066f6b94ed96c808b6851580"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","dbd61911df9fcedbc8a68097a9ed0b24"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","25191579df2df71632e64b066513b079"],["/link/index.html","b49e7322db31a0221c8c1a806d5e04f4"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","a8cc9abbb93046f68b0d25c2a54194e6"],["/page/2/index.html","5e63c2f87a41ae660f21fea12b638a93"],["/page/3/index.html","e82487f0bc2d9a9b65992f8e067c561c"],["/page/4/index.html","98074befb4f046cc2a5dad888ea9e923"],["/photos/index.html","9a87fa374cb8a217589a18e8413577ee"],["/python-note.html","987aa7d2ff86eecfc8e9d866b8dc02cb"],["/resnet-densenet.html","fbbbc7f640002c35acb03a03f5b44a90"],["/show-issue.html","94590dcc82a29a8d3f8bcb88819ac602"],["/signal-detect-and-estimate.html","67bd23493921ce46ae33611d8ce7e5c9"],["/slam-total.html","fd04cfc4c82d0d25d66a70dbd953ff17"],["/slam1.html","bda9d60506d8ed78215b392fec7d865e"],["/slam2.html","d6ce28bdc32ef59ac7d2d4fff9c8620e"],["/slam3.html","405b92dde39f5c87984b52c4c1a9d76f"],["/softmax.html","b29c28a9ec5989bdb7f9c4281f998ad9"],["/suanfa1.html","1d5f270a9ad8b7144c66b7225e00d9c0"],["/sw-register.js","5144f7b81ca6802d444225fdf40856ce"],["/tags/SLAM/index.html","88a4fafe35659425c4739284cae67a9d"],["/tags/c/index.html","135165b683789e932cb6d1a0e154e7c8"],["/tags/cuda/index.html","25222c0d0e0bf10d5e0362b057d1e42c"],["/tags/cv/index.html","91ff19616ce5410a0f12c9de7c9f7172"],["/tags/dl/index.html","53e95c720d44a83dbe8ee90bad3ed12d"],["/tags/index.html","540dc280771ca5c7ff4403ff7eacfbf4"],["/tags/python/index.html","824528709cb9bb98775f7c58f317e121"],["/tags/string/index.html","b08e61a31e9230ca6c6330a961fbca2a"],["/tags/vector/index.html","6e9d43b9f7ab012eda878fc63d185d7d"],["/tags/三维重建/index.html","e32f8b167bf9a15cd28056ea3354e6ce"],["/tags/博客优化/index.html","3959494ea0310b1a8ba92e130b9987d2"],["/tags/卷积神经网络/index.html","ab9d8908d9a9471e05bea5d41b5209a4"],["/tags/复杂度分析/index.html","31552fba1181c0c6525109441367755d"],["/tags/多视图几何/index.html","dd6829a3ee35eb7e5d3355d3b6a3b42c"],["/tags/学习笔记/index.html","3a42b59a8dfa6254f921660af709e538"],["/tags/异常处理/index.html","06f02600e55ade7e02e921a398a5072e"],["/tags/数据结构与算法/index.html","6aab25dd99d73889a883cb72db965f3a"],["/tags/点云配准/index.html","d4a5787d528f12cbbea5167166bc2918"],["/tags/环境配置/index.html","7b5180746569e0da98e61bd6cb5d92d8"],["/tags/碎碎念/index.html","c361433359734bec3efb53a154ad3aec"],["/tags/计算机视觉/index.html","6ec1f570df89c9b5e81a35e072d05e25"],["/tags/论文解读/index.html","2fa18c80245c1050e738775f56b921a7"],["/tags/高性能编程/index.html","5e6bb0850e663cee732b54009c6661f5"],["/talk/index.html","0f1dbe489943166b9121963991fda18b"],["/tips-for-overfit.html","83f7df34cf8502d3f6661ef105182655"],["/tips.html","cb4dbd879f088a167d99bb0c9d0a4909"],["/trimmed-icp.html","db81963e39cd2b35573953f80e4cdaf9"],["/ubuntu-and-windows.html","bc42e2fc66e2493d0631dcd473a14577"],["/underfitandoverfit.html","af0a2808c8ecccd814b1318ddaad83c4"],["/visual-odometer1.html","3fae4d6902e94abcbe402d600821253d"]];
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
