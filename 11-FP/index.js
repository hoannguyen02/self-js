/**
 * Functional Programming(FP):
 * FP is a programming paradigm
 * A style of building the structure and elements of computer programs that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.
 * Consider before write a function:
 * One function do one task
 * Return statement
 * Make it pure(input=> output, no matter how many times call, with same input will return same output)
 * No share state
 * Immutable state
 * Composable
 * Predictable
 */

/**
 * Pros
 * Pure functions are easier to understand because they don’t change any states and depend only on the input given to them
 * Depending on input as parameters will return output so it makes the code more readable and easily understandable(Input=>Output)
 * Testing and debugging is easier
 */

/**
 * Cons
 * Immutable values and recursion can lead to decrease in performance.
 * It's quite difficult to combine all pure functions with the rest of application
 */

// An example with shopping
let user = {
  name: "Hoan Nguyen",
  active: true,
  cart: [],
  purchases: []
};

const history = [];
const compose = (f, g) => (...args) => f(g(...args));

user = purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: "Laptop", price: 200 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

// Add item to cart
function addItemToCart(user, item) {
  const { cart } = user;
  history.push(user);
  return { ...user, cart: cart.concat(item) };
}
// Add % tax to items
function applyTaxToItems(user) {
  const { cart } = user;
  history.push(user);
  const newCart = cart.map(c => ({ name: c.name, price: c.price * 1.3 }));
  return { ...user, cart: newCart };
}
// Buy Item: Cart => Purchase
function buyItem(user) {
  history.push(user);
  return { ...user, purchases: user.cart };
}
// Empty cart
function emptyCart(user) {
  history.push(user);
  return { ...user, cart: [] };
}

console.log("user", user);
console.log("history", history);
