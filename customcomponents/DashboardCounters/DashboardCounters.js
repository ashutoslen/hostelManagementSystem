angular.module('customcomponentsDashboardCounters',['servoy']).directive('customcomponentsDashboardCounters', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'customcomponents/DashboardCounters/DashboardCounters.html'
    };
  })