class Graph {
  constructor() {
    this.edges = new Map();
  }

  addEdge = (sourceNode, destinationNode) => {
    this.edges.set(sourceNode, destinationNode);
  };

  toString = () => {
    let str = "";
    this.edges.forEach((destinationNode, soureNode) => {
      str += `${soureNode} -> ${destinationNode}`;
    });
    return str;
  };
}

export default Graph;
