(function (){
  'use strict';

  angular.module('JonGoApp')
    .config(function($stateProvider) {
      $stateProvider
        .state('view3', {
          url: '/view3',
            templateUrl: 'app/view3/view3.html',
            controller: 'view3Controller',
        });
    });
})();

