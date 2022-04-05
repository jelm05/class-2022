$(document).ready(function(){

  const doc = $(document);
  const world = $("#world");
  const startGame = $("#startGame");
  const endGame = $("#gameOver");
  // If our world is 400px high, and our ground is 20px... 400-20=380
  const floor = 380;

  let firstPlay = true;
  let gravity = 1;

  // This will keep track of our game progress
  let mainLoop;

  beginGame();

  //////////////// KEEP TRACK OF KEY PRESSES
  let keys = {}
  const LEFT = 37;
  const UP = 38;
  const RIGHT = 39;
  const DOWN = 40;

  // keydown() and keyup() are jQuery methods
  doc.keydown(
    function(event){
      keys[event.which] = true;
      // console.log(keys)
    }
  ).keyup(
    function(event){
      keys[event.which] = false;
      // console.log(keys)
    }
  );
  //////////////// END KEEP TRACK OF KEY PRESSES



  //////////////// CHARACTER
  class Character {
    // 'this' is always is referencing Character

    constructor() {
      // All the starting properties
      // Starting position:
      this.x = 30;
      this.y = 200;
      // Which direction are we going:
      this.vx = 0;
      this.vy = 0;
      // How many times have we been hit:
      this.hits = 0;
    }

    init() {
      // Where our character will begin in our world
      this.div = $('<div>', {
        id: 'char',
        css: {
          left: this.x,
          top: this.y
        }
      }).appendTo(world);

      // Ground is the floor minus the height of our character
      // Right is width of the world minus the width of our character
      this.ground = floor - this.div.height();
      this.right = world.width() - this.div.width();
    }

    reset() {
      // When the player loses, reset the character
    }

    hit() {
      // What happens if our character hits another object
    }

    blink() {
      // Animation for when our character gets hit
    }

    update() {
      // We need to constantly update our position
      let char = this;

      char.x += char.vx;
      char.y += char.vy;
      char.isOnGround = false;

      // GROUND
      if( char.y > char.ground ) {
        char.y = char.ground;
        // When the character is on the ground, they can jump
        char.isOnGround = true;
      }

      // LEFT
      if( char.x < 0 ) {
        char.x = 0;
        char.vx = 0;
      }

      // RIGHT
      if( char.x > char.right ) {
        char.x = char.right;
        char.vx = 0;
      }

      // No top because our character can't jump that high

      // Starting Speeds:
      char.vx *= 0.9;
      char.vy += gravity;

      // Update the characters position, on the front end
      char.div.css({
        top: char.y,
        left: char.x
      });

      char.keyPressCheck();

    }

    keyPressCheck() {
      // If the user presses the right button, move the character
      // This is what sets the speed/direction
      let char = this;

      if( keys[LEFT] ) {
        char.vx -= 2;
      }

      if( keys[RIGHT] ) {
        char.vx += 2;
      }

      if( keys[UP] && char.isOnGround ) {
        // This determines how high the character can jump
        char.vy -= 20;
      }

      if( keys[DOWN] ){
        char.vy += 2;
      }

    }

  }
  //////////////// END CHARACTER



  //////////////// GAME FUNCTIONS
  function beginGame() {
    doc.one("click", function(){
      endGame.hide();

      if( firstPlay ) {
        // This is what actually creates our character
        character = new Character();
        character.init();
        firstPlay = false;
      } else {
        character.reset();
      }
      startGame.hide();

      // Every time we begin a game, we clear everything out
      clearInterval(mainLoop);

      // THIS IS THE BIG ONE, THIS IS WHAT'S RUNNING OUR GAME
      mainLoop = setInterval(runGame, 30);

    });
  }

  function runGame() {
    character.update();
  }

  function gameOver() {

  }

  function count() {

  }
  //////////////// END GAME FUNCTIONS






}); // THIS IS THE END OF OUR CODE, EVERYTHING ABOVE THIS
