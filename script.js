const mainContainer = document.querySelector('.main-container');
let squares = [];
let rows = [];
createGrid(16);

// Event listeners on buttons *********************************************************************
const resizeBtn = document.querySelector('button[name="resize"]');
resizeBtn.addEventListener('click', resize);

const eraserBtn = document.querySelector('button[name="eraser"]');
eraserBtn.addEventListener('click', eraseSquares);

const blackPen = document.querySelector('button[name="black"]')
blackPen.addEventListener('click', chooseBlack);

const randomBtn = document.querySelector('button[name="random"]')
randomBtn.addEventListener('click', randomColor)

const shadingBtn = document.querySelector('button[name="shading"]')
shadingBtn.addEventListener('click', shade);

const clearBtn = document.querySelector('button[name="clear"]');
clearBtn.addEventListener('click', clearBoard);

// Grid creation **********************************************************************
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        rows.push(row);
        mainContainer.appendChild(row);
        createSquares(size, row);
    }
}

function createSquares(size, row) {
    for (let i = 0; i < size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        squares.push(square);
        row.appendChild(square);
    }
    squares.forEach((square) => square.addEventListener('mouseenter', paintBlack));
}

// Main functionality for buttons **********************************************************************
function chooseBlack(e) {
    clearAllEventListeners();
    squares.forEach((square) => square.addEventListener('mouseenter', paintBlack));
}

function paintBlack(e) {
    if (!(e.buttons === 1)) {
        this.style.backgroundColor = '#000000';
    }
}

function eraseSquares(e) {
    clearAllEventListeners();
    squares.forEach((square) => square.addEventListener('mouseenter', paintWhite));
}

function paintWhite(e) {
    if (!(e.buttons === 1)) {
        this.style.backgroundColor = '#ffffff';
    }
}

function randomColor(e) {
    clearAllEventListeners();
    squares.forEach((square) => square.addEventListener('mouseenter', paintRandom));
}

function paintRandom(e) {
    if (!(e.buttons === 1)) {
        this.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * (256 ** 3 + 1)).toString(16);
}

function shade(e) {
    clearAllEventListeners();
    squares.forEach(square => square.style.backgroundColor = 'rgba(0, 0, 0, 0)');
    squares.forEach((square) => square.addEventListener('mouseenter', paintShade));

}

function paintShade(e) {
    if (!(e.buttons === 1)) {
        let color = this.style.backgroundColor;
        let alpha = +color.replace(/[a-z ()]/g, '').split(',')[3];
        this.style.backgroundColor = `rgba(0, 0, 0, ${alpha === 0 ? 0.1 : Math.round((alpha + 0.1) * 100) / 100})`;
    }
}

function clearBoard() {
    squares.forEach(square => square.style.backgroundColor = 'rgba(0, 0, 0, 0)');
}

function resize() {
    do{
        size = +prompt('Number of squares on each side (0 - 100):');
        console.log(+size);
    } while((size < 1 || size > 100) || Number.isNaN(size));
    rows.forEach(row => mainContainer.removeChild(row));
    rows = [];
    squares = [];
    createGrid(size);
}

// Aux fuction *************************************************************************
function clearAllEventListeners() {
    squares.forEach((square) => square.removeEventListener('mouseenter', paintRandom));
    squares.forEach((square) => square.removeEventListener('mouseenter', paintWhite));
    squares.forEach((square) => square.removeEventListener('mouseenter', paintShade));
    squares.forEach((square) => square.removeEventListener('mouseenter', paintBlack));
}


