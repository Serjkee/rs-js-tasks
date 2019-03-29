/**
 * Returns the array with strings only in the specified array (in original order)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat', 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 */
function getArrayOfStrings(arr) {
   let filteredArray = arr.filter(x => typeof x === 'string');
   console.log(filteredArray)
}

getArrayOfStrings([ 0, 1, 'cat', 3, true, 'dog' ]);
getArrayOfStrings([ 1, 2, 3, 4, 5 ]);
getArrayOfStrings([ 'cat', 'dog', 'raccon' ]);