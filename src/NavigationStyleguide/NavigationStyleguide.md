### Navigation component:
```js
const showDemoMenu = document.getElementsByClassName("rsg--hasSidebar-2");
const locationHref = window.location.href;
const path = locationHref.substring(locationHref.length - 1);
const invisible = (path === '/') ? { visibility: 'hidden' } : null;
const styles = showDemoMenu ? { ...invisible, position: 'fixed' } : null;
;
<div>
Open isolated mode in order to see menu.
  <NavigationStyleguide style={styles}>
    <Ul>
      <Li>
        <A color="white" href="javascript:void(0);" alt="not a link">one</A>
      </Li>
      <Li>
        <A color="white" href="javascript:void(0);" alt="not a link">two</A>
      </Li>
      <Li>
        <A color="white" href="javascript:void(0);" alt="not a link">three</A>
      </Li>
      <Li>
        <A color="white" href="javascript:void(0);" alt="not a link">four</A>
      </Li>
    </Ul>
  </NavigationStyleguide>
</div>
```
