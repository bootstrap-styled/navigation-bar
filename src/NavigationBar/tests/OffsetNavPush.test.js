/**
 * Testing our OffsetNavPush component
 */

import { mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider, makeTheme } from 'bootstrap-styled';
import { theme } from '../theme';
import OffsetNavPush from '../OffsetNavPush';

describe('<OffsetNavPush />', () => {
  let props;

  beforeEach(() => {
    props = {
      theme: makeTheme(theme),
      children: <h1>Test</h1>,
    };
  });

  it('should render an OffsetNavPush', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={props.theme}>
        <OffsetNavPush {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('OffsetNavPush').length).toEqual(1);
  });
});
