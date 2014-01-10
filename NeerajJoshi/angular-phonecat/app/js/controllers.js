var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });
 
  $scope.orderProp = 'age';
});

var calcApp = angular.module('calcApp', []);
calcApp.controller('calcCtrl', function ($scope) {
	$scope.valueA = 0;
	$scope.valueB = 0;
	$scope.operations = [
	                        {operator: "+", name: "Add"},
	                        {operator: "-", name: "Subtract"},
	                        {operator: "*", name: "Multiply"},
	                        {operator: "/", name: "Divide"}
	                    ];
    $scope.calculate = function(operator) {
    	if (operator == "+")
    		$scope.result = $scope.valueA + $scope.valueB;
    	else if(operator == "-")
			$scope.result = $scope.valueA - $scope.valueB;
    	else if(operator == "*")
			$scope.result = $scope.valueA * $scope.valueB;
    	else if(operator == "/"){
    		if ($scope.valueB == 0)
    			$scope.result = "Error: division by zero"
			else
				$scope.result = $scope.valueA / $scope.valueB;
    	}
    		
    };
});