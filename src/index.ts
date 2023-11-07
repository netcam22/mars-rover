import { newPlateau, newRobot } from "./modules/mission";
function processInput() {}

const robotData = [
  { start: "12N", move: "LMLMLMLMM" },
  { start: "33E", move: "LMLMLMLMM" }
];

function start(robotData: Array<{ start: string; move: string }>) {
  newPlateau([10, 10], 1, "Bumpy surface", "rectangle");
  for (const data of robotData) {
    newRobot(
      1,
      "Rich",
      "funky",
      [12, 12],
      "N",
      robotData[0].start,
      robotData[0].move
    );
    newRobot(
      2,
      "Karl",
      "retro",
      [9, 9],
      "E",
      robotData[1].start,
      robotData[1].move
    );
  }
}

start(robotData);
