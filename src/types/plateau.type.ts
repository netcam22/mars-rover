export type PlateauCoordinates = Array<number>;
export type PlateauLayout = Array<Array<number>>;
export type Grid = Array<number>;

export interface MissionPlateau {
  id: number;
  name: string;
  style: string;
  size: Grid;
  layout: PlateauLayout;
  occupied: PlateauCoordinates | undefined;
}
