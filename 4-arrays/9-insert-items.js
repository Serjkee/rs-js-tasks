/**
 * Inserts the item into specified array at specified index
 * 
 * @param {array} arr
 * @param {any} item
 * @param {number} index 
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
  let slicedArr = arr.slice();
  let spliceArr = slicedArr.splice(index, 0, item);
  console.log(slicedArr)
}

// Скорее всего в задании ошибка. Во втором примере 'x' и индекс должны стоять наоборот.

insertItem([ 1, 3, 4, 5 ], 2, 1);
insertItem([ 1, 'b', 'c'], 'x', 0);