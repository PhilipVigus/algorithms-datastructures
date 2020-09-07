const breadthFirstSearch = (graph, startNode, searchNode) => {
  const searchQueue = graph.getNeighbours(startNode);
  console.log(searchQueue);

  while (searchQueue.length > 0) {
    const node = searchQueue.shift();
    if (node === searchNode) {
      return true;
    } else {
      searchQueue.push(...graph.getNeighbours(node));
    }
  }
  return false;
};

export default breadthFirstSearch;
