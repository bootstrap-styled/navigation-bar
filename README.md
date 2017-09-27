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
