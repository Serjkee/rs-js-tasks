/**
 * Returns the n last items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
   let slicedArr = arr.slice(-n);
   console.log(slicedArr);
}

getTail([ 1, 3, 4, 5 ], 2);
getTail([ 'a', 'b', 'c', 'd'], 3);