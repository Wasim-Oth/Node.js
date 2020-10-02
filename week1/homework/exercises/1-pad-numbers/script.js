
/**
 ** Exercise 1: Pad numbers 
 * 
 * In this file use the padLeft function from padLeft.js to
 * pad the numbers to exactly 4 spaces and log them to the console
 * 
 * Expected output (replace the underscore with spaces):
 * 
 *  ___12;
 *  __846;
 *  ____2;
 *  _1236;
 * 
 * Tips:
 *   where to use `exports` and where `require`?
 */


// YOUR CODE GOES HERE

const padleft = require('./padLeft')

const numbers = [ "12", "846", "2", "1236" ]
const result = numbers.map(number => padleft(number, 5, ' '))
console.log(result)

