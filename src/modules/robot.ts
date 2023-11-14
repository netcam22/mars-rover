import { PlateauCoordinates } from "../types/plateau.type";
import { robotJourney } from "./navigator";
import { Journey } from "../types/robot.type";
import { plateau, positionIsAvailable } from "./plateau";
class Robot {
  id: number = 0;
  name: string = "";
  position: PlateauCoordinates = [0, 0];
  direction: string = "";
  move: string = "";
}
export const robot = (function () {
  const myRobot = new Robot();
  return {
    setId: (thisId: number) => (myRobot.id = thisId),
    getId: (): number => myRobot.id,
    setName: (thisName: string) => (myRobot.name = thisName),
    getName: (): string => myRobot.name,
    setPosition: (thisPosition: PlateauCoordinates) =>
      (myRobot.position = thisPosition),
    getPosition: (): PlateauCoordinates => myRobot.position,
    setDirection: (thisDirection: string) =>
      (myRobot.direction = thisDirection),
    getDirection: (): string => myRobot.direction,
    setMove: (thisMove: string) => (myRobot.move = thisMove),
    getMove: (): string => myRobot.move
  };
})();

export function createRobot(
  id: number,
  name: string,
  position: PlateauCoordinates,
  direction: string
): boolean {
  if (
    (robot.setId(id),
    robot.setName(name),
    robot.setPosition(position),
    robot.setDirection(direction))
  ) {
    return true;
  }
  return false;
}

export function createJourney(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Journey {
  if (positionIsAvailable(position)) {
    const journey = robotJourney(position, direction, move);
    const [a, b] = journey[journey.length - 1].coordinates;
    const d = journey[journey.length - 1].direction;
    const destination = `${a}${b}${d}`;
    plateau.setOccupied([a, b]);
    robot.setPosition([a, b]);
    robot.setDirection(d);
    return { journey, destination };
  }
  return { journey: undefined, destination: undefined };
}
