/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
    let firstLevel = '┌' + '─'.repeat(width - 2) + '┐\n';
    let lastLevel = '└' + '─'.repeat(width - 2) + '┘';
    if (width === 2) width = 3;
    let middleLevel = '│' + ' '.repeat(width - 3) + ' │\n' ;
    let BetweenLevels = middleLevel.repeat(height - 2);

    let rectangle = firstLevel + BetweenLevels + lastLevel;
    console.log(rectangle);
}

getRectangleString(6, 4);
getRectangleString(2, 2);
getRectangleString(12, 3);