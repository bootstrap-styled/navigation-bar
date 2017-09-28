import styled from 'styled-components';
import { transition, boxShadow } from 'bootstrap-styled-mixins';
import OffsetNav from './OffsetNav';

const OffsetNavPush = styled(OffsetNav)`
  ${(props) => `
    ${boxShadow(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow'])}
    &.menu-left {
      left: -${props.theme.navigationBar['$menu-offset-width']};
      ${transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition'])}
      &.active {
        left: 0;
      }
    }
    
    &.menu-right {
      right: -${props.theme.navigationBar['$menu-offset-width']};
      ${transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition'])}
      &.active {
        right: 0;
      }
    }
  `}
`;

export default OffsetNavPush;

