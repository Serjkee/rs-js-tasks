/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  console.log(value.toString().slice(-1));
}

getLastDigit(100);
getLastDigit(37);
getLastDigit(5);
getLastDigit(0);