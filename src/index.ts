import { createMatrix, showGridBackground, makePlateau } from "./ui/matrix";
import {
  setUpRobot,
  moveRobot,
  terminateRobotJourney,
  hideRobotButtons
} from "./ui/robot-ui";
export type InputData = {
  gridSize: string | undefined;
  gridStyle: string | undefined;
  inputs: Array<Array<string>>;
  moves: string;
};

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
      hideRobotButtons();
      showGridBackground(plateauShape.value);
      createMatrix(layout);
    }
  }
});

document.getElementById("robot-button")?.addEventListener("click", () => {
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
});

document.getElementById("T")?.addEventListener("click", () => {
  terminateRobotJourney();
});
