//Use the arrow keys to move your player from the top of the screen to the bottom of the screen. Watch out for the moving objects. 

/* VARIABLES */
let avoider1, avoider2, avoider3, avoider4, avoider5;
let player;

/* PRELOAD LOADS FILES */
function preload() {

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  background(137, 213, 210);

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
  background(137, 213, 210);

  //Program the player to move
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
  // step 3: check collisions 
  if (player.collides(avoider1) || player.collides(avoider2) || player.collides(avoider3) || player.collides(avoider4) || player.collides(avoider5)) {
    player.x = 200; // step 3: Move the ball to the start
    player.y = 20; // step 3: Move the ball to the start
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