//drawing a sun with beautiful animation

noStroke();
// the beautiful blue sky

// the starting size for the sun
var sunSize = 30; 

 // The sun, a little circle on the horizon

var draw = function() {
    //background
    background(82, 222, 240);
    fill(255, 204, 0);
    //sun
    ellipse(200, 298, sunSize, sunSize);
    
    // The land, blocking half of the sun
    fill(76, 168, 67);
    rect(0, 300, 400, 100);
    sunSize += 1 ;
};


//-----------------------------------------------------------------
// eating a tomato 
background(255, 255, 255);

// tomato
noStroke();
fill(224, 90, 90);
ellipse(150, 200, 150, 150);
ellipse(212, 200, 150, 150);

// stem
fill(48, 130, 31);
rect(176, 103, 12, 32); 

// take a bite out of the tomato!

var draw = function() {
     fill(255, 255, 255);
    ellipse(mouseX,mouseY, 60, 60);

     
     
};
//---------------------------------------------------------------
// moon coming , sun going 
var xPos = 0;
var yPos = 0;
var x = 400 ;
var y = 400 ;
var size1 = 400 ;
var size2 = 0 ;

draw = function() {
    //sun 
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, size1, size1);
    
    //moon
    fill(255,255,255);
    ellipse(x,y,size2,size2);
    if (x === 150) {
    xPos ++ ;
    yPos ++ ;
    size1--;
}
else {
    x-- ;
    y-- ;
    xPos ++ ;
    yPos ++ ;
    size1--;
    size2 ++ ;
}
};



