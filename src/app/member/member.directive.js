/**
 * Created by DELL-PC on 2017/9/15.
 */

import controller from './member.controller'
import template from './member.html' 

export const memberDirective = function () {
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}
