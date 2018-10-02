// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// my solution
/* function vowels(str) {
  const checker = ['a','e','i','o','u'];

  const reducer = (count, char) => {
    if (checker.includes(char)) {
      return count + 1;
    } else {
      return count;
    }
  };
  return str.toLowerCase().split('').reduce(reducer, 0);
} */

// regular expression solution
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
