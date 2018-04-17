/**
 * Created by DELL-PC on 2017/7/26.
 */
export default angular.module('commonService',[])
.factory('ajaxService', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
    function ajax(config) {
        var deferred = $q.defer();
        var config = config || {};
        var httpConfig = {
            method: config.method || 'get',
            url: config.url,
            params: config.params || {},
            data: config.data || {},
            responseType: config.type || 'json'
        };
        //新版本的angular中取消了success 和 error方法。

        //用promise吧
        //$http.get('api').then(function(success){

        // },function(error){

        // })
        $http(httpConfig).then(function(res){
            deferred.resolve(res);
        },function(reason){
            deferred.reject(reason);
        });
        return deferred.promise;
    }
    return {
        ajax: ajax
    }
}])
.name