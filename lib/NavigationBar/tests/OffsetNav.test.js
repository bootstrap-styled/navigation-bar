'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapStyled = require('bootstrap-styled');

var _OffsetNav = require('../OffsetNav');

var _OffsetNav2 = _interopRequireDefault(_OffsetNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our OffsetNav component
 */
var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);

describe('<OffsetNav />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _OffsetNav.defaultProps.theme;
    props = Object.assign(_OffsetNav.defaultProps, {
      children: children,
      active: false,
      dismiss: jest.fn(),
      bgColor: null,
      top: null,
      show: null,
      right: false,
      push: false
    });
  });

  it('should render an OffsetNav', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_OffsetNav2.default, props)
    ));
    expect(renderedComponent.find('OffsetNav').length).toEqual(1);
  });
  it('should render an OffsetNav with an activable active prop', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_OffsetNav2.default, Object.assign(props, { active: true }))
    ));
    expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  });
  it('should render an OffsetNav with a Close Button', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_OffsetNav2.default, Object.assign(props, { menuClose: true }))
    ));
    expect(renderedComponent.find('Close').length).toEqual(1);
  });
  it('should render an OffsetNav with a Close Button that calls an onDismiss function', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_OffsetNav2.default, Object.assign(props, { menuClose: true }))
    ));
    var close = renderedComponent.find('Close');
    close.simulate('click');
    expect(props.dismiss).toHaveBeenCalled();
  });
  it('should render an OffsetNav with a bgColor props', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_OffsetNav2.default, Object.assign(props, { bgColor: 'primary' }))
    ));
    expect(renderedComponent.find('OffsetNav').props().bgColor).toEqual('primary');
  });
  it('should render an OffsetNav with a right props', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_OffsetNav2.default, Object.assign(props, { right: true }))
    ));
    expect(renderedComponent.find('OffsetNav').props().right).toBe(true);
  });
  it('should render an OffsetNav with a animation-push props', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_OffsetNav2.default, Object.assign(props, { push: true }))
    ));
    expect(renderedComponent.find('OffsetNav').props().push).toBe(true);
  });
  it('should render an OffsetNav with a show props', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_OffsetNav2.default, Object.assign(props, { show: 'md' }))
    ));
    expect(renderedComponent.find('OffsetNav').props().show).toEqual('md');
  });
});