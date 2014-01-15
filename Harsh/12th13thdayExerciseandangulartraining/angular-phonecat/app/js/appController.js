//Controller for list, add and delete
demoApp.controller('simplecontroller', function($scope, simplefactory, $routeParams){
	$scope.person	=	[];
	init();
	function init(){
		$scope.person	=	simplefactory.showPerson();
	}
	
	$scope.addPerson	=	function(){
		simplefactory.add( $scope.list.name, $scope.list.city);	
	}
	
	$scope.deletePerson	=	function($index){
		simplefactory.deletePerson($index);
		//simplefactory.add( $scope.list.name, $scope.list.city);	
	}
});

//Controller for Edit and update
demoApp.controller('updateController', function($scope, $routeParams, simplefactory){
	init();
	function init(){
		personReturned	=	simplefactory.showPersontoEdit($routeParams);
		$scope.name	=	personReturned.name;
		$scope.city	=	personReturned.city;
	}
	$scope.updatePerson	=	function(){
		//$routeParams allow us to retrieve current url parameters. parameters become available in $routeParams object
		$scope.personId	=	$routeParams.personId;
		simplefactory.update($scope.personId, $scope.edit.name, $scope.edit.city);
	}
});
