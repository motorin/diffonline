'use strict';

angular
  .module('DiffOnlineApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'chieffancypants.loadingBar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
