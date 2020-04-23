// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
    for (let x = 0; x <= width; x += 50) {
        context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
    }

    for (let y = 0; y <= height; y += 50) {
        context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
    }
}



function drawPlayer() {
    //context.fillStyle = "black";
    context.drawImage(player.image, player.col * 50, player.row * 50, 50, 50);
    //context.fillRect(player.col * 50, player.row * 50, 50, 50);
}



function drawTreasure() {
    //console.log(paintTreasure.col);
    //console.log(paintTreasure.row);
    //  context.fillStyle = ('blue');
    //    context.fillRect(paintTreasure.col * 50, paintTreasure.row * 50, 50, 50);
    context.drawImage(paintTreasure.image, paintTreasure.col * 50, paintTreasure.row * 50, 50, 50);

}


function clearCanvas() {
    context.clearRect(0, 0, width, height);
}


const player = new Character(0, 0); // (0,0) = Initial position
const paintTreasure = new Treasure(2, 5);
paintTreasure.setRandomPosition();

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight();

function drawEverything() {
    drawGrid();
    drawPlayer();
    drawTreasure();
}

drawEverything();


window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();

    // React based on the key pressed
    switch (event.keyCode) {
        case 37:
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                player.moveLeft();
                paintTreasure.setRandomPosition();
                clearCanvas();
                drawTreasure();
                drawEverything();
                break;
            } else {
                console.log('left');
                player.moveLeft();
                clearCanvas();
                drawEverything();
                break;
            }
        case 38:
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                player.moveUp();
                paintTreasure.setRandomPosition();
                clearCanvas();
                drawTreasure();
                drawEverything();
                break;
            } else {
                console.log('up');
                player.moveUp();
                clearCanvas();
                drawEverything();
                break;
            }
        case 39:
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                player.moveRight();
                paintTreasure.setRandomPosition();
                clearCanvas();
                drawTreasure();
                drawEverything();
                break;
            } else {
                console.log('right');
                player.moveRight();
                clearCanvas();
                drawEverything();
                break;
            }
        case 40:
            clearCanvas();
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                player.moveDown();
                paintTreasure.setRandomPosition();
                clearCanvas();
                drawTreasure();
                drawEverything();
                break;
            } else {
                console.log('down');
                player.moveDown();
                clearCanvas();
                drawEverything();
                break;
            }
    }
});