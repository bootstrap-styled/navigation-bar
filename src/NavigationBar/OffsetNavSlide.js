import styled from 'styled-components';
import { transition, boxShadow } from 'bootstrap-styled-mixins';
import OffsetNav from './OffsetNav';

const OffsetNavSlide = styled(OffsetNav)`
  ${(props) => `
    ${transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition'])}
    ${boxShadow(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow'])}  
    &.menu-left {
      left: 0;
      transform: translateX(-100%);
      &.active {
        transform: translateX(0);
      }
    }
    
    &.menu-right {
      right: 0;
      transform: translateX(100%);
      &.active {
        transform: translateX(0);
      }
    }

  `}
`;

export default OffsetNavSlide;

