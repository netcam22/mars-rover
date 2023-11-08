import { COMPASS } from "../types/compass.type";
import { ROTATOR, Rotator, RotatorKey } from "../types/rotator.type";
import { Journey } from "../types/robot.type";
import { PlateauCoordinates } from "../types/plateau.type";
import { plateau } from "./plateau";
type Vector = Array<number>;
type Move = { vector: Vector; direction: string | undefined };

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
export function createSingleMove(thisDirection: string, char: string): Move {
  const d = rotateRobot(thisDirection, char);
  const vector = getVector(thisDirection);
  return { vector: vector, direction: d };
}

export function createMoves(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Array<Move> {
  const start: Vector = [...position];
  let thisDirection = direction;
  const thisJourney = `0${move}`
    .split("")
    .map((char: string, i: number): Move => {
      if (i === 0) {
        return { vector: start, direction: direction };
      }
      const move = createSingleMove(thisDirection, char);
      thisDirection =
        move.direction !== undefined ? move.direction : thisDirection;
      return { vector: move.vector, direction: thisDirection };
      /*
        const newDirection = rotateRobot(thisDirection, char);
        if (newDirection) {
          if (thisDirection === newDirection) {
            return getVector(thisDirection);
          } else {
            thisDirection = newDirection;
          }
        }
        */
      //return [0, 0];
    });
  console.log(thisJourney);
  return thisJourney;
}

export function createJourneyresult(
  thisJourney: Array<Move>
): PlateauCoordinates {
  const journeyEnd = thisJourney.reduce(
    (acc: PlateauCoordinates, item: Move): any => {
      const [a, b] = item.vector,
        [x, y] = acc;
      return [a + x, b + y];
    },
    [0, 0]
  );
  return journeyEnd;
}

export function journeyEndPosition(
  position: PlateauCoordinates,
  direction: string,
  move: string
): string {
  const thisJourney = createMoves(position, direction, move);
  const finalDirection = thisJourney[thisJourney.length - 1].direction;
  const journeyEnd = createJourneyresult(thisJourney);
  console.log(journeyEnd);
  const [a, b] = journeyEnd;
  return `${a}${b}${finalDirection}`;
}

export function rotator(char: string): number | undefined {
  if (ROTATOR.hasOwnProperty(char)) {
    return ROTATOR[char];
  }
  return undefined;
}

export function isMoveValid() {}
