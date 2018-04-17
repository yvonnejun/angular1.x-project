/**
 * Created by DELL-PC on 2017/9/25.
 */
import commonService from '../service'
import { loginService } from './login.service'
import { loginDirective } from './login.directive'


export default angular.module("loginmodule", ['ui.router', commonService])
.config(['$stateProvider', '$httpProvider', function($stateProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true; // 客户端运行跨域的设置
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'; // 客户端post方式修改json流为表单输入流
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $stateProvider
        .state('login', {
            url:'/login',
            resolve: {
                setGlobalLayout: ['$rootScope', function ($rootScope) {
                    $rootScope.layout = { // $rootScope.layout全局架构的设置推荐写在这里，也可以写在模块控制器里面的任何位置，如果需要动态设置的话，推荐写到控制器里面去设置
                        hasQQclient: false,
                        hasChatbox: false,
                        hasheader: false,
                        hasfooter: false,
                        hasConnectUs: false,
                        hasPricingDialog: false
                    }
                }]
            },
            template: '<logindirective></logindirective>'// 指令模板字符串只能是小写,否则指令无效
        });
}])
.directive('logindirective',loginDirective)
.service('loginService', loginService)
.name


