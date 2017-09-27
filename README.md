# navigation-bar

navigation-bar npm package.

**Master**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/badges/master/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/commits/master)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/badges/master/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/badges/dev/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/commits/dev)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/badges/dev/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/navigation-bar/commits/dev)

## Table of Contents

  - [NavigationBar](#navigation-bar)
  - [Changelog](#changelog)
  - [Reminders](#reminders)
  - [Quick start](#quick-start)
  - [Release](#release)
  - [License](#license)

---

## NavigationBar

**props**:

| Name               | Type      | Default                                        | Description                                                       |
|--------------------|-----------|------------------------------------------------|-------------------------------------------------------------------|
| `noOverlay`        | bool      | false                                          | disables Overlay                                                  |
| `belowHeader`      | bool      | false                                          | positions OffsetNav under the NavigationBar                       |
| `menuClose`        | bool      | flase                                          | enables a Close button in the OffsetNav                           |
| `shadowHeader`     | bool      | false                                          | enables box-shadow on NavigationBar                               |
| `light`            | bool      | false                                          | enables dark font                                                 |
| `inverse`          | bool      | false                                          | enables clear font                                                |
| `fixed`            | string    | null                                           | enables fixed position(top or bottom)                             |
| `sticky`           | string    | null                                           | enables sticky position(top or bottom / unstable due to browsers) |
| `bgColor`          | string    | null                                           | sets NavigationBar background as one the main brand colors        |
| `offsetNavBgColor` | string    | null                                           | sets OffsetNav background as one the main brand colors            |
| `animation-push`   | bool      | false                                          | enables push animation                                            |
| `menu-rigth`       | bool      | false                                          | switches the OffsetMenu and MenuButton to the other side          |
| `button`           | shape     | n/a                                            | allows to set props to a custom MenuButton                        |
| `button.component` | component | Button                                         | allows setting of custom MenuButton                               |
| `button.className` | string    | navbar-toggler-icon p-3 my-auto cursor-pointer | allows setting of className for MenuButton                        |
| `nav-top`          | node      | null                                           | content for NavigationBar                                         |
| `children`         | node      | null                                           | content for OffsetNav                                             |


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
  animation-push
  menu-right
  menuClose
  noOverlay
  fixed="top"
  className="flex-lg-column p-0"
  button={{
    component: MenuButton,
    className: 'd-lg-none mr-lg-5 mr-3 my-auto btn-primary',
  }}
  nav-top={(
    <div>
      <A href="#home"><Img alt="Responsive image" src="rs-logo-white.png" className="logo-home my-2" /></A>
      <Nav className="d-lg-flex d-none my-auto">
        <NavItem>
          <NavLink>home</NavLink>
        </NavItem>
      </Nav>
    </div>
  )}
>
  <ListGroup>
    <ListGroupItem>home</ListGroupItem>
    <ListGroupItem>services</ListGroupItem>
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
