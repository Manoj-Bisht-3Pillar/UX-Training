'use strict';
var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  $scope.orderProp = 'name';
});

var calculate = angular.module('calculate', []);
calculate.controller('calculator', function ($scope) {
	$scope.add = function(){
		$scope.result = $scope.text1 + $scope.text2;
	}  
	$scope.mul = function(){
		$scope.result = $scope.text1 * $scope.text2;
	}
	$scope.sub = function(){
		$scope.result = $scope.text1 - $scope.text2;
	}  
	$scope.div = function(){
		$scope.result = $scope.text1 / $scope.text2;
	}


});