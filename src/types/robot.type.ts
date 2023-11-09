import { PlateauCoordinates } from "./plateau.type";
import { Move, Vector } from "./navigator.type";
export interface MissionRobot {
  id: number;
  name: string;
  style: string;
  position: PlateauCoordinates;
  direction: string;
}

export type Journey = { journey: Array<Move>; destination: string };
