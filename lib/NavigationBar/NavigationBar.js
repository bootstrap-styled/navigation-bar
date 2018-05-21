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

var _Button = require('bootstrap-styled/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Header = require('bootstrap-styled/lib/Header');

var _Header2 = _interopRequireDefault(_Header);

var _conditional = require('bootstrap-styled-mixins/lib/conditional');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

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

var defaultProps = exports.defaultProps = {
  button: {
    component: _Button2.default,
    className: null
  },
  offsetNav: {
    show: null,
    bgColor: null,
    top: null,
    right: false,
    push: false
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
  theme: _theme2.default
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
      var onClick = _this.props.onClick;
      var animationPush = _this.props.offsetNav.push;

      var wrapper = document.getElementById('wrapper');
      if (onClick) {
        onClick(e);
      }

      _this.setState({ show: !_this.state.show });

      //  menu-push animation
      if (animationPush && wrapper) {
        wrapper.classList.toggle('active');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavigationBarUnstyled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$offsetNav = this.props.offsetNav,
          animationPush = _props$offsetNav.push,
          menuRight = _props$offsetNav.right;

      var wrapper = document.getElementById('wrapper');
      //  menu-push animation
      if (animationPush && wrapper) {
        menuRight ? wrapper.classList.toggle('right') : wrapper.classList.toggle('left'); // eslint-disable-line no-unused-expressions
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
          light = _omit.light,
          inverse = _omit.inverse,
          fixed = _omit.fixed,
          sticky = _omit.sticky,
          bgColor = _omit.bgColor,
          offsetNav = _omit.offsetNav,
          shadowHeader = _omit.shadowHeader,
          attributesTemp = _objectWithoutProperties(_omit, ['className', 'children', 'cssModule', 'button', 'noOverlay', 'menuClose', 'nav-top', 'light', 'inverse', 'fixed', 'sticky', 'bgColor', 'offsetNav', 'shadowHeader']);

      var _omit2 = (0, _lodash2.default)(attributesTemp, ['onClick']),
          attributes = _objectWithoutProperties(_omit2, []);

      var ButtonToggle = button.component,
          classNameButton = button.className,
          restButton = _objectWithoutProperties(button, ['component', 'className']);

      var offsetNavShow = offsetNav.show,
          offsetNavBgColor = offsetNav.bgColor,
          offsetNavTop = offsetNav.top,
          offsetNavRight = offsetNav.right,
          offsetNavPush = offsetNav.push;


      var cssClasses = (0, _classnames2.default)('d-flex', 'justify-content-between', 'w-100', className, (_cn = {
        'navbar-light': light,
        'navbar-inverse': inverse
      }, _defineProperty(_cn, 'bg-' + bgColor, bgColor), _defineProperty(_cn, 'fixed-header-' + fixed, fixed), _defineProperty(_cn, 'sticky-' + sticky, sticky), _cn));

      var buttonMenuRight = offsetNavRight ? 'flex-last' : '';

      var buttonClasses = (0, _classnames2.default)(buttonMenuRight, classNameButton, {
        'navbar-toggler-icon p-3 my-auto cursor-pointer': !classNameButton
      });

      var OffsetMenuAnimated = offsetNavPush ? _react2.default.createElement(
        _OffsetNavPush2.default,
        {
          className: 'offset-navigation-bar',
          active: this.state.show,
          bgColor: offsetNavBgColor,
          right: offsetNavRight,
          push: offsetNavPush,
          top: offsetNavTop,
          menuClose: noOverlay && menuClose,
          dismiss: this.handleClick,
          show: offsetNavShow
        },
        children
      ) : _react2.default.createElement(
        _OffsetNavSlide2.default,
        {
          className: 'offset-navigation-bar',
          active: this.state.show,
          bgColor: offsetNavBgColor,
          right: offsetNavRight,
          push: offsetNavPush,
          top: offsetNavTop,
          menuClose: noOverlay && menuClose,
          dismiss: this.handleClick,
          show: offsetNavShow
        },
        children
      );

      return _react2.default.createElement(
        'div',
        null,
        !noOverlay && _react2.default.createElement(_Overlay2.default, { active: this.state.show, onClick: this.handleClick }),
        _react2.default.createElement(
          _Header2.default,
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

/**
 * TODO: write props documentation
 */


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
  offsetNav: _propTypes2.default.shape({
    show: _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    bgColor: _propTypes2.default.string,
    top: _propTypes2.default.string,
    right: _propTypes2.default.bool,
    push: _propTypes2.default.bool
  })
};
var NavigationBar = (0, _styledComponents2.default)(NavigationBarUnstyled).withConfig({
  displayName: 'NavigationBar'
})(['', ''], function (props) {
  return '\n    z-index:  ' + (0, _conditional.ifElse)(props.offsetNav.top, 'calc(' + props.theme.navigationBar['$zindex-overlay'] + ' + 15)', 'calc(' + props.theme.navigationBar['$zindex-overlay'] + ' - 10)') + ';\n    &.fixed-header-' + props.fixed + ' {\n      position: fixed;\n      ' + props.fixed + ': 0;\n    }\n  ';
});

NavigationBar.defaultProps = defaultProps;

/** @component */
exports.default = NavigationBar;