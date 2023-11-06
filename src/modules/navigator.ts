import { COMPASS, MissionCompass, CompassTrigKey } from "../types/compass.type";
import { ROTATOR, MissionRotator } from "../types/rotator.type";
import { robot } from "../modules/robot";

export function rotateRobot() {}
export function moveRobot() {}
export function getDirection(angle: number): string | undefined {
  return Object.keys(COMPASS).find(point => COMPASS[point] === angle);
}

export function getAngle(point: string): number {
  return COMPASS[point];
}
export function getVector() {}
export function makeTrigValid() {}
export function isMoveValid() {}
