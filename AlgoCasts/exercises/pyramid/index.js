// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// iterative solution
function pyramid(n) {
  let len = n * 2 - 1;
  let midpoint = Math.floor(len / 2);

  for (let i=0;i<n;i++) {
    let row = '';
    for (let j=0;j<len;j++) {
      if (j >= (midpoint - i) && j <= (midpoint + i)) {
        row += '#';
      } else {
        row += ' ';
      }
    }

    console.log(row);
  }
}

// recursive solution


module.exports = pyramid;
