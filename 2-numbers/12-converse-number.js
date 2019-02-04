/**
 * Tries to convert value to number and returns it if conversion was successfull;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
    if (parseFloat(value) || value instanceof Number) {
      console.log(parseFloat(value));
    } else {
      console.log(def);
    }
}

toNumber(null, 0);
toNumber('test', 0);
toNumber('1', 0);
toNumber(42, 0);
toNumber(new Number(42), 0);