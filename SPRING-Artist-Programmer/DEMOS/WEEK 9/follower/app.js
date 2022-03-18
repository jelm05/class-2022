
// Iteratively generate divs with a class of ball
// We need to update their position based on mouse position
// which also means, we need to capture mouse position
// Then, we need to loop through all the divs, and sequentially
 // update their position based on the leader's position

// This is a jQuery technique to prevent load conflicts
$(document).ready(function(){

  // Constantly overwriting these variables
  let mouseX = 0;
  let mouseY = 0;

  // Track the mouse:
  $(document).mousemove(function(event){
    // The event in this case, is the mouse moving..
    // console.log("event", event);
    mouseX = event.pageX;
    mouseY = event.pageY;
  // This allows support for tablets and mobile devices
  }).bind("touchmove", function(event){
    event.preventDefault();
    let touch = event.originalEvent.touches;
    mouseX = touch[0].pageX;
    mouseY = touch[0].pageY;
  });

  let points = [];
  let pointCount = 50;

  for( let count = 0; count <= pointCount; count++ ) {
    // Create the ball as a jQuery object
    let point = $("<div class='ball'>");
    // Add the ball to the front end document
    point.appendTo("body");
    // Give a starting X, Y position
    point.x = 200;
    point.y = 200;
    // Keep track of the ball we just made
    points.push(point);
  }

  // console.log(points)

  setInterval(function(){
    let leader = points[0];
    // console.log(leader)
    leader.x += (mouseX - leader.x) / 4;
    leader.y += (mouseY - leader.y) / 4;
    // leader.x = mouseX;
    leader.css({
      webkitTransform: `translate( ${leader.x}px, ${leader.y}px)`
    });

    for( let count = 1; count < points.length; count++ ) {
      leader = points[count];
      let follower = points[count-1];

      leader.x += (follower.x - leader.x) / 4;
      leader.y += (follower.y - leader.y) /4;

      leader.css({
        webkitTransform: `translate( ${leader.x}px, ${leader.y}px)`
      });
    }


  }, 30);



});
// These closing curly brackets and parans should always be on the bottom
