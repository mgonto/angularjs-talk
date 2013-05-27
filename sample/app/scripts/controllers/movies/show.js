'use strict';

angular.module('sampleApp')
  .controller('MoviesShowCtrl', function ($scope, Restangular) {
    $scope.movies = Restangular.all("movies").getList();
  });
