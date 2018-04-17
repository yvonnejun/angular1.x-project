/**
 * Created by DELL-PC on 2017/9/25.
 */

import { aboutusDirective } from './aboutus.directive'


export default angular.module("aboutusmodule", ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('aboutus', {
            url:'/aboutus',
            template: '<aboutusdirective></aboutusdirective>'// 指令模板字符串只能是小写,否则指令无效
        });
}])
.directive('aboutusdirective',aboutusDirective)
.name


