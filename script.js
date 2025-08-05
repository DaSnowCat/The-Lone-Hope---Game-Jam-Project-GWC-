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
  background(25, 25, 112); // Midnight purple background
  image = loadImage(backgroundImage,200,200)
  //image(backgroundImage,400,400)

}

/* FUNCTIONS */