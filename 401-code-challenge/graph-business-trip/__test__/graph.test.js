"use strict";

const Vertex = require("../vertex");
const Graph = require("../graph");

describe("Graph", () => {
  it("Node can be successfully added to the graph", () => {
    const myGraph = new Graph();
    const one = new Vertex(1);
    myGraph.addVertex(one);
    expect(myGraph.adjacencyList.has(one)).toEqual(true);
  });
  it("An edge can be successfully added to the graph", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    myGraph.addVertex(zero);
    myGraph.addDirectedEdge(zero, one);
    let value = 0;
    for (const iterator of myGraph.adjacencyList.entries()) {
      value = iterator[1][0].vertex.value;
    }
    expect(value).toEqual(1);
  });

  it("Return the size of graph", () => {
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);
    myGraph.addVertex(three);
    myGraph.addVertex(four);
    myGraph.addVertex(five);

    myGraph.addDirectedEdge(zero, two);
    myGraph.addDirectedEdge(two, four);
    myGraph.addDirectedEdge(two, three);
    myGraph.addDirectedEdge(four, five);

    expect(myGraph.size()).toEqual(6);
  });

  it("bradth first", () => {
    let expected="2,4,3,5"
    const myGraph = new Graph();
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);
    myGraph.addVertex(three);
    myGraph.addVertex(four);
    myGraph.addVertex(five);

    myGraph.addDirectedEdge(zero, two);
    myGraph.addDirectedEdge(two, four);
    myGraph.addDirectedEdge(two, three);
    myGraph.addDirectedEdge(four, five);

    expect(myGraph.BreadthFirst(two)).toEqual(expected);
  });
});