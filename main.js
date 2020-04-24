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

function drawEverything() {
    drawGrid();
    drawTreasure();
    drawPlayer();
}

const player = new Character(0, 0); // (0,0) = Initial position
const paintTreasure = new Treasure();
paintTreasure.setRandomPosition();


window.addEventListener("load", function(event) {
    paintTreasure.setRandomPosition();
    drawEverything();
    //TEST IF LOAD ALL IMAGES;
    player.moveDown();
    player.moveLeft();
    player.moveRight();
    player.moveUp();
    player.col = 0;
    player.row = 0;

});
//window.addEventListener("load", function(event) {
window.addEventListener('keydown', (event) => {
    event.preventDefault();

    switch (event.keyCode) {
        case 37:
            //LEFT
            //window.addEventListener("load", function(event) {
            player.moveLeft();
            clearCanvas();
            drawEverything();
            console.log(`Player col ${player.col} row ${player.row}`);
            console.log(`Treasure col ${paintTreasure.col} row ${paintTreasure.row}`);
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                result++;
                pushResult(result);
                clearCanvas();
                paintTreasure.setRandomPosition();
                player.moveLeft();
                drawEverything();
                console.log(`Player col ${player.col} row ${player.row}`);
                console.log(`Treasure col ${paintTreasure.col} row ${paintTreasure.row}`);
                break;
            } else {
                break;
            }
            //})

        case 38:
            //UP
            player.moveUp();
            clearCanvas();
            drawEverything();
            console.log(`Player col ${player.col} row ${player.row}`);
            console.log(`Treasure col ${paintTreasure.col} row ${paintTreasure.row}`);
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                result++;
                pushResult(result);
                player.moveUp();
                paintTreasure.setRandomPosition();
                clearCanvas();
                drawTreasure();
                drawEverything();
                console.log(`Player col ${player.col} row ${player.row}`);
                console.log(`Treasure col ${paintTreasure.col} row ${paintTreasure.row}`);
                break;
            } else {
                break;
            }
        case 39:
            //RIGHT
            clearCanvas();
            player.moveRight();
            drawEverything();
            console.log(`Player col ${player.col} row ${player.row}`);
            console.log(`Treasure col ${paintTreasure.col} row ${paintTreasure.row}`);
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                result++;
                pushResult(result);
                paintTreasure.setRandomPosition();
                clearCanvas();
                player.moveRight();
                drawTreasure();
                drawEverything();
                console.log(`Player col ${player.col} row ${player.row}`);
                console.log(`Treasure col ${paintTreasure.col} row ${paintTreasure.row}`);
                break;
            } else {
                break;
            }
        case 40:
            //DOWN
            player.moveDown();
            clearCanvas();
            drawEverything();
            console.log(`Player col ${player.col} row ${player.row}`);
            console.log(`Treasure col ${paintTreasure.col} row ${paintTreasure.row}`);
            if (player.col === paintTreasure.col && player.row === paintTreasure.row) {
                result++;
                pushResult(result);
                player.moveDown();
                paintTreasure.setRandomPosition();
                clearCanvas();
                drawTreasure();
                drawEverything();
                console.log(`Player col ${player.col} row ${player.row}`);
                console.log(`Treasure col ${paintTreasure.col} row ${paintTreasure.row}`);
                break;
            } else {
                break;
            }
    }
});
//});