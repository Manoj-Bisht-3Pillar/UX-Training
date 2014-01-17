
angular.module('docsBindExample', [])
  .controller('Ctrl1', function Ctrl1($scope) {
    $scope.name = 'Max Karl Ernst Ludwig Planck (April 23, 1858 – October 4, 1947)';
  });

  
  angular.module('docsSimpleDirective', [])
  .controller('Ctrl', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre',
	  city :'delhi'
    };
  })
  // .directive('myCust', function() {
    // return {
      // template: 'Name: {{customer.name}} Address: {{customer.address}} city : {{customer.city}} '
    // };
  // });
   .directive('myCustomer', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-customer.html'
    };
  });