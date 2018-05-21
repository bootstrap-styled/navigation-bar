'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.makeTheme = makeTheme;
function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { navigationBar: {} };

  var newTheme = { navigationBar: {} };
  var u = userTheme.navigationBar;
  var v = newTheme.navigationBar || {};

  // NavigationBar
  v['$zindex-overlay'] = u['$zindex-overlay'] ? u['$zindex-overlay'] : '2050';

  // OffsetNav
  v['$menu-offset-width'] = u['$menu-offset-width'] ? u['$menu-offset-width'] : '220px';
  v['$menu-offset-nav-bg-color'] = u['$menu-offset-nav-bg-color'] ? u['$menu-offset-nav-bg-color'] : 'white';

  // Offset
  v['$menu-offset-nav-box-shadow'] = u['$menu-offset-nav-box-shadow'] ? u['$menu-offset-nav-box-shadow'] : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
  v['$menu-offset-nav-transition'] = u['$menu-offset-nav-transition'] ? u['$menu-offset-nav-transition'] : '.3s ease';
  // newTheme.navigationBar['$menu-offset-nav-transition'] = u['$menu-offset-nav-transition'] || '.3s ease';

  // Overlay
  v['$overlay-bg'] = u['$overlay-bg'] ? u['$overlay-bg'] : 'rgba(0, 0, 0, 0.3)';

  newTheme.navigationBar = v;
  return _extends({}, newTheme, userTheme);
}

exports.default = makeTheme();