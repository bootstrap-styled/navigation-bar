import { makeTheme, theme } from '../theme';

describe('makeTheme', () => {
  it('should use default values', () => {
    expect(makeTheme()).toEqual(theme);
  });
  it('should use custom values', () => {
    const customTheme = {
      navigationBar: {
        '$zindex-overlay': '2050',
        '$menu-offset-width': '220px',
        '$menu-offset-nav-bg-color': 'white',
        '$menu-offset-nav-box-shadow': 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
        '$menu-offset-nav-transition': '.3s ease',
        '$overlay-bg': 'rgba(0, 0, 0, 0.3)',
      },
    };
    expect(makeTheme(customTheme)).toEqual(customTheme);
  });
});
