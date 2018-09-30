// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// my solution
/* function steps(n) {
  for (let i=0;i<n;i++) {
    let arr = new Array(n);
    arr.fill(' ',i+1,n);
    arr.fill('#',0,i+1);
    console.log(arr.join(''));
  }
} */

// solution 1 - iterative
/* function steps(n) {
  for (let row=0; row<n; row++) {
    let stair = '';

    for (let column=0; column<n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
} */

// solution 2 - recursive
function steps(n, row=0, stair='') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n,row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;
