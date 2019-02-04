/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
    console.log(typeof value === 'string' || value instanceof String);
}

isString();
isString(null);
isString([]);
isString({});
isString('test'); 
isString(new String('test'));