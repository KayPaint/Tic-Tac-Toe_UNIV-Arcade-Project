// tic tac toe

// As users playing a two player game we want to:
// enter our names and have them displayed
// have our order chosen for us by the game
// take turns placing our marks in empty spaces
// not be able to place our marks in an occupied space
// be told when a move causes a player to win, or to draw
// start the game over without having to reset the browser


// As a user playing a one player game I want to:
// see the name 'Computer' displayed as my opponent
// have the Computer player make moves as if it were a human player with the correct mark in an empty space 

// user selects PVE or PVP, choice is stored in variable
// if user selects PVE, prompt player to enter their name
    // user name replaces Player 1
    // "Computer" replaces Player 2
// if user selects PVP, prompt player to enter their names
    // user enters first name and presses Enter Name, updating Player 1
    // user enters second name and presses Enter Name, updating Player 2
// If player count, player names entered correctly, on start button click, run game function

const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

