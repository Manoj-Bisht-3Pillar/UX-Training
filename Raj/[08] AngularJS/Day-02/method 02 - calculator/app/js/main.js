'use strict';

var app = angular.module("calculatorApp", []);

/* Controller */
app.controller("computeCtrl", function($scope){
	$scope.cal = {};
	
	$scope.add = function(){
		$scope.cal.result = $scope.cal.num1 + $scope.cal.num2;
	}

	$scope.sub = function(){
		$scope.cal.result = $scope.cal.num1 - $scope.cal.num2;
	}

	$scope.multiply = function(){
		$scope.cal.result = $scope.cal.num1 * $scope.cal.num2;
	}

	$scope.divide = function(){
		$scope.cal.result = $scope.cal.num1 / $scope.cal.num2;
	}

	$scope.clear = function(){
		$scope.cal = {};
	}
});