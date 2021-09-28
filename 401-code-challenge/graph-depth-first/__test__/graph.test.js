"use strict";

const Vertex = require("../vertex");
const Graph = require("../graph");

describe("Graph", () => {
  it("Depth First", () => {
    let test = new Graph();

    let one = new Vertex("A");
    let two = new Vertex("B");
    let three = new Vertex("C");
    let four = new Vertex("D");
    let five = new Vertex("E");
    let six = new Vertex("F");
    let seven = new Vertex("G");
    let eight = new Vertex("H");

    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addVertex(four);
    test.addVertex(five);
    test.addVertex(six);
    test.addVertex(seven);
    test.addVertex(eight);

    test.addDirectedEdge(one, two);
    test.addDirectedEdge(one, four);
    test.addDirectedEdge(two, four);
    test.addDirectedEdge(two, three);
    test.addDirectedEdge(two, seven);
    test.addDirectedEdge(four, five);
    test.addDirectedEdge(four, six);
    test.addDirectedEdge(four, eight);
    test.addDirectedEdge(six, eight);
    expect(test.depthFirst(one)).toEqual("A,B,D,E,F,H,C,G,");
  });
});