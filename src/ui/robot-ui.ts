import { PlateauCoordinates } from "../types/plateau.type";
import {
  makeCoordinates,
  plateau,
  setOccupiedPosition
} from "../modules/plateau";
import { Vector } from "../types/navigator.type";
import { newRobot, createRobotJourney } from "../modules/mission";
import { Move } from "../types/navigator.type";
import { robot } from "../modules/robot";
import { makeDraggable } from "./draggable";

export function setUpRobot() {
  const name = "Fred",
    start = "00N";
  const robotId = newRobot(name, start);
  if (robotId) {
    placeRobot(robotId);
    makeDraggable(robotId);
  }
}

export function getRobotLocation(
  robotId: string
): PlateauCoordinates | undefined {
  const myRobot = document.getElementById(robotId);
  if (myRobot && myRobot.parentElement) {
    const parentId = myRobot.parentElement.id;
    if (parentId) {
      return makeCoordinates(parentId.replace("_", ""));
    }
  }
  return undefined;
}

export function placeRobot(robotId: string): HTMLElement | undefined {
  const waitingStation: HTMLElement | null =
    document.getElementById("robot-waiting-area");
  if (waitingStation) {
    const newRobot = document.createElement("div");
    newRobot.className = "grid-robot";
    newRobot.id = robotId;
    resizeRobot(newRobot);
    waitingStation.append(newRobot);
    return newRobot;
  }
}

export function resizeRobot(myRobot: HTMLElement) {
  const targetDiv: HTMLElement | null = document.querySelector(".grid-item");
  if (targetDiv?.offsetWidth) {
    myRobot.style.width = `${targetDiv?.offsetWidth}px`;
    myRobot.style.padding = `${targetDiv?.offsetWidth}px 0 0 0`;
  }
}

export function resizeAllRobots() {
  getAllRobots()?.forEach((robot: HTMLElement) => {
    resizeRobot(robot);
  });
}

export function moveRobot(move: string) {
  const robotId = robot.getId();
  const currentLocation: PlateauCoordinates | undefined =
    getRobotLocation(robotId);
  if (currentLocation && robot.setPosition(currentLocation)) {
    const robotMoveData = createRobotJourney(move, robotId);
    if (robotMoveData) {
      if (robotMoveData && robotMoveData.journey) {
        robotMoveData.journey.forEach((move: Move) => {
          console.log(move);
          animateRobot(currentLocation, move.vector, move.rotate, robotId);
        });
      }
    }
  }
}

export function animateRobot(
  currentLocation: PlateauCoordinates,
  vector: Vector,
  rotate: number | undefined,
  robotId: string
) {
  const myRobot = document.getElementById(robotId);
  const [vectorX, vectorY] = vector;
  const [positionX, positionY] = currentLocation;
  if (myRobot) {
    myRobot.classList.remove("N", "S", "E", "W");
    const direction = robot.getDirection();
    myRobot.classList.add(direction, "move", "move-bounce");
    relocateRobot([vectorX + positionX, vectorY + positionY], myRobot);
  }
}

export function relocateRobot(
  coordinates: PlateauCoordinates,
  myRobot: HTMLElement
) {
  const [startCol, startRow] = coordinates;
  const targetGridItem: HTMLElement | null = document.getElementById(
    `${startCol}_${startRow}`
  );
  if (targetGridItem) {
    myRobot.parentNode?.removeChild(myRobot);
    targetGridItem.appendChild(myRobot);
  }
}

export function terminateRobotJourney() {
  hideRobotButtons();
  enableMakeRobotButton();
  disableRobotMoves();
  const robotLocation: PlateauCoordinates | undefined = getRobotLocation(
    robot.getId()
  );
  if (robotLocation) {
    const [x, y] = robotLocation;
    plateau.setOccupied([x, y], robotLocation);
  }
}

export function hideRobotButtons() {
  const moveButtons: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".move-button");
  if (moveButtons) {
    moveButtons.forEach(
      (button: HTMLElement) => (button.style.display = "none")
    );
  }
}

export function showRobotButtons() {
  const moveButtons: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".move-button");
  if (moveButtons) {
    moveButtons.forEach(
      (button: HTMLElement) => (button.style.display = "block")
    );
  }
}

export function disableMakeRobotButton() {
  const makeRobotButton = getMakeRobotButton();
  makeRobotButton.disabled = true;
}

export function enableMakeRobotButton() {
  getMakeRobotButton()?.removeAttribute("disabled");
}

export function getMakeRobotButton(): HTMLInputElement {
  return document.getElementById("robot-button") as HTMLInputElement;
}

export function removeAllRobots() {
  getAllRobots()?.forEach((robot: HTMLElement) => robot.remove());
}

export function disableRobotMoves() {
  getAllRobots()?.forEach((robot: HTMLElement) =>
    robot.classList.remove("move-bounce")
  );
}

export function getAllRobots(): NodeListOf<HTMLElement> | null {
  return document.querySelectorAll(".grid-robot");
}
