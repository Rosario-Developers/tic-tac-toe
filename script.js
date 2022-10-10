const squares = document.querySelectorAll('.square');
const board = document.querySelector('.board');
const turn = document.getElementById('turn');

class Game {
  /**
   * @param {HTMLElement[]} htmlSquares
   * @param {HTMLElement} htmlBoard
   */
  constructor(htmlSquares, htmlBoard) {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
    this.htmlSquares = htmlSquares;
    this.htmlBoard = htmlBoard;
    this.clickHandler = this.handleClick.bind(this);
    this.htmlBoard.addEventListener('click', this.clickHandler);
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
        return [`${i}0`, `${i}1`, `${i}2`];
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
        return [`0${i}`, `1${i}`, `2${i}`];
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
      return ['00', '11', '22'];
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] &&
      this.board[0][2]
    ) {
      return ['02', '11', '20'];
    }
    return false;
  }

  showWinner(winner) {
    this.htmlBoard.removeEventListener('click', this.clickHandler);
    this.htmlSquares.forEach((square) => {
      const id = square.id;
      const player = this.currentPlayer === 'X' ? 'cross' : 'circle';
      if (winner.includes(id)) {
        square.classList.add(`${player}-winner`);
      }
    });
  }

  checkWinner() {
    const winner =
      this.checkRows() || this.checkColumns() || this.checkDiagonals();
    if (winner) {
      this.showWinner(winner);
    }
  }
}

const game = new Game(squares, board);

turn.innerHTML = `${game.currentPlayer} turn`;

var modal = document.getElementById('myModal');
var openModalButton = document.getElementById('myBtn');
var closeModalButton = document.getElementsByClassName('close')[0];

openModalButton.onclick = () => {
  modal.style.display = 'block';
};

closeModalButton.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
