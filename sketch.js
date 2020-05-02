const TWO_PI = 6.28318530718;
const PI = 3.14159265359;

var angle = PI / 9;
var slider;

function setup() {
	slider = createSlider(0, TWO_PI, PI * 3 / 4, 0.01);
	slider.style("width", '80%');
	slider.style("border-color", "#515151");
	createCanvas(window.innerWidth, window.innerHeight - 30);
	angleMode(RADIANS);
}

function draw() {
	background(255);
	angle = slider.value();
	stroke(0);
	translate(width/2, height);
	branch(200);
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if(len > 4){
		push();
		rotate(angle);
		branch(len*0.67);
		pop();
		push();
		rotate(-angle);
		branch(len*0.67);
		pop();
	}
}