import { robot, createJourney } from "../src/modules/robot";
import { newRobot } from "../src/modules/mission";
import { plateau } from "../src/modules/plateau";

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
    expect(newRobot("Jane", "12N", "LMLMLMLMM")).toEqual({
      destination: "12S",
      journey: [
        {
          angle: 180,
          coordinates: [1, 2],
          direction: "W",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 180,
          coordinates: [0, 2],
          direction: "W",
          rotate: 0,
          vector: [-1, 0]
        },
        {
          angle: 270,
          coordinates: [0, 2],
          direction: "S",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [0, 1],
          direction: "S",
          rotate: 0,
          vector: [0, -1]
        },
        {
          angle: 0,
          coordinates: [0, 1],
          direction: "E",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 0,
          coordinates: [1, 1],
          direction: "E",
          rotate: 0,
          vector: [1, 0]
        },
        {
          angle: 90,
          coordinates: [1, 1],
          direction: "N",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 90,
          coordinates: [1, 2],
          direction: "N",
          rotate: 0,
          vector: [0, 1]
        },
        {
          angle: 270,
          coordinates: [1, 2],
          direction: "S",
          rotate: 0,
          vector: [0, 0]
        }
      ]
    });
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
    expect(newRobot("Sam", "12N", "LMLMLMLMM")).toEqual({
      destination: "10S",
      journey: [
        {
          angle: 180,
          coordinates: [1, 2],
          direction: "W",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 180,
          coordinates: [0, 2],
          direction: "W",
          rotate: 0,
          vector: [-1, 0]
        },
        {
          angle: 270,
          coordinates: [0, 2],
          direction: "S",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [0, 1],
          direction: "S",
          rotate: 0,
          vector: [0, -1]
        },
        {
          angle: 0,
          coordinates: [0, 1],
          direction: "E",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 0,
          coordinates: [1, 1],
          direction: "E",
          rotate: 0,
          vector: [1, 0]
        },
        {
          angle: 90,
          coordinates: [1, 1],
          direction: "N",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [1, 1],
          direction: "S",
          rotate: 0,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [1, 0],
          direction: "S",
          rotate: 0,
          vector: [0, -1]
        }
      ]
    });
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
    expect(newRobot("Bill", "12N", "LMLMLMLMM")).toEqual({
      destination: "11N",
      journey: [
        {
          angle: 180,
          coordinates: [1, 2],
          direction: "W",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 180,
          coordinates: [0, 2],
          direction: "W",
          rotate: 0,
          vector: [-1, 0]
        },
        {
          angle: 270,
          coordinates: [0, 2],
          direction: "S",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [0, 1],
          direction: "S",
          rotate: 0,
          vector: [0, -1]
        },
        {
          angle: 0,
          coordinates: [0, 1],
          direction: "E",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 0,
          coordinates: [1, 1],
          direction: "E",
          rotate: 0,
          vector: [1, 0]
        },
        {
          angle: 90,
          coordinates: [1, 1],
          direction: "N",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [1, 1],
          direction: "S",
          rotate: 0,
          vector: [0, 0]
        },
        {
          angle: 90,
          coordinates: [1, 1],
          direction: "N",
          rotate: 0,
          vector: [0, 0]
        }
      ]
    });
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("Bill");
  });

  test("create new robot from mission", () => {
    expect(newRobot("Ben", "33E", "LMLMLMLMM")).toEqual({
      destination: "33W",
      journey: [
        {
          angle: 90,
          coordinates: [3, 3],
          direction: "N",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [3, 3],
          direction: "S",
          rotate: 0,
          vector: [0, 0]
        },
        {
          angle: 0,
          coordinates: [3, 3],
          direction: "E",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 180,
          coordinates: [3, 3],
          direction: "W",
          rotate: 0,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [3, 3],
          direction: "S",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 90,
          coordinates: [3, 3],
          direction: "N",
          rotate: 0,
          vector: [0, 0]
        },
        {
          angle: 180,
          coordinates: [3, 3],
          direction: "W",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 0,
          coordinates: [3, 3],
          direction: "E",
          rotate: 0,
          vector: [0, 0]
        },
        {
          angle: 180,
          coordinates: [3, 3],
          direction: "W",
          rotate: 0,
          vector: [0, 0]
        }
      ]
    });
  });

  test("get robot name", () => {
    expect(robot.getName()).toBe("Ben");
  });

  test("get robot style", () => {
    expect(robot.getStyle()).toBe("reversing");
  });

  test("create new robot from mission", () => {
    expect(newRobot("John", "12N", "LMLMLMLMM")).toEqual({
      destination: "00N",
      journey: [
        {
          angle: 180,
          coordinates: [1, 2],
          direction: "W",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 180,
          coordinates: [0, 2],
          direction: "W",
          rotate: 0,
          vector: [-1, 0]
        },
        {
          angle: 270,
          coordinates: [0, 2],
          direction: "S",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [0, 1],
          direction: "S",
          rotate: 0,
          vector: [0, -1]
        },
        {
          angle: 0,
          coordinates: [0, 1],
          direction: "E",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 180,
          coordinates: [0, 1],
          direction: "W",
          rotate: 0,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [0, 1],
          direction: "S",
          rotate: -90,
          vector: [0, 0]
        },
        {
          angle: 270,
          coordinates: [0, 0],
          direction: "S",
          rotate: 0,
          vector: [0, -1]
        },
        {
          angle: 90,
          coordinates: [0, 0],
          direction: "N",
          rotate: 0,
          vector: [0, 0]
        }
      ]
    });
  });

  test("set robot style", () => {
    expect(robot.setStyle("stop-at-obstacle")).toBe("stop-at-obstacle");
  });

  test("get robot style", () => {
    expect(robot.getStyle()).toBe("stop-at-obstacle");
  });
});
