/**
 * Created by DELL-PC on 2017/10/7.
 */
import controller from './pricingDialog.controller'
import template from './pricingDialog.html'

export const pricingDialogDirective = function ($document) { // 注意——指令的小括号里面可以直接注入内置指令供调用
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {
            console.log(element); // 输出的当前最顶级元素指令标签
            $document.on('click', function () { // angular中的$document等效于jquery中的$(document),后台都可以用jquery的方法
                element.find(".popup--mask").css({
                    display: 'none'
                }); 
            })
            element.find(".dialog__btn").click(function (event) { // 点击dialog__btn按钮也可隐藏当前弹窗面板
                var e = event || window.event;
                e.stopPropagation();
                element.find(".popup--mask").css({
                    display: 'none'
                });
            })
            element.find("#pricing__dialog").click(function (event) { // 点击dialog__btn按钮也可隐藏当前弹窗面板
                var e = event || window.event;
                e.stopPropagation();
            })
        }
    }
}