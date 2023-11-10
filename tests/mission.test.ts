import { mission, newPlateau, newRobot } from "../src/modules/mission";

describe("test mission object properties", () => {
  test("get mission planet", () => {
    expect(mission.getPlanet()).toBe("Mars");
  });
  test("get mission id", () => {
    expect(mission.getId()).toBe(1);
  });
  test("set mission id", () => {
    expect(mission.setId(2)).toBe(2);
  });
  test("set mission planet", () => {
    expect(mission.setPlanet("Pluto")).toBe("Pluto");
  });
  test("get mission id", () => {
    expect(mission.getId()).toBe(2);
  });
  test("get mission planet", () => {
    expect(mission.getPlanet()).toBe("Pluto");
  });
  test("set mission id", () => {
    expect(mission.setId(1)).toBe(1);
  });
  test("set mission planet", () => {
    expect(mission.setPlanet("Mars")).toBe("Mars");
  });
  test("get mission id", () => {
    expect(mission.getId()).toBe(1);
  });
  test("get mission planet", () => {
    expect(mission.getPlanet()).toBe("Mars");
  });
});
describe("test create new plateau", () => {
  test("create new plateau from mission", () => {
    expect(newPlateau("77")).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ]);
  });
});

describe("test create new robot", () => {
  test("create new robot from mission", () => {
    expect(newRobot("Jane", "12N", "LMLMLMLMM")).toEqual({
      destination: "13N",
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
          angle: 90,
          coordinates: [1, 3],
          direction: "N",
          rotate: 0,
          vector: [0, 1]
        }
      ]
    });
  });
});
