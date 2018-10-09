import { makeScopedTheme, toMakeTheme } from 'bootstrap-styled/lib/utils';


const theme = makeScopedTheme({
  '$nav-styleguide-height': '100%',
  '$nav-styleguide-color': '#444444',
  '$nav-styleguide-hover-color': '#898989',
  '$nav-styleguide-bg-color': '#F5F5F5',
  '$nav-styleguide-border': '#e8e8e8 solid',
  '$nav-styleguide-top': '0',
  '$nav-styleguide-left': '0',
  '$nav-styleguide-bottom': '0',
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
    md: '220px',
  },
  '$nav-styleguide-border-width': {
    sm: '1px 0px 0px 0px',
    md: '0px 1px 0px 0px',
  },
  '$nav-styleguide-text-align': {
    sm: 'center',
    md: 'left',
  },
}, 'navigationStyleguide');

export const makeTheme = toMakeTheme(theme);

export default theme;
