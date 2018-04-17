/**
 * Created by DELL-PC on 2017/9/15.
 */

import controller from './faq.controller'
import template from './faq.html' 

export const faqDirective = function () {
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {
            // var sampleLogo = angular.element('#sample__logo');
            // // console.log(sampleLogo);
            // sampleLogo.find('li').each(function () {
            //     $(this).hover(function () {
            //         $(this).find('.scalable').css({
            //             zIndex: '5',
            //             width: '150%',
            //             top: '-25%',
            //             left: '-25%'
            //         });
            //     }, function () {
            //         $(this).find('.scalable').css({
            //             zIndex: '0',
            //             width: '100%',
            //             top: '0px',
            //             left: '0px'
            //         });
            //     });
            // });
        }
    }
}
