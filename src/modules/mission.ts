import { PlateauCoordinates, PlateauLayout } from "../types/plateau.type";
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

export function start(
  gridSize: string,
  plateauStyle: string,
  robotInput: RobotInput
): {
  plateau: PlateauLayout | undefined;
  robots: Array<Journey | undefined>;
} {
  const plateau = newPlateau(gridSize, plateauStyle);
  const robots = robotInput.map(robot => {
    const myRobot = newRobot(robot[0], robot[1], robot[2]);
    if (myRobot) {
      return myRobot;
    } else
      console.log(
        `The coordinates input for ${robot[0]} were occupied so ${robot[0]} will need to try again with a new starting point.`
      );
  });
  return { plateau, robots };
}

export function newPlateau(
  gridSize: string,
  style: string
): PlateauLayout | undefined {
  console.log("Plateau style:", style);
  const name = "Bumpy ground";
  const id = mission.getPlateauArray().length;
  const myPlateau = createPlateau(gridSize, id, name, style);
  mission.addPlateau({ name, gridSize });
  return myPlateau;
}

function processRobotStart(start: string): RobotStart {
  const position: PlateauCoordinates = makeCoordinates(start),
    direction = start[2];
  return { position, direction };
}

export function newRobot(
  name: string,
  start: string,
  move: string
): Journey | undefined {
  console.log("Robot input:", name, start, move);
  const robotStart = processRobotStart(start);
  const { position, direction } = robotStart;
  const id = mission.getRobotArray.length;
  const style = "reversing";
  createRobot(id, name, style, position, direction);
  const myJourney: Journey | undefined = createJourney(
    position,
    direction,
    move
  );
  if (myJourney) {
    const { journey, destination } = myJourney;
    mission.addRobot({ name, start, move, destination, journey });
    return myJourney;
  }
}

function getRobot(thisId: number) {
  const robots = mission.getRobotArray();
  return robots[thisId];
}
