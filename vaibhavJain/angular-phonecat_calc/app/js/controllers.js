var phonecatApp = angular.module('phonecatApp', []);
 
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
  }]);
  
  
  
  function Calculator($scope){
	$scope.add = function(){
		$scope.result = $scope.firstNumber + $scope.secondNumber;
	}
	$scope.sub = function(){
		$scope.result = $scope.firstNumber - $scope.secondNumber;
	}
	$scope.mul = function(){
		$scope.result = $scope.firstNumber * $scope.secondNumber;
	}
	$scope.div = function(){
		$scope.result = $scope.firstNumber / $scope.secondNumber;
	}
}