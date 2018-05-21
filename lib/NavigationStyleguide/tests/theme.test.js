'use strict';

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('makeTheme', function () {
  it('should use default values', function () {
    expect((0, _theme.makeTheme)()).toEqual(_theme2.default);
  });
  it('should use custom values', function () {
    var customTheme = {
      navigationStyleguide: {
        '$nav-styleguide-height': '100%',
        '$nav-styleguide-color': '#fff',
        '$nav-styleguide-bg-color': '#ce4953',
        '$nav-styleguide-border': '#e8e8e8 solid',
        '$nav-styleguide-top': 0,
        '$nav-styleguide-left': 0,
        '$nav-styleguide-bottom': 0,
        '$nav-styleguide-overflow': 'auto',
        '$nav-styleguide-list-style-type': 'none',
        '$nav-styleguide-padding-bottom': {
          sm: 4
        },
        '$nav-styleguide-position': {
          sm: 'static',
          md: 'fixed'
        },
        '$nav-styleguide-width': {
          sm: '100%',
          md: '150px'
        },
        '$nav-styleguide-border-width': {
          sm: '1px 0px 0px 0px',
          md: '0px 1px 0px 0px'
        },
        '$nav-styleguide-text-align': {
          sm: 'center',
          md: 'left'
        }
      }
    };
    expect((0, _theme.makeTheme)(customTheme)).toEqual(customTheme);
  });
});