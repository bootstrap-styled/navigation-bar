'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _lib = require('map-to-css-modules/lib');

var _lib2 = _interopRequireDefault(_lib);

var _breakpoints = require('bootstrap-styled-mixins/lib/breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

var _hover = require('bootstrap-styled-mixins/lib/hover');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Navigation Styleguide
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * Navigation component for react-styleguidist project and rollup-documentation
                                                                                                                                                                                                                              */

var defaultProps = exports.defaultProps = {
  theme: {
    navigationStyleguide: {
      '$nav-styleguide-height': '100%',
      '$nav-styleguide-color': '#000',
      '$nav-styleguide-hover-color': '#898989',
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
  }
};

var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    navigationStyleguide: _propTypes2.default.shape({
      '$nav-styleguide-height': _propTypes2.default.string,
      '$nav-styleguide-color': _propTypes2.default.string,
      '$nav-styleguide-hover-color': _propTypes2.default.string,
      '$nav-styleguide-bg-color': _propTypes2.default.string,
      '$nav-styleguide-border': _propTypes2.default.string,
      '$nav-styleguide-top': _propTypes2.default.number,
      '$nav-styleguide-left': _propTypes2.default.number,
      '$nav-styleguide-bottom': _propTypes2.default.number,
      '$nav-styleguide-overflow': _propTypes2.default.string,
      '$nav-styleguide-list-style-type': _propTypes2.default.string,
      '$nav-styleguide-padding-bottom': _propTypes2.default.object,
      '$nav-styleguide-position': _propTypes2.default.object,
      '$nav-styleguide-width': _propTypes2.default.object,
      '$nav-styleguide-border-width': _propTypes2.default.object,
      '$nav-styleguide-text-align': _propTypes2.default.object
    })
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object // eslint-disable-line react/require-default-props
};

var NavigationStyleguideUnstyled = function NavigationStyleguideUnstyled(props) {
  var _omit = (0, _lodash2.default)(props, ['theme']),
      className = _omit.className,
      cssModule = _omit.cssModule,
      attributes = _objectWithoutProperties(_omit, ['className', 'cssModule']);

  return _react2.default.createElement('div', _extends({
    className: (0, _lib2.default)((0, _classnames2.default)(className, 'navigation'), cssModule)
  }, attributes));
};

NavigationStyleguideUnstyled.defaultProps = defaultProps;
NavigationStyleguideUnstyled.propTypes = propTypes;

/**
 * A navigation component. Wrap `<NavigationStyleguide />` around any html node or element as the menu links.
 */
var NavigationStyleguide = (0, _styledComponents2.default)(NavigationStyleguideUnstyled).withConfig({
  displayName: 'NavigationStyleguide'
})(['  ', ''], function (props) {
  return '\n    &.navigation {\n      height: ' + props.theme.navigationStyleguide['$nav-styleguide-height'] + ';\n      color: ' + props.theme.navigationStyleguide['$nav-styleguide-color'] + ';\n      background-color: ' + props.theme.navigationStyleguide['$nav-styleguide-bg-color'] + ';\n      border: ' + props.theme.navigationStyleguide['$nav-styleguide-border'] + ';\n      border-width: ' + props.theme.navigationStyleguide['$nav-styleguide-border-width'] + ';\n      top: ' + props.theme.navigationStyleguide['$nav-styleguide-top'] + ';\n      left: ' + props.theme.navigationStyleguide['$nav-styleguide-left'] + ';\n      bottom: ' + props.theme.navigationStyleguide['$nav-styleguide-bottom'] + ';\n      overflow: ' + props.theme.navigationStyleguide['$nav-styleguide-overflow'] + ';\n      width: ' + props.theme.navigationStyleguide['$nav-styleguide-width'].md + ' !important;\n      borderWidth: ' + props.theme.navigationStyleguide['$nav-styleguide-border-width'].md + ';\n      position: ' + props.theme.navigationStyleguide['$nav-styleguide-position'].md + ';\n      text-align: ' + props.theme.navigationStyleguide['$nav-styleguide-text-align'].md + ';\n    }\n    ' + _breakpoints2.default.down('sm', props.theme.navigationStyleguide['$grid-breakpoints'], '\n      &.navigation {\n        position: ' + props.theme.navigationStyleguide['$nav-styleguide-position'].sm + ';\n        width: ' + props.theme.navigationStyleguide['$nav-styleguide-width'].sm + ' !important;\n        border-width: ' + props.theme.navigationStyleguide['$nav-styleguide-border-width'].sm + ';\n        padding-bottom: ' + props.theme.navigationStyleguide['$nav-styleguide-padding-bottom'].sm + ';\n        text-align: ' + props.theme.navigationStyleguide['$nav-styleguide-text-align'].sm + ';\n      }\n      &.navigation ul {\n        padding-left: 0;\n      }\n    ') + '\n    &.navigation ul {\n      list-style-type: ' + props.theme.navigationStyleguide['$nav-styleguide-list-style-type'] + ';\n      padding-left: 15px;\n      &a {\n        ' + (0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], '\n          color: ' + props.theme['$nav-styleguide-hover-color'] + ';\n        ') + '\n      }\n    }\n ';
});
/* eslint-enable-line indent */
NavigationStyleguide.defaultProps = defaultProps;
NavigationStyleguide.propTypes = propTypes;

/** @component */
exports.default = NavigationStyleguide;