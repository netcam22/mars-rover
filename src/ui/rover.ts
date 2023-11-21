import { PlateauCoordinates } from "../types/plateau.type";
import { Vector } from "../types/navigator.type";
import { newRobot, createRobotJourney } from "../modules/mission";
import { InputData } from "..";
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
/*
export function moveRobot(move: string) {
  const robotMoveData = createRobotJourney(move, robot.getId());
  if (robotMoveData) {
    if (robotMoveData && robotMoveData.journey) {
      let delayRobot = 0;
      robotMoveData.journey.forEach((move: Move) => {
        console.log(move);
        animateRobot(move.vector, move.coordinates, move.rotate, delayRobot);
        delayRobot += 2000;
      });
    }
  }
}*/

export function moveRobot(move: string) {
  const robotId = robot.getId();
  const robotMoveData = createRobotJourney(move, robotId);
  if (robotMoveData) {
    if (robotMoveData && robotMoveData.journey) {
      robotMoveData.journey.forEach((move: Move) => {
        console.log(move);
        animateRobot(move.vector, move.coordinates, move.rotate, robotId);
      });
    }
  }
}

export function animateRobot(
  vector: Vector,
  coordinates: PlateauCoordinates,
  rotate: number | undefined,
  robotId: string
) {
  const myRobot = document.getElementById(robotId);
  const [vectorX, vectorY] = vector;

  const t =
    vectorY !== 0
      ? `translateY(${vectorY * -100}%)`
      : vectorX !== 0
      ? `translateX(${vectorX * 100}%)`
      : `rotate(${rotate}deg)`;

  if (myRobot) {
    const robotTranformation = new KeyframeEffect(
      myRobot,
      [
        { transform: t }
        // { transform: `translateY(${vectorY * 100}%)` },
        // { transform: `translateX(${vectorX * -100}%)` },
        // { transform: `rotate(${rotate}deg)` }
      ],
      {
        duration: 2000,
        easing: "ease-in-out",
        fill: "forwards"
      }
    );
    const robotAnimation = new Animation(robotTranformation, document.timeline);
    robotAnimation.play();

    //setTimeout(() => {
    relocateRobot(coordinates, myRobot);
    //}, delayRobot);
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
