'use strict';

angular.module('sampleApp')
  .filter('reverse', function () {
    return function (list) {
      return list ? list.reverse() : [];
    };
  });
