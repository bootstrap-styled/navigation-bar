'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapStyled = require('bootstrap-styled');

var _theme = require('../theme');

var _OffsetNavPush = require('../OffsetNavPush');

var _OffsetNavPush2 = _interopRequireDefault(_OffsetNavPush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<OffsetNavPush />', function () {
  var props = void 0;

  beforeEach(function () {
    props = {
      theme: (0, _bootstrapStyled.makeTheme)(_theme.theme),
      children: _react2.default.createElement(
        'h1',
        null,
        'Test'
      )
    };
  });

  it('should render an OffsetNavPush', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: props.theme },
      _react2.default.createElement(_OffsetNavPush2.default, props)
    ));
    expect(renderedComponent.find('OffsetNavPush').length).toEqual(1);
  });
}); /**
     * Testing our OffsetNavPush component
     */