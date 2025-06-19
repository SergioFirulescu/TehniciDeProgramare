var isAnimating = false;
var lastSwitchTime = 0;
var startButtonColor = '#ff0000';
var stopButtonColor = '#4169e1';
var startButtonX = 300;
var startButtonY = 200;
var stopButtonX = 500;
var stopButtonY = 200;
var buttonWidth = 100;
var buttonHeight = 50;

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(255);
    
    // Draw START button
    fill(startButtonColor);
    rect(startButtonX, startButtonY, buttonWidth, buttonHeight, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("START", startButtonX + buttonWidth/2, startButtonY + buttonHeight/2);
    
    // Draw STOP button
    fill(stopButtonColor);
    rect(stopButtonX, stopButtonY, buttonWidth, buttonHeight, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("STOP", stopButtonX + buttonWidth/2, stopButtonY + buttonHeight/2);
    
    if (isAnimating && millis() - lastSwitchTime >= 1000) {
        var tempColor = startButtonColor;
        startButtonColor = stopButtonColor;
        stopButtonColor = tempColor;
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