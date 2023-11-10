# Mars-rover

by Annette Le Sage
version 1.0 (updated 10/11/23)

## Introduction

This Mars Rover project is based on an idea of a Robot Rover navigating the surface of Mars to take photos to send back to Earth. As these special Robots are very expensive, it is important they do not crash into each other or into objects or barriers.

## Features of the Project

The project is based on the development of a navigation system which controls the movement of the Rover. The current version 1.0 is in an early development stage as a proof of concept. The aim has been to develop a navigation system that is based on the use of dynamic variables to process user input. This enables flexibility for development and extensibility as the system is not dependent on the processing of hard coded values of user input directions.

## Technologies and concepts

The project has been written in JavaScript with TypeScript. The design maintains a separation of concerns between the user interface and the functionality. Files can be imported from the user interface and functions called to use its features. Current features enable an input string to retrieve a plateau and a set of moves.

## Examples

A plateau is a multidimensional array of zeros to represent either a rectangle or a circle.
[
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ]
]
[ 0 ],
[ 0, 0 ],
[ 0, 0, 0 ],
[ 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0 ],
[ 0, 0, 0 ],
[ 0, 0 ],
[ 0 ]
]
It updates with the initials of the robots input when the journey completes as follows:
[
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 'F', 0, 0 ],
[ 0, 0, 'S', 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 'B', 0, 0, 0, 0 ]
]
[
[ 0 ],
[ 0, 0 ],
[ 0, 0, 0 ],
[ 0, 0, 'B', 0 ],
[ 0, 0, 0, 0, 0 ],
[ 0, 'F', 0, 0 ],
[ 0, 0, 'S' ],
[ 0, 0 ],
[ 0 ]
]
An array of moves is returned that can be consumed by the user. An object as in each of this exmaple of 3 consecutive moves.
{
vector: [ 0, 1 ],
rotate: 0,
direction: 'N',
angle: 90,
coordinates: [ 0, 1 ]
}
In the first move above, the rover is facing north, so the vector will move the rover in a positive direction along the y axis, represented by the y value of 1 in the vector. In this case, the rover will have started at (0,0) and has moved to (0,1) by the vector (0,1). The 90 represents the value in degrees in a trigonometic circle for direction N. Rotate is represented by 0 as there is no rotation in this move.
{
vector: [ 0, 0 ],
rotate: 90,
direction: 'E',
angle: 0,
coordinates: [ 0, 1 ]
}
In the second move above, the rover has rotated 90 degrees clockwise to direction east so there is no movement by a vector and the coordinates remain the same. The 0 represents the value in degrees in a trigonometic circle for direction E.
{
vector: [ 1, 0 ],
rotate: 0,
direction: 'E',
angle: 0,
coordinates: [ 1, 1 ]
}
In the third move above, the rover is now facing east following the previous move, so the vector will move the rover in a positive direction along the x axis, represented by the x value of 1 in the vector. The 0 represents the value in degrees in a trigonometic circle for direction E. Rotate is represented by 0 as there is no rotation in this move.

This illustrates how the vectors provide a calculated move along the user defined co-ordinate grid, based on the input string which can consist of M for move, R for turn left and L for turn right. The vectors represent an x move and a y move and the co-ordinates represent the location of the rover after that move. The direction represents a compass value to indicate where the robot is facing, which is also represented as an angle in the form of its position in a trigonometric unit circle. In each move, the rover either rotates or moves according to the vector. The rotation represents a positive clockwise or negative anti-clockwise value.

👉 ## How to use

Input in the form of a grid size and an array of robot data can be called with the start() function as demonstrated in the index.ts file as follows:
start("59", "rectangle", [
["Fred", "12N", "LMLMLMLMM"],
["Bob", "33E", "MMRMMRMRRM"],
["Sam", "33E", "MMMMMMMRM"]
]);

start("5", "circle", [
["Fred", "12N", "LMLMLMLMM"],
["Bob", "33E", "MMRMMRMRRM"],
["Sam", "33E", "MMMMMMMRM"]
]);
The start strings in the above examples defines a pair of co-ordinates for the x and y axes for a rectangle, or a single radius size for a circle. In this case above, 55 describes a 5 x 9 unit rectangle and 5 describes a circle with radius unit 5. Each rover in the array is provided a robot name, a choice of circle or rectangle and a string with a set of starting coordinates and a compass point for the direction they are facing.

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

The vector and rotation could be used to create CSS transitions and rotations or a Javascript designed user interface which consumes the data to animate the robot.

## Future Plans

A plan for ongoing development is for individual move requests to be made by a user, which would return a single move object which could be consumed by the application. The functionality for this has been built into the system, with the potential to store and retrieve each rover move requested by the user, with the next move based on the previous move and location. This would enable robots to take turns in their moves as the current location of all robots could be accessed at each move request.

There is potential to develop the feature of angle input since the trigonomteric calculations allow for the possibility of vectors that are not of single unit values and represent diagonal moves. Consideration might be needed to scale up the current unit size of 1 to enable rounding to integers for the x and y vector values.

The use of a matrix to represent the grid enables potential development of various shapes of plateaus.
