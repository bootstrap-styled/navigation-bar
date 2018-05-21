const exported = require('../index');

describe('exported', () => {
  Object.keys(exported).forEach((item) => {
    it(`${item} should be defined`, () => {
      expect(exported).toBeDefined();
    });
  });
});
