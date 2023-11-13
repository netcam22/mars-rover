export type PlateauCoordinates = Array<number>;
export type PlateauLayout = Array<Array<number | string>>;
export type GridSize = Array<number>;
export interface MissionPlateau {
  id: number;
  name: string;
  style: string;
  size: GridSize;
  layout: PlateauLayout;
  occupied: PlateauCoordinates | undefined;
}
export const GRIDSTYLE = ["rectangle", "kite", "circle"] as const;
export type GridStyle = (typeof GRIDSTYLE)[number];
