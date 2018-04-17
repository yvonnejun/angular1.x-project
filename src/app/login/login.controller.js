/**
 * Created by DELL-PC on 2017/7/15.
 */

export default class loginController {
    constructor($scope, $rootScope, $interval, $http, loginService, $state, $timeout) {
        console.log('------------------login strat!-----------------');
        $scope.sendCode = '发送验证码';
        $scope.focused = true;
        sessionStorage.setItem('loginStatus', 0); // 登录状态会话级，0:表示未登录，1：表示已登录
        $scope.sendVerificationCode = function (event) {
            $scope.focused = false;
            $scope.disbtn = false;
            console.log($scope.userform.phonenumber.$error.pattern); // 手机号输入正确则$error.pattern输出undefined；手机号输入错误，则显示true
            console.log($scope.userform.phonenumber.$error.required); 
            var required = $scope.userform.phonenumber.$error.required;
            var pattern = $scope.userform.phonenumber.$error.pattern;
            
            if (pattern == undefined && required == undefined) { // 当$error.pattern和$error.required同时输出undefined；则手机号输入正确
                // var inputNum = $scope.phonenum; // 要写成json对象的形式传params参数，否则直接传字符串，就会被angular自动分解成单个字符的形式传递给后台，属性名是(0,1,2,3,4...这样的)数值
                var inputObj = {
                    inputNum: $scope.phonenum
                }
                loginService.getVerificationCode(inputObj).then(function(res){
                    console.log(res.data);
                    if (res.data.sendstatus === 0) {
                        // 按钮置灰
                        $scope.phongNumValid = true; // 样式置灰
                        $scope.disbtn = true; // 禁用按钮
                        // 60s倒计时读秒          
                        var countdown = 60;
                        $scope.sendCode = '';
                        $scope.sendCode = `${countdown}`;
                        var timePromise = undefined;
                        timePromise = $interval(function(){
                            if (countdown <= 0) {
                                // sendCodeFlag = true;
                                $scope.sendCode = '发送验证码';
                                $scope.phongNumValid = false;
                                $interval.cancel(timePromise);  
                                timePromise = undefined; 
                            } else {
                                // sendCodeFlag = false;
                                --countdown;
                                $scope.sendCode = '';
                                $scope.sendCode = `${countdown}`;
                            }
                        }, 1000);
                        $scope.registerorlogin = function () {
                            if ($scope.VerificationCode == res.data.validnum) {
                                sessionStorage.setItem('loginStatus', 1);
                                // window.location.reload();
                                // $timeout(function () {
                                    $state.go('member', {memberId: res.data.mobile});
                                // }, 100);
                            } else {
                                $scope.vfcfocused = false;
                            }
                        }
                    } else {
                        alert('验证失败，请重新发送！');
                    }

                }, function(err){ // 跨域不成功时，err对象会捕获到错误信息
                    console.log(err);
                });
            }

            // 调用短信接口发短信
        }
    }
}

loginController.$inject = ['$scope', '$rootScope', '$interval', '$http', 'loginService', '$state', '$timeout'];
