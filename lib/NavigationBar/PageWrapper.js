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

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _bootstrapStyled = require('bootstrap-styled');

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * PageWrapper.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Must be set in container App and be parent to content when animation-push active,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * so that the whole content is moved when menu activated.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var theme = (0, _bootstrapStyled.makeTheme)(_theme.theme);

var defaultProps = exports.defaultProps = {
  theme: theme
};

var PageWrapperUnstyled = function (_React$Component) {
  _inherits(PageWrapperUnstyled, _React$Component);

  function PageWrapperUnstyled() {
    _classCallCheck(this, PageWrapperUnstyled);

    return _possibleConstructorReturn(this, (PageWrapperUnstyled.__proto__ || Object.getPrototypeOf(PageWrapperUnstyled)).apply(this, arguments));
  }

  _createClass(PageWrapperUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          attributes = _objectWithoutProperties(_omit, ['className', 'children']);

      return _react2.default.createElement(
        'div',
        _extends({
          className: className,
          id: 'wrapper'
        }, attributes),
        children
      );
    }
  }]);

  return PageWrapperUnstyled;
}(_react2.default.Component);

PageWrapperUnstyled.defaultProps = defaultProps;
PageWrapperUnstyled.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.object
};


var PageWrapper = (0, _styledComponents2.default)(PageWrapperUnstyled).withConfig({
  displayName: 'PageWrapper'
})(['', ''], function (props) {
  return '\n    position: relative;\n    height: 100%;\n    transition: ' + props.theme.navigationBar['$menu-offset-nav-transition'] + ';\n    &.left {\n      left: 0;\n      &.active {\n        left: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n      }\n    }\n    &.right {\n      right: 0;\n      &.active {\n        right: ' + props.theme.navigationBar['$menu-offset-width'] + ';\n      }\n    }\n  ';
});

PageWrapper.defaultProps = defaultProps;

exports.default = PageWrapper;