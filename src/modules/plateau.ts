import {
  PlateauLayout,
  PlateauCoordinates,
  GridSize,
  GridStyle,
  MissionPlateau,
  GRIDSTYLE
} from "../types/plateau.type";
import { robot } from "./robot";
export const plateau = (function () {
  const myPlateau: MissionPlateau = {
    id: 0,
    name: "",
    style: "rectangle",
    size: [0, 0],
    layout: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ],
    occupied: undefined
  };
  return {
    setId: (thisId: number) => (myPlateau.id = thisId),
    getId: (): number => myPlateau.id,
    setSize: (thisSize: GridSize) => (myPlateau.size = thisSize),
    getSize: (): GridSize => myPlateau.size,
    setStyle: (thisStyle: string) => (myPlateau.style = thisStyle),
    getStyle: (): string => myPlateau.style,
    setLayout: (layout: PlateauLayout) => (myPlateau.layout = layout),
    getLayout: (): PlateauLayout => myPlateau.layout,
    setOccupied: (
      newPosition: PlateauCoordinates,
      currentPosition: PlateauCoordinates
    ) => setOccupiedPosition(newPosition, currentPosition),
    isOccupied: (thisPosition: PlateauCoordinates): boolean =>
      positionIsAvailable(thisPosition)
  };
})();

export function createPlateau(
  gridSize: string,
  id: number,
  style: string
): PlateauLayout {
  plateau.setId(id);
  plateau.setStyle(style);
  plateau.setSize(makeGridSize(gridSize));
  const newGrid = selectGrid(style, makeCoordinates(gridSize));
  return plateau.setLayout(newGrid);
}

function isGridStyle(style: string): style is GridStyle {
  return (GRIDSTYLE as ReadonlyArray<string>).includes(style);
}

export function selectGrid(style: string, [x, y]: GridSize): PlateauLayout {
  if (isGridStyle(style)) {
    if (style === "rectangle") {
      return makeRectangularGrid([x, y]);
    } else if (style === "kite") {
      return makeKiteGrid(x);
    } else if (style === "circle") {
      return makeCircularGrid(x);
    }
  }
  return makeRectangularGrid([x, y]);
}

export function makeRectangularGrid([x, y]: GridSize): PlateauLayout {
  const arrayRow = new Array(x);
  const row = arrayRow.fill(0);
  const columnArray = new Array(y);
  return columnArray.fill(row);
}

export function makeCircularGrid(radius: number): PlateauLayout {
  const squareGrid = makeRectangularGrid([radius * 2 + 1, radius * 2 + 1]);
  const circularGrid = squareGrid.map(
    (row: Array<string | number>, y: number) =>
      row.map((square: string | number, x) => {
        if (
          Math.pow(x - radius, 2) + Math.pow(y - radius, 2) <=
          Math.pow(radius, 2)
        ) {
          return square;
        } else return 1;
      })
  );
  return circularGrid;
}

export function makeKiteGrid(radius: number): PlateauLayout {
  const arrayLength = 2 * radius - 1;
  const grid = new Array(arrayLength);
  let yVal = 0;
  for (let y = 0; y < arrayLength; y++) {
    yVal = y < radius ? y + 1 : arrayLength - y;
    grid[y] = new Array(yVal).fill(0);
  }
  return grid;
}

export function makeCoordinates(string: string): PlateauCoordinates {
  return [parseInt(string[0]), parseInt(string[1])];
}

export function makeGridSize(string: string): GridSize {
  return [parseInt(string[0]), parseInt(string[1])];
}

export function setOccupiedPosition(
  [x, y]: PlateauCoordinates,
  currentPosition: PlateauCoordinates
) {
  if (positionIsAvailable([x, y])) {
    const layout = [...plateau.getLayout()];
    const yAxis = layout.length;
    let [prevX, prevY]: PlateauCoordinates = [];
    if (currentPosition.length) {
      const [a, b] = currentPosition;
      (prevY = yAxis - b - 1), (prevX = a);
    }
    const newY = yAxis - y - 1,
      newX = x;
    const newLayout = layout.map((row, rowIndex) =>
      row.map((col, colIndex) =>
        rowIndex === newY && colIndex === newX
          ? robot.getId()
          : currentPosition.length && rowIndex === prevY && colIndex === prevX
          ? 0
          : col
      )
    );
    plateau.setLayout(newLayout);
  }
}

export function positionIsAvailable([x, y]: PlateauCoordinates): boolean {
  if (x < 0 || y < 0) return false;
  const layout = plateau.getLayout();
  const yAxis = layout.length;
  if (
    y < yAxis &&
    x < layout[y].length &&
    (layout[yAxis - y - 1][x] === 0 ||
      layout[yAxis - y - 1][x] === robot.getId())
  ) {
    return true;
  }
  return false;
}
