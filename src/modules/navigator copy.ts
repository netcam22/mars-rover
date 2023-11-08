import { COMPASS } from "../types/compass.type";
import { ROTATOR, Rotator, RotatorKey } from "../types/rotator.type";
import { Journey } from "../types/robot.type";
import { PlateauCoordinates } from "../types/plateau.type";
import { plateau } from "./plateau";
type Vector = Array<number>;

export function rotateRobot(
  point: string,
  direction: string
): string | undefined {
  return getDirection(convertAngles(COMPASS[point] + ROTATOR[direction]));
}

export function moveRobot() {}

export function getDirection(angle: number): string | undefined {
  return Object.keys(COMPASS).find(point => COMPASS[point] === angle);
}
export function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function radiansToDegrees(radians: number) {
  return Math.round((radians * 180) / Math.PI);
}

export function getAngle(point: string): number | undefined {
  if (COMPASS.hasOwnProperty(point)) {
    return COMPASS[point];
  }
}
export function getVector(point: string): Vector {
  const XVector = Math.round(Math.cos(degreesToRadians(COMPASS[point])));
  const YVector = Math.round(Math.sin(degreesToRadians(COMPASS[point])));
  const X = XVector === -0 ? Math.abs(XVector) : XVector;
  const Y = YVector === -0 ? Math.abs(YVector) : YVector;
  return [X, Y];
}

export function convertAngles(angle: number) {
  return angle >= 360 ? angle % 360 : angle < 0 ? 360 + (angle % 360) : angle;
}
/*
export function createMoves(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Journey {
  const journeyArray: Journey = [];
  let dir = direction, [a, b] = [...position];
  journeyArray.push(position);
  for (const char of move) {
    if (char === "M") {
      const [x, y] = getVector(dir);
      
  }
  return journeyArray;
}
*/

export function createSingleMove(char: string, dir: string): Array<any> {
  const newDir = rotateRobot(dir, char);
  if (newDir !== undefined) {
    return [newDir, getVector(newDir)];
  } else {
    return [dir, getVector(dir)];
  }
}

export function createMoves(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Journey {
  const pos = [...position];
  let dir = direction;
  const thisJourney = `0${move}`
    .split("")
    .map(
      (char: string, i: number, array: Array<string>): PlateauCoordinates => {
        if (i === 0) return pos;
        const [newDirection, newMove] = createSingleMove(dir, char);
        dir = newDirection;
        return newMove;
      }
    );
  console.log(thisJourney);
  const final = thisJourney.reduce(
    (acc: PlateauCoordinates, item: PlateauCoordinates): PlateauCoordinates => {
      if (Array.isArray(item)) {
        const [a, b] = item,
          [x, y] = acc;
        return [a + x, b + y];
      }
      return [0, 0];
    },
    [0, 0]
  );
  console.log(journeyEndString(final, dir));
  const journeyArray: Journey = [];
  return journeyArray;
}

export function journeyEndString([x, y]: PlateauCoordinates, dir: string) {
  return `${x}${y}${dir}`;
}

export function rotator(char: string): number | undefined {
  if (ROTATOR.hasOwnProperty(char)) {
    return ROTATOR[char];
  }
  return undefined;
}

export function isMoveValid() {}