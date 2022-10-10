class Game {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
    this.htmlSquares = document.querySelectorAll('.square');
    this.htmlBoard = document.querySelector('.board');
    this.htmlTurn = document.getElementById('turn');
    this.htmlReset = document.getElementById('reset');
    this.endGameModal = document.getElementById('myModal');
    this.modalWinnerText = document.getElementById('winner');
    this.modalNextRoundButton = document.getElementById('next-round-btn');
    this.closeModalButton = document.getElementsByClassName('close')[0];
    this.clickHandler = this.handleClick.bind(this);
    this.resetHandler = this.reset.bind(this);
    this.closeModalHandler = this.closeModal.bind(this);
    this.htmlBoard.addEventListener('click', this.clickHandler);
    this.htmlReset.addEventListener('click', this.resetHandler);
    this.modalNextRoundButton.addEventListener('click', this.resetHandler);
    this.modalNextRoundButton.addEventListener('click', this.closeModalHandler);
    this.closeModalButton.addEventListener('click', this.closeModalHandler);
    this.htmlTurn.innerHTML = this.currentPlayer;
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
      this.htmlTurn.innerHTML = this.currentPlayer;
    }
  }

  closeModal() {
    this.endGameModal.style.display = 'none';
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
    this.modalWinnerText.innerHTML = this.currentPlayer;
    this.endGameModal.style.display = 'block';
  }

  checkWinner() {
    const winner =
      this.checkRows() || this.checkColumns() || this.checkDiagonals();
    if (winner) {
      this.showWinner(winner);
    }
  }

  reset() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
    this.htmlSquares.forEach((square) => {
      square.innerHTML = '';
      square.classList.remove(
        'cross',
        'circle',
        'cross-winner',
        'circle-winner'
      );
    });
    this.htmlBoard.addEventListener('click', this.clickHandler);
  }
}

const game = new Game();

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
