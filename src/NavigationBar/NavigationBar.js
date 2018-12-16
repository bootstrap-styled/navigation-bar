/**
 * NavigationBar.js
 *
 * A Navigation bar with both push and slide options, left and right.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';
import Button from '@bootstrap-styled/v4/lib/Button';
import Header from '@bootstrap-styled/v4/lib/Header';
import { ifElse } from '@bootstrap-styled/css-mixins/lib/conditional';
import theme from './theme';
import OffsetNavPush from './OffsetNavPush';
import OffsetNavSlide from './OffsetNavSlide';
import Overlay from './Overlay';

export const defaultProps = {
  button: {
    component: Button,
    className: null,
  },
  offsetNav: {
    show: null,
    bgColor: null,
    top: null,
    right: false,
    push: false,
  },
  noOverlay: false,
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
  bgColor: null,
  theme,
};

class NavigationBarUnstyled extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    onClick: PropTypes.func,
    shadowHeader: PropTypes.bool,
    noOverlay: PropTypes.bool,
    menuClose: PropTypes.bool,
    cssModule: PropTypes.object,
    dismiss: PropTypes.bool,
    button: PropTypes.shape({
      component: PropTypes.any,
      className: PropTypes.string,
    }),
    'nav-top': PropTypes.node,
    light: PropTypes.bool,
    inverse: PropTypes.bool,
    fixed: PropTypes.string,
    sticky: PropTypes.string,
    bgColor: PropTypes.string,
    offsetNav: PropTypes.shape({
      show: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
      bgColor: PropTypes.string,
      top: PropTypes.string,
      right: PropTypes.bool,
      push: PropTypes.bool,
    }),
  };

  static defaultProps = defaultProps;

  state = {
    show: false,
  };

  componentDidMount() {
    const { push: animationPush, right: menuRight } = this.props.offsetNav; // eslint-disable-line react/destructuring-assignment
    const wrapper = document.getElementById('wrapper');
    //  menu-push animation
    if (animationPush && wrapper) {
      menuRight ? wrapper.classList.toggle('right') : wrapper.classList.toggle(('left')); // eslint-disable-line no-unused-expressions
    }
  }

  handleClick = (e) => {
    const { onClick } = this.props;
    const { push: animationPush } = this.props.offsetNav; // eslint-disable-line react/destructuring-assignment
    const wrapper = document.getElementById('wrapper');
    if (onClick) {
      onClick(e);
    }

    this.setState({ show: !this.state.show }); // eslint-disable-line react/no-access-state-in-setstate, react/destructuring-assignment

    //  menu-push animation
    if (animationPush && wrapper) {
      wrapper.classList.toggle('active');
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
      light,
      inverse,
      fixed,
      sticky,
      bgColor,
      offsetNav,
      shadowHeader,
      ...attributesTemp
    } = omit(this.props, ['theme']);

    const {
      ...attributes
    } = omit(attributesTemp, ['onClick']);

    const {
      component: ButtonToggle,
      className: classNameButton,
      ...restButton
    } = button;

    const {
      show: offsetNavShow,
      bgColor: offsetNavBgColor,
      top: offsetNavTop,
      right: offsetNavRight,
      push: offsetNavPush,
    } = offsetNav;

    const { show } = this.state;
    const cssClasses = cn('d-flex', 'justify-content-between', 'w-100', className, {
      'navbar-light': light,
      'navbar-inverse': inverse,
      [`bg-${bgColor}`]: bgColor,
      [`fixed-header-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    });

    const buttonMenuRight = offsetNavRight ? 'flex-last' : '';

    const buttonClasses = cn(buttonMenuRight, classNameButton, {
      'navbar-toggler-icon p-3 my-auto cursor-pointer': !classNameButton,
    });

    const OffsetMenuAnimated = offsetNavPush ? (
      <OffsetNavPush
        className="offset-navigation-bar"
        active={show}
        bgColor={offsetNavBgColor}
        right={offsetNavRight}
        push={offsetNavPush}
        top={offsetNavTop}
        menuClose={noOverlay && menuClose}
        dismiss={this.handleClick}
        show={offsetNavShow}
      >
        {children}
      </OffsetNavPush>
    ) : (
      <OffsetNavSlide
        className="offset-navigation-bar"
        active={show}
        bgColor={offsetNavBgColor}
        right={offsetNavRight}
        push={offsetNavPush}
        top={offsetNavTop}
        menuClose={noOverlay && menuClose}
        dismiss={this.handleClick}
        show={offsetNavShow}
      >
        {children}
      </OffsetNavSlide>
    );

    return (
      <div>
        {!noOverlay && (<Overlay active={show} onClick={this.handleClick} />)}
        <Header className={mapToCssModules(cn(cssClasses), cssModule)} shadowHeader={shadowHeader} {...attributes} ref={(header) => { this.header = header; }}>
          <ButtonToggle className={buttonClasses} onClick={this.handleClick} {...restButton} />
          {navTop && (<div>{navTop}</div>)}
        </Header>
        {OffsetMenuAnimated}
      </div>
    );
  }
}


/**
 * TODO: write props documentation
 */
const NavigationBar = styled(NavigationBarUnstyled)`
  ${(props) => `
    z-index:  ${ifElse(props.offsetNav.top, `calc(${props.theme.navigationBar['$zindex-overlay']} + 15)`, `calc(${props.theme.navigationBar['$zindex-overlay']} - 10)`)};
    &.fixed-header-${props.fixed} {
      position: fixed;
      ${props.fixed}: 0;
    }
  `}
`;

NavigationBar.defaultProps = defaultProps;

/** @component */
export default NavigationBar;
