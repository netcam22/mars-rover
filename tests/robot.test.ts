import { robot, createJourney } from "../src/modules/robot";
import { newRobot } from "../src/modules/mission";

describe("test robot object properties", () => {
  test("set robot name", () => {
    expect(robot.setName("Rowan")).toBe("Rowan");
  });
  test("set robot id", () => {
    expect(robot.setId("R0")).toBe("R0");
  });
  test("get robot id", () => {
    expect(robot.getId()).toBe("R0");
  });
  test("get robot name", () => {
    expect(robot.getName()).toBe("Rowan");
  });

  test("set robot name", () => {
    expect(robot.setName("Mandy")).toBe("Mandy");
  });
  test("set robot id", () => {
    expect(robot.setId("M1")).toBe("M1");
  });

  test("get robot id", () => {
    expect(robot.getId()).toBe("M1");
  });
  test("get robot name", () => {
    expect(robot.getName()).toBe("Mandy");
  });
});
describe("test create robots with default square 6x6 grid", () => {
  test("create new robot Fred", () => {
    expect(newRobot("Fred", "12N")).toBe("F0");
  });
  test("create journey for new robot Fred", () => {
    expect(createJourney([1, 2], "N", "LMLMLMLMM")).toEqual({
      destination: "13N",
      journey: [
        {
          vector: [0, 0],
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
          vector: [0, 0],
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
          vector: [0, 0],
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
          vector: [0, 0],
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
      ]
    });
  });
  test("get robot name", () => {
    expect(robot.getName()).toBe("Fred");
  });

  test("set robot name", () => {
    expect(robot.setName("Janet")).toBe("Janet");
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("Janet");
  });
});
test("create new robot Bob", () => {
  expect(newRobot("Bob", "33E")).toBe("B1");
});
describe("test create robot 2", () => {
  test("create new robot Bob", () => {
    expect(createJourney([3, 3], "E", "MMRMMRMRRM")).toEqual({
      destination: "51E",
      journey: [
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
          vector: [0, 0],
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
          vector: [0, 0],
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
          vector: [0, 0],
          rotate: 90,
          direction: "N",
          angle: 90,
          coordinates: [4, 1]
        },
        {
          vector: [0, 0],
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
      ]
    });
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("Bob");
  });

  test("set robot name", () => {
    expect(robot.setName("John")).toBe("John");
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("John");
  });
});
