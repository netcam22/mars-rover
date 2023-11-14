import { PlateauCoordinates, PlateauLayout } from "./plateau.type";
import { Move } from "./navigator.type";
export interface MissionRobot {
  id: string;
  name: string;
  style: string;
  position: PlateauCoordinates;
  direction: string;
}

export type Journey = {
  journey: Array<Move> | undefined;
  destination: string | undefined;
};
