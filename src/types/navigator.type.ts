export type Vector = Array<number>;
export type Move = {
  vector: Vector;
  rotate: number | undefined;
  direction: string;
  angle: number | undefined;
};
