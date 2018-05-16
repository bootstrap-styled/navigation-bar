export function makeTheme(userTheme = { navigationBar: {} }) {
  const newTheme = { navigationBar: {} };
  const u = userTheme.navigationBar;
  const v = newTheme.navigationBar || {};

  // NavigationBar
  v['$zindex-overlay'] = u['$zindex-overlay'] ? u['$zindex-overlay'] : '2050';

  // OffsetNav
  v['$menu-offset-width'] = u['$menu-offset-width'] ? u['$menu-offset-width'] : '220px';
  v['$menu-offset-nav-bg-color'] = u['$menu-offset-nav-bg-color'] ? u['$menu-offset-nav-bg-color'] : 'white';

  // Offset
  v['$menu-offset-nav-box-shadow'] = u['$menu-offset-nav-box-shadow'] ? u['$menu-offset-nav-box-shadow'] : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
  v['$menu-offset-nav-transition'] = u['$menu-offset-nav-transition'] ? u['$menu-offset-nav-transition'] : '.3s ease';
  // newTheme.navigationBar['$menu-offset-nav-transition'] = u['$menu-offset-nav-transition'] || '.3s ease';

  // Overlay
  v['$overlay-bg'] = u['$overlay-bg'] ? u['$overlay-bg'] : 'rgba(0, 0, 0, 0.3)';

  newTheme.navigationBar = v;
  return { ...newTheme, ...userTheme };
}

export default makeTheme();
