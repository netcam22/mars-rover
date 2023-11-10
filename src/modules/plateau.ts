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
): PlateauLayout | undefined {
  plateau.setId(id);
  plateau.setName(name);
  plateau.setStyle(style);
  plateau.setSize(makeGridSize(gridSize));
  const newGrid = selectGrid(style, makeCoordinates(gridSize));
  if (newGrid !== undefined) {
    return plateau.setLayout(newGrid);
  }
  return undefined;
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
  const arrayRow = new Array(x);
  const row = arrayRow.fill(0, 0, x);
  const columnArray = new Array(y);
  const grid = columnArray.fill(row);
  console.log(grid);
  return grid;
}

export function makeCircularGrid(radius: number): undefined {
  const arrayLength = 2 * radius - 1;
  const rows = new Array(arrayLength);
  const grid = rows.map((column, index): Array<number> => {
    const length = index <= radius ? index : arrayLength - index;
    const arrayRow = new Array(length);
    const rowContents = arrayRow.fill(0, 0, length);
    return rowContents;
  });
  return undefined;
}

export function makeCoordinates(string: string): PlateauCoordinates {
  return [parseInt(string[0]), parseInt(string[1])];
}

export function makeGridSize(string: string): GridSize {
  return [parseInt(string[0]), parseInt(string[1])];
}

export function setOccupiedPosition([x, y]: PlateauCoordinates) {
  console.log("intended end position:", x, y);
  if (positionIsAvailable([x, y])) {
    console.log("YES");
    const layout = [...plateau.getLayout()];
    console.log("layout:", layout);
    const yAxis = layout.length;
    const xAxis = layout[y].length;
    console.log("y axis length:", yAxis);
    console.log("x axis length:", xAxis);
    const robotInitial = robot.getName()[0];
    console.log("name initial:", robotInitial);
    console.log("grid coords", x, y);
    const yVal = yAxis - y - 1;
    console.log("empty coord current value", layout[yVal][x]);
    console.log("add at row index", yVal, "position index:", x);
    const newLayout = layout.map((row, rowIndex) =>
      row.map((col, colIndex) =>
        rowIndex === yVal && colIndex === x ? robotInitial : col
      )
    );
    console.log("filled coord value", layout[yVal][x]);
    plateau.setLayout(newLayout);
    console.log(plateau.getLayout());
  }
}
export function positionIsAvailable([x, y]: PlateauCoordinates): boolean {
  if (x < 0 || y < 0) return false;
  const layout = plateau.getLayout();
  const yAxis = layout.length;
  if (y < yAxis && x < layout[y].length && layout[yAxis - y - 1][x] === 0) {
    return true;
  }
  return false;
}
