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
  enterButton = new Sprite(width/2,height/2 + 100);
  
  
  

}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);
  
  // Set up title text
  textFont(introFont);
  textSize(50);
  fill(255, 255, 255); // White text with full RGB values
  textAlign(CENTER, TOP);
  
  // Draw title at top of screen (adaptive positioning)
  text("The Lone \nHope", width/2, height * 0.075);

}

/* FUNCTIONS */
function introScreen(){
  textsize(15);
  text('This is the Intro Screen',
      width/2,
      height/2 - 150)
}