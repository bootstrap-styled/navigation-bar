'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.makeTheme = makeTheme;
function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { navigationStyleguide: {} };

  var newTheme = { navigationStyleguide: {} };
  var v = newTheme.navigationStyleguide;
  var u = userTheme.navigationStyleguide || {};

  // navigationStyleguide
  v['$nav-styleguide-height'] = u['$nav-styleguide-height'] || '100%';
  v['$nav-styleguide-color'] = u['$nav-styleguide-color'] || '#444444';
  v['$nav-styleguide-hover-color'] = u['$nav-styleguide-hover-color'] || '#898989';
  v['$nav-styleguide-bg-color'] = u['$nav-styleguide-bg-color'] || '#F5F5F5';
  v['$nav-styleguide-border'] = u['$nav-styleguide-border'] || '#e8e8e8 solid';
  v['$nav-styleguide-top'] = u['$nav-styleguide-top'] || 0;
  v['$nav-styleguide-left'] = u['$nav-styleguide-left'] || 0;
  v['$nav-styleguide-bottom'] = u['$nav-styleguide-bottom'] || 0;
  v['$nav-styleguide-overflow'] = u['$nav-styleguide-overflow'] || 'auto';
  v['$nav-styleguide-list-style-type'] = u['$nav-styleguide-list-style-type'] || 'none';

  // navigationStyleguide small screen
  v['$nav-styleguide-padding-bottom'] = u['$nav-styleguide-padding-bottom'] || {
    sm: 4
  };
  v['$nav-styleguide-position'] = u['$nav-styleguide-position'] || {
    sm: 'static',
    md: 'fixed'
  };
  v['$nav-styleguide-width'] = u['$nav-styleguide-width'] || {
    sm: '100%',
    md: '220px'
  };
  v['$nav-styleguide-border-width'] = u['$nav-styleguide-border-width'] || {
    sm: '1px 0px 0px 0px',
    md: '0px 1px 0px 0px'
  };
  v['$nav-styleguide-text-align'] = u['$nav-styleguide-text-align'] || {
    sm: 'center',
    md: 'left'
  };
  newTheme.navigationStyleguide = v;
  return _extends({}, userTheme, newTheme);
}

exports.default = makeTheme();