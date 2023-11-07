import { PlateauCoordinates } from "./plateau.type";
export interface MissionRobot {
  id: number;
  name: string;
  style: string;
  position: PlateauCoordinates;
  direction: string;
}

export type Journey = Array<PlateauCoordinates | string>;
