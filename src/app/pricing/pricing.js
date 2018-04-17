/**
 * Created by DELL-PC on 2017/10/08.
 */

import { pricingDirective } from './pricing.directive'


export default angular.module("pricingmodule", ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('pricing', {
            url:'/pricing',
            template: '<pricingdirective></pricingdirective>'// 指令模板字符串只能是小写,否则指令无效
        });
}])
.directive('pricingdirective',pricingDirective)
.name


