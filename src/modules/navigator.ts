import { COMPASS, MissionCompass, CompassTrigKey } from "../types/compass.type";
import { ROTATOR, MissionRotator } from "../types/rotator.type";
import { robot } from "../modules/robot";

export function rotateRobot() {}
export function moveRobot() {}
export function getDirection(angle: number): string | undefined {
  return Object.keys(COMPASS).find(point => COMPASS[point] === angle);
}
function degreesToRadians(degrees: number) {
  return Math.round((degrees * Math.PI) / 180);
}

function radiansToDegrees(radians: number) {
  return Math.round((radians * 180) / Math.PI);
}

export function getAngle(point: string): number {
  return COMPASS[point];
}
export function getVector() {}
export function makeTrigValid(angle: number) {
  return angle >= 360 ? angle % 360 : angle < 0 ? 360 + (angle % 360) : angle;
}
export function isMoveValid() {}
