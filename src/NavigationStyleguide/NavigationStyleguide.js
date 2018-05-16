/**
 * Navigation Styleguide
 *
 * Navigation component for react-styleguidist project and rollup-documentation
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import bp from 'bootstrap-styled-mixins/lib/breakpoints';

export const defaultProps = {
  theme: {
    '$nav-styleguide-color': '#fff',
    '$nav-styleguide-bg-color': '#ce4953',
    '$nav-styleguide-border': 'none',
    '$nav-styleguide-top': 0,
    '$nav-styleguide-left': 0,
    '$nav-styleguide-bottom': 0,
    '$nav-styleguide-overflow': 'auto',
    '$nav-styleguide-list-style-type': 'none',
    '$nav-styleguide-padding-bottom-sm': 4,
    '$nav-styleguide-position-sm': 'static',
    '$nav-styleguide-width-sm': '100%',
    '$nav-styleguide-border-width-sm': '1px 0px 0px 0px',
    '$nav-styleguide-text-align-sm': 'center',
    '$nav-styleguide-position-md': 'fixed',
    '$nav-styleguide-width-md': '150px',
    '$nav-styleguide-text-align-md': 'left',
    '$nav-styleguide-border-width-md': '0px 1px 0px 0px',
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$nav-styleguide-color': PropTypes.string,
    '$nav-styleguide-bg-color': PropTypes.string,
    '$nav-styleguide-border': PropTypes.string,
    '$nav-styleguide-top': PropTypes.number,
    '$nav-styleguide-left': PropTypes.number,
    '$nav-styleguide-bottom': PropTypes.number,
    '$nav-styleguide-overflow': PropTypes.string,
    '$nav-styleguide-list-style-type': PropTypes.string,
    '$nav-styleguide-padding-bottom-sm': PropTypes.number,
    '$nav-styleguide-position-sm': PropTypes.string,
    '$nav-styleguide-width-sm': PropTypes.string,
    '$nav-styleguide-border-width-sm': PropTypes.string,
    '$nav-styleguide-text-align-sm': PropTypes.string,
    '$nav-styleguide-position-md': PropTypes.string,
    '$nav-styleguide-width-md': PropTypes.string,
    '$nav-styleguide-text-align-md': PropTypes.string,
    '$nav-styleguide-border-width-md': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

class NavigationStyleguideUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = defaultProps;
  static propTypes = propTypes;

  render() {
    const {
      className,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <div
        className={mapToCssModules(cn(className, 'navigation'), cssModule)}
        {...attributes}
      />
    );
  }
}

/**
 * A navigation component. Wrap `<NavigationStyleguide />` around any html node or element as the menu links.
 */
const NavigationStyleguide = styled(NavigationStyleguideUnstyled)` 
  ${(props) => `
    &.navigation {
      height: 100%;
      color: ${props.theme['$nav-styleguide-color']};
      background-color: ${props.theme['$nav-styleguide-bg-color']};
      border: ${props.theme['$nav-styleguide-border']};
      top: ${props.theme['$nav-styleguide-top']};
      left: ${props.theme['$nav-styleguide-left']};
      bottom: ${props.theme['$nav-styleguide-bottom']};
      overflow: ${props.theme['$nav-styleguide-overflow']};
      width: ${props.theme['$nav-styleguide-width-md']} !important;
      borderWidth: ${props.theme['$nav-styleguide-border-width-md']};
      position: ${props.theme['$nav-styleguide-position-md']};
      text-align: ${props.theme['$nav-styleguide-text-align-md']};
    }
    ${bp.down('sm', props.theme['$grid-breakpoints'],
    `
      &.navigation {
        position: ${props.theme['$nav-styleguide-position-sm']};
        width: ${props.theme['$nav-styleguide-width-sm']} !important;
        border-width: ${props.theme['$nav-styleguide-border-width-sm']};
        padding-bottom: ${props.theme['$nav-styleguide-padding-bottom-sm']};
        text-align: ${props.theme['$nav-styleguide-text-align-sm']};
      }
      &.navigation ul {
        padding-left: 0;
      }
    `)}
    &.navigation ul {
      list-style-type: ${props.theme['$nav-styleguide-list-style-type']};
      padding-left: 15px;
    }
 `}
`;
/* eslint-enable-line indent */
NavigationStyleguide.defaultProps = defaultProps;
NavigationStyleguide.propTypes = propTypes;

/** @component */
export default NavigationStyleguide;
