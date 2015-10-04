(function (){
	'use strict';
	function view2 ($scope){
		var that = this;
		$scope.$on('$destroy', function (){

		});
	}
	angular.module('JonGoApp')
		.controller('view2Controller', view2);
})();