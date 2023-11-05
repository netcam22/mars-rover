import { Grid, PlateauCoordinates } from "../types/plateau.type";
import { PlanetMission } from "../types/mission.type";
import { createPlateau, plateau } from "./plateau";
import { createRobot, robot } from "./robot";

export const mission = (function () {
  const myMission: PlanetMission = {
    id: 1,
    data: { robotArray: [], plateauArray: [] },
    planet: "Mars"
  };
  return {
    setId: (thisId: PlanetMission["id"]) => (myMission.id = thisId),
    getId: (): PlanetMission["id"] => myMission.id,
    setPlanet: (thisPlanet: PlanetMission["planet"]) =>
      (myMission.planet = thisPlanet),
    getPlanet: (): PlanetMission["planet"] => myMission.planet,
    addPlateau: (thisPlateau: typeof plateau) =>
      myMission.data.plateauArray.push(thisPlateau),
    getPlateauArray: (): Array<typeof plateau> => myMission.data.plateauArray,
    addRobot: (thisRobot: typeof robot) =>
      myMission.data.robotArray.push(thisRobot),
    getRobotArray: (): Array<typeof robot> => myMission.data.robotArray
  };
})();

export function newPlateau(
  gridSize: Grid,
  id: number,
  name: string,
  style: string
): void {
  const thisPlateau = createPlateau(gridSize, id, name, style);
  mission.addPlateau(thisPlateau);
  console.log(mission.getPlateauArray()[0].getName());
}

export function newRobot(
  id: number,
  name: string,
  style: string,
  position: PlateauCoordinates,
  direction: string
): void {
  const thisRobot = createRobot(id, name, style, position, direction);
  mission.addRobot(thisRobot);
  console.log(mission.getRobotArray()[0].getName());
}
export function findPlateauById(thisId: number): Grid | undefined {
  const thisPlateau = mission
    .getPlateauArray()
    .find(plateau => plateau.getId() === thisId);
  console.log(thisPlateau?.getSize());
  return thisPlateau?.getSize();
}

export function getRobotLocation(thisId: number): any {
  const thisRobot = mission
    .getRobotArray()
    .find(robot => robot.getId() === thisId);
  const robotLocation = {
    position: thisRobot?.getPosition(),
    direction: thisRobot?.getDirection()
  };
  return robotLocation;
}
