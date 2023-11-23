import { createMatrix, showGridBackground, makePlateau } from "./ui/matrix";
import { plateau } from "./modules/plateau";
import {
  setUpRobot,
  moveRobot,
  terminateRobotJourney,
  resizeAllRobots
} from "./ui/robot-ui";
import {
  disableMakeRobotButton,
  hideRobotButtons,
  removeAllRobots,
  enableMakeRobotButton
} from "./ui/buttons";
export type InputData = {
  gridSize: string | undefined;
  gridStyle: string | undefined;
  inputs: Array<Array<string>>;
  moves: string;
};

addEventListener("resize", event => {
  resizeAllRobots();
});

document.getElementById("plateau-button")?.addEventListener("click", () => {
  const plateauShape: HTMLInputElement = document.getElementById(
    "plateau-shape"
  ) as HTMLInputElement;
  const plateauSize: HTMLInputElement = document.getElementById(
    "plateau-size"
  ) as HTMLInputElement;

  if (plateauShape && plateauSize) {
    const layout = makePlateau(plateauSize.value, plateauShape.value);
    if (layout) {
      removeAllRobots();
      hideRobotButtons();
      enableMakeRobotButton();
      showGridBackground(plateauShape.value);
      createMatrix(layout);
    }
  }
});

document.getElementById("robot-button")?.addEventListener("click", () => {
  disableMakeRobotButton();
  setUpRobot();
});

document.getElementById("L")?.addEventListener("click", () => {
  moveRobot("L");
});

document.getElementById("R")?.addEventListener("click", () => {
  moveRobot("R");
});

document.getElementById("M")?.addEventListener("click", () => {
  moveRobot("M");
  console.log(plateau.getLayout());
});

document.getElementById("T")?.addEventListener("click", () => {
  terminateRobotJourney();
});
