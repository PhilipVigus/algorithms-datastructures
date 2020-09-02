const binarySearch = (list, searchValue) => {
  if (list[0] === searchValue) {
    return searchValue;
  } else {
    return null;
  }
};

export default binarySearch;
