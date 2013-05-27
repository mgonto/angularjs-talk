'use strict';

angular.module('sampleApp', ['restangular'])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/movies/show', {
        templateUrl: '/views/movies/show.html',
        controller: 'MoviesShowCtrl'
      })
      .otherwise({
        redirectTo: '/movies/show',
      });


      RestangularProvider.setBaseUrl("http://angularjstalk.apiary.io")
  });
