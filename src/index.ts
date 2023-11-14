import { RobotData, PlateauData } from "./types/mission.type";
import { PlateauLayout } from "./types/plateau.type";
import { createRobotJourney, newPlateau } from "./modules/mission";
import { newRobot } from "./modules/mission";

export function makePlateau(
  gridSize: string,
  plateauStyle: string
): PlateauLayout {
  return newPlateau(gridSize, plateauStyle);
}

export function makeRobot(name: string, start: string): string | undefined {
  return newRobot(name, start);
}

export function moveRobot(
  move: string,
  robotId: string
): RobotData | undefined {
  return createRobotJourney(move, robotId);
}

export function getPlateau(thisId: number): PlateauData {
  return getPlateau(thisId);
}

export function getRobot(thisId: number): RobotData {
  return getRobot(thisId);
}
