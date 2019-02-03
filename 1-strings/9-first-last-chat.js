/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
    console.log(str.replace('<', '').replace('>', ''));
}

unbracketTag('<div>');
unbracketTag('<span>');
unbracketTag('<a>');

function oneMoreOption(str) {
  console.log(str.split('').slice(1, str.length - 1).join(''));
}

oneMoreOption('<div>');
oneMoreOption('<span>');
oneMoreOption('<a>');