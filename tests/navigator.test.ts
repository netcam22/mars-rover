import { getAngle, getDirection } from "../src/modules/navigator";
import {
  COMPASS,
  MissionCompass,
  CompassTrigKey
} from "../src/types/compass.type";
describe("test robot object properties", () => {
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
