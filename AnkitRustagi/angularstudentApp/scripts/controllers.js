var studentApp = angular.module('studentApp', []);

studentApp.config(function($routeProvider){
    $routeProvider
        .when('/',
                {
                    controller : 'StudentListCtrl',
                    templateUrl:'Partials/view1.html'
                })
        .when('/view2',
                {
                    controller : 'StudentListCtrl',
                    templateUrl:'Partials/view2.html'
                })
        .otherwise({rediectTo: '/'});

});

studentApp.controller
(
    'StudentListCtrl', function ($scope) 
        {
            $scope.students = 
                [
                 {
                    'name':"Ankit",
                    'rollNo':1
                 },
                 {
                    'name':"Komal",
                    'rollNo':2
                 }, 
                ];
            $scope.addnewStudent = function()
                {
                    $scope.students.push
                    (
                       {
                            'name':$scope.newstudent.name,
                            'rollNo':$scope.newstudent.rollNo,
                        }

                     )
                    $scope.newstudent.name = "";
                    $scope.newstudent.rollNo = "";

                };//add function close

            $scope.deleteStudent = function (index) 
              {
                    $scope.students.splice(index, 1);
                    
              };//delete function close

            $scope.updateStudent = function(index, item)
            {
                   $scope.students[index].name = item.name;
                   $scope.students[index].rollNo = item.rollNo;
            };

        
    });


