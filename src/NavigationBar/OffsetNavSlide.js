import styled from 'styled-components';
import { transition } from '@bootstrap-styled/css-mixins/lib/transition';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import { ifElse } from '@bootstrap-styled/css-mixins/lib/conditional';
import { boxShadow } from '@bootstrap-styled/css-mixins/lib/box-shadow';
import OffsetNav from './OffsetNav';

const OffsetNavSlide = styled(OffsetNav)`
  ${(props) => `
    ${transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition'])}
    ${boxShadow(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow'])}  
    &.menu-left {
      left: 0;
      // if showMenu is true, then it shows the menu from xs-xl. If showMenu is set with a string such as md, it will only be show from breakpoint md and upwards.
      ${ifElse(props.show, (props.show === 'xs') ? 'transform: translateX(0);' : `transform: translateX(-100%); ${bp.up(props.show, props.theme['$grid-breakpoints'], 'transform: translateX(0);')}`, 'transform: translateX(-100%);')}
      
      &.active {
        transform: translateX(0);
      }
    }
    
    &.menu-right {
      right: 0;
      ${ifElse(props.show, (props.show === 'xs') ? 'transform: translateX(0);' : `transform: translateX(100%); ${bp.up(props.show, props.theme['$grid-breakpoints'], 'transform: translateX(0);')}`, 'transform: translateX(100%);')}
      &.active {
        transform: translateX(0);
      }
    }

  `}
`;

export default OffsetNavSlide;
