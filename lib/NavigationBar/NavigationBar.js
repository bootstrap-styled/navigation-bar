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

var _bootstrapStyled = require('bootstrap-styled');

var _theme = require('./theme');

var _OffsetNavPush = require('./OffsetNavPush');

var _OffsetNavPush2 = _interopRequireDefault(_OffsetNavPush);

var _OffsetNavSlide = require('./OffsetNavSlide');

var _OffsetNavSlide2 = _interopRequireDefault(_OffsetNavSlide);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * NavigationBar.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Navigation bar with both push and slide options, left and right.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var theme = (0, _bootstrapStyled.makeTheme)(_theme.theme);

var defaultProps = exports.defaultProps = {
  button: {
    component: _bootstrapStyled.Button,
    className: null
  },
  noOverlay: false,
  menuClose: false,
  onClick: null,
  shadowHeader: false,
  cssModule: null,
  dismiss: null,
  'nav-top': null,
  light: false,
  inverse: false,
  fixed: null,
  sticky: null,
  bgColor: null,
  offsetNavBgColor: null,
  'menu-right': false,
  'animation-push': false,
  theme: theme
};

var NavigationBarUnstyled = function (_React$Component) {
  _inherits(NavigationBarUnstyled, _React$Component);

  function NavigationBarUnstyled() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavigationBarUnstyled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavigationBarUnstyled.__proto__ || Object.getPrototypeOf(NavigationBarUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          animationPush = _this$props['animation-push'];

      if (onClick) {
        onClick(e);
      }

      _this.setState({ show: !_this.state.show });

      //  menu-push animation
      if (animationPush) {
        document.getElementById('wrapper').classList.toggle('active');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavigationBarUnstyled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          animationPush = _props['animation-push'],
          menuRight = _props['menu-right'];
      //  menu-push animation

      if (animationPush) {
        menuRight ? // eslint-disable-line no-unused-expressions
        document.getElementById('wrapper').classList.toggle('right') : document.getElementById('wrapper').classList.toggle('left');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn,
          _this2 = this;

      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          cssModule = _omit.cssModule,
          button = _omit.button,
          noOverlay = _omit.noOverlay,
          menuClose = _omit.menuClose,
          navTop = _omit['nav-top'],
          menuRight = _omit['menu-right'],
          animationPush = _omit['animation-push'],
          light = _omit.light,
          inverse = _omit.inverse,
          fixed = _omit.fixed,
          sticky = _omit.sticky,
          bgColor = _omit.bgColor,
          offsetNavBgColor = _omit.offsetNavBgColor,
          shadowHeader = _omit.shadowHeader,
          attributesTemp = _objectWithoutProperties(_omit, ['className', 'children', 'cssModule', 'button', 'noOverlay', 'menuClose', 'nav-top', 'menu-right', 'animation-push', 'light', 'inverse', 'fixed', 'sticky', 'bgColor', 'offsetNavBgColor', 'shadowHeader']);

      var _omit2 = (0, _lodash2.default)(attributesTemp, ['onClick']),
          attributes = _objectWithoutProperties(_omit2, []);

      var ButtonToggle = button.component,
          classNameButton = button.className,
          restButton = _objectWithoutProperties(button, ['component', 'className']);

      var cssClasses = (0, _classnames2.default)('navbar', 'justify-content-between', 'w-100', className, (_cn = {
        'navbar-light': light,
        'navbar-inverse': inverse
      }, _defineProperty(_cn, 'bg-' + bgColor, bgColor), _defineProperty(_cn, 'fixed-header-' + fixed, fixed), _defineProperty(_cn, 'sticky-' + sticky, sticky), _cn));

      var buttonMenuRight = menuRight ? 'flex-last' : '';

      var buttonClasses = (0, _classnames2.default)(buttonMenuRight, classNameButton, {
        'navbar-toggler-icon p-3 my-auto cursor-pointer': !classNameButton
      });

      var OffsetMenuAnimated = animationPush ? _react2.default.createElement(
        _OffsetNavPush2.default,
        {
          className: 'offset-header-navbar',
          active: this.state.show,
          bgColor: offsetNavBgColor,
          'menu-right': menuRight,
          'animation-push': animationPush,
          menuClose: noOverlay && menuClose,
          dismiss: this.handleClick,
          innerRef: function innerRef(offsetNav) {
            _this2.offsetNav = offsetNav;
          }
        },
        children
      ) : _react2.default.createElement(
        _OffsetNavSlide2.default,
        {
          className: 'offset-header-navbar',
          active: this.state.show,
          bgColor: offsetNavBgColor,
          'menu-right': menuRight,
          'animation-push': animationPush,
          menuClose: noOverlay && menuClose,
          dismiss: this.handleClick,
          innerRef: function innerRef(offsetNav) {
            _this2.offsetNav = offsetNav;
          }
        },
        children
      );

      return _react2.default.createElement(
        'div',
        null,
        !noOverlay && _react2.default.createElement(_Overlay2.default, { active: this.state.show, onClick: this.handleClick }),
        _react2.default.createElement(
          _bootstrapStyled.Header,
          _extends({ className: (0, _mapToCssModules2.default)((0, _classnames2.default)(cssClasses), cssModule), shadowHeader: shadowHeader }, attributes, { innerRef: function innerRef(header) {
              _this2.header = header;
            } }),
          _react2.default.createElement(ButtonToggle, _extends({ className: buttonClasses, onClick: this.handleClick }, restButton)),
          navTop && _react2.default.createElement(
            'div',
            null,
            navTop
          )
        ),
        OffsetMenuAnimated
      );
    }
  }]);

  return NavigationBarUnstyled;
}(_react2.default.Component);

NavigationBarUnstyled.defaultProps = defaultProps;
NavigationBarUnstyled.propTypes = {
  className: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  theme: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  shadowHeader: _propTypes2.default.bool,
  noOverlay: _propTypes2.default.bool,
  menuClose: _propTypes2.default.bool,
  cssModule: _propTypes2.default.object,
  button: _propTypes2.default.shape({
    component: _propTypes2.default.component,
    className: _propTypes2.default.string
  }),
  'nav-top': _propTypes2.default.node,
  light: _propTypes2.default.bool,
  inverse: _propTypes2.default.bool,
  fixed: _propTypes2.default.string,
  sticky: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  offsetNavBgColor: _propTypes2.default.string,
  'menu-right': _propTypes2.default.bool,
  'animation-push': _propTypes2.default.bool
};


var NavigationBar = (0, _styledComponents2.default)(NavigationBarUnstyled).withConfig({
  displayName: 'NavigationBar'
})(['', ''], function (props) {
  return '\n    z-index: calc(' + props.theme.navigationBar['$zindex-overlay'] + ' - 10);\n    &.fixed-header-' + props.fixed + ' {\n      position: fixed;\n      ' + props.fixed + ': 0;\n    }\n  ';
});

NavigationBar.defaultProps = defaultProps;
exports.default = NavigationBar;