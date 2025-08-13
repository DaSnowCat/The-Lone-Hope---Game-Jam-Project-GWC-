/* VARIABLES */
let backgroundImage, darkPathbackgroundImage, lightPathbackgroundImage;
let miniGamebackgroundImaged, miniGamebackgroundImagel;
let introFont, textFont1;
let winBackgroundD, winBackgroundL;
let soundMusic;

// Button Variables
let enterButton, a1Button, a2Button, nextButtonD1, nextButtonL1;
let startButtonD, startButtonL;

// Screen state
let screen = 0;

// Minigame Variables
let avoider1, avoider2, avoider3, avoider4, avoider5;
let player;
let scoreD = 5;

let catcher, fallingObject, loseObject;
let scoreL = 1;

/* PRELOAD */
function preload() {
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  darkPathbackgroundImage = loadImage('assets/Dark Path Background Image.png');
  lightPathbackgroundImage = loadImage('assets/Light Path Forest Background Image.png');
  miniGamebackgroundImaged = loadImage('assets/Minigame Background dark purple.png');
  miniGamebackgroundImagel = loadImage('assets/Light Path Minigame Background.png');
  winBackgroundD = loadImage('assets/Win screen dark purple gradient.jpg');
  winBackgroundL = loadImage('assets/Light path win screen gradient.jpg');

  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
  soundMusic = loadSound('assets/Celtic Mystery Music _ Forest of Forgetfulness.mp3');
}

/* SETUP */
function setup() {
  createCanvas(400, 400);
  setupButtons();
  setupSprites();
}

function setupButtons() {
  enterButton = createButton(width/2, height/2 + 130, 150, 40, 'Press Enter to Start', 12);
  a1Button = createButton(-200, -200, 100, 40, 'Dark Path', 20, '#2E1065');
  a2Button = createButton(-200, -200, 100, 40, 'Light Path', 20, '#d9b3ff');
  startButtonD = createButton(-200, -200, 100, 40, 'START', 12, '#2E1065');
  startButtonL = createButton(-200, -200, 100, 40, 'START', 20, '#d9b3ff');
  nextButtonD1 = createButton(-200, -200, 100, 40, 'NEXT', 12, '#2E1065');
  nextButtonL1 = createButton(-200, -200, 100, 40, 'NEXT', 20, '#d9b3ff');
}

function createButton(x, y, w, h, text, textSize, color = '#2E1065') {
  let btn = new Sprite(x, y, w, h, 'k');
  btn.color = color;
  btn.stroke = '#7A00E6';
  btn.strokeWeight = 3;
  btn.textColor = 'white';
  btn.text = text;
  btn.textSize = textSize;
  return btn;
}

function setupSprites() {
  // Player
  player = new Sprite(200, 20, 30);
  player.color = "#d6b7e1";

  // Avoiders
  let avoiderData = [
    {x: 50, y: 230, w: 145, h: 40, color: "#cc33ff", text: 'Life is not a problem to be solved, \nbut a reality to be experienced', vel: 3},
    {x: -100, y: 200, w: 80, h: 30, color: "#d2a5f3", text: 'In darkness, \ntruth is hidden', vel: 5},
    {x: -100, y: 300, w: 180, h: 20, color: "#cc33ff", text: 'This too shall pass', vel: 7},
    {x: -150, y: 250, w: 100, h: 20, color: "#d2a5f3", text: 'Still waters run deep.', vel: 4},
    {x: -80, y: 350, w: 140, h: 20, color: "#cc33ff", text: 'Dream but never sleep.', vel: 2}
  ];

  [avoider1, avoider2, avoider3, avoider4, avoider5] = avoiderData.map(data => {
    let avoider = new Sprite(data.x, data.y, data.w, data.h, "k");
    avoider.color = data.color;
    avoider.text = data.text;
    avoider.textSize = 12;
    avoider.textColor = data.color === "#cc33ff" ? 'black' : 'white';
    avoider.vel.x = data.vel;
    return avoider;
  });

  // Light Path sprites
  catcher = new Sprite(200, 380, 100, 20, 'k');
  catcher.color = '#e6ccff';

  fallingObject = new Sprite(100, 0, 20);
  fallingObject.color = '#cab4df';
  fallingObject.vel.y = 2;

  loseObject = new Sprite(100, 0, 20);
  loseObject.color = '#220240';
  loseObject.vel.y = 2;
}

/* MAIN DRAW LOOP */
function draw() {
  image(backgroundImage, 0, 0, width, height);

  handleScreens();
  handleInput();
}

function handleScreens() {
  switch(screen) {
    case 0: titleScreen(); break;
    case 'Choice A Screen': screenChoiceDoL(); break;
    case 'Dark Path dB1': darkPathA1(); break;
    case 'Light Path lB1': lightPathA1(); break;
    case 'Dark Path Continues 1': contDarkPath(); break;
    case 'Light Path Continues 1': contLightPath(); break;
    case 'Minigame (Avoider Game) for Dark Path Started': darkPathMinigame(); break;
    case 'Light Path Minigame Started': lightPathMinigame(); break;
  }
}

function handleInput() {
  if (enterButton && enterButton.mouse.presses()) {
    screen = 'Choice A Screen';
    if (!soundMusic.isPlaying()) soundMusic.loop();
  }

  if (screen === 'Choice A Screen') {
    if (a1Button && a1Button.mouse.presses()) screen = 'Dark Path dB1';
    else if (a2Button && a2Button.mouse.presses()) screen = 'Light Path lB1';
  }

  if (nextButtonD1 && nextButtonD1.mouse.presses()) screen = 'Dark Path Continues 1';
  if (nextButtonL1 && nextButtonL1.mouse.presses()) screen = 'Light Path Continues 1';
  if (startButtonD && startButtonD.mouse.presses()) screen = 'Minigame (Avoider Game) for Dark Path Started';
  if (startButtonL && startButtonL.mouse.presses()) screen = 'Light Path Minigame Started';
}

function hideAllSprites() {
  [avoider1, avoider2, avoider3, avoider4, avoider5, player, catcher, fallingObject, loseObject]
    .forEach(sprite => sprite.pos = {x: -100, y: -100});
}

function hideButtons() {
  [enterButton, a1Button, a2Button, nextButtonD1, nextButtonL1, startButtonD, startButtonL]
    .forEach(btn => btn.pos = {x: -200, y: -200});
}

/* SCREEN FUNCTIONS */
function titleScreen() {
  hideAllSprites();
  textFont(introFont);
  textSize(50);
  fill(255);
  textAlign(CENTER, TOP);
  text("The Lone \nHope", width/2, height * 0.075);
}

function screenChoiceDoL() {
  background(backgroundImage);
  hideAllSprites();
  enterButton.pos = {x: -100, y: -100};

  textFont(textFont1);
  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  text('You have found yourself in a strange forest. \nEverywhere you go, you see shades of purple. \nYou walk ahead and stumble upon two paths. \nOne is dark while the other is light. \nWhich will you choose?', width/2, height/2 - 100);

  a1Button.pos = {x: width/2 - 75, y: height/2 + 100};
  a2Button.pos = {x: width/2 + 75, y: height/2 + 100};
}

function darkPathA1() {
  background(darkPathbackgroundImage);
  [a1Button, a2Button].forEach(btn => btn.pos = {x: -200, y: -200});

  displayText('Soliday, soliday!", \nYou heard someone shounting in the distance. \n"This is for hope: without them, we quail \nThis is for wits: without them we fail \nThis is for fear: your fear makes you stornger \nThis is for anger at everything wrong \nThis is your name, simple and true \n\nAnd this is the secret held only by you... \nDefeat Mancrow with these by passing the traps!"', 15);

  nextButtonD1.pos = {x: width/2, y: height/2 + 100};
}

function lightPathA1() {
  background(lightPathbackgroundImage);
  [a1Button, a2Button].forEach(btn => btn.pos = {x: -200, y: -200});

  displayText('The atmosphere has changed to a light purple hue. \nYou feel calm and at peace. \nYet, you have feel the need to escape here.', 20);

  nextButtonL1.pos = {x: width/2, y: height/2 + 100};
}

function contDarkPath() {
  background(darkPathbackgroundImage);
  [a1Button, a2Button, nextButtonD1].forEach(btn => btn.pos = {x: -200, y: -200});

  displayText('To escape, you must avoid the moving tiles \nand make it to the bottom of the screen. \nClick button below to start mini game', 20);

  startButtonD.pos = {x: width/2, y: height/2 + 100};
}

function contLightPath() {
  background(lightPathbackgroundImage);
  [a1Button, a2Button, nextButtonL1].forEach(btn => btn.pos = {x: -200, y: -200});

  displayText('To escape, you must collect 10 light orbs. \nDo not collect the dark orbs. \nIf your goes goes less than zero, you lose. \n\nClick the button below to start.', 20);

  startButtonL.pos = {x: width/2, y: height/2 + 100};
}

function displayText(txt, size) {
  textFont(textFont1);
  textSize(size);
  fill(255);
  textAlign(CENTER, CENTER);
  text(txt, width/2, height/2 - 50);
}

/* MINIGAMES */
function darkPathMinigame() {
  background(miniGamebackgroundImaged);
  startButtonD.pos = {x: -200, y: -200};

  handlePlayerMovement();
  updateAvoiders();
  checkBoundaries();
  displayScore('Score = ' + scoreD);
  checkCollisions();
}

function handlePlayerMovement() {
  player.vel.x = 0;
  player.vel.y = 0;

  if (kb.pressing("left")) player.vel.x = -2;
  else if (kb.pressing("right")) player.vel.x = 2;
  else if (kb.pressing("down")) player.vel.y = 2;
  else if (kb.pressing("up")) player.vel.y = -2;
}

function updateAvoiders() {
  let avoiders = [avoider1, avoider2, avoider3, avoider4, avoider5];
  let resetData = [
    {x: -50, y: 80, vel: 3},
    {x: -50, y: 150, vel: 2},
    {x: -100, y: 300, vel: 1},
    {x: -150, y: 250, vel: 2},
    {x: -80, y: 350, vel: 2}
  ];

  avoiders.forEach((avoider, i) => {
    if (avoider.x > width) {
      avoider.x = resetData[i].x;
      avoider.y = resetData[i].y;
      avoider.vel.x = resetData[i].vel;
    }
  });
}

function checkBoundaries() {
  if (player.y < 20) player.y = 20;
  else if (player.y > 400) {
    player.vel.x = 0;
    player.vel.y = 0;
    youWinD();
  }

  if (player.x < 20) player.x = 20;
  else if (player.x > 380) player.x = 380;
}

function checkCollisions() {
  if (player.collides(avoider1) || player.collides(avoider2) || player.collides(avoider3) || player.collides(avoider4) || player.collides(avoider5)) {
    player.x = 200;
    player.y = 20;
    scoreD--;

    if (scoreD < 0) gameOver(false);
  }
}

function lightPathMinigame() {
  background(miniGamebackgroundImagel);
  [nextButtonL1, startButtonL].forEach(btn => btn.pos = {x: -200, y: -200});

  catcher.pos = {x: catcher.x, y: 380};
  updateFallingObjects();
  handleCatcherMovement();
  checkCatching();
  displayScore('Score = ' + scoreL);

  if (scoreL < 0) gameOver(true);
  if (scoreL > 9) youWinL();
}

function updateFallingObjects() {
  if (fallingObject.pos.x < 0 || fallingObject.y >= height) {
    fallingObject.pos = {x: random(width), y: 0};
    fallingObject.vel.y = random(1, 5);
    if (fallingObject.y >= height) scoreL--;
  }

  if (loseObject.pos.x < 0 || loseObject.y >= height) {
    loseObject.pos = {x: random(width), y: 0};
    loseObject.vel.y = random(1, 5);
  }
}

function handleCatcherMovement() {
  catcher.vel.x = 0;
  if (kb.pressing('left')) catcher.vel.x = -3;
  else if (kb.pressing('right')) catcher.vel.x = 3;

  catcher.x = constrain(catcher.x, 50, 350);
}

function checkCatching() {
  if (fallingObject.collides(catcher)) {
    resetFallingObject(fallingObject);
    scoreL++;
  }

  if (loseObject.collides(catcher)) {
    resetFallingObject(loseObject);
    scoreL--;
  }
}

function resetFallingObject(obj) {
  obj.pos = {x: random(width), y: 0};
  obj.vel.y = random(1, 5);
}

function displayScore(scoreText) {
  textAlign(LEFT, BASELINE);
  fill('white');
  textSize(20);
  text(scoreText, 10, 30);
}

/* END GAME FUNCTIONS */
function gameOver(isLightPath) {
  hideAllSprites();

  fill('white');
  textSize(40);
  textAlign(CENTER, CENTER);
  text('Bad Ending!', width/2, height/2 - 150);

  textSize(20);
  if (isLightPath) {
    text('You did not collect enough light orbs. \nNow you are forever trapped in the forest \nwith no hope left.', width/2, height/2 + 30);
  } else {
    text('Your score ran out. \nMancrow laughs at you and says, \n"Your hope means nothing to me... \nYour wits are far too wee! \nYour fear is justified. \nYour anger is empty pride. \nYour name will be snuffed out..." \nNow your trapped in the forest forever.', width/2, height/2 + 30);
  }

  noLoop();
}

function youWinD() {
  background(winBackgroundD);
  hideAllSprites();

  fill('white');
  textSize(40);
  textAlign(CENTER, CENTER);
  text('You defeated Mancrow!', width/2, height/2 - 150);

  textSize(20);
  text('Good Ending. \nYou passed the traps. \nMancrow screams and says: "What is this? Your faith? \nYour doubt? \nI usually get this right. \nNOOOOOO! " \nWoosh, Mancrow vanishes in thine air. \nYou have escaped!', width/2, height/2 + 30);
}

function youWinL() {
  background(winBackgroundL);
  hideAllSprites();

  fill('black');
  textSize(40);
  textAlign(CENTER, CENTER);
  text('You have found hope!', width/2, height/2 - 150);

  textSize(20);
  text('Good Ending. \nYou collected enough light orbs to escape! \nYou realized that the orbs represented you, \nyour good side and bad side. \n\nSuccess is not final,\n failure is not fatal:\n It is the courage to continue that counts.', width/2, height/2 + 30);

  noLoop();
}

function keyPressed() {
  if (key === 'm' || key === ' ') {
    if (soundMusic.isPlaying()) {
      soundMusic.pause();
    } else {
      soundMusic.loop();
    }
  }
}