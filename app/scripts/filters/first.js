'use strict';

angular.module('sampleApp')
  .filter('first', function () {
    return function (list, n) {
      return _.first(list, n);
    };
  });
