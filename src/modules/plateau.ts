export type PlateauLayout = Array<Array<number>>;
export type PlateauCoordinates = Array<number>;

class MissionPlateau {
  id: number = 0;
  name: string = "";
  style: string = "";
  layout: PlateauLayout = [[]];
}

export const plateau = (function () {
  const myPlateau = new MissionPlateau();
  return {
    setId: (thisId: MissionPlateau["id"]) => (myPlateau.id = thisId),
    getId: (): MissionPlateau["id"] => myPlateau.id,
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

export function createPlateau(coordinates: PlateauCoordinates): typeof plateau {
  const newPlateau = { ...plateau };
  return newPlateau;
}
export function setUpPlateau() {}
export function setOccupiedPosition(position: PlateauCoordinates) {}
export function isPositionOccupied(position: PlateauCoordinates): boolean {
  return false;
}
