let width = 1000;
let height = 1000;
let moonDim = 250;
let shadowDim = 250;
let phase = 0;
let start = 0;
let delta = 500;

function setup() {
  createCanvas(width, height);
  start = millis();
  phase = 0;
}

function draw() {
	if (millis() > start + delta) {
		drawMoon(phase);
		start = millis();
		phase+=1;
		if (phase >= 30) {
			phase = 0;
		}
		console.log(phase);
	}
}

function drawMoon(p) {
	background(0);
	fill(255);

	translate(width/2, height/2);
	stroke(255);
	strokeWeight(10);

	circle(0, 0, moonDim);

	let r = (moonDim/2) + 5;
	let add = 0; 
	let x1, x2, x3, x4, y1, y2, y3, y4;

	strokeWeight(0);
	noStroke();
	fill(0);

	if (p < 16) {
		add = r * p/7;
		rect(-width/2, -height/2, width/2, height);

		if (p >=8) {
			fill(255);
		}

		x1 = -0;		// lower left
		y1 = r ;
		x2 = 0;			// upper left
		y2 = -r ;
		x3 = r - add ;	//lower right
		y3 = r ;
		x4 = r - add ;	// upper right
		y4 = -r ; 

	} else if (p >= 16 ) {
		add = r * (p-16)/7;
		rect(0, -width/2, width/2, height);

		if (p < 24) {
			fill(255); 
		} 

		x1 = 0;			// lower left
		y1 = r ;
		x2 = 0;			// upper left
		y2 = -r ;
		x3 = r - add;	//lower right
		y3 = r ;
		x4 = r - add;	// upper right
		y4 = -r ; 
	} 



	beginShape();
		vertex(x1, y1);
		bezierVertex(x3, y3, x4, y4, x2, y2);
	endShape(CLOSE);

	stroke(255);
	strokeWeight(5);

	/*
	Uncomment to see bezier vertex points
	point(x1, y1);
	point(x2, y2);
	point(x3, y3);
	point(x4, y4);
	*/

}