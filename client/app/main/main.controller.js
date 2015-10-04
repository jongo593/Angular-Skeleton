'use strict';
(function() {

function MainController($scope, $http) {
  var self = this;


  $scope.$on('$destroy', function() {
  });
}

angular.module('JonGoApp')
  .controller('MainController', MainController);

})();
