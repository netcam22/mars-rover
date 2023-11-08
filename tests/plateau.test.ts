import { makeRectangularGrid } from "../src/modules/plateau";

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
});
