angular.module('HangrWeb').config(function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/pages/home/index.html'
    }).when('/404', {
        templateUrl: 'views/pages/error/404.html'
    }).otherwise('/404')
});