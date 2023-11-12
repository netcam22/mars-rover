import { PlateauCoordinates, PlateauLayout } from "./plateau.type";
export type RobotInput = Array<string>;
import { Move } from "./navigator.type";
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
export type RobotStart = {
  position: PlateauCoordinates;
  direction: string;
};
