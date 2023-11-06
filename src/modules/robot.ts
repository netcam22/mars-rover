import { getterCallback } from "../types/mission.type";
import { PlateauCoordinates } from "../types/plateau.type";
import { MissionRobot } from "../types/robot.type";
import { mission, getValueFromId } from "./mission";

export const robot = (function () {
  const myRobot: MissionRobot = {
    id: 0,
    name: "",
    style: "",
    position: [0, 0],
    direction: "E"
  };
  return {
    setId: (thisId: MissionRobot["id"]) => (myRobot.id = thisId),
    getId: (): MissionRobot["id"] => myRobot.id,
    setName: (thisName: MissionRobot["name"]) => (myRobot.name = thisName),
    getName: (): MissionRobot["name"] => myRobot.name,
    setStyle: (thisStyle: MissionRobot["style"]) => (myRobot.style = thisStyle),
    getStyle: (): MissionRobot["style"] => myRobot.style,
    setPosition: (thisPosition: PlateauCoordinates) =>
      (myRobot.position = thisPosition),
    getPosition: (): MissionRobot["position"] => myRobot.position,
    setDirection: (thisDirection: string) =>
      (myRobot.direction = thisDirection),
    getDirection: (): MissionRobot["direction"] => myRobot.direction
  };
})();

export function createRobot(
  id: number,
  name: string,
  style: string,
  position: PlateauCoordinates,
  direction: string
) {
  robot.setId(id);
  robot.setName(name);
  robot.setStyle(style);
  robot.setPosition(position);
  robot.setDirection(direction);
  return robot;
}

function getRobot(thisId: number) {
  const thisRobot = mission
    .getRobotArray()
    .find(robot => robot.getId() === thisId);
  return thisRobot;
}

function getRobotValue(
  thisRobot: any,
  callback: getterCallback
): any | undefined {
  return getValueFromId(0, thisRobot.callback);
}

const getRobotName = (id: number): string | undefined =>
  getRobotValue(getRobot(id), robot.getName);

export function getRobotPosition(thisId: number): any {
  const thisRobot = getRobot(thisId);
  const robotPostition = {
    position: thisRobot?.getPosition()
  };
  return robotPostition;
}
export function setUpRobot() {}
export function rotateRobot() {}
export function moveRobot() {}
