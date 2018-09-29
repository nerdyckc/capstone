// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// my solution
/* function chunk(array, size) {
  let len = array.length;
  let num = Math.ceil(len / size);
  let finalArray = [];

  for (let i=0;i<num;i++) {
    let subArray = [];
    for (let j=0;j<len;j++) {
      if (i === Math.floor(j / size)) {
        subArray.push(array[j])
      }
    }
    finalArray.push(subArray);
    subArray = [];
  }
  return finalArray;
} */

// solution 1
/* function chunk(array, size) {
  let chunked = [];

  for (let elem of array) {
    const last = chunked[chunked.length-1];

    if (!last || last.length === size) {
      chunked.push([elem]);
    }else {
      last.push(elem);
    }
  }
  return chunked;
} */

// solution 2
function chunk(array, size) {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index,index+size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
