export const theme = makeTheme();

export function makeTheme(userTheme = {}) {
  const newTheme = { navigationBar: {} };
  const u = userTheme;

  // NavigationBar
  newTheme.navigationBar['$zindex-overlay'] = u.navigationBar && u.navigationBar['$zindex-overlay'] ? u.navigationBar['$zindex-overlay'] : '2050';

  // OffsetNav
  newTheme.navigationBar['$menu-offset-width'] = u.navigationBar && u.navigationBar['$menu-offset-width'] ? u.navigationBar['$menu-offset-width'] : '220px';
  newTheme.navigationBar['$menu-offset-nav-bg-color'] = u.navigationBar && u.navigationBar['$menu-offset-nav-bg-color'] ? u.navigationBar['$menu-offset-nav-bg-color'] : 'white';
  newTheme.navigationBar['$zindex-overlay'] = u.navigationBar && u.navigationBar['$zindex-overlay'] ? u.navigationBar['$zindex-overlay'] : '2050';

  // OffsetNavPush
  newTheme.navigationBar['$menu-offset-width'] = u.navigationBar && u.navigationBar['$menu-offset-width'] ? u.navigationBar['$menu-offset-width'] : '220px';
  newTheme.navigationBar['$menu-offset-nav-box-shadow'] = u.navigationBar && u.navigationBar['$menu-offset-nav-box-shadow'] ? u.navigationBar['$menu-offset-nav-box-shadow'] : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
  newTheme.navigationBar['$menu-offset-nav-transition'] = u.navigationBar && u.navigationBar['$menu-offset-nav-transition'] ? u.navigationBar['$menu-offset-nav-transition'] : '.3s ease';

  // OffsetNavSlide
  newTheme.navigationBar['$menu-offset-nav-box-shadow'] = u.navigationBar && u.navigationBar['$menu-offset-nav-box-shadow'] ? u.navigationBar['$menu-offset-nav-box-shadow'] : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
  newTheme.navigationBar['$menu-offset-nav-transition'] = u.navigationBar && u.navigationBar['$menu-offset-nav-transition'] ? u.navigationBar['$menu-offset-nav-transition'] : '.3s ease';

  // Overlay
  newTheme.navigationBar['$zindex-overlay'] = u.navigationBar && u.navigationBar['$zindex-overlay'] ? u.navigationBar['$zindex-overlay'] : '2050';
  newTheme.navigationBar['$overlay-bg'] = u.navigationBar && u.navigationBar['$overlay-bg'] ? u.navigationBar['$overlay-bg'] : 'rgba(0, 0, 0, 0.3)';

  // PageWrapper
  newTheme.navigationBar['$menu-offset-width'] = u.navigationBar && u.navigationBar['$menu-offset-width'] ? u.navigationBar['$menu-offset-width'] : '220px';
  newTheme.navigationBar['$menu-offset-nav-transition'] = u.navigationBar && u.navigationBar['$menu-offset-nav-transition'] ? u.navigationBar['$menu-offset-nav-transition'] : '.3s ease';

  return newTheme;
}
