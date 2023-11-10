import { start } from "./modules/mission";

const rectangleStart = start("66", "rectangle", [
  ["Fred", "12N", "LMLMLMLMM"],
  ["Bob", "33E", "MMRMMRMRRM"]
]);

const circleStart = start("5", "circle", [
  ["Fred", "12N", "LMLMLMLMM"],
  ["Bob", "33E", "MMRMMRMRRM"],
  ["Sam", "33E", "MMMMMMMRM"]
]);

const multipleStart = start("5", "circle", [
  ["A", "12N", "LMLMLMLMM"],
  ["B", "33E", "MMRMMRMRRM"],
  ["C", "33E", "MMMMMMMRM"],
  ["D", "12N", "LMLMLMLMM"],
  ["E", "33E", "MMRMMRMRRM"],
  ["F", "33E", "MMMMMMMRM"],
  ["G", "33E", "MMRMMRMRRM"],
  ["H", "33E", "MMMMMMMRM"],
  ["I", "33E", "MMRMMRMRRM"],
  ["J", "33E", "MMMMMMMRM"]
]);

console.log(rectangleStart, circleStart, multipleStart);
const returnedData = rectangleStart;
console.log(
  returnedData.robots.forEach(robot => {
    console.log(robot?.destination);
    robot?.journey.forEach(element => {
      console.log(element);
    });
  })
);
