/**
 * NavigationBar.js
 *
 * A Navigation bar with both push and slide options, left and right.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import findDOMNode from 'react-dom/lib/findDOMNode';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import { ifThen } from 'bootstrap-styled-mixins';
import { Button, Header, makeTheme } from 'bootstrap-styled';
import { theme as themeNavigationBar } from './theme';
import OffsetNavPush from './OffsetNavPush';
import OffsetNavSlide from './OffsetNavSlide';
import Overlay from './Overlay';

const theme = makeTheme(themeNavigationBar);

export const defaultProps = {
  button: {
    component: Button,
    className: null,
  },
  noOverlay: false,
  belowHeader: false,
  menuClose: false,
  onClick: null,
  shadowHeader: false,
  cssModule: null,
  dismiss: null,
  'nav-top': null,
  light: false,
  inverse: false,
  fixed: null,
  sticky: null,
  bgColor: 'primary',
  offsetNavBgColor: null,
  'menu-right': false,
  'animation-push': false,
  theme,
};

class NavigationBarUnstyled extends React.Component {
  static defaultProps = defaultProps;
  static propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    onClick: PropTypes.func,
    belowHeader: PropTypes.bool,
    shadowHeader: PropTypes.bool,
    noOverlay: PropTypes.bool,
    menuClose: PropTypes.bool,
    cssModule: PropTypes.object,
    button: PropTypes.shape({
      component: PropTypes.component,
      className: PropTypes.string,
    }),
    'nav-top': PropTypes.node,
    light: PropTypes.bool,
    inverse: PropTypes.bool,
    fixed: PropTypes.string,
    sticky: PropTypes.string,
    bgColor: PropTypes.string,
    offsetNavBgColor: PropTypes.string,
    'menu-right': PropTypes.bool,
    'animation-push': PropTypes.bool,
  }

  state = {
    show: false,
  };

  componentDidMount() {
    const { 'animation-push': animationPush, 'menu-right': menuRight, belowHeader } = this.props;

    // get header height for props belowHeader
    const componentAsANodeReact = findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    const node = componentAsANodeReact.querySelector('.navbar.justify-content-between');
    const nodeHeight = node.clientHeight;
    const offsetNav = componentAsANodeReact.querySelector('.offset-header-navbar');
    belowHeader ? (offsetNav.style.marginTop = `${nodeHeight}px`) : null; // eslint-disable-line no-unused-expressions

    //  menu-push animation
    if (animationPush) {
      menuRight ? ( // eslint-disable-line no-unused-expressions
        document.getElementById('wrapper').classList.toggle('right')
      ) : (
        document.getElementById('wrapper').classList.toggle('left')
      );
    }
  }

  handleClick = (e) => {
    const { onClick, 'animation-push': animationPush } = this.props;
    if (onClick) {
      onClick(e);
    }

    this.setState({ show: !this.state.show });

    //  menu-push animation
    if (animationPush) {
      document.getElementById('wrapper').classList.toggle('active');
    }
  };

  render() {
    const {
      className,
      children,
      cssModule,
      button,
      noOverlay,
      menuClose,
      'nav-top': navTop,
      'menu-right': menuRight,
      'animation-push': animationPush,
      light,
      inverse,
      fixed,
      sticky,
      bgColor,
      offsetNavBgColor,
      shadowHeader,
      ...attributesTemp
    } = omit(this.props, ['theme', 'belowHeader']);

    const {
      ...attributes
    } = omit(attributesTemp, ['onClick']);

    const {
      component: ButtonToggle,
      className: classNameButton,
      ...restButton
    } = button;

    const cssClasses = cn('navbar', 'justify-content-between', 'w-100', className, {
      'navbar-light': light,
      'navbar-inverse': inverse,
      [`bg-${bgColor}`]: bgColor,
      [`fixed-header-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    });

    const buttonMenuRight = menuRight ? 'flex-last' : '';

    const buttonClasses = cn(buttonMenuRight, classNameButton, {
      'navbar-toggler-icon p-3 my-auto cursor-pointer': !classNameButton,
    });

    const OffsetMenuAnimated = animationPush ? (
      <OffsetNavPush
        className="offset-header-navbar"
        active={this.state.show}
        bgColor={offsetNavBgColor}
        menu-right={menuRight}
        animation-push={animationPush}
        menuClose={noOverlay && menuClose}
        dismiss={this.handleClick}
      >
        {children}
      </OffsetNavPush>
    ) : (
      <OffsetNavSlide
        className="offset-header-navbar"
        active={this.state.show}
        bgColor={offsetNavBgColor}
        menu-right={menuRight}
        animation-push={animationPush}
        menuClose={noOverlay && menuClose}
        dismiss={this.handleClick}
      >
        {children}
      </OffsetNavSlide>
    );

    return (
      <div>
        {!noOverlay && (<Overlay active={this.state.show} onClick={this.handleClick} />)}
        <Header className={mapToCssModules(cn(cssClasses), cssModule)} shadowHeader={shadowHeader} {...attributes} innerRef={(header) => { this.header = header; }}>
          <ButtonToggle className={buttonClasses} onClick={this.handleClick} {...restButton} />
          {navTop && (<div>{navTop}</div>)}
        </Header>
        {OffsetMenuAnimated}
      </div>
    );
  }
}

const NavigationBar = styled(NavigationBarUnstyled)`
  ${(props) => `
    z-index: calc(${props.theme.navigationBar['$zindex-overlay']} - 10);
    ${ifThen(props.belowHeader, `z-index: calc(${props.theme.navigationBar['$zindex-overlay']} + 5);`)}
    &.fixed-header-${props.fixed} {
      position: fixed;
      ${props.fixed}: 0;
    }
  `}
`;

NavigationBar.defaultProps = defaultProps;
export default NavigationBar;
