const quickSort = (list) => {
  if (list.length < 2) {
    return list;
  } else {
    const pivot = list[0];

    const elementsLower = list.slice(1).filter((element) => {
      return element <= pivot;
    });

    const elementsHigher = list.slice(1).filter((element) => {
      return element > pivot;
    });

    return [...quickSort(elementsLower), pivot, ...quickSort(elementsHigher)];
  }
};

export default quickSort;
