/**
 * OffsetNav.js
 *
 * Basic OffsetNav component that will extended for the push and slide versions of the OffsetNav.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { makeTheme, Close } from 'bootstrap-styled';
import { theme as themeNavigationBar } from './theme';

const theme = makeTheme(themeNavigationBar);

export const defaultProps = {
  active: false,
  dismiss: null,
  menuClose: false,
  bgColor: null,
  right: false,
  push: false,
  top: null,
  show: null,
  cssModule: null,
  theme,
};

// eslint-disable-next-line react/prefer-stateless-function
class OffsetNavUnstyled extends React.Component {
  static defaultProps = defaultProps;
  static propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    dismiss: PropTypes.func,
    menuClose: PropTypes.bool,
    theme: PropTypes.object,
    bgColor: PropTypes.string,
    top: PropTypes.string,
    right: PropTypes.bool,
    push: PropTypes.bool,
    show: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    cssModule: PropTypes.object,
  }

  render() {
    const {
      className,
      children,
      active,
      dismiss,
      menuClose,
      bgColor,
      cssModule,
      right,
      show,
      ...attributes
    } = omit(this.props, ['theme', 'push', 'top']);

    const menuDirectionClassNames = right ? 'menu-right' : 'menu-left';

    const cssClasses = cn(className, menuDirectionClassNames, {
      [`bg-${bgColor}`]: bgColor,
    });

    return (
      <div
        className={mapToCssModules(cn(cssClasses, { active }), cssModule)}
        {...attributes}
        show={show}
      >
        {menuClose && <Close aria-label="Close" onDismiss={dismiss} />}
        {children}
      </div>
    );
  }
}

const OffsetNav = styled(OffsetNavUnstyled)`
  ${(props) => `
    position: fixed;
    top: ${props.top ? `${props.top}px;` : '0;'}
    bottom: 0;
    width: ${props.theme.navigationBar['$menu-offset-width']};
    height: 100%;
    background-color: ${props.theme.navigationBar['$menu-offset-nav-bg-color']};
    z-index: calc(${props.theme.navigationBar['$zindex-overlay']} + 10);
  `}
`;

OffsetNav.defaultProps = defaultProps;

export default OffsetNav;
