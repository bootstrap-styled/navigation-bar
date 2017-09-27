import styled from 'styled-components';
import { transition } from 'bootstrap-styled-mixins/lib/transition';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
import OffsetNav from './OffsetNav';

const OffsetNavPush = styled(OffsetNav)`
  ${(props) => `
    ${boxShadow(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow'])}
    &.menu-left {
      left: -${props.theme['$menu-offset-width']};
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

