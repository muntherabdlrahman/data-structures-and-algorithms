"use strict";

const Queue = require("../queue");

describe("Queue Tests ", () => {
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();
    expect(queue.size).toBe(2);
  });
  it("empty queue stack", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });
});