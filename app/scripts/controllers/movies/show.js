'use strict';

angular.module('sampleApp')
  .controller('MoviesShowCtrl', function ($scope, Movies) {
    $scope.movies = Movies.all();
    $scope.nMovies = 2;
  });
