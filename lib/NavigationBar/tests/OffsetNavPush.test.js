'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapStyled = require('bootstrap-styled');

var _NavigationBar = require('../NavigationBar');

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _OffsetNavPush = require('../OffsetNavPush');

var _OffsetNavPush2 = _interopRequireDefault(_OffsetNavPush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
); /**
    * Testing our OffsetNavPush component
    */

describe('<OffsetNavPush />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _NavigationBar.defaultProps.theme;
    props = Object.assign(_NavigationBar.defaultProps, {
      children: children,
      'animation-push': true
    });
  });

  it('should render an OffsetNavPush', function () {
    var renderedComponent = (0, _enzyme.shallow)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(
        _NavigationBar2.default,
        props,
        _react2.default.createElement(
          _OffsetNavPush2.default,
          null,
          children
        )
      )
    ));
    expect(renderedComponent.find('OffsetNavPush').length).toEqual(1);
  });
});