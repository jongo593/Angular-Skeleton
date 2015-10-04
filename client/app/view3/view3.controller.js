(function (){
	'use strict';
	function view3 ($scope){
		var that = this;
		$scope.$on('$destroy', function (){

		});
	}
	angular.module('JonGoApp')
		.controller('view3Controller', view3);
})();