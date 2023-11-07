import {
  getAngle,
  getDirection,
  convertAngles,
  degreesToRadians,
  radiansToDegrees,
  getVector,
  rotateRobot
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
    expect(rotateRobot("N", "L")).toEqual("W");
  });
  test("test input R from N", () => {
    expect(rotateRobot("N", "R")).toEqual("E");
  });
  test("test input L from E", () => {
    expect(rotateRobot("E", "L")).toEqual("N");
  });
  test("test input R from E", () => {
    expect(rotateRobot("E", "R")).toEqual("S");
  });
  test("test input L from S", () => {
    expect(rotateRobot("S", "L")).toEqual("E");
  });
  test("test input R from S", () => {
    expect(rotateRobot("S", "R")).toEqual("W");
  });

  test("test input L from W", () => {
    expect(rotateRobot("W", "L")).toEqual("S");
  });
  test("test input W", () => {
    expect(rotateRobot("W", "R")).toEqual("N");
  });
});
