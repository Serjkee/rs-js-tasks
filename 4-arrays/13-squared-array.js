/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
  let forEaachArray = arr.map(x => x*x);
   console.log(forEaachArray)
}

toArrayOfSquares([ 0, 1, 2, 3, 4, 5 ]);
toArrayOfSquares([ 10, 100, -1 ]);