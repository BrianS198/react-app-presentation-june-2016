# React
* Declarative <!-- .element: class="fragment" data-fragment-index="1" -->
* Component-Based <!-- .element: class="fragment" data-fragment-index="2" -->
* Only Views <!-- .element: class="fragment" data-fragment-index="3" -->

---
## Example

```js
const InfoCard = React.createClass({
  render: function() {
    return (
    <section className='info-card'>
      <div className='name'>{this.props.name}</div>;
      <div className='job'>{this.props.job}</div>;
    </section>
    );
  }
});

ReactDOM.render(<InfoCard name="Jill" job="Police Officer"/>);
```

---
## ES6 Class Example

```js
class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render: function() {
    return (
    <section className='info-card'>
      <div className='name'>{this.props.name}</div>;
      <div className='job'>{this.props.job}</div>;
    </section>
    );
  }
});

ReactDOM.render(<InfoCard name="Frank" job="Accountant"/>);
```

---
## Stateless Example

```js
const InfoCard = (props) => {
  return (
  <section className='info-card'>
    <div className='name'>{this.props.name}</div>;
    <div className='job'>{this.props.job}</div>;
  </section>
  );
};

ReactDOM.render(<InfoCard name="Jasmine" job="Architect"/>);
```

---
## Component Overview
* State and Props <!-- .element: class="fragment" data-fragment-index="1" -->
* Lifecycle methods <!-- .element: class="fragment" data-fragment-index="2" -->
  * e.g. `componentWillMount`, `componentWillReceiveProps(nextProps)`, etc.

---
# Other Features

---
## PropType Validation

  ```js
  const InfoCard = React.createClass({
    propTypes: {
      name: React.PropTypes.string
      job: React.PropTypes.string
    },
    ...
  ```

---
## Mixins

  ```js
  const subscribeComponentToEvent = {
    componentWillMount: function() {
      Event.addChangeListener(this._onChange)
    },
    componentWillUnmount: function() {
      Event.removeChangeListener(this._onChange)
    }
  };

  const InfoCard = React.createClass({
    mixins: [subscribeComponentToEvent],

    render: function() {
      // Render stuff.
    },

    _onChange: function() {
      // This will fire on Event change due to the mixin.
    },
  });
  ```

* Not available in ES6. <!-- .element: class="fragment" data-fragment-index="1" -->
* PureRenderMixin <!-- .element: class="fragment" data-fragment-index="2" -->
