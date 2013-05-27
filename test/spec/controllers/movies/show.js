'use strict';

describe('Controller: MoviesShowCtrl', function () {

  // load the controller's module
  beforeEach(module('sampleApp'));

  var MoviesShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesShowCtrl = $controller('MoviesShowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
