const quickSort = (list) => {
  if (list.length < 2) {
    return list;
  } else {
    const pivotPoint = Math.floor(list.length / 2);
    const pivot = list[pivotPoint];
    const arrayToPartition = [
      ...list.slice(0, pivotPoint),
      ...list.slice(pivotPoint + 1),
    ];

    const elementsLower = arrayToPartition.filter((element) => {
      return element <= pivot;
    });

    const elementsHigher = arrayToPartition.filter((element) => {
      return element > pivot;
    });

    return [...quickSort(elementsLower), pivot, ...quickSort(elementsHigher)];
  }
};

export default quickSort;
