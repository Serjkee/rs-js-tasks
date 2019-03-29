/**
 * Returns an array of positive numbers from the specified array in original order
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => [] 
 */
function getArrayOfPositives(arr) {
   let filteredArr = arr.filter(x => x > 0);
   console.log(filteredArr);
}

getArrayOfPositives([ 0, 1, 2, 3, 4, 5 ]);
getArrayOfPositives([-1, 2, -5, -4, 0]);
getArrayOfPositives([]);