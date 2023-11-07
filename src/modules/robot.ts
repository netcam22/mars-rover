import { PlateauCoordinates } from "../types/plateau.type";
import { mission } from "./mission";

class Robot {
  id: number = 0;
  name: string = "";
  style: string = "";
  position: PlateauCoordinates = [0, 0];
  direction: string = "E";
}
export const robot = (function () {
  const myRobot = new Robot();
  return {
    setId: (thisId: number) => (myRobot.id = thisId),
    getId: (): number => myRobot.id,
    setName: (thisName: string) => (myRobot.name = thisName),
    getName: (): string => myRobot.name,
    setStyle: (thisStyle: string) => (myRobot.style = thisStyle),
    getStyle: (): string => myRobot.style,
    setPosition: (thisPosition: PlateauCoordinates) =>
      (myRobot.position = thisPosition),
    getPosition: (): PlateauCoordinates => myRobot.position,
    setDirection: (thisDirection: string) =>
      (myRobot.direction = thisDirection),
    getDirection: (): string => myRobot.direction
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
  console.log(
    `Hello, I am a Rover called ${name} and I am facing direction ${direction} at co-ordinates at map co-ordinates (${position[0]}, ${position[1]}`
  );
}

function getRobot(thisId: number) {
  // const thisRobot = mission.getRobotArray().find(robot => robot.id === thisId);
  //return thisRobot;
}

export const setRobotName = (id: number, value: string) => {
  robot.setName(value);
};

export const getRobotName = (id: number): string | undefined => {
  return robot.getName();
};
export const setRobotStyle = (id: number, value: string) => {
  robot.setStyle(value);
};

export const getRobotStyle = (id: number): string | undefined => {
  return robot.getStyle();
};
export function setUpRobot() {}
export function rotateRobot() {}
export function moveRobot() {}
