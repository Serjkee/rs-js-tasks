/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  console.log(parseFloat(value));
}

parseNumberFromString('100');
parseNumberFromString('37');
parseNumberFromString('-525.5');