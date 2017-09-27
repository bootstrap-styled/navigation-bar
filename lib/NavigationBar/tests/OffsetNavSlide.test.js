'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _NavigationBar = require('../NavigationBar');

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _OffsetNavSlide = require('../OffsetNavSlide');

var _OffsetNavSlide2 = _interopRequireDefault(_OffsetNavSlide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
); /**
    * Testing our OffsetNavSlide component
    */

describe('<OffsetNavSlide />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _NavigationBar.defaultProps.theme;
    props = Object.assign(_NavigationBar.defaultProps, {
      children: children
    });
  });

  it('should render an OffsetNavSlide', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react2.default.createElement(
      _BootstrapProvider2.default,
      { theme: theme },
      _react2.default.createElement(
        _NavigationBar2.default,
        props,
        _react2.default.createElement(
          _OffsetNavSlide2.default,
          null,
          children
        )
      )
    ));
    expect(renderedComponent.find('OffsetNavSlide').length).toEqual(1);
  });
});