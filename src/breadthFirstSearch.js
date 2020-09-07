const breadthFirstSearch = (graph, startNode, searchNode) => {
  const searchQueue = graph.getNeighbours(startNode);
  const nodesSearched = [];

  while (searchQueue.length > 0) {
    const node = searchQueue.shift();
    if (!nodesSearched.includes(node)) {
      if (node === searchNode) {
        return true;
      } else {
        searchQueue.push(...graph.getNeighbours(node));
        nodesSearched.push(node);
      }
    }
  }
  return false;
};

export default breadthFirstSearch;
