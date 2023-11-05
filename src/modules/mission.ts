import { PlateauCoordinates } from "./plateau";
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
    addPlateau: (coordinates: PlateauCoordinates) =>
      myMission.data.plateauArray.push(newPlateau(coordinates)),
    getPlateau: (thisId: number): void => findPlateauById(thisId),
    addRobot: () => myMission.data.robotArray.push(newRobot()),
    getRobot: (thisId: number): void => findRobotById(thisId)
  };
})();

export function newPlateau(coordinates: PlateauCoordinates): typeof plateau {
  const thisPlateau = createPlateau(coordinates);
  return thisPlateau;
}
export function newRobot(): typeof robot {
  const thisRobot = createRobot();
  return thisRobot;
}
export function findPlateauById(id: number): void {}
export function findRobotById(id: number): void {}
