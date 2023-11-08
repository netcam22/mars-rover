import { makeRectangularGrid, makeCircularGrid } from "../src/modules/plateau";

describe("make rectangular matrix", () => {
  test("make 5x5 matrix", () => {
    expect(makeRectangularGrid([5, 5])).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]);
  });
  test("make 4x4 matrix", () => {
    expect(makeRectangularGrid([4, 4])).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });
});

describe("make rectangular matrix", () => {
  test("make 5x5 matrix", () => {
    expect(makeCircularGrid(5)).toEqual([
      [0],
      [0, 0],
      [0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0],
      [0, 0],
      [0]
    ]);
  });
});
