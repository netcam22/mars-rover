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
      positionIsAvailable(thisPosition)
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
  const newGrid = selectGrid(style, makeCoordinates(gridSize));
  if (newGrid !== undefined) {
    plateau.setLayout(newGrid);
  }
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
      return makeRectangularGrid([x + 1, y + 1]);
    } else if (style === "circle") {
      return makeCircularGrid(x + 1);
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
  if (positionIsAvailable([x, y])) {
    const layout = plateau.getLayout();
    layout[x][y] = 1;
    plateau.setLayout(layout);
  }
}
export function positionIsAvailable([x, y]: PlateauCoordinates): boolean {
  if (x < 0 || y < 0) return false;
  const layout = plateau.getLayout();
  console.log(layout);
  if (x < layout.length && y < layout[x].length && layout[x][y] === 0) {
    return true;
  }
  return false;
}
