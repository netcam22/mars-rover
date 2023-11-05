import { newPlateau, newRobot } from "./modules/mission";
function processInput() {}

function start(robotData: Array<{ start: string; move: string }>) {
  newPlateau([10, 10], 1, "Bumpy surface", "rectangle");
  for (const data of robotData) {
    newRobot(1, "Rich", "funky", [12, 12], "N");
    newRobot(2, "Karl", "retro", [9, 9], "E");
  }
}
const robotData = [
  { start: "12N", move: "LMLMLMLMM" },
  { start: "33E", move: "LMLMLMLMM" }
];
start(robotData);
