/*
function makeGrid(plateau) {
  const gridContainer = document.getElementById("mission");
  if (gridContainer) {
    plateau.forEach((row, rowIndex) =>
      row.map((col, colIndex) => {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.id = `${rowIndex * colIndex}`;
        gridContainer.appendChild(gridItem);
      })
    );
  }
}
*/
const utils = require("../public/static/bundle/script.js");
document.getElementById("plateau-form")?.addEventListener("click", () => {
  const plateauShape = document.getElementById("plateau-shape").value;
  const plateauSize = document.getElementById("plateau-size").value;
  document.getElementById("demo").innerHTML = `${plateauShape} ${plateauSize}`;

  const mission = document.getElementById("mission");
  const layout = utils.makePlateau(plateauSize, plateauShape);
  console.log(layout);
  /*
  if (layout) {
    console.log(layout);
    if (mission) {
      makeGrid(mission);
    }
  }
  */
});
