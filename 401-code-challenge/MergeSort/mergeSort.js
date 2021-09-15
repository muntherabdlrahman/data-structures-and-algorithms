"use strict";

const mergeSort = (arr) => {
  const n = arr.length;

  if (n > 1) {
    let mid = Math.floor(n / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return marge(mergeSort(left), mergeSort(right));
  } else {
    return arr;
  }
};

const marge = (left, right) => {
  let i = 0;
  let j = 0;
  let k = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      k.push(left[i]);
      i++;
    } else {
      k.push(right[j]);
      j++;
    }
  }

  return k.concat(left.slice(i)).concat(right.slice(j));
};

console.log(Array);
let array = [8, 4, 23, 42, 16, 15, -1];
console.log(mergeSort(array));
module.exports = mergeSort;