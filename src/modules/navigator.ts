import { COMPASS } from "../types/compass.type";
import { ROTATOR } from "../types/rotator.type";
import { PlateauCoordinates } from "../types/plateau.type";
import { Vector, Move } from "../types/navigator.type";
import { Journey } from "../types/robot.type";

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
export function createSingleMove(thisDirection: string, char: string): Move {
  const d = rotateRobot(thisDirection, char);
  const thisAngle = getAngle(d);
  const vector = getVector(thisDirection);
  return { vector: vector, direction: d, angle: thisAngle };
}

export function createMoves(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Array<Move> {
  const start: Vector = [...position];
  let thisDirection = direction;
  const thisJourney = move.split("").map((char: string, i: number): Move => {
    const move = createSingleMove(thisDirection, char);
    thisDirection =
      move.direction !== undefined ? move.direction : thisDirection;
    return {
      vector: move.vector,
      direction: thisDirection,
      angle: getAngle(thisDirection)
    };
  });
  return thisJourney;
}

export function createJourneyresult(
  thisJourney: Array<Move>,
  position: PlateauCoordinates
): PlateauCoordinates {
  const journeyEnd = thisJourney.reduce(
    (acc: PlateauCoordinates, item: Move): any => {
      const [a, b] = item.vector,
        [x, y] = acc;
      return [a + x, b + y];
    },
    position
  );
  return journeyEnd;
}

export function robotJourney(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Journey {
  const thisJourney = createMoves(position, direction, move);
  const finalDirection = thisJourney[thisJourney.length - 1].direction;
  const journeyEnd = createJourneyresult(thisJourney, position);
  const [a, b] = journeyEnd;
  return { journey: thisJourney, destination: `${a}${b}${finalDirection}` };
}

export function rotator(char: string): number | undefined {
  if (ROTATOR.hasOwnProperty(char)) {
    return ROTATOR[char];
  }
  return undefined;
}

export function isMoveValid() {}
