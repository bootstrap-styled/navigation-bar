# navigation-bar

navigation-bar npm package.

**Master**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/badges/master/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/commits/master)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/badges/master/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/badges/dev/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/commits/dev)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/badges/dev/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/commits/dev)

## Table of Contents

  - [NavigationBar](#navigationbar)
  - [Changelog](#changelog)
  - [Reminders](#reminders)
  - [Quick start](#quick-start)
  - [Release](#release)
  - [License](#license)

---

## NavigationBar

**props**:

    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    onClick: PropTypes.func,
    shadowHeader: PropTypes.bool,
    noOverlay: PropTypes.bool,
    menuClose: PropTypes.bool,
    cssModule: PropTypes.object,
    button: PropTypes.shape({
      component: PropTypes.component,
      className: PropTypes.string,
    }),
    'nav-top': PropTypes.node,
    light: PropTypes.bool,
    inverse: PropTypes.bool,
    fixed: PropTypes.string,
    sticky: PropTypes.string,
    bgColor: PropTypes.string,
    offsetNav: PropTypes.shape({
      show: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
      ]),
      bgColor: PropTypes.string,
      top: PropTypes.string,
      right: PropTypes.bool,
      push: PropTypes.bool,
    }),

**theme**:

| key           | sub-key                       | value                                                                        |
|---------------|-------------------------------|------------------------------------------------------------------------------|
| navigationBar | `$zindex-overlay`             | '2050'                                                                       |
|               | `$menu-offset-width`          | '220px'                                                                      |
|               | `$menu-offset-nav-bg-color`   | 'white'                                                                      |
|               | `$menu-offset-nav-box-shadow` | 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px' |
|               | `$menu-offset-nav-transition` | '.3s'                                                                        |
|               | `$overlay-bg`                 | 'rgba(0, 0, 0, 0.3)'                                                         |


**example usage**:

```
import NavigationBar from 'navigation-bar';

<NavigationBar
  fixed="top"
  className="flex-lg-column flex-row"
  button={{
    component: MenuButton,
    className: 'd-lg-none mr-lg-5 mr-3 my-auto btn-primary',
  }}
  offsetNav={{
    right: true,
    show: 'lg',
    bgColor: 'inverse',
    top: '70',
  }}
  nav-top={(
    <ContentMenuWrapper className="d-flex justify-content-between">
      <A href="#home"><Img alt="Responsive image" src="rs-logo-white.png" className="logo-home my-2" /></A>
      <Nav className="d-lg-flex d-none my-auto">
        <MenuNavLink href="#services" text="services" />
        <MenuNavLink href="#methodologies" text="méthodologies" />
        <MenuNavLink href="#why-us" text="why us" />
        <MenuNavLink href="#technologies" text="technologies" />
        <MenuNavLink href="#contact" text="contact" />
      </Nav>
    </ContentMenuWrapper>
  )}
>
  <ListGroup>
    <MenuOffsetLink href="#services" text="services" />
    <MenuOffsetLink href="#methodologies" text="méthodologies" />
    <MenuOffsetLink href="#why-us" text="why us" />
    <MenuOffsetLink href="#technologies" text="technologies" />
    <MenuOffsetLink href="#contact" text="contact" />
  </ListGroup>
</NavigationBar>
```

## Changelog

  - View [Changelog](CHANGELOG.md)

## Reminders

**⚠️ When using this plugin, you must import in the first line of your application javascript entry file `babel-polyfill`: ⚠️**
  
    import "babel-polyfill";
    
To enable ES features in older browsers, you MUST include in the package.json

    "browserslist": ["ie >= 9", "last 2 versions"]
    // or
    "browserslist": ["ie >= 10", "last 2 versions"]

## Quick start

Clone project

    git clone ssh://git@module.kopaxgroup.com:20024/bootstrap-styled/navigation-bar.git

Install dependencies

    npm install

Build project

    npm run build
    
Run unit test
     
    npm test
    
Watch unit test
     
    npm run test:watch

Watch the `/dist` directory

    npm run build:dist:watch

Watch the `/lib` directory

    npm run build:lib:watch


# Contribute

`master` is used to release the version. 

- `master` only accept merge requests from `dev`

`dev` is the developement branch. It should be used by developers for applying their merge requests.

If you wish to implement new functionalities you need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 

You can now start working on your branch. Don't forget to check `Delete branch when merged`.

## Release

Merge `dev` into `master` will release a new version and prepare a new version in `dev`.

To release a new version, edit the [Changelog](CHANGELOG.md) and set the version in `package.json` and merge your change into `master`.

**⚠️ if you are releasing on a git repository instead of a npm repository, **DO NOT** forget to remove `build`, and `dist` from the `.gitignore` ⚠️**

    sed -i "/lib\|dist/d" .gitignore

## License

Copyright (c) 2017 Kopax Ltd. For more information `contact@kopaxgroup.com`. Made with [rollup-umd](https://module.kopaxgroup.com/dev-tools/rollup-umd/tags/0.1.5) 0.1.5
