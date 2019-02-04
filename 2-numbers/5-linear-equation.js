/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  let x;
  if (a !== 0) {
    x = -b / a;
  } else {
    x = -b;
  }
  if (x === -0) {
    x = 0;
  }
  console.log(x);
}

getLinearEquationRoot(5, -10);
getLinearEquationRoot(0, 8);
getLinearEquationRoot(5, 0);