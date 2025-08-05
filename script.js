/* VARIABLES */
let backgroundImage;
let introFont;
let textFont;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont = loadFont('assets/CaveatBrush-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  
  

}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);
  
  // Set up title text
  textFont(introFont);
  textSize(48);
  fill(255); // White text
  textAlign(CENTER, TOP);
  
  // Draw title at center top of screen
  text("Game Title", width/2, 50);

}

/* FUNCTIONS */