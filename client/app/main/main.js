'use strict';

angular.module('JonGoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        // templateUrl: 'app/main/main.html',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
      });
  });
