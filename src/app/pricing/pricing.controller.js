/**
 * Created by DELL-PC on 2017/7/15.
 */

export default class pricingController {
    constructor($scope, $rootScope, $document) {
        console.log('------------------pricing strat!-----------------');
        $rootScope.layout = {
            hasQQclient: true,
            hasChatbox: false,
            hasheader: true,
            hasfooter: false,
            hasConnectUs: false,
            hasPricingDialog: true
        }

        $document.on('click', function () { // angular中的$document等效于jquery中的$(document),后台都可以用jquery的方法
           
            // alert(123);
        })
    }
}

pricingController.$inject = ['$scope', '$rootScope', '$document'];
// export default pricingController
