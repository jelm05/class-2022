
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// We want our canvas to be the full width and height of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let particleId = 0;
const numberOfParticles = 10;
// Store our particles here
particles = {};

class Particle {
    // The constructor gets run every time a particle is created
    constructor() {
      particleId += 1;
      this.id = particleId;
      // All our particles will start in the middle of the screen
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;

      // Our particles need a random direction
      this.velX = Math.random() * 10 - 5;
      this.velY = Math.random() * 10 - 5;

      // We'll use these to dictate when to delete old particles
      this.life = 0;
      this.death = 100;

      // Give me a random number between 0 and 360
      let degrees = parseInt( Math.random() * 360 );
      this.color = "hsl(" + degrees + ", 80%, 50%)";

      // Store the particle, in our particles object, with an index
      // equivalent to the new particles ID
      particles[particleId] = this;
    }

    // This is a method on the particle class
    draw() {

      this.life++;
      if( this.life > this.death) {
        delete particles[this.id];
      }

      this.x += this.velX;
      this.y += this.velY;

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
      ctx.fill();

      if( this.y > canvas.height) {
        this.velY *= -1;
        this.velX *= 0.2;
      }

      if(this.x > canvas.width) {
        this.velX *= -1;
        this.velY *= 0.2;
      }

      if(this.y < 10) {
        this.velY *= -1;
        this.velX *= 0.2;
      }

      if(this.x < 10) {
        this.velX *= -1;
        this.velY *= 0.2;
      }


    }
}

// new Particle();
// console.log( particles[1] );
// particles[1].draw();

function createParticles(){

  for( let count = 0; count <= numberOfParticles; count++ ) {
    // console.log("Made a particle:", particles[count]);
    new Particle();
  }

}

function drawParticles() {
  createParticles();

  // Cover the entire canvas with 10% black to slowly hide old particles
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // This is the for loop that sets our particles in motion
  // because we invoke the draw function
  // Particles = our object that's storing all of our particles, line 15
  for(let particle in particles) {
    // console.log("particle", particle)
    particles[particle].draw();
  }

}

setInterval( function(){
  drawParticles()
}, 30);
