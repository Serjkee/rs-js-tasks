/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
    let valArray = value.split(' ');
    let firstName = valArray[1];
    let secondName = valArray[2].slice(0, valArray[2].length - 1);
    console.log(`${firstName} ${secondName}`)
}

extractNameFromTemplate('Hello, John Doe!');
extractNameFromTemplate('Hello, Chuck Norris!');