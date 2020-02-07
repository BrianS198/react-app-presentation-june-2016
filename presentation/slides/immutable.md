# Immutable

---
## Example

Filter array and then join with a map:

```js
  const VALUE_MAP = {
    1: 'foo',
    2: 'bar',
    3: 'baz'
  }

  const existingArray = Immutable.List([1,2,9,10]);

  // Returns Immutable.List(['foo', 'bar'])
  existingArray
    .filter(VALUE_MAP.hasOwnProperty)
    .map(value => VALUE_MAP[value]);

  // Returns Immutable.List([1,2,9,10])
  console.log(existingArray);
```
