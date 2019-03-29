/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 * 
 * @param {array} arr
 * @return {array}
 * 
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
   let filteredArr = arr.filter(x => Boolean(x));
   console.log(filteredArr);
}

removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]);
removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]);
removeFalsyValues([ false, 0, NaN, '', undefined ]);

