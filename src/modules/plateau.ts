import {
  PlateauLayout,
  PlateauCoordinates,
  GridSize,
  GridStyle,
  MissionPlateau,
  GRIDSTYLE
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
    setOccupied: (position: PlateauCoordinates) =>
      setOccupiedPosition(position),
    isOccupied: (thisPosition: PlateauCoordinates): boolean =>
      positionIsOccupied(thisPosition)
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
  selectGrid(style, makeCoordinates(gridSize));
}

function isGridStyle(style: string): style is GridStyle {
  return (GRIDSTYLE as ReadonlyArray<string>).includes(style);
}

export function selectGrid(
  style: string,
  [x, y]: GridSize
): PlateauLayout | undefined {
  if (isGridStyle(style)) {
    if (style === "rectangle") {
      return makeRectangularGrid([x, y]);
    } else if (style === "circle") {
      return makeCircularGrid(x);
    }
    return undefined;
  }
}

export function makeRectangularGrid([x, y]: GridSize): PlateauLayout {
  const grid = new Array(x);
  for (let i = 0; i < x; i++) {
    grid[i] = new Array(y).fill(0);
  }
  return grid;
}

export function makeCircularGrid(radius: number): PlateauLayout {
  const grid = new Array(2 * radius - 1);
  let yVal = 0;
  for (let j = 0; j < 2 * radius - 1; j++) {
    yVal = j < radius ? yVal + 1 : yVal - 1;
    grid[j] = new Array(yVal).fill(0);
  }
  return grid;
}

export function makeCoordinates(string: string): PlateauCoordinates {
  return [parseInt(string[0]), parseInt(string[1])];
}

export function makeGridSize(string: string): GridSize {
  return [parseInt(string[0]), parseInt(string[1])];
}

export function setOccupiedPosition([x, y]: PlateauCoordinates) {
  let layout = plateau.getLayout();
  layout[x][y] = 1;
  plateau.setLayout(layout);
}
export function positionIsOccupied([x, y]: PlateauCoordinates): boolean {
  const layout = plateau.getLayout();
  if (layout[x][y] === 0) {
    return false;
  }
  return true;
}
