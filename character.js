class Character {
    constructor(row, col) {
        this.row = row;
        this.col = col;

        this.image = new Image();
        this.image.src = 'images/character-down.png';
    }
    moveUp() {
        this.row--;
    }
    moveRight() {
        this.col++;
    }
    moveDown() {
        this.row++;
    }
    moveLeft() {
        this.col--;
    }
}