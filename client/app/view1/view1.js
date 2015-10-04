(function (){
  'use strict';

  angular.module('JonGoApp')
    .config(function($stateProvider) {
      $stateProvider
        .state('view1', {
          url: '/view1',
            templateUrl: 'app/view1/view1.html',
            controller: 'view1Controller',
        });
    });
})();

