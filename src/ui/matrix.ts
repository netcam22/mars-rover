import { PlateauLayout } from "../types/plateau.type";

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
    let width = 1,
      height = 1;
    plateau.forEach((row, rowIndex, rows) => {
      //width = perspectiveWidth(width, height);
      //height = perspectiveHeight(width);
      const gridRow = document.createElement("div");
      gridRow.className = "grid-container";
      gridRow.id = `row_${rowIndex}}`;
      plateauContainer.prepend(gridRow);
      const columns = row.map((square: string | number) => "auto");
      gridRow.style.gridTemplateColumns = columns.join(" ");
      row.forEach((col, colIndex) => {
        if (col !== 1) {
          let gridItem = document.createElement("div");
          gridItem.className = "grid-item";
          gridItem.classList.add("grid-circle-faded");
          gridItem.id = `matrix_${colIndex}_${rowIndex}`;
          gridItem.style.width = `${(100 * width) / rows.length}%`;
          gridItem.style.padding = `${(100 * height) / rows.length}% 0 0 0`;
          gridRow.appendChild(gridItem);
          let gridLayer = document.createElement("div");
          gridLayer.className = "grid-layer";
          gridLayer.id = `${colIndex}_${rowIndex}`;
          gridLayer.style.height = `${100 * height}%`;
          gridLayer.style.padding = `${(100 * height) / rows.length}% 0 0 0`;
          gridItem.appendChild(gridLayer);
        }
      });
    });
  }
}

function perspectiveWidth(width: number, height: number): number {
  const X = 3;
  const DEG = Math.PI / 180;
  const newWidth =
    (Math.sin((45 - X) * DEG) *
      Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2))) /
    Math.sin((X + 90) * DEG);
  return newWidth;
}

function perspectiveHeight(newWidth: number): number {
  const X = 3;
  const DEG = Math.PI / 180;
  const newHeight =
    (newWidth * Math.sin((90 - X) * DEG) * Math.sin(45 * DEG)) /
    Math.sin((X + 45) * DEG);
  return newHeight;
}
