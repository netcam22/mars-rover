# 🚀 👾 Mars-rover 👾 🚀

by Annette Le Sage
version 1.0 (updated 10/11/23)

## 🚀 Introduction 🚀

This Mars Rover project is based on an idea of a Robot Rover navigating the surface of Mars to take photos to send back to Earth. As these special Robots are very expensive, it is important they do not crash into each other or into objects or barriers.

## 🚀 Features of the Project 🚀

The project is based on the development of a navigation system which controls the movement of the robot. The current version 1.0 is in an early development stage as a proof of concept. The aim has been to develop a navigation system that is based on the use of dynamic variables to process user input. This enables flexibility for development and extensibility as the system is not dependent on the processing of hard coded values of user input directions.

## 🚀 Technologies and concepts 🚀

The project has been written in JavaScript with TypeScript. The design maintains a separation of concerns between the user interface and the functionality. Files can be consumed from a user interface and functions called to use its features. Current features enable an input string to retrieve a plateau and a set of moves.

## 👾 Data and Examples 👾

A plateau is a two dimensional array of zeros to represent either a rectangle, a kite or a circle. The rectangle and kite matrix structures are arrays of zeros which show empty spaces. The circle also includes ones for unavailable spaces.
[
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0 ]
]
[
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
[
[ 1, 1, 0, 1, 1 ],
[ 1, 0, 0, 0, 1 ],
[ 0, 0, 0, 0, 0 ],
[ 1, 0, 0, 0, 1 ],
[ 1, 1, 0, 1, 1 ]
]
It updates with the initials of the robot input when the journey completes as follows:
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
[
[ 1, 1, 0, 1, 1 ],
[ 1, 0, 0, 'H', 1 ],
[ 'A', 'J', 'C', 0, 'B' ],
[ 1, 0, 0, 0, 1 ],
[ 1, 1, 'E', 1, 1 ]
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

## 👾 The Maths 👾

The functionality is based on the angle values in a trigonometic unit circle and the corresponding sin and cos values at corresponding points. These cos and sin values are used to create a vector made up of an x coordinate which moves in the direction of cos of the angle and a y coordinate that moves in the direction of sin of the angle.

A value of an angle is obtained through a compass point, so at each compass point, a move is (cos(angle), sin(angle)) This is illustrated as follows in relation to a trignometric unit circle:

East is at angle 0: cos 0 = 1, sin 0 = 0, so facing direction E a rover moves along a vector (1, 0).

North is at angle 90: cos 90 = 0, sin 90 = 1, so facing direction N a rover moves along a vector (0, 1).

West is at angle 180: cos 180 = -1, sin 180 = 0, so facing direction W a rover moves along a vector (-1, 0).

South is at angle 270: cos 270 = 0, sin 270 = -1, so facing direction S a rover moves along a vector (0, -1).

The values of left and right are represented by angles 90 and -90 as follows:
L is represented by 90 which is an anticlockwise move around the trigonomteric circle.
R is represented by -90 which is an anticlockwise move around the trigonomteric circle.

These L and R values rotate the robot, returning a new compass point based on a calculation of the angle at a given compass point plus the rotation. Any angles outside the range of 0 to 360 and recalculated since all angles outside this have an angle inside the range with the same cos and sin values.

The circle matric is created as a rectangle and then is updated using an inequality based on the equation of the area of a circle, based on the centre of the circle being at point (radius, radius). The equation used is as follows:
(x - radius)^2 + (y - radius)^2 <= (radius)^2.
Any coordinate positions outside these values are set as 1 rather than 0 and are consequently blocked from use by the robot, which only has access to coordinates with a value of 0.

## 👉 How to use

Input in the form of a grid size and an array of robot data can be called with the start() function as demonstrated in the ui/demo.ts file. The demo can be run as npm run demo, as defined in the package.json file.

Input data is structured as follows:

gridSize: "66"
gridStyle: "rectangle"
name: "Fred"
start: "12N"
move: "LMLMLMLMM"

This data can then be used in the functions in index.ts as follows:
makePlateau(gridSize, gridStyle);
makeRobot(name, start);
moveRobot(move);

The start strings in the above examples define a pair of co-ordinates for the x and y axes for a rectangle, or a single radius size for a circle. In this case above, 66 describes a 6 x 6 unit rectangle. Each robot in the array is provided a robot name, a choice of rectangle, circle or kite for the plateau shape and a string comprising a set of starting coordinates and a compass point for the direction the robot is initially facing.

The plateau is returned as a matrix in the form of a 2 dimensional array filled with values of 0.

Each rover finishes its journey before the next one starts. So If the space requested is occupied from another robot finishing there, it will not be permitted to start and that element will return as undefined. The journey will also be diverted if there is a robot that has completed its journey on a coordinate point along the journey. In this case, the move will be a rotation of 180 degrees, as will be the case if a robot reaches a plateau boundary.

The return value is structured as follows:
export type RobotData = {
name: string;
position: PlateauCoordinates;
direction: string;
move: string;
destination: string | undefined;
layout: PlateauLayout;
journey: Array<Move> | undefined;
};

The plateau is a 2 dimensional array as follows:
{ plateau: Array<Array<number | string>>

The Move in the journey array structured as follows:
Move = {
vector: Vector;
rotate: number | undefined;
direction: string;
angle: number | undefined;
coordinates: PlateauCoordinates;
};

The plateau and robot data returned are saved in arrays in the mission and can be accessed with the respective functions getPlateau(thisId) and getRobot(thisId).

## 💡 Potential uses

The vector and rotation could be used to create CSS transitions and rotations or a Javascript designed user interface which consumes the data to animate the robot.

## 💡 Future Plans

The use of a matrix to represent the grid enables potential development of various shapes of plateaus. An option could be developed for the user to input a matrix array to be used for the plateau. The use of ones for unavailable spaces allows option for obstacles or plateaus with internal parts than cannot be navigated.

A plan for ongoing development is for single move requests to be made by a user, which would return a single move object which could be consumed by the application. The functionality for this has been built into the system, with the potential to store and retrieve each rover move requested by the user, with the next move based on the previous move and location. This would enable robots to take turns in their moves as the current location of all robots could be accessed at each move request.

There is potential to develop the feature of angle input since the trigonomteric calculations allow for the possibility of vectors that are not of single unit values and represent diagonal moves. Consideration might be needed for the application consuming the features to scale up the unit size of 1 to enable rounding to integers for the x and y vector values.

Since the moving object is defined as a robot and no specific location is defined, there is potential to navigate any style of robot on any style of surface.
