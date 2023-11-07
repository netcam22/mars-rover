import { robot } from "../modules/robot";
import { plateau } from "../modules/plateau";
import { Grid, PlateauCoordinates } from "./plateau.type";
import { RotatorKey } from "./rotator.type";
export type RobotInput = Array<Array<string>>;
export type Journey = Array<PlateauCoordinates | string>;
export type RobotData = {
  name: string;
  start: string;
  move: string;
  journey: Journey;
};
export type PlateauData = { name: string; gridSize: string };
export type RobotStart = {
  position: PlateauCoordinates;
  direction: string;
};
