const indexOfSmallestElement = (list, startIndex) => {
  let smallestElementIndex = startIndex;

  for (let i = startIndex; i < list.length; i += 1) {
    if (list[i] < list[smallestElementIndex]) {
      smallestElementIndex = i;
    }
  }

  return smallestElementIndex;
};

const selectionSort = (list) => {
  for (let startIndex = 0; startIndex < list.length; startIndex += 1) {
    const smallestElementIndex = indexOfSmallestElement(list, startIndex);

    [list[startIndex], list[smallestElementIndex]] = [
      list[smallestElementIndex],
      list[startIndex],
    ];
  }

  return list;
};

export default selectionSort;
