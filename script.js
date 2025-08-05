/* VARIABLES */
let backgroundImage;
let introFont;
let textFont1;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  

}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);
  
  // Only draw text if font is loaded
  if (introFont) {
    // Set up title text
    textFont(introFont);
    textSize(64);
    fill(255, 255, 255); // White text with full RGB values
    textAlign(CENTER, CENTER);
    
    // Draw title higher up on screen
    text("Game Title", width/2, height/3);
  }

}

/* FUNCTIONS */