/**
* Returns the array of useprcase strings from the specified array
* 
* @param {array} arr
* @return {array}
* 
* @example
*    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
*    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
*/
function getUpperCaseStrings(arr) {
  let mappedArray = arr.map( x => x.toUpperCase());
  console.log(mappedArray);
}

getUpperCaseStrings([ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]);
getUpperCaseStrings([ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]);