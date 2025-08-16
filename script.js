/* =========================
   THE LONE HOPE — MOBILE + PC FRIENDLY
   p5.js + p5play (keep original flow, add responsiveness, touch controls, restart)
   ========================= */

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

// Buttons (p5play Sprites)
let enterButton;
let a1Button;
let a2Button;
let nextButtonD1;
let backButton; // reserved (not used yet)
let startButtonD;
let startButtonL;
let continueButton;
let nextButtonL1;
let restartButton; // used on endings

// Count / Screen state
let screen = 0; // Start at screen 0 (title screen)

// Minigame Variables
// Dark Path
let avoider1, avoider2, avoider3, avoider4, avoider5;
let player;
let scoreD = 5;

// Light Path
let catcher;
let fallingObject;
let loseObject;
let scoreL = 1;

// Responsive scale vs original 400x400 layout
const BASE_W = 400;
const BASE_H = 400;
let SF = 1; // scale factor

/* -------------------------
   PRELOAD LOADS FILES
------------------------- */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
  darkPathbackgroundImage = loadImage('assets/Dark Path Background Image.png');
  lightPathbackgroundImage = loadImage('assets/Light Path Forest Background Image.png');
  miniGamebackgroundImaged = loadImage('assets/Minigame Background dark purple.png');
  miniGamebackgroundImagel = loadImage('assets/Light Path Minigame Background.png');
  winBackgroundD = loadImage('assets/Win screen dark purple gradient.jpg');
  winBackgroundL = loadImage('assets/Light path win screen gradient.jpg');
  soundMusic = loadSound('assets/Celtic Mystery Music _ Forest of Forgetfulness.mp3');
}

/* -------------------------
   SETUP RUNS ONCE
------------------------- */
function setup() {
  createCanvas(windowWidth, windowHeight); // full screen
  computeScale();

  // Buttons positioned off-screen except enterButton
  enterButton = new Sprite(width/2, height/2 + 130*SF);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-200, -200);
  startButtonD = new Sprite(-200, -200);
  startButtonL = new Sprite(-200, -200);
  nextButtonD1 = new Sprite(-200, -200);
  nextButtonL1 = new Sprite(-200, -200);
  continueButton = new Sprite(-200, -200);
  restartButton = new Sprite(-200, -200);

  styleButton(enterButton, 150, 40, '#2E1065', '#7A00E6', 'Press Enter to Start', 14);

  // Create the player (Dark Path)
  player = new Sprite(width/2, 20*SF, 30*SF);
  player.color = '#d6b7e1';

  // Create the avoiders
  avoider1 = new Sprite(50*SF, 230*SF, 145*SF, 40*SF, 'k');
  avoider2 = new Sprite(-100, 200*SF, 80*SF, 30*SF, 'k');
  avoider3 = new Sprite(-100, 300*SF, 180*SF, 20*SF, 'k');
  avoider4 = new Sprite(-150, 250*SF, 100*SF, 20*SF, 'k');
  avoider5 = new Sprite(-80, 350*SF, 140*SF, 20*SF, 'k');

  setupAvoider(avoider1, '#cc33ff', 3, 'Life is not a problem to be solved,\nbut a reality to be experienced', 12, 'black');
  setupAvoider(avoider2, '#d2a5f3', 5, 'In darkness, \ntruth is hidden', 13, 'white');
  setupAvoider(avoider3, '#cc33ff', 7, 'This too shall pass', 13, 'black');
  setupAvoider(avoider4, '#d2a5f3', 4, 'Still waters run deep.', 13, 'white');
  setupAvoider(avoider5, '#cc33ff', 2, 'Dream but never sleep.', 13, 'black');

  // Light Path Minigame Sprites
  catcher = new Sprite(width/2, height - 20*SF, 100*SF, 20*SF, 'k');
  catcher.color = '#e6ccff';

  // Create falling object (good)
  fallingObject = new Sprite(100, 0, 20*SF);
  fallingObject.color = '#cab4df';
  fallingObject.stroke = '#cab4df';
  fallingObject.strokeWeight = 3;
  fallingObject.vel.y = 2;

  // Create lose object (bad)
  loseObject = new Sprite(100, 0, 20*SF);
  loseObject.color = '#220240';
  loseObject.vel.y = 2;
  loseObject.stroke = '#220240';
  loseObject.strokeWeight = 3;
}

function styleButton(btn, w, h, fillCol, strokeCol, label, txtSize){
  btn.w = w*SF; btn.h = h*SF; btn.collider = 'k';
  btn.color = fillCol; btn.stroke = strokeCol; btn.strokeWeight = 3*SF;
  btn.textColor = 'white'; btn.text = label; btn.textSize = max(12, txtSize*SF);
}

function setupAvoider(s, col, vx, t='', ts=12, tc='white'){
  s.color = col; s.vel.x = vx; s.text = t; s.textSize = max(10, ts*SF); s.textColor = tc;
}

function computeScale(){
  SF = min(width/BASE_W, height/BASE_H);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  computeScale();
  // keep UI/players sensibly placed when resizing
  if (screen === 0){
    enterButton.pos = {x: width/2, y: height/2 + 130*SF};
    styleButton(enterButton, 150, 40, '#2E1065', '#7A00E6', 'Press Enter to Start', 14);
  }
  catcher.y = height - 20*SF;
}

/* -------------------------
   DRAW LOOP REPEATS
------------------------- */
function draw() {
  // Background screen image
  image(backgroundImage, 0, 0, width, height);

  // Title screen
  if (screen === 0) {
    titleScreen();
  }

  // Enter button or keyboard Enter to proceed
  if (enterButton?.mouse?.presses() || kb.pressing('enter')){
    screen = 'Choice A Screen';
  }

  // Music & choice screen
  if (screen === 'Choice A Screen'){
    screenChoiceDoL();
    if (soundMusic && !soundMusic.isPlaying()) soundMusic.loop();

    if (a1Button.mouse.presses()){
      screen = 'Dark Path dB1';
    } else if (a2Button.mouse.presses()){
      screen = 'Light Path lB1';
    }
  }

  if (screen === 'Light Path lB1'){
    lightPathA1();
  } else if (screen === 'Dark Path dB1'){
    darkPathA1();
  }

  if (nextButtonD1.mouse.presses()){
    screen = 'Dark Path Continues 1';
  } else if (screen === 'Dark Path Continues 1'){
    contDarkPath();
  }

  if (startButtonD.mouse.presses()){
    screen = 'Minigame (Avoider Game) for Dark Path Started';
  } else if (screen === 'Minigame (Avoider Game) for Dark Path Started'){
    darkPathMinigame();
  }

  if (nextButtonL1.mouse.presses()){
    screen = 'Light Path Continues 1';
  } else if (screen === 'Light Path Continues 1'){
    contLightPath();
  }

  if (startButtonL.mouse.presses()){
    screen = 'Light Path Minigame Started';
  } else if (screen === 'Light Path Minigame Started'){
    lightPathMinigame();
  }

  // Restart button handler (visible only on endings)
  if (restartButton?.mouse?.presses()){
    hardRestartToTitle();
  }
}

/* -------------------------
   SCREEN FUNCTIONS
------------------------- */
// Title Screen Function
function titleScreen() {
  // Hide minigame stuff
  avoider1.pos = {x: -100, y: -100};
  avoider2.pos = {x: -100, y: -100};
  avoider3.pos = {x: -100, y: -100};
  avoider4.pos = {x: -100, y: -100};
  avoider5.pos = {x: -100, y: -100};
  player.pos   = {x: -100, y: -100};

  catcher.pos = {x: -100, y: -100};
  fallingObject.pos = {x: -100, y: -100};
  loseObject.pos    = {x: -100, y: -100};

  // ensure Enter button is visible on title
  enterButton.pos = {x: width/2, y: height/2 + 130*SF};
  styleButton(enterButton, 150, 40, '#2E1065', '#7A00E6', 'Press Enter to Start', 14);

  // Title text
  textFont(introFont);
  textSize(max(32, 50*SF));
  fill(255);
  textAlign(CENTER, TOP);
  text('The Lone \nHope', width/2, height * 0.075);
}

// Dark Path or Light Path Choices
function screenChoiceDoL() {
  image(backgroundImage, 0, 0, width, height);

  // Hide enter button + minigame sprites
  enterButton.pos = {x: -100, y: -100};
  avoider1.pos = {x: -100, y: -100};
  avoider2.pos = {x: -100, y: -100};
  avoider3.pos = {x: -100, y: -100};
  avoider4.pos = {x: -100, y: -100};
  avoider5.pos = {x: -100, y: -100};
  player.pos   = {x: -100, y: -100};

  catcher.pos = {x: -100, y: -100};
  fallingObject.pos = {x: -100, y: -100};
  loseObject.pos    = {x: -100, y: -100};

  // Display screen text
  textFont(textFont1);
  textSize(max(14, 20*SF));
  fill(255);
  textAlign(CENTER, CENTER);
  text('You have found yourself in a strange forest. \nEverywhere you go, you see shades of purple. \nYou walk ahead and stumble upon two paths. \nOne is dark while the other is light. \nWhich will you choose? ', width/2, height/2 - 120*SF);

  // Add A1 Button (Dark Path)
  a1Button.pos = {x: width/2 - 90*SF, y: height/2 + 110*SF};
  styleButton(a1Button, 110, 46, '#2E1065', '#7A00E6', 'Dark Path', 20);

  // Add A2 Button (Light Path)
  a2Button.pos = {x: width/2 + 90*SF, y: height/2 + 110*SF};
  styleButton(a2Button, 110, 46, '#d9b3ff', '#26004d', 'Light Path', 20);
}

// Screen A2 Function
function darkPathA1() {
  image(darkPathbackgroundImage, 0, 0, width, height);

  // A1 and A2 Hidden
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};

  // Display screen text
  textFont(textFont1);
  textSize(max(12, 16*SF));
  fill(255);
  textAlign(CENTER, CENTER);
  text('\"Soliday, soliday!, \nYou heard someone shounting in the distance. \n\"This is for hope: without them, we quail \nThis is for wits: without them we fail \nThis is for fear: your fear makes you stornger \nThis is for anger at everything wrong \nThis is your name, simple and true \n\nAnd this is the secret held only by you... \nDefeat Mancrow with these by passing the traps!\"\" ', width/2, height/2 - 120*SF);

  // Next button
  nextButtonD1.pos = {x: width/2, y: height/2 + 120*SF};
  styleButton(nextButtonD1, 120, 46, '#2E1065', '#7A00E6', 'NEXT', 16);
}

// Light Path Function
function lightPathA1(){
  image(lightPathbackgroundImage, 0, 0, width, height);

  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};

  nextButtonL1.pos = {x: width/2, y: height/2 + 120*SF};
  styleButton(nextButtonL1, 120, 46, '#d9b3ff', '#26004d', 'NEXT', 18);

  textFont(textFont1);
  textSize(max(14, 20*SF));
  fill('white');
  textAlign(CENTER, CENTER);
  text('\nThe atmosphere has changed to a light purple hue. \nYou feel calm and at peace. \nYet, you have feel the need to escape here. ', width/2, height/2 - 80*SF);
}

function contLightPath(){
  image(lightPathbackgroundImage, 0, 0, width, height);

  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  nextButtonL1.pos = {x: -200, y: -200};

  textFont(textFont1);
  textSize(max(14, 20*SF));
  fill(255);
  textAlign(CENTER, CENTER);
  text('To escape, you must collect 10 light orbs. \nDo not collect the dark orbs. \nIf your goes goes less than zero, you lose. \n\nClick the button below to start.', width/2, height/2 - 80*SF);

  startButtonL.pos = {x: width/2, y: height/2 + 110*SF};
  styleButton(startButtonL, 130, 46, '#d9b3ff', '#7A00E6', 'START', 18);
}

function contDarkPath(){
  image(darkPathbackgroundImage, 0, 0, width, height);
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  nextButtonD1.pos = {x: -200, y: -200};

  textFont(textFont1);
  textSize(max(14, 20*SF));
  fill(255);
  textAlign(CENTER, CENTER);
  text('To escape, you must avoid the moving tiles \nand make it to the bottom of the screen. \nClick button below to start mini game', width/2, height/2 - 80*SF);

  startButtonD.pos = {x: width/2, y: height/2 + 110*SF};
  styleButton(startButtonD, 130, 46, '#2E1065', '#7A00E6', 'START', 16);
}

/* -------------------------
   MINIGAMES & ENDINGS
------------------------- */
// Minigame for Dark Path
function darkPathMinigame(){
  image(miniGamebackgroundImaged, 0, 0, width, height);
  startButtonD.pos = {x: -200, y: -200};

  // Keyboard controls
  if (kb.pressing('left'))  { player.vel.x = -2*SF; }
  else if (kb.pressing('right')) { player.vel.x = 2*SF; }
  else { player.vel.x = 0; }
  if (kb.pressing('down'))  { player.vel.y = 2*SF; }
  else if (kb.pressing('up')) { player.vel.y = -2*SF; }
  else { player.vel.y = 0; }

  // Touch controls (mobile): quadrants
  if (touches && touches.length > 0){
    const tx = touches[0].x, ty = touches[0].y;
    if (tx < width*0.4)  player.vel.x = -2*SF;
    if (tx > width*0.6)  player.vel.x =  2*SF;
    if (ty < height*0.4) player.vel.y = -2*SF;
    if (ty > height*0.6) player.vel.y =  2*SF;
  }

  // Reset avoider locations once they reach edge of screen
  if (avoider1.x > width) { avoider1.x = -50*SF; avoider1.y = 80*SF;  avoider1.vel.x = 3; }
  if (avoider2.x > width) { avoider2.x = -50*SF; avoider2.y = 150*SF; avoider2.vel.x = 2; }
  if (avoider3.x > width) { avoider3.x = -100*SF; avoider3.y = 300*SF; avoider3.vel.x = 1; }
  if (avoider4.x > width) { avoider4.x = -150*SF; avoider4.y = 250*SF; avoider4.vel.x = 2; }
  if (avoider5.x > width) { avoider5.x = -80*SF;  avoider5.y = 350*SF; avoider5.vel.x = 2; }

  //Don't let the player move off the screen & check win BEFORE clamp
  const bottomBand = 20*SF; // distance from bottom considered a goal band
  if (player.y >= height - bottomBand){
    player.vel.x = 0; player.vel.y = 0;
    youWinD();
    return;
  }

  if (player.y < 20*SF) player.y = 20*SF;
  if (player.x < 20*SF) player.x = 20*SF;
  if (player.x > width - 20*SF) player.x = width - 20*SF;

  // Score display
  textAlign(LEFT, BASELINE);
  fill('white');
  textSize(max(14, 20*SF));
  text('Score = ' + scoreD, 10*SF, 30*SF);

  // Collisions
  if (player.collides(avoider1) || player.collides(avoider2) || player.collides(avoider3) || player.collides(avoider4) || player.collides(avoider5)) {
    player.x = width/2; // reset to start
    player.y = 20*SF;
    scoreD = scoreD - 1;

    //Lose Condition
    if (scoreD < 0){
      // hide sprites
      player.x = -200; player.y = -200;
      avoider1.x = -200; avoider1.vel.x = 0;
      avoider2.x = -500; avoider2.vel.x = 0;
      avoider3.x = -1000; avoider3.vel.x = 0;
      avoider4.x = -1000; avoider4.vel.x = 0;
      avoider5.x = -1000; avoider5.vel.x = 0;

      // Display lose message
      drawEndingBackdrop('#00000066');
      fill('white'); textSize(max(24, 40*SF)); textAlign(CENTER, CENTER);
      text('Bad Ending!', width / 2, height / 2 - 150*SF);

      textSize(max(12, 18*SF));
      text('Your score ran out. \nMancrow laughs at you and says, \n"Your hope means nothing to me... \nYour wits are far too wee! \nYour fear is justified. \nYour anger is empty pride. \nYour name will be snuffed out..." \nNow you\'re trapped in the forest forever.', width / 2, height / 2 + 20*SF);

      showRestart('Back to Title');
      // keep looping so restart works
    }
  }
}

function youWinD() {
  // Draw win background and hide avoiders
  image(winBackgroundD, 0, 0, width, height);
  avoider1.x = -200; avoider1.vel.x = 0;
  avoider2.x = -500; avoider2.vel.x = 0;
  avoider3.x = -1000; avoider3.vel.x = 0;
  avoider4.x = -1000; avoider4.vel.x = 0;
  avoider5.x = -1000; avoider5.vel.x = 0;

  // Display win message
  drawEndingBackdrop('#00000040');
  fill('white');
  textSize(max(24, 40*SF));
  textAlign(CENTER, CENTER);
  text('You defeated Mancrow!', width / 2, height / 2 - 150*SF);

  textSize(max(12, 18*SF));
  text('Good Ending. \nYou passed the traps. \nMancrow screams and says: "What is this? Your faith? \nYour doubt? \nI usually get this right. \nNOOOOOO!" \nWoosh, Mancrow vanishes in thine air. \nYou have escaped!', width / 2, height / 2 + 30*SF);

  showRestart('Play Again');
}

// Light Path Minigame Function
function lightPathMinigame(){
  nextButtonL1.pos = {x:-200,y:-200};
  startButtonL.pos = {x:-200,y:-200};
  image(miniGamebackgroundImagel, 0, 0, width, height);

  // Position the game sprites
  catcher.pos = {x: catcher.x, y: height - 20*SF};
  if (fallingObject.pos.x < 0) { fallingObject.pos = {x: random(width), y: 0}; fallingObject.vel.y = 2; }
  if (loseObject.pos.x < 0) { loseObject.pos = {x: random(width), y: 0}; loseObject.vel.y = 2; }

  // Keyboard left/right
  if (kb.pressing('left')) { catcher.vel.x = -3*SF; }
  else if (kb.pressing('right')) { catcher.vel.x = 3*SF; }
  else { catcher.vel.x = 0; }

  // Touch: left/right halves
  if (touches && touches.length > 0){
    const tx = touches[0].x; catcher.vel.x = (tx < width/2) ? -3*SF : 3*SF;
  }

  // Stop catcher at edges
  const halfW = 50*SF;
  if (catcher.x < halfW) catcher.x = halfW;
  else if (catcher.x > width - halfW) catcher.x = width - halfW;

  // If fallingObject reaches bottom, lose a point
  if (fallingObject.y >= height) {
    fallingObject.y = 0; fallingObject.x = random(width); fallingObject.vel.y = random(1, 5); scoreL = scoreL - 1;
  }

  // If loseObject reaches bottom, nothing happens
  if (loseObject.y >= height) {
    loseObject.y = 0; loseObject.x = random(width); loseObject.vel.y = random(1, 5);
  }

  // If fallingObject collides with catcher, gain a point
  if (fallingObject.collides(catcher)) {
    fallingObject.y = 0; fallingObject.x = random(width); fallingObject.vel.y = random(1, 5); fallingObject.direction = 'down'; scoreL = scoreL + 1;
  }

  // If loseObject collides with catcher, lose a point
  if (loseObject.collides(catcher)) {
    loseObject.y = 0; loseObject.x = random(width); loseObject.vel.y = random(1, 5); loseObject.direction = 'down'; scoreL = scoreL - 1;
  }

  // Lose condition
  if (scoreL < 0) {
    catcher.pos = { x: -200, y: -200 };
    fallingObject.pos = { x: -200, y: -200 };
    loseObject.pos = { x: -200, y: -200 };

    drawEndingBackdrop('#00000066');
    fill('white');
    textSize(max(24, 40*SF));
    textAlign(CENTER, CENTER);
    text('Bad Ending', width / 2, height / 2 - 150*SF);

    textSize(max(12, 18*SF));
    text('You did not collect enough light orbs. \nNow you are forever trapped in the forest \nwith no hope left.', width / 2, height / 2 + 30*SF);

    showRestart('Try Again');
  }

  // Win condition
  if (scoreL > 9) { // Winning score
    youWinL();
  }

  // Score display
  textAlign(LEFT, BASELINE);
  fill('white');
  textSize(max(14, 20*SF));
  text('Score = ' + scoreL, 10*SF, 30*SF);
}

/* FUNCTIONS */

// Win screen (Light)
function youWinL() {
  image(winBackgroundL, 0, 0, width, height);

  catcher.pos = { x: -200, y: -200 };
  fallingObject.pos = { x: -200, y: -200 };
  loseObject.pos = { x: -200, y: -200 };

  drawEndingBackdrop('#ffffff80');
  fill('black');
  textSize(max(24, 40*SF));
  textAlign(CENTER, CENTER);
  text('You have found hope!', width / 2, height / 2 - 150*SF);

  textSize(max(12, 18*SF));
  text('Good Ending. \nYou collected enough light orbs to escape! \nYou realized that the orbs represented you, \nyour good side and bad side. \n\nSuccess is not final,\n failure is not fatal:\n It is the courage to continue that counts.', width / 2, height / 2 + 30*SF);

  showRestart('Play Again');
  noLoop();
}

// Soft translucent panel so restart button never covers text
function drawEndingBackdrop(col){
  noStroke(); fill(col);
  const pad = 24*SF;
  rect(pad, pad, width - pad*2, height - 120*SF - pad*2, 16*SF);
}

// Show restart button anchored near bottom
function showRestart(label){
  restartButton.pos = {x: width/2, y: height - 60*SF};
  styleButton(restartButton, 180, 48, '#6d28d9', '#a78bfa', label, 18);
}

// Full reset back to title
function hardRestartToTitle(){
  // Reset scores and state
  scoreD = 5; scoreL = 1; screen = 0;

  // Re-center key sprites
  player.pos = {x: width/2, y: 20*SF};
  catcher.pos = {x: width/2, y: height - 20*SF};

  // Respawn avoiders
  avoider1.pos = {x: 50*SF,  y: 230*SF}; avoider1.vel.x = 3;
  avoider2.pos = {x: -100,   y: 200*SF}; avoider2.vel.x = 5;
  avoider3.pos = {x: -100,   y: 300*SF}; avoider3.vel.x = 7;
  avoider4.pos = {x: -150,   y: 250*SF}; avoider4.vel.x = 4;
  avoider5.pos = {x: -80,    y: 350*SF}; avoider5.vel.x = 2;

  fallingObject.pos = {x: 100, y: 0}; fallingObject.vel.y = 2;
  loseObject.pos    = {x: 100, y: 0}; loseObject.vel.y    = 2;

  // Hide restart
  restartButton.pos = {x: -200, y: -200};
}

/* -------------------------
   MISC
------------------------- */
function keyPressed() {
  // Toggle music with M key or Spacebar
  if (key.toLowerCase() === 'm' || key === ' ' || key === 'Spacebar') {
    if (soundMusic && soundMusic.isPlaying()) {
      soundMusic.pause();
    } else if (soundMusic) {
      soundMusic.loop();
    }
  }
}