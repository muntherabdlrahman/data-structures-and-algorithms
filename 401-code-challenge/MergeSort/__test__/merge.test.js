"use strict";
const meargSort = require("../meargSort");

describe("merge Sort", () => {
  it("sort an array", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let expected = [4, 8, 15, 16, 23, 42];

    expect(meargSort(arr)).toEqual(expected);
  });

  it("reverse-sorted array", () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let expected = [-2, 5, 8, 12, 18, 20];

    expect(meargSort(arr)).toEqual(expected);
  });

  it("sort an array with few uniques", () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let expected = [5, 5, 5, 7, 7, 12];

    expect(meargSort(arr)).toEqual(expected);
  });

  it("sort an array are sorted  ", () => {
    let arr = [5, 6, 11, 12, 13];
    let expected = [5, 6, 11, 12, 13];

    expect(meargSort(arr)).toEqual(expected);
  });
});