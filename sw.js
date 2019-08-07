/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","648e485ac86c73a7d0c56f717d0ff16d"],["/Nonlinear-optimization.html","e51a4a20aa49ccb7e28c72042112da96"],["/SFM-intro.html","a3f66fd8f9e3441d02df85e30cedce2f"],["/about/index.html","ae7589d27525f599f084e63d58180460"],["/archives/2019/05/03/index.html","e8e4e8fb5f8bf0d18c08dfee0c38a719"],["/archives/2019/05/05/index.html","021a7e3f1943b33dfe63cd66fdff1183"],["/archives/2019/05/06/index.html","d8f2c180d5b734f2aeaca9841fd0fd3a"],["/archives/2019/05/07/index.html","8de65412f336d952805aade39f692e50"],["/archives/2019/05/08/index.html","1e7261cda33213d6bbaba3001013b742"],["/archives/2019/05/index.html","d938ca79a809e38d2d89b5fad5454e47"],["/archives/2019/05/page/2/index.html","71c3c088c6daa7175e2be677a8c2a148"],["/archives/2019/06/01/index.html","6c782059bcb6dbe4a9174bbc746aed64"],["/archives/2019/06/23/index.html","d20815764126c0f2d58d75a99cdae412"],["/archives/2019/06/index.html","8ede729888477cddbe74b65995c2a793"],["/archives/2019/07/01/index.html","343de2f2d70d746388667ff0523256cf"],["/archives/2019/07/02/index.html","67eb3fb4b9be0c4055bd88de9bd18574"],["/archives/2019/07/03/index.html","e00f4db45502b4a136e8418eb655fd96"],["/archives/2019/07/07/index.html","f6d29b9089025141dbdd4f45298860db"],["/archives/2019/07/12/index.html","3be5668e407138d2b4e902c8ff2c2e94"],["/archives/2019/07/index.html","2cb2b1d7a03b957a7ed199d624160bff"],["/archives/2019/07/page/2/index.html","8490870739e8ebda0939f89433885f99"],["/archives/2019/index.html","a5e5696077739dbfe99680a181fd327f"],["/archives/2019/page/2/index.html","7636584f92b933828ba6cc542ea7574c"],["/archives/2019/page/3/index.html","4de4170c2fc3ba1c00116f6f5c5b72b7"],["/archives/2019/page/4/index.html","0552801eb2e0ed5dfa6af392693440b5"],["/archives/index.html","804ea05afaaf2630b10e758da0f4b0d5"],["/archives/page/2/index.html","c584e14c08466fca6dce88347944bf2a"],["/archives/page/3/index.html","ae572fabfad3ecfd38ffe32a3e7f0508"],["/archives/page/4/index.html","fb4f77810123a197a67a8bf2d12f9f8d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","8aa3c2b5366d95475b3231dbe70af9c1"],["/categories/SLAM/index.html","6898bee101d4556e709db29f169ce9a4"],["/categories/c/index.html","bffa72b4ae5ecbbb21d8b2a07b93770b"],["/categories/cuda/index.html","d836cedb086c6aec0dad3c25ce54e755"],["/categories/dl/index.html","80e15a6bf2dc9f43508742f2fe71ccac"],["/categories/index.html","bfd1a3e0fe42e314d1945a218db7ae74"],["/categories/三维重建/index.html","8dc27144a558506324377d0d6d245d6c"],["/categories/博客优化/index.html","c0b563f362523617f6a0c565aecb9534"],["/categories/多视图几何/index.html","ef3c90d523f8edcece380a202073c969"],["/categories/学习笔记/index.html","11ffb2f2665d4539a1689eba804e081e"],["/categories/数据结构与算法/index.html","e9d6d3a4799d670e31ca18988dc32ddb"],["/categories/点云处理/index.html","a084d50b21a81ec96622d6d333daac7a"],["/categories/环境配置/index.html","be9d30baee9f06e3602664cf11d2c6e8"],["/categories/碎碎念/index.html","3a510d10882d3c7b7cdaef411fa2c6ff"],["/cnn-layer.html","86a5ae2836cc5e353624615a9d9be62b"],["/cnn-model.html","8c65e2fc107b2d20c66a726f6209d9e9"],["/cpp-string.html","4b3305aa318883b432e87d427ffa8c3f"],["/cpp-vector.html","e8d5cd7db9204693a734208091cd5983"],["/css/main.css","0261f9fe5f8aecb2327d80b472472413"],["/cuda-practice1.html","866f6fb88101d4f153ce7ca0f3d31254"],["/cuda-practice2.html","98059cd582dfd95b9dc62e6ee4d9a013"],["/cuda-practice3.html","c86db7cb7259a214fea5a9722f31fd7b"],["/cuda-practice4.html","77871a7f3a0f8011418ddc7ce988f0e8"],["/cuda-practice5.html","52faf51d098da1402f6fe0dcc2e5589c"],["/exception.html","a798a2f67eb3f2c072fcb2a421ba36e7"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","1616e7e1fc0242f9d56da7df9f9eb8d0"],["/hello-world.html","ea0fb9af14f0473b512d2d0b1c69a498"],["/home-design/index.html","0db11e279b85dc86aedcc50a029a9abc"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","6eecf10483d162b6f8d34ace17b2ed10"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/avatar1.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","7565c7f24cc27ecae71c6b96631f7d9a"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","799e7550e839cfea878190cefac83752"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","112be7baa3c52985eb0dd45cd1bcc1b4"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","a9fdfaa1a29e4391c1f3dae0b181b929"],["/link/index.html","43733f95d3f89647319ad5fc12bec379"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","fcb0244f520f43e886dba52e4e73260e"],["/page/2/index.html","bad9329f64595ed1379921097d1357db"],["/page/3/index.html","78c802072f50eb4f4da106027ae299a2"],["/page/4/index.html","258a83401de69949160601790042cd00"],["/photos/index.html","86f299386874a61419cd2d041cb065d7"],["/resnet-densenet.html","2027aad83e43a8a0a88a721904ba8dc0"],["/show-issue.html","6c5c877ed159d84bdc02a2fe6e7a00ad"],["/signal-detect-and-estimate.html","b80b325b3cd1c1d118299bbc8fbba682"],["/slam-total.html","d0619a950c91cf3c78665ef891cd7aab"],["/slam1.html","e2c16529ab3782e8b038bfa57273453c"],["/slam2.html","61117a38d92054fde92b84ed2c7f5142"],["/slam3.html","d89512dae7aa2fca6b57aafa4acd5e25"],["/softmax.html","7e9ddd059c9e7757883fdcca02a69796"],["/suanfa1.html","c163340c0f28ce7b4625f751c0f077c0"],["/sw-register.js","84cc5e6812e401647be0cb3b3fd34936"],["/tags/SLAM/index.html","252ddfddb8b7b0f1d83137f340716655"],["/tags/c/index.html","dba2decfbf92b58ba216be75716e3d6b"],["/tags/cuda/index.html","50471c963e1f3b2a2c4ce7aaec733105"],["/tags/cv/index.html","a6d929a6b001e3b909f194b6e35dd84c"],["/tags/dl/index.html","a44040555306001a6efebe41d574088b"],["/tags/index.html","3b92c7819d0e5805c88e7e8d685fcbff"],["/tags/python/index.html","bafea9be3805da9e3640ec171c145f36"],["/tags/string/index.html","7728a6a562dcc5dc5c4159c3e9438c96"],["/tags/vector/index.html","e29e0647963c04a5f6f6b214c281e25b"],["/tags/三维重建/index.html","5fc0ae456fa643b547a0c4ce71aa0e31"],["/tags/博客优化/index.html","a0de583b8bab994e7e64936b90709c03"],["/tags/卷积神经网络/index.html","cde61ec2db3a4554aeb431a7ae87d983"],["/tags/复杂度分析/index.html","a32a31dd7d7f0a191b5bd8254ca1fb4e"],["/tags/多视图几何/index.html","c0a65036954b848225ce7477393dc76b"],["/tags/学习笔记/index.html","5e2cbc25ce51c024483138ae985b8010"],["/tags/异常处理/index.html","f66df6693f61b178ce9dcea0d9fd6da1"],["/tags/数据结构与算法/index.html","9fcdb2b7dee547c5275eadc2c93e1b66"],["/tags/点云配准/index.html","69224ad4f05355512be29617b130e4cf"],["/tags/环境配置/index.html","98c2da60d15927c5f81260c0c83d96da"],["/tags/碎碎念/index.html","5ce8dfd00557b6e5872a82e7e9c0c5e4"],["/tags/计算机视觉/index.html","19097a4744ec6946ea8e322be7b17bc2"],["/tags/论文解读/index.html","bc84db34948d51ab20ff0bdddf27fa76"],["/tags/高性能编程/index.html","b7614a275499a604b8aca0054f3c9e10"],["/talk/index.html","79d2597eb269869238a70831cb38126a"],["/tips-for-overfit.html","dd2fc386b6f84c7c4628c038c67a3159"],["/tips.html","eb080564507587e9b23aaaa8218c9b37"],["/trimmed-icp.html","1e5756363d8092243703f32eca11fcb7"],["/ubuntu-and-windows.html","6656dd2e6aab9d65723d25f05b77a0c9"],["/underfitandoverfit.html","4666f2c1c1bd73b20acbd889fe73577e"]];
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
