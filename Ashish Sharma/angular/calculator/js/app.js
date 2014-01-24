angular.module ('assignment', []).
	config(function ($routeProvider) {
	$routeProvider
	when ("/", {templateUrl:"partials/list.html"})
	when ("/new", {templateUrl:"partials/edit.html"})
	}
)

function AppCtrl($scope) {
	$scope.crew = [
		{name:"Ashish", description:"Designer"},
		{name:"Harsh", description:"Designer"},
		{name:"Raj", description:"Designer"},
		{name:"Devender", description:"Designer"},
	]
}