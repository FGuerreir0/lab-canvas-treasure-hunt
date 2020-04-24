class Character {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.image = new Image();
        this.image.src = 'images/character-down.png';
        this.orientation = 'down';
        this.width = 50;
        this.height = 50;
    }
    moveUp() {
        //this.image.scr.addEventListener("load", function(event) {
        this.orientation = 'up';
        this.image = new Image();
        this.image.src = '/images/character-up.png';
        if (this.row > 0 && this.row < 10) {
            this.row--;
        } else {
            this.row = this.row;
        }
        //});
    }
    moveRight() {
        this.orientation = 'right';
        //this.image.scr.addEventListener("load", function(event) {
        this.image = new Image();
        this.image.src = '/images/character-right.png';
        //});
        if (this.col >= 0 && this.col < 9) {
            this.col++;
        } else {
            this.col = this.col;
        }
        // });
    }
    moveDown() {

        this.orientation = 'down';
        //this.image.scr.addEventListener("load", function(event) {
        this.image = new Image();

        this.image.src = '/images/character-down.png';
        if (this.row >= 0 && this.row < 9) {
            this.row++;
        } else {
            this.row = this.row;
        }
        // });
    }

    moveLeft() {
        //this.image.src.addEventListener("load", function(event) {
        this.orientation = 'left';
        this.image = new Image();
        this.image.src = '/images/character-left.png';
        if (this.col > 0 && this.col < 10) {
            this.col--;
        } else {
            this.col = this.col;
        }
        //});
    }
}