class appController{
    constructor ($scope, $state, $rootScope, appService, $translate) {
        // 国际化初始加载
        $rootScope.lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh_CN';
        $translate.use($rootScope.lang);
        // 控制header.html作用域
        $scope.headerloaded = function () { // 这个方法就是header头部加载时触发的函数，所以加载时需要头部变化的业务逻辑都应写在这个方法内
            console.log('header loaded!!!');
            // header加载时调用接口获取头部信息
            appService.getHeaderInfo().then(function(res){
                // console.log(res.data); // 输出头部信息
                $scope.navs = res.data;
            }, function(err){ // 跨域不成功时，err对象会捕获到错误信息
                console.log(err);
            });

            var loginStatus = sessionStorage.getItem('loginStatus');
            if (loginStatus == 1) {
                $rootScope.logined = true; // 这个最外部控制器可设置ng-include包含进来的header.html和footer.html模板的作用域
            } else {
                $rootScope.logined = false;
            }
        }
        $scope.logout = function () {
            $rootScope.logined = false;
            sessionStorage.setItem('loginStatus', 0);
            $state.go('index');
        }
        $scope.switchLanguage = function () { // 点击切换语言运行时
            
            if ($rootScope.lang == 'zh_CN') {
                $rootScope.lang = 'en_US';
                localStorage.setItem('lang', 'en_US');
            } else {
                $rootScope.lang = 'zh_CN';
                localStorage.setItem('lang', 'zh_CN');
            }

            $translate.use($rootScope.lang);
        }
    }
}
appController.$inject = ['$scope', '$state', '$rootScope', 'appService', '$translate'];
export default appController