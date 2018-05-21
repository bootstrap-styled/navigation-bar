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
      navigationBar: {
        '$zindex-overlay': '2050',
        '$menu-offset-width': '220px',
        '$menu-offset-nav-bg-color': 'white',
        '$menu-offset-nav-box-shadow': 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
        '$menu-offset-nav-transition': '.3s ease',
        '$overlay-bg': 'rgba(0, 0, 0, 0.3)'
      }
    };
    expect((0, _theme.makeTheme)(customTheme)).toEqual(customTheme);
  });
});