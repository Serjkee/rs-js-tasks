/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
     console.log(value.trim());
}

removeLeadingAndTrailingWhitespaces( '  Abracadabra');
removeLeadingAndTrailingWhitespaces( 'cat');
removeLeadingAndTrailingWhitespaces('\tHello, World! ' );