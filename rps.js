// initialize players' scor
let userScore = 0;
let computerScore = 0;

let noOfRounds = 0;

// References to DOM nodes to be manipulated/created;

const roundDisplay = document.createElement('span');
const header = document.querySelector('.intro-container');
const userOptions = document.querySelector('.selection-container')
const userScoreDisplay = document.querySelector('.user-score-display');
const userChoiceDisplay = document.querySelector('.choice-display.user');
const computerChoiceDisplay = document.querySelector('.choice-display.computer');
const userChoiceValue = document.createElement('span');
const computerChoiceValue = document.createElement('span');


roundDisplay.textContent = `Round ${noOfRounds}`;
header.appendChild(roundDisplay);
userChoiceDisplay.appendChild(userChoiceValue);
computerChoiceDisplay.appendChild(computerChoiceValue);

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
            noOfRounds += 1;
            roundDisplay.textContent = `Round ${noOfRounds}`;

            userChoice = button.id;
            const computerChoice = getComputerChoice();
            userChoiceValue.textContent = ` ${userChoice}`;
            computerChoiceValue.textContent = ` ${computerChoice}`;
            getWinner(userChoice, computerChoice);
            userScoreDisplay.textContent = `${userScore}`;
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

getUserChoice();