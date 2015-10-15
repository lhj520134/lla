/**
 * Created by fish on 15/10/13.
 */
angular.module('kangkang')
    .controller('firstCtrl', function($scope,$state, $location, $rootScope) {

        $scope.ll= "width:100%;"+"height:"+document.body.scrollHeight + "px";
        console.log($scope.ll)

        $scope.go = function () {
            $state.go("first")
        }

    });