import {
  PlateauLayout,
  PlateauCoordinates,
  Grid,
  MissionPlateau
} from "../types/plateau.type";
export const plateau = (function () {
  const myPlateau: MissionPlateau = {
    id: 0,
    name: "",
    style: "",
    size: [0, 0],
    layout: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    occupied: undefined
  };
  return {
    setId: (thisId: number) => (myPlateau.id = thisId),
    getId: (): number => myPlateau.id,
    setSize: (thisSize: Grid) => (myPlateau.size = thisSize),
    getSize: (): Grid => myPlateau.size,
    setName: (thisName: string) => (myPlateau.name = thisName),
    getName: (): string => myPlateau.name,
    setStyle: (thisStyle: string) => (myPlateau.style = thisStyle),
    getStyle: (): string => myPlateau.style,
    setLayout: (layout: PlateauLayout) => (myPlateau.layout = layout),
    getLayout: (): PlateauLayout => myPlateau.layout,
    setOccupied: (newPosition: PlateauCoordinates) =>
      setOccupiedPosition(newPosition),
    isOccupied: (thisPosition: PlateauCoordinates): boolean =>
      isPositionOccupied(thisPosition)
  };
})();

export function createPlateau(
  gridSize: string,
  id: number,
  name: string,
  style: string
) {
  const grid: Grid = [];
  plateau.setSize(grid);
  plateau.setId(id);
  plateau.setName(name);
  plateau.setStyle(style);
}
export function setLayout() {}
export function getLayout() {}
export function setOccupiedPosition(position: PlateauCoordinates) {}
export function isPositionOccupied(position: PlateauCoordinates): boolean {
  return false;
}
