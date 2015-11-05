(function (){
	'use strict';
	function view1 ($scope, MasterSocket, JGSocket){
		var that = this;

		var socket = undefined;
		$scope.winText = 'JG Tic Tac Toe';

		$scope.startGame = function (){
			$scope.winText = 'JG Tic Tac Toe';
			if(socket){
				socket.disconnect();
				socket = undefined;
			}
			initSockets();
			socket.emit('startGame', {username: 'Jon Go'});

			$scope.selectCell = function (x,y){
				console.log(x,y);
				socket.emit('submit:move', {x: x, y: y});
			}
		}

		function initSockets (){
			MasterSocket.setSocket(JGSocket());
			socket = MasterSocket.getSocket();
			socket.forward(['game:start', 'submit:accepted', 'game:end']);
		}

		$scope.$on('socket:game:start', function (event, data){
			console.log(data);
			$scope.gameBoard = data;
		});

		$scope.$on('socket:submit:accepted', function (event, data){
			$scope.gameBoard = data;
			console.log(data);
		});

		$scope.$on('socket:game:end', function (event, data){
			if(data.winner === 'player'){
				$scope.winText = 'You Won!';
			} else {
				$scope.winText = 'You Lose!';
			}
		});

		$scope.$on('$destroy', function (mySocket){

		});
	}
	angular.module('JonGoApp')
		.controller('view1Controller', view1);
})();