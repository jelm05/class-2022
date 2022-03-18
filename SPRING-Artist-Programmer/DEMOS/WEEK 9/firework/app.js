
// Get our canvas and set its context
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Set the width and height of our canvas to be full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the background color, and fill in the background
// Think of this like gessoing a canvas
ctx.fillStyle = "black";
// args X, Y, Width, Height
ctx.fillRect(0, 0, canvas.width, canvas.height);


// Capture mouse movement
let mouseX = 0;
let mouseY = 0;
$(document).mousemove(function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
  // console.log("x", mouseX);
  // console.log("y", mouseY);
});


// Store our particles here:
let particles = {};
let particleId = 1;
const numberOfParticles = 10;



// This is like a cookie cutter
class Particle {

  constructor() {
    // Anthing within this function, is attached to every particle class instance
    // THIS is a reference to the particular particle, that was made, whenver it was made
    // via this class
    this.x = mouseX;
    this.y = mouseY;
    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;
    this.size = 1;

    // Change the 100 in degrees to adjust hue
    let degrees = parseInt( Math.random() * 150 );
    this.color = `hsl( ${degrees}, 100%, 50%)`;

    this.life = 0;
    this.death = 20 + Math.random() * 300;

    // Increment the ID, and use the ID as an index to
    // store the particle in our particles object
    particleId++;
    particles[particleId] = this;
    this.id = particleId;

  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.size += 0.1;

    this.vx *= 0.58;
    this.vy *= 0.54;


    this.life++;
    if( this.life > this.death) {
      delete particles[this.id];
    }

    ctx.fillStyle = this.color;
    ctx.beginPath();
    // args: arc(X, Y, radius, startAngle, endAngle, clockwise/counterclock )
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();

  }

}

setInterval(function(){
  // This will generate a particle according to our variable above
  for( var i = 0; i < numberOfParticles; i++ ) {
    new Particle();
  }

  // This makes the particles fade away by covering over
  // previously drawn particles
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for( var i in particles ) {
    particles[i].draw();
  }

}, 30);
