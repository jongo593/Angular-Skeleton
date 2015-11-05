(function (){
	'use strict'
	angular.module('JonGoApp')
		.factory('MasterSocket', function (){
			var MasterSocket = {};

			MasterSocket.setSocket = function (socket){
				MasterSocket.socket = socket;
			}

			MasterSocket.getSocket = function (){
				return MasterSocket.socket;
			}

			return MasterSocket
		});
})()