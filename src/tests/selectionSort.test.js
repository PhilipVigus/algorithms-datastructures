import selectionSort from "../selectionSort";

describe("selectionSort", () => {
  it("sorts an array from lowest to highest", () => {
    expect(selectionSort([5, 1, 3, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
