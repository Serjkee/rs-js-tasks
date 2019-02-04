/**
 * Returns an average of two given numbers.
 *
 * @param {numder} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  console.log((value1 + value2) / 2);
}

getAverage(5, 5);
getAverage(10, 0);
getAverage(-3, 3);