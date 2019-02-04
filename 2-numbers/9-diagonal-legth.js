/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelipidedDiagonal(a,b,c) {
  let x = Math.sqrt(a**2 + b**2);
  let d = Math.sqrt(x**2 + c**2);
  console.log(d);
}

getParallelipidedDiagonal(1,1,1);
getParallelipidedDiagonal(3,3,3);
getParallelipidedDiagonal(1,2,3);