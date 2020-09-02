import binarySearch from "../binarySearch";

describe("binarySearch", () => {
  it("returns the result for a list with length 1", () => {
    expect(binarySearch([1], 1)).toEqual(1);
  });

  it("returns the result for a list with length 1 and a different element", () => {
    expect(binarySearch([2], 2)).toEqual(2);
  });

  it("returns null if the element isn't in the list", () => {
    expect(binarySearch([1], 2)).toEqual(null);
  });
});
