/**
 * Testing our NavigationBar component
 */

import { mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider, Button } from 'bootstrap-styled';
import NavigationBar, { defaultProps } from '../NavigationBar';

const children = (<h1>Test</h1>);
const navTopContent = (<span>Nav Top Content Test</span>);

describe('<NavigationBar />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      children,
      button: {
        component: Button,
        className: null,
      },
      offsetNav: {
        show: null,
        bgColor: null,
        top: null,
        right: false,
        push: false,
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
    });
  });

  it('should render an NavigationBar', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').length).toEqual(1);
  });
  it('should render an NavigationBar without an Overlay', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { noOverlay: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Overlay').length).toEqual(0);
  });
  it('should render an NavigationBar with a close button in the OffsetNav when menuClose and noOverlay are active', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { menuClose: true, noOverlay: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Close').length).toEqual(1);
  });
  it('should not render an NavigationBar with a close button in the OffsetNav when menuClose is true and noOverlay is false', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { menuClose: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Close').length).toEqual(0);
  });
  it('should render an NavigationBar with an onClick that triggers the OffsetNav', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...props} />
      </BootstrapProvider>
    );
    const menuButton = renderedComponent.find('Button');
    expect(renderedComponent.find('OffsetNav').props().active).toBe(false);
    menuButton.simulate('click');
    expect(renderedComponent.find('OffsetNav').props().active).toBe(true);
  });
  it('should render an NavigationBar with a boxShadow around its header', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { shadowHeader: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').props().shadowHeader).toEqual(true);
  });
  it('should render an NavigationBar with a content in the nav-top', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { 'nav-top': navTopContent })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Nav Top Content Test').length).toEqual(0);
  });
  it('should render an NavigationBar with a navbar-light className', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { light: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').props().light).toBe(true);
  });
  it('should render an NavigationBar with a navbar-inverse className', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { inverse: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').props().inverse).toBe(true);
  });
  it('should render an NavigationBar with a fixed top position', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { fixed: 'top' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').props().fixed).toEqual('top');
  });
  it('should render an NavigationBar with a fixed bottom position', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { fixed: 'bottom' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').props().fixed).toEqual('bottom');
  });
  it('should render an NavigationBar with a sticky top position', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { sticky: 'top' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').props().sticky).toEqual('top');
  });
  it('should render an NavigationBar with a sticky bottom position', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { sticky: 'bottom' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').props().sticky).toEqual('bottom');
  });
  it('should render an NavigationBar with a background color', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { bgColor: 'primary' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationBar').props().bgColor).toEqual('primary');
  });
  it('should render an NavigationBar with an animation slide by default', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavSlide').length).toEqual(1);
  });
  it('should pass a bgColor to the OffsetNav props', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { offsetNav: { bgColor: 'primary' } })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavSlide').props().bgColor).toEqual('primary');
  });
  it('should pass a top to the OffsetNav props', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { offsetNav: { top: '50px' } })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavSlide').props().top).toEqual('50px');
  });
  it('should pass a right to the OffsetNav props', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { offsetNav: { right: true } })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavSlide').props().right).toBe(true);
  });
  it('should pass a push to the OffsetNav props and set it ot OffsetNavPush', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { offsetNav: { push: true } })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavPush').props().push).toBe(true);
  });
  it('should pass a string to show to the OffsetNav props', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { offsetNav: { show: 'md' } })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavSlide').props().show).toEqual('md');
  });
});
