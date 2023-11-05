type CompassTrigKey = { [point: string]: number };

export const COMPASS: CompassTrigKey = {
  E: 0,
  N: 90,
  W: 180,
  S: 270
} as const;

export type MissionCompass = typeof COMPASS;
