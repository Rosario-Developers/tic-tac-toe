const squares = document.querySelectorAll('.square');
const board = document.querySelector('.board');
const turn = document.getElementById('turn');

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
    const [positionX, positionY] = square?.id.split('');
    if (positionX && !this.isClicked(square)) {
      square.innerHTML = this.currentPlayer;
      square.classList.add(this.currentPlayer === 'X' ? 'cross' : 'circle');
      this.board[positionX][positionY] = this.currentPlayer;
      this.checkWinner();
      this.togglePlayer();
    }
  }

  togglePlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  isClicked(square) {
    return square.innerHTML;
  }

  checkRows() {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][0]
      ) {
        return true;
      }
    }
    return false;
  }

  checkColumns() {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i] &&
        this.board[0][i]
      ) {
        return true;
      }
    }
    return false;
  }

  checkDiagonals() {
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0]
    ) {
      return true;
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] &&
      this.board[0][2] !== ''
    ) {
      return true;
    }
    return false;
  }

  showWinner() {
    alert(`${this.currentPlayer} Wins!`);
  }

  checkWinner() {
    const winner =
      this.checkRows() || this.checkColumns() || this.checkDiagonals();
    if (winner) {
      this.showWinner(winner);
    }
  }
}

const game = new Game();

board.addEventListener('click', game.handleClick.bind(game));
turn.innerHTML = `${game.currentPlayer} turn`;
