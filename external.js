let color = 'black';
let click = true;

let board = document.querySelector('.board')
board.style.gridTemplateColumns = 'repeat(32, 1fr)';
board.style.gridTemplateRows = 'repeat(32, 1fr)';

for(let i = 0; i < 1024; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.appendChild(square);
}

function colorSquare() {
    if(click) {
    if(color === 'multi') {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        this.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
    } else {
        this.style.backgroundColor = color;
    }
} }

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board')
    let squares = document.querySelectorAll('div');
    squares.forEach((div) => (div.style.backgroundColor = 'white'));
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName = 'BUTTON') {
        click = !click;
    }
})