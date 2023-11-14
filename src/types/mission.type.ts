import { PlateauCoordinates, PlateauLayout } from "./plateau.type";
import { Move } from "./navigator.type";
export type RobotInput = Array<string>;
export type RobotData = {
  name: string;
  position: PlateauCoordinates;
  direction: string;
  move: string;
  destination: string | undefined;
  layout: PlateauLayout;
  journey: Array<Move> | undefined;
};
export type PlateauData = {
  name: string;
  gridSize: string;
  plateau: PlateauLayout;
};
export type Mission = {
  robotArray: Array<RobotData>;
  plateauArray: Array<PlateauData>;
};
export type RobotStart = {
  position: PlateauCoordinates;
  direction: string;
};
