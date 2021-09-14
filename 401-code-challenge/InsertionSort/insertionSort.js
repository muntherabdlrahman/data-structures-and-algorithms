"use strict";
let array = [54, 4, 45, 952, 6, 4, 211];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort(array));

module.exports=insertionSort;