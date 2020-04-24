class Treasure {
    constructor() {
        this.row = 0;
        this.col = 0;
        this.setRandomPosition();
        this.image = new Image();
        this.image.src = 'images/treasure.png';
        this.width = 50;
        this.height = 50;
    }
    setRandomPosition() {
        this.row = Math.floor(Math.random() * 10);
        this.col = Math.floor(Math.random() * 10);
    }
}