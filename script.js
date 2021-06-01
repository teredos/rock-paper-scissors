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

function playRound(player, computer) {

    if (player === null) {
        return("You decided not to play.");
    }

    if (player.toUpperCase() == "ROCK") {
        switch (computer) {
            case "Rock":
                return("Tie! You both picked rock.");
            case "Paper":
                return("You lose! Paper beats rock.");
            case "Scissors":
                return("You win! Rock beats scissors.");
        }
    } else if (player.toUpperCase() == "PAPER") {
        switch (computer) {
            case "Rock":
                return("You win! Paper beats rock.");
            case "Paper":
                return("Tie! You both picked paper.");
            case "Scissors":
                return("You lose! Scissors beats paper.");
        }
    } else if (player.toUpperCase() == "SCISSORS") {
        switch (computer) {
            case "Rock":
                return("You lose! Rock beats scissors.");
            case "Paper":
                return("You win! Scissors beats paper.");
            case "Scissors":
                return("Tie! You both picked scissors.");
        }
    } else {
        return("Please type only rock, paper, or scissors.");
    }
    
}

let playerSelection;
const computerSelection = computerPlay();

function beginRound() {
    playerSelection = prompt("Rock Paper Scissors?");
    console.log(playRound(playerSelection, computerSelection));
}

beginRound();