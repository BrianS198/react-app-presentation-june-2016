# Gotchas

---
## Don't set state manually.

```js
// Bad
_someUpdateMethod: function(newData) {
  this.state.someData = newData;
}
```

```js
// Good
_someUpdateMethod: function(newData) {
  this.setState({someData: newData});
}
```

---
## Rendering Pitfalls
Avoid passing anonymous functions as props.

```js
// Bad
_renderSomeComponent: function(id) {
  return <SomeComponent onClick={() => this._selectComponent(id)}/>;
}
```

```js
// Good
_renderSomeComponent: function(id) {
  return (
    <SomeComponent
      onClick: {this_.selectComponent}
      id: {id}>
  );
}
```

---
## Rendering Pitfalls
Avoid other complex objects as props when non-Immutable.

```js
// Bad
_renderSomeComponent: function(id) {
  return <SomeComponent items={['One', 'Two']}/>;
}
```

```js
// Good
const ITEMS = ['One', 'Two'];

_renderSomeComponent: function(id) {
  return <SomeComponent items={ITEMS}/>;
}
```

---
## Other Caveats
* Keep your components simple. <!-- .element: class="fragment" data-fragment-index="1" -->
* Avoid creating Immutables in your component. <!-- .element: class="fragment" data-fragment-index="2" -->
* Refactor as you go. <!-- .element: class="fragment" data-fragment-index="3" -->
