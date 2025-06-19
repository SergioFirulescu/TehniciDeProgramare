var isAnimating = false;
var lastSwitchTime = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
               'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var currentLetter = 'A';
var currentColor;
var startButtonX = 450;
var startButtonY = 200;
var stopButtonX = 600;
var stopButtonY = 200;
var buttonWidth = 100;
var buttonHeight = 50;

function setup() {
    createCanvas(800, 400);
    currentColor = color(random(255), random(255), random(255));
}

function draw() {
    background(255);
    
    // Draw current letter
    textSize(120);
    textAlign(CENTER, CENTER);
    fill(currentColor);
    text(currentLetter, width/2 - 100, height/2);
    
    // Draw START button
    fill('#4CAF50');
    rect(startButtonX, startButtonY, buttonWidth, buttonHeight, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("START", startButtonX + buttonWidth/2, startButtonY + buttonHeight/2);
    
    // Draw STOP button
    fill('#dc2626');
    rect(stopButtonX, stopButtonY, buttonWidth, buttonHeight, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("STOP", stopButtonX + buttonWidth/2, stopButtonY + buttonHeight/2);
    
    if (isAnimating && millis() - lastSwitchTime >= 500) {
        // Pick a random letter
        var randomIndex = Math.floor(random(letters.length));
        currentLetter = letters[randomIndex];
        
        // Generate new random color
        currentColor = color(random(255), random(255), random(255));
        
        lastSwitchTime = millis();
    }
}

function mousePressed() {
    if (mouseX > startButtonX && mouseX < startButtonX + buttonWidth &&
        mouseY > startButtonY && mouseY < startButtonY + buttonHeight) {
        isAnimating = true;
        lastSwitchTime = millis();
    }
    
    if (mouseX > stopButtonX && mouseX < stopButtonX + buttonWidth &&
        mouseY > stopButtonY && mouseY < stopButtonY + buttonHeight) {
        isAnimating = false;
    }
} 