'use strict';

var ctrl = angular.module("controllers", []);

ctrl.controller("userInfoCtrl", function($scope, userFactory){

	function init(){
		$scope.search = app.searchedValue;

		userFactory.getUser().success(function(data){
			$scope.users = data;
		});
	}

	$scope.change = function(){
		app.searchedValue = $scope.search;
	}

	$scope.edit = function(user){
		userFactory.updateUser(user)
	}

	$scope.delete = function(user){
		userFactory.deleteUser(user)
	}

	init();
});