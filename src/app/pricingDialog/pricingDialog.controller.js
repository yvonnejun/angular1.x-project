export default class pricingDialogController{
    constructor ($scope, $rootScope, $document) {
        console.log('pricingDialog loaded!');
        // $document.on('click', function () { // angular中的$document等效于jquery中的$(document),后台都可以用jquery的方法
           
        //     // alert(123);
        // })
    }
}
pricingDialogController.$inject = ['$scope', '$rootScope', '$document'];