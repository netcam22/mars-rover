import { robot } from "../modules/robot";
import { plateau } from "../modules/plateau";
import { MissionRobot } from "./robot.type";

export type PlanetMission = {
  id: number;
  data: {
    robotArray: Array<typeof robot>;
    plateauArray: Array<typeof plateau>;
  };
  planet: string;
};

/*
export function getValueFromId(thisId: number, callback: GetterCallback): any {
  return callback();
}

export function setValueFromId(
  thisId: number,
  callback: SetterCallback<string | number>,
  value: string | number
): any {
  return callback(value);
}
*/

/*

export interface GetterCallback {
  (): string | number;
}

export interface SetterCallback<value> {
  (value: string | number): string | number | void;
}
*/
