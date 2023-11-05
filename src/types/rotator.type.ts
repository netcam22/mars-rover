type RotatorKey = { [key: string]: number };

export const ROTATOR: RotatorKey = {
  L: 90,
  R: -90
} as const;

export type MissionRotator = typeof ROTATOR;
