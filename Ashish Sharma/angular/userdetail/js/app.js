var app = angular.module ('Assignment', [
	"ngRoute", 
	"Controllers"
]);

app.config(function ($routeProvider) {
	$routeProvider
		.when ("/", {templateUrl:"partials/list.html", controller:"listCtrl"})
		.when ("/new1", {templateUrl:"partials/edit.html"})
		.when ("/new2", {templateUrl:"partials/Tutorials.html"})
		.otherwise ({redirectTo: "/"});
});
