/**
 * Created by DELL-PC on 2017/7/15.
 */
function appService($http, $q, $rootScope, $location, ajaxService) {
    var ajax = ajaxService.ajax;
    function getUrl(url) { // 提取url前面的公共部分和传进来的url参数进行拼装
        var baseUrl = `http://localhost/shizhan/xiaobailogoservice${url}`;
        return baseUrl;
    }
    
    var httpObj = {
        /**
         * 接口：获取头部导航栏信息
         * params:无
         * 
         */
        getHeaderInfo: function () {
            var url = getUrl('/header/header.php'); // 实测:真实访问后台php文件接口，并返回数据随机验证码
            return ajax({
                url: url,
                method: 'get'
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded'
                // }
                // params: params,
                // data: data
            });
        }
    }
    return httpObj;
}

appService.$inject = ['$http', '$q', '$rootScope', '$location', 'ajaxService'];

export { appService }
