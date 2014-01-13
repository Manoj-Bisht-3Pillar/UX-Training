var demoApp	=	angular.module('demoApp', []);

demoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/getForm', {
        templateUrl: 'partials/getform.html'
        //controller: 'StudentViewCtrl'
      }).
      when('/postForm', {
        templateUrl: 'partials/postform.html'
        //controller: 'addNewStudentCtrl'
      });
}]);

