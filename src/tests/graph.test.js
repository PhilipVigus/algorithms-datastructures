import Graph from "../Graph";

describe("Graph", () => {
  describe("toString", () => {
    it("gives an empty string for an empty graph", () => {
      const graph = new Graph();
      expect(graph.toString()).toEqual("");
    });
  });

  describe("addEdge", () => {
    it("allows you to add a node", () => {
      const graph = new Graph();
      graph.addEdge("firstNode", "secondNode");
      expect(graph.toString()).toEqual("firstNode -> secondNode");
    });

    it("allows you to add a second node to an existing node", () => {
      const graph = new Graph();
      graph.addEdge("firstNode", "secondNode");
      graph.addEdge("firstNode", "thirdNode");
      expect(graph.toString()).toEqual(
        "firstNode -> secondNode\nfirstNode -> thirdNode"
      );
    });

    it("prevents you to adding duplicate edges", () => {
      const graph = new Graph();
      graph.addEdge("firstNode", "secondNode");
      expect(() => {
        graph.addEdge("firstNode", "secondNode");
      }).toThrow(new Error("Duplicate edge in graph"));
    });
  });

  describe("getNeighbours", () => {
    it("returns all of the neighbour nodes for a given node", () => {
      const graph = new Graph();
      graph.addEdge("firstNode", "secondNode");
      graph.addEdge("firstNode", "thirdNode");
      expect(graph.getNeighbours("firstNode")).toEqual([
        "secondNode",
        "thirdNode",
      ]);
    });

    it("returns an empty array if no neighbours exist", () => {
      const graph = new Graph();
      graph.addEdge("firstNode", "secondNode");
      expect(graph.getNeighbours("secondNode")).toEqual([]);
    });
  });
});
