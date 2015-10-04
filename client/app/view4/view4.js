(function (){
  'use strict';

  angular.module('JonGoApp')
    .config(function($stateProvider) {
      $stateProvider
        .state('view4', {
          url: '/view4',
            templateUrl: 'app/view4/view4.html',
            controller: 'view4Controller',
        });
    });
})();

