/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n] 
 *  or f[n] = f[n-1] + x[n]
 * 
 * @param {array} arr
 * @return {array}
 * 
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0] 
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
  let newArr = arr.slice();
  newArr.forEach( (x, index) => {
    if(arr[index - 1]) {
      return x + arr[index - 1];
    } else {
      return x;
    }
  })

  console.log(newArr);
}

getMovingSum([ 1, 1, 1, 1, 1 ]);
getMovingSum([ 10, -10, 10, -10, 10 ]);
getMovingSum([ 0, 0, 0, 0, 0]);
getMovingSum([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);