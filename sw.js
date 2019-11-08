/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Epipolar-Geametry-and-F.html","1de8bc37b8edc7c5a329153fdd33afc8"],["/Monocular-total-capture-compile.html","c1f1e0209e13b8731c07aa5138d14cc0"],["/Nonlinear-optimization.html","db5790ff80ad1d820693ee0adfcbff51"],["/SFM-intro.html","b8c7ddd64030fd60ce626bc12b5eb711"],["/about/index.html","a3ac2640bc0c1d63759f646b7898342b"],["/archives/2019/05/03/index.html","662a732058f5754d565ba53e87a1a308"],["/archives/2019/05/05/index.html","95a650b794af0156d64e5761c040a578"],["/archives/2019/05/06/index.html","47959c38f81ff7899be83bdee682d3de"],["/archives/2019/05/07/index.html","a766346e6f6df088ffd2453fba80d2e9"],["/archives/2019/05/08/index.html","f22787322b9fb2162ee91fd4350203b7"],["/archives/2019/05/index.html","61bec7a278048b508e87f9b73c00dcbb"],["/archives/2019/05/page/2/index.html","88001abae91fa3ec0cb5c672ab248f88"],["/archives/2019/06/01/index.html","1fd5c4b14912fdc70f1d290751f99a80"],["/archives/2019/06/23/index.html","03b2c511de7b3ff413db990b416eb20d"],["/archives/2019/06/index.html","50d9c727015bd25b43a9fee3cc08fe5e"],["/archives/2019/07/01/index.html","7b33c917aadb9b42ae99449cca713582"],["/archives/2019/07/02/index.html","ad31cd3e97d4f2bc4c20a8ac1ba1c132"],["/archives/2019/07/03/index.html","d20b79f0d2f6c5a42765acf6a4b71533"],["/archives/2019/07/07/index.html","eebeaf2e7695afa12fbc4eb8eb80e9dd"],["/archives/2019/07/12/index.html","c3e9789387e728704173dbd69b81506c"],["/archives/2019/07/index.html","2df7efccc50511871fd6d985b00d1266"],["/archives/2019/07/page/2/index.html","42abb6fe55bf68910cc46233c2fa5524"],["/archives/2019/08/15/index.html","f6f0e25b26c40699107fd1c10aa69dae"],["/archives/2019/08/index.html","58022322b5bfb8a7d6ce87561cbc85e4"],["/archives/2019/09/07/index.html","140210988fd8098821894edb12cb3da8"],["/archives/2019/09/index.html","2dc3f8a60ca556e1b12071ee8afbe8fe"],["/archives/2019/11/07/index.html","25363cf5fc54ae3e5de8ed5b04b03022"],["/archives/2019/11/index.html","f2e1c93254a6e3d16b4b2d6b08f12818"],["/archives/2019/index.html","83a93e01f542a097e36d298edd168011"],["/archives/2019/page/2/index.html","d466beadbce070768154701f09d0adc5"],["/archives/2019/page/3/index.html","3188df9f5ae224f92a75ae898659d688"],["/archives/2019/page/4/index.html","08b9ac85f730651480fd6253e6d55828"],["/archives/2019/page/5/index.html","e54d198f8abd0f39c3acbb4d223b2fc4"],["/archives/index.html","df3f590b508fc7e21f224bf3439d6ed1"],["/archives/page/2/index.html","df827dd75d42240d374c1af2fc1d530d"],["/archives/page/3/index.html","96408cb607191f122cd64df86f34cfd5"],["/archives/page/4/index.html","33dccd908a5e0e89406a62243eabade8"],["/archives/page/5/index.html","4ddcd7cfdeb99a399b3ec8a40c08fec9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/avatar.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/barch-normal.html","51e0a006bc5bf8572494882a7033158e"],["/categories/SLAM/index.html","8f8a06cf802d84fe67e5e416f7f98883"],["/categories/c/index.html","2bd741dd20acc87ef0267b3f82030380"],["/categories/cuda/index.html","e4650233c6e29f78bdd658dc4f76d47c"],["/categories/dl/index.html","768332ec3434b56befe38276ca7a7ad5"],["/categories/index.html","3507affca215755f4bcf9c7ef7d60d26"],["/categories/python/index.html","8c2370945f03988ff71f3841e44f7a9a"],["/categories/pytorch/index.html","415cc21d7674429276d8d9bf79199880"],["/categories/三维重建/index.html","d29c1bcd0508453ddf8842bd65a4e0f9"],["/categories/博客优化/index.html","4763028655f2fe9aae727be171e6d3e1"],["/categories/多视图几何/index.html","2db75838f442a7f6494c36c47aa558bc"],["/categories/学习笔记/index.html","2964839565fa75a7d92399873eae732d"],["/categories/数据结构与算法/index.html","324a55234cc9e4a1494512f4abe5c633"],["/categories/点云处理/index.html","64be31a9062ee81bc6362f5106453572"],["/categories/环境配置/index.html","99c920ad9a6374cb01b18283ff428761"],["/categories/碎碎念/index.html","71d0d056f233a0346cde0ee4233223b3"],["/cnn-layer.html","6c949a98a800b04899cab782cec0e2a3"],["/cnn-model.html","0344b458a6e87a065e8909e3db882e86"],["/construct-function.html","2398aa67bca18b5bf45df5a92290ba5a"],["/cpp-string.html","86086be8c09a1979e9f7294e3e0a10da"],["/cpp-vector.html","7d3388686f9fc15da46956f716f9bceb"],["/css/main.css","d5c6ff35bcc75030943c6294159be701"],["/cuda-practice1.html","ce61f9c3d741ac9db6a699993925277d"],["/cuda-practice2.html","3de2c1566fd7f340cfc2328b4d896b69"],["/cuda-practice3.html","5ce05783f3482d4a3ac42b2e0d6f8b3f"],["/cuda-practice4.html","b7b3f9349c71d5cd9d80d858431b08ba"],["/cuda-practice5.html","1470421ee139fd7fe9c8d1c5690e4b51"],["/exception.html","e2931d2ee7b0b7c5af42c3e52f2c89d9"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/Linux_Biolinum/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/Linux_Biolinum/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/Linux_Biolinum/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/google1d2c4806cb9b105c.html","c4512e9ba65b514cf5895318798097e7"],["/graduate.html","fdade2fe4e1b4f7797414c844dfe22a8"],["/hello-world.html","98ac3238317c0aee26a5de28b0e72c90"],["/home-design/index.html","192c483e779780fee23fb05450c4b520"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","6eecf10483d162b6f8d34ace17b2ed10"],["/images/avatar/avatar-admin.jpg","ea8aabf5b05b241a88a78b2c510badb8"],["/images/avatar/avatar-default.jpg","2473f4b4788acc12e4d3d5b86abe848e"],["/images/avatar/avatar03.jpg","cd9789cb2b2b68e5370d9f14cb3b79cb"],["/images/avatar/default-avatar.png","a83841c50aa67da6144860bd5031cc53"],["/images/avatar1.png","c8e4b121a4a43d76c75b7052ad31b5d3"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","21cea3f13d49025479481694273afd6b"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/jQuery.min.js","e3f24f23b859cf718282e3806ed5ce38"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/myjs.js","13bde2609d85807e0a9ab7e52a6c628e"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/fancybox/README.html","021c29b891fc7043ee4371efdbde8f55"],["/lib/fancybox/source/jquery.fancybox.css","85c7f081453c6e113d58cfe72f13ac2e"],["/lib/fancybox/source/jquery.fancybox.min.css","56a7fb54677ef45e9f6a0d785ff928bb"],["/lib/fancybox/source/jquery.fancybox.min.js","b593c4f91ceeafd0f5628cbc051fd8e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","4efbc40741d19408b4d5754eb5cd6983"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/README.html","94f9b282aab1d82ea3864827d55290d2"],["/lib/jquery_lazyload/jquery.lazyload.js","14fdc47b6861c7eda4c8e316222144d8"],["/lib/jquery_lazyload/jquery.scrollstop.js","718967042ac087374eea90aa6b3a4cff"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/linear-regression.html","a44163fffa3f068264826f2a8979a99d"],["/link/index.html","91030959c37f229cda986d68b5031712"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/openMVG-openMVS.html","39688db88442a5986a8ea9ce0e2c74ff"],["/page/2/index.html","7907730b2b31043d75193f6b4a677ace"],["/page/3/index.html","e709187d524b31431295fefdc8d0018c"],["/page/4/index.html","ee494ca283f9771a9425a5a86b2d55cc"],["/page/5/index.html","51304492ee798a7cf7ec9a4b356c3371"],["/photos/index.html","6eb2f24f34210b82288379021c4f3d0d"],["/python-note.html","3e22750cfb451330de5d75a3b2ebec92"],["/pytorch-保存和加载模型.html","7b1c2d886a91c2d883cdd0806706e431"],["/pytorch-数据加载和处理.html","5c8a963ce668f818254ef492da962162"],["/pytorch1-0-基本步骤.html","a7123e17a25d50248ae419a722545d99"],["/pytorch图像分类.html","da2aeaa77c0f18537a9e768d7d38fed3"],["/pytorch特性.html","36c8811e8d3bae497b8ebb529b5f90dc"],["/pytorch迁移学习.html","ebcbab9e817933d00b1397e51fa688f4"],["/resnet-densenet.html","db6ca43460bce22e6197c9c63c6d4469"],["/show-issue.html","237059ec6e78926b67e810971aaef026"],["/signal-detect-and-estimate.html","e7204efddb4505149d0936847e2a6ee3"],["/slam-total.html","588080f6df8faba73d176a23a0551077"],["/slam1.html","83366a351703a3cd87c2dcd71ccaa7cb"],["/slam2.html","ae75e15a5c68380fcbb272f62e7faa12"],["/slam3.html","04bfa096d81b89fb86a3bb0fc2ced1f6"],["/softmax.html","ea97ffa9309aa210ba21e6e912db1a88"],["/suanfa1.html","b5f7a114a7653205974892f9b0e1e6aa"],["/sw-register.js","834026ca43a40bc35ccc850d5e585503"],["/tags/SLAM/index.html","2d4da69ea368a13eb2a2a191300f86dd"],["/tags/SLAM记录光流和直接法/index.html","a1a447da7698e4422bafdc2310c1fca2"],["/tags/c/index.html","1745e47274602121be8c5464e5270cd0"],["/tags/cuda/index.html","3a432f69c42016336d54a1cd690fb1b7"],["/tags/cv/index.html","070e6b669d522c6355abbd001a75e169"],["/tags/dl/index.html","f25294f352129f7d3ecbe28274135dfe"],["/tags/index.html","c380a6a91655d7f20eb04d57885d7d4e"],["/tags/python/index.html","e62eb8f5fa9bacb633f678b6055ad808"],["/tags/pytorch/index.html","8cdd1bfe43a64067318f2b99812db950"],["/tags/string/index.html","0da434a12aca7d1f861194a28b4c9922"],["/tags/vector/index.html","665d6a5738d180444677cb80ecfea757"],["/tags/三维重建/index.html","1f38c582ed32b8b2b30392ae92bb4bd3"],["/tags/人体重建/index.html","c185132bf6cc1038e88fbfbb76486516"],["/tags/博客优化/index.html","1d649228e880fd252a1edfd86cfd50ba"],["/tags/卷积神经网络/index.html","bf35e8b2c6c7b61883d54d4d0dcf4fa0"],["/tags/复杂度分析/index.html","ca9d1f8f6c7fcfcb9a38f6ad78defb07"],["/tags/多视图几何/index.html","7be64edffcf577368c3f3150950229cd"],["/tags/学习笔记/index.html","a4e1a39865f321406d97a9a150cdda95"],["/tags/异常处理/index.html","f52eecfdf4f59865cb4a44a6d2b55bfc"],["/tags/数据结构与算法/index.html","a6c2998e88f0be4b6c75d6f8002c5f36"],["/tags/点云配准/index.html","a0cfd58be72f52ccfbc107c698bc282c"],["/tags/环境配置/index.html","fabb95c33643999f149b5c8aaf5d4a98"],["/tags/碎碎念/index.html","f9b326c9dbb7ca4711417894ef4a4ed6"],["/tags/计算机视觉/index.html","2779b96ed689c362899f8c62d21f30d9"],["/tags/论文解读/index.html","142a2f29d164db7bc7a640f8ba2b6ce8"],["/tags/高性能编程/index.html","8208390eeb59951bab5db35d58c25145"],["/talk/index.html","4404b650ff81ed7ec812c9c6125d7397"],["/tips-for-overfit.html","6186ef6bc031998c85eeaf22903573df"],["/tips.html","351774c5b5495e19f318a5bf4b9417dc"],["/trimmed-icp.html","0f5f715e1368d3a421f3e26e2fdd8c2e"],["/ubuntu-and-windows.html","d56d5993cdbca0b17ee8b37cf9e92eb8"],["/underfitandoverfit.html","d1524196703eb03a76ef24367427bed3"],["/visual-odometer1.html","4193115adfaa30a08ab24de32c2893a7"],["/vo-2.html","70128c4a97a12e19e87d979a8955fcb8"]];
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
