/**
 * Remove the first occurrence of string inside another string
 * 
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
    console.log(str.replace(value, ''));
}

removeFirstOccurrences('To be or not to be', 'not');
removeFirstOccurrences('I like legends', 'end');
removeFirstOccurrences('ABABAB','BA');