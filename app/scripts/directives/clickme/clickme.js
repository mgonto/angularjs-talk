'use strict';

angular.module('sampleApp')
  .directive('clickme', function () {
    return {
      templateUrl: '/scripts/directives/clickme/clickme.html',
      scope: {fieldName: '@', showData: '='},
      restrict: 'E',
      controller: function($scope) {


        $scope.showInformation = false;
        $scope.show = function() {
          $scope.showInformation = true;
        }
        
      }
    };
  });
