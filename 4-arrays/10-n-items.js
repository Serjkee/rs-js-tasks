/**
 * Returns the n first items of the specified array
 * 
 * @param {array} arr
 * @param {number} n 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
   let slicedArr = arr.slice(0, n);
   console.log(slicedArr);
}

getHead([ 1, 3, 4, 5 ], 2);
getHead([ 'a', 'b', 'c', 'd'], 3);