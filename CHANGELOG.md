# Changelog

All notable changes to this project will be documented in this file.

## [v1.1.3] - 2018-05-17

- Add dependencies `exports-loader@^0.7.0` and update `react-dom` to `@^16.3.2` and `styled-components` to `@^3.2.6`.
- Write documentation.
- Create menu `react-styleguidist`.
- Fix delete `userTheme` when using `makeTheme`.
- Using `/lib` instead of `/dist` for our libs.

## [1.0.3] - 2018-05-15

- Upgrade many deps.
- Upgrade to 9.8 rolup-umd configuration.

## [1.0.2] - 2017-10-02

- Fixed minor css mistake for `z-index`.
- Changed default value of `offsetNav.bgColor` from `primary` to null.

## [1.0.1] - 2017-10-02

- Fixed minor css mistake.

## [1.0.0] - 2017-10-02

- Placed all props related to `OffsetNav` into their own `offsetNav: prop.shape`.
- Added proptypes to `OffsetNav`:
  - `show` to display the `OffsetMenu` from a breaking-point and upwards.
  - `top` to display the `OffsetMenu` that can be manually positioned from the Y axis.
  - Renamed `animation-push` and `menu-right` to `push` and `right`.
  
## [0.0.5] - 2017-09-30

- Replaced className `navbar` on `Header` to `d-flex`. 

## [0.0.4] - 2017-09-30

- Remove prefix "v" to build version.

## [0.0.3] - 2017-09-30

- Upgrade dependency [bootstrap-styled](https://module.kopaxgroup.com/styled-components/bootstrap-styled/tags/v1.4.1) 1.4.1.
- `NavigationBar` as default export.
- rename `theme` and `makeTheme`.

## [0.0.2] - 2017-09-29

- Added dependency [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16) 1.0.0.
- Added dependency [raf](https://www.npmjs.com/package/raf) 3.3.2.
- Upgraded dependency [version](https://www.npmjs.com/package/version) from 0.0.1 to 0.0.2.
- Upgraded dependency [enzyme](https://www.npmjs.com/package/enzyme) from 2.9.1 to 3.0.0.

## [0.0.1] - 2017-09-27

- First release
