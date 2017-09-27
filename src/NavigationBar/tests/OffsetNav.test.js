/**
 * Testing our OffsetNav component
 */
import { mount } from 'enzyme';
import React from 'react';

import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import OffsetNav, { defaultProps } from '../OffsetNav';

const children = (<h1>Test</h1>);


describe('<OffsetNav />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      children,
      active: false,
      dismiss: jest.fn(),
      menuClose: false,
      bgColor: 'primary',
      'menu-right': false,
      'animation-push': false,
    });
  });

  it('should render an OffsetNav', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <OffsetNav {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNav').length).toEqual(1);
  });
  it('should render an OffsetNav with an activable active prop', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <OffsetNav {...Object.assign(props, { active: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  });
  it('should render an OffsetNav with a Close Button', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <OffsetNav {...Object.assign(props, { menuClose: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Close').length).toEqual(1);
  });
  it('should render an OffsetNav with a Close Button that calls an onDismiss function', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <OffsetNav {...Object.assign(props, { menuClose: true })} />
      </BootstrapProvider>
    );
    const close = renderedComponent.find('Close');
    close.simulate('click');
    expect(props.dismiss).toHaveBeenCalled();
  });
  it('should render an OffsetNav with a bgColor props', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <OffsetNav {...Object.assign(props, { bgColor: 'primary' })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNav').props().bgColor).toEqual('primary');
  });
  it('should render an OffsetNav with a menu-right props', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <OffsetNav {...Object.assign(props, { 'menu-right': true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNav').props()['menu-right']).toBe(true);
  });
  it('should render an OffsetNav with a animation-push props', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <OffsetNav {...Object.assign(props, { 'animation-push': true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNav').props()['animation-push']).toBe(true);
  });
});
