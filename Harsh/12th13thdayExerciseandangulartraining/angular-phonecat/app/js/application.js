// JavaScript Document
var demoApp	=	angular.module('demoApp', []);
//Goes in config.js
demoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/listview', {
        templateUrl: 'partials/list.html',
        controller: 'simplecontroller'
      }).
      when('/addperson', {
        templateUrl: 'partials/addlistitem.html',
        controller: 'simplecontroller'
      });
}]);
//Goes in app.js
demoApp.factory('simplefactory', function(){
	//Assign value to person 										  
	var person	=	[
			{'id':'1','name':'Harsh','city':'delhi'},
			{'id':'2','name':'Harsh1','city':'delhi2'},
	];
	//Create emplty object
	var factory	=	{};
	//Add behaviours to this factory
	//Point to consider what is the difference between this.showperson and factory.showperson
	factory.showPerson	=	function(){
		return person;	
	};
	//return object of factory
	return factory;
})
//goes in controllers
demoApp.controller('simplecontroller', function($scope, simplefactory){
	$scope.person	=	[];
	init();
	function init(){
		console.log(simplefactory);
		$scope.person	=	simplefactory.showPerson();
	}
	
});