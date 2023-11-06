import { robot } from "../src/modules/robot";

describe("test robot object properties", () => {
  test("set robot id", () => {
    expect(robot.setId(2)).toBe(2);
  });
  test("set robot namet", () => {
    expect(robot.setName("Rowan")).toBe("Rowan");
  });
  test("get robot id", () => {
    expect(robot.getId()).toBe(2);
  });
  test("get robot planet", () => {
    expect(robot.getName()).toBe("Rowan");
  });
  test("set robot id", () => {
    expect(robot.setId(1)).toBe(1);
  });
  test("set robot name", () => {
    expect(robot.setName("Mandy")).toBe("Mandy");
  });
  test("get robot id", () => {
    expect(robot.getId()).toBe(1);
  });
  test("get robot planet", () => {
    expect(robot.getName()).toBe("Mandy");
  });
});
