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
describe("test create robot and then get Robot property by id", () => {
  test("create new robot from mission", () => {
    expect(newRobot(0, "Jane", "green", [8, 8], "S")).toEqual(undefined);
  });

  test("get robot name", () => {
    expect(getRobotName(0)).toBe("Jane");
  });

  test("set robot name", () => {
    expect(setRobotName(0, "Janet")).toBe("Janet");
  });

  test("get robot name", () => {
    expect(getRobotName(0)).toBe("Janet");
  });
  test("create new robot from mission", () => {
    expect(newRobot(1, "Sam", "green", [9, 9], "S")).toEqual(undefined);
  });

  test("get robot name", () => {
    expect(getRobotName(1)).toBe("Sam");
  });

  test("set robot name", () => {
    expect(setRobotName(1, "John")).toBe("John");
  });

  test("get robot name", () => {
    expect(getRobotName(1)).toBe("John");
  });

  test("create new robot from mission", () => {
    expect(newRobot(2, "Bill", "green", [9, 9], "S")).toEqual(undefined);
  });

  test("get robot name", () => {
    expect(getRobotName(2)).toBe("Bill");
  });

  test("create new robot from mission", () => {
    expect(newRobot(3, "Ben", "green", [9, 9], "S")).toEqual(undefined);
  });

  test("get robot name", () => {
    expect(getRobotName(3)).toBe("Ben");
  });
});
