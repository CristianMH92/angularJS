var app = angular.module("myApp", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'PowerController',
        templateUrl: 'app/pages/power/power.html'        
    })
    .when('/settings', {
        controller: 'SettingsController',
        templateUrl: 'app/pages/settings/settings.html'        
    })
    .otherwise({
        redirectTo: '/'
    });
});