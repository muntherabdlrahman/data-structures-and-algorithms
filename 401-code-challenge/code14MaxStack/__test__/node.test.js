"use strict";

const Node = require("../node");
describe("Node Module", () => {
  it("constructor()", () => {
    let value = 5;
    let newNode = new Node(value);
    expect(newNode.value).toEqual(value);
    expect(newNode.next).toBeNull();
  });
});