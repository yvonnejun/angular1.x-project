/**
 * Created by DELL-PC on 2017/9/15.
 */

import controller from './questionnaire.controller'
import template from './questionnaire.html' 

export const questionnaireDirective = function () {
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}
