(function (){
  'use strict';

  angular.module('JonGoApp')
    .config(function($stateProvider) {
      $stateProvider
        .state('view2', {
          url: '/view2',
            templateUrl: 'app/view2/view2.html',
            controller: 'view2Controller',
        });
    });
})();

