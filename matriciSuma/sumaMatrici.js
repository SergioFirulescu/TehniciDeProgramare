let canvasHeight = 0;
let canvasWidth = 0;
let sumMatrix = [];

const colorfulBoxesCols = 3;
const colorfulBoxesRows = 3;
const colorfulBoxes = [];

function setup() {
  canvasHeight = windowHeight;
  canvasWidth = windowWidth;
  createCanvas(canvasWidth, canvasHeight);

  const matrix1 = [];
  const matrix2 = [];
  initBoxes(25, 25, colorfulBoxesCols, colorfulBoxesRows, matrix1);
  initBoxes(350, 25, colorfulBoxesCols, colorfulBoxesRows, matrix2);

  colorfulBoxes.push(matrix1);
  colorfulBoxes.push(matrix2);

  sumMatrix = calculateMatrixSum(matrix1, matrix2);
}

function draw() {
  background("gray");
  drawColorfulBoxes();
  drawEqual();
  drawPlus();
  drawSumMatrix();
}

function drawColorfulBoxes() {
  for (let matrix of colorfulBoxes) { 
    for (let row of matrix) {       
      for (let box of row) {         
        drawBox(box);
      }
    }
  }
}

function drawBox(obj) {
  fill(obj.color.r, obj.color.g, obj.color.b);
  square(obj.x, obj.y, obj.s);

  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(obj.num, obj.x + obj.s / 2, obj.y + obj.s / 2);
}

function initBoxes(width, height, cols, rows, matrix) {
  let x = width;
  let y = height;

  for (let i = 0; i < rows; i++) {
    const lines = [];
    for (let j = 0; j < cols; j++) {
      const box = {
        x: x,
        y: y,
        s: 40,
        num: Math.floor(Math.random() * 10),
        color: {
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
      };
      lines.push(box);
      x += 50;
    }
    matrix.push(lines); 
    x = width;
    y += 50;
  }
}

function calculateMatrixSum(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    const row = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      const sum = matrix1[i][j].num + matrix2[i][j].num;
      const box = {
        x: 675 + j * 50,
        y: 25 + i * 50,
        s: 40,
        num: sum,
        color: {
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
      };
      row.push(box);
    }
    result.push(row);
  }
  return result;
}

function drawSumMatrix() {
  for (let row of sumMatrix) {
    for (let box of row) {
      drawBox(box);
    }
  }
}

function drawEqual() {
  fill("black");
  beginShape(QUADS);
  vertex(600, 110);
  vertex(600, 125);
  vertex(550, 125);
  vertex(550, 110);
  vertex(600, 80);
  vertex(600, 95);
  vertex(550, 95);
  vertex(550, 80);
  endShape();
}

function drawPlus() {
  fill("black");
  beginShape(QUADS);
  vertex(280, 100);
  vertex(280, 115);
  vertex(225, 115);
  vertex(225, 100);
  vertex(260, 80);
  vertex(260, 135);
  vertex(245, 135);
  vertex(245, 80);
  endShape();
}