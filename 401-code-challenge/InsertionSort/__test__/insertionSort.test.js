"use strict";
const insertionSort = require("../insertionSort");

describe("Insertion Sort", () => {
  it("sort an array", () => {
    let arr = [12, 11, 13, 5, 6];
    let expected = [5, 6, 11, 12, 13];

    expect(insertionSort(arr)).toEqual(expected);
  });

  it("reverse-sorted array", () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let expected = [-2, 5, 8, 12, 18, 20];

    expect(insertionSort(arr)).toEqual(expected);
  });

  it("sort an array with few uniques", () => {
    let arr = [12, 11, 13, 5, 6, 5, 5];
    let expected = [5, 5, 5, 6, 11, 12, 13];

    expect(insertionSort(arr)).toEqual(expected);
  });

  it("sort an array are sorted  ", () => {
    let arr = [5, 6, 11, 12, 13];
    let expected = [5, 6, 11, 12, 13];

    expect(insertionSort(arr)).toEqual(expected);
  });
});