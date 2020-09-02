const binarySearch = (list, searchValue) => {
  let lowerBound = 0;
  let upperBound = list.length - 1;

  while (lowerBound <= upperBound) {
    const searchPosition = Math.floor((lowerBound + upperBound) / 2);
    const element = list[searchPosition];

    if (element === searchValue) {
      return element;
    } else if (element > searchValue) {
      upperBound = searchPosition - 1;
    } else {
      lowerBound = searchPosition + 1;
    }
  }

  return null;
};

export default binarySearch;
