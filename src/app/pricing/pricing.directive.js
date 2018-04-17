/**
 * Created by DELL-PC on 2017/9/15.
 */

import controller from './pricing.controller'
import template from './pricing.html' 

export const pricingDirective = function () {
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}
