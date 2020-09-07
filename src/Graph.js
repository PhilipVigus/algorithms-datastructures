class Graph {
  constructor() {
    this.edges = new Map();
  }

  addEdge = (sourceNode, destinationNode) => {
    if (this.edges.has(sourceNode)) {
      if (this.edges.get(sourceNode).includes(destinationNode)) {
        throw new Error("Duplicate edge in graph");
      } else {
        this.edges.get(sourceNode).push(destinationNode);
      }
    } else {
      this.edges.set(sourceNode, [destinationNode]);
    }
  };

  getNeighbours = (node) => {
    return this.edges.get(node);
  };

  toString = () => {
    let str = "";
    const edgeStrings = [];

    this.edges.forEach((destinationNodeList, soureNode) => {
      destinationNodeList.forEach((destinationNode) => {
        edgeStrings.push(`${soureNode} -> ${destinationNode}`);
      });
    });

    return str + edgeStrings.join("\n");
  };
}

export default Graph;
