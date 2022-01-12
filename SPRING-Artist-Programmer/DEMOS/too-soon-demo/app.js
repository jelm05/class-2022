// We don't want to execute JS code before the HTML is loaded 
$(document).ready(function(){
  
  $("div.box").click(function() {
    
    console.log("You clicked the red box!")
    
    $(this).css({
        backgroundColor: "blue"
    });
    
    console.log("Background is now blue!")
    
    
  });
  
});