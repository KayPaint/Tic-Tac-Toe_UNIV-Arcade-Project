// Tic-Tac-Toe

// As users playing a two player game we want to:
// [Y] enter our names and have them displayed
// [] have our order chosen for us by the game
// [] take turns placing our marks in empty spaces
// [] not be able to place our marks in an occupied space
// [] be told when a move causes a player to win, or to draw
// [] start the game over without having to reset the browser

// As a user playing a one player game I want to:
// [Y] see the name 'Computer' displayed as my opponent
// [] have the Computer player make moves as if it were a human player with the correct mark in an empty space 

// What are the winning positions
    // // Board
    // [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    // ]
    // // 3 Horizontal
    //     [0, 1, 2] // Win
    //     [3, 4, 5] // Win
    //     [4, 5, 6] // Win
    // // 3 Vertical
    //     [0, 3, 6] // Win
    //     [1, 4, 7] // Win
    //     [2, 5, 8] // Win
    // // 2 Diagonal
    //     [0, 4, 8] // Win
    //     [2, 4, 6] // Win


// Gameplay Flow
    // User selects 1 player or 2 players
    // User(s) enter names
    // User clicks "Start Game"
    // buildInitialState runs

    // Player X always starts first  

    // Player 1 "X" clicks a square, adding X to that square
    // function checks for any win situations, otherwise change turn

    // Player 2 "O" clicks a square, adding O to that square
    // function checks for any win situations, otherwise change turn

    // This continues
    // Upon win condition, display alert telling who won

    // "Reset Game" resets to initialState

// ********** DOM SELECTORS **********

let playerVSComputer = document.getElementById("player-vs-computer");
let playerVSPlayer = document.getElementById("player-vs-player");
let playerTwoNameDiv = document.getElementById("playertwo-name-div");
let playerTwoNameStatus = document.getElementById("playertwo-name-status");
let playerOneName = document.getElementById("playerone-name-status");
let playerOneInput = document.getElementById("name-one-input");
let playerTwoName = document.getElementById("playertwo-name-status");
let playerTwoInput = document.getElementById("name-two-input");
let cellDiv = document.getElementById("cell-div");

// ********** STATE **********

let state = {};

// Function builds initial game state
function buildInitialState() {
    
    state.players = ['X', 'O'];

    // Initially, currentPlayer set to 0, AKA "X"
    state.currentPlayer = 0;

    // Initial board
    state.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
}



// (State -> HTML)
// Reads state object
// Writes/modifies HTML
function renderState() {

// This loop creates the div cells for the game
    for (let i = 0; i < 9; i++) {
        const cellElement = document.createElement("div");
        cellDiv.appendChild(cellElement);
        cellElement.setAttribute('id', [i]);
        cellElement.classList.add("cell");
    }

}

// (User Input -> State)
// Reads HTML
// Writes/modifies State
// After modification trigger render
function onBoardClick() {
    cellDiv.addEventListener('click', function (event) {
        if (event.target.className !== "cell") {
            return;
        }
        event.target.innerText = "X";
    });
}



// ********** HELPER FUNCTIONS **********

// This function hides the option to input a second name
function onePlayer() {
    // When the radio button "Player VS Computer" is clicked, run this function

    // If the user has selected Player VS Player
    if (playerVSPlayer.checked = true) {
        // Set Player VS Player.checked to false
        playerVSPlayer.checked = false;
        // Set Player VS Computer.checked to true
        playerVSComputer.checked = true;
    }

    // Next, if Player VS Computer.checked is true
    if (playerVSComputer.checked = true) {
        // Hide visibility of the second name input
        playerTwoNameDiv.style.visibility = 'hidden';
        // Change second name status to "Computer"
        playerTwoNameStatus.innerText = "Computer" + " " + ": X";
    } 
}

// This function negates the action by function onePlayer
function twoPlayer() {
    // When the radio button "Player VS Player" is clicked, run this function

    // If the user has selected Player VS Computer
    if (playerVSComputer.checked = true) {
        // Set Player VS Computer.checked to false
        playerVSComputer.checked = false;
        // Set Player VS Player.checked to true
        playerVSPlayer.checked = true;
    }

    // Next, if Player VS Player is checked
    if (playerVSPlayer.checked = true) {
        // Show visibility of the second name input
        playerTwoNameDiv.style.visibility = 'visible';
        // Reset second name status to two player
        playerTwoNameStatus.innerText = "Player 2: O";
    } 
}

// This function updates the player one name
function updateNameOne() {
    // Updating innerText with input value
    playerOneName.innerText = playerOneInput.value + " " + ": X";
}

// This function updates the player two name
function updateNameTwo() {
    // Updating innerText with input value
    playerTwoName.innerText = playerTwoInput.value + " " + ": O";
}

// This function switches turns between players
function swapTurns() {
    // currentPlayer initializes at 0, AKA player "X"

    // If currentPlayer is 0, set it to 1
    // If currentPlayer is 1, set it to 0
    if (state.currentPlayer === 0) {
        return state.currentPlayer += 1;
    } else if (state.currentPlayer === 1) {
        return state.currentPlayer -= 1;
    }
}

buildInitialState()
renderState()
onBoardClick()

console.log(state.board)
console.log(state.board[0])
console.log(state.board[0][0])
console.log(state.board[1][1])
