import { PlateauCoordinates } from "./plateau.type";
export type RobotInput = Array<Array<string>>;
import { Move } from "./navigator.type";
export type RobotData = {
  name: string;
  start: string;
  move: string;
  destination: string;
  journey: Array<Move>;
};
export type PlateauData = { name: string; gridSize: string };
export type RobotStart = {
  position: PlateauCoordinates;
  direction: string;
};
