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
}

export function newRobot(
  id: number,
  name: string,
  style: string,
  position: PlateauCoordinates,
  direction: string
): void {
  mission.addRobot(createRobot(id, name, style, position, direction));
}
