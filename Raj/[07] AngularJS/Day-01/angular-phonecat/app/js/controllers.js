'use strict';

var app = angular.module("phonecatApp", []);

/* Controllers */
app.controller("PhoneListCtrl", function($scope, $http){
	$http.get("phones/phones.json").success(function(data){
		$scope.phones = data;
	});

	$scope.orderProp = "age";
});