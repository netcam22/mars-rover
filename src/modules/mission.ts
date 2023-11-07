import { Grid, PlateauCoordinates } from "../types/plateau.type";
import { PlateauData, RobotData } from "../types/mission.type";
import { createPlateau, plateau } from "./plateau";
import { createRobot, robot } from "./robot";

class Mission {
  id: number = 1;
  robotArray: Array<RobotData> = [];
  plateauArray: Array<PlateauData> = [];
  planet: string = "Mars";
}

export const mission = (function () {
  const myMission = new Mission();
  return {
    setId: (thisId: number) => (myMission.id = thisId),
    getId: (): number => myMission.id,
    setPlanet: (thisPlanet: string) => (myMission.planet = thisPlanet),
    getPlanet: (): string => myMission.planet,
    addPlateau: (plateau: PlateauData) => myMission.plateauArray.push(plateau),
    getPlateauArray: (): Array<PlateauData> => myMission.plateauArray,
    addRobot: (thisRobot: RobotData) => myMission.robotArray.push(thisRobot),
    getRobotArray: (): Array<RobotData> => myMission.robotArray
  };
})();

export function newPlateau(
  gridSize: Grid,
  id: number,
  name: string,
  style: string
): void {
  createPlateau(gridSize, id, name, style);
  mission.addPlateau({ id: id, name: name });
}

export function newRobot(
  id: number,
  name: string,
  style: string,
  position: PlateauCoordinates,
  direction: string
): void {
  createRobot(id, name, style, position, direction);
  mission.addRobot({ id: id, name: name });
  const robots: Array<string> = [];
  mission.getRobotArray().forEach(element => {
    robots.push(element.name);
  });
  console.log(robots);
}
