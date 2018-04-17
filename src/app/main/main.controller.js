/**
 * Created by DELL-PC on 2017/7/15.
 */

export default class mainController {
    constructor($scope, $rootScope) {
        console.log('------------------main strat!-----------------');
        // $rootScope.layout = {
        //     hasQQclient: true,
        //     hasChatbox: false,
        //     hasheader: true,
        //     hasfooter: true,
        //     hasConnectUs: false
        // }
    }
}

mainController.$inject = ['$scope', '$rootScope'];
