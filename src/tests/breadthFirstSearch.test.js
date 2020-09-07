import breadthFirstSearch from "../breadthFirstSearch";
import Graph from "../Graph";

describe("breadthFirstSearch", () => {
  it("returns true if the node is found", () => {
    const graph = new Graph();
    graph.addEdge("firstNode", "secondNode");

    expect(breadthFirstSearch(graph, "firstNode", "secondNode")).toEqual(true);
  });

  it("returns false if the node is not found", () => {
    const graph = new Graph();
    graph.addEdge("firstNode", "secondNode");

    expect(breadthFirstSearch(graph, "firstNode", "thirdNode")).toEqual(false);
  });
});
