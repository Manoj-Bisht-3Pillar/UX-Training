'use strict';

var app = angular.module("calculatorApp", [
	"ngRoute",
	"calulatorControllers"
]);

app.config(function($routeProvider){
	$routeProvider
		.when("/result", {
			templateUrl: "partial/result.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});
