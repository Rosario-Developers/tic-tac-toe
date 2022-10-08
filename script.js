const squares = document.querySelectorAll('.square');
const board = document.querySelector('.game');

const handleClick = (event) => {
  const square = event.target;
  square.innerHTML = 'X';
  console.log(square);
};

board.addEventListener('click', handleClick);

const X = 'X';
const O = 'O';

// squares.forEach((square) => {
//   square.addEventListener('click', handleClick);
// });

class Board {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.token = 'x';
  }

  // handleClick(event) {}
}
