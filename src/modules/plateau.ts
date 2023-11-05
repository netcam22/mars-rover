import {
  PlateauLayout,
  PlateauCoordinates,
  Grid,
  MissionPlateau
} from "../types/plateau.type";
export const plateau = (function () {
  const myPlateau: MissionPlateau = {
    id: 0,
    name: "Bumpy Moon Surface",
    style: "rectangle",
    size: [0, 0],
    layout: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  };
  return {
    setId: (thisId: number) => (myPlateau.id = thisId),
    getId: (): MissionPlateau["id"] => myPlateau.id,
    setSize: (thisSize: MissionPlateau["size"]) => (myPlateau.size = thisSize),
    getSize: (): MissionPlateau["size"] => myPlateau.size,
    setName: (thisName: MissionPlateau["name"]) => (myPlateau.name = thisName),
    getName: (): MissionPlateau["name"] => myPlateau.name,
    setStyle: (thisStyle: MissionPlateau["style"]) =>
      (myPlateau.style = thisStyle),
    getStyle: (): MissionPlateau["style"] => myPlateau.style,
    setOccupied: (newPosition: PlateauCoordinates) =>
      setOccupiedPosition(newPosition),
    isOccupied: (thisPosition: PlateauCoordinates): boolean =>
      isPositionOccupied(thisPosition)
  };
})();

export function createPlateau(
  gridSize: Grid,
  id: number,
  name: string,
  style: string
) {
  plateau.setSize(gridSize);
  plateau.setId(id);
  plateau.setName(name);
  plateau.setStyle(style);
  return plateau;
}
export function setLayout() {}
export function setOccupiedPosition(position: PlateauCoordinates) {}
export function isPositionOccupied(position: PlateauCoordinates): boolean {
  return false;
}
