angular.module('customcomponentsTest',['servoy']).directive('customcomponentsTest', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'customcomponents/test/test.html'
    };
  })