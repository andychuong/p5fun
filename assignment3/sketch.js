

// variables for y coordinate of car 1 and 2
var y1;
var y2;
var gameOver = false;
var blueWin = false;
var greenWin = false;
var fontHeaders;
var fontOther;

function preload() {
   fontHeaders = loadFont("assets/Bahiana-Regular.ttf");
   fontOther = loadFont("assets/oswald.ttf");

}

function setup() {
	createCanvas(windowWidth,windowHeight);
	y1 = windowHeight - (windowHeight/8);
	y2 = windowHeight - (windowHeight/8);
	

}

function draw() {
	//print(y1);
	background(100);

	//street part
	fill('black');
	rect(windowWidth/2-200,0,400,windowHeight);


	//white dashes
	fill(244, 232, 66);
	// rect(windowWidth/2-10,0,20,40);
	// rect(windowWidth/2-10,50,20,40);
	// rect(windowWidth/2-10,100,20,40);
	for(var i=0; i < windowHeight; i+= 70){
		rect(windowWidth/2-10,i,20,40);
	}

	//finish line
	fill(244, 66, 66);
	rect(windowWidth/2-200,49,400,10);

	//start line
	fill(186);
	rect(windowWidth/2-200,windowHeight-windowHeight/7,400,10);
	//print(windowHeight);

	//text
	fill(200);
	textSize(80);
	textFont(fontHeaders);
	text("P5.js Racing!", windowWidth/2-500, 70);

	textSize(80);
	text("Instructions",windowWidth/2+210,70);

	textSize(20);
	textFont(fontOther);
	text("- To make the blue car move, press '1' ",windowWidth/2+210,110 );
	text("- To make the green car move, press 'up arrow' ",windowWidth/2+210,140 );
	text("- Pressing the button to make your car move, stops the other car",windowWidth/2+210,170 );
	text("- First one to cross the red line wins!",windowWidth/2+210,200 );
	text("- Press 'Esc' to reset the game",windowWidth/2+210,230 );

	/*
	fill(66, 185, 244);
	textSize(60);
	text("BLUE WINS!",windowWidth/2-450,210 );
	*/

	//blue car
	fill(66, 185, 244);
	rect(windowWidth/2 - 115,y1,30,55);
		//print(h);

	//green car
	fill(63, 244, 90);
	rect(windowWidth/2 + 95,y2,30,60);

	//Movement

	if(keyCode == 49){//1
		if(y1>= 60){
	    	y1--;//blue
		}
	}
	 if (keyCode == UP_ARROW){//up arrow
  		if(y2>= 60){
	    	y2--;//green
		}
	}
	
	if(keyCode == 27){//escape
		y1=windowHeight - (windowHeight/8);
		y2=windowHeight - (windowHeight/8);
		blueWin = false;
		greenWin = false
		gameOver = false;

	}

	//Win Check
	if(y1 < 60 && !gameOver){
		blueWin = true;
		gameOver = true;
		
	}
	if(blueWin){
		fill(66, 185, 244);
		textSize(60);
		textFont(fontHeaders);
		text("BLUE WINS!",windowWidth/2-450,210 );
	}
	if(y2 < 60 && !gameOver){
		greenWin = true;
		gameOver = true;
	}
	if(greenWin){
		fill(63, 244, 90);
		textSize(60);
		textFont(fontHeaders);
		text("GREEN WINS!",windowWidth/2-450,210 );
	}
	print(y2);
	print(gameOver);




	//----------> OLD OLD OLD OLD OLD OLD OLD <--------
	// key code for w is 87
	// http://keycode.info/

	//keyPressed();

	/*
	if(keyIsDown(87)){
		y2--;
		//print(y2);
	}
	  wwwwwwww

	if (keyIsDown(UP_ARROW)){
		y1--;
	}
	*/

	
}
/*
function keyPressed() {
  if (keyCode == UP_ARROW){//up arrow
  		if(y2>= 60){
	    	y2--;
		}
	}
	if(keyCode == 87){//w
		if(y1>= 60){
	    	y1--;
		}
	}
	else if(keyCode == 27){//escape
		y1=windowHeight - (windowHeight/8);
		y2=windowHeight - (windowHeight/8);
	}
}
*/

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}