'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _transition = require('bootstrap-styled-mixins/lib/transition');

var _breakpoints = require('bootstrap-styled-mixins/lib/breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

var _conditional = require('bootstrap-styled-mixins/lib/conditional');

var _boxShadow = require('bootstrap-styled-mixins/lib/box-shadow');

var _OffsetNav = require('./OffsetNav');

var _OffsetNav2 = _interopRequireDefault(_OffsetNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OffsetNavPush = (0, _styledComponents2.default)(_OffsetNav2.default).withConfig({
  displayName: 'OffsetNavPush'
})(['', ''], function (props) {
  return '\n    ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow']) + '\n    &.menu-left {\n      // if showMenu is true, then it shows the menu from xs-xl. If showMenu is set with a string such as md, it will only be show from breakpoint md and upwards.\n      ' + (0, _conditional.ifElse)(props.show, props.show === 'xs' ? 'left: 0;' : 'left: -' + props.theme.navigationBar['$menu-offset-width'] + '; ' + _breakpoints2.default.up(props.show, props.theme['$grid-breakpoints'], 'left: 0;'), 'left: -' + props.theme.navigationBar['$menu-offset-width'] + ';') + '\n      ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n      &.active {\n        left: 0;\n      }\n    }\n    \n    &.menu-right {\n      ' + (0, _conditional.ifElse)(props.show, props.show === 'xs' ? 'right: 0;' : 'right: -' + props.theme.navigationBar['$menu-offset-width'] + '; ' + _breakpoints2.default.up(props.show, props.theme['$grid-breakpoints'], 'right: 0;'), 'right: -' + props.theme.navigationBar['$menu-offset-width'] + ';') + '\n      ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n      &.active {\n        right: 0;\n      }\n    }\n  ';
});

exports.default = OffsetNavPush;
module.exports = exports['default'];