'use strict';

var ctrl = angular.module("controllers", []);

ctrl.controller("userInfoCtrl", function($scope, $location, userFactory){
	var setup = {
		showUser: function(){
			userFactory.getUser().success(function(data){
				$scope.users = data;
			});
		},
		init: function(){
			$scope.search = app.searchedValue;
			this.showUser();
		}
	}

	$scope.change = function(){
		app.searchedValue = $scope.search;
	}

	$scope.delete = function(user){
		userFactory.deleteUser(user).success(function(){
			setup.showUser();
		});
	}

	setup.init();
});