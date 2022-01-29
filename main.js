const computer = document.getElementById("computer");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const loader = document.getElementById("loading");
const play = document.getElementById("score-display");
const playDisplay = document.getElementById('play');
let scoreDisplay = document.getElementById("score");
let playerButtons  = [rock,paper,scissors];

loader.addEventListener('animationend', () => {
    gameOver();
})

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        playerPlay(button.id);
    })
})

let gameScore = 0;
let computerPick = '';



play.addEventListener('click', game);



function game(){
    scoreDisplay.classList.toggle('hidden');
    playDisplay.classList.toggle('hidden');
    play.removeEventListener('click', game);
    computerPick = computerPlay();
}

function gameOver() {
    loader.className = '';
    gameScore = 0;
    computerPick = '';
    playDisplay.textContent = 'Game Over!';
    playDisplay.classList.toggle('hidden');
    play.addEventListener('click', reset);

}

function showPaper(){
    computer.className = '';
    computer.classList.toggle("computerPaper");
}

function showRock() {
    computer.className = '';
    computer.classList.toggle("computerRock");
}

function showScissors() {
    computer.className = '';
    computer.classList.toggle("computerScissors");
}

function score() {
    gameScore++;
    scoreDisplay.textContent = String(gameScore);
    computerPick = computerPlay(computerPick);
}

function load() {
    loader.className = '';
    const speedArray = ['load2s','load1s','loads'];
    let speed = 0;
    if(gameScore > 10) speed++;
    if(gameScore > 20) speed++;
    setTimeout(function() {
        loader.classList.toggle(speedArray[speed]);
    },50);

}

function reset() {
    playDisplay.textContent = 'Play!';
    scoreDisplay.classList.toggle('hidden');
    scoreDisplay.textContent = '0';
    play.removeEventListener('click', reset);
    play.addEventListener('click', game);
}
function computerPlay(prev = '') {
    let array = ['rock','paper','scissors'].filter(word => word !== prev);
    let random = Math.floor(Math.random() * (array.length));
    let play = array[random];
  
    switch(play) {
        case 'rock':
            showRock();
            break;
        case 'paper':
            showPaper();
            break;
        case 'scissors':
            showScissors();
            break;
    }
    load();
    return play;
}

function playerPlay(pick) {
    switch(computerPick) {
        case 'rock':
            if (pick == 'paper') {
                score();
            } else {
                gameOver();
            }
            break;
        case 'paper':
            if (pick == 'scissors') {
                score();
            } else {
                gameOver();
            }
            break;
        case 'scissors':
            if (pick == 'rock') {
                score();
            } else {
                gameOver();
            }
            break;
    }
}




