(function (){
	'use strict';
	function navbar (){
		return {
			restrict: 'EA',
			templateUrl: 'components/NavBar/navbar.html'
		}
	}
	angular.module('JonGoApp')
		.directive('navbar', navbar)
})();