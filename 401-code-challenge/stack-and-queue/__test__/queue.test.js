"use strict";


const Queue = require("../queue");
describe("Queue Tests ", () => {
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue("a");

    expect(queue.front.value).toBe("a");
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.front.value).toBe("a");
    expect(queue.back.value).toBe("c");
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();

    expect(queue.front.value).toBe("b");
    expect(queue.back.value).toBe("c");
    expect(queue.dequeue()).toBe("b");
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.front.value).toBe("a");
    expect(queue.back.value).toBe("c");
    expect(queue.peek()).toBe("a");
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.dequeue();
    queue.dequeue();
    

    expect(queue.front).toBe(null);
    expect(queue.back).toBe(null);
  });
  it("Can successfully instantiate an empty queue", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    let newQueue=new Queue();

    expect(newQueue).toBeInstanceOf(Queue);
    expect(queue.isEmpty()).toBe("the Queue have values");
  });

});