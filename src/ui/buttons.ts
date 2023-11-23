import { getAllRobots } from "./robot-ui";

export function hideRobotButtons() {
  getMoveButtons()?.forEach(
    (button: HTMLElement) => (button.style.display = "none")
  );
}

export function showRobotButtons() {
  getMoveButtons()?.forEach(
    (button: HTMLElement) => (button.style.display = "block")
  );
}

export function getMoveButtons(): NodeListOf<HTMLElement> | null {
  return document.querySelectorAll(".move-button");
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
