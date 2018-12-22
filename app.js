let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");




function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function converToWorld(letter) {

    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${converToWorld(userChoice)}  beats  ${converToWorld(computerChoice)}. You Win!`;


}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = result_p.innerHTML = `${converToWorld(userChoice)}  loses to  ${converToWorld(computerChoice)}. You Lose!`;

}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = result_p.innerHTML = `${converToWorld(userChoice)}  &  ${converToWorld(computerChoice)}. Hit a stalemate!`;

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':

            win(userChoice, computerChoice);
            break;
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'pr':
            win(userChoice, computerChoice);
            break;

        case 'rp':
            lose(userChoice, computerChoice);
            break;
        case 'ps':
            lose(userChoice, computerChoice);
            break;
        case 'sr':
            lose(userChoice, computerChoice);
            break;

        default:
            draw(userChoice, computerChoice);
    }
}

function main() {
    paper_div.addEventListener('click', function() {
        game("p");
    })
    rock_div.addEventListener('click', function() {
        game("r");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}



main();