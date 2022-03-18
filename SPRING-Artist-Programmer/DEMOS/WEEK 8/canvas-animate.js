
// Get the canvas by its ID, and then give it the context in which
// we want to draw in
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
// x, y, width, height
// This draws a square
ctx.fillRect(0, 0, canvas.width, canvas.height);

// We're treating these, like our starting points
let posY = 50;
let posX = 50;

setInterval(function() {
  // console.log("Interval executed");

  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // posY = posY + 5;
  // posY += 5;

  console.log(posX)

  if (posX >= canvas.width) {
    posX -= 105;
  } else {
    posX += 5;
  }

  // Draw a red square
  ctx.fillStyle = "red";
  ctx.fillRect(posX, posY, 50, 50);

}, 30);
