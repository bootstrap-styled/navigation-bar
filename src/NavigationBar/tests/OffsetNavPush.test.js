/**
 * Testing our OffsetNavPush component
 */

import { shallow } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled/lib/BootstrapProvider';
import NavigationBar, { defaultProps } from '../NavigationBar';
import OffsetNavPush from '../OffsetNavPush';

const children = (<h1>Test</h1>);

describe('<OffsetNavPush />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      children,
      'animation-push': true,
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
});
