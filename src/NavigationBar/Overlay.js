/**
 * Overlay component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import { fade } from 'bootstrap-styled-mixins/lib/utilities/transition';
import makeTheme from 'bootstrap-styled/lib/makeTheme';
import { theme as themeNavigationBar } from './theme';

const theme = makeTheme(themeNavigationBar);

export const defaultProps = {
  active: false,
  theme,
};

class OverlayUnstyled extends React.Component {
  static defaultProps = defaultProps;
  static propTypes = {
    className: PropTypes.string.isRequired,
    active: PropTypes.bool,
    theme: PropTypes.object,
  }

  render() {
    const {
      className,
      active,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <div
        className={cn(className, 'fade', {
          show: active,
        })}
        {...attributes}
      />
    );
  }
}

const Overlay = styled(OverlayUnstyled)`
  ${(props) => `
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: ${props.theme.navigationBar['$zindex-overlay']};
    background: ${props.theme.navigationBar['$overlay-bg']};
    transform: translate3d(100%, 0, 0);
    ${fade(props.theme['$enable-transitions'], props.theme['$transition-fade'])}
    &.show {
      transform: translate3d(0, 0, 0);
    }
  `}
`;

Overlay.defaultProps = defaultProps;

export default Overlay;

