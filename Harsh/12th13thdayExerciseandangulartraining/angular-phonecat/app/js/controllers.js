var demoApp	=	angular.module('demoApp',[]);
/*
<!-- 1st method -->
function simplecontroller($scope){
	$scope.objectDemo	=	
	[
	{'name':'Harsh','city':'delhi'},
	{'name':'Harsh1','city':'daselhi'},
	{'name':'Harsh2','city':'delhasdi'},
	{'name':'Harsh3','city':'delhiasd'},
	{'name':'Harsh4','city':'delhiasd'}
	 ]	
}
demoApp.controller('simplecontroller',simplecontroller);
*/
<!-- 2nd method -->
/*demoApp.controller('simplecontroller', function($scope){
	$scope.objectDemo	=	
	[
	{'name':'Harsh','city':'delhi'},
	{'name':'Harsh1','city':'daselhi'},
	{'name':'Harsh2','city':'delhasdi'},
	{'name':'Harsh3','city':'delhiasd'},
	{'name':'Harsh4','city':'delhiasd'}
	 ]											
	})

*/
/* rootscope exercise 
demoApp.controller('defaultcontroller', function($scope){
	$scope.person.name	=	'Harsh';											  
})
demoApp.controller('firstcontroller', function($scope){
	$scope.person.name	=	'Harsh';											  
})*/
