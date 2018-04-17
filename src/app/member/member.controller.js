/**
 * Created by DELL-PC on 2017/7/15.
 */

export default class memberController {
    constructor($scope, $rootScope, $stateParams, memberService) {

        console.log('------------------member strat!-----------------');
        $rootScope.layout = {
            hasQQclient: false,
            hasChatbox: false,
            hasheader: true,
            hasfooter: true,
            hasConnectUs: false,
            hasPricingDialog: false
        };
        // var svgarr = [];
        // var svgStr = "data:image/svg+xml," +  
        // "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>" +  
        // "<foreignObject width='100%' height='100%'>" +  
        // "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:16px;font-family:Helvetica'>" +  
        // "<p>Just have a <span style='color:white; text-shadow:0 0 2px blue;'>TRY</span></p><p><b>By Dion</b></p>" +  
        // "</div>" +  
        // "</foreignObject>" +  
        // "</svg>";  
        // for (var i = 0; i < 9; i++) {
        //     svgarr.push(svgStr);
        // }
        // for (var j = 0, len = svgarr.length; j < len; j++) {
        //     var img = new Image();  
        //     img.src = svgarr[j];  
        //     document.getElementById('memberContainer').appendChild(img); 
        // }
        // var param = {
        //     svgobj: svgStr
        // }
        
        memberService.getSvg().then(function(res){
            // console.log(res.data);

            // var img = new Image();  
            // img.src = res.data.svgpic;  
            // document.getElementById('memberContainer').appendChild(img);    
        });
        $scope.membernum = $stateParams.memberId;
    }
}

memberController.$inject = ['$scope', '$rootScope', '$stateParams', 'memberService'];
