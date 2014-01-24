var ctrl = angular.module("Controllers", []);

ctrl.controller('listCtrl', function ($scope) {
	var crew = {};
	$scope.showme = true;
    $scope.crew = [
		{name:"Ashish", designation:"Designer"},
		{name:"Harsh", designation:"Designer"},
		{name:"Raj", designation:"Designer"},
		{name:"Devender", designation:"Designer"},
	];

	//$scope.setActive = function(type) {
		//$scope.homeActive ='';
		//$scope.aboutActive ='';
		//$scope.tutorialsActive ='';

		//$scope[type + 'Active'] = 'active';
	//}

	$scope.addPerson = function() {
		$scope.crew.push (
			{name:$scope.newPerson.name, designation:$scope.newPerson.designation}
			);
		$scope.newPerson.name="";
		$scope.newPerson.designation="";
	}
	
	$scope.del = function(id){
		$scope.crew.splice(id, 1);
	}
	
});
