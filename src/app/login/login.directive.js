/**
 * Created by DELL-PC on 2017/9/15.
 */

import controller from './login.controller'
import template from './login.html' 

export const loginDirective = function () {
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {
           
        }
    }
}
