var calulatorApp	=	angular.module('calulatorApp', []);   
 
calulatorApp.controller('calculation', function ($scope) {
  	$scope.addition	=	function(){
		$scope.data.result	=	$scope.data.first + $scope.data.second;
		return $scope.data.result;
	}
	$scope.subtract	=	function(){
		$scope.data.result	=	$scope.data.first - $scope.data.second;
		return $scope.data.result;
	}
	$scope.multiplication	=	function(){
		$scope.data.result	=	$scope.data.first * $scope.data.second;
		return $scope.data.result;
	}
	$scope.division	=	function(){
		$scope.data.result	=	$scope.data.first / $scope.data.second;
		return $scope.data.result;	
	}
});
