/* VARIABLES */
let backgroundImage;
let introFont;
let textFont1;
let enterButton;
let currentScreen = "title"; // Track which screen we're on
let nextButton

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(500, 500);
  
  // Enter Button Properties
  enterButton = new Sprite(width/2, height/2 + 150);
  enterButton.w = 150;
  enterButton.h = 40;
  enterButton.color = '#2E1065';
  enterButton.stroke = '#7A00E6';
  enterButton.strokeWeight = 3;
  enterButton.textColor = 'white';
  enterButton.text = 'Press Enter to Start';
  enterButton.textSize = 12;
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);
  
  
  
  if (enterButton.mouse.presses()) {
      print("Function works!");
      screenA1();
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
  //text("")
}

/* FUNCTIONS */
function introScreen(){
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is the Intro Screen',
      width/2,
      height * 0.075);
}

function screenA1(){
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is Screen A1',
      width/2,
      height * 0.075);
}

function screenA2(){
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is Screen A2',
      width/2,
      height * 0.075);
}


function screenB1(){
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is Screen B1',
      width/2,
      height * 0.075);
}

function screenB2(){
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is Screen B2',
      width/2,
      height * 0.075);
}


