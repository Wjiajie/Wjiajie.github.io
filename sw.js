/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/3D Face Papers.html","1374aa341fdcf8f88aa242ece978405d"],["/Epipolar-Geametry-and-F.html","e09503bb207ca68c889e1d096e9e9a05"],["/Monocular-total-capture-compile.html","4e7772d8172665e6ac96ac74f03c739f"],["/Nonlinear-optimization.html","8b7e6ea039b95e46693ff03ccf8d5254"],["/SFM-intro.html","a58fbe6926bf0553fdca8face028cb96"],["/about/index.html","e1929d5002d69c987bb755bc786af6c0"],["/archives/2019/05/03/index.html","a258879bb03fcb96c834a396c2679995"],["/archives/2019/05/05/index.html","571eb58dd7243df3b9536eb2d8c1325f"],["/archives/2019/05/06/index.html","e1dda283a9bf34d61f0087254753a6f7"],["/archives/2019/05/07/index.html","d64d7e120c53e9f98f6f13eb7d8adf1d"],["/archives/2019/05/08/index.html","ebca25fce4b7862b38d8b16497658523"],["/archives/2019/05/index.html","9a82bb4f5f551ea1622bff9c7431888c"],["/archives/2019/05/page/2/index.html","7d4deb8cf36521193e046f3e84ddd15d"],["/archives/2019/06/01/index.html","a61094d2cbce132c3fe2e166c217025f"],["/archives/2019/06/23/index.html","219917c341e80c9e4ed5449412940051"],["/archives/2019/06/index.html","729c0d4f6c6393c5e6825ebaa2b142bc"],["/archives/2019/07/01/index.html","f08cf559772701d129ff9d142f2b980b"],["/archives/2019/07/02/index.html","d89c6d592c42f77beef1c8c27e31e43a"],["/archives/2019/07/03/index.html","f6674115382ffbf80064d678c709e53d"],["/archives/2019/07/07/index.html","b20f8e73f7b64d2fb25cceb51862a944"],["/archives/2019/07/12/index.html","8a4294679a88768b1fbc730e2bd603d2"],["/archives/2019/07/index.html","3f372b66adacff3bd5c0958acf72d1a4"],["/archives/2019/07/page/2/index.html","b9d22f3a758aff7c7dd7fa2270e3f3a6"],["/archives/2019/08/15/index.html","bd471cdddd210a3b0a58932662148a53"],["/archives/2019/08/index.html","c6e05936810fd5f58d6ea96551f37974"],["/archives/2019/09/07/index.html","7be6c136b9e12a1adb202b3505812883"],["/archives/2019/09/index.html","6b60facf7d63970c2586aaace2fc1fa7"],["/archives/2019/11/07/index.html","4a1fd76419feef3c3a8add34a53f1564"],["/archives/2019/11/index.html","50d3531930028b9635db09c16d2e4d61"],["/archives/2019/12/04/index.html","1e9a5611b176fa6b368680ffeef5b87a"],["/archives/2019/12/index.html","f469a1d006ea8f4a1e780234208acd92"],["/archives/2019/index.html","079d46627c0887ed80f40403147dc90a"],["/archives/2019/page/2/index.html","8fbbd32236650248ff7fbd92cc81ca11"],["/archives/2019/page/3/index.html","2659d66361bd134c0c4cf811880a2e09"],["/archives/2019/page/4/index.html","221f8281c2738f2ebe3e8c96be515bc3"],["/archives/2019/page/5/index.html","ced6570ec37a804cfbeb0caa1a6438a7"],["/archives/index.html","ab8a106bf83e669a7c2f05bba62f27cf"],["/archives/page/2/index.html","e53a6668adb74629b66311e4a7bd0681"],["/archives/page/3/index.html","aab9aad05719871063012de0a3bc22de"],["/archives/page/4/index.html","df187a21e9419a14fd75b62024cc97b7"],["/archives/page/5/index.html","7e22aff4a9e8ab86d3a5ea5651844ae6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","e3898241b9536eb265c3f4f5c7077fad"],["/categories/SLAM/index.html","de3a852acb9476fb536489b7f02ff333"],["/categories/c/index.html","b587d650f4f9498e7116f73464d98560"],["/categories/cuda/index.html","9b33309b61112a1cf9a465bd0aac06ed"],["/categories/dl/index.html","cab96033a97e5b30ecbe23aa1fa10082"],["/categories/face-reconstruction/index.html","012f20323ba840c90ad2cf627d2b7451"],["/categories/index.html","196b777c29a306fa0f50a49447a690f0"],["/categories/python/index.html","0459b3b996ecb9a82fcbfbc0eb4b747c"],["/categories/pytorch/index.html","b1824c4a182d3c56d09b87cae70681ff"],["/categories/三维重建/index.html","b930848e2994a52cda34a8954ed183da"],["/categories/博客优化/index.html","f7e3f19322954dbbc280f1c3a6b2840c"],["/categories/多视图几何/index.html","8d13c1209d8dd2c6c8a64fd9303cbd0c"],["/categories/学习笔记/index.html","94a614f8efb618e2dd023d2dc467f35f"],["/categories/数据结构与算法/index.html","0375cc9e5ee416d03a434f1bda131284"],["/categories/点云处理/index.html","b926cd52cc1728ac6371d4f78db3b656"],["/categories/环境配置/index.html","a31b2167a8471bad3d52c0e73fb4d428"],["/categories/碎碎念/index.html","0e85487508b5afefb72e6401c63ef0e9"],["/cnn-layer.html","520e8b24c3869606fbcc811ed1741f2d"],["/cnn-model.html","84a3a1c7fe976a5393728bc31e63c7a8"],["/construct-function.html","b95e90b3895c2645ed63a96fcbd0523b"],["/cpp-string.html","25553c4fb6d88586c4c7272f6b0da130"],["/cpp-vector.html","3b941685251ced98dd03c80ac4943399"],["/css/main.css","8a92a6ab68613e531fd50ad2d3c3a926"],["/cuda-practice1.html","2eca419b810443544abf9645feed66fb"],["/cuda-practice2.html","c01103c5b16314fa7b0480767cf0061a"],["/cuda-practice3.html","308d3dc07774e182bd40a2ba1ca1746c"],["/cuda-practice4.html","6bd3b02ced7bb9fbd6ae5dfa3d756817"],["/cuda-practice5.html","6fbc445d9ed1f19e625a96b16263dc29"],["/exception.html","04cd62cd681a11794ec7f3bcef41e271"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","a8091c2bf5813b67249dd6118bef45ef"],["/hello-world.html","0699da1802510058bdafde752f7f8ef8"],["/home-design/index.html","f6b8488a9081b33bdf80113801519171"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","6eecf10483d162b6f8d34ace17b2ed10"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/avatar1.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","357f6910cb5a4208fc8106a94336a889"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","009bdb17555c2b9780b69a9da3345683"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","78d237a3e12f52eeb56af1b91a1ed045"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","1c7dc9c59351cc09fa533ebcf2365362"],["/link/index.html","0d7bb5797cba4e88cf7c679bd34cf241"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","4c26ec73d335c6062bf59986a74896ae"],["/page/2/index.html","15ad4e0af1130d6542c8e407fb5e8c4e"],["/page/3/index.html","9aff77ffbb423ff2e5ef516e3abfb6f4"],["/page/4/index.html","c5ae4443c9d1b0e4ba98edc5df626504"],["/page/5/index.html","a767ae385bb389b59d055304667e5af3"],["/photos/index.html","6471df8d87a440b609b9b3ed16b283b4"],["/python-note.html","274455eef0b66fe02b3c8ca000bc91ab"],["/pytorch-保存和加载模型.html","459392bc327c03ce3c96828eb6197541"],["/pytorch-数据加载和处理.html","770c8e0a29980322c0520c2351107986"],["/pytorch1-0-基本步骤.html","087a40aefd4fdf3404897b57452db178"],["/pytorch图像分类.html","8fdf41b7c88dc8e0efb471c4567f52e1"],["/pytorch特性.html","4199f219d5fdad40c7ce33335027144a"],["/pytorch迁移学习.html","1808086a9306196d23ee2f7a0e8c72a8"],["/resnet-densenet.html","67793949a74570481e2894cddda56899"],["/show-issue.html","b624f39864b68d525131fd09f7c35d2f"],["/signal-detect-and-estimate.html","f307310ed98676ec950006cf920d0d77"],["/slam-total.html","8f82ed1f7c47e7f19b9b1b6ab1711820"],["/slam1.html","387191109cbbebcf0220e85c8fca8e0e"],["/slam2.html","9dcde0e97531f6cae3698a3b779d0885"],["/slam3.html","2fc868c5be8218aa3fe1ef4d47099f7d"],["/softmax.html","c79461611e0936c4ec747b7bfaf79f94"],["/suanfa1.html","409e9eaab8d877ccaf7ca528c6723c34"],["/sw-register.js","718d4d735ae0d3b44821ff8c8a497eab"],["/tags/SLAM/index.html","d78c860794e618175d53f6bd4b603309"],["/tags/SLAM记录光流和直接法/index.html","b656741f140aace91a066499ac9cdc48"],["/tags/c/index.html","0ee6298e7a62129db9d1a8d60c4265bb"],["/tags/cuda/index.html","135a3696ed9e1cab93a8615c88c509fd"],["/tags/cv/index.html","412b07aeabaa4c1f534c600c45900c3d"],["/tags/dl/index.html","d652a93d9825fa87d95f0cb7ff03e5fe"],["/tags/face-reconstruction/index.html","6fd3f4d28dfdb57543517d506ba5aaa9"],["/tags/index.html","239cc4739ab10cff369c927d75ab7940"],["/tags/python/index.html","c14121417ce1e04c7d073965db52ca1a"],["/tags/pytorch/index.html","3ca369648bb848d9c48047d915766bfa"],["/tags/string/index.html","56118fcbd691310a2e50e04f43a3a514"],["/tags/vector/index.html","191f723e737f38eb589ec0f6aa15b580"],["/tags/三维重建/index.html","b958f74c28542b26bb88d5fe36f6555d"],["/tags/人体重建/index.html","8e3358b7c58d76cee2667516845ba1d0"],["/tags/博客优化/index.html","185b9e374dd11d1d83f5ed1b4b00879e"],["/tags/卷积神经网络/index.html","7f92b2bb2d7c0a4df36582038dbfc206"],["/tags/复杂度分析/index.html","079969b7683f13ce0ad4d5dad5dcc8ef"],["/tags/多视图几何/index.html","64fa10a198eeeeca85f96d50287da06d"],["/tags/学习笔记/index.html","64773f2058c2f5b41d04bac84c5fbb81"],["/tags/异常处理/index.html","2186fe5af5530038da0845371dcb21c0"],["/tags/数据结构与算法/index.html","c11a37f58be8b1e1e62237743d15b1c4"],["/tags/点云配准/index.html","957a1300ae59cba574131620f2e76c0a"],["/tags/环境配置/index.html","c337a8133424557d6f370a135191b1c7"],["/tags/碎碎念/index.html","0fc6a8eb7460ee2b80a91a42b94cd86f"],["/tags/计算机视觉/index.html","1eb01f3b3edfa1f9c7eb32f78cc96418"],["/tags/论文解读/index.html","c73f6514cdd4767d6144d0902d122df8"],["/tags/高性能编程/index.html","588a4b8d6d7e397cb901c1cb187c3ec7"],["/talk/index.html","33276536ac54f41c398ff8bbc107dd68"],["/tips-for-overfit.html","302808a760ee8d69ab9dd152f6d366f3"],["/tips.html","e2a8ce415891f2a2f986567adba27901"],["/trimmed-icp.html","a9fc94c7a351ac74532dffc94e6065ff"],["/ubuntu-and-windows.html","7191c3926ddd43df433b367d8ef74f86"],["/underfitandoverfit.html","b56e53858644568b591b9577a5427618"],["/visual-odometer1.html","ea120ec4f0f9919e1fe7c23038a4114e"],["/vo-2.html","11e11f6dd5c959ec47a86eec7090cd3b"]];
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
