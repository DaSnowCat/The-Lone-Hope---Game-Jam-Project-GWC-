
/* VARIABLES */
let backgroundImage;
let introFont;
let textFont1;

//Button Variables
let enterButton;
let a1Button;
let a2Button;
let nextButton;
let backButton;

//Count variable
let screen = 0; // Start at screen 0 (title screen)

//Minigame Variables
// let avoider1, avoider2, avoider3, avoider4, avoider5;
// let player;


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
  enterButton = new Sprite(width/2, height/2 + 130);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-200, -200);

  nextButton = new Sprite(-200,-200);
  
  // EnterButton Properties
  enterButton.w = 150;
  enterButton.h = 40;
  enterButton.color = '#2E1065';
  enterButton.stroke = '#7A00E6';
  enterButton.strokeWeight = 3;
  enterButton.textColor = 'white';
  enterButton.text = 'Press Enter to Start';
  enterButton.textSize = 12;
  enterButton.collider = 'k';

  //Minigame Setup 
  

  
 
}



/* DRAW LOOP REPEATS */
function draw() {
  
  // Background screen image
  image(backgroundImage, 0, 0, width, height);

  //Show title screen with "The Lone Hope"
  if (screen == 0) {
    titleScreen();
  }
  
  if (enterButton.mouse.presses()){
    screen = 'Choice A Screen';
  }

  if (screen == 'Choice A Screen'){
    screenChoiceDoL();

    if (a1Button.mouse.presses()){
      screen = 'Dark Path dB1'
    } else if (a2Button.mouse.presses()){
      screen = 'Light Path lB1'
    }
  } 

else if (screen == 'Dark Path dB1'){
  darkPathA1();
  screen = 'Dark Path Continues 1';}

if (nextButton.mouse.presses()){
  if (screen == 'Dark Path Continues 1'){
    contDarkPath();
  }
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
  
  
  text("The Lone \nHope", width/2, height * 0.075);
  
}

// Dark Path or Light Path Choices 
function screenChoiceDoL() {
  
  // Hide enter button
  enterButton.pos = {x: -100, y: -100};

  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('Soliday, Soliday! \nYou have been chosen... \nTake these!',
       width/2,
       height/2 - 50);
  
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

// Screen A2 Function
function darkPathA1() {
  
  // A1 and A2 Hidden
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};

  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is for hope: without them, we quail \nThis is for wits: without them we fail \nThis is for fear: your fear makes you stornger \nThis is for anger at everything wrong \nThis is your name, simple and true \n\nAnd this is the secret held only by you... ',
       width/2,
       height/2 - 50);
  
  //Next button properties
  nextButton.pos = {x: width/2, y:height/2 + 100}
  nextButton.w = 100;
  nextButton.h = 40;
  nextButton.color = '#2E1065';
  nextButton.stroke = '#7A00E6';
  nextButton.stokeWeight = 3;
  nextButton.textColor = 'white';
  nextButton.text = 'NEXT';
  nextButton.textSize = 12;
  

  
}

// Light Path Function
function lightPathA1(){
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('Light Path Here',
      width/2,
      height/2 - 50);
}

function contDarkPath(){
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};

  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('Defeat Mancrow! \nClick button below to start mini game',
       width/2,
       height/2 - 50);

  
}






