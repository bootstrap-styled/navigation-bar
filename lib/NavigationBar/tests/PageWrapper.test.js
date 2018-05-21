'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('bootstrap-styled/lib');

var _PageWrapper = require('../PageWrapper');

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our PageWrapper component
 */

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

describe('<PageWrapper />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _PageWrapper.defaultProps.theme;
    props = Object.assign(_PageWrapper.defaultProps, {
      children: children
    });
  });

  it('should render an Overlay', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _lib.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_PageWrapper2.default, props)
    ));
    expect(renderedComponent.find('PageWrapper').length).toEqual(1);
  });
});