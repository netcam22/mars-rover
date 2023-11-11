import { mission } from "../src/modules/mission";

describe("test mission object properties", () => {
  test("get mission Location", () => {
    expect(mission.getLocation()).toBe("Mars");
  });
  test("get mission id", () => {
    expect(mission.getId()).toBe(1);
  });
  test("set mission id", () => {
    expect(mission.setId(2)).toBe(2);
  });
  test("set mission Location", () => {
    expect(mission.setLocation("Pluto")).toBe("Pluto");
  });
  test("get mission id", () => {
    expect(mission.getId()).toBe(2);
  });
  test("get mission Location", () => {
    expect(mission.getLocation()).toBe("Pluto");
  });
  test("set mission id", () => {
    expect(mission.setId(1)).toBe(1);
  });
  test("set mission Location", () => {
    expect(mission.setLocation("Mars")).toBe("Mars");
  });
  test("get mission id", () => {
    expect(mission.getId()).toBe(1);
  });
  test("get mission Location", () => {
    expect(mission.getLocation()).toBe("Mars");
  });
});
