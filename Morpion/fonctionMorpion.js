document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const status = document.getElementById("status");

  let currentPlayer = "X";
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  function renderBoard() {
    board.innerHTML = "";
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = i;
      cell.textContent = gameBoard[i];
      cell.addEventListener("click", handleCellClick);
      board.appendChild(cell);
    }
  }
  function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (gameBoard[index] === "") {
      gameBoard[index] = currentPlayer;
      renderBoard();
      if (checkWinner()) {
        status.textContent = `Le joueur ${currentPlayer} a gagné !`;
      } else if (gameBoard.every((cell) => cell !== "")) {
        status.textContent = "Match nul !";
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = `C'est au tour du joueur ${currentPlayer}`;
      }
    }
  }

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winPatterns.some((pattern) => {
      const [a, b, c] = pattern;
      return (
        gameBoard[a] !== "" &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[b] === gameBoard[c]
      );
    });
  }

  renderBoard();
});
if (checkWinner()) {
  alert(`Le joueur ${currentPlayer} a gagné !`);
  endGame();
} else if (isBoardFull()) {
  alert("Match nul !");
  endGame();
} else {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  endGame();
}
function handleCellClick(e) {
  if (!gameActive) return; // Si le jeu est terminé, ignore les clics

  const cell = e.target;
  if (cell.textContent !== "") return; // Si la cellule est déjà remplie, ignore le clic
  cell.textContent = currentPlayer;
}
function endGame() {
  gameActive = false;
  cells.forEach((cell) => {
    cell.removeEventListener("click", handleCellClick);
  });
}
