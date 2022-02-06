// Matelda Sweis
// Hermis Project
// Tic Tac Toe Board

//initialize board and constants:
const tiles = document.querySelectorAll(".tile");
const board = Array(tiles.length);
board.fill(null);
let turn = 'X';
let win = false;
let counter = 0;
let tie = false;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

  tiles.forEach( (tile)=> { tile.addEventListener("click", addMove) } );

  function addMove(event) {
    if (win || tie) {
      gameReset();
    }
    document.getElementById("gameOver").style.display = 'none';
    const tile = event.target;
    const tileIndex = tile.dataset.index;
    if (tile.innerText != "") return;

    if (turn === 'X') { //player 1's Turn
      document.getElementById("playerTurn").innerHTML = "Player 2's turn";
      piece = 'X';
      tile.innerText = piece;
      board[tileIndex] = piece;
      counter +=1;
      turn = 'O';
    }
    else {
      document.getElementById("playerTurn").innerHTML = "Player 1's turn";
      piece = 'O';
      tile.innerText = piece;
      board[tileIndex] = piece;
      counter +=1;
      turn = 'X';
    }

    tie = checkBoard();
    win = checkWin();
}


  function checkBoard() { //checks for a tie
        if (counter >= 9) {
        console.log("tie detected");
        document.getElementById("gameOver").innerText = "It's a tie! Click to play again.";
        document.getElementById("gameOver").style.display = 'block';
        document.getElementById("playerTurn").style.display = 'none';
        return true;
  }
  return false;
}

  function checkWin() {
    for (let i=0; i<8; i++) {
      const winCondition = winConditions[i];
      if (board[winCondition[0]] === 'X' &&  board[winCondition[1]] === 'X' && board[winCondition[2]] === 'X') {
        console.log("Player 1 wins!");
        document.getElementById("gameOver").innerText = "Player 1 Wins! Click to play again.";
        document.getElementById("gameOver").style.display = 'block';
        document.getElementById("playerTurn").style.display = 'none';
        return true;
      }

      else if (board[winCondition[0]] === 'O' &&  board[winCondition[1]] === 'O' && board[winCondition[2]] === 'O') {
        console.log("Player 2 wins!");
        document.getElementById("gameOver").innerText = "Player 2 Wins! Click to play again.";
        document.getElementById("gameOver").style.display = 'block';
        document.getElementById("playerTurn").style.display = 'none';
        return true;
      }
    }
    return false;
  }
  function gameReset() {
    board.fill(null);
    turn = 'X';
    win = false;
    counter = 0;
    let tie = false;
    tiles.forEach( (tile) => {tile.innerText = ""; });
    document.getElementById("playerTurn").innerHTML = "Player 1's turn";
  }
