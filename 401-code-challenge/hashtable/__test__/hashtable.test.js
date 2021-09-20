"use strict";

const HashTable = require("../hashTable");

describe("hash table", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    let hashtable = new HashTable(5);
    let expected = "ibrahem";
    hashtable.add("name", "ibrahem");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
  });

  it("Retrieving based on a key returns the value stored", () => {
    let hashtable = new HashTable(5);
    let expected = "ibrahem";
    hashtable.add("name", "ibrahem");

    expect(hashtable.contain("name")).toBe(true);
    expect(hashtable.get("name")).toEqual(expected);
    expect(hashtable.get("hi")).toEqual("Dose not exist");
  });

  it("Successfully handle a collision within the hashtable", () => {
    let hashtable = new HashTable(5);
    hashtable.add("name", "ibrahem");
    hashtable.add("mean", "ahmad");

    let operation = hashtable.map[hashtable.hash("name")].head.next.val["mean"];
    expect(hashtable.contain("mean")).toBe(true);
    expect(operation).toEqual("ahmad");
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashtable = new HashTable(5);
    hashtable.add("name", "ibrahem");
    hashtable.add("mean", "ahmad");

    let operation = hashtable.map[hashtable.hash("name")].head.next.val["mean"];
    expect(hashtable.get("mean")).toBe('ahmad');
    expect(operation).toEqual("ahmad");
  });

  it('Successfully hash a key to an in-range value',()=>{
    let hashtable = new HashTable(5);
    let min=0;
    let max=4;
    let key='ibrahem';
    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
  })
});