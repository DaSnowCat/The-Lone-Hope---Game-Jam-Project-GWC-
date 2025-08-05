/* VARIABLES */
let backgroundImage;
let introFont;
let textFont1;
let enterButton;
let currentScreen = "title"; // Track which screen we're on

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  
  // Create enter button sprite
  enterButton = new Sprite(width/2, height/2 + 100);
  enterButton.w = 150;
  enterButton.h = 40;
  enterButton.color = 'gray';
  enterButton.textColor = 'white';
  enterButton.text = 'Press Enter to Start';
  enterButton.textSize = 12;
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);
  
  if (currentScreen == "title") {
    titleScreen();
  } else if (currentScreen == "intro") {
    introScreen();
  }
  
  // Check if enter button is clicked
  if (enterButton.mouse.presses()) {
    currentScreen = "intro";
    enterButton.visible = false; // Hide the button after clicking
  }
}

/* SCREEN FUNCTIONS */
function titleScreen() {
  // Set up title text
  textFont(introFont);
  textSize(50);
  fill(255, 255, 255);
  textAlign(CENTER, TOP);
  
  // Draw title at top of screen (adaptive positioning)
  text("The Lone \nHope", width/2, height * 0.075);
}

/* FUNCTIONS */
function introScreen(){
  textFont(textFont1);
  textSize(15);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is the Intro Screen',
      width/2,
      height * 0.25);
}