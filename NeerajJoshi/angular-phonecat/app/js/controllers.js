var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });
 
  $scope.orderProp = 'age';
});

var calcApp = angular.module('calcApp', []);
calcApp.controller('calcCtrl', function ($scope) {

	$scope.operations = [
	                        {label: "+",},
	                        {label: "-",},
	                        {label: "*",},
	                        {label: "/",}
	                    ];
    $scope.calculate = function(operator) {
    	if (operator == "+")
    		$scope.result = $scope.valueA + $scope.valueB;
    	else if(operator == "-")
			$scope.result = $scope.valueA - $scope.valueB;
    	else if(operator == "*")
			$scope.result = $scope.valueA * $scope.valueB;
    	else if(operator == "/")
			$scope.result = $scope.valueA / $scope.valueB;
    };
});