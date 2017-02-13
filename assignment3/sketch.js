// variables for y coordinate of car 1 and 2
var y1 = 10;
var y2 = 10;


function setup() {
	createCanvas(windowWidth,windowHeight);
	

}

function draw() {

	background(100);

fill("blue");
rect(50,y2,110,120);
print(y2);

fill("red");
rect(0,y2,0,0);

if(keyIsDown(UP_ARROW)){
		y2++;
		print(y2);
	}
  
}

function moveC1(){
	if (keyIsDown(UP_ARROW)){

	}
}

function moveC2(){
	if(keyIsDown(UP_ARROW)){
		y2++;
		print(y2);
	}
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}