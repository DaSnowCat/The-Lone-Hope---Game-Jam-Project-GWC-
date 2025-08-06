
/* VARIABLES */
let backgroundImage;
let introFont;
let textFont1;
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0; // Start at screen 0 (title screen)

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(500, 500);
  
  // Set up the title screen
  background(backgroundImage);
  
  // Create all buttons (positioned off-screen initially except enter button)
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
      print("Moving to screen 1");
      showScreenA1();
      screen = 1;
    }
  } else if (screen == 1) {
    // Screen A1 button logic
    if (a1Button.mouse.presses()) {
      print("Moving to screen 2");
      showScreenA2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      print("Moving to screen 3");
      showScreenB1();
      screen = 3;
    }
  } else if (screen == 2) {
    // Screen A2 button logic
    if (b1Button.mouse.presses()) {
      print("Moving to screen 4");
      showScreenB2();
      screen = 4;
    } else if (b2Button.mouse.presses()) {
      print("Moving to screen 5");
      showEndScreen();
      screen = 5;
    }
  }
  
  print(screen);
}

/* SCREEN FUNCTIONS */
function titleScreen() {
  // Set up title text
  textFont(introFont);
  textSize(50);
  fill(255, 255, 255);
  textAlign(CENTER, TOP);
  
  // Draw title at top of screen
  text("The Lone \nHope", width/2, height * 0.075);
}

function showScreenA1() {
  // Hide enter button
  enterButton.pos = {x: -100, y: -100};
  
  // Show A1 and A2 buttons
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
  
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('You find yourself in a mysterious forest.\nTwo paths lie ahead of you.\nWhich path will you choose?',
       width/2,
       height/2 - 50);
}

function showScreenA2() {
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
  
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('You chose the left path and found\na glowing crystal cave.\nWhat do you do next?',
       width/2,
       height/2 - 50);
}

function showScreenB1() {
  // Hide all buttons
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};
  
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('You chose the right path and\nencountered a wise old sage.\nHe grants you a magical artifact!\n\nYou are victorious!',
       width/2,
       height/2);
}

function showScreenB2() {
  // Hide all buttons
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};
  
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('You touch the crystal and it\nglows brightly, filling you with power.\n\nYou have gained magical abilities!',
       width/2,
       height/2);
}

function showEndScreen() {
  // Hide all buttons
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};
  
  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('You decided to leave the cave\nand continue your journey.\n\nThe adventure continues...',
       width/2,
       height/2);
}
