'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapStyled = require('bootstrap-styled');

var _NavigationStyleguide = require('../NavigationStyleguide');

var _NavigationStyleguide2 = _interopRequireDefault(_NavigationStyleguide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our NavigationStyleguide component
 */

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

describe('<NavigationStyleguide />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _NavigationStyleguide.defaultProps.theme;
  });

  it('should render an NavigationBar', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationStyleguide2.default, props)
    ));
    expect(renderedComponent.find('NavigationStyleguide').length).toEqual(1);
  });
  it('should render a NavigationStyleguide with children', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(
        _NavigationStyleguide2.default,
        props,
        children
      )
    ));
    expect(renderedComponent.find('h1').length).toEqual(1);
  });
});