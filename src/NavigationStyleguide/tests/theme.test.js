import theme, { makeTheme } from '../theme';

describe('makeTheme', () => {
  it('should use default values', () => {
    expect(makeTheme()).toEqual(theme);
  });
  it('should use custom values', () => {
    const customTheme = {
      navigationStyleguide: {
        '$nav-styleguide-color': '#fff',
        '$nav-styleguide-bg-color': '#ce4953',
        '$nav-styleguide-border': 'none',
        '$nav-styleguide-top': 0,
        '$nav-styleguide-left': 0,
        '$nav-styleguide-bottom': 0,
        '$nav-styleguide-overflow': 'auto',
        '$nav-styleguide-list-style-type': 'none',
        '$nav-styleguide-padding-bottom-sm': 4,
        '$nav-styleguide-position-sm': 'static',
        '$nav-styleguide-width-sm': '100%',
        '$nav-styleguide-border-width-sm': '1px 0px 0px 0px',
        '$nav-styleguide-text-align-sm': 'center',
        '$nav-styleguide-position-md': 'fixed',
        '$nav-styleguide-width-md': '150px',
        '$nav-styleguide-text-align-md': 'left',
        '$nav-styleguide-border-width-md': '0px 1px 0px 0px',
      },
    };
    expect(makeTheme(customTheme)).toEqual(customTheme);
  });
});
