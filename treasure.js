class Treasure {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.image = new Image();
        this.image.src = 'images/treasure.png';

    }
    setRandomPosition() {
        this.row = Math.floor(Math.random() * 10);
        this.col = Math.floor(Math.random() * 10);
    }
}