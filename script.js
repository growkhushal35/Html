const boardSize = 10;
const board = document.querySelector('.board');

function createBoard() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            board.appendChild(cell);
        }
    }
}

createBoard();

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        // Implement your game logic based on the clicked cell (row, col)
        console.log(`Clicked cell at Row: ${row}, Col: ${col}`);
    });
});
