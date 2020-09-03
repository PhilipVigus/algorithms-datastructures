import sumDivideAndConquer from "../sumDivideAndConquer";

describe("sumDivideAndConquer", () => {
  it("sums an array of 1 number", () => {
    expect(sumDivideAndConquer([2])).toEqual(2);
  });

  it("sums an empty array", () => {
    expect(sumDivideAndConquer([])).toEqual(0);
  });
});
