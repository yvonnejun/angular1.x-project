/**
 * Created by DELL-PC on 2017/7/15.
 */

export default class aboutController {
    constructor($scope, $rootScope) {
        console.log('------------------about strat!-----------------');
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

aboutController.$inject = ['$scope', '$rootScope'];
// export default aboutController
