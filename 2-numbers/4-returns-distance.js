/**
 * Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  console.log(Math.sqrt((x2**2 - 2 * x1 * x2 + x1**2) + (y2**2 - 2 * y1 * y2 + y1**2)));
}


getDistanceBetweenPoints(0, 0, 0, 1);
getDistanceBetweenPoints(0, 0, 1, 0);
getDistanceBetweenPoints(-5, 0, 10, -10);
