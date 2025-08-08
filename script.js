/* VARIABLES */
let backgroundImage;
let darkPathbackgroundImage;
let lightPathbackgroundImage;
let introFont;
let textFont1;

//Button Variables
let enterButton;
let a1Button;
let a2Button;
let nextButtonD1;
let backButton;

let startButtonD;
let startButtonL;

let continueButton;

let nextButtonL1

//Count variable
let screen = 0; // Start at screen 0 (title screen)

//Minigame Variables 

//Dark Path Minigame Variables
let avoider1, avoider2, avoider3, avoider4, avoider5;
let player;
let scoreD = 5;

//Light Path
let catcher;
let fallingObject;
let loseObject;
let scoreL = 0;




/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
  darkPathbackgroundImage = loadImage('assets/Dark Path Background Image.png')
  lightPathbackgroundImage = loadImage('assets/Light Path Forest Background Image.png')
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
  startButtonD = new Sprite(-200, -200)
  startButtonL = new Sprite(-200, -200)

  nextButtonD1 = new Sprite(-200,-200);
  nextButtonL1 = new Sprite(-200,-200);
  continueButton = new Sprite(-200,-200);

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
  avoider3.vel.x = 7; 

  avoider4 = new Sprite(-150, 250, 100, 20, "k");
  avoider4.color = "orange";
  avoider4.vel.x = 4; 

  avoider5 = new Sprite(-80, 350, 140, 20, "k");
  avoider5.color = "red";
  avoider5.vel.x = 2; 

  //Light Path Minigame Sprites

  catcher = new Sprite(200, 380, 100, 20, 'k');
  catcher.color = color(95, 158, 160);

  // Create falling object (good)
  fallingObject = new Sprite(100, 0, 10);
  fallingObject.color = '#FFFFFF';
  fallingObject.vel.y = 2;

  // Create lose object (bad)
  loseObject = new Sprite(100, 0, 10);
  loseObject.color = '#000000';
  loseObject.vel.y = 2;

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

if (screen == 'Light Path lB1'){
    lightPathA1();
}


else if (screen == 'Dark Path dB1'){
  darkPathA1();
}

if (nextButtonD1.mouse.presses()){
  screen = 'Dark Path Continues 1';
}

  else if (screen == 'Dark Path Continues 1'){
    contDarkPath();
  }

if (startButtonD.mouse.presses()){
  screen = 'Minigame (Avoider Game) for Dark Path Started';
}

else if ( screen == 'Minigame (Avoider Game) for Dark Path Started'){
   darkPathMinigame()

}

  if (nextButtonL1.mouse.presses()){
    screen = 'Light Path Continues 1';
  }
  else if (screen == 'Light Path Continues 1'){
    contLightPath();
  }

  if (startButtonL.mouse.presses()){
    screen = 'Light Path Minigame Started';
  }
  else if (screen == 'Light Path Minigame Started'){
    lightPathMinigame();
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

  catcher.pos = {x: -100, y: -100};
  fallingObject.pos = {x: -100, y: -100};
  loseObject.pos = {x: -100, y: -100};

  //Text Properties
  textFont(introFont);
  textSize(50);
  fill(255, 255, 255);
  textAlign(CENTER, TOP);


  text("The Lone \nHope", width/2, height * 0.075);

}

// Dark Path or Light Path Choices 
function screenChoiceDoL() {
  background(backgroundImage);

  // Hide enter button
  enterButton.pos = {x: -100, y: -100};
  avoider1.pos = {x: -100, y: -100};
  avoider2.pos = {x: -100, y: -100};
  avoider3.pos = {x: -100, y: -100};
  avoider4.pos = {x: -100, y: -100};
  avoider5.pos = {x: -100, y: -100};
  player.pos =  {x: -100, y: -100};

  catcher.pos = {x: -100, y: -100};
  fallingObject.pos = {x: -100, y: -100};
  loseObject.pos = {x: -100, y: -100};

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
  background(darkPathbackgroundImage)

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
  nextButtonD1.pos = {x: width/2, y:height/2 + 100}
  nextButtonD1.w = 100;
  nextButtonD1.h = 40;
  nextButtonD1.color = '#2E1065';
  nextButtonD1.stroke = '#7A00E6';
  nextButtonD1.stokeWeight = 3;
  nextButtonD1.textColor = 'white';
  nextButtonD1.text = 'NEXT';
  nextButtonD1.textSize = 12;



}

// Light Path Function
function lightPathA1(){

  background(lightPathbackgroundImage);

  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};

  nextButtonL1.pos = {x: width/2, y:height/2 + 100}
  nextButtonL1.w = 100;
  nextButtonL1.h = 40;
  nextButtonL1.color = '#d9b3ff';
  nextButtonL1.stroke = '#26004d';
  nextButtonL1.stokeWeight = 3;
  nextButtonL1.textColor = 'black';
  nextButtonL1.text = 'NEXT';
  nextButtonL1.textSize = 12;

  textFont(textFont1);
  textSize(20);
  fill('white');
  textAlign(CENTER, CENTER);
  text('Story to be continued',
      width/2,
      height/2 - 50);
}

function contLightPath(){
  background(lightPathbackgroundImage);

  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  nextButtonL1.pos = {x: -200, y: -200};

  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('Defeat Mancrow! \nClick button below to start mini game',
       width/2,
       height/2 - 50);

  startButtonL.pos = {x: width/2, y:height/2 + 100}
  startButtonL.w = 100;
  startButtonL.h = 40;
  startButtonL.color = '#2E1065';
  startButtonL.stroke = '#7A00E6';
  startButtonL.stokeWeight = 3;
  startButtonL.textColor = 'white';
  startButtonL.text = 'START';
  startButtonL.textSize = 12;
}




function contDarkPath(){
  background(darkPathbackgroundImage)
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  nextButtonD1.pos = {x: -200, y: -200};

  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('Defeat Mancrow! \nClick button below to start mini game',
       width/2,
       height/2 - 50);

  startButtonD.pos = {x: width/2, y:height/2 + 100}
  startButtonD.w = 100;
  startButtonD.h = 40;
  startButtonD.color = '#2E1065';
  startButtonD.stroke = '#7A00E6';
  startButtonD.stokeWeight = 3;
  startButtonD.textColor = 'white';
  startButtonD.text = 'START';
  startButtonD.textSize = 12;


}



function darkPathMinigame(){
  background(137, 213, 210);
  startButtonD.pos = {x: -200, y: -200}


  if (kb.pressing("left")) {
    player.vel.x = -3;
  } else if (kb.pressing("right")) {
    player.vel.x = 3;
  } else if (kb.pressing("down")) { // step 2: moving the ball up and down
    player.vel.y = 3;
  } else if (kb.pressing("up")) { // step 2: moving the ball up and down
    player.vel.y = -3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
  }

  //Reset avoider locations once they reach edge of screen 
  if (avoider1.x > width) {
    avoider1.x = -50;
    avoider1.y = 100;
    avoider1.vel.x = 3;
  } 

  if (avoider2.x > width) {
    avoider2.x = -50;
    avoider2.y = 200;
    avoider2.vel.x = 5;
  } 

  if (avoider3.x > width) {
    avoider3.x = -100;
    avoider3.y = 300;
    avoider3.vel.x = 7;
  } 

  if (avoider4.x > width) {
    avoider4.x = -150;
    avoider4.y = 250;
    avoider4.vel.x = 4;
  } 

  if (avoider5.x > width) {
    avoider5.x = -80;
    avoider5.y = 350;
    avoider5.vel.x = 2;
  } 

  //Don't let the player move off the screen
  if (player.y < 20) {
    player.y = 20;
  } else if (player.y > 400) {
    player.vel.x = 0;
    player.vel.y = 0;
    youWinD();
  }

  if (player.x < 20) {
    player.x = 20;
  } else if (player.x > 380) {
    player.x = 380;
  }


  // Score display
  textAlign(LEFT, BASELINE);
  fill(0, 128, 128);
  textSize(20);
  text('Score = ' + scoreD, 10, 30);

  //Check if player collides with avoiders
  // step 3: check collisions 
  if (player.collides(avoider1) || player.collides(avoider2) || player.collides(avoider3) || player.collides(avoider4) || player.collides(avoider5)) {
    player.x = 200; // step 3: Move the ball to the start
    player.y = 20; // step 3: Move the ball to the start
    scoreD = scoreD - 1;


    //Lose Condition
    if (scoreD < 0){
      player.x = -200;
      player.y = -200;
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

      //Display you lose message
      fill(0, 128, 128);
      textAlign(CENTER);
      textSize(60);
      text('You Lose!', 200, 200);

      noLoop();
    }

  } 
  }

  function youWinD() {
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
  textSize(60);
  text('You win!', 200, 200);

    continueButton.pos = {x: width/2, y:height/2 + 100}
    continueButton.w = 100;
    continueButton.h = 40;
    continueButton.color = '#2E1065';
    continueButton.stroke = '#7A00E6';
    continueButton.stokeWeight = 3;
    continueButton.textColor = 'white';
    continueButton.text = 'CONTINUE';
    continueButton.textSize = 12;
}


//Light Path Minigame Fucntion

function lightPathMinigame(){

  nextButtonL1.pos = {x:-200,y:-200};
  startButtonL.pos = {x:-200,y:-200};
  background(224, 224, 224);

  // Position the game sprites
  catcher.pos = {x: catcher.x, y: 380};
  if (fallingObject.pos.x < 0) {
    fallingObject.pos = {x: random(width), y: 0};
    fallingObject.vel.y = 2;
  }
  if (loseObject.pos.x < 0) {
    loseObject.pos = {x: random(width), y: 0};
    loseObject.vel.y = 2;
  }



    // Directions
    fill(0);
    textSize(12);
    text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \nobjects.", width - 100, 20);

    // If fallingObject reaches bottom, lose a point
    if (fallingObject.y >= height) {
      fallingObject.y = 0;
      fallingObject.x = random(width);
      fallingObject.vel.y = random(1, 5);
      scoreL = scoreL - 1;
    }

    // If loseObject reaches bottom, nothing happens
    if (loseObject.y >= height) {
      loseObject.y = 0;
      loseObject.x = random(width);
      loseObject.vel.y = random(1, 5);
    }

    // Move catcher
    if (kb.pressing('left')) {
      catcher.vel.x = -3;
    }
    else if (kb.pressing('right')) {
      catcher.vel.x = 3;
    }
    else {
      catcher.vel.x = 0;
    }

    // Stop catcher at edges
    if (catcher.x < 50) {
      catcher.x = 50;
    }
    else if (catcher.x > 350) {
      catcher.x = 350;
    }

    // If fallingObject collides with catcher, gain a point
    if (fallingObject.collides(catcher)) {
      fallingObject.y = 0;
      fallingObject.x = random(width);
      fallingObject.vel.y = random(1, 5);
      fallingObject.direction = 'down';
      scoreL = scoreL + 1;
    }

    // If loseObject collides with catcher, lose a point
    if (loseObject.collides(catcher)) {
      loseObject.y = 0;
      loseObject.x = random(width);
      loseObject.vel.y = random(1, 5);
      loseObject.direction = 'down';
      scoreL = scoreL - 1;
    }

    // Lose condition
    if (scoreL < 0) {
      catcher.pos = { x: -200, y: -200 };
      fallingObject.pos = { x: -200, y: -200 };
      loseObject.pos = { x: -200, y: -200 };

      fill(255, 0, 0);
      textSize(40);
      textAlign(CENTER, CENTER);
      text('You Lose', width / 2, height / 2 + 100);

      noLoop();
    }

    // Win condition
    if (scoreL > 4) { // Winning score
      youWinL();
    }

    // Score display
    textAlign(LEFT, BASELINE);
    fill(0, 128, 128);
    textSize(20);
    text('Score = ' + scoreL, 10, 30);
  }

/* FUNCTIONS */

// Win screen
function youWinL() {
  catcher.pos = { x: -200, y: -200 };
  fallingObject.pos = { x: -200, y: -200 };
  loseObject.pos = { x: -200, y: -200 };

  fill(0, 200, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text('You Win!', width / 2, height / 2 - 20);

  textSize(20);
  text('Click to Restart', width / 2, height / 2 + 30);

  noLoop(); // Stop game after win
}

// Listen for mouse click to restart after win/lose
function mousePressed() {
  // Restart functionality removed
}

function badEnding(){
  background(darkPathbackgroundImage)
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  nextButtonD1.pos = {x: -200, y: -200};

  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('You have lost. ',
       width/2,
       height/2 - 50);


}

function goodEnding(){
  background(lightPathbackgroundImage)
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  nextButtonD1.pos = {x: -200, y: -200};

  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('You have win',
       width/2,
       height/2 - 50);


}

function credits(){

}