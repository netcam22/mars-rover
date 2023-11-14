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
    updateCurrentRobot: (thisRobot: RobotData) =>
      (myMission.robotArray[myMission.robotArray.length - 1] = thisRobot),
    getRobotArray: (): Array<RobotData> => myMission.robotArray,
    emptyRobotArray: () => (myMission.robotArray = [])
  };
})();

export function newPlateau(gridSize: string, style: string): PlateauLayout {
  mission.emptyRobotArray();
  const id = mission.getPlateauArray().length;
  const plateau = createPlateau(gridSize, id, style);
  mission.addPlateau({ gridSize, plateau, style, id });
  return plateau;
}

export function newRobot(name: string, start: string): string | undefined {
  const robotStart = processRobotStart(start);
  const { position, direction } = robotStart;
  const index = mission.getRobotArray().length;
  const robotId = createRobot(index, name, position, direction);
  if (robotId) {
  }
  const robotData: RobotData = {
    id: robot.getId(),
    name: name,
    position: position,
    direction: direction,
    move: undefined,
    destination: undefined,
    layout: plateau.getLayout(),
    journey: undefined
  };
  mission.addRobot(robotData);
  return robotId;
}

export function createRobotJourney(
  move: string,
  robotId: string
): RobotData | undefined {
  const myJourney: Journey = createJourney(
    robot.getPosition(),
    robot.getDirection(),
    move,
    robotId
  );
  if (myJourney) {
    const { journey, destination } = myJourney;
    const robotData: RobotData = {
      id: robot.getId(),
      name: robot.getName(),
      position: robot.getPosition(),
      direction: robot.getDirection(),
      move,
      destination,
      layout: plateau.getLayout(),
      journey
    };
    mission.updateCurrentRobot(robotData);
    return robotData;
  }
}

function processRobotStart(start: string): RobotStart {
  const position: PlateauCoordinates = makeCoordinates(start),
    direction = start[2];
  return { position, direction };
}

export function getRobot(index: number) {
  const robots = mission.getRobotArray();
  return robots[index];
}

export function getPlateaus(index: number) {
  const plateaus = mission.getPlateauArray();
  return plateaus[index];
}
