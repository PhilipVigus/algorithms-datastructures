class Graph {
  constructor() {
    this.edges = new Map();
  }

  addEdge = (sourceNode, destinationNode) => {
    if (this.edges.has(sourceNode)) {
      this.edges.get(sourceNode).push(destinationNode);
    } else {
      this.edges.set(sourceNode, [destinationNode]);
    }
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
