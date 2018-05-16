const exported = require('../index');

describe('exported', () => {
  Object.keys(exported).forEach((key) => {
    it(`should export ${key}`, () => {
      expect(exported[key]).toBeDefined();
    });
  });
});
