import { COMPASS } from "../types/compass.type";
import { ROTATOR } from "../types/rotator.type";
import { PlateauCoordinates } from "../types/plateau.type";
import { Vector, Move } from "../types/navigator.type";
import { positionIsAvailable } from "./plateau";

export function rotateRobot(point: string, direction: string): string {
  return getDirection(convertAngles(COMPASS[point] + ROTATOR[direction]));
}

export function getDirection(angle: number): string {
  const direction = Object.keys(COMPASS).find(
    point => COMPASS[point] === angle
  );
  return direction !== undefined ? direction : "";
}
export function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function radiansToDegrees(radians: number) {
  return Math.round((radians * 180) / Math.PI);
}

export function getAngle(point: string): number | undefined {
  if (COMPASS.hasOwnProperty(point)) return COMPASS[point];
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
export function createSingleMove(
  thisDirection: string,
  char: string,
  current: PlateauCoordinates
): Move {
  let newDirection = rotateRobot(thisDirection, char);
  const thisAngle = getAngle(newDirection);
  let vector = getVector(thisDirection);
  let newPosition = current;
  const [a, b] = vector,
    [x, y] = current;
  const rotate = rotator(char);
  const rotateAngle = rotate && rotate !== 0 ? rotate * -1 : 0;
  const potentialPosition = [a + x, b + y];
  if (rotate === 0) {
    const valid = positionIsAvailable(potentialPosition);
    if (valid) {
      newPosition = potentialPosition;
    } else {
      let originalAngle = getAngle(thisDirection);
      originalAngle = originalAngle ? originalAngle + 180 : 180;
      newDirection = getDirection(convertAngles(originalAngle));
      vector = [0, 0];
    }
  } else {
    vector = [0, 0];
  }
  return {
    vector: vector,
    rotate: rotateAngle,
    direction: newDirection,
    angle: thisAngle,
    coordinates: newPosition
  };
}

export function createMoves(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Array<Move> {
  let current = position,
    thisDirection = direction;
  const thisJourney = move.split("").map((char: string, i: number): Move => {
    let move = createSingleMove(thisDirection, char, current);
    thisDirection =
      move.direction !== undefined ? move.direction : thisDirection;
    current = move.coordinates;
    return {
      vector: move.vector,
      rotate: move.rotate,
      direction: thisDirection,
      angle: getAngle(thisDirection),
      coordinates: current
    };
  });
  return thisJourney;
}

export function robotJourney(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Array<Move> {
  return createMoves(position, direction, move);
}

export function rotator(char: string): number | undefined {
  if (ROTATOR.hasOwnProperty(char)) {
    return ROTATOR[char];
  }
  return undefined;
}
