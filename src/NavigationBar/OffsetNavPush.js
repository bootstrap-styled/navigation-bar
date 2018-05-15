import styled from 'styled-components';
import { transition, boxShadow, ifElse, bp } from 'bootstrap-styled-mixins/lib';
import OffsetNav from './OffsetNav';

const OffsetNavPush = styled(OffsetNav)`
  ${(props) => `
    ${boxShadow(props.theme['$enable-shadows'], props.theme.navigationBar['$menu-offset-nav-box-shadow'])}
    &.menu-left {
      // if showMenu is true, then it shows the menu from xs-xl. If showMenu is set with a string such as md, it will only be show from breakpoint md and upwards.
      ${ifElse(props.show, (props.show === 'xs') ? 'left: 0;' : `left: -${props.theme.navigationBar['$menu-offset-width']}; ${bp.up(props.show, props.theme['$grid-breakpoints'], 'left: 0;')}`, `left: -${props.theme.navigationBar['$menu-offset-width']};`)}
      ${transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition'])}
      &.active {
        left: 0;
      }
    }
    
    &.menu-right {
      ${ifElse(props.show, (props.show === 'xs') ? 'right: 0;' : `right: -${props.theme.navigationBar['$menu-offset-width']}; ${bp.up(props.show, props.theme['$grid-breakpoints'], 'right: 0;')}`, `right: -${props.theme.navigationBar['$menu-offset-width']};`)}
      ${transition(props.theme['$enable-transitions'], props.theme.navigationBar['$menu-offset-nav-transition'])}
      &.active {
        right: 0;
      }
    }
  `}
`;

export default OffsetNavPush;

