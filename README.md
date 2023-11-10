# Mars-rover

## Introduction

This Mars Rover project is based on an idea of a Robot Rover nvvigating the surface of Mars to take photos to send back to Earth. As these special Robots are very expensive, it is important they do not crash into each other or into objects or barriers.

## Features of the Project

The project is based on the development of a navigation system which controls the movement of the Rover. The current version 1.0 is in an early development stage as a proof of concept. The aim has been to develop a navigation system that is based on the use of dynamic variables to process user input. This enables flexible for development and extensibility as the system is not dependent on the processing of hard coded values of user input directions.

## Technologies and concepts

The project has been written in JavaScript with TypeScript. The design maintains a separation of concerns between the user interface and the functionality. Files can be imported from the user interface and functions called to use its features. Current features enable an input string to retrieve a plateau and a set of moves.
A plateau is a multidimensional array of zeros.
[
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ]
]
It updates with the initial of the robot when the journey completes as follows:
[
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 'F', 0, 0 ],
[ 0, 0, 'S', 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 'B', 0, 0, 0, 0 ]
]
{
vector: [ 0, 0 ],
rotate: -90,
direction: 'W',
angle: 180,
coordinates: [ 1, 2 ]
}
The vectors provide a calculated move along the user defined co-ordinate grid, based on an input string which can consist of M for move, R for turn left and L for turn right. The vectors represent an x move and a y move and the co-ordinates represent the location of the rover after that move. The direction represents a compass value for where the robot is facing, which is also represented as an angle in the form of its position in a trigonometric unit circle. In each move, the rover either rotates or moves according to the vector. The rotation represents a positive clockwise or negative anti-clockwise value.

👉 ## How to use

Input in the form of a grid size and an array of robot data can be called with the start() function as demonstrated in the index.ts file as follows:
start("55", [
["Fred", "12N", "LMLMLMLMM"],
["Bob", "33E", "MMRMMRMRRM"],
["Sam", "33E", "MMMMMMMRM"]
]);
The start string of two in the above example defines a pair of co-ordinates for the x and y axes. In this case above, 55 would describe a 6 x 6 square with x and y valuesbetween 0 and 6. There is also the option under development of inputting a single integer to define the radius of a circle. Each rover in the array is provided a name and a string with a set of starting coordinates and a compass point for the direction they are facing in the first 2 items of the array. The 3rd element is a compass point to define the initial direction each rover is facing.
The return value is of this type:
{ plateau: Array<Array<number | string>>,
robots: Array<{ journey: Array<Move>; destination: string}> };
The Move in the journey array is of this type:
Move = {
vector: Vector;
rotate: number | undefined;
direction: string;
angle: number | undefined;
coordinates: PlateauCoordinates;
};

💡 ## Potential uses

The vector and rotation could be used to create CSS transitions and rotations to animate the robot.

## Future Plans

A plan for ongoing development is for individual move requests to be made by a user, which would return a single move object which could be consumed by the application. The functionality for this has been built into the system, with the potential to store and retrieve each rover move requested by the user, with the next move based on the previous move and location and a new user request. This would enable robots to take turns in their moves as the current location of all robots could be accessed at each move request.
