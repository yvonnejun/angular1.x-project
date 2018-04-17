/**
 * Created by DELL-PC on 2017/9/15.
 */

import controller from './aboutus.controller'
import template from './aboutus.html' 

export const aboutusDirective = function () {
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}
