/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","8c6ea7cf384e77725ffadd7a9c70d04a"],["/Nonlinear-optimization.html","0c16f866eb262be991eff23b9a168873"],["/SFM-intro.html","1b63ac1c60a7a10c1572a27d89e12ed2"],["/about/index.html","8e0d7c74afd410cc7b12ff994f130947"],["/archives/2019/05/03/index.html","d3f34b815237c3853b743f4c4dda10fb"],["/archives/2019/05/05/index.html","6ead020a5d241006d384451e45a7716c"],["/archives/2019/05/06/index.html","c5c77b67e5b1fb8c6636d1bf865bb8b5"],["/archives/2019/05/07/index.html","90228f248693cb904ffc8673fb678126"],["/archives/2019/05/08/index.html","00330d4100d8797f695a09c79f935ea1"],["/archives/2019/05/index.html","728fd47d1fbaddb7ee8609a595408b18"],["/archives/2019/05/page/2/index.html","d8a9bb92e057f1da0c950d2b4b17e25c"],["/archives/2019/06/01/index.html","e1d263f9a0bac78b1824aa224441127c"],["/archives/2019/06/23/index.html","473bcae87cdcbc575836e107c01b46d9"],["/archives/2019/06/index.html","0f67bb0e8207e89608eeedeb0bb7419b"],["/archives/2019/07/01/index.html","c61decab0616009141df410e0478716e"],["/archives/2019/07/02/index.html","8a7e50a5724688d017a8fdfc2d924752"],["/archives/2019/07/03/index.html","f09667d002992903995ec5d6c7114a76"],["/archives/2019/07/07/index.html","8a9d5f05104e583594dae201ac93c623"],["/archives/2019/07/12/index.html","4ababbb1312477523c007809e6534a68"],["/archives/2019/07/index.html","ccd1e75850b02af9a9b1f317e0114895"],["/archives/2019/07/page/2/index.html","b26b70961734b0dc1fa62ae6dc593f18"],["/archives/2019/08/15/index.html","fa148690746cad707015441fec750dea"],["/archives/2019/08/index.html","e2794e27d0f517ffbab093732e004a4b"],["/archives/2019/09/07/index.html","83773fe5dce50b449de776bd24c0750f"],["/archives/2019/09/index.html","2f716a467f5289993697bf97b0284bb9"],["/archives/2019/index.html","bbe579906bc2f6bacf157890d4426cf5"],["/archives/2019/page/2/index.html","df10b7a4e115b03acfdc4f0a566e80db"],["/archives/2019/page/3/index.html","bcc58eca74a4a8e2ab21f39ed61060a9"],["/archives/2019/page/4/index.html","810f3aabce757107b155a785319b34de"],["/archives/2019/page/5/index.html","255ab9cc0129202e4e28aa600d94040d"],["/archives/index.html","c353802f1771542701b9d3ce1bc088f6"],["/archives/page/2/index.html","9cfd66cf1098d11e1b16c36875a3fb99"],["/archives/page/3/index.html","54812ced53a7bef5ccb44c025258b4af"],["/archives/page/4/index.html","726afe29f84bdbdca7f283e09240da78"],["/archives/page/5/index.html","b2633ddab46b5a4a7ebe1119b1a126dd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","b0960c9d35cc835e6f8fdadbae8bad47"],["/categories/SLAM/index.html","395d45686e8b8e2c9dd5b909f0a6d18d"],["/categories/c/index.html","b692a504440927c48f49ab45173ad62c"],["/categories/cuda/index.html","a636e8c0c70084fc87c8b7cef81d6419"],["/categories/dl/index.html","dfb46fa4a0ba2fc2793aa2da99223d3e"],["/categories/index.html","7a70018f5c97beef115305a78871ca18"],["/categories/python/index.html","10b0b31d8174977ac26e53257309eb21"],["/categories/pytorch/index.html","73fe69a620b50c3af6801b58d6a4c713"],["/categories/三维重建/index.html","18e22e2409cd5e12d609eaea55ae8166"],["/categories/博客优化/index.html","536f00953e31aca498cbcd049eb2acf1"],["/categories/多视图几何/index.html","1f834c8e0d5812828e3432b8fefe9e2c"],["/categories/学习笔记/index.html","779428676b0d1806ed761d644f5b56eb"],["/categories/数据结构与算法/index.html","1f39446c862ad5febaae03478b01fe73"],["/categories/点云处理/index.html","95eb15876607925730ca707c98ab978a"],["/categories/环境配置/index.html","096846a00d6cf2e47f395ac5b953d01e"],["/categories/碎碎念/index.html","715740c7cb6012c808108cb9bc24b6a4"],["/cnn-layer.html","b046434a6bb37f8ded744c6c2a19afda"],["/cnn-model.html","e0c918bb2822a7d199120e7645a84732"],["/construct-function.html","f3dc709a8582ad464eddbba836ac2403"],["/cpp-string.html","f01c02f9a0a3bb36bef204d33b1763a5"],["/cpp-vector.html","837f1ed91c40ee8e2652dabaa63aecee"],["/css/main.css","8a84f7f6dc57bc0b5ca79e0560564907"],["/cuda-practice1.html","ea370f23dbff64e9540bf36696c95722"],["/cuda-practice2.html","7d2a28da0dbdfcfd6952501f5a38a000"],["/cuda-practice3.html","548d4b87ab04dba3631e32f2dbe372d5"],["/cuda-practice4.html","8095b9a57dbe61b76d81d99d33525142"],["/cuda-practice5.html","5a079875e629af214ab69efd52afe5bc"],["/exception.html","40eba12c81b4e4856082d0c8b1756554"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","5d95fe9c034615f97603e6619d11c883"],["/hello-world.html","fca1b914672c65228ec715449e864369"],["/home-design/index.html","e51bfe6482e8d77e36d2e1db30a63a57"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","6eecf10483d162b6f8d34ace17b2ed10"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/avatar1.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","509a38ede2bc7b701b2bcf4707359870"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","de27b82d3bb8a567e14204a615540789"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","4dd64946d2634df9c9784edc1ecf4286"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","4826d482398e73098400b7c2fe6cca1e"],["/link/index.html","70e626c50fc2c6cb2831f7e8c71c621d"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","512ea96f746863060c23192870bfb612"],["/page/2/index.html","3ed2d3a9dec9021d6f3c88ea8fef2cc9"],["/page/3/index.html","70aa8245688d630378bb5bd7d7ac42ab"],["/page/4/index.html","5798c27173ea6c3a788b2f7af61153f8"],["/page/5/index.html","ac2f13e851601ed47db73b538d1be9e0"],["/photos/index.html","6889b56db924f35a1ac67abe0e0259f9"],["/python-note.html","49976932ec4a61b9d3fa558095df0997"],["/pytorch-保存和加载模型.html","4c8e21e4333c100560914db405e399ba"],["/pytorch-数据加载和处理.html","6d9ac23993bc1675529ff5b583ff492a"],["/pytorch1-0-基本步骤.html","15824a022226f9ebd3932b781ebde684"],["/pytorch图像分类.html","374a782c70ff44a4447a0eba8f1f50ee"],["/pytorch特性.html","42d320bfca1f5f06aa5d4c9d77cbc5a7"],["/pytorch迁移学习.html","0fc26c9b67407aa2bcc647c34dcb0324"],["/resnet-densenet.html","326aafe33a6a3d2680cc2e8c18e99c4a"],["/show-issue.html","11508e9af474760e7b78bdb272b39695"],["/signal-detect-and-estimate.html","1d141d8235d8a17dd061d40fb0f06590"],["/slam-total.html","9eee18f562adf163173e906037119d52"],["/slam1.html","b5e4216543eb8103c8b39f9c90fa3780"],["/slam2.html","8da2becd35fb9a00a42afce6f2edfa11"],["/slam3.html","0ecd424ed82409985a1e869527c9a097"],["/softmax.html","be29cf3b43826bbfaaa9b83bbd4828c4"],["/suanfa1.html","382392106180223b14d4076c51ab2cb4"],["/sw-register.js","7af03240b70f4f04cad2a1c81b8edcb9"],["/tags/SLAM/index.html","783ac9ec7a92f138ac544dae6cc03fd2"],["/tags/c/index.html","bcc2f32910db13ff8841eaf1718fe9d6"],["/tags/cuda/index.html","3efcb0cf6d70573765cd394fe9b60bac"],["/tags/cv/index.html","d00ff81da5157c92f3b7f52f4bfff2a0"],["/tags/dl/index.html","7d2b439f050b8c4f18495ce8bf75dd64"],["/tags/index.html","6298cc6792e9b7043c7ca5b5bc067cb9"],["/tags/python/index.html","5e5546972bc2d724593c638d8cde9c40"],["/tags/pytorch/index.html","19e7acb0e0c4854b308937eb34fc08ad"],["/tags/string/index.html","9cf151fcb6a91fdc0c764d6e5680268d"],["/tags/vector/index.html","90b2ab13d755f19c0eb47600372b39bb"],["/tags/三维重建/index.html","a6d5f5196d2fbc623963ffde7a49e79c"],["/tags/博客优化/index.html","259e43625dd75d38cd43adbce15f4733"],["/tags/卷积神经网络/index.html","c822e6a87df15b8be3c4de90b5aa1cfe"],["/tags/复杂度分析/index.html","b882e9bc6620f6e729702d1ffb0b04cd"],["/tags/多视图几何/index.html","e54c973337a0261dfdaea95bac5229d8"],["/tags/学习笔记/index.html","f67ea7c1703a71004577b73cee7a1927"],["/tags/异常处理/index.html","476836c4334776ba541ba6d211896f4f"],["/tags/数据结构与算法/index.html","a2cc21f1db18b6cf4f768e4a213b5997"],["/tags/点云配准/index.html","64bd480708e68a88fec7f925a1703b96"],["/tags/环境配置/index.html","a5faee3788d150528836d47a8671d731"],["/tags/碎碎念/index.html","3bd768a442d720c63dffc703c045aac4"],["/tags/计算机视觉/index.html","ae22378620427e5eb24bb3ecea46fc26"],["/tags/论文解读/index.html","b61a0870e40671b76774e6bb00b21ef5"],["/tags/高性能编程/index.html","3e7402e5f541e3505e39e1dd347b7845"],["/talk/index.html","5c7d8d9502de4211ec7118c445f7dad5"],["/tips-for-overfit.html","b002064ab171cf910a79c2cf11912f8c"],["/tips.html","ece607ee1aad0c6e4937f74a25186f69"],["/trimmed-icp.html","cbdab32fbcc8c49031260e4f9b69d6c0"],["/ubuntu-and-windows.html","eff517b83c06c45ea96f052d10700758"],["/underfitandoverfit.html","a2f69d9ca53263f711299d364e62c513"],["/visual-odometer1.html","23e23c4a36e37ee766df5a72a96e1d81"]];
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
