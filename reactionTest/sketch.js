var gameState = 'WAITING';  
var startTime;
var reactionTime;
var changeTime;
var buttonWidth = 200;
var buttonHeight = 50;
var buttonX, buttonY;

function setup() {
    createCanvas(800, 400);
    buttonX = width/2 - buttonWidth/2;
    buttonY = height/2 - buttonHeight/2;
}

function draw() {
    if (gameState === 'WAITING') {
        background(255);
        drawButton();
    }
    else if (gameState === 'READY') {
        background(200);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(24);
        text("Așteaptă culoarea verde...", width/2, height/2);
        
        if (millis() >= changeTime) {
            gameState = 'TESTING';
            startTime = millis();
        }
    }
    else if (gameState === 'TESTING') {
        background('#4CAF50');
    }
    else if (gameState === 'RESULT') {
        background('#4CAF50');
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(255);
        text("Bravo!", width/2, height/3);
        
        var timeInSeconds = reactionTime / 1000;
        text(reactionTime + " ms (" + timeInSeconds.toFixed(1) + " s)", width/2, height/2);
    }
    else if (gameState === 'TOO_EARLY') {
        background(200);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(24);
        text("Prea devreme! Încearcă din nou.", width/2, height/2);
    }
}

function drawButton() {
    fill('#3b82f6');
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 5);
    
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Click pentru a incepe", buttonX + buttonWidth/2, buttonY + buttonHeight/2);
}

function mousePressed() {
    if (gameState === 'WAITING') {
        if (mouseX > buttonX && mouseX < buttonX + buttonWidth &&
            mouseY > buttonY && mouseY < buttonY + buttonHeight) {
            startTest();
        }
    }
    else if (gameState === 'READY') {
        gameState = 'TOO_EARLY';
    }
    else if (gameState === 'TESTING') {
        reactionTime = millis() - startTime;
        gameState = 'RESULT';
    }
    else if (gameState === 'RESULT' || gameState === 'TOO_EARLY') {
        gameState = 'WAITING';
    }
}

function keyPressed() {
    if (keyCode === 32 && gameState === 'WAITING') { 
        startTest();
    }
    else if (keyCode === 82) { 
        gameState = 'WAITING';
    }
}

function startTest() {
    gameState = 'READY';
    changeTime = millis() + random(2000, 5000);
} 