import { start } from "./modules/mission";

const rectangleStart = start("59", "rectangle", [
  ["Fred", "12N", "LMLMLMLMM"],
  ["Bob", "33E", "MMRMMRMRRM"],
  ["Sam", "33E", "MMMMMMMRM"]
]);

const circleStart = start("5", "circle", [
  ["Fred", "12N", "LMLMLMLMM"],
  ["Bob", "33E", "MMRMMRMRRM"],
  ["Sam", "33E", "MMMMMMMRM"]
]);

console.log(rectangleStart, circleStart);
