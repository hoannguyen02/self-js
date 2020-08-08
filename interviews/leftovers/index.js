console.log('The total number of candles you can burn', calcBurnedCandles(5, 2));
/**
 * n is number of candles to burn
 * k is leftovers can be combined to make a new candle
 */
function calcBurnedCandles(n, k) {
  // Make sure n, k not null, undefined, number
  // N is integer
  // And n, k are greater than one
  if (
    !n ||
    !k ||
    typeof n !== 'number' ||
    typeof k !== 'number' ||
    !Number.isInteger(n) ||
    n <= 1 ||
    k <= 1
  ) {
    throw new Error('Invalid params');
  }
  // No need to calculate in case n & k are the same value
  if (n === k) {
    return n + 1;
  }
  // Calculate
  let leftovers = n;
  let newCandles = n;
  let total = n;
  while (leftovers > k) {
    newCandles = Math.floor(leftovers / k);
    total += newCandles;
    leftovers = Math.floor(leftovers / k) + (leftovers % k);
  }
  const lastCandle = leftovers === k ? 1 : 0;

  return total + lastCandle;
}
