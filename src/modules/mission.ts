import { PlateauCoordinates, PlateauLayout } from "../types/plateau.type";
import {
  Mission,
  PlateauData,
  RobotData,
  RobotStart
} from "../types/mission.type";
import { createPlateau, makeCoordinates, plateau } from "./plateau";
import { robot, createRobot, createJourney } from "./robot";
import { Journey } from "../types/robot.type";

export const mission = (function () {
  const myMission: Mission = {
    robotArray: [],
    plateauArray: []
  };
  return {
    addPlateau: (plateau: PlateauData) => myMission.plateauArray.push(plateau),
    getPlateauArray: (): Array<PlateauData> => myMission.plateauArray,
    addRobot: (thisRobot: RobotData) => myMission.robotArray.push(thisRobot),
    getRobotArray: (): Array<RobotData> => myMission.robotArray
  };
})();

export function newPlateau(gridSize: string, style: string): PlateauLayout {
  const id = mission.getPlateauArray().length;
  const plateau = createPlateau(gridSize, id, style);
  mission.addPlateau({ gridSize, plateau });
  return plateau;
}

export function newRobot(name: string, start: string) {
  const robotStart = processRobotStart(start);
  const { position, direction } = robotStart;
  const id = mission.getRobotArray.length;
  return createRobot(id, name, position, direction);
}

export function createRobotJourney(move: string): RobotData | undefined {
  const myJourney: Journey = createJourney(
    robot.getPosition(),
    robot.getDirection(),
    move
  );
  if (myJourney) {
    const { journey, destination } = myJourney;
    const robotData: RobotData = {
      name: robot.getName(),
      position: robot.getPosition(),
      direction: robot.getDirection(),
      move,
      destination,
      layout: plateau.getLayout(),
      journey
    };
    mission.addRobot(robotData);
    return robotData;
  }
}

function processRobotStart(start: string): RobotStart {
  const position: PlateauCoordinates = makeCoordinates(start),
    direction = start[2];
  return { position, direction };
}

function getRobot(thisId: number) {
  const robots = mission.getRobotArray();
  return robots[thisId];
}
