/**
 * Created by fish on 15/10/12.
 */
angular.module('kangkang',[
        'ui.router',
        'ngAnimate',
    ])
    .config(function ($stateProvider , $urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'views/login.html',
                controller:'loginCtrl'
            })
            .state('first',{
                url:'/first',
                templateUrl:'views/first.html',
                controller:'firstCtrl'
            })
    })