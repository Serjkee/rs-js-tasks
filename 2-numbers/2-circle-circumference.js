/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCicleCircumference(radius) {
  console.log(2 * Math.PI * radius);
}

getCicleCircumference(5);
getCicleCircumference(3.14);
getCicleCircumference(0);