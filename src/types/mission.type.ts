import { robot } from "../modules/robot";
import { plateau } from "../modules/plateau";

export type PlanetMission = {
  id: number;
  data: {
    robotArray: Array<typeof robot>;
    plateauArray: Array<typeof plateau>;
  };
  planet: string;
};
