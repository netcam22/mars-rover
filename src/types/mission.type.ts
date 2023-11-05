import { robot } from "../modules/robot";
import { plateau } from "../modules/plateau";

export type planetMission = {
  id: number;
  data: {
    robotArray: Array<typeof robot>;
    plateauArray: Array<typeof plateau>;
  };
  planet: "";
};
