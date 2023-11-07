import { Grid, PlateauCoordinates } from "../types/plateau.type";
import { RobotData, PlateauData } from "../types/mission.type";
import { createPlateau, plateau } from "./plateau";
import { createRobot, robot } from "./robot";

class Mission {
  id: number = 1;
  robotArray: Array<string> = [];
  plateauArray: Array<string> = [];
  planet: string = "Mars";
}

export const mission = (function () {
  const myMission = new Mission();
  return {
    setId: (thisId: number) => (myMission.id = thisId),
    getId: (): number => myMission.id,
    setPlanet: (thisPlanet: string) => (myMission.planet = thisPlanet),
    getPlanet: (): string => myMission.planet,
    addPlateau: (thisPlateau: string) =>
      myMission.plateauArray.push(thisPlateau),
    getPlateauArray: (): Array<string> => myMission.plateauArray,
    addRobot: (thisRobot: string) => myMission.robotArray.push(thisRobot),
    getRobotArray: (): Array<string> => myMission.robotArray
  };
})();

export function newPlateau(
  gridSize: Grid,
  id: number,
  name: string,
  style: string
): void {
  createPlateau(gridSize, id, name, style);
  mission.addPlateau(name);
}

export function newRobot(
  id: number,
  name: string,
  style: string,
  position: PlateauCoordinates,
  direction: string
): void {
  createRobot(id, name, style, position, direction);
  mission.addRobot(name);
}
