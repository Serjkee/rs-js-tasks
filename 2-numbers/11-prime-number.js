/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 * 
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  if (n % 2 === 0 || n % 3 === 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}

isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(11);
isPrime(12);
isPrime(16);
isPrime(17);