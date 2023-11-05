import { PlateauCoordinates } from "./plateau";

class MissionRobot {
  id: number = 0;
  name: string = "";
  style: string = "";
  position: PlateauCoordinates = [0, 0];
  direction: string = "E";
}

export const robot = (function () {
  const myRobot = new MissionRobot();
  return {
    setId: (thisId: MissionRobot["id"]) => (myRobot.id = thisId),
    getId: (): MissionRobot["id"] => myRobot.id,
    setName: (thisName: MissionRobot["name"]) => (myRobot.name = thisName),
    getName: (): MissionRobot["name"] => myRobot.name,
    setStyle: (thisStyle: MissionRobot["style"]) => (myRobot.style = thisStyle),
    getStyle: (): MissionRobot["style"] => myRobot.style,
    setPosition: (thisPosition: PlateauCoordinates) =>
      (myRobot.position = thisPosition),
    getPosition: (): MissionRobot["position"] => myRobot.position
  };
})();

export function createRobot(): typeof robot {
  const newRobot = { ...robot };
  return newRobot;
}
export function setUpRobot() {}
export function rotateRobot() {}
export function moveRobot() {}
