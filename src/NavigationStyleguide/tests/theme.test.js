import { makeTheme } from '../theme';

describe('makeTheme', () => {
  it('should use default values', () => {
    const defaultTheme = {
      navigationStyleguide: {
        '$nav-styleguide-height': '100%',
        '$nav-styleguide-color': '#fff',
        '$nav-styleguide-hover-color': '#898989',
        '$nav-styleguide-bg-color': '#ce4953',
        '$nav-styleguide-border': '#e8e8e8 solid',
        '$nav-styleguide-top': 0,
        '$nav-styleguide-left': 0,
        '$nav-styleguide-bottom': 0,
        '$nav-styleguide-overflow': 'auto',
        '$nav-styleguide-list-style-type': 'none',
        '$nav-styleguide-padding-bottom': {
          sm: 4,
        },
        '$nav-styleguide-position': {
          sm: 'static',
          md: 'fixed',
        },
        '$nav-styleguide-width': {
          sm: '100%',
          md: '150px',
        },
        '$nav-styleguide-border-width': {
          sm: '1px 0px 0px 0px',
          md: '0px 1px 0px 0px',
        },
        '$nav-styleguide-text-align': {
          sm: 'center',
          md: 'left',
        },
      },
    };
    expect(makeTheme(defaultTheme)).toEqual(defaultTheme);
  });
  it('should create scope', () => {
    const customTheme = {
      '$nav-styleguide-height': '100%',
    };
    expect(typeof makeTheme(customTheme).navigationStyleguide).toEqual('object');
  });
});
