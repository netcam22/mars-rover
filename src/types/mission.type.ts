import { PlateauCoordinates } from "./plateau.type";
export type RobotInput = Array<Array<string>>;
import { Journey } from "./robot.type";
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
