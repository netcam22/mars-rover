import { PlateauCoordinates } from "../types/plateau.type";
import { makeCoordinates, plateau } from "../modules/plateau";
import { Vector } from "../types/navigator.type";
import { newRobot, createRobotJourney } from "../modules/mission";
import { Move } from "../types/navigator.type";
import { robot } from "../modules/robot";
import { makeDraggable } from "./draggable";
import {
  hideRobotButtons,
  enableMakeRobotButton,
  disableRobotMoves
} from "./buttons";

export function setUpRobot() {
  const name = "Fred",
    start = "00N";
  const robotId = newRobot(name, start);
  if (robotId) {
    makeNewRobot(robotId);
    makeDraggable(robotId);
  }
}

export function makeNewRobot(robotId: string): HTMLElement | undefined {
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

export function moveRobot(move: string) {
  const robotId = robot.getId();
  const currentLocation: PlateauCoordinates | undefined =
    getRobotLocation(robotId);
  if (currentLocation && robot.setPosition(currentLocation)) {
    const robotMoveData = createRobotJourney(move, robotId);
    if (robotMoveData && robotMoveData.journey) {
      robotMoveData.journey.forEach((move: Move) => {
        animateRobot(currentLocation, move.vector, robotId);
      });
    }
  }
}

export function animateRobot(
  currentLocation: PlateauCoordinates,
  vector: Vector,
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

export function getRobotLocation(
  robotId: string
): PlateauCoordinates | undefined {
  const myRobot = document.getElementById(robotId);
  if (myRobot && myRobot.parentElement) {
    const parentId = myRobot.parentElement.id;
    if (parentId) {
      const idArray = parentId.split("_");
      return [parseInt(idArray[0]), parseInt(idArray[1])];
    }
  }
  return undefined;
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

export function getAllRobots(): NodeListOf<HTMLElement> | null {
  return document.querySelectorAll(".grid-robot");
}
