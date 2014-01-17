var sampleApp = angular.module('sampleApp', []);

sampleApp.factory("studentfac",function(){
        studentMaster = {};
        studentMaster.filterText = '';
        studentMaster.studentList = [
            {
                'name':"vaibhav",
                'rollNo':1
            },
            {
                'name':"vaibhav jain",
                'rollNo':2
            },
			{
                'name':"vaibhav",
                'rollNo':345
            },
			{
                'name':"mansi",
                'rollNo':4
            },
			{
                'name':"mansi333",
                'rollNo':51
            },
        ];
        studentMaster.addStudent = function (name,rollNo) {
              studentMaster.studentList.push(
                       {'name':name,'rollNo':rollNo,}
        )};
        studentMaster.delStudent = function (indexVal) {
              studentMaster.studentList.splice(indexVal, 1);
        };
        studentMaster.modifyStudent = function(indexval, name,rollNo){
              studentMaster.studentList[indexval].name=name;
              studentMaster.studentList[indexval].rollNo=rollNo;
        };

        return studentMaster;
});
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/studentListView', {
        templateUrl: 'Partials/studentView.html',
        controller: 'StudentViewCtrl'
      }).
      when('/addNewStudent', {
        templateUrl: 'Partials/add_new_student.html',
        controller: 'addNewStudentCtrl'
      }).
      when('/updateStudentView/:roll_no', {
        templateUrl: 'Partials/updateStudent.html',
        controller: 'updateStudentCtrl'
      }).
      otherwise({
        redirectTo: '/studentListView'
      });
}]);
 
sampleApp.controller('StudentViewCtrl', function ($scope,studentfac){
        $scope.students = studentfac.studentList;
        $scope.localSearchText = studentfac.filterText;
        
        $scope.deleteStudent = function (index) 
              {studentfac.delStudent(index);};
        
    });

sampleApp.controller('addNewStudentCtrl', function ($scope,studentfac){
        $scope.localSearchText = studentfac.filterText;
        $scope.addnewStudent = function()
                {studentfac.addStudent($scope.newstudent.name,$scope.newstudent.rollNo);
                  window.location.href = "#studentListView";
                };

    });

sampleApp.controller('updateStudentCtrl', function ($scope,studentfac,$routeParams){
        $scope.index = $routeParams.roll_no;
        $scope.updateStudent = function(item)
        {
          studentfac.modifyStudent($scope.index,item.name,item.rollNo)
          window.location.href = "#studentListView";
        }; 
    });
	
	
	
	sampleApp.filter("reverse", function() {
  return function(input) {
    var result = "";
    input = input || "";
    for (var i=0; i<input.length; i++) {
      result = input.charAt(i) + result;
    }
    return result;
  };
});
