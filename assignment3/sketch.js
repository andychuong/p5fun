// variables for y coordinate of car 1 and 2
var y1 = 700;
var y2 = 700;


function setup() {
	createCanvas(windowWidth,windowHeight);
	

}

function draw() {

	background(100);

	fill("blue");
	rect(windowWidth/2 - 50,y1,30,100);
	print(y2);

	fill("red");
	rect(windowWidth/2 + 50,y2,30,100);

	// key code for w is 87
	// http://keycode.info/

	keyPressed();

	/*
	if(keyIsDown(87)){
		y2--;
		//print(y2);
	}
	  

	if (keyIsDown(UP_ARROW)){
		y1--;
	}
	*/
}

function keyPressed() {
  if (keyCode == UP_ARROW){//up arrow
	    y1--;
	}
	else if(keyCode == 87){//w
		y2--;
	}
	else if(keyCode == 27){//escape
		y1=700;
		y2=700;
	}
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}