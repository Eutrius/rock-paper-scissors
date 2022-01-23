const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const input = ["rock","paper","scissors"];
let score = {
    player: 0,
    computer: 0
}
let round = 1;

function computerPlay() {
    let random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch(random) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    } 
}

function playerPlay() {
    let playerSelection  = prompt("Rock-Paper-Scissors --------- Round " + round);
    if (input.includes(playerSelection.toLowerCase())) {
        return playerSelection;
    }
    console.log("Invalid Input.");
    return playerPlay();
}

function win(winner,loser) {
    console.log("You Win! " + winner + " beats " + loser);
    score.player += 1;
}

function lose(winner,loser) {
    console.log("You Lose! " + winner + " beats " + loser);
    score.computer += 1;
}

function showScore() {
    console.log(`Score: You - ${score.player} Computer - ${score.computer}`)
}


function playRound(playerSelection, computerSelection ) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    console.log ("You played " + playerSelection);
    console.log("Computer Played " + computerSelection);
    if (player == computer) {
        console.log("It's a Draw!")
        round--;
        return;
    }
    switch(player) {
        case "rock":
            if (computer == "paper") {
                lose(paper,rock);
            } else {
                win(rock,scissors);
            }
            return null;
        case "paper":
            if (computer == "scissors") {
                lose(scissors,paper);
            } else {
                win(paper,rock);
            }
            return null;
        case "scissors":
            if (computer == "rock") {
                lose(rock,scissors);
            } else {
                win(scissors,paper);
            }
            return null;
    }
}

function reset() {
    score.player = 0;
    score.computer = 0;
    round = 1;
    console.clear();
    game();
}

function game(){
    console.log("Welcome to the game of Rock-Paper-Scissors");
    while(round <= 5) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        console.clear();
        console.log("Welcome to the game of Rock-Paper-Scissors");
        playRound(playerSelection,computerSelection);
        showScore();
        round++;
    }
    if(score.player > score.computer) {
        console.log("Congratulation You Won!")
    } else {
        console.log("Better luck next time!")
    }

    let tryagain = prompt("Do You want to Play again?", "y/n");
    if (tryagain == "y") {
        reset();
    } else {
        console.clear();
        console.log("Thank you for Playing!")
    }
};


window.onload = function() {
    game();
}