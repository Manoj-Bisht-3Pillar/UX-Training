var valueCal = angular.module('valueCal',[]);

valueCal.controller('Calculator', function($scope){
	$scope.result = "Result";
	$scope.addNumbers = function(){
		$scope.result = $scope.user.firstNum + $scope.user.secondNum
	};
	$scope.subtract = function(){
		$scope.result = $scope.user.firstNum - $scope.user.secondNum
	};
	$scope.multiply = function(){
		$scope.result = $scope.user.firstNum * $scope.user.secondNum
	};
	$scope.divide = function(){
		$scope.result = $scope.user.firstNum / $scope.user.secondNum
	};
	$scope.clearVal = function(){
		$scope.user.firstNum = "";
		$scope.user.secondNum = "";
		$scope.result = "Result";
	};
});
