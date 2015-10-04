(function (){
	'use strict';
	function view1 ($scope){
		var that = this;
		$scope.$on('$destroy', function (){

		});
	}
	angular.module('JonGoApp')
		.controller('view1Controller', view1);
})();