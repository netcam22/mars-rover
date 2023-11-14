import { PlateauCoordinates } from "./plateau.type";
import { Move } from "./navigator.type";
export type MissionRobot = {
  id: string;
  name: string;
  position: PlateauCoordinates;
  direction: string;
  move: string;
};
export type Journey = {
  journey: Array<Move> | undefined;
  destination: string | undefined;
};
