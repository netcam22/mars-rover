import { robot } from "../modules/robot";
import { plateau } from "../modules/plateau";

export type RobotData = {
  id: number;
  name: string;
  start: string;
  move: string;
};
export type PlateauData = { id: number; name: string };

export interface GetterCallback {
  (): string | number;
}

export interface SetterCallback<value> {
  (value: string | number): string | number | void;
}
