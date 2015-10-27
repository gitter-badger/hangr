angular.module('Hangr').config(function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/home', {
        templateUrl: 'views/pages/home/index.html'
    }).when('/', {
        templateUrl: 'views/pages/home/index.html'
    }).when('/404', {
        templateUrl: 'views/pages/error/404.html'
    }).otherwise('/404');
});