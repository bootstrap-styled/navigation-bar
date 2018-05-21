'use strict';

var exported = require('../index');

describe('exported', function () {
  Object.keys(exported).forEach(function (key) {
    it('should export ' + key, function () {
      expect(exported[key]).toBeDefined();
    });
  });
});