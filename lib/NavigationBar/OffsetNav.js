'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _makeTheme = require('bootstrap-styled/lib/makeTheme');

var _makeTheme2 = _interopRequireDefault(_makeTheme);

var _Close = require('bootstrap-styled/lib/Close');

var _Close2 = _interopRequireDefault(_Close);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OffsetNav.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Basic OffsetNav component that will extended for the push and slide versions of the OffsetNav.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var theme = (0, _makeTheme2.default)(_theme.theme);

var defaultProps = exports.defaultProps = {
  active: false,
  dismiss: null,
  menuClose: false,
  bgColor: 'primary',
  'menu-right': false,
  'animation-push': false,
  cssModule: null,
  theme: theme
};

var OffsetNavUnstyled = function (_React$Component) {
  _inherits(OffsetNavUnstyled, _React$Component);

  function OffsetNavUnstyled() {
    _classCallCheck(this, OffsetNavUnstyled);

    return _possibleConstructorReturn(this, (OffsetNavUnstyled.__proto__ || Object.getPrototypeOf(OffsetNavUnstyled)).apply(this, arguments));
  }

  _createClass(OffsetNavUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme', 'elementWidth', 'animation-push']),
          className = _omit.className,
          children = _omit.children,
          active = _omit.active,
          dismiss = _omit.dismiss,
          menuClose = _omit.menuClose,
          bgColor = _omit.bgColor,
          cssModule = _omit.cssModule,
          menuRight = _omit['menu-right'],
          attributes = _objectWithoutProperties(_omit, ['className', 'children', 'active', 'dismiss', 'menuClose', 'bgColor', 'cssModule', 'menu-right']);

      var menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';

      var cssClasses = (0, _classnames2.default)(className, menuDirectionClassNames, _defineProperty({}, 'bg-' + bgColor, bgColor));

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _mapToCssModules2.default)((0, _classnames2.default)(cssClasses, { active: active }), cssModule)
        }, attributes),
        menuClose && _react2.default.createElement(_Close2.default, { 'aria-label': 'Close', onDismiss: dismiss }),
        children
      );
    }
  }]);

  return OffsetNavUnstyled;
}(_react2.default.Component);

OffsetNavUnstyled.defaultProps = defaultProps;
OffsetNavUnstyled.propTypes = {
  className: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  active: _propTypes2.default.bool,
  dismiss: _propTypes2.default.func,
  menuClose: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  bgColor: _propTypes2.default.string,
  'menu-right': _propTypes2.default.bool,
  'animation-push': _propTypes2.default.bool,
  cssModule: _propTypes2.default.object
};


var OffsetNav = (0, _styledComponents2.default)(OffsetNavUnstyled).withConfig({
  displayName: 'OffsetNav'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n    height: 100%;\n    background-color: ' + props.theme.navigationBar['$menu-offset-nav-bg-color'] + ';\n    z-index: calc(' + props.theme.navigationBar['$zindex-overlay'] + ' + 10);\n  ';
});

OffsetNav.defaultProps = defaultProps;

exports.default = OffsetNav;