import { RobotData, PlateauData } from "./types/mission.type";
import { PlateauLayout } from "./types/plateau.type";
import { newPlateau } from "./modules/mission";
import { createMatrix, showGridBackground } from "./ui/matrix";
import { setUpRobot } from "./ui/rover";
import { moveRobot } from "./ui/rover";
export type InputData = {
  gridSize: string | undefined;
  gridStyle: string | undefined;
  inputs: Array<Array<string>>;
  moves: string;
};

export function makePlateau(
  gridSize: string,
  plateauStyle: string
): PlateauLayout | undefined {
  if (gridSize && plateauStyle) {
    const gridInput = `${gridSize}${gridSize}`;
    return newPlateau(gridInput, plateauStyle);
  }
}

export function getPlateau(thisId: number): PlateauData {
  return getPlateau(thisId);
}

export function getRobot(thisId: number): RobotData {
  return getRobot(thisId);
}

document.getElementById("L")?.addEventListener("click", () => {
  //const myRobot = document.getElementById("my-robot");
  moveRobot("L");
});

document.getElementById("R")?.addEventListener("click", () => {
  //const myRobot = document.getElementById("my-robot");
  moveRobot("R");
});

document.getElementById("M")?.addEventListener("click", () => {
  //const myRobot = document.getElementById("my-robot");
  moveRobot("M");
});

document.getElementById("robot-button")?.addEventListener("click", () => {
  const plateauShape: HTMLInputElement = document.getElementById(
    "plateau-shape"
  ) as HTMLInputElement;
  const plateauSize: HTMLInputElement = document.getElementById(
    "plateau-size"
  ) as HTMLInputElement;
  const myPlateauStuff: HTMLElement | null =
    document.getElementById("plateau-data");
  if (myPlateauStuff) {
    myPlateauStuff.innerHTML = `${plateauShape.value} ${plateauSize.value}`;
  }
  if (plateauShape && plateauSize) {
    const layout = makePlateau(plateauSize.value, plateauShape.value);
    if (layout) {
      showGridBackground(plateauShape.value);
      createMatrix(layout);
      setUpRobot();
    }
  }
});
