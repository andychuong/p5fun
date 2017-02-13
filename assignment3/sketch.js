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
	if(keyIsDown(87)){
		y2--;
		//print(y2);
	}
	  

	if (keyIsDown(UP_ARROW)){
		y1--;
	}
}



function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}