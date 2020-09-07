import Graph from "../graph";

describe("Graph", () => {
  describe("toString", () => {
    it("gives an empty string for an empty graph", () => {
      const graph = new Graph();
      expect(graph.toString()).toEqual("");
    });
  });
});
