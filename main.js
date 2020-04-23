// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let result = 0;
const width = canvas.width;
const height = canvas.height;

const $resultParagraph = document.querySelector('.result')

function pushResult(result) {
    $resultParagraph.innerText = result;
}


// Iteration 1
function drawGrid() {
    context.strokeStyle = "black";

    for (let x = 0; x <= width; x += 50) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
    }
    for (let y = 0; y <= height; y += 50) {
        //context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
    }
}

function drawPlayer() {
    //player.image.addEventListener('load', (event) => {
    context.drawImage(player.image, player.col * 50, player.row * 50, 50, 50);
    //});
}

function drawTreasure() {
    context.drawImage(paintTreasure.image, paintTreasure.col * 50, paintTreasure.row * 50, 50, 50);
}

function clearCanvas() {
    context.clearRect(0, 0, width, height);
}

const player = new Character(0, 0); // (0,0) = Initial position
const paintTreasure = new Treasure();
paintTreasure.setRandomPosition();

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight();

function drawEverything() {
    drawGrid();
    pushResult(result);

    drawTreasure();
    drawPlayer();
}
window.addEventListener("load", function(event) {
    drawEverything();
});


//window.addEventListener("load", function(event) {
window.addEventListener('keydown', (event) => {
    event.preventDefault();
    switch (event.keyCode) {
        case 37:
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                player.moveLeft();
                clearCanvas();
                paintTreasure.setRandomPosition();
                drawEverything();
                result++;
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
                result++;
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
                result++;
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
                result++;
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
//});