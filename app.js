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

// ********** NUMBER OF PLAYERS SELECTION **********

// This function hides the option to input a second name
function onePlayer() {
    // When the radio button "Player VS Computer" is clicked, run this function

    // Assigning relevant HTML elements as variables
    let playerVSComputer = document.getElementById("player-vs-computer");
    let playerVSPlayer = document.getElementById("player-vs-player");
    let playerTwoNameDiv = document.getElementById("playertwo-name-div");
    let playerTwoNameStatus = document.getElementById("playertwo-name-status");

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

    // Assigning relevant HTML elements as variables
    let playerVSComputer = document.getElementById("player-vs-computer");
    let playerVSPlayer = document.getElementById("player-vs-player");
    let playerTwoNameDiv = document.getElementById("playertwo-name-div");
    let playerTwoNameStatus = document.getElementById("playertwo-name-status");

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

// ********** UPDATING PLAYER NAMES **********

function updateNameOne() {
    let playerOneName = document.getElementById("playerone-name-status");
    let playerOneInput = document.getElementById("name-one-input");

    playerOneName.innerText = playerOneInput.value + " " + ": X";

}

function updateNameTwo() {
    let playerTwoName = document.getElementById("playertwo-name-status");
    let playerTwoInput = document.getElementById("name-two-input");

    playerTwoName.innerText = playerTwoInput.value + " " + ": O";
}

// **********  **********

// const gameState = {
//     players: ['x', 'o'],
//     board: [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ]
//   }