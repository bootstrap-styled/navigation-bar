/**
 * Testing our NavigationStyleguide component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import NavigationStyleguide, { defaultProps } from '../NavigationStyleguide';

const children = (<h1>Test</h1>);

describe('<NavigationStyleguide />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme; // eslint-disable-line prefer-destructuring
  });

  it('should render an NavigationBar', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <NavigationStyleguide {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('NavigationStyleguide').length).toEqual(1);
  });
  it('should render a NavigationStyleguide with children', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <NavigationStyleguide {...props}>
          {children}
        </NavigationStyleguide>
      </BootstrapProvider>
    );
    expect(renderedComponent.find('h1').length).toEqual(1);
  });
});
