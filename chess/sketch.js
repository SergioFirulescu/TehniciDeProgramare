var board = {
    size: 400,
    cellSize: 50,
    lightColor: '#f0d9b5',
    darkColor: '#b58863'
};

var pieces = [];

function Piece(row, col, isWhite) {
    this.row = row;
    this.col = col;
    this.isWhite = isWhite;
    
    this.draw = function() {
        var x = board.cellSize * this.col + board.cellSize/2;
        var y = board.cellSize * this.row + board.cellSize/2;
        
        fill(this.isWhite ? 255 : 0);
        stroke(this.isWhite ? 0 : 255);
        strokeWeight(2);
        ellipse(x, y, 30, 30);
    };
}

function setup() {
    createCanvas(board.size, board.size);
    
    // Create white pieces
    // Back row (row 7)
    pieces.push(new Piece(7, 0, true)); // Rook
    pieces.push(new Piece(7, 1, true)); // Knight
    pieces.push(new Piece(7, 2, true)); // Bishop
    pieces.push(new Piece(7, 3, true)); // Queen
    pieces.push(new Piece(7, 4, true)); // King
    pieces.push(new Piece(7, 5, true)); // Bishop
    pieces.push(new Piece(7, 6, true)); // Knight
    pieces.push(new Piece(7, 7, true)); // Rook
    
    // Pawns (row 6)
    for(var col = 0; col < 8; col++) {
        pieces.push(new Piece(6, col, true));
    }
    
    // Create black pieces
    // Back row (row 0)
    pieces.push(new Piece(0, 0, false)); // Rook
    pieces.push(new Piece(0, 1, false)); // Knight
    pieces.push(new Piece(0, 2, false)); // Bishop
    pieces.push(new Piece(0, 3, false)); // Queen
    pieces.push(new Piece(0, 4, false)); // King
    pieces.push(new Piece(0, 5, false)); // Bishop
    pieces.push(new Piece(0, 6, false)); // Knight
    pieces.push(new Piece(0, 7, false)); // Rook
    
    // Pawns (row 1)
    for(var col = 0; col < 8; col++) {
        pieces.push(new Piece(1, col, false));
    }
}

function draw() {
    background(255);
    drawBoard();
    drawPieces();
}

function drawBoard() {
    for(var row = 0; row < 8; row++) {
        for(var col = 0; col < 8; col++) {
            var x = col * board.cellSize;
            var y = row * board.cellSize;
            var isLight = (row + col) % 2 === 0;
            
            fill(isLight ? board.lightColor : board.darkColor);
            noStroke();
            rect(x, y, board.cellSize, board.cellSize);
        }
    }
}

function drawPieces() {
    for(var i = 0; i < pieces.length; i++) {
        pieces[i].draw();
    }
} 