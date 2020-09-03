import quickSort from "../quickSort";

describe("quickSort", () => {
  it("sorts an empty array", () => {
    expect(quickSort([])).toEqual([]);
  });
});
