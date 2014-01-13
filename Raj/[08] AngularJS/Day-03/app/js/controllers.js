'use strict';

var ctrl = angular.module("controllers", []);

ctrl.controller("userInfoCtrl", function($scope, userFactory){

	/* Mode Object */
	$scope.mode = {
		view: true,
		edit: false,
		add: false
	};

	/* Setup initial execuation */
	var setup = {
		userDetail: function(){
			userFactory.getUser().success(function(data){
				$scope.users = data;
			});
		},
		init: function(){
			$scope.search = app.searchedValue;
			this.userDetail();
		}
	}

	/* Show add form */
	$scope.add = function(){
		$scope.mode.add = true;
		$scope.mode.view = false;

		$scope.newUser = {};
	}

	/* Save new user */
	$scope.saveAdded = function(user){
		userFactory.addUser(user).success(function(){
			setup.userDetail();

			$scope.mode.add = false;
			$scope.mode.view = true;
		});
	}

	/* Show edit form */
	$scope.edit = function(user){
		$scope.mode.edit = true;
		$scope.mode.view = false;
		
		$scope.editUser = user;
	}

	/* Save edit user */
	$scope.saveEdited = function(user){
		userFactory.updateUser(user).success(function(){
			setup.userDetail();

			$scope.mode.edit = false;
			$scope.mode.view = true;
		});
	}

	/* Delete user */
	$scope.delete = function(user){
		userFactory.deleteUser(user).success(setup.userDetail);
	}

	/* Show user detail */
	$scope.cancel = function(){
		$scope.mode.add = false;
		$scope.mode.edit = false;
		$scope.mode.view = true;
	}

	/* Cache search keyword */
	$scope.change = function(){
		app.searchedValue = $scope.search;
	}

	/* Init App */
	setup.init();
});