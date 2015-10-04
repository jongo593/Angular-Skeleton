'use strict';
(function() {

function MainController($scope, $http) {
  var self = this;


  this.skills = [
  	{content: '', asset: ''}

  ]


  $scope.$on('$destroy', function() {
  });
}

angular.module('JonGoApp')
  .controller('MainController', MainController);

})();
