import { RobotData, PlateauData } from "./types/mission.type";
import { PlateauLayout } from "./types/plateau.type";
import { createRobotJourney, newPlateau } from "./modules/mission";
import { newRobot } from "./modules/mission";
import { Move } from "./types/navigator.type";
type InputData = {
  gridSize: string | undefined;
  gridStyle: string | undefined;
  inputs: Array<Array<string>>;
  moves: string;
};

export function makePlateau(
  gridSize: string,
  plateauStyle: string
): PlateauLayout | undefined {
  /*
  const style = plateauStyle as unknown;
  const thisStyle = style as string;
  const size = gridSize as unknown;
  const thisSize = size as string;
  */
  if (gridSize && plateauStyle) {
    return newPlateau(gridSize, plateauStyle);
  }
}

export function makeRobot(name: string, start: string): string | undefined {
  return newRobot(name, start);
}

export function moveRobot(
  move: string,
  robotId: string
): RobotData | undefined {
  return createRobotJourney(move, robotId);
}

export function getPlateau(thisId: number): PlateauData {
  return getPlateau(thisId);
}

export function getRobot(thisId: number): RobotData {
  return getRobot(thisId);
}

function makeGrid(plateau: PlateauLayout) {
  const plateauContainer: HTMLElement | null =
    document.getElementById("plateau-container");
  console.log(plateauContainer);
  if (plateauContainer) {
    plateauContainer.innerHTML = "";
    plateau.forEach((row, rowIndex) => {
      const gridRow = document.createElement("div");
      gridRow.className = "grid-container";
      gridRow.id = `${rowIndex}}`;
      plateauContainer.appendChild(gridRow);
      const columns = row.map((square: string | number) => "auto");
      gridRow.style.gridTemplateColumns = columns.join(" ");
      row.forEach((col, colIndex) => {
        if (col !== 1) {
          const gridItem = document.createElement("div");
          gridItem.className = "grid-item";
          gridItem.id = `${rowIndex}${colIndex}`;
          gridRow.appendChild(gridItem);
        }
      });
    });
  }
}

const rectangleDemo: InputData = {
  gridSize: "66",
  gridStyle: "rectangle",
  inputs: [
    ["Fred", "12N", "LMLMLMLMM"],
    ["Bob", "33E", "MMRMMRMRRM"]
  ],
  moves: "animate"
};
/*
document.getElementById("plateau-form")?.addEventListener("click", () => {
  const plateauShape = document.getElementById("plateau-shape")?.innerHTML;
  const plateauSize = document.getElementById("plateau-size")?.innerHTML;
  makePlateau(rectangleDemo.gridSize, rectangleDemo.gridStyle);
  const demoContent = document.getElementById("demo")?.innerHTML;
  const layout = makePlateau(plateauSize, plateauShape);
  //console.log(layout);
  if (layout) {
    console.log(layout);
    //makeGrid(layout);
  }
});
*/
function showOutput(
  output: RobotData | undefined,
  name: string,
  startPosition: string
): string {
  let outputText = "";
  if (output && output?.destination && output.journey) {
    outputText += `Hello again, I am ${output.name} and I have moved ${output.move} and arrived at ${output.destination}`;
    outputText += "I moved:";
    output.journey?.forEach((robotMove: Move) => {
      const { vector, rotate, direction, angle, coordinates } = robotMove;
      outputText += `Vector: ${vector}, Rotate: ${rotate}, Direction: ${direction}, Angle: ${angle}, Coordinates: ${coordinates}`;
    });
  } else {
    outputText += `Hello again, I am ${name} and I was unable to make my journey as the start position ${startPosition} was not available.`;
  }
  return outputText;
}

const htmlcontent = rectangleDemo.inputs.map(robot => {
  const [name, start, moveInput] = robot;
  const robotId = makeRobot(name, start);
  if (robotId) {
    if (rectangleDemo.moves === "animate") {
      return showOutput(moveRobot(moveInput, robotId), name, start);
    } else {
      return moveInput
        .split("")
        .forEach(move => showOutput(moveRobot(move, robotId), name, start));
    }
  }
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
      console.log("layout", layout);
      makeGrid(layout);
    }
  }
  const myRobotStuff: HTMLElement | null =
    document.getElementById("robot-data");
  const content = htmlcontent ? htmlcontent : "no content found";
  if (content[0]) {
    console.log(content[0]);
    if (myRobotStuff) {
      myRobotStuff.innerHTML = content[0];
    }
  }
});
