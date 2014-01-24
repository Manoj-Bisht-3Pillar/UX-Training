//var phonecatApp = angular.module('phonecatApp', []);
// 
//phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
//  function ($scope, $http) {
//    $http.get('phones/phones.json').success(function(data) {
//      $scope.phones = data;
//    });
// 
//    $scope.orderProp = 'age';
//  }]);


function Calculator($scope) {
$scope.value1=0;
$scope.value2=0;
	
   $scope.add = function() {
	   $scope.result= $scope.value1 + $scope.value2;
   }
      $scope.sub = function() {
	  $scope.result= $scope.value1 - $scope.value2;
   }
   $scope.mult = function() {
	  $scope.result= $scope.value1 * $scope.value2;
   }
   $scope.divide = function() {
	   $scope.result= $scope.value1 / $scope.value2;
   }
   
}
