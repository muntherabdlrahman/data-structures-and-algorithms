"use strict";

let LinkedList = require("../linkedList");

describe("LinkedList", () => {
  it("the initial constructor()", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
    expect(newList.tail).toBeNull();
    expect(newList.length).toEqual(0);
  });

  it("insert()", () => {
    let newList = new LinkedList();
    newList.insert(1);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next).toBeNull();
  });
  it("insert() many node", () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(2);
  });
  it("insertBefor()  node", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('b');
    newList.append('c');
    newList.insertBefore('b', 'e');
    console.log(newList.head.value);
    console.log(newList.head.next.value);
    expect(newList.head.value).toEqual('a');
    expect(newList.head.next.value).toEqual('e');
  });
  it("insertAfter()  node", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('b');
    newList.append('c');
    newList.insertAfter('a', 'd');
    console.log(newList.head.value);
    console.log(newList.head.next.value);
    expect(newList.head.value).toEqual('a');
    expect(newList.head.next.value).toEqual('d');
  });
  it("append()", () => {
    let newList = new LinkedList();
    let initialValue = "First Item";
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherOne = "Second Item";
    newList.append(anotherOne);
    expect(newList.head.next.value).toEqual(anotherOne);
    expect(newList.head.next.next).toBeNull();
    expect(newList.head.value).toEqual(initialValue);
  });
  it("include() tru", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('b');
    expect(newList.includes(2)).toEqual(true);
  });
  it("include() false", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('b');
    expect(newList.includes('e')).toEqual(false);
  });
  it("toStrinf()", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('b');
    expect(newList.toString()).toEqual("{a}-->{b}-->NULL");
  });
  it("kthFromEnd() Where k is greater than the length of the linked list", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('c');
    newList.append('i');
    newList.append('b');
    expect(newList.kthFromEnd(5)).toEqual("error");
  });
  it("kthFromEnd() Where k is not a positive integer", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('c');
    newList.append('i');
    newList.append('b');
    expect(newList.kthFromEnd(-1)).toEqual("error");
  });
  it("kthFromEnd() Where k and the length of the list are the same", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('c');
    newList.append('i');
    newList.append('b');
    expect(newList.kthFromEnd(4)).toEqual("error");
  });
  it("kthFromEnd() Where the linked list is of a size 1", () => {
    let newList = new LinkedList();
    newList.insert('a');
    expect(newList.kthFromEnd('z')).toEqual('a');
  });
  it("kthFromEnd() “Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    let newList = new LinkedList();
    newList.insert('a');
    newList.append('c');
    newList.append('i');
    newList.append('b');
    expect(newList.kthFromEnd('b')).toEqual('c');
  });

});