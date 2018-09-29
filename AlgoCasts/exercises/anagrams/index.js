// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// my solution
/* function anagrams(stringA, stringB) {
  let map1 = {};
  let map2 = {};

  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  for (let char of stringA) {
    map1[char] = map1[char] + 1 || 1;
  }

  for (let char of stringB) {
    map2[char] = map2[char] + 1 || 1;
  }

  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false;
  } else {
    for (let char of Object.keys(map1)) {
      if (map1[char] !== map2[char]) {
        return false;
      }
    }
  }
  return true;
} */

// solution 1
/* function anagrams(stringA, stringB) {
  let map1 = buildCharMap(stringA);
  let map2 = buildCharMap(stringB);

  if (Object.keys(map1).length !== Object.keys(map2).length) {
    return false;
  }
  for (let char of Object.keys(map1)) {
    if (map1[char] !== map2[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
} */

// solution 2
function anagrams(stringA, stringB) {
  let str1 = cleanString(stringA);
  let str2 = cleanString(stringB);

  if(str1 === str2) {
    return true;
  }
  return false;
}

function cleanString(str) {
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
