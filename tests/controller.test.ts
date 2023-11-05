import { createMission } from "../src/modules/controller";

describe("test create Mission", () => {
  test("create a new Mission Object", () => {
    expect(createMission()).toEqual(15);
  });
});
