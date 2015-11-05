'use strict';

angular.module('JonGoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngLodash'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })

  .factory('JGSocket', function (socketFactory){
      return function (nsp){
        return socketFactory({
             ioSocket: io.connect('localhost:3000', {forceNew: true})
        });
      };

  })
  .config(['$tooltipProvider', function($tooltipProvider) {
  $tooltipProvider.options({animation: false});
}]);
