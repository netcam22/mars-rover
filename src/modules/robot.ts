import { PlateauCoordinates } from "../types/plateau.type";
import { robotJourney } from "./navigator";
import { Journey, MissionRobot } from "../types/robot.type";
import { plateau, positionIsAvailable } from "./plateau";

export const robot = (function () {
  const myRobot: MissionRobot = {
    id: "",
    name: "",
    position: [],
    direction: ""
  };
  return {
    setId: (thisId: string) => (myRobot.id = thisId),
    getId: (): string => myRobot.id,
    setName: (thisName: string) => (myRobot.name = thisName),
    getName: (): string => myRobot.name,
    setPosition: (thisPosition: PlateauCoordinates) =>
      (myRobot.position = thisPosition),
    getPosition: (): PlateauCoordinates => myRobot.position,
    setDirection: (thisDirection: string) =>
      (myRobot.direction = thisDirection),
    getDirection: (): string => myRobot.direction
  };
})();

export function createRobot(
  index: number,
  name: string,
  position: PlateauCoordinates,
  direction: string
): string | undefined {
  const robotId = `${name[0]}${index}`;
  if (
    (robot.setId(robotId),
    robot.setName(name),
    robot.setPosition(position),
    robot.setDirection(direction))
  ) {
    return robotId;
  }
  return undefined;
}

export function createJourney(
  position: PlateauCoordinates,
  direction: string,
  move: string
): Journey {
  if (positionIsAvailable(position)) {
    const journey = robotJourney(position, direction, move);
    const [x, y] = journey[journey.length - 1].coordinates;
    const d = journey[journey.length - 1].direction;
    const destination = `${x}${y}${d}`;
    plateau.setOccupied([x, y], robot.getPosition());
    robot.setPosition([x, y]);
    robot.setDirection(d);
    return { journey, destination };
  }
  return { journey: undefined, destination: undefined };
}
