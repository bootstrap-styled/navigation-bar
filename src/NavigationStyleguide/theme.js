export function makeTheme(userTheme = { navigationStyleguide: {} }) {
  const newTheme = { navigationStyleguide: {} };
  const v = newTheme.navigationStyleguide || {};
  const u = userTheme.navigationStyleguide;

  // navigationStyleguide
  v['$nav-styleguide-color'] = u['$nav-styleguide-color'] || '#fff';
  v['$nav-styleguide-bg-color'] = u['$nav-styleguide-bg-color'] || '#ce4953';
  v['$nav-styleguide-border'] = u['$nav-styleguide-border'] || 'gray solid';
  v['$nav-styleguide-top'] = u['$nav-styleguide-top'] || 0;
  v['$nav-styleguide-left'] = u['$nav-styleguide-left'] || 0;
  v['$nav-styleguide-bottom'] = u['$nav-styleguide-bottom'] || 0;
  v['$nav-styleguide-overflow'] = u['$nav-styleguide-overflow'] || 'auto';
  v['$nav-styleguide-list-style-type'] = u['$nav-styleguide-list-style-type'] || 'none';

  // navigationStyleguide small screen
  v['$nav-styleguide-padding-bottom-sm'] = u['$nav-styleguide-padding-bottom-sm'] || 4;
  v['$nav-styleguide-position-sm'] = u['$nav-styleguide-position-sm'] || 'static';
  v['$nav-styleguide-width-sm'] = u['$nav-styleguide-width-sm'] || '100%';
  v['$nav-styleguide-border-width-sm'] = u['$nav-styleguide-border-width-sm'] || '1px 0px 0px 0px';
  v['$nav-styleguide-text-align-sm'] = u['$nav-styleguide-text-align-sm'] || 'center';

  // navigationStyleguide medium to large screen
  v['$nav-styleguide-position-md'] = u['$nav-styleguide-position-md'] || 'fixed';
  v['$nav-styleguide-width-md'] = u['$nav-styleguide-width-md'] || '150px';
  v['$nav-styleguide-text-align-md'] = u['$nav-styleguide-text-align-md'] || 'left';
  v['$nav-styleguide-border-width-md'] = u['$nav-styleguide-border-width-md'] || '0px 1px 0px 0px';

  newTheme.navigationStyleguide = v;
  return { ...userTheme, ...newTheme };
}

export default makeTheme();
