import { makeTheme as navigationMakeTheme } from '../theme';
import { defaultProps } from '../NavigationStyleguide';

describe('makeTheme', () => {
  it('should use default values', () => {
    const defaultTheme = defaultProps.theme;
    expect(navigationMakeTheme().navigationStyleguide).toEqual(defaultTheme.navigationStyleguide);
  });
  it('should create scope', () => {
    const customTheme = {
      '$nav-styleguide-height': '100%',
    };
    expect(typeof navigationMakeTheme(customTheme).navigationStyleguide).toEqual('object');
  });
  it('should create custom theme', () => {
    const customTheme = {
      '$nav-styleguide-height': '25%',
    };
    expect(navigationMakeTheme(customTheme).navigationStyleguide['$nav-styleguide-color']).toEqual('#444444');
    expect(navigationMakeTheme(customTheme).navigationStyleguide['$nav-styleguide-height']).toEqual('25%');
  });
});
