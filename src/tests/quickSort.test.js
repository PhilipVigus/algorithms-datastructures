import quickSort from "../quickSort";

describe("quickSort", () => {
  it("sorts an empty array", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("sorts an array with a single element", () => {
    expect(quickSort([1])).toEqual([1]);
  });
});
