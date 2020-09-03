const sumDivideAndConquer = (list) => {
  if (list.length === 0) {
    return 0;
  }

  if (list.length === 1) {
    return list[0];
  } else {
    return list[0] + sumDivideAndConquer(list.slice(1));
  }
};

export default sumDivideAndConquer;
