'use strict';

var ctrl = angular.module("calulatorControllers", []);

ctrl.controller("computeCtrl", function($scope, $location){
	$scope.cal = {};
	
	function compute(cal, operator){
		var result;

		switch(operator){
			case "+":
				result = cal.num1 + cal.num2;
				break;
			case "-":
				result = cal.num1 - cal.num2;
				break;
			case "*":
				result = cal.num1 * cal.num2;
				break;
			case "/":
				result = cal.num1 / cal.num2;
				break;
		}

		$scope.cal.result = result;
		$location.path("/result");
	};

	$scope.add = function(){
		compute($scope.cal, "+");
	}

	$scope.sub = function(){
		compute($scope.cal, "-");
	}

	$scope.multiply = function(){
		compute($scope.cal, "*");
	}

	$scope.divide = function(){
		compute($scope.cal, "/");
	}

	$scope.clear = function(){
		$scope.cal = {};
		$location.path("/");
	}
});