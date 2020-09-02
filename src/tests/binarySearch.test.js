import binarySearch from "../binarySearch";

describe("binarySearch", () => {
  it("returns the result for a list with length 1", () => {
    expect(binarySearch([1], 1)).toEqual(1);
  });
});
