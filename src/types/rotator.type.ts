export type RotatorKey = { [key: string]: number };

export const ROTATOR: RotatorKey = {
  L: 90,
  R: -90,
  M: 0
} as const;

export type Rotator = typeof ROTATOR;
