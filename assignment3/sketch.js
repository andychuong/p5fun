// variables for y coordinate of car 1 and 2
var y1;
var y2;

function setup() {
	createCanvas(windowWidth,windowHeight);
	y1 = windowHeight - (windowHeight/8);
	y2 = windowHeight - (windowHeight/8);
	

}

function draw() {
	print(y1);
	background(100);

	//street part
	fill('black');
	rect(windowWidth/2-300,0,600,windowHeight);

	//white dashes
	fill('white');
	// rect(windowWidth/2-10,0,20,40);
	// rect(windowWidth/2-10,50,20,40);
	// rect(windowWidth/2-10,100,20,40);
	for(var i=0; i < windowHeight; i+= 70){
		rect(windowWidth/2-10,i,20,40);
	}


	//blue car
	fill("blue");
	rect(windowWidth/2 - 125,y1,20,60);
		//print(h);

	//red car
	fill("red");
	rect(windowWidth/2 + 100,y2,20,60);



	//----------> OLD OLD OLD OLD OLD OLD OLD <--------
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
		y1=windowHeight - (windowHeight/8);
		y2=windowHeight - (windowHeight/8);
	}
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}