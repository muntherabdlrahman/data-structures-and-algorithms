"use strict";

const Stack = require("../stak");

describe("Stack Tests ", () => {
  it("Can successfully push onto a stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    expect(stack.first.value).toBe("b");
  });

  it("Can successfully push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    stack.push("d");
    expect(stack.first.value).toBe("d");
  });

  it("Can successfully pop off the stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");
    stack.pop();
    expect(stack.first.value).toBe("b");
  });

  it("Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.pop();
    stack.pop();
    expect(stack.first).toBe(null);
  });

  it("Can successfully peek the next item on the stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");

    expect(stack.peek()).toBe("c");
  });

  it("Can successfully instantiate an empty stack", () => {
    let stack = new Stack();
    let newStack = new Stack();
    newStack.push("a");
    newStack.push("b");

    expect(stack).toBeInstanceOf(Stack);
    expect(newStack.isEmpty()).toBe("the stack have values");
  });
});