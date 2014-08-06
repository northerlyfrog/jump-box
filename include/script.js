$(document).ready(function(){
    
    // Click the red box to make it move
    $('#red_box').click(function(){

    	move_div();	
    });
    
    
});

// Create a Random x,y position.
function make_new_loc(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var height = $(window).height() - 100;
    var width = $(window).width() - 100;
    
    var new_height = Math.floor(Math.random() * height);
    var new_width = Math.floor(Math.random() * width);
    
    return [new_height,new_width];    
    
}

// Move the box to a new position.
function move_div(){
    var new_pos = make_new_loc();
    $('#red_box').animate({ top: new_pos[0], left: new_pos[1] }, 0, function(){
              
    });
    
};