/**
 * Created by DELL-PC on 2017/7/15.
 */

export default class aboutusController {
    constructor($scope, $rootScope) {
        console.log('------------------aboutus strat!-----------------');
        $rootScope.layout = {
            hasQQclient: true,
            hasChatbox: false,
            hasheader: true,
            hasfooter: true,
            hasConnectUs: true,
            hasPricingDialog: false
        }
    }
}

aboutusController.$inject = ['$scope', '$rootScope'];
