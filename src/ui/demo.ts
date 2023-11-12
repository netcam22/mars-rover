import { makePlateau, makeRobot, moveRobot } from "..";
import { RobotData } from "../types/mission.type";
import { Move } from "../types/navigator.type";
export type InputData = {
  gridSize: string;
  gridStyle: string;
  inputs: Array<Array<string>>;
};

const rectangleDemo: InputData = {
  gridSize: "66",
  gridStyle: "rectangle",
  inputs: [
    ["Fred", "12N", "LMLMLMLMM"],
    ["Bob", "33E", "MMRMMRMRRM"]
  ]
};

const kiteDemo = {
  gridSize: "5",
  gridStyle: "kite",
  inputs: [
    ["Fred", "12N", "LMLMLMLMM"],
    ["Bob", "33E", "MMRMMRMRRM"],
    ["Sam", "33E", "MMMMMMMRM"]
  ]
};

const multipleDemo = {
  gridSize: "5",
  gridStyle: "kite",
  inputs: [
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
  ]
};

function start(demoData: InputData): Array<RobotData | undefined> {
  const { gridSize, gridStyle, inputs } = demoData;
  console.log(
    "Here is the plateau to navigate:",
    makePlateau(gridSize, gridStyle)
  );
  const outputs = inputs.map((input: Array<string>) => {
    const [name, start, moveInput] = input;
    console.log("Instructions:", input[2]);
    console.log(
      `Hello, I am a Rover called ${name} and I plan to start at direction ${start[0]} at map co-ordinates (${start[1]}, ${start[2]})`
    );
    const robotMade = makeRobot(name, start);
    if (robotMade) {
      const output = moveRobot(moveInput);
      if (output && output?.destination && output.journey) {
        console.log(
          `Hello again, I am ${output.name} and I have moved ${output.move} and arrived at ${output.destination}`
        );
        console.log(output.layout);
        output.journey?.forEach((robotMove: Move) => {
          const { vector, rotate, direction, angle, coordinates } = robotMove;
          console.log(
            `Vector: ${vector}, Rotate: ${rotate}, Direction: ${direction}, Angle: ${angle}, Coordinates: ${coordinates}`
          );
        });
      } else {
        console.log(
          `Hello again, I am ${name} and I was unable to make my journey as the start position ${start} was occupied.`
        );
      }
      return output;
    }
  });
  return outputs;
}

start(rectangleDemo);
start(kiteDemo);
start(multipleDemo);
