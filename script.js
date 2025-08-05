/* VARIABLES */
let backgroundImage;
let introFont;
let textFont1;
let enterButton;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  
  // Create enter button
  enterButton = createButton('Press Enter to Start');
  enterButton.position(width/2 - 75, height/2 + 50);
  enterButton.size(150, 40);
  enterButton.style('background-color', '#4a4a4a');
  enterButton.style('color', 'white');
  enterButton.style('border', '2px solid white');
  enterButton.style('font-size', '16px');
  enterButton.style('cursor', 'pointer');

}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);
  
  // Only draw text if font is loaded
  if (introFont) {
    // Set up title text
    textFont(introFont);
    textSize(50);
    fill(255, 255, 255); // White text with full RGB values
    textAlign(CENTER, TOP);
    
    // Draw title at top of screen (adaptive positioning)
    text("The Lone \nHope", width/2, height * 0.075);
  }

}

/* FUNCTIONS */