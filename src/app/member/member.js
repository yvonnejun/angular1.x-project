/**
 * Created by DELL-PC on 2017/9/25.
 */
import commonService from '../service'
import { memberService } from './member.service'
import { memberDirective } from './member.directive'


export default angular.module("membermodule", ['ui.router', 'commonService'])
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('member', {
            url:'/member/:memberId',
            template: '<memberdirective></memberdirective>'// 指令模板字符串只能是小写,否则指令无效
        });
}])
.directive('memberdirective',memberDirective)
.service('memberService', memberService)
.name


