
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

let startButton

//Count variable
let screen = 0; // Start at screen 0 (title screen)

//Minigame Variables
let avoider1, avoider2, avoider3, avoider4, avoider5;
let player;


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
  startButton = new Sprite(-200, -200)

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

  //Minigame Sprites
   //Create the player 
    // player = new Sprite(200, 20, 30);
    // player.color = "black";

    // //Create the avoiders
    // avoider1 = new Sprite(10, 100, 120, 20, "k");
    // avoider1.color = "green";
    

    // avoider2 = new Sprite(-100, 200, 80, 20, "k");
    // avoider2.color = "blue";
    

    // avoider3 = new Sprite(-100, 300, 180, 20, "k");
    // avoider3.color = "purple";
    

    // avoider4 = new Sprite(-150, 250, 100, 20, "k");
    // avoider4.color = "orange";
    

    // avoider5 = new Sprite(-80, 350, 140, 20, "k");
    // avoider5.color = "red";

  //Create the player 
  player = new Sprite(200, 20, 30);
  player.color = "black";

  //Create the avoiders
  avoider1 = new Sprite(10, 100, 120, 20, "k");
  avoider1.color = "green";
  avoider1.vel.x = 3; 

  avoider2 = new Sprite(-100, 200, 80, 20, "k");
  avoider2.color = "blue";
  avoider2.vel.x = 5; 

  avoider3 = new Sprite(-100, 300, 180, 20, "k");
  avoider3.color = "purple";
  avoider3.vel.x = 2; 

  avoider4 = new Sprite(-150, 250, 100, 20, "k");
  avoider4.color = "orange";
  avoider4.vel.x = 4; 

  avoider5 = new Sprite(-80, 350, 140, 20, "k");
  avoider5.color = "red";
  avoider5.vel.x = 12; 
   
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
}

if (nextButton.mouse.presses()){
  screen = 'Dark Path Continues 1';
}
  
  else if (screen == 'Dark Path Continues 1'){
    contDarkPath();
  }

if (startButton.mouse.presses()){
  screen = 'Minigame (Avoider Game) for Dark Path Started';
}
  
else if ( screen == 'Minigame (Avoider Game) for Dark Path Started'){
   darkPathMinigame()
  
}

  


  

}

  

  
  
 



/* SCREEN FUNCTIONS */

// Title Screen Function
function titleScreen() {

  //Hide minigame stuff
  avoider1.pos = {x: -100, y: -100};
  avoider2.pos = {x: -100, y: -100};
  avoider3.pos = {x: -100, y: -100};
  avoider4.pos = {x: -100, y: -100};
  avoider5.pos = {x: -100, y: -100};
  player.pos =  {x: -100, y: -100};
  
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
  avoider1.pos = {x: -100, y: -100};
  avoider2.pos = {x: -100, y: -100};
  avoider3.pos = {x: -100, y: -100};
  avoider4.pos = {x: -100, y: -100};
  avoider5.pos = {x: -100, y: -100};
  player.pos =  {x: -100, y: -100};

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
  nextButton.pos = {x: -200, y: -200};

  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('Defeat Mancrow! \nClick button below to start mini game',
       width/2,
       height/2 - 50);

  startButton.pos = {x: width/2, y:height/2 + 100}
  startButton.w = 100;
  startButton.h = 40;
  startButton.color = '#2E1065';
  startButton.stroke = '#7A00E6';
  startButton.stokeWeight = 3;
  startButton.textColor = 'white';
  startButton.text = 'START';
  startButton.textSize = 12;

  
}



function darkPathMinigame(){
  background(137, 213, 210);
  startButton.pos = {x: -200, y: -200};

  //Position the player 
  player.pos = {x: 200, y: 20};
  player.color = "black";

  //Position the avoiders - only set initial positions once per game
  if (avoider1.x > width || avoider1.x < -200) {
    avoider1.pos = {x: 10, y: 100};
  }
  avoider1.color = "green";
  avoider1.vel.x = 3; 

  if (avoider2.x > width || avoider2.x < -200) {
    avoider2.pos = {x: -100, y: 200};
  }
  avoider2.color = "blue";
  avoider2.vel.x = 5; 

  if (avoider3.x > width || avoider3.x < -200) {
    avoider3.pos = {x: -100, y: 300};
  }
  avoider3.color = "purple";
  avoider3.vel.x = 2; 

  if (avoider4.x > width || avoider4.x < -200) {
    avoider4.pos = {x: -150, y: 250};
  }
  avoider4.color = "orange";
  avoider4.vel.x = 4; 

  if (avoider5.x > width || avoider5.x < -200) {
    avoider5.pos = {x: -80, y: 350};
  }
  avoider5.color = "red";
  avoider5.vel.x = 12; 

  //Player controls
  if (kb.pressing("left")) {
    player.vel.x = -3;
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
  } else if (kb.pressing("down")) {
    player.vel.y = 3;
  } else if (kb.pressing("up")) {
    player.vel.y = -3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
  }

  //Reset avoider locations once they reach edge of screen 
  if (avoider1.x > width) {
    avoider1.x = -50;
    avoider1.y = 100;
    avoider1.vel.x = 5;
  } 

  if (avoider2.x > width) {
    avoider2.x = -50;
    avoider2.y = 200;
    avoider2.vel.x = 7;
  } 

  if (avoider3.x > width) {
    avoider3.x = -100;
    avoider3.y = 300;
    avoider3.vel.x = 2;
  } 

  if (avoider4.x > width) {
    avoider4.x = -150;
    avoider4.y = 250;
    avoider4.vel.x = 4;
  } 

  if (avoider5.x > width) {
    avoider5.x = -80;
    avoider5.y = 350;
    avoider5.vel.x = 10;
  } 

  //Don't let the player move off the screen
  if (player.y < 20) {
    player.y = 20;
  } else if (player.y > 400) {
    player.vel.x = 0;
    player.vel.y = 0;
    youWin();
  }

  if (player.x < 20) {
    player.x = 20;
  } else if (player.x > 380) {
    player.x = 380;
  }

  //Check if player collides with avoiders
  if (player.collides(avoider1) || player.collides(avoider2) || player.collides(avoider3) || player.collides(avoider4) || player.collides(avoider5)) {
    player.x = 200;
    player.y = 20;
  } 
}

  function youWin() {
  //Draw avoiders off of screen
  avoider1.x = -200;
  avoider1.vel.x = 0;
  avoider2.x = -500;
  avoider2.vel.x = 0;
  avoider3.x = -1000;
  avoider3.vel.x = 0;
  avoider4.x = -1000;
  avoider4.vel.x = 0;
  avoider5.x = -1000;
  avoider5.vel.x = 0;

  //Display you win message
  fill(0, 128, 128);
  textAlign(CENTER);
  textSize(20);
  text('You win!', 200, 200);
}






