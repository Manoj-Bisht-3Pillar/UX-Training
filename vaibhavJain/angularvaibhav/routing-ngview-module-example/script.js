// script.js

	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', []);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! Look! I am';
	});

	
	
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/page1', {
				templateUrl : 'pages/page1.html',
				controller  : 'Controller1'
			})

			// route for the about page
			.when('/page2', {
				templateUrl : 'pages/page2.html',
				controller  : 'Controller2'
			})

			// route for the contact page
			.when('/page3', {
				templateUrl : 'pages/page3.html',
				controller  : 'Controller3'
			});
	});
	
	
		// create the controller and inject Angular's $scope
	scotchApp.controller('Controller1', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone page 1';
	});

	scotchApp.controller('Controller2', function($scope) {
		$scope.message = 'Look! I am an about page 2';
	});

	scotchApp.controller('Controller3', function($scope) {
		$scope.message = 'Contact us! Look! I page 3';
	});