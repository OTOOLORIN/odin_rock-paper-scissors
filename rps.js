// initialize players' scor
let userScore = 0;
let computerScore = 0;

let noOfRounds = 0;

// References to DOM nodes to be manipulated/created;

const roundDisplay = document.createElement('span');
const header = document.querySelector('.intro-container');
const computerArena = document.querySelector('.arena.computer')
const userOptions = document.querySelector('.selection-container')
const userScoreDisplay = document.querySelector('.score-display.user');
const computerScoreDisplay = document.querySelector('.score-display.computer');
const userChoiceDisplay = document.querySelector('.choice-display.user');
const computerChoiceDisplay = document.querySelector('.choice-display.computer');
const userChoiceValue = document.createElement('span');
const computerChoiceValue = document.createElement('span');


roundDisplay.textContent = `Round ${noOfRounds}`;
header.appendChild(roundDisplay);
userChoiceDisplay.appendChild(userChoiceValue);
computerChoiceDisplay.appendChild(computerChoiceValue);

function getComputerChoice () {
    const computerNumeriChoice = Math.floor(Math.random() * 3) + 1;
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

    userScoreDisplay.textContent = `${userScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
}

userOptions.addEventListener('click', (event) => {
    const button = event.target;
    const userChoice = button.id;
    if (!userChoice) {
        return;
    }
    console.log(userChoice)

    noOfRounds += 1;
    roundDisplay.textContent = `Round ${noOfRounds}`;

    const computerChoice = getComputerChoice();
    userChoiceValue.textContent = ` ${userChoice}`;
    computerChoiceValue.textContent = ` ${computerChoice}`;
    getWinner(userChoice, computerChoice);
})
