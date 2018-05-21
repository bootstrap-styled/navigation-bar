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

var OffsetNavSlide = (0, _styledComponents2.default)(_OffsetNav2.default).withConfig({
  displayName: 'OffsetNavSlide'
})(['', ''], function (props) {
  return '\n    ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition']) + '\n    ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow']) + '  \n    &.menu-left {\n      left: 0;\n      // if showMenu is true, then it shows the menu from xs-xl. If showMenu is set with a string such as md, it will only be show from breakpoint md and upwards.\n      ' + (0, _conditional.ifElse)(props.show, props.show === 'xs' ? 'transform: translateX(0);' : 'transform: translateX(-100%); ' + _breakpoints2.default.up(props.show, props.theme['$grid-breakpoints'], 'transform: translateX(0);'), 'transform: translateX(-100%);') + '\n      \n      &.active {\n        transform: translateX(0);\n      }\n    }\n    \n    &.menu-right {\n      right: 0;\n      ' + (0, _conditional.ifElse)(props.show, props.show === 'xs' ? 'transform: translateX(0);' : 'transform: translateX(100%); ' + _breakpoints2.default.up(props.show, props.theme['$grid-breakpoints'], 'transform: translateX(0);'), 'transform: translateX(100%);') + '\n      &.active {\n        transform: translateX(0);\n      }\n    }\n\n  ';
});

exports.default = OffsetNavSlide;
module.exports = exports['default'];