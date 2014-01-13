'use strict';

var app = angular.module("app", [
	"ngRoute",
	"controllers"
]);

app.searchedValue = "";

app.config(function($routeProvider){
	$routeProvider
		.when("/user-info", {
			templateUrl: "partial/user-info.html",
			controller: "userInfoCtrl"
		})
		.when("/about-us", {
			templateUrl: "partial/about-us.html"
		})
		.when("/lorem-ipsum", {
			templateUrl: "partial/lorem-ipsum.html"
		})
		.otherwise({
			redirectTo: "/user-info"
		});
});

app.factory("userFactory", function($http){
	var url = "slim.php/user";

	return{
		getUser: function(){
			return $http.get(url);
		},
		addUser: function(user){
			return $http.post(url, user);
		},
		deleteUser: function(user){
			return $http.delete(url + "/" + user.id);
		},
		updateUser: function(user){
			return $http.put(url + "/" + user.id, user);
		}
	}
});