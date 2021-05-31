// Create function computerPlay() to randomly return "Rock", "Paper" or "Scissors".
function computerPlay() {
    // Assigns a variable to have an equal chance of being either 0, 1 or 2.
    const randomNumber = Math.floor(Math.random() * 3);
    
    // If randomNumber variable equals 0, 1, or 2, return "Rock", "Paper", or 
    // "Scissors" respectively. Else, alert error message: "Something went wrong!".
    if (randomNumber === 0) {
        return("Rock");
    } else if (randomNumber === 1) {
        return("Paper");
    } else if (randomNumber === 2) {
        return("Scissors");
    } else {
        alert("Something went wrong!");
    }
}

// Create function playerPlay() which receives user's choice of "Rock", "Paper", or 
// "Scissors" and returns it.
function playerPlay() {
    // Assigns user input after prompt to the "userInput" variable.
    let userInput = prompt("Rock Paper Scissors?");
    
    // If userInput has a value of null (user cancelled prompt, pressed ESC, etc.), 
    // returns undefined. Else return "Rock", "Paper", "Scissors", or "Other" in 
    // accordance with the user's input.
    if (userInput === null) {
        return;
    } else if (userInput.toUpperCase() == "ROCK") {
        return("Rock");
    } else if (userInput.toUpperCase() == "PAPER") {
        return("Paper");
    } else if (userInput.toUpperCase() == "SCISSORS") {
        return("Scissors");
    } else {
        return("Other");
    }
}

// Create function gameRound() that receives the player's and computer's selections
// and returns a statement describing the outcome of the round.
function gameRound(playerSelection, computerSelection) {
    // Returns a statement describing the outcome of the player's and computer's
    // selections (i.e. mentions whether the round ended in a tie, win or loss).
    if (playerSelection === undefined) {
        return("You decided not to play.");
        
    } else if (playerSelection == "Other") {
        return("Please pick either Rock, Paper, or Scissors.");

    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return("It's a tie! You both chose Rock.");

    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return("You lose! Paper beats Rock.");

    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return("You win! Rock beats Scissors.");

    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return("You win! Paper beats Rock.");

    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return("It's a tie! You both chose Paper.");

    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return("You lose! Scissors beats Paper.");
    
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return("You lose! Rock beats Scissors.");
    
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return("You win! Scissors beats Paper.");

    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return("It's a tie! You both chose Scissors.");
    }
}

// Create constants and assign playerPlay and computerPlay functions to them.
const playerSelection = playerPlay();
const computerSelection = computerPlay();

// Outputs game information to the console.
console.log(gameRound(playerSelection, computerSelection));