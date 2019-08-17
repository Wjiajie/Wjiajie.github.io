/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","542a2b5aa7721c6bbeed674bdd5ce9cf"],["/Nonlinear-optimization.html","35d0b1083be9288bddd9ea8cde59f2d2"],["/SFM-intro.html","6b567f8b92022102e7e97ee32f930fef"],["/about/index.html","832c4b8587f9f142012dfd50ebd84b28"],["/archives/2019/05/03/index.html","a4a827cd9403137361da91bdac793c59"],["/archives/2019/05/05/index.html","dc77cc2913202702135649d9d9117511"],["/archives/2019/05/06/index.html","0eb4fa5fc580d50fbcb437aec41ee939"],["/archives/2019/05/07/index.html","e37b53ee254dbb6dccb1a0cea7d1796f"],["/archives/2019/05/08/index.html","7606e281931d22212259aaf7c5933e7d"],["/archives/2019/05/index.html","bf5a49e805d4f97a0bf9d9d4254c642b"],["/archives/2019/05/page/2/index.html","52a6a5824920c212af3ec361f1525482"],["/archives/2019/06/01/index.html","5791f8f82061d25623e01c5efc356c39"],["/archives/2019/06/23/index.html","645b93ab8a11e95a28f5d276356c3ff4"],["/archives/2019/06/index.html","4321af5246fa039c2ddd207e0493842c"],["/archives/2019/07/01/index.html","9278c058743ebb14d2036dd9ae51338b"],["/archives/2019/07/02/index.html","2cc73ed7b7d8e7336c65f7d19a335625"],["/archives/2019/07/03/index.html","f1881eae4e5b5b24643df5e0c558fa47"],["/archives/2019/07/07/index.html","c85505e0e29be711715b547f45ecc621"],["/archives/2019/07/12/index.html","c5f38a0c32acee68149d8b48998acaba"],["/archives/2019/07/index.html","ff807233c0be4cefa59548d3f16fda5c"],["/archives/2019/07/page/2/index.html","2da4590c81bf70c78c5c40ebfdd2b757"],["/archives/2019/08/15/index.html","9625d5138acd401f415cee59844b0c7e"],["/archives/2019/08/index.html","c1782142c595042d52961326be578387"],["/archives/2019/index.html","80c2bba057fdb0338f0d8a5b4f899415"],["/archives/2019/page/2/index.html","83ffcc488386fee17a421ed380464210"],["/archives/2019/page/3/index.html","7cc9147828a694d270c8bbabbda03bc2"],["/archives/2019/page/4/index.html","56d048fbf4cddc702b91e985081048fb"],["/archives/index.html","6fc93a6ac3451a0a7206b757289cf54a"],["/archives/page/2/index.html","214411f52a8ff9050736243c343020cf"],["/archives/page/3/index.html","a93fd1500f8cbdc6379b2d2cee154846"],["/archives/page/4/index.html","940d472f5ba5328233e5cacd7682165b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","b040990ad7e0b694c8b837a866c82a67"],["/categories/SLAM/index.html","7065e5ea42511a0c0f54d9e660d94671"],["/categories/c/index.html","7e8fefaffca45ac91bc60c74d16a7f0b"],["/categories/cuda/index.html","b4b5b1c021c24254a8a0bc24b1cd8c79"],["/categories/dl/index.html","097d99588fb1be87c835243c89f5ce98"],["/categories/index.html","0c9c7ede4e633c4c5b5da0a7e7740e27"],["/categories/python/index.html","039f89545b37d7e7c4eb5fdd4b3e8133"],["/categories/三维重建/index.html","6fb61af59a17ba88a0b6772218d90054"],["/categories/博客优化/index.html","fc5b7f1942fcfe4c787f9fd16b24aae3"],["/categories/多视图几何/index.html","d71d1d97cf6193c45e7997485e97711c"],["/categories/学习笔记/index.html","7952fddc2dbdb5ed7f7090f2a0513784"],["/categories/数据结构与算法/index.html","0363c0296c86bfd09fff260a1038c126"],["/categories/点云处理/index.html","d5b7783565586b8820a056101846833e"],["/categories/环境配置/index.html","4669a111f6bf2c9a418866960bcf8891"],["/categories/碎碎念/index.html","f2171be770542cd53943fd93e2cacfcd"],["/cnn-layer.html","e6a3eb18628f23584cebacbf4c3ec01a"],["/cnn-model.html","bf4b6a29fbf234021140bdf9f09fc9c8"],["/cpp-string.html","9358ee5935577f87cd983158aa049564"],["/cpp-vector.html","4b62da92e315036ed762902329a01882"],["/css/main.css","88f7ca7b33de15e3d37b934919b78da7"],["/cuda-practice1.html","4d8ebd875f5428775df84fc198097478"],["/cuda-practice2.html","43874be73edbcd439f8c765f2664ceb2"],["/cuda-practice3.html","057ecf2052ba6745b9da8557016bcf17"],["/cuda-practice4.html","af1584405b68277e97c9cc3e9ee48145"],["/cuda-practice5.html","3c40613074f467fd320eb027f5e08417"],["/exception.html","31dc4d5b54f49fe2c7257151bd44edfc"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","f1d82f9914e9f3809edc30c3a59389c6"],["/hello-world.html","27b6ec735798cc5986a1a0fd8f962221"],["/home-design/index.html","7400d5238420f1794554481dc761a3df"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","6eecf10483d162b6f8d34ace17b2ed10"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/avatar1.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","fe922915a47be850de5657877c3d8c3c"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","d4c84bf001acab9b06086d4bd9d4b049"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","260d12ecac192873048bb618d4a7e026"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","e000449f3427ac5d0970c174edaf620c"],["/link/index.html","8c4aebffe9065c16da2a8869b89f28e1"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","fcd9c04a19e2dd12db260d8b1ba971fb"],["/page/2/index.html","36463135a9399af24ef7ae23b81ac224"],["/page/3/index.html","a75400bd3e2a66d3ba052042e96fee09"],["/page/4/index.html","0906ffce256cef69c0fe4e006d263321"],["/photos/index.html","278d4d49db876e748e8163174ff944c3"],["/python-note.html","e4d02bb7f8bce6914dc7681d05cfd5b9"],["/resnet-densenet.html","ec399b32a9e20baefcfa455813d360f5"],["/show-issue.html","51a569c2aff5a47d10ac6fc6cb7dcb17"],["/signal-detect-and-estimate.html","06a91954eeb4a476283e4cfeff632ec0"],["/slam-total.html","3f26874062a07c4206c8b29c7692ca67"],["/slam1.html","87d8adbf1505e62f1fde1d42eaa1f6dd"],["/slam2.html","5f8fda75bb0bb484af2b58867a3f04ef"],["/slam3.html","22d7eb355642dbeb339ea45ee6564641"],["/softmax.html","e3d6d74cb194a6df6c7df3a9107cbaf0"],["/suanfa1.html","bbf7132771df60795149346b26275d8f"],["/sw-register.js","3af1dbdfd7eaa39c0d8ee1afb43db040"],["/tags/SLAM/index.html","9a11fc611234b7826963703701050c3d"],["/tags/c/index.html","9212811d0446842b2366c5d90d6682a5"],["/tags/cuda/index.html","a9296ec5763bd5456b8ca44395b613fc"],["/tags/cv/index.html","3e83d62a668d0a921840e28c50d25f3e"],["/tags/dl/index.html","29130d91f7fc2ca76303ad4433a0141d"],["/tags/index.html","0001ff82240f1bdfe66c7ece5db19d8f"],["/tags/python/index.html","9654b5eecdf6571939bc1867ffaed0a1"],["/tags/string/index.html","31cd90b0648dac23c2eff61aa76c1eb7"],["/tags/vector/index.html","c715d8423472832299d1571860855035"],["/tags/三维重建/index.html","6f83a94a89eb12841a49df38daf24874"],["/tags/博客优化/index.html","6bce773c4f04e131fb4c9e78b289faa4"],["/tags/卷积神经网络/index.html","cff9aa71bf16bf44e4d662052b7accd1"],["/tags/复杂度分析/index.html","6fdf72b8644f963a77b90730c50a6171"],["/tags/多视图几何/index.html","65fdc48d31d736a5b4ea822040cf11a4"],["/tags/学习笔记/index.html","2df9964c0d46488ffc8808298dca5f4f"],["/tags/异常处理/index.html","70badb69bdb3ee2a2c84e1679a9a4328"],["/tags/数据结构与算法/index.html","bbd5b45d12936350ce8ddfa8ed24d89a"],["/tags/点云配准/index.html","6ee6e6be83ec449396bb3ededd356691"],["/tags/环境配置/index.html","4a2761463d2a1695cfa17aab7481acbf"],["/tags/碎碎念/index.html","0503a49ea1ab54ef403a7267184243ba"],["/tags/计算机视觉/index.html","a40acfb0c2a0a79ef18ddbeac0a69f9e"],["/tags/论文解读/index.html","ca87b88f7569c22f2ef3ed6c0ca39d0e"],["/tags/高性能编程/index.html","dad6d2bc6fca964f02c5f95b4b1ec1b3"],["/talk/index.html","9edffde222af721e263dd23701716cda"],["/tips-for-overfit.html","1dab489971480126f99cd51b212e5dce"],["/tips.html","e1e94deebf2be3ff2bf5775b230097f3"],["/trimmed-icp.html","6e7a6e4f30e908c34a7a36106c1177c6"],["/ubuntu-and-windows.html","dceb528dc2ac73d902b43cfbbdce8ef6"],["/underfitandoverfit.html","e62cdbff2254e9243fd3e21c752a57eb"],["/visual-odometer1.html","222fa18715aacfcb6aa972d8382abfb4"]];
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
