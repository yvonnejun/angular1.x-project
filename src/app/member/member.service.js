/**
 * Created by DELL-PC on 2017/7/15.
 */
function memberService($http, $q, $rootScope, $location, ajaxService) {
    var ajax = ajaxService.ajax;
    function getUrl(url) { // 提取url前面的公共部分和传进来的url参数进行拼装
        var baseUrl = `http://localhost/shizhan/xiaobailogoservice${url}`;
        return baseUrl;
    }
    
    var httpObj = {
        /**
         * 接口：获取后台随机生成的验证码，并发送短信到用户手机用于登录验证
         * params:用户输入的手机号
         * 
         */
        getSvg: function () {
            var url = getUrl('/svgimg/svgimgtest.php');
            return ajax({
                url: url,
                method: 'get',
                transformResponse: function (data, headerfn) {
                    console.log(123456);
                    console.log(data.data);
                    return JSON.parse(data.data);
                }
                // params: params
                // data: data

            });
        }
    }
    return httpObj;
}

memberService.$inject = ['$http', '$q', '$rootScope', '$location', 'ajaxService'];

export { memberService }
