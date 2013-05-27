'use strict';

angular.module('sampleApp')
  .factory('Movies', function (Restangular) {
    var service = {};

    service.all = function() {
      return Restangular.all('movies').getList();
    }

    return service;

  });
