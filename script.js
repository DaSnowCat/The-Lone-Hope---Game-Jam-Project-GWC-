/* VARIABLES */
let backgroundImage;
let darkPathbackgroundImage;
let lightPathbackgroundImage;
let miniGamebackgroundImaged;
let introFont;
let textFont1;
let miniGamebackgroundImagel;
let winBackgroundD;
let winBackgroundL;
let soundMusic;

//Button Variables
let enterButton;
let a1Button;
let a2Button;
let nextButtonD1;
let backButton;

let startButtonD;
let startButtonL;

let continueButton;
let restartButton;

let nextButtonL1

//Mobile Control Variables
let leftButton, rightButton, upButton, downButton;
let isMobile = false;

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
let scoreL = 1;




/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
  darkPathbackgroundImage = loadImage('assets/Dark Path Background Image.png');
  lightPathbackgroundImage = loadImage('assets/Light Path Forest Background Image.png');

  miniGamebackgroundImaged = loadImage('assets/Minigame Background dark purple.png');
  miniGamebackgroundImagel = loadImage('assets/Light Path Minigame Background.png');
  winBackgroundD = loadImage('assets/Win screen dark purple gradient.jpg');
  winBackgroundL = loadImage('assets/Light path win screen gradient.jpg')
  soundMusic = loadSound('assets/Celtic Mystery Music _ Forest of Forgetfulness.mp3')
}



/* SETUP RUNS ONCE */
function setup() {
  // Make canvas responsive to screen size
  if (isMobile) {
    createCanvas(windowWidth, windowHeight);
  } else {
    createCanvas(windowWidth, windowHeight);
  }
  
  // Detect if mobile device
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Set up the title screen
  background(backgroundImage);

  //Buttons positioned offscreen except enterButton
  enterButton = new Sprite(width/2, height/2 + 130);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-200, -200);
  startButtonD = new Sprite(-200, -200);
  startButtonL = new Sprite(-200, -200);

  nextButtonD1 = new Sprite(-200,-200);
  nextButtonL1 = new Sprite(-200,-200);
  continueButton = new Sprite(-200,-200);
  restartButton = new Sprite(-200,-200);

  // Mobile control buttons (initially hidden)
  leftButton = new Sprite(-200, -200);
  rightButton = new Sprite(-200, -200);
  upButton = new Sprite(-200, -200);
  downButton = new Sprite(-200, -200);

  // EnterButton Properties - larger for mobile
  enterButton.w = isMobile ? 200 : 150;
  enterButton.h = isMobile ? 50 : 40;
  enterButton.color = '#2E1065';
  enterButton.stroke = '#7A00E6';
  enterButton.strokeWeight = 3;
  enterButton.textColor = 'white';
  enterButton.text = isMobile ? 'Tap to Start' : 'Press Enter to Start';
  enterButton.textSize = isMobile ? 16 : 12;
  enterButton.collider = 'k';


  //Create the player 
  player = new Sprite(width/2, 20, 30);
  player.color = "#d6b7e1";

  //Create the avoiders
  avoider1 = new Sprite(50, height * 0.575, 145, 40, "k");
  avoider1.color = "#cc33ff";
  avoider1.text = 'Life is not a problem to be solved, \nbut a reality to be experienced'
  avoider1.textSize = 12;
  avoider1.textColor = 'black';
  avoider1.vel.x = 3; 

  avoider2 = new Sprite(-100, height * 0.5, 80, 30, "k");
  avoider2.color = "#d2a5f3";
  avoider2.vel.x = 5; 
  avoider2.text = 'In darkness, \ntruth is hidden'
  avoider2.textSize = 13;
  

  avoider3 = new Sprite(-100, height * 0.75, 180, 20, "k");
  avoider3.color = "#cc33ff";
  avoider3.vel.x = 7; 
  avoider3.text = 'This too shall pass'
  avoider3.textColor = 'black';
  avoider3.textSize = 13;

  avoider4 = new Sprite(-150, height * 0.625, 100, 20, "k");
  avoider4.color = "#d2a5f3";
  avoider4.vel.x = 4; 
  avoider4.text = 'Still waters run deep.'
  avoider4.textSize = 13;

  avoider5 = new Sprite(-80, height * 0.875, 140, 20, "k");
  avoider5.color = "#cc33ff";
  avoider5.vel.x = 2; 
  avoider5.text = 'Dream but never sleep.'
  avoider5.textColor = 'black';
  avoider5.textSize = 13;

  //Light Path Minigame Sprites

  catcher = new Sprite(width/2, height - 20, 100, 20, 'k');
  catcher.color = '#e6ccff';

  // Create falling object (good)
  fallingObject = new Sprite(width * 0.25, 0, 20);
  fallingObject.color = '#cab4df';
  fallingObject.stroke = '#cab4df';
  fallingObject.strokeWeight = 3;
  fallingObject.vel.y = 2;
  fallingObject.vel.x = 0;

  // Create lose object (bad)
  loseObject = new Sprite(width * 0.75, 0, 20);
  loseObject.color = '#220240';
  loseObject.vel.y = 2;
  loseObject.vel.x = 0;
  loseObject.stroke = '#220240';
  loseObject.strokeWeight = 3;

  // Setup mobile control buttons
  setupMobileControls();
  
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

  //Music playing
  if (screen == 'Choice A Screen'){
    screenChoiceDoL();
    if (!soundMusic.isPlaying()) {
      soundMusic.loop();
    }

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

  // Handle restart button click
  if (restartButton.mouse.presses()) {
    restartGame();
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
  
  // Hide mobile controls
  hideMobileControls();

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
  text('You have found yourself in a strange forest. \nEverywhere you go, you see shades of purple. \nYou walk ahead and stumble upon two paths. \nOne is dark while the other is light. \nWhich will you choose? ',
       width/2,
       height/2 - 100);

  // Add A1 Button - responsive sizing
  a1Button.pos = {x: width/2 - (isMobile ? 85 : 75), y: height/2 + 100};
  a1Button.w = isMobile ? 120 : 100;
  a1Button.h = isMobile ? 50 : 40;
  a1Button.collider = 'k';
  a1Button.color = '#2E1065';
  a1Button.stroke = '#7A00E6';
  a1Button.strokeWeight = 5;
  a1Button.textColor = 'white';
  a1Button.text = 'Dark Path';
  a1Button.textSize = isMobile ? 18 : 20;

  //Add A2 Button - responsive sizing
  a2Button.pos = {x: width/2 + (isMobile ? 85 : 75), y: height/2 + 100};
  a2Button.w = isMobile ? 120 : 100;
  a2Button.h = isMobile ? 50 : 40;
  a2Button.collider = 'k';
  a2Button.color = '#d9b3ff';
  a2Button.stroke = '#26004d';
  a2Button.strokeWeight = 5;
  a2Button.textColor = 'white';
  a2Button.text = 'Light Path';
  a2Button.textSize = isMobile ? 18 : 20;


}

// Screen A2 Function
function darkPathA1() {
  background(darkPathbackgroundImage)

  // A1 and A2 Hidden
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};

  // Display screen text
  textFont(textFont1);
  textSize(15);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('"Soliday, soliday!", \nYou heard someone shounting in the distance. \n"This is for hope: without them, we quail \nThis is for wits: without them we fail \nThis is for fear: your fear makes you stornger \nThis is for anger at everything wrong \nThis is your name, simple and true \n\nAnd this is the secret held only by you... \nDefeat Mancrow with these by passing the traps!"" ',
       width/2,
       height/2 - 100);

  //Next button properties
  nextButtonD1.pos = {x: width/2, y:height/2 + 100}
  nextButtonD1.w = 100;
  nextButtonD1.h = 40;
  nextButtonD1.color = '#2E1065';
  nextButtonD1.stroke = '#7A00E6';
  nextButtonD1.stokeWeight = 5;
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
  nextButtonL1.stokeWeight = 5;
  nextButtonL1.textColor = 'white';
  nextButtonL1.text = 'NEXT';
  nextButtonL1.textSize = 20;

  textFont(textFont1);
  textSize(20);
  fill('white');
  textAlign(CENTER, CENTER);
  text('\nThe atmosphere has changed to a light purple hue. \nYou feel calm and at peace. \nYet, you have feel the need to escape here. ',
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
  text('To escape, you must collect 10 light orbs. \nDo not collect the dark orbs. \nIf your goes goes less than zero, you lose. \n\nClick the button below to start.',
       width/2,
       height/2 - 50);

  startButtonL.pos = {x: width/2, y:height/2 + 100}
  startButtonL.w = 100;
  startButtonL.h = 40;
  startButtonL.color = '#d9b3ff';
  startButtonL.stroke = '#7A00E6';
  startButtonL.stokeWeight = 5;
  startButtonL.textColor = 'white';
  startButtonL.text = 'START';
  startButtonL.textSize = 20;
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
  text('To escape, you must avoid the moving tiles \nand make it to the bottom of the screen. \nClick button below to start mini game',
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


//Minigame for Dark Path 
function darkPathMinigame(){
  
  background(miniGamebackgroundImaged);
  startButtonD.pos = {x: -200, y: -200}

  // Show mobile controls if on mobile
  if (isMobile) {
    showMobileControls();
  }

  // Handle both keyboard and mobile touch controls
  let leftPressed = kb.pressing("left") || (isMobile && leftButton.mouse.pressing());
  let rightPressed = kb.pressing("right") || (isMobile && rightButton.mouse.pressing());
  let upPressed = kb.pressing("up") || (isMobile && upButton.mouse.pressing());
  let downPressed = kb.pressing("down") || (isMobile && downButton.mouse.pressing());

  if (leftPressed) {
    player.vel.x = -2;
  } else if (rightPressed) {
    player.vel.x = 2;
  } else if (downPressed) {
    player.vel.y = 2;
  } else if (upPressed) {
    player.vel.y = -2;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
  }

  //Reset avoider locations once they reach edge of screen 
  if (avoider1.x > width) {
    avoider1.x = -50;
    avoider1.y = 80;
    avoider1.vel.x = 3;
  } 

  if (avoider2.x > width) {
    avoider2.x = -50;
    avoider2.y = 150;
    avoider2.vel.x = 2;
  } 

  if (avoider3.x > width) {
    avoider3.x = -100;
    avoider3.y = 300;
    avoider3.vel.x = 1;
  } 

  if (avoider4.x > width) {
    avoider4.x = -150;
    avoider4.y = 250;
    avoider4.vel.x = 2;
  } 

  if (avoider5.x > width) {
    avoider5.x = -80;
    avoider5.y = 350;
    avoider5.vel.x = 2;
  } 

  //Don't let the player move off the screen
  if (player.y < 20) {
    player.y = 20;
  } else if (player.y > height) {
    player.vel.x = 0;
    player.vel.y = 0;
    youWinD();
  }

  if (player.x < 20) {
    player.x = 20;
  } else if (player.x > width - 20) {
    player.x = width - 20;
  }


  // Score display
  textAlign(LEFT, BASELINE);
  fill('white');
  textSize(20);
  text('Score = ' + scoreD, 10, 30);

  //Check if player collides with avoiders
  // step 3: check collisions 
  if (player.collides(avoider1) || player.collides(avoider2) || player.collides(avoider3) || player.collides(avoider4) || player.collides(avoider5)) {
    player.x = width/2; // step 3: Move the ball to the start
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

      // Hide mobile controls
      hideMobileControls();

      //Display you lose message
      fill('white');
      textSize(40);
      textAlign(CENTER, CENTER);
      text('Bad Ending!', width / 2, height / 2 - 150);

      textSize(20);
      text('Your score ran out. \nMancrow laughs at you and says, \n"Your hope means nothing to me... \nYour wits are far too wee! \nYour fear is justified. \nYour anger is empty pride. \nYour name will be snuffed out..." \nNow your trapped in the forest forever.', width / 2, height / 2 + 30);

      // Add restart button
      restartButton.pos = {x: width/2, y: height/2 + 150};
      restartButton.w = isMobile ? 120 : 100;
      restartButton.h = isMobile ? 50 : 40;
      restartButton.color = '#2E1065';
      restartButton.stroke = '#7A00E6';
      restartButton.strokeWeight = 3;
      restartButton.textColor = 'white';
      restartButton.text = 'RESTART';
      restartButton.textSize = isMobile ? 16 : 12;
      restartButton.collider = 'k';

      noLoop();
    }

  } 
  }

  function youWinD() {
  //Draw avoiders off of screen
    background(winBackgroundD);
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
  
  // Hide mobile controls
  hideMobileControls();
  


  //Display you win message

    fill('white');
    textSize(40);
    textAlign(CENTER, CENTER);
    text('You defeated Mancrow!', width / 2, height / 2 - 150);

    textSize(20);
    text('Good Ending. \nYou passed the traps. \nMancrow screams and says: "What is this? Your faith? \nYour doubt? \nI usually get this right. \nNOOOOOO! " \nWoosh, Mancrow vanishes in thine air. \nYou have escaped!', width / 2, height / 2 + 30);
 
    // Add restart button
    restartButton.pos = {x: width/2, y: height/2 + 150};
    restartButton.w = isMobile ? 120 : 100;
    restartButton.h = isMobile ? 50 : 40;
    restartButton.color = '#2E1065';
    restartButton.stroke = '#7A00E6';
    restartButton.strokeWeight = 3;
    restartButton.textColor = 'white';
    restartButton.text = 'RESTART';
    restartButton.textSize = isMobile ? 16 : 12;
    restartButton.collider = 'k';

    noLoop();
}


//Light Path Minigame Fucntion

function lightPathMinigame(){
  

  nextButtonL1.pos = {x:-200,y:-200};
  startButtonL.pos = {x:-200,y:-200};
  background(miniGamebackgroundImagel);

  // Position the game sprites
  catcher.pos = {x: catcher.x, y: height - 20};
  
  // Reset falling objects when they go off screen or start new ones
  if (fallingObject.pos.x < 0 || fallingObject.y > height) {
    fallingObject.pos = {x: random(width), y: 0};
    fallingObject.vel.y = random(2, 4);
    fallingObject.vel.x = 0; // No horizontal movement
  }
  if (loseObject.pos.x < 0 || loseObject.y > height) {
    loseObject.pos = {x: random(width), y: 0};
    loseObject.vel.y = random(2, 4);
    loseObject.vel.x = 0; // No horizontal movement
  }

    // If fallingObject reaches bottom, lose a point
    if (fallingObject.y >= height) {
      fallingObject.y = 0;
      fallingObject.x = random(width);
      fallingObject.vel.y = random(2, 4);
      fallingObject.vel.x = 0;
      scoreL = scoreL - 1;
    }

    // If loseObject reaches bottom, nothing happens
    if (loseObject.y >= height) {
      loseObject.y = 0;
      loseObject.x = random(width);
      loseObject.vel.y = random(2, 4);
      loseObject.vel.x = 0;
    }

    // Show mobile controls if on mobile
    if (isMobile) {
      showMobileControlsLight();
    }

    // Move catcher - handle both keyboard and mobile touch
    let leftPressed = kb.pressing('left') || (isMobile && leftButton.mouse.pressing());
    let rightPressed = kb.pressing('right') || (isMobile && rightButton.mouse.pressing());
    
    if (leftPressed) {
      catcher.vel.x = -5;
    }
    else if (rightPressed) {
      catcher.vel.x = 5;
    }
    else {
      catcher.vel.x = 0;
    }

    // Stop catcher at edges
    if (catcher.x < 50) {
      catcher.x = 50;
    }
    else if (catcher.x > width - 50) {
      catcher.x = width - 50;
    }

    // If fallingObject collides with catcher, gain a point
    if (fallingObject.collides(catcher)) {
      fallingObject.y = 0;
      fallingObject.x = random(width);
      fallingObject.vel.y = random(2, 4);
      fallingObject.vel.x = 0;
      scoreL = scoreL + 1;
    }

    // If loseObject collides with catcher, lose a point
    if (loseObject.collides(catcher)) {
      loseObject.y = 0;
      loseObject.x = random(width);
      loseObject.vel.y = random(2, 4);
      loseObject.vel.x = 0;
      scoreL = scoreL - 1;
    }

    // Lose condition
    if (scoreL < 0) {
      catcher.pos = { x: -200, y: -200 };
      fallingObject.pos = { x: -200, y: -200 };
      loseObject.pos = { x: -200, y: -200 };

      // Hide mobile controls
      hideMobileControls();

      fill('white');
      textSize(40);
      textAlign(CENTER, CENTER);
      text('Bad Ending', width / 2, height / 2 - 150);

      textSize(20);
      text('You did not collect enough light orbs. \nNow you are forever trapped in the forest \nwith no hope left.', width / 2, height / 2 + 30);

      // Add restart button
      restartButton.pos = {x: width/2, y: height/2 + 150};
      restartButton.w = isMobile ? 120 : 100;
      restartButton.h = isMobile ? 50 : 40;
      restartButton.color = '#d9b3ff';
      restartButton.stroke = '#26004d';
      restartButton.strokeWeight = 3;
      restartButton.textColor = 'white';
      restartButton.text = 'RESTART';
      restartButton.textSize = isMobile ? 16 : 12;
      restartButton.collider = 'k';

      noLoop();
    }

    // Win condition
    if (scoreL > 9) { // Winning score
      youWinL();
    }

    // Score display
    textAlign(LEFT, BASELINE);
    fill('white');
    textSize(20);
    text('Score = ' + scoreL, 10, 30);
  }

/* FUNCTIONS */

// Win screen
function youWinL() {
  background(winBackgroundL);
  
  catcher.pos = { x: -200, y: -200 };
  fallingObject.pos = { x: -200, y: -200 };
  loseObject.pos = { x: -200, y: -200 };
  
  // Hide mobile controls
  hideMobileControls();

  

  fill('black');
  textSize(40);
  textAlign(CENTER, CENTER);
  text('You have found hope!', width / 2, height / 2 - 150);

  textSize(20);
  text('Good Ending. \nYou collected enough light orbs to escape! \nYou realized that the orbs represented you, \nyour good side and bad side. \n\nSuccess is not final,\n failure is not fatal:\n It is the courage to continue that counts.', width / 2, height / 2 + 30);
  
  // Add restart button
  restartButton.pos = {x: width/2, y: height/2 + 150};
  restartButton.w = isMobile ? 120 : 100;
  restartButton.h = isMobile ? 50 : 40;
  restartButton.color = '#d9b3ff';
  restartButton.stroke = '#26004d';
  restartButton.strokeWeight = 3;
  restartButton.textColor = 'white';
  restartButton.text = 'RESTART';
  restartButton.textSize = isMobile ? 16 : 12;
  restartButton.collider = 'k';

  noLoop(); // Stop game after win
}

function keyPressed() {
  // Toggle music with M key
  if (key === 'm' || key === 'spacebar') {
    if (soundMusic.isPlaying()) {
      soundMusic.pause();
    } else {
      soundMusic.loop();
    }
  }
}

// Mobile control functions
function setupMobileControls() {
  if (!isMobile) return;
  
  // Left button
  leftButton.w = 60;
  leftButton.h = 60;
  leftButton.color = '#2E1065';
  leftButton.stroke = '#7A00E6';
  leftButton.strokeWeight = 3;
  leftButton.textColor = 'white';
  leftButton.text = '←';
  leftButton.textSize = 24;
  leftButton.collider = 'k';

  // Right button
  rightButton.w = 60;
  rightButton.h = 60;
  rightButton.color = '#2E1065';
  rightButton.stroke = '#7A00E6';
  rightButton.strokeWeight = 3;
  rightButton.textColor = 'white';
  rightButton.text = '→';
  rightButton.textSize = 24;
  rightButton.collider = 'k';

  // Up button
  upButton.w = 60;
  upButton.h = 60;
  upButton.color = '#2E1065';
  upButton.stroke = '#7A00E6';
  upButton.strokeWeight = 3;
  upButton.textColor = 'white';
  upButton.text = '↑';
  upButton.textSize = 24;
  upButton.collider = 'k';

  // Down button
  downButton.w = 60;
  downButton.h = 60;
  downButton.color = '#2E1065';
  downButton.stroke = '#7A00E6';
  downButton.strokeWeight = 3;
  downButton.textColor = 'white';
  downButton.text = '↓';
  downButton.textSize = 24;
  downButton.collider = 'k';
}

function showMobileControls() {
  if (!isMobile) return;
  
  // Position controls for dark path minigame (4-way movement) - responsive to screen size
  leftButton.pos = {x: width * 0.15, y: height - 60};
  rightButton.pos = {x: width * 0.45, y: height - 60};
  upButton.pos = {x: width * 0.3, y: height - 120};
  downButton.pos = {x: width * 0.3, y: height - 60};
}

function showMobileControlsLight() {
  if (!isMobile) return;
  
  // Position controls for light path minigame (left/right only) - responsive to screen size
  leftButton.pos = {x: width * 0.2, y: height - 60};
  rightButton.pos = {x: width * 0.8, y: height - 60};
  upButton.pos = {x: -200, y: -200}; // Hide up/down buttons
  downButton.pos = {x: -200, y: -200};
}

function hideMobileControls() {
  if (!isMobile) return;
  
  leftButton.pos = {x: -200, y: -200};
  rightButton.pos = {x: -200, y: -200};
  upButton.pos = {x: -200, y: -200};
  downButton.pos = {x: -200, y: -200};
}



// Restart game function
function restartGame() {
  // Stop music
  if (soundMusic.isPlaying()) {
    soundMusic.stop();
  }
  
  // Reset all variables to initial state
  screen = 0;
  scoreD = 5;
  scoreL = 1;
  
  // Reset player position to off-screen initially (will be positioned correctly on title screen)
  player.pos = {x: -100, y: -100};
  player.vel = {x: 0, y: 0};
  
  // Reset avoiders to their initial off-screen positions
  avoider1.pos = {x: 50, y: height * 0.575};
  avoider1.vel.x = 3;
  avoider2.pos = {x: -100, y: height * 0.5};
  avoider2.vel.x = 5;
  avoider3.pos = {x: -100, y: height * 0.75};
  avoider3.vel.x = 7;
  avoider4.pos = {x: -150, y: height * 0.625};
  avoider4.vel.x = 4;
  avoider5.pos = {x: -80, y: height * 0.875};
  avoider5.vel.x = 2;
  
  // Reset light path sprites to off-screen
  catcher.pos = {x: -100, y: -100};
  catcher.vel = {x: 0, y: 0};
  fallingObject.pos = {x: -100, y: -100};
  fallingObject.vel = {x: 0, y: 2};
  loseObject.pos = {x: -100, y: -100};
  loseObject.vel = {x: 0, y: 2};
  
  // Reset all buttons to off-screen positions except enter button
  enterButton.pos = {x: width/2, y: height/2 + 130};
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  startButtonD.pos = {x: -200, y: -200};
  startButtonL.pos = {x: -200, y: -200};
  nextButtonD1.pos = {x: -200, y: -200};
  nextButtonL1.pos = {x: -200, y: -200};
  continueButton.pos = {x: -200, y: -200};
  restartButton.pos = {x: -200, y: -200};
  
  // Hide mobile controls
  hideMobileControls();
  
  // Clear the background and set it to the title screen
  background(backgroundImage);
  
  // Resume the game loop
  loop();
}

// Make canvas responsive when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// // Listen for mouse click to restart after win/lose
// function mousePressed() {
//   // Restart functionality removed
// }

// function badEnding(){
//   background(darkPathbackgroundImage)
//   a1Button.pos = {x: -200, y: -200};
//   a2Button.pos = {x: -200, y: -200};
//   nextButtonD1.pos = {x: -200, y: -200};

//   textFont(textFont1);
//   textSize(20);
//   fill(255, 255, 255);
//   textAlign(CENTER, CENTER);
//   text('You have lost. ',
//        width/2,
//        height/2 - 50);


// }

// function goodEnding(){
//   background(lightPathbackgroundImage)
//   a1Button.pos = {x: -200, y: -200};
//   a2Button.pos = {x: -200, y: -200};
//   nextButtonD1.pos = {x: -200, y: -200};

//   textFont(textFont1);
//   textSize(20);
//   fill(255, 255, 255);
//   textAlign(CENTER, CENTER);
//   text('You have win',
//        width/2,
//        height/2 - 50);


// }

// function credits(){

// }

