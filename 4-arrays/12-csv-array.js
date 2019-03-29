/**
 * Returns CSV represebtation of two-dimentional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 * 
 * @param {array} arr
 * @return {string}
 * 
 * @example
 *    [
  *       [  0, 1, 2, 3, 4 ],
  *       [ 10,11,12,13,14 ],
  *       [ 20,21,22,23,24 ],
  *       [ 30,31,32,33,34 ]
  *    ] 
  *           => 
  *     '0,1,2,3,4\n'
  *    +'10,11,12,13,14\n'
  *    +'20,21,22,23,24\n'
  *    +'30,31,32,33,34'
  */
 function toCsvText(arr) {
    let mappedArray = arr.map (x => x.join(','));
    let arrayToString = mappedArray.join('\n')
    console.log(arrayToString);
 }

 // До конца не понял задание, но так вроде норм.

 toCsvText([
  [  0, 1, 2, 3, 4 ],
  [ 10,11,12,13,14 ],
  [ 20,21,22,23,24 ],
  [ 30,31,32,33,34 ]
  ] );