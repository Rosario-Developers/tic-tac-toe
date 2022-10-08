const squares = document.querySelectorAll('.square');
const board = document.querySelector('.game');

const handleClick = (event) => {
  const square = event.target;
  const position = square?.id;
  if (position) {
    square.innerHTML = 'X';
  }
};

board.addEventListener('click', handleClick);

const X = 'X';
const O = 'O';

class Game {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.token = 'x';
  }

  handleClick(event) {
    const square = event.target;
    const position = square?.id;
    if (position) {
      square.innerHTML = 'X';
    }
  }
}

const game = new Game();
