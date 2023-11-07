import { Grid, PlateauCoordinates } from "../types/plateau.type";
import {
  PlateauData,
  RobotData,
  RobotStart,
  RobotInput
} from "../types/mission.type";
import { createPlateau } from "./plateau";
import { createRobot, createJourney } from "./robot";
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

export function start(gridSize: string, robotInput: RobotInput) {
  newPlateau(gridSize);
  robotInput.forEach(robotInfo =>
    newRobot(robotInfo[0], robotInfo[1], robotInfo[2])
  );
}

export function newPlateau(gridSize: string): void {
  const name = "Bumpy ground",
    style: string = "rectangle";
  const id = mission.getRobotArray.length;
  createPlateau(gridSize, id, name, style);
  mission.addPlateau({ name, gridSize });
}

function processRobotStart(start: string): RobotStart {
  const position: PlateauCoordinates = [parseInt(start[0]), parseInt(start[1])],
    direction = start[2];
  return { position, direction };
}

export function newRobot(name: string, start: string, move: string): void {
  console.log(name, start, move);
  const robotStart = processRobotStart(start);
  const { position, direction } = robotStart;
  console.log(position, direction);
  const id = mission.getRobotArray.length;
  const style = "turn-left-at-obstacle";
  createRobot(id, name, style, position, direction);
  const journey = createJourney(position, direction, move);
  mission.addRobot({ name, start, move, journey });
  /*
  const robots: Array<string> = [];
  mission.getRobotArray().forEach(element => {
    robots.push(element.name);
  });
  console.log(robots);
  */
}

function getRobot(thisId: number) {
  const robots = mission.getRobotArray();
  return robots[thisId];
}
