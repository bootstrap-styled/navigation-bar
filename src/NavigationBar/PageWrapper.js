/**
 * PageWrapper.js
 *
 * Must be set in container App and be parent to content when animation-push active,
 * so that the whole content is moved when menu activated.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash.omit';
import theme from './theme';

export const defaultProps = {
  theme,
};
// eslint-disable-next-line react/prefer-stateless-function
class PageWrapperUnstyled extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    theme: PropTypes.object,
  }
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      ...attributes
    } = omit(this.props, ['theme']);
    return (
      <div
        className={className}
        id="wrapper"
        {...attributes}
      >
        {children}
      </div>
    );
  }
}

/**
 * TODO: write props documentation
 */
const PageWrapper = styled(PageWrapperUnstyled)`
  ${(props) => `
    position: relative;
    height: 100%;
    transition: ${props.theme.navigationBar['$menu-offset-nav-transition']};
    &.left {
      left: 0;
      &.active {
        left: ${props.theme.navigationBar['$menu-offset-width']};
      }
    }
    &.right {
      right: 0;
      &.active {
        right: ${props.theme.navigationBar['$menu-offset-width']};
      }
    }
  `}
`;

PageWrapper.defaultProps = defaultProps;

/** @component */
export default PageWrapper;

