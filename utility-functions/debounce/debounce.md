1. Execute function
```
const debounce = function (fn, wait) {
  return function () {
    const that = this;
    const args = arguments;

    const later = function () {
      fn.apply(that, args);
    };

    later()
  };
};
```
2. Set timeout
```
const debounce = function (fn, wait) {
  let timeout;
  return function () {
    const that = this;
    const args = arguments;

    const later = function () {
      fn.apply(that, args);
    };

    timeout = setTimeout(later, wait);
  };
};
```
3. Get latest one by clearTimeout
```
const debounce = function (fn, wait) {
  let timeout;
  return function () {
    const that = this;
    const args = arguments;

    const later = function () {
      fn.apply(that, args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
};
```
4. Example
```
<input
  onChange={debounce((event) => {
    console.log(event.target.value);
  }, 500)}
/>;
```