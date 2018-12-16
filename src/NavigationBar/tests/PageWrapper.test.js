/**
 * Testing our PageWrapper component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import PageWrapper, { defaultProps } from '../PageWrapper';

const children = (<h1>Test</h1>);

describe('<PageWrapper />', () => {
  let theme;
  let props;

  beforeEach(() => {
    theme = defaultProps.theme; // eslint-disable-line prefer-destructuring
    props = Object.assign(defaultProps, {
      children,
    });
  });

  it('should render an Overlay', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={theme} injectGlobal={false}>
        <PageWrapper {...props} />
      </BootstrapProvider>
    );
    expect(renderedComponent.find('PageWrapper').length).toEqual(1);
  });
});
