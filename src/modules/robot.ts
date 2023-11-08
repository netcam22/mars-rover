import { PlateauCoordinates } from "../types/plateau.type";
import { createMoves } from "./navigator";
import { Journey } from "../types/robot.type";
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
    `Hello, I am a Rover called ${name} and I am facing direction ${direction} at map co-ordinates (${position[0]}, ${position[1]})`
  );
}

export function createJourney(
  position: PlateauCoordinates,
  direction: string,
  move: string
): string {
  return createMoves(position, direction, move);
}
export function setUpRobot() {}
export function rotateRobot() {}
export function moveRobot() {}
