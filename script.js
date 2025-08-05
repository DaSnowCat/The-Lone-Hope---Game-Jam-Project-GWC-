/* VARIABLES */
let backgroundImage;
let introFont;
let textFont1;
let enterButton;
let currentScreen = "title"; // Track which screen we're on

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImage = loadImage('assets/Purple Gradient Forest.png');
  introFont = loadFont('assets/Melted Monster.ttf');
  textFont1 = loadFont('assets/CaveatBrush-Regular.ttf');
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  
  // Create enter button sprite
  enterButton = new Sprite(width/2, height/2 + 100);
  enterButton.w = 150;
  enterButton.h = 40;
  enterButton.color = '#301934';
  enterButton.stroke = 'yellow';
  enterButton.strokeWeight = 5;
  enterButton.textColor = 'white';
  enterButton.text = 'Press Enter to Start';
  enterButton.textSize = 12;
  
  // Add gradient effect to button (custom draw function)
  enterButton.draw = function() {
    push();
    translate(this.x, this.y);
    
    // Create button gradient
    let btnGradient = drawingContext.createLinearGradient(-this.w/2, -this.h/2, -this.w/2, this.h/2);
    btnGradient.addColorStop(0, '#6A4C93');
    btnGradient.addColorStop(1, '#301934');
    
    drawingContext.fillStyle = btnGradient;
    drawingContext.strokeStyle = 'yellow';
    drawingContext.lineWidth = 5;
    
    rect(0, 0, this.w, this.h);
    
    // Draw text
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(12);
    text(this.text, 0, 0);
    
    pop();
  };
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display the background image to fill the entire canvas
  image(backgroundImage, 0, 0, width, height);
  
  if (currentScreen == "title") {
    titleScreen();
  } else if (currentScreen == "intro") {
    introScreen();
  }
  
  // Check if enter button is clicked
  if (enterButton.mouse.presses()) {
    currentScreen = "intro";
    enterButton.visible = false; // Hide the button after clicking
  }
}

/* SCREEN FUNCTIONS */
function titleScreen() {
  // Create gradient background overlay
  let gradient = drawingContext.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(48, 25, 52, 0.3)'); // Purple with transparency
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.7)'); // Black with transparency
  
  drawingContext.fillStyle = gradient;
  drawingContext.fillRect(0, 0, width, height);
  
  // Set up title text with gradient
  textFont(introFont);
  textSize(50);
  
  // Create text gradient
  let textGradient = drawingContext.createLinearGradient(0, 0, 0, 100);
  textGradient.addColorStop(0, '#FFD700'); // Gold
  textGradient.addColorStop(0.5, '#FF6B6B'); // Pink
  textGradient.addColorStop(1, '#4ECDC4'); // Cyan
  
  drawingContext.fillStyle = textGradient;
  textAlign(CENTER, TOP);
  
  // Draw title at top of screen (adaptive positioning)
  text("The Lone \nHope", width/2, height * 0.075);
}

/* FUNCTIONS */
function introScreen(){
  // Create radial gradient background
  let radialGradient = drawingContext.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
  radialGradient.addColorStop(0, 'rgba(138, 43, 226, 0.4)'); // Purple center
  radialGradient.addColorStop(0.7, 'rgba(25, 25, 112, 0.6)'); // Navy
  radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)'); // Black edges
  
  drawingContext.fillStyle = radialGradient;
  drawingContext.fillRect(0, 0, width, height);
  
  textFont(textFont1);
  textSize(20);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text('This is the Intro Screen',
      width/2,
      height * 0.075);
}