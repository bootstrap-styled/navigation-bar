/**
 * Testing our OffsetNavPush component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled/lib';
import NavigationBar, { defaultProps } from '../NavigationBar';
import OffsetNavPush from '../OffsetNavPush';

const children = (<h1>Test</h1>);

describe.skip('<OffsetNavPush />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      children,
    });
  });

  it('should render an OffsetNavPush', () => {
    const renderedComponent = shallow(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...props}>
          <OffsetNavPush>
            {children}
          </OffsetNavPush>
        </NavigationBar>
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavPush').length).toEqual(1);
  });
  it('should render an OffsetNavPush with show xs', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { offsetNav: { show: 'xs', push: true } })} >
          {children}
        </NavigationBar>
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavPush').props().show).toEqual('xs');
  });
});
