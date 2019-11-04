/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","6fd2222e9d35b3842fec5d96c3d272c1"],["/Nonlinear-optimization.html","566b711225f531d6b221615dcd42bf9f"],["/SFM-intro.html","52dc6d1cb2672637d60b88a570b3aff4"],["/about/index.html","6f911d7cd4a3f08b644b6dff3068f089"],["/archives/2019/05/03/index.html","f35916918b5978179d3a584a3dbede1c"],["/archives/2019/05/05/index.html","922634c53dbe6bd9b95770c15fd4f069"],["/archives/2019/05/06/index.html","4c28c674b60fcca290606cfc3239ab33"],["/archives/2019/05/07/index.html","6e0ba69b29d9c3ab901b2a9855d26570"],["/archives/2019/05/08/index.html","5f7986320a0459735158baaab6de3375"],["/archives/2019/05/index.html","5ee6d962c815664eabc055fd9a1d137a"],["/archives/2019/05/page/2/index.html","82737be639463b5f72bbd36cd64b6935"],["/archives/2019/06/01/index.html","44dcf2c8512847d6bed5fcdb34263aec"],["/archives/2019/06/23/index.html","6898c7315c5dc162a0f915a72c9ee1cc"],["/archives/2019/06/index.html","2a00f0508e4c54ce3baf6394dbdb95d4"],["/archives/2019/07/01/index.html","60163407792ad24d898baca40d535985"],["/archives/2019/07/02/index.html","f551dd30ca98b831ab35fdce66858c30"],["/archives/2019/07/03/index.html","6af7aab9206cc6056ac8c7aa7ed780c5"],["/archives/2019/07/07/index.html","1ac2241c776f3605d3f635b2ec793531"],["/archives/2019/07/12/index.html","ffa4654d9837517bbde3c069239fdb51"],["/archives/2019/07/index.html","97b8cf4ec8c5cbe000333053676a84d2"],["/archives/2019/07/page/2/index.html","73bfd121ab3a5999e6aec98b437b34e4"],["/archives/2019/08/15/index.html","d29d23034fe9edf7cdf4de83ff73a9dc"],["/archives/2019/08/index.html","74e838181e193f73a90310777a38cba0"],["/archives/2019/09/07/index.html","b86d7a8f63d0de61678b7dd5d0e6f5b9"],["/archives/2019/09/index.html","c029454ad2a95c5b683bd984b360d613"],["/archives/2019/index.html","030dcda8754f2240a62ed7b13f0b2520"],["/archives/2019/page/2/index.html","300d3efe3ecfc75ce34a167132ea8d49"],["/archives/2019/page/3/index.html","e21a673f656e15cbd7f461a9aba947be"],["/archives/2019/page/4/index.html","89cf87c3633d41f497f0c8945989dc8c"],["/archives/2019/page/5/index.html","f72ada14f8a1e487511edcc110adf3c2"],["/archives/index.html","c413e21d25d4dacc72c156ad05185e60"],["/archives/page/2/index.html","e3aa82b4e6aebca81a2652d4aeac460e"],["/archives/page/3/index.html","7054f61338deff639669d739c61208dd"],["/archives/page/4/index.html","2db7f94825b21e3772ca4e8a48b01f97"],["/archives/page/5/index.html","b6c4f320788ae98d8df3d1fe86058fab"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","6aee918ef44f687c564f9396ac1c1c09"],["/categories/SLAM/index.html","5851efacd1797061492bf1ba57b1e2f4"],["/categories/c/index.html","84b197158764a0957fc52eeccd1e4ec3"],["/categories/cuda/index.html","06c066476af2e6dd8971819c9a8e6227"],["/categories/dl/index.html","f45e4cd5a009e3e03a2478cd1166b6d6"],["/categories/index.html","aca2345a0ab5ee513cdfc8b9f674166f"],["/categories/python/index.html","1f56e0befbb097fbef9c46c22fb28e75"],["/categories/pytorch/index.html","67c3adc418e5b6212ab3c7de093d3e0c"],["/categories/三维重建/index.html","3f17f667ba8a6899e12a2730829e3d69"],["/categories/博客优化/index.html","f695512685ee6d01d60b88a00bef1fe2"],["/categories/多视图几何/index.html","10c9981062d00335db7d9786df4eb2f8"],["/categories/学习笔记/index.html","474c964bec36976eb670393e32ff9a9e"],["/categories/数据结构与算法/index.html","467ac8566e2ab0519ad26e4547a0c43b"],["/categories/点云处理/index.html","3d65c29c78f69365c94c55b0f9feef15"],["/categories/环境配置/index.html","e60584744744a6093ab6e43156ca5df3"],["/categories/碎碎念/index.html","b07262a904f48eaa792150db24799dcc"],["/cnn-layer.html","e94aa0847b40c0dae1e3bd4994cef7fa"],["/cnn-model.html","4f250f6399cb185d6dab6412e2c7030a"],["/construct-function.html","15a3891a525f89ce9faa4c265eb4ff2b"],["/cpp-string.html","1af3d71ff61744c506580648807311e6"],["/cpp-vector.html","4cc27042787908cc71b6575e063de41c"],["/css/main.css","30ccd717bd3ff7bf9b878728e05553f7"],["/cuda-practice1.html","5370467937247c328e16230c7e5adfcc"],["/cuda-practice2.html","c5c27fa621fee67796d72bc5c635d592"],["/cuda-practice3.html","1a4a1bfb27462f33ec7edeb1d6e7d550"],["/cuda-practice4.html","348b7c6412ea06f2bb7807f905c7d790"],["/cuda-practice5.html","bddc8f9dc50144a91bbc38cf8aa6e835"],["/exception.html","b58e28154a13c141d2008fbb4536cf56"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","65b3d7b2bd2469ecf68dac6782c2de69"],["/hello-world.html","46d21e177db2e4e0ff06ca21857e0bd7"],["/home-design/index.html","9c15ce3a4239ad0fece9edaa44c24e5c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","6eecf10483d162b6f8d34ace17b2ed10"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/avatar1.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","eefb242633904ea3741a847aeaab1463"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","4698f9c57aaa5d143f957914f2b2b15a"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","1e5bc41a0d2831ddf0d47580670db0d2"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","7aa66ac18627f5a65dd6bdaaee6d2bc1"],["/link/index.html","ca6377cbf8e69de6f291132855dab0d4"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","16a4776fa9db050e4cfb8e94645466d7"],["/page/2/index.html","91bacba8aef39dfb10b355f4993f2cbb"],["/page/3/index.html","d8fc65e3ec186b1436bdc8b4dba1bbfd"],["/page/4/index.html","ed42492184423d619a6b25fe61094e67"],["/page/5/index.html","121f33bb1fb8f0c20ef1596f1b08ea6a"],["/photos/index.html","ad6556f8f9b19d121dd43c5932181765"],["/python-note.html","dc3ea8784f402f519a544c8daa57ef39"],["/pytorch-保存和加载模型.html","431d6ecd80863c3d0ae7488a2df9bf08"],["/pytorch-数据加载和处理.html","43109679e421ee44b2219df77098c66a"],["/pytorch1-0-基本步骤.html","99c0a091ce9510944b82870cd2d2dbba"],["/pytorch图像分类.html","4b896bc4881705711254308afd10cf21"],["/pytorch特性.html","5f8c72516e8d780c364cd6a80acd54bb"],["/pytorch迁移学习.html","95936f97112594729203f296a4668b9a"],["/resnet-densenet.html","c81f7f6af99153237d020f91f2c99341"],["/show-issue.html","a17fa21ca85bb07c3ff26c32cd9df048"],["/signal-detect-and-estimate.html","9935d83a67f5eb1114454fe5be9ae0d0"],["/slam-total.html","1032a512b99d2c7b2956cf2f3209e5e2"],["/slam1.html","729711a1ca224b4174c2da70cf151c35"],["/slam2.html","bf8e51d187c98dcae4d85cea0bc58671"],["/slam3.html","41e82a10b3c04d106ecd0363525a2ae7"],["/softmax.html","19554e6b1e472635fd77a1362e78f00d"],["/suanfa1.html","24525877cb886b150bd78043b6373f94"],["/sw-register.js","a95918047178a6a2cd236cce55bce010"],["/tags/SLAM/index.html","de0e3a7b3c26c853b3ed7218856096fd"],["/tags/SLAM记录光流和直接法/index.html","c7ed1ff6b1733a48163a5f02fed86383"],["/tags/c/index.html","4d84e68b089bf7dba15e5e96436b8f0c"],["/tags/cuda/index.html","c48f9e32cf2246e5536a03fd511699d0"],["/tags/cv/index.html","c6e3b11a3cfb540534990ff1b4713c2f"],["/tags/dl/index.html","9fe4462931a17df4b3f7b077491d8fd7"],["/tags/index.html","83ce82406332ca8ef0d790ad254ae638"],["/tags/python/index.html","107e40a58427eb753692d44d5d0f5cf7"],["/tags/pytorch/index.html","d5bfa62ae36d76c9093c525eec12f1cd"],["/tags/string/index.html","96bbf7b6224dc862db24bd20c5ab6821"],["/tags/vector/index.html","65a2b47558c26ddc8e51cde32402530f"],["/tags/三维重建/index.html","a3787efd8399732453b8d92c61b93d15"],["/tags/博客优化/index.html","36e3a9d14afbd11b876948546d1b3888"],["/tags/卷积神经网络/index.html","564cf8f3cb6718c2fdf771f6b7eee0a8"],["/tags/复杂度分析/index.html","01bf10dd511024382e6e7ae7049548a1"],["/tags/多视图几何/index.html","aa2122a9f7654370752e79eaa390ab4a"],["/tags/学习笔记/index.html","6fb023bdfd1be6e257b0b2c8a93502a2"],["/tags/异常处理/index.html","1d683e6954437be764d59ae04240dc6f"],["/tags/数据结构与算法/index.html","9975502ad10debe7bed9480d03e0760b"],["/tags/点云配准/index.html","9032b3de0b65f84f80c841660414f490"],["/tags/环境配置/index.html","da58af4912751790dbf7ad2a4273cdf6"],["/tags/碎碎念/index.html","22eb6ff5d334e693827d80c05145f746"],["/tags/计算机视觉/index.html","09b5ceaffffcf2cb80cd5453687d13d5"],["/tags/论文解读/index.html","0d0daf515856f352be8d7b1bde844769"],["/tags/高性能编程/index.html","910f4b5cb63aa95438d1284b7bdf0965"],["/talk/index.html","9c46783a406727e1cbd8df7307a1b716"],["/tips-for-overfit.html","3eed83efd6f182f04322c73a4b23619b"],["/tips.html","00deaf962045d921a7e9af96953690d2"],["/trimmed-icp.html","bded0dd8dfe7b35edfc899d77b491541"],["/ubuntu-and-windows.html","7564b8e4d9fc6405fcd44a9e3000b7c8"],["/underfitandoverfit.html","c39b5d59860e03f1849679f50e407e8a"],["/visual-odometer1.html","4678440e90bfaffeed4f0dc2207e86a5"],["/vo-2.html","2502d9fff4777bdb467cb7d30dd90aba"]];
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
