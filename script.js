const squares = document.querySelectorAll('.square');
const board = document.querySelector('.board');

class Game {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
  }

  handleClick(event) {
    const square = event.target;
    const position = square?.id;
    if (position && !this.isClicked(square)) {
      square.innerHTML = this.currentPlayer;
      square.classList.add(this.currentPlayer === 'X' ? 'cross' : 'circle');
      this.togglePlayer()
    }
  }

  togglePlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  isClicked(square) {
    return square.innerHTML !== '';
  }

  checkWinner() {

  }
}

const game = new Game();

board.addEventListener('click', game.handleClick.bind(game));