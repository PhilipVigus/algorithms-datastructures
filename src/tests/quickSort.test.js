import quickSort from "../quickSort";

describe("quickSort", () => {
  it("sorts an empty array", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("sorts an array with a single element", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it("sorts an array with multiple elements", () => {
    expect(quickSort([1, 3, 2, 5])).toEqual([1, 2, 3, 5]);
  });
});
