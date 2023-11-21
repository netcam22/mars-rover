import { PlateauCoordinates } from "../types/plateau.type";
import { Vector } from "../types/navigator.type";
import { newRobot, createRobotJourney } from "../modules/mission";
import { InputData } from "..";
import { Move } from "../types/navigator.type";
import { robot } from "../modules/robot";
import { makeDraggable } from "./draggable";

export function setUpRobot(robotData: InputData) {
  const myData = robotData.inputs.forEach(robot => {
    const [name, start, moveInput] = robot;
    const robotId = newRobot(name, start);
    if (robotId) {
      placeRobot(robotId);
      makeDraggable(robotId);
    }
  });
}

export function placeRobot(robotId: string): HTMLElement | undefined {
  const waitingStation: HTMLElement | null =
    document.getElementById("robot-waiting-area");
  if (waitingStation) {
    const newRobot = document.createElement("div");
    newRobot.className = "grid-robot";
    newRobot.id = robotId;
    waitingStation.append(newRobot);
    return newRobot;
  }
}

export function moveRobot(move: string, robotId: string) {
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
}

export function animateRobot(
  vector: Vector,
  coordinates: PlateauCoordinates,
  rotate: number | undefined,
  delayRobot: number
) {
  const myRobot = document.getElementById(`my-robot`);
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
        delay: delayRobot,
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
