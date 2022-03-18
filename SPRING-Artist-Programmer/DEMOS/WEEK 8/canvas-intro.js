
// Get the canvas by its ID, and then give it the context in which
// we want to draw in
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

console.log("canvas", canvas)
console.log("ctx", ctx)

ctx.fillStyle = "black";
// x, y, width, height
// This draws a square
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Make a red square
ctx.fillStyle = "red";
// x, y, width, height
ctx.fillRect(200, 200, 50, 50);

// Draw a line
// x, y
ctx.strokeStyle = "blue";
// starting point
ctx.moveTo(20, 20);
// ending point
ctx.lineTo(400, 400);
// this actually draws the line
ctx.stroke();

// Draw a circle
ctx.beginPath();
// x, y, radius, startAngle, endingAngle, clockwise or counter clockwise
ctx.arc(300, 500, 100, 0, 2 * Math.PI, false);
ctx.stroke();
