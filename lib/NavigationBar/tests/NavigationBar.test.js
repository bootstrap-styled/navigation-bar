'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapStyled = require('bootstrap-styled');

var _NavigationBar = require('../NavigationBar');

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our NavigationBar component
 */

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
);
var navTopContent = _react2.default.createElement(
  'span',
  null,
  'Nav Top Content Test'
);

describe('<NavigationBar />', function () {
  var theme = void 0;
  var props = void 0;

  beforeEach(function () {
    theme = _NavigationBar.defaultProps.theme;
    props = Object.assign(_NavigationBar.defaultProps, {
      children: children,
      button: {
        component: _bootstrapStyled.Button,
        className: null
      },
      noOverlay: false,
      menuClose: false,
      onClick: jest.fn(),
      shadowHeader: false,
      cssModule: null,
      'nav-top': null,
      light: false,
      inverse: false,
      fixed: null,
      sticky: null,
      bgColor: 'primary',
      offsetNavBgColor: null,
      'menu-right': false,
      'animation-push': false
    });
  });

  it('should render an NavigationBar', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, props)
    ));
    expect(renderedComponent.find('NavigationBar').length).toEqual(1);
  });
  it('should render an NavigationBar without an Overlay', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { noOverlay: true }))
    ));
    expect(renderedComponent.find('Overlay').length).toEqual(0);
  });
  it('should render an NavigationBar with a close button in the OffsetNav when menuClose and noOverlay are active', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { menuClose: true, noOverlay: true }))
    ));
    expect(renderedComponent.find('Close').length).toEqual(1);
  });
  it('should render an NavigationBar with an onClick that triggers the OffsetNav', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, props)
    ));
    var menuButton = renderedComponent.find('Button');
    expect(renderedComponent.find('OffsetNav').props().active).toBe(false);
    menuButton.simulate('click');
    expect(renderedComponent.find('OffsetNav').props().active).toBe(true);
  });
  it('should render an NavigationBar with a boxShadow around its header', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { shadowHeader: true }))
    ));
    expect(renderedComponent.find('NavigationBar').props().shadowHeader).toEqual(true);
  });
  it('should render an NavigationBar with a content in the nav-top', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { 'nav-top': navTopContent }))
    ));
    expect(renderedComponent.find('Nav Top Content Test').length).toEqual(0);
  });
  it('should render an NavigationBar with a navbar-light className', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { light: true }))
    ));
    expect(renderedComponent.find('NavigationBar').props().light).toBe(true);
  });
  it('should render an NavigationBar with a navbar-inverse className', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { inverse: true }))
    ));
    expect(renderedComponent.find('NavigationBar').props().inverse).toBe(true);
  });
  it('should render an NavigationBar with a fixed top position', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { fixed: 'top' }))
    ));
    expect(renderedComponent.find('NavigationBar').props().fixed).toEqual('top');
  });
  it('should render an NavigationBar with a fixed bottom position', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { fixed: 'bottom' }))
    ));
    expect(renderedComponent.find('NavigationBar').props().fixed).toEqual('bottom');
  });
  it('should render an NavigationBar with a sticky top position', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { sticky: 'top' }))
    ));
    expect(renderedComponent.find('NavigationBar').props().sticky).toEqual('top');
  });
  it('should render an NavigationBar with a sticky bottom position', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { sticky: 'bottom' }))
    ));
    expect(renderedComponent.find('NavigationBar').props().sticky).toEqual('bottom');
  });
  it('should render an NavigationBar with a background color', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { bgColor: 'primary' }))
    ));
    expect(renderedComponent.find('NavigationBar').props().bgColor).toEqual('primary');
  });
  it('should pass a bgColor to the OffsetNav with the offsetNavBgColor props', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { offsetNavBgColor: 'secondary' }))
    ));
    expect(renderedComponent.find('NavigationBar').props().offsetNavBgColor).toEqual('secondary');
  });
  it('should render an NavigationBar with a menu on the right side', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, Object.assign(props, { 'menu-right': true }))
    ));
    expect(renderedComponent.find('OffsetNavSlide').props()['menu-right']).toBe(true);
  });
  it('should render an NavigationBar with an animation slide by default', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(
      _bootstrapStyled.BootstrapProvider,
      { theme: theme },
      _react2.default.createElement(_NavigationBar2.default, props)
    ));
    expect(renderedComponent.find('OffsetNavSlide').length).toEqual(1);
  });
});