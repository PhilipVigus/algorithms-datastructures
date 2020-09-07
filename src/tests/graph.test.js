import Graph from "../graph";

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
  });
});
