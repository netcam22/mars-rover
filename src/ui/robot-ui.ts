import { PlateauCoordinates } from "../types/plateau.type";
import { makeCoordinates } from "../modules/plateau";
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

export function getRobotLocation(robotId: string) {
  const myRobot = document.getElementById(robotId);
  if (myRobot && myRobot.parentElement) {
    const parentId = myRobot.parentElement.id;
    if (parentId) {
      return makeCoordinates(parentId.replace("_", ""));
    }
  }
}

export function placeRobot(robotId: string): HTMLElement | undefined {
  const waitingStation: HTMLElement | null =
    document.getElementById("robot-waiting-area");

  if (waitingStation) {
    const newRobot = document.createElement("div");
    newRobot.className = "grid-robot";
    newRobot.id = robotId;
    const targetDiv: HTMLElement | null = document.querySelector(".grid-item");
    if (targetDiv?.offsetWidth) {
      newRobot.style.width = `${targetDiv?.offsetWidth}px`;
      newRobot.style.padding = `${targetDiv?.offsetWidth}px 0 0 0`;
    }
    waitingStation.append(newRobot);
    return newRobot;
  }
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
    myRobot.classList.add("move");
    myRobot.classList.remove("N");
    myRobot.classList.remove("S");
    myRobot.classList.remove("E");
    myRobot.classList.remove("W");
    const direction = robot.getDirection();
    myRobot.classList.add(direction);
    myRobot.classList.add("move-bounce");
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
  // save occupied position in plateau
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
  const makeRobotButton = document.getElementById(
    "robot-button"
  ) as HTMLInputElement;
  makeRobotButton.disabled = true;
}

export function enableMakeRobotButton() {
  const makeRobotButton = document.getElementById(
    "robot-button"
  ) as HTMLInputElement;
  makeRobotButton.removeAttribute("disabled");
}

export function removeAllRobots() {
  const robots: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".grid-robot");
  if (robots) {
    robots.forEach((robot: HTMLElement) => robot.remove());
  }
}

export function disableRobotMoves() {
  const robots: NodeListOf<HTMLElement> | null =
    document.querySelectorAll(".grid-robot");
  if (robots) {
    robots.forEach((robot: HTMLElement) =>
      robot.classList.remove("move-bounce")
    );
  }
}
