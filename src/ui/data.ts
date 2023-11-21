import { RobotData } from "../types/mission.type";
import { Move } from "../types/navigator.type";

export function showOutput(
  output: RobotData | undefined,
  name: string,
  startPosition: string
): string {
  let outputText = "";
  if (output && output?.destination && output.journey) {
    outputText += `Hello again, I am ${output.name} and I have moved ${output.move} and arrived at ${output.destination}`;
    outputText += "I moved:";
    output.journey?.forEach((robotMove: Move) => {
      const { vector, rotate, direction, angle, coordinates } = robotMove;
      outputText += `Vector: ${vector}, Rotate: ${rotate}, Direction: ${direction}, Angle: ${angle}, Coordinates: ${coordinates}`;
    });
  } else {
    outputText += `Hello again, I am ${name} and I was unable to make my journey as the start position ${startPosition} was not available.`;
  }
  return outputText;
}
/*
function createInfo() {
    const htmlcontent = rectangleDemo.inputs.map(robot => {
      const [name, start, moveInput] = robot;
      const robotId = makeRobot(name, start);
      if (robotId) {
        if (rectangleDemo.moves === "animate") {
          return showOutput(moveRobot(moveInput, robotId), name, start);
        } else {
          return moveInput.split("").forEach(move => {
            const output = moveRobot(move, robotId);
            if (output) {
              const { direction, journey } = output;
              return showOutput(output, name, start);
            }
          });
        }
      }
    });
    return htmlcontent;
  }
  */

/*
function doRobotStuff() {
  const myRobotStuff: HTMLElement | null =
    document.getElementById("robot-data");
  //const content = htmlcontent ? htmlcontent : "no content found";
  const content = createMoves();
  if (content[0]) {
    console.log(content[0]);
    if (myRobotStuff) {
      myRobotStuff.innerHTML = content[0];
    }
  }
}
*/
