/**
 * Returns the array of string lengths from the specified string array.
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
  let mappedArray = arr.map( x => x.length);
  console.log(mappedArray);
}

getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]);
getStringsLength([ 'angular', 'react', 'ember' ]);