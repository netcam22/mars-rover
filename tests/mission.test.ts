import { newPlateau } from "../src/modules/mission";

describe("test mission object properties", () => {
  test("new circle plateau from mission", () => {
    expect(newPlateau("2", "circle")).toEqual([
      [1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [1, 1, 0, 1, 1]
    ]);
  });

  test("new rectangle plateau from mission", () => {
    expect(newPlateau("65", "rectangle")).toEqual([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ]);
  });

  test("new kite plateau from mission", () => {
    expect(newPlateau("4", "kite")).toEqual([
      [0],
      [0, 0],
      [0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0],
      [0, 0],
      [0]
    ]);
  });
});
