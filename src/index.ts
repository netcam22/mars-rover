import { RobotData } from "./types/mission.type";
import { PlateauLayout } from "./types/plateau.type";
import { createRobotJourney, newPlateau } from "./modules/mission";
import { newRobot } from "./modules/mission";

export function makePlateau(
  gridSize: string,
  plateauStyle: string
): PlateauLayout {
  return newPlateau(gridSize, plateauStyle);
}

export function makeRobot(name: string, start: string): boolean {
  return newRobot(name, start);
}

export function moveRobot(move: string): RobotData | undefined {
  return createRobotJourney(move);
}
