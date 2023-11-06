import { robot, setRobotName, getRobotName } from "../src/modules/robot";
import { newRobot } from "../src/modules/mission";

describe("test robot object properties", () => {
  test("set robot id", () => {
    expect(robot.setId(2)).toBe(2);
  });
  test("set robot name", () => {
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
describe("test get Robot property by id with reusable callback functions", () => {
  test("create new robot from mission", () => {
    expect(newRobot(0, "Jane", "green", [8, 8], "S")).toEqual(undefined);
  });

  test("set robot name", () => {
    expect(setRobotName(0, "Janet")).toBe("Janet");
  });

  test("get robot name", () => {
    expect(getRobotName(0)).toBe("Janet");
  });
});
