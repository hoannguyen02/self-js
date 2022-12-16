/**
 * Delay in MS 
 * Format debounce(fn, wait)
 */
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

<input
  onChange={debounce((event) => {
    console.log(event.target.value);
  }, 500)}
/>;
