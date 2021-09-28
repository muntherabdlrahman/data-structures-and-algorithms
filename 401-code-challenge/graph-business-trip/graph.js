"use strict";
const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(start, end) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log("Vertex dose not exist or invalid vertex");
    }
    const list = this.adjacencyList.get(start);
    list.push(new Edge(end));
  }

  display() {
    for (const [vertex, edge] of this.adjacencyList.entries()) {
      console.log("vertex = ", vertex, "his neighbors: ", edge);
    }
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log("Vertex dose not exist or invalid vertex");
      return;
    }
    return this.adjacencyList.get(vertex);
  }

  getNode() {
    try {
      let collectionOfNodes = [];
      for (const [vertex, edge] in this.adjacencyList.entries()) {
        collectionOfNodes.push(vertex);
      }
      return collectionOfNodes;
    } catch (error) {
      console.log(error.message);
    }
  }

  size() {
    try {
      let size = 0;
      for (const vertex of this.adjacencyList.keys()) {
        size++;
      }
      return size;
    } catch (error) {
      console.log(error.message);
    }
  }

  BreadthFirst(node) {
    const queue = [];
    const visited = [];

    queue.unshift(node);
    visited.push(node);
    while (queue.length) {
      const current = queue.pop();
      const neighbors = this.getNeighbors(current);
      for (const neighbor of neighbors) {
        const vertex = neighbor.vertex;
        if (visited.includes(vertex)) {
          continue;
        } else {
          visited.push(vertex);
          queue.unshift(vertex);
        }
      }
    }
    let result = visited.map((el) => {
      return el.value;
    });
    return result.toString();
  }

  businessTrip(graph, arr) {
    let totalcost = 0;
    if (graph.adjacencyList.has(arr[0])) {
      let list = graph.adjacencyList.get(arr[0]);
      for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (const { vertex, wieght } of list) {
          if (vertex == arr[i]) {
            flag = true;
            totalcost += wieght;
            break;
          }
        }
        if (!flag) {
          return [false, 0];
        }
      }
    } else {
      return [false, 0];
    }
    return [true, totalcost];
  }
}

// const myGraph = new Graph();

// myGraph.addVertex("Pandora");
// myGraph.addVertex("Arendelle");
// myGraph.addVertex("Metroville");
// myGraph.addVertex("Monstroplolis");
// myGraph.addVertex("Narnia");
// myGraph.addVertex("Naboo");

// myGraph.addDirectedEdge("Pandora", "Arendelle", 150);
// myGraph.addDirectedEdge("Arendelle", "Pandora", 150);
// myGraph.addDirectedEdge("Pandora", "Metroville", 82);
// myGraph.addDirectedEdge("Metroville", "Pandora", 82);
// myGraph.addDirectedEdge("Arendelle", "Metroville", 99);
// myGraph.addDirectedEdge("Metroville", "Arendelle", 99);
// myGraph.addDirectedEdge("Arendelle", "Monstroplolis", 42);
// myGraph.addDirectedEdge("Monstroplolis", "Arendelle", 42);
// myGraph.addDirectedEdge("Metroville", "Narnia", 37);
// myGraph.addDirectedEdge("Narnia", "Metroville", 37);
// myGraph.addDirectedEdge("Metroville", "Naboo", 26);
// myGraph.addDirectedEdge("Naboo", "Metroville", 26);
// myGraph.addDirectedEdge("Metroville", "Monstroplolis", 105);
// myGraph.addDirectedEdge("Monstroplolis", "Metroville", 105);
// myGraph.addDirectedEdge("Monstroplolis", "Naboo", 73);
// myGraph.addDirectedEdge("Naboo", "Monstroplolis", 73);
// myGraph.addDirectedEdge("Narnia", "Naboo", 250);
// myGraph.addDirectedEdge("Naboo", "Narnia", 250);

// const arr1 = ["Metroville", "Pandora"];
// const arr2 = ["Arendelle", "Monstroplolis", "Naboo"];
// console.log(myGraph.businessTrip(myGraph, arr2));

module.exports = Graph;