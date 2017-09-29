import NavigationBar, { PageWrapper, theme, makeTheme } from '../index';

describe('should exports login forms', () => {
  describe('NavigationBar', () => {
    it('should export NavigationBar', () => {
      expect(typeof NavigationBar).toEqual('function');
    });
    it('should export PageWrapper', () => {
      expect(typeof PageWrapper).toEqual('function');
    });
    it('should export makeTheme', () => {
      expect(typeof makeTheme).toEqual('function');
    });
    it('should export theme', () => {
      expect(typeof theme).toEqual('object');
    });
  });
});
