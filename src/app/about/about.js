/**
 * Created by DELL-PC on 2017/9/25.
 */

import { aboutDirective } from './about.directive'


export default angular.module("about", ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('about', {
            url:'/about',
            template: '<aboutdirective></aboutdirective>'// 指令模板字符串只能是小写,否则指令无效
            // views: {
            //     'addbookView': {
            //         template: '<aboutdirective></aboutdirective>', // 指令模板字符串只能是小写，否则导入的控制器和template模板将无效也不报错
            //     }
            // }
        });
}])
.directive('aboutdirective',aboutDirective)
.name


