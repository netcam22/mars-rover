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
    expect(newPlateau("77")).toEqual(undefined);
  });
});

describe("test create new robot", () => {
  test("create new robot from mission", () => {
    expect(newRobot("Jane", "12N", "LMLMLMLMM")).toEqual(undefined);
  });
});
