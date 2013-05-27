'use strict';

angular.module('sampleApp')
  .controller('DirectorsShowCtrl', function ($scope, Restangular, $routeParams) {
    $scope.director = Restangular.one("directors", $routeParams.directorId).get();
  });
