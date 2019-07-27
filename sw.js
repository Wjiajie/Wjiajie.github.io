/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","e333e6b93422e3507b43bb393c7d0d8c"],["/SFM-intro.html","5ffe54ce1be64594590a6ec43acabb03"],["/about/index.html","fb395e9607f78b4fc32b11c304495cfd"],["/archives/2019/05/03/index.html","415904aa154bd47e8a01b42c53897507"],["/archives/2019/05/05/index.html","02d3b757237821fc499e13a62a5b5b7c"],["/archives/2019/05/06/index.html","ebae90e72ef45174464cb01585d53a21"],["/archives/2019/05/07/index.html","6fcf4088e0360de1252c1be348ba133a"],["/archives/2019/05/08/index.html","f7609e09043bab09b4578ad7896b58a8"],["/archives/2019/05/index.html","ae5791e50e238815b6ab7d55c937774d"],["/archives/2019/05/page/2/index.html","244fdaaadb0de4dee93ac74958bfdf55"],["/archives/2019/06/01/index.html","a37f293cb8cca4f69779ab1e29b078d0"],["/archives/2019/06/23/index.html","c4a12c0b677764bcc86640e2e9f6dcc3"],["/archives/2019/06/index.html","e8c8228abf7551c8b033320064ed95b1"],["/archives/2019/07/01/index.html","74bd88f991f51362ee367f775153cdd4"],["/archives/2019/07/02/index.html","8219dc555f9a27b0ae3d0b3d61db1854"],["/archives/2019/07/03/index.html","80979750248e7d4f6ba0cbe7d1fd4760"],["/archives/2019/07/07/index.html","03f38df5db9db2aade0651744d1d4e76"],["/archives/2019/07/12/index.html","76dd98e94561c77f24410b95915fc30a"],["/archives/2019/07/index.html","ca638377d265daa061f638075197e455"],["/archives/2019/07/page/2/index.html","f212a41bc4ed46083a206564125bfe42"],["/archives/2019/index.html","2fe27b0d136233928a0ac2c1ec0db159"],["/archives/2019/page/2/index.html","f3dfcb5ee72a92e1e0190b47d0942b3f"],["/archives/2019/page/3/index.html","b3f3f8d5ec2299ea11963df6089f7032"],["/archives/2019/page/4/index.html","6a4383dc1452833ecc269d8f8b972e49"],["/archives/index.html","87e5c1edd6c3c911c3a89412e1b4687b"],["/archives/page/2/index.html","d47a0455421f784fe179376dd5d0812e"],["/archives/page/3/index.html","20df0b3d62e4dda9db4588870b5e181a"],["/archives/page/4/index.html","007e3ef6285b312fc15cbb4224894827"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","f928830f0b21dd7df463013f26dca5af"],["/categories/SLAM/index.html","8543b3337293afb742599fba93a5ecd6"],["/categories/c/index.html","59e5655485164c02f581f1e2ab6cd1cc"],["/categories/cuda/index.html","ae02d41c87a81a1d09985167795d720f"],["/categories/dl/index.html","faa4ba3c9d634f643fb85c0341578d99"],["/categories/index.html","da8559bb8eec21d66f122bc905039ed8"],["/categories/三维重建/index.html","9bb2d02444fab153773aa941bb915aaf"],["/categories/博客优化/index.html","576e319c6540ec0d6ef7af129a74456e"],["/categories/多视图几何/index.html","ce0714ddd9cabb455bb122333cab41e0"],["/categories/学习笔记/index.html","73da5ab8065723fda2c3ff3cf323fa31"],["/categories/数据结构与算法/index.html","cc5a4199f17fdb33d9e0563243365caf"],["/categories/点云处理/index.html","e645acc5183e783c2061f4bc1d464a69"],["/categories/环境配置/index.html","b5a522e9b602758d79109072db55eaee"],["/categories/碎碎念/index.html","8043a660b0cd984de23260a2f1152ab4"],["/cnn-layer.html","acc9315dbb2aa99692b35f231adf0c94"],["/cnn-model.html","c87289675dfdee84f43f4812f52582e7"],["/cpp-string.html","a7087d4502783870a6ef10702b24f7dd"],["/cpp-vector.html","dd3679dac45b1f0209cee25dbd326403"],["/css/main.css","b99df38c777fc0604436748e555e9fd2"],["/cuda-practice1.html","384fb10b3a05116caaab1e2b4991bf55"],["/cuda-practice2.html","beff09955cf67f65247e9abee6c04b7c"],["/cuda-practice3.html","35cedfaa29880a115d0d33b8aaa58428"],["/cuda-practice4.html","5864fdd34d2d292f99477a7c5bca36df"],["/cuda-practice5.html","edc508b4c81cfa503c916b1f1d2de0ec"],["/exception.html","2d1f177f26a07f8b33dd99d73100959c"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","f4843782f02f64363ac90854c6ef902c"],["/hello-world.html","d36db3f7a00534472fd20e4b3d534228"],["/home-design/index.html","04660bffe86cd008a9523001866375a0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","780854b90c9a2ed4d6c2b65273e914ee"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","27097f34f5475aff1f3268dac8d0925c"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","418374a889b69d9a1fab0c4c6a30aa7a"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","56acbfe3a3ff98b802057ec32f1d7a71"],["/link/index.html","ac0e877915252395a167628e852d39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","64fb888cce707cfdae134dda0a58c99b"],["/page/2/index.html","206f04e1968146420a3f72a3827916b5"],["/page/3/index.html","acfd564078f2f4c18cb96501db9a78ce"],["/page/4/index.html","4ff29b08b616e7dd83c59f99cbb6c5b4"],["/photos/index.html","656c06110fa1fae43c29df44a74a8e0c"],["/resnet-densenet.html","7a2cadf12eac6de9e68681e3be610520"],["/show-issue.html","e9e406303d7beb1f6c1045160afb7cdc"],["/signal-detect-and-estimate.html","2a11a104177813228dc882f6fcef6968"],["/slam-total.html","779cde40c91a614c9c4eac01e06fc6c4"],["/slam1.html","9763932e89f854cd6a3c9efc9f5b2eca"],["/slam2.html","203bfe393ade7bd7284ae9169be4e460"],["/slam3.html","e79c94febaf70a17b3063be1066e639c"],["/softmax.html","5ba0b78bde10e5e5e201b1d15546d3c6"],["/suanfa1.html","74b5232e3b90d2ce3cc53cf6ca0d2cd8"],["/sw-register.js","53671afe45ed6d31811f4aad85eb0806"],["/tags/SLAM/index.html","2ae5908e5c46d4b0e9a344e43bd865e1"],["/tags/c/index.html","7b06c8482652315b35d3ea7754119beb"],["/tags/cuda/index.html","b3102c28b0ab7fbb0f9c16ec733f48f5"],["/tags/cv/index.html","9d9be2ce585a4e537d1d2d35bfabd1e4"],["/tags/dl/index.html","dedc7d05a8d1e3498d57aa408bb27846"],["/tags/index.html","aaf95b2b424a02d61b9c69e01414e58d"],["/tags/python/index.html","941f1ce639699d8000c340acb4b6c721"],["/tags/string/index.html","407b901244be695f612530790d33560c"],["/tags/vector/index.html","a0d22f3d9f829ec5f94037b295dde62e"],["/tags/三维重建/index.html","fd0df971c9ca597efcf704afd2335d6d"],["/tags/博客优化/index.html","75e9343c477db804c685515b37bb408e"],["/tags/卷积神经网络/index.html","eae845fdad71810bd1a361651874a692"],["/tags/复杂度分析/index.html","edd25a8b0bc580829804c35f54a7b1a6"],["/tags/多视图几何/index.html","db3e33557205a1969b7bdcbbf9d0bacb"],["/tags/学习笔记/index.html","a0dd0954ca5a0a4f457bc8a3c962ce4f"],["/tags/异常处理/index.html","d4e1a8ce48d9cf538b7c200a4e8ba717"],["/tags/数据结构与算法/index.html","fb3969192ad9aa924e0585741eb7aced"],["/tags/点云配准/index.html","5b19e779e8e658ee434ec6536596cc0e"],["/tags/环境配置/index.html","30fe530057d4558167ffc489f37af15f"],["/tags/碎碎念/index.html","8a6ecfa1d809a50d983e7da04f12f71d"],["/tags/计算机视觉/index.html","35ffd08caf24ae7664d760e553d5b4a3"],["/tags/论文解读/index.html","f096da4414a2d550eb1aa9c9a5348875"],["/tags/高性能编程/index.html","1005fcfb1bf1b92c89f67adebb9b7823"],["/talk/index.html","9a940d26a7c6304578d7ebe91d276567"],["/tips-for-overfit.html","dd2c5f16b595d80754ce0f942725f5b8"],["/tips.html","3d40ec8f32c2f0d6fd83eb1095261e54"],["/trimmed-icp.html","5b39d1eec2ae836ea7a1d29967a68520"],["/ubuntu-and-windows.html","ceb5a289b3825442af2f70025651e212"],["/underfitandoverfit.html","e4099dd9ab3da25fc87146b9c8c55937"]];
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
