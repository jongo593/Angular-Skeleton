(function (){
	'use strict';
	function view1 ($scope, MasterSocket){
		var that = this;
		var socket = MasterSocket.getSocket();

		$scope.startGame = function (){
			socket.emit('startGame', {username: 'Jon Go'});

			socket.on('game:start', function (data){
				console.log(data);
				$scope.gameBoard = data;
			});

			$scope.selectCell = function (x,y){
				console.log(x,y);
				socket.emit('submit:move', {x: x, y: y});
			}

			socket.on('submit:accepted', function (data){
				$scope.gameBoard = data;
				console.log(data);
			})
		}

		$scope.$on('$destroy', function (mySocket){

		});
	}
	angular.module('JonGoApp')
		.controller('view1Controller', view1);
})();