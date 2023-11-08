import {
  PlateauLayout,
  PlateauCoordinates,
  GridSize,
  MissionPlateau,
  GridStyle
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
    setSize: (thisSize: GridSize) => (myPlateau.size = thisSize),
    getSize: (): GridSize => myPlateau.size,
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
  plateau.setId(id);
  plateau.setName(name);
  plateau.setStyle(style);
  plateau.setSize(makeGridSize(gridSize));
  plateau.setLayout(makeRectangularGrid(makeCoordinates(gridSize)));
  plateau.setLayout(makeCircularGrid(5));
}

export function makeRectangularGrid([x, y]: GridSize): PlateauLayout {
  const grid = new Array(x);
  for (let i = 0; i < x; i++) {
    grid[i] = new Array(y).fill(0);
  }
  console.log(grid);
  return grid;
}

export function makeCircularGrid(radius: number): PlateauLayout {
  const grid = new Array(2 * radius - 1);
  let yVal = 0;
  for (let j = 0; j < 2 * radius - 1; j++) {
    yVal = j < radius ? yVal + 1 : yVal - 1;
    grid[j] = new Array(yVal).fill(0);
  }
  console.log(grid);
  return grid;
}

export function makeCoordinates(string: string): PlateauCoordinates {
  return [parseInt(string[0]), parseInt(string[1])];
}

export function makeGridSize(string: string): GridSize {
  return [parseInt(string[0]), parseInt(string[1])];
}

export function getLayout() {}
export function setOccupiedPosition(position: PlateauCoordinates) {}
export function isPositionOccupied(position: PlateauCoordinates): boolean {
  return false;
}
