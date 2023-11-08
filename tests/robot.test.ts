import { robot } from "../src/modules/robot";
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
    expect(newRobot("Jane", "12N", "LMLMLMLMM")).toEqual(undefined);
  });
  test("get robot name", () => {
    expect(robot.getName()).toBe("Jane");
  });

  test("set robot name", () => {
    expect(robot.setName("Janet")).toBe("Janet");
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("Janet");
  });
  test("create new robot from mission", () => {
    expect(newRobot("Sam", "12N", "LMLMLMLMM")).toEqual(undefined);
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("Sam");
  });

  test("set robot name", () => {
    expect(robot.setName("John")).toBe("John");
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("John");
  });

  test("create new robot from mission", () => {
    expect(newRobot("Bill", "12N", "LMLMLMLMM")).toEqual(undefined);
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("Bill");
  });

  test("create new robot from mission", () => {
    expect(newRobot("Ben", "33E", "LMLMLMLMM")).toEqual(undefined);
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("Ben");
  });

  test("get robot style", () => {
    expect(robot.getStyle()).toBe("reversing");
  });

  test("create new robot from mission", () => {
    expect(newRobot("John", "12N", "LMLMLMLMM")).toEqual(undefined);
  });

  test("set robot style", () => {
    expect(robot.setStyle("stop-at-obstacle")).toBe("stop-at-obstacle");
  });

  test("get robot style", () => {
    expect(robot.getStyle()).toBe("stop-at-obstacle");
  });
});
