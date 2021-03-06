// computerPlay() function randomly picks between three options to decide the
// computer's choice.
function computerPlay() {
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return("Rock");
        case 2:
            return("Paper");
        case 3:
            return("Scissors");
    }
}

// playRound(player, computer) function takes the player's input and computer's
// input, compares them to each other, then returns a result based on the rules
// of "Rock Paper Scissors".
function playRound(player, computer) {

    if (player === null) {
        console.log("You decided not to play.");
        return("exit");
    }

    if (player.toUpperCase() == "ROCK") {
        switch (computer) {
            case "Rock":
                console.log("Tie! You both picked rock.");
                return("tie");
            case "Paper":
                console.log("You lose! Paper beats rock.");
                return("lose");
            case "Scissors":
                console.log("You win! Rock beats scissors.");
                return("win");
        }
    } else if (player.toUpperCase() == "PAPER") {
        switch (computer) {
            case "Rock":
                console.log("You win! Paper beats rock.");
                return("win");
            case "Paper":
                console.log("Tie! You both picked paper.");
                return("tie");
            case "Scissors":
                console.log("You lose! Scissors beats paper.");
                return("lose");
        }
    } else if (player.toUpperCase() == "SCISSORS") {
        switch (computer) {
            case "Rock":
                console.log("You lose! Rock beats scissors.");
                return("lose");
            case "Paper":
                console.log("You win! Scissors beats paper.");
                return("win");
            case "Scissors":
                console.log("Tie! You both picked scissors.");
                return("tie");
        }
    } else {
        console.log("Please type only rock, paper, or scissors.");
        return("other");
    }
    
}

// game() function plays 5 rounds of "Rock Paper Scissors", after each round
// returning the current round number, player score and computer score. Once
// the 5 rounds have ended, returns a final message based on whether the player
// has a higher, lower, or the same score as the computer.
function game() {

    let roundNumber = 0;
    let playerScore = 0;
    let computerScore = 0;

    alert("\t ROCK PAPER SCISSORS \n Use your browser console to play!");

    for (roundNumber = 1; roundNumber <= 5; roundNumber++) {
        console.log(`Round ${roundNumber}`);
        switch (beginRound()) {
            case "exit":
            case "other":
                console.log("Refresh the page to play again.");
                return;
            case "win":
                playerScore++;
                console.log(`Your score: ${playerScore}`);
                console.log(`Computer's score: ${computerScore}`);
                break;
            case "lose":
                computerScore++;
                console.log(`Your score: ${playerScore}`);
                console.log(`Computer's score: ${computerScore}`);
                break;
            case "tie":
                console.log(`Your score: ${playerScore}`);
                console.log(`Computer's score: ${computerScore}`);
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log("Well done! You beat the computer.");
    } else if (playerScore == computerScore) {
        console.log("Neither you nor the computer won.");
    } else if (playerScore < computerScore) {
        console.log("Tough luck! The computer beat you.");
    }

}

// beginRound() function takes the player's input and computer's input and
// outputs them into the playRound() function.
function beginRound() {
    let playerSelection = prompt("Rock Paper Scissors?");
    let computerSelection = computerPlay();
    return(playRound(playerSelection, computerSelection));
}

// Runs game() function to begin the game.
game();