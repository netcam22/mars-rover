import { PlateauCoordinates } from "../types/plateau.type";
import {
  PlateauData,
  RobotData,
  RobotStart,
  RobotInput
} from "../types/mission.type";
import { createPlateau, makeCoordinates, plateau } from "./plateau";
import { createRobot, createJourney } from "./robot";
import { Journey } from "../types/robot.type";
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
  const id = mission.getPlateauArray().length;
  createPlateau(gridSize, id, name, style);
  mission.addPlateau({ name, gridSize });
}

function processRobotStart(start: string): RobotStart {
  const position: PlateauCoordinates = makeCoordinates(start),
    direction = start[2];
  return { position, direction };
}

export function newRobot(name: string, start: string, move: string): void {
  console.log(start, move);
  const robotStart = processRobotStart(start);
  const { position, direction } = robotStart;
  const id = mission.getRobotArray.length;
  const style = "reversing";
  createRobot(id, name, style, position, direction);
  const myJourney: Journey = createJourney(position, direction, move);
  const { journey, destination } = myJourney;
  mission.addRobot({ name, start, move, destination, journey });
}

function getRobot(thisId: number) {
  const robots = mission.getRobotArray();
  return robots[thisId];
}
