import { PlateauLayout } from "../types/plateau.type";
import { newPlateau } from "../modules/mission";

export function showGridBackground(plateauStyle: string) {
  const planet: HTMLElement | null = document.getElementById("my-planet");
  if (planet) {
    planet.classList.remove("circle", "rectangle", "kite");
    planet.classList.add(plateauStyle);
  }
}

export function createMatrix(plateau: PlateauLayout) {
  const plateauContainer: HTMLElement | null =
    document.getElementById("plateau-container");
  if (plateauContainer) {
    plateauContainer.innerHTML = "";
    plateau.forEach((row, rowIndex, rows) => {
      const gridRow = document.createElement("div");
      gridRow.className = "grid-container";
      gridRow.id = `row_${rowIndex}`;
      plateauContainer.append(gridRow);
      const columns = row.map(
        (square: string | number, index: number) => "auto"
      );
      gridRow.style.gridTemplateColumns = columns.join(" ");
      const rowLength = rows.length;
      row.forEach((col, colIndex) => {
        if (col !== 1) {
          const gridItem = document.createElement("div");
          gridItem.className = "grid-item";
          gridItem.id = `matrix_${colIndex}_${rowLength - rowIndex - 1}`;
          gridItem.style.width = `${100 / rowLength}%`;
          gridItem.style.padding = `${100 / rowLength}% 0 0 0`;
          gridRow.append(gridItem);
          const gridLayer = document.createElement("div");
          gridLayer.className = "grid-layer";
          gridLayer.id = `${colIndex}_${rowLength - rowIndex - 1}`;
          gridLayer.style.height = `${100}%`;
          gridLayer.style.padding = `${100 / rowLength}% 0 0 0`;
          gridItem.append(gridLayer);
        }
      });
    });
  }
}

export function makePlateau(
  gridSize: string,
  plateauStyle: string
): PlateauLayout | undefined {
  if (gridSize && plateauStyle) {
    const gridInput = `${gridSize}${gridSize}`;
    return newPlateau(gridInput, plateauStyle);
  }
}
