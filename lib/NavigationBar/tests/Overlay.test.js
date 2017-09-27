'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Overlay = require('../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Overlay component
 */

describe('<Overlay />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _Overlay.defaultProps.theme;
    props = Object.assign(_Overlay.defaultProps, {
      active: false
    });
  });

  it('should render an Overlay', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      { theme: theme },
      _react2.default.createElement(_Overlay2.default, props)
    ));
    expect(renderedComponent.find('Overlay').length).toEqual(1);
  });
  it('should render an Overlay without an active props', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _BootstrapProvider2.default,
      { theme: theme },
      _react2.default.createElement(_Overlay2.default, Object.assign(props, { active: true }))
    ));
    expect(renderedComponent.find('Overlay').props().active).toBe(true);
  });
});