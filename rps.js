// initialize players' scor
let userScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const computerNumeriChoice = Math.floor(Math.random() * 4);
    let computerTextChoice;

    switch (computerNumeriChoice) {
        case 1:
            computerTextChoice = 'rock';
            break;
        case 2:
            computerTextChoice = 'paper';
            break;
        default:
            computerTextChoice = 'scissors';
    }
    return computerTextChoice;
}

let userChoice;
function getUserChoice () {
    const buttons = document.querySelectorAll('.player-arena button')

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userChoice = button.id;
        })
    })
}

function getWinner (userChoice, computerChoice) {
    const userWinningCondition = 
                        ((userChoice === 'rock' && computerChoice === 'scissors') ||
                        (userChoice === 'scissors' && computerChoice === 'paper') ||
                        (userChoice === 'paper' && computerChoice === 'rock'));
    if (userChoice === computerChoice) {

    }
    else if (userWinningCondition) {
        userScore += 1;
    } else {
        computerScore +=  1;
    }

}