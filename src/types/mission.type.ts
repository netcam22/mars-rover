import { robot } from "../modules/robot";
import { plateau } from "../modules/plateau";
import { Grid, PlateauCoordinates } from "./plateau.type";
import { CompassTrigKey } from "./compass.type";

export type RobotData = {
  name: string;
  start: string;
  move: string;
};
export type PlateauData = { name: string; gridSize: Grid };
export type RobotStart = {
  position: PlateauCoordinates;
  direction: string;
};

export interface GetterCallback {
  (): string | number;
}

export interface SetterCallback<value> {
  (value: string | number): string | number | void;
}
