var sampleApp = angular.module('sampleApp',[]);

sampleApp.controller('sample1',function($scope){

	$scope.result = [
    {'name': 'vaibhav jain',
     'snippet': 'Fast just got faster'},
    {'name': 'ajay',
     'snippet': 'The Next, Next Generation.'},
    {'name': 'lalit',
     'snippet': 'The Next, Next Generation.'}
  ];

 });


// sampleApp.config(['$routeProvider',
  // function($routeProvider) {
    // $routeProvider.
      // when('/student1', {
        // templateUrl: 'views/View1.html',
        // controller: 'StudentViewCtrl'
      // }).
      // when('/student2', {
        // templateUrl: 'views/view2.html',
        // controller: 'addNewStudentCtrl'
      // }).
        // otherwise({
        // redirectTo: '/studentListView'
      // });
// }]);



// http://scotch.io/tutorials/javascript/single-page-apps-with-angularjs-routing-and-templating