import { NavigationBar, PageWrapper, makeThemeNavigationBar, themeNavigationBar } from '../index';

describe('should exports login forms', () => {
  describe('NavigationBar', () => {
    it('should export NavigationBar', () => {
      expect(typeof NavigationBar).toEqual('function');
    });
    it('should export PageWrapper', () => {
      expect(typeof PageWrapper).toEqual('function');
    });
    it('should export makeTheme', () => {
      expect(typeof makeThemeNavigationBar).toEqual('function');
    });
    it('should export LoginForm', () => {
      expect(typeof themeNavigationBar).toEqual('object');
    });
  });
});
