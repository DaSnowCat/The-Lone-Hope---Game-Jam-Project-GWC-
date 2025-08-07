
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
  b1Button = new Sprite(-200, -200);
  b2Button = new Sprite(-200, -200);
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

  if (screen = 'Choice A Screen'){
    screenChoice1();
  }

  // Show title screen with "The Lone Hope"
  // if (screen == 0) {
  //   titleScreen();
    
  // // This shows choices A1 and A2
  // if (enterButton.mouse.presses()) {
  //     screen = 1;
  //   }
  // } 

  // //This shows screen after A1
  // if (screen == 1) {
  //   screenChoice1();
    
  // // When A1 button is pressed, move to screen 2A
  //   if (a1Button.mouse.presses()) {
  //     screen = 2;
  //   } 
      
  //   else if (a2Button.mouse.presses()) {

  //     screen = 3;
  //   }
  // } else if (screen == 2) {
  //   screenA2();
    
  //   // Screen A2 button logic
  //   if (b1Button.mouse.presses()) {
  //     screen = 4;
  //   } else if (b2Button.mouse.presses()) {
  //     screen = 5;
  //   }
  // } else if (screen == 3) {
  //   screenB1();
  // } else if (screen == 4) {
  //   screenB2();
  // } else if (screen == 5) {
  //   endScreen();
  // }

  // if (nextButton.mouse.presses()) {
  //   screen = 6;
  // } else if (screen == 6){
  //   afterNextButton()
  //   screen == 7
  // }

  // if (screen == 7){
  //   if (nextButton.mouse.presses()){
  //     afterNextButton2();
  //   }
  // }

  
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

// Screen A1 Function
function screenChoice1() {
  
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

  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('Soliday, Soliday! \nYou have been chosen... \nTake these!',
       width/2,
       height/2 - 50);
}

// Screen A2 Function
function screenA2() {
  
  // A1 and A2 Hidden
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  
  // B1 
  nextButton.pos = {x: width/2, y:height/2 + 100}
  nextButton.w = 100;
  nextButton.h = 40;
  nextButton.color = '#2E1065';
  nextButton.stroke = '#7A00E6';
  nextButton.stokeWeight = 3;
  nextButton.textColor = 'white';
  nextButton.text = 'NEXT';
  nextButton.textSize = 12;
  
  
  // b1Button.pos = {x: width/2 - 75, y: height/2 + 100};
  // b1Button.w = 100;
  // b1Button.h = 40;
  // b1Button.collider = 'k';
  // b1Button.color = '#2E1065';
  // b1Button.stroke = '#7A00E6';
  // b1Button.strokeWeight = 3;
  // b1Button.textColor = 'white';
  // b1Button.text = 'Choice B1';
  // b1Button.textSize = 12;
  
  // b2Button.pos = {x: width/2 + 75, y: height/2 + 100};
  // b2Button.w = 100;
  // b2Button.h = 40;
  // b2Button.collider = 'k';
  // b2Button.color = '#2E1065';
  // b2Button.stroke = '#7A00E6';
  // b2Button.strokeWeight = 3;
  // b2Button.textColor = 'white';
  // b2Button.text = 'Choice B2';
  // b2Button.textSize = 12;

  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is for hope: without them, we quail \nThis is for wits: without them we fail \nThis is for fear: your fear makes you stornger \nThis is for anger at everything wrong \nThis is your name, simple and true \n\nAnd this is the secret held only by you... ',
       width/2,
       height/2 - 50);
}

// Screen B1 Function
function screenB1() {
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
  text('story to be continued...',
       width/2,
       height/2);
}

// Screen B2 Function
function screenB2() {
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
  text('Mancrow is coming! \nBe true and wise. \n\nModded Minigame to be added soon',
       width/2,
       height/2);
}

// End Screen Function
function endScreen() {
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

function afterNextButton(){
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};

  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('ANOTHER SCREEN Mdmid',
       width/2,
       height/2);
}

function afterNextButton2(){
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -200, y: -200};
  b1Button.pos = {x: -200, y: -200};
  b2Button.pos = {x: -200, y: -200};

  // Display screen text
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is the next functionnnnnn',
       width/2,
       height/2);
}

// The dark path mini game
// function miniGame1() {
//   avoider1 = new Sprite(10, 100, 120, 20, "k");
//   avoider1.color = "green";
//   avoider1.vel.x = 3; 

//   avoider2 = new Sprite(-100, 200, 80, 20, "k");
//   avoider2.color = "blue";
//   avoider2.vel.x = 5; 

//   avoider3 = new Sprite(-100, 300, 180, 20, "k");
//   avoider3.color = "purple";
//   avoider3.vel.x = 2; 

//   avoider4 = new Sprite(-150, 250, 100, 20, "k");
//   avoider4.color = "orange";
//   avoider4.vel.x = 4; 

//   avoider5 = new Sprite(-80, 350, 140, 20, "k");
//   avoider5.color = "red";
//   avoider5.vel.x = 12; 
  
// }
