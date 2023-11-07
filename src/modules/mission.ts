import { Grid, PlateauCoordinates } from "../types/plateau.type";
import { PlateauData, RobotData, RobotStart } from "../types/mission.type";
import { createPlateau, plateau } from "./plateau";
import { createRobot, robot } from "./robot";
import { CompassTrigKey } from "../types/compass.type";
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

function processRobotStart(start: string): RobotStart {
  const direction = start[0],
    position: PlateauCoordinates = [parseInt(start[1]), parseInt(start[2])];
  return { position, direction };
}

export function newRobot(
  id: number,
  name: string,
  style: string,
  start: string,
  move: string
): void {
  const robotStart = processRobotStart(start);
  const { position, direction } = robotStart;
  createRobot(id, name, style, position, direction);
  mission.addRobot({ id, name, start, move });
  /*
  const robots: Array<string> = [];
  mission.getRobotArray().forEach(element => {
    robots.push(element.name);
  });
  console.log(robots);
  */
}
