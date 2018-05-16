/**
 * Testing our OffsetNavSlide component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled/lib';
import NavigationBar, { defaultProps } from '../NavigationBar';
import OffsetNavSlide from '../OffsetNavSlide';

const children = (<h1>Test</h1>);

describe.skip('<OffsetNavSlide />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      children,
    });
  });

  it('should render an OffsetNavSlide', () => {
    const renderedComponent = shallow(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...props}>
          <OffsetNavSlide>
            {children}
          </OffsetNavSlide>
        </NavigationBar>
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavSlide').length).toEqual(1);
  });
  it('should render an OffsetNavPush with show xs', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <NavigationBar {...Object.assign(props, { offsetNav: { show: 'xs' } })} >
          {children}
        </NavigationBar>
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavSlide').props().show).toEqual('xs');
  });
});
