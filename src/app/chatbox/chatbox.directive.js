/**
 * Created by DELL-PC on 2017/10/7.
 */
import controller from './chatbox.controller'
import template from './chatbox.html'

export const chatboxDirective = function () { // 注意——指令的小括号里面可以直接注入内置指令供调用
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}