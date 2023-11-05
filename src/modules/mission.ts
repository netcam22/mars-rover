import { PlateauCoordinates } from "./plateau";
import { planetMission } from "../types/mission.type";
import { createPlateau, plateau } from "./plateau";
import { createRobot, robot } from "./robot";

export const mission = (function () {
  const myMission: planetMission = {
    id: 0,
    data: { robotArray: [], plateauArray: [] },
    planet: ""
  };
  return {
    setId: (thisId: planetMission["id"]) => (myMission.id = thisId),
    getId: (): planetMission["id"] => myMission.id,
    setPlanet: (thisPlanet: planetMission["planet"]) =>
      (myMission.planet = thisPlanet),
    getPlanet: (): planetMission["planet"] => myMission.planet,
    addPlateau: (coordinates: PlateauCoordinates) =>
      myMission.data.plateauArray.push(newPlateau(coordinates)),
    getPlateau: (thisId: number): void => findPlateauById(thisId),
    addRobot: () => myMission.data.robotArray.push(newRobot()),
    getRobot: (thisId: number): void => findRobotById(thisId)
  };
})();

export function createMission(planet: string) {}
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
