/**
 * Created by DELL-PC on 2017/9/25.
 */

import { mainDirective } from './main.directive'


export default angular.module("mainmodule", ['ui.router', 'pascalprecht.translate'])
.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {
    // $translateProvider.translations('en_US', { // 英文清单
    //     'xiaobai.main.createlogo': 'Use artificial intelligence to build your own logo'
    // });
    // $translateProvider.translations('zh_CN', { // 中文清单
    //     'xiaobai.main.createlogo': '用人工智能打造你的专属logo'
    // });
    // $translateProvider.preferredLanguage('zh_CN'); // 选中某一清单
    
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url:'/index',
            resolve: {
                setGlobalLayout: ['$rootScope', function ($rootScope) {
                    $rootScope.layout = { // $rootScope.layout全局架构的设置推荐写在这里，也可以写在模块控制器里面的任何位置，如果需要动态设置的话，推荐写到控制器里面去设置
                        hasQQclient: true,
                        hasChatbox: false,
                        hasheader: true,
                        hasfooter: true,
                        hasConnectUs: false,
                        hasPricingDialog: false
                    }
                }]
            },
            template: '<maindirective></maindirective>'// 指令模板字符串只能是小写,否则指令无效
        });
}])
.directive('maindirective',mainDirective)
.name


