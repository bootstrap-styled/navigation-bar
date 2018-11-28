import { makeTheme as makeThemeNavigation } from '../theme';
import { defaultProps } from '../NavigationStyleguide';

describe('makeTheme', () => {
  it('should use default values', () => {
    const defaultTheme = defaultProps.theme;
    expect(makeThemeNavigation().navigationStyleguide).toEqual(defaultTheme.navigationStyleguide);
  });
  it('should create scope', () => {
    expect(typeof makeThemeNavigation().navigationStyleguide).toEqual('object');
  });
  it('should create custom theme', () => {
    const customTheme = {
      navigationStyleguide: { '$nav-styleguide-height': '50%' },
    };
    expect(makeThemeNavigation(customTheme).navigationStyleguide['$nav-styleguide-color']).toEqual('#444444');
    expect(makeThemeNavigation(customTheme).navigationStyleguide['$nav-styleguide-height']).toEqual('50%');
  });
});
