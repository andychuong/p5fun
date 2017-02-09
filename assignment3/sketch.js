function setup() {
	createCanvas(windowWidth,windowHeight);
	background(100);

}

function draw() {

rect(0,0,0,0);
  
}

function moveC(){
	if (keyIsDown(UP_ARROW))
    y-=5;
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}