'use strict';

angular.module('sampleApp', ['restangular', 'angularytics'])
  .config(function ($routeProvider, RestangularProvider, AngularyticsProvider) {
    $routeProvider
      .when('/movies/show', {
        templateUrl: '/views/movies/show.html',
        controller: 'MoviesShowCtrl'
      })
      .when('/directors/:directorId', {
        templateUrl: '/views/directors/show.html',
        controller: 'DirectorsShowCtrl'
      })
      .otherwise({
        redirectTo: '/movies/show',
      });

      AngularyticsProvider.setEventHandlers(['Console', 'Google']);


      RestangularProvider.setBaseUrl("http://angularjstalk.apiary.io")
  }).run(function(Angularytics) {
    Angularytics.init();
  });
