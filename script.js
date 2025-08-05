/* VARIABLES */
let backgroundImage;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  
  

}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, 400, 400);

}

/* FUNCTIONS */