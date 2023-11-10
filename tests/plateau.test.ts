import {
  makeRectangularGrid,
  makeCircularGrid,
  setOccupiedPosition,
  positionIsAvailable
} from "../src/modules/plateau";

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

describe("make circular matrix", () => {
  test("make 5 radius matrix", () => {
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

describe("set occupied position", () => {
  test("set occupied posision", () => {
    expect(setOccupiedPosition([0, 0])).toEqual(undefined);
  });
  test("get occupied posision", () => {
    expect(positionIsAvailable([0, 0])).toEqual(false);
  });
  test("get occupied posision", () => {
    expect(positionIsAvailable([0, 1])).toEqual(true);
  });
  test("set occupied posision", () => {
    expect(setOccupiedPosition([1, 2])).toEqual(undefined);
  });
  test("get occupied posision", () => {
    expect(positionIsAvailable([1, 2])).toEqual(false);
  });
  test("get occupied posision", () => {
    expect(positionIsAvailable([2, 2])).toEqual(true);
  });
  test("get occupied posision", () => {
    expect(positionIsAvailable([1, 1])).toEqual(true);
  });
  test("get occupied posision", () => {
    expect(positionIsAvailable([-1, -1])).toEqual(false);
  });
  test("get occupied posision", () => {
    expect(positionIsAvailable([100, 100])).toEqual(false);
  });
});
