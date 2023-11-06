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

export interface Callback<T1, T2 = void> {
  (param: T1): T2;
}

export interface getterCallback {
  (): string | number;
}

export interface setterCallback {
  (): string | number;
}
