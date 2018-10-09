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
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import { hoverFocus } from '@bootstrap-styled/css-mixins/lib/hover';

export const defaultProps = {
  theme: {
    navigationStyleguide: {
      '$nav-styleguide-height': '100%',
      '$nav-styleguide-color': '#444444',
      '$nav-styleguide-hover-color': '#898989',
      '$nav-styleguide-bg-color': '#F5F5F5',
      '$nav-styleguide-border': '#e8e8e8 solid',
      '$nav-styleguide-top': 0,
      '$nav-styleguide-left': 0,
      '$nav-styleguide-bottom': 0,
      '$nav-styleguide-overflow': 'auto',
      '$nav-styleguide-list-style-type': 'none',
      '$nav-styleguide-padding-bottom': {
        sm: 4,
      },
      '$nav-styleguide-position': {
        sm: 'static',
        md: 'fixed',
      },
      '$nav-styleguide-width': {
        sm: '100%',
        md: '150px',
      },
      '$nav-styleguide-border-width': {
        sm: '1px 0px 0px 0px',
        md: '0px 1px 0px 0px',
      },
      '$nav-styleguide-text-align': {
        sm: 'center',
        md: 'left',
      },
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    navigationStyleguide: PropTypes.shape({
      '$nav-styleguide-height': PropTypes.string,
      '$nav-styleguide-color': PropTypes.string,
      '$nav-styleguide-hover-color': PropTypes.string,
      '$nav-styleguide-bg-color': PropTypes.string,
      '$nav-styleguide-border': PropTypes.string,
      '$nav-styleguide-top': PropTypes.number,
      '$nav-styleguide-left': PropTypes.number,
      '$nav-styleguide-bottom': PropTypes.number,
      '$nav-styleguide-overflow': PropTypes.string,
      '$nav-styleguide-list-style-type': PropTypes.string,
      '$nav-styleguide-padding-bottom': PropTypes.object,
      '$nav-styleguide-position': PropTypes.object,
      '$nav-styleguide-width': PropTypes.object,
      '$nav-styleguide-border-width': PropTypes.object,
      '$nav-styleguide-text-align': PropTypes.object,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const NavigationStyleguideUnstyled = (props) => {
  const {
    className,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'navigation'), cssModule)}
      {...attributes}
    />
  );
};

NavigationStyleguideUnstyled.defaultProps = defaultProps;
NavigationStyleguideUnstyled.propTypes = propTypes;

/**
 * A navigation component. Wrap `<NavigationStyleguide />` around any html node or element as the menu links.
 */
const NavigationStyleguide = styled(NavigationStyleguideUnstyled)` 
  ${(props) => `
    &.navigation {
      height: ${props.theme.navigationStyleguide['$nav-styleguide-height']};
      background-color: ${props.theme.navigationStyleguide['$nav-styleguide-bg-color']};
      border: ${props.theme.navigationStyleguide['$nav-styleguide-border']};
      border-width: ${props.theme.navigationStyleguide['$nav-styleguide-border-width']};
      top: ${props.theme.navigationStyleguide['$nav-styleguide-top']};
      left: ${props.theme.navigationStyleguide['$nav-styleguide-left']};
      bottom: ${props.theme.navigationStyleguide['$nav-styleguide-bottom']};
      overflow: ${props.theme.navigationStyleguide['$nav-styleguide-overflow']};
      width: ${props.theme.navigationStyleguide['$nav-styleguide-width'].md} !important;
      borderWidth: ${props.theme.navigationStyleguide['$nav-styleguide-border-width'].md};
      position: ${props.theme.navigationStyleguide['$nav-styleguide-position'].md};
      text-align: ${props.theme.navigationStyleguide['$nav-styleguide-text-align'].md};
    }
    ${bp.down('sm', props.theme.navigationStyleguide['$grid-breakpoints'],
    `
      &.navigation {
        position: ${props.theme.navigationStyleguide['$nav-styleguide-position'].sm};
        width: ${props.theme.navigationStyleguide['$nav-styleguide-width'].sm} !important;
        border-width: ${props.theme.navigationStyleguide['$nav-styleguide-border-width'].sm};
        padding-bottom: ${props.theme.navigationStyleguide['$nav-styleguide-padding-bottom'].sm};
        text-align: ${props.theme.navigationStyleguide['$nav-styleguide-text-align'].sm};
      }
      &.navigation ul {
        padding-left: 0;
      }
    `)}
    &.navigation ul {
      list-style-type: ${props.theme.navigationStyleguide['$nav-styleguide-list-style-type']};
      padding-left: 15px;
    }
    & a {
      color: ${props.theme.navigationStyleguide['$nav-styleguide-color']};
      ${hoverFocus(props.theme['$enable-hover-media-query'], `
        color: ${props.theme.navigationStyleguide['$nav-styleguide-hover-color']};
        text-decoration: none;
      `)}
    }
 `}
`;
/* eslint-enable-line indent */
NavigationStyleguide.defaultProps = defaultProps;
NavigationStyleguide.propTypes = propTypes;

/** @component */
export default NavigationStyleguide;
