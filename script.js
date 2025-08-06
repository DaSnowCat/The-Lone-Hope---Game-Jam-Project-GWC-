
/* VARIABLES */
let backgroundImage;
let introFont;
let textFont1;

//Button Variables
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;

//Count variable
let screen = 0; // Start at screen 0 (title screen)

//Minigame Variables


/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  
  // Set up the title screen
  background(backgroundImage);
  
  //Buttons positioned offscreen except enterButton
  enterButton = new Sprite(width/2, height/2 + 150);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-200, -200);
  b1Button = new Sprite(-200, -200);
  b2Button = new Sprite(-200, -200);
  
  // Enter Button Properties
  enterButton.w = 150;
  enterButton.h = 40;
  enterButton.color = '#2E1065';
  enterButton.stroke = '#7A00E6';
  enterButton.strokeWeight = 3;
  enterButton.textColor = 'white';
  enterButton.text = 'Press Enter to Start';
  enterButton.textSize = 12;
  enterButton.collider = 'k';
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);
  
  // Handle different screens based on screen variable
  if (screen == 0) {
    titleScreen();
    
    // Check enter button
    if (enterButton.mouse.presses()) {
      print("This is screen 1!");
      setupScreenA1();
      screen = 1;
    }
  } else if (screen == 1) {
    displayScreenA1();
    
    // Screen A1 button logic
    if (a1Button.mouse.presses()) {
      print("Moving to screen 2");
      setupScreenA2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      print("Moving to screen 3");
      setupScreenB1();
      screen = 3;
    }
  } else if (screen == 2) {
    displayScreenA2();
    
    // Screen A2 button logic
    if (b1Button.mouse.presses()) {
      print("Moving to screen 4");
      setupScreenB2();
      screen = 4;
    } else if (b2Button.mouse.presses()) {
      print("Moving to screen 5");
      setupEndScreen();
      screen = 5;
    }
  } else if (screen == 3) {
    displayScreenB1();
  } else if (screen == 4) {
    displayScreenB2();
  } else if (screen == 5) {
    displayEndScreen();
  }
}

/* SCREEN FUNCTIONS */

// Title Screen Function
function titleScreen() {
  //Text Properties
  textFont(introFont);
  textSize(50);
  fill(255, 255, 255);
  textAlign(CENTER, TOP);
  
  //Actual Text
  text("The Lone \nHope", width/2, height * 0.075);
}

// Setup ScreenA1 Function
function setupScreenA1() {
  // Hide enter button
  enterButton.pos = {x: -100, y: -100};
  
  // Add A1 Button
  a1Button.pos = {x: width/2 - 75, y: height/2 + 100};
  a1Button.w = 100;
  a1Button.h = 40;
  a1Button.collider = 'k';
  a1Button.color = '#2E1065';
  a1Button.stroke = '#7A00E6';
  a1Button.strokeWeight = 3;
  a1Button.textColor = 'white';
  a1Button.text = 'Choice A1';
  a1Button.textSize = 12;

  //Add A2 Button
  a2Button.pos = {x: width/2 + 75, y: height/2 + 100};
  a2Button.w = 100;
  a2Button.h = 40;
  a2Button.collider = 'k';
  a2Button.color = '#2E1065';
  a2Button.stroke = '#7A00E6';
  a2Button.strokeWeight = 3;
  a2Button.textColor = 'white';
  a2Button.text = 'Choice A2';
  a2Button.textSize = 12;
}

// Display ScreenA1 Function
function displayScreenA1() {
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(center, center);
  text('Soliday, Soliday! \nYou have been chosen... \nTake these!',
       width/2,
       height/2 - 50);
}

function setupScreenA2() {
  // Hide previous buttons
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  
  // Show B1 and B2 buttons
  b1Button.pos = {x: width/2 - 75, y: height/2 + 100};
  b1Button.w = 100;
  b1Button.h = 40;
  b1Button.collider = 'k';
  b1Button.color = '#2E1065';
  b1Button.stroke = '#7A00E6';
  b1Button.strokeWeight = 3;
  b1Button.textColor = 'white';
  b1Button.text = 'Choice B1';
  b1Button.textSize = 12;
  
  b2Button.pos = {x: width/2 + 75, y: height/2 + 100};
  b2Button.w = 100;
  b2Button.h = 40;
  b2Button.collider = 'k';
  b2Button.color = '#2E1065';
  b2Button.stroke = '#7A00E6';
  b2Button.strokeWeight = 3;
  b2Button.textColor = 'white';
  b2Button.text = 'Choice B2';
  b2Button.textSize = 12;
}

function displayScreenA2() {
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255,255);
  textAlign(center, center);
  text('You chose the left path and found\na glowing crystal cave.\nWhat do you do next?',
       width/2,
       height/2 - 50);
}

function setupScreenB1() {
  // Hide all buttons
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};
}

function displayScreenB1() {
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(center, center);
  text('You chose the right path and\nencountered a wise old sage.\nHe grants you a magical artifact!\n\nYou are victorious!',
       width/2,
       height/2);
}

function setupScreenB2() {
  // Hide all buttons
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};
}

function displayScreenB2() {
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(center, center);
  text('You touch the crystal and it\nglows brightly, filling you with power.\n\nYou have gained magical abilities!',
       width/2,
       height/2);
}

function setupEndScreen() {
  // Hide all buttons
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};
}

function displayEndScreen() {
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(center, center);
  text('You decided to leave the cave\nand continue your journey.\n\nThe adventure continues...',
       width/2,
       height/2);
}

// The dark path mini game
function miniGame1{
  
}
