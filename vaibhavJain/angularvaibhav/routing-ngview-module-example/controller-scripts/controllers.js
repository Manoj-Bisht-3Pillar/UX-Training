
// declare a module
var myAppModule = angular.module('myApp', []);
 
// // configure the module.
// // in this example we will create a greeting filter
 myAppModule.filter('greet', function() {
 return function(name) {
  return 'Hello, ' + name + '!';
  };
  });


// http://scotch.io/tutorials/javascript/single-page-apps-with-angularjs-routing-and-templating


//declare a controller

myAppModule.controller("greetctrl",['$scope',function($scope)
                             {
							  $scope.greeting="hallo";
							  }
		]);