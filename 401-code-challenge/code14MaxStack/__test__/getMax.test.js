"use strict";

const Stack = require("../stack");

describe("balanced bracket", () => {
  it("balanced", () => {
    let stack = new Stack();
    stack.push(10);
    stack.push(30);
    stack.push(20);

    expect(stack.gitMax()).toEqual(30);
  });

  it("empty stack", () => {
    let stack = new Stack();

    expect(stack.gitMax()).toEqual('the stack is empty !!');
  });
});