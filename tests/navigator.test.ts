import {
  getAngle,
  getDirection,
  convertAngles,
  degreesToRadians,
  radiansToDegrees,
  getVector,
  rotateRobot,
  rotator,
  createMoves,
  robotJourney
} from "../src/modules/navigator";
describe("test compass points", () => {
  test("get angle Z from compass point to be undefined", () => {
    expect(getAngle("Z")).toBe(undefined);
  });
  test("get angle E from compass point", () => {
    expect(getAngle("E")).toBe(0);
  });
  test("get angle N from compass point", () => {
    expect(getAngle("N")).toBe(90);
  });
  test("get angle W from compass point", () => {
    expect(getAngle("W")).toBe(180);
  });
  test("get angle S from compass point", () => {
    expect(getAngle("S")).toBe(270);
  });

  test("get direction E from angle 0", () => {
    expect(getDirection(0)).toBe("E");
  });

  test("get direction W from angle 180", () => {
    expect(getDirection(90)).toBe("N");
  });

  test("get direction W from angle 180", () => {
    expect(getDirection(180)).toBe("W");
  });

  test("get direction S from angle 270", () => {
    expect(getDirection(270)).toBe("S");
  });
});

describe("test conversion of angles outside range", () => {
  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(450)).toBe(90);
  });

  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(-450)).toBe(270);
  });

  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(-3700)).toBe(260);
  });

  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(460)).toBe(100);
  });

  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(0)).toBe(0);
  });

  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(360)).toBe(0);
  });

  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(110)).toBe(110);
  });

  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(-10)).toBe(350);
  });

  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(-270)).toBe(90);
  });
  test("test modulus to revert angles within 0 - 360 range", () => {
    expect(convertAngles(90)).toBe(90);
  });
});

describe("test conversion of between degrees and radians", () => {
  test("test degrees to radians", () => {
    expect(degreesToRadians(180)).toBe(3.141592653589793);
  });

  test("test degrees to radians", () => {
    expect(degreesToRadians(90)).toBe(1.5707963267948966);
  });

  test("test degrees to radians", () => {
    expect(degreesToRadians(0)).toBe(0);
  });

  test("test degrees to radians", () => {
    expect(degreesToRadians(270)).toBe(4.71238898038469);
  });
  test("test radians to degrees", () => {
    expect(radiansToDegrees(3.141592653589793)).toBe(180);
  });
  test("test radians to degrees", () => {
    expect(radiansToDegrees(1.5707963267948966)).toBe(90);
  });
  test("test radians to degrees", () => {
    expect(radiansToDegrees(4.71238898038469)).toBe(270);
  });
  test("test radians to degrees", () => {
    expect(radiansToDegrees(0)).toBe(0);
  });
});

describe("test creation of vector for move of 1 unit from a given direction", () => {
  test("test move N", () => {
    expect(getVector("N")).toEqual([0, 1]);
  });
  test("test move W", () => {
    expect(getVector("W")).toEqual([-1, 0]);
  });
  test("test move W", () => {
    expect(getVector("E")).toEqual([1, 0]);
  });
  test("test move S", () => {
    expect(getVector("S")).toEqual([0, -1]);
  });
});

describe("test rotation of Robot from given location and move direction", () => {
  test("test input R from L from N", () => {
    expect(rotateRobot("N", "L")).toBe("W");
  });
  test("test input R from N", () => {
    expect(rotateRobot("N", "R")).toBe("E");
  });
  test("test input L from E", () => {
    expect(rotateRobot("E", "L")).toBe("N");
  });
  test("test input R from E", () => {
    expect(rotateRobot("E", "R")).toBe("S");
  });
  test("test input L from S", () => {
    expect(rotateRobot("S", "L")).toBe("E");
  });
  test("test input R from S", () => {
    expect(rotateRobot("S", "R")).toBe("W");
  });

  test("test input L from W", () => {
    expect(rotateRobot("W", "L")).toBe("S");
  });
  test("test input W", () => {
    expect(rotateRobot("W", "R")).toBe("N");
  });
});

describe("test if value is Rotator", () => {
  test("test input L", () => {
    expect(rotator("L")).toBe(90);
  });
  test("test input R", () => {
    expect(rotator("R")).toBe(-90);
  });
  test("test input M", () => {
    expect(rotator("M")).toBe(0);
  });
  test("test input N", () => {
    expect(rotator("N")).toBe(undefined);
  });
  test("test input S", () => {
    expect(rotator("S")).toBe(undefined);
  });
  test("test input E", () => {
    expect(rotator("E")).toBe(undefined);
  });
  test("test input W", () => {
    expect(rotator("W")).toBe(undefined);
  });
  test("test input empty string", () => {
    expect(rotator("")).toBe(undefined);
  });
});

describe("test creating a moves from a string", () => {
  test("test input 12N LMLMLMLMM", () => {
    expect(createMoves([1, 2], "N", "LMLMLMLMM")).toEqual([
      {
        vector: [0, 1],
        rotate: -90,
        direction: "W",
        angle: 180,
        coordinates: [1, 2]
      },
      {
        vector: [-1, 0],
        rotate: 0,
        direction: "W",
        angle: 180,
        coordinates: [0, 2]
      },
      {
        vector: [-1, 0],
        rotate: -90,
        direction: "S",
        angle: 270,
        coordinates: [0, 2]
      },
      {
        vector: [0, -1],
        rotate: 0,
        direction: "S",
        angle: 270,
        coordinates: [0, 1]
      },
      {
        vector: [0, -1],
        rotate: -90,
        direction: "E",
        angle: 0,
        coordinates: [0, 1]
      },
      {
        vector: [1, 0],
        rotate: 0,
        direction: "E",
        angle: 0,
        coordinates: [1, 1]
      },
      {
        vector: [1, 0],
        rotate: -90,
        direction: "N",
        angle: 90,
        coordinates: [1, 1]
      },
      {
        vector: [0, 1],
        rotate: 0,
        direction: "N",
        angle: 90,
        coordinates: [1, 2]
      },
      {
        vector: [0, 1],
        rotate: 0,
        direction: "N",
        angle: 90,
        coordinates: [1, 3]
      }
    ]);
  });
  test("test input 33E MMRMMRMRRM", () => {
    expect(createMoves([3, 3], "E", "MMRMMRMRRM")).toEqual([
      {
        vector: [1, 0],
        rotate: 0,
        direction: "E",
        angle: 0,
        coordinates: [4, 3]
      },
      {
        vector: [1, 0],
        rotate: 0,
        direction: "E",
        angle: 0,
        coordinates: [5, 3]
      },
      {
        vector: [1, 0],
        rotate: 90,
        direction: "S",
        angle: 270,
        coordinates: [5, 3]
      },
      {
        vector: [0, -1],
        rotate: 0,
        direction: "S",
        angle: 270,
        coordinates: [5, 2]
      },
      {
        vector: [0, -1],
        rotate: 0,
        direction: "S",
        angle: 270,
        coordinates: [5, 1]
      },
      {
        vector: [0, -1],
        rotate: 90,
        direction: "W",
        angle: 180,
        coordinates: [5, 1]
      },
      {
        vector: [-1, 0],
        rotate: 0,
        direction: "W",
        angle: 180,
        coordinates: [4, 1]
      },
      {
        vector: [-1, 0],
        rotate: 90,
        direction: "N",
        angle: 90,
        coordinates: [4, 1]
      },
      {
        vector: [0, 1],
        rotate: 90,
        direction: "E",
        angle: 0,
        coordinates: [4, 1]
      },
      {
        vector: [1, 0],
        rotate: 0,
        direction: "E",
        angle: 0,
        coordinates: [5, 1]
      }
    ]);
  });
});
