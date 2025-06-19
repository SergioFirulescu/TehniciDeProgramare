var matrix1 = [];
var matrix2 = [];
var resultMatrix = [];
var cellSize = 80;
var padding = 20;
var buttonWidth = 180;
var buttonHeight = 40;
var buttonX, buttonY;


var matrix1Colors = [
    ['#86efac', '#e9d5ff', '#93c5fd'], 
    ['#9ca3af', '#c084fc', '#fbbf24'], 
    ['#fca5a5', '#86efac', '#d1d5db']  
];

var matrix2Colors = [
    ['#f472b6', '#fb923c', '#f87171'], 
    ['#bfdbfe', '#fef08a', '#fecaca'], 
    ['#f9a8d4', '#f87171', '#e5e7eb']  
];

var resultColors = [
    ['#fef08a', '#fb923c', '#991b1b'], 
    ['#2563eb', '#9333ea', '#ea580c'], 
    ['#bfdbfe', '#f87171', '#2563eb']  
];

function setup() {
    createCanvas(900, 400);
    initializeMatrices();
    
    buttonX = width / 2 - buttonWidth / 2;
    buttonY = height - buttonHeight - padding;
}

function draw() {
    background('#f3f4f6');
    
    drawMatrix(matrix1, 50, height/2 - cellSize * 1.5, 3, 3, matrix1Colors);
    
    textSize(32);
    textAlign(CENTER, CENTER);
    text('+', 320, height/2);
    
    drawMatrix(matrix2, 380, height/2 - cellSize * 1.5, 3, 3, matrix2Colors);
    
    text('=', 650, height/2);
    
    drawMatrix(resultMatrix, 700, height/2 - cellSize * 1.5, 3, 3, resultColors);
    
    drawButton();
}

function drawMatrix(matrix, x, y, rows, cols, colors) {
    textSize(24);
    textAlign(CENTER, CENTER);
    
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            fill(colors[i][j]);
            rect(x + j * cellSize, y + i * cellSize, cellSize, cellSize);
            fill(0);
            text(matrix[i][j], x + j * cellSize + cellSize/2, y + i * cellSize + cellSize/2);
        }
    }
}

function drawButton() {
    if (mouseX > buttonX && mouseX < buttonX + buttonWidth &&
        mouseY > buttonY && mouseY < buttonY + buttonHeight) {
        fill('#2563eb'); 
    } else {
        fill('#3b82f6'); 
    }
    rect(buttonX, buttonY, buttonWidth, buttonHeight, 5);
    
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text('Calculate Sum', buttonX + buttonWidth/2, buttonY + buttonHeight/2);
}

function mousePressed() {
    if (mouseX > buttonX && mouseX < buttonX + buttonWidth &&
        mouseY > buttonY && mouseY < buttonY + buttonHeight) {
        resultMatrix = sumaMatrici(matrix1, matrix2);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initializeMatrices() {
    matrix1 = [];
    for (var i = 0; i < 3; i++) {
        matrix1[i] = [];
        for (var j = 0; j < 3; j++) {
            matrix1[i][j] = getRandomNumber(1, 20);
        }
    }
    
    matrix2 = [];
    for (var i = 0; i < 3; i++) {
        matrix2[i] = [];
        for (var j = 0; j < 3; j++) {
            matrix2[i][j] = getRandomNumber(1, 20);
        }
    }
    
    resultMatrix = sumaMatrici(matrix1, matrix2);
} 