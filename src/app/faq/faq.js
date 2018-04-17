/**
 * Created by DELL-PC on 2017/9/25.
 */

import { faqDirective } from './faq.directive'


export default angular.module("faqmodule", ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('faq', {
            url:'/faq',
            resolve: {
                setGlobalLayout: ['$rootScope', function ($rootScope) {
                    $rootScope.layout = { // $rootScope.layout全局架构的设置推荐写在这里，也可以写在模块控制器里面的任何位置，如果需要动态设置的话，推荐写到控制器里面去设置
                        hasQQclient: false,
                        hasChatbox: false,
                        hasheader: true,
                        hasfooter: true,
                        hasConnectUs: false,
                        hasPricingDialog: false
                    }
                }]
            },
            template: '<faqdirective></faqdirective>'// 指令模板字符串只能是小写,否则指令无效
        });
}])
.directive('faqdirective',faqDirective)
.name


