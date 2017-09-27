'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavigationBar = require('./NavigationBar');

Object.defineProperty(exports, 'NavigationBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavigationBar).default;
  }
});
Object.defineProperty(exports, 'PageWrapper', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavigationBar).default;
  }
});
Object.defineProperty(exports, 'makeThemeNavigationBar', {
  enumerable: true,
  get: function get() {
    return _NavigationBar.makeTheme;
  }
});
Object.defineProperty(exports, 'themeNavigationBar', {
  enumerable: true,
  get: function get() {
    return _NavigationBar.theme;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }