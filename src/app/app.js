import '../lib/vendor/framework'
import '../lib/vendor/style'
import commonService from './service'
import { appService } from './app.service'
import { appDirective } from './app.directive'
import about from './about/about'
import connectusmodule from './connectus/connectus'
import qqclientmodule from './qqclient/qqclient'
import pricingmodule from './pricing/pricing'
import aboutusmodule from './aboutus/aboutus'
import mainmodule from './main/main'
import chatboxmodule from './chatbox/chatbox'
import faqmodule from './faq/faq'
import pricingDialogmodule from './pricingDialog/pricingDialog'
import questionnairegmodule from './questionnaire/questionnaire'
import loginmodule from './login/login'
import membermodule from './member/member'

var oaApp = angular.module('app',[
    commonService,
    about, 
    qqclientmodule, 
    connectusmodule, 
    pricingmodule, 
    aboutusmodule, 
    mainmodule, 
    chatboxmodule, 
    faqmodule, 
    questionnairegmodule, 
    loginmodule,
    membermodule,
    'ui.router',
    'pascalprecht.translate'
    ])
.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'src/i18n/', // 前缀
        suffix: '.json' // 后缀
    }); // 预置清单文件加载的前后缀，访问路径格式： i18n/en_US.json

    $translateProvider.preferredLanguage('zh_CN'); // 默认选中某一清单为当前语言
}])
.directive('app',appDirective)
.service('appService', appService)
















// .config(($stateProvider, $urlRouterProvider) => {
//     $urlRouterProvider.otherwise('/'); // 实测ui.router是由默认跳转效果的
//     $stateProvider
//     .state('main',{
//         url: '/',
//         // view: {
//         //     'mainView': {
//         //         template: require('./app.html')
//         //     }
//         // }
//         // template: require('./app.html'), // 实测这样是可以直接加载到app.html文件作为模板文件的
//         // controller: appController,
//         // template: template
//         // template: '<appDirective></appDirective>'
//         views: { // 原来以前都是views写错了写成了view:程序居然也不报错
//             '': {
//                 template: '<app></app>'
//             }
//         }
//     })
// })
