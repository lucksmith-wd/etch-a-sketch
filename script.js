
const mainContainer = document.querySelector('.main-container');



for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    mainContainer.appendChild(row);
    createColumns(row);
}

function createColumns(row) {
    for (let i = 0; i < 16; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}


