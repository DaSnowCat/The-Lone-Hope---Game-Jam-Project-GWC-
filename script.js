/* VARIABLES */
let backgroundImage;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  

}

/* HANDLE WINDOW RESIZE */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);

}

/* FUNCTIONS */