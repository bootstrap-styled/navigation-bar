/**
 * Testing our Overlay component
 */

import { mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled';
import Overlay, { defaultProps } from '../Overlay';

describe('<Overlay />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme;
    props = Object.assign(defaultProps, {
      active: false,
    });
  });

  it('should render an Overlay', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <Overlay {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Overlay').length).toEqual(1);
  });
  it('should render an Overlay without an active props', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme}>
        <Overlay {...Object.assign(props, { active: true })} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('Overlay').props().active).toBe(true);
  });
});
