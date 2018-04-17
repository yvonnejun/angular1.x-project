/**
 * Created by DELL-PC on 2017/9/15.
 */

import controller from './about.controller'
import template from './about.html' 

export const aboutDirective = function () {
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}
