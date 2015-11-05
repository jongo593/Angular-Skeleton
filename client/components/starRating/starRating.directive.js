(function (){
	'use strict';

	function link (scope, elem, attrs){
		scope.label = attrs.label;
		scope.max = attrs.max;
		scope.rating = attrs.rank;
		scope.stars = [];
		scope.tooltip = attrs.tooltip;
		for(var i=0;i<scope.max;i++){
			if(i<scope.rating){
				scope.stars.push({earned: true});
			} else {
				scope.stars.push({earned: false});
			}			
		}
	}

	function starRating (lodash){
		var _ = lodash;
		return {
			restrict: 'EA',
			scope: {},
			templateUrl: 'components/starRating/starRating.html',
			link: link 	 
		}
	}

	angular.module('JonGoApp')
		.directive('jgStarRating', starRating)
})();